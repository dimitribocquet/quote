<template>
  <div class="comments">
    <div v-if="!hasComments"
        class="no-results text-center text-gray-500 pb-8">
        There is no comment yet. Be the first to comment!
    </div>
    <div v-else>
      <div v-for="comment in data" :key="comment.id" :class="spaceClass">
        <Comment :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    data: {
      type: Array,
      required: true,
    },
    showReply: {
      type: Boolean,
      default: false,
    },
    space: {
      type: Number,
      default: 4,
    }
  },
  computed: {
      hasComments() { return !!this.data.length },
      spaceClass() { return 'mb-'+this.space },
  },
}
</script>