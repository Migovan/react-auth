import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const isInvalid = ({ valid, touched }) => {
  return !valid && touched;
}

const Input = props => {
  const cls = [classes.Input, props.class];
  const inputType = props.type || 'text';
  const htmlFor = `${inputType} - ${Math.random()}`;

  if (isInvalid(props)) {
      cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>
        {props.label}
      </label>
      <input
        type={inputType}
        name={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      
      {
        isInvalid(props)
          ? <span>{props.errorMessage}</span>
          : null
      }
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

Input.defaultProps = {
  onChange: () => {},
  value: '',
}

export default Input;