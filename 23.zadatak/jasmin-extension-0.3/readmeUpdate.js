const fs = require('fs');

const challenges = [
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/headline-with-the-h2-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/inform-with-the-paragraph-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/fill-in-the-blank-with-placeholder-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/uncomment-html',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/comment-out-html',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/delete-html-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/introduction-to-html5-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-images-to-your-website',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-internal-sections-of-a-page-with-anchor-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-an-anchor-element-within-a-paragraph',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/make-dead-links-using-the-hash-symbol',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/turn-an-image-into-a-link',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-bulleted-unordered-list',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-an-ordered-list',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-text-field',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-placeholder-text-to-a-text-field',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-form-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/add-a-submit-button-to-a-form',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-html5-to-require-a-field',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-radio-buttons',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/create-a-set-of-checkboxes',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/use-the-value-attribute-with-radio-buttons-and-checkboxes',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/check-radio-buttons-and-checkboxes-by-default',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/nest-many-elements-within-a-single-div-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/declare-the-doctype-of-an-html-document',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/define-the-head-and-body-of-an-html-document',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-color-of-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-selectors-to-style-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-css-class-to-style-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-the-font-size-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-font-family-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/import-a-google-font',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/specify-how-fonts-should-degrade',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/size-your-images',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-borders-around-your-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-rounded-corners-with-border-radius',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/make-circular-images-with-a-border-radius',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/give-a-background-color-to-a-div-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-id-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-an-id-attribute-to-style-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-padding-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/adjust-the-margin-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-a-negative-margin-to-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-padding-to-each-side-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-different-margins-to-each-side-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-padding-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-clockwise-notation-to-specify-the-margin-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-attribute-selectors-to-style-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/understand-absolute-versus-relative-units',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/style-the-html-body-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-styles-from-the-body-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/prioritize-one-style-over-another',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-styles-in-subsequent-css',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-with-inline-styles',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-all-other-styles-by-using-important',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-for-specific-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-hex-code-to-mix-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-abbreviated-hex-code',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-values-to-color-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-rgb-to-mix-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-css-variables-to-change-several-elements-at-once',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/create-a-custom-css-variable',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-custom-css-variable',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/attach-a-fallback-value-to-a-css-variable',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/improve-compatibility-with-browser-fallbacks',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-css-variables',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/change-a-variable-for-a-specific-area',
  'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/use-a-media-query-to-change-a-variable',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-balance-using-the-text-align-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-width-of-an-element-using-the-width-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-height-of-an-element-using-the-height-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-strong-tag-to-make-text-bold',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-u-tag-to-underline-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-em-tag-to-italicize-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-s-tag-to-strikethrough-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-horizontal-line-using-the-hr-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-background-color-property-of-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-size-of-a-heading-element-versus-a-paragraph-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/add-a-box-shadow-to-a-card-like-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/decrease-the-opacity-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-text-transform-property-to-make-text-uppercase',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-for-multiple-heading-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-weight-for-multiple-heading-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-font-size-of-paragraph-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/set-the-line-height-of-paragraphs',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hover-state-of-an-anchor-tag',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-an-elements-relative-position',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/move-a-relatively-positioned-element-with-css-offsets',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-its-parent-with-absolute-positioning',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-the-browser-window-with-fixed-positioning',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/center-an-element-horizontally-using-the-margin-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-complementary-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-about-tertiary-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-color-of-various-elements-to-complementary-colors',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-hue-of-a-color',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/adjust-the-tone-of-a-color',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-gradual-css-linear-gradient',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-css-linear-gradient-to-create-a-striped-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-texture-by-adding-a-subtle-pattern-as-a-background-image',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-change-the-size-of-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-scale-an-element-on-hover',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-graphic-using-css',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-the-css-keyframes-and-animation-properties-work',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-css-animation-to-change-the-hover-state-of-a-button',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/modify-fill-mode-of-an-animation',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-movement-using-css-animation',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-visual-direction-by-fading-an-element-from-left-to-right',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-continually-using-an-infinite-animation-count',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-a-css-heartbeat-using-an-infinite-animation-count',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-elements-at-variable-rates',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/animate-multiple-elements-at-variable-rates',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-animation-timing-with-keywords',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/learn-how-bezier-curves-work',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/use-a-bezier-curve-to-move-a-graphic',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/make-motion-more-natural-using-a-bezier-curve',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/know-when-alt-text-should-be-left-blank',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/jump-straight-to-the-content-using-the-main-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-content-in-the-article-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-header-landmark',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-footer-landmark',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-accessibility-of-audio-content-with-the-audio-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-chart-accessibility-with-the-figure-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/add-an-accessible-date-picker',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/standardize-times-with-the-html5-datetime-attribute',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-using-sufficient-contrast',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/give-links-meaning-by-using-descriptive-link-text',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-links-navigable-with-html-access-keys',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-add-keyboard-focus-to-an-element',
  'https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements',
  'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/create-a-media-query',
  'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-an-image-responsive',
  'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/use-a-retina-image-for-higher-resolution-displays',
  'https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/make-typography-responsive',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-row',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-direction-property-to-make-a-column',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/apply-the-flex-direction-property-to-create-a-column-in-the-tweet-embed',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-justify-content-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-justify-content-property-in-the-tweet-embed',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/align-elements-using-the-align-items-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-items-property-in-the-tweet-embed',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-wrap-property-to-wrap-a-row-or-column',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shrink-property-to-shrink-items',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-grow-property-to-expand-items',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-basis-property-to-set-the-initial-size-of-an-item',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-flex-shorthand-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-self-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-your-first-css-grid',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-columns-with-grid-template-columns',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-rows-with-grid-template-rows',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-css-grid-units-to-change-the-size-of-columns-and-rows',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-column-gap-using-grid-column-gap',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-a-row-gap-using-grid-row-gap',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/add-gaps-faster-with-grid-gap',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-column-to-control-spacing',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-row-to-control-spacing',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-horizontally-using-justify-self',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-an-item-vertically-using-align-self',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-horizontally-using-justify-items',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/align-all-items-vertically-using-align-items',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/divide-the-grid-into-an-area-template',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/place-items-in-grid-areas-using-the-grid-area-property',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-area-without-creating-an-areas-template',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/reduce-repetition-using-the-repeat-function',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/limit-item-size-using-the-minmax-function',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fill',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-media-queries-to-create-responsive-layouts',
  'https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-grids-within-grids',
];

function nameOfChallege(challenge) {
  const challengeUrlName = challenge.split('/')[6];
  const challengeName = challengeUrlName
    .split('-')
    .reduce(
      (previousValue, currentValue) =>
        previousValue +
        ' ' +
        currentValue.charAt(0).toUpperCase() +
        currentValue.slice(1),
      ''
    );

  return challengeName;
}

function sectionName(challenge) {
  const sectionUrlName = challenge.split('/')[5];
  const sectionName = sectionUrlName
    .split('-')
    .reduce(
      (previousValue, currentValue) =>
        previousValue +
        ' ' +
        currentValue.charAt(0).toUpperCase() +
        currentValue.slice(1),
      ''
    );

  return sectionName;
}

(function populateDropdown() {
  let string = "# Jasmin's Extension \n";
  for (let i = 0; i < challenges.length; i++) {
    if (i == 0) {
      const _sectionName = sectionName(challenges[i]);
      string += `## ${_sectionName} \n`;
    }
    if (
      i >= 1 &&
      sectionName(challenges[i]).localeCompare(
        sectionName(challenges[i - 1])
      ) != 0
    ) {
      const _sectionName = sectionName(challenges[i]);
      string += `## ${_sectionName} \n`;
    }
    const challengeName = nameOfChallege(challenges[i]);
    string += `- [${challengeName}](${challenges[i]}) \n`;
  }

  fs.writeFileSync('test.md', string);
})();
