<template>
  <h1>{{ message }}</h1>
  about
  <router-link to='/'>Повернутися на головну сторінку</router-link>
  <h1>
    {{this.$store.getters.getCount}}
  </h1>
  <button @click="this.$store.commit('increment')">button </button>
</template>

<script>
// import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import { mapActions} from "vuex";
export default {
  name: 'About',
  data() {
    return {
      message: 'About page'
    }
  },

  created() {
    this.incrementAction();
    // this.$store.dispatch('incrementAction')
  },
  methods:{
    ...mapActions({
      incrementAction: 'incrementAction'
    }),
  }
}
</script>