module.exports = (enabled_days) => enabled_days.replace(/[{}]/g, "").split(",");
