import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FormGroup, Label } from "reactstrap";

const validateInputs = validate => {
  let errors = {};
  // if (!validate.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(validate.email)) {
  //   errors.email = "Invalid email address";
  // }
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
          <FormGroup>
            <Label>Title</Label>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>Company</Label>
            <Field className="form-control" type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Field className="form-control" type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>Position</Label>
            <Field className="form-control" type="text" name="position" />
            <ErrorMessage name="position" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Field
              className="form-control"
              type="textarea"
              name="description"
              component="textarea"
            />
            <ErrorMessage name="description" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>Start Date</Label>
            <Field className="form-control" type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Field className="form-control" type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>
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
