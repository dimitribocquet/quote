<template>
    <div>
        <h2 class="mb-4 font-medium text-gray-700 text-xl text-center">Login</h2>
        <form @submit.prevent="login" class="space-y-6" >
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div class="mt-1">
                    <input type="email" v-model="email" placeholder="Email address" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div class="mt-1">
                    <input type="password" v-model="password" placeholder="Password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
            </div>

            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                </button>
            </div>
      </form>
    </div>
</template>

<script>

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
            this.$auth.login({
                data: {
                    email: this.email,
                    password: this.password,
                }
            })
            .then(response => {
                console.log('signed in!', response);
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