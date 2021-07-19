// routes/api/performance.js

const express = require('express');
const router = express.Router();

// Load Performance model
const Performance = require('../../models/performance');

// @route GET api/performance/test
// @description tests performance route
// @access Public
router.get('/test', (req, res) => res.send('Performance route testing!'));

// @route GET api/performance
// @description Get all performance records
// @access Public
router.get('/', (req, res) => {
  Performance.find()
    .then(performance => res.json(performance))
    .catch(err => res.status(404).json({ no_performance_records_found: 'No performance records found' }));
});


// @route GET api/performance/:id
// @description Get single performance record by id
// @access Public
router.get('/:id', (req, res) => {
    Performance.findById(req.params.id)
      .then(performance => res.json(performance))
      .catch(err => res.status(404).json({ no_performance_found: 'No performance record found' }));
  });

  // @route POST api/performance
// @description add/save performance record
// @access Public
router.post('/', (req, res) => {
    Performance.create(req.body)
      .then(performance => res.json({ msg: 'Performance record added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this performance record' }));
  });
  
  // @route PUT api/performance/:id
  // @description Update performance
  // @access Public
  router.put('/:id', (req, res) => {
    Performance.findByIdAndUpdate(req.params.id, req.body)
      .then(performance => res.json({ msg: 'Performance record updated successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to update this performance record' }));
  });
  
  // @route GET api/performance/:id
  // @description Delete performance by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Performance.findByIdAndRemove(req.params.id, req.body)
      .then(performance => res.json({ mgs: 'Performance record deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such performance record' }));
  });
  
  module.exports = router;