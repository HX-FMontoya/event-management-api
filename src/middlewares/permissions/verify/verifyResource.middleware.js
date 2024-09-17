module.exports = (service, resourceName) => {
  return async (req, res, next) => {
    const { [resourceName + "_id"]: resourceId } = req.body;
    const resource = await service.getById(resourceId);

    if (!resource) {
      return res
        .status(404)
        .json({
          message: `${
            resourceName.charAt(0).toUpperCase() + resourceName.slice(1)
          } not found`,
        });
    }

    req[resourceName] = resource;
    next();
  };
};
