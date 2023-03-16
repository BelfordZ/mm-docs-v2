"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[7284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Use MetaMask Mobile",l={unversionedId:"how-to/use-mobile",id:"how-to/use-mobile",title:"Use MetaMask Mobile",description:"With MetaMask Mobile, you can onboard your users in seconds, whether they're new users or existing",source:"@site/wallet/how-to/use-mobile.md",sourceDirName:"how-to",slug:"/how-to/use-mobile",permalink:"/mm-docs-v2/preview/33fe3576e34c86fe92c3796e8091b8297b0535e8/wallet/how-to/use-mobile",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"Unity gaming",permalink:"/mm-docs-v2/preview/33fe3576e34c86fe92c3796e8091b8297b0535e8/wallet/how-to/use-sdk/unity"},next:{title:"Interact with smart contracts",permalink:"/mm-docs-v2/preview/33fe3576e34c86fe92c3796e8091b8297b0535e8/wallet/how-to/interact-with-smart-contracts"}},s={},p=[{value:"Detect the provider",id:"detect-the-provider",level:2},{value:"Use WalletConnect",id:"use-walletconnect",level:2},{value:"Use deeplinks",id:"use-deeplinks",level:2},{value:"Test your dapp",id:"test-your-dapp",level:2},{value:"Debug your dapp",id:"debug-your-dapp",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-metamask-mobile"},"Use MetaMask Mobile"),(0,o.kt)("p",null,"With MetaMask Mobile, you can onboard your users in seconds, whether they're new users or existing\nwallet users.\nYou can bring your dapp to our large and rapidly growing user base."),(0,o.kt)("p",null,"Your users can sign with their MetaMask wallet, whether they use your dapp on MetaMask browser,\nother primary browsers, mobile, or desktop."),(0,o.kt)("p",null,"To use MetaMask Mobile:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure your site is compatible with the ",(0,o.kt)("a",{parentName:"li",href:"/mm-docs-v2/preview/33fe3576e34c86fe92c3796e8091b8297b0535e8/wallet/reference/provider-api"},"MetaMask Ethereum provider API"),"."),(0,o.kt)("li",{parentName:"ol"},"Include MetaMask Mobile as a listed wallet in your dapp, and link to open the MetaMask Mobile app\n(if installed) or to go to the app store (if not yet installed).\nWe recommend adding a ",(0,o.kt)("strong",{parentName:"li"},"Connect with MetaMask")," button and ",(0,o.kt)("a",{parentName:"li",href:"#use-deeplinks"},"using deeplinks"),"."),(0,o.kt)("li",{parentName:"ol"},"Direct your users to either the relevant app store listing or to the\n",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"MetaMask homepage")," to download MetaMask Mobile.")),(0,o.kt)("h2",{id:"detect-the-provider"},"Detect the provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/33fe3576e34c86fe92c3796e8091b8297b0535e8/wallet/reference/provider-api"},"provider API")," is the same for MetaMask Mobile and the desktop extension.\nHowever, the providers become available (injected into the page) at different points in the page lifecycle."),(0,o.kt)("p",null,"If you use ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider")),", it\nreliably detects both the mobile and extension provider.\nIf you don't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"detect-provider")," package, you must detect the mobile provider manually."),(0,o.kt)("p",null,"The extension provider is always available by the time your code is executed.\nBecause of platform limitations, the mobile provider may not be injected until later in the page lifecycle.\nBecause of this, the MetaMask provider dispatches the event ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum#initialized")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," when\nit's fully initialized."),(0,o.kt)("p",null,"You can reliably detect both the mobile and extension provider using the following snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (window.ethereum) {\n  handleEthereum();\n} else {\n  window.addEventListener('ethereum#initialized', handleEthereum, {\n    once: true,\n  });\n\n  // If the event is not dispatched by the end of the timeout,\n  // the user probably doesn't have MetaMask installed.\n  setTimeout(handleEthereum, 3000); // 3 seconds\n}\n\nfunction handleEthereum() {\n  const { ethereum } = window;\n  if (ethereum && ethereum.isMetaMask) {\n    console.log('Ethereum successfully detected!');\n    // Access the decentralized web!\n  } else {\n    console.log('Please install MetaMask!');\n  }\n}\n")),(0,o.kt)("h2",{id:"use-walletconnect"},"Use WalletConnect"),(0,o.kt)("p",null,"With WalletConnect, your users can use MetaMask Mobile as a signer while using other web, desktop,\nor mobile apps.\nRead the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/mobile-linking"},"WalletConnect mobile linking docs")," for\nmore information."),(0,o.kt)("h2",{id:"use-deeplinks"},"Use deeplinks"),(0,o.kt)("p",null,"Deeplinks enable instant invocation of the user's preferred wallet app with correctly parameterized\ntransactions.\nOnly the user can confirm the transaction, and the wallet can be a web, desktop, or mobile app."),(0,o.kt)("p",null,"URLs embedded in QR codes, and hyperlinks in web pages, emails, or chat messages enable robust\nsignaling between otherwise loosely coupled apps."),(0,o.kt)("p",null,"With deeplinks, you can enable your users to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your dapp directly in MetaMask Mobile to interact with your dapp with their Ethereum account."),(0,o.kt)("li",{parentName:"ul"},"Make payments to another account in one click (with pre-filled parameters such as recipient\naddress, amount, and network)."),(0,o.kt)("li",{parentName:"ul"},"Make gasless and instant transactions with Connext payment channel requests.\nThis requires that the user opt in for the InstaPay experimental feature.")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/metamask-deeplinks/"},"MetaMask deeplink generator")," to create deeplinks."),(0,o.kt)("h2",{id:"test-your-dapp"},"Test your dapp"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure your development server to run on your host machine's local IP address ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.x.x"),",\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),"."),(0,o.kt)("li",{parentName:"ol"},"Make sure your testing device uses the same WiFi connection as the machine hosting the server."),(0,o.kt)("li",{parentName:"ol"},"In the MetaMask Mobile web browser, navigate to your website at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://YOUR_LOCAL_IP:PORT"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you use an Android device, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip")," in your URL.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.x.x.sslip.io:8000"),".")),(0,o.kt)("h2",{id:"debug-your-dapp"},"Debug your dapp"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For security purposes, web browser debugging on both iOS and Android doesn't work if the app was\ndownloaded through the Apple App Store or Google Play Store.\nYou must build the app locally from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"MetaMask Mobile repository"),"\nand run it on a simulator or physical device.")),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Safari Preferences > Advanced > check Show Develop menu in menu bar"),"."),(0,o.kt)("li",{parentName:"ol"},"Open MetaMask Mobile in an iOS simulator or iOS device."),(0,o.kt)("li",{parentName:"ol"},"In the Safari menu bar, ",(0,o.kt)("strong",{parentName:"li"},"Develop > ","[device name]"," > ","[app name]"," > ","[url - title]"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When debugging on a physical device, you must enable Web Inspector in your device's settings:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Settings > Safari > Advanced > Web Inspector"))),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open MetaMask Mobile in an Android emulator or Android device."),(0,o.kt)("li",{parentName:"ol"},"Open Google Chrome's ",(0,o.kt)("strong",{parentName:"li"},"DevTools > menu (",(0,o.kt)("inlineCode",{parentName:"strong"},"..."),") > More tools > Remote devices"),".\nYou can also navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://inspect")," from Chrome to display the list of available devices\nfor debugging."),(0,o.kt)("li",{parentName:"ol"},"Select your device on the left and select ",(0,o.kt)("strong",{parentName:"li"},"Inspect")," on the browser contents you'd like to inspect.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When debugging on a physical device you must enable USB debugging in your device's settings:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Settings > System > About Phone > Developer options > Enable USB debugging"))),(0,o.kt)("p",null,"You can now debug MetaMask Mobile's browser contents just as you would on the web."))}u.isMDXComponent=!0}}]);