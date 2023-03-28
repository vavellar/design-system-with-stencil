import { Component, h, Prop} from '@stencil/core';
@Component({
  tag: 'demo-button',
  styleUrl: 'demo-button.scss',
  shadow: true,
})
export class DemoButton {
  @Prop() variant: 'primary' | 'secondary' | 'text' = 'primary'
  @Prop() size: 'x-large' | 'large' | 'medium' | 'small' = 'medium'
  @Prop() isDisabled: boolean

  render() {
    return (
      <button type="button" class={`btn__${this.variant} btn__${this.size}`} disabled={this.isDisabled}>
       <slot/>
      </button>
    );
  }

}
