"use strict";
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: "Module" },
});
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse(
  '{"title":"Help","description":"","frontmatter":{},"headers":[{"level":2,"title":"Further Reading","slug":"further-reading"},{"level":2,"title":"Support","slug":"support"}],"relativePath":"help.md"}'
);
const _sfc_main = { name: "help.md" };
function _sfc_ssrRender(
  _ctx,
  _push,
  _parent,
  _attrs,
  $props,
  $setup,
  $data,
  $options
) {
  _push(
    `<div${serverRenderer.ssrRenderAttrs(
      _attrs
    )}><h1 id="help" tabindex="-1">Help <a class="header-anchor" href="#help" aria-hidden="true">#</a></h1><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.beeminder.com/taskratchet/" target="_blank" rel="noopener noreferrer">Announcing TaskRatchet: Like Beeminder for Your Todo List</a></li><li><a href="https://forum.beeminder.com/t/taskratchet-development-updates/5037" target="_blank" rel="noopener noreferrer">TaskRatchet Development Updates</a></li></ul><h2 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-hidden="true">#</a></h2><p>Still have questions? Send me an email:</p><p><strong>Support:</strong> <a href="mailto:support@taskratchet.com">support@taskratchet.com</a></p></div>`
  );
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "help.md"
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var help = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [
  ["ssrRender", _sfc_ssrRender],
]);
exports.__pageData = __pageData;
exports["default"] = help;
