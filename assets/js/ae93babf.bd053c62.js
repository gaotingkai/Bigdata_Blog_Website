"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[3059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),g=l,C=k["".concat(c,".").concat(g)]||k[g]||s[g]||a;return n?r.createElement(C,o(o({ref:t},u),{},{components:n})):r.createElement(C,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={authors:[{name:"skylines"}],title:"Flink CDC 2.3.0 Announce",date:new Date("2022-11-18T21:47:11.000Z"),tags:["\u6570\u636e\u96c6\u6210"],keywords:["Fink CDC","Flink"],description:"Flink CDC 2.3.0 \u8fd1\u671f\u53d1\u5e03"},o=void 0,i={permalink:"/Bigdata_Blog_Website/blog/Flink CDC 2.3.0 Announce",editUrl:"https://sophiadata.github.io/bigdata-blog/blog/Flink CDC 2.3.0 Announce.md",source:"@site/blog/Flink CDC 2.3.0 Announce.md",title:"Flink CDC 2.3.0 Announce",description:"Flink CDC 2.3.0 \u8fd1\u671f\u53d1\u5e03",date:"2022-11-18T21:47:11.000Z",formattedDate:"2022\u5e7411\u670818\u65e5",tags:[{label:"\u6570\u636e\u96c6\u6210",permalink:"/Bigdata_Blog_Website/blog/tags/\u6570\u636e\u96c6\u6210"}],readingTime:1.85,hasTruncateMarker:!1,authors:[{name:"skylines"}],frontMatter:{authors:[{name:"skylines"}],title:"Flink CDC 2.3.0 Announce",date:"2022-11-18T21:47:11.000Z",tags:["\u6570\u636e\u96c6\u6210"],keywords:["Fink CDC","Flink"],description:"Flink CDC 2.3.0 \u8fd1\u671f\u53d1\u5e03"},prevItem:{title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",permalink:"/Bigdata_Blog_Website/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65"},nextItem:{title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",permalink:"/Bigdata_Blog_Website/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4ac4fbb159234e04acd3b6fe865ce53f.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("h1",{id:"\u65b0\u8fde\u63a5\u5668"},"\u65b0\u8fde\u63a5\u5668"),(0,l.kt)("p",null,"2.3.0 \u65b0\u589e\u4e86 DB2 CDC \u8fde\u63a5\u5668"),(0,l.kt)("h1",{id:"\u589e\u91cf\u5feb\u7167\u8fce\u6765\u65b0\u7684\u8fde\u63a5\u5668\u6210\u5458"},"\u589e\u91cf\u5feb\u7167\u8fce\u6765\u65b0\u7684\u8fde\u63a5\u5668\u6210\u5458"),(0,l.kt)("p",null,"2.3.0 \u7248\u672cMongoDB CDC\uff0cOracle CDC \u4e24\u5927\u8fde\u63a5\u5668\u5747\u652f\u6301\u4e86\u589e\u91cf\u5feb\u7167\uff0c\u5b9e\u73b0\u65e0\u9501\u8bfb\u53d6+\u5e76\u53d1\u8bfb\u53d6+\u65ad\u70b9\u7eed\u4f20"),(0,l.kt)("h1",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,l.kt)("p",null,"2.3.0 \u7248\u672c MySQL CDC \u8fde\u63a5\u5668\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u5927\u5e45\u63d0\u5347"),(0,l.kt)("h1",{id:"flink-\u652f\u6301"},"Flink \u652f\u6301"),(0,l.kt)("p",null,"2.3.0 \u7248\u672c\u4e00\u53e3\u6c14\u517c\u5bb9\u4e86Flink 1.13 & 1.14 & 1.15 & 1.16 \u56db\u4e2a\u7248\u672c"),(0,l.kt)("h1",{id:"\u66f4\u591a\u7ec6\u8282"},"\u66f4\u591a\u7ec6\u8282"),(0,l.kt)("p",null,"MySQL CDC \u652f\u6301\u6307\u5b9a\u4f4d\u70b9/\u6307\u5b9a\u65f6\u95f4\u6233/earliest\u4f4d\u70b9\u542f\u52a8"),(0,l.kt)("p",null,"MySQL CDC \u652f\u6301\u5f02\u6b65\u5206\u7247\uff0c\u652f\u6301checkpoint\u671f\u95f4\u5206\u7247\u6682\u505c"),(0,l.kt)("p",null,"MySQL CDC \u652f\u6301\u5168\u90e8\u5b57\u7b26\u96c6\uff0c\u652f\u6301\u5bbd\u5bb9\u9ed8\u8ba4\u503c\uff0c\u652f\u6301\u81ea\u52a8\u83b7\u53d6\u6570\u636e\u5e93\u65f6\u533a"),(0,l.kt)("p",null,"MySQL CDC JM\u5185\u5b58\u548cTM\u5185\u5b58\u4f18\u5316\uff0cbinlog\u8bfb\u53d6\u6027\u80fd\u4f18\u5316"),(0,l.kt)("p",null,"OceanBase CDC \u4fee\u590d\u4e86\u65f6\u533a\u95ee\u9898\uff0c\u652f\u6301\u5168\u7c7b\u578b\u5bf9\u63a5\u5230 Flink SQL"),(0,l.kt)("p",null,"MongoDB CDC \u652f\u6301\u4e86\u66f4\u591a\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f18\u5316\u4e86\u6355\u83b7\u8868\u7684\u7b5b\u9009\u8fc7\u7a0b"),(0,l.kt)("p",null,"TiDB CDC \u4fee\u590d\u4e86\u5168\u589e\u91cf\u5207\u6362\u65f6\u6570\u636e\u4e22\u5931\u95ee\u9898\uff0c\u652f\u6301\u8bfb\u53d6\u65f6 region\u5207\u6362"),(0,l.kt)("p",null,"Postgres CDC \u652f\u6301\u7684\u66f4\u591a\u7684\u7c7b\u578b\uff0c\u5f00\u653e\u4e86\u66f4\u591a\u914d\u7f6e\u9879"),(0,l.kt)("p",null,"SqlServer CDC \u652f\u6301\u4e86\u66f4\u591a\u7684\u7248\u672c\uff0c\u5b8c\u5584\u4e86\u6587\u6863"),(0,l.kt)("p",null,"MySQL CDC \u548c OceanBase CDC \u63d0\u4f9b\u4e86\u4e2d\u6587\u6587\u6863\uff0cOceanBase CDC \u63d0\u4f9b\u4e86\u89c6\u9891\u6559\u7a0b"),(0,l.kt)("p",null,"\u8be6\u7ec6 release note \u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u67e5\u770b\u6240\u6709issue \u7ec6\u8282"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ververica/flink-cdc-connectors/releases"},"https://github.com/ververica/flink-cdc-connectors/releases")),(0,l.kt)("p",null,"Flink cdc \u9489\u9489\u7fa4"),(0,l.kt)("p",null,"\u7fa4\u53f7\uff1a33121212"),(0,l.kt)("p",null,"\u4e8c\u7ef4\u7801\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9601882/158350201-a1de35e6-0399-4a91-b5b0-e2fd5d33e33c.png",alt:"\u626b\u7801\u52a0\u5165"})),(0,l.kt)("p",null,"\u5185\u5bb9\u53c2\u8003 flink cdc \u53d1\u5e03\u7fa4\u516c\u544a"),(0,l.kt)("p",null,"\u9e23\u8c22 \u96ea\u5c3d\u8001\u5e08"))}s.isMDXComponent=!0}}]);