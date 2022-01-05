<template>
  <h1>表單</h1>
  <component :is="currentForm"></component>
  
</template>

<script>
import BasicForm from "./../components/BasicForm.vue"
export default {
  components: {
    BasicForm,
  },
  data() {
    return {
      currentForm: 'BasicForm',
      // form: ['BasicForm',]
    }
  }

}
</script>

<style>

</style>
