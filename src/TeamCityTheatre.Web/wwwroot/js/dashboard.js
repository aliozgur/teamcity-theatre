webpackJsonp([0],{26:function(e,t,i){"use strict";i.d(t,"b",function(){return p}),i.d(t,"a",function(){return N});var n=i(0),a=(i.n(n),i(75)),r=(i.n(a),i(79)),s=(i.n(r),i(80)),l=(i.n(s),i(78)),c=(i.n(l),i(77)),u=(i.n(c),i(81)),d=(i.n(u),i(82)),m=(i.n(d),i(83)),o=(i.n(m),i(84)),b=(i.n(o),i(86)),v=(i.n(b),i(85)),f=(i.n(v),n.Observable.defer(function(){return n.Observable.ajax.getJSON("api/views")})),w=new a.Subject,p=function(e){return w.next(e)},E=w,g=function(e){return e.switchMap(function(e){return n.Observable.of(null).delay(3e3).mergeMap(function(){return n.Observable.ajax.getJSON("api/viewdata/"+e.id)}).repeat().merge(n.Observable.ajax.getJSON("api/viewdata/"+e.id))})}(E),N=function(e,t,i){return n.Observable.combineLatest(e.startWith(null),t.startWith(null),i.startWith(null),function(e,t,i){return{views:e,selectedView:t,selectedViewData:i}})}(f,E,g)},39:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var n=i(14),a=(i.n(n),i(26)),r=i(41),s=i(3),l=(i.n(s),i(43)),c=(i.n(l),function(e){return null===e.views?i.i(n.createElement)("div",null,i.i(n.createElement)("i",{className:"fa fa-spin fa-cog"})," Loading views"):null===e.selectedView?i.i(n.createElement)(u,{views:e.views}):null===e.selectedViewData?i.i(n.createElement)("div",null,i.i(n.createElement)("i",{className:"fa fa-spin fa-cog"})," Loading view data"):i.i(n.createElement)(d,{view:e.selectedView,data:e.selectedViewData})}),u=function(e){return i.i(n.createElement)("div",{id:"views"},e.views.map(function(e){return i.i(n.createElement)("a",{className:"btn btn-primary view",id:e.id,onClick:function(){return i.i(a.b)(e)}},e.name," ",i.i(n.createElement)("span",{className:"badge"},e.tiles.length," tiles"))}))},d=function(e){return i.i(n.createElement)("div",{id:e.view.id},i.i(n.createElement)("div",{id:"tiles"},i.i(n.createElement)("div",{className:"tiles-wrapper"},e.data.tiles.map(function(t){return i.i(n.createElement)(m,{view:e.view,data:t})}))))},m=function(e){var t=r.a[e.data.combinedBuildStatus].toLowerCase(),a="height-"+e.view.defaultNumberOfBranchesPerTile;return i.i(n.createElement)("div",{id:e.data.id,className:"tile "+t+" "+a+" col-xs-6 col-sm-4 col-md-3 col-lg-2"},i.i(n.createElement)("h4",{className:"tile-title"},e.data.label),i.i(n.createElement)("div",{className:"tile-builds"},e.data.builds.map(function(e){return i.i(n.createElement)(o,{build:e})})))},o=function(e){var t="finished"===e.build.state,a="running"===e.build.state,s=e.build.status===r.a.Success,l=r.a[e.build.status].toLowerCase(),c=t?100:e.build.percentageComplete,u=s?"progress-bar-success":"progress-bar-danger",d=a?"progress-bar-striped active":"";return i.i(n.createElement)("div",{id:e.build.id,className:"tile-build "+l},i.i(n.createElement)("div",{className:"progress"},i.i(n.createElement)("div",{className:"progress-bar "+u+" "+d,style:{width:c+"%"}},i.i(n.createElement)("span",{className:"branch"},e.build.branchName),t?i.i(n.createElement)(b,{build:e.build}):null,a?i.i(n.createElement)(f,{build:e.build}):null)))},b=function(e){var t=s(e.build.finishDate);return i.i(n.createElement)("span",{className:"execution-timestamp"},l(t,"ddd D MMM YYYY, HH:mm:ss"))},v=function(e){var t=Math.abs(e/60|0),i=Math.abs(e%60);return 0===i?t+"m":0===t?i+"s":t+"m "+i+"s"},f=function(e){var t=e.build.estimatedTotalSeconds-e.build.elapsedSeconds,a=t<0,r=a?"Over time":"Remaining",s=v(t);return i.i(n.createElement)("span",{className:"remaining"},r+": "+s)}},40:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(14),a=(i.n(n),i(14)),r=(i.n(a),i(39)),s=i(26),l=document.getElementById("root");s.a.subscribe(function(e){return i.i(a.render)(i.i(n.createElement)(r.a,{views:e.views,selectedView:e.selectedView,selectedViewData:e.selectedViewData}),l)})},41:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n;!function(e){e[e.Unknown=0]="Unknown",e[e.Success=1]="Success",e[e.Failure=2]="Failure",e[e.Error=3]="Error"}(n||(n={}))}},[40]);