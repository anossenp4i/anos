import{r as g,j as p}from"./index-4e263908.js";import{F as se,j as Ve,k as We,l as Ke}from"./index-099e95a4.js";const N=()=>Math.floor(Math.random()*(100-10+1)+10),xn=()=>`${N()}% ${N()}% ${N()}% ${N()}% / ${N()}% ${N()}% ${N()}% ${N()}%`,Q=(e,t=null)=>({NODE_ENV:"production"})[e]?{NODE_ENV:"production"}[e]:t,C=(e=4)=>{let n="abcdefghijklmnopqrstuvwxyz1234566890".split(""),r="";for(let s=0;s<e;s++)r+=n[Math.floor(Math.random()*n.length)];return r};function Ge({srcset:e,alt:t,className:n,onError:r}){const[s,i]=g.useState(!1);function o(f){document.addEventListener("DOMContentLoaded",f),(document.readyState==="interactive"||document.readyState==="complete")&&(document.removeEventListener("DOMContentLoaded",f),f())}function l(f){f.target.setAttribute("src","")}return o(()=>{s||i(!s)}),e&&p.jsx("img",{onError:r||l,className:`${n} ${s?"":"bg-slate-400 animate-pulse"}`,src:s?e:null,loading:"lazy",alt:t||C()},C())}const de=["animate-fadeInRight","animate-fadeInLeft"];function Xe({specialKey:e,children:t,className:n}){const[r,s]=g.useState(!1),i=g.useRef(),o=c=>{const u=c.getBoundingClientRect();return u.top>=0&&u.left>=0&&u.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&u.right<=(window.innerWidth||document.documentElement.clientWidth)},l=c=>{r||s(o(i.current))},f=de[Math.floor(Math.random()*de.length)];return g.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[r]),p.jsx("div",{ref:i,className:`w-full ${n} ${r?`${f}`:""}`,children:r&&t},e||C())}function Ye({className:e,icon:t="",username:n="username",description:r="...",link:s="#"}){return p.jsxs("a",{href:s||"#",className:`${e} group/contact hover:bg-sky-400 dark:hover:bg-slate-900 dark:bg-main hover:font-bold outline outline-main outline-sm hover:outline-md hover:outline-gray-800 dark:hover:outline-slate-50 rounded-md shadow-gray-900 dark:shadow-slate-100 w-28 w-max-28 h-24 p-4 flex flex-col gap-1 text-center justify-center border-main overflow-hidden`,children:[p.jsx(se,{icon:["fab",t],className:"dark:text-slate-900 text-main dark:group-hover/contact:text-slate-100 text-lg group-hover/contact:animate-bounce group-hover/contact:text-slate-600"}),p.jsx("h1",{className:"hover:text-underline font-serif text-sm font-semibold text-slate-600 dark:text-slate-100 uppercase group-hover/contact:text-slate-100",children:r}),p.jsx("p",{className:"my-0 hover:underline lowercase truncate text-xs font-semibold text-slate-400 dark:text-slate-200 group-hover/contact:text-slate-200",children:n})]})}function W({type:e,name:t,text:n,className:r,value:s,placeholder:i,error:o=null}){return p.jsxs("div",{className:`transition-all flex flex-col justify-center rounded-md group/floating outline outline-gray-400 hover:outline-main hover:outline-md p-2 ${r} ${o?"hover:outline-rose-500 outline-rose-400":""} `,children:[p.jsx("label",{htmlFor:t,className:"transition-all group-hover/floating:text-sm text-md text-gray-400 group-hover/floating:font-light",children:n||t}),e==="textarea"?p.jsx("textarea",{rows:"3",name:t||"input",id:t||"input",className:`peer w-full h-min-4 text-sm bg-transparent border-0 outline-0 ${o?"placeholder-rose-500 text-rose-500":"text-main placeholder-main"}`,placeholder:i||"type here ...",children:s}):p.jsx("input",{id:t||"input",className:`peer text-sm w-full h-0 focus:h-fit bg-transparent border-0 outline-0 ${o?"placeholder-rose-500 text-rose-500":"text-main placeholder-main"}`,type:"text",name:t||"input",value:s,placeholder:i||"type here ..."}),o?p.jsx("p",{className:"text-xs text-rose-500 font-light",children:o}):null]})}function he({children:e,className:t,duration:n=2e3}){let[r,s]=g.useState(!1),[i,o]=g.useState(!1);return setTimeout(()=>{s(!0),setTimeout(()=>{o(!0)},1e3)},n),i?null:p.jsx("div",{className:`transition duration-1000 ${r?"scale-y-0":""} p-4 rounded-md bg-main text-slate-100 text-sm lg:text-xl ${t}`,children:e})}function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ne}=Object.prototype,{getPrototypeOf:oe}=Object,ie=(e=>t=>{const n=Ne.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>ie(t)===e),q=e=>t=>typeof t===e,{isArray:_}=Array,D=q("undefined");function Qe(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Te=O("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Te(e.buffer),t}const et=q("string"),P=q("function"),Pe=q("number"),ae=e=>e!==null&&typeof e=="object",tt=e=>e===!0||e===!1,I=e=>{if(ie(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nt=O("Date"),rt=O("File"),st=O("Blob"),ot=O("FileList"),it=e=>ae(e)&&P(e.pipe),at=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ne.call(e)===t||P(e.toString)&&e.toString()===t)},ct=O("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fe=e=>!D(e)&&e!==Ce;function Z(){const{caseless:e}=Fe(this)&&this||{},t={},n=(r,s)=>{const i=e&&je(t,s)||s;I(t[i])&&I(r)?t[i]=Z(t[i],r):I(r)?t[i]=Z({},r):_(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const ut=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,i)=>{n&&P(s)?e[i]=Oe(s,n):e[i]=s},{allOwnKeys:r}),e),ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ht=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},mt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!Pe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},xt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bt=O("HTMLFormElement"),Et=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gt=O("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},St=e=>{_e(e,(t,n)=>{if(P(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return _(e)?r(e):r(String(e).split(t)),n},At=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",me="0123456789",ke={DIGIT:me,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+me},Nt=(e=16,t=ke.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tt(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Pt=e=>{const t=new Array(10),n=(r,s)=>{if(ae(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=_(r)?[]:{};return L(r,(o,l)=>{const f=n(o,s+1);!D(f)&&(i[l]=f)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:_,isArrayBuffer:Te,isBuffer:Qe,isFormData:at,isArrayBufferView:Ze,isString:et,isNumber:Pe,isBoolean:tt,isObject:ae,isPlainObject:I,isUndefined:D,isDate:nt,isFile:rt,isBlob:st,isRegExp:gt,isFunction:P,isStream:it,isURLSearchParams:ct,isTypedArray:yt,isFileList:ot,forEach:L,merge:Z,extend:ut,trim:lt,stripBOM:ft,inherits:dt,toFlatObject:ht,kindOf:ie,kindOfTest:O,endsWith:pt,toArray:mt,forEachEntry:wt,matchAll:xt,isHTMLForm:bt,hasOwnProperty:pe,hasOwnProp:pe,reduceDescriptors:_e,freezeMethods:St,toObjectSet:Rt,toCamelCase:Et,noop:At,toFiniteNumber:Ot,findKey:je,global:Ce,isContextDefined:Fe,ALPHABET:ke,generateString:Nt,isSpecCompliantForm:Tt,toJSONObject:Pt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const De=y.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(y,Le);Object.defineProperty(De,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,i)=>{const o=Object.create(De);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),y.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const jt=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,i){return s=Be(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Ct(e){return a.isArray(e)&&!e.some(ee)}const Ft=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,R){let E=d;if(d&&!R&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ct(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(E=a.toArray(d)))return m=Be(m),E.forEach(function(U,Je){!(a.isUndefined(U)||U===null)&&t.append(o===!0?ye([m],Je,i):o===null?m:m+"[]",c(U))}),!1}return ee(d)?!0:(t.append(ye(R,m,i),c(d)),!1)}const h=[],x=Object.assign(Ft,{defaultVisitor:u,convertValue:c,isVisitable:ee});function w(d,m){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),a.forEach(d,function(E,j){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(j)?j.trim():j,m,x))===!0&&w(E,m?m.concat(j):[j])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&z(e,this,t)}const Ue=ce.prototype;Ue.append=function(t,n){this._pairs.push([t,n])};Ue.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||_t,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class kt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const xe=kt,ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dt=typeof URLSearchParams<"u"?URLSearchParams:ce,Lt=FormData,Bt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ut=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Dt,FormData:Lt,Blob},isStandardBrowserEnv:Bt,isStandardBrowserWebWorkerEnv:Ut,protocols:["http","https","file","blob","url","data"]};function It(e,t){return z(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Me(e){function t(n,r,s,i){let o=n[i++];const l=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Mt(s[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(vt(r),s,n,0)}),n}return null}const Ht={"Content-Type":void 0};function $t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:ve,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Me(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return z(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$t(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Ht)});const le=J,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function Jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Vt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function G(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Wt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Kt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,f,c){const u=k(f);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||f]=v(l))}const o=(l,f)=>a.forEach(l,(c,u)=>i(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Vt(t)?o(zt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Jt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=k(o),o){const l=a.findKey(r,o);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||G(this,this[i],i,t))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=v(s),delete n[i];return}const l=t?Wt(i):String(i).trim();l!==i&&delete n[i],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=k(o);r[l]||(Kt(s,o),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(V.prototype);a.freezeMethods(V);const A=V;function X(e,t){const n=this||le,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function He(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,y,{__CANCEL__:!0});function Gt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Xt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(i)&&f.push("path="+i),a.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Yt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function $e(e,t){return e&&!Yt(t)?Qt(e,t):t}const Zt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const l=a.isString(o)?s(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[i];o||(o=c),n[s]=f,r[s]=c;let h=i,x=0;for(;h!==s;)x+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const w=u&&c-u;return w?Math.round(x*1e3/w):void 0}}function Ee(e,t){let n=0;const r=tn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-n,f=r(l),c=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:f||void 0,estimated:f&&o&&c?(o-i)/f:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let s=e.data;const i=A.from(e.headers).normalize(),o=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+d))}const u=$e(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ie(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const w=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Gt(function(E){n(E),f()},function(E){r(E),f()},m),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||ve;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new y(d,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const w=(e.withCredentials||Zt(u))&&e.xsrfCookieName&&Xt.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(d,m){c.setRequestHeader(m,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ee(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ee(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=w=>{c&&(r(!w||w.type?new B(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const x=en(u);if(x&&S.protocols.indexOf(x)===-1){r(new y("Unsupported protocol "+x+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},M={http:jt,xhr:rn};a.forEach(M,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?M[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(M,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:M};function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function ge(e){return Y(e),e.headers=A.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sn.getAdapter(e.adapter||le.adapter)(e).then(function(r){return Y(e),r.data=X.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return He(r)||(Y(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof A?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,u,h){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:h},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,h){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,u,h)}function i(c,u){if(!a.isUndefined(u))return r(void 0,u)}function o(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,h){if(h in t)return r(c,u);if(h in e)return r(void 0,c)}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>s(Se(c),Se(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const h=f[u]||s,x=h(e[u],t[u],u);a.isUndefined(x)&&h!==l||(n[u]=x)}),n}const qe="1.3.2",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Re={};ue.transitional=function(t,n,r){function s(i,o){return"[Axios v"+qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Re[o]&&(Re[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};function on(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const l=e[i],f=l===void 0||o(l,i,e);if(f!==!0)throw new y("option "+i+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const te={assertOptions:on,validators:ue},T=te.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new xe,response:new xe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&te.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=A.concat(o,i);const l=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,h=0,x;if(!f){const d=[ge.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),x=d.length,u=Promise.resolve(n);h<x;)u=u.then(d[h++],d[h++]);return u}x=l.length;let w=n;for(h=0;h<x;){const d=l[h++],m=l[h++];try{w=d(w)}catch(R){m.call(this,R);break}}try{u=ge.call(this,w)}catch(d){return Promise.reject(d)}for(h=0,x=c.length;h<x;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=F(this.defaults,t);const n=$e(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}$.prototype[t]=n(),$.prototype[t+"Form"]=n(!0)});const H=$;class fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new B(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new fe(function(s){t=s}),cancel:t}}}const an=fe;function cn(e){return function(n){return e.apply(null,n)}}function ln(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const un=ne;function ze(e){const t=new H(e),n=Oe(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(F(e,s))},n}const b=ze(le);b.Axios=H;b.CanceledError=B;b.CancelToken=an;b.isCancel=He;b.VERSION=qe;b.toFormData=z;b.AxiosError=y;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=cn;b.isAxiosError=ln;b.mergeConfig=F;b.AxiosHeaders=A;b.formToJSON=e=>Me(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=un;b.default=b;const fn=b,dn={username:Q("REACT_APP_API_USERNAME"),apikey:Q("REACT_APP_API_KEY")},re=Q("REACT_APP_API_BASEURL"),Ae=fn.create({BASEURL:re});class hn{constructor(t){this.username=t.username,this.apikey=t.apikey}setUsername(t){this.username=t}setApikey(t){this.apikey=t}async getProfile(){let{data:t}=await Ae(`${re}/profile/${this.username}?apikey=${this.apikey}`);return t}async getInbox(){return await Ae(`/inbox/${this.username}?apikey=${this.apikey}`)}async sentInbox(t,n){!n&&typeof n!="function"&&(n=()=>{});const s=await(await fetch(`${re}/inbox/${this.username}?apikey=${this.apikey}`,{method:"POST",body:t})).json();return n(s)}}const pn=new hn(dn);function bn({links:e,className:t}){let[n,r]=g.useState(!1),[s,i]=g.useState(!1),[o,l]=g.useState(null);g.useEffect(()=>{},[n]);const f=c=>{let u=c.target,h=new FormData(u);c.preventDefault(),pn.sentInbox(h,x=>{try{x.code===200?(i(!0),l(null),u.reset()):l(x.error||{})}catch(w){console.log(w)}r(!1)})};return p.jsxs("section",{id:"contact",className:`min-h-[40vh] py-8 transition-all duration-500 flex flex-col gap-4 justify-center items-center ${t}`,children:[p.jsx("h1",{className:"text-3xl capitalize font-bold font-mono dark:text-slate-50",children:"connect with me"}),p.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 place-items-center",children:e?e.map(c=>p.jsx(Ye,{link:c.url,description:c.type,icon:c.type,username:c.url},C())):null}),p.jsx("div",{className:"px-2 flex flex-col w-full px-2 md:w-[80%] lg:w-[60%]",children:p.jsxs("form",{onSubmit:c=>f(c),className:"flex flex-col gap-2 w-full py-4",children:[s?p.jsxs(he,{children:["message successfully sent,",p.jsx("span",{className:"font-bold relative text-slate-100 before:flex before:items-center before:justify-center  before:absolute before:inset-0 before:-skew-y-3 before:bg-blue-600",children:p.jsx("span",{className:"relative text-slate-100",children:"thanks !"})})]},C()):null,o?Object.keys(o).map(c=>p.jsxs(he,{className:"bg-rose-500 font-bold",children:[p.jsxs("span",{className:"capitalize",children:[" ",c," "]}),o[c].map(u=>p.jsxs("p",{className:"font-normal text-sm lg:text-lg",children:[" ",u," "]}))]},C())):null,p.jsx(W,{error:o?o.sender:null,name:"sender",text:"username",placeholder:"write your username ..."}),p.jsx(W,{error:o?o.email:null,name:"email",placeholder:"write your email ..."}),p.jsx(W,{error:o?o.message:null,type:"textarea",name:"message",placeholder:"write your message ..."}),p.jsxs("button",{onClick:()=>r(!0),htmlType:"submit",className:"self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full",children:[p.jsx(se,{className:"animation group-hover/btn:animate-bounce",icon:n?We:Ve}),"Send"]})]})})]})}const mn="/assets/WaveAnimate-b8320d5c.svg";function En(){const e=new Date().getFullYear();return p.jsxs("section",{id:"footer",className:"relative w-screen pt-8 capitalize flex flex-col gap-4 bg-gradient-to-t from-sky-500 to-slate-50 dark:from-sky-900 dark:to-slate-900 items-center justify-end text-gray-800",children:[p.jsx(Xe,{children:p.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center text-center",children:[p.jsxs("p",{className:"text-lg font-serif text-slate-50",children:["built with"," ",p.jsx(se,{icon:Ke,className:"text-rose-400"})," by"," ",p.jsxs("span",{className:"font-semibold text-sky-800 dark:text-sky-400 hover:underline",children:[" ","fiandev"," "]})]}),p.jsxs("p",{className:"text-sm font-serif text-gray-100",children:[p.jsxs("span",{className:"font-semibold",children:["@ ",e,"."]})," all right reserved."]})]})}),p.jsx(Ge,{className:"w-max h-max m-0 p-0",alt:"wave animation",srcset:mn})]})}export{bn as C,En as F,Ge as I,Xe as V,xn as g,C as r};
//# sourceMappingURL=Footer-aaa6ab29.js.map
