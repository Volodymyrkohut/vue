import {createStore} from 'vuex'
import posts from "@/store/posts";


const store = createStore({
    modules: {
        posts: posts,
    }
})

// store.commit('increment')
console.log(store.state.count)

export default store;