import{c as s,d as f,p,an as h,n as b,t as k,a as o,Y as m,ao as x,I as v,ap as B,w as T}from"./index-4083dc3e.js";const[D,i]=s("nav-bar"),w={title:String,fixed:Boolean,zIndex:b,border:k,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:k};var I=f({name:D,props:w,emits:["clickLeft","clickRight"],setup(a,{emit:d,slots:n}){const u=p(),r=h(u,i),g=t=>{a.leftDisabled||d("clickLeft",t)},l=t=>{a.rightDisabled||d("clickRight",t)},R=()=>n.left?n.left():[a.leftArrow&&o(v,{class:i("arrow"),name:"arrow-left"},null),a.leftText&&o("span",{class:i("text")},[a.leftText])],P=()=>n.right?n.right():o("span",{class:i("text")},[a.rightText]),e=()=>{const{title:t,fixed:L,border:z,zIndex:H}=a,K=B(H),J=a.leftArrow||a.leftText||n.left,c=a.rightText||n.right;return o("div",{ref:u,style:K,class:[i({fixed:L}),{[x]:z,"van-safe-area-top":a.safeAreaInsetTop}]},[o("div",{class:i("content")},[J&&o("div",{class:[i("left",{disabled:a.leftDisabled}),a.clickable&&!a.leftDisabled?m:""],onClick:g},[R()]),o("div",{class:[i("title"),"van-ellipsis"]},[n.title?n.title():t]),c&&o("div",{class:[i("right",{disabled:a.rightDisabled}),a.clickable&&!a.rightDisabled?m:""],onClick:l},[P()])])])};return()=>a.fixed&&a.placeholder?r(e):e()}});const C=T(I),y=[[{Hiragana:"あ",Katakana:"ア",Romanization:"a",audio:"/JPL/audio/kana/あ.mp3"},{Hiragana:"い",Katakana:"イ",Romanization:"i",audio:"/JPL/audio/kana/い.mp3"},{Hiragana:"う",Katakana:"ウ",Romanization:"u",audio:"/JPL/audio/kana/う.mp3"},{Hiragana:"え",Katakana:"エ",Romanization:"e",audio:"/JPL/audio/kana/え.mp3"},{Hiragana:"お",Katakana:"オ",Romanization:"o",audio:"/JPL/audio/kana/お.mp3"}],[{Hiragana:"か",Katakana:"カ",Romanization:"ka",audio:"/JPL/audio/kana/か.mp3"},{Hiragana:"き",Katakana:"キ",Romanization:"ki",audio:"/JPL/audio/kana/き.mp3"},{Hiragana:"く",Katakana:"ク",Romanization:"ku",audio:"/JPL/audio/kana/く.mp3"},{Hiragana:"け",Katakana:"ケ",Romanization:"ke",audio:"/JPL/audio/kana/け.mp3"},{Hiragana:"こ",Katakana:"コ",Romanization:"ko",audio:"/JPL/audio/kana/こ.mp3"}],[{Hiragana:"さ",Katakana:"サ",Romanization:"sa",audio:"/JPL/audio/kana/さ.mp3"},{Hiragana:"し",Katakana:"シ",Romanization:"shi",audio:"/JPL/audio/kana/し.mp3"},{Hiragana:"す",Katakana:"ス",Romanization:"su",audio:"/JPL/audio/kana/す.mp3"},{Hiragana:"せ",Katakana:"セ",Romanization:"se",audio:"/JPL/audio/kana/せ.mp3"},{Hiragana:"そ",Katakana:"ソ",Romanization:"so",audio:"/JPL/audio/kana/そ.mp3"}],[{Hiragana:"た",Katakana:"タ",Romanization:"ta",audio:"/JPL/audio/kana/た.mp3"},{Hiragana:"ち",Katakana:"チ",Romanization:"chi",audio:"/JPL/audio/kana/ち.mp3"},{Hiragana:"つ",Katakana:"ツ",Romanization:"tsu",audio:"/JPL/audio/kana/つ.mp3"},{Hiragana:"て",Katakana:"テ",Romanization:"te",audio:"/JPL/audio/kana/て.mp3"},{Hiragana:"と",Katakana:"ト",Romanization:"to",audio:"/JPL/audio/kana/と.mp3"}],[{Hiragana:"な",Katakana:"ナ",Romanization:"na",audio:"/JPL/audio/kana/な.mp3"},{Hiragana:"に",Katakana:"ニ",Romanization:"ni",audio:"/JPL/audio/kana/に.mp3"},{Hiragana:"ぬ",Katakana:"ヌ",Romanization:"nu",audio:"/JPL/audio/kana/ぬ.mp3"},{Hiragana:"ね",Katakana:"ネ",Romanization:"ne",audio:"/JPL/audio/kana/ね.mp3"},{Hiragana:"の",Katakana:"ノ",Romanization:"no",audio:"/JPL/audio/kana/の.mp3"}],[{Hiragana:"は",Katakana:"ハ",Romanization:"ha",audio:"/JPL/audio/kana/は.mp3"},{Hiragana:"ひ",Katakana:"ヒ",Romanization:"hi",audio:"/JPL/audio/kana/ひ.mp3"},{Hiragana:"ふ",Katakana:"フ",Romanization:"fu",audio:"/JPL/audio/kana/ふ.mp3"},{Hiragana:"へ",Katakana:"ヘ",Romanization:"he",audio:"/JPL/audio/kana/へ.mp3"},{Hiragana:"ほ",Katakana:"ホ",Romanization:"ho",audio:"/JPL/audio/kana/ほ.mp3"}],[{Hiragana:"ま",Katakana:"マ",Romanization:"ma",audio:"/JPL/audio/kana/ま.mp3"},{Hiragana:"み",Katakana:"ミ",Romanization:"mi",audio:"/JPL/audio/kana/み.mp3"},{Hiragana:"む",Katakana:"ム",Romanization:"mu",audio:"/JPL/audio/kana/む.mp3"},{Hiragana:"め",Katakana:"メ",Romanization:"me",audio:"/JPL/audio/kana/め.mp3"},{Hiragana:"も",Katakana:"モ",Romanization:"mo",audio:"/JPL/audio/kana/も.mp3"}],[{Hiragana:"や",Katakana:"ヤ",Romanization:"ya",audio:"/JPL/audio/kana/や.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/や.mp3"},{Hiragana:"ゆ",Katakana:"ユ",Romanization:"yu",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"よ",Katakana:"ヨ",Romanization:"yo",audio:"/JPL/audio/kana/よ.mp3"}],[{Hiragana:"ら",Katakana:"ラ",Romanization:"ra",audio:"/JPL/audio/kana/ら.mp3"},{Hiragana:"り",Katakana:"リ",Romanization:"ri",audio:"/JPL/audio/kana/り.mp3"},{Hiragana:"る",Katakana:"ル",Romanization:"ru",audio:"/JPL/audio/kana/る.mp3"},{Hiragana:"れ",Katakana:"レ",Romanization:"re",audio:"/JPL/audio/kana/れ.mp3"},{Hiragana:"ろ",Katakana:"ロ",Romanization:"ro",audio:"/JPL/audio/kana/ろ.mp3"}],[{Hiragana:"わ",Katakana:"ワ",Romanization:"wa",audio:"/JPL/audio/kana/わ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"を",Katakana:"ヲ",Romanization:"wo",audio:"/JPL/audio/kana/を.mp3"}],[{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"",Katakana:"",Romanization:"",audio:"/JPL/audio/kana/ゆ.mp3"},{Hiragana:"ん",Katakana:"ン",Romanization:"n",audio:"/JPL/audio/kana/ん.mp3"}]];export{C as N,y as k};
