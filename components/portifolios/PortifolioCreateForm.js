import { Field, Form, Formik } from "formik";
import React from "react";
import { FormGroup } from "reactstrap";
import PortInput from "../form/PortInput";

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    debugger;
    if (!values[key]) {
      errors[key] = `Field ${key} is required!!!`;
    }
  });

  return errors;
};

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: "",
  endDate: ""
};

const PortifolioCreateForm = () => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={values => validateInputs(values)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />
          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component="textarea"
            component={PortInput}
          />
          <Field
            type="text"
            name="startDate"
            label="Start Date"
            component={PortInput}
          />
          <Field
            type="text"
            name="endDate"
            label="End Date"
            component={PortInput}
          />
          {/* <ErrorMessage name="endDate" label="" component="div" /> */}
          <FormGroup>
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortifolioCreateForm;
