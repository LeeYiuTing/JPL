import{c as K,d as j,r as E,h as A,W as B,w as H,a9 as J,aa as U,a3 as X,b as n,S as P,ab as S,ac as $,a4 as q,A as D,f as F,_ as M,P as V,a7 as I,D as x,E as T,M as o,F as v,R as Y,G,J as Q,N as O,K as Z,ad as tt,T as et,U as at,Q as st,I as nt}from "./index-f9994920.js";import{I as ot}from "./index-71e9508a.js";import{P as it}from "./index-a92b4a24.js";import{k as lt}from "./kana-642f40ef.js";import{N as ct}from "./index-26c1e524.js";const[rt,N,W]=K("signature"),ut={tips:String,type:S("png"),penColor:S("#000"),lineWidth:$(3),clearButtonText:String,backgroundColor:S(""),confirmButtonText:String},dt=()=>{var t;const e=document.createElement("canvas");return!!((t=e.getContext)!=null&&t.call(e,"2d"))};var vt=j({name:rt,props:ut,emits:["submit","clear","start","end","signing"],setup(t, {emit:e}){const c=E(),d=E(),a=A(()=>c.value?c.value.getContext("2d"):null),u=B?dt():!0;let g=0,f=0,h;const _=()=>{if(!a.value)return!1;a.value.beginPath(),a.value.lineWidth=t.lineWidth,a.value.strokeStyle=t.penColor,h=q(c),e("start")},y= s=>{if(!a.value)return!1;D(s);const i=s.touches[0],l=i.clientX-((h==null?void 0:h.left)||0),b=i.clientY-((h==null?void 0:h.top)||0);a.value.lineCap="round",a.value.lineJoin="round",a.value.lineTo(l,b),a.value.stroke(),e("signing",s)},C= s=>{D(s),e("end")},k= s=>{const i=document.createElement("canvas");if(i.width=s.width,i.height=s.height,t.backgroundColor){const l=i.getContext("2d");r(l)}return s.toDataURL()===i.toDataURL()},r= s=>{s&&t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,g,f))},w=()=>{var s,i;const l=c.value;if(!l)return;const p=k(l)?"":((i=(s={jpg:()=>l.toDataURL("image/jpeg",.8),jpeg:()=>l.toDataURL("image/jpeg",.8)})[t.type])==null?void 0:i.call(s))||l.toDataURL(`image/${t.type}`);e("submit",{image:p,canvas:l})},L=()=>{a.value&&(a.value.clearRect(0,0,g,f),a.value.closePath(),r(a.value)),e("clear")},R=()=>{var s,i,l;if(u&&c.value){const b=c.value,p=B?window.devicePixelRatio:1;g=b.width=(((s=d.value)==null?void 0:s.offsetWidth)||0)*p,f=b.height=(((i=d.value)==null?void 0:i.offsetHeight)||0)*p,(l=a.value)==null||l.scale(p,p),r(a.value)}},z=()=>{if(a.value){const s=a.value.getImageData(0,0,g,f);R(),a.value.putImageData(s,0,0)}};return H(J,z),U(R),X({resize:z,clear:L,submit:w}),()=>n("div",{class:N()},[n("div",{class:N("content"),ref:d},[u?n("canvas",{ref:c,onTouchstartPassive:_,onTouchmove:y,onTouchend:C},null):n("p",null,[t.tips])]),n("div",{class:N("footer")},[n(P,{size:"small",onClick:L},{default:()=>[t.clearButtonText||W("clear")]}),n(P,{type:"primary",size:"small",onClick:w},{default:()=>[t.confirmButtonText||W("confirm")]})])])}});const mt=F(vt);const ht={name:"JpLearnTX",data(){return{kanaList:lt,randomKanaList:[],audioPlayer:new Audio,target:{},rangeList:[],kanaType:0,rowNum:0,learnNum:0,kanaIndex:0,completeKanaList:[],painting:!1,canvas:null,ctx:null,lastX:0,lastY:0,canvasWidth:0,canvasHeight:0,image:""}},mounted(){let t=this.$route.query;console.log("query",t),this.rowNum=Number(t.rowNum),this.kanaType=Number(t.kanaType),this.learnNum=5*this.rowNum,window.addEventListener("resize",this.updateCanvasSize),this.collectKana()},beforeDestroy(){window.removeEventListener("resize",this.updateCanvasSize),this.$refs.signature.resize()},methods:{router(){return V},onSubmit(t){this.image=t.image},onClear(){this.$refs.signature.clear()},collectKana(){let t=this.kanaList;console.log(t);let e=[];t.slice(0,this.rowNum).forEach(d=>{d.forEach(a=>{a.Hiragana&&e.push(a)})}),this.rangeList=I.shuffleArray(e),this.next()},next(){let{rangeList:t,kanaIndex:e}=this;e>0&&e<=t.length&&(this.$refs.signature.submit(),this.completeKanaList.unshift(this.target),this.kanaIndex+=1,this.completeKanaList[0].txImage=this.image,this.image="",this.$refs.signature.clear()),e>=t.length?(console.log("全部完成"),I.showTips("全部完成 !","success"),setTimeout(()=>{},1500)):(this.target=t[e],this.kanaIndex=e+1,this.playAudio())},playAudio(t){let{audioPlayer:e,target:c}=this;e.src=c.audio,t&&(e.src=t),e.play().catch(d=>{console.log("音频播放错误",d),I.showTips("首次请手动点击播放","success")})},updateCanvasSize(){const t=this.$el.querySelector(".canvas-layout");this.canvasWidth=t.clientWidth,this.canvasHeight=t.clientHeight}}},m= t=>(et("data-v-c580ab1f"),t=t(),at(),t),_t={class:"JpLearn"},gt=m(()=>o("div",{class:"form-title"},null,-1)),ft={class:"step-Line"},pt=m(()=>o("div",{class:"form-title"},null,-1)),yt={class:"alias-layout"},kt={class:"column-container"},bt=["onClick"],xt={class:"alias-text"},Ct=m(()=>o("div",{class:"form-title"},null,-1)),wt=m(()=>o("div",{class:"form-title"},null,-1)),Lt=m(()=>o("div",{class:"form-title"},null,-1)),St={class:"canvas-container"},It={class:"canvas-layout"},Tt=m(()=>o("div",{class:"func-text"},"重写",-1)),Nt=m(()=>o("div",{class:"func-text"},"重听",-1)),Rt=m(()=>o("div",{class:"func-text"},"下一个",-1));function zt(t, e, c, d, a, u){const g=ct,f=it,h=ot,_=st,y=Y,C=mt,k=nt;return x(),T("div",_t,[n(g,{title:"假名听写","left-text":"返回","left-arrow":"",onClickLeft:e[0]||(e[0]= r=>u.router().back())}),gt,o("div",ft,[n(f,{inactive:"",percentage:((a.kanaIndex-1)/a.rangeList.length*100).toFixed(2)},null,8,["percentage"])]),pt,n(y,{justify:"center"},{default:v(()=>[n(_,{class:"alias-s"},{default:v(()=>[o("div",yt,[(x(!0),T(G,null,Q(a.completeKanaList,(r, w)=>(x(),T("div",kt,[o("div",{class:"alias-text",onClick: L=>u.playAudio(r.audio)},O(r.Hiragana),9,bt),o("div",xt,[r.txImage?(x(),Z(h,{key:0,src:r.txImage},null,8,["src"])):tt("",!0)])]))),256))])]),_:1})]),_:1}),Ct,wt,Lt,o("div",St,[n(y,{justify:"center"},{default:v(()=>[n(_,null,{default:v(()=>[o("div",It,[n(C,{"line-width":6,class:"van-signature",ref:"signature","background-color":"#eee",onSubmit:u.onSubmit},null,8,["onSubmit"])])]),_:1})]),_:1})]),n(y,{class:"lock-to-bottom",justify:"center",gutter:"70"},{default:v(()=>[n(_,{onClick:u.onClear},{default:v(()=>[n(k,{name:"replay",size:"5rem",color:"#b0dbda"}),Tt]),_:1},8,["onClick"]),n(_,{onClick:e[1]||(e[1]= r=>u.playAudio())},{default:v(()=>[n(k,{name:"play-circle-o",size:"5rem",color:"#b0dbda"}),Nt]),_:1}),n(_,{onClick:u.next},{default:v(()=>[n(k,{name:"arrow",size:"5rem",color:"#b0dbda"}),Rt]),_:1},8,["onClick"])]),_:1})])}const Kt=M(ht,[["render",zt],["__scopeId","data-v-c580ab1f"]]);export{Kt as default};
