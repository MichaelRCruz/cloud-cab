import React, { Fragment } from 'react';
import useForm from './useForm.js';
import './RegistrationForm.css';

const RegistrationForm = props => {

  const { setSelection, setAuthEmail, handleClose } = props;
  const formCallback = (payload, clearForm) => {
    setAuthEmail(payload);
    clearForm();
  };
  const {
    handleSubmit,
    handleChange,
    authFormErrors,
    authFormValues
  } = useForm(formCallback);

  return (
    <div>
      <form className="signInFormComponent" onSubmit={handleSubmit}>
        <fieldset className="signInFieldset">
          <legend className="signInWithEmailLegend">
            <p className="appNameAtAuth">example</p>
          </legend>
          <div className="parentFlex">
            <div className="formGroup passwordFormGroup">
              <p className="errorMessage">{authFormErrors.emailError || ''}</p>
              <input
                className="input emailInput"
                type="email"
                name="email"
                placeholder="email"
                value={authFormValues.email || ''}
                onChange={handleChange}
              />
            </div>
            <button
              className="signInWithEmailButton"
              type="submit"
              disabled={false}>
              button
            </button>
            <span className="horizontalRule"> or </span>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default RegistrationForm;
