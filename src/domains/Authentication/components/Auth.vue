<template>
    <div>
      <template v-if="!user">
        <Login />
        <div>- Or -</div>
        <Register />
      </template>
      <div v-else>
        Welcome, {{user.email}}.
        <Logout />
      </div>
  </div>
</template>

<script>
import {auth} from 'src/config/db'

import Login from 'src/domains/Authentication/components/Login.vue'
import Register from 'src/domains/Authentication/components/Register.vue'
import Logout from 'src/domains/Authentication/components/Logout.vue'

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Logout,
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
