(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{186:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return v});var n=t(0),l=t.n(n),r=t(188),c=t(200),i=t.n(c),s=t(221),o=t(196),m=t(199),u=t(194),d=t(191),E=t(205),f=t(206),g=t(222),h={default:4,1279:3,850:2,500:1},b=6,p=function(e){var a=e.node,t=a.fields,n=a.frontmatter,c=n.title,s=n.cover;return l.a.createElement(r.a,{to:t.slug},l.a.createElement("div",{className:"wrapper"},l.a.createElement("figure",{className:"image has-rounded-corner has-bg-shadow has-hover-effect",style:{marginBottom:"1rem"}},l.a.createElement(i.a,{className:"has-rounded-corner thumb",fluid:s.childImageSharp.fluid}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"caption"},l.a.createElement("h1",{className:"title is-6"},c),l.a.createElement("p",{className:"subtitle is-7 is-caption-detail"},"view"))))))},v="3634805474";a.default=function(e){var a=e.data,t=e.location,r=a.gallery.edges,c=Object(d.a)(r),i=Object(n.useState)(b),v=i[0],N=i[1],y=Object(g.a)(function(){v>=B.length?k(!0):setTimeout(function(){N(function(e){return e+b}),j(!1)},300)}),w=y[0],j=y[1],O=y[2],k=y[3],B=Object(s.a)(r,t);Object(n.useEffect)(function(){return k(!(v<B.length))},[w,O]);var G=" ("+B.length+")",I=s.b?s.b+G:G;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:"Gallery"}),l.a.createElement("header",null,l.a.createElement(m.a,{title:"Gallery",subtitle:I,burgerIcon:"more"},l.a.createElement(E.a,{categories:c,type:"gallery"}))),l.a.createElement("main",{className:"fade-in"},l.a.createElement("article",{className:"hero is-light"},l.a.createElement("div",{className:"hero-body",style:{paddingBottom:"0"}},l.a.createElement("div",{className:"container has-text-centered"},l.a.createElement(f.a,{breakpoint:h},B.slice(0,v).map(function(e){return l.a.createElement(p,{key:e.node.id,node:e.node})})),w&&!O&&l.a.createElement("div",{className:"button is-light is-loading"},"Loading..."))))),l.a.createElement(o.a,null))}}}]);