(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{314:function(t,e,o){"use strict";o.d(e,"a",(function(){return y}));o(15),o(16),o(10),o(20),o(26);var n=o(4),d=o(7),r=o(11),c=o(9),l=o(8),f=o(3),h=o(5),m=o(1),v=o(51),w=o(32);var x=function(t,e,o,desc){var n,d=arguments.length,r=d<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(r=(d<3?n(r):d>3?n(e,o,r):n(e,o))||r);return d>3&&r&&Object.defineProperty(e,o,r),r},y=function(t){Object(c.a)(m,t);var e,o,h=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(f.a)(t);if(e()){var d=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,d)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}(m);function m(){var t;return Object(d.a)(this,m),(t=h.apply(this,arguments)).contentPages=[],t}return Object(r.a)(m,[{key:"fetchContentPages",value:(o=Object(n.a)(regeneratorRuntime.mark((function t(e,o,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getContentPages(e,o,n);case 2:return this.contentPages=t.sent,t.abrupt("return",this.contentPages);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})},{key:"getContentPages",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e,o,n){var d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(e).fetch();case 2:return d=t.sent,t.abrupt("return",(d||[]).map((function(t){return{draft:!!t.draft,headerOne:t.header_one,headerTwo:t.header_two,headerThree:t.header_three,imageUrl:t.image_url,icon:t.icon,shortTitle:t.short_title,slug:t.slug,tablesOfContent:t.toc,isOpen:!!n&&t.slug===n,title:t.title,to:"/".concat(e,"/").concat(t.slug),cta:o}})));case 4:case"end":return t.stop()}}),t,this)}))),function(t,o,n){return e.apply(this,arguments)})},{key:"activeContentPages",get:function(){return v.a.currentEnvironment!==w.Environment.DEVELOPMENT?this.contentPages.filter((function(t){return!t.draft})):this.contentPages}}]),m}(m.e);y=x([m.a],y)},315:function(t,e,o){var content=o(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("526a6bf3",content,!0,{sourceMap:!1})},316:function(t,e,o){var content=o(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("629d85d3",content,!0,{sourceMap:!1})},333:function(t,e,o){"use strict";o(15),o(16),o(10),o(20);var n=o(7),d=o(11),r=o(9),c=o(8),l=o(3),f=o(5),h=o(1),m=o(30),v=o(46),w=o(90);var x=function(t,e,o,desc){var n,d=arguments.length,r=d<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(r=(d<3?n(r):d>3?n(e,o,r):n(e,o))||r);return d>3&&r&&Object.defineProperty(e,o,r),r},y=function(t){Object(r.a)(o,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(l.a)(t);if(e()){var d=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,d)}else o=n.apply(this,arguments);return Object(c.a)(this,o)}}(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).triggerModal=!1,t}return Object(d.a)(o,[{key:"showFormClicked",value:function(){this.conversionEvent(v.a.GET_IN_TOUCH_CLICKED,this.placement),this.buttonClick("Cta.showFormClicked",this.placement),this.triggerModal=!this.triggerModal}}]),o}(Object(h.c)(m.a));x([Object(h.d)({default:"cta"})],y.prototype,"placement",void 0);var k=y=x([Object(h.a)({components:{ContactModal:w.a}})],y),j=(o(345),o(6)),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cta"},[n("contact-modal",{attrs:{"modal-name":"get-in-touch",placement:t.placement,trigger:t.triggerModal}}),n("img",{staticClass:"cta-logo",attrs:{src:o(73),alt:"Right Balance logo"}}),n("div",{staticClass:"cta-heading"},[t._v(t._s(t.$t("solutions_cta_header")))]),n("button",{staticClass:"cta-button",on:{click:t.showFormClicked}},[t._v(" "+t._s(t.$t("lets_chat"))+" ")])],1)}),[],!1,null,"677757f9",null);e.a=component.exports},335:function(t,e,o){"use strict";o(15),o(16),o(10),o(20);var n=o(7),d=o(11),r=o(9),c=o(8),l=o(3),f=o(5),h=o(342),m=o(341),v=o.n(m),w=o(1),x=o(30);var y=function(t,e,o,desc){var n,d=arguments.length,r=d<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(r=(d<3?n(r):d>3?n(e,o,r):n(e,o))||r);return d>3&&r&&Object.defineProperty(e,o,r),r},k=function(t){Object(r.a)(o,t);var e=function(t){function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var o,n=Object(l.a)(t);if(e()){var d=Object(l.a)(this).constructor;o=Reflect.construct(n,arguments,d)}else o=n.apply(this,arguments);return Object(c.a)(this,o)}}(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"iconPath",get:function(){return this.icon?h["mdi".concat(v.a.pascal(this.icon))]:""}}]),o}(Object(w.c)(x.a));y([Object(w.d)()],k.prototype,"backgroundImageUrl",void 0),y([Object(w.d)({default:""})],k.prototype,"icon",void 0),y([Object(w.d)({default:85})],k.prototype,"iconWidth",void 0),y([Object(w.d)({default:85})],k.prototype,"iconHeight",void 0),y([Object(w.d)({default:""})],k.prototype,"imageUrl",void 0),y([Object(w.d)({default:"read_more"})],k.prototype,"cta",void 0),y([Object(w.d)({default:""})],k.prototype,"headerOne",void 0),y([Object(w.d)({default:""})],k.prototype,"headerTwo",void 0),y([Object(w.d)({default:""})],k.prototype,"headerThree",void 0),y([Object(w.d)({default:void 0})],k.prototype,"to",void 0),y([Object(w.d)({default:"content-card"})],k.prototype,"placement",void 0);var j=k=y([Object(w.a)({components:{}})],k),O=(o(343),o(6)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-container",style:{backgroundImage:"url("+t.backgroundImageUrl+")"}},[o("div",{staticClass:"card-content"},[t.iconPath?o("span",[o("svg",{attrs:{fill:"currentColor",width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:t.iconPath}})])]):t.imageUrl?o("img",{attrs:{src:t.imageUrl,alt:t.$t("logo")}}):t._e(),o("div",{staticClass:"headers"},[o("div",{staticClass:"heading"},[t._v(t._s(t.headerOne))]),o("div",{staticClass:"heading-two"},[t._v(t._s(t.headerTwo))]),o("div",{staticClass:"heading-three"},[t._v(t._s(t.headerThree))])]),o("router-link",{staticClass:"link-button",attrs:{to:t.to}},[t._v(" "+t._s(t.$t(t.cta))+" ")])],1)])}),[],!1,null,"83b62010",null);e.a=component.exports},343:function(t,e,o){"use strict";var n=o(315);o.n(n).a},344:function(t,e,o){var n=o(18),d=o(53),r=o(54),c=o(55),l=o(56),f=o(57);e=n(!1);var h=d(r),m=d(c),v=d(l),w=d(f);e.push([t.i,"body[data-v-83b62010],html[data-v-83b62010]{-webkit-overflow-scrolling:touch;overflow-scrolling:touch;scroll-behavior:auto}body[data-v-83b62010]{background:#000;color:#fff;text-align:center;margin:0;font-family:Montserrat,sans-serif;font-size:16px;overflow-x:hidden;overflow-y:auto}.testimonial-bg[data-v-83b62010]{background:#1d19ab url("+h+")}@media screen and (max-width:768px){.testimonial-bg[data-v-83b62010]{background-image:url("+m+")}}.diamond-bg[data-v-83b62010]{background:#1d19ab url("+v+")}@media screen and (max-width:768px){.diamond-bg[data-v-83b62010]{background-image:url("+w+')}}.close[data-v-83b62010]{cursor:pointer;position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.5}.close[data-v-83b62010]:hover{opacity:1}.close[data-v-83b62010]:after,.close[data-v-83b62010]:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close[data-v-83b62010]:before{transform:rotate(45deg)}.close[data-v-83b62010]:after{transform:rotate(-45deg)}.uppercase[data-v-83b62010]{text-transform:uppercase}.background[data-v-83b62010]{background-size:cover}.heading[data-v-83b62010]{font-size:2.9em;line-height:1em;font-weight:900;margin:0;text-transform:uppercase;white-space:pre-line}@media (max-width:850px){.heading[data-v-83b62010]{font-size:2em}}.subheading[data-v-83b62010]{font-style:italic;font-weight:400;line-height:1.5em;font-size:1.17em;margin:1.5em 0;white-space:pre-line}@media screen and (max-width:850px){.subheading[data-v-83b62010]{font-size:.8em;line-height:1.4em}}@media screen and (max-width:850px){.can-play-webm .slide.box-slide .heading[data-v-83b62010],.can-play-webm .slide.diamond-bg .heading[data-v-83b62010]{padding-top:40px}.can-play-webm .slide.box-slide .col.thin[data-v-83b62010],.can-play-webm .slide.diamond-bg .col.thin[data-v-83b62010]{height:100vh;z-index:-1}.can-play-webm .slide.box-slide .col.thin video[data-v-83b62010],.can-play-webm .slide.diamond-bg .col.thin video[data-v-83b62010]{-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;height:100vh;max-height:100vh}}.col[data-v-83b62010]{vertical-align:middle;display:table-cell;width:50%;position:relative}@media screen and (max-width:850px){.col.wide[data-v-83b62010]{margin:50vh 0 0}.col.thin[data-v-83b62010]{position:absolute;top:0;left:0;height:50vh}}@media screen and (max-width:850px){.col.thin[data-v-83b62010],.col.wide[data-v-83b62010]{display:block;width:100%;min-width:auto}}.two-thirds .wide[data-v-83b62010]{width:55%}.two-thirds .thin[data-v-83b62010]{width:45%}@media screen and (max-width:850px){.two-thirds .thin[data-v-83b62010],.two-thirds .wide[data-v-83b62010]{width:100%}}b[data-v-83b62010]{font-style:italic}.col .video-to-background video[data-v-83b62010]{max-height:100%;max-width:100%;position:absolute!important;left:-5%;top:0;bottom:0;z-index:-1;width:100%;height:100%}@media screen and (max-width:850px){.col .video-to-background video[data-v-83b62010]{left:0}}.col .video-to-background video.head[data-v-83b62010]{max-height:110%;max-width:110%;width:110%;height:110%;left:-10%;top:-5%}@media (max-width:850px){.col .video-to-background video.head[data-v-83b62010]{max-height:100%;max-width:100%;width:100%;height:100%;left:0;top:0}}.wrapper[data-v-83b62010]{position:relative}.visible .fade[data-v-83b62010]{opacity:1}.fade-enter-active[data-v-83b62010],.fade-leave-active[data-v-83b62010]{transition:opacity .3s}.fade[data-v-83b62010],.fade-enter[data-v-83b62010],.fade-leave-to[data-v-83b62010]{opacity:0}.fade[data-v-83b62010]{transition:opacity .3s linear}.fade.delay[data-v-83b62010]{transition-delay:.45s}.frame .borders[data-v-83b62010]{border:10px solid rgba(0,0,0,.2);border-radius:12px;box-sizing:border-box}.frame .testimonial-bg[data-v-83b62010]{display:table;height:100%;min-width:100%;background-size:cover;background-position:100% 0;background-repeat:no-repeat}.frame .gradient[data-v-83b62010]{background:rgba(0,0,0,.12);padding:10px 30px;height:100%;box-sizing:border-box;display:table-cell;vertical-align:middle}.frame .border[data-v-83b62010]{border-radius:100%;border:10px solid rgba(0,0,0,.2);display:inline-block;overflow:hidden}.frame img[data-v-83b62010]{display:block;margin:0 auto;width:194px;height:194px;background:#fff}.frame q[data-v-83b62010]{font-size:2.65em;line-height:1.02em;font-weight:800;text-transform:uppercase;margin:15px 0;display:block}.frame .subheading[data-v-83b62010]{line-height:1.5em}.frame .person[data-v-83b62010]{font-weight:900;font-size:1.1em;text-transform:uppercase;margin:2em 0;letter-spacing:1px}.purple-box[data-v-83b62010]{width:165px;height:10px;background:#ff00eb;margin:0 auto}.no-margin[data-v-83b62010]{margin:0}.width-100[data-v-83b62010]{width:100%}.video-fallback .col[data-v-83b62010],.video-fallback .slide .content[data-v-83b62010]{position:static}.video-fallback .fallback-no-bg[data-v-83b62010]{background:none}@media (max-width:850px){.video-fallback .fallback-no-bg .col.wide[data-v-83b62010]{margin-top:55vh}.video-fallback .fallback-no-bg .col.wide .video-to-background video[data-v-83b62010]{left:0;-o-object-fit:contain;object-fit:contain}.video-fallback .fallback-no-bg .col.wide video[data-v-83b62010]{max-height:100%}}.contacts-modal[data-v-83b62010]{display:flex;flex-direction:column;align-items:center;text-align:center}.contacts-modal button[data-v-83b62010]{align-self:flex-end}.disable-scroll[data-v-83b62010]{overflow:hidden}.v--modal-overlay[data-v-83b62010]{background:rgba(0,0,0,.5)}@media (max-width:850px){.v--modal[data-v-83b62010]{top:0!important;left:0!important;width:100%!important;height:100%!important}}.v--modal[data-v-83b62010]{background-color:transparent}.text[data-v-83b62010]{white-space:pre-line;text-align:left}.text.main[data-v-83b62010]{font-size:1.5em;line-height:2em;font-weight:500}.text.name[data-v-83b62010]{font-size:1.75em;font-weight:900;color:#294dd2;text-transform:uppercase}.text.quote[data-v-83b62010]{line-height:2em;max-width:390px}.text.person[data-v-83b62010]{font-size:1em;font-weight:900;text-transform:uppercase;line-height:1.5em}.text.description[data-v-83b62010]{font-size:1.25em;line-height:1.5em;font-style:italic}.text.large[data-v-83b62010]{font-size:3.5em}.text.small[data-v-83b62010]{font-size:1em}.light-mode .wrapper[data-v-83b62010]:not(.main-page){background-color:#fff}.light-mode .wrapper:not(.main-page) .case-study-section[data-v-83b62010]{border-top:none}.light-mode .wrapper:not(.main-page) .case-study-section .content .container[data-v-83b62010]{border-bottom:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg[data-v-83b62010]:not(.case-study-section){background:none;border-top:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .gradient[data-v-83b62010]{background:none}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-83b62010],.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .text[data-v-83b62010]{color:#294dd2!important}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-83b62010]{border-color:#294dd2}.light-mode .wrapper:not(.main-page) header[data-v-83b62010]{background-color:#fff}.light-mode .wrapper:not(.main-page) .company-name[data-v-83b62010],.light-mode .wrapper:not(.main-page) .contact .connect-link[data-v-83b62010],.light-mode .wrapper:not(.main-page) .contact .contact-link[data-v-83b62010],.light-mode .wrapper:not(.main-page) .toggle-text[data-v-83b62010],.light-mode .wrapper:not(.main-page) header a[data-v-83b62010]{color:#000}.light-mode .wrapper:not(.main-page) .testimonial-bg.slide[data-v-83b62010]{background-image:none;background-color:#fff;color:#294dd2}.light-mode .wrapper:not(.main-page) .slide[data-v-83b62010]:not(.footer):not(.last-slide):not(.two-thirds){background-color:#fff}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) p[data-v-83b62010]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text[data-v-83b62010]{color:#000}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.heading[data-v-83b62010],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.name[data-v-83b62010],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.subtitle[data-v-83b62010]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds).borderless .container[data-v-83b62010]{border:none}.light-mode .wrapper:not(.main-page) section.footer[data-v-83b62010]{background-color:#fff}.light-mode .wrapper:not(.main-page) section.footer .subtitle[data-v-83b62010]{color:#294dd2}.light-mode .wrapper:not(.main-page) section.footer footer .contacts[data-v-83b62010],.light-mode .wrapper:not(.main-page) section.footer footer .contacts a[data-v-83b62010]{color:#000}.light-mode .wrapper:not(.main-page) .head-slide .container[data-v-83b62010]{padding-bottom:48px}.light-mode .wrapper:not(.main-page) .purple-box[data-v-83b62010]{background-color:#294dd2}.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg[data-v-83b62010],.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg .person[data-v-83b62010]{color:#fff!important}.link-button[data-v-83b62010]{font-weight:900;font-size:1.1em;text-transform:uppercase;letter-spacing:1px;border:1px solid #fff;background:transparent;color:#fff;padding:.5em 2em;text-decoration:none;transition:all 1.25s cubic-bezier(.19,1,.22,1)}.link-button[data-v-83b62010]:hover{box-shadow:0 0 10px #fff}.link-button[data-v-83b62010]:active{box-shadow:inset 0 0 10px #fff}.logo[data-v-83b62010]{width:95px;height:95px}@media screen and (max-height:380px){.logo[data-v-83b62010]{width:45px;height:45px}}@media (max-height:590px){.logo[data-v-83b62010]{width:65px;height:65px}}button.cta-button[data-v-83b62010]{text-transform:uppercase;background:#294dd2;color:#fff;font-family:Montserrat,sans-serif;font-size:2em;font-weight:1000;border-radius:9px;border:none;outline:none;cursor:pointer;padding:.27em 1.2em .25em}.card-container[data-v-83b62010]{background-repeat:no-repeat;background-size:cover;width:100%;padding-top:100%;position:relative}.card-content[data-v-83b62010]{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;top:0;left:0;bottom:0;right:0}.headers[data-v-83b62010]{margin-bottom:15px}.heading[data-v-83b62010]{font-size:2.5em}.heading-two[data-v-83b62010]{text-transform:uppercase;font-weight:700;font-size:1.3em}.heading-three[data-v-83b62010]{text-transform:uppercase;font-weight:1000;font-size:3.3em}.link-button[data-v-83b62010]{padding:.4em 1.7em}',""]),t.exports=e},345:function(t,e,o){"use strict";var n=o(316);o.n(n).a},346:function(t,e,o){var n=o(18),d=o(53),r=o(54),c=o(55),l=o(56),f=o(57);e=n(!1);var h=d(r),m=d(c),v=d(l),w=d(f);e.push([t.i,"body[data-v-677757f9],html[data-v-677757f9]{-webkit-overflow-scrolling:touch;overflow-scrolling:touch;scroll-behavior:auto}body[data-v-677757f9]{background:#000;color:#fff;text-align:center;margin:0;font-family:Montserrat,sans-serif;font-size:16px;overflow-x:hidden;overflow-y:auto}.testimonial-bg[data-v-677757f9]{background:#1d19ab url("+h+")}@media screen and (max-width:768px){.testimonial-bg[data-v-677757f9]{background-image:url("+m+")}}.diamond-bg[data-v-677757f9]{background:#1d19ab url("+v+")}@media screen and (max-width:768px){.diamond-bg[data-v-677757f9]{background-image:url("+w+')}}.close[data-v-677757f9]{cursor:pointer;position:absolute;right:32px;top:32px;width:32px;height:32px;opacity:.5}.close[data-v-677757f9]:hover{opacity:1}.close[data-v-677757f9]:after,.close[data-v-677757f9]:before{position:absolute;left:15px;content:" ";height:33px;width:2px;background-color:#fff}.close[data-v-677757f9]:before{transform:rotate(45deg)}.close[data-v-677757f9]:after{transform:rotate(-45deg)}.uppercase[data-v-677757f9]{text-transform:uppercase}.background[data-v-677757f9]{background-size:cover}.heading[data-v-677757f9]{font-size:2.9em;line-height:1em;font-weight:900;margin:0;text-transform:uppercase;white-space:pre-line}@media (max-width:850px){.heading[data-v-677757f9]{font-size:2em}}.subheading[data-v-677757f9]{font-style:italic;font-weight:400;line-height:1.5em;font-size:1.17em;margin:1.5em 0;white-space:pre-line}@media screen and (max-width:850px){.subheading[data-v-677757f9]{font-size:.8em;line-height:1.4em}}@media screen and (max-width:850px){.can-play-webm .slide.box-slide .heading[data-v-677757f9],.can-play-webm .slide.diamond-bg .heading[data-v-677757f9]{padding-top:40px}.can-play-webm .slide.box-slide .col.thin[data-v-677757f9],.can-play-webm .slide.diamond-bg .col.thin[data-v-677757f9]{height:100vh;z-index:-1}.can-play-webm .slide.box-slide .col.thin video[data-v-677757f9],.can-play-webm .slide.diamond-bg .col.thin video[data-v-677757f9]{-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;height:100vh;max-height:100vh}}.col[data-v-677757f9]{vertical-align:middle;display:table-cell;width:50%;position:relative}@media screen and (max-width:850px){.col.wide[data-v-677757f9]{margin:50vh 0 0}.col.thin[data-v-677757f9]{position:absolute;top:0;left:0;height:50vh}}@media screen and (max-width:850px){.col.thin[data-v-677757f9],.col.wide[data-v-677757f9]{display:block;width:100%;min-width:auto}}.two-thirds .wide[data-v-677757f9]{width:55%}.two-thirds .thin[data-v-677757f9]{width:45%}@media screen and (max-width:850px){.two-thirds .thin[data-v-677757f9],.two-thirds .wide[data-v-677757f9]{width:100%}}b[data-v-677757f9]{font-style:italic}.col .video-to-background video[data-v-677757f9]{max-height:100%;max-width:100%;position:absolute!important;left:-5%;top:0;bottom:0;z-index:-1;width:100%;height:100%}@media screen and (max-width:850px){.col .video-to-background video[data-v-677757f9]{left:0}}.col .video-to-background video.head[data-v-677757f9]{max-height:110%;max-width:110%;width:110%;height:110%;left:-10%;top:-5%}@media (max-width:850px){.col .video-to-background video.head[data-v-677757f9]{max-height:100%;max-width:100%;width:100%;height:100%;left:0;top:0}}.wrapper[data-v-677757f9]{position:relative}.visible .fade[data-v-677757f9]{opacity:1}.fade-enter-active[data-v-677757f9],.fade-leave-active[data-v-677757f9]{transition:opacity .3s}.fade[data-v-677757f9],.fade-enter[data-v-677757f9],.fade-leave-to[data-v-677757f9]{opacity:0}.fade[data-v-677757f9]{transition:opacity .3s linear}.fade.delay[data-v-677757f9]{transition-delay:.45s}.frame .borders[data-v-677757f9]{border:10px solid rgba(0,0,0,.2);border-radius:12px;box-sizing:border-box}.frame .testimonial-bg[data-v-677757f9]{display:table;height:100%;min-width:100%;background-size:cover;background-position:100% 0;background-repeat:no-repeat}.frame .gradient[data-v-677757f9]{background:rgba(0,0,0,.12);padding:10px 30px;height:100%;box-sizing:border-box;display:table-cell;vertical-align:middle}.frame .border[data-v-677757f9]{border-radius:100%;border:10px solid rgba(0,0,0,.2);display:inline-block;overflow:hidden}.frame img[data-v-677757f9]{display:block;margin:0 auto;width:194px;height:194px;background:#fff}.frame q[data-v-677757f9]{font-size:2.65em;line-height:1.02em;font-weight:800;text-transform:uppercase;margin:15px 0;display:block}.frame .subheading[data-v-677757f9]{line-height:1.5em}.frame .person[data-v-677757f9]{font-weight:900;font-size:1.1em;text-transform:uppercase;margin:2em 0;letter-spacing:1px}.purple-box[data-v-677757f9]{width:165px;height:10px;background:#ff00eb;margin:0 auto}.no-margin[data-v-677757f9]{margin:0}.width-100[data-v-677757f9]{width:100%}.video-fallback .col[data-v-677757f9],.video-fallback .slide .content[data-v-677757f9]{position:static}.video-fallback .fallback-no-bg[data-v-677757f9]{background:none}@media (max-width:850px){.video-fallback .fallback-no-bg .col.wide[data-v-677757f9]{margin-top:55vh}.video-fallback .fallback-no-bg .col.wide .video-to-background video[data-v-677757f9]{left:0;-o-object-fit:contain;object-fit:contain}.video-fallback .fallback-no-bg .col.wide video[data-v-677757f9]{max-height:100%}}.contacts-modal[data-v-677757f9]{display:flex;flex-direction:column;align-items:center;text-align:center}.contacts-modal button[data-v-677757f9]{align-self:flex-end}.disable-scroll[data-v-677757f9]{overflow:hidden}.v--modal-overlay[data-v-677757f9]{background:rgba(0,0,0,.5)}@media (max-width:850px){.v--modal[data-v-677757f9]{top:0!important;left:0!important;width:100%!important;height:100%!important}}.v--modal[data-v-677757f9]{background-color:transparent}.text[data-v-677757f9]{white-space:pre-line;text-align:left}.text.main[data-v-677757f9]{font-size:1.5em;line-height:2em;font-weight:500}.text.name[data-v-677757f9]{font-size:1.75em;font-weight:900;color:#294dd2;text-transform:uppercase}.text.quote[data-v-677757f9]{line-height:2em;max-width:390px}.text.person[data-v-677757f9]{font-size:1em;font-weight:900;text-transform:uppercase;line-height:1.5em}.text.description[data-v-677757f9]{font-size:1.25em;line-height:1.5em;font-style:italic}.text.large[data-v-677757f9]{font-size:3.5em}.text.small[data-v-677757f9]{font-size:1em}.light-mode .wrapper[data-v-677757f9]:not(.main-page){background-color:#fff}.light-mode .wrapper:not(.main-page) .case-study-section[data-v-677757f9]{border-top:none}.light-mode .wrapper:not(.main-page) .case-study-section .content .container[data-v-677757f9]{border-bottom:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg[data-v-677757f9]:not(.case-study-section){background:none;border-top:8px solid #294dd2}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .gradient[data-v-677757f9]{background:none}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-677757f9],.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .text[data-v-677757f9]{color:#294dd2!important}.light-mode .wrapper:not(.main-page) .testimonial-bg:not(.case-study-section) .button[data-v-677757f9]{border-color:#294dd2}.light-mode .wrapper:not(.main-page) header[data-v-677757f9]{background-color:#fff}.light-mode .wrapper:not(.main-page) .company-name[data-v-677757f9],.light-mode .wrapper:not(.main-page) .contact .connect-link[data-v-677757f9],.light-mode .wrapper:not(.main-page) .contact .contact-link[data-v-677757f9],.light-mode .wrapper:not(.main-page) .toggle-text[data-v-677757f9],.light-mode .wrapper:not(.main-page) header a[data-v-677757f9]{color:#000}.light-mode .wrapper:not(.main-page) .testimonial-bg.slide[data-v-677757f9]{background-image:none;background-color:#fff;color:#294dd2}.light-mode .wrapper:not(.main-page) .slide[data-v-677757f9]:not(.footer):not(.last-slide):not(.two-thirds){background-color:#fff}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) p[data-v-677757f9]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text[data-v-677757f9]{color:#000}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.heading[data-v-677757f9],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.name[data-v-677757f9],.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds) .text.subtitle[data-v-677757f9]{color:#294dd2}.light-mode .wrapper:not(.main-page) .slide:not(.footer):not(.last-slide):not(.two-thirds).borderless .container[data-v-677757f9]{border:none}.light-mode .wrapper:not(.main-page) section.footer[data-v-677757f9]{background-color:#fff}.light-mode .wrapper:not(.main-page) section.footer .subtitle[data-v-677757f9]{color:#294dd2}.light-mode .wrapper:not(.main-page) section.footer footer .contacts[data-v-677757f9],.light-mode .wrapper:not(.main-page) section.footer footer .contacts a[data-v-677757f9]{color:#000}.light-mode .wrapper:not(.main-page) .head-slide .container[data-v-677757f9]{padding-bottom:48px}.light-mode .wrapper:not(.main-page) .purple-box[data-v-677757f9]{background-color:#294dd2}.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg[data-v-677757f9],.light-mode .wrapper:not(.main-page) .testimonials-wrapper .testimonial-bg .person[data-v-677757f9]{color:#fff!important}.link-button[data-v-677757f9]{font-weight:900;font-size:1.1em;text-transform:uppercase;letter-spacing:1px;border:1px solid #fff;background:transparent;color:#fff;padding:.5em 2em;text-decoration:none;transition:all 1.25s cubic-bezier(.19,1,.22,1)}.link-button[data-v-677757f9]:hover{box-shadow:0 0 10px #fff}.link-button[data-v-677757f9]:active{box-shadow:inset 0 0 10px #fff}.logo[data-v-677757f9]{width:95px;height:95px}@media screen and (max-height:380px){.logo[data-v-677757f9]{width:45px;height:45px}}@media (max-height:590px){.logo[data-v-677757f9]{width:65px;height:65px}}button.cta-button[data-v-677757f9]{text-transform:uppercase;background:#294dd2;color:#fff;font-family:Montserrat,sans-serif;font-size:2em;font-weight:1000;border-radius:9px;border:none;outline:none;cursor:pointer;padding:.27em 1.2em .25em}.cta[data-v-677757f9]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:9em;margin-bottom:10em;width:50%;max-width:800px}@media only screen and (max-width:850px){.cta[data-v-677757f9]{width:90%}}@media only screen and (min-width:768px){.cta[data-v-677757f9]{width:80%}}button.cta-button[data-v-677757f9]{margin-top:1.7em}.cta-logo[data-v-677757f9]{width:60px;height:60px;margin-bottom:2.8em}.cta-heading[data-v-677757f9]{font-size:2.7em;line-height:1em;font-weight:900;margin:0;text-transform:uppercase;white-space:pre-line}',""]),t.exports=e}}]);