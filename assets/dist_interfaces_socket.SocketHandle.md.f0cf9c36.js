import{_ as e,o as t,c as a,O as o}from"./chunks/framework.065d6068.js";const f=JSON.parse('{"title":"Interface: SocketHandle","description":"","frontmatter":{},"headers":[],"relativePath":"dist/interfaces/socket.SocketHandle.md","filePath":"dist/interfaces/socket.SocketHandle.md","lastUpdated":null}'),r={name:"dist/interfaces/socket.SocketHandle.md"},d=o('<h1 id="interface-sockethandle" tabindex="-1">Interface: SocketHandle <a class="header-anchor" href="#interface-sockethandle" aria-label="Permalink to &quot;Interface: SocketHandle&quot;">​</a></h1><p><a href="./../modules/socket.html">socket</a>.SocketHandle</p><p>拦截器对象</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h3><p>• <strong>close</strong>: (<code>event</code>: <code>unknown</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>event</code>): <code>void</code></p><p>当 WebSocket 连接的 readyState 变为 CLOSED 时被调用；这意味着连接已被关闭</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h3><p>• <strong>error</strong>: (<code>event</code>: <code>unknown</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>event</code>): <code>void</code></p><p>当 websocket 的连接由于一些错误事件的发生 (例如无法发送一些数据) 而被关闭时，一个 error 事件将被引发</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="fail" tabindex="-1">fail <a class="header-anchor" href="#fail" aria-label="Permalink to &quot;fail&quot;">​</a></h3><p>• <strong>fail</strong>: () =&gt; <code>void</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (): <code>void</code></p><p>当 WebSocket 重连失败时调用；这意味着需要特殊处理才能重新建立连接</p><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><p>• <strong>message</strong>: (<code>event</code>: <code>unknown</code>) =&gt; <code>void</code></p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>event</code>): <code>void</code></p><p>message 事件会在 WebSocket 接收到新消息时被触发</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><p>• <strong>open</strong>: (<code>event</code>: <code>unknown</code>) =&gt; <code>void</code></p><h4 id="type-declaration-4" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-4" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>event</code>): <code>void</code></p><p>当 WebSocket 的连接状态 readyState 变为 1 时调用；这意味着当前连接已经准备好发送和接受数据</p><h5 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><hr><h3 id="reconnect" tabindex="-1">reconnect <a class="header-anchor" href="#reconnect" aria-label="Permalink to &quot;reconnect&quot;">​</a></h3><p>• <strong>reconnect</strong>: (<code>event</code>: <code>unknown</code>) =&gt; <code>void</code></p><h4 id="type-declaration-5" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-5" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>event</code>): <code>void</code></p><p>当 WebSocket 连接的 readyState 变为 CLOSED 且 code === 1006 时被调用；这意味着用于期望收到状态码时连接非正常关闭</p><h5 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p>',61),n=[d];function l(c,i,s,h,p,u){return t(),a("div",null,n)}const m=e(r,[["render",l]]);export{f as __pageData,m as default};
