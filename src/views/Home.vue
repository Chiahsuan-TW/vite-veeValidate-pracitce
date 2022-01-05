<template>
  <h1>表單</h1>
  <component :is="currentForm"></component>
  <DynamicForm :schema="formSchema" />
</template>

<script>
import BasicForm from "./../components/BasicForm.vue";
import DynamicForm from "./../components/DynamicForm.vue";
import * as yup from "yup";
export default {
  components: {
    BasicForm,
    DynamicForm,
  },
  data() {
    const formSchema = {
      fields: [
        {
          label: "Your Name",
          name: "name",
          as: "input",
          rules: yup.string().required(),
        },
        {
          label: "Your Email",
          name: "email",
          as: "input",
          rules: yup.string().email().required(),
        },
        {
          label: "Your Password",
          name: "password",
          as: "input",
          type: "password",
          rules: yup.string().min(6).required(),
        },
        {
          label: "Comments",
          name: "comments",
          as: "textarea",
          rules: yup.string().max(50).required(),
        },
      ],
    };
    return {
      formSchema,
      currentForm: "BasicForm",
      // form: ['BasicForm',]
    };
  },
};
</script>

<style></style>
