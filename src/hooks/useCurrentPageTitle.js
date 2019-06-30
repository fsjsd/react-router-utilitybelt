import { useContext } from 'react';
import { AppRoutesContext } from '../services/AppRoutesContext';

// useCurrentPageTitle reads pageTitleOverride from AppRoutesContext
// if set elsewhere in the app, returns that as the title for the page.
// This is useful if your page title is determined after side effects.

const useCurrentPageTitle = () => {
  const { state, currentRoute } = useContext(AppRoutesContext);
  const pageTitleOverride = state.currentRouteTitle;

  // if the route title has been dynamically overridden, always use that.
  if (pageTitleOverride !== '') {
    return pageTitleOverride;
  }

  // otherwise, current location path *should* match one of the
  // paths in the AppRoutes definitions.
  if (currentRoute) {
    return currentRoute.title;
  }

  // if no match, we have to 404
  return 'Page Not Found';
};

export default useCurrentPageTitle;
