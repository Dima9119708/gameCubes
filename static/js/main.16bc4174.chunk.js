(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{120:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),i=a.n(r),l=a(9),o=a.n(l),c=(a(120),a(121),a(197)),s=a(100),u=new(a.n(s).a),d=function(){return Object(n.jsx)(c.a,{onClick:function(){u.emit("START",!1),u.emit("SCORE","reset"),u.emit("TIMER","reset"),u.emit("RANDOM_ELEM",!0)},style:{fontSize:20,height:40},type:"default",children:"New Game"})},m=a(19),h=function(){var e=i.a.useState(!0),t=Object(m.a)(e,2),a=t[0],r=t[1];i.a.useEffect((function(){u.on("START",(function(e){return r(e)}))}),[]);var l=function(e){"start"===e?(r(!1),u.emit("START",!1),u.emit("TIMER","start")):(r(!0),u.emit("START",!0),u.emit("TIMER","pause"))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(c.a,{onClick:function(e){return l("start")},style:{display:a?"inline-block":"none",marginRight:20,fontSize:20,height:40},type:"primary",children:"Start"}),Object(n.jsx)(c.a,{onClick:function(e){return l("pause")},style:{display:a?"none":"inline-block",marginRight:20,fontSize:20,height:40},danger:!0,children:"Pause"})]})},j=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","WhiteSmoke","Yellow","YellowGreen"],f={2:["paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","tan","teal","thistle","tomato","turquoise","violet","whitesmoke","yellow","yellowgreen"],4:["oldlace","olive","olivedrab","orange"],6:["aliceblue","antiquewhite","aqua"],10:["gold"]},b=[10,20,30],O=function(){return new Array(v).fill("")},g=function(){for(var e=[],t=O(),a=0;a<y;a++)e.push(Math.floor(Math.random()*t.length));return e},S=function(e,t){if(!t)return JSON.parse(window.localStorage.getItem(e));window.localStorage.setItem(e,JSON.stringify(t))},v=135,y=16,p=function(){var e=i.a.useState(!0),t=Object(m.a)(e,2),a=t[0],r=t[1],l=i.a.useState(g()),o=Object(m.a)(l,2),c=o[0],s=o[1],d=i.a.useState(c.slice(0,4)),h=Object(m.a)(d,2),S=h[0],v=h[1];i.a.useEffect((function(){u.on("START",(function(e){return r(e)})),u.on("RANDOM_ELEM",(function(){var e=g();s(e),v(e.slice(0,3))}))}),[]);return Object(n.jsxs)("div",{onClick:function(e){var t=e.target,n=t.style.backgroundColor;if(n){var r=g();s(r),v(r.slice(0,3));for(var i=0,l=Object.entries(f);i<l.length;i++){var o=Object(m.a)(l[i],2),c=o[0];o[1].includes(n)&&u.emit("SCORE",+c)}var d=+t.style.height.split("px")[0];30===d?u.emit("SCORE",3):20===d?u.emit("SCORE",6):10===d&&u.emit("SCORE",12),u.emit("SCORE",1)}else a||u.emit("SCORE",-1)},style:{position:"relative",height:530,overflow:"hidden"},children:[Object(n.jsx)("div",{className:"game__overlay",style:{display:a?"flex":"none"},children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 START"}),O().map((function(e,t){var a=Math.floor(Math.random()*j.length),r=Math.floor(Math.random()*b.length);return Object(n.jsx)("div",{style:{display:"inline-block",height:S.includes(t)?b[r]:50,width:S.includes(t)?b[r]:50,border:"2px solid #000",backgroundColor:c.includes(t)?j[a]:"",margin:2}},t+e)}))]})},k=function(){var e=i.a.useState(0),t=Object(m.a)(e,2),a=t[0],r=t[1];return i.a.useEffect((function(){u.on("SCORE",(function(e){r("reset"===e?function(e){return u.emit("SCORE__RESULT",e),0}:function(t){return t+e})}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"game__toolbar-minTitle",children:"Points"}),Object(n.jsx)("div",{className:"game__toolbar-block",children:a})]})},R=60,x=Math.floor(R/60),C=R%60,G="".concat(x,":").concat(C);x<10&&C<10&&(G="0".concat(x,":0").concat(C));var M=null,T=function(){var e=i.a.useState(G),t=Object(m.a)(e,2),a=t[0],r=t[1];return i.a.useEffect((function(){var e=function(){var e=Math.floor(R/60),t=R%60;return e<10&&r("0".concat(e,":").concat(t)),e<10&&t<10&&r("0".concat(e,":0").concat(t)),R--,function(){var e=Math.floor(R/60),t=R%60;e<10&&r("0".concat(e,":").concat(t)),e<10&&t<10&&r("0".concat(e,":0").concat(t)),R--}};u.on("TIMER",(function(t){"start"===t?M=setInterval(e(),1e3):"reset"===t?(clearInterval(M),R=60,M=setInterval(e(),1e3)):clearInterval(M)}))}),[]),i.a.useEffect((function(){"00:00"===a&&(clearInterval(M),u.emit("START",!0),u.emit("MODAL",!0),u.emit("SCORE","reset"),u.emit("RANDOM_ELEM",!0),R=60,r(G))}),[a]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"game__toolbar-minTitle",children:"Time"}),Object(n.jsxs)("div",{className:"game__toolbar-block",children:[" ",a," "]})]})},E=a(106),B=a.n(E),L=a(198),w=a(194),D=a(196),_=a(195),N=function(){var e=i.a.useState(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=i.a.useState(0),o=Object(m.a)(l,2),s=o[0],d=o[1],h=i.a.useRef(null);i.a.useEffect((function(){u.on("MODAL",(function(e){return r(e)})),u.on("SCORE__RESULT",(function(e){return d(e)}))}),[]);return Object(n.jsxs)(B.a,{open:a,"aria-labelledby":"form-dialog-title",children:[Object(n.jsxs)(L.a,{id:"form-dialog-title",children:["Your score: ",s]}),Object(n.jsx)(w.a,{children:Object(n.jsx)(D.a,{inputRef:h,autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0})}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(c.a,{onClick:function(){return r(!1)},color:"primary",children:"Close"}),Object(n.jsx)(c.a,{onClick:function(){var e=h.current.value,t=S("gameCube")?S("gameCube"):[];e?(t.push({name:e,score:s}),S("gameCube",t)):(t.push({name:"NoName",score:s}),S("gameCube",t)),u.emit("RESULT",t),r(!1)},color:"primary",children:"Save"})]})]})},A=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"game__left-block",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Game Cube"})}),Object(n.jsxs)("div",{className:"game__toolbar",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsx)(d,{})]}),Object(n.jsx)(k,{}),Object(n.jsx)(T,{})]}),Object(n.jsx)(p,{})]}),Object(n.jsx)(N,{})]})},P=function(){var e=i.a.useState(S("gameCube")?S("gameCube"):[]),t=Object(m.a)(e,2),a=t[0],r=t[1];return i.a.useEffect((function(){u.on("RESULT",(function(e){return r(e)}))}),[]),Object(n.jsx)("div",{style:{paddingTop:144},children:Object(n.jsxs)("div",{className:"game__result",children:[Object(n.jsx)("h3",{className:"game__result-title",children:"Result"}),a.map((function(e,t){return Object(n.jsxs)("div",{className:"game__result-user",children:[Object(n.jsx)("div",{className:"game__result-user-name",children:e.name}),Object(n.jsx)("div",{className:"game__result-user-score",children:e.score})]},e.name+t)}))]})})};var I=function(){return Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)(A,{}),Object(n.jsx)(P,{})]})};o.a.render(Object(n.jsx)(I,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.16bc4174.chunk.js.map