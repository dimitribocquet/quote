<template>
  <div class="relative border shadow-pink-700-xl rounded-xl bg-white p-4 overflow-hidden">
    <div v-html="comment.message"></div>

    <div class="mt-8">
      <div class="infos flex justify-start">
        <span class="text-xs text-gray-500">{{ comment.createdAt.toDate() | diffForHumans }}</span>
      </div>
      <div class="actions flex justify-between items-end space-x-4 mt-2">
        <button @click.prevent="toggleReply()" class="inline-flex items-center justify-center px-6 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">{{ totalRelatedCommentsTitle }}</button>
        <router-link v-if="!disableShowBtn" :to="{name: 'CommentShow', params: {id: comment.id }}" class="text-indigo-600 hover:text-indigo-700 focus:outline-none">Go to details</router-link>
      </div>
    </div>

    <div v-if="showReply">
      <hr class="my-4 -mx-4">
      <div>
        <h4 class="mt-4 mb-4 font-extralight text-gray-400 text-xl">Reply</h4>
        <NewComment v-if="user" submit-text="Post reply" v-on:new-comment="pushNewComment" />
        <div v-else class="text-center font-light my-8 text-purple-500">Sign in or create your free account to post your quotes!</div>
      </div>

      <hr class="my-4 -mx-4">
      <div class="bg-gray-50 -m-4 pl-4 md:pl-12 pr-4 pt-4 pb-1">
        <!-- <h3 class="pt-4 mb-4 font-light text-gray-400 text-2xl">{{ totalRelatedCommentsTitle }}</h3> -->
        <Comments 
          :data="relatedComments"
          v-on:new-comment="pushNewComment"
        />
      </div>
    </div>

    
  </div>
</template>

<script>
import {auth} from 'src/config/db';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import CommentService from 'src/domains/Comment/services/CommentService';
import NewComment from './NewComment';

export default {
  name: 'Comment',
  components: {
    NewComment
  },
  props: {
    comment: {
        required: true,
    },
    disableShowBtn: Boolean,
  },
  computed: {
    commentChannelId() { return this.comment.channelId },
    totalRelatedCommentsTitle() { return this.relatedComments.length + (this.relatedComments.length > 1 ? ' comments' : ' comment') },
    orderId() { return this.relatedComments.length + 1 },
    geoReferenceId() { return this.comment ? this.comment.georeferenceId + 1 : 1 },
    channelId() { return this.user.uid + '_' + this.geoReferenceId + '_' + this.orderId },
  },
  filters: {
    diffForHumans: (date) => {
      if (!date){
        return null;
      }
      
      return dayjs(date).fromNow();
    }
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
          this.$bind('relatedComments', CommentService.all(commentChannelId))
        }
      }
    }
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
    dayjs.extend(relativeTime);
  },
  methods: {
    toggleReply() {
      this.showReply = !this.showReply
    },
      pushNewComment(message) {
        CommentService.create(this.user.uid, message, this.orderId, this.geoReferenceId, this.commentChannelId);
      }
  }
}
</script>