var express = require('express');
var Todo = require('../models/Todo');
var router = express.Router();

router.get('/:id?', function(req, res, next) {
	if(req.params.id) {
		Todo.getTodoById(req.params, function(err, data) {
			if(err) {
				res.json({'code': 200, 'status': 'error', 'message': 'Ada sesuatu yang salah.', 'data': err});
			} else {
				res.json({'code': 200, 'status': 'success', 'data': data});
			}
		});
	} else {
		Todo.getAllTodos(req.query, function(err, data) {
			if(err) {
				res.json({'code': 200, 'status': 'error', 'message': 'Ada sesuatu yang salah.', 'data': err});
			} else {
				res.json({'code': 200, 'status': 'success', 'data': data});
			}
		});
	}
});

router.post('/', function(req, res, next) {
	Todo.addTodo(req.body, function(err, status) {
		if(err) {
			res.json({'code': 200, 'status': 'error', 'message': 'Ada sesuatu yang salah.', 'data': err});
		} else {
			res.json({'code': 200, 'status': 'success', 'message': 'Berhasil Disimpan.', 'data': req.body});
		}
	}); 
});

router.put('/:id', function(req, res, next) {
	Todo.updateTodo(req.params.id, req.body, function(err, data) {
		if(err) {
			res.json({'code': 200, 'status': 'error', 'message': 'Ada sesuatu yang salah.', 'data': err});
		} else {
			res.json({'code': 200, 'status': 'success', 'message': 'Berhasil Diubah.', 'data': data});
		}
	}); 
});

router.delete('/:id', function(req, res, next) {
	Todo.deleteTodo(req.params, function(err, status) {
		if(err) {
			res.json({'code': 200, 'status': 'error', 'message': 'Ada sesuatu yang salah.', 'data': err});
		} else {
			res.json({'code': 200, 'status': 'success', 'message': 'Berhasil Dihapus.', 'data': status});
		}
	}); 
});

module.exports = router;