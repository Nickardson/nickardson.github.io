webpackJsonp([1],{"0+WS":function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,".project-list-container{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.project-list,.project-list-container{display:-webkit-box;display:-ms-flexbox;display:flex}.project-list{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.project-image{max-width:50%;float:left;margin:1em 1em 1em 0;-webkit-box-shadow:0 4px 6px 0 rgba(0,0,0,.2);box-shadow:0 4px 6px 0 rgba(0,0,0,.2);border:1px solid #d3d3d3;border-radius:.25em}.project{width:800px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:1em .5em 2em;overflow-y:auto}.project-description{margin-top:.5em}.project-description p{margin:.75em 0;line-height:1.4em}.project-case-study-link{margin-top:.5em}.project-date{color:#6b8894;margin-bottom:.5em}.project-badges{margin-top:.5em}@media screen and (max-width:800px){.project-list-container{-webkit-box-pack:unset;-ms-flex-pack:unset;justify-content:unset}}@media screen and (max-width:600px){.project-image{max-width:100%}}",""])},"0LBd":function(e,a,t){"use strict";a.a={props:["badges"],data:function(){return{colors:{HTML5:{b:"#e44d26"},CSS:{b:"#264de4"},JavaScript:{b:"#e7a328"},"Web Development":{b:"#e7a328",f:"black"},"C#":{b:"#67217a"},"Microsoft Azure":{b:"#1673b9"},Java:{b:"#ea2d2f"},SQLite:{b:"#8fd1f8",f:"black"},"Angular 5":{b:"#c3002f"},TypeScript:{b:"#007acc"},"Firebase Realtime Database":{b:"#ffcb2c",f:"black"}}}},methods:{getBackgroundColor:function(e){var a=this.colors[e];return a&&a.b||"#333333"},getForegroundColor:function(e){var a=this.colors[e];return a&&a.f||"#EEEEEE"}}}},"dc/M":function(e,a,t){var r=t("0+WS");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("d00f0e16",r,!1,{sourceMap:!1})},dksa:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e._m(0),t("section",{staticClass:"section-pad"},[t("div",{staticClass:"project-list-container"},[t("div",{staticClass:"project-list"},e._l(e.projects,function(a){return t("div",{key:a.name,staticClass:"project"},[t("h2",[e._v(e._s(a.name))]),a.time?t("h3",{staticClass:"project-date"},[e._v(e._s(e._f("dateFormat")(a.time)))]):e._e(),a.badges?t("Badges",{staticClass:"project-badges",attrs:{badges:a.badges}}):e._e(),a.image?t("a",{attrs:{href:a.imageFallback||a.image,target:"_blank",rel:"noopener"}},[a.imageFallback?t("picture",[t("source",{attrs:{srcset:encodeURI(a.image),type:"image/webp"}}),t("img",{staticClass:"project-image",attrs:{src:a.imageFallback,alt:a.name+" Project Image"}})]):e._e(),a.imageFallback?e._e():t("img",{staticClass:"project-image",attrs:{src:a.image,alt:a.name+" Project Image"}})]):e._e(),a.description?t("div",{staticClass:"project-description",domProps:{innerHTML:e._s(a.description)}}):e._e(),a.caseStudy?t("div",{staticClass:"project-case-study-link"},[t("nuxt-link",{attrs:{to:a.caseStudy}},[e._v("View Case Study")])],1):e._e()],1)}))])])])};r._withStripped=!0;var s={render:r,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("section",{staticClass:"section-dark section-pad"},[a("h1",{staticClass:"title"},[this._v("\n      Work Examples\n    ")]),a("h2",{staticClass:"subtitle"},[this._v("\n      Demos, Case Studies, Technologies\n    ")])])}]};a.a=s},jDN3:function(e,a,t){"use strict";var r=t("jNfR");a.a={components:{Badges:r.a},filters:{dateFormat:function(e){return e?e.join(" - "):""}},data:function(){return{projects:[{name:"CodeCraft Partner Community",time:["January 2018","April 2018"],badges:[{name:"Angular 5"},{name:"TypeScript"},{name:"Firebase Realtime Database"},{name:"Google Cloud Platform"}],description:'\n            <p>A team project for <a href="https://www.codecraftworks.com/" target="_blank" rel="noopener">CodeCraft Works</a>.</p>\n\n            <p>The site allows CodeCraft instructors to set up a profile, and allows CodeCraft partners to post when they are offering coding courses.</p>\n            \n            <p>Firebase Realtime Database means that any change to the site\'s data is near-instanteously updated for all users.</p>\n          ',image:"/assets/work/PartnerCommunity/Instructors.webp",imageFallback:"/assets/work/PartnerCommunity/Instructors.png"},{name:"Numerous Assorted Projects",time:["2012","Now"]},{name:"World Travelogue Database",time:["January 2016","April 2016"],badges:[{name:"SQLite"},{name:"Java"},{name:"Web Development"}],description:"\n            <p>A web-based application to record a travelogue of places visited,\n            allowing image uploads, map locations, and sharing with other users.</p>\n\n            <p>The application can behave as either a personal desktop application,\n            or be hosted on a dedicated server to allow multiple users to login and enter travel journals.</p>\n          ",image:"/assets/work/World Travel Database.webp",imageFallback:"/assets/work/World Travel Database.png"}]}}}},jNfR:function(e,a,t){"use strict";var r=t("0LBd"),s=t("x6QX"),o=!1;var i=function(e){o||t("nIiN")},n=t("VU/8")(r.a,s.a,!1,i,"data-v-12690a38",null);n.options.__file="components\\Badges.vue",a.a=n.exports},nEY5:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,".dev-badge[data-v-12690a38]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:.15em .4em;margin:.2em;border-radius:.25em;display:inline-block}@media screen and (max-width:1200px){.dev-badge[data-v-12690a38]{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:inherit}}.dev-badge-number[data-v-12690a38]{opacity:.75;margin-right:.2em}.dev-badge-header[data-v-12690a38]{font-size:16px}.dev-badge-description[data-v-12690a38]{color:#5f7081}",""])},nIiN:function(e,a,t){var r=t("nEY5");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("53f96f12",r,!1,{sourceMap:!1})},rXLo:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("jDN3"),s=t("dksa"),o=!1;var i=function(e){o||t("dc/M")},n=t("VU/8")(r.a,s.a,!1,i,null,null);n.options.__file="pages\\work.vue",a.default=n.exports},x6QX:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",e._l(e.badges,function(a){return t("div",{key:a.name,staticClass:"dev-badge",style:{"background-color":e.getBackgroundColor(a.name),color:e.getForegroundColor(a.name)}},[t("h3",{staticClass:"dev-badge-header"},[e._v(e._s(a.name))])])}))};r._withStripped=!0;var s={render:r,staticRenderFns:[]};a.a=s}});