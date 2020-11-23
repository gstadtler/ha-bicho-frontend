import React from 'react';

import UserNavbar from '../UserNavbar';
import MenuNavbar from '../MenuNavbar';
import HomeNavbar from '../HomeNavbar';

import { isAuthenticated } from '../../services/auth';

/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's navbar and div
 */
function WithNavigation(props) {
  return (
    <>
      {isAuthenticated() ? (
        <UserNavbar />
      ) : (
          <HomeNavbar />
        )}

      <div>
        {props.children}
      </div>

    </>
  )
}

export default WithNavigation;
