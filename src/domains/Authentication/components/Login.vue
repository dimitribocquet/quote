<template>
    <div>
        <h2>Login with</h2>
        <p>Email and password</p>
          <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email address" required />
            <input type="password" v-model="password" placeholder="Password" required minlength="6" />
            <button type="submit">Login</button>
          </form>
    </div>
</template>

<script>

import {auth} from 'src/config/db';

export default {
  name: 'Login',
  data() {
      return {
          email: '',
          password: '',
      }
  },
  methods: {
      login() {
          auth.signInWithEmailAndPassword(this.email, this.password)
            .then(response => {
                console.log('signed in!', response);
            })
            .catch(reason => {
                console.log('nope.', reason);
            })
      }
  }
}
</script>