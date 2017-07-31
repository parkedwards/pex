const { Router } = require('express');

const api = new Router();

api.get('/', () => console.log('ayyyyyyyyy'));
api.get('/test', () => console.log('testing testing bitches'));

api.post('/auth', (req, res) => {
  console.log('<< POST : login >>');
  return res
    .status(201)
    .json(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJ1c2VybmFtZSI6ImVkd2FyZEBncmF2aXR5YnJhbmRzLmNvbSJ9.PFR0HeeVvpHiDeg2B56ucE-WRkhQU4CmgWu-x73bDo0',
    );
});
api.post('/auth/create', () => console.log('<< POST : sign up >>'));

module.exports = api;
