"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[5375],{75592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"STATUS-URL-SCHEME",name:"Status URL Scheme",status:"raw",category:"Standards Track",editor:"Felicio Mununga &lt;felicio@status.im&gt;",contributors:null},i=void 0,u={unversionedId:"raw/url-scheme",id:"raw/url-scheme",title:"STATUS-URL-SCHEME",description:"- Status: raw",source:"@site/status/raw/url-scheme.md",sourceDirName:"raw",slug:"/raw/url-scheme",permalink:"/status/raw/url-scheme",draft:!1,tags:[],version:"current",frontMatter:{title:"STATUS-URL-SCHEME",name:"Status URL Scheme",status:"raw",category:"Standards Track",editor:"Felicio Mununga &lt;felicio@status.im&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"STATUS-URL-DATA",permalink:"/status/raw/url-data"},next:{title:"24/STATUS-CURATION",permalink:"/status/24/curation"}},o={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Background / Rationale / Motivation",id:"background--rationale--motivation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Related scope",id:"related-scope",level:4},{value:"Features",id:"features",level:5},{value:"Wire Format Specification / Syntax",id:"wire-format-specification--syntax",level:2},{value:"Schemes",id:"schemes",level:3},{value:"Paths",id:"paths",level:3},{value:"Discussions",id:"discussions",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: raw"),(0,r.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,r.kt)("li",{parentName:"ul"},"Editor: Felicio Mununga ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:felicio@status.im"},"felicio@status.im"),">")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This document describes URL scheme for previewing and\ndeep linking content as well as for triggering actions."),(0,r.kt)("h2",{id:"background--rationale--motivation"},"Background / Rationale / Motivation"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("h4",{id:"related-scope"},"Related scope"),(0,r.kt)("h5",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Onboarding website"),(0,r.kt)("li",{parentName:"ul"},"Link preview"),(0,r.kt)("li",{parentName:"ul"},"Link sharing"),(0,r.kt)("li",{parentName:"ul"},"Deep linking"),(0,r.kt)("li",{parentName:"ul"},"Routing and navigation"),(0,r.kt)("li",{parentName:"ul"},"Payment requests"),(0,r.kt)("li",{parentName:"ul"},"Chat creation")),(0,r.kt)("h2",{id:"wire-format-specification--syntax"},"Wire Format Specification / Syntax"),(0,r.kt)("h3",{id:"schemes"},"Schemes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internal ",(0,r.kt)("inlineCode",{parentName:"li"},"status-app://")),(0,r.kt)("li",{parentName:"ul"},"External ",(0,r.kt)("inlineCode",{parentName:"li"},"https://")," (i.e. univers/deep links)")),(0,r.kt)("h3",{id:"paths"},"Paths"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Url"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User profile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/u/<encoded_data>#<user_chat_key>")),(0,r.kt)("td",{parentName:"tr",align:null},"Preview/Open user profile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/u#<user_chat_key>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/u#<ens_name>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Community"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/c/<encoded_data>#<community_chat_key>")),(0,r.kt)("td",{parentName:"tr",align:null},"Preview/Open community")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/c#<community_chat_key>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Community channel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/cc/<encoded_data>#<community_chat_key >")),(0,r.kt)("td",{parentName:"tr",align:null},"Preview/Open community channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/cc/<channel_uuid>#<community_chat_key>")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"discussions"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ","<",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/specs/pull/159"},"https://github.com/status-im/specs/pull/159"),">"),(0,r.kt)("li",{parentName:"ul"},"See ","<",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-web/issues/327"},"https://github.com/status-im/status-web/issues/327"),">")),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./url-data"},"STATUS-URL-DATA"))))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);