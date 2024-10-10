"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[3597],{74601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"21/WAKU2-FAULT-TOLERANT-STORE",name:"Waku v2 Fault-Tolerant Store",status:"draft",editor:"Sanaz Taheri &lt;sanaz@status.im&gt;",contributors:null},o=void 0,s={unversionedId:"standards/application/21/fault-tolerant-store",id:"standards/application/21/fault-tolerant-store",title:"21/WAKU2-FAULT-TOLERANT-STORE",description:"- Status: draft",source:"@site/waku/standards/application/21/fault-tolerant-store.md",sourceDirName:"standards/application/21",slug:"/standards/application/21/fault-tolerant-store",permalink:"/waku/standards/application/21/fault-tolerant-store",draft:!1,tags:[],version:"current",frontMatter:{title:"21/WAKU2-FAULT-TOLERANT-STORE",name:"Waku v2 Fault-Tolerant Store",status:"draft",editor:"Sanaz Taheri &lt;sanaz@status.im&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"20/TOY-ETH-PM",permalink:"/waku/standards/application/20/toy-eth-pm"},next:{title:"26/WAKU2-PAYLOAD",permalink:"/waku/standards/application/26/payload"}},l={},p=[{value:"Method description",id:"method-description",level:2},{value:"Security Consideration",id:"security-consideration",level:2},{value:"Wire Specification",id:"wire-specification",level:2},{value:"Payloads",id:"payloads",level:3},{value:"HistoryQuery",id:"historyquery",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Status: draft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Editor: Sanaz Taheri ","<",(0,i.kt)("a",{parentName:"p",href:"mailto:sanaz@status.im"},"sanaz@status.im"),">"),(0,i.kt)("p",{parentName:"li"}," The reliability of ",(0,i.kt)("a",{parentName:"p",href:"../../core/13/store"},"13/WAKU2-STORE"),"\nprotocol heavily relies on the fact that full nodes i.e.,\nthose who persist messages have high availability and\nuptime and do not miss any messages.\nIf a node goes offline,\nthen it will risk missing all the messages transmitted\nin the network during that time.\nIn this specification,\nwe provide a method that makes the store protocol resilient\nin presence of faulty nodes.\nRelying on this method,\nnodes that have been offline for a time window will be able to fix the gap\nin their message history when getting back online.\nMoreover, nodes with lower availability and\nuptime can leverage this method to reliably provide the store protocol services\nas a full node."))),(0,i.kt)("h2",{id:"method-description"},"Method description"),(0,i.kt)("p",null," As the first step\ntowards making the ",(0,i.kt)("a",{parentName:"p",href:"../../core/13/store"},"13/WAKU2-STORE")," protocol fault-tolerant,\nwe introduce a new type of time-based query through which nodes fetch message history\nfrom each other based on their desired time window.\nThis method operates based on the assumption that the querying node\nknows some other nodes in the store protocol\nwhich have been online for that targeted time window.  "),(0,i.kt)("h2",{id:"security-consideration"},"Security Consideration"),(0,i.kt)("p",null,"The main security consideration to take into account\nwhile using this method is that a querying node\nhas to reveal its offline time to the queried node.\nThis will gradually result in the extraction of the node's activity pattern\nwhich can lead to inference attacks."),(0,i.kt)("h2",{id:"wire-specification"},"Wire Specification"),(0,i.kt)("p",null,"We extend the ",(0,i.kt)("a",{parentName:"p",href:"../../core/13/store#payloads"},"HistoryQuery")," protobuf message\nwith two fields of ",(0,i.kt)("inlineCode",{parentName:"p"},"start_time")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end_time")," to signify the time range to be queried."),(0,i.kt)("h3",{id:"payloads"},"Payloads"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'syntax = "proto3";\n\nmessage HistoryQuery {\n  // the first field is reserved for future use\n  string pubsubtopic = 2;\n  repeated ContentFilter contentFilters = 3;\n  PagingInfo pagingInfo = 4;\n  + sint64 start_time = 5;\n  + sint64 end_time = 6;\n}\n\n')),(0,i.kt)("h3",{id:"historyquery"},"HistoryQuery"),(0,i.kt)("p",null,"RPC call to query historical messages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time"),":\nthis field MAY be filled out to signify the starting point of the queried time window.\nThis field holds the Unix epoch time in nanoseconds.",(0,i.kt)("br",{parentName:"li"}),"The ",(0,i.kt)("inlineCode",{parentName:"li"},"messages")," field of the corresponding\n",(0,i.kt)("a",{parentName:"li",href:"../../core/13/store#HistoryResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"HistoryResponse")),"\nMUST contain historical waku messages whose\n",(0,i.kt)("a",{parentName:"li",href:"../../core/14/message#Payloads"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),"\nis larger than or equal to the ",(0,i.kt)("inlineCode",{parentName:"li"},"start_time"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end_time"),":\nthis field MAY be filled out to signify the ending point of the queried time window.\nThis field holds the Unix epoch time in nanoseconds.\nThe ",(0,i.kt)("inlineCode",{parentName:"li"},"messages")," field of the corresponding\n",(0,i.kt)("a",{parentName:"li",href:"../../core/13/store#HistoryResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"HistoryResponse")),"\nMUST contain historical waku messages whose\n",(0,i.kt)("a",{parentName:"li",href:"../../core/14/message#Payloads"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp"))," is less than or equal to the ",(0,i.kt)("inlineCode",{parentName:"li"},"end_time"),".")),(0,i.kt)("p",null,"A time-based query is considered valid if\nits ",(0,i.kt)("inlineCode",{parentName:"p"},"end_time")," is larger than or equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"start_time"),".\nQueries that do not adhere to this condition will not get through e.g.\nan open-end time query in which the ",(0,i.kt)("inlineCode",{parentName:"p"},"start_time")," is given but\nno  ",(0,i.kt)("inlineCode",{parentName:"p"},"end_time")," is supplied is not valid.\nIf both ",(0,i.kt)("inlineCode",{parentName:"p"},"start_time")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"end_time")," are omitted then no time-window filter takes place."),(0,i.kt)("p",null,"In order to account for nodes asynchrony, and\nassuming that nodes may be out of sync for at most 20 seconds\n(i.e., 20000000000 nanoseconds),\nthe querying nodes SHOULD add an offset of 20 seconds to their offline time window.\nThat is if the original window is ","[",(0,i.kt)("inlineCode",{parentName:"p"},"l"),",",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"]","\nthen the history query SHOULD be made for ",(0,i.kt)("inlineCode",{parentName:"p"},"[start_time: l - 20s, end_time: r + 20s]"),"."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"HistoryQuery")," preserves ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," operation among the queried attributes.\nAs such, the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," field of the corresponding\n",(0,i.kt)("a",{parentName:"p",href:"../../core/13/store#HistoryResponse"},(0,i.kt)("inlineCode",{parentName:"a"},"HistoryResponse")),"\nMUST contain historical waku messages that satisfy the indicated  ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsubtopic")," AND\n",(0,i.kt)("inlineCode",{parentName:"p"},"contentFilters")," AND the time range ","[",(0,i.kt)("inlineCode",{parentName:"p"},"start_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"end_time"),"]","."),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via\n",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../core/13/store"},"13/WAKU2-STORE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../standards/core/14/message#Payloads"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);