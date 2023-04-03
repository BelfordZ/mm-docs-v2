"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Introduction"},s="Integrate with the MetaMask wallet",i={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with the MetaMask wallet using the",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/mm-docs-v2/branch-previews/wallet/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"Get started",permalink:"/mm-docs-v2/branch-previews/wallet/category/get-started"}},l={},c=[{value:"What is the MetaMask Ethereum provider API?",id:"what-is-the-metamask-ethereum-provider-api",level:2},{value:"What is MetaMask SDK?",id:"what-is-metamask-sdk",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integrate-with-the-metamask-wallet"},"Integrate with the MetaMask wallet"),(0,n.kt)("p",null,"Integrate your dapp with the MetaMask wallet using the\n",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),", which enables your dapp to interact\nwith its users' Ethereum accounts.\nWe recommend using ",(0,n.kt)("a",{parentName:"p",href:"how-to/use-sdk"},"MetaMask SDK")," to easily enable your users to connect to their\nMetaMask wallet client from any platform."),(0,n.kt)("p",null,"Get started by ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/get-started/set-up-dev-environment"},"setting up your development environment"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS.")),(0,n.kt)("h2",{id:"what-is-the-metamask-ethereum-provider-api"},"What is the MetaMask Ethereum provider API?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/reference/provider-api"},"MetaMask Ethereum provider API")," is a JavaScript API that MetaMask\ninjects into websites visited by MetaMask users.\nYour dapp can use this API to request users' Ethereum accounts, read data from blockchains the user\nis connected to, and suggest that the user sign messages and transactions."),(0,n.kt)("h2",{id:"what-is-metamask-sdk"},"What is MetaMask SDK?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/how-to/use-sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\n",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/concepts/sdk-connections"},"connection")," from your dapp to the MetaMask browser extension and\nMetaMask Mobile.\nYou can install the SDK into your dapp to enable your users to easily connect to a MetaMask wallet\nclient from multiple platforms (web, desktop, and mobile)."),(0,n.kt)("p",null,"For example, for dapps running on a desktop browser, MetaMask SDK checks if the MetaMask extension\nis installed.\nIf MetaMask isn't installed, the SDK prompts the user to install it or connect to their MetaMask\nMobile wallet using a QR code.\nFor dapps running on a mobile browser, MetaMask SDK automatically deeplinks to the user's MetaMask\nMobile wallet to make the connection."),(0,n.kt)("p",null,"If you have questions about the SDK, you can join the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/N3jSkZbYm6"},"MetaMask SDK Discord"),"."))}u.isMDXComponent=!0}}]);