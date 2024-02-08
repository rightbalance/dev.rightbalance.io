import{_ as T}from"./nuxt-img.NaULXgqf.js";import{f as C,o as e,c as n,F as g,q as p,b as v,_ as f,l as L,m as I,a as r,t as u,h as B,j as k,C as x,u as z,D as N,i as $,n as b,w as D,d as H}from"./entry.ThQEDtGV.js";import{C as E,a as S,u as y}from"./constants.MLbnjCi0.js";import{_ as F}from"./nuxt-link.zDY1E8i4.js";const G={class:"badges-container"},O=["href"],U={key:1,class:"badge-item"},V=C({__name:"badges",setup(a){const c=[{id:"top50",image:"top50.png"},{id:"goodfirms",image:"goodfirms.png",href:"https://www.goodfirms.co/company/right-balance"}];return(t,h)=>{const i=T;return e(),n("div",G,[(e(),n(g,null,p(c,(s,o)=>(e(),n(g,{key:o},[s.href?(e(),n("a",{key:0,class:"badge-item",href:s.href,target:"_blank"},[v(i,{src:`testimonials/png/${s.image}`,alt:`${s.image} logo`},null,8,["src","alt"])],8,O)):(e(),n("div",U,[v(i,{src:`testimonials/png/${s.image}`,alt:`${s.image} logo`},null,8,["src","alt"])]))],64))),64))])}}}),ht=f(V,[["__scopeId","data-v-81233952"]]),q={class:"heading"},A={key:0,class:"explainer"},M=C({__name:"get-in-touch",props:{ctaHeaderText:{default:""},placement:{default:"get-in-touch"},ctaButtonText:{default:""},explainerText:{default:""},ctaHref:{default:E.contactFormUrl}},setup(a){const{conversionEvent:c,buttonClick:t}=y(),{t:h}=L(),i=a,s=I(()=>i.ctaHeaderText||h("have_questions"));function o(){c(S.GET_IN_TOUCH_CLICKED,i.placement),t("GetInTouch.showFormClicked",i.placement),window.open(i.ctaHref,"_blank")}return(m,d)=>(e(),n("div",null,[r("h2",null,u(m.$t("get_in_touch")),1),r("div",q,u(B(s)),1),i.explainerText?(e(),n("div",A,u(i.explainerText),1)):k("",!0),r("button",{class:"cta-button",onClick:o},u(i.ctaButtonText||m.$t("lets_chat")),1)]))}}),mt=f(M,[["__scopeId","data-v-91382d72"]]),Z={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},j=["aria-hidden","aria-label"],K=["fill","width","height"],P={d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"},R={key:0};function J(a,c,t,h,i,s){return e(),n("span",x(a.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-up-icon",role:"img",onClick:c[0]||(c[0]=o=>a.$emit("click",o))}),[(e(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[r("path",P,[t.title?(e(),n("title",R,u(t.title),1)):k("",!0)])],8,K))],16,j)}const Q=f(Z,[["render",J]]),W={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},X=["aria-hidden","aria-label"],Y=["fill","width","height"],tt={d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"},et={key:0};function nt(a,c,t,h,i,s){return e(),n("span",x(a.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-down-icon",role:"img",onClick:c[0]||(c[0]=o=>a.$emit("click",o))}),[(e(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[r("path",tt,[t.title?(e(),n("title",et,u(t.title),1)):k("",!0)])],8,Y))],16,X)}const st=f(W,[["render",nt]]),it={class:"tocTitle"},ot={class:"arrow"},at=["onClick"],ct=C({__name:"table-of-contents",props:{pages:{}},emits:["toggle"],setup(a,{emit:c}){const{buttonClick:t}=y(),h=z(),i=a,s=N({active:null}),o=d=>s.active?s.active==d:d.includes(h.params.id);function m(d){t("TableOfContents.toggleClicked",d),s.active==d?s.active=null:s.active=d}return(d,lt)=>{const w=F;return e(),n("div",null,[(e(!0),n(g,null,p(i.pages,l=>(e(),n("div",{key:l._id},[r("div",it,[r("div",ot,[o(l._id)?(e(),$(Q,{key:0,size:20,onClick:_=>m(l._id)},null,8,["onClick"])):(e(),$(st,{key:1,size:20,onClick:_=>m(l._id)},null,8,["onClick"]))]),r("div",null,[r("span",{class:"toc1",onClick:_=>m(l._id)},u(l.short_title),9,at)])]),r("ul",{class:b(["tocList",{show:o(l._id),hide:!o(l._id)}])},[(e(!0),n(g,null,p(l.body.toc.links||[],_=>(e(),n("li",{key:_.id,class:b({toc2:_.depth===2,toc3:_.depth===3})},[v(w,{to:`${l._path}#${_.id}`},{default:D(()=>[H(u(_.text),1)]),_:2},1032,["to"])],2))),128))],2)]))),128))])}}}),ft=f(ct,[["__scopeId","data-v-8d247cd8"]]);export{ht as B,mt as G,ft as T};
