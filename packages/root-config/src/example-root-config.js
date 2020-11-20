import { registerApplication, start, navigateToUrl } from 'single-spa';
import { auth$ } from '@example/auth';

let authenticated = false;

const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  HOME: '/home',
};

registerApplication({
  name: '@example/navbar',
  app: () => System.import('@example/navbar'),
  activeWhen: () => authenticated,
});

registerApplication({
  name: '@example/login',
  app: () => System.import('@example/login'),
  activeWhen: (location) =>
    [ROUTES.ROOT, ROUTES.LOGIN].includes(location.pathname) && !authenticated,
});

registerApplication({
  name: '@example/home',
  app: () => System.import('@example/home'),
  activeWhen: (location) =>
    [ROUTES.ROOT, ROUTES.HOME].includes(location.pathname) && authenticated,
});

auth$.subscribe(({ sessionToken }) => {
  authenticated = !!sessionToken;
  if (!authenticated && window.location.pathname !== ROUTES.LOGIN)
    navigateToUrl(ROUTES.LOGIN);
  if (authenticated && window.location.pathname === ROUTES.LOGIN)
    navigateToUrl(ROUTES.HOME);
});

start();
