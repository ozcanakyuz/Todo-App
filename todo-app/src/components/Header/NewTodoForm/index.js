import { Field, Form, Formik } from "formik";
import React from "react";
import validationSchema from "./validations";
import { useTodo } from "../../../context/TodoContext";

function NewTodoForm() {
  const {setTodos} = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
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
