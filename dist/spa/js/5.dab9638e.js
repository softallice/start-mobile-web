(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0a49":function(t,e,a){},"2c88":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.astronomy?a("q-page",{attrs:{padding:""}},[a("Astronomy",{attrs:{data:t.astronomy}})],1):t._e()},n=[],o=(a("e6cf"),a("a79d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"astronomy-weather-container row items-center"},[a("div",{staticClass:"col-12 col-md-4 offset-md-1"},[a("div",{staticClass:"flex items-center justify-center text-center no-wrap"},[a("div",[a("div",{staticClass:"text-caption text-secondary"},[t._v("\n          "+t._s(t.data.location.region)+", "+t._s(t.data.location.country)+"\n        ")]),a("div",{staticClass:"text-h4 text-primary"},[t._v("\n          "+t._s(t.data.location.name)+"\n        ")]),a("div",{staticClass:"text-subtitle1 text-info"},[t._v("\n          "+t._s(t._f("formatDate")(t.data.location.localtime_epoch))+"\n        ")])])])]),a("div",{staticClass:"col-12 col-md-4 offset-md-1"},[a("div",{staticClass:"text-h6 text-center text-uppercase text-info"},[a("q-img",{style:{filter:"brightness("+t.data.astronomy.astro.moon_illumination+"%)"},attrs:{src:t.MoonSvg,width:"50px",height:"50px","no-default-spinner":""}}),t._v("\n      "+t._s(t.data.astronomy.astro.moon_phase)+" - "+t._s(t.data.astronomy.astro.moon_illumination)+"%\n    ")],1),a("div",{staticClass:"flex items-center justify-around text-center q-py-lg"},[a("div",[a("div",{staticClass:"text-subtitle1 text-uppercase text-secondary"},[t._v("Sunrine")]),a("div",[t._v("\n          "+t._s(t.data.astronomy.astro.sunrise)+"\n        ")])]),a("div",[a("div",{staticClass:"text-subtitle1 text-uppercase text-secondary"},[t._v("Sunset")]),a("div",[t._v("\n          "+t._s(t.data.astronomy.astro.sunset)+"\n        ")])])]),a("div",{staticClass:"flex items-center justify-around text-center"},[a("div",[a("div",{staticClass:"text-subtitle1 text-uppercase text-secondary"},[t._v("Moonrise")]),a("div",[t._v("\n          "+t._s(t.data.astronomy.astro.moonrise)+"\n        ")])]),a("div",[a("div",{staticClass:"text-subtitle1 text-uppercase text-secondary"},[t._v("Moonset")]),a("div",[t._v("\n          "+t._s(t.data.astronomy.astro.moonset)+"\n        ")])])])])])}),i=[],r=a("bd4c"),c=a("e75c"),d=a.n(c),l={name:"Astronomy",props:{data:{type:Object,required:!0}},filters:{formatDate(t){return r["a"].formatDate(1e3*t,"YYYY-MM-DD hh:mm A")}},data:()=>({MoonSvg:d.a})},m=l,u=(a("2d32"),a("2877")),v=a("068f"),p=a("eebe"),y=a.n(p),x=Object(u["a"])(m,o,i,!1,null,"0259aaf4",null),f=x.exports;y()(x,"components",{QImg:v["a"]});var _={name:"IndexPage",components:{Astronomy:f},props:{content:{type:Object,required:!0}},beforeMount(){this.content&&this.content.location.name&&this.getLocationAstronomy()},data:()=>({astronomy:null}),methods:{getLocationAstronomy(){this.$root.$emit("onAPILoadingStart");const t={key:"45129826589045a4a67172834201512",q:this.content.location.name};this.$axios.get("https://api.weatherapi.com/v1/astronomy.json",{params:t}).then((t=>{this.astronomy=t.data})).catch((t=>{})).finally((()=>{this.$root.$emit("onAPILoadingEnd")}))}},watch:{content:function(t){t&&this.getLocationAstronomy()}}},h=_,g=a("9989"),b=Object(u["a"])(h,s,n,!1,null,null,null);e["default"]=b.exports;y()(b,"components",{QPage:g["a"]})},"2d32":function(t,e,a){"use strict";a("0a49")}}]);