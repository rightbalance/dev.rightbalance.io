import{C as _,a as i,u as p}from"./constants.g2falMmO.js";import{_ as d}from"./logo.WVeLc6qh.js";import{f as m,o,c as s,F as u,a as e,t as c,j as h,p as C,e as f,_ as b}from"./entry.Gng6BZPp.js";const k=a=>(C("data-v-8a1b5ba1"),a=a(),f(),a),v={class:"cta"},g=k(()=>e("img",{src:d,alt:"Right Balance logo",class:"cta-logo"},null,-1)),I={class:"cta-heading"},w=m({__name:"cta",props:{header:{default:"solutions_cta_header"},text:{default:"lets_chat"},short:{type:Boolean,default:!1},url:{default:_.contactFormUrl},placement:{default:"cta"}},setup(a){const{conversionEvent:n,buttonClick:l}=p(),t=a;function r(){n(i.GET_IN_TOUCH_CLICKED,t.placement),l("Cta.showFormClicked",t.placement),window.open(t.url,"_blank")}return(x,B)=>(o(),s("div",v,[t.short?h("",!0):(o(),s(u,{key:0},[g,e("div",I,c(t.header),1)],64)),e("button",{class:"cta-button",onClick:r},c(t.text),1)]))}}),S=b(w,[["__scopeId","data-v-8a1b5ba1"]]);export{S as C};
