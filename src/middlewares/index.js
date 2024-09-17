module.exports = {
  errorHandler: require("./core/errorHandler.middleware.js"),
  core: require("./core/core.middleware.js"),
  validations: require("./validations"),
  auth: require("./auth/auth.middleware.js"),
  verifyAdmin: require("./permissions/verify/verifyAdmin.middleware.js"),
  verifyOrganizer: require("./permissions/verify/verifyOrganizer.middleware"),
  verifyAdminOrOrganizer: require("./permissions/verify/verifyAdminOrOrganizer.middleware"),
  checkPermission: require("./permissions/checkPermission.middleware.js"),
  checkToken: require("./auth/checkToken.middleware.js"),
  verifyWhoModifiesEvent: require("./permissions/verify/whoModify/verifyWhoModifiesEvent.middleware.js"),
  verifyWhoModifiesUser: require("./permissions/verify/whoModify/verifyWhoModifiesUser.middleware.js"),
  verifyWhoModifiesAssistant: require("./permissions/verify/whoModify/verifyWhoModifiesAssistant.middleware.js"),
  validateDaysForReservation: require("./validations/reservation/validateDaysForReservation.middleware.js"),
  verifyResource: require("./permissions/verify/verifyResource.middleware.js"),
  upload: require("./events/upload.middleware.js")
};
