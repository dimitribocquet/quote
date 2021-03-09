<template>
    <div>
        <h2 class="mb-4 font-medium text-gray-700 text-xl text-center">Create new account</h2>
        <form @submit.prevent="register" class="space-y-6" >
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div class="mt-1">
                    <input type="email" v-model="email" placeholder="Email address" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div class="mt-1">
                    <input type="password" v-model="password" placeholder="Password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                </div>
            </div>

            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Create new account
                </button>
            </div>
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
                this.$emit('success', true);
            })
            .catch(reason => {
                console.log('nope.', reason);
                this.$emit('error', reason);
            })
      }
  }
}
</script>