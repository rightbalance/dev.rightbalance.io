import{q as f,w as m,e as v,s as g,j as d,a as l,u as h}from"./query.UdrakvHh.js";import{q as _,Q as p,R as y,f as C,S as w,k as P,U as $,H as N,J as r}from"./entry.veHBkiLF.js";import{u as j}from"./preview.gEP0MU4X.js";import{_ as T}from"./nuxt-link.dN4EHUar.js";const D=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.AkRHkswf.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),b=E;export{b as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.AkRHkswf.js","./entry.veHBkiLF.js","./query.UdrakvHh.js","./preview.gEP0MU4X.js","./index.1dSrIji7.js","./_commonjsHelpers.5-cIlDoe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
