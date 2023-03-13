"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return r?a.createElement(m,c(c({ref:t},d),{},{components:r})):a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={},c="Interact with smart contracts",i={unversionedId:"how-to/interact-with-smart-contracts",id:"how-to/interact-with-smart-contracts",title:"Interact with smart contracts",description:"Once you have your development environment set up, you",source:"@site/wallet/how-to/interact-with-smart-contracts.md",sourceDirName:"how-to",slug:"/how-to/interact-with-smart-contracts",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/interact-with-smart-contracts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Use MetaMask Mobile",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-mobile"},next:{title:"Send transactions",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/send-transactions"}},s={},l=[{value:"The contract network",id:"the-contract-network",level:2},{value:"The contract address",id:"the-contract-address",level:2},{value:"The contract ABI",id:"the-contract-abi",level:2},{value:"The contract bytecode",id:"the-contract-bytecode",level:2},{value:"The contract source code",id:"the-contract-source-code",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interact-with-smart-contracts"},"Interact with smart contracts"),(0,n.kt)("p",null,"Once you have your ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/get-started/set-up-dev-environment"},"development environment set up"),", you\ncan start interacting with some smart contracts.\nThere are some basic things you'll need, regardless of what convenience library you're using, when\ncommunicating with a smart contract."),(0,n.kt)("h2",{id:"the-contract-network"},"The contract network"),(0,n.kt)("p",null,"If you're not connected to the right network, you can't send transactions to your contract.\nMany dapp developers deploy their contract to a testnet first, in order to avoid potentially\ndisastrous fees if something goes wrong during development and testing on mainnet."),(0,n.kt)("p",null,"Regardless of which network you deploy your final dapp on, your users must be able to access it.\nUse the ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/rpc-api#wallet_switchethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/rpc-api#wallet_addethereumchain"},(0,n.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain"))," RPC API methods to\nprompt the user to add a chain that you suggest, and switch to it using a confirmation dialogue."),(0,n.kt)("h2",{id:"the-contract-address"},"The contract address"),(0,n.kt)("p",null,"Every account in Ethereum has an address, whether it's an external key-pair account or a smart contract.\nIn order for any smart contract library to communicate with your contracts, it must know the exact address."),(0,n.kt)("p",null,"Read about\n",(0,n.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360059683451-How-to-view-or-add-custom-token-contract-address"},"how to find a token contact address"),"."),(0,n.kt)("h2",{id:"the-contract-abi"},"The contract ABI"),(0,n.kt)("p",null,"In Ethereum, the ",(0,n.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"ABI specification")," is a\nway to encode the interface of a smart contract that is comprehensible to your user interface.\nIt is an array of method-describing objects, and when you feed this and the address into a\ncontract-abstraction library, the ABI tells those libraries about what methods to provide, and\nhow to compose transactions to call those methods."),(0,n.kt)("p",null,"Example libraries include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethers"},"Ethers"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3"},"web3.js"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://framework.embarklabs.io/"},"Embark"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ethjs"},"ethjs"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.trufflesuite.com/"},"Truffle"),".")),(0,n.kt)("h2",{id:"the-contract-bytecode"},"The contract bytecode"),(0,n.kt)("p",null,"If your dapp publishes a new pre-compiled smart contract, it may need to include some bytecode.\nYou don't know the contract address in advance, but instead must publish,\nwatch for the transaction to be processed, and then extract the final contract's address from the\ncompleted transaction."),(0,n.kt)("p",null,"If publishing a contract from bytecode, you still need an ABI to interact with it.\nThe bytecode doesn't describe how to interact with the final contract."),(0,n.kt)("h2",{id:"the-contract-source-code"},"The contract source code"),(0,n.kt)("p",null,"If your dapp allows users to edit smart contract source code and compile it, similar to\n",(0,n.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix"),", you may import a whole compiler.\nYou derive your bytecode and ABI from that source code, and eventually you derive the contract's\naddress from the completed transaction, where that bytecode is published."))}p.isMDXComponent=!0}}]);