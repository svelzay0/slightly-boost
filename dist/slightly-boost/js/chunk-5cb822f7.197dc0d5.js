(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb822f7"],{"20f6":function(t,e,i){},"36a7":function(t,e,i){},"5e23":function(t,e,i){},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("2b0e");function r(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:o}=s;if(o){s.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,r)}})}var o=i("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let r;const{attrs:a}=i;return a&&(i.attrs={},r=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),s)}})},b5b6:function(t,e,i){},dead:function(t,e,i){"use strict";i.r(e);var s=i("7496"),r=i("a523"),o=i("f6c4"),a=function(){var t=this,e=t._self._c;return e(s["a"],[e("header-menu"),e(o["a"],{staticClass:"app"},[e("scroller",{attrs:{id:"visible"}}),e(r["a"],{attrs:{fluid:""}},[e("keep-alive",[e("router-view")],1)],1)],1),e("footer-menu")],1)},n=[],l=(i("14d9"),i("8b0d"),i("5e23"),i("8dd9")),c=(i("8efc"),i("90a2")),h=(i("36a7"),i("24b2")),d=i("58df"),p=i("80d2"),u=Object(d["a"])(h["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(p["k"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),m=u,g=i("7560"),f=i("d9f7"),v=i("d9bd");const S="undefined"!==typeof window&&"IntersectionObserver"in window;var b=Object(d["a"])(m,g["a"]).extend({name:"v-img",directives:{intersect:c["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!S||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(v["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=m.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(p["k"])(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=m.options.render.call(this,t),i=Object(f["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:S?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}}),y=l["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...l["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(p["d"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(v["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(p["d"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(b,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(p["d"])(this.computedContentHeight)}},Object(p["k"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(p["d"])(this.extensionHeight)}},Object(p["k"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function O(t,e,i){const{self:s=!1}=e.modifiers||{},r=e.value,o="object"===typeof r&&r.options||{passive:!0},a="function"===typeof r||"handleEvent"in r?r:r.handler,n=s?t:e.arg?document.querySelector(e.arg):window;n&&(n.addEventListener("scroll",a,o),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:a,options:o,target:s?void 0:n})}function w(t,e,i){var s;if(!(null===(s=t._onScroll)||void 0===s?void 0:s[i.context._uid]))return;const{handler:r,options:o,target:a=t}=t._onScroll[i.context._uid];a.removeEventListener("scroll",r,o),delete t._onScroll[i.context._uid]}const _={inserted:O,unbind:w};var x=_,C=i("fe6c");function k(t,e=[]){return Object(d["a"])(Object(C["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var j=i("2b0e"),$=j["a"].extend({name:"scrollable",directives:{Scroll:_},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(v["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),T=i("d10f"),A=i("f2e7");const B=Object(d["a"])(y,$,T["a"],A["a"],k("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var E=B.extend({name:"v-app-bar",directives:{Scroll:x},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return $.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...y.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return y.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=y.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:y.options.computed.isCollapsed.call(this)},isProminent(){return y.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...y.options.computed.styles.call(this),fontSize:Object(p["d"])(this.computedFontSize,"rem"),marginTop:Object(p["d"])(this.computedMarginTop),transform:`translateY(${Object(p["d"])(this.computedTransform)})`,left:Object(p["d"])(this.computedLeft),right:Object(p["d"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=y.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=y.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),P=i("8336"),z=i("62ad"),H=i("0fd9"),L=i("b974"),R=(i("20f6"),Object(p["e"])("spacer","div","v-spacer")),I=function(){var t=this,e=t._self._c;return e(E,{attrs:{app:""}},[e(H["a"],{ref:"top-head",staticClass:"header-head-empty",attrs:{align:"center",justify:"center"}},[e(z["a"],{attrs:{cols:"12"}},[e(H["a"],{staticClass:"pt-12",attrs:{align:"center",justify:"center"}},[e(z["a"],{attrs:{cols:"auto"}},[e("div",{staticClass:"main-logo",on:{click:function(e){return t.handleSelect("home")}}},[e("div",{staticClass:"big_s"},[t._v("S")]),e("div",{staticClass:"logo"},[t._v(" LIGHTLY "),e("span",{staticClass:"pl-1"},[t._v(" BOOST ")])])])]),t.desktop?e(R):t._e(),t._l(t.links,(function(i){return e("div",{key:i.route},[t.url!==i.route?e(P["a"],{attrs:{color:"white",text:"",rounded:""},on:{click:function(e){return t.handleSelect(i.route)}}},[t._v(" "+t._s(i.url)+" ")]):e(P["a"],{attrs:{color:"#fd0000",text:"",rounded:""},on:{click:function(e){return t.handleSelect(i.route)}}},[t._v(" "+t._s(i.url)+" ")])],1)})),t.desktop?e(R):t._e(),e(z["a"],{attrs:{cols:"auto"}},[e("div",{staticClass:"money"},[e("div",{staticClass:"currency-tab"},[e(L["a"],{attrs:{items:t.paymentItems,"item-text":"text","item-value":"id",color:"red",light:"",label:"Outlined style","menu-props":"auto","hide-details":"","single-line":"",outlined:"",dense:"","return-object":""},on:{change:t.checkSelect},model:{value:t.paymentDefaultSelected,callback:function(e){t.paymentDefaultSelected=e},expression:"paymentDefaultSelected"}})],1)])])],2)],1)],1)],1)},N=[],U=i("2f62"),W={name:"HeaderMenu",data:()=>({url:"home",links:[{url:"FACEIT BOOST",route:"boost"},{url:"ACCOUNTS",route:"accounts"},{url:"CONTACTS",route:"contacts"},{url:"GET A JOB",route:"job"},{url:"FAQ",route:"faq"}],paymentDefaultSelected:{id:1,text:"€"},paymentItems:[{id:1,text:"€"},{id:2,text:"$"}]}),mounted(){window.addEventListener("scroll",this.handleScroll)},computed:{...Object(U["b"])("shared",["homeSliderIndex"]),desktop(){return this.$vuetify.breakpoint.width>600}},methods:{...Object(U["c"])("shared",["setCurrency"]),handleSelect(t){let e=null,i=null;"home"===this.url&&(e=document.querySelector(".home-bg-1"),i=document.querySelector(".home-bg-2"),e&&(e.setAttribute("style","animation: clear 0.4s infinite alternate;"),i.setAttribute("style","animation: clear 0.4s infinite alternate;"))),this.url=t,document.querySelector(".home").setAttribute("style","animation: movedown 0.4s infinite alternate;"),setTimeout(()=>(document.querySelector(".home").setAttribute("style","animation: moveup 0.4s linear alternate;"),e&&(0===this.homeSliderIndex?(e.setAttribute("style","display: block; animation: backfromclear 0.4s linear alternate; z-index: 2"),i.setAttribute("style","display: block; animation: backfromclear 0.4s linear alternate; z-index: 1")):(e.setAttribute("style","display: block; animation: backfromclear 0.4s linear alternate; z-index: 1"),i.setAttribute("style","display: block; animation: backfromclear 0.4s linear alternate; z-index: 2"))),this.$router.push({name:t})),400)},handleScroll(){window.pageYOffset<80?this.$refs["top-head"].className="row header-head-empty align-center justify-center":window.pageYOffset>79&&window.pageYOffset<140?this.$refs["top-head"].className="row header-head-semi align-center justify-center":window.pageYOffset>139&&window.pageYOffset<210?this.$refs["top-head"].className="row header-head-semi2 align-center justify-center":window.pageYOffset>209&&window.pageYOffset<280?this.$refs["top-head"].className="row header-head-semi3 align-center justify-center":window.pageYOffset>279&&window.pageYOffset<350?this.$refs["top-head"].className="row header-head-full align-center justify-center":window.pageYOffset>349&&(this.$refs["top-head"].className="row header-head-death align-center justify-center")},async checkSelect(){await this.setCurrency(this.paymentDefaultSelected)}}},Y=W,F=i("0c7c"),M=Object(F["a"])(Y,I,N,!1,null,null,null),q=M.exports,D=(i("b5b6"),Object(d["a"])(l["a"],k("footer",["height","inset"]),T["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...l["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...l["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(p["d"])(t),left:Object(p["d"])(this.computedLeft),right:Object(p["d"])(this.computedRight),bottom:Object(p["d"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})),G=function(){var t=this,e=t._self._c;return e(D,{attrs:{padless:""}},[e(H["a"],{staticClass:"foot-bg",attrs:{justify:"center","no-gutters":""}},[e(z["a"],{attrs:{cols:"12"}},[e(H["a"],{attrs:{align:"center",justify:"center"}},t._l(t.links,(function(i,s){return e("div",{key:i.text},[e(P["a"],{staticClass:"menu_options",attrs:{color:"white",text:"",rounded:""},on:{click:t.goToContacts}},[e("div",{class:`c${s+1} pr-5`}),t._v(" "+t._s(i.text)+" ")])],1)})),0)],1),e(z["a"],{staticClass:"py-4 text-center white--text",attrs:{cols:"12"}},[e("div",{staticClass:"footer-style"},[t._v(t._s(t.footerFirst))]),e("div",{staticClass:"footer-style"},[t._v(t._s(t.footerSecond))])])],1)],1)},J=[],V={name:"FooterMenu",data(){return{footerFirst:"Counter-Strike: Global Offensive is a registered trademark of Valve Corporation Company. We are in no way affiliated with, associated with or endorsed by Valve Corporation.",footerSecond:"© Slightlyboost 2022. All rights reserved.",links:[{icon:"mdi-cloud-upload",text:"Info@slightlyboost.com"},{icon:"mdi-phone-hangup",text:"+7 (999) 888-55-44"},{icon:"mdi-cloud-upload",text:"Slightlyboost"},{icon:"mdi-phone-hangup",text:"Slightlyboost#6666"}]}},methods:{checkUrl(){return"contacts"===window.location.href.split("/").pop()},goToContacts(){return this.$router.push({name:"contacts"})}}},Q=V,K=Object(F["a"])(Q,G,J,!1,null,null,null),X=K.exports,Z=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[t.buttonShow?e("div",{staticClass:"button-top",on:{click:t.clickTop}},[e("div",{staticClass:"arrow-top"})]):t._e()])},tt=[],et={name:"Scroller",data:()=>({buttonShow:!1}),mounted(){this.checkScrollPosition(),window.addEventListener("scroll",this.checkScrollPosition)},methods:{checkScrollPosition(){this.buttonShow=window.pageYOffset>10},clickTop(){scroll({top:0,behavior:"smooth"})}}},it=et,st=Object(F["a"])(it,Z,tt,!1,null,null,null),rt=st.exports,ot={name:"AppLayout",components:{HeaderMenu:q,FooterMenu:X,Scroller:rt}},at=ot,nt=Object(F["a"])(at,a,n,!1,null,null,null);e["default"]=nt.exports}}]);
//# sourceMappingURL=chunk-5cb822f7.197dc0d5.js.map