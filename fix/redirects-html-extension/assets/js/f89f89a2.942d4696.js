"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[5275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},i),{},{components:n})):a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),c=n(2389),s=n(7392),l=n(7094),u=n(2466);const i="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[w,x]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==w&&(T(t),x(a),null!=m&&k(m,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},b.map((e=>{let{value:t,label:n,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:E},c,{className:(0,o.Z)("tabs__item",d,c?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,c.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),c=n(5162);const s={description:"Access a user's accounts and handle changed accounts."},l="Access a user's accounts",u={unversionedId:"get-started/access-accounts",id:"get-started/access-accounts",title:"Access a user's accounts",description:"Access a user's accounts and handle changed accounts.",source:"@site/wallet/get-started/access-accounts.md",sourceDirName:"get-started",slug:"/get-started/access-accounts",permalink:"/mm-docs-v2/fix/redirects-html-extension/wallet/get-started/access-accounts",draft:!1,tags:[],version:"current",frontMatter:{description:"Access a user's accounts and handle changed accounts."},sidebar:"walletSidebar",previous:{title:"Detect a user's network",permalink:"/mm-docs-v2/fix/redirects-html-extension/wallet/get-started/detect-network"},next:{title:"How to",permalink:"/mm-docs-v2/fix/redirects-html-extension/wallet/category/how-to"}},i={},d=[{value:"Create a connect button",id:"create-a-connect-button",level:2},{value:"Handle accounts",id:"handle-accounts",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-a-users-accounts"},"Access a user's accounts"),(0,r.kt)("p",null,"User accounts are used in a variety of contexts in Ethereum, including as identifiers and for\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/how-to/sign-data"},"signing transactions"),".\nTo request a signature from a user or have a user approve a transaction, your dapp must\naccess the user's accounts using the\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/reference/rpc-api#ethrequestaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,r.kt)("p",null,"When accessing a user's accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Only")," initiate a connection request in response to direct user action, such as\nselecting a ",(0,r.kt)("a",{parentName:"li",href:"#create-a-connect-button"},"connect button"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Always")," disable the connect button while the connection request is pending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Never")," initiate a connection request on page load.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/how-to/use-sdk/"},"use MetaMask SDK")," to enable a reliable, secure, and\nseamless connection from your dapp to a MetaMask wallet client.")),(0,r.kt)("h2",{id:"create-a-connect-button"},"Create a connect button"),(0,r.kt)("p",null,"We recommend providing a button to allow users to connect MetaMask to your dapp.\nSelecting this button should call ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," to access the user's account."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/get-started/set-up-dev-environment#example"},"example project code"),", the following JavaScript code\naccesses the user's accounts when they select a connect button, and the following HTML code\ndisplays the button and the current account:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"// You should only attempt to request the user's account in response to user\n// interaction, such as selecting a button.\n// Otherwise, you popup-spam the user like it's 1999.\n// If you fail to retrieve the user's account, you should encourage the user\n// to initiate the attempt.\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\n// While awaiting the call to eth_requestAccounts, you should disable\n// any buttons the user can select to initiate the request.\n// MetaMask rejects any additional requests while the first is still\n// pending.\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        // EIP-1193 userRejectedRequest error\n        // If this happens, the user rejected the connection request.\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n"))),(0,r.kt)(c.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!-- Display a connect button and the current account --\x3e\n<button class="enableEthereumButton">Enable Ethereum</button>\n<h2>Account: <span class="showAccount"></span></h2>\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask currently returns at most one account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," array.\nThe array may contain more than one account in the future."),(0,r.kt)("p",{parentName:"admonition"},"To retrieve the full list of accounts for which the user has permitted access, use the\n",(0,r.kt)("a",{parentName:"p",href:"../reference/rpc-api#wallet_getpermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_getPermissions"))," RPC method.")),(0,r.kt)("h2",{id:"handle-accounts"},"Handle accounts"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_accounts")),"\nRPC method to handle user accounts.\nListen to the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/reference/provider-api#accountschanged"},(0,r.kt)("inlineCode",{parentName:"a"},"accountsChanged"))," provider event to\nbe notified when the user changes accounts."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/wallet/get-started/set-up-dev-environment#example"},"example project script"),", the following code handles user\naccounts and detects when the user changes accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"let currentAccount = null;\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    // Some unexpected error.\n    // For backwards compatibility reasons, if no accounts are available,\n    // eth_accounts returns an empty array.\n    console.error(err);\n  });\n\n// Note that this event is emitted on page load.\n// If the array of accounts is non-empty, you're already\n// connected.\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\n// eth_accounts always returns an array.\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    // MetaMask is locked or the user has not connected any accounts.\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    // Reload your interface with accounts[0].\n    currentAccount = accounts[0];\n    // Update the account displayed (see the HTML for the connect button)\n    showAccount.innerHTML = currentAccount;\n  }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask currently returns at most one account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),' array.\nThe array may contain more than one account in the future.\nThe first account in the array will always be considered the user\'s "selected" account.')))}m.isMDXComponent=!0}}]);