"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[8348],{28078:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={title:"RLN-V2",name:"Rate Limit Nullifier V2",status:"raw",editor:"Rasul Ibragimov &lt;curryrasul@gmail.com&gt;",contributors:["Lev Soukhanov &lt;0xdeadfae@gmail.com&gt;"]},l=void 0,o={unversionedId:"raw/rln-v2",id:"raw/rln-v2",title:"RLN-V2",description:"- Status: raw",source:"@site/vac/raw/rln-v2.md",sourceDirName:"raw",slug:"/raw/rln-v2",permalink:"/vac/raw/rln-v2",draft:!1,tags:[],version:"current",frontMatter:{title:"RLN-V2",name:"Rate Limit Nullifier V2",status:"raw",editor:"Rasul Ibragimov &lt;curryrasul@gmail.com&gt;",contributors:["Lev Soukhanov &lt;0xdeadfae@gmail.com&gt;"]},sidebar:"defaultSidebar",previous:{title:"RLN-STEALTH-COMMITMENTS",permalink:"/vac/raw/rln-stealth-commitments"},next:{title:"1/COSS",permalink:"/vac/1/coss"}},s={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Flow",id:"flow",level:2},{value:"Important note",id:"important-note",level:3},{value:"RLN-Same flow",id:"rln-same-flow",level:2},{value:"Registration",id:"registration",level:3},{value:"RLN-Diff flow",id:"rln-diff-flow",level:2},{value:"Verification and slashing",id:"verification-and-slashing",level:3},{value:"ZK Circuits specification",id:"zk-circuits-specification",level:3},{value:"RLN-Same circuit",id:"rln-same-circuit",level:3},{value:"Circuit parameters",id:"circuit-parameters",level:4},{value:"RLN-Diff circuit",id:"rln-diff-circuit",level:3},{value:"Appendix A: Security considerations",id:"appendix-a-security-considerations",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],m={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: raw"),(0,a.kt)("li",{parentName:"ul"},"Editor: Rasul Ibragimov ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:curryrasul@gmail.com"},"curryrasul@gmail.com"),">"),(0,a.kt)("li",{parentName:"ul"},"Contributors:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Lev Soukhanov ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:0xdeadfae@gmail.com"},"0xdeadfae@gmail.com"),">")))),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"The protocol specified in this document is an improvement of ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),",\nbeing more general construct, that allows to set various limits for an epoch\n(it's 1 message per epoch in ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),")\nwhile remaining almost as simple as it predecessor.\nMoreover, it allows to set different rate-limits\nfor different RLN app users based on some public data,\ne.g. stake or reputation."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The main goal of this RFC is to generalize ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1")," and\nexpand its applications.\nThere are two different subprotocols based on this protocol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RLN-Same - RLN with the same rate-limit for all users;"),(0,a.kt)("li",{parentName:"ul"},"RLN-Diff - RLN that allows to set different rate-limits for different users.")),(0,a.kt)("p",null,"It is important to note that by using a large epoch limit value,\nusers will be able to remain anonymous,\nbecause their ",(0,a.kt)("inlineCode",{parentName:"p"},"internal_nullifiers")," will not be repeated until they exceed the limit."),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("p",null,"As in ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),", the general flow can be described by three steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Registration"),(0,a.kt)("li",{parentName:"ol"},"Signaling"),(0,a.kt)("li",{parentName:"ol"},"Verification and slashing")),(0,a.kt)("p",null,"The two sub-protocols have different flows, and\nhence are defined separately."),(0,a.kt)("h3",{id:"important-note"},"Important note"),(0,a.kt)("p",null,"All terms and parameters used remain the same as in ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),",\nmore details ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1#technical-overview"},"here")),(0,a.kt)("h2",{id:"rln-same-flow"},"RLN-Same flow"),(0,a.kt)("h3",{id:"registration"},"Registration"),(0,a.kt)("p",null,"The registration process in the RLN-Same subprotocol does not differ from ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),"."),(0,a.kt)("p",null,"Signalling"),(0,a.kt)("p",null,"For proof generation, the user needs to submit the following fields to the circuit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n    identity_secret: identity_secret_hash,\n    path_elements: Merkle_proof.path_elements,\n    identity_path_index: Merkle_proof.indices,\n    x: signal_hash,\n    message_id: message_id,\n    external_nullifier: external_nullifier,\n    message_limit: message_limit\n}\n")),(0,a.kt)("p",null,"Calculating output"),(0,a.kt)("p",null,"The following fields are needed for proof output calculation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n    identity_secret_hash: bigint, \n    external_nullifier: bigint,\n    message_id: bigint,\n    x: bigint, \n}\n")),(0,a.kt)("p",null,"The output ",(0,a.kt)("inlineCode",{parentName:"p"},"[y, internal_nullifier]")," is calculated in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"a_0 = identity_secret_hash\na_1 = poseidonHash([a0, external_nullifier, message_id])\n\ny = a_0 + x * a_1\n\ninternal_nullifier = poseidonHash([a_1])\n")),(0,a.kt)("h2",{id:"rln-diff-flow"},"RLN-Diff flow"),(0,a.kt)("p",null,"Registration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"id_commitment")," in ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1")," is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"poseidonHash(identity_secret)"),".\nThe goal of RLN-Diff is to set different rate-limits for different users.\nIt follows that ",(0,a.kt)("strong",{parentName:"p"},"id_commitment")," must somehow depend\non the ",(0,a.kt)("inlineCode",{parentName:"p"},"user_message_limit")," parameter,\nwhere 0 ","<","= ",(0,a.kt)("inlineCode",{parentName:"p"},"user_message_limit")," ","<","= ",(0,a.kt)("inlineCode",{parentName:"p"},"message_limit"),".\nThere are few ways to do that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sending ",(0,a.kt)("inlineCode",{parentName:"li"},"identity_secret_hash")," = ",(0,a.kt)("inlineCode",{parentName:"li"},"poseidonHash(identity_secret, userMessageLimit)"),"\nand zk proof that ",(0,a.kt)("inlineCode",{parentName:"li"},"user_message_limit")," is valid (is in the right range).\nThis approach requires zkSNARK verification,\nwhich is an expensive operation on the blockchain."),(0,a.kt)("li",{parentName:"ol"},"Sending the same ",(0,a.kt)("inlineCode",{parentName:"li"},"identity_secret_hash")," as in ",(0,a.kt)("a",{parentName:"li",href:"../32/rln-v1"},"32/RLN-V1"),"\n(",(0,a.kt)("inlineCode",{parentName:"li"},"poseidonHash(identity_secret)"),") and a user_message_limit publicly to a server\nor smart-contract where\n",(0,a.kt)("inlineCode",{parentName:"li"},"rate_commitment")," = ",(0,a.kt)("inlineCode",{parentName:"li"},"poseidonHash(identity_secret_hash, userMessageLimit)")," is calculated.\nThe leaves in the membership Merkle tree would be the rate_commitments of the users.\nThis approach requires additional hashing in the Circuit, but\nit eliminates the need for zk proof verification for the registration.")),(0,a.kt)("p",null,"Both methods are correct, and the choice of the method is left to the implementer.\nIt is recommended to use second method for the reasons already described.\nThe following flow description will also be based on the second method."),(0,a.kt)("p",null,"Signalling"),(0,a.kt)("p",null,"For proof generation, the user need to submit the following fields to the circuit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n    identity_secret: identity_secret_hash,\n    path_elements: Merkle_proof.path_elements,\n    identity_path_index: Merkle_proof.indices,\n    x: signal_hash,\n    message_id: message_id,\n    external_nullifier: external_nullifier,\n    user_message_limit: message_limit\n}\n")),(0,a.kt)("p",null,"Calculating output"),(0,a.kt)("p",null,"The Output is calculated in the same way as the RLN-Same sub-protocol."),(0,a.kt)("h3",{id:"verification-and-slashing"},"Verification and slashing"),(0,a.kt)("p",null,"Verification and slashing in both subprotocols remain the same as in ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),".\nThe only difference that may arise is the ",(0,a.kt)("inlineCode",{parentName:"p"},"message_limit")," check in RLN-Same,\nsince it is now a public input of the Circuit."),(0,a.kt)("h3",{id:"zk-circuits-specification"},"ZK Circuits specification"),(0,a.kt)("p",null,"The design of the ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1")," circuits\nis different from the circuits of this protocol.\nRLN-v2 requires additional algebraic constraints.\nThe membership proof and Shamir's Secret Sharing constraints remain unchanged."),(0,a.kt)("p",null,"The ZK Circuit is implemented using a ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/260.pdf"},"Groth-16 ZK-SNARK"),",\nusing the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.circom.io/"},"circomlib")," library.\nBoth schemes contain compile-time constants/system parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DEPTH - depth of membership Merkle tree"),(0,a.kt)("li",{parentName:"ul"},"LIMIT_BIT_SIZE - bit size of ",(0,a.kt)("inlineCode",{parentName:"li"},"limit")," numbers,\ne.g. for the 16 - maximum ",(0,a.kt)("inlineCode",{parentName:"li"},"limit")," number is 65535.")),(0,a.kt)("p",null,"The main difference of the protocol is that instead of a new polynomial\n(a new value ",(0,a.kt)("inlineCode",{parentName:"p"},"a_1"),") for a new epoch, a new polynomial is generated for each message.\nThe user assigns an identifier to each message;\nthe main requirement is that this identifier be in the range from 1 to ",(0,a.kt)("inlineCode",{parentName:"p"},"limit"),".\nThis is proven using range constraints."),(0,a.kt)("h3",{id:"rln-same-circuit"},"RLN-Same circuit"),(0,a.kt)("h4",{id:"circuit-parameters"},"Circuit parameters"),(0,a.kt)("p",null,"Public Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"external_nullifier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_limit")," - limit per epoch")),(0,a.kt)("p",null,"Private Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity_secret_hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path_elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity_path_index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_id"))),(0,a.kt)("p",null,"Outputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"internal_nullifier"))),(0,a.kt)("h3",{id:"rln-diff-circuit"},"RLN-Diff circuit"),(0,a.kt)("p",null,"In the RLN-Diff scheme, instead of the public parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"message_limit"),",\na parameter is used that is set for each user during registration (",(0,a.kt)("inlineCode",{parentName:"p"},"user_message_limit"),");\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"message_id")," value is compared to it in the same way\nas it is compared to ",(0,a.kt)("inlineCode",{parentName:"p"},"message_limit")," in the case of RLN-Same."),(0,a.kt)("p",null,"Circuit parameters"),(0,a.kt)("p",null,"Public Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"external_nullifier"))),(0,a.kt)("p",null,"Private Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity_secret_hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path_elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity_path_index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message_id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user_message_limit"))),(0,a.kt)("p",null,"Outputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"internal_nullifier"))),(0,a.kt)("h2",{id:"appendix-a-security-considerations"},"Appendix A: Security considerations"),(0,a.kt)("p",null,"Although there are changes in the circuits,\nthis spec inherits all the security considerations of ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"32/RLN-V1"),"."),(0,a.kt)("h2",{id:"copyright"},"Copyright"),(0,a.kt)("p",null,"Copyright and related rights waived via ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zkresear.ch/t/rate-limit-nullifier-v2-circuits/102"},"1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Rate-Limiting-Nullifier/rln-circuits-v2"},"2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../32/rln-v1#technical-overview"},"3"))))}u.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(i),d=a,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return i?n.createElement(h,l(l({ref:t},m),{},{components:i})):n.createElement(h,l({ref:t},m))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"}}]);