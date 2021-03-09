<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar text-center mb-4">
        <button
          class="menubar__button px-2 py-1"
          :class="{ 'is-active': isActive.bold() }"
          @click.prevent="commands.bold"
        >
            <font-awesome-icon icon="bold" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.italic() }"
          @click.prevent="commands.italic"
        >
            <font-awesome-icon icon="italic" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.strike() }"
          @click.prevent="commands.strike"
        >
            <font-awesome-icon icon="strikethrough" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.underline() }"
          @click.prevent="commands.underline"
        >
            <font-awesome-icon icon="underline" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.code() }"
          @click.prevent="commands.code"
        >
            <font-awesome-icon icon="code" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.paragraph() }"
          @click.prevent="commands.paragraph"
        >
            <font-awesome-icon icon="paragraph" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.heading({ level: 1 }) }"
          @click.prevent="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.heading({ level: 2 }) }"
          @click.prevent="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.heading({ level: 3 }) }"
          @click.prevent="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.bullet_list() }"
          @click.prevent="commands.bullet_list"
        >
            <font-awesome-icon icon="list-ul" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.ordered_list() }"
          @click.prevent="commands.ordered_list"
        >
            <font-awesome-icon icon="list-ol" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.blockquote() }"
          @click.prevent="commands.blockquote"
        >
            <font-awesome-icon icon="quote-left" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          :class="{ 'text-blue-500': isActive.code_block() }"
          @click.prevent="commands.code_block"
        >
            <font-awesome-icon icon="code" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          @click.prevent="commands.horizontal_rule"
        >
          Hr
        </button>

        <button
          class="menubar__button px-2 py-1"
          @click.prevent="commands.undo"
        >
            <font-awesome-icon icon="undo-alt" />
        </button>

        <button
          class="menubar__button px-2 py-1"
          @click.prevent="commands.redo"
        >
            <font-awesome-icon icon="redo-alt" />
        </button>

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
    <input type="text" v-model="editor.extensions.options.placeholder.emptyNodeText" class="invisible">
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  props: {
      value: {
          type: String,
      },
      placeholder: {
        type: String,
        default: 'Write something...',
      }
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: this.placeholder,
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          })
        ],
        content: this.value,
        onUpdate: ({ getHTML }) => {
            this.$emit('input', getHTML())
        }
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style>
  .editor p.is-editor-empty:first-child::before {
    @apply text-gray-300 italic float-left pointer-events-none h-0;
    content: attr(data-empty-text);
  }

  .editor__content, .ProseMirror-focused {
    @apply focus:ring-0 focus:outline-none;
  }
</style>