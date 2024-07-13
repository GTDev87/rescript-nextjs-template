// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";

import {css} from 'astroturf';
;

var h1Class = (css`
  @apply text-3xl font-semibold;
`);

var h2Class = (css`
  @apply text-2xl font-semibold mt-5;
`);

var pClass = (css`
  @apply mb-2;
`);

function Index$P(props) {
  return JsxRuntime.jsx("p", {
              children: props.children,
              className: pClass
            });
}

function $$default(param) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "What is this about?",
                      className: h1Class
                    }),
                JsxRuntime.jsx(Index$P, {
                      children: " This is a simple template for a Next project using ReScript & TailwindCSS."
                    }),
                JsxRuntime.jsx("h2", {
                      children: "Quick Start",
                      className: h2Class
                    }),
                JsxRuntime.jsx("pre", {
                      children: "git clone https://github.com/rescript-nextjs-template.git my-project\ncd my-project\nrm -rf .git"
                    })
              ]
            });
}

export {
  $$default as default,
}
/*  Not a pure module */
