import {
  html,
  LitElement,
  css,
  CSSResultArray,
  HTMLTemplateResult,
  nothing,
} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {baseStyles} from './base/base-style.js'

export enum ButtonType {
  BASE = 'base',
  ICONONLY = 'icononly',
  ICONLABEL = 'iconlabel',
  Confirm = 'confirm',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRALARGE = 'extralarge',
}

export enum ButtonVariants {
  ACCENT = 'accent',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  NEGATIVE = 'negative',
  WHITE = 'white',
  BLACK = 'black',
}

@customElement('my-button')
export class MyButton extends LitElement {
  public static override get styles(): CSSResultArray {
    return [
      baseStyles,
      css`
        :host {
          width: 100%;
          height: 100%;
          display: block;
        }
        :host([type='icononly']) {
          width: var(--line-height);
          height: var(--line-height);
          background-color: var(--bg-gray-button);
          border-radius: 50%;
        }
        :host(.confirm),
        :host(.cancel) {
          margin: 10px;
        }
        button {
          width: inherit;
          height: inherit;
          text-align: center;
          color: var(--font-main-black);
          font-size: var(--font-main-size);
          font-family: 'OPPOSans';
          background-color: unset;
          padding: unset;
          border: none;
          line-height: var(--line-height);
          white-space: nowrap;
          cursor: pointer;
        }
        :host([type='icononly']) button {
          padding: unset;
          position: absolute;
        }
        :host([type='iconlabel']) button {
          text-align: left;
        }
        :host(.left) button {
          text-align: left;
          padding-inline-start: var(--li-left-padding);
        }
        :host(.normal) button,
        :host(.ok) button,
        :host(.warning) button,
        :host(.cancel) button,
        :host(.confirm) button,
        :host(.auxiliary) button {
          font-weight: var(--font-main-weight);
        }
        :host(.ok) button {
          color: var(--theme-blue);
        }
        :host(.warning) button {
          color: var(--theme-red);
        }
        :host(.chamfer) button {
          border-radius: var(--base-border-radius);
        }
        :host(.cancel) button {
          color: var(--font-heading-black);
          background-color: var(--bg-gray-button);
        }
        :host(.confirm) button {
          color: var(--font-main-white);
          background-color: var(--theme-blue);
        }
        :host(.auxiliary) button {
          display: flex;
          color: var(--font-auxiliary-black);
        }
        :host(.floatright) button {
          min-width: 50px;
          color: var(--font-heading-black);
          background-color: var(--bg-gray-button);
        }
        :host([type='icononly']) button::before,
        :host([type='iconlabel']) button::before {
          font-family: 'gaia-icons';
          content: attr(data-icon);
          text-align: center;
          color: var(--icon-regular);
        }
        :host([type='iconlabel']) button::before {
          padding: 0 10px;
        }
        :host(.auxiliary) button a {
          display: flex;
          align-items: center;
          margin: auto;
        }
      `,
    ]
  }
  @property({type: String}) type = 'base'
  @property({type: String}) variant = 'accent'
  @property({type: String}) size = 'medium'
  @property({type: String}) label = '默认'
  @property({type: Boolean}) disabled = false
  @property({type: String}) treatment = ''
  @property({type: String}) icon = 'bug'
  @property({type: String}) iconcolor = ''

  getBaseButton(): HTMLTemplateResult {
    return html`
      <button>
        <a>
          <slot name="asset"></slot>
          ${this.label}
        </a>
      </button>
    `
  }

  getIconLabelButton(): HTMLTemplateResult {
    return html`
      <button data-icon=${this.icon}>${this.label}</button>
    `
  }

  getIconOnlyButton(): HTMLTemplateResult {
    return html`
      <button data-icon=${this.icon}></button>
    `
  }
  getConfirmButton(): HTMLTemplateResult {
    return html`
      <span class="start-button-confirm"><slot></slot></span>
    `
  }
  override render() {
    switch (this.type) {
      case ButtonType.BASE:
        return this.getBaseButton()
      case ButtonType.ICONONLY:
        return this.getIconOnlyButton()
      case ButtonType.ICONLABEL:
        return this.getIconLabelButton()
      case ButtonType.Confirm:
        return this.getConfirmButton()
      default:
        console.error('unhanled 【my-button】 type')
        return nothing
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}
