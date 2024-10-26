const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS if your frontend and backend are on different domains
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

// Define a schema for the ContactUs form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
});

// Create a model for the form data
const Contact = mongoose.model('Contact', contactSchema);

// Define a POST route to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });
    
    // Save to the database
    await newContact.save();
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
