(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,n,o){"use strict";o.r(n);var e=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("main-wrapper",[t.isAuthenticated?o("div",[o("v-btn",{staticClass:"text-none text-center font-weight-bold",attrs:{color:"error",outlined:"",block:"","x-large":"",depressed:""},on:{click:t.onLogoutClick}},[o("power-icon",{staticClass:"pr-1"}),t._v(" Sair da conta ")],1)],1):o("div",[o("v-btn",{staticClass:"mt-4 text-none text-center font-weight-bold",attrs:{color:"primary",block:"","x-large":"",depressed:"",outlined:""},on:{click:t.redirectToLogin}},[t._v(" Entrar na conta ")])],1)])},i=[],c=o("5530"),a=o("0a35"),r=o("2f62"),u={name:"Profile",components:{PowerIcon:a["j"]},data:function(){return{loggingOut:!1,confirmingLogout:!1}},computed:Object(c["a"])({},Object(r["c"])("auth",{isAuthenticated:"isAuthenticated"})),methods:Object(c["a"])(Object(c["a"])({},Object(r["b"])("auth",{logout:"logout",startAuthentication:"startAuthentication"})),{},{redirectToLogin:function(){this.startAuthentication({path:this.$route.path}).then((function(t){window.location=t}))},onLogoutClick:function(){var t=this;this.loggingOut=!0,this.logout().then((function(){t.$router.go(-1)}))}})},s=u,l=o("2877"),d=o("6544"),h=o.n(d),g=o("8336"),p=Object(l["a"])(s,e,i,!1,null,null,null);n["default"]=p.exports;h()(p,{VBtn:g["a"]})}}]);
//# sourceMappingURL=chunk-2d217357.6f5634a9.js.map