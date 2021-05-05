(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ex-typescript-18c6d43b8103150ebd102d90aadbbdcd.png"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(106)),i={id:"quick-start",title:"Quick Start Guide"},l={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start Guide",description:"Create a PowerPoint in 4 easy steps",source:"@site/docs/quick-start.md",slug:"/quick-start",permalink:"/PptxGenJS/docs/quick-start",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616823923,formattedLastUpdatedAt:"3/27/2021",sidebar:"docs",previous:{title:"Installation",permalink:"/PptxGenJS/docs/installation"},next:{title:"Creating a Presentation",permalink:"/PptxGenJS/docs/usage-pres-create"}},c=[{value:"Create a PowerPoint in 4 easy steps",id:"create-a-powerpoint-in-4-easy-steps",children:[]},{value:"Modern Projects",id:"modern-projects",children:[{value:"Sample Code",id:"sample-code",children:[]},{value:"TypeScript Support",id:"typescript-support",children:[]}]},{value:"Client Web Browser",id:"client-web-browser",children:[{value:"Sample Code",id:"sample-code-1",children:[]}]}],p={toc:c};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-powerpoint-in-4-easy-steps"},"Create a PowerPoint in 4 easy steps"),Object(o.b)("p",null,"PptxGenJS PowerPoint presentations are created by following 4 basic steps. See examples below by environment."),Object(o.b)("p",null,"That's really all there is to it!"),Object(o.b)("h2",{id:"modern-projects"},"Modern Projects"),Object(o.b)("h3",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx",metastring:'title="HelloWorld.ts"',title:'"HelloWorld.ts"'},'import pptxgen from "pptxgenjs";\n\n// 1. Create a Presentation\nlet pres = new pptxgen();\n\n// 2. Add a Slide to the presentation\nlet slide = pres.addSlide();\n\n// 3. Add 1+ objects (Tables, Shapes, etc.) to the Slide\nslide.addText(\n    "Hello World from PptxGenJS...",\n    {\n        x: 1.5,\n        y: 1.5,\n        color: \'363636\',\n        fill: { color:\'F1F1F1\' },\n        align: pres.AlignH.center\n    }\n);\n\n// 4. Save the Presentation\npres.writeFile("Sample Presentation.pptx");\n')),Object(o.b)("h3",{id:"typescript-support"},"TypeScript Support"),Object(o.b)("p",null,"Modern application developers using ES6 with Angular, React, TypeScript, etc. benefit from full typescript defs."),Object(o.b)("p",null,"Learn as you code in a modern development with included TypeScript definitions the documentation comes to you."),Object(o.b)("p",null,Object(o.b)("img",{alt:"TypeScript Support",src:n(204).default})),Object(o.b)("h2",{id:"client-web-browser"},"Client Web Browser"),Object(o.b)("h3",{id:"sample-code-1"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="HelloWorld.js"',title:'"HelloWorld.js"'},"// 1. Create a new Presentation\nlet pres = new PptxGenJS();\n\n// 2. Add a Slide\nlet slide = pres.addSlide();\n\n// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide\nslide.addText(\n    \"Hello World from PptxGenJS...\",\n    {\n        x: 1.5,\n        y: 1.5,\n        color: '363636',\n        fill: { color:'F1F1F1' },\n        align: pres.AlignH.center\n    }\n);\n\n// 4. Save the Presentation\npres.writeFile(\"Sample Presentation.pptx\");\n")))}s.isMDXComponent=!0}}]);