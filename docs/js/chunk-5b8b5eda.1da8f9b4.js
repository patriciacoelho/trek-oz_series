(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b8b5eda"],{"0798":function(t,e,n){"use strict";n("caad");var r=n("5530"),s=n("ade3"),i=(n("0c18"),n("10d2")),a=n("afdd"),o=n("9d26"),c=n("f2e7"),l=n("7560"),u=n("2b0e"),h=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=n("58df"),f=n("d9bd");e["a"]=Object(d["a"])(i["a"],c["a"],h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,n){},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),s=n("5530"),i=(n("4b85"),n("2b0e")),a=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,r){return n[t+Object(o["q"])(r)]=e(),n}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=u("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var r=m[t];if(null!=n){if(e){var s=e.replace(t,"");r+="-".concat(s)}return r+="-".concat(n),r.toLowerCase()}}var S=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,e){var n=e.props,s=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var l=S.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var r=n[t],s=y(e,t,r);s&&l.push(s)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(o,l)}(),t(n.tag,Object(a["a"])(s,{staticClass:"row",class:l}),i)}})},"2d3b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-wrapper",[n("v-text-field",{staticClass:"ma-3",attrs:{rounded:"",label:"Buscar",solo:""},on:{input:function(e){t.newSearch=!0},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}},scopedSlots:t._u([{key:"label",fn:function(){return[n("span",{staticClass:"grey--text text--lighten-1"},[t._v(" Que série cê tá procurando? ")]),n("tv-icon",{staticClass:"grey--text text--lighten-1 ml-1 mb-n-1px",attrs:{size:"1x"}})]},proxy:!0},{key:"append",fn:function(){return[n("search-icon",{staticClass:"grey--text text--lighten-1 cursor-pointer",on:{click:t.handleSearch}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.loading?n("v-row",{attrs:{justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t.error?n("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte. ")]):t.noResults?n("v-alert",{attrs:{dense:"",text:""}},[t._v(' Nenhum resultado encontrado para "'+t._s(t.search)+'" ')]):n("v-row",{staticClass:"mx-3"},t._l(t.cards,(function(e,r){return n("checkable-card",{key:r,attrs:{title:e.src?null:e.title,"img-src":e.src,loading:e.loading,disabled:e.loading},on:{"status-changed":function(e){return t.handleCheck(r)},click:function(e){return t.redirect(r)}}})})),1)],1)},s=[],i=(n("4160"),n("ac1f"),n("5319"),n("841c"),n("159b"),n("5530")),a=n("2f62"),o=n("87e7"),c=n("0a35"),l=n("a060"),u=n("9d2c"),h={components:{SearchIcon:c["j"],TvIcon:c["k"],CheckableCard:u["a"]},data:function(){return{search:"",cards:null,loading:!1,error:!1,newSearch:!1}},beforeMount:function(){this.checkStore()},watch:{search:function(t){this.hasResults&&t!==this.lastSearch.query&&(this.clearLastSearch(),this.cards=this.lastSearch.results)}},methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])("search",["fetchSearchResults","clearLastSearch"])),{},{handleCheck:function(t){var e=this;this.cards[t].loading=!0,setTimeout((function(){e.cards[t].loading=!1}),5e3)},checkStore:function(){var t=this.$route.query.q,e=!t||t===this.lastSearch.query;e&&this.hasResults?(t||this.$router.replace({query:{q:this.lastSearch.query}}),this.search=this.lastSearch.query,this.cards=this.lastSearch.results):this.handleQuery()},handleSearch:function(){this.search&&(this.$router.replace({query:{q:this.search}}),this.newSearch=!1,this.handleQuery())},handleQuery:function(){var t=this,e=this.$route.query.q;e&&(this.search=e,this.loading=!0,this.error=!1,this.cards=null,this.fetchSearchResults(e).then((function(){t.cards=t.lastSearch.results,t.loading=!1,t.loadImages()})).catch((function(){t.loading=!1,t.error=!0})))},loadImages:function(){this.cards.forEach((function(t){t.loading=!0,Object(o["g"])(t.ids.tmdb).then((function(e){var n=e[0].file_path||null,r="";n&&(r="https://image.tmdb.org/t/p/w342".concat(n)),t.src=r,t.loading=!1})).catch((function(){t.loading=!1}))}))},redirect:function(t){this.$router.push({name:l["e"].NAME,params:{slug:this.cards[t].ids.slug,ids:this.cards[t].ids}})}}),computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["d"])("search",["lastSearch"])),Object(a["c"])("search",{hasResults:"searchFoundAnyResults"})),{},{noResults:function(){return!!this.search&&!this.newSearch&&!this.hasResults}})},d=h,f=(n("43cf"),n("2877")),p=n("6544"),g=n.n(p),v=n("0798"),b=n("490a"),m=n("0fd9"),y=n("8654"),S=Object(f["a"])(d,r,s,!1,null,null,null);e["default"]=S.exports;g()(S,{VAlert:v["a"],VProgressCircular:b["a"],VRow:m["a"],VTextField:y["a"]})},"43cf":function(t,e,n){"use strict";var r=n("647d"),s=n.n(r);s.a},4804:function(t,e,n){},"647d":function(t,e,n){},"9d26":function(t,e,n){"use strict";n("7db0"),n("caad"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("2532"),n("498a"),n("c96a");var r,s=n("5530"),i=(n("4804"),n("7e2b")),a=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),h=n("58df");function d(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));var p=Object(h["a"])(i["a"],a["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["p"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["m"])(t).find((function(e){return t[e]}));return e&&r[e]||Object(l["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(s["a"])(Object(s["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],r=this.getDefaultData(),s="material-icons",i=t.indexOf("-"),a=i<=-1;a?n.push(t):(s=t.slice(0,i),d(s)&&(s="")),r.class[s]=!0,r.class[t]=!a;var o=this.getSize();return o&&(r.style={fontSize:o}),this.applyColors(r),e(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(t,e){var n=this.getSize(),r=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:n?{fontSize:n,height:n,width:n}:void 0});r.class["v-icon--svg"]=!0,this.applyColors(r);var i={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n||"24",width:n||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",r,[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var s=t.component;return n.props=t.props,n.nativeOn=n.on,e(s,n)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),g=u["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,r=e.children,s="";return n.domProps&&(s=n.domProps.textContent||n.domProps.innerHTML||s,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,s?[s]:r)}});e["a"]=g},afdd:function(t,e,n){"use strict";var r=n("8336");e["a"]=r["a"]}}]);
//# sourceMappingURL=chunk-5b8b5eda.1da8f9b4.js.map