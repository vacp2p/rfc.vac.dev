"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[7181],{23450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"53/WAKU2-X3DH",name:"X3DH usage for Waku payload encryption",status:"draft",category:"Standards Track",editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},o=void 0,s={unversionedId:"standards/application/53/x3dh",id:"standards/application/53/x3dh",title:"53/WAKU2-X3DH",description:"- Status: draft",source:"@site/waku/standards/application/53/x3dh.md",sourceDirName:"standards/application/53",slug:"/standards/application/53/x3dh",permalink:"/waku/standards/application/53/x3dh",draft:!1,tags:[],version:"current",frontMatter:{title:"53/WAKU2-X3DH",name:"X3DH usage for Waku payload encryption",status:"draft",category:"Standards Track",editor:"Aaryamann Challani &lt;p1ge0nh8er@proton.me&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"26/WAKU2-PAYLOAD",permalink:"/waku/standards/application/26/payload"},next:{title:"54/WAKU2-X3DH-SESSIONS",permalink:"/waku/standards/application/54/x3dh-sessions"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Design Requirements",id:"design-requirements",level:3},{value:"Conventions",id:"conventions",level:3},{value:"End-to-End Encryption",id:"end-to-end-encryption",level:3},{value:"Cryptographic Protocols",id:"cryptographic-protocols",level:3},{value:"Pre-keys",id:"pre-keys",level:3},{value:"Flow",id:"flow",level:3},{value:"1. Initial key exchange flow (X3DH)",id:"1-initial-key-exchange-flow-x3dh",level:4},{value:"2. Double Ratchet",id:"2-double-ratchet",level:4},{value:"3. Chain key update",id:"3-chain-key-update",level:4},{value:"4. Message key derivation",id:"4-message-key-derivation",level:4},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Privacy Considerations",id:"privacy-considerations",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: draft"),(0,r.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,r.kt)("li",{parentName:"ul"},"Editor: Aaryamann Challani ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:p1ge0nh8er@proton.me"},"p1ge0nh8er@proton.me"),">"),(0,r.kt)("li",{parentName:"ul"},"Contributors:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Andrea Piana ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:andreap@status.im"},"andreap@status.im"),">"),(0,r.kt)("li",{parentName:"ul"},"Pedro Pombeiro ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:pedro@status.im"},"pedro@status.im"),">"),(0,r.kt)("li",{parentName:"ul"},"Corey Petty ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:corey@status.im"},"corey@status.im"),">"),(0,r.kt)("li",{parentName:"ul"},"Oskar Thor\xe9n ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,r.kt)("li",{parentName:"ul"},"Dean Eigenmann ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:dean@status.im"},"dean@status.im"),">")))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This document describes a method that can be used to provide a secure channel\nbetween two peers, and thus provide confidentiality, integrity,\nauthenticity and forward secrecy.\nIt is transport-agnostic and works over asynchronous networks."),(0,r.kt)("p",null,"It builds on the ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/"},"X3DH"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/"},"Double Ratchet")," specifications,\nwith some adaptations to operate in a decentralized environment."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Nodes on a network may want to communicate with each other in a secure manner,\nwithout other nodes network being able to read their messages."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"definitions"},"Definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Perfect Forward Secrecy")," is a feature of specific key-agreement protocols\nwhich provide assurances that session keys will not be compromised\neven if the private keys of the participants are compromised.\nSpecifically, past messages cannot be decrypted by a third-party\nwho manages to get a hold of a private key.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Secret channel")," describes a communication channel\nwhere a Double Ratchet algorithm is in use."))),(0,r.kt)("h3",{id:"design-requirements"},"Design Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Confidentiality"),":\nThe adversary should not be able to learn what data is being exchanged\nbetween two Status clients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authenticity"),":\nThe adversary should not be able to cause either endpoint\nto accept data from any third party as though it came from the other endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Forward Secrecy"),":\nThe adversary should not be able to learn what data was exchanged\nbetween two clients if, at some later time,\nthe adversary compromises one or both of the endpoints."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrity"),":\nThe adversary should not be able to cause either endpoint\nto accept data that has been tampered with.")),(0,r.kt)("p",null,"All of these properties are ensured by the use of ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/"},"Signal's Double Ratchet")),(0,r.kt)("h3",{id:"conventions"},"Conventions"),(0,r.kt)("p",null,"Types used in this specification are defined using the\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"Protobuf")," wire format."),(0,r.kt)("h3",{id:"end-to-end-encryption"},"End-to-End Encryption"),(0,r.kt)("p",null,"End-to-end encryption (E2EE) takes place between two clients.\nThe main cryptographic protocol is a Double Ratchet protocol,\nwhich is derived from the\n",(0,r.kt)("a",{parentName:"p",href:"https://otr.cypherpunks.ca/Protocol-v3-4.1.1.html"},"Off-the-Record protocol"),",\nusing a different ratchet.\n",(0,r.kt)("a",{parentName:"p",href:"../../core/10/waku2"},"The Waku v2 protocol"),"\nsubsequently encrypts the message payload, using symmetric key encryption.\nFurthermore, the concept of prekeys\n(through the use of ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/"},"X3DH"),")\nis used to allow the protocol to operate in an asynchronous environment.\nIt is not necessary for two parties to be online at the same time\nto initiate an encrypted conversation."),(0,r.kt)("h3",{id:"cryptographic-protocols"},"Cryptographic Protocols"),(0,r.kt)("p",null,"This protocol uses the following cryptographic primitives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"X3DH"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Elliptic curve Diffie-Hellman key exchange (secp256k1)"),(0,r.kt)("li",{parentName:"ul"},"KECCAK-256"),(0,r.kt)("li",{parentName:"ul"},"ECDSA"),(0,r.kt)("li",{parentName:"ul"},"ECIES"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Double Ratchet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HMAC-SHA-256 as MAC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Elliptic curve Diffie-Hellman key exchange (Curve25519)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AES-256-CTR with HMAC-SHA-256 and IV derived alongside an encryption key"),(0,r.kt)("p",{parentName:"li"},"The node achieves key derivation using ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc5869"},"HKDF"),"."))))),(0,r.kt)("h3",{id:"pre-keys"},"Pre-keys"),(0,r.kt)("p",null,"Every client SHOULD initially generate some key material which is stored locally:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identity keypair based on secp256k1 - ",(0,r.kt)("inlineCode",{parentName:"li"},"IK")),(0,r.kt)("li",{parentName:"ul"},"A signed prekey based on secp256k1 - ",(0,r.kt)("inlineCode",{parentName:"li"},"SPK")),(0,r.kt)("li",{parentName:"ul"},"A prekey signature - ",(0,r.kt)("inlineCode",{parentName:"li"},"Sig(IK, Encode(SPK))"))),(0,r.kt)("p",null,"More details can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"X3DH Prekey bundle creation")," section of ",(0,r.kt)("a",{parentName:"p",href:"https://specs.status.im/spec/2#x3dh-prekey-bundles"},"2/ACCOUNT"),"."),(0,r.kt)("p",null,"Prekey bundles MAY be extracted from any peer's messages,\nor found via searching for their specific topic, ",(0,r.kt)("inlineCode",{parentName:"p"},"{IK}-contact-code"),"."),(0,r.kt)("p",null,"The following methods can be used to retrieve prekey bundles from a peer's messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"contact codes;"),(0,r.kt)("li",{parentName:"ul"},"public and one-to-one chats;"),(0,r.kt)("li",{parentName:"ul"},"QR codes;"),(0,r.kt)("li",{parentName:"ul"},"ENS record;"),(0,r.kt)("li",{parentName:"ul"},"Decentralized permanent storage (e.g. Swarm, IPFS)."),(0,r.kt)("li",{parentName:"ul"},"Waku")),(0,r.kt)("p",null,"Waku SHOULD be used for retrieving prekey bundles."),(0,r.kt)("p",null,"Since bundles stored in QR codes or\nENS records cannot be updated to delete already used keys,\nthe bundle MAY be rotated every 24 hours, and distributed via Waku."),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("p",null,"The key exchange can be summarized as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initial key exchange: Two parties, Alice and Bob, exchange their prekey bundles,\nand derive a shared secret.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Double Ratchet:\nThe two parties use the shared secret to derive a new encryption key\nfor each message they send.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chain key update: The two parties update their chain keys.\nThe chain key is used to derive new encryption keys for future messages.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Message key derivation:\nThe two parties derive a new message key from their chain key, and\nuse it to encrypt a message."))),(0,r.kt)("h4",{id:"1-initial-key-exchange-flow-x3dh"},"1. Initial key exchange flow (X3DH)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/#sending-the-initial-message"},"Section 3 of the X3DH protocol"),"\ndescribes the initial key exchange flow, with some additional context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The peers' identity keys ",(0,r.kt)("inlineCode",{parentName:"li"},"IK_A")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"IK_B")," correspond to their public keys;"),(0,r.kt)("li",{parentName:"ul"},"Since it is not possible to guarantee that a prekey will be used only once\nin a decentralized world, the one-time prekey ",(0,r.kt)("inlineCode",{parentName:"li"},"OPK_B")," is not used in this scenario;"),(0,r.kt)("li",{parentName:"ul"},"Nodes SHOULD not send Bundles to a centralized server,\nbut instead provide them in a decentralized way as described in the ",(0,r.kt)("a",{parentName:"li",href:"#pre-keys"},"Pre-keys section"),".")),(0,r.kt)("p",null,"Alice retrieves Bob's prekey bundle, however it is not specific to Alice.\nIt contains:"),(0,r.kt)("p",null,"(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L12"},"reference wire format"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wire format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"// X3DH prekey bundle\nmessage Bundle {\n  // Identity key 'IK_B'\n  bytes identity = 1;\n  // Signed prekey 'SPK_B' for each device, indexed by 'installation-id'\n  map<string,SignedPreKey> signed_pre_keys = 2;\n  // Prekey signature 'Sig(IK_B, Encode(SPK_B))'\n  bytes signature = 4;\n  // When the bundle was created locally\n  int64 timestamp = 5;\n}\n")),(0,r.kt)("p",null,"(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L5"},"reference wire format"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message SignedPreKey {\n  bytes signed_pre_key = 1;\n  uint32 version = 2;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," is generated by sorting ",(0,r.kt)("inlineCode",{parentName:"p"},"installation-id")," in lexicographical order,\nand concatenating the ",(0,r.kt)("inlineCode",{parentName:"p"},"signed-pre-key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"installation-id-1signed-pre-key1version1installation-id2signed-pre-key2-version-2")),(0,r.kt)("h4",{id:"2-double-ratchet"},"2. Double Ratchet"),(0,r.kt)("p",null,"Having established the initial shared secret ",(0,r.kt)("inlineCode",{parentName:"p"},"SK")," through X3DH,\nit SHOULD be used to seed a Double Ratchet exchange between Alice and Bob."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/"},"Double Ratchet spec"),"\nfor more details."),(0,r.kt)("p",null,"The initial message sent by Alice to Bob is sent as a top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtocolMessage"),"\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L65"},"reference wire format"),")\ncontaining a map of ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectMessageProtocol")," indexed by ",(0,r.kt)("inlineCode",{parentName:"p"},"installation-id"),"\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/1ac9dd974415c3f6dee95145b6644aeadf02f02c/services/shhext/chat/encryption.proto#L56"},"reference wire format"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ProtocolMessage {\n  // The installation id of the sender\n  string installation_id = 2;\n  // A sequence of bundles\n  repeated Bundle bundles = 3;\n  // One to one message, encrypted, indexed by installation_id\n  map<string,DirectMessageProtocol> direct_message = 101;\n  // Public message, not encrypted\n  bytes public_message = 102;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message EncryptedMessageProtocol {\n  X3DHHeader X3DH_header = 1;\n  DRHeader DR_header = 2; \n  DHHeader DH_header = 101;\n  // Encrypted payload\n  // if a bundle is available, contains payload encrypted with the Double Ratchet algorithm;\n  // otherwise, payload encrypted with output key of DH exchange (no Perfect Forward Secrecy).\n  bytes payload = 3;\n}\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"X3DH_header"),": the ",(0,r.kt)("inlineCode",{parentName:"p"},"X3DHHeader")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectMessageProtocol")," contains:"),(0,r.kt)("p",{parentName:"li"},"  (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L47"},"reference wire format"),")"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"    message X3DHHeader {\n      // Alice's ephemeral key `EK_A`\n      bytes key = 1;\n      // Bob's bundle signed prekey\n      bytes id = 4;\n    }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DR_header"),": Double ratchet header (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L31"},"reference wire format"),").\nUsed when Bob's public bundle is available:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"    message DRHeader {\n      // Alice's current ratchet public key (as mentioned in [DR spec section 2.2](https://signal.org/docs/specifications/doubleratchet/#symmetric-key-ratchet))\n      bytes key = 1;\n      // number of the message in the sending chain\n      uint32 n = 2;\n      // length of the previous sending chain\n      uint32 pn = 3;\n      // Bob's bundle ID\n      bytes id = 4;\n    }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DH_header"),": Diffie-Hellman header (used when Bob's bundle is not available):\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L42"},"reference wire format"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"    message DHHeader {\n      // Alice's compressed ephemeral public key.\n      bytes key = 1;\n    }\n")),(0,r.kt)("h4",{id:"3-chain-key-update"},"3. Chain key update"),(0,r.kt)("p",null,"The chain key MUST be updated according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DR_Header"),"\nreceived in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EncryptedMessageProtocol")," message,\ndescribed in ",(0,r.kt)("a",{parentName:"p",href:"#2-double-ratchet"},"2.Double Ratchet"),"."),(0,r.kt)("h4",{id:"4-message-key-derivation"},"4. Message key derivation"),(0,r.kt)("p",null,"The message key MUST be derived from a single ratchet step in the symmetric-key ratchet\nas described in ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/#symmetric-key-ratchet"},"Symmetric key ratchet")),(0,r.kt)("p",null,"The message key MUST be used to encrypt the next message to be sent."),(0,r.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inherits the security considerations of ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/x3dh/#security-considerations"},"X3DH"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/#security-considerations"},"Double Ratchet"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inherits the security considerations of the ",(0,r.kt)("a",{parentName:"p",href:"../../core/10/waku2"},"Waku v2 protocol"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The protocol is designed to be used in a decentralized manner, however,\nit is possible to use a centralized server to serve prekey bundles.\nIn this case, the server is trusted."))),(0,r.kt)("h2",{id:"privacy-considerations"},"Privacy Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"This protocol does not provide message unlinkability.\nIt is possible to link messages signed by the same keypair.")),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/x3dh/"},"X3DH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/doubleratchet/"},"Double Ratchet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/doubleratchet/"},"Signal's Double Ratchet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Protobuf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://otr.cypherpunks.ca/Protocol-v3-4.1.1.html"},"Off-the-Record protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../core/10/waku2"},"The Waku v2 protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc5869"},"HKDF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://specs.status.im/spec/2#x3dh-prekey-bundles"},"2/ACCOUNT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/status-im/status-go/blob/a904d9325e76f18f54d59efc099b63293d3dcad3/services/shhext/chat/encryption.proto#L12"},"reference wire format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/doubleratchet/#symmetric-key-ratchet"},"Symmetric key ratchet"))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);