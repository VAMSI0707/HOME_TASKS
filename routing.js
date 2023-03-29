const express = require('express');
const service = require('../services/service');
const Joi = require('joi');
const router = express.Router();

const userSchema = Joi.object(
  {
    login: Joi.string().alphanum().required(),
    password: Joi.string().pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required(),
    age: Joi.number().integer().min(4).max(130).required()
  });

router.get('/:id', async (req, res) => {
  const user = await service.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const response = userSchema.validate(req.body);
  if (response.error) {
    return res.status(404).json({ error: response.error.details[0].message });
  }
  else {
    const user = await service.createUser(req.body);
    res.json(user);
  }
});

router.patch('/:id', async (req, res) => {
  const response = userSchema.validate(req.body);
  if (response.error) {
    return res.status(404).json({ error: response.error.details[0].message });
  }
  else {
    const user = await service.updateUser(req.params.id, req.body);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  }
});

router.get('/', async (req, res) => {
  const { loginSubstring, limit } = req.query;
  const users = await service.getAutoSuggestUsers(loginSubstring, limit);
  res.json(users);
});

router.delete('/:id', async (req, res) => {
  const user = await service.removeUser(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
