import { newSpecPage } from '@stencil/core/testing';
import { FullCalendar } from '../full-calendar';

describe('full-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FullCalendar],
      html: `<full-calendar></full-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <full-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </full-calendar>
    `);
  });
});
