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
    const phoneRegex = /^\(?([0-9]{2})\)?[- ]?([0-9]{7})$/ ;
    const mobileRegex = /^\(?([0-9]{4})\)?[- ]?([0-9]{3})[- ]?([0-9]{3})$/;
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
          label: "Your Phone",
          name: "phone",
          as: "input",
          rules: yup
            .string()
            .matches(phoneRegex, "電話號碼格式不正確喔!")
            .required(),
        },
        {
          label: "Your Mobile",
          name: "mobile",
          as: "input",
          rules: yup
            .string()
            .matches(mobileRegex, "手機號碼格式不正確喔!")
            .required(),
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
          rules: yup.string().max(10).required(),
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
