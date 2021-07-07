// routes/api/drivers.js

const express = require('express');
const router = express.Router();

// Load Driver model
const Driver = require('../../models/Driver');

// @route GET api/drivers/test
// @description tests drivers route
// @access Public
router.get('/test', (req, res) => res.send('Drivers route testing!'));

// @route GET api/drivers
// @description Get all drivers
// @access Public
router.get('/', (req, res) => {
  Driver.find()
    .then(drivers => res.json(drivers))
    .catch(err => res.status(404).json({ no_drivers_found: 'No drivers found' }));
});

// @route GET api/drivers/:id
// @description Get single driver by id
// @access Public
router.get('/:id', (req, res) => {
  Driver.findById(req.params.id)
    .then(driver => res.json(driver))
    .catch(err => res.status(404).json({ no_driver_found: 'No driver found' }));
});

// @route POST api/drivers
// @description add/save driver
// @access Public
router.post('/', (req, res) => {
  Driver.create(req.body)
    .then(driver => res.json({ msg: 'Driver added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this driver' }));
});

// @route PUT api/drivers/:id
// @description Update driver
// @access Public
router.put('/:id', (req, res) => {
  Driver.findByIdAndUpdate(req.params.id, req.body)
    .then(driver => res.json({ msg: 'Driver updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this driver' }));
});

// @route GET api/drivers/:id
// @description Delete driver by id
// @access Public
router.delete('/:id', (req, res) => {
  Driver.findByIdAndRemove(req.params.id, req.body)
    .then(driver => res.json({ mgs: 'Driver entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such driver' }));
});

module.exports = router;