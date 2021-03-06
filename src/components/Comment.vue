<template>
  <div v-html="comment.message"></div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
        required: true,
    }
  }
}
</script>