/*! For license information please see 722.js.LICENSE.txt */
(self.webpackChunk_genshin_utils_app_resin_meter=self.webpackChunk_genshin_utils_app_resin_meter||[]).push([[722],{62:(t,e)=>{e.z={AppProfile:"app_profile",AppRandomEventCounter:"app_random_event_counter",AppResinMeter:"app_resin_meter",AppTimer:"app_timer",Shell:"shell"}},722:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AppResinMeter:()=>Vt});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol();class r{constructor(t,e){if(e!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return s&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const o=new Map,a=t=>{let e=o.get(t);return void 0===e&&o.set(t,e=new r(t,n)),e},l=t=>a("string"==typeof t?t:t+""),h=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(t instanceof r)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return a(i)},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t;var p,d,u,v;const m={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:f};class b extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static Πp(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}Πj(t,e,i=g){var s,n;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:m.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var i,s,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:m.fromAttribute;this.Πh=o,this[o]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var y,w,S,x;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null===(d=(p=globalThis).reactiveElementPlatformSupport)||void 0===d||d.call(p,{ReactiveElement:b}),(null!==(u=(v=globalThis).reactiveElementVersions)&&void 0!==u?u:v.reactiveElementVersions=[]).push("1.0.0-rc.2");const k=globalThis.trustedTypes,_=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,$="?"+C,E=`<${$}>`,P=document,M=(t="")=>P.createComment(t),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,H=/'/g,j=/"/g,R=/^(?:script|style|textarea)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=D(1),B=D(2),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,q=P.createTreeWalker(P,129,null,!1);class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(o.lastIndex=c,l=o.exec(i),null!==l);)c=o.lastIndex,o===z?"!--"===l[1]?o=U:void 0!==l[1]?o=O:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=null!=n?n:z,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?N:'"'===l[3]?j:H):o===j||o===H?o=N:o===U||o===O?o=z:(o=N,n=void 0);const p=o===N&&t[e+1].startsWith("/>")?" ":"";r+=o===z?i+E:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+C+p):i+C+(-2===h?(s.push(void 0),e):p)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==_?_.createHTML(a):a,s]})(t,e);if(this.el=J.createElement(l,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(C)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(C),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?G:"@"===e[1]?Q:X})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),q.nextNode(),a.push({type:2,index:++n});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var n,r,o,a;if(e===L)return e;let l=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l.T(t,i,s)),void 0!==s?(null!==(o=(a=i).Σi)&&void 0!==o?o:a.Σi=[])[s]=l:i.Σo=l),void 0!==l&&(e=K(t,l.S(t,e.values),l,s)),e}class Z{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(i,!0);q.currentNode=n;let r=q.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new F(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this.l.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=q.nextNode(),o++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class F{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=K(this,t,e),T(t)?t===W||null==t||""===t?(this.H!==W&&this.R(),this.H=W):t!==this.H&&t!==L&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=J.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new Z(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}g(t){A(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new F(this.k(M()),this.k(M()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class X{constructor(t,e,i,s,n){this.type=1,this.H=W,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(W),this.strings=i):this.H=W}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!T(t)||t!==this.H&&t!==L,r&&(this.H=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=K(this,s[i+o],e,o),a===L&&(a=this.H[o]),r||(r=!T(a)||a!==this.H[o]),a===W?t=W:t!==W&&(t+=(null!=a?a:"")+n[o+1]),this.H[o]=a}r&&!s&&this.W(t)}W(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===W?void 0:t}}class G extends X{constructor(){super(...arguments),this.type=4}W(t){t&&t!==W?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Q extends X{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:W)===L)return;const s=this.H,n=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){K(this,t)}}var et,it,st,nt,rt,ot;null===(w=(y=globalThis).litHtmlPlatformSupport)||void 0===w||w.call(y,J,F),(null!==(S=(x=globalThis).litHtmlVersions)&&void 0!==S?S:x.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(et=(ot=globalThis).litElementVersions)&&void 0!==et?et:ot.litElementVersions=[]).push("3.0.0-rc.2");class at extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new F(e.insertBefore(M(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return L}}at.finalized=!0,at._$litElement$=!0,null===(st=(it=globalThis).litElementHydrateSupport)||void 0===st||st.call(it,{LitElement:at}),null===(rt=(nt=globalThis).litElementPlatformSupport)||void 0===rt||rt.call(nt,{LitElement:at});const lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ht(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}function ct(t){return ht({...t,state:!0,attribute:!1})}const pt=Element.prototype;pt.msMatchesSelector||pt.webkitMatchesSelector;const dt="last_snapshot",ut=160;var vt,mt,ft=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gt=(t,e,i)=>(ft(t,e,"read from private field"),i?i.call(t):e.get(t)),bt=(t,e,i,s)=>(ft(t,e,"write to private field"),s?s.call(t,i):e.set(t,i),i);class yt{constructor(t,e=1e3){this.value=new Date,vt.set(this,void 0),mt.set(this,void 0),this.host=t,this.host.addController(this),bt(this,vt,e)}hostConnected(){bt(this,mt,setInterval((()=>{this.value=new Date,this.host.requestUpdate()}),gt(this,vt)))}hostDisconnected(){gt(this,mt)&&(clearInterval(gt(this,mt)),bt(this,mt,void 0))}}vt=new WeakMap,mt=new WeakMap;var wt,St,xt=i(62),kt=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_t=(t,e,i)=>(kt(t,e,"read from private field"),i?i.call(t):e.get(t)),Ct=(t,e,i,s)=>(kt(t,e,"write to private field"),s?s.call(t,i):e.set(t,i),i);class $t{constructor(t){wt.set(this,{}),St.set(this,null),this.host=t,this.host.addController(this)}async store(t){const e=_t(this,wt)[t];if(e)return Promise.resolve(e);if(!_t(this,St))return new Promise(((e,i)=>{let s=0;const n=setInterval((()=>{if(_t(this,St))return e(this.store(t)),void clearInterval(n);s++>=100&&i(new Error("Timeout"))}),300)}));const i=new(_t(this,St))(t,"app_resin_meter");return _t(this,wt)[t]=i,i}async hostConnected(){const t=await async function(t){const e=await function(t){const e=document.createElement("script");return e.src=t,e.type="text/javascript",e.async=!0,new Promise(((i,s)=>{const n=()=>{document.head.removeChild(e)};e.onload=()=>{i(n)},e.onerror=()=>{s(new Error(`Failed to load remote entry: ${t}`)),n()},document.head.appendChild(e)}))}(JSON.parse('{"app_profile":"https://pocka.github.io/genshin-utils/profile/mfre.js","app_random_event_counter":"https://pocka.github.io/genshin-utils/random-event-counter/mfre.js","app_resin_meter":"https://pocka.github.io/genshin-utils/resin-meter/mfre.js","app_timer":"https://pocka.github.io/genshin-utils/timer/mfre.js","shell":"https://pocka.github.io/genshin-utils/shell/mfre.js"}')[t]);await i.I("default");const s=window[t];return await s.init(i.S.default),{getModule:(t=".")=>s.get(t).then((t=>t())),unloadRemoteEntry:e}}(xt.z.AppProfile),{Store:e}=await t.getModule("store");Ct(this,St,e)}hostDisconnected(){Ct(this,St,null),Ct(this,wt,{})}}function Et(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Pt(t){Et(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function Mt(t,e){Et(2,arguments);var i=Pt(t),s=Pt(e);return i.getTime()-s.getTime()}wt=new WeakMap,St=new WeakMap;var Tt=i(834);const At=[l(Tt),h`
    .layout {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
    }
  `],zt=(Ot=class extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach((t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.St.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return L}},(...t)=>({_$litDirective$:Ot,values:t})),Ut=[h`
    .resin-image {
      display: block;
      height: auto;
      width: 100%;

      user-select: none;
    }

    .resin-image-level {
      transition: transform 0.5s ease;
    }
  `];var Ot;const Nt=({currentTime:t,lastSnapshot:e,snapshotSaveError:i,onSave:s})=>{if("loading"===e.type)return I`<shell-loading />`;if("failed"===e.type)return I`<p>
      Failed to load from store: ${e.reason.message}
    </p>`;const n=t=>()=>{var i,n;s({remains:Math.max(0,Math.min(2e3,(null!=(n=null==(i=e.value)?void 0:i.remains)?n:ut)+t)),savedAt:new Date})},r=function(t,e){if(!t)return ut;if(!(t.remains<ut))return t.remains;const i=function(t,e){Et(2,arguments);var i=Mt(t,e)/1e3;return i>0?Math.floor(i):Math.ceil(i)}(e,t.savedAt);return Math.max(0,Math.min(ut,t.remains+Math.floor(i/480)))}(e.value,t);return o=I`
    ${i?I` <p>${i.message}</p> `:null}
    <div class="app-head">
      <p class="app-head-info">
        <span>Current Resin</span>
        <span class="app-current-resin">${r}</span>
      </p>
      ${a=Math.min(100,r/ut*100),B`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="resin-image"
      role="img"
      aria-label="Illustration of Original Resin"
    >
    <mask
      id="resin_shape"
    >
      <rect x="-1" y="-1" width="102" height="102" fill="white" />
      <path
        d="M73.5,78C50.8,78,31.8,59.7,31,37.1C30.6,24,36,12.2,44.9,4.1c0.7-0.7,0.2-1.9-0.8-1.7
		    C19.5,5.4,0.7,27,2.1,52.7c1.3,24.2,20.8,43.8,45,45.3c17.8,1.1,33.7-7.6,42.8-21.2c0.5-0.8-0.3-1.8-1.2-1.5C84,77,78.8,78,73.5,78z"
        fill="black"
      />
    </mask>
    <rect
      x="1"
      y="1"
      width="98"
      height="98"
      fill="var(--theme-bg-sub)"
    />
    <rect
      class="resin-image-level"
      style=${zt({transform:`translateY(${100-a}%)`})}
      x="1"
      y="1"
      width="98"
      height="98"
      fill="var(--theme-primary)"
    />
    <rect
      x="-1"
      y="-1"
      width="102"
      height="102"
      mask="url(#resin_shape)"
      fill="var(--theme-bg)"
    />
    </svg>
  `}
    </div>
    <div class="app-buttons">
      <button class="app-button app-button-circle" @click="${n(-10)}">
        <span>-10</span>
      </button>
      <button class="app-button app-button-circle" @click="${n(-20)}">
        <span>-20</span>
      </button>
      <button class="app-button app-button-circle" @click="${n(-30)}">
        <span>-30</span>
      </button>
      <button class="app-button app-button-circle" @click="${n(-40)}">
        <span>-40</span>
      </button>
      <button class="app-button app-button-circle" @click="${n(-60)}">
        <span>-60</span>
      </button>
      <button class="app-button" @click="${n(60)}">
        <span>+60</span>
      </button>
      <button class="app-button" @click="${()=>{var t,i;s({remains:Math.max(ut,null!=(i=null==(t=e.value)?void 0:t.remains)?i:ut),savedAt:new Date})}}">
        <span>MAX</span>
      </button>
    </div>
  `,I`
  <div class="layout">${o}</div>
`;var o,a},Ht=[...At,...Ut,h`
    shell-loading {
      position: fixed;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }

    .app-head {
      position: relative;
      width: 50vh;
      max-width: min(100%, 56rem);
      padding: 5.6rem;
    }

    .app-head-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: max(1.2rem, min(3vh, 1.8rem));
      position: absolute;
      top: 50%;
      left: 50%;

      text-shadow: 0 0 0.4em var(--theme-bg-sub);

      transform: translate(-50%, -50%);
    }

    .app-current-resin {
      font-size: 2.2em;
      font-weight: bold;
    }

    .app-buttons {
      --grid-size: 6.4rem;
      --grid-max-columns: 5;
      --grid-gap: 2.4rem;
      --padding: 0.8rem;

      display: grid;
      grid-template-columns: repeat(auto-fill, var(--grid-size));
      grid-auto-rows: var(--grid-size);
      gap: var(--grid-gap);
      justify-content: center;
      padding: var(--padding);
      width: 100%;
      max-width: calc(
        var(--grid-size) * var(--grid-max-columns) + var(--grid-gap) *
          (var(--grid-max-columns) - 1) + var(--padding) * 2
      );
      margin: 0 auto;
    }

    .app-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.2rem solid var(--theme-fg);
      font-size: 2rem;
      letter-spacing: -0.05em;

      border-radius: 0.2rem;
      color: var(--theme-fg);
      font-weight: bold;

      transition: transform 0.15s ease-out;
    }
    .app-button:focus,
    .app-button:hover {
      border-color: var(--theme-primary);
      color: var(--theme-primary);
    }
    .app-button:active {
      transform: scale(0.98);
    }

    .app-button-circle {
      border-radius: 50%;
    }
  `];var jt,Rt,Dt,It=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Lt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?Bt(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&It(e,i,r),r},Wt=(t,e,i)=>(((t,e,i)=>{if(!e.has(t))throw TypeError("Cannot read from private field")})(t,e),i?i.call(t):e.get(t));class Vt extends at{constructor(){super(),this.__lastSnapshot={type:"loading"},this.__snapshotSaveError=null,jt.set(this,new yt(this)),Rt.set(this,new $t(this)),Dt.set(this,(async t=>{this.__lastSnapshot={type:"loaded",value:t},this.__snapshotSaveError=null;try{if(!this.profile)throw new Error("No profiles found. Skipped saving.");const e=await Wt(this,Rt).store(this.profile.id);await e.save(dt,t)}catch(t){this.__snapshotSaveError=t}}))}willUpdate(t){t.has("profile")&&this.profile&&(this.__lastSnapshot={type:"loading"},Wt(this,Rt).store(this.profile.id).then((t=>t.load(dt))).then((t=>{this.__lastSnapshot={type:"loaded",value:t}})).catch((t=>{this.__lastSnapshot={type:"failed",reason:t}})))}render(){return Nt({currentTime:Wt(this,jt).value,lastSnapshot:this.__lastSnapshot,snapshotSaveError:this.__snapshotSaveError,onSave:Wt(this,Dt)})}}jt=new WeakMap,Rt=new WeakMap,Dt=new WeakMap,Vt.styles=Ht,Lt([ht({hasChanged:(t,e)=>JSON.stringify(t||null)!==JSON.stringify(e||null),type:Object})],Vt.prototype,"profile",2),Lt([ct()],Vt.prototype,"__lastSnapshot",2),Lt([ct()],Vt.prototype,"__snapshotSaveError",2)},834:t=>{"use strict";t.exports="/*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}address,blockquote,dl,figure,form,iframe,p,pre,table{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}ol,ul{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:initial;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:initial;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}embed,iframe,img,object{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}[type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}[type=radio]{-webkit-appearance:radio;appearance:radio}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{cursor:pointer;-webkit-appearance:none;appearance:none}[type=button][disabled],[type=reset][disabled],[type=submit][disabled],button[disabled]{cursor:default}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}select::-ms-expand{display:none}fieldset,option{padding:0}fieldset{margin:0;min-width:0}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:initial}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]{outline:none}table{border-collapse:collapse;border-spacing:0}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}[hidden],template{display:none}"}}]);