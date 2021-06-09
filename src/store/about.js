

const incrementAction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 5000)
    })
}

export default {
    // namespaced: true, // TODO IT
    state() {
        return {
            count: 0,
        }
    },
    getters: {
        getCount(state){
            return state.count;
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        SET_RESULT(state, payload) {
            state.count = state.count + payload
        }
    },
    actions: {
        async incrementAction(context) {
            const result = await incrementAction()
            context.commit('SET_RESULT', result)
        }
    }
}