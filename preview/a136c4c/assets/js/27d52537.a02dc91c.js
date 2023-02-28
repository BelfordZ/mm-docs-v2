"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[7455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||c;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const c={},o="Snaps command line interface",i={unversionedId:"reference/cli/index",id:"reference/cli/index",title:"Snaps command line interface",description:"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and options.",source:"@site/snaps/reference/cli/index.md",sourceDirName:"reference/cli",slug:"/reference/cli/",permalink:"/mm-docs-v2/preview/a136c4c/snaps/reference/cli/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/mm-docs-v2/preview/a136c4c/snaps/reference/exports"},next:{title:"Options",permalink:"/mm-docs-v2/preview/a136c4c/snaps/reference/cli/options"}},s={},p=[],l={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-command-line-interface"},"Snaps command line interface"),(0,a.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and options."),(0,a.kt)("p",null,"Make sure to ",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/a136c4c/snaps/get-started/install-snaps#install-the-snaps-cli"},"install the Snaps CLI"),"."),(0,a.kt)("p",null,"You can specify subcommands and options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mm-snap")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap [SUBCOMMAND] [OPTIONS]\n")),(0,a.kt)("p",null,"You can also override the default values of the options by specifying them in the\n",(0,a.kt)("a",{parentName:"p",href:"/mm-docs-v2/preview/a136c4c/snaps/concepts/anatomy#configuration-file"},"configuration file"),"."))}m.isMDXComponent=!0}}]);