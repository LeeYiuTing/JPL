import{c as g,d as u,h as p,b as s,t as h,n as l,i as m,f}from "./index-f9994920.js";const[k,i]=g("progress"),P={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:h,pivotColor:String,trackColor:String,strokeWidth:l,percentage:{type:l,default:0,validator: t=>+t>=0&&+t<=100}};var x=u({name:k,props:P,setup(t){const c=p(()=>t.inactive?void 0:t.color),d=()=>{const{textColor:r,pivotText:e,pivotColor:a,percentage:o}=t,n=e??`${o}%`;if(t.showPivot&&n){const v={color:r,left:`${+o}%`,transform:`translate(-${+o}%,-50%)`,background:a||c.value};return s("span",{style:v,class:i("pivot",{inactive:t.inactive})},[n])}};return()=>{const{trackColor:r,percentage:e,strokeWidth:a}=t,o={background:r,height:m(a)},n={width:`${e}%`,background:c.value};return s("div",{class:i(),style:o},[s("span",{class:i("portion",{inactive:t.inactive}),style:n},null),d()])}}});const C=f(x);export{C as P};
