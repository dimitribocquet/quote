<template>
  <div class="comments" style="background-color: gray">

    <div v-if="showReply">
      <h2>New comment</h2>
      <NewComment v-if="user" v-on:new-comment="$emit('new-comment', $event)" />
      <div v-else>
          You must be logged in to comment.
      </div>
    </div>

    <h1>Comments</h1>

    <div v-if="!hasComments"
        class="no-results">
        No comments
    </div>
    <div v-else>
      <div v-for="comment in data" :key="comment.id">
        <Comment :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import {auth} from 'src/config/db';

import NewComment from './NewComment';

export default {
  name: 'Comments',
  components: {
      NewComment,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    showReply: {
      type: Boolean,
      default: true,
    }
  },
  computed: {
      hasComments() { return !!this.data.length },
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    auth.onAuthStateChanged(user => this.user = user)
  },
}
</script>