"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[6572],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),r=t(6010);const o="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(7462),r=t(7294),o=t(6010),s=t(2389),i=t(7392),l=t(7094),c=t(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:n,block:t,defaultValue:s,values:p,groupId:b,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,i.l)(g,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.U)(),[v,M]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==v&&g.some((n=>n.value===e))&&M(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=g[t].value;a!==v&&(O(n),M(a),null!=b&&w(b,String(a)))},E=e=>{let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}n?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},g.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:E,onClick:N},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":v===n})}),t??n)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function b(e){const n=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},2056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),o=t(5488),s=t(5162);const i={title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users."},l="Use the MetaMask onboarding library",c={unversionedId:"how-to/use-onboarding-library",id:"how-to/use-onboarding-library",title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users.",source:"@site/wallet/how-to/use-onboarding-library.md",sourceDirName:"how-to",slug:"/how-to/use-onboarding-library",permalink:"/68-wallet-snap/wallet/how-to/use-onboarding-library",draft:!1,tags:[],version:"current",frontMatter:{title:"Use the onboarding library",description:"Simplify the MetaMask onboarding experience for your users."},sidebar:"walletSidebar",previous:{title:"Secure your dapp",permalink:"/68-wallet-snap/wallet/how-to/secure-dapp"},next:{title:"Set an icon",permalink:"/68-wallet-snap/wallet/how-to/set-icon"}},u={},d=[{value:"Steps",id:"steps",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function b(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-metamask-onboarding-library"},"Use the MetaMask onboarding library"),(0,r.kt)("p",null,"Sending users away from your dapp to install MetaMask presents challenges.\nYou must inform the user to return to your dapp and refresh their browser after the installation.\nYour dapp detects the user's newly installed MetaMask extension only after that refresh."),(0,r.kt)("p",null,"You can use MetaMask's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"onboarding library")," to\nimprove and simplify the onboarding experience.\nThe library exposes an API to initiate the onboarding process."),(0,r.kt)("p",null,"During the onboarding process, the library registers your dapp as the origin of the onboarding request.\nMetaMask checks for this origin after the user completes the onboarding flow.\nIf it finds an origin, the final confirmation button of the MetaMask onboarding flow indicates that\nthe user will be redirected back to your dapp."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-onboarding"},"@metamask/onboarding"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the library or include it in your page:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// As an ES6 module\nimport MetaMaskOnboarding from '@metamask/onboarding';\n// Or as an ES5 module\nconst MetaMaskOnboarding = require('@metamask/onboarding');\n")),(0,r.kt)("p",{parentName:"li"},"Alternatively, you can include the prebuilt ES5 bundle that ships with the library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./metamask-onboarding.bundle.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new instance of the onboarding library:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const onboarding = new MetaMaskOnboarding();\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the onboarding process in response to a user event (for example, a button click):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"onboarding.startOnboarding();\n")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following are example ways to use the onboarding library in various frameworks:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"React",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import MetaMaskOnboarding from '@metamask/onboarding';\nimport React from 'react';\n\nconst ONBOARD_TEXT = 'Click here to install MetaMask!';\nconst CONNECT_TEXT = 'Connect';\nconst CONNECTED_TEXT = 'Connected';\n\nexport function OnboardingButton() {\n  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);\n  const [isDisabled, setDisabled] = React.useState(false);\n  const [accounts, setAccounts] = React.useState([]);\n  const onboarding = React.useRef();\n\n  React.useEffect(() => {\n    if (!onboarding.current) {\n      onboarding.current = new MetaMaskOnboarding();\n    }\n  }, []);\n\n  React.useEffect(() => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      if (accounts.length > 0) {\n        setButtonText(CONNECTED_TEXT);\n        setDisabled(true);\n        onboarding.current.stopOnboarding();\n      } else {\n        setButtonText(CONNECT_TEXT);\n        setDisabled(false);\n      }\n    }\n  }, [accounts]);\n\n  React.useEffect(() => {\n    function handleNewAccounts(newAccounts) {\n      setAccounts(newAccounts);\n    }\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then(handleNewAccounts);\n      window.ethereum.on('accountsChanged', handleNewAccounts);\n      return () => {\n        window.ethereum.removeListener('accountsChanged', handleNewAccounts);\n      };\n    }\n  }, []);\n\n  const onClick = () => {\n    if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n      window.ethereum\n        .request({ method: 'eth_requestAccounts' })\n        .then((newAccounts) => setAccounts(newAccounts));\n    } else {\n      onboarding.current.startOnboarding();\n    }\n  };\n  return (\n    <button disabled={isDisabled} onClick={onClick}>\n      {buttonText}\n    </button>\n  );\n}\n"))),(0,r.kt)(s.Z,{label:"TypeScript",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"The onboarding library ships with MetaMask's TypeScript types.\nModify the React example as follows to get type safety:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"-const onboarding = React.useRef();\n+const onboarding = React.useRef<MetaMaskOnboarding>();\n")),(0,r.kt)("p",null,"This gives you editor auto-completion for the methods exposed by the library, and\nhelpful documentation:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4448075/85584481-ccc7ec00-b604-11ea-9b74-49c76ee0bf22.png",alt:"Editor Highlighting"}))),(0,r.kt)(s.Z,{label:"Vanilla JavaScript and HTML",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-CA\">\n  <head>\n    <title>MetaMask Onboarding Example</title>\n    <meta charset=\"UTF-8\" />\n  </head>\n  <body>\n    <h1>Sample Dapp</h1>\n    <button id=\"onboard\">Loading...</button>\n    <script src=\"./metamask-onboarding.bundle.js\"><\/script>\n    <script>\n      window.addEventListener('DOMContentLoaded', () => {\n        const onboarding = new MetaMaskOnboarding();\n        const onboardButton = document.getElementById('onboard');\n        let accounts;\n\n        const updateButton = () => {\n          if (!MetaMaskOnboarding.isMetaMaskInstalled()) {\n            onboardButton.innerText = 'Click here to install MetaMask!';\n            onboardButton.onclick = () => {\n              onboardButton.innerText = 'Onboarding in progress';\n              onboardButton.disabled = true;\n              onboarding.startOnboarding();\n            };\n          } else if (accounts && accounts.length > 0) {\n            onboardButton.innerText = 'Connected';\n            onboardButton.disabled = true;\n            onboarding.stopOnboarding();\n          } else {\n            onboardButton.innerText = 'Connect';\n            onboardButton.onclick = async () => {\n              await window.ethereum.request({\n                method: 'eth_requestAccounts',\n              });\n            };\n          }\n        };\n\n        updateButton();\n        if (MetaMaskOnboarding.isMetaMaskInstalled()) {\n          window.ethereum.on('accountsChanged', (newAccounts) => {\n            accounts = newAccounts;\n            updateButton();\n          });\n        }\n      });\n    <\/script>\n  </body>\n</html>\n")))))}b.isMDXComponent=!0}}]);