(function(e){function t(t){for(var o,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={2:0},a={2:0},i=[];function c(e){return s.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"ab1f2822",3:"7f271c30",4:"8ef55358",5:"f4735e8e",6:"565eecad",7:"f5758dd7",8:"a947cca6"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1,4:1,5:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"31d6cfe0",3:"0d562e66",4:"f38f9578",5:"f1b3b36d",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"activeTheme",(function(){return C})),n.d(o,"themes",(function(){return x}));var r={};n.r(r),n.d(r,"changeTheme",(function(){return S}));var a={};n.r(a),n.d(a,"changeTheme",(function(){return T}));n("e6cf"),n("5319"),n("e54f"),n("4848"),n("c382"),n("985d"),n("31cd");var i=n("2b0e"),c=n("1f91"),s=n("42d2"),u=n("b05d");i["a"].use(u["a"],{config:{},lang:c["a"],iconSet:s["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-img",{staticClass:"fixed-full bg-image",attrs:{"placeholder-src":e.activeTheme.bgImage,src:e.activeTheme.bgImage,ratio:16/9,"no-default-spinner":"","img-class":"filter"}}),n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",mode:"out-in"}},[e.position?n("router-view",{attrs:{content:e.position}}):e._e()],1)],1)},d=[],f=n("ded3"),m=n.n(f),p=n("2f62"),h={name:"App",created(){this.$q.dark.set(!0)},beforeMount(){this.$root.$on("onPlaceSearch",this.onLocationSearch)},mounted(){this.checkAccessDevicePosition()},data:()=>({position:null}),computed:m()({},Object(p["c"])("theme",["activeTheme"])),methods:{checkAccessDevicePosition(){this.position||navigator.geolocation&&navigator.geolocation.getCurrentPosition(this.onAccessAllowed,this.onAccessDenied)},onAccessAllowed(e){this.getCurrentLocationName(e.coords.latitude,e.coords.longitude)},onAccessDenied(e){this.getCurrentLocationName(null,null,"Barrafranca")},getCurrentLocationName(e,t,n){const o={key:"45129826589045a4a67172834201512",q:n||`${e},${t}`};this.$axios.get("https://api.weatherapi.com/v1/current.json",{params:o}).then((e=>{this.position=e.data})).catch((e=>{}))},onLocationSearch(e){e&&this.getCurrentLocationName(null,null,e)}}},g=h,v=(n("5c0b"),n("2877")),b=n("068f"),y=n("eebe"),w=n.n(y),A=Object(v["a"])(g,l,d,!1,null,null,null),P=A.exports;w()(A,"components",{QImg:b["a"]});var k=function(){return{themes:{sky:{name:"sky",primary:"#1C72B5",secondary:"#7ca5c4",dark:"#0D1A24",info:"#7dc9e0",bgImage:n("35b1"),isActive:!0},moon:{name:"moon",primary:"#C04D68",secondary:"#c28392",dark:"#382037",info:"#907894",bgImage:n("a0f6"),isActive:!1},nature:{name:"nature",primary:"#7ABA8B",secondary:"#608B84",dark:"#0F292B",info:"#BADB94",bgImage:n("5b72"),isActive:!1}}}},j=n("bc78");const{setBrand:O}=j["a"];function C(e){let t={};for(const n in e.themes)e.themes[n].isActive&&(t=e.themes[n]);return O("primary",t.primary),O("secondary",t.secondary),O("dark",t.dark),O("info",t.info),t}function x(e){let t={};for(const n in e.themes)e.themes[n].isActive||(t[n]=e.themes[n]);return t}n("ddb0");function S(e,t){for(const[n,o]of Object.entries(e.themes))e.themes[n].isActive=!1;Object.assign(e.themes[t.key],t.updates)}function T({commit:e},t){e("changeTheme",t)}var B={namespaced:!0,state:k,getters:o,mutations:r,actions:a};i["a"].use(p["a"]);var _=function(){const e=new p["a"].Store({modules:{theme:B},strict:!1});return e},L=n("8c4f");const E=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1),n.e(3)]).then(n.bind(null,"713b")),children:[{name:"Home",path:"/",icon:"home",component:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"c8e0"))},{name:"About",path:"/about",icon:"help",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"478b"))},{name:"Credits",path:"/credits",icon:"copyright",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"11a6"))},{name:"Astronomy",path:"/astronomy",icon:"nights_stay",component:()=>Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"2c88"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"e51e"))}];var D=E;i["a"].use(L["a"]);var N=function(){const e=new L["a"]({scrollBehavior:()=>({x:0,y:0}),routes:D,mode:"hash",base:""});return e},$=async function(){const e="function"===typeof _?await _({Vue:i["a"]}):_,t="function"===typeof N?await N({Vue:i["a"],store:e}):N;e.$router=t;const n={router:t,store:e,render:e=>e(P),el:"#q-app"};return{app:n,store:e,router:t}},I=n("9483");Object(I["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var q=n("bc3a"),M=n.n(q);i["a"].prototype.$axios=M.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const V="";async function F(){const{app:e,store:t,router:n}=await $();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),c=[void 0];for(let u=0;!1===o&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:n,store:t,Vue:i["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:V})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&new i["a"](e)}F()},"31cd":function(e,t,n){},"35b1":function(e,t,n){e.exports=n.p+"img/bg-sky.8822153a.jpg"},"5b72":function(e,t,n){e.exports=n.p+"img/bg-nature.edf71603.jpg"},"5c0b":function(e,t,n){"use strict";n("ffd0")},a0f6:function(e,t,n){e.exports=n.p+"img/bg-moon.0f5661b3.jpg"},ffd0:function(e,t,n){}});