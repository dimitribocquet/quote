<template>
  <div class="comment show">
    <h1>Details of comment</h1>

    <Comment v-if="comment" :comment="comment" disable-show-btn />
  </div>
</template>

<script>
import {db} from 'src/config/db';
import Comment from 'src/domains/Comment/components/Comment';

const comments = db.collection('comments')

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
        this.$bind('comment', comments.doc(id))
      }
    }
  },
}
</script>