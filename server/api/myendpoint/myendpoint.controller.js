'use strict';

var _ = require('lodash');
var Myendpoint = require('./myendpoint.model');

// Get list of myendpoints
exports.index = function(req, res) {
  Myendpoint.find(function (err, myendpoints) {
    if(err) { return handleError(res, err); }
    return res.json(200, myendpoints);
  });
};

// Get a single myendpoint
exports.show = function(req, res) {
  Myendpoint.findById(req.params.id, function (err, myendpoint) {
    if(err) { return handleError(res, err); }
    if(!myendpoint) { return res.send(404); }
    return res.json(myendpoint);
  });
};

// Creates a new myendpoint in the DB.
exports.create = function(req, res) {
  Myendpoint.create(req.body, function(err, myendpoint) {
    if(err) { return handleError(res, err); }
    return res.json(201, myendpoint);
  });
};

// Updates an existing myendpoint in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Myendpoint.findById(req.params.id, function (err, myendpoint) {
    if (err) { return handleError(res, err); }
    if(!myendpoint) { return res.send(404); }
    var updated = _.merge(myendpoint, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, myendpoint);
    });
  });
};

// Deletes a myendpoint from the DB.
exports.destroy = function(req, res) {
  Myendpoint.findById(req.params.id, function (err, myendpoint) {
    if(err) { return handleError(res, err); }
    if(!myendpoint) { return res.send(404); }
    myendpoint.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}