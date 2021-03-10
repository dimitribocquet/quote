<template>
  <div class="comment-list-page">
    <div class="text-center font-light text-gray-400 text-2xl mt-8 mb-4">
      Post a <span class="text-gradient">new quote</span>
    </div>
    <div class="relative border shadow-purple-700-xl rounded-xl bg-white p-4">
      <NewComment v-if="user" v-on:new-comment="pushNewComment" class="bubble-text" submit-size="xl" />
      <div v-else class="text-center font-light my-8 text-purple-500">Sign in or create your free account to post your quotes!</div>
    </div>
    <hr class="my-8" />

    <Loading v-if="loading" />
    <template v-else>
      <h3 class="mb-8 font-light text-gray-400 text-2xl">Actives <span class="text-gradient">quotes</span></h3>
      <Comments 
        class="pb-8"
        :data="comments"
        space="12"
        v-on:new-comment="pushNewComment"
      />
    </template>
  </div>
</template>

<script>

import {auth} from 'src/config/db';
import CommentService from 'src/domains/Comment/services/CommentService';
import NewComment from 'src/domains/Comment/components/NewComment';

export default {
  name: 'CommentsPage',
  components: {
    NewComment
  },
  computed: {
      hasComments() { return !!this.comments.length }
  },
  data() {
    return {
      loading: true,
      user: null,
      comments: []
    }
  },
  firestore: {
    comments: CommentService.all(),
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.user = user
      this.loading = false
    })
  },
  methods: {
      pushNewComment(message) {
        CommentService.create(this.user.uid, message)
      }
  }
}
</script>
