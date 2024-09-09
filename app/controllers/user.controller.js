const userService = require("../services/user.service");

module.exports = {
  registerUserController: async (req, res) => {
    try {
      await userService.registerUserService(req, res);
    } catch (error) {
      res.json({ error: error }).status(500);
    }
  },
};
