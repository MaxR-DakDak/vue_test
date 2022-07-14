<template>
   <form @submit.prevent="submit">
      <input type="text" v-model="title">
      <input type="text" v-model="body">
      <button type="submit"> Create</button>
   </form>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
   data() {
      return {
         title: '',
         body: '',
      }
   },
   methods: {
      ...mapMutations(['addTodos']),
      submit() {
         console.log(this.title, this.body)
         this.addTodos({
            title: this.title,
            body: this.body,
         })
      },
   }
}
</script>