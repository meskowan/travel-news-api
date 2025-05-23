const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Tambahan agar tidak error di Railway
app.get("/", (req, res) => {
  res.send("Travel News API is running!");
});

// Routes
const newsRoutes = require('./routes/newsRoutes');
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
