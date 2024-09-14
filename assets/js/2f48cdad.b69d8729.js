"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[1533],{59227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"20/TOY-ETH-PM",name:"Toy Ethereum Private Message",status:"draft",editor:"Franck Royer &lt;franck@status.im&gt;",contributors:null},o=void 0,s={unversionedId:"standards/application/20/toy-eth-pm",id:"standards/application/20/toy-eth-pm",title:"20/TOY-ETH-PM",description:"- Status: draft",source:"@site/waku/standards/application/20/toy-eth-pm.md",sourceDirName:"standards/application/20",slug:"/standards/application/20/toy-eth-pm",permalink:"/waku/standards/application/20/toy-eth-pm",draft:!1,tags:[],version:"current",frontMatter:{title:"20/TOY-ETH-PM",name:"Toy Ethereum Private Message",status:"draft",editor:"Franck Royer &lt;franck@status.im&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"30/ADAPTIVE-NODES",permalink:"/waku/informational/30/adaptive-nodes"},next:{title:"21/WAKU2-FAULT-TOLERANT-STORE",permalink:"/waku/standards/application/21/fault-tolerant-store"}},l={},p=[{value:"Goal",id:"goal",level:2},{value:"Variables",id:"variables",level:2},{value:"Design Requirements",id:"design-requirements",level:2},{value:"Limitations",id:"limitations",level:2},{value:"The protocol",id:"the-protocol",level:2},{value:"Generate Encryption KeyPair",id:"generate-encryption-keypair",level:3},{value:"Broadcast Encryption Public Key",id:"broadcast-encryption-public-key",level:3},{value:"Sign Encryption Public Key",id:"sign-encryption-public-key",level:3},{value:"Public Key Message",id:"public-key-message",level:3},{value:"Consideration for a non-interactive/uncoordinated protocol",id:"consideration-for-a-non-interactiveuncoordinated-protocol",level:2},{value:"Retrieve the public key from the blockchain",id:"retrieve-the-public-key-from-the-blockchain",level:3},{value:"Publishing the public in long term storage",id:"publishing-the-public-in-long-term-storage",level:3},{value:"Send Private Message",id:"send-private-message",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Editor: Franck Royer ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:franck@status.im"},"franck@status.im"),">")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content Topics"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Public Key Broadcast: ",(0,i.kt)("inlineCode",{parentName:"li"},"/eth-pm/1/public-key/proto"),","),(0,i.kt)("li",{parentName:"ul"},"Private Message: ",(0,i.kt)("inlineCode",{parentName:"li"},"/eth-pm/1/private-message/proto"),".")),(0,i.kt)("p",null,"This specification explains the Toy Ethereum Private Message protocol\nwhich enables a peer to send an encrypted message to another peer\nusing the Waku v2 network, and the peer's Ethereum address."),(0,i.kt)("p",null,"The main purpose of this specification\nis to demonstrate how Waku v2 can be used for encrypted messaging purposes,\nusing Ethereum accounts for identity.\nThis protocol caters for Web3 wallets restrictions,\nallowing it to be implemented only using standard Web3 API.\nIn the current state,\nthe protocol has privacy and features ",(0,i.kt)("a",{parentName:"p",href:"#limitations"},"limitations"),",\nhas not been audited and hence is not fit for production usage.\nWe hope this can be an inspiration for developers\nwishing to build on top of Waku v2."),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"Alice wants to send an encrypted message to Bob, where only Bob can decrypt the message.\nAlice only knows Bob's Ethereum Address."),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("p",null,"Here are the variables used in the protocol and their definition:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"B")," is Bob's Ethereum address (or account),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," is the private key of ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),", and is only known by Bob."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"B'")," is Bob's Encryption Public Key, for which ",(0,i.kt)("inlineCode",{parentName:"li"},"b'")," is the private key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M")," is the private message that Alice sends to Bob.")),(0,i.kt)("h2",{id:"design-requirements"},"Design Requirements"),(0,i.kt)("p",null,"The proposed protocol MUST adhere to the following design requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Alice knows Bob's Ethereum address,"),(0,i.kt)("li",{parentName:"ol"},"Bob is willing to participate to Eth-PM, and publishes ",(0,i.kt)("inlineCode",{parentName:"li"},"B'"),","),(0,i.kt)("li",{parentName:"ol"},"Bob's ownership of ",(0,i.kt)("inlineCode",{parentName:"li"},"B'")," MUST be verifiable,"),(0,i.kt)("li",{parentName:"ol"},"Alice wants to send message ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," to Bob,"),(0,i.kt)("li",{parentName:"ol"},"Bob SHOULD be able to get ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," using ",(0,i.kt)("a",{parentName:"li",href:"../../core/10/waku2"},"10/WAKU2 spec"),","),(0,i.kt)("li",{parentName:"ol"},"Participants only have access to their Ethereum Wallet via the Web3 API,"),(0,i.kt)("li",{parentName:"ol"},"Carole MUST NOT be able to read ",(0,i.kt)("inlineCode",{parentName:"li"},"M"),"'s content\neven if she is storing it or relaying it,"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../26/payload"},"Waku Message Version 1")," Asymmetric Encryption\nis used for encryption purposes.")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Alice's details are not included in the message's structure,\nmeaning that there is no programmatic way for Bob to reply to Alice\nor verify her identity."),(0,i.kt)("p",null,"Private messages are sent on the same content topic for all users.\nAs the recipient data is encrypted,\nall participants must decrypt all messages which can lead to scalability issues."),(0,i.kt)("p",null,"This protocol does not guarantee Perfect Forward Secrecy nor Future Secrecy:\nIf Bob's private key is compromised, past and future messages could be decrypted.\nA solution combining regular ",(0,i.kt)("a",{parentName:"p",href:"https://www.signal.org/docs/specifications/x3dh/"},"X3DH"),"\nbundle broadcast with ",(0,i.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/"},"Double Ratchet"),"\nencryption would remove these limitations;\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://specs.status.im/spec/5"},"Status secure transport spec"),"\nfor an example of a protocol that achieves this in a peer-to-peer setting."),(0,i.kt)("p",null,"Bob MUST decide to participate in the protocol before Alice can send him a message.\nThis is discussed in more in details in\n",(0,i.kt)("a",{parentName:"p",href:"#consideration-for-a-non-interactiveuncoordinated-protocol"},"Consideration for a non-interactive/uncoordinated protocol")),(0,i.kt)("h2",{id:"the-protocol"},"The protocol"),(0,i.kt)("h3",{id:"generate-encryption-keypair"},"Generate Encryption KeyPair"),(0,i.kt)("p",null,"First, Bob needs to generate a keypair for Encryption purposes."),(0,i.kt)("p",null,"Bob SHOULD get 32 bytes from a secure random source as Encryption Private Key, ",(0,i.kt)("inlineCode",{parentName:"p"},"b'"),".\nThen Bob can compute the corresponding SECP-256k1 Public Key, ",(0,i.kt)("inlineCode",{parentName:"p"},"B'"),"."),(0,i.kt)("h3",{id:"broadcast-encryption-public-key"},"Broadcast Encryption Public Key"),(0,i.kt)("p",null,"For Alice to encrypt messages for Bob,\nBob SHOULD broadcast his Encryption Public Key ",(0,i.kt)("inlineCode",{parentName:"p"},"B'"),".\nTo prove that the Encryption Public Key ",(0,i.kt)("inlineCode",{parentName:"p"},"B'"),"\nis indeed owned by the owner of Bob's Ethereum Account ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),",\nBob MUST sign ",(0,i.kt)("inlineCode",{parentName:"p"},"B'")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,i.kt)("h3",{id:"sign-encryption-public-key"},"Sign Encryption Public Key"),(0,i.kt)("p",null,"To prove ownership of the Encryption Public Key,\nBob must sign it using ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," v3,\nmeaning calling ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v3")," on his Wallet's API."),(0,i.kt)("p",null,"Note: While v4 also exists, it is not available on all wallets and\nthe features brought by v4 is not needed for the current use case."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TypedData")," to be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v3")," MUST be as follows, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encryptionPublicKey")," is Bob's Encryption Public Key, ",(0,i.kt)("inlineCode",{parentName:"li"},"B'"),",\nin hex format, ",(0,i.kt)("strong",{parentName:"li"},"without")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bobAddress")," is Bob's Ethereum address, corresponding to ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),",\nin hex format, ",(0,i.kt)("strong",{parentName:"li"},"with")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0x")," prefix.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const typedData = {\n    domain: {\n      chainId: 1,\n      name: 'Ethereum Private Message over Waku',\n      version: '1',\n    },\n    message: {\n      encryptionPublicKey: encryptionPublicKey,\n      ownerAddress: bobAddress,\n    },\n    primaryType: 'PublishEncryptionPublicKey',\n    types: {\n      EIP712Domain: [\n        { name: 'name', type: 'string' },\n        { name: 'version', type: 'string' },\n        { name: 'chainId', type: 'uint256' },\n      ],\n      PublishEncryptionPublicKey: [\n        { name: 'encryptionPublicKey', type: 'string' },\n        { name: 'ownerAddress', type: 'string' },\n      ],\n    },\n  }\n")),(0,i.kt)("h3",{id:"public-key-message"},"Public Key Message"),(0,i.kt)("p",null,"The resulting signature is then included in a ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKeyMessage"),", where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encryption_public_key")," is Bob's Encryption Public Key ",(0,i.kt)("inlineCode",{parentName:"li"},"B'"),", not compressed,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_address")," is Bob's Ethereum Address ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature")," is the EIP-712 as described above.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage PublicKeyMessage {\n   bytes encryption_public_key = 1;\n   bytes eth_address = 2;\n   bytes signature = 3;\n}\n')),(0,i.kt)("p",null,"This MUST be wrapped in a Waku Message version 0,\nwith the Public Key Broadcast content topic.\nFinally, Bob SHOULD publish the message on Waku v2."),(0,i.kt)("h2",{id:"consideration-for-a-non-interactiveuncoordinated-protocol"},"Consideration for a non-interactive/uncoordinated protocol"),(0,i.kt)("p",null,"Alice has to get Bob's public Key to send a message to Bob.\nBecause an Ethereum Address is part of the hash of the public key's account,\nit is not enough in itself to deduce Bob's Public Key."),(0,i.kt)("p",null,"This is why the protocol dictates that Bob MUST send his Public Key first,\nand Alice MUST receive it before she can send him a message."),(0,i.kt)("p",null,"Moreover, nim-waku, the reference implementation of ",(0,i.kt)("a",{parentName:"p",href:"../../core/13/store"},"13/WAKU2-STORE"),",\nstores messages for a maximum period of 30 days.\nThis means that Bob would need to broadcast his public key\nat least every 30 days to be reachable."),(0,i.kt)("p",null,'Below we are reviewing possible solutions to mitigate this "sign up" step.'),(0,i.kt)("h3",{id:"retrieve-the-public-key-from-the-blockchain"},"Retrieve the public key from the blockchain"),(0,i.kt)("p",null,"If Bob has signed at least one transaction with his account\nthen his Public Key can be extracted from the transaction's ECDSA signature.\nThe challenge with this method is that standard Web3 Wallet API\ndoes not allow Alice to specifically retrieve all/any transaction sent by Bob."),(0,i.kt)("p",null,"Alice would instead need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth.getBlock")," API\nto retrieve Ethereum blocks one by one.\nFor each block, she would need to check the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," value of each transaction\nuntil she finds a transaction sent by Bob."),(0,i.kt)("p",null,"This process is resource intensive and\ncan be slow when using services such as Infura due to rate limits in place,\nwhich makes it inappropriate for a browser or mobile phone environment."),(0,i.kt)("p",null,"An alternative would be to either run a backend\nthat can connect directly to an Ethereum node,\nuse a centralized blockchain explorer\nor use a decentralized indexing service such as ",(0,i.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph"),"."),(0,i.kt)("p",null,"Note that these would resolve a UX issue\nonly if a sender wants to proceed with ",(0,i.kt)("em",{parentName:"p"},"air drops"),"."),(0,i.kt)("p",null,"Indeed, if Bob does not publish his Public Key in the first place\nthen it can be an indication that he simply does not participate in this protocol\nand hence will not receive messages."),(0,i.kt)("p",null,"However, these solutions would be helpful\nif the sender wants to proceed with an ",(0,i.kt)("em",{parentName:"p"},"air drop")," of messages:\nSend messages over Waku for users to retrieve later,\nonce they decide to participate in this protocol.\nBob may not want to participate first but may decide to participate at a later stage\nand would like to access previous messages.\nThis could make sense in an NFT offer scenario:\nUsers send offers to any NFT owner,\nNFT owner may decide at some point to participate in the protocol and\nretrieve previous offers."),(0,i.kt)("h3",{id:"publishing-the-public-in-long-term-storage"},"Publishing the public in long term storage"),(0,i.kt)("p",null,"Another improvement would be for Bob not having to re-publish his public key\nevery 30 days or less.\nSimilarly to above,\nif Bob stops publishing his public key\nthen it may be an indication that he does not participate in the protocol anymore."),(0,i.kt)("p",null,"In any case,\nthe protocol could be modified to store the Public Key in a more permanent storage,\nsuch as a dedicated smart contract on the blockchain."),(0,i.kt)("h2",{id:"send-private-message"},"Send Private Message"),(0,i.kt)("p",null,"Alice MAY monitor the Waku v2 to collect Ethereum Address and\nEncryption Public Key tuples.\nAlice SHOULD verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),"s of ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKeyMessage"),"s she receives\nare valid as per EIP-712.\nShe SHOULD drop any message without a signature or with an invalid signature."),(0,i.kt)("p",null,"Using Bob's Encryption Public Key,\nretrieved via ",(0,i.kt)("a",{parentName:"p",href:"../../core/10/waku2"},"10/WAKU2 spec"),",\nAlice MAY now send an encrypted message to Bob."),(0,i.kt)("p",null,"If she wishes to do so,\nAlice MUST encrypt her message ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," using Bob's Encryption Public Key ",(0,i.kt)("inlineCode",{parentName:"p"},"B'"),",\nas per ",(0,i.kt)("a",{parentName:"p",href:"../26/payload#asymmetric"},"26/WAKU-PAYLOAD Asymmetric Encryption specs"),"."),(0,i.kt)("p",null,"Alice SHOULD now publish this message on the Private Message content topic."),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../core/10/waku2"},"10/WAKU2 spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../26/payload"},"Waku Message Version 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.signal.org/docs/specifications/x3dh/"},"X3DH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/doubleratchet/"},"Double Ratchet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://specs.status.im/spec/5"},"Status secure transport spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../core/13/store"},"13/WAKU2-STORE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thegraph.com/"},"The Graph"))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);