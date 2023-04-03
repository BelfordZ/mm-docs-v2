"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,u=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(u,s(s({ref:t},h),{},{components:n})):a.createElement(u,s({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},s="RPC API",o={unversionedId:"reference/rpc-api",id:"reference/rpc-api",title:"RPC API",description:"MetaMask uses the ethereum.request(args) method to wrap an",source:"@site/wallet/reference/rpc-api.md",sourceDirName:"reference",slug:"/reference/rpc-api",permalink:"/mm-docs-v2/branch-previews/wallet/reference/rpc-api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/mm-docs-v2/branch-previews/wallet/reference/provider-api"},next:{title:"MetaMask JavaScript SDK options",permalink:"/mm-docs-v2/branch-previews/wallet/reference/sdk-js-options"}},l={},p=[{value:"Ethereum JSON-RPC methods",id:"ethereum-json-rpc-methods",level:2},{value:"Restricted methods",id:"restricted-methods",level:2},{value:"<code>eth_requestAccounts</code>",id:"eth_requestaccounts",level:3},{value:"Returns",id:"returns",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"<code>wallet_getPermissions</code>",id:"wallet_getpermissions",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Description",id:"description-1",level:4},{value:"<code>wallet_requestPermissions</code>",id:"wallet_requestpermissions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-1",level:4},{value:"Unrestricted methods",id:"unrestricted-methods",level:2},{value:"<code>wallet_addEthereumChain</code>",id:"wallet_addethereumchain",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Use with <code>wallet_switchEthereumChain</code>",id:"use-with-wallet_switchethereumchain",level:4},{value:"<code>wallet_switchEthereumChain</code>",id:"wallet_switchethereumchain",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Description",id:"description-4",level:4},{value:"<code>wallet_registerOnboarding</code>",id:"wallet_registeronboarding",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Description",id:"description-5",level:4},{value:"<code>wallet_watchAsset</code>",id:"wallet_watchasset",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-2",level:4},{value:"Mobile RPC methods",id:"mobile-rpc-methods",level:2},{value:"<code>wallet_scanQRCode</code>",id:"wallet_scanqrcode",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-3",level:4}],h={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rpc-api"},"RPC API"),(0,r.kt)("p",null,"MetaMask uses the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/reference/provider-api#ethereumrequestargs"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.request(args)")," method")," to wrap an\nRPC API."),(0,r.kt)("p",null,"The API is based on an interface exposed by all Ethereum clients, along with a growing number of\nmethods that may or may not be supported by other wallets."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.request(args)"),".")),(0,r.kt)("admonition",{title:"Try Ethereum methods",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Visit our ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/"},"API Playground"),".")),(0,r.kt)("h2",{id:"ethereum-json-rpc-methods"},"Ethereum JSON-RPC methods"),(0,r.kt)("p",null,"For the Ethereum JSON-RPC API, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://eth.wiki/json-rpc/API#json-rpc-methods"},"Ethereum wiki"),"."),(0,r.kt)("p",null,"Important methods from this API include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#eth_call"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_call")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#eth_getbalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API#eth_sign"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sign")),".")),(0,r.kt)("h2",{id:"restricted-methods"},"Restricted methods"),(0,r.kt)("p",null,"MetaMask introduced Web3 Wallet Permissions via ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is either ",(0,r.kt)("em",{parentName:"p"},"restricted")," or ",(0,r.kt)("em",{parentName:"p"},"unrestricted"),".\nIf a method is restricted, the caller must have the corresponding permission in order to call it.\nUnrestricted methods, meanwhile, have no corresponding permission.\nSome of them still rely upon permissions to succeed though (for example, the signing methods require\nthat you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," permission for the signer account), and some require confirmation\nby the user (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain"),")."),(0,r.kt)("p",null,"With the exception of ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/flask"},"MetaMask Flask"),", the only existing permission is\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts"),", which allows you to access the user's Ethereum address(es).\nMore permissions will be added in the future."),(0,r.kt)("p",null,"Under the hood, permissions are plain, JSON-compatible objects, with a number of fields that are\nmostly used internally by MetaMask.\nThe following interface lists the fields that may be of interest to consumers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Web3WalletPermission {\n  // The name of the method corresponding to the permission\n  parentCapability: string;\n\n  // The date the permission was granted, in UNIX epoch time\n  date?: number;\n}\n")),(0,r.kt)("p",null,"If you're interested in learning more about the theory behind this ",(0,r.kt)("em",{parentName:"p"},"capability"),"-inspired permissions\nsystem, see ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),"."),(0,r.kt)("h3",{id:"eth_requestaccounts"},(0,r.kt)("inlineCode",{parentName:"h3"},"eth_requestAccounts")),(0,r.kt)("admonition",{title:"EIP-1102",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1102"},"EIP-1102"),".\nIt's equivalent to the deprecated ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/reference/provider-api#ethereumenable-deprecated"},(0,r.kt)("inlineCode",{parentName:"a"},"ethereum.enable()")),"\nprovider API method."),(0,r.kt)("p",{parentName:"admonition"},"Under the hood, it calls ",(0,r.kt)("a",{parentName:"p",href:"#wallet_requestpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions"))," for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," permission.\nSince ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_accounts")," is currently the only permission, this method is all you need for now.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string[]")," - An array of a single, hexadecimal Ethereum address string."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Requests that the user provides an Ethereum address to be identified by.\nReturns a Promise that resolves to an array of a single Ethereum address string.\nIf the user denies the request, the Promise will reject with a ",(0,r.kt)("inlineCode",{parentName:"p"},"4001")," error."),(0,r.kt)("p",null,"The request causes a MetaMask popup to appear.\nYou should only request the user's accounts in response to user action, such as a button click.\nYou should always disable the button that caused the request to be dispatched, while the request is\nstill pending."),(0,r.kt)("p",null,"If you can't retrieve the user's account(s), you should encourage the user to initiate an account request."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('connectButton', connect);\n\nfunction connect() {\n  ethereum\n    .request({ method: 'eth_requestAccounts' })\n    .then(handleAccountsChanged)\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(error);\n      }\n    });\n}\n")),(0,r.kt)("h3",{id:"wallet_getpermissions"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_getPermissions")),(0,r.kt)("admonition",{title:"Platform availability",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This RPC method is not yet available in MetaMask Mobile.")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Web3WalletPermission[]")," - An array of the caller's permissions."),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Gets the caller's current permissions.\nReturns a Promise that resolves to an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3WalletPermission")," objects.\nIf the caller has no permissions, the array is empty."),(0,r.kt)("h3",{id:"wallet_requestpermissions"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_requestPermissions")),(0,r.kt)("admonition",{title:"Platform Availability",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This RPC method is not yet available in MetaMask Mobile.")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Array")),(0,r.kt)("ol",{parentName:"li",start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"RequestedPermissions")," - The requested permissions.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RequestedPermissions {\n  [methodName: string]: {}; // an empty object, for future extensibility\n}\n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Web3WalletPermission[]")," - An array of the caller's permissions."),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Requests the given permissions from the user.\nReturns a Promise that resolves to a non-empty array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3WalletPermission")," objects,\ncorresponding to the caller's current permissions.\nIf the user denies the request, the Promise rejects with a ",(0,r.kt)("inlineCode",{parentName:"p"},"4001")," error."),(0,r.kt)("p",null,"The request causes a MetaMask popup to appear.\nYou should only request permissions in response to user action, such as a button click."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.getElementById('requestPermissionsButton', requestPermissions);\n\nfunction requestPermissions() {\n  ethereum\n    .request({\n      method: 'wallet_requestPermissions',\n      params: [{ eth_accounts: {} }],\n    })\n    .then((permissions) => {\n      const accountsPermission = permissions.find(\n        (permission) => permission.parentCapability === 'eth_accounts'\n      );\n      if (accountsPermission) {\n        console.log('eth_accounts permission successfully requested!');\n      }\n    })\n    .catch((error) => {\n      if (error.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        console.log('Permissions needed to continue.');\n      } else {\n        console.error(error);\n      }\n    });\n}\n")),(0,r.kt)("h2",{id:"unrestricted-methods"},"Unrestricted methods"),(0,r.kt)("h3",{id:"wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_addEthereumChain")),(0,r.kt)("admonition",{title:"EIP-3085",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3085"},"EIP-3085"),".")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Array")),(0,r.kt)("ol",{parentName:"li",start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"AddEthereumChainParameter")," - Metadata about the chain that will be added to MetaMask.")))),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpcUrls")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"blockExplorerUrls")," arrays, at least one element is required, and only the\nfirst element will be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AddEthereumChainParameter {\n  chainId: string; // A 0x-prefixed hexadecimal string\n  chainName: string;\n  nativeCurrency: {\n    name: string;\n    symbol: string; // 2-6 characters long\n    decimals: 18;\n  };\n  rpcUrls: string[];\n  blockExplorerUrls?: string[];\n  iconUrls?: string[]; // Currently ignored.\n}\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," - The method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the request was successful, and an error otherwise."),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Creates a confirmation asking the user to add the specified chain to MetaMask.\nThe user may choose to switch to the chain once it has been added."),(0,r.kt)("p",null,"As with any method that causes a confirmation to appear, ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain"),"\nshould ",(0,r.kt)("strong",{parentName:"p"},"only")," be called as a result of direct user action, such as the click of a button."),(0,r.kt)("p",null,"MetaMask stringently validates the parameters for this method, and rejects the request\nif any parameter is incorrectly formatted.\nIn addition, MetaMask automatically rejects the request under the following circumstances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the RPC endpoint doesn't respond to RPC calls.",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calls are made from the extension's background page, ",(0,r.kt)("em",{parentName:"p"},"not")," the foreground page.\nIf you use an origin allowlist, they're blocked."))),(0,r.kt)("li",{parentName:"ul"},"If the RPC endpoint returns a different chain ID when ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_chainId")," is called."),(0,r.kt)("li",{parentName:"ul"},"If the chain ID corresponds to any default MetaMask chains.")),(0,r.kt)("p",null,"MetaMask does not yet support chains with native currencies that do not have 18 decimals,\nbut may do so in the future."),(0,r.kt)("h4",{id:"use-with-wallet_switchethereumchain"},"Use with ",(0,r.kt)("inlineCode",{parentName:"h4"},"wallet_switchEthereumChain")),(0,r.kt)("p",null,"We recommend using this method with ",(0,r.kt)("a",{parentName:"p",href:"#wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  await ethereum.request({\n    method: 'wallet_switchEthereumChain',\n    params: [{ chainId: '0xf00' }],\n  });\n} catch (switchError) {\n  // This error code indicates that the chain has not been added to MetaMask.\n  if (switchError.code === 4902) {\n    try {\n      await ethereum.request({\n        method: 'wallet_addEthereumChain',\n        params: [\n          {\n            chainId: '0xf00',\n            chainName: '...',\n            rpcUrls: ['https://...'] /* ... */,\n          },\n        ],\n      });\n    } catch (addError) {\n      // handle \"add\" error\n    }\n  }\n  // handle other \"switch\" errors\n}\n")),(0,r.kt)("h3",{id:"wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_switchEthereumChain")),(0,r.kt)("admonition",{title:"EIP-3326",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum-magicians.org/t/eip-3326-wallet-switchethereumchain"},"EIP-3326"),".")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Array")),(0,r.kt)("ol",{parentName:"li",start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SwitchEthereumChainParameter")," - Metadata about the chain that MetaMask will switch to.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SwitchEthereumChainParameter {\n  chainId: string; // A 0x-prefixed hexadecimal string\n}\n")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," - The method returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if the request was successful, and an error otherwise."),(0,r.kt)("p",null,"If the error code (",(0,r.kt)("inlineCode",{parentName:"p"},"error.code"),") is ",(0,r.kt)("inlineCode",{parentName:"p"},"4902"),", then the requested chain has not been added by MetaMask,\nand you have to request to add it via ",(0,r.kt)("a",{parentName:"p",href:"#wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"."),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"#use-with-wallet_switchethereumchain"},"how to use this method with ",(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),".")),(0,r.kt)("p",null,"Creates a confirmation asking the user to switch to the chain with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),"."),(0,r.kt)("p",null,"As with any method that causes a confirmation to appear, ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain"),"\nshould ",(0,r.kt)("strong",{parentName:"p"},"only")," be called as a result of direct user action, such as the click of a button."),(0,r.kt)("p",null,"MetaMask automatically rejects the request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the chain ID is malformed."),(0,r.kt)("li",{parentName:"ul"},"If the chain with the specified chain ID has not been added to MetaMask.")),(0,r.kt)("h3",{id:"wallet_registeronboarding"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_registerOnboarding")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As an API consumer, you're unlikely to have to call this method yourself.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/branch-previews/wallet/how-to/use-onboarding-library"},"how to use the onboarding library")," for more information.")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the request was successful, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Registers the requesting site with MetaMask as the initiator of onboarding.\nReturns a Promise that resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", or rejects if there's an error."),(0,r.kt)("p",null,"This method is intended to be called after MetaMask has been installed, but before the MetaMask\nonboarding has completed.\nYou can use this method to inform MetaMask that you were the one that suggested installing MetaMask.\nThis lets MetaMask redirect the user back to your site after onboarding has completed."),(0,r.kt)("p",null,"Instead of calling this method directly, you should use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/onboarding")," library"),"."),(0,r.kt)("h3",{id:"wallet_watchasset"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_watchAsset")),(0,r.kt)("admonition",{title:"EIP-747",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This method is specified by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-747"},"EIP-747"),".")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WatchAssetParams")," - The metadata of the asset to watch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface WatchAssetParams {\n  type: 'ERC20'; // In the future, other standards will be supported\n  options: {\n    address: string; // The address of the token contract\n    'symbol': string; // A ticker symbol or shorthand, up to 11 characters\n    decimals: number; // The number of token decimals\n    image: string; // A string url of the token logo\n  };\n}\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the token was added, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"Requests that the user tracks the token in MetaMask.\nReturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," indicating if the token was successfully added."),(0,r.kt)("p",null,"Most Ethereum wallets support some set of tokens, usually from a centrally curated registry of tokens.\n",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," enables web3 application developers to ask their users to track tokens in their\nwallets, at runtime.\nOnce added, the token is indistinguishable from those added via legacy methods, such as a\ncentralized registry."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum\n  .request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20',\n      options: {\n        address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',\n        symbol: 'FOO',\n        decimals: 18,\n        image: 'https://foo.io/token-image.svg',\n      },\n    },\n  })\n  .then((success) => {\n    if (success) {\n      console.log('FOO successfully added to wallet!');\n    } else {\n      throw new Error('Something went wrong.');\n    }\n  })\n  .catch(console.error);\n")),(0,r.kt)("h2",{id:"mobile-rpc-methods"},"Mobile RPC methods"),(0,r.kt)("p",null,"The following methods are specific to MetaMask Mobile."),(0,r.kt)("h3",{id:"wallet_scanqrcode"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_scanQRCode")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Array")),(0,r.kt)("ol",{parentName:"li",start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," - (optional) A regular expression for matching arbitrary QR code strings")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," - The string corresponding to the scanned QR code."),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"Requests that the user scans a QR code using their device camera.\nReturns a Promise that resolves to a string, matching either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The regex parameter, if provided."),(0,r.kt)("li",{parentName:"ol"},"An Ethereum address, if no regex parameter was provided.")),(0,r.kt)("p",null,"If neither condition is met, the Promise rejects with an error."),(0,r.kt)("p",null,"MetaMask previously introduced this feature per the proposed\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/945"},"EIP-945"),".\nThe functionality was temporarily removed before being reintroduced as this RPC method."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum\n  .request({\n    method: 'wallet_scanQRCode',\n    // The regex string must be valid input to the RegExp constructor, if provided\n    params: ['\\\\D'],\n  })\n  .then((result) => {\n    console.log(result);\n  })\n  .catch((error) => {\n    console.log(error);\n  });\n")))}d.isMDXComponent=!0}}]);