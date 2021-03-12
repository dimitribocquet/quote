<template>
  <div class="admin-users-page">
    <!-- <div class="text-2xl text-gray-400">User {{ id }}</div> -->
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">User {{ id }}</h3>
        <p class="mt-1 text-sm text-gray-600">
          Edit the personal informations.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="save">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <FormInput class="col-span-6 sm:col-span-3" v-model="user.name" name="name" label="Name" autocomplete="name" required />
              <FormInput class="col-span-6 sm:col-span-3" v-model="user.email" type="email" name="email" label="Email" autocomplete="email" required />

              <div class="col-span-6 sm:col-span-3">
                <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                <select v-model="user.role" id="role" name="role" autocomplete="role" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
            <router-link :to="{ name: 'AdminUsersPage'}" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Back to Users
            </router-link>
            <div class="space-x-2">
              <button @click.prevent="deleteItem" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Delete
              </button>
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                {{ saveMessage }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import UserService from 'src/web/services/admin/UserService'

export default {
  name: 'AdminUserEditPage',
  computed: {
    id() { return this.$route.params.id },
  },
  data() {
    return {
      saveMessage: 'Save',
      user: {}
    }
  },
  methods: {
    async save() {
      await UserService.update(this.id, this.user)
      this.saveMessage = 'Successfully saved!'
      setTimeout(() => {
        this.saveMessage = 'Save'
      }, 3000);
    },
    async deleteItem() {
      if(confirm('Are you sure you want to delete this user?')) {
        let deleteSuccess = await UserService.delete(this.id)
        if(deleteSuccess) {
          this.$router.push({name: 'AdminUsersPage'});
        } else {
          alert('Cannot delete this user.');
        }
      }
    }
  },
  watch: {
    id: {
      immediate: true,
      
      async handler(id) {
        this.user = await UserService.get(id)
      }
    }
  }
}
</script>