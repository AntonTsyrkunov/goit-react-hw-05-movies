"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[324],{197:function(n,e,t){t.d(e,{DM:function(){return u},E$:function(){return s},Hg:function(){return a},Tn:function(){return d},gH:function(){return c}});var r=t(243),i="https://api.themoviedb.org/3",o="b548e18956509bbab355422895e2e3b8",a=function(){return r.Z.get("".concat(i,"/trending/all/week?api_key=").concat(o))},c=function(n){return r.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n))},s=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"))},u=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"))},d=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},324:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,c,s,u,d,m,l,g,p,f,h=t(861),v=t(439),x=t(757),Z=t.n(x),b=t(87),j=t(689),_=t(791),k=t(197),w=t(168),P=t(444),y=P.ZP.div(r||(r=(0,w.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n"]))),U=(0,P.ZP)(b.rU)(i||(i=(0,w.Z)(["\n  background-color: #1c1c1c;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  margin-bottom: 50px;\n"]))),z=P.ZP.div(o||(o=(0,w.Z)(["\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  margin-top: 20px;\n"]))),S=P.ZP.img(a||(a=(0,w.Z)(["\n  margin-right: 2rem;\n"]))),C=P.ZP.div(c||(c=(0,w.Z)(["\n  flex: 1;\n"]))),E=P.ZP.h1(s||(s=(0,w.Z)(["\n  font-size: 3rem;\n  margin-bottom: 0.5rem;\n"]))),H=P.ZP.p(u||(u=(0,w.Z)(["\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n"]))),O=P.ZP.h2(d||(d=(0,w.Z)(["\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n"]))),R=P.ZP.h3(m||(m=(0,w.Z)(["\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n"]))),T=P.ZP.p(l||(l=(0,w.Z)(["\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n"]))),$=P.ZP.div(g||(g=(0,w.Z)(["\n  margin-top: 2rem;\n"]))),q=P.ZP.ul(p||(p=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),B=P.ZP.li(f||(f=(0,w.Z)(["\n  margin-right: 2rem;\n"]))),D=t(184),G=function(){var n,e,t,r=(0,_.useState)({}),i=(0,v.Z)(r,2),o=i[0],a=i[1],c=(0,j.UO)().movieId,s=(0,j.TH)();(0,_.useEffect)((function(){var n=function(){var n=(0,h.Z)(Z().mark((function n(){var e;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,k.E$)(c);case 2:e=n.sent,a(e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[c]);var u=(0,_.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,D.jsxs)(y,{children:[(0,D.jsx)(U,{to:u.current,children:"Back to list"}),(0,D.jsxs)(z,{children:[(0,D.jsx)(S,{src:"https://image.tmdb.org/t/p/w200".concat(o.poster_path),alt:""}),(0,D.jsxs)(C,{children:[(0,D.jsx)(E,{children:o.original_title}),(0,D.jsx)(H,{children:o.vote_average}),(0,D.jsx)(O,{children:"Overview"}),(0,D.jsx)("p",{children:o.overview}),(0,D.jsx)(R,{children:"Genres"}),(0,D.jsx)(T,{children:null===(t=o.genres)||void 0===t?void 0:t.map((function(n){return"".concat(n.name," ")}))})]})]}),(0,D.jsx)($,{children:(0,D.jsxs)(q,{children:[(0,D.jsx)(B,{children:(0,D.jsx)(b.rU,{to:"cast",children:"Cast"})}),(0,D.jsx)(B,{children:(0,D.jsx)(b.rU,{to:"reviews",children:"Reviews"})})]})}),(0,D.jsx)(_.Suspense,{fallback:(0,D.jsx)("div",{children:"Loading page..."}),children:(0,D.jsx)(j.j3,{})})]})}}}]);
//# sourceMappingURL=324.f954832f.chunk.js.map