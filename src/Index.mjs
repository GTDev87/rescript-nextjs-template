// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";

function Index$P(props) {
  return JsxRuntime.jsx("p", {
              children: props.children,
              className: "mb-2"
            });
}

function $$default(param) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "What is this about?",
                      className: "text-3xl font-semibold"
                    }),
                JsxRuntime.jsx(Index$P, {
                      children: " This is a simple template for a Next\n      project using ReScript & TailwindCSS."
                    }),
                JsxRuntime.jsx("h2", {
                      children: "Quick Start",
                      className: "text-2xl font-semibold mt-5"
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
/* react/jsx-runtime Not a pure module */
