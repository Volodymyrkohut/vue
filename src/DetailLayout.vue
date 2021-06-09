<template>
    <header-detail title="this text has been passed through the component "/>
  <section>
    <router-view />
  </section>
  <footer>
    Footer
  </footer>
</template>
<script>
import Header from "@/components/Header";

export default {
  name: 'DetailLayout',
  components: {'header-detail': Header}
}
</script>