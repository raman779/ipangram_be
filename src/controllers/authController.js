const authService = require('../services/authService');

const authController = {
  signup: async (req, res) => {
    const { username, password, role } = req.body;
    const result = await authService.signup(username, password, role);

    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.message });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const result = await authService.login(username, password);

    if (result.success) {
      res.status(200).json({ token: result.token });
    } else {
      res.status(401).json({ error: result.message });
    }
  },
};

module.exports = authController;
