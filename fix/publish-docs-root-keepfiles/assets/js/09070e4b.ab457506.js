"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={description:"Learn about the lifecycle of a snap."},s="Snap lifecycle",c={unversionedId:"concepts/lifecycle",id:"concepts/lifecycle",title:"Snap lifecycle",description:"Learn about the lifecycle of a snap.",source:"@site/snaps/concepts/lifecycle.md",sourceDirName:"concepts",slug:"/concepts/lifecycle",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/lifecycle",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about the lifecycle of a snap."},sidebar:"snapsSidebar",previous:{title:"Snap anatomy",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/anatomy"},next:{title:"Snap user interface",permalink:"/mm-docs-v2/fix/publish-docs-root-keepfiles/snaps/concepts/user-interface"}},i={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snap-lifecycle"},"Snap lifecycle"),(0,o.kt)("p",null,"Just like ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"},"service workers")," or\nAWS lambda functions, snaps are designed to wake up in response to messages/events, and shut down\nwhen idle.\nSnaps have an ephemeral lifecycle: they're here one moment, gone the next.\nAlso, if MetaMask detects that a snap becomes unresponsive, it shuts the snap down.\nThis doesn't mean that you can't create long-running snaps, but it does mean that your snaps must\nhandle being shut down, especially when they're not within the JSON-RPC request/response cycle."),(0,o.kt)("p",null,"A snap is considered unresponsive if:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It hasn't received a JSON-RPC request for 30 seconds."),(0,o.kt)("li",{parentName:"ol"},"It takes more than 60 seconds to process a JSON-RPC request.")),(0,o.kt)("p",null,"Stopped snaps start whenever they receive a JSON-RPC request, unless they're disabled.\nIf a snap is disabled, the user must re-enable it before it can start again."))}u.isMDXComponent=!0}}]);