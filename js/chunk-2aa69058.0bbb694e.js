(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aa69058"],{1681:function(t,e,a){},"4bd4":function(t,e,a){"use strict";var s=a("58df"),i=a("7e2b"),o=a("3206");e["a"]=Object(s["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},9600:function(t,e,a){t.exports=a.p+"img/bg_image1.d6c0bce1.png"},b691:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-contacts"},[s("img",{attrs:{alt:"Главная",src:a("9600")}}),s("div",{staticClass:"main-home"},[s("div",{staticClass:"home"},[s("div",{staticClass:"order-blur"}),s("div",{staticClass:"blue-blur"}),t._m(0),s("v-form",{ref:"form",staticClass:"pt-8 main-form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title"},[t._v("YOUR NAME")])]),s("v-text-field",{attrs:{outlined:"",rules:t.nameRules,placeholder:"Your real name",color:"#fff","append-icon":t.formData.name.length?"":"mdi-asterisk"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title"},[t._v("HOW CAN WE CONTACT YOU?")])]),s("v-text-field",{attrs:{outlined:"",rules:t.nameRules,placeholder:"Telegram, Discord, Whatsapp, etc..",color:"#fff","append-icon":t.formData.contact.length?"":"mdi-asterisk"},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title"},[t._v("FACEIT PROFILE LINK")])]),s("v-text-field",{attrs:{outlined:"",rules:t.nameRules,placeholder:"https://www.faceit.com/en/players/slightlyboss",color:"#fff","append-icon":t.formData.faceit.length?"":"mdi-asterisk"},model:{value:t.formData.faceit,callback:function(e){t.$set(t.formData,"faceit",e)},expression:"formData.faceit"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title"},[t._v("STEAM PROFILE LINK")])]),s("v-text-field",{attrs:{outlined:"",rules:t.nameRules,placeholder:"https://steamcommunity.com/id/slightlyboss",color:"#fff","append-icon":t.formData.steam.length?"":"mdi-asterisk"},model:{value:t.formData.steam,callback:function(e){t.$set(t.formData,"steam",e)},expression:"formData.steam"}})],1),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title pr-2"},[t._v("HOW MUCH TIME CAN U DEVOTE TO THE GAME?")]),s("element-tooltip",{attrs:{text:t.tooltipFirst}})],1),s("v-text-field",{attrs:{outlined:"",rules:t.nameRules,placeholder:"Your work time in hours",color:"#fff","append-icon":t.formData.workTime.length?"":"mdi-asterisk"},model:{value:t.formData.workTime,callback:function(e){t.$set(t.formData,"workTime",e)},expression:"formData.workTime"}})],1),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"job-title"},[s("div",{staticClass:"award-title pr-2"},[t._v("TELL US ABOUT YOURSELF")]),s("element-tooltip",{attrs:{text:t.tooltipSecond}})],1),s("v-textarea",{attrs:{outlined:"",rules:t.nameRules,placeholder:"Country, experience, any other information about you..",color:"#fff","auto-grow":"","append-icon":t.formData.aboutYou.length?"":"mdi-asterisk"},model:{value:t.formData.aboutYou,callback:function(e){t.$set(t.formData,"aboutYou",e)},expression:"formData.aboutYou"}})],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[s("v-btn",{staticClass:"main-btn",attrs:{rounded:"","x-large":"",dark:"",type:"submit"}},[s("span",{staticClass:"main-btn-text justify-center"},[t._v(" SUBMIT ")])])],1)],1)],1)],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-content"},[a("h1",{staticClass:"slider-title"},[t._v("APPLY FOR JOB")])])}],o=a("ccdb"),r={name:"job",components:{ElementTooltip:o["a"]},data(){return{valid:!0,peerId1:5634750271,peerId2:825901593,message:"test",tooltipFirst:"Tell how much hours you<br/> can spend in the game<br/> (ex. 4,6,8,12 or more...)",tooltipSecond:"Any other information<br/> about you, experience in<br/> CS:GO, country etc...",formData:{name:"",contact:"",faceit:"",steam:"",workTime:"",aboutYou:""},nameRules:[t=>t.length>=1||"This field required!"],index:0,currentIndex:0}},methods:{async onSubmit(){if(this.$refs.form.validate())try{console.log("valid")}catch(t){console.log(t)}}}},l=r,n=a("2877"),c=a("6544"),d=a.n(c),u=a("8336"),m=a("62ad"),h=a("4bd4"),p=a("0fd9"),f=a("8654"),v=(a("1681"),a("58df"));const b=Object(v["a"])(f["a"]);var g=b.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...f["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=f["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){f["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),w=Object(n["a"])(l,s,i,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:u["a"],VCol:m["a"],VForm:h["a"],VRow:p["a"],VTextField:f["a"],VTextarea:g})},ccdb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!1===t.other?a("div",{staticClass:"tooltip"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-list-item-content",t._g(t._b({},"v-list-item-content",i,!1),s),[a("v-list-item-title",[a("div",{staticClass:"lil-i"},[a("span",{staticClass:"lil-pt"},[t._v("i")])])])],1)]}}],null,!1,1495028298)},[a("span",{domProps:{innerHTML:t._s(t.text)}})])],1):a("div",[a("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-list-item-content",t._g(t._b({},"v-list-item-content",i,!1),s),[a("v-list-item-title",[a("span",[t._v(t._s(t.oppId))]),a("v-icon",{staticClass:"pl-2",attrs:{"x-small":"",color:"grey lighten-1"}},[t._v(" mdi-content-copy ")])],1)],1)]}}])},[a("span",{domProps:{innerHTML:t._s(t.text)}})])],1)},i=[],o={name:"ElementTooltip",props:{text:{type:String,required:!0},other:{type:Boolean,default:!1},oppId:{type:Number,default:0}},data(){return{i:0,index:0,data:{}}},methods:{checkIndex(t){let e;this.index=t+1,e=this.eloFrom?"from":"to",this.data={index:t,way:e},this.$emit("setLvl",this.data)}}},r=o,l=a("2877"),n=a("6544"),c=a.n(n),d=a("132d"),u=a("5d23"),m=a("3a2f"),h=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=h.exports;c()(h,{VIcon:d["a"],VListItemContent:u["a"],VListItemTitle:u["b"],VTooltip:m["a"]})}}]);
//# sourceMappingURL=chunk-2aa69058.0bbb694e.js.map