(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});a(46),a(84),a(48),a(34),a(28),a(45),a(11);var r=a(0),n=a.n(r),l=a(188),c=a(200),o=a.n(c),s=a(208),i=a(196),m=a(199),d=a(194),g=a(207),u=a(191),p=a(210),E=a(219),h=a(220);function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f="3217390837";t.default=function(e){var t=e.data,a=e.pageContext,c=e.location,f=t.blog,y=f.excerpt,v=f.frontmatter,w=f.html,N=f.timeToRead,j=f.fields,x=v.title,O=v.date,k=v.tags,A=v.category,S=v.cover.childImageSharp.fluid,B={title:x,description:y,keywords:["mustofa.id","blog"].concat(b(k)),image:S.src},I=Object(r.useReducer)(g.d,g.c),T=I[0],C=I[1],J=Object(u.c)(j.slug).toString();return Object(r.useEffect)(function(){Object(g.b)(C,J)},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,B),n.a.createElement("header",null,n.a.createElement(m.a,{backTo:"/blog",title:A,subtitle:"· "+N+" min read",burgerIcon:"share-2"},n.a.createElement(h.a,{url:c.href}))),n.a.createElement("main",null,n.a.createElement("div",{className:"hero is-light"},n.a.createElement("div",{className:"hero-body",style:{paddingBottom:"0"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"box has-bg-shadow has-rounded-corner is-paddingless"},n.a.createElement("figure",{className:"image"},n.a.createElement(o.a,{fluid:S,className:"coverpic",alt:"cover post"})),n.a.createElement("div",{className:"content has-content-padding"},n.a.createElement("h1",{className:"title is-3 has-text-centered",style:{marginBottom:"1rem"}},x),n.a.createElement("p",{className:"title is-7 has-text-grey is-post-detail",style:{marginBottom:"2.5rem"}},O+" - "+N+" min read - ",n.a.createElement(l.a,{to:"/blog?"+u.f.category+"="+A.toLowerCase()},A)),n.a.createElement("article",{dangerouslySetInnerHTML:{__html:w},style:{marginBottom:"1rem"}}),k&&n.a.createElement("div",{className:"hastag"},n.a.createElement(s.a,{type:"blog",tags:k})),n.a.createElement(g.a.Provider,{value:{state:T,dispatch:C}},n.a.createElement(p.a,{pageContext:a,title:x})))))))),n.a.createElement(i.a,null),n.a.createElement(E.a,{shown:T.message,message:T.message,type:"dark"}))}}}]);