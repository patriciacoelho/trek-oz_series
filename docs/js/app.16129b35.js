(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],f=0,d=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-27def578":"dd92250a","chunk-522e1525":"3f286db4","chunk-5b8b5eda":"7a67cd52","chunk-5c24050b":"d023b225","chunk-f4af00d8":"fd86d741","chunk-649cf68b":"50e7ec7a","chunk-a2ef258e":"103231ab","chunk-66af710a":"71104251","chunk-56b15d95":"dab71f90"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-27def578":1,"chunk-522e1525":1,"chunk-5b8b5eda":1,"chunk-5c24050b":1,"chunk-f4af00d8":1,"chunk-649cf68b":1,"chunk-a2ef258e":1,"chunk-66af710a":1,"chunk-56b15d95":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-27def578":"4e9dc113","chunk-522e1525":"f74cf833","chunk-5b8b5eda":"1b65b310","chunk-5c24050b":"bf91edcd","chunk-f4af00d8":"654f70e7","chunk-649cf68b":"c9a78054","chunk-a2ef258e":"ddb05a8c","chunk-66af710a":"77fd9e0a","chunk-56b15d95":"c37776db"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],l.parentNode.removeChild(l),t(c)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/trek-oz_series/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0103":function(e,n,t){},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"157d":function(e,n,t){e.exports=t.p+"img/trakt-wide-red-black.e5b42e75.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("router-view")],1)},a=[],c={name:"App",data:function(){return{refreshing:!1}},created:function(){var e=this;navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))}},u=c,i=(t("034f"),t("2877")),s=Object(i["a"])(u,o,a,!1,null,null,null),f=s.exports,d=t("9483");Object(d["a"])("".concat("/trek-oz_series/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("registered")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("Content is available, please refresh"),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var l=t("8c4f"),h=t("a060");r["a"].use(l["a"]);var p=[{path:h["a"].PATH,name:h["a"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-f4af00d8"),t.e("chunk-a2ef258e"),t.e("chunk-522e1525"),t.e("chunk-66af710a")]).then(t.bind(null,"bb51"))}},{path:h["f"].PATH,name:h["f"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-f4af00d8"),t.e("chunk-649cf68b")]).then(t.bind(null,"9da6"))}},{path:h["c"].PATH,name:h["c"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-522e1525"),t.e("chunk-5b8b5eda")]).then(t.bind(null,"2d3b"))}},{path:h["e"].PATH,name:h["e"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-f4af00d8"),t.e("chunk-a2ef258e"),t.e("chunk-56b15d95")]).then(t.bind(null,"9f52"))},props:!0,children:[{path:h["d"].PATH,name:h["d"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-f4af00d8"),t.e("chunk-a2ef258e"),t.e("chunk-56b15d95")]).then(t.bind(null,"9f52"))},props:!0}]},{path:h["b"].PATH,name:h["b"].NAME,component:function(){return Promise.all([t.e("chunk-27def578"),t.e("chunk-5c24050b")]).then(t.bind(null,"1a33"))},props:!0}],b=new l["a"]({mode:"history",base:"/trek-oz_series/",routes:p}),v=b,m=t("f309");r["a"].use(m["a"]);var g=new m["a"]({theme:{themes:{light:{primary:"#0B7346",accent:"#BF5400"}},options:{customProperties:!0}}}),k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",{class:e.padding},[e._t("default")],2),e.noMenu?e._e():t("nav-bar")],1)},A=[],y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"powered-by-wrapper"},[t("powered-by")],1),t("v-bottom-navigation",{staticClass:"justify-space-between align-center px-4",attrs:{app:"",height:"4.5rem",color:"primary"},model:{value:e.nav,callback:function(n){e.nav=n},expression:"nav"}},[t("v-btn",{attrs:{id:"home",to:e.HOME.PATH,value:e.HOME.PATH}},[t("home-icon")],1),t("v-btn",{attrs:{id:"discovery",to:e.SEARCH.PATH,value:e.SEARCH.PATH}},[t("search-icon")],1),t("v-btn",{attrs:{id:"dashboard"}},[t("grid-icon")],1),t("v-btn",{attrs:{id:"calendar",to:e.UPCOMING.PATH,value:e.UPCOMING.PATH}},[t("calendar-icon")],1),t("v-btn",{attrs:{id:"watched"}},[t("archive-icon")],1)],1)],1)},P=[],w=t("0a35"),E=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("footer",{staticClass:"powered-by"},[r("span",[e._v(" Powered by ")]),r("a",{staticClass:"d-flex",attrs:{href:"https://trakt.tv/"}},[r("img",{attrs:{height:"20px",src:t("157d"),alt:"Logo Trakt"}})])])},T=[],H={data:function(){return{sheet:!1}}},M=H,N=(t("d21c"),Object(i["a"])(M,E,T,!1,null,null,null)),O=N.exports,_={components:{HomeIcon:w["h"],SearchIcon:w["j"],GridIcon:w["g"],CalendarIcon:w["c"],ArchiveIcon:w["a"],PoweredBy:O},name:"NavBar",data:function(){return{nav:this.$router.currentRoute.path,HOME:h["a"],SEARCH:h["c"],UPCOMING:h["f"]}}},C=_,j=(t("afd0"),t("6544")),x=t.n(j),S=t("b81c"),B=t("8336"),I=Object(i["a"])(C,y,P,!1,null,"4087d9a8",null),L=I.exports;x()(I,{VBottomNavigation:S["a"],VBtn:B["a"]});var $={components:{NavBar:L},props:{noMenu:{type:Boolean,default:!1}},computed:{padding:function(){return this.noMenu?"pb-0":"pb-main"}}},U=$,V=(t("8f1f"),t("7496")),F=t("f6c4"),G=Object(i["a"])(U,k,A,!1,null,null,null),R=G.exports;x()(G,{VApp:V["a"],VMain:F["a"]}),r["a"].config.productionTip=!1,r["a"].component("main-wrapper",R),new r["a"]({router:v,vuetify:g,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){},"8f1f":function(e,n,t){"use strict";var r=t("af60"),o=t.n(r);o.a},a060:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"f",(function(){return i}));var r={NAME:"Home",PATH:"/"},o={NAME:"Search",PATH:"/search"},a={NAME:"TV Show",PATH:"/:slug"},c={NAME:"Season",PATH:"season/:seasonNumber"},u={NAME:"List",PATH:"/list/:type"},i={NAME:"Upcoming",PATH:"/upcoming"}},af60:function(e,n,t){},afd0:function(e,n,t){"use strict";var r=t("d901"),o=t.n(r);o.a},d21c:function(e,n,t){"use strict";var r=t("0103"),o=t.n(r);o.a},d901:function(e,n,t){}});
//# sourceMappingURL=app.16129b35.js.map