<template>
  <form @submit.prevent="submitNewComment">
    <Editor v-model="message" />
    
    <div class="actions pt-6 w-full flex">
      <button type="submit" class="inline-flex items-center justify-center border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :class="submitSizeClass">
        {{ submitText }}
      </button>
    </div>
  </form>
</template>

<script>
import Editor from 'src/web/components/forms/Editor'

export default {
  name: 'NewComment',
  components: {
      Editor,
  },
  props: {
    submitText: {
      type: String,
      default: 'Post my new quote'
    },
    submitSize: {
      type: String,
      default: 'md',
    }
  },
  computed: {
    submitSizeClass() {
      switch(this.submitSize) {
        case 'xl':
          return 'w-full px-6 py-4';
        default:
          return 'px-6 py-2';
      }
    }
  },
  data() {
      return {
          message: null
      }
  },
  methods: {
      submitNewComment() {
          this.$emit('new-comment', this.message);
      }
  }
}
</script>