const express = require('express');
const uuid = require('uuid');
const Joi = require('joi');
const port = 3000;
const hostname = "localhost";
const app = express();

app.use(express.json());

let users = [];

const userSchema = Joi.object(
    {
        login: Joi.string().alphanum().required(),
        password: Joi.string().pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required(),
        age: Joi.number().integer().min(4).max(130).required()
    });


app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const user = users.find((user) => (user.id === req.params.id && !user.isDeleted));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);

});

app.post('/users', (req, res) => {
    const response = userSchema.validate(req.body);
    if (response.error) {
        return res.status(404).json({ error: response.error.details[0].message });
    };
    const { login, password, age } = response.value;

    let user = users.find(user => user.login === login && !user.isDeleted);

    if (user) {
        return res.status(400).json({ error: 'User already exists' });

    }
    user = {
        id: uuid.v4(),
        login,
        password,
        age,
        isDeleted: false
    };
    users.push(user);

    console.log(users);
    return res.json(user);

});

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const response = userSchema.validate(req.body);
    if (response.error) {
        return res.status(404).json({ error: response.error.details });
    };
    const { login, password, age } = response.value;

    let user = users.find(user => user.id === id && !user.isDeleted);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.login = login;
    user.password = password;
    user.age = age;
    console.log(users);
    return res.json(user);


});



app.get('/users', (req, res) => {
    const { loginSubstring, limit } = req.query;
    let filteredUsers = users.filter(user => user.login.includes(loginSubstring) && !user.isDeleted);
    filteredUsers = filteredUsers.sort((a, b) => a.login.localeCompare(b.login)).slice(0, limit);
    return res.json(filteredUsers);

});

app.delete('/users/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id && !user.isDeleted);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.isDeleted = true;
    console.log(users);
    return res.json(user);
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));






