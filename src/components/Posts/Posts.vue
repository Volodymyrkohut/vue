<template>
  <h1>{{ message }}</h1> Posts
  <router-link to='/'>Повернутися на головну сторінку</router-link>
  <button @click="this.$store.commit('posts/increment')">button</button>

  <h1>
    {{ this.$store.getters['posts/count'] }}
  </h1>

  <ul>
    <li v-for="item in this.$store.getters['posts/posts']" :key="item.id">
      <router-link :to="`/posts/${item.id}`">
        <br/>
        <div>{{item.id}}</div>
        <h1>{{item.body}}</h1>
        <div>{{item.title}}</div>
        <br/>
        <hr/>
      </router-link>
    </li>
  </ul>

</template>

<script>
// import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {mapActions} from "vuex"; //createNamespacedHelpers
// const {  mapActions } = createNamespacedHelpers('posts/hotelThunk');

export default {
  name: 'Posts',
  data() {
    return {
      message: 'Список постів'
    }
  },
  methods: {
    ...mapActions({postsThunk: 'posts/postsThunk'}),
  },
  created() {
    this.postsThunk();
    console.log("mapActions",this)
    // this.$store.dispatch('posts/hotelThunk')
    // this.$store.dispatch('incrementAction')
  },

}
</script>