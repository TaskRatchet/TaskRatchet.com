"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Transparency","description":"","frontmatter":{},"headers":[],"relativePath":"help/transparency.md"}');
const _sfc_main = { name: "help/transparency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="transparency" tabindex="-1">Transparency <a class="header-anchor" href="#transparency" aria-hidden="true">#</a></h1><ul><li>Revenue: <a href="https://www.beeminder.com/tskrtcht/revenue" target="_blank" rel="noopener noreferrer">tskrtcht/revenue</a></li><li>Ongoing development: <a href="https://www.beeminder.com/tskrtcht/uvi" target="_blank" rel="noopener noreferrer">tskrtcht/uvi</a> and <a href="https://twitter.com/TaskRatchet" target="_blank" rel="noopener noreferrer">Twitter updates</a></li><li><a href="https://climate.stripe.com/JS6ptt" target="_blank" rel="noopener noreferrer">Climate impact</a></li><li><a href="./open-source.html">Open source contributions</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("help/transparency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var transparency = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = transparency;
