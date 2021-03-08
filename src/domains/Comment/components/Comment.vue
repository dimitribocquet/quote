<template>
  <div style="background-color: antiquewhite; margin: 20px; padding: 20px;">
    <div v-html="comment.message"></div>
    <div class="actions">
      <router-link v-if="!disableShowBtn" :to="{name: 'CommentShow', params: {id: comment.id }}">Show</router-link>
      <button @click="toggleReply()">Reply</button>
    </div>

    <h3>Responses</h3>
    <Comments 
      :data="relatedComments" 
      :show-reply="showReply"
      v-on:new-comment="pushNewComment"
    />
    <hr>
  </div>
</template>

<script>
import {db, auth} from 'src/config/db';

const commentsDb = db.collection('comments')

export default {
  name: 'Comment',
  props: {
    comment: {
        required: true,
    },
    disableShowBtn: Boolean,
  },
  computed: {
    commentChannelId() { return this.comment.channelId },
    orderId() { return this.relatedComments.length + 1 },
    geoReferenceId() { return this.comment ? this.comment.georeferenceId + 1 : 1 },
    channelId() { return this.user.uid + '_' + this.geoReferenceId + '_' + this.orderId },
  },
  data() {
    return {
      user: null,
      relatedComments: [],
      showReply: false,
    }
  },
  watch: {
    commentChannelId: {
      immediate: true,
      
      handler(commentChannelId) {
        if(commentChannelId) {
          this.$bind('relatedComments', commentsDb.where('channelParentId', '==', commentChannelId).orderBy('orderId'))
        }
      }
    }
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
  },
  methods: {
    toggleReply() {
      this.showReply = !this.showReply
    },
      pushNewComment(message) {
          db.collection('comments')
            .add({
                userId: this.user.uid,
                orderId: this.orderId,
                georeferenceId: this.geoReferenceId,
                message: message,
                createdAt: new Date(),
                channelId: this.channelId,
                channelParentId: this.comment.channelId,
            })
      }
  }
}
</script>