import React from 'react';
import PropTypes from 'prop-types';

const DrawerNavLink = (props) => {
  const { children, onClick } = props;
  return (
    <props.component {...props} onClick={onClick} onKeyPress={() => {}}>
      {children}
    </props.component>
  );
};

DrawerNavLink.defaultProps = {
};

DrawerNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DrawerNavLink;

/*

  <div className="NavLink" role="button" tabIndex="0">

  </div>
  */
