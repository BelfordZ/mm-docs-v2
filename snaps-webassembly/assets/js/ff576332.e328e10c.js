"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[4151],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var s=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(t),f=r,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return t?s.createElement(d,i(i({ref:n},m),{},{components:t})):s.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(7462),r=(t(7294),t(3905));const a={description:"Request permissions in a manifest file."},i="Request permissions",o={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/snaps-webassembly/snaps/how-to/request-permissions",draft:!1,tags:[],version:"current",frontMatter:{description:"Request permissions in a manifest file."},sidebar:"snapsSidebar",previous:{title:"Develop a snap",permalink:"/snaps-webassembly/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/snaps-webassembly/snaps/how-to/manage-keys"}},p={},l=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2}],m={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,r.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.\nSnaps follow the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a snap's required permissions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-webassembly/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,r.kt)("p",null,"You must request permission to use any\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-webassembly/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,r.kt)("p",null,"For example, to request to use ",(0,r.kt)("a",{parentName:"p",href:"/snaps-webassembly/snaps/reference/rpc-api#snapdialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,r.kt)("h2",{id:"endowments"},"Endowments"),(0,r.kt)("p",null,"Endowments are a type of permission.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/snaps-webassembly/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments\nyou can specify in the manifest file."),(0,r.kt)("p",null,"For example, to request the ",(0,r.kt)("a",{parentName:"p",href:"/snaps-webassembly/snaps/reference/permissions#endowment--long-running"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:long-running")),"\npermission, add the following to the manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:long-running": {}\n},\n')))}c.isMDXComponent=!0}}]);