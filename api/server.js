const express = require('express');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;
