(()=>{var e,r,t={138:(e,r,t)=>{Promise.all([t.e(641),t.e(442)]).then(t.bind(t,442)).catch((e=>{console.error("Failed to load modules"),console.error(e)}))}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,n.c=o,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@genshin-utils/shell:",n.l=(t,o,i,a)=>{if(e[t])e[t].push(o);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",r+i),l.src=t),e[t]=[o];var p=(r,o)=>{l.onerror=l.onload=null,clearTimeout(h);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},r={};n.I=(t,o)=>{o||(o=[]);var i=r[t];if(i||(i=r[t]={}),!(o.indexOf(i)>=0)){if(o.push(i),e[t])return e[t];n.o(n.S,t)||(n.S[t]={}),n.S[t];var a=[];return e[t]=a.length?Promise.all(a).then((()=>e[t]=1)):1}}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=i);var a=n.p+n.u(r),l=new Error;n.l(a,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,i,a=t[0],l=t[1],s=t[2],u=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);for(s&&s(n),r&&r(t);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0},t=self.webpackChunk_genshin_utils_shell=self.webpackChunk_genshin_utils_shell||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n(138)})();