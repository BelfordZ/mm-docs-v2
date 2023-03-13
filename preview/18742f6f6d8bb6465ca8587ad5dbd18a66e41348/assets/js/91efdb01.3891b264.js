"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Access a user's MetaMask provider",s={unversionedId:"how-to/access-provider",id:"how-to/access-provider",title:"Access a user's MetaMask provider",description:"You the metamask-extension-provider",source:"@site/wallet/how-to/access-provider.md",sourceDirName:"how-to",slug:"/how-to/access-provider",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/access-provider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Register a contract's methods names",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/register-method-names"},next:{title:"Use onboarding library",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-onboarding-library"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Add additional browser support",id:"add-additional-browser-support",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Edit the example",id:"edit-the-example",level:2},{value:"Use with a local development copy of MetaMask",id:"use-with-a-local-development-copy-of-metamask",level:2},{value:"Current limitations",id:"current-limitations",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-a-users-metamask-provider"},"Access a user's MetaMask provider"),(0,n.kt)("p",null,"You the ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/metamask-extension-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"metamask-extension-provider")),"\npackage to access a user's MetaMask provider from other web extensions."),(0,n.kt)("p",null,"The account provided by this provider is the user's MetaMask account."),(0,n.kt)("p",null,"When sending signing requests to this provider, MetaMask prompts the user to sign with their accounts."),(0,n.kt)("p",null,"This module works in Chrome and Firefox."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install metamask-extension-provider -s\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"You can use a bundler such as ",(0,n.kt)("a",{parentName:"p",href:"https://browserify.org/"},"Browserify")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"metamask-extension-provider"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const createMetaMaskProvider = require('metamask-extension-provider');\n\nconst provider = createMetaMaskProvider();\n\nprovider.on('error', (error) => {\n  // Failed to connect to MetaMask, fallback logic.\n});\n\n// Enjoy!\n")),(0,n.kt)("h2",{id:"add-additional-browser-support"},"Add additional browser support"),(0,n.kt)("p",null,"Add MetaMask's extension ID for that browser's store to the configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "CHROME_ID": "nkbihfbeogaeaoehlefnkodbefgpgknn",\n  "FIREFOX_ID": "webextension@metamask.io"\n}\n')),(0,n.kt)("h2",{id:"run-the-example"},"Run the example"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"./sample-extension")," folder as a web extension.\nYou can easily add it to Chrome or Firefox Developer Edition."),(0,n.kt)("h2",{id:"edit-the-example"},"Edit the example"),(0,n.kt)("p",null,"You must have Browserify installed (",(0,n.kt)("inlineCode",{parentName:"p"},"npm i -g browserify"),") to edit the example."),(0,n.kt)("p",null,"You can edit the sample file ",(0,n.kt)("inlineCode",{parentName:"p"},"sample-extension/index.js")," and rebuild the file with ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run buildSample"),"."),(0,n.kt)("h2",{id:"use-with-a-local-development-copy-of-metamask"},"Use with a local development copy of MetaMask"),(0,n.kt)("p",null,"You must edit the method ",(0,n.kt)("inlineCode",{parentName:"p"},"getMetaMaskId()")," to return your local development MetaMask instance's ID.\nYou can get that from your MetaMask console using ",(0,n.kt)("inlineCode",{parentName:"p"},"chrome.runtime.id"),"."),(0,n.kt)("h2",{id:"current-limitations"},"Current limitations"),(0,n.kt)("p",null,"In order to identify problems (such as MetaMask not connecting), proper error handling must be added\nto ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-inpage-provider"},"metamask-inpage-provider")," that exposes the\nerrors to the consumer of the provider.\nMaybe making it an event-emitter, so it can emit its errors, instead of just logging them."))}c.isMDXComponent=!0}}]);