<template>
  <div class="home">
    <img alt="Vue logo" src="/assets/logo.png">
    

    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <Auth />

      <CommentsPage />
  </div>
  </div>
</template>

<script>
import {auth} from 'src/config/db'

import Auth from 'src/domains/Authentication/components/Auth.vue'

import CommentsPage from 'src/domains/Comment/views/CommentsPage.vue'

export default {
  name: 'App',
  components: {
    Auth,
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
