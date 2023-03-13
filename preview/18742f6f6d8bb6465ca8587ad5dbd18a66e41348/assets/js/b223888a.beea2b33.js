"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),s=a(6010),o=a(2389),l=a(7392),i=a(7094),p=a(2466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:m,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,i.U)(),[y,N]=(0,n.useState)(v),M=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=m){const e=w[m];null!=e&&e!==y&&b.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,a=M.indexOf(t),r=b[a].value;r!==y&&(S(t),N(r),null!=m&&g(m,String(r)))},j=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=M.indexOf(e.currentTarget)+1;t=M[a]??M[0];break}case"ArrowLeft":{const a=M.indexOf(e.currentTarget)-1;t=M[a]??M[M.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>M.push(e),onKeyDown:j,onClick:D},o,{className:(0,s.Z)("tabs__item",c,o?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},5718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),s=a(5488),o=a(5162);const l={},i="Use MetaMask SDK",p={unversionedId:"how-to/use-sdk/index",id:"how-to/use-sdk/index",title:"Use MetaMask SDK",description:"MetaMask SDK currently supports all JavaScript-based dapps and Unity gaming dapps.",source:"@site/wallet/how-to/use-sdk/index.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-sdk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/category/how-to"},next:{title:"React Native",permalink:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-sdk/react-native"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk"},"Use MetaMask SDK"),(0,n.kt)("p",null,"MetaMask SDK currently supports all JavaScript-based dapps and Unity gaming dapps.\nIt provides a reliable, secure, and seamless ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/concepts/sdk-connections"},"connection")," from\nyour dapp to a MetaMask wallet client."),(0,n.kt)("p",null,"The following instructions work for dapps based on standard JavaScript, React, Node.js, Electron,\nand other web frameworks.\nYou can also see instructions for ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-sdk/react-native"},"React Native"),", ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-sdk/pure-js"},"pure JavaScript"),",\nand ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/how-to/use-sdk/unity"},"Unity gaming")," dapps."),(0,n.kt)("admonition",{title:"Coming soon",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"SDK support for Android native, iOS native, and Unreal Engine dapps is coming soon.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK uses the ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/provider-api"},"Ethereum provider")," that developers are\nalready used to, so existing dapps work out of the box with the SDK.")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"desktop",label:"Desktop browser",mdxType:"TabItem"},(0,n.kt)("p",null,"If a user accesses your web dapp on a desktop browser and doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK desktop browser example",src:a(3237).Z,width:"1726",height:"1034"})),(0,n.kt)("p",null,"You can try the\n",(0,n.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/test-dapp-2/"},"hosted test dapp with the SDK installed"),".\nYou can also see this\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".")),(0,n.kt)(o.Z,{value:"mobile",label:"Mobile browser",mdxType:"TabItem"},(0,n.kt)("p",null,"If a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nOnce the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK mobile browser example",src:a(7449).Z,width:"334",height:"696"}))),(0,n.kt)("p",null,"You can try the\n",(0,n.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/test-dapp-2/"},"hosted test dapp with the SDK installed"),".\nYou can also see this\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".")),(0,n.kt)(o.Z,{value:"nodejs",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK Node.js example",src:a(5943).Z,width:"871",height:"947"}))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An existing or ",(0,n.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/get-started/set-up-dev-environment"},"new project")," set up."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile")," v5.8.1 or above."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," or\n",(0,n.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"),".")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\nor\nnpm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import MetaMaskSDK from '@metamask/sdk';\n")),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/18742f6f6d8bb6465ca8587ad5dbd18a66e41348/wallet/reference/provider-api#ethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it prompts\nthe installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}m.isMDXComponent=!0},3237:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-desktop-browser-08daeb300da22c1fda2f50d7b63026a9.gif"},7449:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-mobile-browser-3a2065bba036d5910206697edcd2a298.gif"},5943:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-nodejs-53d5a8860c4b7d48902adc99a64a668f.gif"}}]);