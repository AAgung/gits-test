var dbConn = require('../db/connection');

var Todo = {
	getAllTodos: function(params, callback) {
		var query = null;
		if(parseInt(params.mode) === 2) { // Select By Status (TODO or DONE)
			var status = params.status ? params.status : "TODO";
			query = dbConn.query("SELECT * FROM todo WHERE status = '" + status + "'", callback);
		} else if(parseInt(params.mode) === 3) {
			var order_by = params.order_by ? params.order_by : "priority";
			var order_type = params.order_type ? params.order_type : "asc";
			query = dbConn.query("SELECT * FROM todo ORDER BY  " + order_by + " " + order_type, callback);
		} else {
			query = dbConn.query("SELECT * FROM todo", callback);	
		}
		return query;
	},
	getTodoById: function(params, callback) {
		return dbConn.query("SELECT * FROM todo WHERE id = ?", [params.id], callback);
	},
	addTodo: function(params, callback) {
		var query = "INSERT INTO todo VALUES (0, ?, ?, ?, ?, ?, ?, 'TODO')";
		return dbConn.query(query, [params.name, params.priority, params.location, params.time_start, params.username, params.password], callback);
	},
	updateTodo: function(id, params, callback) {
		var query = "UPDATE todo SET name = ?, priority = ?, location = ?, time_start = ?, username = ?, password = ?, status = ? WHERE id = ?";
		return dbConn.query(query, [params.name, params.priority, params.location, params.time_start, params.username, params.password, params.status, id], callback);
	},
	deleteTodo: function(params, callback) {
		return dbConn.query("DELETE FROM todo WHERE id = ?", [params.id], callback);	
	}
};
module.exports = Todo;