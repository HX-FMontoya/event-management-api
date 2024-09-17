const multer = require("multer");

const upload = multer({ dest: "data/uploads/" });

module.exports = upload.single("file");
