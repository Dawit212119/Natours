const fs = require('fs');
const path = require('path');

const filename = path.join(process.cwd(), '/dev-data/data/tours-simple.json');
const rowData = fs.readFileSync(filename, 'utf-8');
const parseData = JSON.parse(rowData);

//   tour route handler
exports.getAlltour = (req, res) => {
  res.json({
    toure: parseData,
  });
};
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  if (id > parseData.length) {
    return res.status(404).json({
      succes: 'false',
      message: 'Invalide Id',
    });
  }
  exports.gettour = parseData.find((row) => row.id === id);
  res.status(200).json({
    tour: gettour,
  });
};

exports.createTour = (req, res) => {
  const rowData = fs.readFileSync(filename, 'utf-8');
  const parseData = JSON.parse(rowData);
  const data = req.body;
  parseData.push({
    id: parseData[parseData.length - 1].id + 1,
    ...data,
  });
  fs.writeFileSync(filename, JSON.stringify(parseData));

  res.status(201).json({
    succes: 'created',
    tour: {
      tour: data,
    },
  });
};

exports.updateTour = (req, res) => {
  if (req.params.id * 1 > parseData.length) {
    return res.status(404).json({
      message: 'Invalid Id',
    });
  }
  res.status(200).json({
    data: {
      tour: 'updated tour',
    },
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    message: 'deleted',
    data: null,
  });
};
