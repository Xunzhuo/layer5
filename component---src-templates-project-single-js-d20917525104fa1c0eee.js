(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),l=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||l()}},RxsB:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("vOnD"),l=n("Bl7J"),o=n("vrFN"),i=n("mvsK"),u=n("A2+M"),m=n("xFQ1"),s=n("YP3a"),p=c.d.div.withConfig({displayName:"projectSinglestyle__ProjectPageWrapper",componentId:"k9xenn-0"})(["\n    margin: 10px 0 10px 0;\n"]),f=function(e){var t=e.data.mdx,n=t.frontmatter,r=t.body;return a.a.createElement(p,null,a.a.createElement(s.a,{title:n.title}),a.a.createElement("div",{className:"single-post-wrapper"},a.a.createElement(m.b,null,a.a.createElement("div",{className:"single-project-block"},a.a.createElement(u.MDXRenderer,null,r)))))},d=n("iJo/"),b=n("DZth"),y=n("WL7g");t.default=function(e){var t=e.data;return a.a.createElement(c.a,{theme:y.a},a.a.createElement(l.a,null,a.a.createElement(b.a,null),a.a.createElement(o.a,{title:""+t.mdx.frontmatter.title}),a.a.createElement(i.a,null),a.a.createElement(f,{data:t}),a.a.createElement(d.a,null)))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),c=n("lSNA"),l=n("8OQS");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),m=n("7ljp").mdx,s=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,c=l(e,["scope","children"]),o=s(t),p=u.useMemo((function(){if(!n)return null;var e=i({React:u,mdx:m},o),t=Object.keys(e),c=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(c)))}),[n,t]);return u.createElement(p,i({},c))}},YP3a:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("Wbzz"),l=n("m7xX"),o=n.n(l),i=n("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 2rem auto 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),u=n("tBDR"),m=function(e,t){return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(c.Link,{to:"/community/members/"+o()(e.name)},a.a.createElement("span",null,e.name)):a.a.createElement("span",null,e.name))};t.a=function(e){var t=e.category,n=e.title,r=e.subtitle,l=e.author,o=e.thumbnail,s=!1;l&&(s=Object(c.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==l.name})));return a.a.createElement(i,null,a.a.createElement("div",{className:"page-header"},o&&a.a.createElement("div",{className:"feature-image"},a.a.createElement(u.a,Object.assign({},o,{imgStyle:{objectFit:"contain"},alt:n}))),a.a.createElement("h1",null,n),r&&a.a.createElement("h3",null,r),t&&a.a.createElement("div",{className:"breadcrumbs"},a.a.createElement("span",null,a.a.createElement("h5",null,"Category:"),a.a.createElement("p",{key:t},t)),l&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,a.a.createElement("h5",null,"By:"),a.a.createElement("p",null,m(l,s))))),!t&&l&&a.a.createElement("div",{className:"breadcrumbs post"},a.a.createElement("h5",null,"By:"),a.a.createElement("span",null,m(l,s)))))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},m7xX:function(e,t){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function c(t,n,l){return a()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var a=[null];a.push.apply(a,t);var c=new(Function.bind.apply(e,a));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c},tBDR:function(e,t,n){"use strict";var r=n("zLVn"),a=n("q1tI"),c=n.n(a),l=n("9eSz"),o=n.n(l);t.a=function(e){var t=e.childImageSharp,n=e.extension,a=e.publicURL,l=e.alt,i=Object(r.a)(e,["childImageSharp","extension","publicURL","alt"]);return t||"svg"!==n?c.a.createElement(o.a,Object.assign({fluid:t.fluid},i,{alt:l})):c.a.createElement("div",{className:"gatsby-image-wrapper"},c.a.createElement("img",{src:a,alt:l}))}}}]);
//# sourceMappingURL=component---src-templates-project-single-js-d20917525104fa1c0eee.js.map