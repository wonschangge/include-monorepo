import {css, CSSResult} from 'lit'

export const baseStyles: CSSResult = css`
  :host {
    /* 文字/正文黑 */
    --font-main-black: #292929;
    /* 文字/辅助字-黑 */
    --font-auxiliary-black: rgba(38, 38, 38, 0.5);
    /* 文字/标题黑 */
    --font-heading-black: #4d4d4d;

    /* 文字/正文白 */
    --font-main-white: #f0f0f0;
    /* 文字/高亮白 */
    --font-highlight-white: #fafafa;
    /* 文字/辅助字-白 */
    --font-auxiliary-white: rgba(245, 245, 245, 0.5);

    /* 倒角 */
    --base-menu-radius: 16px;
    --base-dialog-radius: 20px;
    --base-border-radius: 34px;

    /* 线性图标/32及以下-常规黑 */
    --icon-regular: #333333;

    /* 分隔符 */
    --split-line: #cfd8e8;

    /* 主题色/蓝 */
    --theme-blue: #1d98f0;
    /* 主题色/红 */
    --theme-red: #ec4949;

    --pure-white: #ffffff;

    --font-main-size: 14px;
    /* --font-main-weight: 400; */
    --font-main-weight: bold;

    --line-height: calc(3 * var(--font-main-size));

    --li-left-padding: 10px;
    --li-right-padding: 10px;
    --li-base-height: 43px;

    /***********默认浅色**************/
    /* 商务/组件浅/白调-斜线渐变 */
    --bg-dialog-gradient: linear-gradient(
      137.64deg,
      #f5f0f5 0%,
      #fafafa 20.46%,
      #d5daf2 90.45%
    );
    /* 底色/弹窗浅 */
    --bg-dialog: linear-gradient(
      134.78deg,
      #f7f5f7 2.34%,
      #fafafa 34.11%,
      #e1e4f2 100%
    );
    /* 全/ hover_lm */
    --bg-hover: rgba(0, 0, 0, 0.06);
    --bg-gray-button: rgba(51, 51, 51, 0.06);
    --bg-icon-button: rgba(255, 255, 255, 0.68);

    --bg-button: rgba(247, 247, 247, 0.75);
  }

  @media (prefers-color-scheme: light) {
    :host {
      /* 底色/弹窗浅 */
      --bg-dialog: linear-gradient(
        134.78deg,
        #f7f5f7 2.34%,
        #fafafa 34.11%,
        #e1e4f2 100%
      );
      /* 商务/组件浅/白调-斜线渐变 */
      --bg-dialog-gradient: linear-gradient(
        137.64deg,
        #f5f0f5 0%,
        #fafafa 20.46%,
        #d5daf2 90.45%
      );

      /* 全/ hover_lm */
      --bg-hover: rgba(0, 0, 0, 0.06);
      --bg-button: rgba(247, 247, 247, 0.75);
      --bg-gray-button: rgba(51, 51, 51, 0.06);
      --bg-icon-button: rgba(255, 255, 255, 0.68);
    }
  }

  @media (prefers-color-scheme: dark) {
    :host {
      /* 底色/弹窗深 */
      --bg-dialog: linear-gradient(101.98deg, #4e5161 1.12%, #363a47 96.75%);

      /* 全/ hover_dm */
      --bg-hover: rgba(255, 255, 255, 0.09);
      --bg-button: rgba(64, 64, 64, 0.7);
      --bg-gray-button: rgba(228, 228, 228, 0.1);
      --bg-icon-button: rgba(0, 0, 0, 0.3);
    }
  }
`
