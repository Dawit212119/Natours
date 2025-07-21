//   user route handler
exports.getAllUser = (req, res) => {
  res.status(200).json({
    message: 'user data will be avialable soon',
  });
};
exports.creatUser = (req, res) => {
  res.status(201).json({
    message: 'user will be created soon',
  });
};
exports.updateUser = (req, res) => {
  res.status(200).json({
    message: 'user upadated',
  });
};
exports.deleteUser = (req, res) => {
  res.status(204).json({
    data: null,
  });
};
exports.getUser = (req, res) => {
  res.status(200).json({
    message: 'user find',
  });
};
