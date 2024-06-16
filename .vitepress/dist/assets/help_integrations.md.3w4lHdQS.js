import{_ as a,E as n,c as r,J as i,m as e,a as t,a2 as s,o as d}from"./chunks/framework.C6Rj3_qD.js";const l="/assets/beeminder-1.9qN3A8Nv.png",p="/assets/beeminder-2.CiRab37N.png",c="/assets/beeminder-3.DfplxQGe.png",h="/assets/beeminder-4.DytymNiG.png",T=JSON.parse('{"title":"Integrations","description":"","frontmatter":{},"headers":[],"relativePath":"help/integrations.md","filePath":"help/integrations.md"}'),g={name:"help/integrations.md"},m=e("h1",{id:"integrations",tabindex:"-1"},[t("Integrations "),e("a",{class:"header-anchor",href:"#integrations","aria-label":'Permalink to "Integrations"'},"​")],-1),u=e("h2",{id:"beeminder",tabindex:"-1"},[t("Beeminder "),e("a",{class:"header-anchor",href:"#beeminder","aria-label":'Permalink to "Beeminder"'},"​")],-1),b=s('<h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><p>Enabling the Beeminder integration gives you three new features:</p><table><thead><tr><th>Feature</th><th>Format</th></tr></thead><tbody><tr><td>Post all new tasks to Beeminder on creation</td><td>Applies to all new tasks</td></tr><tr><td>Post to Beeminder goal(s) on task creation</td><td><code>[Task Name] &amp;[Goal Slug]</code></td></tr><tr><td>Post to Beeminder goal(s) on task completion</td><td><code>[Task Name] *[Goal Slug]</code></td></tr></tbody></table><p>When a task is posted to Beeminder as a new datapoint, the following attributes are set:</p><table><thead><tr><th>Datapoint Field</th><th>Value</th></tr></thead><tbody><tr><td>Date</td><td>Date task was added, or completed if using <code>*</code>-tag</td></tr><tr><td>Value</td><td>Always <code>1</code></td></tr><tr><td>Comment</td><td>Task summary, e.g., <code>The Task by 3/24/2021, 11:59 PM or pay $10.00</code></td></tr></tbody></table><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h4><blockquote><p>Go shopping</p></blockquote><p>On <strong>creation</strong> of the task, the default Beeminder goal you specified in your settings will receive a datapoint of 1.</p><blockquote><p>Go shopping &amp;shopping</p></blockquote><p>On <strong>creation</strong> of the task, your <code>shopping</code> Beeminder goal will receive a datapoint of 1, in addition to your default goal.</p><blockquote><p>Go shopping &amp;shopping &amp;chores</p></blockquote><p>On <strong>creation</strong> of the task, your <code>shopping</code> and <code>chores</code> goals will both receive a datapoint of 1, in addition to your default goal.</p><blockquote><p>Go shopping *shopping</p></blockquote><p>On <strong>completion</strong> of the task, your <code>shopping</code> Beeminder goal will receive a datapoint of 1. In addition, your default goal will receive a datapoint of 1 when the task was created.</p><blockquote><p>Go shopping *shopping &amp;chores</p></blockquote><p>On <strong>creation</strong> of the task, your <code>chores</code> Beeminder goal will receive a datapoint of 1, in addition to your default goal.</p><p>On <strong>completion</strong> of the task, your <code>shopping</code> Beeminder goal will receive a datapoint of 1.</p><h4 id="enable-beeminder-integration" tabindex="-1">Enable Beeminder Integration <a class="header-anchor" href="#enable-beeminder-integration" aria-label="Permalink to &quot;Enable Beeminder Integration&quot;">​</a></h4><p>To enable the integration, first navigate to your account settings.</p><p><img src="'+l+'" alt="Account link"></p><p>Click &quot;Enable Beeminder integration.&quot;</p><p><img src="'+p+'" alt="Enable link"></p><p>You&#39;ll be redirected to Beeminder&#39;s website. Grant TaskRatchet access to your Beeminder account.</p><p><img src="'+c+'" alt="Beeminder permissions"></p><p>You&#39;ll be redirected back to your account settings. Add the name of the Beeminder goal you&#39;d like TaskRatchet to post your new tasks to, then click &quot;Save.&quot;</p><p><img src="'+h+'" alt="Integration settings"></p><p>Now, whenever you add a new task, a 1 will be posted to the goal you specified in your account settings.</p><p>In addition, you can add a <code>&amp;goal-name</code> tag to a task&#39;s name to post to a goal on task create, and <code>*goal-name</code> to post to the goal on task complete.</p><h3 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-label="Permalink to &quot;Further Reading&quot;">​</a></h3><ul><li><a href="https://forum.beeminder.com/t/explain-purpose-of-the-task-ratchet-app-integration-with-beeminder/10288" target="_blank" rel="noreferrer">Explain Purpose of the “Task Ratchet App” Integration with Beeminder?</a></li><li><a href="https://help.beeminder.com/article/289-taskratchet" target="_blank" rel="noreferrer">TaskRatchet help page at Beeminder</a></li></ul>',30);function k(f,_,y,w,B,q){const o=n("Video");return d(),r("div",null,[m,u,i(o,{url:"https://www.youtube.com/embed/Y_2F9MOD6Bg"}),b])}const v=a(g,[["render",k]]);export{T as __pageData,v as default};