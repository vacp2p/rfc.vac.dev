"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[4148],{25845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"55/STATUS-1TO1-CHAT",name:"Status 1-to-1 Chat",status:"draft",category:"Standards Track",description:"A chat protocol to send public and private messages to a single recipient by the Status app.",editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},r=void 0,s={unversionedId:"55/1to1-chat",id:"55/1to1-chat",title:"55/STATUS-1TO1-CHAT",description:"A chat protocol to send public and private messages to a single recipient by the Status app.",source:"@site/status/55/1to1-chat.md",sourceDirName:"55",slug:"/55/1to1-chat",permalink:"/status/55/1to1-chat",draft:!1,tags:[],version:"current",frontMatter:{title:"55/STATUS-1TO1-CHAT",name:"Status 1-to-1 Chat",status:"draft",category:"Standards Track",description:"A chat protocol to send public and private messages to a single recipient by the Status app.",editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"28/STATUS-FEATURING",permalink:"/status/28/featuring"},next:{title:"56/STATUS-COMMUNITIES",permalink:"/status/56/communities"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Background",id:"background",level:2},{value:"Specification",id:"specification",level:2},{value:"Overview",id:"overview",level:3},{value:"Chat Flow",id:"chat-flow",level:2},{value:"Negotiation of a 1:1 chat",id:"negotiation-of-a-11-chat",level:3},{value:"Post Negotiation",id:"post-negotiation",level:3},{value:"Session management",id:"session-management",level:3},{value:"Negotiation of a 1:1 chat amongst multiple participants (group chat)",id:"negotiation-of-a-11-chat-amongst-multiple-participants-group-chat",level:2},{value:"Flow",id:"flow",level:3},{value:"Membership Update Flow",id:"membership-update-flow",level:4},{value:"Chat Created",id:"chat-created",level:5},{value:"Name Changed",id:"name-changed",level:5},{value:"Members Added",id:"members-added",level:5},{value:"Member Joined",id:"member-joined",level:5},{value:"Member Removed",id:"member-removed",level:5},{value:"Admins Added",id:"admins-added",level:5},{value:"Admin Removed",id:"admin-removed",level:5},{value:"Color Changed",id:"color-changed",level:5},{value:"Image Changed",id:"image-changed",level:5},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,i.kt)("li",{parentName:"ul"},"Editor: Aaryamann Challani ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:p1ge0nh8er@proton.me"},"p1ge0nh8er@proton.me"),">"),(0,i.kt)("li",{parentName:"ul"},"Contributors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Andrea Piana ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:andreap@status.im"},"andreap@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Pedro Pombeiro ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:pedro@status.im"},"pedro@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Corey Petty ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:corey@status.im"},"corey@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Oskar Thor\xe9n ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,i.kt)("li",{parentName:"ul"},"Dean Eigenmann ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:dean@status.im"},"dean@status.im"),">")))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This specification describes how the Status 1-to-1 chat protocol is implemented\non top of the Waku v2 protocol.\nThis protocol can be used to send messages to a single recipient."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Participant"),": A participant is a user that is able to send and receive messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1-to-1 chat"),": A chat between two participants."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public chat"),": A chat where any participant can join and read messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private chat"),": A chat where only invited participants can join and read messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group chat"),": A chat where multiple select participants can join and read messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group admin"),": A participant that is able to\nadd/remove participants from a group chat.")),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"This document describes how 2 peers communicate with each other\nto send messages in a 1-to-1 chat, with privacy and authenticity guarantees."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This protocol MAY use any key-exchange mechanism previously discussed -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../waku/standards/application/53/x3dh"},"53/WAKU2-X3DH")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise.md"},"WAKU2-NOISE"))),(0,i.kt)("p",null,"This protocol can provide end-to-end encryption\nto give peers a strong degree of privacy and security.\nPublic chat messages are publicly readable by anyone since\nthere's no permission model for who is participating in a public chat."),(0,i.kt)("h2",{id:"chat-flow"},"Chat Flow"),(0,i.kt)("h3",{id:"negotiation-of-a-11-chat"},"Negotiation of a 1:1 chat"),(0,i.kt)("p",null,"There are two phases in the initial negotiation of a 1:1 chat:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Identity verification"),"\n(e.g., face-to-face contact exchange through QR code, Identicon matching).\nA QR code serves two purposes simultaneously -\nidentity verification and initial key material retrieval;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Asynchronous initial key exchange"))),(0,i.kt)("p",null,"For more information on account generation and trust establishment, see ",(0,i.kt)("a",{parentName:"p",href:"../65/account-address"},"65/ACCOUNT-ADDRESS")),(0,i.kt)("h3",{id:"post-negotiation"},"Post Negotiation"),(0,i.kt)("p",null,"After the peers have shared their public key material,\na 1:1 chat can be established using the methods described in the\nkey-exchange protocols mentioned above."),(0,i.kt)("h3",{id:"session-management"},"Session management"),(0,i.kt)("p",null,"The 1:1 chat is made robust by having sessions between peers.\nIt is handled by the key-exchange protocol used. For example,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../../waku/standards/application/53/x3dh"},"53/WAKU2-X3DH"),",\nthe session management is described in ",(0,i.kt)("a",{parentName:"p",href:"../../waku/standards/application/54/x3dh-sessions"},"54/WAKU2-X3DH-SESSIONS"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise.md"},"WAKU2-NOISE"),",\nthe session management is described in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise-sessions.md"},"WAKU2-NOISE-SESSIONS")))),(0,i.kt)("h2",{id:"negotiation-of-a-11-chat-amongst-multiple-participants-group-chat"},"Negotiation of a 1:1 chat amongst multiple participants (group chat)"),(0,i.kt)("p",null,"A small, private group chat can be constructed by having multiple participants\nnegotiate a 1:1 chat amongst each other.\nEach participant MUST\nmaintain a session with all other participants in the group chat.\nThis allows for a group chat to be created with a small number of participants."),(0,i.kt)("p",null,"However, this method does not scale as the number of participants increases,\nfor the following reasons -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The number of messages sent over the network increases with the number of participants."),(0,i.kt)("li",{parentName:"ol"},"Handling the X3DH key exchange for each participant is computationally expensive.")),(0,i.kt)("p",null,"The above issues are addressed in ",(0,i.kt)("a",{parentName:"p",href:"../56/communities"},"56/STATUS-COMMUNITIES"),",\nwith other trade-offs."),(0,i.kt)("h3",{id:"flow"},"Flow"),(0,i.kt)("p",null,"The following flow describes how a group chat is created and maintained."),(0,i.kt)("h4",{id:"membership-update-flow"},"Membership Update Flow"),(0,i.kt)("p",null,"Membership updates have the following wire format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MembershipUpdateMessage {\n  // The chat id of the private group chat\n  // derived in the following way:\n  // chat_id = hex(chat_creator_public_key) + "-" + random_uuid\n  // This chat_id MUST be validated by all participants\n  string chat_id = 1;\n  // A list of events for this group chat, first 65 bytes are the signature, \n  then is a \n  // protobuf encoded MembershipUpdateEvent\n  repeated bytes events = 2;\n  oneof chat_entity {\n    // An optional chat message\n    ChatMessage message = 3;\n    // An optional reaction to a message\n    EmojiReaction emoji_reaction = 4; \n  }\n}\n')),(0,i.kt)("p",null,"Note that in ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),", the first element is the signature, and\nall other elements after are encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"MembershipUpdateEvent"),"'s."),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"MembershipUpdateEvent")," is defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MembershipUpdateEvent {\n  // Lamport timestamp of the event\n  uint64 clock = 1;\n  // Optional list of public keys of the targets of the action\n  repeated string members = 2;\n  // Name of the chat for the CHAT_CREATED/NAME_CHANGED event types\n  string name = 3;\n  // The type of the event\n  EventType type = 4;\n  // Color of the chat for the CHAT_CREATED/COLOR_CHANGED event types\n  string color = 5;\n  // Chat image\n  bytes image = 6;\n\n  enum EventType {\n    UNKNOWN = 0;\n    CHAT_CREATED = 1; // See [CHAT_CREATED](#chat-created)\n    NAME_CHANGED = 2; // See [NAME_CHANGED](#name-changed)\n    MEMBERS_ADDED = 3; // See [MEMBERS_ADDED](#members-added)\n    MEMBER_JOINED = 4; // See [MEMBER_JOINED](#member-joined)\n    MEMBER_REMOVED = 5; // See [MEMBER_REMOVED](#member-removed)\n    ADMINS_ADDED = 6; // See [ADMINS_ADDED](#admins-added)\n    ADMIN_REMOVED = 7; // See [ADMIN_REMOVED](#admin-removed)\n    COLOR_CHANGED = 8; // See [COLOR_CHANGED](#color-changed)\n    IMAGE_CHANGED = 9; // See [IMAGE_CHANGED](#image-changed)\n  }\n}\n")),(0,i.kt)("p",null,"Note that the definitions for ",(0,i.kt)("inlineCode",{parentName:"p"},"ChatMessage")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"EmojiReaction")," can be found in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/5fd9e93e9c298ed087e6716d857a3951dbfb3c1e/protocol/protobuf/chat_message.proto#L1"},"chat_message.proto"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/5fd9e93e9c298ed087e6716d857a3951dbfb3c1e/protocol/protobuf/emoji_reaction.proto"},"emoji_reaction.proto"),"."),(0,i.kt)("h5",{id:"chat-created"},"Chat Created"),(0,i.kt)("p",null,"When creating a group chat, this is the first event that MUST be sent.\nAny event with a clock value lower than this MUST be discarded.\nUpon receiving this event a client MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id"),"\nprovided with the update and\ncreate a chat with identified by ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id"),"."),(0,i.kt)("p",null,"By default, the creator of the group chat is the only group admin."),(0,i.kt)("h5",{id:"name-changed"},"Name Changed"),(0,i.kt)("p",null,"To change the name of the group chat, group admins MUST use a ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME_CHANGED")," event.\nUpon receiving this event,\na client MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates and\nMUST ensure the author of the event is an admin of the chat,\notherwise the event MUST be ignored.\nIf the event is valid the chat name SHOULD be changed according to the provided message."),(0,i.kt)("h5",{id:"members-added"},"Members Added"),(0,i.kt)("p",null,"To add members to the chat, group admins MUST use a ",(0,i.kt)("inlineCode",{parentName:"p"},"MEMBERS_ADDED")," event.\nUpon receiving this event,\na participant MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates and\nMUST ensure the author of the event is an admin of the chat,\notherwise the event MUST be ignored.\nIf the event is valid,\na participant MUST update the list of members of the chat who have not joined,\nadding the members received."),(0,i.kt)("h5",{id:"member-joined"},"Member Joined"),(0,i.kt)("p",null,"To signal the intent to start receiving messages from a given chat,\nnew participants MUST use a ",(0,i.kt)("inlineCode",{parentName:"p"},"MEMBER_JOINED")," event.\nUpon receiving this event,\na participant MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates.\nIf the event is valid a participant,\na participant MUST add the new participant to the list of participants stored locally.\nAny message sent to the group chat MUST now include the new participant."),(0,i.kt)("h5",{id:"member-removed"},"Member Removed"),(0,i.kt)("p",null,"There are two ways in which a member MAY be removed from a group chat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member MAY leave the chat by sending a ",(0,i.kt)("inlineCode",{parentName:"li"},"MEMBER_REMOVED")," event,\nwith the ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," field containing their own public key."),(0,i.kt)("li",{parentName:"ul"},"An admin MAY remove a member by sending a ",(0,i.kt)("inlineCode",{parentName:"li"},"MEMBER_REMOVED")," event,\nwith the ",(0,i.kt)("inlineCode",{parentName:"li"},"members")," field containing the public key of the member to be removed.")),(0,i.kt)("p",null,"Each participant MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates and\nMUST ensure the author of the event is an admin of the chat,\notherwise the event MUST be ignored.\nIf the event is valid, a participant MUST update the local list of members accordingly."),(0,i.kt)("h5",{id:"admins-added"},"Admins Added"),(0,i.kt)("p",null,"To promote participants to group admin, group admins MUST use an ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMINS_ADDED")," event.\nUpon receiving this event,\na participant MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates,\nMUST ensure the author of the event is an admin of the chat,\notherwise the event MUST be ignored.\nIf the event is valid,\na participant MUST update the list of admins of the chat accordingly."),(0,i.kt)("h5",{id:"admin-removed"},"Admin Removed"),(0,i.kt)("p",null,"Group admins MUST NOT be able to remove other group admins.\nAn admin MAY remove themselves by sending an ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN_REMOVED")," event,\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"members")," field containing their own public key.\nEach participant MUST validate the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat_id")," provided with the updates and\nMUST ensure the author of the event is an admin of the chat,\notherwise the event MUST be ignored.\nIf the event is valid, a participant MUST update the list of admins of the chat accordingly."),(0,i.kt)("h5",{id:"color-changed"},"Color Changed"),(0,i.kt)("p",null,"To change the text color of the group chat name,\ngroup admins MUST use a ",(0,i.kt)("inlineCode",{parentName:"p"},"COLOR_CHANGED")," event."),(0,i.kt)("h5",{id:"image-changed"},"Image Changed"),(0,i.kt)("p",null,"To change the display image of the group chat,\ngroup admins MUST use an ",(0,i.kt)("inlineCode",{parentName:"p"},"IMAGE_CHANGED")," event."),(0,i.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Inherits the security considerations of the key-exchange mechanism used,\ne.g., ",(0,i.kt)("a",{parentName:"li",href:"../../waku/standards/application/53/x3dh"},"53/WAKU2-X3DH")," or ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise.md"},"WAKU2-NOISE"))),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../waku/standards/application/53/x3dh"},"53/WAKU2-X3DH")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise.md"},"WAKU2-NOISE")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../65/account-address"},"65/STATUS-ACCOUNT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../waku/standards/application/54/x3dh-sessions"},"54/WAKU2-X3DH-SESSIONS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/application/noise-sessions.md"},"WAKU2-NOISE-SESSIONS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../56/communities"},"56/STATUS-COMMUNITIES")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-go/blob/5fd9e93e9c298ed087e6716d857a3951dbfb3c1e/protocol/protobuf/chat_message.proto#L1"},"chat_message.proto")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-go/blob/5fd9e93e9c298ed087e6716d857a3951dbfb3c1e/protocol/protobuf/emoji_reaction.proto"},"emoji_reaction.proto"))))}h.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);