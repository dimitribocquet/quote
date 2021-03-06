<template>
  <form @submit.prevent="submitNewComment">
    <Editor v-model="message" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Editor from './forms/Editor'

export default {
  name: 'NewComment',
  components: {
      Editor,
  },
  data() {
      return {
          message: '<p>Type your comment here</p>'
      }
  },
  methods: {
      submitNewComment() {
          this.$emit('new-comment', this.message);
      }
  }
}
</script>