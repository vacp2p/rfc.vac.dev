"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[372],{95285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"11/WAKU2-RELAY",name:"Waku v2 Relay",status:"stable",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:["Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Sanaz Taheri &lt;sanaz@status.im&gt;"]},s=void 0,o={unversionedId:"standards/core/11/relay",id:"standards/core/11/relay",title:"11/WAKU2-RELAY",description:"- Status: stable",source:"@site/waku/standards/core/11/relay.md",sourceDirName:"standards/core/11",slug:"/standards/core/11/relay",permalink:"/waku/standards/core/11/relay",draft:!1,tags:[],version:"current",frontMatter:{title:"11/WAKU2-RELAY",name:"Waku v2 Relay",status:"stable",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:["Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Sanaz Taheri &lt;sanaz@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"10/WAKU2",permalink:"/waku/standards/core/10/waku2"},next:{title:"12/WAKU2-FILTER",permalink:"/waku/standards/core/12/filter"}},l={},p=[{value:"Security Requirements",id:"security-requirements",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Adversarial Model",id:"adversarial-model",level:2},{value:"Wire Specification",id:"wire-specification",level:2},{value:"Protobuf definitions",id:"protobuf-definitions",level:3},{value:"Message fields",id:"message-fields",level:3},{value:"SubOpts fields",id:"subopts-fields",level:3},{value:"Signature Policy",id:"signature-policy",level:3},{value:"Security Analysis",id:"security-analysis",level:2},{value:"Future work",id:"future-work",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: stable"),(0,a.kt)("li",{parentName:"ul"},"Editor: Hanno Cornelius ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:hanno@status.im"},"hanno@status.im"),">"),(0,a.kt)("li",{parentName:"ul"},"Contributors:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Oskar Thor\xe9n ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,a.kt)("li",{parentName:"ul"},"Sanaz Taheri ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:sanaz@status.im"},"sanaz@status.im"),">")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," specifies a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/publish-subscribe/"},"Publish/Subscribe approach"),"\nto peer-to-peer messaging with a strong focus on privacy,\ncensorship-resistance, security and scalability.\nIts current implementation is a minor extension of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/README.md"},"libp2p GossipSub protocol"),"\nand prescribes gossip-based dissemination.\nAs such the scope is limited to defining a separate\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/connections/README.md#protocol-negotiation"},(0,a.kt)("inlineCode",{parentName:"a"},"protocol id")),"\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY"),", establishing privacy and security requirements,\nand defining how the underlying GossipSub is to be interpreted and\nimplemented within the Waku and cryptoeconomic domain.\n",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," should not be confused with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/tree/master/relay"},"libp2p circuit relay"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Protocol identifier"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/vac/waku/relay/2.0.0")),(0,a.kt)("h2",{id:"security-requirements"},"Security Requirements"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," protocol is designed to provide the following security properties\nunder a static ",(0,a.kt)("a",{parentName:"p",href:"#adversarial-model"},"Adversarial Model"),".\nNote that data confidentiality, integrity, and\nauthenticity are currently considered out of scope for ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," and\nmust be handled by higher layer protocols such as ",(0,a.kt)("a",{parentName:"p",href:"../14/message"},(0,a.kt)("inlineCode",{parentName:"a"},"14/WAKU2-MESSAGE")),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Publisher-Message Unlinkability"),":\nThis property indicates that no adversarial entity can link a published ",(0,a.kt)("inlineCode",{parentName:"p"},"Message"),"\nto its publisher.\nThis feature also implies the unlinkability of the publisher\nto its published topic ID as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," embodies the topic IDs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Subscriber-Topic Unlinkability"),":\nThis feature stands for the inability of any adversarial entity\nfrom linking a subscriber to its subscribed topic IDs."))),(0,a.kt)("h3",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Personally identifiable information")," (PII)\nrefers to any piece of data that can be used to uniquely identify a user.\nFor example, the signature verification key,\nand the hash of one's static IP address are unique for each user and\nhence count as PII."),(0,a.kt)("h2",{id:"adversarial-model"},"Adversarial Model"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any entity running the ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," protocol is considered an adversary.\nThis includes publishers, subscribers, and all the peers' direct connections.\nFurthermore,\nwe consider the adversary as a passive entity that attempts to collect information\nfrom others to conduct an attack but\nit does so without violating protocol definitions and instructions.\nFor example, under the passive adversarial model,\nno malicious subscriber hides the messages it receives from other subscribers\nas it is against the description of ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY"),".\nHowever,\na malicious subscriber may learn which topics are subscribed to by which peers."),(0,a.kt)("li",{parentName:"ul"},"The following are ",(0,a.kt)("strong",{parentName:"li"},"not")," considered as part of the adversarial model:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"An adversary with a global view of all the peers and their connections."),(0,a.kt)("li",{parentName:"ul"},"An adversary that can eavesdrop on communication links between arbitrary pairs\nof peers (unless the adversary is one end of the communication).\nIn other words, the communication channels are assumed to be secure.")))),(0,a.kt)("h2",{id:"wire-specification"},"Wire Specification"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/README.md"},"PubSub interface specification"),"\ndefines the protobuf RPC messages\nexchanged between peers participating in a GossipSub network.\nWe republish these messages here for ease of reference and\ndefine how ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," uses and interprets each field."),(0,a.kt)("h3",{id:"protobuf-definitions"},"Protobuf definitions"),(0,a.kt)("p",null,"The PubSub RPC messages are specified using ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protocol buffers v2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto2";\n\nmessage RPC {\n  repeated SubOpts subscriptions = 1;\n  repeated Message publish = 2;\n\n  message SubOpts {\n    optional bool subscribe = 1;\n    optional string topicid = 2;\n  }\n\n  message Message {\n    optional string from = 1;\n    optional bytes data = 2;\n    optional bytes seqno = 3;\n    repeated string topicIDs = 4;\n    optional bytes signature = 5;\n    optional bytes key = 6;\n  }\n}\n')),(0,a.kt)("p",null,">"," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:")),"\nThe various ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.0.md#control-messages"},"control messages"),"\ndefined for GossipSub are used as specified there.\n",">"," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:")),"\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/README.md#the-topic-descriptor"},(0,a.kt)("inlineCode",{parentName:"a"},"TopicDescriptor")),"\nis not currently used by ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY"),"."),(0,a.kt)("h3",{id:"message-fields"},"Message fields"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Message")," protobuf defines the format in which content is relayed between peers.\n",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," specifies the following usage requirements for each field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," field MUST NOT be used, following the ",(0,a.kt)("a",{parentName:"p",href:"#signature-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"StrictNoSign")," signature policy"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field MUST be filled out with a ",(0,a.kt)("inlineCode",{parentName:"p"},"WakuMessage"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"../14/message"},(0,a.kt)("inlineCode",{parentName:"a"},"14/WAKU2-MESSAGE"))," for more details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"seqno")," field MUST NOT be used, following the ",(0,a.kt)("a",{parentName:"p",href:"#signature-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"StrictNoSign")," signature policy"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"topicIDs")," field MUST contain the content-topics\nthat a message is being published on.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"signature")," field MUST NOT be used,\nfollowing the ",(0,a.kt)("a",{parentName:"p",href:"#signature-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"StrictNoSign")," signature policy"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," field MUST NOT be used,\nfollowing the ",(0,a.kt)("a",{parentName:"p",href:"#signature-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"StrictNoSign")," signature policy"),"."))),(0,a.kt)("h3",{id:"subopts-fields"},"SubOpts fields"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SubOpts")," protobuf defines the format\nin which subscription options are relayed between peers.\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"11/WAKU2-RELAY")," node MAY decide to subscribe or\nunsubscribe from topics by sending updates using ",(0,a.kt)("inlineCode",{parentName:"p"},"SubOpts"),".\nThe following usage requirements apply:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," field MUST contain a boolean,\nwhere ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," indicates subscribe and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," indicates unsubscribe to a topic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"topicid")," field MUST contain the pubsub topic."))),(0,a.kt)("p",null,">"," Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"topicid")," refering to pubsub topic and\n",(0,a.kt)("inlineCode",{parentName:"p"},"topicId")," refering to content-topic are detailed in ",(0,a.kt)("a",{parentName:"p",href:"../../../informational/23/topics"},"23/WAKU2-TOPICS"),"."),(0,a.kt)("h3",{id:"signature-policy"},"Signature Policy"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/README.md#signature-policy-options"},(0,a.kt)("inlineCode",{parentName:"a"},"StrictNoSign")," option"),"\nMUST be used, to ensure that messages are built without the ",(0,a.kt)("inlineCode",{parentName:"p"},"signature"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"seqno")," fields.\nNote that this does not merely imply that these fields be empty, but\nthat they MUST be ",(0,a.kt)("em",{parentName:"p"},"absent")," from the marshalled message."),(0,a.kt)("h2",{id:"security-analysis"},"Security Analysis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Publisher-Message Unlinkability"),":\nTo address publisher-message unlinkability,\none should remove any PII from the published message.\nAs such, ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," follows the ",(0,a.kt)("inlineCode",{parentName:"li"},"StrictNoSign")," policy as described in\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/tree/master/pubsub#message-signing"},"libp2p PubSub specs"),".\nAs the result of the ",(0,a.kt)("inlineCode",{parentName:"li"},"StrictNoSign")," policy,\n",(0,a.kt)("inlineCode",{parentName:"li"},"Message"),"s should be built without the  ",(0,a.kt)("inlineCode",{parentName:"li"},"from"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"signature")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," fields since each of these three fields individually\ncounts as PII for the author of the message\n(one can link the creation of the message with libp2p peerId and\nthus indirectly with the IP address of the publisher).\nNote that removing identifiable information from messages\ncannot lead to perfect unlinkability.\nThe direct connections of a publisher\nmight be able to figure out which ",(0,a.kt)("inlineCode",{parentName:"li"},"Message"),"s belong to that publisher\nby analyzing its traffic.\nThe possibility of such inference may get higher\nwhen the ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," field is also not encrypted by the upper-level protocols.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Subscriber-Topic Unlinkability:"),"\nTo preserve subscriber-topic unlinkability,\nit is recommended by ",(0,a.kt)("a",{parentName:"li",href:"../10/waku2"},(0,a.kt)("inlineCode",{parentName:"a"},"10/WAKU2"))," to use a single PubSub topic\nin the ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," protocol.\nThis allows an immediate subscriber-topic unlinkability\nwhere subscribers are not re-identifiable from their subscribed topic IDs\nas the entire network is linked to the same topic ID.\nThis level of unlinkability / anonymity\nis known as ",(0,a.kt)("a",{parentName:"li",href:"https://www.privitar.com/blog/k-anonymity-an-introduction/"},"k-anonymity"),"\nwhere k is proportional to the system size\n(number of participants of Waku relay protocol).\nHowever, note that ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," supports the use of more than one topic.\nIn case that more than one topic id is utilized,\npreserving unlinkability is the responsibility of the upper-level protocols\nwhich MAY adopt\n",(0,a.kt)("a",{parentName:"li",href:"https://specs.status.im/spec/10#partitioned-topic"},"partitioned topics technique"),"\nto achieve K-anonymity for the subscribed peers.")),(0,a.kt)("h2",{id:"future-work"},"Future work"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Economic spam resistance"),":\nIn the spam-protected ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," protocol,\nno adversary can flood the system with spam messages\n(i.e., publishing a large number of messages in a short amount of time).\nSpam protection is partly provided by GossipSub v1.1 through ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md#spam-protection-measures"},"scoring mechanism"),".\nAt a high level,\npeers utilize a scoring function to locally score the behavior of their connections\nand remove peers with a low score.\n",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY")," aims at enabling an advanced spam protection mechanism\nwith economic disincentives by utilizing Rate Limiting Nullifiers.\nIn a nutshell,\npeers must conform to a certain message publishing rate per a system-defined epoch,\notherwise, they get financially penalized for exceeding the rate.\nMore details on this new technique can be found in ",(0,a.kt)("a",{parentName:"li",href:"../17/rln-relay"},(0,a.kt)("inlineCode",{parentName:"a"},"17/WAKU2-RLN-RELAY")),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Providing ",(0,a.kt)("strong",{parentName:"li"},"Unlinkability"),", ",(0,a.kt)("strong",{parentName:"li"},"Integrity")," and  ",(0,a.kt)("strong",{parentName:"li"},"Authenticity")," simultaneously:\nIntegrity and authenticity are typically addressed through digital signatures and\nMessage Authentication Code (MAC) schemes, however,\nthe usage of digital signatures (where each signature is bound to a particular peer)\ncontradicts with the unlinkability requirement\n(messages signed under a certain signature key are verifiable by a verification key\nthat is bound to a particular publisher).\nAs such, integrity and authenticity are missing features in ",(0,a.kt)("inlineCode",{parentName:"li"},"11/WAKU2-RELAY"),"\nin the interest of unlinkability.\nIn future work, advanced signature schemes like group signatures\ncan be utilized to enable authenticity, integrity, and unlinkability simultaneously.\nIn a group signature scheme, a member of a group can anonymously sign a message\non behalf of the group as such the true signer\nis indistinguishable from other group members.")),(0,a.kt)("h2",{id:"copyright"},"Copyright"),(0,a.kt)("p",null,"Copyright and related rights waived via\n",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../10/waku2"},(0,a.kt)("inlineCode",{parentName:"a"},"10/WAKU2")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../14/message"},(0,a.kt)("inlineCode",{parentName:"a"},"14/WAKU2-MESSAGE")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../17/rln-relay"},(0,a.kt)("inlineCode",{parentName:"a"},"17/WAKU-RLN")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.0.md"},"GossipSub v1.0"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md"},"GossipSub v1.1"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.privitar.com/blog/k-anonymity-an-introduction/"},"K-anonimity"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/publish-subscribe/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p")," concepts: Publish/Subscribe"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/connections/README.md#protocol-negotiation"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p")," protocol negotiation"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://specs.status.im/spec/10#partitioned-topic"},"Partitioned topics"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"Protocol Buffers"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/README.md"},"PubSub interface for libp2p (r2, 2019-02-01)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../6/waku1"},"Waku v1 spec"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-627"},"Whisper spec (EIP627)")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);