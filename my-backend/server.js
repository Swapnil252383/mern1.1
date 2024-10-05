const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // or any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Create a schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint to save contact form data
app.post('/api/contact', (req, res) => {
  const newContact = new Contact(req.body);
  newContact.save()
    .then(() => res.status(200).json({ message: 'Message Sent!' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
