
var express = require('express');
var router = express.Router();
var Todo = require('../models/Todo');

/**
 * @name Todos Spécification des routes pour accéder à la gestion des taches
 */
router.get(
    '/:id?',
    function(request, response, next) {
        // Fonction appelée apres decodage de l'uri (http://localhost:300/10)
        if (request.param.id) {
            // Un parametre est passé
            Todo.getTodoById(request.param.id, function(err, rows) {
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
                        response.json(row);
                    }
                });
                res.send("Enregistrement effectué");
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
            req.body.id = req.params.id;
            res.json(req.body);
        }
      });
  }  
);

module.exports = router;

