import{f as r,m as n,Z as c,K as h,k as o,$ as l,o as u,c as d,h as f}from"./entry.gI76ijC1.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(a,s)=>(u(),d("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
