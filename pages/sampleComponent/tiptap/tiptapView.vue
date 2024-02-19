<template>
  <v-row class="pt-2 pe-5 h-auto" justify="center">
    <v-col v-if="isEditable" cols="12">
      <v-sheet v-if="editor" class="d-flex justify-center">
        <input
          class="mt-2"
          type="color"
          :value="editor.getAttributes('textStyle').color"
          @input="editor.chain().focus().setColor($event.target.value).run()"
        />

        <v-tooltip v-model="header1Show" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            >
              <v-icon color="default"> mdi-format-header-1 </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">H1</span>
        </v-tooltip>

        <v-tooltip v-model="header2Show" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            >
              <v-icon color="default"> mdi-format-header-2 </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">H2</span>
        </v-tooltip>

        <v-tooltip v-model="header3Show" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            >
              <v-icon color="default"> mdi-format-header-3 </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">H3</span>
        </v-tooltip>

        <v-tooltip v-model="header4Show" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            >
              <v-icon color="default"> mdi-format-header-4 </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">H4</span>
        </v-tooltip>

        <v-tooltip v-model="header5Show" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            >
              <v-icon color="default"> mdi-format-header-5 </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">H5</span>
        </v-tooltip>

        <v-tooltip v-model="boldShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('bold') }"
              @click="editor.chain().focus().toggleBold().run()"
            >
              <v-icon color="default"> mdi-format-bold </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Bold</span>
        </v-tooltip>

        <v-tooltip v-model="italicShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('italic') }"
              @click="editor.chain().focus().toggleItalic().run()"
            >
              <v-icon color="default"> mdi-format-italic </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Italic</span>
        </v-tooltip>

        <v-tooltip v-model="strikeShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('strike') }"
              @click="editor.chain().focus().toggleStrike().run()"
            >
              <v-icon color="default"> mdi-format-strikethrough-variant</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Strike</span>
        </v-tooltip>

        <v-tooltip v-model="underlineShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('underline') }"
              @click="editor.chain().focus().toggleUnderline().run()"
            >
              <v-icon color="default"> mdi-format-underline</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Underline</span>
        </v-tooltip>

        <v-tooltip v-model="highlightShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{
                'is-active': editor.isActive('highlight', { color: '#a19e9e' })
              }"
              @click="
                editor
                  .chain()
                  .focus()
                  .toggleHighlight({ color: '#a19e9e' })
                  .run()
              "
            >
              <v-icon color="default"> mdi-format-color-highlight</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Highlight</span>
        </v-tooltip>

        <v-divider class="ms-3" inset vertical />

        <v-tooltip v-model="alignLeftShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
              @click="editor.chain().focus().setTextAlign('left').run()"
            >
              <v-icon color="info"> mdi-format-align-left</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Align Left</span>
        </v-tooltip>

        <v-tooltip v-model="alignCenterShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
              @click="editor.chain().focus().setTextAlign('center').run()"
            >
              <v-icon color="info"> mdi-format-align-center</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Align Center</span>
        </v-tooltip>

        <v-tooltip v-model="alignRightShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
              @click="editor.chain().focus().setTextAlign('right').run()"
            >
              <v-icon color="info"> mdi-format-align-right</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Align Right</span>
        </v-tooltip>

        <v-divider class="ms-3" inset vertical />

        <v-tooltip v-model="codeBlockShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('codeBlock') }"
              @click="editor.chain().focus().toggleCodeBlock().run()"
            >
              <v-icon color="success"> mdi-variable-box</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Code Block</span>
        </v-tooltip>

        <v-tooltip v-model="orderedListShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('orderedList') }"
              @click="editor.chain().focus().toggleOrderedList().run()"
            >
              <v-icon color="success"> mdi-order-numeric-descending</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Ordered List</span>
        </v-tooltip>

        <v-tooltip v-model="bulletListShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('bulletList') }"
              @click="editor.chain().focus().toggleBulletList().run()"
            >
              <v-icon color="success"> mdi-format-list-bulleted</v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Bullet List</span>
        </v-tooltip>

        <v-tooltip v-model="blockquoteShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('blockquote') }"
              @click="editor.chain().focus().toggleBlockquote().run()"
            >
              <v-icon color="success">
                mdi-format-horizontal-align-right
              </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Block Quote</span>
        </v-tooltip>

        <v-tooltip v-model="linkShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('link') }"
              @click="setLink"
            >
              <v-icon color="success"> mdi-link </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Link</span>
        </v-tooltip>

        <v-tooltip v-model="linkOffShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :disabled="!editor.isActive('link')"
              @click="editor.chain().focus().unsetLink().run()"
            >
              <v-icon color="success"> mdi-link-off </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Link Off</span>
        </v-tooltip>

        <v-tooltip v-model="horizontalRuleShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().setHorizontalRule().run()"
            >
              <v-icon color="success"> mdi-border-bottom-variant </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Horizontal Rule</span>
        </v-tooltip>

        <v-divider class="ms-3" inset vertical />

        <v-tooltip v-model="imageShow" location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props" @click="addImage">
              <v-icon color="warning"> mdi-image </v-icon>
            </v-btn>
          </template>
          <span class="text-subtitle-1">Add Image</span>
        </v-tooltip>

        <v-tooltip v-model="todoShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :class="{ 'is-active': editor.isActive('taskList') }"
              @click="editor.chain().focus().toggleTaskList().run()"
            >
              <v-icon color="warning"> mdi-format-list-text </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Todo list</span>
        </v-tooltip>

        <v-tooltip v-model="tableShow" location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props" @click="hideTableUi">
              <v-icon color="warning"> mdi-table </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Table</span>
        </v-tooltip>

        <v-tooltip v-model="youtubeShow" location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props" @click="addYoutube">
              <v-icon color="warning"> mdi-youtube </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Youtube</span>
        </v-tooltip>
      </v-sheet>

      <v-sheet v-if="editor && tableUi" class="d-flex justify-end">
        <v-tooltip v-model="tableAddShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              "
            >
              <v-icon color="error"> mdi-table-large-plus </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Table Add</span>
        </v-tooltip>

        <v-tooltip v-model="tableRemoveShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().deleteTable().run()"
            >
              <v-icon color="error"> mdi-table-large-remove </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Table Remove</span>
        </v-tooltip>

        <v-tooltip v-model="columnAfterAddShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().addColumnAfter().run()"
            >
              <v-icon color="error"> mdi-table-column-plus-after </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Column After Add</span>
        </v-tooltip>

        <v-tooltip v-model="columnBeforeAddShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().addColumnBefore().run()"
            >
              <v-icon color="error"> mdi-table-column-plus-before </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Column Before Add</span>
        </v-tooltip>

        <v-tooltip v-model="columnRemoveShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().deleteColumn().run()"
            >
              <v-icon color="error"> mdi-table-column-remove </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Column Remove</span>
        </v-tooltip>

        <v-tooltip v-model="rowAfterAddShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().addRowAfter().run()"
            >
              <v-icon color="error"> mdi-table-row-plus-after</v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Row After Add</span>
        </v-tooltip>

        <v-tooltip v-model="rowBeforeAddShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().addRowBefore().run()"
            >
              <v-icon color="error"> mdi-table-row-plus-before </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Row Before Add</span>
        </v-tooltip>

        <v-tooltip v-model="rowRemoveShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().deleteRow().run()"
            >
              <v-icon color="error"> mdi-table-row-remove </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Row Remove</span>
        </v-tooltip>

        <v-tooltip v-model="headerCellShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().toggleHeaderCell().run()"
            >
              <v-icon color="error"> mdi-table-border </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Header Cell</span>
        </v-tooltip>

        <v-tooltip v-model="mergeShow" location="bottom">
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              @click="editor.chain().focus().mergeOrSplit().run()"
            >
              <v-icon color="error"> mdi-table-merge-cells </v-icon>
            </v-btn>
          </template>

          <span class="text-subtitle-1">Cell Merge</span>
        </v-tooltip>
      </v-sheet>
    </v-col>

    <bubble-menu
      v-if="editor && isEditable"
      :editor="editor"
      :tippy-options="{ duration: 100 }"
    >
      <v-sheet v-if="editor" class="bubble-menu">
        <input
          class="mt-1"
          type="color"
          :value="editor.getAttributes('textStyle').color"
          @input="editor.chain().focus().setColor($event.target.value).run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-bold"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-italic"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-strikethrough-variant"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-underline"
          :class="{ 'is-active': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-color-highlight"
          :class="{
            'is-active': editor.isActive('highlight', { color: '#a19e9e' })
          }"
          @click="
            editor.chain().focus().toggleHighlight({ color: '#a19e9e' }).run()
          "
        />

        <v-divider class="ms-3" inset vertical />

        <v-btn
          size="small"
          icon="mdi-format-align-left"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          @click="editor.chain().focus().setTextAlign('left').run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-align-center"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          @click="editor.chain().focus().setTextAlign('center').run()"
        />

        <v-btn
          size="small"
          icon="mdi-format-align-right"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          @click="editor.chain().focus().setTextAlign('right').run()"
        />
      </v-sheet>
    </bubble-menu>

    <v-col cols="12">
      <editor-content :editor="editor" class="editor-content" />
      <div v-if="editor && isEditable" class="character-count">
        {{ editor.storage.characterCount.characters() }} / {{ limit }}
      </div>
    </v-col>

    <v-col v-if="isEditable" cols="12" class="d-flex justify-end mt-2 mr-5">
      <v-btn rounded="lg" size="x-large" color="info" @click="getHtml">
        SAVE
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu, Editor, EditorContent } from '@tiptap/vue-3'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import CharacterCount from '@tiptap/extension-character-count'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Image from '@tiptap/extension-image'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Highlight from '@tiptap/extension-highlight'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Youtube from '@tiptap/extension-youtube'
import Dropcursor from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'

export default defineComponent({
  components: {
    EditorContent,
    BubbleMenu
  },

  setup: function () {
    // editor
    const editor = ref<string | null>(null)
    const isEditable = ref<boolean>(true)

    // character size
    const limit = ref<number>(10000)

    // placeholder text
    const placeholderTxt = ref<string | null>('Write something')

    // youtube size
    const yWidth = ref('640')
    const yHeight = ref('480')

    // tooltip
    const header1Show = ref(false)
    const header2Show = ref(false)
    const header3Show = ref(false)
    const header4Show = ref(false)
    const header5Show = ref(false)
    const boldShow = ref(false)
    const italicShow = ref(false)
    const strikeShow = ref(false)
    const underlineShow = ref(false)
    const alignLeftShow = ref(false)
    const alignCenterShow = ref(false)
    const alignRightShow = ref(false)
    const codeBlockShow = ref(false)
    const bulletListShow = ref(false)
    const orderedListShow = ref(false)
    const blockquoteShow = ref(false)
    const horizontalRuleShow = ref(false)
    const linkShow = ref(false)
    const linkOffShow = ref(false)
    const imageShow = ref(false)
    const todoShow = ref(false)
    const tableShow = ref(false)
    const tableUi = ref(false)
    const tableAddShow = ref(false)
    const tableRemoveShow = ref(false)
    const columnAfterAddShow = ref(false)
    const columnBeforeAddShow = ref(false)
    const columnRemoveShow = ref(false)
    const rowAfterAddShow = ref(false)
    const rowBeforeAddShow = ref(false)
    const rowRemoveShow = ref(false)
    const headerCellShow = ref(false)
    const mergeShow = ref(false)
    const youtubeShow = ref(false)

    const setLink = () => {
      const previousUrl = editor.value.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      if (url === null) {
        return
      }

      if (url === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
        return
      }

      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    }

    const addImage = () => {
      // 파일식으로 구현 필요 todo 이미지를 업로드한 이후에 리턴받은 url을 넣어줄것

      // const url = window.prompt('URL')
      //
      // if (url) {
      //   editor.value.chain().focus().setImage({ src: url }).run()
      // }

      const url = 'https://source.unsplash.com/8xznAGy4HcY/800x400'
      editor.value.chain().focus().setImage({ src: url }).run()
    }

    const addYoutube = () => {
      // todo 팝업으로 youtube url, width, height 받게 변경

      editor.value.commands.setYoutubeVideo({
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        width: 640,
        height: 480
      })
    }

    const hideTableUi = () => {
      tableUi.value = !tableUi.value
    }

    const getHtml = () => {
      const contentHtml = editor.value.getHTML()
      console.log('contentHtml', contentHtml)
    }

    watch(isEditable, (val) => {
      editor.value.setEditable(val)
    })

    onMounted(() => {
      editor.value = new Editor({
        extensions: [
          StarterKit,
          TextStyle,
          Color,
          Underline,
          HorizontalRule,
          Image.configure({
            inline: true
          }),
          CharacterCount.configure({
            limit: limit.value
          }),
          TextAlign.configure({
            types: ['heading', 'paragraph']
          }),
          Placeholder.configure({
            placeholder: placeholderTxt.value
          }),
          Link.configure({
            openOnClick: false
          }),
          TaskList,
          TaskItem.configure({
            nested: true
          }),
          Highlight.configure({ multicolor: true }),
          Table.configure({
            resizable: true
          }),
          TableRow,
          TableHeader,
          TableCell,
          Youtube.configure({
            controls: false
          }),
          Dropcursor.configure({
            width: 1
          }),
          Gapcursor
        ],
        content: `
      `,
        editorProps: {
          attributes: {
            spellcheck: 'false'
          }
        }
      })
    })

    onBeforeUnmount(() => {
      editor.value.destroy()
    })

    return {
      editor,
      isEditable,
      limit,
      header1Show,
      header2Show,
      header3Show,
      header4Show,
      header5Show,
      boldShow,
      italicShow,
      strikeShow,
      underlineShow,
      alignLeftShow,
      alignCenterShow,
      alignRightShow,
      codeBlockShow,
      bulletListShow,
      orderedListShow,
      blockquoteShow,
      horizontalRuleShow,
      linkShow,
      linkOffShow,
      imageShow,
      todoShow,
      tableShow,
      tableUi,
      tableAddShow,
      tableRemoveShow,
      columnAfterAddShow,
      columnBeforeAddShow,
      columnRemoveShow,
      rowAfterAddShow,
      rowBeforeAddShow,
      rowRemoveShow,
      headerCellShow,
      mergeShow,
      youtubeShow,
      yWidth,
      yHeight,
      setLink,
      addImage,
      hideTableUi,
      addYoutube,
      getHtml
    }
  }
})
</script>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  a {
    color: #68cef8;
  }

  img {
    max-width: 100%;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }

  ul,
  ol {
    padding: 0 2rem;
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 10px;

    p {
      margin: 0;
    }

    li {
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }

      ul li,
      ol li {
        display: list-item;
      }

      ul[data-type='taskList'] > li {
        display: flex;
      }
    }
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
      color: #676565;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }

  iframe {
    border: 8px solid #000;
    border-radius: 4px;
    min-width: 200px;
    min-height: 200px;
    display: block;
    outline: 0px solid transparent;
  }

  div[data-youtube-video] {
    cursor: move;
    padding-right: 24px;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #ece111;
  }

  hr.ProseMirror-selectednode {
    border-top: 1px solid #68cef8;
  }

  pre {
    background: #7a7777;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.1rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  blockquote p {
    padding-left: 2rem;
    border-left: 3px solid rgba(#0d0d0d, 0.1);
  }

  .tableWrapper {
    padding: 1rem 1rem;
    overflow-x: auto;
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

  mark {
    padding: 0.5em 0;
    border-radius: 0.25em;
    box-decoration-break: clone;
  }
}
.editor-content {
  min-height: 200px;
  padding: 10px;
  border: 1px solid #616161;
}

.character-count {
  margin-top: 1rem;
  color: #868e96;
}

.drop-cursor {
  background: black;
  padding-top: 10px;
}

.bubble-menu {
  display: flex;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 0.25em;
  min-width: 400px;
}

.ProseMirror {
  padding: 10px;
  min-height: 200px;
}
</style>
