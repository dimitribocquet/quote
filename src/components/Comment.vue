<template>
  <div>
    <div v-html="comment.message"></div>
    <div class="actions">
      <router-link v-if="!disableShowBtn" :to="{name: 'CommentShow', params: {id: comment.id }}">Show</router-link>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
        required: true,
    },
    disableShowBtn: Boolean,
  }
}
</script>