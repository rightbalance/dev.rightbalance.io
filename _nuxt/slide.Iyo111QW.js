import{_ as I}from"./client-only.BdhsVbt6.js";import{_ as Y,a as Z,b as ss,c as es,d as as,e as ts,f as os,g as _s,h as ls,i as is,j as ns,k as cs,l as rs,m as vs,n as ps,o as gs,p as ds,q as bs,r as us,s as ms,t as fs,u as ys,v as ks,w as hs,x as ws,y as xs,z as js,A as Ps,B as Ss,C as Bs,D as Vs,E as $s,F as Es,G as Ls,H as Cs,I as Is,J as Os,K as Fs,L as Ds,M as Ts,N as Ws,O as As,P as Ns,Q as zs,R as Ms,S as qs,T as Rs,U as Us,V as Gs,W as Hs,X as Js,Y as Ks,Z as Qs,$ as Xs,a0 as Ys,a1 as Zs,a2 as se,a3 as ee,a4 as ae,a5 as te,a6 as oe,a7 as _e,a8 as le,a9 as ie,aa as ne,ab as ce,ac as re,ad as ve,ae as pe,af as ge,ag as de,ah as be,ai as ue,aj as me,ak as fe,al as ye,am as ke,an as he}from"./world.D5XeSzUY.js";import{_ as we}from"./logo.WVeLc6qh.js";import{v as i,x as O,f as F,y as xe,C as D,o as c,c as p,A as h,B as $,a as n,b as T,w as W,aj as k,F as E,l as L,ak as C,h as m,i as A,n as N,_ as z,D as je,s as Pe}from"./entry.xgmJueWc.js";process;const M=()=>{const g=i();return O(()=>{const o=document.createElement("video");g.value=!!o.canPlayType("video/webm")}),{isIos:["iPhone","iPad"].includes(window.navigator.platform),canPlayWebm:g}},Se={class:"unset"},Be=["autoplay","loop"],Ve=["src"],$e={class:"table"},Ee={class:"cell"},Le=["src"],Ce=F({__name:"video",props:{name:{default:""},loopPart:{default:""},mobileFallback:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},playOnScroll:{type:Boolean,default:!1}},setup(g){const t=g,o=i(null),a=i(null),d=i(!1),b=i(!1),r=i(!1),f=i([]),y=i([]),j={muted:!0,playsinline:!0,preload:"auto","webkit-playsinline":!0},q=["diamond","head","box","plexus"];function u(s){return Object.assign({"/assets/backgrounds/background-case-study-dark-1.png":Y,"/assets/backgrounds/background-dark-3-purple.png":Z,"/assets/backgrounds/background-dark-pink.png":ss,"/assets/backgrounds/background-solutions-dark-1.png":es,"/assets/backgrounds/background-tile-green.png":as,"/assets/clients/BuildOps.png":ts,"/assets/clients/blacktux.png":os,"/assets/clients/commander.png":_s,"/assets/clients/destination-digital.png":ls,"/assets/clients/emotive.png":is,"/assets/clients/factual.png":ns,"/assets/clients/fair.png":cs,"/assets/clients/fama.png":rs,"/assets/clients/fat-tail.png":vs,"/assets/clients/glo.png":ps,"/assets/clients/good.png":gs,"/assets/clients/hello-tech.png":ds,"/assets/clients/humankind.png":bs,"/assets/clients/jove.png":us,"/assets/clients/levels.png":ms,"/assets/clients/luxury-presence.png":fs,"/assets/clients/my-scorecard.png":ys,"/assets/clients/octane.png":ks,"/assets/clients/poplin.png":hs,"/assets/clients/retina.png":ws,"/assets/clients/shuttle.png":xs,"/assets/clients/tala.png":js,"/assets/clients/true-rank.png":Ps,"/assets/clients/tuition.png":Ss,"/assets/clients/tumble.png":Bs,"/assets/clients/turbodebt.png":Vs,"/assets/clients/victorious.png":$s,"/assets/clients/vivrelle.png":Es,"/assets/clients/weeact.png":Ls,"/assets/clients/wondersign.png":Cs,"/assets/diamond-bg.jpg":Is,"/assets/linkedin.svg":Os,"/assets/logo.svg":we,"/assets/mobile/diamond-bg.jpg":Fs,"/assets/mobile/testimonial-background.jpg":Ds,"/assets/testimonial-background.jpg":Ts,"/assets/testimonials/bob.svg":Ws,"/assets/testimonials/eric.svg":As,"/assets/testimonials/goodfirms.svg":Ns,"/assets/testimonials/jpeg/bob.jpg":zs,"/assets/testimonials/jpeg/eric.jpg":Ms,"/assets/testimonials/jpeg/gerry.jpg":qs,"/assets/testimonials/jpeg/murali.jpg":Rs,"/assets/testimonials/jpeg/oleg.jpg":Us,"/assets/testimonials/jpeg/top50.jpg":Gs,"/assets/testimonials/oleg.svg":Hs,"/assets/testimonials/png/goodfirms.png":Js,"/assets/testimonials/png/top50.png":Ks,"/assets/testimonials/top50.svg":Qs,"/assets/video-posters/box.png":Xs,"/assets/video-posters/diamond.png":Ys,"/assets/video-posters/head.png":Zs,"/assets/video-posters/plexus.png":se,"/assets/videos/box-flashing.webm":ee,"/assets/videos/diamond-flashing.webm":ae,"/assets/videos/diamond-intro.webm":te,"/assets/videos/fallback/diamond-flashing.mp4":oe,"/assets/videos/fallback/diamond-intro.mp4":_e,"/assets/videos/fallback/head-flashing.mp4":le,"/assets/videos/fallback/head-intro.mp4":ie,"/assets/videos/fallback/plexus.mp4":ne,"/assets/videos/head-flashing.webm":ce,"/assets/videos/head-intro.webm":re,"/assets/videos/mobile/fallback/diamond-flashing.mp4":ve,"/assets/videos/mobile/fallback/diamond-intro.mp4":pe,"/assets/videos/mobile/fallback/head-flashing.mp4":ge,"/assets/videos/mobile/fallback/head-intro.mp4":de,"/assets/videos/mobile/fallback/landscape/box-flashing.mp4":be,"/assets/videos/mobile/fallback/landscape/diamond-flashing.mp4":ue,"/assets/videos/mobile/fallback/landscape/diamond-intro.mp4":me,"/assets/videos/mobile/fallback/plexus.mp4":fe,"/assets/videos/mobile/plexus.webm":ye,"/assets/videos/plexus.webm":ke,"/assets/world.jpg":he})[`/assets/${s}`]}const w=t.name.replace("-intro",""),R={callback:G,once:!0,intersection:{threshold:.5}},{canPlayWebm:P,isIos:U}=M(),S=q.includes(w);async function G(s){var v,l;const{playOnScroll:e,loopPart:_}=t;r&&(e&&s||!e)&&(await((v=o.value)==null?void 0:v.play()),_&&await((l=a.value)==null?void 0:l.play()))}function B(s){const e=[];return P?e.push({src:u(`videos/${s}.webm`),type:"video/webm"}):S&&window.screen.availWidth<=768?e.push({src:u(`videos/mobile/fallback/${s}.mp4`),type:"video/mp4",media:"(max-width: 768px)"}):e.push({src:u(`videos/fallback/${s}.mp4`),type:"video/mp4",media:"(min-width: 768px)"}),e}function H(){a.value&&a.value.pause&&(a.value.pause(),a.value.currentTime=0)}async function J(){if(o.value){try{await o.value.play(),r.value=!0}catch(s){console.log("err",s),r.value=s.name!=="NotAllowedError"}t.playOnScroll&&o.value.pause()}}function K(s){const{y:e}=s.getBoundingClientRect();return e>=-100&&e<=100}async function V(){document.visibilityState==="visible"&&[o,a].forEach(e=>{var _;e.value&&K(e.value)&&((_=e.value)==null||_.play())})}O(async()=>{var e,_,v,l;const{loopPart:s}=t;f.value=B(t.name),s&&(y.value=B(t.loopPart)),J(),U&&t.playOnScroll&&r&&(await((e=o.value)==null?void 0:e.play()),(_=o.value)==null||_.pause(),s&&(await((v=a.value)==null?void 0:v.play()),await((l=a.value)==null?void 0:l.pause()))),document.addEventListener("visibilitychange",V,!1)}),xe(()=>{document.removeEventListener("visibilitychange",V)});async function Q(){var s;t.loopPart&&a.value&&(a.value.currentTime=0,await((s=a.value)==null?void 0:s.play()),d.value=!0)}function X(){b.value=!0}return(s,e)=>{const _=I,v=D("observe-visibility");return c(),p("div",{class:N({wrap:!0,"fill-space":!m(P),"has-mobile-playback":m(S)})},[h(n("div",Se,[T(_,null,{default:W(()=>[h(n("div",null,null,512),[[v,R]])]),_:1}),n("video",k({ref_key:"player",ref:o},j,{autoplay:!t.playOnScroll,loop:t.loop&&!t.loopPart,style:{opacity:d.value?"0":"1"},onEnded:Q,onCanplay:X}),[(c(!0),p(E,null,L(f.value,(l,x)=>(c(),p("source",C(k({key:x},l)),null,16))),128)),n("img",{src:u(`video-posters/${m(w)}.png`)},null,8,Ve)],16,Be),s.loopPart?(c(),p("video",k({key:0,ref_key:"playerLoop",ref:a},j,{loop:!0,style:{transform:d.value?"":"scale(0)"},onLoadedmetadata:H}),[(c(!0),p(E,null,L(y.value,(l,x)=>(c(),p("source",C(k({key:x},l)),null,16))),128))],16)):A("",!0)],512),[[$,r.value]]),h(n("div",$e,[n("div",Ee,[n("img",{src:u(`video-posters/${m(w)}.png`)},null,8,Le)])],512),[[$,!r.value]])],2)}}}),Ie=z(Ce,[["__scopeId","data-v-848b5664"]]),Oe={class:"content"},Fe={class:"observer"},De=F({__name:"slide",props:{backgroundVideo:Boolean},setup(g){const t=M();function o(b){a.value=b}let a=i(!1);const d={callback:o,once:!t,intersection:{threshold:.3}};return(b,r)=>{const f=I,y=D("observe-visibility");return c(),p("section",{class:N({slide:!0,visible:m(a)})},[n("div",Oe,[je(b.$slots,"default",{},void 0,!0),T(f,null,{default:W(()=>[h(n("div",Fe,null,512),[[y,d]])]),_:1})]),g.backgroundVideo?(c(),Pe(Ie,{key:0,name:"plexus",class:"bg-video",loop:!0,"mobile-fallback":!0})):A("",!0)],2)}}}),ze=z(De,[["__scopeId","data-v-68c9b256"]]);export{Ie as V,ze as _,M as u};
