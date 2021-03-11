<template>
  <div class="default-layout bg-gray-100 text-gray-800 flex flex-col min-h-screen">

    <Header />

    <div class="view flex-grow w-screen max-w-4xl mx-auto px-4 xl:px-0">
        <slot />
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