(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"06d6":function(a,t,n){"use strict";n.r(t);var r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",{staticClass:"matches"},[n("MostPlayedGround")],1)},e=[],o=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"submain"},[n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[a._v("Most Played ground")]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"chart-container"},[n("pie-chart",{attrs:{chartData:a.chartData(),options:a.options()}})],1)]),n("div",{staticClass:"card-footer"},[a._v("Most Played ground")])])])],1)],1)},s=[],i=(n("ac6a"),n("cadf"),n("551c"),n("097d"),n("eadf"));function u(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function c(a,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function l(a,t,n){return t&&c(a.prototype,t),n&&c(a,n),a}var d=function(){function a(){u(this,a)}return l(a,[{key:"getAvgOfArray",value:function(a){var t=this;return this.sum=0,a.forEach(function(a){t.sum=t.sum+a}),Math.round(this.sum/a.length)}},{key:"getMaxOfArray",value:function(a){return Math.max.apply(null,a)}},{key:"getMinOfArray",value:function(a){return Math.min.apply(null,a)}},{key:"prepareData",value:function(a){var t={data:{labels:a["labels"],datasets:[{backgroundColor:["rgba(255, 99, 132)","rgba(54, 162, 235)","rgba(255, 206, 86)","rgba(75, 192, 192)","rgba(153, 102, 255)","rgba(255, 159, 64)","rgba(117, 59, 120)","rgba(26, 163, 255)","rgba(255, 26, 26)","rgba(65, 5, 111)","#28a745","#6610f2","#17a2b8"],data:a["data"]}]},options:{responsive:!0,maintainAspectRatio:!1}};return t}}]),a}(),f=new d,p={name:"Main",data:function(){return{d:""}},props:{msg:{type:String},name:{type:String}},methods:{getData:function(){var a={data:[],labels:[]};return i.forEach(function(t){a["data"].push(t["total"]),a["labels"].push(t["ground"])}),a},chartData:function(){return this.d=this.getData(),f.prepareData(this.d)["data"]},options:function(){return f.prepareData(this.d)["options"]}}},b=p,h=(n("7bb9"),n("2877")),g=Object(h["a"])(b,o,s,!1,null,"54fdbbc0",null);g.options.__file="MostPlayedGround.vue";var v=g.exports,m={name:"Home",components:{MostPlayedGround:v}},y=m,M=(n("ae1a"),Object(h["a"])(y,r,e,!1,null,null,null));M.options.__file="Matches.vue";t["default"]=M.exports},"5d5f":function(a,t,n){},"75df":function(a,t,n){},"7bb9":function(a,t,n){"use strict";var r=n("5d5f"),e=n.n(r);e.a},ae1a:function(a,t,n){"use strict";var r=n("75df"),e=n.n(r);e.a},eadf:function(a){a.exports=[{ground:"M Chinnaswamy..",total:"58"},{ground:"Eden Gardens",total:"54"},{ground:"Feroz Shah Kotla",total:"53"},{ground:"Wankhede Stadium",total:"49"},{ground:"MA Chidambaram..",total:"48"},{ground:"Rajiv Gandhi Inter..",total:"41"},{ground:"Punjab Cricket Asso..",total:"35"},{ground:"Sawai Mansingh..",total:"33"}]}}]);
//# sourceMappingURL=about.a96954e7.js.map