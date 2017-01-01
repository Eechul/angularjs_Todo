import app from './config/express/express'
import express from 'express'
import path from 'path';
import mongoose from './config/database/mongoose'
import todos from './routes/todos'

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

app.use('/todo', todos)

app.listen(3000, () => {
  console.log('3000 port open!')
})