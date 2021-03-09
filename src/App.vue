<template>
  <div id="app" class="bg-gray-100 text-gray-800 flex flex-col min-h-screen">

    <Header />

    <div class="view flex-grow w-screen max-w-4xl mx-auto px-4 xl:px-0">
      <router-view/>
    </div>

    <Footer />

  </div>
</template>
<script>
import Header from 'src/web/components/Header'
import Footer from 'src/web/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>