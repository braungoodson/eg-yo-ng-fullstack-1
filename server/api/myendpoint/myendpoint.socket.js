/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Myendpoint = require('./myendpoint.model');

exports.register = function(socket) {
  Myendpoint.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Myendpoint.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('myendpoint:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('myendpoint:remove', doc);
}