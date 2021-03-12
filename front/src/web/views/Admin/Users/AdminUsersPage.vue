<template>
  <div class="admin-users-page">
    <div class="flex">
      <div class="flex-grow text-2xl text-gray-400">Users</div>
      <router-link :to="{name: 'AdminUserCreatePage'}" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
        New User
      </router-link>
    </div>
    <CTable class="mt-4" :columns="columns" :list="users"
        @edit="$router.push({ name: 'AdminUserEditPage', params: { id: $event } })"
        @delete="deleteItem"
    />
  </div>
</template>

<script>
import UserService from 'src/web/services/admin/UserService'

export default {
  name: 'AdminUsersPage',
  data() {
    return {
      columns: ['_id','name','email','role','createdAt'],
      users: []
    }
  },
  async created() {
      this.users = await UserService.all()
  },
  methods: {
    async deleteItem(id) {
      let userIndex = this.users.findIndex(el => el._id == id);
      let user = this.users[userIndex];

      if(confirm('Are you sure you want to delete "'+user.name+'"?')) {
        let deleteSuccess = await UserService.delete(id)
        if(deleteSuccess) {
          this.users.splice(userIndex, 1)
        } else {
          alert('Cannot delete this user.');
        }
      }
    }
  }
}
</script>