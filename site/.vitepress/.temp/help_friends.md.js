"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse('{"title":"Friends & Competitors","description":"","frontmatter":{},"headers":[{"level":2,"title":"Commitment Contracts","slug":"commitment-contracts"},{"level":2,"title":"Task Management","slug":"task-management"},{"level":2,"title":"Attention Management","slug":"attention-management"}],"relativePath":"help/friends.md"}');
const _sfc_main = { name: "help/friends.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="friends-competitors" tabindex="-1">Friends &amp; Competitors <a class="header-anchor" href="#friends-competitors" aria-hidden="true">#</a></h1><p>TaskRatchet isn&#39;t the only option around! If you find TaskRatchet interesting, we think you&#39;ll like these tools, too. Have a tool you think should be included in this list? <a href="https://github.com/narthur/taskratchet-docs/edit/master/friends.md" target="_blank" rel="noopener noreferrer">Submit a pull request</a>.</p><p>In addition to the services on this page, Beeminder has been keeping a similar list since 2012 (long before TaskRatchet existed) for their own friends and competitors. You can find theirs here: <a href="https://blog.beeminder.com/competitors/" target="_blank" rel="noopener noreferrer">Aiding and Abetting</a></p><ul><li><a href="https://bossasaservice.life/" target="_blank" rel="noopener noreferrer">Boss as a Service</a> - &quot;We make sure you achieve your goals. We keep you accountable. You get stuff done.&quot;</li><li><a href="https://complice.co/" target="_blank" rel="noopener noreferrer">Complice</a> - &quot;Complice is for making meaningful progress every day.&quot;</li></ul><h2 id="commitment-contracts" tabindex="-1">Commitment Contracts <a class="header-anchor" href="#commitment-contracts" aria-hidden="true">#</a></h2><ul><li><a href="https://www.beeminder.com/home" target="_blank" rel="noopener noreferrer">Beeminder</a> - &quot;Your goals can be anything quantifiable \u2014 weight, pushups, minutes spent on Facebook, points on Duolingo. Answer with your number when Beeminder asks \u2014 or connect a device/app below to auto-report \u2014 and we&#39;ll show your progress and a Yellow Brick Road to follow to stay on track. If you go off track, you pledge money to stay on the road the next time. If you go off track again, we charge you.&quot;</li><li><a href="http://commits.to/" target="_blank" rel="noopener noreferrer">commits.to</a> - &quot;Create a commitment by constructing a URL like &quot;<a href="http://alice.commits.to/send_the_report" target="_blank" rel="noopener noreferrer">alice.commits.to/send_the_report</a>&quot; and just by clicking on such a URL, a commitment is logged here.&quot;</li><li><a href="https://waybetter.com/stepbet" target="_blank" rel="noopener noreferrer">stepbet</a> - &quot;Achieve your fitness goals by putting real money on the line. Connect your favorite fitness tracker and beat your personalized step goals to win.&quot;</li><li><a href="https://www.stickk.com/" target="_blank" rel="noopener noreferrer">stickK</a> - &quot;By asking our users to sign Commitment Contracts, stickK helps users define their goal (whatever it may be), acknowledge what it\u2019ll take to accomplish it, and leverage the power of putting money on the line to turn that goal into a reality.&quot;</li><li><a href="https://www.workorpay.com/" target="_blank" rel="noopener noreferrer">Work Or Pay</a> - &quot;Meet Your Goals Or Pay The Price. Set goals. Form contracts. Pay the penalty if you fail.&quot;</li></ul><h2 id="task-management" tabindex="-1">Task Management <a class="header-anchor" href="#task-management" aria-hidden="true">#</a></h2><ul><li><a href="https://amazingmarvin.com/" target="_blank" rel="noopener noreferrer">Amazing Marvin</a> - &quot;Marvin incorporates principles from behavioral psychology to help you beat procrastination, feel in control and finish your to-do list.&quot;</li><li><a href="https://habitica.com/static/home" target="_blank" rel="noopener noreferrer">Habitica</a> - &quot;Habitica is a free habit-building and productivity app that treats your real life like a game. With in-game rewards and punishments to motivate you and a strong social network to inspire you, Habitica can help you achieve your goals to become healthy, hard-working, and happy.&quot;</li><li><a href="https://www.notion.so/product" target="_blank" rel="noopener noreferrer">Notion</a> - &quot;We\u2019re more than a doc. Or a table. Customize Notion to work the way you do.&quot;</li><li><a href="https://taskwarrior.org/" target="_blank" rel="noopener noreferrer">Taskwarrior</a> - &quot;Taskwarrior is Free and Open Source Software that manages your TODO list from the command line. It is flexible, fast, and unobtrusive. It does its job then gets out of your way.&quot;</li><li><a href="https://todoist.com/" target="_blank" rel="noopener noreferrer">Todoist</a> - &quot;Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).&quot;</li></ul><h2 id="attention-management" tabindex="-1">Attention Management <a class="header-anchor" href="#attention-management" aria-hidden="true">#</a></h2><ul><li><a href="https://chrome.google.com/webstore/detail/delay/fbhbfbladmbgakfkccbfjpbabagjcmid" target="_blank" rel="noopener noreferrer">Delay</a> - A chrome extension that requires you wait a period of time before visiting a distracting website.</li><li><a href="https://www.proginosko.com/leechblock/" target="_blank" rel="noopener noreferrer">Leechblock</a> - A flexible browser extension for blocking distracting websites.</li><li><a href="https://mindfulinternetuse.com/" target="_blank" rel="noopener noreferrer">Mindful Internet Use</a> - A chrome extension that prompts you to breathe and decide how much time you&#39;ll spend before visiting a distracting website.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("help/friends.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var friends = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = friends;
