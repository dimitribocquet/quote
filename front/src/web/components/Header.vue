<template>
    <div class="pt-16 relative flex justify-center">

      <Auth class="absolute right-0 top-0 mr-8 mt-4" />
      <router-link  :to="{name: 'CommentsPage'}" class="logo">
        quote
      </router-link>

    </div>
</template>
<script>
import Auth from 'src/domains/Authentication/components/Auth.vue'

export default {
  components: {
    Auth
  }
}
</script>