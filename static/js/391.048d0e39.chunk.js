"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[391],{197:function(n,e,t){t.d(e,{DM:function(){return s},E$:function(){return u},Hg:function(){return a},Tn:function(){return p},gH:function(){return c}});var r=t(243),o="https://api.themoviedb.org/3",i="b548e18956509bbab355422895e2e3b8",a=function(){return r.Z.get("".concat(o,"/trending/all/week?api_key=").concat(i))},c=function(n){return r.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n))},u=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"))},s=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"))},p=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},391:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,i,a=t(861),c=t(439),u=t(757),s=t.n(u),p=t(791),f=t(197),l=t(87),d=t(689),g=t(168),h=t(444),m=h.ZP.div(r||(r=(0,g.Z)(["\n  padding: 20px;\n  background-color: #f0f0f0;\n  min-height: 100vh;\n"]))),v=h.ZP.form(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n\n  button {\n    background-color: #2196f3;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 10px 20px;\n    margin-left: 10px;\n  }\n\n  input {\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    padding: 10px;\n    margin-right: 10px;\n    flex: 1;\n  }\n"]))),x=h.ZP.ul(i||(i=(0,g.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  li {\n    margin-bottom: 10px;\n  }\n\n  a {\n    color: #000;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]))),b=t(184),Z=function(){var n=(0,p.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)([]),i=(0,c.Z)(o,2),u=i[0],g=i[1],h=(0,d.TH)(),Z=(0,l.lr)(),k=(0,c.Z)(Z,2),y=k[0],_=k[1],j=y.get("name");return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.gH)(j);case 2:e=n.sent,g(e.data.results),console.log(e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();j&&n()}),[j]),(0,b.jsxs)(m,{children:[(0,b.jsx)("h1",{children:"Search movies"}),(0,b.jsxs)(v,{onSubmit:function(n){n.preventDefault(),_({name:t}),r("")},children:[(0,b.jsx)("input",{name:"query",value:t,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name",onChange:function(n){r(n.target.value)}}),(0,b.jsx)("button",{type:"submit",children:"Search"})]}),(0,b.jsx)(x,{children:u.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{state:{from:h},to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=391.048d0e39.chunk.js.map