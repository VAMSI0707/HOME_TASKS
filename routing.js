const express = require('express');
const service = require('../services/service');

const router = express.Router();

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
  const user = await service.createUser(req.body);
  res.json(user);
});

router.patch('/:id', async (req, res) => {
  const user = await service.updateUser(req.params.id, req.body);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
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
