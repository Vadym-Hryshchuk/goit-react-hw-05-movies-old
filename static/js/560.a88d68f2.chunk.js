"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[560],{560:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var a=e(885),r=e(791),c=e(871),i=e(832);var o,u=e.p+"static/media/defaultAvatar.a8e1480d49f034f5425859405661f457.svg",s=e(168),f=e(31).ZP.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 10px;\n  list-style: none;\n  background-color: rgba(128, 128, 128, 0.1);\n\n  li {\n    margin: 15px;\n    flex-basis: calc((100% - 150px) / 5);\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    background-color: rgba(128, 128, 128, 1);\n  }\n  p {\n    margin: 0;\n    padding: 5px;\n    text-align: center;\n    background-color: rgba(128, 128, 128, 0.5);\n  }\n"]))),p=e(184);function l(){var n=(0,c.UO)().movieId,t=(0,r.useState)([]),e=(0,a.Z)(t,2),o=e[0],s=e[1];return(0,r.useEffect)((function(){i.zv(n).then((function(n){var t=n.cast;return s(t)}))}),[n]),(0,p.jsx)(f,{children:o.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:(t=n.profile_path,t?"https://image.tmdb.org/t/p/w200//".concat(t):u),alt:n.name,width:200,height:300}),(0,p.jsx)("p",{children:n.name})]})},n.id);var t}))})}},832:function(n,t,e){e.d(t,{JN:function(){return f},TP:function(){return l},tx:function(){return g},z1:function(){return p},zv:function(){return d}});var a=e(861),r=e(757),c=e.n(r),i="a8667995004f1618098a3acfcfde7ac0",o="https://api.themoviedb.org/3";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:if(!(e=n.sent).ok){n.next=9;break}return n.next=6,e.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0=Promise.reject(new Error("Not found"));case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return u("".concat(o,"/trending/movie/week?api_key=").concat(i))}function p(n,t){return u("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=").concat(t,"&include_adult=false"))}function l(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"))}function d(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function g(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(t))}}}]);
//# sourceMappingURL=560.a88d68f2.chunk.js.map