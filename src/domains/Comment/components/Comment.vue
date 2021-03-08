<template>
  <div>
    <div v-html="comment.message"></div>
    <div class="actions">
      <router-link v-if="!disableShowBtn" :to="{name: 'CommentShow', params: {id: comment.id }}">Show</router-link>
    </div>
    <h3>Reply:</h3>
    <NewComment v-if="user" v-on:new-comment="pushNewComment" />
    <hr>
  </div>
</template>

<script>
import {db, auth} from 'src/config/db';

import NewComment from './NewComment';

export default {
  name: 'Comment',
  components: {
    NewComment,
  },
  props: {
    comment: {
        required: true,
    },
    disableShowBtn: Boolean,
  },
  data() {
    return {
      user: null,
      comments: []
    }
  },
  firestore: {
    comments: db.collection('comments'),
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
  },
  methods: {
      pushNewComment(message) {
          db.collection('comments')
            .add({
                userId: this.user.uid,
                orderId: this.comments.length + 1,
                georeferenceId: 123456,
                message: message,
                createdAt: new Date(),
                channelId: this.user.uid + '_' + (this.comments.length + 1) + '_' + 123456,
                channelParentId: this.comment.channelId,
            })
      }
  }
}
</script>