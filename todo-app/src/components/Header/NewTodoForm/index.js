import { Form, Formik } from "formik";
import React from "react";
import validationSchema from "./validations";

function NewTodoForm() {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
