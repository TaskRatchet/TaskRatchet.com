"use strict";
Object.defineProperties(exports, {
  __esModule: { value: true },
  [Symbol.toStringTag]: { value: "Module" },
});
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = JSON.parse(
  '{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"Tooling","slug":"tooling"},{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Authentication","slug":"authentication"},{"level":2,"title":"Schema","slug":"schema"},{"level":3,"title":"GET me","slug":"get-me"},{"level":3,"title":"PUT me","slug":"put-me"},{"level":3,"title":"GET me/tasks","slug":"get-me-tasks"},{"level":3,"title":"POST me/tasks","slug":"post-me-tasks"},{"level":3,"title":"GET me/tasks/{task_id}","slug":"get-me-tasks-task-id"},{"level":3,"title":"GET status","slug":"get-status"},{"level":3,"title":"GET timezones","slug":"get-timezones"}],"relativePath":"help/api.md"}'
);
const _sfc_main = { name: "help/api.md" };
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
  _push(`<div${serverRenderer.ssrRenderAttrs(
    _attrs
  )}><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The API is not stable, and may change at any time.</p></div><p>TaskRatchet has an API you can use to list, update, and create new tasks, among other things. Unfortunately, the API is not yet stable enough for me to prioritize documenting it publicly. If you would like more information regaring how you can use TaskRatchet&#39;s API, or you find anything in this document that seems inaccurate, please email me at <a href="mailto:support@taskratchet.com">support@taskratchet.com</a>.</p><p>You can find your API user ID and token in your account settings.</p><h2 id="tooling" tabindex="-1">Tooling <a class="header-anchor" href="#tooling" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/narthur/taskratchet-python" target="_blank" rel="noopener noreferrer">https://github.com/narthur/taskratchet-python</a></li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><ul><li><a href="https://forum.beeminder.com/t/taskratchet-bookmarklets/10276" target="_blank" rel="noopener noreferrer">https://forum.beeminder.com/t/taskratchet-bookmarklets/10276</a></li></ul><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h2><p>The API uses two custom headers for authentication.</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td><code>X-Taskratchet-Userid</code></td><td>Your account ID, found in your account settings</td></tr><tr><td><code>X-Taskratchet-Token</code></td><td>Your API token, found in your account settings</td></tr></tbody></table><h2 id="schema" tabindex="-1">Schema <a class="header-anchor" href="#schema" aria-hidden="true">#</a></h2><p>Base URL: <a href="https://api.taskratchet.com/api1/" target="_blank" rel="noopener noreferrer">https://api.taskratchet.com/api1/</a></p><table><thead><tr><th>Endpoint</th><th>Description</th></tr></thead><tbody><tr><td><code>GET me</code></td><td>Get your profile data</td></tr><tr><td><code>PUT me</code></td><td>Update your profile data</td></tr><tr><td><code>GET me/tasks</code></td><td>Get all your tasks</td></tr><tr><td><code>POST me/tasks</code></td><td>Create a new task</td></tr><tr><td><code>GET me/tasks/{task_id}</code></td><td>Get a specific task</td></tr><tr><td><code>PUT me/tasks/{task_id}</code></td><td>Update a specific task</td></tr><tr><td><code>GET status</code></td><td>Get API status details</td></tr><tr><td><code>GET timezones</code></td><td>List of valid timezones</td></tr></tbody></table><h3 id="get-me" tabindex="-1"><code>GET me</code> <a class="header-anchor" href="#get-me" aria-hidden="true">#</a></h3><table><thead><tr><th>Response Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>The account&#39;s unique identifier</td></tr><tr><td>name</td><td>string</td><td>User&#39;s full name</td></tr><tr><td>email</td><td>string</td><td>User&#39;s email address</td></tr><tr><td>timezone</td><td>string</td><td>User&#39;s current account timezone</td></tr><tr><td>cards</td><td>array</td><td>List of user&#39;s payment methods</td></tr><tr><td>integrations</td><td>object</td><td>User&#39;s integration settings; currently only Beeminder</td></tr></tbody></table><p>Example response:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">id</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">Zu0qDVncIgSuUbQfr261</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">name</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">Jon Doe</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">email</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">jon@doe.com</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">timezone</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">America/New_York</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">cards</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">[],</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">integrations</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#FFCB6B",
  })}">beeminder</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">            </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">user</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">jondoe</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">            </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">goal_new_tasks</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">tr_tasks</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"></span></code></pre></div><h3 id="put-me" tabindex="-1"><code>PUT me</code> <a class="header-anchor" href="#put-me" aria-hidden="true">#</a></h3><table><thead><tr><th>Input Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>User&#39;s full name</td></tr><tr><td>email</td><td>string</td><td>User&#39;s email address</td></tr><tr><td>timezone</td><td>string</td><td>User&#39;s timezone; for valid values, see <code>GET timezones</code></td></tr><tr><td>new_password</td><td>string</td><td>New password</td></tr><tr><td>integrations</td><td>object</td><td>User&#39;s integration settings; currently only Beeminder</td></tr></tbody></table><p>Response is the updated user object--see <code>GET me</code>.</p><h3 id="get-me-tasks" tabindex="-1"><code>GET me/tasks</code> <a class="header-anchor" href="#get-me-tasks" aria-hidden="true">#</a></h3><p>Returns an array of tasks. Currently it returns all tasks ever associated with the user. In the future I hope to update it to be paginated and filterable.</p><table><thead><tr><th>Task Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>Task&#39;s unique identifier</td></tr><tr><td>task</td><td>string</td><td>Task&#39;s title</td></tr><tr><td>due</td><td>string</td><td>Task&#39;s timezone-agnostic due string</td></tr><tr><td>due_timestamp</td><td>number</td><td>Task&#39;s precise due time, taking the user&#39;s current timezone into account. Changing the user&#39;s timezone will change this number for all tasks.</td></tr><tr><td>cents</td><td>number</td><td>Task&#39;s stakes</td></tr><tr><td>complete</td><td>boolean</td><td>Whether or not the task has been completed</td></tr><tr><td>status</td><td>string</td><td>One of &quot;complete&quot;, &quot;expired&quot;, or &quot;pending&quot;</td></tr><tr><td>timezone</td><td>string</td><td>The user&#39;s current timezone</td></tr></tbody></table><p>Example response:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">[</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">id</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">tdDPzh1GpZHAGZURVBf6</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">task</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">Take out the trash</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">2/21/2022, 11:59 PM</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due_timestamp</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">1645505940</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">cents</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">500</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">complete</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">false,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">status</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">pending</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">        </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">timezone</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">America/Cancun</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">]</span></span>
<span class="line"></span></code></pre></div><h3 id="post-me-tasks" tabindex="-1"><code>POST me/tasks</code> <a class="header-anchor" href="#post-me-tasks" aria-hidden="true">#</a></h3><table><thead><tr><th>Input Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>task</td><td>string</td><td>Task title</td></tr><tr><td>due</td><td>string</td><td>Due date and time in string of format <code>3/25/2020, 11:59 PM</code></td></tr><tr><td>cents</td><td>number</td><td>Stakes in cents</td></tr></tbody></table><p>On success, returns the created task.</p><p>Example response:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">id</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">tdDPzh1GpZHAGZURVBf6</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">task</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">Take out the trash</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">2/21/2022, 11:59 PM</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due_timestamp</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">1645505940</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">cents</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">500</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">complete</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">false,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">status</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">pending</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">timezone</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">America/Cancun</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"></span></code></pre></div><h3 id="get-me-tasks-task-id" tabindex="-1"><code>GET me/tasks/{task_id}</code> <a class="header-anchor" href="#get-me-tasks-task-id" aria-hidden="true">#</a></h3><p>Retrieve a single task with <code>task_id</code>. See <code>GET me/tasks</code> for more detail on the returned task object.</p><p>Example respone:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">id</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">tdDPzh1GpZHAGZURVBf6</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">task</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">Take out the trash</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">2/21/2022, 11:59 PM</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">due_timestamp</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">1645505940</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">cents</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#F78C6C",
  })}">500</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">complete</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">false,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">status</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">pending</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">timezone</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">America/Cancun</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"></span></code></pre></div><h3 id="get-status" tabindex="-1"><code>GET status</code> <a class="header-anchor" href="#get-status" aria-hidden="true">#</a></h3><p>Returns <a href="https://api.taskratchet.com/api1/status" target="_blank" rel="noopener noreferrer">details</a> about the API server instance that handled the request. Currently only returns the API&#39;s internal UTC time.</p><p>Example response:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}">    </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C792EA",
  })}">utc_now</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">:</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#A6ACCD",
  })}"> </span><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({
    color: "#C3E88D",
  })}">2022-07-12T18:52:41.647995+00:00</span><span style="${serverRenderer.ssrRenderStyle(
    { color: "#89DDFF" }
  )}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({
    color: "#89DDFF",
  })}">}</span></span>
<span class="line"></span></code></pre></div><h3 id="get-timezones" tabindex="-1"><code>GET timezones</code> <a class="header-anchor" href="#get-timezones" aria-hidden="true">#</a></h3><p>Returns an array of <a href="https://api.taskratchet.com/api1/timezones" target="_blank" rel="noopener noreferrer">valid timezone values</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "help/api.md"
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var api = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [
  ["ssrRender", _sfc_ssrRender],
]);
exports.__pageData = __pageData;
exports["default"] = api;
