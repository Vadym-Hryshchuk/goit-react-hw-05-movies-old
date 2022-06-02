"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[198],{832:function(n,e,t){t.d(e,{JN:function(){return l},TP:function(){return p},tx:function(){return f},z1:function(){return d},zv:function(){return x}});var r=t(861),a=t(757),i=t.n(a),c="a8667995004f1618098a3acfcfde7ac0",o="https://api.themoviedb.org/3";function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0=Promise.reject(new Error("Not found"));case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return s("".concat(o,"/trending/movie/week?api_key=").concat(c))}function d(n,e){return s("".concat(o,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=").concat(e,"&include_adult=false"))}function p(n){return s("".concat(o,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"))}function x(n){return s("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"))}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=").concat(e))}},198:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r=t(885),a=t(791),i=t(871),c=t(832);var o,s,u,l=t.p+"static/media/defaultMovie.916e3d46057790936d9cdd24e27d580f.svg",d=t(168),p=t(31),x=p.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  padding: 5px;\n"]))),f=p.ZP.img(s||(s=(0,d.Z)(["\n  width: 300px;\n"]))),g=p.ZP.div(u||(u=(0,d.Z)(["\n  padding: 10px;\n  h1 {\n    margin: 0 0 10px;\n    text-align: center;\n    text-transform: uppercase;\n\n    text-shadow: 0 1px 0 #206dfd, 0 2px 0 #02fd16, 0 3px 0 #ffee00,\n      0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1),\n      0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),\n      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),\n      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);\n  }\n  h2 {\n    text-align: center;\n    text-transform: uppercase;\n  }\n"]))),v=t(184);function h(n){var e=n.movie,t=n.src,r=n.genresList,a=e.poster_path,i=e.title,c=e.name,o=e.vote_average,s=e.overview,u=e.genres;return(0,v.jsx)("main",{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(f,{src:t(a),alt:null!==i&&void 0!==i?i:c}),(0,v.jsxs)(g,{children:[(0,v.jsx)("h1",{children:null!==i&&void 0!==i?i:c}),(0,v.jsx)("p",{children:(0,v.jsx)("span",{children:"User Score: ".concat(o)})}),(0,v.jsx)("h2",{children:"Owerview"}),(0,v.jsx)("p",{children:s}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:r(u)})]})]})})}var m,b,j=t(504),k=p.ZP.ul(m||(m=(0,d.Z)(["\n  display: inline-flex;\n  margin: 0 0 15px;\n  padding: 0;\n  list-style: none;\n\n  li {\n    &:not(:last-child) {\n      margin-left: 50px;\n      margin-right: 10px;\n    }\n  }\n"]))),w=(0,p.ZP)(j.OL)(b||(b=(0,d.Z)(["\n  display: inline-block;\n  width: 70px;\n  margin: 0;\n  padding: 0 5px;\n  text-decoration: none;\n  border: 1px solid rgba(0, 87, 184, 0.7);\n  border-radius: 5px;\n  text-align: center;\n  color: currentColor;\n\n  &.active {\n    background-color: rgba(0, 87, 184, 0.7);\n    border: 2px solid rgba(255, 215, 0, 0.7);\n  }\n  &:hover {\n    background-color: rgba(255, 215, 0, 0.7);\n    border: 2px solid rgba(0, 87, 184, 0.7);\n  }\n"])));function _(n){var e=n.state;return(0,v.jsxs)(k,{children:[(0,v.jsx)("li",{children:(0,v.jsx)(w,{to:"cast",state:e,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(w,{to:"reviews",state:e,children:"Reviews"})})]})}function y(n){var e=n.onClick;return(0,v.jsx)("button",{onClick:e,children:"Go back"})}function Z(){var n,e=(0,a.useState)([]),t=(0,r.Z)(e,2),o=t[0],s=t[1],u=(0,i.UO)().movieId,d=(0,i.s0)(),p=(0,i.TH)();(0,a.useEffect)((function(){c.TP(u).then(s)}),[u]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{onClick:function(){var n,e;d(null!==(n=null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")}}),(0,v.jsx)(h,{movie:o,src:function(n){return n?"https://image.tmdb.org/t/p/w500//".concat(n):l},genresList:function(n){var e,t=[];if(!(null!==(e=!n)&&void 0!==e?e:0===n.length))return n.map((function(n){return t.push(n.name)})),t.join(" ")}}),(0,v.jsx)(_,{state:{from:null===p||void 0===p||null===(n=p.state)||void 0===n?void 0:n.from}}),(0,v.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=198.ad63fa51.chunk.js.map