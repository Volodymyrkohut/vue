<template>
  <header>
    Header
    <div>
      {{title}}
    </div>
  </header>
</template>


<script>
export default {
  props: ['title'],
  name:'Header',
  data(){

  },
}
</script>