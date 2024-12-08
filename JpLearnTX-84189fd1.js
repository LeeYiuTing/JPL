import{c as X,d as J,p as z,g as O,v as q,x as B,i as G,A as F,ag as $,ah as Q,B as V,D as j,a as n,n as T,t as K,m as P,W as Z,ai as ee,L as W,I as Y,w as M,y as te,a8 as A,aj as ae,ak as ne,K as H,al as oe,a0 as se,a6 as ie,a7 as N,a1 as E,a2 as R,aa as l,a3 as m,af as re,S as le,a4 as ce,ac as ue,ad as de,ae as ve,ab as ge,a9 as fe,am as he}from"./index-4083dc3e.js";import{P as me}from"./index-29fbaa6c.js";import{k as _e,N as ye}from"./kana-7d51dce0.js";const[ke,S]=X("image"),be={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:T,height:T,radius:T,lazyLoad:Boolean,iconSize:T,showError:K,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:K,loadingIcon:P("photo"),crossorigin:String,referrerpolicy:String};var pe=J({name:ke,props:be,emits:["load","error"],setup(e,{emit:a,slots:r}){const c=z(!1),t=z(!0),i=z(),{$Lazyload:g}=O().proxy,y=q(()=>{const o={width:B(e.width),height:B(e.height)};return G(e.radius)&&(o.overflow="hidden",o.borderRadius=B(e.radius)),o});F(()=>e.src,()=>{c.value=!1,t.value=!0});const h=o=>{t.value&&(t.value=!1,a("load",o))},f=()=>{const o=new Event("load");Object.defineProperty(o,"target",{value:i.value,enumerable:!0}),h(o)},k=o=>{c.value=!0,t.value=!1,a("error",o)},w=(o,p,s)=>s?s():n(Y,{name:o,size:e.iconSize,class:p,classPrefix:e.iconPrefix},null),b=()=>{if(t.value&&e.showLoading)return n("div",{class:S("loading")},[w(e.loadingIcon,S("loading-icon"),r.loading)]);if(c.value&&e.showError)return n("div",{class:S("error")},[w(e.errorIcon,S("error-icon"),r.error)])},u=()=>{if(c.value||!e.src)return;const o={alt:e.alt,class:S("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?Z(n("img",W({ref:i},o),null),[[ee("lazy"),e.src]]):n("img",W({ref:i,src:e.src,onLoad:h,onError:k},o),null)},x=({el:o})=>{const p=()=>{o===i.value&&t.value&&f()};i.value?p():j(p)},L=({el:o})=>{o===i.value&&!c.value&&k()};return g&&$&&(g.$on("loaded",x),g.$on("error",L),Q(()=>{g.$off("loaded",x),g.$off("error",L)})),V(()=>{j(()=>{var o;(o=i.value)!=null&&o.complete&&!e.lazyLoad&&f()})}),()=>{var o;return n("div",{class:S({round:e.round,block:e.block}),style:y.value},[u(),b(),(o=r.default)==null?void 0:o.call(r)])}}});const we=M(pe),[xe,D,U]=X("signature"),Le={tips:String,type:P("png"),penColor:P("#000"),lineWidth:ae(3),clearButtonText:String,backgroundColor:P(""),confirmButtonText:String},Ce=()=>{var e;const a=document.createElement("canvas");return!!((e=a.getContext)!=null&&e.call(a,"2d"))};var Se=J({name:xe,props:Le,emits:["submit","clear","start","end","signing"],setup(e,{emit:a}){const r=z(),c=z(),t=q(()=>r.value?r.value.getContext("2d"):null),i=$?Ce():!0;let g=0,y=0,h;const f=()=>{if(!t.value)return!1;t.value.beginPath(),t.value.lineWidth=e.lineWidth,t.value.strokeStyle=e.penColor,h=ne(r),a("start")},k=s=>{if(!t.value)return!1;H(s);const d=s.touches[0],v=d.clientX-((h==null?void 0:h.left)||0),I=d.clientY-((h==null?void 0:h.top)||0);t.value.lineCap="round",t.value.lineJoin="round",t.value.lineTo(v,I),t.value.stroke(),a("signing",s)},w=s=>{H(s),a("end")},b=s=>{const d=document.createElement("canvas");if(d.width=s.width,d.height=s.height,e.backgroundColor){const v=d.getContext("2d");u(v)}return s.toDataURL()===d.toDataURL()},u=s=>{s&&e.backgroundColor&&(s.fillStyle=e.backgroundColor,s.fillRect(0,0,g,y))},x=()=>{var s,d;const v=r.value;if(!v)return;const C=b(v)?"":((d=(s={jpg:()=>v.toDataURL("image/jpeg",.8),jpeg:()=>v.toDataURL("image/jpeg",.8)})[e.type])==null?void 0:d.call(s))||v.toDataURL(`image/${e.type}`);a("submit",{image:C,canvas:v})},L=()=>{t.value&&(t.value.clearRect(0,0,g,y),t.value.closePath(),u(t.value)),a("clear")},o=()=>{var s,d,v;if(i&&r.value){const I=r.value,C=$?window.devicePixelRatio:1;g=I.width=(((s=c.value)==null?void 0:s.offsetWidth)||0)*C,y=I.height=(((d=c.value)==null?void 0:d.offsetHeight)||0)*C,(v=t.value)==null||v.scale(C,C),u(t.value)}},p=()=>{if(t.value){const s=t.value.getImageData(0,0,g,y);o(),t.value.putImageData(s,0,0)}};return F(oe,p),V(o),te({resize:p,clear:L,submit:x}),()=>n("div",{class:D()},[n("div",{class:D("content"),ref:c},[i?n("canvas",{ref:r,onTouchstartPassive:f,onTouchmove:k,onTouchend:w},null):n("p",null,[e.tips])]),n("div",{class:D("footer")},[n(A,{size:"small",onClick:L},{default:()=>[e.clearButtonText||U("clear")]}),n(A,{type:"primary",size:"small",onClick:x},{default:()=>[e.confirmButtonText||U("confirm")]})])])}});const Ie=M(Se);const ze={name:"JpLearnTX",data(){return{kanaList:_e,randomKanaList:[],audioPlayer:new Audio,target:{},rangeList:[],kanaType:0,rowNum:0,learnNum:0,kanaIndex:0,completeKanaList:[],painting:!1,canvas:null,ctx:null,lastX:0,lastY:0,canvasWidth:0,canvasHeight:0,image:""}},mounted(){let e=this.$route.query;console.log("query",e),this.rowNum=Number(e.rowNum),this.kanaType=Number(e.kanaType),this.learnNum=5*this.rowNum,window.addEventListener("resize",this.updateCanvasSize),this.collectKana()},beforeDestroy(){window.removeEventListener("resize",this.updateCanvasSize),this.$refs.signature.resize()},methods:{router(){return ie},onSubmit(e){this.image=e.image},onClear(){this.$refs.signature.clear()},collectKana(){let e=this.kanaList;console.log(e);let a=[];e.slice(0,this.rowNum).forEach(c=>{c.forEach(t=>{t.Hiragana&&a.push(t)})}),this.rangeList=N.shuffleArray(a),this.next()},next(){let{rangeList:e,kanaIndex:a}=this;a>0&&a<=e.length&&(this.$refs.signature.submit(),this.completeKanaList.unshift(this.target),this.kanaIndex+=1,this.completeKanaList[0].txImage=this.image,this.image="",this.$refs.signature.clear()),a>=e.length?(console.log("全部完成"),N.showTips("全部完成 !","success"),setTimeout(()=>{},1500)):(this.target=e[a],this.kanaIndex=a+1,this.playAudio())},playAudio(e){let{audioPlayer:a,target:r}=this;a.src=r.audio,e&&(a.src=e),a.play().catch(c=>{console.log("音频播放错误",c),N.showTips("首次请手动点击播放","success")})},updateCanvasSize(){const e=this.$el.querySelector(".canvas-layout");this.canvasWidth=e.clientWidth,this.canvasHeight=e.clientHeight}}},_=e=>(ue("data-v-8b9d6347"),e=e(),de(),e),Pe={class:"JpLearn"},Te=_(()=>l("div",{class:"form-title"},null,-1)),Ee={class:"step-Line"},Be=_(()=>l("div",{class:"form-title"},null,-1)),Ne={class:"alias-layout"},Re={class:"column-container"},De=["onClick"],$e={class:"alias-text"},je=_(()=>l("div",{class:"form-title"},null,-1)),Ke=_(()=>l("div",{class:"form-title"},null,-1)),We=_(()=>l("div",{class:"form-title"},null,-1)),Ae={class:"canvas-container"},He={class:"canvas-layout"},Ue=_(()=>l("div",{class:"func-text"},"重写",-1)),Xe=_(()=>l("div",{class:"func-text"},"重听",-1)),Je=_(()=>l("div",{class:"func-text"},"下一个",-1)),qe=_(()=>l("div",{class:"func-text"},"返回",-1));function Fe(e,a,r,c,t,i){const g=ye,y=me,h=we,f=ve,k=re,w=Ie,b=Y;return E(),R("div",Pe,[n(g,{title:this.kanaType===1?"平假名听写":"片假名听写","left-text":"返回","left-arrow":"",onClickLeft:a[0]||(a[0]=u=>i.router().back())},null,8,["title"]),Te,l("div",Ee,[n(y,{inactive:"",percentage:((t.kanaIndex-1)/t.rangeList.length*100).toFixed(2)},null,8,["percentage"])]),Be,n(k,{justify:"center"},{default:m(()=>[n(f,{class:"alias-s"},{default:m(()=>[l("div",Ne,[(E(!0),R(le,null,ce(t.completeKanaList,(u,x)=>(E(),R("div",Re,[l("div",{class:"alias-text",onClick:L=>i.playAudio(u.audio)},ge(t.kanaType===1?u.Hiragana:u.Katakana),9,De),l("div",$e,[u.txImage?(E(),fe(h,{key:0,src:u.txImage},null,8,["src"])):he("",!0)])]))),256))])]),_:1})]),_:1}),je,Ke,We,l("div",Ae,[n(k,{justify:"center"},{default:m(()=>[n(f,null,{default:m(()=>[l("div",He,[n(w,{"line-width":6,class:"van-signature",ref:"signature","background-color":"#eee",onSubmit:i.onSubmit},null,8,["onSubmit"])])]),_:1})]),_:1})]),n(k,{class:"lock-to-bottom",justify:"center",gutter:"70"},{default:m(()=>[n(f,{onClick:i.onClear},{default:m(()=>[n(b,{name:"replay",size:"5rem",color:"#b0dbda"}),Ue]),_:1},8,["onClick"]),n(f,{onClick:a[1]||(a[1]=u=>i.playAudio())},{default:m(()=>[n(b,{name:"play-circle-o",size:"5rem",color:"#b0dbda"}),Xe]),_:1}),n(f,{onClick:i.next},{default:m(()=>[n(b,{name:"arrow",size:"5rem",color:"#b0dbda"}),Je]),_:1},8,["onClick"]),n(f,{onClick:a[2]||(a[2]=u=>i.router().back())},{default:m(()=>[n(b,{name:"revoke",size:"5rem",color:"#b0dbda"}),qe]),_:1})]),_:1})])}const Oe=se(ze,[["render",Fe],["__scopeId","data-v-8b9d6347"]]);export{Oe as default};
