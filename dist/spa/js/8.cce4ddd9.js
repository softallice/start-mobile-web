(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0fa8":function(t,s,e){"use strict";(function(t){e("e6cf");var a=e("bc3a"),o=e.n(a),l=e("d4cd"),n=e.n(l);const i=e("3ffa"),r=e("a072");e("416b"),e("8009"),e("f474");const u=(new n.a).use(i).use(r,{plugins:["command-line"],defaultLanguage:"javascript"});s["a"]={name:"EditPost",data(){return{post:this.$route.params.post}},methods:{onSubmit(t){console.log(t)},async getPost(s){const e=await o.a.get(`${t.env.API_URL}/posts/${this.$route.params.key}`);this.post=e.data.post},mdIt(t){return u.render(t)}},created(){this.post||this.getPost(this.postKey)}}}).call(this,e("4362"))},"616d":function(t,s,e){"use strict";e("fda2")},df23:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-ma-lg"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[e("h2",[t._v("Post Details")]),e("q-input",{staticClass:"post-details-input",attrs:{filled:"",label:"Key (url slug) *","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.post.key,callback:function(s){t.$set(t.post,"key",s)},expression:"post.key"}}),e("q-input",{staticClass:"post-details-input",attrs:{filled:"",label:"Title *","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.post.title,callback:function(s){t.$set(t.post,"title",s)},expression:"post.title"}}),e("q-input",{staticClass:"post-details-input",attrs:{filled:"",label:"Description *",type:"textarea",rows:"2","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type something"}]},model:{value:t.post.description,callback:function(s){t.$set(t.post,"description",s)},expression:"post.description"}}),e("h2",[t._v("Post Body")]),e("div",{staticClass:"row q-ma-lg"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{filled:"",type:"textarea",autogrow:""},model:{value:t.post.body,callback:function(s){t.$set(t.post,"body",s)},expression:"post.body"}})],1),e("div",{staticClass:"col bg-grey-1 q-ml-sm",domProps:{innerHTML:t._s(t.mdIt(t.post.body))}})]),e("div",[e("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)],1)],1)},o=[],l=e("0fa8"),n=l["a"],i=(e("616d"),e("2877")),r=e("0378"),u=e("27f9"),c=e("9c40"),p=e("eebe"),d=e.n(p),f=Object(i["a"])(n,a,o,!1,null,null,null);s["default"]=f.exports;d()(f,"components",{QForm:r["a"],QInput:u["a"],QBtn:c["a"]})},fda2:function(t,s,e){}}]);