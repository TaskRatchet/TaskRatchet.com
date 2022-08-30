"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Timezones","description":"","frontmatter":{},"headers":[{"level":2,"title":"How Timezones Work","slug":"how-timezones-work"},{"level":2,"title":"How to Change Your Timezone","slug":"how-to-change-your-timezone"}],"relativePath":"help/timezones.md"}');
const _sfc_main = { name: "help/timezones.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="timezones" tabindex="-1">Timezones <a class="header-anchor" href="#timezones" aria-hidden="true">#</a></h1><iframe width="560" height="315" src="https://www.youtube.com/embed/Q8rWF8WlT7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="how-timezones-work" tabindex="-1">How Timezones Work <a class="header-anchor" href="#how-timezones-work" aria-hidden="true">#</a></h2><p>TaskRatchet uses the timezone you select to determine when your tasks are due. If you specify that a task is due at 6pm, the task is due at 6pm in your specified timezone. If you change your timezone, your existing task will now be due at 6pm in your new timezone.</p><h2 id="how-to-change-your-timezone" tabindex="-1">How to Change Your Timezone <a class="header-anchor" href="#how-to-change-your-timezone" aria-hidden="true">#</a></h2><ul><li><a href="https://app.taskratchet.com/account" target="_blank" rel="noopener noreferrer">Open your account settings</a></li><li>Use the &quot;Timezone&quot; dropdown to change your timezone</li><li>Click or tap the &quot;Save&quot; button directly below the &quot;Timezone&quot; dropdown</li></ul><p>All due dates will now be treated in reference to your new timezone.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("help/timezones.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var timezones = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = timezones;
