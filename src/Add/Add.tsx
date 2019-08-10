import React from 'react';
import {withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { ExpenseData } from '../types';

interface FormValues {
  type: string;
  value: number;
  description: string;
}

interface OtherProps {
  expenses: any;
  addExpense: (expense: ExpenseData) => any;
}

interface MyFormProps {
  expenses: any;
  addExpense: (expense: ExpenseData) => any;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    } = props;
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <select name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}>
            <option value="" label="Select">Select</option>
            <option value="+" label="+">+</option>
            <option value="-" label="-">-</option>
          </select>
          <input width={100}                 
                 placeholder="Value"
                 type="number"
                 name="value"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.value} />
          <input width={100}                 
                 placeholder="Description"
                 type="text"
                 name="description"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.description} />
                 <button 
                  type="submit"
                  disabled={isSubmitting ||
                            !!(errors.type && touched.type) ||
                            !!(errors.value && touched.value) ||
                            !!(errors.description && touched.description)}>
            Add
          </button>
        </form>
      </div>
    );
  };

  const Add = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
      type: "",
      value: 0,
      description: ""
    }),
    validationSchema: Yup.object().shape({
      type: Yup.string().required("Nome ' obrigat'rio"),
      value: Yup.number().required("Value obrigat'ria"),
      description: Yup.string().required("Description obrigat'ria")
    }),
    handleSubmit(
      { type, value, description }: FormValues,
      { props, setSubmitting }
    ) {
      setTimeout(() => {
        props.addExpense({ type, value, description });
        setSubmitting(false);
      }, 1000);
    }
  })(InnerForm);
  
  export default Add;

