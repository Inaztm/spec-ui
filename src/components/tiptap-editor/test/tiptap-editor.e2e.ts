import { newE2EPage } from '@stencil/core/testing';

describe('tiptap-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tiptap-editor></tiptap-editor>');

    const element = await page.find('tiptap-editor');
    expect(element).toHaveClass('hydrated');
  });
});
