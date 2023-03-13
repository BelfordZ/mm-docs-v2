"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Register a token with users",i={unversionedId:"how-to/register-token",id:"how-to/register-token",title:"Register a token with users",description:"When a user opens MetaMask, they're shown a variety of assets, including tokens.",source:"@site/wallet/how-to/register-token.md",sourceDirName:"how-to",slug:"/how-to/register-token",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/register-token",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Sign data",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/sign-data"},next:{title:"Register a contract's methods names",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/register-method-names"}},l={},c=[{value:"Code-free examples",id:"code-free-examples",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register-a-token-with-users"},"Register a token with users"),(0,o.kt)("p",null,"When a user opens MetaMask, they're shown a variety of assets, including tokens.\nBy default, MetaMask auto-detects some major popular tokens and auto-displays them, but for most\ntokens, the user must add the token themselves."),(0,o.kt)("p",null,"While this is possible using our UI with the ",(0,o.kt)("strong",{parentName:"p"},"Add Token")," button, that process can be cumbersome,\ninvolves the user interacting with contract addresses, and is very error prone."),(0,o.kt)("p",null,"You can improve the security and experience of users adding your token to their MetaMask interface\nby taking advantage of the ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/rpc-api#wallet_watchasset"},(0,o.kt)("inlineCode",{parentName:"a"},"wallet_watchAsset"))," RPC API\nmethod."),(0,o.kt)("h2",{id:"code-free-examples"},"Code-free examples"),(0,o.kt)("p",null,"The following are live web applications that let you enter your token details, and then share them\nwith a simple web link:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vittominacori.github.io/watch-token/create/"},"Watch Token")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.github.io/Add-Token/#edit"},"Add Token App"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you'd like to integrate suggesting a token into your own web app, you can use the following code\nsnippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';\nconst tokenSymbol = 'TUT';\nconst tokenDecimals = 18;\nconst tokenImage = 'http://placekitten.com/200/300';\n\ntry {\n  // wasAdded is a boolean. Like any RPC method, an error may be thrown.\n  const wasAdded = await ethereum.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20', // Initially only supports ERC20, but eventually more!\n      options: {\n        address: tokenAddress, // The address that the token is at.\n        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.\n        decimals: tokenDecimals, // The number of decimals in the token\n        image: tokenImage, // A string url of the token logo\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('Thanks for your interest!');\n  } else {\n    console.log('Your loss!');\n  }\n} catch (error) {\n  console.log(error);\n}\n")))}d.isMDXComponent=!0}}]);