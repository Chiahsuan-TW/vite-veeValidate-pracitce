<template>
  <Form @submit="onSubmit">
    <div v-for="{ as, name, label, ...attrs } in schema.fields" :key="name">
      <label :for="name">{{ label }}</label>
      <Field :id="name" :as="as" :name="name" v-bind="attrs" />
      <ErrorMessage :name="name" class="error"/>
    </div>
    <button>Submit</button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "DynamicForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  max-width: 500px;
  outline: 1px solid #fd6;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .error {
    color: rgb(221, 87, 110);
    font-weight: 700;
  }

  button {
    padding: 5px;
    margin-top: 5px;
    background-color: #cce;
    border-radius: 4px;
  }

}

</style>
