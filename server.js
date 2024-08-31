const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post('/api/generate-workout', async (req, res) => {
  try {
    const response = await axios.post('https://gemini.googleapis.com/v1/models/gemini-1.5-flash:generateText', req.body, {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error generating workout plan:", error.response?.data || error.message);
    res.status(500).send('Failed to generate workout plan.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
