<template>
  <div class="comment-list-page">
      <Comments />
  </div>
</template>

<script>

import Comments from 'src/domains/Comment/components/Comments.vue'

export default {
  name: 'CommentsPage',
  components: {
    Comments,
  },
}
</script>
