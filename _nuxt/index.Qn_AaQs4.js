import{f as S,l as q,g as _,o as r,c as s,a as e,t as a,F as g,q as m,h as i,b as h,p as x,e as B,k as H,_ as U}from"./entry.wbpqsj7B.js";import{u as V}from"./vue.f36acd1f.9wU9NJ7k.js";import{u as C,q as v}from"./query.aM5lsxhy.js";import{C as F}from"./cta.HR3lG32Q.js";import{C as f}from"./content-card.A8hSSkZe.js";import{u as J}from"./content-page.TGP0-jX0.js";import{a as L,C as P,u as T}from"./constants.dTdJOgb4.js";import{u as k}from"./assets.D8C8SIFZ.js";import"./preview.ZG8Y3lNR.js";import"./logo.WVeLc6qh.js";import"./icons.vue.gwmRrBw0.js";import"./_commonjsHelpers.5-cIlDoe.js";const b=d=>(x("data-v-6852b59c"),d=d(),B(),d),G={class:"center-container"},K={class:"header-common header-join"},O={class:"header-heading"},R=b(()=>e("hr",null,null,-1)),z={class:"center-container top-cta"},M={class:"grid-container"},Q={class:"grid center-container"},W={class:"center-container"},X={class:"header-common header-opportunities"},Y={class:"header-heading"},Z=b(()=>e("hr",null,null,-1)),ee={class:"grid-container"},te={class:"grid center-container"},oe={class:"center-container"},c="join",ne=S({__name:"index",async setup(d){let n,l;const p=P.applyUrl,{getContentHead:w,activeContentPages:j}=J(),{conversionEvent:y,buttonClick:$}=T(),{t:I}=q(),E=H();V(w("Join",I("opportunities_seo_description")));const{data:D}=([n,l]=_(async()=>C("join",async()=>await v("join").find())),n=await n,l(),n),{data:A}=([n,l]=_(async()=>C("opportunities",async()=>{const o=await v("opportunities").find();return j(o,E.public.ENV)})),n=await n,l(),n);function N(){y(L.GET_IN_TOUCH_CLICKED,`${c}-top`),$("Join.topCtaClicked",`${c}-top`),window.open(p,"_blank")}return(o,ae)=>(r(),s("div",null,[e("div",null,[e("div",G,[e("div",K,[e("h2",null,a(o.$t("join.header1")),1),e("h2",null,a(o.$t("join.header2")),1),e("h2",null,a(o.$t("join.header3")),1),e("div",O,a(o.$t("join.explainer")),1),R])]),e("div",z,[e("button",{class:"cta-button",onClick:N},a(o.$t("join.cta.text")),1)]),e("div",M,[e("div",Q,[(r(!0),s(g,null,m(i(D),(t,u)=>(r(),s("div",{key:u,class:"grid-card"},[h(f,{"background-image-url":i(k)("backgrounds/background-dark-3-purple.png"),"header-one":t.header_one,"header-two":t.header_two,"header-three":t.header_three,icon:t.icon,"image-url":t.image_url,placement:c,"show-cta":!1},null,8,["background-image-url","header-one","header-two","header-three","icon","image-url"])]))),128))])]),e("div",W,[e("div",X,[e("div",Y,a(o.$t("opportunities_open")),1),Z])]),e("div",ee,[e("div",te,[(r(!0),s(g,null,m(i(A),(t,u)=>(r(),s("div",{key:u,class:"grid-card"},[h(f,{"background-image-url":i(k)("backgrounds/background-tile-green.png"),cta:t.cta,"header-one":t.header_one,"header-two":t.header_two,"header-three":t.header_three,icon:t.icon,icons:t.icons,"icon-height":40,"icon-width":40,"image-url":t.image_url,placement:c,to:t._path},null,8,["background-image-url","cta","header-one","header-two","header-three","icon","icons","image-url","to"])]))),128))])]),e("div",oe,[h(F,{placement:c,url:i(p),text:o.$t("join.cta.text"),header:o.$t("join.cta.header")},null,8,["url","text","header"])])])]))}}),Ce=U(ne,[["__scopeId","data-v-6852b59c"]]);export{Ce as default};
