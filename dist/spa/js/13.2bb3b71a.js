(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{e99d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[a("q-page-container",[a("Family")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.adevent?a("q-page",{attrs:{padding:""}},[a("EventMarkDown",{attrs:{data:t.adevent}})],1):t._e()},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"text-white"},[a("q-bar",[a("q-btn",{attrs:{flat:"",icon:"keyboard_arrow_left"},on:{click:function(e){return t.$router.go(-1)}}},[a("q-tooltip",{attrs:{"content-class":"text-primary"}},[t._v("Close")])],1),a("q-space")],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-markdown",{attrs:{src:t.markdown}})],1),a("q-bar",[a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{dense:"",flat:"",label:"닫기"},on:{click:function(e){return t.$router.go(-1)}}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1)],1)},l=[],i="### 우리가족\r\n\r\n우리가족에 대한 광고\r\n",d={name:"Consent",data(){return{markdown:i}},props:{data:{type:Object,required:!0}},mounted(){}},p=d,u=a("2877"),m=a("f09f"),v=a("d847"),w=a("9c40"),f=a("05c0"),q=a("2c91"),b=a("a370"),k=a("7f67"),_=a("eebe"),g=a.n(_),C=Object(u["a"])(p,c,l,!1,null,null,null),h=C.exports;g()(C,"components",{QCard:m["a"],QBar:v["a"],QBtn:w["a"],QTooltip:f["a"],QSpace:q["a"],QCardSection:b["a"]}),g()(C,"directives",{ClosePopup:k["a"]});var Q={name:"Family",components:{EventMarkDown:h},data(){return{adevent:{src:"../../markdown/adevent/01.우리가족.md"}}}},y=Q,E=a("9989"),x=Object(u["a"])(y,o,s,!1,null,null,null),$=x.exports;g()(x,"components",{QPage:E["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.adevent?a("q-page",{attrs:{padding:""}},[a("EventMarkDown",{attrs:{data:t.adevent}})],1):t._e()},M=[],O={name:"Woman",components:{EventMarkDown:h},data:()=>({adevent:{src:"../../markdown/adevent/02.생리통.md"}})},D=O,P=Object(u["a"])(D,j,M,!1,null,null,null),F=P.exports;g()(P,"components",{QPage:E["a"]});var B={name:"EventMain",components:{Family:$,ChildGrowth:$,Woman:F}},J=B,S=a("4d5a"),W=a("09e3"),G=Object(u["a"])(J,n,r,!1,null,null,null);e["default"]=G.exports;g()(G,"components",{QLayout:S["a"],QPageContainer:W["a"]})}}]);