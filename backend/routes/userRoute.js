import express from 'express';
import User from '../models/usermodel.js';

// Initialize Express app
const router = express.Router();

const app = express();

// Define a route for user registration
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Create a new user instance and save to the database
    const user = new User({ username, email, password });
    await user.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});


export default router;