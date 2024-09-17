const { eventsService, usersService } = require("../services");
const { catcherController } = require("../utils/catchers");
const xlsx = require("xlsx");

module.exports = {
  getAll: catcherController(async (req, res) => {
    const events = await eventsService.getAll();
    res.status(200).json(events);
  }),
  getById: catcherController(async (req, res) => {
    const { id } = req.params;
    const event = await eventsService.getById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  }),
  create: catcherController(async (req, res) => {
    const eventData = req.body;
    const { id } = req.user;
    const newEvent = await eventsService.create({
      ...eventData,
      created_by: id,
    });
    res.status(201).json(newEvent);
  }),
  upload: catcherController(async (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    for (const row of data) {
      const {
        event_title,
        description,
        start_date,
        end_date,
        status,
        location_name,
        location_address,
        city,
        latitude,
        longitude,
        created_by_name,
        created_by_email,
        created_by_role,
        ticket_type,
        price,
        enabled_days,
      } = row;

      let user = await usersService.findByEmail(created_by_email);
      if (!user) {
        user = await usersService.create({
          name: created_by_name,
          email: created_by_email,
          role: created_by_role,
          status: "active",
        });
      }

      const enabledDays = row.enabled_days.replace(/[{}"]/g, "").split(",");

      await eventsService.create({
        title: event_title,
        description,
        start_date,
        end_date,
        status,
        location: {
          name: location_name,
          address: location_address,
          city,
        },
        created_by: user.id,
        ticket_type,
        price,
        enabled_days: enabledDays,
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Events created successfully" });
  }),
  update: catcherController(async (req, res) => {
    const { id } = req.params;
    const eventData = req.body;
    const { id: idUser } = req.user;
    const updatedEvent = await eventsService.update(id, {
      ...eventData,
      created_by: idUser,
    });
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  }),
  deleteById: catcherController(async (req, res) => {
    const { id } = req.params;
    const deletedEvent = await eventsService.deleteById(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted", data: deletedEvent });
  }),
};
