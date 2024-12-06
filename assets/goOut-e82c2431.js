import{c as G,d as R,a as W,b as s,n as A,e as p,V as U,i as z,f as $,g as x,W as F,X as q,Y as X,k as Y,Z as H,l as I,r as O,$ as J,a0 as K,a1 as Z,a2 as j,a3 as Q,w as ee,q as te,v as oe,I as T,a4 as L,a5 as N,a6 as ae,x as ne,_ as se,a7 as P,D as C,E,F as b,S as le,G as ie,J as ce,K as re,M as ue,a8 as de,O as fe}from "./index-f9994920.js";import{C as me}from "./index-71f6281e.js";import{C as he}from "./index-a4b258e2.js";const[ge,y]=G("switch"),ve={size:A,loading:Boolean,disabled:Boolean,modelValue:p,activeColor:String,inactiveColor:String,activeValue:{type:p,default:!0},inactiveValue:{type:p,default:!1}};var _e=R({name:ge,props:ve,emits:["change","update:modelValue"],setup(e, {emit:t,slots:o}){const l=()=>e.modelValue===e.activeValue,c=()=>{if(!e.disabled&&!e.loading){const n=l()?e.inactiveValue:e.activeValue;t("update:modelValue",n),t("change",n)}},r=()=>{if(e.loading){const n=l()?e.activeColor:e.inactiveColor;return s(U,{class:y("loading"),color:n},null)}if(o.node)return o.node()};return W(()=>e.modelValue),()=>{var n;const{size:u,loading:a,disabled:f,activeColor:h,inactiveColor:d}=e,m=l(),g={fontSize:z(u),backgroundColor:m?h:d};return s("div",{role:"switch",class:y({on:m,loading:a,disabled:f}),style:g,tabindex:f?void 0:0,"aria-checked":m,onClick:c},[s("div",{class:y("node")},[r()]),(n=o.background)==null?void 0:n.call(o)])}}});const we=$(_e);let B;const ke={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let pe=x({},ke);function Ce(){({instance:B}=q({setup(){const{state:t,toggle:o}=X();return()=>s(H,Y(t,{"onUpdate:show":o}),null)}}))}function be(e){return F?new Promise((t, o)=>{B||Ce(),B.open(x({},pe,e,{callback: l=>{(l==="confirm"?t:o)(l)}}))}):Promise.resolve(void 0)}const ye= e=>be(x({showCancelButton:!0},e)),[Be,w]=G("notice-bar"),xe={text:String,mode:String,color:String,delay:I(1),speed:I(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var Ve=R({name:Be,props:xe,emits:["close","replay"],setup(e, {emit:t,slots:o}){let l=0,c=0,r;const n=O(),u=O(),a=J({show:!0,offset:0,duration:0}),f=()=>{if(o["left-icon"])return o["left-icon"]();if(e.leftIcon)return s(T,{class:w("left-icon"),name:e.leftIcon},null)},h=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},d= i=>{e.mode==="closeable"&&(a.show=!1,t("close",i))},m=()=>{if(o["right-icon"])return o["right-icon"]();const i=h();if(i)return s(T,{name:i,class:w("right-icon"),onClick:d},null)},g=()=>{a.offset=l,a.duration=0,ae(()=>{N(()=>{a.offset=-c,a.duration=(c+l)/+e.speed,t("replay")})})},D=()=>{const i=e.scrollable===!1&&!e.wrapable,_={transform:a.offset?`translateX(${a.offset}px)`:"",transitionDuration:`${a.duration}s`};return s("div",{ref:n,role:"marquee",class:w("wrap")},[s("div",{ref:u,style:_,class:[w("content"),{"van-ellipsis":i}],onTransitionend:g},[o.default?o.default():e.text])])},v=()=>{const{delay:i,speed:_,scrollable:k}=e,M=ne(i)?+i*1e3:0;l=0,c=0,a.offset=0,a.duration=0,clearTimeout(r),r=setTimeout(()=>{if(!n.value||!u.value||k===!1)return;const V=L(n).width,S=L(u).width;(k||S>V)&&N(()=>{l=V,c=S,a.offset=-c,a.duration=c/+_})},M)};return K(v),Z(v),j("pageshow",v),Q({reset:v}),ee(()=>[e.text,e.scrollable],v),()=>{const{color:i,wrapable:_,background:k}=e;return te(s("div",{role:"alert",class:w({wrapable:_}),style:{color:i,background:k}},[f(),D(),m()]),[[oe,a.show]])}}});const Se=$(Ve);const Ie={name:"goOut",watch:{checkedAll:function(e){console.log("checkedAll",e),e?(this.taskList.forEach(t=>{t.status=!0}),this.itemNum=this.taskList.length):(this.taskList.forEach(t=>{t.status=!1}),this.itemNum=0)}},data(){return{checkedAll:!1,status:!1,itemNum:0,taskList:[{title:"钥匙",status:!1},{title:"手机",status:!1}]}},mounted(){this.getMyGoOutThings()},methods:{switchStatus(){console.log("switchStatus"),this.status=!!this.status,this.itemNum=this.taskList.filter(e=>e.status).length},clickGo(){let{taskList:e}=this,t="";e.forEach(o=>{o.status||(t+=o.title+"、")}),t?(t=t.substring(0,t.length-1),ye({title:"标题",message:`你还没有准备好${t}，确定要出发吗？`}).then(()=>{this.confirmGo()}).catch(()=>{})):this.confirmGo()},confirmGo(){P.showTips("出发啦！")},getMyGoOutThings(){P.post({url:"goOut/getMyGoOutThings",params:{},success: e=>{console.log("请求成功",e.data)}})}}},Oe={class:"home"};function Te(e, t, o, l, c, r){const n=Se,u=we,a=he,f=me,h=le;return C(),E("div",Oe,[s(n,{"left-icon":"volume-o",text:"你爱我 我爱你 蜜雪冰城甜蜜蜜 I love you , You love me MIXUE Ice cream and tea"}),s(f,{inset:"",title:"我要出门啦"},{default:b(()=>[(C(!0),E(ie,null,ce(c.taskList,(d, m)=>(C(),re(a,{title:d.title},{"right-icon":b(()=>[ue("div",null,[s(u,{modelValue:d.status,"onUpdate:modelValue": g=>d.status=g,onClick:de(r.switchStatus,["stop"])},null,8,["modelValue","onUpdate:modelValue","onClick"])])]),_:2},1032,["title"]))),256))]),_:1}),s(h,{class:"go-button",round:"",type:"success",size:"large",onClick:r.clickGo},{default:b(()=>[fe("开始出发")]),_:1},8,["onClick"])])}const Ee=se(Ie,[["render",Te],["__scopeId","data-v-853d91f8"]]);export{Ee as default};
