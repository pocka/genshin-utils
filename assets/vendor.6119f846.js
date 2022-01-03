var Hn=Object.defineProperty,Wn=Object.defineProperties;var Vn=Object.getOwnPropertyDescriptors;var Fr=Object.getOwnPropertySymbols;var Gn=Object.prototype.hasOwnProperty,Yn=Object.prototype.propertyIsEnumerable;var Zr=(o,t,e)=>t in o?Hn(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,ke=(o,t)=>{for(var e in t||(t={}))Gn.call(t,e)&&Zr(o,e,t[e]);if(Fr)for(var e of Fr(t))Yn.call(t,e)&&Zr(o,e,t[e]);return o},Be=(o,t)=>Wn(o,Vn(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Hr=new Map;class Wr{constructor(t,e){if(this._$cssResult$=!0,e!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Hr.get(this.cssText);return je&&t===void 0&&(Hr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Kn=o=>new Wr(typeof o=="string"?o:o+"",ze),L=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,l,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(l)+o[n+1],o[0]);return new Wr(e,ze)},Qn=(o,t)=>{je?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),l=window.litNonce;l!==void 0&&r.setAttribute("nonce",l),r.textContent=e.cssText,o.appendChild(r)})},Vr=je?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Kn(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const Gr=window.trustedTypes,Xn=Gr?Gr.emptyScript:"",Yr=window.reactiveElementPolyfillSupport,Fe={toAttribute(o,t){switch(t){case Boolean:o=o?Xn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Kr=(o,t)=>t!==o&&(t==t||o==o),Ze={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Kr};class mt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const l=this._$Eh(r,e);l!==void 0&&(this._$Eu.set(l,r),t.push(l))}),t}static createProperty(t,e=Ze){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,l=this.getPropertyDescriptor(t,r,e);l!==void 0&&Object.defineProperty(this.prototype,t,l)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(l){const n=this[t];this[e]=l,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ze}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const l of r)this.createProperty(l,e[l])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const l of r)e.unshift(Vr(l))}else t!==void 0&&e.push(Vr(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Ze){var l,n;const s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){const h=((n=(l=r.converter)===null||l===void 0?void 0:l.toAttribute)!==null&&n!==void 0?n:Fe.toAttribute)(e,r.type);this._$Ei=t,h==null?this.removeAttribute(s):this.setAttribute(s,h),this._$Ei=null}}_$AK(t,e){var r,l,n;const s=this.constructor,h=s._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){const T=s.getPropertyOptions(h),$=T.converter,j=(n=(l=(r=$)===null||r===void 0?void 0:r.fromAttribute)!==null&&l!==void 0?l:typeof $=="function"?$:null)!==null&&n!==void 0?n:Fe.fromAttribute;this._$Ei=h,this[h]=j(e,T.type),this._$Ei=null}}requestUpdate(t,e,r){let l=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Kr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):l=!1),!this.isUpdatePending&&l&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((l,n)=>this[n]=l),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(l=>{var n;return(n=l.hostUpdate)===null||n===void 0?void 0:n.call(l)}),this.update(r)):this._$EU()}catch(l){throw e=!1,this._$EU(),l}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var l;return(l=r.hostUpdated)===null||l===void 0?void 0:l.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},Yr==null||Yr({ReactiveElement:mt}),((Ue=globalThis.reactiveElementVersions)!==null&&Ue!==void 0?Ue:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He;const yt=globalThis.trustedTypes,Qr=yt?yt.createPolicy("lit-html",{createHTML:o=>o}):void 0,at=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+at,qn=`<${Xr}>`,wt=document,Mt=(o="")=>wt.createComment(o),Lt=o=>o===null||typeof o!="object"&&typeof o!="function",qr=Array.isArray,Jn=o=>{var t;return qr(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jr=/-->/g,to=/>/g,ht=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,eo=/'/g,ro=/"/g,oo=/^(?:script|style|textarea)$/i,no=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),k=no(1),O=no(2),st=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),io=new WeakMap,ti=(o,t,e)=>{var r,l;const n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let s=n._$litPart$;if(s===void 0){const h=(l=e==null?void 0:e.renderBefore)!==null&&l!==void 0?l:null;n._$litPart$=s=new jt(t.insertBefore(Mt(),h),h,void 0,e!=null?e:{})}return s._$AI(o),s},_t=wt.createTreeWalker(wt,129,null,!1),ei=(o,t)=>{const e=o.length-1,r=[];let l,n=t===2?"<svg>":"",s=kt;for(let T=0;T<e;T++){const $=o[T];let j,b,_=-1,R=0;for(;R<$.length&&(s.lastIndex=R,b=s.exec($),b!==null);)R=s.lastIndex,s===kt?b[1]==="!--"?s=Jr:b[1]!==void 0?s=to:b[2]!==void 0?(oo.test(b[2])&&(l=RegExp("</"+b[2],"g")),s=ht):b[3]!==void 0&&(s=ht):s===ht?b[0]===">"?(s=l!=null?l:kt,_=-1):b[1]===void 0?_=-2:(_=s.lastIndex-b[2].length,j=b[1],s=b[3]===void 0?ht:b[3]==='"'?ro:eo):s===ro||s===eo?s=ht:s===Jr||s===to?s=kt:(s=ht,l=void 0);const B=s===ht&&o[T+1].startsWith("/>")?" ":"";n+=s===kt?$+qn:_>=0?(r.push(j),$.slice(0,_)+"$lit$"+$.slice(_)+at+B):$+at+(_===-2?(r.push(void 0),T):B)}const h=n+(o[e]||"<?>")+(t===2?"</svg>":"");return[Qr!==void 0?Qr.createHTML(h):h,r]};class Bt{constructor({strings:t,_$litType$:e},r){let l;this.parts=[];let n=0,s=0;const h=t.length-1,T=this.parts,[$,j]=ei(t,e);if(this.el=Bt.createElement($,r),_t.currentNode=this.el.content,e===2){const b=this.el.content,_=b.firstChild;_.remove(),b.append(..._.childNodes)}for(;(l=_t.nextNode())!==null&&T.length<h;){if(l.nodeType===1){if(l.hasAttributes()){const b=[];for(const _ of l.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(at)){const R=j[s++];if(b.push(_),R!==void 0){const B=l.getAttribute(R.toLowerCase()+"$lit$").split(at),Y=/([.?@])?(.*)/.exec(R);T.push({type:1,index:n,name:Y[2],strings:B,ctor:Y[1]==="."?oi:Y[1]==="?"?ii:Y[1]==="@"?li:Kt})}else T.push({type:6,index:n})}for(const _ of b)l.removeAttribute(_)}if(oo.test(l.tagName)){const b=l.textContent.split(at),_=b.length-1;if(_>0){l.textContent=yt?yt.emptyScript:"";for(let R=0;R<_;R++)l.append(b[R],Mt()),_t.nextNode(),T.push({type:2,index:++n});l.append(b[_],Mt())}}}else if(l.nodeType===8)if(l.data===Xr)T.push({type:2,index:n});else{let b=-1;for(;(b=l.data.indexOf(at,b+1))!==-1;)T.push({type:7,index:n}),b+=at.length-1}n++}}static createElement(t,e){const r=wt.createElement("template");return r.innerHTML=t,r}}function xt(o,t,e=o,r){var l,n,s,h;if(t===st)return t;let T=r!==void 0?(l=e._$Cl)===null||l===void 0?void 0:l[r]:e._$Cu;const $=Lt(t)?void 0:t._$litDirective$;return(T==null?void 0:T.constructor)!==$&&((n=T==null?void 0:T._$AO)===null||n===void 0||n.call(T,!1),$===void 0?T=void 0:(T=new $(o),T._$AT(o,e,r)),r!==void 0?((s=(h=e)._$Cl)!==null&&s!==void 0?s:h._$Cl=[])[r]=T:e._$Cu=T),T!==void 0&&(t=xt(o,T._$AS(o,t.values),T,r)),t}class ri{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:l}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:wt).importNode(r,!0);_t.currentNode=n;let s=_t.nextNode(),h=0,T=0,$=l[0];for(;$!==void 0;){if(h===$.index){let j;$.type===2?j=new jt(s,s.nextSibling,this,t):$.type===1?j=new $.ctor(s,$.name,$.strings,this,t):$.type===6&&(j=new ai(s,this,t)),this.v.push(j),$=l[++T]}h!==($==null?void 0:$.index)&&(s=_t.nextNode(),h++)}return n}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class jt{constructor(t,e,r,l){var n;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=l,this._$Cg=(n=l==null?void 0:l.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Lt(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==st&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Jn(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&Lt(this._$AH)?this._$AA.nextSibling.data=t:this.S(wt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:l}=t,n=typeof l=="number"?this._$AC(t):(l.el===void 0&&(l.el=Bt.createElement(l.h,this.options)),l);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{const s=new ri(n,this),h=s.p(this.options);s.m(r),this.S(h),this._$AH=s}}_$AC(t){let e=io.get(t.strings);return e===void 0&&io.set(t.strings,e=new Bt(t)),e}M(t){qr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,l=0;for(const n of t)l===e.length?e.push(r=new jt(this.A(Mt()),this.A(Mt()),this,this.options)):r=e[l],r._$AI(n),l++;l<e.length&&(this._$AR(r&&r._$AB.nextSibling,l),e.length=l)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const l=t.nextSibling;t.remove(),t=l}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Kt{constructor(t,e,r,l,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=l,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,l){const n=this.strings;let s=!1;if(n===void 0)t=xt(this,t,e,0),s=!Lt(t)||t!==this._$AH&&t!==st,s&&(this._$AH=t);else{const h=t;let T,$;for(t=n[0],T=0;T<n.length-1;T++)$=xt(this,h[r+T],e,T),$===st&&($=this._$AH[T]),s||(s=!Lt($)||$!==this._$AH[T]),$===F?t=F:t!==F&&(t+=($!=null?$:"")+n[T+1]),this._$AH[T]=$}s&&!l&&this.k(t)}k(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class oi extends Kt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===F?void 0:t}}const ni=yt?yt.emptyScript:"";class ii extends Kt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==F?this.element.setAttribute(this.name,ni):this.element.removeAttribute(this.name)}}class li extends Kt{constructor(t,e,r,l,n){super(t,e,r,l,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=xt(this,t,e,0))!==null&&r!==void 0?r:F)===st)return;const l=this._$AH,n=t===F&&l!==F||t.capture!==l.capture||t.once!==l.once||t.passive!==l.passive,s=t!==F&&(l===F||n);n&&this.element.removeEventListener(this.name,this,l),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ai{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const lo=window.litHtmlPolyfillSupport;lo==null||lo(Bt,jt),((He=globalThis.litHtmlVersions)!==null&&He!==void 0?He:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We,Ve;class E extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ti(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return st}}E.finalized=!0,E._$litElement$=!0,(We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis,{LitElement:E});const ao=globalThis.litElementPolyfillSupport;ao==null||ao({LitElement:E});((Ve=globalThis.litElementVersions)!==null&&Ve!==void 0?Ve:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Be(ke({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function P(o){return(t,e)=>e!==void 0?((r,l,n)=>{l.constructor.createProperty(n,r)})(o,t,e):si(o,t)}const S=L`
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button,
  input,
  select {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
`;var so=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class Qt extends E{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[S,L`
        :host {
          --turtle-avatar--size: calc(4.8 * var(--turtle-ui--unit));

          display: inline-block;
          width: var(--turtle-avatar--size);
          height: var(--turtle-avatar--size);
          box-sizing: border-box;

          border-radius: 50%;
          overflow: hidden;
        }
        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        ::slotted(*),
        .placeholder {
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-sizing: border-box;
        }

        .placeholder-bg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }

        .placeholder-fg {
          fill: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }

        @media (prefers-color-scheme: dark) {
          .placeholder-fg {
            fill: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--6)
            );
          }
        }
      `]}render(){return k`
      <slot>
        <svg
          class="placeholder"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label=${this.placeholderAlt}
        >
          <g clip-path="url(#a)">
            <path class="placeholder-bg" d="M0 0h32v32H0z" />
            <path
              class="placeholder-fg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 20c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm0 23c6.0751 0 11-4.9249 11-11s-4.9249-11-11-11C9.92487 21 5 25.9249 5 32s4.92487 11 11 11Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      </slot>
    `}}Qt.defaultTagName="turtle-avatar";so([P({type:Boolean,reflect:!0})],Qt.prototype,"bordered",void 0);so([P({type:String,attribute:"placeholder-alt"})],Qt.prototype,"placeholderAlt",void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},uo=o=>(...t)=>({_$litDirective$:o,values:t});class co{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=uo(class extends co{constructor(o){var t;if(super(o),o.type!==Xt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const r in t)this.ut.add(r);return this.render(t)}this.ut.forEach(r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const l=t[r];l!=null&&(this.ut.add(r),r.includes("-")?e.setProperty(r,l):e[r]=l)}return st}});var vo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class qt extends E{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[S,L`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-balloon--bg: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.8
          );
          --turtle-balloon--tail-width: calc(1.3 * var(--turtle-ui--unit));
          --turtle-balloon--tail-height: calc(0.6 * var(--turtle-ui--unit));
          --turtle-balloon--radius: 4px;

          display: inline-flex;
          box-sizing: border-box;
        }
        :host([tail-position="bottom"]) {
          flex-direction: column;
        }
        :host([tail-position="top"]) {
          flex-direction: column-reverse;
        }
        :host([tail-position="right"]) {
          flex-direction: row;
        }
        :host([tail-position="left"]) {
          flex-direction: row-reverse;
        }

        .body {
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          padding: 8px;

          background-color: var(--turtle-balloon--bg);
          border-radius: var(--turtle-balloon--radius);
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
        }

        .tail {
          border: calc(var(--turtle-balloon--tail-width) * 0.5) solid
            transparent;
        }
        :host([tail-position="bottom"]) > .tail,
        :host([tail-position="top"]) > .tail {
          margin-left: calc(
            (
                100% - var(--turtle-balloon--tail-width) -
                  var(--turtle-balloon--radius) * 2
              ) * var(--turtle-balloon--tail-offset) +
              var(--turtle-balloon--radius) + var(--turtle-balloon--tail-width) *
              0.5
          );
          width: var(--turtle-balloon--tail-width);
          height: var(--turtle-balloon--tail-height);
          transform: translateX(-50%);
        }
        :host([tail-position="bottom"]) > .tail {
          border-top-color: var(--turtle-balloon--bg);
          border-bottom: none;
        }
        :host([tail-position="top"]) > .tail {
          border-bottom-color: var(--turtle-balloon--bg);
          border-top: none;
        }
        :host([tail-position="left"]) > .tail,
        :host([tail-position="right"]) > .tail {
          height: var(--turtle-balloon--tail-width);
          width: var(--turtle-balloon--tail-height);
          align-self: center;
        }
        :host([tail-position="left"]) > .tail {
          border-right-color: var(--turtle-balloon--bg);
          border-left: none;
        }
        :host([tail-position="right"]) > .tail {
          border-left-color: var(--turtle-balloon--bg);
          border-right: none;
        }
      `]}render(){return k`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${ho({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}qt.defaultTagName="turtle-balloon";vo([P({type:String,attribute:"tail-position"})],qt.prototype,"tailPosition",void 0);vo([P({type:Number,attribute:"tail-offset"})],qt.prototype,"tailOffset",void 0);var fo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Jt;class vt{constructor(t,e=""){this.assigned=!1,Jt.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",l=this.host.shadowRoot.querySelector(r);this.assigned=!!l&&l.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",fo(this,Jt,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",fo(this,Jt,"f"))}}Jt=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=o=>o!=null?o:F;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(o,t)=>{var e,r;const l=o._$AN;if(l===void 0)return!1;for(const n of l)(r=(e=n)._$AO)===null||r===void 0||r.call(e,t,!1),zt(n,t);return!0},te=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},po=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),hi(t)}};function ci(o){this._$AN!==void 0?(te(this),this._$AM=o,po(this)):this._$AM=o}function di(o,t=!1,e=0){const r=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(t)if(Array.isArray(r))for(let n=e;n<r.length;n++)zt(r[n],!1),te(r[n]);else r!=null&&(zt(r,!1),te(r));else zt(this,o)}const hi=o=>{var t,e,r,l;o.type==Xt.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=di),(e=(l=o)._$AQ)!==null&&e!==void 0||(l._$AQ=ci))};class vi extends co{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),po(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,l;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(l=this.disconnected)===null||l===void 0||l.call(this)),e&&(zt(this,t),te(this))}setValue(t){if(ui(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var ee=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},re=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},Tt,$t;class fi extends vi{constructor(t){super(t);if(Tt.set(this,null),$t.set(this,[]),t.type!==Xt.CHILD&&t.type!==Xt.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=ee(this,Tt,"f"))===null||r===void 0||r.call(this);const l="parentNode"in t?t.parentNode:t.element;if(!("tagName"in l)||l.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const n=()=>{ee(this,$t,"f").forEach(h=>h());const s=l.assignedElements();re(this,$t,s.map(e).filter(h=>!!h),"f")};return l.addEventListener("slotchange",n),re(this,Tt,()=>{l.removeEventListener("slotchange",n)},"f"),this.render(e)}render(t){return st}disconnected(){var t;(t=ee(this,Tt,"f"))===null||t===void 0||t.call(this),re(this,Tt,null,"f"),ee(this,$t,"f").forEach(e=>e()),re(this,$t,[],"f")}}Tt=new WeakMap,$t=new WeakMap;const ut=uo(fi);var bo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},go=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},Ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function Ft(o){var t,e,r;class l extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(s=>{!s[0]||go(this,t,mo(s[0].target),"f")})),r.set(this,s=>{!Ut(this,t,"f")||(s.preventDefault(),s.stopPropagation())})}renderLightDOMSlot(s){return k`<slot id="lightdom" class=${Ge(s)}>
        ${ut(h=>{if("getAttribute"in h)return go(this,t,mo(h),"f"),h.addEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").observe(h,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{h.removeEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,bo([P({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),bo([P({type:Boolean,attribute:"lightdom"})],l.prototype,"lightDOM",void 0),l}function mo(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var Ye=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},yo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},oe;class Zt extends Ft(E){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,oe.set(this,new vt(this,"icon"))}static get styles(){return[S,L`
        :host {
          --base-font-size: var(--turtle-ui--base-font-size, 1rem);
          --turtle-ui--button--border-color: var(--turtle-ui--color--border);
          --turtle-ui--button--fg: var(--turtle-ui--color--text);
          --turtle-ui--button--bg: var(--turtle-ui--color--background);
          --turtle-ui--button--bg--hover: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-ui--button--bg--active: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
          --turtle-ui--button--highlight-color: var(
            --turtle-ui--color--highlight
          );
          --turtle-ui--button--highlight-shadow-color: var(
            --turtle-ui--color--highlight--shadow
          );
          --turtle-button--base-radius: 8px;

          display: inline-block;
          font-size: var(--base-font-size);
          width: auto;
          box-sizing: border-box;
          position: relative;
        }
        :host([rounded]) {
          --turtle-button--base-radius: 40px;
        }

        :host([variant="primary"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--primary);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--primary--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--primary--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        :host([variant="danger"]) {
          --turtle-ui--button--border-color: transparent;
          --turtle-ui--button--fg: hsl(
            var(--turtle-ui--color--tone--mono),
            100%
          );
          --turtle-ui--button--bg: var(--turtle-ui--color--danger);
          --turtle-ui--button--bg--hover: var(
            --turtle-ui--color--danger--light
          );
          --turtle-ui--button--bg--active: var(
            --turtle-ui--color--danger--dark
          );
          --turtle-ui--button--highlight-color: rgba(0, 0, 0, 0.4);
          --turtle-ui--button--highlight-shadow-color: rgba(0, 0, 0, 0.4);
        }

        .button,
        :host([lightdom]) .lightdom::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          height: 100%;
          font: inherit;
          font-size: 1em;
          line-height: 1.5;
          border: 1px solid var(--turtle-ui--button--border-color);
          padding: calc(var(--base-font-size) / 2)
            calc(var(--base-font-size) * 0.75);
          box-sizing: border-box;

          background-color: var(--turtle-ui--button--bg);
          border-radius: var(
              --turtle-button--top-left-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--top-right-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--bottom-right-radius,
              var(--turtle-button--base-radius)
            )
            var(
              --turtle-button--bottom-left-radius,
              var(--turtle-button--base-radius)
            );
          color: var(--turtle-ui--button--fg);
          cursor: pointer;
          font-weight: bold;
          text-align: center;
          text-decoration: inherit;
        }
        .button.with-icon,
        :host([lightdom]) .lightdom.with-icon::slotted(*) {
          padding-inline-start: calc(4 * var(--turtle-ui--unit));
        }
        :host([icon-only]) .button.with-icon,
        :host([icon-only][lightdom]) .lightdom.with-icon::slotted(*) {
          font-size: 0;
          padding: calc(2 * var(--turtle-ui--unit));

          color: transparent;
        }
        .button:hover,
        :host([lightdom]) .lightdom::slotted(:hover) {
          background-color: var(--turtle-ui--button--bg--hover);
        }
        .button:active,
        :host([lightdom]) .lightdom::slotted(:active) {
          background-color: var(--turtle-ui--button--bg--active);
        }
        .button:focus,
        :host([lightdom]) .lightdom::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--button--highlight-shadow-color)
            inset;
          border-color: var(--turtle-ui--button--highlight-color);
          outline: none;
        }
        .button:disabled,
        :host([lightdom]) .lightdom::slotted(:disabled),
        :host([lightdom]) .lightdom::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }

        [data-hidden] {
          display: none;
        }

        .icon {
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          font-size: calc(2.4 * var(--turtle-ui--unit));
          display: flex;
          justify-content: center;
          align-items: center;

          color: var(--turtle-ui--button--fg);
          pointer-events: none;
        }
        :host([icon-only]) .icon {
          left: 0;
          right: 0;
        }
      `]}render(){const t=yo(this,oe,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):k`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return k`
      ${e}

      <span class="icon" ?data-hidden=${!yo(this,oe,"f").assigned}>
        <slot name="icon"></slot>
      </span>
    `}}oe=new WeakMap;Zt.defaultTagName="turtle-button";Ye([P({type:String})],Zt.prototype,"variant",void 0);Ye([P({type:Boolean,reflect:!0})],Zt.prototype,"rounded",void 0);Ye([P({type:Boolean,reflect:!0,attribute:"icon-only"})],Zt.prototype,"iconOnly",void 0);var pi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class Ke extends E{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[S,L`
        :host {
          display: inline-flex;
        }
        :host([evenly]) {
          align-items: stretch;
        }
        :host([evenly]) ::slotted(*) {
          flex: 1;
        }

        ::slotted(:not(:last-child)) {
          --turtle-button--top-right-radius: 0;
          --turtle-button--bottom-right-radius: 0;
        }
        ::slotted(:not(:first-child)) {
          --turtle-button--top-left-radius: 0;
          --turtle-button--bottom-left-radius: 0;
        }
      `]}render(){return k` <slot></slot> `}}Ke.defaultTagName="turtle-button-group";pi([P({type:Boolean,reflect:!0})],Ke.prototype,"evenly",void 0);var wo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},_o=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Qe,Xe;class ne extends E{constructor(){super(...arguments);Qe.set(this,new vt(this,"action")),Xe.set(this,new vt(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[S,L`
        :host {
          --turtle-ui--card--radius: 8px;

          display: block;
          border-radius: var(--turtle-ui--card--radius);

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          overflow: hidden;
        }

        :host([shadowed]) {
          box-shadow: var(--turtle-ui--shadow--1);
        }

        :host([bordered]) {
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        .image-sizer {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: min(56.875%, 30vh);
        }
        .image-sizer:not([assigned]) {
          display: none;
        }

        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          overflow: hidden;
        }

        ::slotted([slot="image"]) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .body {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: normal;
        }

        ::slotted([slot="title"]) {
          display: block;
          font-size: calc(1.8 * var(--turtle-ui--unit));
          line-height: 1.78;
          margin-bottom: calc(0.8 * var(--turtle-ui--unit));

          font-weight: bold;
        }

        .actions {
          display: flex;
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        .actions:not([assigned]) {
          display: none;
        }

        ::slotted([slot="action"]:not(:first-of-type)) {
          border-left: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        ::slotted([slot="action"]:first-of-type) {
          border-bottom-left-radius: var(--turtle-ui--card--radius);
        }
        ::slotted([slot="action"]:last-of-type) {
          border-bottom-right-radius: var(--turtle-ui--card--radius);
        }
      `]}render(){return k`
      <div class="image-sizer" ?assigned=${_o(this,Xe,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${_o(this,Qe,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}Qe=new WeakMap,Xe=new WeakMap;ne.defaultTagName="turtle-card";wo([P({type:Boolean,attribute:"shadowed",reflect:!0})],ne.prototype,"shadowed",void 0);wo([P({type:Boolean,attribute:"bordered",reflect:!0})],ne.prototype,"bordered",void 0);class xo extends Ft(E){static get styles(){return[S,L`
        :host {
          flex: 1;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          border: none;
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: inherit;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          font-weight: normal;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow) inset;
        }
        .button:disabled,
        ::slotted(:disabled),
        ::slotted([aria-disabled="true"]) {
          box-shadow: none;
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():k`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}xo.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(o){return P(Be(ke({},o),{state:!0}))}var To=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},tt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ie,Et,At;class le extends E{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,ie.set(this,new MutationObserver(t=>{!t[0]||tt(this,Et,"f").call(this,t[0].target)})),Et.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),At.set(this,t=>{tt(this,Et,"f").call(this,t.currentTarget)})}static get styles(){return[S,L`
        * {
          box-sizing: border-box;
        }

        :host {
          display: inline-block;
          position: relative;
          width: calc(2 * var(--turtle-ui--unit));
          height: calc(2 * var(--turtle-ui--unit));

          vertical-align: text-bottom;
        }

        ::slotted(input) {
          appearance: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: calc(0.4 * var(--turtle-ui--unit));
        }
        ::slotted(input:checked),
        ::slotted(input:indeterminate) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:not(:disabled):checked:hover),
        ::slotted(input:not(:disabled):indeterminate:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:hover),
        ::slotted(input:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
          outline: none;
        }
        ::slotted(input:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .icon {
          display: none;
          position: absolute;
          width: calc(1.2 * var(--turtle-ui--unit));
          height: calc(1.2 * var(--turtle-ui--unit));
          top: 50%;
          left: 50%;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(-50%, -50%);
        }
        .icon[data-active] {
          display: block;
        }
        .icon[data-disabled] {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){return k`
      <slot
        >${ut(t=>{if("checked"in t)return tt(this,Et,"f").call(this,t),t.addEventListener("change",tt(this,At,"f")),t.addEventListener("input",tt(this,At,"f")),tt(this,ie,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{tt(this,Et,"f").call(this,t)},()=>{t.removeEventListener("change",tt(this,At,"f")),t.removeEventListener("input",tt(this,At,"f")),tt(this,ie,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${bi}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${gi}
      </svg>
    `}}ie=new WeakMap,Et=new WeakMap,At=new WeakMap;le.defaultTagName="turtle-checkbox";To([J()],le.prototype,"_checkState",void 0);To([J()],le.prototype,"_disabled",void 0);const bi=O`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,gi=O`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`;var ae=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},qe=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!l:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(o,e):l?l.value=e:t.set(o,e),e},Z=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},nt,ct,St,se,ue,Je,tr;class Ct extends E{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,nt.set(this,null),ct.set(this,0),this._listbox=null,this._options=[],St.set(this,t=>{var e,r;if(this.noAutoAria||(qe(this,ct,t,"f"),!Z(this,nt,"f")))return;if(!this._options.length){Z(this,nt,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((n,s)=>{s===t?n.setAttribute("aria-selected","true"):n.removeAttribute("aria-selected")});const l=this._options[t];if(!(l==null?void 0:l.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&l.scrollIntoView(),Z(this,nt,"f").setAttribute("aria-activedescendant",l.id)}),se.set(this,()=>{if(this.noAutoAria||!Z(this,nt,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),Z(this,nt,"f").setAttribute("aria-controls",this._listbox.id)}),ue.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":Z(this,Je,"f").call(this),t.preventDefault();return;case"Escape":Z(this,tr,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=Z(this,ct,"f")<=0?this._options.length-1:Z(this,ct,"f")-1;Z(this,St,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=Z(this,ct,"f")>=this._options.length-1?0:Z(this,ct,"f")+1;Z(this,St,"f").call(this,e),t.preventDefault();return}}}),Je.set(this,(t=Z(this,ct,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),tr.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[S,L`
        :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          padding: 16px;
          box-sizing: border-box;
          max-height: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--9)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .searchbox {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .search::slotted(*) {
          appearance: none;
          display: block;
          flex: 1;
          min-width: 0;
          padding: 8px 12px;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          font: inherit;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          outline: none;
        }
        .search::slotted(*:hover),
        .search::slotted(*:focus) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        .search::slotted(*:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .search::slotted(input)::placeholder {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );

          opacity: 1;
        }

        .icon::slotted(*),
        [part="icon"] {
          flex-shrink: 0;
          width: calc(3.2 * var(--turtle-ui--unit));
          height: calc(3.2 * var(--turtle-ui--unit));
          margin: 4px 0;
          margin-inline-end: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }

        .listbox::slotted(*) {
          margin-top: 16px;
          flex-shrink: 1;
        }

        .placeholder::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 16px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          text-align: center;
        }

        [data-hidden]::slotted(*) {
          display: none;
        }
      `]}render(){return k`
      <div class="searchbox">
        <slot class="icon" name="icon">${mi}</slot>
        <slot class="search" name="search"
          >${ut(t=>{if("disabled"in t)return qe(this,nt,t,"f"),Z(this,se,"f").call(this),t.addEventListener("keydown",Z(this,ue,"f")),()=>{qe(this,nt,null,"f"),t.removeEventListener("keydown",Z(this,ue,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${ut(t=>{var e;this._listbox=t,this._options=Array.from(t.children),Z(this,se,"f").call(this),Z(this,St,"f").call(this,0);const r=()=>{Z(this,St,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const l=n=>{if(!n.target||!("getAttribute"in n.target))return;const h=n.target.closest("turtle-command-palette-option");h&&h.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",l),()=>{var n;this._listbox=null,this._options=[],(n=t.shadowRoot)===null||n===void 0||n.removeEventListener("slotchange",r),t.removeEventListener("click",l)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}nt=new WeakMap,ct=new WeakMap,St=new WeakMap,se=new WeakMap,ue=new WeakMap,Je=new WeakMap,tr=new WeakMap;Ct.defaultTagName="turtle-command-palette";ae([P({type:String,reflect:!0})],Ct.prototype,"role",void 0);ae([P({type:Boolean,attribute:"noautoaria"})],Ct.prototype,"noAutoAria",void 0);ae([J()],Ct.prototype,"_listbox",void 0);ae([J()],Ct.prototype,"_options",void 0);const mi=O`
  <svg part="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var yi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},$o=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ce;class er extends E{constructor(){super(...arguments);this.role="listbox",ce.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[S,L`
        :host {
          --turtle-command-palette-listbox--radius: 8px;

          display: block;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          border-radius: var(--turtle-command-palette-listbox--radius);
          overflow-y: auto;
        }
        :host([empty]) {
          display: none;
        }

        ::slotted(:first-child) {
          border-top-left-radius: var(--turtle-command-palette-listbox--radius);
          border-top-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(:last-child) {
          border-bottom-left-radius: var(
            --turtle-command-palette-listbox--radius
          );
          border-bottom-right-radius: var(
            --turtle-command-palette-listbox--radius
          );
        }
        ::slotted(*:not(:first-child)) {
          border-top: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
      `]}connectedCallback(){super.connectedCallback(),$o(this,ce,"f").call(this)}render(){return k`<slot @slotchange=${$o(this,ce,"f")}></slot>`}}ce=new WeakMap;er.defaultTagName="turtle-command-palette-listbox";yi([P({type:String,reflect:!0})],er.prototype,"role",void 0);var wi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class rr extends E{constructor(){super(...arguments);this.role="option"}static get styles(){return[S,L`
        :host {
          display: block;
          padding: 12px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
        }
        :host([aria-selected="true"]) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9),
            0.5
          );
        }
        :host(:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        :host(:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .title {
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .description::slotted(*) {
          display: block;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin: 0;
          margin-top: 4px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
        }
      `]}render(){return k`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}rr.defaultTagName="turtle-command-palette-option";wi([P({type:String,reflect:!0})],rr.prototype,"role",void 0);var _i=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class or extends E{static get styles(){return L`
      :host {
        --turtle-ui--unit: 10px;
        --turtle-ui--base-font-size: calc(1.6 * var(--turtle-ui--unit));

        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--color--level--safe: 34%;
        --turtle-ui--color--level--danger: 44%;
        --turtle-ui--color--level--primary: 40%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
        --turtle-ui--level--modifier--amount: 16%;

        --turtle-ui--color--tone--mono: 0, 0%;
        --turtle-ui--color--tone--safe: 123, 46%;
        --turtle-ui--color--tone--warning: 43, 96%;
        --turtle-ui--color--tone--danger: 14, 100%;
        --turtle-ui--color--tone--primary: 204, 100%;

        --turtle-ui--color--background: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--10)
        );
        --turtle-ui--color--text: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--0)
        );
        --turtle-ui--color--border: hsl(
          var(--turtle-ui--color--tone--mono),
          var(--turtle-ui--color--level--7)
        );
        --turtle-ui--color--safe: hsl(
          var(--turtle-ui--color--tone--safe),
          var(--turtle-ui--color--level--safe)
        );
        --turtle-ui--color--safe--light: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--safe--dark: hsl(
          var(--turtle-ui--color--tone--safe),
          calc(
            var(--turtle-ui--color--level--safe) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--primary--light: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--primary--dark: hsl(
          var(--turtle-ui--color--tone--primary),
          calc(
            var(--turtle-ui--color--level--primary) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger: hsl(
          var(--turtle-ui--color--tone--danger),
          var(--turtle-ui--color--level--danger)
        );
        --turtle-ui--color--danger--light: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--lighter) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--danger--dark: hsl(
          var(--turtle-ui--color--tone--danger),
          calc(
            var(--turtle-ui--color--level--danger) +
              (
                var(--turtle-ui--level--modifier--darker) *
                  var(--turtle-ui--level--modifier--amount)
              )
          )
        );
        --turtle-ui--color--highlight: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary)
        );
        --turtle-ui--color--highlight--shadow: hsl(
          var(--turtle-ui--color--tone--primary),
          var(--turtle-ui--color--level--primary),
          0.32
        );

        --turtle-ui--shadow--1: 0px 4px 16px rgba(0, 0, 0, 0.08);
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --turtle-ui--color--level--0: 100%;
          --turtle-ui--color--level--1: 92%;
          --turtle-ui--color--level--2: 84%;
          --turtle-ui--color--level--3: 76%;
          --turtle-ui--color--level--4: 68%;
          --turtle-ui--color--level--5: 60%;
          --turtle-ui--color--level--6: 52%;
          --turtle-ui--color--level--7: 44%;
          --turtle-ui--color--level--8: 36%;
          --turtle-ui--color--level--9: 28%;
          --turtle-ui--color--level--10: 20%;
          --turtle-ui--level--modifier--darker: 1;
          --turtle-ui--level--modifier--lighter: -1;
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: 0%;
        --turtle-ui--color--level--1: 10%;
        --turtle-ui--color--level--2: 20%;
        --turtle-ui--color--level--3: 30%;
        --turtle-ui--color--level--4: 40%;
        --turtle-ui--color--level--5: 50%;
        --turtle-ui--color--level--6: 60%;
        --turtle-ui--color--level--7: 70%;
        --turtle-ui--color--level--8: 80%;
        --turtle-ui--color--level--9: 90%;
        --turtle-ui--color--level--10: 100%;
        --turtle-ui--level--modifier--darker: -1;
        --turtle-ui--level--modifier--lighter: 1;
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: 100%;
        --turtle-ui--color--level--1: 92%;
        --turtle-ui--color--level--2: 84%;
        --turtle-ui--color--level--3: 76%;
        --turtle-ui--color--level--4: 68%;
        --turtle-ui--color--level--5: 60%;
        --turtle-ui--color--level--6: 52%;
        --turtle-ui--color--level--7: 44%;
        --turtle-ui--color--level--8: 36%;
        --turtle-ui--color--level--9: 28%;
        --turtle-ui--color--level--10: 20%;
        --turtle-ui--level--modifier--darker: 1;
        --turtle-ui--level--modifier--lighter: -1;
      }

      :host {
        display: block;
        font-family: "Ubuntu", sans-serif;

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `}render(){return k`<slot></slot>`}}or.defaultTagName="turtle-design-system";_i([P({type:String,reflect:!0})],or.prototype,"theme",void 0);var xi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},Pt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Rt,de;class nr extends E{constructor(){super(...arguments);this._elementState="neutral",Rt.set(this,t=>{Pt(this,de,"f").call(this,t.currentTarget)}),de.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[S,L`
        :host {
          display: inline-block;
        }

        .label::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          margin-block-end: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          font-weight: bold;
        }

        .item::slotted(*) {
          width: 100%;
        }

        .description::slotted(*) {
          display: block;
          box-sizing: border-box;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          margin-block-start: 8px;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
        .invalid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        .valid::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
      `]}render(){return k`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${ut(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return Pt(this,de,"f").call(this,t),t.addEventListener("validitychange",Pt(this,Rt,"f")),t.addEventListener("fieldtouch",Pt(this,Rt,"f")),()=>{t.removeEventListener("validitychange",Pt(this,Rt,"f")),t.removeEventListener("fieldtouch",Pt(this,Rt,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}Rt=new WeakMap,de=new WeakMap;nr.defaultTagName="turtle-form-field";xi([J()],nr.prototype,"_elementState",void 0);class Eo extends E{static get styles(){return[S,L`
        :host {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          gap: 8px;
        }

        .label::slotted(*) {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
        }
      `]}render(){return k`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}Eo.defaultTagName="turtle-labelled-item";class Ao extends E{static get styles(){return[S,L`
        :host {
          --turtle-list--radius: 8px;

          box-sizing: border-box;
          display: inline-grid;
          grid-template-columns: minmax(100%, 1fr);
          grid-template-rows: min-content;
          gap: 1px;
          align-items: stretch;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          border-radius: var(--turtle-list--radius);
          overflow: hidden;
        }
      `]}render(){return k` <slot></slot> `}}Ao.defaultTagName="turtle-list";var So=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ir,lr;class Co extends Ft(E){constructor(){super(...arguments);ir.set(this,new vt(this,"icon-start")),lr.set(this,new vt(this,"icon-end"))}static get styles(){return[S,L`
        :host {
          --turtle-list-item--icon-size: calc(2.4 * var(--turtle-ui--unit));
          --turtle-list-item--padding: 12px;
          --turtle-list-item--gap: 8px;

          display: block;
          position: relative;
          box-sizing: border-box;
        }

        .button,
        .body-slot::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          min-height: calc(
            2.4 * var(--turtle-ui--unit) + var(--turtle-list-item--padding) * 2
          );
          padding: var(--turtle-list-item--padding);
          font-size: calc(1.6 * var(--turtle-ui--unit));
          line-height: 1.5;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          cursor: pointer;
          text-align: start;
          text-decoration: none;
          outline: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .button:hover,
        .body-slot::slotted(*:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
        }
        .button:active,
        .body-slot::slotted(*:active) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--8)
          );
        }
        .button:focus,
        .body-slot::slotted(*:focus) {
          box-shadow: inset 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.16
            );
        }
        .button:disabled,
        .body-slot::slotted(:disabled),
        .body-slot::slotted([aria-disabled="true"]) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          box-shadow: none;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          cursor: not-allowed;
        }
        :host(:first-child) .button,
        :host(:first-child) .body-slot::slotted(*) {
          border-radius: var(--turtle-list--radius) var(--turtle-list--radius) 0
            0;
        }
        :host(:last-child) .button,
        :host(:last-child) .body-slot::slotted(*) {
          border-radius: 0 0 var(--turtle-list--radius)
            var(--turtle-list--radius);
        }

        .icon-start,
        .icon-start::slotted(*) {
          padding-inline-start: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        .icon-end,
        .icon-end::slotted(*) {
          padding-inline-end: calc(
            var(--turtle-list-item--padding) +
              var(--turtle-list-item--icon-size) + var(--turtle-list-item--gap)
          );
        }

        [name="icon-start"]::slotted(*),
        [name="icon-end"]::slotted(*) {
          position: absolute;
          top: 50%;
          font-size: var(--turtle-list-item--icon-size);

          color: inherit;
          pointer-events: none;

          transform: translateY(-50%);
        }

        [name="icon-start"]::slotted(*) {
          left: var(--turtle-list-item--padding);
        }
        [name="icon-end"]::slotted(*) {
          right: var(--turtle-list-item--padding);
        }

        :host([disabled]) [name^="icon-"]::slotted(*) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){const t=["body-slot",So(this,ir,"f").assigned?"icon-start":"",So(this,lr,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):k`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return k`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}ir=new WeakMap,lr=new WeakMap;Co.defaultTagName="turtle-list-item";var Ti=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ar;class Po extends E{constructor(){super(...arguments);ar.set(this,new vt(this,"image"))}static get styles(){return[S,L`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-notification--radius: 8px;

          display: flex;
          width: 100%;
          box-sizing: border-box;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;

          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.8
          );
          border-radius: var(--turtle-notification--radius);
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          overflow: hidden;
        }

        .body {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 8px;
        }

        .text {
          flex: 1;
          margin: 8px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          overflow: hidden;
          text-overflow: ellipsis;
        }

        .image {
          width: calc(4 * var(--turtle-ui--unit));
          height: calc(4 * var(--turtle-ui--unit));
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          font-size: calc(2.4 * var(--turtle-ui--unit));

          border-radius: 4px;
          overflow: hidden;
        }
        .image[data-hidden] {
          display: none;
        }

        [name="image"]::slotted(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .actions {
          flex-grow: 0;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          border-inline-start: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }

        ::slotted([slot="action"]) {
          border-block-start: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
        }
        ::slotted([slot="action"]:only-of-type) {
          flex-grow: 1;
        }
        ::slotted([slot="action"]:first-of-type) {
          --turtle-notification-action--top-right-radius: var(
            --turtle-notification--radius
          );
          border-block-start: none;
        }
        ::slotted([slot="action"]:last-of-type) {
          --turtle-notification-action--bottom-right-radius: var(
            --turtle-notification--radius
          );
        }
      `]}render(){return k`
      <div class="body">
        <div class="image" ?data-hidden=${!Ti(this,ar,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}ar=new WeakMap;Po.defaultTagName="turtle-notification";class Ro extends Ft(E){static get styles(){return[S,L`
        :host {
          box-sizing: border-box;
          display: inline-flex;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px;
          font: inherit;
          font-size: calc(1.2 * var(--turtle-ui--unit));
          line-height: 1.33;
          border: none;
          box-sizing: border-box;

          background-color: transparent;
          border-radius: 0
            var(--turtle-notification-action--top-right-radius, 0)
            var(--turtle-notification-action--bottom-right-radius, 0) 0;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          cursor: pointer;
          outline: none;
          text-align: center;
          text-decoration: none;
          user-select: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.08
          );
        }
        .button:active,
        ::slotted(:active) {
          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0),
            0.16
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4),
              0.32
            )
            inset;
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():k`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Ro.defaultTagName="turtle-notification-action";class Oo extends E{static get styles(){return[S,L`
        :host {
          display: inline-flex;
          width: calc(2 * var(--turtle-ui--unit));
          height: calc(2 * var(--turtle-ui--unit));
          justify-content: center;
          align-items: center;
          box-sizing: border-box;

          vertical-align: text-bottom;
        }

        ::slotted(input) {
          --inner-shadow-color: transparent;

          -webkit-appearance: none;
          appearance: none;
          display: block;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 50%;
          box-shadow: 0 0 0 0.45rem var(--inner-shadow-color) inset;
          outline: none;
        }
        ::slotted(input:checked) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:hover) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:checked:hover) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 0.45rem var(--inner-shadow-color) inset,
            0 0 0 0.4rem
              hsla(
                var(--turtle-ui--color--tone--primary),
                var(--turtle-ui--color--level--4),
                0.16
              );
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
          outline: none;
        }
        ::slotted(input:disabled) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
        ::slotted(input:checked:disabled) {
          --inner-shadow-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){return k`<slot></slot>`}}Oo.defaultTagName="turtle-radio-button";var he=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},ft=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ve,fe,Ht;function pe(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class pt extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,ve.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&ft(this,Ht,"f").call(this,t[0].target)})),fe.set(this,t=>{ft(this,Ht,"f").call(this,t.currentTarget)}),Ht.set(this,t=>{const e=pe(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[S,L`
        :host {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
        }

        .wrapper {
          display: inherit;
          width: 100%;
        }

        ::slotted(input),
        ::slotted(select) {
          --border-color: var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7);
          --right-offset: calc(4px + 2.4 * var(--turtle-ui--unit));

          appearance: none;
          width: 100%;
          border: 1px solid hsl(var(--border-color));
          padding: 8px;
          padding-right: calc(8px + var(--right-offset));
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          outline: none;
        }
        ::slotted(input:placeholder) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
        ::slotted(input:focus),
        ::slotted(select:focus) {
          --border-color: var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4);

          box-shadow: 0 0 0 4px hsla(var(--border-color), 0.16);
        }
        ::slotted(input:disabled),
        ::slotted(select:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        :host([novalidity]) ::slotted(input),
        :host([novalidity]) ::slotted(select) {
          --right-offset: 0;
        }

        :host([touched]:not([novalidity])) ::slotted(input:not(:disabled)),
        :host([touched]:not([novalidity])) ::slotted(select:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="false"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="false"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3);
        }

        :host([touched]:not([novalidity])) ::slotted(:invalid:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(select[aria-invalid="true"]:not(:disabled)),
        :host([touched]:not([novalidity]))
          ::slotted(input[aria-invalid="true"]:not(:disabled)) {
          --border-color: var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4);
        }

        .indicator {
          display: none;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + 1.2 * var(--turtle-ui--unit));
          width: calc(1.4 * var(--turtle-ui--unit));
          height: calc(1.4 * var(--turtle-ui--unit));
          font-size: calc(0.7 * var(--turtle-ui--unit));

          border-radius: 50%;
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          pointer-events: none;

          transform: translate(50%, -50%);
        }

        .valid {
          background-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }

        @keyframes shake {
          0%,
          100% {
            transform: translate(50%, -50%);
          }

          20%,
          60% {
            transform: translate(50%, -50%) translateX(-8%);
          }

          40%,
          80% {
            transform: translate(50%, -50%) translateX(8%);
          }
        }
        .invalid {
          background-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );

          animation: 0.3s 0s 1 ease-in shake;
        }
        :host([touched]:not([novalidity]))
          > [data-invalid="false"]:not([data-disabled])
          > .valid,
        :host([touched]:not([novalidity]))
          > [data-invalid="true"]:not([data-disabled])
          > .invalid {
          display: flex;
        }

        .icon {
          width: 1em;
          height: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .invalid {
            animation: none;
          }
        }
      `]}get isValid(){return!!this._isElementValid}render(){var t;return k`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${ut(e=>{if("validity"in e)return ft(this,Ht,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",ft(this,fe,"f")),e.addEventListener("focusout",this.touch),ft(this,ve,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",ft(this,fe,"f")),e.removeEventListener("focusout",this.touch),ft(this,ve,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${No}</div>
        <div class="indicator invalid" aria-hidden="true">${Io}</div>
      </div>
    `}}ve=new WeakMap,fe=new WeakMap,Ht=new WeakMap;pt.defaultTagName="turtle-textbox";he([P({type:Boolean,reflect:!0})],pt.prototype,"touched",void 0);he([P({type:Boolean,attribute:"novalidity"})],pt.prototype,"noValidity",void 0);he([J()],pt.prototype,"_isElementValid",void 0);he([J()],pt.prototype,"_disabled",void 0);const No=O`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Io=O`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var be=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},ge=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},me,ye;class Ot extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,me.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=pe(t[0].target))})),ye.set(this,t=>{this._isElementValid=pe(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...pt.styles,L`
        :host {
          --caret-size: calc(1.6 * var(--turtle-ui--unit));
          --caret-padding: 4px;
          --caret-total-shift: (var(--caret-size) + var(--caret-padding) * 2);
        }

        ::slotted(select) {
          --right-offset: calc(
            4px + 2.4 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }
        :host([novalidity]) ::slotted(select) {
          --right-offset: calc(4px + var(--caret-total-shift));
        }

        .indicator {
          right: calc(
            8px + 1.2 * var(--turtle-ui--unit) + var(--caret-total-shift)
          );
        }

        .caret {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          right: calc(8px + var(--caret-padding));
          width: var(--caret-size);
          height: var(--caret-size);
          font-size: var(--caret-size);

          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          pointer-events: none;

          transform: translate(0, -50%);
        }

        .wrapper[data-disabled] > .caret {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){var t;return k`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${ut(e=>{if("validity"in e)return this._isElementValid=pe(e),this._disabled=e.disabled,e.addEventListener("input",ge(this,ye,"f")),e.addEventListener("focusout",this.touch),ge(this,me,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",ge(this,ye,"f")),e.removeEventListener("focusout",this.touch),ge(this,me,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${No}</div>
        <div class="indicator invalid" aria-hidden="true">${Io}</div>

        <div class="caret" aria-hidden="true">${$i}</div>
      </div>
    `}}me=new WeakMap,ye=new WeakMap;Ot.defaultTagName="turtle-selectbox";be([P({type:Boolean,reflect:!0})],Ot.prototype,"touched",void 0);be([P({type:Boolean,attribute:"novalidity"})],Ot.prototype,"noValidity",void 0);be([J()],Ot.prototype,"_isElementValid",void 0);be([J()],Ot.prototype,"_disabled",void 0);const $i=O`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var Ei=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};function Ai(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return Ei([P({type:Boolean})],t.prototype,"autofocus",void 0),t}var sr=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},Do=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ur,cr;class Wt extends Ai(E){constructor(){super(...arguments);ur.set(this,new vt(this,"action")),this.severity="info",cr.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[S,L`
        * {
          box-sizing: border-box;
        }

        :host {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--9);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--10);
          --turtle-snackbar--fg-tone: var(--turtle-ui--color--tone--mono);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--0);
          --turtle-snackbar--focus-tone: var(--turtle-ui--color--tone--primary);
          --turtle-snackbar--focus-level: var(--turtle-ui--color--level--4);

          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          padding: 8px 12px;
          margin: 0;
          gap: 4px;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 8px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
        }
        :host([severity="success"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--safe);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--3);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--4);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="warning"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--warning);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--5);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--6);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host([severity="danger"]) {
          --turtle-snackbar--bg-tone: var(--turtle-ui--color--tone--danger);
          --turtle-snackbar--bg-level: var(--turtle-ui--color--level--4);
          --turtle-snackbar--bg-level-hover: var(--turtle-ui--color--level--7);
          --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          --turtle-snackbar--focus-tone: var(--turtle-snackbar--bg-tone);
          --turtle-snackbar--focus-level: var(--turtle-snackbar--bg-level);
        }
        :host(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--focus-tone),
              var(--turtle-snackbar--focus-level),
              0.3
            );
          outline: none;
        }

        @media (prefers-color-scheme: dark) {
          :host([severity="warning"]) {
            --turtle-snackbar--fg-level: var(--turtle-ui--color--level--10);
          }
        }

        .body {
          flex: 1;
        }

        .lifetime {
          width: auto;
          height: calc(1.8 * var(--turtle-ui--unit));

          fill: none;
          stroke: currentColor;
          stroke-width: 50;
          stroke-dasharray: 10;

          animation: linear both live;
          transform: rotate(90deg) scaleX(-1);
        }
        @keyframes live {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: 10;
          }
        }

        .actions {
          display: none;
          justify-content: flex-end;
          align-items: stretch;
          gap: 4px;
        }
        .actions[data-assigned] {
          display: flex;
        }
      `]}render(){return k`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?O`
        <svg
          class="lifetime"
          style=${ho({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${Ge(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${Ge(this.lifetimeLabel)}
          @animationend=${Do(this,cr,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:F}

      <div class="actions" ?data-assigned=${Do(this,ur,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}ur=new WeakMap,cr=new WeakMap;Wt.defaultTagName="turtle-snackbar";sr([P({type:String,reflect:!0})],Wt.prototype,"severity",void 0);sr([P({type:Number})],Wt.prototype,"lifetime",void 0);sr([P({type:String,attribute:"lifetime-label"})],Wt.prototype,"lifetimeLabel",void 0);class Mo extends Ft(E){static get styles(){return[S,L`
        :host {
          box-sizing: border-box;
        }

        .button,
        ::slotted(*) {
          appearance: none;
          display: block;
          width: 100%;
          margin: 0;
          padding: 0 calc(0.2 * var(--turtle-ui--unit));
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          border: none;
          box-sizing: border-box;

          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level)
          );
          border-radius: 2px;
          color: hsl(
            var(--turtle-snackbar--fg-tone),
            var(--turtle-snackbar--fg-level)
          );
          cursor: pointer;
          outline: none;
        }
        .button:hover,
        ::slotted(:hover) {
          background-color: hsl(
            var(--turtle-snackbar--bg-tone),
            var(--turtle-snackbar--bg-level-hover)
          );
        }
        .button:focus,
        ::slotted(:focus) {
          box-shadow: 0 0 0 4px
            hsla(
              var(--turtle-snackbar--fg-tone),
              var(--turtle-snackbar--fg-level),
              0.16
            );
        }
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():k`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Mo.defaultTagName="turtle-snackbar-action";var Lo=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n},we=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},_e,xe;class Te extends E{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,_e.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),xe.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[S,L`
        :host {
          position: relative;
          display: inline-flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        ::slotted(input) {
          -webkit-appearance: none;
          appearance: none;
          width: calc(4 * var(--turtle-ui--unit));
          height: calc(2.4 * var(--turtle-ui--unit));
          margin: 0;
          padding: 0;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          box-sizing: border-box;

          background: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-radius: calc(4 * var(--turtle-ui--unit));
        }
        ::slotted(input:checked) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:hover) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        ::slotted(input:checked:hover) {
          background-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--6)
          );
        }
        ::slotted(input:focus) {
          box-shadow: 0 0 0 4px var(--turtle-ui--color--highlight--shadow);
          outline: none;
        }
        ::slotted(input:disabled:disabled) {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          border-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        .knob {
          display: block;
          position: absolute;
          width: calc(1.8 * var(--turtle-ui--unit));
          height: calc(1.8 * var(--turtle-ui--unit));
          top: 50%;
          left: calc(0.3 * var(--turtle-ui--unit));
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: 50%;
          pointer-events: none;

          transform: translateY(-50%);
          transition: transform 0.3s ease;
        }
        .knob[data-checked] {
          transform: translate(100%, -50%)
            translateX(calc(-0.6 * var(--turtle-ui--unit)));
        }

        @media (prefers-color-scheme: dark) {
          .knob {
            background-color: hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--2)
            );
          }
        }

        .knob[data-disabled] {
          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .knob {
            transition: none;
          }
        }
      `]}render(){return k`
      <slot>
        ${ut(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",we(this,xe,"f")),we(this,_e,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",we(this,xe,"f")),we(this,_e,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}_e=new WeakMap,xe=new WeakMap;Te.defaultTagName="turtle-toggle-switch";Lo([J()],Te.prototype,"_checked",void 0);Lo([J()],Te.prototype,"_disabled",void 0);const G=L`
  :host {
    display: inline-flex;
    width: auto;
    height: 1em;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: inherit;
    height: inherit;

    color: inherit;
  }
`;var Si=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class dr extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[S,G,L`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}dr.defaultTagName="turtle-angle-icon";Si([P({type:String,reflect:!0})],dr.prototype,"direction",void 0);var Ci=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class hr extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[S,G,L`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}hr.defaultTagName="turtle-arrow-icon";Ci([P({type:String,reflect:!0})],hr.prototype,"direction",void 0);var Pi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class vr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}vr.defaultTagName="turtle-attention-icon";Pi([P({type:Boolean})],vr.prototype,"outlined",void 0);class ko extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}ko.defaultTagName="turtle-brand-icon";class Bo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Bo.defaultTagName="turtle-check-icon";var Ri=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class fr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}fr.defaultTagName="turtle-circle-check-icon";Ri([P({type:Boolean})],fr.prototype,"outlined",void 0);var Oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class pr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}pr.defaultTagName="turtle-circle-cross-icon";Oi([P({type:Boolean})],pr.prototype,"outlined",void 0);var Ni=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class br extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}br.defaultTagName="turtle-circle-minus-icon";Ni([P({type:Boolean})],br.prototype,"outlined",void 0);var Ii=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class gr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}gr.defaultTagName="turtle-circle-plus-icon";Ii([P({type:Boolean})],gr.prototype,"outlined",void 0);class jo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}jo.defaultTagName="turtle-cross-icon";class zo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}zo.defaultTagName="turtle-dots-icon";var Di=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class mr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}mr.defaultTagName="turtle-heart-icon";Di([P({type:Boolean})],mr.prototype,"outlined",void 0);var Mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class yr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}yr.defaultTagName="turtle-info-icon";Mi([P({type:Boolean})],yr.prototype,"outlined",void 0);class Uo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Uo.defaultTagName="turtle-minus-icon";class Fo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}Fo.defaultTagName="turtle-plus-icon";var Li=globalThis&&globalThis.__decorate||function(o,t,e,r){var l=arguments.length,n=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(n=(l<3?s(n):l>3?s(t,e,n):s(t,e))||n);return l>3&&n&&Object.defineProperty(t,e,n),n};class wr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?O`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}wr.defaultTagName="turtle-question-icon";Li([P({type:Boolean})],wr.prototype,"outlined",void 0);class Zo extends E{static get styles(){return[S,G]}render(){return O`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}Zo.defaultTagName="turtle-reload-icon";const ki=[dr,hr,vr,ko,Bo,fr,pr,br,gr,jo,zo,mr,yr,Uo,Fo,wr,Zo],Ui=[Qt,qt,Zt,Ke,ne,xo,le,Ct,er,rr,or,nr,Eo,Ao,Co,Po,Ro,Oo,Ot,Wt,Mo,pt,Te,...ki];function Fi(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var $e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ee(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bi={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(r,l,n){function s($,j){if(!l[$]){if(!r[$]){var b=typeof Ee=="function"&&Ee;if(!j&&b)return b($,!0);if(h)return h($,!0);var _=new Error("Cannot find module '"+$+"'");throw _.code="MODULE_NOT_FOUND",_}var R=l[$]={exports:{}};r[$][0].call(R.exports,function(B){var Y=r[$][1][B];return s(Y||B)},R,R.exports,e,r,l,n)}return l[$].exports}for(var h=typeof Ee=="function"&&Ee,T=0;T<n.length;T++)s(n[T]);return s}({1:[function(e,r,l){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,h;if(s){var T=0,$=new s(B),j=n.document.createTextNode("");$.observe(j,{characterData:!0}),h=function(){j.data=T=++T%2}}else if(!n.setImmediate&&typeof n.MessageChannel!="undefined"){var b=new n.MessageChannel;b.port1.onmessage=B,h=function(){b.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?h=function(){var H=n.document.createElement("script");H.onreadystatechange=function(){B(),H.onreadystatechange=null,H.parentNode.removeChild(H),H=null},n.document.documentElement.appendChild(H)}:h=function(){setTimeout(B,0)};var _,R=[];function B(){_=!0;for(var H,et,W=R.length;W;){for(et=R,R=[],H=-1;++H<W;)et[H]();W=R.length}_=!1}r.exports=Y;function Y(H){R.push(H)===1&&!_&&h()}}).call(this,typeof $e!="undefined"?$e:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(e,r,l){var n=e(1);function s(){}var h={},T=["REJECTED"],$=["FULFILLED"],j=["PENDING"];r.exports=b;function b(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=j,this.queue=[],this.outcome=void 0,w!==s&&Y(this,w)}b.prototype.catch=function(w){return this.then(null,w)},b.prototype.then=function(w,N){if(typeof w!="function"&&this.state===$||typeof N!="function"&&this.state===T)return this;var C=new this.constructor(s);if(this.state!==j){var M=this.state===$?w:N;R(C,M,this.outcome)}else this.queue.push(new _(C,w,N));return C};function _(w,N,C){this.promise=w,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){R(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){h.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){R(this.promise,this.onRejected,w)};function R(w,N,C){n(function(){var M;try{M=N(C)}catch(V){return h.reject(w,V)}M===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,M)})}h.resolve=function(w,N){var C=H(B,N);if(C.status==="error")return h.reject(w,C.value);var M=C.value;if(M)Y(w,M);else{w.state=$,w.outcome=N;for(var V=-1,K=w.queue.length;++V<K;)w.queue[V].callFulfilled(N)}return w},h.reject=function(w,N){w.state=T,w.outcome=N;for(var C=-1,M=w.queue.length;++C<M;)w.queue[C].callRejected(N);return w};function B(w){var N=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof N=="function")return function(){N.apply(w,arguments)}}function Y(w,N){var C=!1;function M(X){C||(C=!0,h.reject(w,X))}function V(X){C||(C=!0,h.resolve(w,X))}function K(){N(V,M)}var Q=H(K);Q.status==="error"&&M(Q.value)}function H(w,N){var C={};try{C.value=w(N),C.status="success"}catch(M){C.status="error",C.value=M}return C}b.resolve=et;function et(w){return w instanceof this?w:h.resolve(new this(s),w)}b.reject=W;function W(w){var N=new this(s);return h.reject(N,w)}b.all=Ae;function Ae(w){var N=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,M=!1;if(!C)return this.resolve([]);for(var V=new Array(C),K=0,Q=-1,X=new this(s);++Q<C;)rt(w[Q],Q);return X;function rt(Nt,Vt){N.resolve(Nt).then(Se,function(bt){M||(M=!0,h.reject(X,bt))});function Se(bt){V[Vt]=bt,++K===C&&!M&&(M=!0,h.resolve(X,V))}}}b.race=dt;function dt(w){var N=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,M=!1;if(!C)return this.resolve([]);for(var V=-1,K=new this(s);++V<C;)Q(w[V]);return K;function Q(X){N.resolve(X).then(function(rt){M||(M=!0,h.resolve(K,rt))},function(rt){M||(M=!0,h.reject(K,rt))})}}},{"1":1}],3:[function(e,r,l){(function(n){typeof n.Promise!="function"&&(n.Promise=e(2))}).call(this,typeof $e!="undefined"?$e:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(e,r,l){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};function s(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function h(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var T=h();function $(){try{if(!T||!T.open)return!1;var i=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),u=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!i||u)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function j(i,u){i=i||[],u=u||{};try{return new Blob(i,u)}catch(c){if(c.name!=="TypeError")throw c;for(var a=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,d=new a,v=0;v<i.length;v+=1)d.append(i[v]);return d.getBlob(u.type)}}typeof Promise=="undefined"&&e(3);var b=Promise;function _(i,u){u&&i.then(function(a){u(null,a)},function(a){u(a)})}function R(i,u,a){typeof u=="function"&&i.then(u),typeof a=="function"&&i.catch(a)}function B(i){return typeof i!="string"&&(console.warn(i+" used as a key, but it is not a string."),i=String(i)),i}function Y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var H="local-forage-detect-blob-support",et=void 0,W={},Ae=Object.prototype.toString,dt="readonly",w="readwrite";function N(i){for(var u=i.length,a=new ArrayBuffer(u),d=new Uint8Array(a),v=0;v<u;v++)d[v]=i.charCodeAt(v);return a}function C(i){return new b(function(u){var a=i.transaction(H,w),d=j([""]);a.objectStore(H).put(d,"key"),a.onabort=function(v){v.preventDefault(),v.stopPropagation(),u(!1)},a.oncomplete=function(){var v=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);u(c||!v||parseInt(v[1],10)>=43)}}).catch(function(){return!1})}function M(i){return typeof et=="boolean"?b.resolve(et):C(i).then(function(u){return et=u,et})}function V(i){var u=W[i.name],a={};a.promise=new b(function(d,v){a.resolve=d,a.reject=v}),u.deferredOperations.push(a),u.dbReady?u.dbReady=u.dbReady.then(function(){return a.promise}):u.dbReady=a.promise}function K(i){var u=W[i.name],a=u.deferredOperations.pop();if(a)return a.resolve(),a.promise}function Q(i,u){var a=W[i.name],d=a.deferredOperations.pop();if(d)return d.reject(u),d.promise}function X(i,u){return new b(function(a,d){if(W[i.name]=W[i.name]||xr(),i.db)if(u)V(i),i.db.close();else return a(i.db);var v=[i.name];u&&v.push(i.version);var c=T.open.apply(T,v);u&&(c.onupgradeneeded=function(f){var p=c.result;try{p.createObjectStore(i.storeName),f.oldVersion<=1&&p.createObjectStore(H)}catch(g){if(g.name==="ConstraintError")console.warn('The database "'+i.name+'" has been upgraded from version '+f.oldVersion+" to version "+f.newVersion+', but the storage "'+i.storeName+'" already exists.');else throw g}}),c.onerror=function(f){f.preventDefault(),d(c.error)},c.onsuccess=function(){var f=c.result;f.onversionchange=function(p){p.target.close()},a(f),K(i)}})}function rt(i){return X(i,!1)}function Nt(i){return X(i,!0)}function Vt(i,u){if(!i.db)return!0;var a=!i.db.objectStoreNames.contains(i.storeName),d=i.version<i.db.version,v=i.version>i.db.version;if(d&&(i.version!==u&&console.warn('The database "'+i.name+`" can't be downgraded from version `+i.db.version+" to version "+i.version+"."),i.version=i.db.version),v||a){if(a){var c=i.db.version+1;c>i.version&&(i.version=c)}return!0}return!1}function Se(i){return new b(function(u,a){var d=new FileReader;d.onerror=a,d.onloadend=function(v){var c=btoa(v.target.result||"");u({__local_forage_encoded_blob:!0,data:c,type:i.type})},d.readAsBinaryString(i)})}function bt(i){var u=N(atob(i.data));return j([u],{type:i.type})}function _r(i){return i&&i.__local_forage_encoded_blob}function Ho(i){var u=this,a=u._initReady().then(function(){var d=W[u._dbInfo.name];if(d&&d.dbReady)return d.dbReady});return R(a,i,i),a}function Wo(i){V(i);for(var u=W[i.name],a=u.forages,d=0;d<a.length;d++){var v=a[d];v._dbInfo.db&&(v._dbInfo.db.close(),v._dbInfo.db=null)}return i.db=null,rt(i).then(function(c){return i.db=c,Vt(i)?Nt(i):c}).then(function(c){i.db=u.db=c;for(var f=0;f<a.length;f++)a[f]._dbInfo.db=c}).catch(function(c){throw Q(i,c),c})}function ot(i,u,a,d){d===void 0&&(d=1);try{var v=i.db.transaction(i.storeName,u);a(null,v)}catch(c){if(d>0&&(!i.db||c.name==="InvalidStateError"||c.name==="NotFoundError"))return b.resolve().then(function(){if(!i.db||c.name==="NotFoundError"&&!i.db.objectStoreNames.contains(i.storeName)&&i.version<=i.db.version)return i.db&&(i.version=i.db.version+1),Nt(i)}).then(function(){return Wo(i).then(function(){ot(i,u,a,d-1)})}).catch(a);a(c)}}function xr(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Vo(i){var u=this,a={db:null};if(i)for(var d in i)a[d]=i[d];var v=W[a.name];v||(v=xr(),W[a.name]=v),v.forages.push(u),u._initReady||(u._initReady=u.ready,u.ready=Ho);var c=[];function f(){return b.resolve()}for(var p=0;p<v.forages.length;p++){var g=v.forages[p];g!==u&&c.push(g._initReady().catch(f))}var m=v.forages.slice(0);return b.all(c).then(function(){return a.db=v.db,rt(a)}).then(function(y){return a.db=y,Vt(a,u._defaultConfig.version)?Nt(a):y}).then(function(y){a.db=v.db=y,u._dbInfo=a;for(var x=0;x<m.length;x++){var A=m[x];A!==u&&(A._dbInfo.db=a.db,A._dbInfo.version=a.version)}})}function Go(i,u){var a=this;i=B(i);var d=new b(function(v,c){a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var g=p.objectStore(a._dbInfo.storeName),m=g.get(i);m.onsuccess=function(){var y=m.result;y===void 0&&(y=null),_r(y)&&(y=bt(y)),v(y)},m.onerror=function(){c(m.error)}}catch(y){c(y)}})}).catch(c)});return _(d,u),d}function Yo(i,u){var a=this,d=new b(function(v,c){a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var g=p.objectStore(a._dbInfo.storeName),m=g.openCursor(),y=1;m.onsuccess=function(){var x=m.result;if(x){var A=x.value;_r(A)&&(A=bt(A));var I=i(A,x.key,y++);I!==void 0?v(I):x.continue()}else v()},m.onerror=function(){c(m.error)}}catch(x){c(x)}})}).catch(c)});return _(d,u),d}function Ko(i,u,a){var d=this;i=B(i);var v=new b(function(c,f){var p;d.ready().then(function(){return p=d._dbInfo,Ae.call(u)==="[object Blob]"?M(p.db).then(function(g){return g?u:Se(u)}):u}).then(function(g){ot(d._dbInfo,w,function(m,y){if(m)return f(m);try{var x=y.objectStore(d._dbInfo.storeName);g===null&&(g=void 0);var A=x.put(g,i);y.oncomplete=function(){g===void 0&&(g=null),c(g)},y.onabort=y.onerror=function(){var I=A.error?A.error:A.transaction.error;f(I)}}catch(I){f(I)}})}).catch(f)});return _(v,a),v}function Qo(i,u){var a=this;i=B(i);var d=new b(function(v,c){a.ready().then(function(){ot(a._dbInfo,w,function(f,p){if(f)return c(f);try{var g=p.objectStore(a._dbInfo.storeName),m=g.delete(i);p.oncomplete=function(){v()},p.onerror=function(){c(m.error)},p.onabort=function(){var y=m.error?m.error:m.transaction.error;c(y)}}catch(y){c(y)}})}).catch(c)});return _(d,u),d}function Xo(i){var u=this,a=new b(function(d,v){u.ready().then(function(){ot(u._dbInfo,w,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),g=p.clear();f.oncomplete=function(){d()},f.onabort=f.onerror=function(){var m=g.error?g.error:g.transaction.error;v(m)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function qo(i){var u=this,a=new b(function(d,v){u.ready().then(function(){ot(u._dbInfo,dt,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),g=p.count();g.onsuccess=function(){d(g.result)},g.onerror=function(){v(g.error)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function Jo(i,u){var a=this,d=new b(function(v,c){if(i<0){v(null);return}a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var g=p.objectStore(a._dbInfo.storeName),m=!1,y=g.openKeyCursor();y.onsuccess=function(){var x=y.result;if(!x){v(null);return}i===0||m?v(x.key):(m=!0,x.advance(i))},y.onerror=function(){c(y.error)}}catch(x){c(x)}})}).catch(c)});return _(d,u),d}function tn(i){var u=this,a=new b(function(d,v){u.ready().then(function(){ot(u._dbInfo,dt,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),g=p.openKeyCursor(),m=[];g.onsuccess=function(){var y=g.result;if(!y){d(m);return}m.push(y.key),y.continue()},g.onerror=function(){v(g.error)}}catch(y){v(y)}})}).catch(v)});return _(a,i),a}function en(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var d=this,v;if(!i.name)v=b.reject("Invalid arguments");else{var c=i.name===a.name&&d._dbInfo.db,f=c?b.resolve(d._dbInfo.db):rt(i).then(function(p){var g=W[i.name],m=g.forages;g.db=p;for(var y=0;y<m.length;y++)m[y]._dbInfo.db=p;return p});i.storeName?v=f.then(function(p){if(!!p.objectStoreNames.contains(i.storeName)){var g=p.version+1;V(i);var m=W[i.name],y=m.forages;p.close();for(var x=0;x<y.length;x++){var A=y[x];A._dbInfo.db=null,A._dbInfo.version=g}var I=new b(function(D,U){var z=T.open(i.name,g);z.onerror=function(q){var Dt=z.result;Dt.close(),U(q)},z.onupgradeneeded=function(){var q=z.result;q.deleteObjectStore(i.storeName)},z.onsuccess=function(){var q=z.result;q.close(),D(q)}});return I.then(function(D){m.db=D;for(var U=0;U<y.length;U++){var z=y[U];z._dbInfo.db=D,K(z._dbInfo)}}).catch(function(D){throw(Q(i,D)||b.resolve()).catch(function(){}),D})}}):v=f.then(function(p){V(i);var g=W[i.name],m=g.forages;p.close();for(var y=0;y<m.length;y++){var x=m[y];x._dbInfo.db=null}var A=new b(function(I,D){var U=T.deleteDatabase(i.name);U.onerror=function(){var z=U.result;z&&z.close(),D(U.error)},U.onblocked=function(){console.warn('dropInstance blocked for database "'+i.name+'" until all open connections are closed')},U.onsuccess=function(){var z=U.result;z&&z.close(),I(z)}});return A.then(function(I){g.db=I;for(var D=0;D<m.length;D++){var U=m[D];K(U._dbInfo)}}).catch(function(I){throw(Q(i,I)||b.resolve()).catch(function(){}),I})})}return _(v,u),v}var rn={_driver:"asyncStorage",_initStorage:Vo,_support:$(),iterate:Yo,getItem:Go,setItem:Ko,removeItem:Qo,clear:Xo,length:qo,key:Jo,keys:tn,dropInstance:en};function on(){return typeof openDatabase=="function"}var it="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nn="~~local_forage_type~",Tr=/^~~local_forage_type~([^~]+)~/,Gt="__lfsc__:",Ce=Gt.length,Pe="arbf",Re="blob",$r="si08",Er="ui08",Ar="uic8",Sr="si16",Cr="si32",Pr="ur16",Rr="ui32",Or="fl32",Nr="fl64",Ir=Ce+Pe.length,Dr=Object.prototype.toString;function Mr(i){var u=i.length*.75,a=i.length,d,v=0,c,f,p,g;i[i.length-1]==="="&&(u--,i[i.length-2]==="="&&u--);var m=new ArrayBuffer(u),y=new Uint8Array(m);for(d=0;d<a;d+=4)c=it.indexOf(i[d]),f=it.indexOf(i[d+1]),p=it.indexOf(i[d+2]),g=it.indexOf(i[d+3]),y[v++]=c<<2|f>>4,y[v++]=(f&15)<<4|p>>2,y[v++]=(p&3)<<6|g&63;return m}function Oe(i){var u=new Uint8Array(i),a="",d;for(d=0;d<u.length;d+=3)a+=it[u[d]>>2],a+=it[(u[d]&3)<<4|u[d+1]>>4],a+=it[(u[d+1]&15)<<2|u[d+2]>>6],a+=it[u[d+2]&63];return u.length%3==2?a=a.substring(0,a.length-1)+"=":u.length%3==1&&(a=a.substring(0,a.length-2)+"=="),a}function ln(i,u){var a="";if(i&&(a=Dr.call(i)),i&&(a==="[object ArrayBuffer]"||i.buffer&&Dr.call(i.buffer)==="[object ArrayBuffer]")){var d,v=Gt;i instanceof ArrayBuffer?(d=i,v+=Pe):(d=i.buffer,a==="[object Int8Array]"?v+=$r:a==="[object Uint8Array]"?v+=Er:a==="[object Uint8ClampedArray]"?v+=Ar:a==="[object Int16Array]"?v+=Sr:a==="[object Uint16Array]"?v+=Pr:a==="[object Int32Array]"?v+=Cr:a==="[object Uint32Array]"?v+=Rr:a==="[object Float32Array]"?v+=Or:a==="[object Float64Array]"?v+=Nr:u(new Error("Failed to get type for BinaryArray"))),u(v+Oe(d))}else if(a==="[object Blob]"){var c=new FileReader;c.onload=function(){var f=nn+i.type+"~"+Oe(this.result);u(Gt+Re+f)},c.readAsArrayBuffer(i)}else try{u(JSON.stringify(i))}catch(f){console.error("Couldn't convert value into a JSON string: ",i),u(null,f)}}function an(i){if(i.substring(0,Ce)!==Gt)return JSON.parse(i);var u=i.substring(Ir),a=i.substring(Ce,Ir),d;if(a===Re&&Tr.test(u)){var v=u.match(Tr);d=v[1],u=u.substring(v[0].length)}var c=Mr(u);switch(a){case Pe:return c;case Re:return j([c],{type:d});case $r:return new Int8Array(c);case Er:return new Uint8Array(c);case Ar:return new Uint8ClampedArray(c);case Sr:return new Int16Array(c);case Pr:return new Uint16Array(c);case Cr:return new Int32Array(c);case Rr:return new Uint32Array(c);case Or:return new Float32Array(c);case Nr:return new Float64Array(c);default:throw new Error("Unkown type: "+a)}}var Ne={serialize:ln,deserialize:an,stringToBuffer:Mr,bufferToString:Oe};function Lr(i,u,a,d){i.executeSql("CREATE TABLE IF NOT EXISTS "+u.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],a,d)}function sn(i){var u=this,a={db:null};if(i)for(var d in i)a[d]=typeof i[d]!="string"?i[d].toString():i[d];var v=new b(function(c,f){try{a.db=openDatabase(a.name,String(a.version),a.description,a.size)}catch(p){return f(p)}a.db.transaction(function(p){Lr(p,a,function(){u._dbInfo=a,c()},function(g,m){f(m)})},f)});return a.serializer=Ne,v}function lt(i,u,a,d,v,c){i.executeSql(a,d,v,function(f,p){p.code===p.SYNTAX_ERR?f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[u.storeName],function(g,m){m.rows.length?c(g,p):Lr(g,u,function(){g.executeSql(a,d,v,c)},c)},c):c(f,p)},c)}function un(i,u){var a=this;i=B(i);var d=new b(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){lt(p,f,"SELECT * FROM "+f.storeName+" WHERE key = ? LIMIT 1",[i],function(g,m){var y=m.rows.length?m.rows.item(0).value:null;y&&(y=f.serializer.deserialize(y)),v(y)},function(g,m){c(m)})})}).catch(c)});return _(d,u),d}function cn(i,u){var a=this,d=new b(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){lt(p,f,"SELECT * FROM "+f.storeName,[],function(g,m){for(var y=m.rows,x=y.length,A=0;A<x;A++){var I=y.item(A),D=I.value;if(D&&(D=f.serializer.deserialize(D)),D=i(D,I.key,A+1),D!==void 0){v(D);return}}v()},function(g,m){c(m)})})}).catch(c)});return _(d,u),d}function kr(i,u,a,d){var v=this;i=B(i);var c=new b(function(f,p){v.ready().then(function(){u===void 0&&(u=null);var g=u,m=v._dbInfo;m.serializer.serialize(u,function(y,x){x?p(x):m.db.transaction(function(A){lt(A,m,"INSERT OR REPLACE INTO "+m.storeName+" (key, value) VALUES (?, ?)",[i,y],function(){f(g)},function(I,D){p(D)})},function(A){if(A.code===A.QUOTA_ERR){if(d>0){f(kr.apply(v,[i,g,a,d-1]));return}p(A)}})})}).catch(p)});return _(c,a),c}function dn(i,u,a){return kr.apply(this,[i,u,a,1])}function hn(i,u){var a=this;i=B(i);var d=new b(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){lt(p,f,"DELETE FROM "+f.storeName+" WHERE key = ?",[i],function(){v()},function(g,m){c(m)})})}).catch(c)});return _(d,u),d}function vn(i){var u=this,a=new b(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){lt(f,c,"DELETE FROM "+c.storeName,[],function(){d()},function(p,g){v(g)})})}).catch(v)});return _(a,i),a}function fn(i){var u=this,a=new b(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){lt(f,c,"SELECT COUNT(key) as c FROM "+c.storeName,[],function(p,g){var m=g.rows.item(0).c;d(m)},function(p,g){v(g)})})}).catch(v)});return _(a,i),a}function pn(i,u){var a=this,d=new b(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){lt(p,f,"SELECT key FROM "+f.storeName+" WHERE id = ? LIMIT 1",[i+1],function(g,m){var y=m.rows.length?m.rows.item(0).key:null;v(y)},function(g,m){c(m)})})}).catch(c)});return _(d,u),d}function bn(i){var u=this,a=new b(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){lt(f,c,"SELECT key FROM "+c.storeName,[],function(p,g){for(var m=[],y=0;y<g.rows.length;y++)m.push(g.rows.item(y).key);d(m)},function(p,g){v(g)})})}).catch(v)});return _(a,i),a}function gn(i){return new b(function(u,a){i.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(v,c){for(var f=[],p=0;p<c.rows.length;p++)f.push(c.rows.item(p).name);u({db:i,storeNames:f})},function(v,c){a(c)})},function(d){a(d)})})}function mn(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var d=this,v;return i.name?v=new b(function(c){var f;i.name===a.name?f=d._dbInfo.db:f=openDatabase(i.name,"","",0),i.storeName?c({db:f,storeNames:[i.storeName]}):c(gn(f))}).then(function(c){return new b(function(f,p){c.db.transaction(function(g){function m(I){return new b(function(D,U){g.executeSql("DROP TABLE IF EXISTS "+I,[],function(){D()},function(z,q){U(q)})})}for(var y=[],x=0,A=c.storeNames.length;x<A;x++)y.push(m(c.storeNames[x]));b.all(y).then(function(){f()}).catch(function(I){p(I)})},function(g){p(g)})})}):v=b.reject("Invalid arguments"),_(v,u),v}var yn={_driver:"webSQLStorage",_initStorage:sn,_support:on(),iterate:cn,getItem:un,setItem:dn,removeItem:hn,clear:vn,length:fn,key:pn,keys:bn,dropInstance:mn};function wn(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Br(i,u){var a=i.name+"/";return i.storeName!==u.storeName&&(a+=i.storeName+"/"),a}function _n(){var i="_localforage_support_test";try{return localStorage.setItem(i,!0),localStorage.removeItem(i),!1}catch{return!0}}function xn(){return!_n()||localStorage.length>0}function Tn(i){var u=this,a={};if(i)for(var d in i)a[d]=i[d];return a.keyPrefix=Br(i,u._defaultConfig),xn()?(u._dbInfo=a,a.serializer=Ne,b.resolve()):b.reject()}function $n(i){var u=this,a=u.ready().then(function(){for(var d=u._dbInfo.keyPrefix,v=localStorage.length-1;v>=0;v--){var c=localStorage.key(v);c.indexOf(d)===0&&localStorage.removeItem(c)}});return _(a,i),a}function En(i,u){var a=this;i=B(i);var d=a.ready().then(function(){var v=a._dbInfo,c=localStorage.getItem(v.keyPrefix+i);return c&&(c=v.serializer.deserialize(c)),c});return _(d,u),d}function An(i,u){var a=this,d=a.ready().then(function(){for(var v=a._dbInfo,c=v.keyPrefix,f=c.length,p=localStorage.length,g=1,m=0;m<p;m++){var y=localStorage.key(m);if(y.indexOf(c)===0){var x=localStorage.getItem(y);if(x&&(x=v.serializer.deserialize(x)),x=i(x,y.substring(f),g++),x!==void 0)return x}}});return _(d,u),d}function Sn(i,u){var a=this,d=a.ready().then(function(){var v=a._dbInfo,c;try{c=localStorage.key(i)}catch{c=null}return c&&(c=c.substring(v.keyPrefix.length)),c});return _(d,u),d}function Cn(i){var u=this,a=u.ready().then(function(){for(var d=u._dbInfo,v=localStorage.length,c=[],f=0;f<v;f++){var p=localStorage.key(f);p.indexOf(d.keyPrefix)===0&&c.push(p.substring(d.keyPrefix.length))}return c});return _(a,i),a}function Pn(i){var u=this,a=u.keys().then(function(d){return d.length});return _(a,i),a}function Rn(i,u){var a=this;i=B(i);var d=a.ready().then(function(){var v=a._dbInfo;localStorage.removeItem(v.keyPrefix+i)});return _(d,u),d}function On(i,u,a){var d=this;i=B(i);var v=d.ready().then(function(){u===void 0&&(u=null);var c=u;return new b(function(f,p){var g=d._dbInfo;g.serializer.serialize(u,function(m,y){if(y)p(y);else try{localStorage.setItem(g.keyPrefix+i,m),f(c)}catch(x){(x.name==="QuotaExceededError"||x.name==="NS_ERROR_DOM_QUOTA_REACHED")&&p(x),p(x)}})})});return _(v,a),v}function Nn(i,u){if(u=Y.apply(this,arguments),i=typeof i!="function"&&i||{},!i.name){var a=this.config();i.name=i.name||a.name,i.storeName=i.storeName||a.storeName}var d=this,v;return i.name?v=new b(function(c){i.storeName?c(Br(i,d._defaultConfig)):c(i.name+"/")}).then(function(c){for(var f=localStorage.length-1;f>=0;f--){var p=localStorage.key(f);p.indexOf(c)===0&&localStorage.removeItem(p)}}):v=b.reject("Invalid arguments"),_(v,u),v}var In={_driver:"localStorageWrapper",_initStorage:Tn,_support:wn(),iterate:An,getItem:En,setItem:On,removeItem:Rn,clear:$n,length:Pn,key:Sn,keys:Cn,dropInstance:Nn},Dn=function(u,a){return u===a||typeof u=="number"&&typeof a=="number"&&isNaN(u)&&isNaN(a)},Mn=function(u,a){for(var d=u.length,v=0;v<d;){if(Dn(u[v],a))return!0;v++}return!1},jr=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"},It={},zr={},gt={INDEXEDDB:rn,WEBSQL:yn,LOCALSTORAGE:In},Ln=[gt.INDEXEDDB._driver,gt.WEBSQL._driver,gt.LOCALSTORAGE._driver],Yt=["dropInstance"],Ie=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Yt),kn={description:"",driver:Ln.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Bn(i,u){i[u]=function(){var a=arguments;return i.ready().then(function(){return i[u].apply(i,a)})}}function De(){for(var i=1;i<arguments.length;i++){var u=arguments[i];if(u)for(var a in u)u.hasOwnProperty(a)&&(jr(u[a])?arguments[0][a]=u[a].slice():arguments[0][a]=u[a])}return arguments[0]}var jn=function(){function i(u){s(this,i);for(var a in gt)if(gt.hasOwnProperty(a)){var d=gt[a],v=d._driver;this[a]=v,It[v]||this.defineDriver(d)}this._defaultConfig=De({},kn),this._config=De({},this._defaultConfig,u),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return i.prototype.config=function(a){if((typeof a=="undefined"?"undefined":n(a))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var d in a){if(d==="storeName"&&(a[d]=a[d].replace(/\W/g,"_")),d==="version"&&typeof a[d]!="number")return new Error("Database version must be a number.");this._config[d]=a[d]}return"driver"in a&&a.driver?this.setDriver(this._config.driver):!0}else return typeof a=="string"?this._config[a]:this._config},i.prototype.defineDriver=function(a,d,v){var c=new b(function(f,p){try{var g=a._driver,m=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver){p(m);return}for(var y=Ie.concat("_initStorage"),x=0,A=y.length;x<A;x++){var I=y[x],D=!Mn(Yt,I);if((D||a[I])&&typeof a[I]!="function"){p(m);return}}var U=function(){for(var Dt=function(Fn){return function(){var Zn=new Error("Method "+Fn+" is not implemented by the current driver"),Ur=b.reject(Zn);return _(Ur,arguments[arguments.length-1]),Ur}},Me=0,Un=Yt.length;Me<Un;Me++){var Le=Yt[Me];a[Le]||(a[Le]=Dt(Le))}};U();var z=function(Dt){It[g]&&console.info("Redefining LocalForage driver: "+g),It[g]=a,zr[g]=Dt,f()};"_support"in a?a._support&&typeof a._support=="function"?a._support().then(z,p):z(!!a._support):z(!0)}catch(q){p(q)}});return R(c,d,v),c},i.prototype.driver=function(){return this._driver||null},i.prototype.getDriver=function(a,d,v){var c=It[a]?b.resolve(It[a]):b.reject(new Error("Driver not found."));return R(c,d,v),c},i.prototype.getSerializer=function(a){var d=b.resolve(Ne);return R(d,a),d},i.prototype.ready=function(a){var d=this,v=d._driverSet.then(function(){return d._ready===null&&(d._ready=d._initDriver()),d._ready});return R(v,a,a),v},i.prototype.setDriver=function(a,d,v){var c=this;jr(a)||(a=[a]);var f=this._getSupportedDrivers(a);function p(){c._config.driver=c.driver()}function g(x){return c._extend(x),p(),c._ready=c._initStorage(c._config),c._ready}function m(x){return function(){var A=0;function I(){for(;A<x.length;){var D=x[A];return A++,c._dbInfo=null,c._ready=null,c.getDriver(D).then(g).catch(I)}p();var U=new Error("No available storage method found.");return c._driverSet=b.reject(U),c._driverSet}return I()}}var y=this._driverSet!==null?this._driverSet.catch(function(){return b.resolve()}):b.resolve();return this._driverSet=y.then(function(){var x=f[0];return c._dbInfo=null,c._ready=null,c.getDriver(x).then(function(A){c._driver=A._driver,p(),c._wrapLibraryMethodsWithReady(),c._initDriver=m(f)})}).catch(function(){p();var x=new Error("No available storage method found.");return c._driverSet=b.reject(x),c._driverSet}),R(this._driverSet,d,v),this._driverSet},i.prototype.supports=function(a){return!!zr[a]},i.prototype._extend=function(a){De(this,a)},i.prototype._getSupportedDrivers=function(a){for(var d=[],v=0,c=a.length;v<c;v++){var f=a[v];this.supports(f)&&d.push(f)}return d},i.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,d=Ie.length;a<d;a++)Bn(this,Ie[a])},i.prototype.createInstance=function(a){return new i(a)},i}(),zn=new jn;r.exports=zn},{"3":3}]},{},[4])(4)})})(Bi);export{Ui as a,Bi as l,Fi as r};
