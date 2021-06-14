<template>
  <div>
    <br/>
    <div>{{post.id}}</div>
    <h1>{{post.title}}</h1>
    <div>{{post.body}}</div>
    <br/>
    <hr/>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {  mapActions, mapState } = createNamespacedHelpers('posts');

export default {
  created() {
    const {id} = this.$route.params
    this.postDetailThunk(id)
  },
  methods: {
    ...mapActions(['postDetailThunk']),
  },
  computed: {
    ...mapState(['post']),
  },

 watch:{
    post(){
      console.log("this.", this.post)
    }
 }
  // computed: {
  //   post(){
  //     return this.$store.getters['posts/post']
  //   }
  // },
}
</script>