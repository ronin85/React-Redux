import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

console.log(styles);
const Button = (props) => {
  let button = null;
  switch (props.buttonType) {
    case 'button':
      button = (
        <button className={styles.button} onClick={props.clicked}>
          {props.buttonLabel}
        </button>
      );
  }

  return (
    <>
      { button }
    </>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string,
  clicked: PropTypes.func,
  buttonLabel: PropTypes.string,
};

export default Button;
