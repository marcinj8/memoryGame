import React from 'react';
import Aux from 'react-aux';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = props => {

  let modalStyle = ['modal'];

  return (
    <Aux>
      <Backdrop />
      <div
        className={modalStyle.join(' ')}>
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;