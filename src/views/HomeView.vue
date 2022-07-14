<template>
   <PostForm/>
   <h1> {{ countTodos }}</h1>
   <div class="home">
      {{ getTodos }}
   </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostForm                 from '@/components/PostForm'

export default {
   name: "HomeView",
   components: {
      PostForm
   },
   computed: mapGetters(['getTodos', 'countTodos']),
   methods: mapActions(['fetchTodos']),
   mounted() {
      this.fetchTodos();
   }
};
</script>
