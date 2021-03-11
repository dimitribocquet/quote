<template>
  <div class="admin-layout flex flex-col min-h-screen">

    <div class="header py-4 px-8 mb-16 flex border-b border-purple-300">
      <div class="flex-grow">
        <router-link  :to="{name: 'CommentsPage'}" class="logo">
          quote
        </router-link>
      </div>
      <Auth layout="admin" />
    </div>

    <div class="view flex-grow w-screen max-w-4xl mx-auto px-4 xl:px-0 mt-8">
        <slot />
    </div>

    <Footer />

  </div>
</template>
<script>
import Auth from 'src/domains/Authentication/components/Auth.vue'
import Footer from 'src/web/components/Footer'

export default {
  components: {
    Auth,
    Footer,
  }
}
</script>