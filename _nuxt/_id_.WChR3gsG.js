import{_ as k}from"./ContentRendererMarkdown.vue.Y2B8e4sW.js";import B from"./ContentRenderer.2SdcGkKy.js";import{f as I,u as R,g as u,h as e,o as _,c as S,a,t as p,i as $,j as m,b as r,w as h,n as N,p as V,e as D,k as H,_ as T}from"./entry.ThQEDtGV.js";import{u as f,q as C}from"./query.bZSpGa58.js";import{u as q}from"./vue.f36acd1f.1_k7iQWk.js";import{T as A,G as E,B as G}from"./table-of-contents.xjA-d4GR.js";import{C as P}from"./constants.MLbnjCi0.js";import{u as j}from"./content-page.vwM0Dmhl.js";import"./index.1dSrIji7.js";import"./preview.3FeLW8QC.js";import"./nuxt-img.NaULXgqf.js";import"./nuxt-link.zDY1E8i4.js";const i=n=>(V("data-v-bf1ab3d1"),n=n(),D(),n),z={key:0,class:N({wrapper:!0})},F={class:"container"},M={class:"toc"},O={class:"toc-header"},U={class:"content nuxt-content"},J={class:"title"},K=i(()=>a("h1",null,"Document not found",-1)),L=i(()=>a("hr",null,null,-1)),Q=i(()=>a("hr",null,null,-1)),W=I({__name:"[id]",async setup(n){let t,c;const g=P.contactFormUrl,{activeContentPages:v,getContentHead:y}=j(),w=H(),d=R(),{data:s}=([t,c]=u(async()=>f(`case-studies-element-${d.params.id}`,async()=>(await C("case-studies",d.params.id).find())[0])),t=await t,c(),t),{data:l}=([t,c]=u(async()=>f("case-studies",async()=>{const o=await C("case-studies").find();return v(o,w.public.ENV)})),t=await t,c(),t);return q(y(s.value.title||"",s.value.description||"")),(o,X)=>{const x=k,b=B;return e(s)?(_(),S("div",z,[a("div",F,[a("div",M,[a("h2",O,p(o.$t("case_studies")),1),e(l)?(_(),$(A,{key:0,pages:e(l)},null,8,["pages"])):m("",!0)]),a("div",U,[a("h1",J,p(e(s).title),1),r(b,{value:e(s)},{empty:h(()=>[K]),default:h(()=>[r(x,{value:e(s)},null,8,["value"])]),_:1},8,["value"]),L,r(E,{class:"get-in-touch","cta-header-text":e(s).cta_header,"cta-href":e(g),placement:`case-study-${e(s)._id}`,"explainer-text":o.$t("here_to_help")},null,8,["cta-header-text","cta-href","placement","explainer-text"]),Q,r(G,{class:"badges-on-page"})])])])):m("",!0)}}}),le=T(W,[["__scopeId","data-v-bf1ab3d1"]]);export{le as default};
