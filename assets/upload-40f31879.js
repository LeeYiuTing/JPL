import{c as K,t as F,n as se,l as G,d as q,r as U,$ as me,af as Me,u as Ue,h as M,a3 as re,w as H,a9 as Ye,ag as Le,ah as lt,aa as xe,ai as it,a0 as st,aj as rt,ak as Xe,a2 as Ne,b as n,a5 as ge,al as Ie,y as ye,A as fe,am as W,f as te,j as ct,an as ut,ao as dt,ab as ee,H as je,I as ne,m as de,a6 as vt,V as Ze,a4 as He,L as ft,ap as We,e as Te,k as Pe,p as ve,aq as qe,B as Ge,W as mt,g as be,X as gt,Y as ht,G as ie,ar as wt,as as bt,at as Ke,au as yt,o as Je,x as pt,a as _t,q as ze,v as Re,av as Ct,_ as St,D as J,E as Q,M as ue,F as z,ad as $e,J as _e,aw as Be,ax as Ae,a7 as Ce,P as xt,S as Pt,O as Z,N as kt,ay as It,az as Tt}from "./index-f9994920.js";import{I as ke}from "./index-71e9508a.js";import{T as zt}from "./TabBar-f343b1c0.js";import{N as Rt}from "./index-26c1e524.js";import{C as $t}from "./index-71f6281e.js";import{F as Bt}from "./index-4cd3d11b.js";import"./index-a4b258e2.js";const[Qe,he]=K("swipe"),At={loop:F,width:se,height:se,vertical:Boolean,autoplay:G(0),duration:G(500),touchable:F,lazyRender:Boolean,initialSwipe:G(0),indicatorColor:String,showIndicators:F,stopPropagation:F},et=Symbol(Qe);var Et=q({name:Qe,props:At,emits:["change","dragStart","dragEnd"],setup(e, {emit:l,slots:i}){const t=U(),h=U(),a=me({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let y=!1;const p=Me(),{children:_,linkChildren:S}=Ue(et),o=M(()=>_.length),s=M(()=>a[e.vertical?"height":"width"]),m=M(()=>e.vertical?p.deltaY.value:p.deltaX.value),c=M(()=>a.rect?(e.vertical?a.rect.height:a.rect.width)-s.value*o.value:0),I=M(()=>s.value?Math.ceil(Math.abs(c.value)/s.value):o.value),V=M(()=>o.value*s.value),r=M(()=>(a.active+o.value)%o.value),b=M(()=>{const v=e.vertical?"vertical":"horizontal";return p.direction.value===v}),w=M(()=>{const v={transitionDuration:`${a.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+a.offset.toFixed(2)}px)`};if(s.value){const $=e.vertical?"height":"width",B=e.vertical?"width":"height";v[$]=`${V.value}px`,v[B]=e[B]?`${e[B]}px`:""}return v}),f= v=>{const{active:$}=a;return v?e.loop?W($+v,-1,o.value):W($+v,0,I.value):$},x=(v, $=0)=>{let B=v*s.value;e.loop||(B=Math.min(B,-c.value));let j=$-B;return e.loop||(j=W(j,c.value,0)),j},P=({pace:v=0,offset:$=0,emitChange:B})=>{if(o.value<=1)return;const{active:j}=a,N=f(v),ce=x(N,$);if(e.loop){if(_[0]&&ce!==c.value){const pe=ce<c.value;_[0].setOffset(pe?V.value:0)}if(_[o.value-1]&&ce!==0){const pe=ce>0;_[o.value-1].setOffset(pe?-V.value:0)}}a.active=N,a.offset=ce,B&&N!==j&&l("change",r.value)},A=()=>{a.swiping=!0,a.active<=-1?P({pace:o.value}):a.active>=o.value&&P({pace:-o.value})},L=()=>{A(),p.reset(),ge(()=>{a.swiping=!1,P({pace:-1,emitChange:!0})})},u=()=>{A(),p.reset(),ge(()=>{a.swiping=!1,P({pace:1,emitChange:!0})})};let g;const R=()=>clearTimeout(g),T=()=>{R(),+e.autoplay>0&&o.value>1&&(g=setTimeout(()=>{u(),T()},+e.autoplay))},E=(v=+e.initialSwipe)=>{if(!t.value)return;const $=()=>{var B,j;if(!Ie(t)){const N={width:t.value.offsetWidth,height:t.value.offsetHeight};a.rect=N,a.width=+((B=e.width)!=null?B:N.width),a.height=+((j=e.height)!=null?j:N.height)}o.value&&(v=Math.min(o.value-1,v),v===-1&&(v=o.value-1)),a.active=v,a.swiping=!0,a.offset=x(v),_.forEach(N=>{N.setOffset(0)}),T()};Ie(t)?ye().then($):$()},Y=()=>E(a.active);let ae;const oe= v=>{!e.touchable||v.touches.length>1||(p.start(v),y=!1,ae=Date.now(),R(),A())},d= v=>{e.touchable&&a.swiping&&(p.move(v),b.value&&(!e.loop&&(a.active===0&&m.value>0||a.active===o.value-1&&m.value<0)||(fe(v,e.stopPropagation),P({offset:m.value}),y||(l("dragStart",{index:r.value}),y=!0))))},C=()=>{if(!e.touchable||!a.swiping)return;const v=Date.now()-ae,$=m.value/v;if((Math.abs($)>.25||Math.abs(m.value)>s.value/2)&&b.value){const j=e.vertical?p.offsetY.value:p.offsetX.value;let N=0;e.loop?N=j>0?m.value>0?-1:1:0:N=-Math[m.value>0?"ceil":"floor"](m.value/s.value),P({pace:N,emitChange:!0})}else m.value&&P({pace:0});y=!1,a.swiping=!1,l("dragEnd",{index:r.value}),T()},k=(v, $={})=>{A(),p.reset(),ge(()=>{let B;e.loop&&v===o.value?B=a.active===0?0:v:B=v%o.value,$.immediate?ge(()=>{a.swiping=!1}):a.swiping=!1,P({pace:B-a.active,emitChange:!0})})},D=(v, $)=>{const B=$===r.value,j=B?{backgroundColor:e.indicatorColor}:void 0;return n("i",{style:j,class:he("indicator",{active:B})},null)},X=()=>{if(i.indicator)return i.indicator({active:r.value,total:o.value});if(e.showIndicators&&o.value>1)return n("div",{class:he("indicators",{vertical:e.vertical})},[Array(o.value).fill("").map(D)])};return re({prev:L,next:u,state:a,resize:Y,swipeTo:k}),S({size:s,props:e,count:o,activeIndicator:r}),H(()=>e.initialSwipe, v=>E(+v)),H(o,()=>E(a.active)),H(()=>e.autoplay,T),H([Ye,Le,()=>e.width,()=>e.height],Y),H(lt(), v=>{v==="visible"?T():R()}),xe(E),it(()=>E(a.active)),st(()=>E(a.active)),rt(R),Xe(R),Ne("touchmove",d,{target:h}),()=>{var v;return n("div",{ref:t,class:he()},[n("div",{ref:h,style:w.value,class:he("track",{vertical:e.vertical}),onTouchstartPassive:oe,onTouchend:C,onTouchcancel:C},[(v=i.default)==null?void 0:v.call(i)]),X()])}}});const Ot=te(Et),[Ft,Dt]=K("swipe-item");var Vt=q({name:Ft,setup(e, {slots:l}){let i;const t=me({offset:0,inited:!1,mounted:!1}),{parent:h,index:a}=ct(et);if(!h)return;const y=M(()=>{const S={},{vertical:o}=h.props;return h.size.value&&(S[o?"height":"width"]=`${h.size.value}px`),t.offset&&(S.transform=`translate${o?"Y":"X"}(${t.offset}px)`),S}),p=M(()=>{const{loop:S,lazyRender:o}=h.props;if(!o||i)return!0;if(!t.mounted)return!1;const s=h.activeIndicator.value,m=h.count.value-1,c=s===0&&S?m:s-1,I=s===m&&S?0:s+1;return i=a.value===s||a.value===c||a.value===I,i}),_= S=>{t.offset=S};return xe(()=>{ye(()=>{t.mounted=!0})}),re({setOffset:_}),()=>{var S;return n("div",{class:Dt(),style:y.value},[p.value?(S=l.default)==null?void 0:S.call(l):null])}}});const Mt=te(Vt),[Ut,Yt]=K("form"),Lt={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:se,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:F,showErrorMessage:F,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Xt=q({name:Ut,props:Lt,emits:["submit","failed"],setup(e, {emit:l,slots:i}){const{children:t,linkChildren:h}=Ue(ut),a= r=>r?t.filter(b=>r.includes(b.name)):t,y= r=>new Promise((b, w)=>{const f=[];a(r).reduce((P, A)=>P.then(()=>{if(!f.length)return A.validate().then(L=>{L&&f.push(L)})}),Promise.resolve()).then(()=>{f.length?w(f):b()})}),p= r=>new Promise((b, w)=>{const f=a(r);Promise.all(f.map(x=>x.validate())).then(x=>{x=x.filter(Boolean),x.length?w(x):b()})}),_= r=>{const b=t.find(w=>w.name===r);return b?new Promise((w, f)=>{b.validate().then(x=>{x?f(x):w()})}):Promise.reject()},S= r=>typeof r=="string"?_(r):e.validateFirst?y(r):p(r),o= r=>{typeof r=="string"&&(r=[r]),a(r).forEach(w=>{w.resetValidation()})},s=()=>t.reduce((r, b)=>(r[b.name]=b.getValidationStatus(),r),{}),m=(r, b)=>{t.some(w=>w.name===r?(w.$el.scrollIntoView(b),!0):!1)},c=()=>t.reduce((r, b)=>(b.name!==void 0&&(r[b.name]=b.formValue.value),r),{}),I=()=>{const r=c();S().then(()=>l("submit",r)).catch(b=>{l("failed",{values:r,errors:b});const{scrollToError:w,scrollToErrorPosition:f}=e;w&&b[0].name&&m(b[0].name,f?{block:f}:void 0)})},V= r=>{fe(r),I()};return h({props:e}),re({submit:I,validate:S,getValues:c,scrollToField:m,resetValidation:o,getValidationStatus:s}),()=>{var r;return n("form",{class:Yt(),onSubmit:V},[(r=i.default)==null?void 0:r.call(i)])}}});const Nt=te(Xt),[jt,Ee]=K("tag"),Zt={size:String,mark:Boolean,show:F,type:ee("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var Ht=q({name:jt,props:Zt,emits:["close"],setup(e, {slots:l,emit:i}){const t= y=>{y.stopPropagation(),i("close",y)},h=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},a=()=>{var y;const{type:p,mark:_,plain:S,round:o,size:s,closeable:m}=e,c={mark:_,plain:S,round:o};s&&(c[s]=s);const I=m&&n(ne,{name:"cross",class:[Ee("close"),je],onClick:t},null);return n("span",{style:h(),class:Ee([c,p])},[(y=l.default)==null?void 0:y.call(l),I])};return()=>n(dt,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?a():null]})}});const Wt=te(Ht),[qt,Gt]=K("divider"),Kt={dashed:Boolean,hairline:F,vertical:Boolean,contentPosition:ee("center")};var Jt=q({name:qt,props:Kt,setup(e, {slots:l}){return()=>{var i;return n("div",{role:"separator",class:Gt({dashed:e.dashed,hairline:e.hairline,vertical:e.vertical,[`content-${e.contentPosition}`]:!!l.default&&!e.vertical})},[!e.vertical&&((i=l.default)==null?void 0:i.call(l))])}}});const Qt=te(Jt),Oe= e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),ea= e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),Se=K("image-preview")[1],Fe=2.6,ta={src:String,show:Boolean,active:Number,minZoom:de(se),maxZoom:de(se),rootWidth:de(Number),rootHeight:de(Number),disableZoom:Boolean,doubleScale:Boolean,closeOnClickImage:Boolean,closeOnClickOverlay:Boolean,vertical:Boolean};var aa=q({props:ta,emits:["scale","close","longPress"],setup(e, {emit:l,slots:i}){const t=me({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),h=Me(),a=U(),y=U(),p=U(!1),_=U(!1);let S=0;const o=M(()=>{const{scale:d,moveX:C,moveY:k,moving:D,zooming:X,initializing:v}=t,$={transitionDuration:X||D||v?"0s":".3s"};return(d!==1||_.value)&&($.transform=`matrix(${d}, 0, 0, ${d}, ${C}, ${k})`),$}),s=M(()=>{if(t.imageRatio){const{rootWidth:d,rootHeight:C}=e,k=p.value?C/t.imageRatio:d;return Math.max(0,(t.scale*k-d)/2)}return 0}),m=M(()=>{if(t.imageRatio){const{rootWidth:d,rootHeight:C}=e,k=p.value?C:d*t.imageRatio;return Math.max(0,(t.scale*k-C)/2)}return 0}),c=(d, C)=>{var k;if(d=W(d,+e.minZoom,+e.maxZoom+1),d!==t.scale){const D=d/t.scale;if(t.scale=d,C){const X=He((k=a.value)==null?void 0:k.$el),v={x:X.width*.5,y:X.height*.5},$=t.moveX-(C.x-X.left-v.x)*(D-1),B=t.moveY-(C.y-X.top-v.y)*(D-1);t.moveX=W($,-s.value,s.value),t.moveY=W(B,-m.value,m.value)}else t.moveX=0,t.moveY=_.value?S:0;l("scale",{scale:d,index:e.active})}},I=()=>{c(1)},V=()=>{const d=t.scale>1?1:2;c(d,d===2||_.value?{x:h.startX.value,y:h.startY.value}:void 0)};let r,b,w,f,x,P,A,L,u=!1;const g= d=>{const{touches:C}=d;if(r=C.length,r===2&&e.disableZoom)return;const{offsetX:k}=h;h.start(d),b=t.moveX,w=t.moveY,L=Date.now(),u=!1,t.moving=r===1&&(t.scale!==1||_.value),t.zooming=r===2&&!k.value,t.zooming&&(f=t.scale,x=Oe(C))},R= d=>{const{touches:C}=d;if(h.move(d),t.moving){const{deltaX:k,deltaY:D}=h,X=k.value+b,v=D.value+w;if((e.vertical?h.isVertical()&&Math.abs(v)>m.value:h.isHorizontal()&&Math.abs(X)>s.value)&&!u){t.moving=!1;return}u=!0,fe(d,!0),t.moveX=W(X,-s.value,s.value),t.moveY=W(v,-m.value,m.value)}if(t.zooming&&(fe(d,!0),C.length===2)){const k=Oe(C),D=f*k/x;P=ea(C),c(D,P)}},T= d=>{var C;const k=(C=y.value)==null?void 0:C.$el;if(!k)return;const D=k.firstElementChild,X=d.target===k,v=D==null?void 0:D.contains(d.target);!e.closeOnClickImage&&v||!e.closeOnClickOverlay&&X||l("close")},E= d=>{if(r>1)return;const C=Date.now()-L,k=250;h.isTap.value&&(C<k?e.doubleScale?A?(clearTimeout(A),A=null,V()):A=setTimeout(()=>{T(d),A=null},k):T(d):C>ft&&l("longPress"))},Y= d=>{let C=!1;if((t.moving||t.zooming)&&(C=!0,t.moving&&b===t.moveX&&w===t.moveY&&(C=!1),!d.touches.length)){t.zooming&&(t.moveX=W(t.moveX,-s.value,s.value),t.moveY=W(t.moveY,-m.value,m.value),t.zooming=!1),t.moving=!1,b=0,w=0,f=1,t.scale<1&&I();const k=+e.maxZoom;t.scale>k&&c(k,P)}fe(d,C),E(d),h.reset()},ae=()=>{const{rootWidth:d,rootHeight:C}=e,k=C/d,{imageRatio:D}=t;p.value=t.imageRatio>k&&D<Fe,_.value=t.imageRatio>k&&D>=Fe,_.value&&(S=(D*d-C)/2,t.moveY=S,t.initializing=!0,vt(()=>{t.initializing=!1})),I()},oe= d=>{const{naturalWidth:C,naturalHeight:k}=d.target;t.imageRatio=k/C,ae()};return H(()=>e.active,I),H(()=>e.show, d=>{d||I()}),H(()=>[e.rootWidth,e.rootHeight],ae),Ne("touchmove",R,{target:M(()=>{var d;return(d=y.value)==null?void 0:d.$el})}),re({resetScale:I}),()=>{const d={loading:()=>n(Ze,{type:"spinner"},null)};return n(Mt,{ref:y,class:Se("swipe-item"),onTouchstartPassive:g,onTouchend:Y,onTouchcancel:Y},{default:()=>[i.image?n("div",{class:Se("image-wrap")},[i.image({src:e.src,onLoad:oe,style:o.value})]):n(ke,{ref:a,src:e.src,fit:"contain",class:Se("image",{vertical:p.value}),style:o.value,onLoad:oe},d)]})}}});const[oa,le]=K("image-preview"),na=["show","teleport","transition","overlayStyle","closeOnPopstate"],la={show:Boolean,loop:F,images:We(),minZoom:G(1/3),maxZoom:G(3),overlay:F,vertical:Boolean,closeable:Boolean,showIndex:F,className:Te,closeIcon:ee("clear"),transition:String,beforeClose:Function,doubleScale:F,overlayClass:Te,overlayStyle:Object,swipeDuration:G(300),startPosition:G(0),showIndicators:Boolean,closeOnPopstate:F,closeOnClickImage:F,closeOnClickOverlay:F,closeIconPosition:ee("top-right"),teleport:[String,Object]};var tt=q({name:oa,props:la,emits:["scale","close","closed","change","longPress","update:show"],setup(e, {emit:l,slots:i}){const t=U(),h=U(),a=me({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),y=()=>{if(t.value){const f=He(t.value.$el);a.rootWidth=f.width,a.rootHeight=f.height,t.value.resize()}},p= f=>l("scale",f),_= f=>l("update:show",f),S=()=>{Ge(e.beforeClose,{args:[a.active],done:()=>_(!1)})},o= f=>{f!==a.active&&(a.active=f,l("change",f))},s=()=>{if(e.showIndex)return n("div",{class:le("index")},[i.index?i.index({index:a.active}):`${a.active+1} / ${e.images.length}`])},m=()=>{if(i.cover)return n("div",{class:le("cover")},[i.cover()])},c=()=>{a.disableZoom=!0},I=()=>{a.disableZoom=!1},V=()=>n(Ot,{ref:t,lazyRender:!0,loop:e.loop,class:le("swipe"),vertical:e.vertical,duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:o,onDragEnd:I,onDragStart:c},{default:()=>[e.images.map((f, x)=>n(aa,{ref: P=>{x===a.active&&(h.value=P)},src:f,show:e.show,active:a.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:a.rootWidth,rootHeight:a.rootHeight,disableZoom:a.disableZoom,doubleScale:e.doubleScale,closeOnClickImage:e.closeOnClickImage,closeOnClickOverlay:e.closeOnClickOverlay,vertical:e.vertical,onScale:p,onClose:S,onLongPress:()=>l("longPress",{index:x})},{image:i.image}))]}),r=()=>{if(e.closeable)return n(ne,{role:"button",name:e.closeIcon,class:[le("close-icon",e.closeIconPosition),je],onClick:S},null)},b=()=>l("closed"),w=(f, x)=>{var P;return(P=t.value)==null?void 0:P.swipeTo(f,x)};return re({resetScale:()=>{var f;(f=h.value)==null||f.resetScale()},swipeTo:w}),xe(y),H([Ye,Le],y),H(()=>e.startPosition, f=>o(+f)),H(()=>e.show, f=>{const{images:x,startPosition:P}=e;f?(o(+P),ye(()=>{y(),w(+P,{immediate:!0})})):l("close",{index:a.active,url:x[a.active]})}),()=>n(qe,Pe({class:[le(),e.className],overlayClass:[le("overlay"),e.overlayClass],onClosed:b,"onUpdate:show":_},ve(e,na)),{default:()=>[r(),V(),s(),m()]})}});let we;const ia={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function sa(){({instance:we}=gt({setup(){const{state:e,toggle:l}=ht(),i=()=>{e.images=[]};return()=>n(tt,Pe(e,{onClosed:i,"onUpdate:show":l}),null)}}))}const ra=(e, l=0)=>{if(mt)return we||sa(),e=Array.isArray(e)?{images:e,startPosition:l}:e,we.open(be({},ia,e)),we};te(tt);const[De,ca]=K("space"),ua={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function at(e=[]){const l=[];return e.forEach(i=>{Array.isArray(i)?l.push(...i):i.type===ie?l.push(...at(i.children)):l.push(i)}),l.filter(i=>{var t;return!(i&&(i.type===wt||i.type===ie&&((t=i.children)==null?void 0:t.length)===0||i.type===bt&&i.children.trim()===""))})}var da=q({name:De,props:ua,setup(e, {slots:l}){const i=M(()=>{var a;return(a=e.align)!=null?a:e.direction==="horizontal"?"center":""}),t= a=>typeof a=="number"?a+"px":a,h= a=>{const y={},p=`${t(Array.isArray(e.size)?e.size[0]:e.size)}`,_=`${t(Array.isArray(e.size)?e.size[1]:e.size)}`;return a?e.wrap?{marginBottom:_}:{}:(e.direction==="horizontal"&&(y.marginRight=p),(e.direction==="vertical"||e.wrap)&&(y.marginBottom=_),y)};return()=>{var a;const y=at((a=l.default)==null?void 0:a.call(l));return n("div",{class:[ca({[e.direction]:e.direction,[`align-${i.value}`]:i.value,wrap:e.wrap,fill:e.fill})]},[y.map((p, _)=>n("div",{key:`item-${_}`,class:`${De}-item`,style:h(_===y.length-1)},[p]))])}}});const va=te(da),[fa,O,ma]=K("uploader");function Ve(e, l){return new Promise(i=>{if(l==="file"){i();return}const t=new FileReader;t.onload= h=>{i(h.target.result)},l==="dataUrl"?t.readAsDataURL(e):l==="text"&&t.readAsText(e)})}function ot(e, l){return Ke(e).some(i=>i.file?yt(l)?l(i.file):i.file.size>+l:!1)}function ga(e, l){const i=[],t=[];return e.forEach(h=>{ot(h,l)?t.push(h):i.push(h)}),{valid:i,invalid:t}}const ha=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,wa= e=>ha.test(e);function nt(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?wa(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var ba=q({props:{name:se,item:de(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e, {emit:l,slots:i}){const t=()=>{const{status:o,message:s}=e.item;if(o==="uploading"||o==="failed"){const m=o==="failed"?n(ne,{name:"close",class:O("mask-icon")},null):n(Ze,{class:O("loading")},null),c=pt(s)&&s!=="";return n("div",{class:O("mask")},[m,c&&n("div",{class:O("mask-message")},[s])])}},h= o=>{const{name:s,item:m,index:c,beforeDelete:I}=e;o.stopPropagation(),Ge(I,{args:[m,{name:s,index:c}],done:()=>l("delete")})},a=()=>l("preview"),y=()=>l("reupload"),p=()=>{if(e.deletable&&e.item.status!=="uploading"){const o=i["preview-delete"];return n("div",{role:"button",class:O("preview-delete",{shadow:!o}),tabindex:0,"aria-label":ma("delete"),onClick:h},[o?o():n(ne,{name:"cross",class:O("preview-delete-icon")},null)])}},_=()=>{if(i["preview-cover"]){const{index:o,item:s}=e;return n("div",{class:O("preview-cover")},[i["preview-cover"](be({index:o},s))])}},S=()=>{const{item:o,lazyLoad:s,imageFit:m,previewSize:c,reupload:I}=e;return nt(o)?n(ke,{fit:m,src:o.objectUrl||o.content||o.url,class:O("preview-image"),width:Array.isArray(c)?c[0]:c,height:Array.isArray(c)?c[1]:c,lazyLoad:s,onClick:I?y:a},{default:_}):n("div",{class:O("file"),style:Je(e.previewSize)},[n(ne,{class:O("file-icon"),name:"description"},null),n("div",{class:[O("file-name"),"van-ellipsis"]},[o.file?o.file.name:o.url]),_()])};return()=>n("div",{class:O("preview")},[S(),t(),p()])}});const ya={name:G(""),accept:ee("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:G(1/0),imageFit:ee("cover"),resultType:ee("dataUrl"),uploadIcon:ee("photograph"),uploadText:String,deletable:F,reupload:Boolean,afterRead:Function,showUpload:F,modelValue:We(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:F,previewOptions:Object,previewFullImage:F,maxSize:{type:[Number,String,Function],default:1/0}};var pa=q({name:fa,props:ya,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e, {emit:l,slots:i}){const t=U(),h=[],a=U(-1),y=U(!1),p=(u=e.modelValue.length)=>({name:e.name,index:u}),_=()=>{t.value&&(t.value.value="")},S= u=>{if(_(),ot(u,e.maxSize))if(Array.isArray(u)){const g=ga(u,e.maxSize);if(u=g.valid,l("oversize",g.invalid,p()),!u.length)return}else{l("oversize",u,p());return}if(u=me(u),a.value>-1){const g=[...e.modelValue];g.splice(a.value,1,u),l("update:modelValue",g),a.value=-1}else l("update:modelValue",[...e.modelValue,...Ke(u)]);e.afterRead&&e.afterRead(u,p())},o= u=>{const{maxCount:g,modelValue:R,resultType:T}=e;if(Array.isArray(u)){const E=+g-R.length;u.length>E&&(u=u.slice(0,E)),Promise.all(u.map(Y=>Ve(Y,T))).then(Y=>{const ae=u.map((oe, d)=>{const C={file:oe,status:"",message:"",objectUrl:URL.createObjectURL(oe)};return Y[d]&&(C.content=Y[d]),C});S(ae)})}else Ve(u,T).then(E=>{const Y={file:u,status:"",message:"",objectUrl:URL.createObjectURL(u)};E&&(Y.content=E),S(Y)})},s= u=>{const{files:g}=u.target;if(e.disabled||!g||!g.length)return;const R=g.length===1?g[0]:[].slice.call(g);if(e.beforeRead){const T=e.beforeRead(R,p());if(!T){_();return}if(Ct(T)){T.then(E=>{o(E||R)}).catch(_);return}}o(R)};let m;const c=()=>l("closePreview"),I= u=>{if(e.previewFullImage){const g=e.modelValue.filter(nt),R=g.map(T=>(T.objectUrl&&!T.url&&T.status!=="failed"&&(T.url=T.objectUrl,h.push(T.url)),T.url)).filter(Boolean);m=ra(be({images:R,startPosition:g.indexOf(u),onClose:c},e.previewOptions))}},V=()=>{m&&m.close()},r=(u, g)=>{const R=e.modelValue.slice(0);R.splice(g,1),l("update:modelValue",R),l("delete",u,p(g))},b= u=>{y.value=!0,a.value=u,ye(()=>L())},w=()=>{y.value||(a.value=-1),y.value=!1},f=(u, g)=>{const R=["imageFit","deletable","reupload","previewSize","beforeDelete"],T=be(ve(e,R),ve(u,R,!0));return n(ba,Pe({item:u,index:g,onClick:()=>l(e.reupload?"clickReupload":"clickPreview",u,p(g)),onDelete:()=>r(u,g),onPreview:()=>I(u),onReupload:()=>b(g)},ve(e,["name","lazyLoad"]),T),ve(i,["preview-cover","preview-delete"]))},x=()=>{if(e.previewImage)return e.modelValue.map(f)},P= u=>l("clickUpload",u),A=()=>{const u=e.modelValue.length<+e.maxCount,g=e.readonly?null:n("input",{ref:t,type:"file",class:O("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&a.value===-1,disabled:e.disabled,onChange:s,onClick:w},null);return i.default?ze(n("div",{class:O("input-wrapper"),onClick:P},[i.default(),g]),[[Re,u]]):ze(n("div",{class:O("upload",{readonly:e.readonly}),style:Je(e.previewSize),onClick:P},[n(ne,{name:e.uploadIcon,class:O("upload-icon")},null),e.uploadText&&n("span",{class:O("upload-text")},[e.uploadText]),g]),[[Re,e.showUpload&&u]])},L=()=>{t.value&&!e.disabled&&t.value.click()};return Xe(()=>{h.forEach(u=>URL.revokeObjectURL(u))}),re({chooseFile:L,reuploadFile:b,closeImagePreview:V}),_t(()=>e.modelValue),()=>n("div",{class:O()},[n("div",{class:O("wrapper",{disabled:e.disabled})},[x(),A()])])}});const _a=te(pa);const Ca={class:"app tabBar-app"},Sa={key:0,class:"image-info"},xa={class:"image-info-form"},Pa={key:1,class:"image-info"},ka={class:"image-info-form"},Ia={style:{margin:"16px"}},Ta={style:{margin:"16px"}},za={__name:"upload",setup(e){const l=U([]);let i=U(!1),t=U(""),h=U(null);const a=async o=>{const m=(Array.isArray(o)?o:[o]).map(c=>new Promise((I, V)=>{if(c.type==="image/webp"){console.log("有webp图片");const r=new FileReader;r.onload=function(b){const w=new Image;w.onload=function(){const f=document.createElement("canvas");f.width=w.width,f.height=w.height,f.getContext("2d").drawImage(w,0,0,w.width,w.height),f.toBlob(P=>{const A=new File([P],c.name.replace(".webp",".jpg"),{type:"image/jpeg"});console.log("Conversion successful, new file:",A),Ce.showTips("已将webp自动转为jpg","success"),A.tags=[],I(A)},"image/jpeg",.92)},w.onerror=()=>{console.error("Image load error"),V(new Error("Image load error"))},w.src=b.target.result},r.onerror=()=>{console.error("FileReader error"),V(new Error("FileReader error"))},r.readAsDataURL(c)}else c.tags=[],I(c)}));return Promise.all(m).then(c=>(console.log("All files processed:",c),c)).catch(c=>{throw console.error("Error processing files:",c),c})},y= o=>{i.value=!0,h.value=o},p=()=>{let o=t.value;if(!o){i.value=!1;return}let s=l.value[h.value];o.split(" ").forEach(c=>{s.file.tags.push(c)}),i.value=!1},_=(o, s)=>{l.value[o].file.tags.splice(s,1),It(l)};H(i,(o, s)=>{o||(t.value="")});const S=()=>{l.value.forEach(s=>{let m=new FormData;m.append("file",s.file),s.file.tags&&s.file.tags.forEach(c=>{m.append("tags",c)}),Ce.uploadToServer({url:"/resourceFile/add",params:m,success: c=>{console.log("上传成功"),Ce.showTips("上传成功","success"),xt.push("/album")},fail: c=>{console.log("上传失败"),console.log(c.msg)}})})};return(o, s)=>{const m=Rt,c=Qt,I=ne,V=_a,r=Wt,b=Tt,w=Pt,f=va,x=Bt,P=$t,A=ke,L=Nt,u=qe;return J(),Q(ie,null,[n(m,{title:"上传","left-text":"","right-text":"","left-arrow":"",onClickLeft:s[0]||(s[0]=()=>{}),onClickRight:s[1]||(s[1]=()=>{})}),ue("div",Ca,[n(c,{"content-position":"center"},{default:z(()=>[Z("选择上传图片")]),_:1}),n(V,{class:"upload-group",modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]= g=>l.value=g),multiple:"",beforeRead:a,"max-hotCount":10},{default:z(()=>[n(I,{class:"upload-icon",name:"photograph"})]),_:1},8,["modelValue"]),l.value.length>0?(J(),Q("div",Sa,[n(c,{"content-position":"center"},{default:z(()=>[Z("统一标签设置")]),_:1}),ue("div",xa,[n(P,null,{default:z(()=>[n(x,{label:"标签"},{input:z(()=>[n(f,{wrap:"",size:[10,6]},{default:z(()=>[(J(),Q(ie,null,_e(6,(g, R)=>ue("div",null,[n(b,null,{content:z(()=>[n(I,{name:"cross",class:"badge-icon",onClick: T=>_(R)},null,8,["onClick"])]),default:z(()=>[n(r,{class:"tag bottom",plain:"",type:"primary"},{default:z(()=>[Z("hhhh")]),_:1})]),_:2},1024)])),64)),n(w,{class:"bottom",size:"mini",icon:"add"},{default:z(()=>[Z("选择")]),_:1}),n(w,{class:"bottom",size:"mini",icon:"edit",onClick:s[3]||(s[3]= g=>y(o.tagIndex))},{default:z(()=>[Z("输入 ")]),_:1})]),_:1})]),_:1})]),_:1})])])):$e("",!0),l.value.length>0?(J(),Q("div",Pa,[n(c,{"content-position":"center"},{default:z(()=>[Z("独立标签设置")]),_:1}),(J(!0),Q(ie,null,_e(l.value,(g, R)=>(J(),Q("div",ka,[n(L,{onSubmit:s[4]||(s[4]=()=>{})},{default:z(()=>[n(P,null,{default:z(()=>[n(x,{label:"图片"+(R+1)},{input:z(()=>[n(A,{class:"image",fit:"cover",src:g.objectUrl},null,8,["src"])]),_:2},1032,["label"]),n(x,{label:"标签"},{input:z(()=>[n(f,{wrap:"",size:[10,6]},{default:z(()=>[(J(!0),Q(ie,null,_e(g.file.tags,(T, E)=>(J(),Q("div",null,[n(b,null,{content:z(()=>[n(I,{name:"cross",class:"badge-icon",onClick: Y=>_(R,E)},null,8,["onClick"])]),default:z(()=>[n(r,{class:"tag bottom",plain:"",type:"primary"},{default:z(()=>[Z(kt(T),1)]),_:2},1024)]),_:2},1024)]))),256)),n(w,{class:"bottom",size:"mini",icon:"add"},{default:z(()=>[Z("选择")]),_:1}),n(w,{class:"bottom",size:"mini",icon:"edit",onClick: T=>y(R)},{default:z(()=>[Z("输入 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),256)),ue("div",Ia,[n(w,{round:"",block:"",type:"primary",onClick:S},{default:z(()=>[Z(" 提交 ")]),_:1})])])):$e("",!0),n(u,{show:Be(i),"onUpdate:show":s[6]||(s[6]= g=>Ae(i)?i.value=g:i=g),position:"bottom",style:{height:"25%"}},{default:z(()=>[n(L,null,{default:z(()=>[n(c,{"content-position":"center"},{default:z(()=>[Z("自定义标签")]),_:1}),n(P,{inset:""},{default:z(()=>[n(x,{modelValue:Be(t),"onUpdate:modelValue":s[5]||(s[5]= g=>Ae(t)?t.value=g:t=g),label:"标签名",placeholder:"使用空格分隔多个标签"},null,8,["modelValue"])]),_:1})]),_:1}),ue("div",Ta,[n(w,{round:"",block:"",type:"primary",onClick:p},{default:z(()=>[Z(" 添加 ")]),_:1})])]),_:1},8,["show"]),n(zt,{active:"upload"})])],64)}}},Da=St(za,[["__scopeId","data-v-e7b11461"]]);export{Da as default};
