"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6368:function(t,n,r){r.d(n,{O:function(){return u}});var e=r(7689),c=r(1087),a=r(184),u=function(t){var n=t.movies,r=(0,e.TH)();return(0,a.jsx)("ul",{children:n.map((function(t){return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:r.pathname+r.search},children:t.title||t.name})},t.id)}))})}},5481:function(t,n,r){r.d(n,{Ai:function(){return f},Hx:function(){return l},Y5:function(){return p},b9:function(){return s},xc:function(){return v}});var e=r(5861),c=r(7757),a=r.n(c),u=r(3263),o="cc007006eb9f47c2d0b09069b6e665b4",i="https://api.themoviedb.org/3",s=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/all/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},5415:function(t,n,r){r.r(n);var e=r(5861),c=r(9439),a=r(7757),u=r.n(a),o=r(5481),i=r(2791),s=r(6368),f=r(184);n.default=function(){var t=(0,i.useState)((function(){return null})),n=(0,c.Z)(t,2),r=n[0],a=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.b9)();case 3:n=t.sent,a(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),r&&(0,f.jsx)(s.O,{movies:r})]})}}}]);
//# sourceMappingURL=415.19adbe58.chunk.js.map