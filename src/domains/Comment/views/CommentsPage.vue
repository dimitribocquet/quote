<template>
  <div class="comment-list-page">
      <Comments 
        :data="comments"
        v-on:new-comment="pushNewComment"
      />
  </div>
</template>

<script>

import {auth} from 'src/config/db';
import CommentService from 'src/domains/Comment/services/CommentService';

export default {
  name: 'CommentsPage',
  computed: {
      hasComments() { return !!this.comments.length }
  },
  data() {
    return {
      user: null,
      comments: []
    }
  },
  firestore: {
    comments: CommentService.all(),
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
  },
  methods: {
      pushNewComment(message) {
        CommentService.create(this.user.uid, message)
      }
  }
}
</script>
