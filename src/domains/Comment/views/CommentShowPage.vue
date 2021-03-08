<template>
  <div class="comment show">
    <h1>Details of comment</h1>

    <Comment v-if="comment" :comment="comment" disable-show-btn />
  </div>
</template>

<script>
import CommentService from 'src/domains/Comment/services/CommentService';
import Comment from 'src/domains/Comment/components/Comment';

export default {
  name: 'CommentShow',
  components: {
    Comment
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  data() {
    return {
      comment: null
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        this.$bind('comment', CommentService.get(id))
      }
    }
  },
}
</script>