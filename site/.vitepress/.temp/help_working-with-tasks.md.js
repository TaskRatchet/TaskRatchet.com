"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Working with Tasks","description":"","frontmatter":{},"headers":[],"relativePath":"help/working-with-tasks.md"}');
const _sfc_main = { name: "help/working-with-tasks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="working-with-tasks" tabindex="-1">Working with Tasks <a class="header-anchor" href="#working-with-tasks" aria-hidden="true">#</a></h1><p>Once a task is created, you have a few things you can do with it:</p><ul><li>You can complete the task by clicking the checkbox.</li><li>You can charge the task immediately from inside the task&#39;s menu.</li><li>You can edit the task, as long as you&#39;re making it harder, from the task&#39;s menu.</li><li>You can copy the task from the task&#39;s menu, using it as a template for creating a new task.</li><li>You can filter what tasks are displayed from the toolbar.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("help/working-with-tasks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var workingWithTasks = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = workingWithTasks;
