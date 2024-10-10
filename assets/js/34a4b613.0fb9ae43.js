"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[6700],{11395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"14/WAKU2-MESSAGE",name:"Waku v2 Message",status:"draft",category:"Standards Track",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:["Sanaz Taheri &lt;sanaz@status.im&gt;","Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;","Lorenzo Delgado &lt;lorenzo@status.im&gt;","Abhimanyu Rawat &lt;abhi@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;"]},s=void 0,o={unversionedId:"standards/core/14/message",id:"standards/core/14/message",title:"14/WAKU2-MESSAGE",description:"- Status: draft",source:"@site/waku/standards/core/14/message.md",sourceDirName:"standards/core/14",slug:"/standards/core/14/message",permalink:"/waku/standards/core/14/message",draft:!1,tags:[],version:"current",frontMatter:{title:"14/WAKU2-MESSAGE",name:"Waku v2 Message",status:"draft",category:"Standards Track",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:["Sanaz Taheri &lt;sanaz@status.im&gt;","Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;","Lorenzo Delgado &lt;lorenzo@status.im&gt;","Abhimanyu Rawat &lt;abhi@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;"]},sidebar:"defaultSidebar",previous:{title:"13/WAKU2-STORE",permalink:"/waku/standards/core/13/store"},next:{title:"15/WAKU-BRIDGE",permalink:"/waku/standards/core/15/bridge"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Semantics",id:"semantics",level:2},{value:"Waku Message",id:"waku-message",level:3},{value:"Message Attributes",id:"message-attributes",level:3},{value:"Wire Format",id:"wire-format",level:2},{value:"Payload encryption",id:"payload-encryption",level:2},{value:"Whisper/Waku v1 envelope compatibility",id:"whisperwaku-v1-envelope-compatibility",level:2},{value:"Deterministic message hashing",id:"deterministic-message-hashing",level:2},{value:"Test vectors",id:"test-vectors",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Confidentiality, integrity, and authenticity",id:"confidentiality-integrity-and-authenticity",level:3},{value:"Reliability of the <code>timestamp</code> attribute",id:"reliability-of-the-timestamp-attribute",level:3},{value:"Reliability of the <code>ephemeral</code> attribute",id:"reliability-of-the-ephemeral-attribute",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,i.kt)("li",{parentName:"ul"},"Editor: Hanno Cornelius ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:hanno@status.im"},"hanno@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Contributors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sanaz Taheri ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:sanaz@status.im"},"sanaz@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Aaryamann Challani ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:p1ge0nh8er@proton.me"},"p1ge0nh8er@proton.me"),">"),(0,i.kt)("li",{parentName:"ul"},"Lorenzo Delgado ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:lorenzo@status.im"},"lorenzo@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Abhimanyu Rawat ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:abhi@status.im"},"abhi@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Oskar Thor\xe9n ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">")))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Waku v2 is a family of modular peer-to-peer protocols for secure communication.\nThese protocols are designed to be secure, privacy-preserving,\nand censorship-resistant and can run in resource-restricted environments.\nAt a high level, Waku v2 implements a Pub/Sub messaging pattern over libp2p and\nadds capabilities."),(0,i.kt)("p",null,"The present document specifies the Waku v2 message format,\na way to encapsulate the messages sent with specific information security goals,\nand Whisper/Waku v1 backward compatibility."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"When sending messages over Waku, there are multiple requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One may have a separate encryption layer as part of the application."),(0,i.kt)("li",{parentName:"ul"},"One may want to provide efficient routing for resource-restricted devices."),(0,i.kt)("li",{parentName:"ul"},"One may want to provide compatibility with ",(0,i.kt)("a",{parentName:"li",href:"/legacy/6/waku1"},"Waku v1 envelopes"),"."),(0,i.kt)("li",{parentName:"ul"},"One may want encrypted payloads by default."),(0,i.kt)("li",{parentName:"ul"},"One may want to provide unlinkability to get metadata protection.")),(0,i.kt)("p",null,"This specification attempts to provide for these various requirements."),(0,i.kt)("h2",{id:"semantics"},"Semantics"),(0,i.kt)("h3",{id:"waku-message"},"Waku Message"),(0,i.kt)("p",null,"A Waku message is constituted by the combination of data payload and\nattributes that, for example, a ",(0,i.kt)("em",{parentName:"p"},"publisher")," sends to a ",(0,i.kt)("em",{parentName:"p"},"topic")," and\nis eventually delivered to ",(0,i.kt)("em",{parentName:"p"},"subscribers"),"."),(0,i.kt)("p",null,"Waku message attributes are key-value pairs of metadata associated with a message.\nAnd the message data payload is the part of the transmitted Waku message\nthat is the actual message information.\nThe data payload is also treated as a Waku message attribute for convenience."),(0,i.kt)("h3",{id:"message-attributes"},"Message Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," attribute MUST contain the message data payload to be sent.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"content_topic")," attribute MUST specify a string identifier\nthat can be used for content-based filtering,\nas described in ",(0,i.kt)("a",{parentName:"p",href:"/../informational/23/topics"},"23/WAKU2-TOPICS"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," attribute, if present,\ncontains an arbitrary application-specific variable-length byte array\nwith a maximum length limit of 64 bytes.\nThis attribute can be utilized to convey supplementary details\nto various Waku protocols,\nthereby enabling customized processing based on its contents.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," attribute, if present,\ncontains a version number to discriminate different types of payload encryption.\nIf omitted, the value SHOULD be interpreted as version 0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," attribute, if present,\nsignifies the time at which the message was generated by its sender.\nThis attribute MAY contain the Unix epoch time in nanoseconds.\nIf the attribute is omitted, it SHOULD be interpreted as timestamp 0.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ephemeral")," attribute, if present, signifies the transient nature of the message.\nFor example, an ephemeral message SHOULD not be persisted by the Waku network.\nIf this attribute is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the message SHOULD be interpreted as ephemeral.\nIf, instead, the attribute is omitted or set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),",\nthe message SHOULD be interpreted as non-ephemeral."))),(0,i.kt)("h2",{id:"wire-format"},"Wire Format"),(0,i.kt)("p",null,"The Waku message wire format is specified using ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protocol buffers v3"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage WakuMessage {\n  bytes payload = 1;\n  string content_topic = 2;\n  optional uint32 version = 3;\n  optional sint64 timestamp = 10;\n  optional bytes meta = 11;\n  optional bool ephemeral = 31;\n}\n')),(0,i.kt)("p",null,"An example proto file following this specification can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/waku/blob/main/waku/message/v1/message.proto"},"here (vacp2p/waku)"),"."),(0,i.kt)("h2",{id:"payload-encryption"},"Payload encryption"),(0,i.kt)("p",null,"The Waku message payload MAY be encrypted.\nThe message ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," attribute indicates\nthe schema used to encrypt the payload data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Version 0:"),"\nThe payload SHOULD be interpreted as unencrypted; additionally,\nit CAN indicate that the message payload has been encrypted\nat the application layer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Version 1:"),"\nThe payload SHOULD be encrypted using Waku v1 payload encryption specified in ",(0,i.kt)("a",{parentName:"p",href:"/application/26/payload"},"26/WAKU-PAYLOAD"),".\nThis provides asymmetric and symmetric encryption.\nThe key agreement is performed out of band.\nAnd provides an encrypted signature and padding for some form of unlinkability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Version 2:"),"\nThe payload SHOULD be encoded according to ",(0,i.kt)("a",{parentName:"p",href:"%5B/spec/35%5D(https://github.com/waku-org/specs/blob/waku-RFC/standards/core/noise.md)"},"35/WAKU2-NOISE"),".\nWaku Noise protocol provides symmetric encryption and asymmetric key exchange."))),(0,i.kt)("p",null,"Any ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," value not included in this list is reserved for future specification.\nAnd, in this case, the payload SHOULD be interpreted as unencrypted by the Waku layer."),(0,i.kt)("h2",{id:"whisperwaku-v1-envelope-compatibility"},"Whisper/Waku v1 envelope compatibility"),(0,i.kt)("p",null,"Whisper/Waku v1 envelopes are compatible with Waku v2 messages format."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whisper/Waku v1 ",(0,i.kt)("inlineCode",{parentName:"li"},"topic")," field\nSHOULD be mapped to Waku v2 message's ",(0,i.kt)("inlineCode",{parentName:"li"},"content_topic")," attribute."),(0,i.kt)("li",{parentName:"ul"},"Whisper/Waku v1 ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," field SHOULD be mapped to Waku v2 message's ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," attribute.")),(0,i.kt)("p",null,"Waku v2 implements a pub/sub messaging pattern over libp2p.\nThis makes redundant some Whisper/Waku v1 envelope fields\n(e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"expiry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),", etc.), so they can be ignored."),(0,i.kt)("h2",{id:"deterministic-message-hashing"},"Deterministic message hashing"),(0,i.kt)("p",null,"In Protocol Buffers v3,\nthe deterministic serialization is not canonical across the different implementations\nand languages.\nIt is also unstable across different builds with schema changes due to unknown fields."),(0,i.kt)("p",null,"To overcome this interoperability limitation,\na Waku v2 message's hash MUST be computed following this schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"message_hash = sha256(concat(pubsub_topic, message.payload, message.content_topic, message.meta, message.timestamp))\n")),(0,i.kt)("p",null,"If an optional attribute, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),", is absent,\nthe concatenation of attributes SHOULD exclude it.\nThis recommendation is made to ensure that the concatenation process proceeds smoothly\nwhen certain attributes are missing and to maintain backward compatibility."),(0,i.kt)("p",null,"This hashing schema is deemed appropriate for use cases\nwhere a cross-implementation deterministic hash is needed,\nsuch as message deduplication and integrity validation.\nThe collision probability offered by this hashing schema can be considered negligible.\nThis is due to the deterministic concatenation order of the message attributes,\ncoupled with using a SHA-2 (256-bit) hashing algorithm."),(0,i.kt)("h3",{id:"test-vectors"},"Test vectors"),(0,i.kt)("p",null,"Waku message hash computation (",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," size of 12 bytes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pubsub_topic = "/waku/2/default-waku/proto" (0x2f77616b752f322f64656661756c742d77616b752f70726f746f)\nmessage.payload = 0x010203045445535405060708\nmessage.content_topic = "/waku/2/default-content/proto" (0x2f77616b752f322f64656661756c742d636f6e74656e742f70726f746f)\nmessage.meta = 0x73757065722d736563726574\nmessage.timestamp = 0x175789bfa23f8400\n\nmessage_hash = 0x64cce733fed134e83da02b02c6f689814872b1a0ac97ea56b76095c3c72bfe05\n')),(0,i.kt)("p",null,"Waku message hash computation (",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," size of 64 bytes):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pubsub_topic = "/waku/2/default-waku/proto" (0x2f77616b752f322f64656661756c742d77616b752f70726f746f)\nmessage.payload = 0x010203045445535405060708\nmessage.content_topic = "/waku/2/default-content/proto" (0x2f77616b752f322f64656661756c742d636f6e74656e742f70726f746f)\nmessage.meta = 0x000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f\nmessage.timestamp = 0x175789bfa23f8400\n\nmessage_hash = 0x7158b6498753313368b9af8f6e0a0a05104f68f972981da42a43bc53fb0c1b27\n')),(0,i.kt)("p",null,"Waku message hash computation (",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," attribute not present):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pubsub_topic = "/waku/2/default-waku/proto" (0x2f77616b752f322f64656661756c742d77616b752f70726f746f)\nmessage.payload = 0x010203045445535405060708\nmessage.content_topic = "/waku/2/default-content/proto" (0x2f77616b752f322f64656661756c742d636f6e74656e742f70726f746f)\nmessage.meta = <not-present>\nmessage.timestamp = 0x175789bfa23f8400\n\nmessage_hash = 0xa2554498b31f5bcdfcbf7fa58ad1c2d45f0254f3f8110a85588ec3cf10720fd8\n')),(0,i.kt)("p",null,"Waku message hash computation (",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," length 0):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'pubsub_topic = "/waku/2/default-waku/proto" (0x2f77616b752f322f64656661756c742d77616b752f70726f746f)\nmessage.payload = []\nmessage.content_topic = "/waku/2/default-content/proto" (0x2f77616b752f322f64656661756c742d636f6e74656e742f70726f746f)\nmessage.meta = 0x73757065722d736563726574\nmessage.timestamp = 0x175789bfa23f8400\n\nmessage_hash = 0x483ea950cb63f9b9d6926b262bb36194d3f40a0463ce8446228350bd44e96de4\n')),(0,i.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("h3",{id:"confidentiality-integrity-and-authenticity"},"Confidentiality, integrity, and authenticity"),(0,i.kt)("p",null,"The level of confidentiality, integrity, and\nauthenticity of the Waku message payload is discretionary.\nAccordingly, the application layer shall utilize the encryption and\nsignature schemes supported by Waku v2 to meet the application-specific privacy needs."),(0,i.kt)("h3",{id:"reliability-of-the-timestamp-attribute"},"Reliability of the ",(0,i.kt)("inlineCode",{parentName:"h3"},"timestamp")," attribute"),(0,i.kt)("p",null,"The Waku message ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," attribute is set by the sender.\nTherefore, because message timestamps aren\u2019t independently verified,\nthis attribute is prone to exploitation and misuse.\nIt should not solely be relied upon for operations such as message ordering.\nFor example, a malicious actor can arbitrarily set the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," of a Waku message\nto a high value so that it always shows up as the most recent message\nin a chat application.\nApplications using Waku messages\u2019 ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," attribute\nare recommended to use additional methods for more robust message ordering.\nAn example of how to deal with message ordering against adversarial message timestamps\ncan be found in the Status protocol,\nsee ",(0,i.kt)("a",{parentName:"p",href:"//status/62/payloads#clock-vs-timestamp-and-message-ordering"},"62/STATUS-PAYLOADS"),"."),(0,i.kt)("h3",{id:"reliability-of-the-ephemeral-attribute"},"Reliability of the ",(0,i.kt)("inlineCode",{parentName:"h3"},"ephemeral")," attribute"),(0,i.kt)("p",null,"The Waku message ",(0,i.kt)("inlineCode",{parentName:"p"},"ephemeral")," attribute is set by the sender.\nSince there is currently no incentive mechanism\nfor network participants to behave correctly,\nthis attribute is inherently insecure.\nA malicious actor can tamper with the value of a Waku message\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"ephemeral")," attribute,\nand the receiver would not be able to verify the integrity of the message."),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/legacy/6/waku1"},"6/WAKU1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Google Protocol buffers v3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/application/26/payload"},"26/WAKU-PAYLOAD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"%5B/spec/35%5D(https://github.com/waku-org/specs/blob/waku-RFC/standards/core/noise.md)"},"35/WAKU2-NOISE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"//status/62/payloads#clock-vs-timestamp-and-message-ordering"},"62/STATUS-PAYLOADS"))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);