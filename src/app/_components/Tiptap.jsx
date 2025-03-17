
'use client'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { EditorContent, useEditor } from '@tiptap/react';
import '../_components/_style/tiptap.css';
import { useState } from "react";


function Tiptap({ name, sendDataToParent }) {
  console.log("name", name)

  const editor = useEditor({
    onUpdate({ editor }) {
      sendDataToParent({ name: editor.getHTML() });
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
      BulletList.configure({
        keepMarks: true,
        itemTypeName: 'listItem',
      })
    ],
    content: ``,
  });
  if (!editor) {
    return null
  }

  return (
    <>
      <div className="tiptap-wrapper">
        <div className="control-group">
          <div className="button-group">
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
              H1
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
              H2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
              H3
            </button>

            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
              className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
              H4
            </button>

            {/* list  */}
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              bullet list
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
              ordered list
            </button>
          </div>
        </div>
        <EditorContent editor={editor} />
      </div>
    </>
  )
}

export default Tiptap;