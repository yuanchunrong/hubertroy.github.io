webpackJsonp([8],{"2t+h":function(t,e){},HWk4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("lC5x"),a=n.n(i),s=n("J0Oq"),r=n.n(s),o=n("MpPw"),u=n("gPSm"),l={components:{MarkdownEditor:o.a},data:function(){return{tag:"交流讨论",tag_dict:{"交流讨论":"discuss","技术分享":"sharing"},preview:!1,content:"",title:""}},methods:{tab_active:function(t){this.tag=t},tab_preview:function(){this.preview=!this.preview},get_content:function(t){this.content=t},publish:function(){var t=r()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.publish_question({title:this.title,content:this.content,type:this.tag_dict[this.tag],beans:0});case 2:(e=t.sent).data.id&&this.$router.push({name:"question",params:{id:e.data.id}});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publish_div"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"publish_title_input",attrs:{type:"text",placeholder:"请输入帖子标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("MarkdownEditor",{staticClass:"publish_markdown_editor",attrs:{placeholder:"写点什么吧....",preview:t.preview},on:{text:t.get_content}}),t._v(" "),n("div",{staticClass:"publish_tools"},[n("div",{staticClass:"publish_tags"},[n("span",{staticClass:"publish_tag"},[t._v("\n                发布至:\n            ")]),t._v(" "),n("span",{staticClass:"publish_tag",class:["交流讨论"==t.tag?"publish_tag_active":""],on:{click:function(e){return t.tab_active("交流讨论")}}},[t._v("\n                交流讨论\n            ")]),t._v(" "),n("span",{staticClass:"publish_tag",class:["技术分享"==t.tag?"publish_tag_active":""],on:{click:function(e){return t.tab_active("技术分享")}}},[t._v("\n                技术分享\n            ")])]),t._v(" "),n("div",{staticClass:"publish_operation_tools"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.preview,expression:"!preview"}],staticClass:"publish_button publish_preview_button",on:{click:function(e){return t.tab_preview()}}},[t._v("预览")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.preview,expression:"preview"}],staticClass:"publish_button publish_preview_button",on:{click:function(e){return t.tab_preview()}}},[t._v("取消预览")]),t._v(" "),n("button",{staticClass:"publish_button",on:{click:function(e){return t.publish()}}},[t._v("发布")])])])],1)},staticRenderFns:[]};var d=n("C7Lr")(l,c,!1,function(t){n("2t+h")},null,null).exports,p=(n("2bvH"),{components:{Publish:d}}),v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"publish_home_div"},[e("Publish")],1)},staticRenderFns:[]};var _=n("C7Lr")(p,v,!1,function(t){n("Wb9V")},null,null);e.default=_.exports},MpPw:function(t,e,n){"use strict";var i=n("lC5x"),a=n.n(i),s=n("J0Oq"),r=n.n(s),o=n("4YfN"),u=n.n(o),l=n("a3Yh"),c=n.n(l),d=n("nfw7"),p=n.n(d),v=n("2bvH"),_=(n("gBzA"),n("Muz9")),f=n.n(_),h=n("Dod7"),w={get_upload_name:function(t){var e=t.user_id,n=t.folder?t.folder:"courses",i=new Date;return n+"/uid"+e+"-"+(""+i.getFullYear()+(i.getMonth()+1)+i.getDate())+"-"+i.getTime()},get_upload_key:function(t){return f.a.post(h.a+"v2/services/qiniu/token/",t)},get_upload_domain:function(t){return f.a.get(h.c+"v2/query",{params:t})},upload:function(t){return f.a.post(""+h.d,t,{"content-type":"application/x-www-form-urlencoded"})},upload_file:function(t){var e=this;return r()(a.a.mark(function n(){var i,s,r,o,u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.get_upload_name({user_id:t.user_id,folder:t.folder}),n.next=3,e.get_upload_key({bucket:"simplecloud",key:i});case 3:return s=n.sent,n.next=6,e.get_upload_domain({ak:s.data.token.split(":")[0],bucket:"simplecloud"});case 6:return n.sent.data.up.acc.main[0],(r=new FormData).append("file",t.file),r.append("token",s.data.token),r.append("key",i),r.append("fname","old.jpg"),n.next=15,e.upload(r);case 15:return o=n.sent,u=""+h.b+o.data.key,n.abrupt("return",u);case 18:case"end":return n.stop()}},n,e)}))()}},m={props:{placeholder:{type:String,require:!1},preview:{type:Boolean,require:!1,default:!1},hidden_default_tools:c()({type:Boolean,require:!1},"require",!0)},data:function(){return{text:"",selected_text:""}},components:{VueMarkdown:p.a},computed:u()({},Object(v.d)({user_id:function(t){return t.loginState.user_info.id}})),methods:{tab_preview:function(){this.preview=!this.preview},selected:function(){var t=document.getElementById("markdown_textarea"),e=t.value.substr(t.selectionStart,t.selectionEnd-t.selectionStart);return this.selected_text=e,{left:t.value.substr(0,t.selectionStart),right:t.value.substr(t.selectionEnd,t.value.length),selected:e}},replace:function(t){var e=this.selected(),n=""+t+e.selected+t;this.text=""+e.left+n+e.right},start_with:function(t){var e=this.selected(),n=""+t+e.selected;this.text=""+e.left+n+e.right},link_with:function(){var t=this.selected(),e="";e="http"==t.selected.substr(0,4)?"[描述]("+t.selected+")":""==t.selected?"[描述](链接)":"["+t.selected+"](链接)",this.text=""+t.left+e+t.right},img_with:function(t){var e=this.selected(),n="![picture]("+t+")";this.text=""+e.left+n+e.right},upload:function(){var t=r()(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.upload_file({file:e.target.files[0],user_id:this.user_id,folder:"questions"});case 2:n=t.sent,this.img_with(n);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},watch:{text:function(){this.$emit("text",this.text)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown_editor"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.preview,expression:"!preview"}],staticClass:"markdown_container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.preview,expression:"!preview"}],staticClass:"markdown_container_editor"},[n("div",{staticClass:"markdown_tools"},[n("div",{staticClass:"tools"},[n("i",{staticClass:"fa fa-bold",on:{click:function(e){return t.replace("**")}}}),t._v(" "),n("i",{staticClass:"fa fa-italic",on:{click:function(e){return t.replace("*")}}}),t._v(" "),n("i",{staticClass:"fa fa-link",on:{click:function(e){return t.link_with()}}}),t._v(" "),n("i",{staticClass:"fa fa-quote-left",on:{click:function(e){return t.start_with("> ")}}}),t._v(" "),n("i",{staticClass:"fa fa-code",on:{click:function(e){return t.replace("```")}}}),t._v(" "),n("label",{attrs:{for:"upload_file"}},[n("i",{staticClass:"fa fa-image",on:{click:function(e){return t.upload()}}})]),t._v(" "),n("input",{attrs:{type:"file",id:"upload_file"},on:{change:function(e){return t.upload(e)}}}),t._v(" "),n("i",{staticClass:"fa fa-list-ol",on:{click:function(e){return t.start_with("1. ")}}}),t._v(" "),n("i",{staticClass:"fa fa-list-ul",on:{click:function(e){return t.start_with("- ")}}})]),t._v(" "),n("router-link",{staticClass:"get_markdown_knowledge",attrs:{tag:"a",to:{name:"question",params:{id:"764"}}}},[n("i",{staticClass:"fa fa-question-circle"}),t._v("\n                    MarkDown 语法\n                ")])],1),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"markdown_text",attrs:{id:"markdown_textarea",placeholder:t.placeholder},domProps:{value:t.text},on:{select:function(e){return t.selected()},input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.preview,expression:"preview"}],staticClass:"markdown_container_previewer"},[n("VueMarkdown",{attrs:{source:t.text}})],1),t._v(" "),t.hidden_default_tools?n("div",{staticClass:"markdown_operation"},[n("div",[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.preview,expression:"!preview"}],staticClass:"markdown_operation_button markdown_operation_preview_button",on:{click:function(e){return t.tab_preview()}}},[t._v("预览")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.preview,expression:"preview"}],staticClass:"markdown_operation_button markdown_operation_preview_button",on:{click:function(e){return t.tab_preview()}}},[t._v("取消预览")]),t._v(" "),n("button",{staticClass:"markdown_operation_button markdown_operation_public_button"},[t._v("发布")])])]):t._e()])},staticRenderFns:[]};var k=n("C7Lr")(m,b,!1,function(t){n("O9mW")},null,null);e.a=k.exports},O9mW:function(t,e){},Wb9V:function(t,e){},a3Yh:function(t,e,n){"use strict";e.__esModule=!0;var i,a=n("liLe"),s=(i=a)&&i.__esModule?i:{default:i};e.default=function(t,e,n){return e in t?(0,s.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lbsL:function(t,e,n){n("ngi5");var i=n("Rv9F").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},liLe:function(t,e,n){t.exports={default:n("lbsL"),__esModule:!0}},ngi5:function(t,e,n){var i=n("8leu");i(i.S+i.F*!n("berT"),"Object",{defineProperty:n("Mr+r").f})}});
//# sourceMappingURL=8.e6b040e85a8979b1e56d.js.map