(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-660cf9d6"],{"0612":function(e){e.exports=[{labels:"CH Gayle",total:"17"},{labels:"YK Pathan",total:"16"},{labels:"AB de Villiers",total:"15"},{labels:"DA Warner",total:"14"},{labels:"RG Sharma",total:"13"},{labels:"SK Raina",total:"13"},{labels:"G Gambhir",total:"12"},{labels:"MEK Hussey",total:"12"},{labels:"MS Dhoni",total:"12"},{labels:"AM Rahane",total:"12"}]},"06d6":function(e,n,a){"use strict";a.r(n);var s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"matches"},[a("ManOfMatch"),a("br"),a("Matches")],1)},i=[],t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"submain"},[a("b-row",[a("b-col",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("Top man of the matches")]),a("div",{staticClass:"card-body"},[a("doughnut-chart",{attrs:{chartData:e.chartData(),options:e.options()}})],1),a("div",{staticClass:"card-footer"})]),a("br")]),a("b-col",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[a("TotalScore")],1)],1)],1)},r=[],l=(a("ac6a"),a("646f")),m=a("0612"),c=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"submain"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("Total Score by all teams across each season")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"chart-container"},[a("bar-chart",{attrs:{chartData:e.chartData(),options:e.options()}})],1)]),a("div",{staticClass:"card-footer"})])])},o=[],u=a("9fb7"),d={name:"totalScore",data:function(){return{d:""}},props:{msg:{type:String},name:{type:String}},methods:{getData:function(){var e={data:[],labels:[]};return u.forEach(function(n){e["data"].push(n["total"]),e["labels"].push(n["year"])}),e},chartData:function(){this.d=this.getData();var e=l["a"].prepareData(this.d)["data"];return e.datasets[0].backgroundColor="rgba(54, 162, 235)",e},options:function(){return l["a"].prepareData(this.d)["options"]}}},z=d,h=(a("8c52"),a("2877")),b=Object(h["a"])(z,c,o,!1,null,"e3296ad8",null);b.options.__file="TotalScore.vue";var _=b.exports,p={name:"manOfMatch",data:function(){return{d:""}},components:{TotalScore:_},props:{msg:{type:String},name:{type:String}},methods:{getData:function(){var e={data:[],labels:[]};return m.forEach(function(n){e["data"].push(n["total"]),e["labels"].push(n["labels"])}),e},chartData:function(){return this.d=this.getData(),l["a"].prepareData(this.d)["data"]},options:function(){return l["a"].prepareData(this.d)["options"]}}},y=p,f=(a("173d"),Object(h["a"])(y,t,r,!1,null,"775f39ee",null));f.options.__file="ManOfMatch.vue";var v=f.exports,x=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"about"},[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"col-xs-12 col-sm-12 col-md-6 col-lg-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("Total Hits for each team")]),a("div",{staticClass:"card-body"},[a("sunburst-chart",{attrs:{sunburstdata:e.render()}})],1),a("div",{staticClass:"card-footer"})])])],1)],1)},g=[],S=a("750c"),C={name:"matches",data:function(){return{checks:S,name:"anurag"}},mounted:function(){},methods:{render:function(){return S}}},w=C,R=(a("6597"),Object(h["a"])(w,x,g,!1,null,null,null));R.options.__file="Matches.vue";var E=R.exports,D={name:"Home",components:{Matches:E,ManOfMatch:v}},H=D,B=(a("ae1a"),Object(h["a"])(H,s,i,!1,null,null,null));B.options.__file="Matches.vue";n["default"]=B.exports},"173d":function(e,n,a){"use strict";var s=a("f8e4"),i=a.n(s);i.a},6597:function(e,n,a){"use strict";var s=a("ba2e"),i=a.n(s);i.a},"750c":function(e){e.exports={name:"Total Hits",children:[{name:"RP",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:408},{name:"Fours",size:684}]},{name:"Run",children:[{name:"1",size:613},{name:"2",size:236},{name:"3",size:21},{name:"5",size:0}]}]},{name:"Extras",children:[{name:"wide_runs",size:60},{name:"bye_runs",size:6},{name:"legbye_runs",size:28},{name:"noball_runs",size:7},{name:"penalty_runs",size:0}]}]},{name:"PW",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:1176},{name:"Fours",size:2100}]},{name:"Run",children:[{name:"1",size:1999},{name:"2",size:704},{name:"3",size:51},{name:"5",size:10}]}]},{name:"Extras",children:[{name:"wide_runs",size:169},{name:"bye_runs",size:19},{name:"legbye_runs",size:106},{name:"noball_runs",size:24},{name:"penalty_runs",size:0}]}]},{name:"CSK",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:4452},{name:"Fours",size:7080}]},{name:"Run",children:[{name:"1",size:5877},{name:"2",size:2220},{name:"3",size:183},{name:"5",size:10}]}]},{name:"Extras",children:[{name:"wide_runs",size:585},{name:"bye_runs",size:75},{name:"legbye_runs",size:349},{name:"noball_runs",size:68},{name:"penalty_runs",size:0}]}]},{name:"DD",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:3594},{name:"Fours",size:7072}]},{name:"Run",children:[{name:"1",size:5790},{name:"2",size:2018},{name:"3",size:147},{name:"5",size:20}]}]},{name:"Extras",children:[{name:"wide_runs",size:617},{name:"bye_runs",size:69},{name:"legbye_runs",size:332},{name:"noball_runs",size:65},{name:"penalty_runs",size:10}]}]},{name:"RR",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:3228},{name:"Fours",size:6520}]},{name:"Run",children:[{name:"1",size:4959},{name:"2",size:1878},{name:"3",size:189},{name:"5",size:10}]}]},{name:"Extras",children:[{name:"wide_runs",size:494},{name:"bye_runs",size:55},{name:"legbye_runs",size:296},{name:"noball_runs",size:74},{name:"penalty_runs",size:0}]}]},{name:"MI",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:4548},{name:"Fours",size:7680}]},{name:"Run",children:[{name:"1",size:6059},{name:"2",size:1994},{name:"3",size:159},{name:"5",size:35}]}]},{name:"Extras",children:[{name:"wide_runs",size:700},{name:"bye_runs",size:78},{name:"legbye_runs",size:391},{name:"noball_runs",size:77},{name:"penalty_runs",size:0}]}]},{name:"DC",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:2400},{name:"Fours",size:3828}]},{name:"Run",children:[{name:"1",size:3401},{name:"2",size:1126},{name:"3",size:105},{name:"5",size:25}]}]},{name:"Extras",children:[{name:"wide_runs",size:279},{name:"bye_runs",size:50},{name:"legbye_runs",size:200},{name:"noball_runs",size:49},{name:"penalty_runs",size:0}]}]},{name:"KKR",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:3432},{name:"Fours",size:7e3}]},{name:"Run",children:[{name:"1",size:5780},{name:"2",size:1896},{name:"3",size:153},{name:"5",size:45}]}]},{name:"Extras",children:[{name:"wide_runs",size:638},{name:"bye_runs",size:99},{name:"legbye_runs",size:369},{name:"noball_runs",size:69},{name:"penalty_runs",size:0}]}]},{name:"SH",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:1764},{name:"Fours",size:3116}]},{name:"Run",children:[{name:"1",size:2805},{name:"2",size:1032},{name:"3",size:84},{name:"5",size:5}]}]},{name:"Extras",children:[{name:"wide_runs",size:270},{name:"bye_runs",size:39},{name:"legbye_runs",size:158},{name:"noball_runs",size:30},{name:"penalty_runs",size:0}]}]},{name:"KT",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:318},{name:"Fours",size:680}]},{name:"Run",children:[{name:"1",size:572},{name:"2",size:170},{name:"3",size:18},{name:"5",size:0}]}]},{name:"Extras",children:[{name:"wide_runs",size:89},{name:"bye_runs",size:7},{name:"legbye_runs",size:36},{name:"noball_runs",size:11},{name:"penalty_runs",size:0}]}]},{name:"KXP",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:4044},{name:"Fours",size:7576}]},{name:"Run",children:[{name:"1",size:5757},{name:"2",size:2156},{name:"3",size:165},{name:"5",size:30}]}]},{name:"Extras",children:[{name:"wide_runs",size:568},{name:"bye_runs",size:113},{name:"legbye_runs",size:403},{name:"noball_runs",size:49},{name:"penalty_runs",size:0}]}]},{name:"GL",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:378},{name:"Fours",size:968}]},{name:"Run",children:[{name:"1",size:708},{name:"2",size:246},{name:"3",size:18},{name:"5",size:0}]}]},{name:"Extras",children:[{name:"wide_runs",size:84},{name:"bye_runs",size:4},{name:"legbye_runs",size:37},{name:"noball_runs",size:7},{name:"penalty_runs",size:0}]}]},{name:"RCB",children:[{name:"Hits",children:[{name:"Boundries",children:[{name:"Sixes",size:5160},{name:"Fours",size:7380}]},{name:"Run",children:[{name:"1",size:5790},{name:"2",size:2008},{name:"3",size:126},{name:"5",size:20}]}]},{name:"Extras",children:[{name:"wide_runs",size:608},{name:"bye_runs",size:66},{name:"legbye_runs",size:351},{name:"noball_runs",size:82},{name:"penalty_runs",size:0}]}]}]}},"75df":function(e,n,a){},"8c52":function(e,n,a){"use strict";var s=a("b585"),i=a.n(s);i.a},"9fb7":function(e){e.exports=[{year:"2008",total:"17937"},{year:"2009",total:"16353"},{year:"2010",total:"18883"},{year:"2011",total:"21154"},{year:"2012",total:"22453"},{year:"2013",total:"22602"},{year:"2014",total:"18931"},{year:"2015",total:"18353"},{year:"2016",total:"18862"}]},ae1a:function(e,n,a){"use strict";var s=a("75df"),i=a.n(s);i.a},b585:function(e,n,a){},ba2e:function(e,n,a){},f8e4:function(e,n,a){}}]);
//# sourceMappingURL=chunk-660cf9d6.e31e0994.js.map