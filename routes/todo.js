var express = require('express');
var Todo = require('../models/Todo');
var router = express.Router();

router.get('/:id?', function(req, res, next) {
	if(req.params.id) {
		Todo.getTodoById(req.params, function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
		});
	} else {
		Todo.getAllTodos(req.query, function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
		});
	}
});

router.post('/', function(req, res, next) {
	Todo.addTodo(req.body, function(err, status) {
		if(err) {
			res.json(err);
		} else {
			res.json(req.body);
		}
	}); 
});

router.put('/:id', function(req, res, next) {
	Todo.updateTodo(req.params.id, req.body, function(err, data) {
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	}); 
});

router.delete('/:id', function(req, res, next) {
	Todo.deleteTodo(req.params, function(err, status) {
		if(err) {
			res.json(err);
		} else {
			res.json('Data Berhasil Dihapus');
		}
	}); 
});

module.exports = router;