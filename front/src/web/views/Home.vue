<template>
  <div class="home">    
    <div v-if="loading" class="text-gray-500 text-3xl font-extralight w-full h-64 flex items-center justify-center">
      Loading...
    </div>
    <div v-else>
      <!-- <Auth /> -->

      <CommentsPage />
  </div>
  </div>
</template>

<script>
import {auth} from 'src/config/db'


import CommentsPage from 'src/domains/Comment/views/CommentsPage.vue'

export default {
  name: 'App',
  components: {
    CommentsPage,
  },
  data() {
    return {
      loading: true,
      user: null,
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user
      this.loading = false
    })
  }
}
</script>
