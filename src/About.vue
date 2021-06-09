<template>
  <h1>{{ message }}</h1>
  about
  <router-link to='/'>Повернутися на головну сторінку</router-link>
</template>

<script>

export default {
  name: 'About',
  data() {
    return {
      message: 'About page'
    }
  }
}
</script>