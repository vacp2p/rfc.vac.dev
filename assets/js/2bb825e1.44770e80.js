"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[2763],{72234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"26/WAKU2-PAYLOAD",name:"Waku Message Payload Encryption",status:"draft",editor:"Oskar Thoren &lt;oskarth@titanproxy.com&gt;",contributors:null},o=void 0,p={unversionedId:"standards/application/26/payload",id:"standards/application/26/payload",title:"26/WAKU2-PAYLOAD",description:"- Status: draft",source:"@site/waku/standards/application/26/payload.md",sourceDirName:"standards/application/26",slug:"/standards/application/26/payload",permalink:"/waku/standards/application/26/payload",draft:!1,tags:[],version:"current",frontMatter:{title:"26/WAKU2-PAYLOAD",name:"Waku Message Payload Encryption",status:"draft",editor:"Oskar Thoren &lt;oskarth@titanproxy.com&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"21/WAKU2-FAULT-TOLERANT-STORE",permalink:"/waku/standards/application/21/fault-tolerant-store"},next:{title:"53/WAKU2-X3DH",permalink:"/waku/standards/application/53/x3dh"}},l={},s=[{value:"Design requirements",id:"design-requirements",level:2},{value:"Cryptographic primitives",id:"cryptographic-primitives",level:2},{value:"Specification",id:"specification",level:2},{value:"ABNF",id:"abnf",level:3},{value:"Signature",id:"signature",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Symmetric",id:"symmetric",level:4},{value:"Asymmetric",id:"asymmetric",level:4},{value:"ECIES",id:"ecies",level:4},{value:"Padding",id:"padding",level:3},{value:"Decoding a message",id:"decoding-a-message",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Editor: Oskar Thoren ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">")),(0,i.kt)("p",null,"This specification describes how Waku provides confidentiality, authenticity, and\nintegrity, as well as some form of unlinkability.\nSpecifically, it describes how encryption, decryption and\nsigning works in ",(0,i.kt)("a",{parentName:"p",href:"../../legacy/6/waku1"},"6/WAKU1")," and\nin ",(0,i.kt)("a",{parentName:"p",href:"../../core/10/waku2"},"10/WAKU2 spec")," with ",(0,i.kt)("a",{parentName:"p",href:"../../core/14/message#version1"},"14/WAKU-MESSAGE version 1"),"."),(0,i.kt)("p",null,"This specification effectively replaces ",(0,i.kt)("a",{parentName:"p",href:"../../legacy/7/data"},"7/WAKU-DATA"),"\nas well as ",(0,i.kt)("a",{parentName:"p",href:"../../legacy/6/waku1#payload-encryption"},"6/WAKU1 Payload encryption"),"\nbut written in a way that is agnostic and self-contained for Waku v1 and Waku v2."),(0,i.kt)("p",null,"Large sections of the specification originate from\n",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-627"},"EIP-627: Whisper spec")," as well from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p/blob/master/rlpx##ecies-encryption"},"RLPx Transport Protocol spec (ECIES encryption)"),"\nwith some modifications."),(0,i.kt)("h2",{id:"design-requirements"},"Design requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Confidentiality"),":\nThe adversary should not be able to learn what data is being sent from one Waku node\nto one or several other Waku nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Authenticity"),":\nThe adversary should not be able to cause Waku endpoint\nto accept data from any third party as though it came from the other endpoint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Integrity"),":\nThe adversary should not be able to cause a Waku endpoint to\naccept data that has been tampered with.")),(0,i.kt)("p",null,"Notable, ",(0,i.kt)("em",{parentName:"p"},"forward secrecy")," is not provided for at this layer.\nIf this property is desired,\na more fully featured secure communication protocol can be used on top,\nsuch as ",(0,i.kt)("a",{parentName:"p",href:"https://specs.status.im/spec/5"},"Status 5/SECURE-TRANSPORT"),"."),(0,i.kt)("p",null,"It also provides some form of ",(0,i.kt)("em",{parentName:"p"},"unlinkability")," since:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"only participants who are able to decrypt a message can see its signature"),(0,i.kt)("li",{parentName:"ul"},"payload are padded to a fixed length")),(0,i.kt)("h2",{id:"cryptographic-primitives"},"Cryptographic primitives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AES-256-GCM (for symmetric encryption)"),(0,i.kt)("li",{parentName:"ul"},"ECIES"),(0,i.kt)("li",{parentName:"ul"},"ECDSA"),(0,i.kt)("li",{parentName:"ul"},"KECCAK-256")),(0,i.kt)("p",null,"ECIES is using the following cryptosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Curve: secp256k1"),(0,i.kt)("li",{parentName:"ul"},"KDF: NIST SP 800-56 Concatenation Key Derivation Function, with SHA-256 option"),(0,i.kt)("li",{parentName:"ul"},"MAC: HMAC with SHA-256"),(0,i.kt)("li",{parentName:"ul"},"AES: AES-128-CTR")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"../../legacy/6/waku1"},"6/WAKU1"),",\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field is used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"waku envelope"),",\nand the field MAY contain the encrypted payload."),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"../../core/10/waku2"},"10/WAKU2 spec"),",\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"WakuMessage")," and\nMAY contain the encrypted payload."),(0,i.kt)("p",null,"The fields that are concatenated and\nencrypted as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," (Waku v1) / ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," (Waku v2) field are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"flags"),(0,i.kt)("li",{parentName:"ul"},"payload-length"),(0,i.kt)("li",{parentName:"ul"},"payload"),(0,i.kt)("li",{parentName:"ul"},"padding"),(0,i.kt)("li",{parentName:"ul"},"signature")),(0,i.kt)("h3",{id:"abnf"},"ABNF"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5234"},"Augmented Backus-Naur form (ABNF)"),"\nwe have the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-abnf"},"; 1 byte; first two bits contain the size of payload-length field,\n; third bit indicates whether the signature is present.\nflags           = 1OCTET\n\n; contains the size of payload.\npayload-length  = 4*OCTET\n\n; byte array of arbitrary size (may be zero).\npayload         = *OCTET\n\n; byte array of arbitrary size (may be zero).\npadding         = *OCTET\n\n; 65 bytes, if present.\nsignature       = 65OCTET\n\ndata            = flags payload-length payload padding [signature]\n\n; This field is called payload in Waku v2\npayload         = data\n")),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("p",null,"Those unable to decrypt the payload/data are also unable to access the signature.\nThe signature, if provided,\nis the ECDSA signature of the Keccak-256 hash of the unencrypted data\nusing the secret key of the originator identity.\nThe signature is serialized as the concatenation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," parameters\nof the SECP-256k1 ECDSA signature, in that order.\n",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," MUST be big-endian encoded, fixed-width 256-bit unsigned.\n",(0,i.kt)("inlineCode",{parentName:"p"},"v")," MUST be an 8-bit big-endian encoded,\nnon-normalized and should be either 27 or 28."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},'Ethereum "Yellow paper": Appendix F Signing transactions'),"\nfor more information on signature generation, parameters and public key recovery."),(0,i.kt)("h3",{id:"encryption"},"Encryption"),(0,i.kt)("h4",{id:"symmetric"},"Symmetric"),(0,i.kt)("p",null,"Symmetric encryption uses AES-256-GCM for\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Authenticated_encryption"},"authenticated encryption"),".\nThe output of encryption is of the form (",(0,i.kt)("inlineCode",{parentName:"p"},"ciphertext"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tag"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"iv"),")\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"ciphertext")," is the encrypted message,\n",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," is a 16 byte message authentication tag and\n",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," is a 12 byte initialization vector  (nonce).\nThe message authentication ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," and\ninitialization vector ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," field MUST be appended to the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"ciphertext"),",\nin that order.\nNote that previous specifications and\nsome implementations might refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"iv")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"salt"),"."),(0,i.kt)("h4",{id:"asymmetric"},"Asymmetric"),(0,i.kt)("p",null,"Asymmetric encryption uses the standard Elliptic Curve Integrated Encryption Scheme\n(ECIES) with SECP-256k1 public key."),(0,i.kt)("h4",{id:"ecies"},"ECIES"),(0,i.kt)("p",null,"This section originates from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/devp2p/blob/master/rlpx##ecies-encryption"},"RLPx Transport Protocol spec"),"\nspec with minor modifications."),(0,i.kt)("p",null,"The cryptosystem used is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The elliptic curve secp256k1 with generator ",(0,i.kt)("inlineCode",{parentName:"li"},"G"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KDF(k, len)"),": the NIST SP 800-56 Concatenation Key Derivation Function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAC(k, m)"),": HMAC using the SHA-256 hash function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AES(k, iv, m)"),": the AES-128 encryption function in CTR mode.")),(0,i.kt)("p",null,"Special notation used: ",(0,i.kt)("inlineCode",{parentName:"p"},"X || Y")," denotes concatenation of ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,i.kt)("p",null,"Alice wants to send an encrypted message that can be decrypted by\nBob's static private key ",(0,i.kt)("inlineCode",{parentName:"p"},"kB"),".\nAlice knows about Bobs static public key ",(0,i.kt)("inlineCode",{parentName:"p"},"KB"),"."),(0,i.kt)("p",null,"To encrypt the message ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", Alice generates a random number ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and\ncorresponding elliptic curve public key ",(0,i.kt)("inlineCode",{parentName:"p"},"R = r * G")," and\ncomputes the shared secret ",(0,i.kt)("inlineCode",{parentName:"p"},"S = Px")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"(Px, Py) = r * KB"),".\nShe derives key material for encryption and\nauthentication as ",(0,i.kt)("inlineCode",{parentName:"p"},"kE || kM = KDF(S, 32)"),"\nas well as a random initialization vector ",(0,i.kt)("inlineCode",{parentName:"p"},"iv"),".\nAlice sends the encrypted message ",(0,i.kt)("inlineCode",{parentName:"p"},"R || iv || c || d")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"c = AES(kE, iv , m)"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"d = MAC(sha256(kM), iv || c)")," to Bob."),(0,i.kt)("p",null,"For Bob to decrypt the message ",(0,i.kt)("inlineCode",{parentName:"p"},"R || iv || c || d"),",\nhe derives the shared secret ",(0,i.kt)("inlineCode",{parentName:"p"},"S = Px")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"(Px, Py) = kB * R"),"\nas well as the encryption and authentication keys ",(0,i.kt)("inlineCode",{parentName:"p"},"kE || kM = KDF(S, 32)"),".\nBob verifies the authenticity of the message\nby checking whether ",(0,i.kt)("inlineCode",{parentName:"p"},"d == MAC(sha256(kM), iv || c)"),"\nthen obtains the plaintext as ",(0,i.kt)("inlineCode",{parentName:"p"},"m = AES(kE, iv || c)"),"."),(0,i.kt)("h3",{id:"padding"},"Padding"),(0,i.kt)("p",null,"The padding field is used to align data size,\nsince data size alone might reveal important metainformation.\nPadding can be arbitrary size.\nHowever, it is recommended that the size of Data Field\n(excluding the IV and tag) before encryption (i.e. plain text)\nSHOULD be a multiple of 256 bytes."),(0,i.kt)("h3",{id:"decoding-a-message"},"Decoding a message"),(0,i.kt)("p",null,"In order to decode a message, a node SHOULD try to apply both symmetric and\nasymmetric decryption operations.\nThis is because the type of encryption is not included in the message."),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../legacy/6/waku1"},"6/WAKU1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../core/10/waku2"},"10/WAKU2 spec")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../core/14/message#version1"},"14/WAKU-MESSAGE version 1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../../legacy/7/data"},"7/WAKU-DATA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-627"},"EIP-627: Whisper spec")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ethereum/devp2p/blob/master/rlpx##ecies-encryption"},"RLPx Transport Protocol spec (ECIES encryption)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://specs.status.im/spec/5"},"Status 5/SECURE-TRANSPORT")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc5234"},"Augmented Backus-Naur form (ABNF)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},'Ethereum "Yellow paper": Appendix F Signing transactions')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authenticated_encryption"},"authenticated encryption"))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);