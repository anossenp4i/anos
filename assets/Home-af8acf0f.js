import{R as N,g as X,r as p,j as l,_ as $,a as Q}from"./index-4e263908.js";import{g as ee,I as W,V as I,r as D,C as te,F as se}from"./Footer-aaa6ab29.js";import{c as re,d as ae,e as ne,g as le,h as ie}from"./index-099e95a4.js";import oe from"./ErrorPage-8241da35.js";const d=1,Y=2,G=4,g=8,R=16,A=32,v=64,C={a:{content:d|g,self:!1,type:d|g|A|v},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:d|g,void:!0},body:{content:d|Y|G|g|R|A|v},button:{content:g,type:d|g|A|v},caption:{content:d,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:d|A|v},dd:{content:d,parent:["dl"]},dl:{children:["dt","dd"],type:d},dt:{content:d,invalid:["footer","header"],parent:["dl"]},figcaption:{content:d,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:d,void:!0},img:{void:!0},li:{content:d,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:d},picture:{children:["source","img"],type:d|g|R},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:g,parent:["ruby","rtc"]},rtc:{content:g,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:g,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:d},tbody:{parent:["table"],children:["tr"]},td:{content:d,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:d,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:d},video:{children:["track","source"]},wbr:{type:d|g,void:!0}};function j(a){return e=>{C[e]={...a,...C[e]}}}["address","main","div","figure","p","pre"].forEach(j({content:d,type:d|v}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(j({content:g,type:d|g|v}));["p","pre"].forEach(j({content:g,type:d|v}));["s","small","span","del","ins"].forEach(j({content:g,type:d|g}));["article","aside","footer","header","nav","section","blockquote"].forEach(j({content:d,type:d|Y|v}));["h1","h2","h3","h4","h5","h6"].forEach(j({content:g,type:d|G|v}));["audio","canvas","iframe","img","video"].forEach(j({type:d|g|R|v}));const M=Object.freeze(C),ce=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],de=Object.keys(M).filter(a=>a!=="canvas"&&a!=="iframe"),m=1,ue=2,S=3,T=4,q=5,H=Object.freeze({alt:m,cite:m,class:m,colspan:S,controls:T,datetime:m,default:T,disabled:T,dir:m,height:m,href:m,id:m,kind:m,label:m,lang:m,loading:m,loop:T,media:m,muted:T,poster:m,rel:m,role:m,rowspan:S,scope:m,sizes:m,span:S,start:S,style:q,src:m,srclang:m,srcset:m,tabindex:m,target:m,title:m,type:m,width:m}),me=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex"});function P(){return P=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},P.apply(this,arguments)}function U({attributes:a={},className:e,children:t=null,selfClose:s=!1,tagName:r}){const n=r;return s?N.createElement(n,P({className:e},a)):N.createElement(n,P({className:e},a),t)}class fe{attribute(e,t){return t}node(e,t){return t}}/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var he=/["'&<>]/,Le=pe;function pe(a){var e=""+a,t=he.exec(e);if(!t)return e;var s,r="",n=0,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#39;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=s}return i!==n?r+e.substring(i,n):r}const xe=X(Le);function w(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}const ge=/(url|image|image-set)\(/i;class be extends fe{attribute(e,t){return e==="style"&&Object.keys(t).forEach(s=>{String(t[s]).match(ge)&&delete t[s]}),t}}const z=1,ve=3,ye=/^<(!doctype|(html|head|body)(\s|>))/i,we=/^(aria-|data-|\w+:)/iu,Ne=/{{{(\w+)\/?}}}/;function Ee(){if(!(typeof window>"u"||typeof document>"u"))return document.implementation.createHTMLDocument("Interweave")}class je{constructor(e,t={},s=[],r=[]){var n;w(this,"allowed",void 0),w(this,"banned",void 0),w(this,"blocked",void 0),w(this,"container",void 0),w(this,"content",[]),w(this,"props",void 0),w(this,"matchers",void 0),w(this,"filters",void 0),w(this,"keyIndex",void 0),this.props=t,this.matchers=s,this.filters=[...r,new be],this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set((n=t.allowList)!==null&&n!==void 0?n:de),this.banned=new Set(ce),this.blocked=new Set(t.blockList)}applyAttributeFilters(e,t){return this.filters.reduce((s,r)=>s!==null&&typeof r.attribute=="function"?r.attribute(e,s):s,t)}applyNodeFilters(e,t){return this.filters.reduce((s,r)=>s!==null&&typeof r.node=="function"?r.node(e,s):s,t)}applyMatchers(e,t){const s={},{props:r}=this;let n=e,i=0,h=null;return this.matchers.forEach(o=>{const u=o.asTag().toLowerCase(),L=this.getTagConfig(u);if(r[o.inverseName]||!this.isTagAllowed(u)||!this.canRenderChild(t,L))return;let b="";for(;n&&(h=o.match(n));){const{index:c,length:f,match:x,valid:k,void:E,...y}=h,_=o.propName+String(i);c>0&&(b+=n.slice(0,c)),k?(b+=E?`{{{${_}/}}}`:`{{{${_}}}}${x}{{{/${_}}}}`,this.keyIndex+=1,i+=1,s[_]={children:x,matcher:o,props:{...r,...y,key:this.keyIndex}}):b+=x,o.greedy?(n=b+n.slice(c+f),b=""):n=n.slice(c+(f||x.length))}o.greedy||(n=b+n)}),i===0?e:this.replaceTokens(n,s)}canRenderChild(e,t){return!e.tagName||!t.tagName||e.void?!1:e.children.length>0?e.children.includes(t.tagName):e.invalid.length>0&&e.invalid.includes(t.tagName)?!1:t.parent.length>0?t.parent.includes(e.tagName):!e.self&&e.tagName===t.tagName?!1:!!(e&&e.content&t.type)}convertLineBreaks(e){const{noHtml:t,disableLineBreaks:s}=this.props;if(t||s||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;let r=e.replace(/\r\n/g,`
`);return r=r.replace(/\n{3,}/g,`


`),r=r.replace(/\n/g,"<br/>"),r}createContainer(e){var t;const r=(typeof global<"u"&&global.INTERWEAVE_SSR_POLYFILL||Ee)();if(!r)return;const n=(t=this.props.containerTagName)!==null&&t!==void 0?t:"body",i=n==="body"||n==="fragment"?r.body:r.createElement(n);return e.match(ye)||(i.innerHTML=this.convertLineBreaks(this.props.escapeHtml?xe(e):e)),i}extractAttributes(e){const{allowAttributes:t}=this.props,s={};let r=0;return e.nodeType!==z||!e.attributes||([...e.attributes].forEach(n=>{const{name:i,value:h}=n,o=i.toLowerCase(),u=H[o]||H[i];if(!this.isSafe(e)||!o.match(we)&&(!t&&(!u||u===ue)||o.startsWith("on")||h.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))return;let L=o==="style"?this.extractStyleAttribute(e):h;u===T?L=!0:u===S?L=Number.parseFloat(String(L)):u!==q&&(L=String(L)),s[me[o]||o]=this.applyAttributeFilters(o,L),r+=1}),r===0)?null:s}extractStyleAttribute(e){const t={};return Array.from(e.style).forEach(s=>{const r=e.style[s];(typeof r=="string"||typeof r=="number")&&(t[s.replace(/-([a-z])/g,(n,i)=>String(i).toUpperCase())]=r)}),t}getTagConfig(e){const t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return M[e]?{...t,...M[e],tagName:e}:t}isSafe(e){if(typeof HTMLAnchorElement<"u"&&e instanceof HTMLAnchorElement){const t=e.getAttribute("href");if(t!=null&&t.startsWith("#"))return!0;const s=e.protocol.toLowerCase();return s===":"||s==="http:"||s==="https:"||s==="mailto:"||s==="tel:"}return!0}isTagAllowed(e){return this.banned.has(e)||this.blocked.has(e)?!1:this.props.allowElements||this.allowed.has(e)}parse(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]}parseNode(e,t){const{noHtml:s,noHtmlExceptMatchers:r,allowElements:n,transform:i,transformOnlyAllowList:h}=this.props;let o=[],u="";return[...e.childNodes].forEach(L=>{if(L.nodeType===z){const c=L.nodeName.toLowerCase(),f=this.getTagConfig(c);u&&(o.push(u),u="");const x=this.applyNodeFilters(c,L);if(!x)return;let k;if(i&&!(h&&!this.isTagAllowed(c))){this.keyIndex+=1;const E=this.keyIndex;k=this.parseNode(x,f);const y=i(x,k,f);if(y===null)return;if(typeof y<"u"){o.push(N.cloneElement(y,{key:E}));return}this.keyIndex=E-1}if(this.banned.has(c))return;if(!(s||r&&c!=="br")&&this.isTagAllowed(c)&&(n||this.canRenderChild(t,f))){var b;this.keyIndex+=1;const E=this.extractAttributes(x),y={tagName:c};E&&(y.attributes=E),f.void&&(y.selfClose=f.void),o.push(N.createElement(U,{...y,key:this.keyIndex},(b=k)!==null&&b!==void 0?b:this.parseNode(x,f)))}else o=[...o,...this.parseNode(x,f.tagName?f:t)]}else if(L.nodeType===ve){const c=s&&!r?L.textContent:this.applyMatchers(L.textContent||"",t);Array.isArray(c)?o=[...o,...c]:u+=c}}),u&&o.push(u),o}replaceTokens(e,t){if(!e.includes("{{{"))return e;const s=[];let r=e,n=null;for(;n=r.match(Ne);){const[i,h]=n,o=n.index,u=i.includes("/");o>0&&(s.push(r.slice(0,o)),r=r.slice(o));const{children:L,matcher:b,props:c}=t[h];let f;if(u)f=i.length,s.push(b.createElement(L,c));else{const x=r.match(new RegExp(`{{{/${h}}}}`));f=x.index+x[0].length,s.push(b.createElement(this.replaceTokens(r.slice(i.length,x.index),t),c))}r=r.slice(f)}return r.length>0&&s.push(r),s.length===0?"":s.length===1&&typeof s[0]=="string"?s[0]:s}}function K(a){var e;const{attributes:t,className:s,containerTagName:r,content:n,emptyContent:i,parsedContent:h,tagName:o,noWrap:u}=a,L=(e=r??o)!==null&&e!==void 0?e:"span",b=L==="fragment"?!0:u;let c;if(h)c=h;else{const f=new je(n??"",a).parse();f.length>0&&(c=f)}return c||(c=i),b?N.createElement(N.Fragment,null,c):N.createElement(U,{attributes:t,className:s,tagName:L},c)}const Te=()=>localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches,ke=({className:a,children:e})=>{const[t,s]=p.useState(Date.now());p.useEffect(()=>{const i=setInterval(()=>s(Date.now()),1e3);return()=>{clearInterval(i)}},[t]);let n={borderRadius:ee()};return l.jsx("template",{style:n,className:`transition-all duration-1000 delay-200 flex justify-center items-center ${a}`,children:e})},J=ke,Se=({data:a})=>{const[e]=p.useState(Te()),[t,s]=p.useState(null);return p.useEffect(()=>{s({})},[e]),l.jsxs("section",{id:"profile",style:t,className:`${a?"":"preview-content"} bg-slate-200 dark:bg-slate-900 bg-fixed relative w-screen h-screen md:min-h-screen flex flex-col gap-2 items-center justify-center lg:flex-row-reverse md:justify-center lg:px-24`,children:[l.jsx("div",{className:"group flex items-center justify-center lg:justify-between lg:px-8",children:l.jsx(J,{className:"h-48 w-48 max-w-48 max-h-48 lg:max-w-72 lg:max-h-72 lg:w-72 lg:h-72 p-4 relative bg-gradient-to-b from-sky-500 to-violet-400 border shadow-md p-8 overflow-hidden flex justify-center items-center",children:l.jsx(W,{className:`${a?"animation-none":"animation-pulse"} w-full h-full shadow-md rounded-full border-2 border-sky-400`,alt:"my avatar",srcset:a?a.avatar.base64:""})})}),l.jsxs("div",{className:"relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2",children:[l.jsx("h1",{className:`${a.name?"":"animate-pulse"} text-shadow-md text-3xl capitalize font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-600 text-center lg:text-start`,children:a?a.name:"loading ..."}),l.jsx("p",{className:"dark:text-slate-100 mx-4 lg:mx-0 text-sm md:w-1/2 lg:w-full md:text-lg lg:text-2xl font-light font-serif text-center lg:text-start",children:a?l.jsx(K,{content:a.formatted_slogan}):"loading ..."}),l.jsx("a",{name:"contact me",href:"https:///t.me/fiandev",className:"font-bold transition-all duration-800 flex items-center justify-center text-sm lg:text-md px-4 py-2 rounded-sm text-slate-100 bg-sky-600 dark:bg-blue-600 shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 capitalize",children:"contact me"})]})]})},_e=Se;function Ae(a,e){let t=a-e,s=Math.floor(t/(1e3*60*60*24)),r=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(t%(1e3*60*60)/(1e3*60)),i=Math.floor(t%(1e3*60)/1e3),h=Math.floor(s/365.25);return{seconds:i,minutes:n,hours:r,years:h,distance:t}}function F({children:a,data:e,className:t}){return e&&l.jsx(I,{children:l.jsxs("div",{className:`p-4 rounded-md flex flex-col gap-2 ${t||"bg-main"}`,children:[l.jsx("h1",{className:"text-bold text-slate-50 capitalize text-lg lg:text-xl xl:text-2xl",children:e.label}),l.jsx("ul",{className:"no-scrollbar flex flex-col items-start justify-start text-slate-100 gap-2 h-48 max-h-48 text-sm md:text-base lg:text-lg xl:text-xl overflow-y-scroll",children:e.items.map(s=>l.jsxs("li",{className:"flex gap-2 text-semibold items-center",children:[s.icon?null:l.jsx(W,{className:"w-6 h-6",alt:`${e.label}'s icon`,srcset:s.image||""}),l.jsxs("div",{className:"flex gap-1 justify-betweem",children:[l.jsx("p",{className:"w-fit max-w-32",children:s.text.split("|")[0]}),l.jsx("span",{className:"text-bold text-slate-100",children:s.text.split("|").pop()})]})]}))})]})})}const Ie=({data:a,className:e})=>{const[t,s]=p.useState(Date.now()),[r,n]=p.useState(0),{formatted_about:i,skills:h}=a;return p.useEffect(()=>{const o=new Date("13 June 2005, 11:00:00").getTime();let{years:u}=Ae(t,o);return n(u),()=>{}},[]),a&&l.jsxs("section",{id:"about",className:`bg-slate-50 dark:bg-slate-900 px-4 py-8 inset-x-0 transition-all duration-1000t flex flex-col gap-4 justify-start items-center lg:px-8 ${e}`,children:[l.jsx("h1",{className:"text-3xl capitalize font-bold font-mono dark:text-slate-50",children:"About Me"}),l.jsx("div",{className:`${i?"animate-none":"animate-pulse"} md:text-center dark:text-slate-50 text-lg lg:text-xl xl:text-2xl font-light font-serif py-4`,children:l.jsx(K,{content:i})}),l.jsxs("div",{className:"w-full h-fit py-4 items-center grid px-auto md:grid-cols-2 gap-4",children:[l.jsx(F,{className:"bg-rose-600",data:{label:"my skills",items:h.map(o=>({image:`https://raw.githubusercontent.com/fiandev/static-assets/master/icons/${o.name.toLowerCase()}.svg`,text:`${o.name} | (${o.level})`}))}}),l.jsx(F,{className:"bg-blue-600",data:{label:"biodata",items:[{icon:re,text:"Name: | Fian"},{icon:ae,text:`Age: |${r} Years Old`},{icon:ne,text:"State: |Lamongan, East Java"},{icon:le,text:"Education: | High school"},{icon:ie,text:"Hobbies: |code, movies, anime, music, and cat"}]}})]})]})},Pe=Ie;function Oe(){return l.jsx("div",{className:"relative w-full h-full bg-white dark:bg-slate-800",children:l.jsx("div",{className:"absolute inset-0 flex w-4 h-4 rounded-full bg-transparent border-r-2 border-main animate-spin duration-100"})})}const B=p.lazy(()=>$(()=>import("./Item-96c91fec.js"),["assets/Item-96c91fec.js","assets/index-4e263908.js","assets/index-3f063b8d.css","assets/index-099e95a4.js","assets/Footer-aaa6ab29.js"])),Re=p.lazy(()=>$(()=>import("./Pagination-8d7baa72.js"),["assets/Pagination-8d7baa72.js","assets/index-4e263908.js","assets/index-3f063b8d.css","assets/index-099e95a4.js"]));let O=6;const Ce=({projects:a,className:e})=>{const[t,s]=p.useState(1),r=p.useMemo(()=>{const n=(t-1)*O,i=n+O;return a==null?void 0:a.slice(n,i)},[t,a]);return l.jsxs("section",{id:"project",className:`bg-main p-4 lg:py-8 transition-all duration-500 flex flex-col gap-4 justify-start xl:justify-center items-center ${e}`,children:[l.jsx("h1",{className:"text-slate-50 text-3xl capitalize font-bold font-mono",children:"My Projects"}),l.jsx("div",{className:"no-scrollbar overflow-scroll w-full flex flex-col items-start md:items-center",children:l.jsx("div",{className:"transition-all w-fit no-scrollbar overflow-scroll flex items-center flex-shrink-0 gap-2 md:grid md:grid-cols-3 md:gap-4 md:place-items-center",children:r?r.map(n=>l.jsx(p.Suspense,{fallback:l.jsx(Oe,{}),children:l.jsx(B,{className:"w-52 md:w-full h-72",link:n.preview,stacks:n.stacks,repo:n.repository,thumbnail:n.thumbnail,title:n.title,description:n.description})})):l.jsx(B,{className:"animate-pulse "})})}),l.jsx(Re,{className:"pagination",currentPage:t,totalCount:a==null?void 0:a.length,pageSize:O,onPageChange:n=>s(n)})]})},Me=Ce;function $e(){return l.jsxs("section",{id:"preview",className:"preview-content bg-slate-200 dark:bg-slate-900 bg-fixed relative w-screen h-screen md:min-h-screen flex flex-col gap-2 items-center justify-center lg:flex-row-reverse md:justify-center lg:px-24",children:[l.jsx("div",{className:"group flex items-center justify-center lg:justify-between lg:px-8",children:l.jsx(J,{className:"h-48 w-48 max-w-48 max-h-48 lg:max-w-72 lg:max-h-72 lg:w-72 lg:h-72 p-4 relative bg-gradient-to-b from-sky-500 to-violet-400 border shadow-md p-8 overflow-hidden flex justify-center items-center",children:l.jsx("img",{className:"w-full h-full shadow-md rounded-full border-2 border-sky-400"})})}),l.jsxs("div",{className:"relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2",children:[l.jsx("h1",{className:"text-shadow-md text-3xl capitalize font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-600 text-center lg:text-start",children:"loading ..."}),l.jsx("p",{className:"dark:text-slate-100 mx-4 lg:mx-0 text-sm md:w-1/2 lg:w-full md:text-lg lg:text-2xl font-light font-serif text-center lg:text-start",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, possimus ipsum neque mollitia ea ducimus odit maiores laboriosam ipsam corrupti quasi quam distinctio soluta nulla atque voluptas aspernatur. Repellat, minima."}),l.jsx("a",{name:"contact me",href:"#",className:"font-bold transition-all duration-800 flex items-center justify-center text-sm lg:text-md px-4 py-2 rounded-sm text-slate-100 bg-sky-600 dark:bg-blue-600 shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 capitalize",children:"contact me"})]})]})}const Z=()=>({top:void 0,left:void 0,buttom:void 0,right:void 0,width:void 0,height:void 0}),De=(a={current:null})=>{const[e,t]=p.useState(!1),[s,r]=p.useState(Z());return p.useEffect(()=>{r(V(a.current)),t(!0)},[t,r,a]),[e,s,()=>{const i=V(a.current);return r(i),i}]},V=a=>{if(!a)return Z();let e=a,t=0,s=0;do t+=e.offsetLeft,s+=e.offsetTop,e=e.offsetParent;while(e);return{top:s,left:t,bottom:s+a.offsetHeight,right:t+a.offsetWidth}},He={clampVal(a=0,e=0,t=0){return Math.max(e,Math.min(a,t))}},ze=N.createContext(!1),Fe=({id:a=void 0,className:e=void 0,viewportHeight:t=100,clamp:s=!0,debug:r=!1,debugLabel:n="",children:i,style:h={},startAtScreenTop:o=!1})=>{const u=p.useRef(null),[L,b]=Q(),[c,f]=De(u),x=c?Be(L,f.top,f.bottom,b,s,o):0;return p.useEffect(()=>{r&&console.log(n||u.current&&u.current.id||"RECT_CALC","INIT=",c,"TOP=",f.top,"BOTTOM=",f.bottom)},[r,n,c,f]),r&&console.log(n||u.current&&u.current.id||"SCRL_%=",x,"SCRL_Y=",L),l.jsx("div",{id:a,ref:u,className:e,style:{backgroundColor:r?"rgba(255, 0, 0, 0.5)":"transparent",...h},children:l.jsx(ze.Provider,{value:Number(x)||0,children:i})})};function Be(a=0,e=0,t=0,s=0,r=!1,n=!1){if(!t||t-e<=0)return-1;const i=n?e:Math.max(e-s,0),h=Math.min(document.body.scrollHeight-s,t),o=(a-i)/(h-i);return r?He.clampVal(o,0,1):o}function qe(){let[a,e]=p.useState(null),[t,s]=p.useState(!1),[r,n]=p.useState(null);return p.useEffect(()=>{$(()=>import("./data-b56152b7.js"),[]).then(i=>{let h=i.default;e(h.data)}).catch(i=>{n(i)})},[]),a?!t&&a?l.jsxs("div",{className:"pt-2 scroll-smooth relative",children:[l.jsx(_e,{data:a}),l.jsx(Fe,{className:"h-fit",children:l.jsx(Pe,{className:"lg:px-[10vw]",data:a})}),l.jsx(I,{specialKey:D(),children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:"bg-slate-50 outline-0 border-0 dark:bg-slate-900",children:l.jsx("path",{className:"fill-main",fillOpacity:"1",d:"M0,192L0,32L48,32L48,64L96,64L96,128L144,128L144,256L192,256L192,160L240,160L240,160L288,160L288,224L336,224L336,288L384,288L384,160L432,160L432,192L480,192L480,64L528,64L528,224L576,224L576,96L624,96L624,224L672,224L672,32L720,32L720,224L768,224L768,192L816,192L816,160L864,160L864,224L912,224L912,224L960,224L960,128L1008,128L1008,128L1056,128L1056,224L1104,224L1104,160L1152,160L1152,64L1200,64L1200,32L1248,32L1248,192L1296,192L1296,96L1344,96L1344,288L1392,288L1392,224L1440,224L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z"})})}),l.jsx(Me,{className:"lg:px-[10vw]",projects:a==null?void 0:a.portfolios}),l.jsx(I,{specialKey:D(),children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:"bg-main outline-0 border-0",children:l.jsx("path",{className:"fill-slate-50 dark:fill-slate-900",fillOpacity:"1",d:"M0,32L0,64L48,64L48,256L96,256L96,96L144,96L144,0L192,0L192,224L240,224L240,192L288,192L288,256L336,256L336,256L384,256L384,288L432,288L432,96L480,96L480,96L528,96L528,320L576,320L576,288L624,288L624,320L672,320L672,224L720,224L720,224L768,224L768,288L816,288L816,128L864,128L864,224L912,224L912,224L960,224L960,96L1008,96L1008,0L1056,0L1056,64L1104,64L1104,128L1152,128L1152,192L1200,192L1200,96L1248,96L1248,64L1296,64L1296,128L1344,128L1344,0L1392,0L1392,128L1440,128L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z"})})}),l.jsx(I,{children:l.jsx(te,{className:"bg-slate-50 dark:bg-slate-900",links:a==null?void 0:a.links})}),l.jsx(se,{})]}):l.jsx(oe,{code:(r==null?void 0:r.code)||500,message:(r==null?void 0:r.message)||"internal server error",suggest:"maybe backend server for this website is down please contact me at 't.me/fiandev'"}):l.jsx($e,{})}export{qe as default};
//# sourceMappingURL=Home-af8acf0f.js.map
