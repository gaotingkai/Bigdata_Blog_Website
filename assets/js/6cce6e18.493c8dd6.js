"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[1945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,b=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","\u8ba1\u7b97\u6846\u67b6"]},i=void 0,l={permalink:"/Bigdata_Blog_Website/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",source:"@site/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4.md",title:"Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",description:"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6",date:"2022-11-25T11:17:24.000Z",formattedDate:"2022\u5e7411\u670825\u65e5",tags:[{label:"Flink",permalink:"/Bigdata_Blog_Website/blog/tags/flink"},{label:"\u8ba1\u7b97\u6846\u67b6",permalink:"/Bigdata_Blog_Website/blog/tags/\u8ba1\u7b97\u6846\u67b6"}],readingTime:.26,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","\u8ba1\u7b97\u6846\u67b6"]},prevItem:{title:"Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf",permalink:"/Bigdata_Blog_Website/blog/Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf"},nextItem:{title:"Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f",permalink:"/Bigdata_Blog_Website/blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282457-7ed1794c-99bf-4f57-8b73-6be3e93d4e82.png",alt:"img"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282486-0ad6f589-2049-4968-a9a5-40d7d3ec2f73.png",alt:"img"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282548-0d1c4754-e895-454e-9ad1-0d1ad00df6a8.png",alt:"img"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u56fe\u793a\u94fe\u63a5")),(0,n.kt)("p",null,"[1]"," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ververica/flink-sql-gateway"},"https://github.com/ververica/flink-sql-gateway")),(0,n.kt)("p",null,"[2]","\n",(0,n.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/FLINK/FLIP-91%3A+Support+SQL+Gateway"},"https://cwiki.apache.org/confluence/display/FLINK/FLIP-91%3A+Support+SQL+Gateway")),(0,n.kt)("p",null,"[3]","\n",(0,n.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/hive_read_write/#source-parallelism-inference"},"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/hive_read_write/#source-parallelism-inference")),(0,n.kt)("p",null,"[4]"," ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/FLINK-27338"},"https://issues.apache.org/jira/browse/FLINK-27338")),(0,n.kt)("p",null,"[5]","\n",(0,n.kt)("a",{parentName:"p",href:"https://www.yuque.com/docs/share/b89479ab-9c24-45c8-9390-77299ae0c4cd?#AkK9"},"https://www.yuque.com/docs/share/b89479ab-9c24-45c8-9390-77299ae0c4cd?#AkK9")),(0,n.kt)("p",null,"[6]"," ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/FLINK-25318"},"https://issues.apache.org/jira/browse/FLINK-25318")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282523-9e64992b-cdc8-4324-9d75-7aec2a4a0116.png",alt:"img"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u56fe\u793a\u94fe\u63a5")),(0,n.kt)("p",null,"\u300aTPC-DS\u5404\u5f15\u64ce\u8017\u65f6\u300b\n",(0,n.kt)("a",{parentName:"p",href:"https://www.yuque.com/deadwind/notes/tpcds-benchmark-table"},"https://www.yuque.com/deadwind/notes/tpcds-benchmark-table")),(0,n.kt)("p",null,"\u300aTPC-DS\u8d44\u6e90\u914d\u7f6e\u300b\n",(0,n.kt)("a",{parentName:"p",href:"https://www.yuque.com/deadwind/notes/tpcds-resource"},"https://www.yuque.com/deadwind/notes/tpcds-resource")))}u.isMDXComponent=!0}}]);