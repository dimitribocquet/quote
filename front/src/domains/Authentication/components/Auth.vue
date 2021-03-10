<template>
    <div>
      <template v-if="!user">
        <button @click.prevent="openLoginModal()" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </template>
      <div v-else class="text-sm text-gray-400 align-middle">
        {{ user.name || user.email }}
        <Logout />
      </div>

      <AuthModal v-model="loginModalOpened" />
  </div>
</template>

<script>

import AuthModal from './AuthModal.vue'
import Logout from './Logout.vue'

export default {
  name: 'App',
  components: {
    AuthModal,
    Logout,
  },
  computed: {
    user() { console.log('user', this.$auth.user()); return this.$auth.user() }
  },
  data() {
    return {
      loginModalOpened: false,
    }
  },
  methods: {
    openLoginModal() {
      this.loginModalOpened = true
    },
    closeLoginModal() {
      this.loginModalOpened = false
    }
  }
}
</script>
