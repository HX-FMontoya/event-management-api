const { reservationsService } = require("../services");
const { catcherController } = require("../utils/catchers");

module.exports = {
  create: catcherController(async (req, res) => {
    const reservationData = req.body;
    const { id } = req.user;
    const newReservation = await reservationsService.create({
      ...reservationData,
      user_id: id,
    });
    res.status(201).json(newReservation);
  }),
};
