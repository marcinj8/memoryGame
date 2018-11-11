import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = props => {

  let modalStyle = ['modal__container'];
  if (props.show) {
    modalStyle.push('modal__container--active')
  }
  return (
    <div>
      <Backdrop show={props.show} />
      <div
        className={modalStyle.join(' ')}>
        {props.children}
      </div>
    </div>
  );
};

export default modal;