(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var n=a(0),r=a.n(n),i=a(188),c=a(200),o=a.n(c),l=a(209),s=a(192),u=a(193),m=a(194),d=a(189),f=a(203),v=a(204),b=a(210),g={default:4,1279:3,850:2,500:1},E=6,h=function(e){var t=e.node,a=t.fields,n=t.frontmatter,c=n.title,l=n.cover;return r.a.createElement(i.a,{to:a.slug},r.a.createElement("div",{className:"wrapper"},r.a.createElement("figure",{className:"image has-rounded-corner has-bg-shadow has-hover-effect",style:{marginBottom:"1rem"}},r.a.createElement(o.a,{className:"has-rounded-corner thumb",fluid:l.childImageSharp.fluid}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"caption"},r.a.createElement("h1",{className:"title is-6"},c),r.a.createElement("p",{className:"subtitle is-7 is-caption-detail"},"view"))))))},p="3634805474";t.default=function(e){var t=e.data,a=e.location,i=t.gallery.edges,c=Object(d.a)(i),o=Object(n.useState)(E),p=o[0],w=o[1],y=Object(b.a)(function(){p>=x.length?k(!0):setTimeout(function(){w(function(e){return e+E}),j(!1)},300)}),N=y[0],j=y[1],O=y[2],k=y[3],x=Object(l.a)(i,a);Object(n.useEffect)(function(){return k(!(p<x.length))},[N,O]);var A=" ("+x.length+")",S=l.b?l.b+A:A;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Gallery"}),r.a.createElement("header",null,r.a.createElement(u.a,{title:"Gallery",subtitle:S,burgerIcon:"more"},r.a.createElement(f.a,{categories:c,type:"gallery"}))),r.a.createElement("main",{className:"fade-in"},r.a.createElement("article",{className:"hero is-light"},r.a.createElement("div",{className:"hero-body",style:{paddingBottom:"0"}},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement(v.a,{breakpoint:g},x.slice(0,p).map(function(e){return r.a.createElement(h,{key:e.node.id,node:e.node})})),N&&!O&&r.a.createElement("div",{className:"button is-light is-loading"},"Loading..."))))),r.a.createElement(s.a,null))}},189:function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"e",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"g",function(){return c}),a.d(t,"c",function(){return o}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return s});a(199),a(13),a(28),a(24),a(11),a(84);var n={tag:"tag",category:"category"},r=function(e){var t,a,r=e.search,i=!1;if(r||r.trim()){var c=new URLSearchParams(r);for(var o in a=c.keys().next().value,n)if(a===n[o]){i=!0;break}t=c.get(a)}return[i,t,a]};function i(e){return e.map(function(e){return e.node.frontmatter.category}).filter(function(e,t,a){return a.indexOf(e)===t})}function c(e,t){return Object.assign({},e,{},t)}function o(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t}var l=function(e,t){return new RegExp(e.join("|"),"i").test(t)},s=function(e,t){return e.toUpperCase()===t.toUpperCase()}},192:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"© 2018-2019 ",r.a.createElement("a",{href:"https://mustofa.id"},"mustofa.id"),r.a.createElement("br",null),"Powered by ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")," and"," ",r.a.createElement("a",{href:"https://bulma.io"},"Bulma"),r.a.createElement("br",null),"Starter source code is available on"," ",r.a.createElement("a",{href:"https://github.com/mustofa-id/gatsby-starter-griddy"},"Github"))))}},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(195),c=a(188),o=a(190),l=function(e){var t=e.onClick,a=e.isActive,n=e.burgerIcon;return r.a.createElement("div",{onClick:t,role:"button",className:"navbar-burger burger"+(a?" is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"griddy-nav-menu"},n?r.a.createElement("div",{className:"column",style:{marginTop:"1.8px"}},r.a.createElement(o.a,{name:n,style:{display:"block",margin:"0 auto"},size:"24",color:"#0a0a0a",strokeWidth:"1.2px"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"})))};t.a=function(e){var t=e.backTo,a=void 0===t?"/":t,s=e.title,u=e.subtitle,m=e.children,d=e.burgerIcon,f=Object(n.useState)(!1),v=f[0],b=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,{bodyAttributes:{class:"has-navbar-fixed-top"}}),r.a.createElement("nav",{className:"navbar is-fixed-top is-white has-bg-shadow",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(c.a,{className:"navbar-item",to:a},r.a.createElement(o.a,{size:"18",name:"arrow-left"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement("span",null,s,u&&r.a.createElement("span",{className:"has-text-grey"}," "+u))),m?r.a.createElement(l,{onClick:function(){b(!v)},isActive:v,burgerIcon:d}):null),r.a.createElement("div",{id:"griddy-nav-menu",className:"navbar-menu"+(v?" is-active":"")},m))))}},203:function(e,t,a){"use strict";a(47),a(85),a(46),a(11),a(48),a(34),a(28);var n=a(0),r=a.n(n),i=a(188),c=a(189),o=a(190);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s="All",u=function(e){return e.toLowerCase()};t.a=function(e){var t=e.categories,a=e.type,n=[s].concat(l(t));return r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("p",{className:"navbar-link is-arrowless navbar-hidden"},r.a.createElement(o.a,{name:"more",size:"22",strokeWidth:"1.5px"})),r.a.createElement("div",{className:"navbar-dropdown is-right"},n.map(function(e,t){return r.a.createElement(i.a,{key:"cat-"+e+"-"+t,className:"navbar-item",to:e===s?"/"+u(a):"/"+u(a)+"?"+c.f.category+"="+u(e)},e)}))))}},204:function(e,t,a){"use strict";a(13);var n=a(0),r=a.n(n);t.a=function(e){var t=e.column,a=e.children,i=e.breakpoint;if(!a)return null;var c=Object(n.useState)(s()),o=c[0],l=c[1];function s(){if("undefined"!=typeof window){var e=window.innerWidth||1/0,t=1/0,a=i.default;for(var n in i){var r=parseInt(n);r>0&&e<=r&&r<t&&(t=r,a=i[n])}return Math.max(1,parseInt(a)||1)}return 0}function u(){var e=s();o!==e&&l(e)}Object(n.useEffect)(function(){if("undefined"!=typeof window)return u(),window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}});return r.a.createElement("div",{className:"is-masonry is-centered"},function(){for(var e=new Array(o),n=0;n<a.length;n++){var i=n%o;e[i]||(e[i]=[]),e[i].push(a[n])}var c=100/e.length+"%";return e.map(function(e,a){return r.a.createElement("div",Object.assign({key:"item-key--"+a,className:"is-masonry-column",style:{width:c}},t),e)})}())}},209:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var n,r=a(189);function i(e,t){n=void 0;var a=Object(r.e)(t),i=a[0],c=a[1],o=a[2];return i?(n=o===r.f.tag?"#"+c:"@"+c,c?e.filter(function(e){return o===r.f.tag?Object(r.d)(e.node.frontmatter.tags,c):o!==r.f.category||Object(r.b)(e.node.frontmatter.category,c)}):e):e}},210:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0);function r(e){var t=Object(n.useState)(!1),a=t[0],r=t[1],i=Object(n.useState)(!1),c=i[0],o=i[1];return Object(n.useEffect)(function(){var e=!1;function t(){e||(window.requestAnimationFrame(function(){!function(){var e=window.innerHeight/2,t=window.innerHeight+document.documentElement.scrollTop,n=document.documentElement.offsetHeight-e;if(t<=n||a||c)return;o(!1),r(!0)}(),e=!1}),e=!0)}return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[]),Object(n.useEffect)(function(){a&&!c&&e()},[a,c]),[a,r,c,o]}}}]);