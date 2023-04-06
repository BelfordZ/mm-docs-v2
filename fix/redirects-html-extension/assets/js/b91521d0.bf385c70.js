"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[8778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,b=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(b,i(i({ref:t},m),{},{components:a})):n.createElement(b,i({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const s={title:"Subcommands"},o="Snaps subcommands",p={unversionedId:"reference/cli/subcommands",id:"reference/cli/subcommands",title:"Subcommands",description:"b, build",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/mm-docs-v2/fix/redirects-html-extension/snaps/reference/cli/subcommands",draft:!1,tags:[],version:"current",frontMatter:{title:"Subcommands"},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/mm-docs-v2/fix/redirects-html-extension/snaps/reference/cli/options"},next:{title:"Snaps permissions",permalink:"/mm-docs-v2/fix/redirects-html-extension/snaps/reference/permissions"}},m={},c=[{value:"b, build",id:"b-build",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"i, init",id:"i-init",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"s, serve",id:"s-serve",level:2},{value:"w, watch",id:"w-watch",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-subcommands"},"Snaps subcommands"),(0,r.kt)("h2",{id:"b-build"},"b, build"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap build [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap b -s lib/index.js -d out -n snap.js\n")))),(0,r.kt)("p",null,"Builds a snap from source."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,r.kt)("h2",{id:"e-eval"},"e, eval"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap eval [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap e -b out/snap.js\n")))),(0,r.kt)("p",null,"Attempts to evaluate the snap bundle in SES."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"e")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"."),(0,r.kt)("h2",{id:"i-init"},"i, init"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap init [directory]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap i my-snap\n")))),(0,r.kt)("p",null,"Initializes a snap project in the specified directory.\nIf no directory is specified, the snap project is initialized in the current directory."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"i")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,r.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap manifest [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap m --fix false\n")))),(0,r.kt)("p",null,"Validates the snap ",(0,r.kt)("a",{parentName:"p",href:"/mm-docs-v2/fix/redirects-html-extension/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"m")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest"),"."),(0,r.kt)("h2",{id:"s-serve"},"s, serve"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap serve [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap s -r out -p 9000\n")))),(0,r.kt)("p",null,"Locally serves snap files for testing."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"serve"),"."),(0,r.kt)("h2",{id:"w-watch"},"w, watch"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap watch [options]\n"))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap w -s lib/index.js -d out\n")))),(0,r.kt)("p",null,"Rebuilds a snap from source upon changes to the files in the parent and child directories of the\nsource directory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All files in the parent and child directories of sthe source directory are watched for changes, except:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," directory."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tests")," directories."),(0,r.kt)("li",{parentName:"ul"},"Any files named ",(0,r.kt)("inlineCode",{parentName:"li"},"test.js")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"test.ts"),"."),(0,r.kt)("li",{parentName:"ul"},"Files in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")," directory, or the directory specified using ",(0,r.kt)("a",{parentName:"li",href:"/mm-docs-v2/fix/redirects-html-extension/snaps/reference/cli/options#d-dist"},(0,r.kt)("inlineCode",{parentName:"a"},"--dist")),"."),(0,r.kt)("li",{parentName:"ul"},"Dotfiles."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"w")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),"."))}d.isMDXComponent=!0},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),s=a(7392),o=a(7094),p=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:i,values:u,groupId:d,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[g,x]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==g&&k.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==g&&(w(t),x(n),null!=d&&N(d,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:E},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":g===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function d(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}}}]);