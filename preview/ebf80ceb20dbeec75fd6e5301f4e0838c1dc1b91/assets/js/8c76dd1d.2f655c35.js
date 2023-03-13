"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,m=l["".concat(c,".").concat(u)]||l[u]||f[u]||s;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"Introduction"},i="Extend the functionality of MetaMask using Snaps",o={unversionedId:"index",id:"index",title:"Introduction",description:"Snaps is pre-release software.",source:"@site/snaps/index.md",sourceDirName:".",slug:"/",permalink:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"snapsSidebar",next:{title:"Get started",permalink:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/category/get-started"}},c={},p=[{value:"What is a snap?",id:"what-is-a-snap",level:2},{value:"What can you do with a snap?",id:"what-can-you-do-with-a-snap",level:2},{value:"Questions?",id:"questions",level:2}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extend-the-functionality-of-metamask-using-snaps"},"Extend the functionality of MetaMask using Snaps"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Snaps is pre-release software.")),(0,r.kt)("p",null,"Snaps is an open source system that allows anyone to safely extend the functionality of MetaMask,\ncreating new web3 end user experiences."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/get-started/install-snaps"},"installing Snaps"),"."),(0,r.kt)("h2",{id:"what-is-a-snap"},"What is a snap?"),(0,r.kt)("p",null,"A snap is a JavaScript program run in an isolated environment that customizes the wallet experience.\nSnaps have access to a limited set of capabilities, determined by the\n",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/how-to/request-permissions"},"permissions")," the user granted them during installation."),(0,r.kt)("h2",{id:"what-can-you-do-with-a-snap"},"What can you do with a snap?"),(0,r.kt)("p",null,"A snap can add new API methods to MetaMask, add support for different blockchain protocols, or\nmodify existing functionalities using the ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),"."),(0,r.kt)("p",null,"For example, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/rpc-api#snapdialog"},"Display a custom confirmation screen")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/rpc-api#snapnotify"},"Notify users")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/rpc-api#snapmanagestate"},"Securely store and manage data")," on your device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/rpc-api#snapgetbip44entropy"},"Control non-EVM accounts and assets")," in MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/exports#ontransaction"},"Provide transaction insights")," in MetaMask's pre-transaction window."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/reference/exports#oncronjob"},"Schedule periodic actions")," for your users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/ebf80ceb20dbeec75fd6e5301f4e0838c1dc1b91/snaps/how-to/use-custom-ui"},"Display custom UI")," in MetaMask using a set of pre-defined components,\nincluding inline Markdown.")),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"If you have questions or want to propose a new feature, you can interact with the Snaps team and\ncommunity on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-skunkworks/discussions"},"GitHub discussions"),"."))}l.isMDXComponent=!0}}]);