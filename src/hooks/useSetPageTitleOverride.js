/* eslint-disable implicit-arrow-linebreak */
import { useContext, useEffect } from 'react';
import { AppRoutesContext } from '../services/AppRoutesContext';

// when invoked, sets the given title on the shared state
// store setup via AppRoutesContext. This gives other controls
// (e.g. CurrentPageTitle) access to the title derived in a specific
// route component.
const useSetPageTitleOverride = (title) => {
  const appRoutesCtx = useContext(AppRoutesContext);

  // set immediately when invoked to prevent 'flash' from useEffect
  if (appRoutesCtx.state.currentRouteTitle !== title) {
    appRoutesCtx.update({ currentRouteTitle: title });
  }

  // when the page component unmounts, reset the title to empty
  // so the route definition title is used as a default.
  useEffect(() =>
    // don't repeat setState here, no need ..
    //       setState( .. as above .. );
    // ... but always reset when component unmounts so state is clean
    () => appRoutesCtx.update({ currentRouteTitle: '' }),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [title]);
};

export default useSetPageTitleOverride;
