import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as r}from"./app-9203cfad.js";const a={},h=r('<h2 id="所有上报" tabindex="-1"><a class="header-anchor" href="#所有上报" aria-hidden="true">#</a> 所有上报</h2><p>所有上报事件都包含以下字段：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>time</td><td>int64</td><td>时间戳</td></tr><tr><td>self_id</td><td>int64</td><td>机器人QQ</td></tr><tr><td>post_type</td><td>string</td><td>上报类型</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>post_type</code> 为 <code>message</code> 或 <code>message_sent</code> 时，数据是一致的。<br> 区别在于 <code>message</code> 是收到的消息，<code>message_sent</code> 是发送的消息。</p><p>默认情况下，Shamrock 只会上报 <code>message</code> 类型的消息。</p></div><h2 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h2><h3 id="posttype" tabindex="-1"><a class="header-anchor" href="#posttype" aria-hidden="true">#</a> PostType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message</td><td>收到消息</td></tr><tr><td>message_sent</td><td>发送消息</td></tr><tr><td>notice</td><td>通知</td></tr><tr><td>request</td><td>请求</td></tr></tbody></table><h3 id="messagetype" tabindex="-1"><a class="header-anchor" href="#messagetype" aria-hidden="true">#</a> MessageType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>private</td><td>私聊消息</td></tr><tr><td>group</td><td>群消息</td></tr></tbody></table><h3 id="messagesubtype" tabindex="-1"><a class="header-anchor" href="#messagesubtype" aria-hidden="true">#</a> MessageSubType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>friend</td><td>好友消息</td></tr><tr><td>normal</td><td>群消息</td></tr><tr><td><s>anonymous</s></td><td>匿名消息</td></tr><tr><td>group</td><td>群临时消息</td></tr><tr><td>group_self</td><td>群消息(自身操作)</td></tr><tr><td>notice</td><td>系统提示</td></tr></tbody></table><h3 id="noticetype" tabindex="-1"><a class="header-anchor" href="#noticetype" aria-hidden="true">#</a> NoticeType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>group_upload</td><td>群文件上传</td></tr><tr><td>group_admin</td><td>群管理员变动</td></tr><tr><td>group_decrease</td><td>群成员减少</td></tr><tr><td>group_increase</td><td>群成员增加</td></tr><tr><td>group_ban</td><td>群禁言</td></tr><tr><td>group_recall</td><td>群消息撤回</td></tr><tr><td>group_card</td><td>群成员名片变动</td></tr><tr><td>friend_add</td><td>好友添加</td></tr><tr><td>friend_recall</td><td>好友撤回</td></tr><tr><td>offline_file</td><td>接收到离线文件包</td></tr><tr><td>client_status</td><td>客户端状态</td></tr><tr><td>essence</td><td>精华消息</td></tr><tr><td>notify</td><td>系统通知</td></tr></tbody></table><h3 id="noticenotifysubtype" tabindex="-1"><a class="header-anchor" href="#noticenotifysubtype" aria-hidden="true">#</a> NoticeNotifySubType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>honor</td><td>群荣誉变更</td></tr><tr><td>poke</td><td>戳一戳</td></tr><tr><td>lucky_king</td><td>运气王</td></tr><tr><td>title</td><td>群头衔变更</td></tr></tbody></table><h3 id="requesttype" tabindex="-1"><a class="header-anchor" href="#requesttype" aria-hidden="true">#</a> RequestType</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>friend</td><td>好友请求</td></tr><tr><td>group</td><td>群请求</td></tr></tbody></table><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><h3 id="messagesender" tabindex="-1"><a class="header-anchor" href="#messagesender" aria-hidden="true">#</a> MessageSender</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>user_id</td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td>nickname</td><td>string</td><td>发送者昵称</td></tr></tbody></table><p>如果是群消息，还会包含以下字段：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>card</td><td>string</td><td>发送者群名片</td></tr><tr><td>level</td><td>string</td><td>发送者等级</td></tr><tr><td>role</td><td>string</td><td>发送者角色</td></tr><tr><td>title</td><td>string</td><td>发送者头衔</td></tr></tbody></table><h3 id="post-message-tempsource" tabindex="-1"><a class="header-anchor" href="#post-message-tempsource" aria-hidden="true">#</a> Post_Message_TempSource</h3><table><thead><tr><th>类型</th><th>来源</th></tr></thead><tbody><tr><td>0</td><td>群聊</td></tr><tr><td>1</td><td>QQ咨询</td></tr><tr><td>2</td><td>查找</td></tr><tr><td>3</td><td>QQ电影</td></tr><tr><td>4</td><td>热聊</td></tr><tr><td>6</td><td>验证消息</td></tr><tr><td>7</td><td>多人聊天</td></tr><tr><td>8</td><td>约会</td></tr><tr><td>9</td><td>通讯录</td></tr></tbody></table>',24),s=[h];function o(i,n){return d(),e("div",null,s)}const b=t(a,[["render",o],["__file","general-data.html.vue"]]);export{b as default};
