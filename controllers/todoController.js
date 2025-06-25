const db = require('../config/database');

exports.getTodos = (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) throw err;
        res.render('index', { todos: results });
    });
};

exports.addTodo = (req, res) => {
    const { title } = req.body;
    db.query('INSERT INTO todos (title) VALUES (?)', [title], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    db.query('UPDATE todos SET completed = !completed WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};
