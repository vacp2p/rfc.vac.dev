"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[529],{27782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={title:"23/WAKU2-TOPICS",name:"Waku v2 Topic Usage Recommendations",status:"draft",category:"Informational",editor:"Oskar Thoren &lt;oskarth@titanproxy.com&gt;",contributors:["Hanno Cornelius &lt;hanno@status.im&gt;","Daniel Kaiser &lt;danielkaiser@status.im&gt;"]},o=void 0,s={unversionedId:"informational/23/topics",id:"informational/23/topics",title:"23/WAKU2-TOPICS",description:"- Status: draft",source:"@site/waku/informational/23/topics.md",sourceDirName:"informational/23",slug:"/informational/23/topics",permalink:"/waku/informational/23/topics",draft:!1,tags:[],version:"current",frontMatter:{title:"23/WAKU2-TOPICS",name:"Waku v2 Topic Usage Recommendations",status:"draft",category:"Informational",editor:"Oskar Thoren &lt;oskarth@titanproxy.com&gt;",contributors:["Hanno Cornelius &lt;hanno@status.im&gt;","Daniel Kaiser &lt;danielkaiser@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"22/TOY-CHAT",permalink:"/waku/informational/22/toy-chat"},next:{title:"27/WAKU2-PEERS",permalink:"/waku/informational/27/peers"}},p={},l=[{value:"Pubsub Topics",id:"pubsub-topics",level:2},{value:"Pubsub Topic Format",id:"pubsub-topic-format",level:3},{value:"Default PubSub Topic",id:"default-pubsub-topic",level:3},{value:"Application Specific Names",id:"application-specific-names",level:3},{value:"Named Topic Sharding Example",id:"named-topic-sharding-example",level:3},{value:"Content Topics",id:"content-topics",level:2},{value:"Content Topic Format",id:"content-topic-format",level:3},{value:"Content Topic Naming Recommendations",id:"content-topic-naming-recommendations",level:3},{value:"Differences with Waku v1",id:"differences-with-waku-v1",level:2},{value:"Bridging Waku v1 and Waku v2",id:"bridging-waku-v1-and-waku-v2",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Category: Informational"),(0,i.kt)("li",{parentName:"ul"},"Editor: Oskar Thoren ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,i.kt)("li",{parentName:"ul"},"Contributors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hanno Cornelius ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:hanno@status.im"},"hanno@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Daniel Kaiser ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:danielkaiser@status.im"},"danielkaiser@status.im"),">")))),(0,i.kt)("p",null,"This document outlines recommended usage of topic names in Waku v2.\nIn ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/10/waku2"},"10/WAKU2 spec")," there are two types of topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pubsub topics, used for routing"),(0,i.kt)("li",{parentName:"ul"},"Content topics, used for content-based filtering")),(0,i.kt)("h2",{id:"pubsub-topics"},"Pubsub Topics"),(0,i.kt)("p",null,"Pubsub topics are used for routing of messages (see ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/11/relay"},"11/WAKU2-RELAY"),"),\nand can be named implicitly by Waku sharding (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/waku-RFC/standards/core/relay-sharding.md"},"RELAY-SHARDING"),").\nThis document comprises recommendations for explicitly naming pubsub topics\n(e.g. when choosing ",(0,i.kt)("em",{parentName:"p"},"named sharding")," as specified in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/waku-RFC/standards/core/relay-sharding.md"},"RELAY-SHARDING"),")."),(0,i.kt)("h3",{id:"pubsub-topic-format"},"Pubsub Topic Format"),(0,i.kt)("p",null,"Pubsub topics SHOULD follow the following structure:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/waku/2/{topic-name}")),(0,i.kt)("p",null,"This namespaced structure makes compatibility, discoverability,\nand automatic handling of new topics easier."),(0,i.kt)("p",null,"The first two parts indicate"),(0,i.kt)("p",null,"1) it relates to the Waku protocol domain, and\n2) the version is 2."),(0,i.kt)("p",null,"If applicable, it is RECOMMENDED to structure ",(0,i.kt)("inlineCode",{parentName:"p"},"{topic-name}"),"\nin a hierarchical way as well."),(0,i.kt)("p",null,">"," ",(0,i.kt)("em",{parentName:"p"},"Note"),": In previous versions of this document, the structure was ",(0,i.kt)("inlineCode",{parentName:"p"},"/waku/2/{topic-name}/{encoding}"),".\nThe now deprecated ",(0,i.kt)("inlineCode",{parentName:"p"},"/{encoding}")," was always set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/proto"),",\nwhich indicated that the ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/11/RELAY#protobuf-definition"},"data field"),"\nin pubsub is serialized/encoded as protobuf.\nThe inspiration for this format was taken from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#topics-and-messages"},"Ethereum 2 P2P spec"),".\nHowever, because the payload of messages transmitted over ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/11/relay"},"11/WAKU2-RELAY"),"\nmust be a ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/14/message"},"14/WAKU2-MESSAGE"),",\nwhich specifies the wire format as protobuf,",(0,i.kt)("inlineCode",{parentName:"p"},"/proto")," is the only valid encoding.\nThis makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"/proto")," indication obsolete.\nThe encoding of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field of a Waku Message\nis indicated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"/{encoding}")," part of the content topic name.\nSpecifying an encoding is only significant for the actual payload/data field.\nWaku preserves this option by allowing to specify an encoding\nfor the WakuMessage payload field as part of the content topic name."),(0,i.kt)("h3",{id:"default-pubsub-topic"},"Default PubSub Topic"),(0,i.kt)("p",null,"The Waku v2 default pubsub topic is:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/waku/2/default-waku/proto")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"{topic name}")," part is ",(0,i.kt)("inlineCode",{parentName:"p"},"default-waku/proto"),",\nwhich indicates it is default topic for exchanging WakuMessages;\n",(0,i.kt)("inlineCode",{parentName:"p"},"/proto")," remains for backwards compatibility."),(0,i.kt)("h3",{id:"application-specific-names"},"Application Specific Names"),(0,i.kt)("p",null,"Larger apps can segregate their pubsub meshes using topics named like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/waku/2/status/\n/waku/2/walletconnect/\n")),(0,i.kt)("p",null,"This indicates that these networks carry WakuMessages,\nbut for different domains completely."),(0,i.kt)("h3",{id:"named-topic-sharding-example"},"Named Topic Sharding Example"),(0,i.kt)("p",null,"The following is an example of named sharding, as specified in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/waku-RFC/standards/core/relay-sharding.md"},"RELAY-SHARDING"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"waku/2/waku-9_shard-0/\n...\nwaku/2/waku-9_shard-9/\n")),(0,i.kt)("p",null,"This indicates explicitly that the network traffic has been partitioned into 10 buckets."),(0,i.kt)("h2",{id:"content-topics"},"Content Topics"),(0,i.kt)("p",null,"The other type of topic that exists in Waku v2 is a content topic.\nThis is used for content based filtering.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/14/message"},"14/WAKU2-MESSAGE spec"),"\nfor where this is specified.\nNote that this doesn't impact routing of messages between relaying nodes,\nbut it does impact how request/reply protocols such as\n",(0,i.kt)("a",{parentName:"p",href:"/standards/core/12/filter"},"12/WAKU2-FILTER")," and\n",(0,i.kt)("a",{parentName:"p",href:"/standards/core/13/store"},"13/WAKU2-STORE")," are used."),(0,i.kt)("p",null,"This is especially useful for nodes that have limited bandwidth,\nand only want to pull down messages that match this given content topic."),(0,i.kt)("p",null,"Since all messages are relayed using the relay protocol regardless of content topic,\nyou MAY use any content topic you wish without impacting how messages are relayed."),(0,i.kt)("h3",{id:"content-topic-format"},"Content Topic Format"),(0,i.kt)("p",null,"The format for content topics is as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/{application-name}/{version-of-the-application}/{content-topic-name}/{encoding}")),(0,i.kt)("p",null,"The name of a content topic is application-specific.\nAs an example, here's the content topic used for an upcoming testnet:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/toychat/2/huilong/proto")),(0,i.kt)("h3",{id:"content-topic-naming-recommendations"},"Content Topic Naming Recommendations"),(0,i.kt)("p",null,"Application names should be unique to avoid conflicting issues with other protocols.\nApplications should specify their version (if applicable) in the version field.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"{content-topic-name}")," portion of the content topic is up to the application,\nand depends on the problem domain.\nIt can be hierarchical, for instance to separate content, or\nto indicate different bandwidth and privacy guarantees.\nThe encoding field indicates the serialization/encoding scheme\nfor the ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/14/message#payloads"},"WakuMessage payload")," field."),(0,i.kt)("h2",{id:"differences-with-waku-v1"},"Differences with Waku v1"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/deprecated/5/waku0"},"5/WAKU1")," there is no actual routing.\nAll messages are sent to all other nodes.\nThis means that we are implicitly using the same pubsub topic\nthat would be something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/waku/1/default-waku/rlp\n")),(0,i.kt)("p",null,"Topics in Waku v1 correspond to Content Topics in Waku v2."),(0,i.kt)("h3",{id:"bridging-waku-v1-and-waku-v2"},"Bridging Waku v1 and Waku v2"),(0,i.kt)("p",null,"To bridge Waku v1 and Waku v2 we have a ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/15/bridge"},"15/WAKU-BRIDGE"),".\nFor mapping Waku v1 topics to Waku v2 content topics,\nthe following structure for the content topic SHOULD be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/waku/1/<4bytes-waku-v1-topic>/rfc26\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<4bytes-waku-v1-topic>")," SHOULD be the lowercase hex representation\nof the 4-byte Waku v1 topic.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"0x")," prefix SHOULD be used.\n",(0,i.kt)("inlineCode",{parentName:"p"},"/rfc26")," indicates that the bridged content is encoded according to RFC ",(0,i.kt)("a",{parentName:"p",href:"/standards/application/26/payload"},"26/WAKU2-PAYLOAD"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"/standards/core/15/bridge"},"15/WAKU-BRIDGE")," for a description\nof the bridged fields."),(0,i.kt)("p",null,"This creates a direct mapping between the two protocols.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/waku/1/0x007f80ff/rfc26\n")),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via\n",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/10/waku2"},"10/WAKU2 spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/11/relay"},"11/WAKU2-RELAY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/waku-RFC/standards/core/relay-sharding.md"},"RELAY-SHARDING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#topics-and-messages"},"Ethereum 2 P2P spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/14/message"},"14/WAKU2-MESSAGE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/12/filter"},"12/WAKU2-FILTER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/13/store"},"13/WAKU2-STORE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/deprecated/5/waku0"},"6/WAKU1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/core/15/bridge"},"15/WAKU-BRIDGE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/standards/application/26/payload"},"26/WAKU-PAYLOAD"))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);