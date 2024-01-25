const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authService = {
  signup: async (username, password, role) => {
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return { success: false, message: 'Username already exists' };
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();

      return { success: true, message: 'Signup successful' };
    } catch (error) {
      console.error('Error in signup:', error);
      return { success: false, message: 'Internal server error' };
    }
  },

  login: async (username, password) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return { success: false, message: 'Invalid username or password' };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        return { success: true, token };
      } else {
        return { success: false, message: 'Invalid username or password' };
      }
    } catch (error) {
      console.error('Error in login:', error);
      return { success: false, message: 'Internal server error' };
    }
  },
};

module.exports = authService;
