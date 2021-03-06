<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    

    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <template v-if="!user">
        <Login />
        <div>- Or -</div>
        <Register />
      </template>
      <div v-else>
        Welcome {{user.email}} !
        <Logout />
      </div>

      <Comments />
  </div>
  </div>
</template>

<script>
import {auth} from '../config/db';
import Comments from '../components/Comments.vue'
import Login from '../components/authentication/Login.vue'
import Register from '../components/authentication/Register.vue'
import Logout from '../components/authentication/Logout.vue'

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Logout,
    Comments,
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
      console.log('user here', user);
    })
  }
}
</script>
