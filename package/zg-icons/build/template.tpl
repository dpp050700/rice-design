/* stylelint-disable selector-pseudo-element-colon-notation */
@font-face {
  font-weight: normal;
  font-family: 'tracy-icons';
  font-style: normal;
  font-display: auto;
  src: url('./fonts/<%= cssClass %>.woff') format('woff'),
    url('./fonts/<%= cssClass %>.ttf') format('truetype');
}

[class^="tracy-icon-"], [class*=" tracy-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'tracy-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

<% _.each(glyphs, function(glyph) { %>.tracy-icon-<%= glyph.fileName %>:before {
  content: "\<%= glyph.codePoint %>";
}

<% }); %>

.tracy-icon-loading {
  animation: rotating 2s linear infinite;
}

.tracy-icon--right {
  margin-left: 5px;
}
.tracy-icon--left {
  margin-right: 5px;
}

@keyframes rotating {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}