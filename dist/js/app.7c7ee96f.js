(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-07aaa06e":"64290934","chunk-0f654015":"ea54fbd0","chunk-15c50834":"f6b7cc6a","chunk-22aace42":"2b6faf63","chunk-0c5524de":"cfd65897","chunk-7b41f061":"7375afb4","chunk-2d0d01bb":"cde600e5","chunk-2d216b86":"9b9c4aed","chunk-2d229b79":"c26de76a","chunk-2d5615a9":"4a9751da"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-22aace42":1,"chunk-0c5524de":1,"chunk-7b41f061":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-07aaa06e":"31d6cfe0","chunk-0f654015":"31d6cfe0","chunk-15c50834":"31d6cfe0","chunk-22aace42":"ea9fccd2","chunk-0c5524de":"a98974b9","chunk-7b41f061":"75996910","chunk-2d0d01bb":"31d6cfe0","chunk-2d216b86":"31d6cfe0","chunk-2d229b79":"31d6cfe0","chunk-2d5615a9":"31d6cfe0"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin-panel/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3c61":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",{staticClass:"pa-0 ma-0"},[r("router-view")],1)],1)},o=[],c=r("5530"),s=r("2f62"),i={name:"App",computed:Object(c["a"])({},Object(s["c"])("shared",["error"])),watch:{error:function(){this.error&&this.$toast.error("".concat(this.error))}},methods:Object(c["a"])({},Object(s["d"])("user",["createBase64Token"])),mounted:function(){localStorage.getItem("tokenCreated")||this.createBase64Token()}},u=i,l=r("2877"),d=r("6544"),p=r.n(d),m=r("7496"),f=r("f6c4"),h=Object(l["a"])(u,a,o,!1,null,null,null),b=h.exports;p()(h,{VApp:m["a"],VMain:f["a"]});r("d3b7"),r("3ca3"),r("ddb0");var g=r("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{staticClass:"fill-height",attrs:{id:"auth-body",fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[n("v-img",{staticClass:"mx-auto",attrs:{contain:"","max-height":"120","max-width":"300",src:r("9b19"),alt:"Need-for-drive"}})],1),n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[n("v-card-title",{staticClass:"headline"},[n("span",{staticClass:"auth__logo_text"},[e._v("Need for drive")])])],1),n("v-col",{staticClass:"mb-1 pb-1",attrs:{cols:"12"}},[n("v-spacer")],1),n("v-card",{staticClass:"elevation-12",attrs:{width:"400"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-title",{staticClass:"justify-center pb-11"},[n("span",{staticClass:"auth__form_login"},[e._v("Вход")])]),n("v-card-text",{staticClass:"pb-0 mb-0"},[n("span",{staticClass:"auth__form_tip"},[e._v("Почта")]),n("v-text-field",{staticClass:"pt-2",attrs:{name:"email",rules:e.emailRules,type:"text",required:"",outlined:"",dense:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("span",{staticClass:"auth__form_tip"},[e._v("Пароль")]),n("v-text-field",{staticClass:"pt-2",attrs:{id:"password",rules:e.passwordRules,name:"password",type:"password",required:"",outlined:"",dense:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("v-card-actions",{staticClass:"pa-4 pt-0 mt-0"},[n("span",{staticClass:"auth__form_link_text",on:{click:e.clearToken}},[e._v(" Запросить доступ ")]),n("v-spacer"),n("v-btn",{staticClass:"text-transform-none",attrs:{type:"submit",color:"primary",depressed:""}},[n("span",{staticClass:"auth__form_btn_text pa-1"},[e._v("Войти")])])],1)],1)],1)],1)],1)],1)},k=[],_=r("1da1"),w=(r("96cf"),{data:function(){return{form:{email:"",password:""},valid:!0,passwordRules:[function(e){return!!e||"Пожалуйста, введите пароль"},function(e){return e.length>=8||"Необходимо минимум 8 символов"}],emailRules:[function(e){return!!e||"Пожалуйста, введите email"}]}},methods:Object(c["a"])(Object(c["a"])({},Object(s["b"])("user",["loginUser"])),{},{submitForm:function(){var e=this.$refs.form.validate();this.login(e)},login:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,t.loginUser(t.form);case 4:n=r.sent,n&&t.$router.push("/admin");case 6:case"end":return r.stop()}}),r)})))()},clearToken:function(){localStorage.removeItem("token"),localStorage.removeItem("refresh_token")}})}),x=w,O=r("8336"),y=r("b0af"),P=r("99d9"),C=r("62ad"),A=r("a523"),I=r("4bd4"),E=r("adda"),S=r("0fd9"),T=r("2fa4"),R=r("8654"),j=Object(l["a"])(x,v,k,!1,null,null,null),V=j.exports;p()(j,{VApp:m["a"],VBtn:O["a"],VCard:y["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:C["a"],VContainer:A["a"],VForm:I["a"],VImg:E["a"],VRow:S["a"],VSpacer:T["a"],VTextField:R["a"]});var U={namespaced:!0,state:{loading:!1,error:null},mutations:{setLoading:function(e,t){e.loading=t},setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{},getters:{loading:function(e){return e.loading},error:function(e){return e.error}}},L=function(e,t,r){U.mutations.clearError(U.state),localStorage.getItem("token")?r():(U.mutations.setError(U.state,"Пройдите авторизацию"),r("/"))};n["a"].use(g["a"]);var B=[{path:"/",name:"Auth",component:V},{path:"/admin",name:"Admin",beforeEnter:L,component:function(){return Promise.all([r.e("chunk-22aace42"),r.e("chunk-0c5524de")]).then(r.bind(null,"dead"))},children:[{path:"home",name:"Home",beforeEnter:L,component:function(){return r.e("chunk-2d5615a9").then(r.bind(null,"9349"))}},{path:"car",name:"CarCard",beforeEnter:L,component:function(){return r.e("chunk-2d0d01bb").then(r.bind(null,"6726"))}},{path:"list",name:"CarList",beforeEnter:L,component:function(){return r.e("chunk-2d229b79").then(r.bind(null,"df45"))}},{path:"orders",name:"Orders",beforeEnter:L,component:function(){return Promise.all([r.e("chunk-22aace42"),r.e("chunk-7b41f061")]).then(r.bind(null,"82a5"))}},{path:"menu5",name:"Menu5",beforeEnter:L,component:function(){return r.e("chunk-07aaa06e").then(r.bind(null,"d0db"))}},{path:"menu6",name:"Menu6",beforeEnter:L,component:function(){return r.e("chunk-0f654015").then(r.bind(null,"4534"))}},{path:"menu7",name:"Menu7",beforeEnter:L,component:function(){return r.e("chunk-15c50834").then(r.bind(null,"be0f"))}}]},{path:"*",name:"Error",component:function(){return r.e("chunk-2d216b86").then(r.bind(null,"c454"))}}],D=new g["a"]({routes:B}),N=D,F=(r("25f0"),r("bc3a")),M=r.n(F),$=function(e,t,r){return{"X-Api-Factory-Application-Id":"".concat(e["VUE_APP_API_FACTORY_ID"]),"Content-Type":"application/json",Authorization:r+t}},H=$,q=M.a.create();q.interceptors.request.use((function(e){return e.method="post",localStorage.getItem("token")&&localStorage.getItem("logout")?(e.headers=H(Object({NODE_ENV:"production",VUE_APP_API_APPLICATION_ID:"573dc006a04857a8235f523c",VUE_APP_API_AUTH:"https://api-factory.simbirsoft1.com/api",VUE_APP_API_FACTORY_ID:"5e25c641099b810b946c5d5b",VUE_APP_API_IMG:"https://api-factory.simbirsoft1.com",VUE_APP_API_KEY:"4cbcea96de",VUE_APP_API_PROD:"https://api-factory.simbirsoft1.com/api/db",BASE_URL:"/admin-panel/"}),localStorage.getItem("token"),"Bearer "),localStorage.removeItem("logout")):e.headers=H(Object({NODE_ENV:"production",VUE_APP_API_APPLICATION_ID:"573dc006a04857a8235f523c",VUE_APP_API_AUTH:"https://api-factory.simbirsoft1.com/api",VUE_APP_API_FACTORY_ID:"5e25c641099b810b946c5d5b",VUE_APP_API_IMG:"https://api-factory.simbirsoft1.com",VUE_APP_API_KEY:"4cbcea96de",VUE_APP_API_PROD:"https://api-factory.simbirsoft1.com/api/db",BASE_URL:"/admin-panel/"}),ee.state.user.base64Token,"Basic "),e.baseURL="https://api-factory.simbirsoft1.com/api/db",e})),q.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;if(401===t&&localStorage.getItem("tokenCreated")){var r=Date.now()-localStorage.getItem("tokenCreated");r<861e5?ee.dispatch("user/refreshToken"):ee.dispatch("user/logoutUser")}return Promise.reject(e)}));var Y=q,z=function(e){console.log("error: "+e)},K=z,G={namespaced:!0,state:{user:{},base64Token:""},mutations:{setUser:function(e,t){e.user.token=t["access_token"],e.user.id=t["user_id"],e.user.refreshToken=t["refresh_token"]},createBase64Token:function(e){var t=Math.random().toString(36).substring(2),r=t+":4cbcea96de";localStorage.setItem("token64",btoa(r)),e.base64Token=btoa(r)},clearUser:function(e){e.user={}}},actions:{loginUser:function(e,t){var r=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){var a,o,c,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,o=t.email,c=t.password,r.commit("shared/clearError"),r.commit("shared/setLoading",!0),n.prev=4,n.next=7,Y({url:"https://api-factory.simbirsoft1.com/api/auth/login",data:{username:o,password:c}});case 7:return s=n.sent,i=s.data,a("setUser",i),J(localStorage,i),localStorage.setItem("user",i["user_id"]),r.commit("shared/setLoading",!1),n.abrupt("return",!0);case 16:n.prev=16,n.t0=n["catch"](4),401===n.t0.response.status&&(r.commit("shared/setLoading",!1),r.commit("shared/setError","Неверный логин или пароль")),K(n.t0);case 20:case"end":return n.stop()}}),n,null,[[4,16]])})))()},refreshToken:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,t.commit("shared/clearError"),r.prev=2,r.next=5,Y({url:"https://api-factory.simbirsoft1.com/api/auth/refresh",method:"post",data:{refresh_token:localStorage.getItem("refresh_token"),client_id:localStorage.getItem("user"),client_secret:"4cbcea96de"}});case 5:a=r.sent,o=a.data,n("setUser",o),J(localStorage,o),t.commit("shared/clearError"),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](2),t.commit("shared/setError",r.t0.message),K(r.t0);case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},logoutUser:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,t.commit("shared/clearError"),localStorage.setItem("logout",!0),r.prev=3,r.next=6,Y({url:"https://api-factory.simbirsoft1.com/api/auth/logout"});case 6:return X(localStorage),n("clearUser"),r.next=10,N.push({name:"Auth"});case 10:r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](3),X(localStorage),t.commit("shared/setError",r.t0.message),K(r.t0);case 17:case"end":return r.stop()}}),r,null,[[3,12]])})))()}},getters:{base64Token:function(e){return e.base64Token}}},J=function(e,t){var r=Date.now();e.setItem("token",t["access_token"]),e.setItem("refresh_token",t["refresh_token"]),e.setItem("tokenCreated",r)},X=function(e){e.removeItem("token"),e.removeItem("refresh_token"),e.removeItem("tokenCreated"),e.removeItem("user")},Q={namespaced:!0,state:{cities:[],orders:[],orderStatuses:[],categories:[],rateTypes:[]},mutations:{setCities:function(e,t){e.cities=t},setOrders:function(e,t){e.orders=t},setOrderStatuses:function(e,t){e.orderStatuses=t},setCategories:function(e,t){e.categories=t},setRateTypes:function(e,t){e.rateTypes=t}},actions:{fetchCities:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()(W("get","/city"));case 3:r=t.sent,n=r.data,e.commit("setCities",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),K(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchOrders:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()(W("get","/order"));case 3:r=t.sent,n=r.data,e.commit("setOrders",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),K(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchOrderStatuses:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()(W("get","/orderStatus"));case 3:r=t.sent,n=r.data,e.commit("setOrderStatuses",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),K(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchCategories:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()(W("get","/category"));case 3:r=t.sent,n=r.data,e.commit("setCategories",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),K(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchRateTypes:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()(W("get","/rateType"));case 3:r=t.sent,n=r.data,e.commit("setRateTypes",n.data),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),K(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},deleteOrder:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M()(W("delete","/order/".concat(t)));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),K(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},editOrder:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=t,e.next=4,M()(W("put","/order/".concat(t.id),r));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),K(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},changeStatusOfOrderToCancel:function(e,t,r){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={orderStatusId:r},e.next=4,M()(W("put","/order/".concat(t),n));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),K(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},changeStatusOfOrderToDone:function(e,t,r){return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={orderStatusId:r},e.next=4,M()(W("put","/order/".concat(t),n));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),K(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},getters:{getCities:function(e){return e.cities},getOrders:function(e){return e.orders},getOrderStatuses:function(e){return e.orderStatuses},getCategories:function(e){return e.categories},getRateTypes:function(e){return e.rateTypes}}},W=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{url:"https://api-factory.simbirsoft1.com/api/db"+t,method:e,headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token")},data:r}};n["a"].use(s["a"]);var Z=new s["a"].Store({state:{},mutations:{},actions:{},modules:{user:G,shared:U,entities:Q}}),ee=Z,te=(r("3c61"),r("f309"));n["a"].use(te["a"]);var re=new te["a"]({}),ne=r("6c42"),ae=(r("da96"),{transition:"Vue-Toastification__bounce",maxToasts:3,newestOnTop:!0,position:"bottom-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.7,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1});n["a"].use(ne["a"],ae);var oe=r("b6d0");n["a"].use(oe["a"]),n["a"].config.productionTip=!1,new n["a"]({router:N,store:ee,vuetify:re,render:function(e){return e(b)}}).$mount("#app")},"9b19":function(e,t,r){e.exports=r.p+"img/logo.900803c1.svg"}});
//# sourceMappingURL=app.7c7ee96f.js.map