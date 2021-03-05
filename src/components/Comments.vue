<template>
  <div class="comments">
    <h1>Comments</h1>

    <div v-if="!hasComments"
        class="no-results">
        No comments
    </div>
    <div v-else>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>

    <NewComment v-if="user" v-on:new-comment="pushNewComment" />
    <div v-else>
        You must be logged in to comment.
    </div>
  </div>
</template>

<script>
import {db, auth} from '../config/db';

import Comment from './Comment';
import NewComment from './NewComment';

export default {
  name: 'Comments',
  components: {
      Comment,
      NewComment,
  },
  computed: {
      hasComments: function() {
          return !!this.comments.length
      }
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
                message: message
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
