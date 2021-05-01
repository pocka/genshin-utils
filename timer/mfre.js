var app_timer;(()=>{"use strict";var e,r,t,n,i,o,a,u,l,s,p,f={752:(e,r,t)=>{var n={timer:()=>t.e(363).then((()=>()=>t(363)))},i=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,i="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[i]=e,t.I(i,r)}};t.d(r,{get:()=>i,init:()=>o})}},d={};function c(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={exports:{}};return f[e](t,t.exports,c),t.exports}c.m=f,c.c=d,c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@genshin-utils/app-timer:",c.l=(t,n,i,o)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+i){a=p;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",r+i),a.src=t),e[t]=[n];var f=(r,n)=>{a.onerror=a.onload=null,clearTimeout(d);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{c.S={};var e={},r={};c.I=(t,n)=>{n||(n=[]);var i,o,a,u,l=r[t];if(l||(l=r[t]={}),!(n.indexOf(l)>=0)){if(n.push(l),e[t])return e[t];c.o(c.S,t)||(c.S[t]={});var s=c.S[t],p="@genshin-utils/app-timer",f=[];switch(t){case"default":i="8.3.2",a=s.uuid=s.uuid||{},(!(u=a[i])||!u.loaded&&(1!=!u.eager?o:p>u.from))&&(a[i]={get:()=>c.e(614).then((()=>()=>c(614))),from:p,eager:!1})}return e[t]=f.length?Promise.all(f).then((()=>e[t]=1)):1}}})(),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var i=e[n],o=(typeof i)[0];if(n>=r.length)return"u"==o;var a=r[n],u=(typeof a)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&i!=a)return i<a;n++}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,u=1,l=!0;;u++,a++){var s,p,f=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(p=(typeof(s=r[a]))[0]))return!l||("u"==f?u>n&&!o:""==f!=o);if("u"==p){if(!l||"u"!=f)return!1}else if(l)if(f==p)if(u<=n){if(s!=e[u])return!1}else{if(o?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||p<f!=o)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var d=[],c=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?c()|c():2==h?c()&c():h?i(h,r):!c())}return!!c()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},a=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,i){var o=c.I(r);return o&&o.then?o.then(e.bind(e,r,c.S[r],t,n,i)):e(0,c.S[r],t,n,i)})(((e,r,t,n,i)=>{var u=r&&c.o(r,t)&&o(r,t,n);return u?a(u):i()})),l={},s={231:()=>u("default","uuid",[1,8,3,2],(()=>c.e(614).then((()=>()=>c(614)))))},p={363:[231]},c.f.consumes=(e,r)=>{c.o(p,e)&&p[e].forEach((e=>{if(c.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,c.m[e]=t=>{delete c.c[e],t.exports=r()}},n=r=>{delete l[e],c.m[e]=t=>{throw delete c.c[e],r}};try{var i=s[e]();i.then?r.push(l[e]=i.then(t).catch(n)):t(i)}catch(e){n(e)}}))},(()=>{var e={554:0};c.f.j=(r,t)=>{var n=c.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(((t,i)=>n=e[r]=[t,i]));t.push(n[2]=i);var o=c.p+c.u(r),a=new Error;c.l(o,(t=>{if(c.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,i,o=t[0],a=t[1],u=t[2],l=0;for(n in a)c.o(a,n)&&(c.m[n]=a[n]);for(u&&u(c),r&&r(t);l<o.length;l++)i=o[l],c.o(e,i)&&e[i]&&e[i][0](),e[o[l]]=0},t=self.webpackChunk_genshin_utils_app_timer=self.webpackChunk_genshin_utils_app_timer||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h=c(752);app_timer=h})();