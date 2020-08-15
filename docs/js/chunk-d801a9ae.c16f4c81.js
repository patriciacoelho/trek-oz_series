(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d801a9ae"],{"0798":function(t,e,n){"use strict";n("caad");var r=n("5530"),i=n("ade3"),s=(n("0c18"),n("10d2")),a=n("afdd"),o=n("9d26"),c=n("f2e7"),l=n("7560"),u=n("2b0e"),d=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n("58df"),p=n("d9bd");e["a"]=Object(h["a"])(s["a"],c["a"],d).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(i["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(p["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,n){},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),i=n("5530"),s=(n("4b85"),n("2b0e")),a=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,r){return n[t+Object(o["q"])(r)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:v}})),b={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var r=m[t];if(null!=n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return r+="-".concat(n),r.toLowerCase()}}var C=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:p}},f),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var n=e.props,i=e.data,s=e.children,o="";for(var c in n)o+=String(n[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var r=n[t],i=y(e,t,r);i&&l.push(i)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(o,l)}(),t(n.tag,Object(a["a"])(i,{staticClass:"row",class:l}),s)}})},"1a33":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main-wrapper",{attrs:{"no-menu":""}},[n("v-row",{staticClass:"app-bar-height grey--text py-0 mx-4",attrs:{align:"center"}},[n("div",[n("v-btn",{attrs:{icon:""},on:{click:t.handleBackButton}},[n("arrow-left-icon",{staticClass:"headline grey--text font-weight-bold"})],1)],1)]),n("div",{staticClass:"mx-3 pb-3"},[n("v-row",{staticClass:"mx-3 mt-3 grey--text",attrs:{align:"center"}},[n("list-icon",{staticClass:"text--lighten-1 text-h5 mr-3",attrs:{size:"1x"}}),n("h1",[t._v(" Lista ")]),n("tv-icon",{staticClass:"text--lighten-1 text-h5 ml-auto",attrs:{size:"1x"}})],1),n("v-divider",{staticClass:"my-3"}),n("p",{staticClass:"grey--text mx-3 mb-3 caption text-uppercase"},[t._v(" "+t._s(t.listDescription)+" ")])],1),t.loading?n("v-row",{attrs:{justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t.error?n("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" Ops, tivemos um problema de conexão. Se o problema persistir contate o suporte. ")]):n("v-row",{staticClass:"mx-3"},t._l(t.cards,(function(e,r){return n("checkable-card",{key:r,attrs:{title:e.src?null:e.title,"img-src":e.src,loading:e.loading,disabled:e.loading},on:{"status-changed":function(e){return t.handleCheck(r)},click:function(e){return t.redirect(r)}}})})),1)],1)},i=[],s=(n("d81d"),n("b0c0"),n("5530")),a=n("87e7"),o=n("0a35"),c=n("a060"),l=n("9d2c"),u={components:{ListIcon:o["i"],TvIcon:o["k"],CheckableCard:l["a"],ArrowLeftIcon:o["b"]},props:{query:{type:Object,default:null,required:!0},type:{type:String,default:null,required:!0},name:{type:String,default:null,required:!0}},data:function(){return{cards:null,loading:!1,error:!1}},beforeMount:function(){this.query?this.fillGenresList():this.error=!0},methods:{handleCheck:function(t){var e=this;this.cards[t].loading=!0,setTimeout((function(){e.cards[t].loading=!1}),5e3)},fillGenresList:function(){var t=this;this.loading=!0,this.error=!1,Object(a["i"])(this.query).then((function(e){var n=e.results;t.cards=n.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{title:t.name,src:"https://image.tmdb.org/t/p/w342".concat(t.poster_path),loading:!1})})),t.loading=!1})).catch((function(){t.loading=!1,t.error=!0}))},handleBackButton:function(){this.$router.go(-1)},redirect:function(t){this.$router.push({name:c["e"].NAME,params:{slug:this.cards[t].ids.slug,ids:this.cards[t].ids}})}},computed:{listDescription:function(){return"genre"===this.type&&this.name?"Gênero: ".concat(this.name):""}}},d=u,h=(n("2979"),n("2877")),p=n("6544"),f=n.n(p),v=n("0798"),g=n("8336"),b=n("ce7e"),m=n("490a"),y=n("0fd9"),C=Object(h["a"])(d,r,i,!1,null,"062522d0",null);e["default"]=C.exports;f()(C,{VAlert:v["a"],VBtn:g["a"],VDivider:b["a"],VProgressCircular:m["a"],VRow:y["a"]})},2979:function(t,e,n){"use strict";var r=n("7d16"),i=n.n(r);i.a},"7d16":function(t,e,n){},"8ce9":function(t,e,n){},ce7e:function(t,e,n){"use strict";var r=n("5530"),i=(n("8ce9"),n("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-d801a9ae.c16f4c81.js.map