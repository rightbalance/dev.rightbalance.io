import{_ as T}from"./client-only.WVOe__KB.js";import{_ as Y}from"./nuxt-img.I0uBLgG0.js";import{v as n,x as W,f as A,y as Z,E as D,o as r,c as p,A as h,B as I,a as m,b as k,w as q,C as b,F,q as O,ao as N,h as v,j as z,n as M,_ as j,G as ee,i as ae}from"./entry.l4J1a7ks.js";import{u as x}from"./assets.HbAoLFLC.js";const oe=()=>{const y=n();return W(()=>{const l=document.createElement("video");y.value=!!l.canPlayType("video/webm")}),{isIos:["iPhone","iPad"].includes((navigator||{}).platform),canPlayWebm:y}},le={class:"unset"},te=["autoplay","loop"],se={class:"table fallback-image"},ne={class:"cell"},ie=A({__name:"video",props:{name:{default:""},loopPart:{default:""},mobileFallback:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},playOnScroll:{type:Boolean,default:!1}},setup(y){const o=y,l=n(null),t=n(null),u=n(!1),S=n(!1),i=n(!1),f=n([]),$=n([]),B={muted:!0,playsinline:!0,preload:"auto","webkit-playsinline":!0},G=["diamond","head","box","plexus"],_=o.name.replace("-intro",""),R={callback:U,once:!0,intersection:{threshold:.5}},{canPlayWebm:E,isIos:w}=oe(),L=G.includes(_);async function U(e){var c,d;const{playOnScroll:a,loopPart:s}=o;i&&(a&&e||!a)&&(await((c=l.value)==null?void 0:c.play()),s&&await((d=t.value)==null?void 0:d.play()))}function V(e){const a=[];return E&&!w?a.push({src:x(`videos/${e}.webm`),type:"video/webm"}):L&&window.screen.availWidth<=768?a.push({src:x(`videos/mobile/fallback/${e}.mp4`),type:"video/mp4",media:"(max-width: 768px)"}):a.push({src:x(`videos/fallback/${e}.mp4`),type:"video/mp4",media:"(min-width: 768px)"}),a}function H(){t.value&&t.value.pause&&(t.value.pause(),t.value.currentTime=0)}async function J(){if(l.value){try{w?l.value.play():await l.value.play(),i.value=!0}catch(e){i.value=e.name!=="NotAllowedError"}o.playOnScroll&&l.value.pause()}}function K(e){const{y:a}=e.getBoundingClientRect();return a>=-100&&a<=100}async function C(){document.visibilityState==="visible"&&[l,t].forEach(a=>{var s;a.value&&K(a.value)&&((s=a.value)==null||s.play())})}W(async()=>{var a,s,c,d;const{loopPart:e}=o;f.value=V(o.name),e&&($.value=V(o.loopPart)),J(),w&&o.playOnScroll&&i&&((a=l.value)==null||a.play(),(s=l.value)==null||s.pause(),e&&((c=t.value)==null||c.pause(),(d=t.value)==null||d.play())),document.addEventListener("visibilitychange",C,!1)}),Z(()=>{document.removeEventListener("visibilitychange",C)});async function Q(){var e;o.loopPart&&t.value&&(t.value.currentTime=0,await((e=t.value)==null?void 0:e.play()),u.value=!0)}function X(){S.value=!0}return(e,a)=>{const s=T,c=Y,d=D("observe-visibility");return r(),p("div",{class:M({wrap:!0,"fill-space":!v(E),"has-mobile-playback":v(L)})},[h(m("div",le,[k(s,null,{default:q(()=>[h(m("div",null,null,512),[[d,R]])]),_:1}),m("video",b({ref_key:"player",ref:l},B,{autoplay:!o.playOnScroll,loop:o.loop&&!o.loopPart,style:{opacity:u.value?"0":"1"},onEnded:Q,onCanplay:X}),[(r(!0),p(F,null,O(f.value,(g,P)=>(r(),p("source",N(b({key:P},g)),null,16))),128)),k(c,{src:`/video-posters/${v(_)}.png`,alt:`${v(_)} background image`},null,8,["src","alt"])],16,te),e.loopPart?(r(),p("video",b({key:0,ref_key:"playerLoop",ref:t},B,{loop:!0,style:{transform:u.value?"":"scale(0)"},onLoadedmetadata:H}),[(r(!0),p(F,null,O($.value,(g,P)=>(r(),p("source",N(b({key:P},g)),null,16))),128))],16)):z("",!0)],512),[[I,i.value]]),h(m("div",se,[m("div",ne,[k(c,{src:`/video-posters/${v(_)}.png`,alt:`${v(_)} background image`},null,8,["src","alt"])])],512),[[I,!i.value]])],2)}}}),ce=j(ie,[["__scopeId","data-v-b1de7dd5"]]),re={class:"content"},ue={class:"observer"},de=A({__name:"slide",props:{backgroundVideo:Boolean},setup(y){function o(u){l.value=u}let l=n(!1);const t={callback:o,intersection:{threshold:.3}};return(u,S)=>{const i=T,f=D("observe-visibility");return r(),p("section",{class:M({slide:!0,visible:v(l)})},[m("div",re,[ee(u.$slots,"default",{},void 0,!0),k(i,null,{default:q(()=>[h(m("div",ue,null,512),[[f,t]])]),_:1})]),y.backgroundVideo?(r(),ae(ce,{key:0,name:"plexus",class:"bg-video",loop:!0,"mobile-fallback":!0})):z("",!0)],2)}}}),_e=j(de,[["__scopeId","data-v-32a65f92"]]);export{_e as _,ce as a,oe as u};
