webpackJsonp([5],{"0MJc":function(t,e,a){"use strict";var s=a("PnBT"),o=!1;var r=function(t){o||a("o4wO")},n=a("VU/8")(null,s.a,!1,r,"data-v-cb58043e",null);n.options.__file="components/AppLogo.vue",e.a=n.exports},CIkK:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".logo[data-v-cb58043e]{margin-bottom:2em}.logo>.icon[data-v-cb58043e]{font-size:10em}",""])},PnBT:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("i",{staticClass:"icon"},[e("svg",[e("use",{attrs:{"xlink:href":"/assets/icons.min.svg#icon-robot"}})])])])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},WSpi:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[t._m(1),t._m(2),a("section",{staticClass:"section-pad-half"},[a("h2",[t._v("Send a message")]),t.hasSentFromForm?t._e():a("form",{ref:"form",staticClass:"needs-validation",on:{submit:t.sendMail}},[t.formError?a("h3",{staticClass:"form-error"},[t._v("Error: "+t._s(t.formError))]):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"contactReturn"}},[a("div",[t._v("Your Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"contactReturn",placeholder:"your@email.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"contactMessage"}},[a("div",[t._v("Your Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{rows:"10",id:"contactMessage",placeholder:"",required:""},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})])]),a("input",{attrs:{disabled:t.isSending,type:"submit",value:"Send"}})]),t.hasSentFromForm?a("div",[t._v("\n        Thanks, your message has been sent!\n      ")]):t._e()])])])};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-dark section-pad"},[e("h1",{staticClass:"title"},[this._v("\n      Contact Me\n    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section-pad"},[a("h2",[t._v("Email")]),a("p",[a("span",[t._v("tay")]),a("span",[t._v("lor")]),a("span",{staticStyle:{color:"#f3f5f6",display:"none"},attrs:{color:"#f3f5f6"}},[t._v("pleaseenablecss")]),a("span",[t._v("@")]),a("span",{staticStyle:{color:"#f3f5f6",display:"none"},attrs:{color:"#f3f5f6"}},[t._v("aol")]),a("span",[t._v("tgrat")]),a("span",[t._v("zer.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-pad"},[e("h2",[this._v("LinkedIn")]),e("p",[e("a",{attrs:{href:"https://www.linkedin.com/in/taylor-gratzer"}},[this._v("Taylor Gratzer")])])])}]};e.a=o},fBFx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("tBjd"),o=a("WSpi"),r=!1;var n=function(t){r||a("rfvh")},i=a("VU/8")(s.a,o.a,!1,n,"data-v-1372a892",null);i.options.__file="pages/contact.vue",e.default=i.exports},o4wO:function(t,e,a){var s=a("CIkK");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("27b33ee8",s,!1,{sourceMap:!1})},pOly:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"input[data-v-1372a892],textarea[data-v-1372a892]{font-size:12px;font-size:.75rem;padding:.25em .75em;line-height:24px;line-height:1.5rem;border:1px solid #ced4da;border-radius:.25rem}h2[data-v-1372a892]{margin-bottom:.5em}form[data-v-1372a892]{margin:1em 0}input[type=submit][data-v-1372a892]{background:#3e3cbe;color:#fff}input[type=submit][data-v-1372a892]:disabled{background:rgba(62,60,190,.5);color:#fff}textarea[data-v-1372a892]{font-family:Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1.1em;width:100%}input[data-v-1372a892]:not([type=submit]){min-width:50%}label[data-v-1372a892]{font-size:16px}.form-error[data-v-1372a892]{padding:1em;color:#dc3545}",""])},rfvh:function(t,e,a){var s=a("pOly");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("6615c795",s,!1,{sourceMap:!1})},tBjd:function(t,e,a){"use strict";var s=a("mvHQ"),o=a.n(s),r=a("0MJc");e.a={components:{AppLogo:r.a},data:function(){return{email:"",body:"",formError:"",isSending:!1,hasSentFromForm:!1}},methods:{sendMail:function(t){var e=this.$refs.form.checkValidity();if(console.log(this.$refs.form,e),t.preventDefault(),this.email){if(this.body){var a=new XMLHttpRequest;a.open("POST","https://tg-functions.azurewebsites.net/api/HttpTriggerCSharp1?code=DkySTB/tQHQWZb3hgyhwVisJaIxcd2raMWrlB47MI77Dlo44QjLzxw=="),a.setRequestHeader("Content-Type","application/json");var s=this;return a.onload=function(){200===a.status?(s.formError="",s.hasSentFromForm=!0):(console.log(a.status,a.responseText),s.formError=a.responseText),s.isSending=!1},a.send(o()({fromId:this.email,bodyContent:this.body})),s.isSending=!0,!1}this.formError="Please write me something to read."}else this.formError="Please let me know how I can reach you."}}}}});