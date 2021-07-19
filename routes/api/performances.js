// routes/api/performances.js

const express = require('express')
const router = express.Router()

// Load Performance model
const Performance = require('../../models/performance')

// @route GET api/performances/test
// @description tests performances route
// @access Public
router.get('/test', (req, res) => res.send('Performances route testing!'))

// @route GET api/performances
// @description Get all performance records
// @access Public
router.get('/', (req, res) => {
  Performance.find()
    .then((performances) => res.json(performances))
    .catch((err) =>
      res
        .status(404)
        .json({ no_performance_records_found: 'No performance records found' }),
    )
})

// @route GET api/performances/:id
// @description Get single performance record by id
// @access Public
router.get('/:id', (req, res) => {
  Performance.findById(req.params.id)
    .then((performance) => res.json(performance))
    .catch((err) =>
      res
        .status(404)
        .json({ no_performance_found: 'No performance record found' }),
    )
})

// @route GET api/performances/driver/:driver_id
// @description Get all performance records by driver_id
// @access Public
router.get('/driver/:driver_id', (req, res) => {
  Performance.find({ driver_id: req.params.driver_id })
    .then((performances) => res.json(performances))
    .catch((err) =>
      res
        .status(404)
        .json({ no_performance_records_found: 'No performance records found' }),
    )
})

// @route POST api/performances
// @description add/save performance record
// @access Public
router.post('/', (req, res) => {
  Performance.create(req.body)
    .then((performance) =>
      res.json({ msg: 'Performance record added successfully' }),
    )
    .catch((err) =>
      res.status(400).json({ error: 'Unable to add this performance record' }),
    )
})

// @route PUT api/performances/:id
// @description Update performance record
// @access Public
router.put('/:id', (req, res) => {
  Performance.findByIdAndUpdate(req.params.id, req.body)
    .then((performance) =>
      res.json({ msg: 'Performance record updated successfully' }),
    )
    .catch((err) =>
      res
        .status(400)
        .json({ error: 'Unable to update this performance record' }),
    )
})

// @route GET api/performances/:id
// @description Delete performance record by id
// @access Public
router.delete('/:id', (req, res) => {
  Performance.findByIdAndRemove(req.params.id, req.body)
    .then((performance) =>
      res.json({ mgs: 'Performance record deleted successfully' }),
    )
    .catch((err) =>
      res.status(404).json({ error: 'No such performance record' }),
    )
})

module.exports = router
