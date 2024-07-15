import{_ as H}from"./nuxt-link.Hg2_N-b2.js";import{_ as V}from"./logo.WVeLc6qh.js";import{_ as g,o as l,c as d,a as t,t as i,j as b,C as v,f as k,d as _,b as s,p as w,e as y,u as B,H as N,y as E,i as T,w as r,T as j,A as D,B as F,aq as P,v as U,h as Z,ar as G}from"./entry.snAHbMzZ.js";import{a as M,C as S,u as A}from"./constants.zTurJdlC.js";const K={name:"GithubIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},O=["aria-hidden","aria-label"],q=["fill","width","height"],R={d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"},J={key:0};function Q(n,a,e,u,f,m){return l(),d("span",v(n.$attrs,{"aria-hidden":e.title?null:!0,"aria-label":e.title,class:"material-design-icon github-icon",role:"img",onClick:a[0]||(a[0]=o=>n.$emit("click",o))}),[(l(),d("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[t("path",R,[e.title?(l(),d("title",J,i(e.title),1)):b("",!0)])],8,q))],16,O)}const W=g(K,[["render",Q]]),X={name:"LinkedinIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Y=["aria-hidden","aria-label"],x=["fill","width","height"],ee={d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"},te={key:0};function ne(n,a,e,u,f,m){return l(),d("span",v(n.$attrs,{"aria-hidden":e.title?null:!0,"aria-label":e.title,class:"material-design-icon linkedin-icon",role:"img",onClick:a[0]||(a[0]=o=>n.$emit("click",o))}),[(l(),d("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[t("path",ee,[e.title?(l(),d("title",te,i(e.title),1)):b("",!0)])],8,x))],16,Y)}const ae=g(X,[["render",ne]]),oe=n=>(w("data-v-447b6f32"),n=n(),y(),n),ie={class:"contacts"},se={class:"text-link company",href:"/",to:"/"},le=oe(()=>t("span",{class:"trademark-badge"},"®",-1)),ce=["href"],re=["href"],de={class:"social-links"},_e=["href"],ue=["href"],he=k({__name:"footer",setup(n){const a=n;return(e,u)=>(l(),d("footer",null,[t("div",ie,[t("a",se,[_(i(e.$t("companyName"))+" ",1),le]),t("a",{class:"text-link",href:"mailto:contact@rightbalance.io",target:"_blank"}," contact@rightbalance.io ",8,ce),t("a",{href:`tel:${a.phoneNumber||e.$t("phoneNumber")}`,class:"text-link"},i(a.phoneNumber||e.$t("phoneNumber")),9,re),t("div",de,[t("a",{class:"social-link",href:a.linkedinLink||e.$t("linkedinLink"),rel:"nofollow",target:"_blank"},[s(ae,{size:24,title:e.$t("rightbalance_on_linkedin")},null,8,["title"])],8,_e),t("a",{class:"social-link",href:a.githubLink||e.$t("githubLink"),rel:"nofollow",target:"_blank"},[s(W,{size:24,title:e.$t("rightbalance_on_github")},null,8,["title"])],8,ue)])])]))}}),I=g(he,[["__scopeId","data-v-447b6f32"]]),me={name:"MenuIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},fe=["aria-hidden","aria-label"],ge=["fill","width","height"],Ce={d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"},pe={key:0};function ke(n,a,e,u,f,m){return l(),d("span",v(n.$attrs,{"aria-hidden":e.title?null:!0,"aria-label":e.title,class:"material-design-icon menu-icon",role:"img",onClick:a[0]||(a[0]=o=>n.$emit("click",o))}),[(l(),d("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[t("path",Ce,[e.title?(l(),d("title",pe,i(e.title),1)):b("",!0)])],8,ge))],16,fe)}const $e=g(me,[["render",ke]]),be=n=>(w("data-v-46cb4fd3"),n=n(),y(),n),ve={class:"navigation-container"},we={class:"navigation-logo"},ye=be(()=>t("img",{src:V,alt:"right balance logo"},null,-1)),Ne=["href"],He=["href"],$="disable-scroll",Ve=k({__name:"mobile-menu",props:{trigger:{type:Boolean,default:!1},placement:{default:"header"},modalName:{default:"navigation-modal"},open:{type:Boolean}},emits:["close"],setup(n,{emit:a}){const{conversionEvent:e,buttonClick:u}=A(),f=B(),m=a,o=n;N(()=>o.open,c=>{c?document.body.classList.add($):document.body.classList.remove($)}),E(()=>{document.body.classList.remove($)});function C(){e(M.LETS_CHAT_CLICKED,o.modalName),window.open(S.contactFormUrl,"_blank")}function h(){u("NavigationModal.closeClicked",o.modalName),m("close")}return N(()=>f.fullPath,()=>{m("close")},{deep:!0,immediate:!0}),(c,De)=>{const p=H;return l(),T(j,{name:"slide-in"},{default:r(()=>[D(t("div",ve,[t("button",{class:"close",onClick:P(h,["prevent"])}),t("div",we,[s(p,{class:"connect-link",to:"/"},{default:r(()=>[ye]),_:1})]),s(p,{class:"navigation-header navigation-header-first",to:"/"},{default:r(()=>[_(i(c.$t("about")),1)]),_:1}),s(p,{class:"navigation-header",to:"/case-studies"},{default:r(()=>[_(i(c.$t("case_studies")),1)]),_:1}),s(p,{class:"navigation-header",to:"/team"},{default:r(()=>[_(i(c.$t("header.team")),1)]),_:1}),s(p,{class:"navigation-header",to:"/join"},{default:r(()=>[_(i(c.$t("careers")),1)]),_:1}),s(p,{class:"navigation-header",to:"/learn"},{default:r(()=>[_(i(c.$t("learn")),1)]),_:1}),t("button",{class:"cta-button",onClick:C},i(c.$t("lets_chat")),1),t("a",{class:"footer-link footer-link-first",href:"mailto:contact@rightbalance.io",target:"_blank"}," contact@rightbalance.io ",8,Ne),t("a",{href:`tel:${c.$t("phoneNumber")}`,class:"footer-link"},i(c.$t("phoneNumber")),9,He)],512),[[F,c.open]])]),_:1})}}}),Me=g(Ve,[["__scopeId","data-v-46cb4fd3"]]),z=n=>(w("data-v-3621d9fa"),n=n(),y(),n),Se={class:"container"},Ae={class:"company-name"},Ie=z(()=>t("div",{class:"logo"},[t("img",{src:V,alt:"right balance logo"})],-1)),ze=z(()=>t("span",{class:"trademark-badge"},"®",-1)),Le={class:"right-panel"},Be={class:"menu"},Ee=k({__name:"header",setup(n){const{conversionEvent:a,buttonClick:e}=A(),u=U(!1);function f(){a(M.CONTACT_CLICKED,"header"),e("Header.contactClicked","header"),window.open(S.contactFormUrl,"_blank")}function m(){e("Header.hamburgerClicked","header"),u.value=!0}return(o,C)=>{const h=H;return l(),d("div",null,[t("header",null,[t("div",Se,[t("div",Ae,[s(h,{to:"/"},{default:r(()=>[Ie,t("h1",null,[_(i(o.$t("companyName"))+" ",1),ze])]),_:1})]),s($e,{class:"hamburger",size:50,onClick:m}),t("div",Le,[t("div",Be,[s(h,{class:"connect-link",to:"/case-studies"},{default:r(()=>[_(i(o.$t("header.caseStudies")),1)]),_:1}),s(h,{class:"connect-link",to:"/team"},{default:r(()=>[_(i(o.$t("header.team")),1)]),_:1}),s(h,{class:"connect-link",to:"/join"},{default:r(()=>[_(i(o.$t("header.join")),1)]),_:1}),s(h,{class:"connect-link",to:"/learn"},{default:r(()=>[_(i(o.$t("header.learn")),1)]),_:1}),t("button",{class:"contact-link cta-button",onClick:f},i(o.$t("header.contact")),1)])])])]),s(Me,{open:Z(u),onClose:C[0]||(C[0]=c=>u.value=!1)},null,8,["open"])])}}}),L=g(Ee,[["__scopeId","data-v-3621d9fa"]]),Te=k({components:{Header:L,Footer:I}});function je(n,a,e,u,f,m){const o=L,C=G,h=I;return l(),d("div",null,[s(o),s(C),s(h)])}const Ge=g(Te,[["render",je]]);export{Ge as default};
