import{j as e}from"./index-4e263908.js";import{F as c,m as u}from"./index-099e95a4.js";import{I as d}from"./Footer-aaa6ab29.js";function i({link:o,icon:s,label:t,name:l}){return e.jsxs("a",{href:o||"#",name:l||"no name",className:"group/button flex gap-2 items-center transition-all duration-800 text-sm lg:text-md w-fit h-fit p-2 rounded-sm text-slate-50 bg-blue-400 outline outline-inherit hover:outline-blue-400 hover:outline-offset-2 hover:rounded-full",children:[e.jsx(c,{className:"transition-all group-hover/button:animate-bounce",icon:s}),e.jsx("span",{className:"group-hover/button:block group-hover/button:scale-100 delay-100 transition-transform scale-0 hidden uppercase font-semibold text-[.8rem]",children:t||"visit"})]})}const h=o=>{const s=o.target;fetch("https://api.waifu.pics/sfw/waifu").then(t=>t.json()).then(t=>s.setAttribute("src",t.url)).catch(t=>console.log(t))};function g({className:o,thumbnail:s,title:t,description:l,link:m,repo:r,stacks:n}){return e.jsxs("div",{className:`group relative overflow-hidden rounded-sm hover:rounded-md hover:shadow-md ${o}`,children:[e.jsx(d,{onError:h,srcset:s?s.base64:"",alt:t||"untitled",className:"w-full h-36 lg:w-full transition-all group-hover:scale-150 bg-sky-400"}),e.jsx("div",{className:"transition-all group-hover:rounded-md group-hover:shadow-md absolute flex justify-center items-center bottom-0 w-full h-40 py-4 hover:h-full bg-slate-50 bg-slate-50",children:e.jsxs("div",{className:"group/item flex flex-col items-center gap-2",children:[e.jsx("p",{className:"text-slate-800 text-center text-sm md:text-lg lg:text-xl font-serif text-bold px-2 h-6 max-h-6 overflow-hidden",children:t||"untitled project"}),e.jsx("p",{className:"no-scrollbar text-slate-800 text-center text-xs md:text-sm lg:text-lg font-serif text-bold px-2 h-12 max-h-12 lg:h-12 lg:max-h-6 overflow-y-scroll",children:l||"no description"}),n?e.jsx("div",{className:"flex w-fit shrink-0 items-center justify-center gap-0.5",children:n.map(a=>e.jsx("img",{className:"w-5 h-5",src:a.icon,alt:a.name}))}):null,e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{label:"visit",name:`visit ${t}`,link:m,icon:u}),r?e.jsx(i,{label:"repository",name:`repository ${t}`,link:r,icon:["fab","github"]}):null]})]})})]})}export{g as default};
//# sourceMappingURL=Item-96c91fec.js.map
