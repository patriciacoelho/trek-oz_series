(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45554bfe"],{"0798":function(t,e,n){"use strict";n("caad");var r=n("5530"),i=n("ade3"),o=(n("0c18"),n("10d2")),s=n("afdd"),a=n("9d26"),c=n("f2e7"),l=n("7560"),u=n("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n("58df"),f=n("d9bd");e["a"]=Object(h["a"])(o["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(s["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,n){},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),i=n("5530"),o=(n("4b85"),n("2b0e")),s=n("d9f7"),a=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,r){return n[t+Object(a["q"])(r)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var r=m[t];if(null!=n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return r+="-".concat(n),r.toLowerCase()}}var C=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,e){var n=e.props,i=e.data,o=e.children,a="";for(var c in n)a+=String(n[c]);var l=C.get(a);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var r=n[t],i=y(e,t,r);i&&l.push(i)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(a,l)}(),t(n.tag,Object(s["a"])(i,{staticClass:"row",class:l}),o)}})},4804:function(t,e,n){},7110:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-wrapper",[t.hasError?n("div",[n("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte. ")]),n("v-btn",{staticClass:"mt-4 text-none text-center font-weight-bold",attrs:{color:"primary",block:"","x-large":"",depressed:"",outlined:""},on:{click:t.goBack}},[t._v(" Tentar novamente ")])],1):n("v-row",{attrs:{justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)},i=[],o=(n("ac1f"),n("5319"),n("5530")),s=n("2f62"),a={props:{error:{type:String,default:null},code:{type:String,default:null},state:{type:String,default:null}},data:function(){return{badTokenRequest:!1,beforeRedirectRoute:sessionStorage.getItem("routeToRemember")}},computed:{hasError:function(){return!!this.error||this.badTokenRequest}},mounted:function(){var t=this;this.error||this.getToken({code:this.code,state:this.state}).then((function(){t.setloggedInTrakt(!0),t.$router.replace(t.beforeRedirectRoute)})).catch((function(e){throw t.badTokenRequest=!0,e}))},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["b"])("auth",{getToken:"getAccessToken",startAuthentication:"startAuthentication"})),Object(s["d"])("auth",{setloggedInTrakt:"setloggedInTrakt"})),{},{goBack:function(){this.$router.go(-1)}})},c=a,l=n("2877"),u=n("6544"),d=n.n(u),h=n("0798"),f=n("8336"),p=n("490a"),g=n("0fd9"),v=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=v.exports;d()(v,{VAlert:h["a"],VBtn:f["a"],VProgressCircular:p["a"],VRow:g["a"]})},"9d26":function(t,e,n){"use strict";n("7db0"),n("caad"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("2532"),n("498a"),n("c96a");var r,i=n("5530"),o=(n("4804"),n("7e2b")),s=n("a9ad"),a=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),d=n("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));var p=Object(d["a"])(o["a"],s["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["p"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["m"])(t).find((function(e){return t[e]}));return e&&r[e]||Object(l["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],r=this.getDefaultData(),i="material-icons",o=t.indexOf("-"),s=o<=-1;s?n.push(t):(i=t.slice(0,o),h(i)&&(i="")),r.class[i]=!0,r.class[t]=!s;var a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(t,e){var n=this.getSize(),r=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:n?{fontSize:n,height:n,width:n}:void 0});r.class["v-icon--svg"]=!0,this.applyColors(r);var o={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n||"24",width:n||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",r,[e("svg",o,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var i=t.component;return n.props=t.props,n.nativeOn=n.on,e(i,n)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),g=u["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,r=e.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,i?[i]:r)}});e["a"]=g},afdd:function(t,e,n){"use strict";var r=n("8336");e["a"]=r["a"]}}]);
//# sourceMappingURL=chunk-45554bfe.bad59797.js.map