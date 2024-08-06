"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[7525],{69553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"RLN-INTEREP-SPEC",name:"Interep as group management for RLN",status:"raw",category:null,editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:null},o=void 0,s={unversionedId:"raw/rln-interep-spec",id:"raw/rln-interep-spec",title:"RLN-INTEREP-SPEC",description:"- Status: raw",source:"@site/vac/raw/rln-interep-spec.md",sourceDirName:"raw",slug:"/raw/rln-interep-spec",permalink:"/vac/raw/rln-interep-spec",draft:!1,tags:[],version:"current",frontMatter:{title:"RLN-INTEREP-SPEC",name:"Interep as group management for RLN",status:"raw",category:null,editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"GOSSIPSUB-TOR-PUSH",permalink:"/vac/raw/gossipsub-tor-push"},next:{title:"RLN-STEALTH-COMMITMENTS",permalink:"/vac/raw/rln-stealth-commitments"}},p={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Functional Operation",id:"functional-operation",level:2},{value:"1. Generate Semaphore credentials",id:"1-generate-semaphore-credentials",level:3},{value:"2. Verify reputation and join Interep group",id:"2-verify-reputation-and-join-interep-group",level:3},{value:"3. Join RLN membership group",id:"3-join-rln-membership-group",level:3},{value:"Verification of messages",id:"verification-of-messages",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Proof of Concept",id:"proof-of-concept",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"References",id:"references",level:2}],c={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: raw"),(0,a.kt)("li",{parentName:"ul"},"Category:"),(0,a.kt)("li",{parentName:"ul"},"Editor: Aaryamann Challani ","<",(0,a.kt)("a",{parentName:"li",href:"mailto:p1ge0nh8er@proton.me"},"p1ge0nh8er@proton.me"),">")),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This spec integrates ",(0,a.kt)("a",{parentName:"p",href:"https://interep.link"},"Interep")," into the ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1"},"RLN")," spec.\nInterep is a group management protocol that allows for the creation of groups of users and the management of their membership.\nIt is used to manage the membership of the RLN group."),(0,a.kt)("p",null,'Interep ties in web2 identities with reputation, and sorts the users into groups based on their reputation score.\nFor example, a GitHub user with over 100 followers is considered to have "gold" reputation.'),(0,a.kt)("p",null,"Interep uses ",(0,a.kt)("a",{parentName:"p",href:"https://semaphore.appliedzkp.org/"},"Semaphore"),' under the hood to allow anonymous signaling of membership in a group.\nTherefore, a user with a "gold" reputation can prove the existence of their membership without revealing their identity.'),(0,a.kt)("p",null,"RLN is used for spam prevention, and Interep is used for group management."),(0,a.kt)("p",null,"By using Interep with RLN, we allow users to join RLN membership groups without the need for on-chain financial stake."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"To have Sybil-Resistant group management, there are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/rln-contract"},"implementations")," of RLN which make use of financial stake on-chain.\nHowever, this is not ideal because it reduces the barrier of entry for honest participants."),(0,a.kt)("p",null,"In this case, honest participants will most likely have a web2 identity accessible to them, which can be used for joining an Interep reputation group.\nBy modifying the RLN spec to use Interep, we can have Sybil-Resistant group management without the need for on-chain financial stake."),(0,a.kt)("p",null,"Since RLN and Interep both use Semaphore-style credentials, it is possible to use the same set of credentials for both."),(0,a.kt)("h2",{id:"functional-operation"},"Functional Operation"),(0,a.kt)("p",null,"Using Interep with RLN involves the following steps -"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate Semaphore credentials "),(0,a.kt)("li",{parentName:"ol"},"Verify reputation and join Interep group"),(0,a.kt)("li",{parentName:"ol"},"Join RLN membership group via interaction with Smart Contract, by passing a proof of membership to the Interep group")),(0,a.kt)("h3",{id:"1-generate-semaphore-credentials"},"1. Generate Semaphore credentials"),(0,a.kt)("p",null,"Semaphore credentials are generated in a standard way, depicted in the ",(0,a.kt)("a",{parentName:"p",href:"https://semaphore.appliedzkp.org/docs/guides/identities#create-deterministic-identities"},"Semaphore documentation"),"."),(0,a.kt)("h3",{id:"2-verify-reputation-and-join-interep-group"},"2. Verify reputation and join Interep group"),(0,a.kt)("p",null,"Using the Interep app deployed on ",(0,a.kt)("a",{parentName:"p",href:"https://goerli.interep.link/"},"Goerli"),", the user can check their reputation tier and join the corresponding group.\nThis results in a transaction to the Interep contract, which adds them to the group."),(0,a.kt)("h3",{id:"3-join-rln-membership-group"},"3. Join RLN membership group"),(0,a.kt)("p",null,"Instead of sending funds to the RLN contract to join the membership group, the user can send a proof of membership to the Interep group.\nThis proof is generated by the user, and is verified by the contract.\nThe contract ensures that the user is a member of the Interep group, and then adds them to the RLN membership group."),(0,a.kt)("p",null,"Following is the modified signature of the register function in the RLN contract -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @param groupId: Id of the group.\n    /// @param signal: Semaphore signal.\n    /// @param nullifierHash: Nullifier hash.\n    /// @param externalNullifier: External nullifier.\n    /// @param proof: Zero-knowledge proof.\n    /// @param idCommitment: ID Commitment of the member.\n    function register(\n        uint256 groupId,\n        bytes32 signal,\n        uint256 nullifierHash,\n        uint256 externalNullifier,\n        uint256[8] calldata proof,\n        uint256 idCommitment\n    )\n")),(0,a.kt)("h2",{id:"verification-of-messages"},"Verification of messages"),(0,a.kt)("p",null,"Messages are verified the same way as in the ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1#verification"},"RLN spec"),"."),(0,a.kt)("h2",{id:"slashing"},"Slashing"),(0,a.kt)("p",null,"The slashing mechanism is the same as in the ",(0,a.kt)("a",{parentName:"p",href:"../32/rln-v1#slashing"},"RLN spec"),".\nIt is important to note that the slashing may not have the intended effect on the user, since the only consequence is that they cannot send messages.\nThis is due to the fact that the user can send a identity commitment in the registration to the RLN contract, which is different than the one used in the Interep group."),(0,a.kt)("h2",{id:"proof-of-concept"},"Proof of Concept"),(0,a.kt)("p",null,"A proof of concept is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/rln-interep-contract"},"vacp2p/rln-interp-contract")," which integrates Interep with RLN."),(0,a.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As mentioned in ",(0,a.kt)("a",{parentName:"li",href:"#slashing"},"Slashing"),", the slashing mechanism may not have the intended effect on the user."),(0,a.kt)("li",{parentName:"ol"},"This spec inherits the security considerations of the ",(0,a.kt)("a",{parentName:"li",href:"../32/rln-v1#security-considerations"},"RLN spec"),"."),(0,a.kt)("li",{parentName:"ol"},"This spec inherits the security considerations of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.interep.link/"},"Interep"),"."),(0,a.kt)("li",{parentName:"ol"},"A user may make multiple registrations using the same Interep proofs but different identity commitments. The way to mitigate this is to check if the nullifier hash has been detected previously in proof verification.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../32/rln-v1"},"RLN spec")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://interep.link"},"Interep")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://semaphore.appliedzkp.org/"},"Semaphore")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/decentralised-cloudflare-using-rln-and-rich-user-identities/10774"},"Decentralized cloudflare using Interep")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/interep-project/contracts"},"Interep contracts")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vacp2p/rln-contract"},"RLN contract")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://rlnp2p.vac.dev/"},"RLNP2P"))))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);