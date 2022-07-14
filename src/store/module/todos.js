export default {
   state: {
      post: [],
   },
   getters: {
      validTodos(state){
         return state.post.filter(i => {
            return i.title
         })
      },
      getTodos(state) {
         return state.post
      },
      countTodos(state, getters){
         return getters.validTodos.length
      }
   },
   mutations: {
      updateTodos(state, data) {
         state.post = data
      },
      addTodos(state, data){
         state.post.unshift(data)
      }
   },
   actions: {
      async fetchTodos({commit, dispatch}, arg = '') {
         const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + arg)
         const data = await res.json();

         dispatch('sayHello')
         commit('updateTodos', data)
      },
      sayHello(){
       console.log('hello')
      }
   }
}