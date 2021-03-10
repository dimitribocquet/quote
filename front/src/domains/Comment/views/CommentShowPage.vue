<template>
  <div class="comment show mt-8">
    <router-link :to="{name: 'CommentsPage'}" class="mx-2 text-indigo-600 hover:text-indigo-700 focus:outline-none"><font-awesome-icon icon="chevron-left" class="mr-1" /> Back</router-link>
    <Loading v-if="!comment" />
    <Comment v-else :comment="comment" disable-show-btn class="mt-4" />
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
      loading: true,
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