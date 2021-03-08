<template>
    <div>
        <h2>Register</h2>
          <form @submit.prevent="register">
          <input type="email" v-model="email" placeholder="Email address" required />
          <input type="password" v-model="password" placeholder="Password" required minlength="6" />
          <button type="submit">Register</button>
          </form>
    </div>
</template>

<script>

import {auth} from 'src/config/db';

export default {
  name: 'Register',
  data() {
      return {
          email: '',
          password: '',
      }
  },
  methods: {
      register() {
          auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(response => {
                console.log('registered!', response);
            })
            .catch(reason => {
                console.log('nope.', reason);
            })
      }
  }
}
</script>