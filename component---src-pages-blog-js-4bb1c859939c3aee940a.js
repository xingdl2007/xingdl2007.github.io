(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return v});var n=a(0),l=a.n(n),r=a(200),c=a.n(r),i=a(188),o=a(221),s=a(191),m=a(194),d=a(199),u=a(196),g=a(205),E=a(206),f=a(222),b={default:4,1279:3,850:2,500:1},p=6,h=function(e){var t=e.node,a=t.fields,n=t.excerpt,r=t.frontmatter,o=r.title,s=r.date,m=r.category,d=r.timeToRead,u=r.cover;return l.a.createElement(i.a,{to:a.slug},l.a.createElement("div",{className:"box is-paddingless has-rounded-corner has-bg-shadow has-hover-effect",style:{marginBottom:"1rem"}},l.a.createElement(c.a,{style:{borderRadius:"10px 10px 0 0"},fluid:u.childImageSharp.fluid}),l.a.createElement("div",{className:"media-content",style:{padding:"1rem"}},l.a.createElement("div",{className:"content"},l.a.createElement("p",{style:{marginBottom:"0.5em"}},l.a.createElement("strong",null,o)),l.a.createElement("p",{className:"is-size-6",style:{marginBottom:"0.5em"}},n),l.a.createElement("p",{className:"is-size-7"},s," in ",l.a.createElement("strong",null,m)," · ",d," min read")))))},v="3383270910";t.default=function(e){var t=e.data,a=e.location,r=t.blog.edges,c=Object(s.a)(r),i=Object(n.useState)(p),v=i[0],y=i[1],N=Object(f.a)(function(){v>=O.length?x(!0):setTimeout(function(){y(function(e){return e+p}),B(!1)},500)}),w=N[0],B=N[1],j=N[2],x=N[3],O=Object(o.a)(r,a);Object(n.useEffect)(function(){return x(!(v<O.length))},[w,j]);var k=" ("+O.length+")",z=o.b?o.b+k:k;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:"Blog"}),l.a.createElement("header",null,l.a.createElement(d.a,{title:"Blog",subtitle:z,burgerIcon:"more"},l.a.createElement(g.a,{categories:c,type:"blog"}))),l.a.createElement("main",{className:"fade-in"},l.a.createElement("article",{className:"hero is-light"},l.a.createElement("div",{className:"hero-body",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement(E.a,{breakpoint:b},O.slice(0,v).map(function(e){return l.a.createElement(h,{key:e.node.id,node:e.node})})),w&&!j&&l.a.createElement("div",{className:"button is-light is-loading"},"Loading..."))))),l.a.createElement(u.a,null))}}}]);