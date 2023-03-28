import { newSpecPage } from '@stencil/core/testing';
import { DemoButton } from '../demo-button';

describe('demo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoButton],
      html: `<demo-button></demo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-button>
    `);
  });
});
