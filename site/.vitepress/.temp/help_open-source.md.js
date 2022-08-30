"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Open Source","description":"","frontmatter":{},"headers":[{"level":2,"title":"Projects","slug":"projects"},{"level":2,"title":"Financial Contributions","slug":"financial-contributions"}],"relativePath":"help/open-source.md"}');
const _sfc_main = { name: "help/open-source.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="open-source" tabindex="-1">Open Source <a class="header-anchor" href="#open-source" aria-hidden="true">#</a></h1><p>TaskRatchet&#39;s open-source projects can be found here:</p><p><a href="https://github.com/TaskRatchet" target="_blank" rel="noopener noreferrer">https://github.com/TaskRatchet</a></p><h2 id="projects" tabindex="-1">Projects <a class="header-anchor" href="#projects" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/TaskRatchet/autodial" target="_blank" rel="noopener noreferrer">taskratchet/autodial</a> - The Beeminder autodialer. \u201CThe Beeminder autodialer will automatically adjust the rate on your goals based on your historical performance.\u201D</li><li><a href="https://github.com/TaskRatchet/TaskRatchet.com" target="_blank" rel="noopener noreferrer">taskratchet/taskratchet.com</a> - The TaskRatchet landing page.</li><li><a href="https://github.com/TaskRatchet/taskratchet-docs" target="_blank" rel="noopener noreferrer">taskratchet/taskratchet-docs</a> - This documentation site.</li><li><a href="https://github.com/TaskRatchet/taskratchet-python" target="_blank" rel="noopener noreferrer">taskratchet/taskratchet-python</a> - A TaskRatchet API wrapper written in Python.</li><li><a href="https://github.com/TaskRatchet/taskratchet-web" target="_blank" rel="noopener noreferrer">taskratchet/taskratchet-web</a> - The TaskRatchet web app.</li></ul><h2 id="financial-contributions" tabindex="-1">Financial Contributions <a class="header-anchor" href="#financial-contributions" aria-hidden="true">#</a></h2><p>TaskRatchet is <a href="https://www.beeminder.com/tskrtcht/oo" target="_blank" rel="noopener noreferrer">literally committed</a> to making ongoing financial contributions to open source projects. Currently contributions are made via <a href="https://opencollective.com/taskratchet" target="_blank" rel="noopener noreferrer">Open Collective</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("help/open-source.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var openSource = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = openSource;
