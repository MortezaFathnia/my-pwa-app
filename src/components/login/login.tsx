import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessages from '../../hooks/Forms';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { login } from '../../actions';
import logo from '../../statics/04 (2).png';
import './login.scss';
import { Link } from 'react-router-dom';

const LoginPage = (props: any) => {
  const formValidation = Yup.object().shape({
    email: Yup.string()
      .email(ErrorMessages('email'))
      .required(ErrorMessages('required')),
    password: Yup.string().required(ErrorMessages('required')),
  });
  const onSubmit = (formValues: any) => {
    props.login(formValues);
  };
  return (
    <div className="login-wrapper">
      <div className="bg-header-wrapper">
        <div className="bg-header"></div>
        <img src={logo} alt="logo" />
      </div>
      <div className="login-container container">
        <div className="login-content">
          <p className="login-title mb-1 bold">
            با این شماره قبلا ثبت نام کردی!
          </p>
          <p className="login-title-sm mb-3 gray">
            برای وارد شدن نام کاربری و رمز عبورت رو بنویس.
          </p>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          enableReinitialize
          onSubmit={onSubmit}
          validationSchema={formValidation}
        >
          {({ values, errors, touched, dirty, isValid }) => (
            <Form>
              <div className="form-control">
                <Field
                  className={classNames('ltr', {
                    'is-invalid': errors.email && touched.email,
                  })}
                  name="email"
                  value={values.email || ''}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <div className="form-control">
                <Field
                  className={classNames('ltr', {
                    'is-invalid': errors.password && touched.password,
                  })}
                  name="password"
                  type="password"
                  value={values.password || ''}
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>
              <div className="form-control">
                <div className="mb-3">
                  <p className="link-elem mb-1">
                    رمز عبورت را فراموش کردی؟
                    <Link className="mr-1 text--cyan" to="">
                      بازیابی رمز عبور
                    </Link>
                  </p>
                  <p className="link-elem mb-1">
                    قبلا ثبت نام نکردی؟
                    <Link className="mr-1 text--cyan" to="">
                      ثبت نام در هوپا
                    </Link>
                  </p>
                </div>
                <button
                  disabled={!isValid || !dirty}
                  className="login-submit-button btn btn--cyan"
                  type="submit"
                >
                  ورود
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default connect(null, { login })(LoginPage);
