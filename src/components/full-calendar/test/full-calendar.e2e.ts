import { newE2EPage } from '@stencil/core/testing';

describe('full-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<full-calendar></full-calendar>');

    const element = await page.find('full-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
