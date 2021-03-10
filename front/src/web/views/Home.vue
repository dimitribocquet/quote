<template>
  <div class="home">
      <CommentsPage />
  </div>
</template>

<script>
import CommentsPage from 'src/domains/Comment/views/CommentsPage.vue'

export default {
  name: 'App',
  components: {
    CommentsPage,
  },
  data() {
    return {
      
    }
  },
}
</script>
