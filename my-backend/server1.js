const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST endpoint to submit feedback
app.post('/api/feedback', async (req, res) => {
  const { name, email, rating, message } = req.body;
  const feedback = new Feedback({ name, email, rating, message });

  try {
    await feedback.save();
    res.status(201).send('Feedback submitted successfully!');
  } catch (error) {
    res.status(500).send('Error submitting feedback: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
