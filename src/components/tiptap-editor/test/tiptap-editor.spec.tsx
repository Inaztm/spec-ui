import { newSpecPage } from '@stencil/core/testing';
import { TiptapEditor } from '../tiptap-editor';

describe('tiptap-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TiptapEditor],
      html: `<tiptap-editor></tiptap-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <tiptap-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tiptap-editor>
    `);
  });
});
