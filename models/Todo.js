// Recuperer l'instance de connexion a la base de données
var db = require('../dbconnection');
/**
 * @name Todo Classe modèle pour la gestion des todos
 */
var Todo = {

    /**
     * @name getAllTodos(void): query
     * Execute une requete pour récupérer la totalités des todos
     */
    getAllTodos: function(callback) {
        return db.query("SELECT * from todo", callback);
    },

    /**
     * @name addTodo(Todo, callback)
     * Ajoute un todo dans la table concernée
     */
    addTodo: function(Todo, callback) {
        return db.query(
            "INSERT INTO todo (title, beginDate, endDate) VALUES (?, ?, ?);",
            [Todo.title, Todo.beginDate, Todo.endDate], callback
        );
    },

    /**
     * @name updateTodo(int id, Todo, callback)
     * Mise a jour d'un todo
     */
    updateTodo: function (id, Todo, callback) {
        return db.query(
            "UPDATE todo SET title=?, beginDate=?, endDate=? WHERE idTodo=?;",
            [Todo.title, Todo.beginDate, Todo.endDate, id],
            callback
        );
    },

    /**
     * @name deleteTodo(int id, callback)
     */
    deleteTodo: function(id, callback) {
        return db.query(
            "DELETE FROM todo WHERE idTodo=?;",
            [id], callback
        );
    },

    /**
     * @name getTodoById(int id, callback)
     */
    getTodoById: function(id, callback) {
        return db.query(
            "SELECT * FROM todo WHERE idTodo=?;",
            [id], callback
        );
    },

    /**
     * @name getLastTodo(callback)
     */
    getLastTodo: function(callback) {
        return db.query(
            "SELECT * FROM todo ORDER BY idTodo DESC LIMIT 0,1;",
            callback
        );
    }


}

// Exporter la classe en l'exportant
module.exports = Todo;