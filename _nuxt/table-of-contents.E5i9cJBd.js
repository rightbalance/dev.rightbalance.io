import{_ as L}from"./nuxt-img.VS0F5r6j.js";import{f as C,o as e,c as n,F as g,q as p,b as v,_ as f,l as T,m as I,a,t as u,h as B,j as b,C as w,u as z,D as N,i as k,n as $,w as D,d as H}from"./entry._l7mK8e5.js";import{C as E,a as S,u as x}from"./constants.woErCh8Z.js";import{_ as F}from"./nuxt-link.JgQMc1Rp.js";const G={class:"badges-container"},O=["href"],U={key:1,class:"badge-item"},V=C({__name:"badges",setup(c){const l=[{id:"top50",image:"top50.png"},{id:"goodfirms",image:"goodfirms.png",href:"https://www.goodfirms.co/company/right-balance"}];return(t,h)=>{const i=L;return e(),n("div",G,[(e(),n(g,null,p(l,(s,o)=>(e(),n(g,{key:o},[s.href?(e(),n("a",{key:0,class:"badge-item",href:s.href,target:"_blank"},[v(i,{src:`testimonials/png/${s.image}`,alt:`${s.image} logo`},null,8,["src","alt"])],8,O)):(e(),n("div",U,[v(i,{src:`testimonials/png/${s.image}`,alt:`${s.image} logo`},null,8,["src","alt"])]))],64))),64))])}}}),ht=f(V,[["__scopeId","data-v-e29b2aae"]]),q={class:"heading"},A={class:"explainer"},M=C({__name:"get-in-touch",props:{ctaHeaderText:{default:""},placement:{default:"get-in-touch"},ctaButtonText:{default:""},explainerText:{default:""},ctaHref:{default:E.contactFormUrl}},setup(c){const{conversionEvent:l,buttonClick:t}=x(),{t:h}=T(),i=c,s=I(()=>i.ctaHeaderText||h("have_questions"));function o(){l(S.GET_IN_TOUCH_CLICKED,i.placement),t("GetInTouch.showFormClicked",i.placement),window.open(i.ctaHref,"_blank")}return(m,d)=>(e(),n("div",null,[a("h2",null,u(m.$t("get_in_touch")),1),a("div",q,u(B(s)),1),a("div",A,u(i.explainerText||m.$t("here_to_help")),1),a("button",{class:"cta-button",onClick:o},u(i.ctaButtonText||m.$t("lets_chat")),1)]))}}),mt=f(M,[["__scopeId","data-v-ab5bd874"]]),Z={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},j=["aria-hidden","aria-label"],K=["fill","width","height"],P={d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"},R={key:0};function J(c,l,t,h,i,s){return e(),n("span",w(c.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-up-icon",role:"img",onClick:l[0]||(l[0]=o=>c.$emit("click",o))}),[(e(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[a("path",P,[t.title?(e(),n("title",R,u(t.title),1)):b("",!0)])],8,K))],16,j)}const Q=f(Z,[["render",J]]),W={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},X=["aria-hidden","aria-label"],Y=["fill","width","height"],tt={d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"},et={key:0};function nt(c,l,t,h,i,s){return e(),n("span",w(c.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-down-icon",role:"img",onClick:l[0]||(l[0]=o=>c.$emit("click",o))}),[(e(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[a("path",tt,[t.title?(e(),n("title",et,u(t.title),1)):b("",!0)])],8,Y))],16,X)}const st=f(W,[["render",nt]]),it={class:"tocTitle"},ot={class:"arrow"},at=["onClick"],ct=C({__name:"table-of-contents",props:{pages:{}},emits:["toggle"],setup(c,{emit:l}){const{buttonClick:t}=x(),h=z();console.log("route",h);const i=c,s=N({active:null}),o=d=>s.active?s.active==d:d.includes(h.params.id);function m(d){t("TableOfContents.toggleClicked",d),s.active==d?s.active=null:s.active=d}return(d,lt)=>{const y=F;return e(),n("div",null,[(e(!0),n(g,null,p(i.pages,r=>(e(),n("div",{key:r._id},[a("div",it,[a("div",ot,[o(r._id)?(e(),k(Q,{key:0,size:20,onClick:_=>m(r._id)},null,8,["onClick"])):(e(),k(st,{key:1,size:20,onClick:_=>m(r._id)},null,8,["onClick"]))]),a("div",null,[a("span",{class:"toc1",onClick:_=>m(r._id)},u(r.short_title),9,at)])]),a("ul",{class:$(["tocList",{show:o(r._id),hide:!o(r._id)}])},[(e(!0),n(g,null,p(r.body.toc.links||[],_=>(e(),n("li",{key:_.id,class:$({toc2:_.depth===2,toc3:_.depth===3})},[v(y,{to:`${r._path}#${_.id}`},{default:D(()=>[H(u(_.text),1)]),_:2},1032,["to"])],2))),128))],2)]))),128))])}}}),ft=f(ct,[["__scopeId","data-v-1448560f"]]);export{ht as B,mt as G,ft as T};
