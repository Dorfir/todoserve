
var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');

/**
 * @name Todos Spécification des routes pour accéder à la gestion des taches
 */
router.get(
    '/:id?',
    function(request, response, next) {
        // Fonction appelée apres decodage de l'uri (http://localhost:3000/Todos/10)
        
        if (request.params.id) {
            // Un parametre est passé
            Todo.getTodoById(request.params.id, function(err, rows) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(rows);
                }
            });
        } else {
            Todo.getAllTodos(function(err, rows) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(rows);
                }
            });
        }
    }
);

router.post(
    '/',
    function(req, res, next) {
        
        Todo.addTodo(req.body, function(err, count) {
            if (err) {
                res.json(err);
            } else {

                Todo.getLastTodo(function(err, row) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(row);
                    }
                });
            
            }
        });
    }
);

router.delete(
    '/:id',
    function(req, res, next) {
        Todo.deleteTodo(req.params.id, function (err, count) {
            if (err) {
                res.json(err);
            } else {
                res.json(count);
            }
        });
    }
);

router.put(
  '/:id',
  function(req, res, next) {
      Todo.updateTodo(req.params.id, req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            req.body.idTodo = req.params.id;
            res.json(req.body);
        }
      });
  }  
);

module.exports = router;

