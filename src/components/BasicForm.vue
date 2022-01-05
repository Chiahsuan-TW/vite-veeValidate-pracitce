<template>
  <h2>Basic Form</h2>
  <Form @submit="onSubmit">
    <Field type="email" name="email" :rules="validateEmail"/>
    <ErrorMessage name="email"/>
    <button>Sign up for newsletter</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      console.log("Submitted", values);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  outline: 1px solid rgb(25, 44, 7);
  max-width: 500px;
  padding: 10px;
  margin: 0 auto;

  input {
    padding: 5px;
  }

  button {
    padding: 5px;
    background: #efd;
    box-shadow: 2px 2px 1px #4e4;
  }

  button:hover {
    cursor: pointer;
  }
}
</style>