var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stash = require('../models/Stash.js');

/* GET COMPLETE STASH */
router.get('/', function(req, res, next) {
    Stash.find(function(err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE STASH ITEM BY ID */
router.get('/:id', function(req, res, next) {
    Stash.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE STASH */
router.post('/', function(req, res, next) {
    Stash.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE STASH */
router.put('/:id', function(req, res, next) {
    Stash.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE STASH */
router.delete('/:id', function(req, res, next) {
    Stash.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;