"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=a,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Pure JavaScript"},s="Use MetaMask SDK with pure JavaScript",i={unversionedId:"how-to/use-sdk/pure-js",id:"how-to/use-sdk/pure-js",title:"Pure JavaScript",description:"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect",source:"@site/wallet/how-to/use-sdk/pure-js.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/pure-js",permalink:"/mm-docs-v2/sdk-ios/wallet/how-to/use-sdk/pure-js",draft:!1,tags:[],version:"current",frontMatter:{title:"Pure JavaScript"},sidebar:"walletSidebar",previous:{title:"React Native",permalink:"/mm-docs-v2/sdk-ios/wallet/how-to/use-sdk/react-native"},next:{title:"Native iOS",permalink:"/mm-docs-v2/sdk-ios/wallet/how-to/use-sdk/ios"}},c={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,a.kt)("p",null,"You can import MetaMask SDK into your pure JavaScript dapp to enable your users to easily connect\nwith a MetaMask wallet client.\nThe SDK for pure JavaScript ",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/#how-it-works"},"works the same way")," and has the\n",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript and other web frameworks."),(0,a.kt)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<head>\n...\n\n<script src=\"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js\"><\/script>\n\n<script>\n\n    const MMSDK = new MetaMaskSDK()\n\n    const ethereum = MMSDK.getProvider() // You can also access via window.ethereum\n\n    ethereum.request({method: 'eth_requestAccounts'})\n\n<\/script>\n\n...\n</head>\n")),(0,a.kt)("p",null,"You can configure the SDK using any ",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/reference/sdk-js-options"},"options")," and call any\n",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/reference/rpc-api#eth_requestaccounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/sdk-ios/wallet/reference/provider-api#ethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it prompts\nthe installation or connection popup to appear."))}l.isMDXComponent=!0}}]);