<template>
  <div id="app" class="bg-gray-100 text-gray-700">

    <component :is="layout">
      <router-view />
    </component>

  </div>
</template>
<script>
import Header from 'src/web/components/Header'
import Footer from 'src/web/components/Footer'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout';
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>