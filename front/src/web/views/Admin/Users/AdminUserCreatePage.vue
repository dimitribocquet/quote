<template>
  <div class="admin-user-create-page">
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">New User</h3>
        <p class="mt-1 text-sm text-gray-600">
          Fill the personal informations.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="create">
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
  name: 'AdminUserCreatePage',
  data() {
    return {
      saveMessage: 'Create',
      user: {
        name: '',
        email: '',
        role: 'user',
      }
    }
  },
  methods: {
    async create() {
      this.user = await UserService.create(this.user)
      this.saveMessage = 'Successfully created!'
      setTimeout(() => {
        this.$router.push({name: 'AdminUserEditPage', params: {id: this.user._id}})
        this.saveMessage = 'Create'
      }, 1000);
    },
  }
}
</script>