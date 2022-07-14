import {createStore} from "vuex";
import todos         from "./module/todos"

export default createStore({
   modules: {
      todos
   },
});
