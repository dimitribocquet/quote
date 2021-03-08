<template>
  <div class="comment-list-page">
      <Comments 
        :data="comments"
        v-on:new-comment="pushNewComment"
      />
  </div>
</template>

<script>

import {db, auth} from 'src/config/db';

export default {
  name: 'CommentsPage',
  computed: {
      hasComments() { return !!this.comments.length },
      orderId() { return this.comments.length + 1 },
      geoReferenceId() { return 1 },
      channelId() { return this.user.uid + '_' + this.geoReferenceId + '_' + this.orderId },
  },
  data() {
    return {
      user: null,
      comments: []
    }
  },
  firestore: {
    comments: db.collection('comments').where('channelParentId', '==', null).orderBy('orderId'),
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
  },
  methods: {
      pushNewComment(message) {
          db.collection('comments')
            .add({
                userId: this.user.uid,
                orderId: this.orderId,
                georeferenceId: this.geoReferenceId,
                message: message,
                createdAt: new Date(),
                channelId: this.channelId,
                channelParentId: null,
            })
      }
  }
}
</script>
