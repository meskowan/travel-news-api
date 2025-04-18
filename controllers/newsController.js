
const News = require('../models/News');

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const newNews = new News(req.body);
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
