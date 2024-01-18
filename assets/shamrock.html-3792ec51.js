import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,e as d}from"./app-9203cfad.js";const n={},s=d(`<h2 id="切换账号" tabindex="-1"><a class="header-anchor" href="#切换账号" aria-hidden="true">#</a> 切换账号</h2><p>某个账号因为某种原因寄了，允许切换备用能源！</p><h3 id="api端点" tabindex="-1"><a class="header-anchor" href="#api端点" aria-hidden="true">#</a> API端点</h3><p><code>/switch_account</code></p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>是</td><td>QQ</td><td></td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><p>是否正常执行切换账号请求的响应。</p><h2 id="上传文件到缓存目录" tabindex="-1"><a class="header-anchor" href="#上传文件到缓存目录" aria-hidden="true">#</a> 上传文件到缓存目录</h2><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/upload_file</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><p>以<strong>file</strong>格式上传文件，不要使用<strong>binary</strong>。</p><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/scard/Android/data/com.tencent.mobileqq/Tencent/Shamrock/xxxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="让shamrock下载文件到缓存目录" tabindex="-1"><a class="header-anchor" href="#让shamrock下载文件到缓存目录" aria-hidden="true">#</a> 让Shamrock下载文件到缓存目录</h2><p>用法二选一：</p><p>1.仅发送url，由Shamrock自己访问该url来下载文件</p><p>2.仅发送文件base64，Shamrock解码后直接转存为文件</p><p>url和base64至少一个不能为空</p><p>同时发送url和base64时，使用url</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/download_file</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>否</td><td>下载地址</td><td></td></tr><tr><td>name</td><td>string</td><td>否</td><td>文件名称</td><td>文件md5</td></tr><tr><td>base64</td><td>string</td><td>否</td><td>文件base64内容</td><td></td></tr><tr><td>thread_cnt</td><td>int32</td><td>否</td><td>下载的线程数量</td><td></td></tr><tr><td>headers</td><td><code>string</code> or <code>array</code></td><td>否</td><td>请求头</td><td></td></tr></tbody></table><h4 id="headers为string时示例" tabindex="-1"><a class="header-anchor" href="#headers为string时示例" aria-hidden="true">#</a> headers为string时示例</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;User-Agent=YOUR_UA[\\r\\n]Referer=https://www.baidu.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="headers为array时示例" tabindex="-1"><a class="header-anchor" href="#headers为array时示例" aria-hidden="true">#</a> headers为array时示例</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;User-Agent=YOUR_UA&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Referer=https://www.baidu.com&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>[\\r\\n]</code> 为换行符, 使用http请求时请注意编码</p></blockquote><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/scard/Android/data/com.tencent.mobileqq/Tencent/Shamrock/xxxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过这个API下载的文件能直接放入CQ码作为图片发送</p><p>调用后会阻塞直到下载完成后才会返回数据，请注意下载大文件时的超时</p></blockquote><h2 id="获取手机电池信息" tabindex="-1"><a class="header-anchor" href="#获取手机电池信息" aria-hidden="true">#</a> 获取手机电池信息</h2><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/get_device_battery</code></p><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;battery&quot;</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token number">3102000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取shamerock启动时间" tabindex="-1"><a class="header-anchor" href="#获取shamerock启动时间" aria-hidden="true">#</a> 获取Shamerock启动时间</h2><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/get_start_time</code></p><h3 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型" aria-hidden="true">#</a> 请求类型</h3><p><code>POST</code> | <code>GET</code> | <code>不支持WS</code></p><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;retcode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1696749716155</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取shamrock日志" tabindex="-1"><a class="header-anchor" href="#获取shamrock日志" aria-hidden="true">#</a> 获取Shamrock日志</h2><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/log</code></p><h3 id="请求类型-1" tabindex="-1"><a class="header-anchor" href="#请求类型-1" aria-hidden="true">#</a> 请求类型</h3><p><code>POST</code> | <code>GET</code> | <code>不支持WS</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>start</td><td>int32</td><td>否</td><td>开始的行</td><td></td></tr><tr><td>recent</td><td>bool</td><td>否</td><td>是否只显示最近的日志</td><td>false</td></tr></tbody></table><h2 id="远程shell执行" tabindex="-1"><a class="header-anchor" href="#远程shell执行" aria-hidden="true">#</a> 远程Shell执行</h2><p>该接口默认关闭，需要在实验室设置手动打开！注意，该接口可能导致您的隐私数据泄露，请勿公开在未知的网络，或者泄露您的token。</p><h3 id="请求类型-2" tabindex="-1"><a class="header-anchor" href="#请求类型-2" aria-hidden="true">#</a> 请求类型</h3><p><code>POST</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>cmd</td><td>array 或 string</td><td>是</td><td>命令内容</td><td></td></tr><tr><td>dir</td><td>string</td><td>是</td><td>当前所处的目录</td><td></td></tr></tbody></table><h2 id="关闭shamrock" tabindex="-1"><a class="header-anchor" href="#关闭shamrock" aria-hidden="true">#</a> 关闭Shamrock</h2><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/shut</code></p><h3 id="请求类型-3" tabindex="-1"><a class="header-anchor" href="#请求类型-3" aria-hidden="true">#</a> 请求类型</h3><p><code>POST</code> | <code>GET</code> | <code>不支持WS</code></p><h3 id="响应-5" tabindex="-1"><a class="header-anchor" href="#响应-5" aria-hidden="true">#</a> 响应</h3><p>无响应</p>`,65),r=[s];function i(o,h){return e(),t("div",null,r)}const l=a(n,[["render",i],["__file","shamrock.html.vue"]]);export{l as default};
