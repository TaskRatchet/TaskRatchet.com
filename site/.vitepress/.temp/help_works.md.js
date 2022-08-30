"use strict";
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: "Module" },
});
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse(
  '{"title":"How It Works","description":"","frontmatter":{},"headers":[{"level":2,"title":"Add a Task","slug":"add-a-task"},{"level":2,"title":"Get Reminded","slug":"get-reminded"},{"level":2,"title":"Complete the Task","slug":"complete-the-task"},{"level":2,"title":"Fail to Complete the Task","slug":"fail-to-complete-the-task"},{"level":2,"title":"Calling a Charge Not Legit","slug":"calling-a-charge-not-legit"}],"relativePath":"help/works.md"}'
);
const _sfc_main = { name: "help/works.md" };
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
    )}><h1 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h1><p>TaskRatchet is the only todo list that makes you do the tasks you add.</p><h2 id="add-a-task" tabindex="-1">Add a Task <a class="header-anchor" href="#add-a-task" aria-hidden="true">#</a></h2><p>When adding a task, TaskRatchet asks you for three pieces of information:</p><ul><li><strong>Task:</strong> The definition of the task--what is it you need to do?</li><li><strong>Deadline:</strong> A deadline, specified as a date and time.</li><li><strong>Stakes:</strong> The amount of money you&#39;ll be charged if you don&#39;t complete it in time.</li></ul><p>In addition, you can create multiple tasks at the same time--all with the same deadline and stakes--by entering one task per line in the task field. Each line will be created as its own task.</p><p><img src="https://user-images.githubusercontent.com/4655422/179230689-1a697e39-5cef-49ad-b854-aa1b463b2516.jpeg" alt="FVYKEaUXsAIdwTd"></p><h2 id="get-reminded" tabindex="-1">Get Reminded <a class="header-anchor" href="#get-reminded" aria-hidden="true">#</a></h2><p>Currently, the only reminder that TaskRatchet has is a daily summary email which includes all your tasks you haven&#39;t yet completed. This email is not sent if you don&#39;t currently have any outstanding tasks.</p><p>Daily emails are almost certainly not the optimal solution for reminders. If you have opinions regarding how reminders should work, please email me at <a href="mailto:support@taskratchet.com">support@taskratchet.com</a>. The more feedback I can get on how people would like reminders to work, the better!</p><h2 id="complete-the-task" tabindex="-1">Complete the Task <a class="header-anchor" href="#complete-the-task" aria-hidden="true">#</a></h2><p>If all goes well, you check off the task in your list before the deadline comes, and that&#39;s it! You won&#39;t be charged for that task.</p><h2 id="fail-to-complete-the-task" tabindex="-1">Fail to Complete the Task <a class="header-anchor" href="#fail-to-complete-the-task" aria-hidden="true">#</a></h2><p>If you don&#39;t mark the task as complete on time, a series of events are triggered within specific time periods after the task&#39;s deadline:</p><table><thead><tr><th>Window</th><th>Event</th><th>Calling Not-Legit</th></tr></thead><tbody><tr><td><strong>0-6 hrs</strong></td><td>TaskRatchet sends you a charge notification email.</td><td>Reply direclty to the charge email to pause the charge until I can respond.</td></tr><tr><td><strong>24-30 hrs</strong></td><td>TaskRatchet initiates a charge which will appear in your bank without removing the money.</td><td>If you email me in time, I can cancel the charge without any funds being removed from your account.</td></tr><tr><td><strong>48-54 hrs</strong></td><td>TaskRatchet removes the money from your bank.</td><td>Calling not-legit at this point will result in a refund.</td></tr></tbody></table><h2 id="calling-a-charge-not-legit" tabindex="-1">Calling a Charge Not Legit <a class="header-anchor" href="#calling-a-charge-not-legit" aria-hidden="true">#</a></h2><p>Depending on the situation, you may feel that a particular charge isn&#39;t legit. Reasons could be:</p><ul><li>You completed the task on time but didn&#39;t manage to mark it as complete in the app on time.</li><li>You included a condition for discarding the task in its description.</li><li>You have some rules defined externally for when a charge should not be considered legitimate.</li></ul><p>Even if your reason isn&#39;t listed above, go ahead and email me, including the reason you&#39;re calling not legit.</p><p>The preferred way to call not legit on a charge is to reply directly to the email telling you you&#39;re getting charged. By doing this, the charge is automatically paused until I can respond to you. Once we&#39;ve agreed that your charge should be cancelled, I&#39;ll go ahead and cancel the charge, or, if it&#39;s already been finalized, I&#39;ll issue you a refund.</p></div>`
  );
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "help/works.md"
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var works = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [
  ["ssrRender", _sfc_ssrRender],
]);
exports.__pageData = __pageData;
exports["default"] = works;
