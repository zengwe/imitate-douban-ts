import { Application } from 'egg';

export default (app: Application) => {
  const controller = app.controller;
  app.redirect('/', '/home');
  app.router.get('/home', controller.home.index);
}