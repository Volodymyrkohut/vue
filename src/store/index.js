import {createStore} from 'vuex'
import about from "@/store/about";


const store = createStore({
    modules: {
        about,
    }
})

// store.commit('increment')
console.log(store.state.count)

export default store;