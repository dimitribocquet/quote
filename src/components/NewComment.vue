<template>
  <form @submit.prevent="submitNewComment">
      <textarea v-model="message" cols="60" rows="6" placeholder="Comment here..."></textarea>
      <button type="submit">Submit</button>
  </form>
</template>

<script>

export default {
  name: 'NewComment',
  data() {
      return {
          message: ''
      }
  },
  methods: {
      submitNewComment() {
          this.$emit('new-comment', this.message);
      }
  }
}
</script>