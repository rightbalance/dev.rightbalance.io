import{u as k}from"./assets.qqCt91BC.js";import{f as p,o as s,c as n,F as g,q as v,a as i,_ as h,l as x,m as T,t as _,h as f,j as w,C as y,D as I,i as b,n as $,b as z,w as B,d as N}from"./entry.hWul4E9C.js";import{C as D,u as L}from"./ConversionEvent.0mttUPlo.js";import{_ as E}from"./nuxt-link.HRWuKPUw.js";const S={class:"badges-container"},G=["href"],H=["src"],O=p({__name:"badges",setup(o){const a=[{id:"top50",image:k("testimonials/png/top50.png"),href:"https://losangelesbootcamps.com/top-startups-to-watch-in-los-angeles-2020/"},{id:"goodfirms",image:k("testimonials/png/goodfirms.png"),href:"https://www.goodfirms.co/company/right-balance/interview"}];return(t,u)=>(s(),n("div",S,[(s(),n(g,null,v(a,(e,r)=>i("a",{key:r,class:"badge-item",href:e.href,target:"_blank"},[i("img",{class:"badge-image",src:e.image},null,8,H)],8,G)),64))]))}}),rt=h(O,[["__scopeId","data-v-0a186ac1"]]),V={class:"heading"},F={class:"explainer"},U=p({__name:"get-in-touch",setup(o){const{conversionEvent:a,buttonClick:t}=L(),{t:u}=x(),e=o,r=T(()=>e.ctaHeaderText||u("have_questions"));function c(){a(D.GET_IN_TOUCH_CLICKED,e.placement),t("GetInTouch.showFormClicked",e.placement),window.open(e.ctaHref,"_blank")}return(m,C)=>(s(),n("div",null,[i("h2",null,_(m.$t("get_in_touch")),1),i("div",V,_(f(r)),1),i("div",F,_(e.explainerText||m.$t("here_to_help")),1),i("button",{class:"cta-button",onClick:c},_(e.ctaButtonText||m.$t("lets_chat")),1)]))}}),dt=h(U,[["__scopeId","data-v-e3b781ab"]]),q={name:"ChevronUpIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},A=["aria-hidden","aria-label"],M=["fill","width","height"],Z={d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"},j={key:0};function K(o,a,t,u,e,r){return s(),n("span",y(o.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-up-icon",role:"img",onClick:a[0]||(a[0]=c=>o.$emit("click",c))}),[(s(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[i("path",Z,[t.title?(s(),n("title",j,_(t.title),1)):w("",!0)])],8,M))],16,A)}const P=h(q,[["render",K]]),J={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Q=["aria-hidden","aria-label"],R=["fill","width","height"],W={d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"},X={key:0};function Y(o,a,t,u,e,r){return s(),n("span",y(o.$attrs,{"aria-hidden":t.title?null:!0,"aria-label":t.title,class:"material-design-icon chevron-down-icon",role:"img",onClick:a[0]||(a[0]=c=>o.$emit("click",c))}),[(s(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[i("path",W,[t.title?(s(),n("title",X,_(t.title),1)):w("",!0)])],8,R))],16,Q)}const tt=h(J,[["render",Y]]),et={class:"tocTitle"},st={class:"arrow"},nt=["onClick"],it=p({__name:"table-of-contents",props:{pages:{}},emits:["toggle"],setup(o,{emit:a}){const{buttonClick:t}=L(),u=o,e=I({active:null});function r(c){t("TableOfContents.toggleClicked",c),e.active==c?e.active=null:e.active=c}return(c,m)=>{const C=E;return s(),n("div",null,[(s(!0),n(g,null,v(u.pages,l=>(s(),n("div",{key:l._id},[i("div",et,[i("div",st,[f(e).active==l._id?(s(),b(P,{key:0,size:20,onClick:d=>r(l._id)},null,8,["onClick"])):(s(),b(tt,{key:1,size:20,onClick:d=>r(l._id)},null,8,["onClick"]))]),i("div",null,[i("span",{class:"toc1",onClick:d=>r(l._id)},_(l.short_title),9,nt)])]),i("ul",{class:$(["tocList",{show:f(e).active==l._id,hide:f(e).active!=l._id}])},[(s(!0),n(g,null,v(l.body.toc.links||[],d=>(s(),n("li",{key:d.id,class:$({toc2:d.depth===2,toc3:d.depth===3})},[z(C,{to:`${l._path}#${d.id}`},{default:B(()=>[N(_(d.text),1)]),_:2},1032,["to"])],2))),128))],2)]))),128))])}}}),_t=h(it,[["__scopeId","data-v-190738b7"]]);export{rt as B,dt as G,_t as T};
