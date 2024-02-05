import{_ as y}from"./nuxt-link.HRWuKPUw.js";import{_ as u,o,c as a,a as e,t as s,j as C,C as g,f as k,d as h,b as l,p,e as $,w as f,an as H,ao as N}from"./entry.hWul4E9C.js";import{_ as z}from"./logo.WVeLc6qh.js";import{u as A,C as S}from"./ConversionEvent.0mttUPlo.js";import{C as I}from"./constants.d6qE-423.js";const M={name:"GithubIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},L=["aria-hidden","aria-label"],B=["fill","width","height"],E={d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"},j={key:0};function x(n,i,t,_,m,c){return o(),a("span",g(n.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon github-icon",role:"img",onClick:i[0]||(i[0]=r=>n.$emit("click",r))}),[(o(),a("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[e("path",E,[t.title?(o(),a("title",j,s(t.title),1)):C("",!0)])],8,B))],16,L)}const F=u(M,[["render",x]]),T={name:"LinkedinIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Z=["aria-hidden","aria-label"],D=["fill","width","height"],G={d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"},P={key:0};function K(n,i,t,_,m,c){return o(),a("span",g(n.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon linkedin-icon",role:"img",onClick:i[0]||(i[0]=r=>n.$emit("click",r))}),[(o(),a("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[e("path",G,[t.title?(o(),a("title",P,s(t.title),1)):C("",!0)])],8,D))],16,Z)}const O=u(T,[["render",K]]),U=n=>(p("data-v-ebbbfa29"),n=n(),$(),n),q={class:"contacts"},J={class:"text-link company",href:"/",to:"/"},Q=U(()=>e("span",{class:"trademark-badge"},"®",-1)),R=["href"],W=["href"],X={class:"social-links"},Y=["href"],tt=["href"],et=k({__name:"footer",setup(n){const i=n;return(t,_)=>(o(),a("footer",null,[e("div",q,[e("a",J,[h(s(t.$t("companyName"))+" ",1),Q]),e("a",{class:"text-link",href:"mailto:contact@rightbalance.io",target:"_blank"}," contact@rightbalance.io ",8,R),e("a",{href:`tel:${i.phoneNumber||t.$t("phoneNumber")}`,class:"text-link"},s(i.phoneNumber||t.$t("phoneNumber")),9,W),e("div",X,[e("a",{class:"social-link",href:i.linkedinLink||t.$t("linkedinLink"),rel:"nofollow",target:"_blank"},[l(O,{size:24,title:t.$t("rightbalance_on_linkedin")},null,8,["title"])],8,Y),e("a",{class:"social-link",href:i.githubLink||t.$t("githubLink"),rel:"nofollow",target:"_blank"},[l(F,{size:24,title:t.$t("rightbalance_on_github")},null,8,["title"])],8,tt)])])]))}}),b=u(et,[["__scopeId","data-v-ebbbfa29"]]),nt={name:"MenuIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},it=["aria-hidden","aria-label"],ot=["fill","width","height"],at={d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"},st={key:0};function lt(n,i,t,_,m,c){return o(),a("span",g(n.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon menu-icon",role:"img",onClick:i[0]||(i[0]=r=>n.$emit("click",r))}),[(o(),a("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[e("path",at,[t.title?(o(),a("title",st,s(t.title),1)):C("",!0)])],8,ot))],16,it)}const ct=u(nt,[["render",lt]]),v=n=>(p("data-v-87160464"),n=n(),$(),n),rt={class:"container"},dt={class:"company-name"},_t=v(()=>e("div",{class:"logo"},[e("img",{src:z,alt:"right balance logo"})],-1)),ht=v(()=>e("span",{class:"trademark-badge"},"®",-1)),ut={class:"right-panel"},mt={class:"menu"},ft=k({__name:"header",setup(n){const{conversionEvent:i,buttonClick:t}=A();function _(){i(S.CONTACT_CLICKED,"header"),t("Header.contactClicked","header"),window.open(I.contactFormUrl,"_blank")}function m(){t("Header.hamburgerClicked","header")}return(c,r)=>{const d=y;return o(),a("div",null,[e("header",null,[e("div",rt,[e("div",dt,[l(d,{to:"/"},{default:f(()=>[_t,e("h1",null,[h(s(c.$t("companyName"))+" ",1),ht])]),_:1})]),l(ct,{class:"hamburger",size:50,onClick:m}),e("div",ut,[e("div",mt,[l(d,{class:"connect-link",to:"/case-studies"},{default:f(()=>[h(s(c.$t("header.caseStudies")),1)]),_:1}),l(d,{class:"connect-link",to:"/team"},{default:f(()=>[h(s(c.$t("header.team")),1)]),_:1}),l(d,{class:"connect-link",to:"/join"},{default:f(()=>[h(s(c.$t("header.join")),1)]),_:1}),l(d,{class:"connect-link",to:"/learn"},{default:f(()=>[h(s(c.$t("header.learn")),1)]),_:1}),C("",!0),e("a",{class:"contact-link cta-button",onClick:H(_,["prevent"])},s(c.$t("header.contact")),1)])])])])])}}}),V=u(ft,[["__scopeId","data-v-87160464"]]),Ct=k({components:{Header:V,Footer:b}});function gt(n,i,t,_,m,c){const r=V,d=N,w=b;return o(),a("div",null,[l(r),l(d),l(w)])}const Vt=u(Ct,[["render",gt]]);export{Vt as default};
