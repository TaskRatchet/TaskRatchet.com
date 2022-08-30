"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"TaskRatchet","text":"The Todo List You Won't Ignore","image":{"src":"/midjourney-a_woman_working_late_into_the_night_at_her_computer.png","alt":"A woman working late into the night at her computer (source: Midjourney)"},"actions":[{"theme":"brand","text":"Sign Up","link":"https://app.taskratchet.com"},{"theme":"alt","text":"How It Works","link":"/help/works"}]}},"headers":[],"relativePath":"index.md"}`);
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPFeatures = vue.resolveComponent("VPFeatures");
  const _component_Uvi = vue.resolveComponent("Uvi");
  const _component_BuiltBy = vue.resolveComponent("BuiltBy");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_VPFeatures, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_Uvi, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_BuiltBy, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = index;
