const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user.id });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { page = 1, search = '', status, date } = req.query;
  const query = { user: req.user.id };
  if (search) query.name = new RegExp(search, 'i');
  if (status) query.status = status;
  if (date) query.createdAt = { $gte: new Date(date) };

  const tasks = await Task.find(query)
    .skip((page - 1) * 10)
    .limit(10);
    
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: 'Task deleted' });
};
