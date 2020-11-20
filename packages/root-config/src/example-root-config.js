import { registerApplication, start } from 'single-spa';

const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  HOME: '/home',
};

registerApplication({
  name: '@example/navbar',
  app: () => System.import('@example/navbar'),
  activeWhen: () => true,
});

registerApplication({
  name: '@example/login',
  app: () => System.import('@example/login'),
  activeWhen: ROUTES.LOGIN,
});

registerApplication({
  name: '@example/home',
  app: () => System.import('@example/home'),
  activeWhen: ROUTES.HOME,
});

start();
