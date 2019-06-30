import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import RouteDefinitionNavLink from './RouteDefinitionNavLink';

it('renders basic route definition correctly', () => {
  const testRoute = { path: '/orders' };

  const RouteDefinitionNavLinkComponent = renderer.create(
    <MemoryRouter>
      <RouteDefinitionNavLink route={testRoute} />
    </MemoryRouter>,
  ).toJSON();

  expect(RouteDefinitionNavLinkComponent).toMatchSnapshot();
});

it('renders complete route definition correctly', () => {
  const testRoute = { path: '/orders', icon: () => (<div>icon</div>), showSubNav: true };

  const RouteDefinitionNavLinkComponent = renderer.create(
    <MemoryRouter>
      <RouteDefinitionNavLink route={testRoute} />
    </MemoryRouter>,
  ).toJSON();

  expect(RouteDefinitionNavLinkComponent).toMatchSnapshot();
});
