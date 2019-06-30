import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import AppRoutesProvider from './AppRoutesContext';

it('renders without crashing', () => {
  const emptyAppRoutes = {};

  const div = document.createElement('div');
  ReactDOM.render((
    <MemoryRouter>
      <AppRoutesProvider appRoutesData={emptyAppRoutes}>
          empty
      </AppRoutesProvider>
    </MemoryRouter>), div);
  ReactDOM.unmountComponentAtNode(div);
});

const renderProvider = (div, appRoutes) => {
  ReactDOM.render((
    <MemoryRouter>
      <AppRoutesProvider appRoutesData={appRoutes}>
          empty
      </AppRoutesProvider>
    </MemoryRouter>), div);
};

it('throws error with invalid parent', () => {
  const badAppRoutes = {
    '/': { title: 'default', parent: 'I don\'t exist' },
  };

  const div = document.createElement('div');
  expect(() => {
    renderProvider(div, badAppRoutes);
  }).toThrow('Route: \'/\' declares parent \'I don\'t exist\' which does not exist');

  ReactDOM.unmountComponentAtNode(div);
});

it('throws error with invalid showSubNav', () => {
  const badAppRoutes = {
    '/': { title: 'default', showSubNav: true },
  };

  const div = document.createElement('div');
  expect(() => {
    renderProvider(div, badAppRoutes);
  }).toThrow("Route: '/' defines showSubNav=true but no child nodes exist");

  ReactDOM.unmountComponentAtNode(div);
});
