import{_ as b}from"./ContentRendererMarkdown.vue.Uk7_ljRZ.js";import B from"./ContentRenderer.amQ3GsOC.js";import{f as I,u as R,g as l,h as t,o as _,c as S,a,t as p,i as N,j as m,b as r,w as f,n as V,p as $,e as D,k as H,_ as T}from"./entry.IcwxKPuh.js";import{u as h,q as C}from"./query.CCI2kVWx.js";import{u as q}from"./vue.f36acd1f.vzZex9Xa.js";import{T as A,G as E,B as G}from"./table-of-contents.uI85T1J7.js";import{C as P}from"./constants.mBh10VhL.js";import{u as j}from"./content-page.vwM0Dmhl.js";import"./index.1dSrIji7.js";import"./preview.j1pDaiSs.js";import"./nuxt-img.fjKEiF__.js";import"./nuxt-link.p_XFLv3F.js";const i=o=>($("data-v-55b4ff68"),o=o(),D(),o),z={key:0,class:V({wrapper:!0})},F={class:"container"},M={class:"toc"},O={class:"toc-header"},U={class:"content nuxt-content"},J={class:"title"},K=i(()=>a("h1",null,"Document not found",-1)),L=i(()=>a("hr",null,null,-1)),Q=i(()=>a("hr",null,null,-1)),W=I({__name:"[id]",async setup(o){let e,n;const g=P.contactFormUrl,{activeContentPages:v,getContentHead:y}=j(),w=H(),d=R(),{data:s}=([e,n]=l(async()=>h(`case-studies-element-${d.params.id}`,async()=>(await C("case-studies",d.params.id).find())[0])),e=await e,n(),e),{data:u}=([e,n]=l(async()=>h("case-studies",async()=>{const c=await C("case-studies").find();return v(c,w.public.ENV)})),e=await e,n(),e);return q(y(s.value.title||"",s.value.description||"")),(c,X)=>{const k=b,x=B;return t(s)?(_(),S("div",z,[a("div",F,[a("div",M,[a("h2",O,p(c.$t("case_studies")),1),t(u)?(_(),N(A,{key:0,pages:t(u)},null,8,["pages"])):m("",!0)]),a("div",U,[a("h1",J,p(t(s).title),1),r(x,{value:t(s)},{empty:f(()=>[K]),default:f(()=>[r(k,{value:t(s)},null,8,["value"])]),_:1},8,["value"]),L,r(E,{class:"get-in-touch","cta-header-text":t(s).cta_header,"cta-href":t(g),placement:`case-study-${t(s)._id}`},null,8,["cta-header-text","cta-href","placement"]),Q,r(G,{class:"badges-on-page"})])])])):m("",!0)}}}),ut=T(W,[["__scopeId","data-v-55b4ff68"]]);export{ut as default};
