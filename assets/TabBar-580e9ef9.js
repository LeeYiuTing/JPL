import{c as C,t as P,n as x,l as $,d as A,r as O,u as N,aC as R,b as r,aE as j,aB as w,B as z,f as T,g as E,aF as F,aG as M,aH as D,j as K,h as G,az as H,k as U,aI as Y,I as Z,_ as q,D as J,K as L,F as v,O as h}from "./index-653abdc5.js";const[k,I]=C("tabbar"),Q={route:Boolean,fixed:P,border:P,zIndex:x,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:$(0),safeAreaInsetBottom:{type:Boolean,default:null}},y=Symbol(k);var W=A({name:k,props:Q,emits:["change","update:modelValue"],setup(e, {emit:l,slots:c}){const m=O(),{linkChildren:i}=N(y),d=R(m,I),o=()=>{var t;return(t=e.safeAreaInsetBottom)!=null?t:e.fixed},a=()=>{var t;const{fixed:n,zIndex:s,border:f}=e;return r("div",{ref:m,role:"tablist",style:j(s),class:[I({fixed:n}),{[w]:f,"van-safe-area-bottom":o()}]},[(t=c.default)==null?void 0:t.call(c)])};return i({props:e,setActive:(t, n)=>{z(e.beforeChange,{args:[t],done(){l("update:modelValue",t),l("change",t),n()}})}}),()=>e.fixed&&e.placeholder?d(a):a()}});const X=T(W),[ee,g]=C("tabbar-item"),ae=E({},F,{dot:Boolean,icon:String,name:x,badge:x,badgeProps:Object,iconPrefix:String});var te=A({name:ee,props:ae,emits:["click"],setup(e, {emit:l,slots:c}){const m=M(),i=D().proxy,{parent:d,index:o}=K(y);if(!d)return;const a=G(()=>{var n;const{route:s,modelValue:f}=d.props;if(s&&"$route"in i){const{$route:p}=i,{to:b}=e,u=Y(b)?b:{path:b};return!!p.matched.find(B=>{const V="path"in u&&u.path===B.path,S="name"in u&&u.name===B.name;return V||S})}return((n=e.name)!=null?n:o.value)===f}),_= n=>{var s;a.value||d.setActive((s=e.name)!=null?s:o.value,m),l("click",n)},t=()=>{if(c.icon)return c.icon({active:a.value});if(e.icon)return r(Z,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var n;const{dot:s,badge:f}=e,{activeColor:p,inactiveColor:b}=d.props,u=a.value?p:b;return r("div",{role:"tab",class:g({active:a.value}),style:{color:u},tabindex:0,"aria-selected":a.value,onClick:_},[r(H,U({dot:s,class:g("icon"),content:f},e.badgeProps),{default:t}),r("div",{class:g("text")},[(n=c.default)==null?void 0:n.call(c,{active:a.value})])])}}});const ne=T(te);const oe={name:"AlbumTabBar",props:{active:{type:String,default:"search"}},data(){return{localActive:this.active}},methods:{},watch:{active(e){this.localActive=e}}};function re(e, l, c, m, i, d){const o=ne,a=X;return J(),L(a,{modelValue:i.localActive,"onUpdate:modelValue":l[0]||(l[0]= _=>i.localActive=_)},{default:v(()=>[r(o,{name:"search",to:"/album",icon:"search"},{default:v(()=>[h("搜索")]),_:1}),r(o,{name:"upload",to:"/album/upload",icon:"home-o"},{default:v(()=>[h("上传")]),_:1}),r(o,{name:"tag",icon:"friends-o"},{default:v(()=>[h("标签管理")]),_:1}),r(o,{name:"setting",icon:"setting-o"},{default:v(()=>[h("设置")]),_:1})]),_:1},8,["modelValue"])}const se=q(oe,[["render",re],["__scopeId","data-v-7e45afbd"]]);export{se as T};
