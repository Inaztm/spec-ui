import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Component, Host, h, Prop, State, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'spec-tiptap-editor',
  styleUrl: 'tiptap-editor.scss',
  shadow: true,
})
export class TiptapEditor {

  @Prop() value: string = ''

  @State() editor: Editor | null = null

  @Element() el: HTMLElement

  @Event() editorCreated: EventEmitter<any>
  @Event() editorChange: EventEmitter<any>
  @Event() editorFocus: EventEmitter<any>
  @Event() editorBlur: EventEmitter<any>

  protected setupEditor() {
    const attachEl = this.el.shadowRoot.querySelector('.tiptap-editor') as HTMLElement
    if (!attachEl || attachEl.childNodes.length) return
    this.editor = new Editor({
      element: attachEl,
      extensions: [
        StarterKit,
        Link.configure({
          autolink: true,
          openOnClick: true,
          linkOnPaste: true,
          HTMLAttributes: {
            class: 'link',
          },
        }),
      ],
      content: this.value,
      onBeforeCreate: () => {
      // Before the view is created.
      },
      onCreate: ({ editor }) => {
        this._onCreated(editor);
      },
      onUpdate: ({ editor }) => {
        const value = editor.getHTML();
        this._onChange(value);
      },
      onSelectionUpdate: () => {
      // The selection has changed.
      },
      onTransaction: () => {
      // The editor state has changed.
      },
      onFocus: () => {
        this._onFocus();
      },
      onBlur: () => {
        this._onBlur();
      },
      onDestroy: () => {
      // The editor is being destroyed.
      },
    });
  }

  componentWillLoad() {
    setTimeout(() => this.setupEditor());
  }

  render() {
    return (
      <Host>
        <div class="tiptap-editor"></div>
      </Host>
    );
  }

  _onCreated(editor: Editor | null) {
    this.editorCreated.emit(editor)
  }

  _onChange(value: any) {
    this.editorChange.emit(value)
  }

  _onFocus() {
    this.editorFocus.emit()
  }

  _onBlur() {
    this.editorBlur.emit()
  }

}
