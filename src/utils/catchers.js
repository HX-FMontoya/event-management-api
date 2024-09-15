module.exports = {
  catcherController: (cb) => {
    return async (req, res, next) => {
      try {
        await cb(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  },
  genericCatcher: (cb) => {
    return async (...args) => {
      try {
        return await cb(...args);
      } catch (error) {
        console.error(`Error in function: ${error.message}`);
        throw error;
      }
    };
  },
};
