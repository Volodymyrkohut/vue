import {getPosts, getPostsDetail} from "@/api";

const posts = {
    namespaced: true, // TODO IT
    state() {
        return {
            count: 0,
            posts: [],
            post: {}
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        },
        count(state){
            return state.count;
        },
        post(state) {
            return state.post
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        SET_POSTS(state, payload) {
            state.posts = payload
        },
        SET_POSTS_DETAIL(state, payload) {
            state.post = payload

        },
    },
    actions: {
        async postsThunk(context) {
            const response = await getPosts()
            context.commit('SET_POSTS', response)

            return response
        },
        async postDetailThunk(context, payload) {
            console.log("payload", payload);

            const response = await getPostsDetail(payload)
            context.commit('SET_POSTS_DETAIL', response)

            // return response
        }
    }
}

export default posts;