const express = require('express');
const normaliseData = require('../utils/normalise-data');
const calculateAreas = require('../utils/calc-area');

const router = express.Router();

router.post('/', (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });

      return;
    }

    const { data, mimetype } = req.files.File;

    if (mimetype !== 'application/json') {
      res.send({
        status: false,
        message: 'File must be a json',
      });

      return;
    }

    const json = JSON.parse(data.toString());

    const normalise = normaliseData(json);

    const areas = calculateAreas(normalise);

    res.send({
      status: true,
      message: 'File is uploaded',
      data: areas,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
