const { authService } = require("../../services");

module.exports = (req, res, next) => {
  const token = authService.extractToken(req);

  if (!token) {
    next();
  } else {
    try {
      const decoded = authService.verifyToken(token);
      req.user = decoded;
      if (decoded.role === "user" || decoded.role === "organizer") {
        return res.status(401).json({ message: "Unauthorized." });
      } else {
        next();
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
    }
  }
};
