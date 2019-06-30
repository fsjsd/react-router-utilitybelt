import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { makeRouteDefinition } from '../AppRoutes';
import AppRoutesProvider from '../services/AppRoutesContext';
import BreadCrumbs from './BreadCrumbs';

it('renders BreadCrumbs correctly', () => {
  const breadCrumbRoutes = {
    '/': makeRouteDefinition({ title: 'L1', showSubNav: true }),
    '/2': makeRouteDefinition({ title: 'L2', parent: '/', showSubNav: true }),
    '/3': makeRouteDefinition({ title: 'L3', parent: '/2' }),
  };

  const initialRouterEntries = ['/3'];
  // const initialRouterIndex = 1;

  const BreadCrumbContainer = renderer.create(
    <MemoryRouter
      initialEntries={initialRouterEntries}
    >
      <AppRoutesProvider appRoutesData={breadCrumbRoutes}>
        <BreadCrumbs
          renderWrapper={renderChildren => <>{renderChildren()}</>}
          renderSeparator={() => ','}
          renderCurrentRouteCrumb={title => title}
        />
      </AppRoutesProvider>
    </MemoryRouter>,
  ).toJSON();

  expect(BreadCrumbContainer).toMatchSnapshot();
});
