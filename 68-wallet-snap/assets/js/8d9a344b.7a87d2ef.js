"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8114],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),s=t(5162);const i={description:"Snaps exports reference",toc_max_heading_level:2},l="Snaps exports",p={unversionedId:"reference/exports",id:"reference/exports",title:"Snaps exports",description:"Snaps exports reference",source:"@site/snaps/reference/exports.md",sourceDirName:"reference",slug:"/reference/exports",permalink:"/68-wallet-snap/snaps/reference/exports",draft:!1,tags:[],version:"current",frontMatter:{description:"Snaps exports reference",toc_max_heading_level:2},sidebar:"snapsSidebar",previous:{title:"Snaps JSON-RPC API",permalink:"/68-wallet-snap/snaps/reference/rpc-api"},next:{title:"Snaps command line interface",permalink:"/68-wallet-snap/snaps/reference/cli/"}},c={},u=[{value:"onRpcRequest",id:"onrpcrequest",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"onTransaction",id:"ontransaction",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"onCronjob",id:"oncronjob",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Example",id:"example-2",level:3}],m={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-exports"},"Snaps exports"),(0,r.kt)("p",null,"A snap can export the following methods."),(0,r.kt)("h2",{id:"onrpcrequest"},"onRpcRequest"),(0,r.kt)("p",null,"To communicate with dapps and other snaps, a snap must implement its own JSON-RPC API by exporting\n",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nWhenever the snap receives a JSON-RPC request, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest")," handler method is called."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your snap can do something useful without receiving and responding to JSON-RPC requests, such as\nproviding ",(0,r.kt)("a",{parentName:"p",href:"#ontransaction"},"transaction insights"),", you can skip exporting ",(0,r.kt)("inlineCode",{parentName:"p"},"onRpcRequest"),".\nHowever, if you want to do something such as manage the user's keys for a particular protocol and\ncreate a dapp that sends transactions for that protocol via your snap, for example, you must\nspecify an RPC API.")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," - The origin as a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - The JSON-RPC request.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A promise containing the return of the implemented method."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\n\nexport const onRpcRequest: OnRpcRequestHandler = async ({\n  origin,\n  request,\n}) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onRpcRequest = async ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return 'world!';\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))),(0,r.kt)("h2",{id:"ontransaction"},"onTransaction"),(0,r.kt)("p",null,"To provide transaction insights before a user signs a transaction, a snap must export ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction"),".\nWhenever there's a contract interaction, and a transaction is submitted using the MetaMask\nextension, MetaMask calls this method.\nMetaMask passes the raw unsigned transaction payload to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," handler method."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/68-wallet-snap/snaps/reference/permissions#endowment--transaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:transaction-insight"))," permission.")),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("p",null,"An object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," - The raw transaction payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId")," - The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2"),"\nchain ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactionOrigin")," - The transaction origin if\n",(0,r.kt)("a",{parentName:"li",href:"/68-wallet-snap/snaps/reference/permissions#endowment--transaction-insight"},(0,r.kt)("inlineCode",{parentName:"a"},"allowTransactionOrigin"))," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A content object displayed using ",(0,r.kt)("a",{parentName:"p",href:"/68-wallet-snap/snaps/how-to/use-custom-ui"},"custom UI"),", alongside the confirmation\nfor the transaction that ",(0,r.kt)("inlineCode",{parentName:"p"},"onTransaction")," was called with."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnTransactionHandler } from '@metamask/snap-types';\nimport { panel, heading, text } from '@metamask/snaps-ui';\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\nmodule.exports.onTransaction = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading('My Transaction Insights'),\n      text('Here are the insights:'),\n      ...(insights.map((insight) => text(insight.value)))\n    ])\n  };\n};\n")))),(0,r.kt)("h2",{id:"oncronjob"},"onCronjob"),(0,r.kt)("p",null,"To run periodic actions for the user (cron jobs), a snap must export ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob"),".\nThis method is called at the specified times with the specified payloads defined in the\n",(0,r.kt)("a",{parentName:"p",href:"/68-wallet-snap/snaps/reference/permissions#endowment--cronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MetaMask to call the snap's ",(0,r.kt)("inlineCode",{parentName:"p"},"onCronjob")," method, you must request the\n",(0,r.kt)("a",{parentName:"p",href:"/68-wallet-snap/snaps/reference/permissions#endowment--cronjob"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:cronjob"))," permission.")),(0,r.kt)("h3",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"An object containing an RPC request specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"endowment:cronjob")," permission."),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"TypeScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OnCronjobHandler } from '@metamask/snaps-types';\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n"))),(0,r.kt)(s.Z,{label:"JavaScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.onCronjob = async ({ request }) => {\n  switch (request.method) {\n    case 'exampleMethodOne':\n      return snap.request({\n        method: 'snap_notify',\n        params: {\n          type: 'inApp',\n          message: `Hello, world!`,\n        },\n      });\n\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")))))}d.isMDXComponent=!0},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),r=t(7294),o=t(6010),s=t(2389),i=t(7392),l=t(7094),p=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:s,values:m,groupId:d,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,l.U)(),[w,x]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=d){const e=v[d];null!=e&&e!==w&&k.some((n=>n.value===e))&&x(e)}const C=e=>{const n=e.currentTarget,t=N.indexOf(n),a=k[t].value;a!==w&&(T(n),x(a),null!=d&&y(d,String(a)))},O=e=>{let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},k.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:O,onClick:C},s,{className:(0,o.Z)("tabs__item",u,s?.className,{"tabs__item--active":w===n})}),t??n)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}}}]);