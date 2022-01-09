var Li=Object.defineProperty,Di=Object.defineProperties;var ki=Object.getOwnPropertyDescriptors;var $l=Object.getOwnPropertySymbols;var ji=Object.prototype.hasOwnProperty,Bi=Object.prototype.propertyIsEnumerable;var El=(o,t,e)=>t in o?Li(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Oo=(o,t)=>{for(var e in t||(t={}))ji.call(t,e)&&El(o,e,t[e]);if($l)for(var e of $l(t))Bi.call(t,e)&&El(o,e,t[e]);return o},Ro=(o,t)=>Di(o,ki(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,No=Symbol(),Al=new Map;class Sl{constructor(t,e){if(this._$cssResult$=!0,e!==No)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Al.get(this.cssText);return Io&&t===void 0&&(Al.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const zi=o=>new Sl(typeof o=="string"?o:o+"",No),H=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,n,l)=>r+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[l+1],o[0]);return new Sl(e,No)},Fi=(o,t)=>{Io?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},Cl=Io?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return zi(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mo;const Pl=window.trustedTypes,Ui=Pl?Pl.emptyScript:"",Ol=window.reactiveElementPolyfillSupport,Lo={toAttribute(o,t){switch(t){case Boolean:o=o?Ui:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Rl=(o,t)=>t!==o&&(t==t||o==o),Do={attribute:!0,type:String,converter:Lo,reflect:!1,hasChanged:Rl};class oe extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=Do){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Do}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Cl(n))}else t!==void 0&&e.push(Cl(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Fi(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Do){var n,l;const u=this.constructor._$Eh(t,r);if(u!==void 0&&r.reflect===!0){const v=((l=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&l!==void 0?l:Lo.toAttribute)(e,r.type);this._$Ei=t,v==null?this.removeAttribute(u):this.setAttribute(u,v),this._$Ei=null}}_$AK(t,e){var r,n,l;const u=this.constructor,v=u._$Eu.get(t);if(v!==void 0&&this._$Ei!==v){const S=u.getPropertyOptions(v),C=S.converter,G=(l=(n=(r=C)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof C=="function"?C:null)!==null&&l!==void 0?l:Lo.fromAttribute;this._$Ei=v,this[v]=G(e,S.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Rl)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,l)=>this[l]=n),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var l;return(l=n.hostUpdate)===null||l===void 0?void 0:l.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}oe.finalized=!0,oe.elementProperties=new Map,oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},Ol==null||Ol({ReactiveElement:oe}),((Mo=globalThis.reactiveElementVersions)!==null&&Mo!==void 0?Mo:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ko;const le=globalThis.trustedTypes,Il=le?le.createPolicy("lit-html",{createHTML:o=>o}):void 0,Nt=`lit$${(Math.random()+"").slice(9)}$`,Nl="?"+Nt,Hi=`<${Nl}>`,ie=document,ke=(o="")=>ie.createComment(o),je=o=>o===null||typeof o!="object"&&typeof o!="function",Ml=Array.isArray,Zi=o=>{var t;return Ml(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ll=/-->/g,Dl=/>/g,Gt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,kl=/'/g,jl=/"/g,Bl=/^(?:script|style|textarea)$/i,zl=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),F=zl(1),D=zl(2),Mt=Symbol.for("lit-noChange"),et=Symbol.for("lit-nothing"),Fl=new WeakMap,Vi=(o,t,e)=>{var r,n;const l=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let u=l._$litPart$;if(u===void 0){const v=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=u=new Fe(t.insertBefore(ke(),v),v,void 0,e!=null?e:{})}return u._$AI(o),u},ne=ie.createTreeWalker(ie,129,null,!1),Wi=(o,t)=>{const e=o.length-1,r=[];let n,l=t===2?"<svg>":"",u=Be;for(let S=0;S<e;S++){const C=o[S];let G,y,E=-1,M=0;for(;M<C.length&&(u.lastIndex=M,y=u.exec(C),y!==null);)M=u.lastIndex,u===Be?y[1]==="!--"?u=Ll:y[1]!==void 0?u=Dl:y[2]!==void 0?(Bl.test(y[2])&&(n=RegExp("</"+y[2],"g")),u=Gt):y[3]!==void 0&&(u=Gt):u===Gt?y[0]===">"?(u=n!=null?n:Be,E=-1):y[1]===void 0?E=-2:(E=u.lastIndex-y[2].length,G=y[1],u=y[3]===void 0?Gt:y[3]==='"'?jl:kl):u===jl||u===kl?u=Gt:u===Ll||u===Dl?u=Be:(u=Gt,n=void 0);const W=u===Gt&&o[S+1].startsWith("/>")?" ":"";l+=u===Be?C+Hi:E>=0?(r.push(G),C.slice(0,E)+"$lit$"+C.slice(E)+Nt+W):C+Nt+(E===-2?(r.push(void 0),S):W)}const v=l+(o[e]||"<?>")+(t===2?"</svg>":"");return[Il!==void 0?Il.createHTML(v):v,r]};class ze{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let l=0,u=0;const v=t.length-1,S=this.parts,[C,G]=Wi(t,e);if(this.el=ze.createElement(C,r),ne.currentNode=this.el.content,e===2){const y=this.el.content,E=y.firstChild;E.remove(),y.append(...E.childNodes)}for(;(n=ne.nextNode())!==null&&S.length<v;){if(n.nodeType===1){if(n.hasAttributes()){const y=[];for(const E of n.getAttributeNames())if(E.endsWith("$lit$")||E.startsWith(Nt)){const M=G[u++];if(y.push(E),M!==void 0){const W=n.getAttribute(M.toLowerCase()+"$lit$").split(Nt),lt=/([.?@])?(.*)/.exec(M);S.push({type:1,index:l,name:lt[2],strings:W,ctor:lt[1]==="."?Yi:lt[1]==="?"?qi:lt[1]==="@"?Xi:ur})}else S.push({type:6,index:l})}for(const E of y)n.removeAttribute(E)}if(Bl.test(n.tagName)){const y=n.textContent.split(Nt),E=y.length-1;if(E>0){n.textContent=le?le.emptyScript:"";for(let M=0;M<E;M++)n.append(y[M],ke()),ne.nextNode(),S.push({type:2,index:++l});n.append(y[E],ke())}}}else if(n.nodeType===8)if(n.data===Nl)S.push({type:2,index:l});else{let y=-1;for(;(y=n.data.indexOf(Nt,y+1))!==-1;)S.push({type:7,index:l}),y+=Nt.length-1}l++}}static createElement(t,e){const r=ie.createElement("template");return r.innerHTML=t,r}}function ae(o,t,e=o,r){var n,l,u,v;if(t===Mt)return t;let S=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu;const C=je(t)?void 0:t._$litDirective$;return(S==null?void 0:S.constructor)!==C&&((l=S==null?void 0:S._$AO)===null||l===void 0||l.call(S,!1),C===void 0?S=void 0:(S=new C(o),S._$AT(o,e,r)),r!==void 0?((u=(v=e)._$Cl)!==null&&u!==void 0?u:v._$Cl=[])[r]=S:e._$Cu=S),S!==void 0&&(t=ae(o,S._$AS(o,t.values),S,r)),t}class Gi{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ie).importNode(r,!0);ne.currentNode=l;let u=ne.nextNode(),v=0,S=0,C=n[0];for(;C!==void 0;){if(v===C.index){let G;C.type===2?G=new Fe(u,u.nextSibling,this,t):C.type===1?G=new C.ctor(u,C.name,C.strings,this,t):C.type===6&&(G=new Qi(u,this,t)),this.v.push(G),C=n[++S]}v!==(C==null?void 0:C.index)&&(u=ne.nextNode(),v++)}return l}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Fe{constructor(t,e,r,n){var l;this.type=2,this._$AH=et,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(l=n==null?void 0:n.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ae(this,t,e),je(t)?t===et||t==null||t===""?(this._$AH!==et&&this._$AR(),this._$AH=et):t!==this._$AH&&t!==Mt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Zi(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==et&&je(this._$AH)?this._$AA.nextSibling.data=t:this.S(ie.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,l=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ze.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.m(r);else{const u=new Gi(l,this),v=u.p(this.options);u.m(r),this.S(v),this._$AH=u}}_$AC(t){let e=Fl.get(t.strings);return e===void 0&&Fl.set(t.strings,e=new ze(t)),e}M(t){Ml(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const l of t)n===e.length?e.push(r=new Fe(this.A(ke()),this.A(ke()),this,this.options)):r=e[n],r._$AI(l),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ur{constructor(t,e,r,n,l){this.type=1,this._$AH=et,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=et}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const l=this.strings;let u=!1;if(l===void 0)t=ae(this,t,e,0),u=!je(t)||t!==this._$AH&&t!==Mt,u&&(this._$AH=t);else{const v=t;let S,C;for(t=l[0],S=0;S<l.length-1;S++)C=ae(this,v[r+S],e,S),C===Mt&&(C=this._$AH[S]),u||(u=!je(C)||C!==this._$AH[S]),C===et?t=et:t!==et&&(t+=(C!=null?C:"")+l[S+1]),this._$AH[S]=C}u&&!n&&this.k(t)}k(t){t===et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Yi extends ur{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===et?void 0:t}}const Ki=le?le.emptyScript:"";class qi extends ur{constructor(){super(...arguments),this.type=4}k(t){t&&t!==et?this.element.setAttribute(this.name,Ki):this.element.removeAttribute(this.name)}}class Xi extends ur{constructor(t,e,r,n,l){super(t,e,r,n,l),this.type=5}_$AI(t,e=this){var r;if((t=(r=ae(this,t,e,0))!==null&&r!==void 0?r:et)===Mt)return;const n=this._$AH,l=t===et&&n!==et||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,u=t!==et&&(n===et||l);l&&this.element.removeEventListener(this.name,this,n),u&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class Qi{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}}const Ul=window.litHtmlPolyfillSupport;Ul==null||Ul(ze,Fe),((ko=globalThis.litHtmlVersions)!==null&&ko!==void 0?ko:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jo,Bo;class P extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Vi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Mt}}P.finalized=!0,P._$litElement$=!0,(jo=globalThis.litElementHydrateSupport)===null||jo===void 0||jo.call(globalThis,{LitElement:P});const Hl=globalThis.litElementPolyfillSupport;Hl==null||Hl({LitElement:P});((Bo=globalThis.litElementVersions)!==null&&Bo!==void 0?Bo:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ro(Oo({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function N(o){return(t,e)=>e!==void 0?((r,n,l)=>{n.constructor.createProperty(l,r)})(o,t,e):Ji(o,t)}const O=H`
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
`;var Zl=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class cr extends P{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[O,H`
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
      `]}render(){return F`
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
    `}}cr.defaultTagName="turtle-avatar";Zl([N({type:Boolean,reflect:!0})],cr.prototype,"bordered",void 0);Zl([N({type:String,attribute:"placeholder-alt"})],cr.prototype,"placeholderAlt",void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vl=o=>(...t)=>({_$litDirective$:o,values:t});class Wl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=Vl(class extends Wl{constructor(o){var t;if(super(o),o.type!==dr.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const r in t)this.ut.add(r);return this.render(t)}this.ut.forEach(r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const n=t[r];n!=null&&(this.ut.add(r),r.includes("-")?e.setProperty(r,n):e[r]=n)}return Mt}});var Gl=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class hr extends P{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[O,H`
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
      `]}render(){return F`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${zo({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}hr.defaultTagName="turtle-balloon";Gl([N({type:String,attribute:"tail-position"})],hr.prototype,"tailPosition",void 0);Gl([N({type:Number,attribute:"tail-offset"})],hr.prototype,"tailOffset",void 0);var Yl=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},vr;class $t{constructor(t,e=""){this.assigned=!1,vr.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",n=this.host.shadowRoot.querySelector(r);this.assigned=!!n&&n.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",Yl(this,vr,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",Yl(this,vr,"f"))}}vr=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=o=>o!=null?o:et;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=(o,t)=>{var e,r;const n=o._$AN;if(n===void 0)return!1;for(const l of n)(r=(e=l)._$AO)===null||r===void 0||r.call(e,t,!1),Ue(l,t);return!0},pr=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},Kl=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),on(t)}};function en(o){this._$AN!==void 0?(pr(this),this._$AM=o,Kl(this)):this._$AM=o}function rn(o,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let l=e;l<r.length;l++)Ue(r[l],!1),pr(r[l]);else r!=null&&(Ue(r,!1),pr(r));else Ue(this,o)}const on=o=>{var t,e,r,n;o.type==dr.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=rn),(e=(n=o)._$AQ)!==null&&e!==void 0||(n._$AQ=en))};class ln extends Wl{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Kl(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(Ue(this,t),pr(this))}setValue(t){if(tn(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var gr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},br=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},se,ue;class nn extends ln{constructor(t){super(t);if(se.set(this,null),ue.set(this,[]),t.type!==dr.CHILD&&t.type!==dr.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=gr(this,se,"f"))===null||r===void 0||r.call(this);const n="parentNode"in t?t.parentNode:t.element;if(!("tagName"in n)||n.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{gr(this,ue,"f").forEach(v=>v());const u=n.assignedElements();br(this,ue,u.map(e).filter(v=>!!v),"f")};return n.addEventListener("slotchange",l),br(this,se,()=>{n.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return Mt}disconnected(){var t;(t=gr(this,se,"f"))===null||t===void 0||t.call(this),br(this,se,null,"f"),gr(this,ue,"f").forEach(e=>e()),br(this,ue,[],"f")}}se=new WeakMap,ue=new WeakMap;const Et=Vl(nn);var ql=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Xl=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},He=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function ce(o){var t,e,r;class n extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(u=>{!u[0]||Xl(this,t,Ql(u[0].target),"f")})),r.set(this,u=>{!He(this,t,"f")||(u.preventDefault(),u.stopPropagation())})}renderLightDOMSlot(u){return F`<slot id="lightdom" class=${fr(u)}>
        ${Et(v=>{if("getAttribute"in v)return Xl(this,t,Ql(v),"f"),v.addEventListener("click",He(this,r,"f")),He(this,e,"f").observe(v,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{v.removeEventListener("click",He(this,r,"f")),He(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,ql([N({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),ql([N({type:Boolean,attribute:"lightdom"})],n.prototype,"lightDOM",void 0),n}function Ql(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var Fo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Jl=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},mr;class Ze extends ce(P){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,mr.set(this,new $t(this,"icon"))}static get styles(){return[O,H`
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
        .icon[data-disabled] {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
        }
      `]}render(){const t=Jl(this,mr,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):F`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return F`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!Jl(this,mr,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}mr=new WeakMap;Ze.defaultTagName="turtle-button";Fo([N({type:String})],Ze.prototype,"variant",void 0);Fo([N({type:Boolean,reflect:!0})],Ze.prototype,"rounded",void 0);Fo([N({type:Boolean,reflect:!0,attribute:"icon-only"})],Ze.prototype,"iconOnly",void 0);var an=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Uo extends P{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[O,H`
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
      `]}render(){return F` <slot></slot> `}}Uo.defaultTagName="turtle-button-group";an([N({type:Boolean,reflect:!0})],Uo.prototype,"evenly",void 0);var ti=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ei=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ho,Zo;class yr extends P{constructor(){super(...arguments);Ho.set(this,new $t(this,"action")),Zo.set(this,new $t(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[O,H`
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
      `]}render(){return F`
      <div class="image-sizer" ?assigned=${ei(this,Zo,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${ei(this,Ho,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}Ho=new WeakMap,Zo=new WeakMap;yr.defaultTagName="turtle-card";ti([N({type:Boolean,attribute:"shadowed",reflect:!0})],yr.prototype,"shadowed",void 0);ti([N({type:Boolean,attribute:"bordered",reflect:!0})],yr.prototype,"bordered",void 0);class ri extends ce(P){static get styles(){return[O,H`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():F`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}ri.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(o){return N(Ro(Oo({},o),{state:!0}))}var oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},_t=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},_r,de,he;class wr extends P{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,_r.set(this,new MutationObserver(t=>{!t[0]||_t(this,de,"f").call(this,t[0].target)})),de.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),he.set(this,t=>{_t(this,de,"f").call(this,t.currentTarget)})}static get styles(){return[O,H`
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
      `]}render(){return F`
      <slot
        >${Et(t=>{if("checked"in t)return _t(this,de,"f").call(this,t),t.addEventListener("change",_t(this,he,"f")),t.addEventListener("input",_t(this,he,"f")),_t(this,_r,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{_t(this,de,"f").call(this,t)},()=>{t.removeEventListener("change",_t(this,he,"f")),t.removeEventListener("input",_t(this,he,"f")),_t(this,_r,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${sn}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${un}
      </svg>
    `}}_r=new WeakMap,de=new WeakMap,he=new WeakMap;wr.defaultTagName="turtle-checkbox";oi([ht()],wr.prototype,"_checkState",void 0);oi([ht()],wr.prototype,"_disabled",void 0);const sn=D`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,un=D`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`,tt=H`
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
`;class li extends P{static get styles(){return[O,tt]}render(){return ii()}}li.defaultTagName="turtle-terminal-icon";const ii=o=>D`
  <svg part=${fr(o)} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var xr=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Vo=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},rt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},At,Lt,ve,Tr,$r,Wo,Go;class fe extends P{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,At.set(this,null),Lt.set(this,0),this._listbox=null,this._options=[],ve.set(this,t=>{var e,r;if(this.noAutoAria||(Vo(this,Lt,t,"f"),!rt(this,At,"f")))return;if(!this._options.length){rt(this,At,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((l,u)=>{u===t?l.setAttribute("aria-selected","true"):l.removeAttribute("aria-selected")});const n=this._options[t];if(!(n==null?void 0:n.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&n.scrollIntoView(),rt(this,At,"f").setAttribute("aria-activedescendant",n.id)}),Tr.set(this,()=>{if(this.noAutoAria||!rt(this,At,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),rt(this,At,"f").setAttribute("aria-controls",this._listbox.id)}),$r.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":rt(this,Wo,"f").call(this),t.preventDefault();return;case"Escape":rt(this,Go,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=rt(this,Lt,"f")<=0?this._options.length-1:rt(this,Lt,"f")-1;rt(this,ve,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=rt(this,Lt,"f")>=this._options.length-1?0:rt(this,Lt,"f")+1;rt(this,ve,"f").call(this,e),t.preventDefault();return}}}),Wo.set(this,(t=rt(this,Lt,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),Go.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[O,H`
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
      `]}render(){return F`
      <div class="searchbox">
        <slot class="icon" name="icon"
          >${ii("icon")}</slot
        >
        <slot class="search" name="search"
          >${Et(t=>{if("disabled"in t)return Vo(this,At,t,"f"),rt(this,Tr,"f").call(this),t.addEventListener("keydown",rt(this,$r,"f")),()=>{Vo(this,At,null,"f"),t.removeEventListener("keydown",rt(this,$r,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${Et(t=>{var e;this._listbox=t,this._options=Array.from(t.children),rt(this,Tr,"f").call(this),rt(this,ve,"f").call(this,0);const r=()=>{rt(this,ve,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const n=l=>{if(!l.target||!("getAttribute"in l.target))return;const v=l.target.closest("turtle-command-palette-option");v&&v.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",n),()=>{var l;this._listbox=null,this._options=[],(l=t.shadowRoot)===null||l===void 0||l.removeEventListener("slotchange",r),t.removeEventListener("click",n)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}At=new WeakMap,Lt=new WeakMap,ve=new WeakMap,Tr=new WeakMap,$r=new WeakMap,Wo=new WeakMap,Go=new WeakMap;fe.defaultTagName="turtle-command-palette";xr([N({type:String,reflect:!0})],fe.prototype,"role",void 0);xr([N({type:Boolean,attribute:"noautoaria"})],fe.prototype,"noAutoAria",void 0);xr([ht()],fe.prototype,"_listbox",void 0);xr([ht()],fe.prototype,"_options",void 0);var cn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ni=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Er;class Yo extends P{constructor(){super(...arguments);this.role="listbox",Er.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[O,H`
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
      `]}connectedCallback(){super.connectedCallback(),ni(this,Er,"f").call(this)}render(){return F`<slot @slotchange=${ni(this,Er,"f")}></slot>`}}Er=new WeakMap;Yo.defaultTagName="turtle-command-palette-listbox";cn([N({type:String,reflect:!0})],Yo.prototype,"role",void 0);var dn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Ko extends P{constructor(){super(...arguments);this.role="option"}static get styles(){return[O,H`
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
      `]}render(){return F`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}Ko.defaultTagName="turtle-command-palette-option";dn([N({type:String,reflect:!0})],Ko.prototype,"role",void 0);var hn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class qo extends P{static get styles(){return H`
      :host {
        --turtle-ui--unit: 10px;
        --turtle-ui--base-font-size: calc(1.6 * var(--turtle-ui--unit));

        /* Levels (light) */
        --turtle-ui--color--level--light-0: 0%;
        --turtle-ui--color--level--light-1: 10%;
        --turtle-ui--color--level--light-2: 20%;
        --turtle-ui--color--level--light-3: 30%;
        --turtle-ui--color--level--light-4: 40%;
        --turtle-ui--color--level--light-5: 50%;
        --turtle-ui--color--level--light-6: 60%;
        --turtle-ui--color--level--light-7: 70%;
        --turtle-ui--color--level--light-8: 80%;
        --turtle-ui--color--level--light-9: 90%;
        --turtle-ui--color--level--light-10: 100%;
        --turtle-ui--color--level--light-safe: 34%;
        --turtle-ui--color--level--light-danger: 44%;
        --turtle-ui--color--level--light-primary: 40%;
        --turtle-ui--level--modifier--light-darker: -1;
        --turtle-ui--level--modifier--light-lighter: 1;
        --turtle-ui--level--modifier--light-amount: 16%;

        /* Levels (dark) */
        --turtle-ui--color--level--dark-0: 100%;
        --turtle-ui--color--level--dark-1: 92%;
        --turtle-ui--color--level--dark-2: 84%;
        --turtle-ui--color--level--dark-3: 76%;
        --turtle-ui--color--level--dark-4: 68%;
        --turtle-ui--color--level--dark-5: 60%;
        --turtle-ui--color--level--dark-6: 52%;
        --turtle-ui--color--level--dark-7: 44%;
        --turtle-ui--color--level--dark-8: 36%;
        --turtle-ui--color--level--dark-9: 28%;
        --turtle-ui--color--level--dark-10: 20%;
        --turtle-ui--level--modifier--dark-darker: 1;
        --turtle-ui--level--modifier--dark-lighter: -1;

        /* Default levels */
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );

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
          --turtle-ui--color--level--0: var(
            --turtle-ui--color--level--dark-0,
            var(--turtle-ui--color--level--light-0)
          );
          --turtle-ui--color--level--1: var(
            --turtle-ui--color--level--dark-1,
            var(--turtle-ui--color--level--light-1)
          );
          --turtle-ui--color--level--2: var(
            --turtle-ui--color--level--dark-2,
            var(--turtle-ui--color--level--light-2)
          );
          --turtle-ui--color--level--3: var(
            --turtle-ui--color--level--dark-3,
            var(--turtle-ui--color--level--light-3)
          );
          --turtle-ui--color--level--4: var(
            --turtle-ui--color--level--dark-4,
            var(--turtle-ui--color--level--light-4)
          );
          --turtle-ui--color--level--5: var(
            --turtle-ui--color--level--dark-5,
            var(--turtle-ui--color--level--light-5)
          );
          --turtle-ui--color--level--6: var(
            --turtle-ui--color--level--dark-6,
            var(--turtle-ui--color--level--light-6)
          );
          --turtle-ui--color--level--7: var(
            --turtle-ui--color--level--dark-7,
            var(--turtle-ui--color--level--light-7)
          );
          --turtle-ui--color--level--8: var(
            --turtle-ui--color--level--dark-8,
            var(--turtle-ui--color--level--light-8)
          );
          --turtle-ui--color--level--9: var(
            --turtle-ui--color--level--dark-9,
            var(--turtle-ui--color--level--light-9)
          );
          --turtle-ui--color--level--10: var(
            --turtle-ui--color--level--dark-10,
            var(--turtle-ui--color--level--light-10)
          );
          --turtle-ui--color--level--safe: var(
            --turtle-ui--color--level--dark-safe,
            var(--turtle-ui--color--level--light-safe)
          );
          --turtle-ui--color--level--danger: var(
            --turtle-ui--color--level--dark-danger,
            var(--turtle-ui--color--level--light-danger)
          );
          --turtle-ui--color--level--primary: var(
            --turtle-ui--color--level--dark-primary,
            var(--turtle-ui--color--level--light-primary)
          );
          --turtle-ui--level--modifier--darker: var(
            --turtle-ui--level--modifier--dark-darker,
            var(--turtle-ui--level--modifier--light-darker)
          );
          --turtle-ui--level--modifier--lighter: var(
            --turtle-ui--level--modifier--dark-lighter,
            var(--turtle-ui--level--modifier--light-lighter)
          );
          --turtle-ui--level--modifier--amount: var(
            --turtle-ui--level--modifier--dark-amount,
            var(--turtle-ui--level--modifier--light-amount)
          );
        }
      }

      :host([theme="light"]) {
        --turtle-ui--color--level--0: var(--turtle-ui--color--level--light-0);
        --turtle-ui--color--level--1: var(--turtle-ui--color--level--light-1);
        --turtle-ui--color--level--2: var(--turtle-ui--color--level--light-2);
        --turtle-ui--color--level--3: var(--turtle-ui--color--level--light-3);
        --turtle-ui--color--level--4: var(--turtle-ui--color--level--light-4);
        --turtle-ui--color--level--5: var(--turtle-ui--color--level--light-5);
        --turtle-ui--color--level--6: var(--turtle-ui--color--level--light-6);
        --turtle-ui--color--level--7: var(--turtle-ui--color--level--light-7);
        --turtle-ui--color--level--8: var(--turtle-ui--color--level--light-8);
        --turtle-ui--color--level--9: var(--turtle-ui--color--level--light-9);
        --turtle-ui--color--level--10: var(--turtle-ui--color--level--light-10);
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--light-safe
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--light-danger
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--light-primary
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--light-darker
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--light-lighter
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--light-amount
        );
      }

      :host([theme="dark"]) {
        --turtle-ui--color--level--0: var(
          --turtle-ui--color--level--dark-0,
          var(--turtle-ui--color--level--light-0)
        );
        --turtle-ui--color--level--1: var(
          --turtle-ui--color--level--dark-1,
          var(--turtle-ui--color--level--light-1)
        );
        --turtle-ui--color--level--2: var(
          --turtle-ui--color--level--dark-2,
          var(--turtle-ui--color--level--light-2)
        );
        --turtle-ui--color--level--3: var(
          --turtle-ui--color--level--dark-3,
          var(--turtle-ui--color--level--light-3)
        );
        --turtle-ui--color--level--4: var(
          --turtle-ui--color--level--dark-4,
          var(--turtle-ui--color--level--light-4)
        );
        --turtle-ui--color--level--5: var(
          --turtle-ui--color--level--dark-5,
          var(--turtle-ui--color--level--light-5)
        );
        --turtle-ui--color--level--6: var(
          --turtle-ui--color--level--dark-6,
          var(--turtle-ui--color--level--light-6)
        );
        --turtle-ui--color--level--7: var(
          --turtle-ui--color--level--dark-7,
          var(--turtle-ui--color--level--light-7)
        );
        --turtle-ui--color--level--8: var(
          --turtle-ui--color--level--dark-8,
          var(--turtle-ui--color--level--light-8)
        );
        --turtle-ui--color--level--9: var(
          --turtle-ui--color--level--dark-9,
          var(--turtle-ui--color--level--light-9)
        );
        --turtle-ui--color--level--10: var(
          --turtle-ui--color--level--dark-10,
          var(--turtle-ui--color--level--light-10)
        );
        --turtle-ui--color--level--safe: var(
          --turtle-ui--color--level--dark-safe,
          var(--turtle-ui--color--level--light-safe)
        );
        --turtle-ui--color--level--danger: var(
          --turtle-ui--color--level--dark-danger,
          var(--turtle-ui--color--level--light-danger)
        );
        --turtle-ui--color--level--primary: var(
          --turtle-ui--color--level--dark-primary,
          var(--turtle-ui--color--level--light-primary)
        );
        --turtle-ui--level--modifier--darker: var(
          --turtle-ui--level--modifier--dark-darker,
          var(--turtle-ui--level--modifier--light-darker)
        );
        --turtle-ui--level--modifier--lighter: var(
          --turtle-ui--level--modifier--dark-lighter,
          var(--turtle-ui--level--modifier--light-lighter)
        );
        --turtle-ui--level--modifier--amount: var(
          --turtle-ui--level--modifier--dark-amount,
          var(--turtle-ui--level--modifier--light-amount)
        );
      }

      :host {
        display: block;
        font-family: "Ubuntu", sans-serif;

        background-color: var(--turtle-ui--color--background);
        color: var(--turtle-ui--color--text);
      }
    `}render(){return F`<slot></slot>`}}qo.defaultTagName="turtle-design-system";hn([N({type:String,reflect:!0})],qo.prototype,"theme",void 0);var vn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},pe=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ge,Ar;class Xo extends P{constructor(){super(...arguments);this._elementState="neutral",ge.set(this,t=>{pe(this,Ar,"f").call(this,t.currentTarget)}),Ar.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[O,H`
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
      `]}render(){return F`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${Et(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return pe(this,Ar,"f").call(this,t),t.addEventListener("validitychange",pe(this,ge,"f")),t.addEventListener("fieldtouch",pe(this,ge,"f")),()=>{t.removeEventListener("validitychange",pe(this,ge,"f")),t.removeEventListener("fieldtouch",pe(this,ge,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}ge=new WeakMap,Ar=new WeakMap;Xo.defaultTagName="turtle-form-field";vn([ht()],Xo.prototype,"_elementState",void 0);class ai extends P{static get styles(){return[O,H`
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
      `]}render(){return F`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}ai.defaultTagName="turtle-labelled-item";class si extends P{static get styles(){return[O,H`
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
      `]}render(){return F` <slot></slot> `}}si.defaultTagName="turtle-list";var ui=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Qo,Jo;class ci extends ce(P){constructor(){super(...arguments);Qo.set(this,new $t(this,"icon-start")),Jo.set(this,new $t(this,"icon-end"))}static get styles(){return[O,H`
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
      `]}render(){const t=["body-slot",ui(this,Qo,"f").assigned?"icon-start":"",ui(this,Jo,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):F`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return F`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}Qo=new WeakMap,Jo=new WeakMap;ci.defaultTagName="turtle-list-item";var fn=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},tl;class di extends P{constructor(){super(...arguments);tl.set(this,new $t(this,"image"))}static get styles(){return[O,H`
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
      `]}render(){return F`
      <div class="body">
        <div class="image" ?data-hidden=${!fn(this,tl,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}tl=new WeakMap;di.defaultTagName="turtle-notification";class hi extends ce(P){static get styles(){return[O,H`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():F`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}hi.defaultTagName="turtle-notification-action";var pn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Sr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Cr,Pr;class el extends ce(P){constructor(){super(...arguments);this.pressable=!1,Cr.set(this,new $t(this,"icon")),Pr.set(this,new $t(this,"action-icon"))}static get styles(){return[O,H`
        :host {
          --turtle-pill--radius--default: calc(3.2 * var(--turtle-ui--unit));
          --turtle-pill--background--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--9)
          );
          --turtle-pill--color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          --turtle-pill--border-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--7)
          );
          --turtle-pill--inactive-color--default: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--5)
          );

          position: relative;
          display: inline-block;
        }

        .label,
        .button,
        .lightdom::slotted(*) {
          appearance: none;

          display: inline-block;
          font: inherit;
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
          padding: 2px calc(0.8 * var(--turtle-ui--unit));
          border: 1px solid
            var(
              --turtle-pill--border-color,
              var(--turtle-pill--border-color--default)
            );

          border-radius: var(
            --turtle-pill--radius,
            var(--turtle-pill--radius--default)
          );
          background-color: var(
            --turtle-pill--background,
            var(--turtle-pill--background--default)
          );
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
          text-decoration: none;

          cursor: default;
        }

        .with-icon,
        .with-icon::slotted(*) {
          padding-left: calc(3 * var(--turtle-ui--unit));
        }

        .with-action-icon,
        .with-action-icon::slotted(*) {
          padding-right: calc(3 * var(--turtle-ui--unit));
        }

        .button,
        .lightdom::slotted(*) {
          cursor: pointer;
        }

        .button:focus,
        .lightdom::slotted(*:focus) {
          box-shadow: 0 0 0 4px
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

        .icon,
        .action-icon {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          bottom: 0;
          margin: auto 0;
          font-size: calc(2 * var(--turtle-ui--unit));

          pointer-events: none;
        }

        .icon {
          left: calc(0.4 * var(--turtle-ui--unit));

          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        .action-icon {
          right: calc(0.4 * var(--turtle-ui--unit));

          color: var(
            --turtle-pill--inactive-color,
            var(--turtle-pill--inactive-color--default)
          );
        }

        :host(:hover) > .action-icon {
          color: var(--turtle-pill--color, var(--turtle-pill--color--default));
        }

        [data-hidden] {
          display: none;
        }
      `]}render(){const t=[Sr(this,Cr,"f").assigned?"with-icon":null,Sr(this,Pr,"f").assigned?"with-action-icon":null].filter(Boolean).join(" "),e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):this.pressable?F`<button part="button" class="button ${t}">
          <slot></slot>
        </button>`:F`<span part="label" class="label ${t}"
          ><slot></slot
        ></span>`;return F`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!Sr(this,Cr,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${e}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!Sr(this,Pr,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `}}Cr=new WeakMap,Pr=new WeakMap;el.defaultTagName="turtle-pill";pn([N({type:Boolean})],el.prototype,"pressable",void 0);var gn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Or=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Rr,Ir;class rl extends P{constructor(){super(...arguments);this._progress={max:1,value:0},Rr.set(this,t=>{this._progress={max:t.max,value:t.value}}),Ir.set(this,new MutationObserver(t=>{!t[0]||Or(this,Rr,"f").call(this,t[0].target)}))}static get styles(){return[O,H`
        :host {
          --_height: var(--turtle-progressbar--height, 8px);
          --_inner-bar--color: var(
            --turtle-progressbar--inner-bar--color,
            hsl(
              var(--turtle-ui--color--tone--primary),
              var(--turtle-ui--color--level--4)
            )
          );

          display: block;
          position: relative;
          border: 1px solid
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );
          height: var(--_height);
          padding: 2px;

          background-color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10)
          );
          border-radius: var(--_height);
        }

        .inner-bar {
          height: 100%;

          background-color: var(--_inner-bar--color);
          border-radius: var(--_height);

          transition: width 0.22s ease;
        }

        ::slotted(progress) {
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 1px;

          visibility: hidden;
          pointer-events: none;
          user-select: none;
        }
      `]}render(){const{max:t,value:e}=this._progress,r=Math.min(1,Math.max(0,t<0?0:e/t));return F`
      <slot
        >${Et(n=>{if(n instanceof HTMLProgressElement)return Or(this,Rr,"f").call(this,n),Or(this,Ir,"f").observe(n,{attributes:!0,attributeFilter:["value","max"]}),()=>{Or(this,Ir,"f").disconnect()}})}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${zo({width:r*100+"%"})}
      ></div>
    `}}Rr=new WeakMap,Ir=new WeakMap;rl.defaultTagName="turtle-progressbar";gn([ht()],rl.prototype,"_progress",void 0);class vi extends P{static get styles(){return[O,H`
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
      `]}render(){return F`<slot></slot>`}}vi.defaultTagName="turtle-radio-button";var Nr=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Yt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Mr,Lr,Ve;function Dr(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class Kt extends P{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,Mr.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&Yt(this,Ve,"f").call(this,t[0].target)})),Lr.set(this,t=>{Yt(this,Ve,"f").call(this,t.currentTarget)}),Ve.set(this,t=>{const e=Dr(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[O,H`
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
      `]}get isValid(){return!!this._isElementValid}render(){var t;return F`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${Et(e=>{if("validity"in e)return Yt(this,Ve,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",Yt(this,Lr,"f")),e.addEventListener("focusout",this.touch),Yt(this,Mr,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",Yt(this,Lr,"f")),e.removeEventListener("focusout",this.touch),Yt(this,Mr,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${fi}</div>
        <div class="indicator invalid" aria-hidden="true">${pi}</div>
      </div>
    `}}Mr=new WeakMap,Lr=new WeakMap,Ve=new WeakMap;Kt.defaultTagName="turtle-textbox";Nr([N({type:Boolean,reflect:!0})],Kt.prototype,"touched",void 0);Nr([N({type:Boolean,attribute:"novalidity"})],Kt.prototype,"noValidity",void 0);Nr([ht()],Kt.prototype,"_isElementValid",void 0);Nr([ht()],Kt.prototype,"_disabled",void 0);const fi=D`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,pi=D`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var kr=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},jr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Br,zr;class be extends P{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,Br.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=Dr(t[0].target))})),zr.set(this,t=>{this._isElementValid=Dr(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...Kt.styles,H`
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
      `]}render(){var t;return F`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${Et(e=>{if("validity"in e)return this._isElementValid=Dr(e),this._disabled=e.disabled,e.addEventListener("input",jr(this,zr,"f")),e.addEventListener("focusout",this.touch),jr(this,Br,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",jr(this,zr,"f")),e.removeEventListener("focusout",this.touch),jr(this,Br,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${fi}</div>
        <div class="indicator invalid" aria-hidden="true">${pi}</div>

        <div class="caret" aria-hidden="true">${bn}</div>
      </div>
    `}}Br=new WeakMap,zr=new WeakMap;be.defaultTagName="turtle-selectbox";kr([N({type:Boolean,reflect:!0})],be.prototype,"touched",void 0);kr([N({type:Boolean,attribute:"novalidity"})],be.prototype,"noValidity",void 0);kr([ht()],be.prototype,"_isElementValid",void 0);kr([ht()],be.prototype,"_disabled",void 0);const bn=D`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var mn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};function yn(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return mn([N({type:Boolean})],t.prototype,"autofocus",void 0),t}var ol=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},gi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ll,il;class We extends yn(P){constructor(){super(...arguments);ll.set(this,new $t(this,"action")),this.severity="info",il.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[O,H`
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
      `]}render(){return F`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?D`
        <svg
          class="lifetime"
          style=${zo({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${fr(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${fr(this.lifetimeLabel)}
          @animationend=${gi(this,il,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:et}

      <div class="actions" ?data-assigned=${gi(this,ll,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}ll=new WeakMap,il=new WeakMap;We.defaultTagName="turtle-snackbar";ol([N({type:String,reflect:!0})],We.prototype,"severity",void 0);ol([N({type:Number})],We.prototype,"lifetime",void 0);ol([N({type:String,attribute:"lifetime-label"})],We.prototype,"lifetimeLabel",void 0);class bi extends ce(P){static get styles(){return[O,H`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():F`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}bi.defaultTagName="turtle-snackbar-action";var mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Fr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ur,Hr;class Zr extends P{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,Ur.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),Hr.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[O,H`
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
            var(--turtle-ui--color--level--light-10)
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
      `]}render(){return F`
      <slot>
        ${Et(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",Fr(this,Hr,"f")),Fr(this,Ur,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",Fr(this,Hr,"f")),Fr(this,Ur,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}Ur=new WeakMap,Hr=new WeakMap;Zr.defaultTagName="turtle-toggle-switch";mi([ht()],Zr.prototype,"_checked",void 0);mi([ht()],Zr.prototype,"_disabled",void 0);var _n=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class nl extends P{constructor(){super(...arguments);this.direction="down"}static get styles(){return[O,tt,H`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}nl.defaultTagName="turtle-angle-icon";_n([N({type:String,reflect:!0})],nl.prototype,"direction",void 0);var wn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class al extends P{constructor(){super(...arguments);this.direction="down"}static get styles(){return[O,tt,H`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}al.defaultTagName="turtle-arrow-icon";wn([N({type:String,reflect:!0})],al.prototype,"direction",void 0);var xn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class sl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}sl.defaultTagName="turtle-attention-icon";xn([N({type:Boolean})],sl.prototype,"outlined",void 0);class yi extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}yi.defaultTagName="turtle-brand-icon";class _i extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}_i.defaultTagName="turtle-check-icon";var Tn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class ul extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}ul.defaultTagName="turtle-circle-check-icon";Tn([N({type:Boolean})],ul.prototype,"outlined",void 0);var $n=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class cl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}cl.defaultTagName="turtle-circle-cross-icon";$n([N({type:Boolean})],cl.prototype,"outlined",void 0);var En=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class dl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}dl.defaultTagName="turtle-circle-minus-icon";En([N({type:Boolean})],dl.prototype,"outlined",void 0);var An=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class hl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}hl.defaultTagName="turtle-circle-plus-icon";An([N({type:Boolean})],hl.prototype,"outlined",void 0);class wi extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}wi.defaultTagName="turtle-cross-icon";class xi extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}xi.defaultTagName="turtle-dots-icon";class Ti extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `}}Ti.defaultTagName="turtle-file-upload-icon";class $i extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `}}$i.defaultTagName="turtle-first-page-icon";var Sn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class vl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}vl.defaultTagName="turtle-heart-icon";Sn([N({type:Boolean})],vl.prototype,"outlined",void 0);var Cn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class fl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}fl.defaultTagName="turtle-info-icon";Cn([N({type:Boolean})],fl.prototype,"outlined",void 0);class Ei extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `}}Ei.defaultTagName="turtle-last-page-icon";class Ai extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Ai.defaultTagName="turtle-minus-icon";class Si extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}Si.defaultTagName="turtle-plus-icon";var Pn=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var v=o.length-1;v>=0;v--)(u=o[v])&&(l=(n<3?u(l):n>3?u(t,e,l):u(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class pl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,tt]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}pl.defaultTagName="turtle-question-icon";Pn([N({type:Boolean})],pl.prototype,"outlined",void 0);class Ci extends P{static get styles(){return[O,tt]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}Ci.defaultTagName="turtle-reload-icon";const On=[nl,al,sl,yi,_i,ul,cl,dl,hl,wi,xi,Ti,$i,vl,fl,Ei,Ai,Si,pl,Ci,li],Nn=[cr,hr,Ze,Uo,yr,ri,wr,fe,Yo,Ko,qo,Xo,ai,si,ci,di,hi,el,rl,vi,be,We,bi,Kt,Zr,...On];function Mn(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var Dt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Vr(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Rn={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(r,n,l){function u(C,G){if(!n[C]){if(!r[C]){var y=typeof Vr=="function"&&Vr;if(!G&&y)return y(C,!0);if(v)return v(C,!0);var E=new Error("Cannot find module '"+C+"'");throw E.code="MODULE_NOT_FOUND",E}var M=n[C]={exports:{}};r[C][0].call(M.exports,function(W){var lt=r[C][1][W];return u(lt||W)},M,M.exports,e,r,n,l)}return n[C].exports}for(var v=typeof Vr=="function"&&Vr,S=0;S<l.length;S++)u(l[S]);return u}({1:[function(e,r,n){(function(l){var u=l.MutationObserver||l.WebKitMutationObserver,v;if(u){var S=0,C=new u(W),G=l.document.createTextNode("");C.observe(G,{characterData:!0}),v=function(){G.data=S=++S%2}}else if(!l.setImmediate&&typeof l.MessageChannel!="undefined"){var y=new l.MessageChannel;y.port1.onmessage=W,v=function(){y.port2.postMessage(0)}}else"document"in l&&"onreadystatechange"in l.document.createElement("script")?v=function(){var Q=l.document.createElement("script");Q.onreadystatechange=function(){W(),Q.onreadystatechange=null,Q.parentNode.removeChild(Q),Q=null},l.document.documentElement.appendChild(Q)}:v=function(){setTimeout(W,0)};var E,M=[];function W(){E=!0;for(var Q,vt,J=M.length;J;){for(vt=M,M=[],Q=-1;++Q<J;)vt[Q]();J=M.length}E=!1}r.exports=lt;function lt(Q){M.push(Q)===1&&!E&&v()}}).call(this,typeof Dt!="undefined"?Dt:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(e,r,n){var l=e(1);function u(){}var v={},S=["REJECTED"],C=["FULFILLED"],G=["PENDING"];r.exports=y;function y(T){if(typeof T!="function")throw new TypeError("resolver must be a function");this.state=G,this.queue=[],this.outcome=void 0,T!==u&&lt(this,T)}y.prototype.catch=function(T){return this.then(null,T)},y.prototype.then=function(T,j){if(typeof T!="function"&&this.state===C||typeof j!="function"&&this.state===S)return this;var I=new this.constructor(u);if(this.state!==G){var U=this.state===C?T:j;M(I,U,this.outcome)}else this.queue.push(new E(I,T,j));return I};function E(T,j,I){this.promise=T,typeof j=="function"&&(this.onFulfilled=j,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}E.prototype.callFulfilled=function(T){v.resolve(this.promise,T)},E.prototype.otherCallFulfilled=function(T){M(this.promise,this.onFulfilled,T)},E.prototype.callRejected=function(T){v.reject(this.promise,T)},E.prototype.otherCallRejected=function(T){M(this.promise,this.onRejected,T)};function M(T,j,I){l(function(){var U;try{U=j(I)}catch(ot){return v.reject(T,ot)}U===T?v.reject(T,new TypeError("Cannot resolve promise with itself")):v.resolve(T,U)})}v.resolve=function(T,j){var I=Q(W,j);if(I.status==="error")return v.reject(T,I.value);var U=I.value;if(U)lt(T,U);else{T.state=C,T.outcome=j;for(var ot=-1,it=T.queue.length;++ot<it;)T.queue[ot].callFulfilled(j)}return T},v.reject=function(T,j){T.state=S,T.outcome=j;for(var I=-1,U=T.queue.length;++I<U;)T.queue[I].callRejected(j);return T};function W(T){var j=T&&T.then;if(T&&(typeof T=="object"||typeof T=="function")&&typeof j=="function")return function(){j.apply(T,arguments)}}function lt(T,j){var I=!1;function U(at){I||(I=!0,v.reject(T,at))}function ot(at){I||(I=!0,v.resolve(T,at))}function it(){j(ot,U)}var nt=Q(it);nt.status==="error"&&U(nt.value)}function Q(T,j){var I={};try{I.value=T(j),I.status="success"}catch(U){I.status="error",I.value=U}return I}y.resolve=vt;function vt(T){return T instanceof this?T:v.resolve(new this(u),T)}y.reject=J;function J(T){var j=new this(u);return v.reject(j,T)}y.all=me;function me(T){var j=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=T.length,U=!1;if(!I)return this.resolve([]);for(var ot=new Array(I),it=0,nt=-1,at=new this(u);++nt<I;)ft(T[nt],nt);return at;function ft(kt,qt){j.resolve(kt).then(ye,function(St){U||(U=!0,v.reject(at,St))});function ye(St){ot[qt]=St,++it===I&&!U&&(U=!0,v.resolve(at,ot))}}}y.race=wt;function wt(T){var j=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=T.length,U=!1;if(!I)return this.resolve([]);for(var ot=-1,it=new this(u);++ot<I;)nt(T[ot]);return it;function nt(at){j.resolve(at).then(function(ft){U||(U=!0,v.resolve(it,ft))},function(ft){U||(U=!0,v.reject(it,ft))})}}},{"1":1}],3:[function(e,r,n){(function(l){typeof l.Promise!="function"&&(l.Promise=e(2))}).call(this,typeof Dt!="undefined"?Dt:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(e,r,n){var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};function u(i,c){if(!(i instanceof c))throw new TypeError("Cannot call a class as a function")}function v(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var S=v();function C(){try{if(!S||!S.open)return!1;var i=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),c=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!i||c)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function G(i,c){i=i||[],c=c||{};try{return new Blob(i,c)}catch(d){if(d.name!=="TypeError")throw d;for(var a=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,f=new a,p=0;p<i.length;p+=1)f.append(i[p]);return f.getBlob(c.type)}}typeof Promise=="undefined"&&e(3);var y=Promise;function E(i,c){c&&i.then(function(a){c(null,a)},function(a){c(a)})}function M(i,c,a){typeof c=="function"&&i.then(c),typeof a=="function"&&i.catch(a)}function W(i){return typeof i!="string"&&(console.warn(i+" used as a key, but it is not a string."),i=String(i)),i}function lt(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var Q="local-forage-detect-blob-support",vt=void 0,J={},me=Object.prototype.toString,wt="readonly",T="readwrite";function j(i){for(var c=i.length,a=new ArrayBuffer(c),f=new Uint8Array(a),p=0;p<c;p++)f[p]=i.charCodeAt(p);return a}function I(i){return new y(function(c){var a=i.transaction(Q,T),f=G([""]);a.objectStore(Q).put(f,"key"),a.onabort=function(p){p.preventDefault(),p.stopPropagation(),c(!1)},a.oncomplete=function(){var p=navigator.userAgent.match(/Chrome\/(\d+)/),d=navigator.userAgent.match(/Edge\//);c(d||!p||parseInt(p[1],10)>=43)}}).catch(function(){return!1})}function U(i){return typeof vt=="boolean"?y.resolve(vt):I(i).then(function(c){return vt=c,vt})}function ot(i){var c=J[i.name],a={};a.promise=new y(function(f,p){a.resolve=f,a.reject=p}),c.deferredOperations.push(a),c.dbReady?c.dbReady=c.dbReady.then(function(){return a.promise}):c.dbReady=a.promise}function it(i){var c=J[i.name],a=c.deferredOperations.pop();if(a)return a.resolve(),a.promise}function nt(i,c){var a=J[i.name],f=a.deferredOperations.pop();if(f)return f.reject(c),f.promise}function at(i,c){return new y(function(a,f){if(J[i.name]=J[i.name]||Ye(),i.db)if(c)ot(i),i.db.close();else return a(i.db);var p=[i.name];c&&p.push(i.version);var d=S.open.apply(S,p);c&&(d.onupgradeneeded=function(b){var m=d.result;try{m.createObjectStore(i.storeName),b.oldVersion<=1&&m.createObjectStore(Q)}catch(_){if(_.name==="ConstraintError")console.warn('The database "'+i.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+i.storeName+'" already exists.');else throw _}}),d.onerror=function(b){b.preventDefault(),f(d.error)},d.onsuccess=function(){var b=d.result;b.onversionchange=function(m){m.target.close()},a(b),it(i)}})}function ft(i){return at(i,!1)}function kt(i){return at(i,!0)}function qt(i,c){if(!i.db)return!0;var a=!i.db.objectStoreNames.contains(i.storeName),f=i.version<i.db.version,p=i.version>i.db.version;if(f&&(i.version!==c&&console.warn('The database "'+i.name+`" can't be downgraded from version `+i.db.version+" to version "+i.version+"."),i.version=i.db.version),p||a){if(a){var d=i.db.version+1;d>i.version&&(i.version=d)}return!0}return!1}function ye(i){return new y(function(c,a){var f=new FileReader;f.onerror=a,f.onloadend=function(p){var d=btoa(p.target.result||"");c({__local_forage_encoded_blob:!0,data:d,type:i.type})},f.readAsBinaryString(i)})}function St(i){var c=j(atob(i.data));return G([c],{type:i.type})}function Ge(i){return i&&i.__local_forage_encoded_blob}function Wr(i){var c=this,a=c._initReady().then(function(){var f=J[c._dbInfo.name];if(f&&f.dbReady)return f.dbReady});return M(a,i,i),a}function Gr(i){ot(i);for(var c=J[i.name],a=c.forages,f=0;f<a.length;f++){var p=a[f];p._dbInfo.db&&(p._dbInfo.db.close(),p._dbInfo.db=null)}return i.db=null,ft(i).then(function(d){return i.db=d,qt(i)?kt(i):d}).then(function(d){i.db=c.db=d;for(var b=0;b<a.length;b++)a[b]._dbInfo.db=d}).catch(function(d){throw nt(i,d),d})}function pt(i,c,a,f){f===void 0&&(f=1);try{var p=i.db.transaction(i.storeName,c);a(null,p)}catch(d){if(f>0&&(!i.db||d.name==="InvalidStateError"||d.name==="NotFoundError"))return y.resolve().then(function(){if(!i.db||d.name==="NotFoundError"&&!i.db.objectStoreNames.contains(i.storeName)&&i.version<=i.db.version)return i.db&&(i.version=i.db.version+1),kt(i)}).then(function(){return Gr(i).then(function(){pt(i,c,a,f-1)})}).catch(a);a(d)}}function Ye(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Z(i){var c=this,a={db:null};if(i)for(var f in i)a[f]=i[f];var p=J[a.name];p||(p=Ye(),J[a.name]=p),p.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=Wr);var d=[];function b(){return y.resolve()}for(var m=0;m<p.forages.length;m++){var _=p.forages[m];_!==c&&d.push(_._initReady().catch(b))}var w=p.forages.slice(0);return y.all(d).then(function(){return a.db=p.db,ft(a)}).then(function(x){return a.db=x,qt(a,c._defaultConfig.version)?kt(a):x}).then(function(x){a.db=p.db=x,c._dbInfo=a;for(var A=0;A<w.length;A++){var R=w[A];R!==c&&(R._dbInfo.db=a.db,R._dbInfo.version=a.version)}})}function Ke(i,c){var a=this;i=W(i);var f=new y(function(p,d){a.ready().then(function(){pt(a._dbInfo,wt,function(b,m){if(b)return d(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.get(i);w.onsuccess=function(){var x=w.result;x===void 0&&(x=null),Ge(x)&&(x=St(x)),p(x)},w.onerror=function(){d(w.error)}}catch(x){d(x)}})}).catch(d)});return E(f,c),f}function Yr(i,c){var a=this,f=new y(function(p,d){a.ready().then(function(){pt(a._dbInfo,wt,function(b,m){if(b)return d(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.openCursor(),x=1;w.onsuccess=function(){var A=w.result;if(A){var R=A.value;Ge(R)&&(R=St(R));var B=i(R,A.key,x++);B!==void 0?p(B):A.continue()}else p()},w.onerror=function(){d(w.error)}}catch(A){d(A)}})}).catch(d)});return E(f,c),f}function jt(i,c,a){var f=this;i=W(i);var p=new y(function(d,b){var m;f.ready().then(function(){return m=f._dbInfo,me.call(c)==="[object Blob]"?U(m.db).then(function(_){return _?c:ye(c)}):c}).then(function(_){pt(f._dbInfo,T,function(w,x){if(w)return b(w);try{var A=x.objectStore(f._dbInfo.storeName);_===null&&(_=void 0);var R=A.put(_,i);x.oncomplete=function(){_===void 0&&(_=null),d(_)},x.onabort=x.onerror=function(){var B=R.error?R.error:R.transaction.error;b(B)}}catch(B){b(B)}})}).catch(b)});return E(p,a),p}function qe(i,c){var a=this;i=W(i);var f=new y(function(p,d){a.ready().then(function(){pt(a._dbInfo,T,function(b,m){if(b)return d(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.delete(i);m.oncomplete=function(){p()},m.onerror=function(){d(w.error)},m.onabort=function(){var x=w.error?w.error:w.transaction.error;d(x)}}catch(x){d(x)}})}).catch(d)});return E(f,c),f}function Bt(i){var c=this,a=new y(function(f,p){c.ready().then(function(){pt(c._dbInfo,T,function(d,b){if(d)return p(d);try{var m=b.objectStore(c._dbInfo.storeName),_=m.clear();b.oncomplete=function(){f()},b.onabort=b.onerror=function(){var w=_.error?_.error:_.transaction.error;p(w)}}catch(w){p(w)}})}).catch(p)});return E(a,i),a}function Xe(i){var c=this,a=new y(function(f,p){c.ready().then(function(){pt(c._dbInfo,wt,function(d,b){if(d)return p(d);try{var m=b.objectStore(c._dbInfo.storeName),_=m.count();_.onsuccess=function(){f(_.result)},_.onerror=function(){p(_.error)}}catch(w){p(w)}})}).catch(p)});return E(a,i),a}function _e(i,c){var a=this,f=new y(function(p,d){if(i<0){p(null);return}a.ready().then(function(){pt(a._dbInfo,wt,function(b,m){if(b)return d(b);try{var _=m.objectStore(a._dbInfo.storeName),w=!1,x=_.openKeyCursor();x.onsuccess=function(){var A=x.result;if(!A){p(null);return}i===0||w?p(A.key):(w=!0,A.advance(i))},x.onerror=function(){d(x.error)}}catch(A){d(A)}})}).catch(d)});return E(f,c),f}function Qe(i){var c=this,a=new y(function(f,p){c.ready().then(function(){pt(c._dbInfo,wt,function(d,b){if(d)return p(d);try{var m=b.objectStore(c._dbInfo.storeName),_=m.openKeyCursor(),w=[];_.onsuccess=function(){var x=_.result;if(!x){f(w);return}w.push(x.key),x.continue()},_.onerror=function(){p(_.error)}}catch(x){p(x)}})}).catch(p)});return E(a,i),a}function Je(i,c){c=lt.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var f=this,p;if(!i.name)p=y.reject("Invalid arguments");else{var d=i.name===a.name&&f._dbInfo.db,b=d?y.resolve(f._dbInfo.db):ft(i).then(function(m){var _=J[i.name],w=_.forages;_.db=m;for(var x=0;x<w.length;x++)w[x]._dbInfo.db=m;return m});i.storeName?p=b.then(function(m){if(!!m.objectStoreNames.contains(i.storeName)){var _=m.version+1;ot(i);var w=J[i.name],x=w.forages;m.close();for(var A=0;A<x.length;A++){var R=x[A];R._dbInfo.db=null,R._dbInfo.version=_}var B=new y(function(z,X){var Y=S.open(i.name,_);Y.onerror=function(st){var Vt=Y.result;Vt.close(),X(st)},Y.onupgradeneeded=function(){var st=Y.result;st.deleteObjectStore(i.storeName)},Y.onsuccess=function(){var st=Y.result;st.close(),z(st)}});return B.then(function(z){w.db=z;for(var X=0;X<x.length;X++){var Y=x[X];Y._dbInfo.db=z,it(Y._dbInfo)}}).catch(function(z){throw(nt(i,z)||y.resolve()).catch(function(){}),z})}}):p=b.then(function(m){ot(i);var _=J[i.name],w=_.forages;m.close();for(var x=0;x<w.length;x++){var A=w[x];A._dbInfo.db=null}var R=new y(function(B,z){var X=S.deleteDatabase(i.name);X.onerror=function(){var Y=X.result;Y&&Y.close(),z(X.error)},X.onblocked=function(){console.warn('dropInstance blocked for database "'+i.name+'" until all open connections are closed')},X.onsuccess=function(){var Y=X.result;Y&&Y.close(),B(Y)}});return R.then(function(B){_.db=B;for(var z=0;z<w.length;z++){var X=w[z];it(X._dbInfo)}}).catch(function(B){throw(nt(i,B)||y.resolve()).catch(function(){}),B})})}return E(p,c),p}var Kr={_driver:"asyncStorage",_initStorage:Z,_support:C(),iterate:Yr,getItem:Ke,setItem:jt,removeItem:qe,clear:Bt,length:Xe,key:_e,keys:Qe,dropInstance:Je};function qr(){return typeof openDatabase=="function"}var bt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xr="~~local_forage_type~",tr=/^~~local_forage_type~([^~]+)~/,Xt="__lfsc__:",we=Xt.length,Ct="arbf",zt="blob",Ft="si08",ct="ui08",xe="uic8",Te="si16",er="si32",rr="ur16",Ut="ui32",$e="fl32",Ee="fl64",Ae=we+Ct.length,Se=Object.prototype.toString;function Ce(i){var c=i.length*.75,a=i.length,f,p=0,d,b,m,_;i[i.length-1]==="="&&(c--,i[i.length-2]==="="&&c--);var w=new ArrayBuffer(c),x=new Uint8Array(w);for(f=0;f<a;f+=4)d=bt.indexOf(i[f]),b=bt.indexOf(i[f+1]),m=bt.indexOf(i[f+2]),_=bt.indexOf(i[f+3]),x[p++]=d<<2|b>>4,x[p++]=(b&15)<<4|m>>2,x[p++]=(m&3)<<6|_&63;return w}function Pe(i){var c=new Uint8Array(i),a="",f;for(f=0;f<c.length;f+=3)a+=bt[c[f]>>2],a+=bt[(c[f]&3)<<4|c[f+1]>>4],a+=bt[(c[f+1]&15)<<2|c[f+2]>>6],a+=bt[c[f+2]&63];return c.length%3==2?a=a.substring(0,a.length-1)+"=":c.length%3==1&&(a=a.substring(0,a.length-2)+"=="),a}function Qr(i,c){var a="";if(i&&(a=Se.call(i)),i&&(a==="[object ArrayBuffer]"||i.buffer&&Se.call(i.buffer)==="[object ArrayBuffer]")){var f,p=Xt;i instanceof ArrayBuffer?(f=i,p+=Ct):(f=i.buffer,a==="[object Int8Array]"?p+=Ft:a==="[object Uint8Array]"?p+=ct:a==="[object Uint8ClampedArray]"?p+=xe:a==="[object Int16Array]"?p+=Te:a==="[object Uint16Array]"?p+=rr:a==="[object Int32Array]"?p+=er:a==="[object Uint32Array]"?p+=Ut:a==="[object Float32Array]"?p+=$e:a==="[object Float64Array]"?p+=Ee:c(new Error("Failed to get type for BinaryArray"))),c(p+Pe(f))}else if(a==="[object Blob]"){var d=new FileReader;d.onload=function(){var b=Xr+i.type+"~"+Pe(this.result);c(Xt+zt+b)},d.readAsArrayBuffer(i)}else try{c(JSON.stringify(i))}catch(b){console.error("Couldn't convert value into a JSON string: ",i),c(null,b)}}function xt(i){if(i.substring(0,we)!==Xt)return JSON.parse(i);var c=i.substring(Ae),a=i.substring(we,Ae),f;if(a===zt&&tr.test(c)){var p=c.match(tr);f=p[1],c=c.substring(p[0].length)}var d=Ce(c);switch(a){case Ct:return d;case zt:return G([d],{type:f});case Ft:return new Int8Array(d);case ct:return new Uint8Array(d);case xe:return new Uint8ClampedArray(d);case Te:return new Int16Array(d);case rr:return new Uint16Array(d);case er:return new Int32Array(d);case Ut:return new Uint32Array(d);case $e:return new Float32Array(d);case Ee:return new Float64Array(d);default:throw new Error("Unkown type: "+a)}}var Pt={serialize:Qr,deserialize:xt,stringToBuffer:Ce,bufferToString:Pe};function or(i,c,a,f){i.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],a,f)}function lr(i){var c=this,a={db:null};if(i)for(var f in i)a[f]=typeof i[f]!="string"?i[f].toString():i[f];var p=new y(function(d,b){try{a.db=openDatabase(a.name,String(a.version),a.description,a.size)}catch(m){return b(m)}a.db.transaction(function(m){or(m,a,function(){c._dbInfo=a,d()},function(_,w){b(w)})},b)});return a.serializer=Pt,p}function mt(i,c,a,f,p,d){i.executeSql(a,f,p,function(b,m){m.code===m.SYNTAX_ERR?b.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[c.storeName],function(_,w){w.rows.length?d(_,m):or(_,c,function(){_.executeSql(a,f,p,d)},d)},d):d(b,m)},d)}function ir(i,c){var a=this;i=W(i);var f=new y(function(p,d){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){mt(m,b,"SELECT * FROM "+b.storeName+" WHERE key = ? LIMIT 1",[i],function(_,w){var x=w.rows.length?w.rows.item(0).value:null;x&&(x=b.serializer.deserialize(x)),p(x)},function(_,w){d(w)})})}).catch(d)});return E(f,c),f}function Ht(i,c){var a=this,f=new y(function(p,d){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){mt(m,b,"SELECT * FROM "+b.storeName,[],function(_,w){for(var x=w.rows,A=x.length,R=0;R<A;R++){var B=x.item(R),z=B.value;if(z&&(z=b.serializer.deserialize(z)),z=i(z,B.key,R+1),z!==void 0){p(z);return}}p()},function(_,w){d(w)})})}).catch(d)});return E(f,c),f}function nr(i,c,a,f){var p=this;i=W(i);var d=new y(function(b,m){p.ready().then(function(){c===void 0&&(c=null);var _=c,w=p._dbInfo;w.serializer.serialize(c,function(x,A){A?m(A):w.db.transaction(function(R){mt(R,w,"INSERT OR REPLACE INTO "+w.storeName+" (key, value) VALUES (?, ?)",[i,x],function(){b(_)},function(B,z){m(z)})},function(R){if(R.code===R.QUOTA_ERR){if(f>0){b(nr.apply(p,[i,_,a,f-1]));return}m(R)}})})}).catch(m)});return E(d,a),d}function Tt(i,c,a){return nr.apply(this,[i,c,a,1])}function Jr(i,c){var a=this;i=W(i);var f=new y(function(p,d){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){mt(m,b,"DELETE FROM "+b.storeName+" WHERE key = ?",[i],function(){p()},function(_,w){d(w)})})}).catch(d)});return E(f,c),f}function to(i){var c=this,a=new y(function(f,p){c.ready().then(function(){var d=c._dbInfo;d.db.transaction(function(b){mt(b,d,"DELETE FROM "+d.storeName,[],function(){f()},function(m,_){p(_)})})}).catch(p)});return E(a,i),a}function eo(i){var c=this,a=new y(function(f,p){c.ready().then(function(){var d=c._dbInfo;d.db.transaction(function(b){mt(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(m,_){var w=_.rows.item(0).c;f(w)},function(m,_){p(_)})})}).catch(p)});return E(a,i),a}function ro(i,c){var a=this,f=new y(function(p,d){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){mt(m,b,"SELECT key FROM "+b.storeName+" WHERE id = ? LIMIT 1",[i+1],function(_,w){var x=w.rows.length?w.rows.item(0).key:null;p(x)},function(_,w){d(w)})})}).catch(d)});return E(f,c),f}function oo(i){var c=this,a=new y(function(f,p){c.ready().then(function(){var d=c._dbInfo;d.db.transaction(function(b){mt(b,d,"SELECT key FROM "+d.storeName,[],function(m,_){for(var w=[],x=0;x<_.rows.length;x++)w.push(_.rows.item(x).key);f(w)},function(m,_){p(_)})})}).catch(p)});return E(a,i),a}function gt(i){return new y(function(c,a){i.transaction(function(f){f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(p,d){for(var b=[],m=0;m<d.rows.length;m++)b.push(d.rows.item(m).name);c({db:i,storeNames:b})},function(p,d){a(d)})},function(f){a(f)})})}function lo(i,c){c=lt.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var f=this,p;return i.name?p=new y(function(d){var b;i.name===a.name?b=f._dbInfo.db:b=openDatabase(i.name,"","",0),i.storeName?d({db:b,storeNames:[i.storeName]}):d(gt(b))}).then(function(d){return new y(function(b,m){d.db.transaction(function(_){function w(B){return new y(function(z,X){_.executeSql("DROP TABLE IF EXISTS "+B,[],function(){z()},function(Y,st){X(st)})})}for(var x=[],A=0,R=d.storeNames.length;A<R;A++)x.push(w(d.storeNames[A]));y.all(x).then(function(){b()}).catch(function(B){m(B)})},function(_){m(_)})})}):p=y.reject("Invalid arguments"),E(p,c),p}var io={_driver:"webSQLStorage",_initStorage:lr,_support:qr(),iterate:Ht,getItem:ir,setItem:Tt,removeItem:Jr,clear:to,length:eo,key:ro,keys:oo,dropInstance:lo};function no(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function ar(i,c){var a=i.name+"/";return i.storeName!==c.storeName&&(a+=i.storeName+"/"),a}function ao(){var i="_localforage_support_test";try{return localStorage.setItem(i,!0),localStorage.removeItem(i),!1}catch{return!0}}function Ot(){return!ao()||localStorage.length>0}function so(i){var c=this,a={};if(i)for(var f in i)a[f]=i[f];return a.keyPrefix=ar(i,c._defaultConfig),Ot()?(c._dbInfo=a,a.serializer=Pt,y.resolve()):y.reject()}function uo(i){var c=this,a=c.ready().then(function(){for(var f=c._dbInfo.keyPrefix,p=localStorage.length-1;p>=0;p--){var d=localStorage.key(p);d.indexOf(f)===0&&localStorage.removeItem(d)}});return E(a,i),a}function co(i,c){var a=this;i=W(i);var f=a.ready().then(function(){var p=a._dbInfo,d=localStorage.getItem(p.keyPrefix+i);return d&&(d=p.serializer.deserialize(d)),d});return E(f,c),f}function ho(i,c){var a=this,f=a.ready().then(function(){for(var p=a._dbInfo,d=p.keyPrefix,b=d.length,m=localStorage.length,_=1,w=0;w<m;w++){var x=localStorage.key(w);if(x.indexOf(d)===0){var A=localStorage.getItem(x);if(A&&(A=p.serializer.deserialize(A)),A=i(A,x.substring(b),_++),A!==void 0)return A}}});return E(f,c),f}function vo(i,c){var a=this,f=a.ready().then(function(){var p=a._dbInfo,d;try{d=localStorage.key(i)}catch{d=null}return d&&(d=d.substring(p.keyPrefix.length)),d});return E(f,c),f}function Rt(i){var c=this,a=c.ready().then(function(){for(var f=c._dbInfo,p=localStorage.length,d=[],b=0;b<p;b++){var m=localStorage.key(b);m.indexOf(f.keyPrefix)===0&&d.push(m.substring(f.keyPrefix.length))}return d});return E(a,i),a}function fo(i){var c=this,a=c.keys().then(function(f){return f.length});return E(a,i),a}function po(i,c){var a=this;i=W(i);var f=a.ready().then(function(){var p=a._dbInfo;localStorage.removeItem(p.keyPrefix+i)});return E(f,c),f}function go(i,c,a){var f=this;i=W(i);var p=f.ready().then(function(){c===void 0&&(c=null);var d=c;return new y(function(b,m){var _=f._dbInfo;_.serializer.serialize(c,function(w,x){if(x)m(x);else try{localStorage.setItem(_.keyPrefix+i,w),b(d)}catch(A){(A.name==="QuotaExceededError"||A.name==="NS_ERROR_DOM_QUOTA_REACHED")&&m(A),m(A)}})})});return E(p,a),p}function bo(i,c){if(c=lt.apply(this,arguments),i=typeof i!="function"&&i||{},!i.name){var a=this.config();i.name=i.name||a.name,i.storeName=i.storeName||a.storeName}var f=this,p;return i.name?p=new y(function(d){i.storeName?d(ar(i,f._defaultConfig)):d(i.name+"/")}).then(function(d){for(var b=localStorage.length-1;b>=0;b--){var m=localStorage.key(b);m.indexOf(d)===0&&localStorage.removeItem(m)}}):p=y.reject("Invalid arguments"),E(p,c),p}var mo={_driver:"localStorageWrapper",_initStorage:so,_support:no(),iterate:ho,getItem:co,setItem:go,removeItem:po,clear:uo,length:fo,key:vo,keys:Rt,dropInstance:bo},yo=function(c,a){return c===a||typeof c=="number"&&typeof a=="number"&&isNaN(c)&&isNaN(a)},Oe=function(c,a){for(var f=c.length,p=0;p<f;){if(yo(c[p],a))return!0;p++}return!1},sr=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"},yt={},Qt={},It={INDEXEDDB:Kr,WEBSQL:io,LOCALSTORAGE:mo},Jt=[It.INDEXEDDB._driver,It.WEBSQL._driver,It.LOCALSTORAGE._driver],Zt=["dropInstance"],Re=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Zt),_o={description:"",driver:Jt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function wo(i,c){i[c]=function(){var a=arguments;return i.ready().then(function(){return i[c].apply(i,a)})}}function te(){for(var i=1;i<arguments.length;i++){var c=arguments[i];if(c)for(var a in c)c.hasOwnProperty(a)&&(sr(c[a])?arguments[0][a]=c[a].slice():arguments[0][a]=c[a])}return arguments[0]}var xo=function(){function i(c){u(this,i);for(var a in It)if(It.hasOwnProperty(a)){var f=It[a],p=f._driver;this[a]=p,yt[p]||this.defineDriver(f)}this._defaultConfig=te({},_o),this._config=te({},this._defaultConfig,c),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return i.prototype.config=function(a){if((typeof a=="undefined"?"undefined":l(a))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var f in a){if(f==="storeName"&&(a[f]=a[f].replace(/\W/g,"_")),f==="version"&&typeof a[f]!="number")return new Error("Database version must be a number.");this._config[f]=a[f]}return"driver"in a&&a.driver?this.setDriver(this._config.driver):!0}else return typeof a=="string"?this._config[a]:this._config},i.prototype.defineDriver=function(a,f,p){var d=new y(function(b,m){try{var _=a._driver,w=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver){m(w);return}for(var x=Re.concat("_initStorage"),A=0,R=x.length;A<R;A++){var B=x[A],z=!Oe(Zt,B);if((z||a[B])&&typeof a[B]!="function"){m(w);return}}var X=function(){for(var Vt=function($o){return function(){var ee=new Error("Method "+$o+" is not implemented by the current driver"),re=y.reject(ee);return E(re,arguments[arguments.length-1]),re}},Ie=0,Ne=Zt.length;Ie<Ne;Ie++){var Me=Zt[Ie];a[Me]||(a[Me]=Vt(Me))}};X();var Y=function(Vt){yt[_]&&console.info("Redefining LocalForage driver: "+_),yt[_]=a,Qt[_]=Vt,b()};"_support"in a?a._support&&typeof a._support=="function"?a._support().then(Y,m):Y(!!a._support):Y(!0)}catch(st){m(st)}});return M(d,f,p),d},i.prototype.driver=function(){return this._driver||null},i.prototype.getDriver=function(a,f,p){var d=yt[a]?y.resolve(yt[a]):y.reject(new Error("Driver not found."));return M(d,f,p),d},i.prototype.getSerializer=function(a){var f=y.resolve(Pt);return M(f,a),f},i.prototype.ready=function(a){var f=this,p=f._driverSet.then(function(){return f._ready===null&&(f._ready=f._initDriver()),f._ready});return M(p,a,a),p},i.prototype.setDriver=function(a,f,p){var d=this;sr(a)||(a=[a]);var b=this._getSupportedDrivers(a);function m(){d._config.driver=d.driver()}function _(A){return d._extend(A),m(),d._ready=d._initStorage(d._config),d._ready}function w(A){return function(){var R=0;function B(){for(;R<A.length;){var z=A[R];return R++,d._dbInfo=null,d._ready=null,d.getDriver(z).then(_).catch(B)}m();var X=new Error("No available storage method found.");return d._driverSet=y.reject(X),d._driverSet}return B()}}var x=this._driverSet!==null?this._driverSet.catch(function(){return y.resolve()}):y.resolve();return this._driverSet=x.then(function(){var A=b[0];return d._dbInfo=null,d._ready=null,d.getDriver(A).then(function(R){d._driver=R._driver,m(),d._wrapLibraryMethodsWithReady(),d._initDriver=w(b)})}).catch(function(){m();var A=new Error("No available storage method found.");return d._driverSet=y.reject(A),d._driverSet}),M(this._driverSet,f,p),this._driverSet},i.prototype.supports=function(a){return!!Qt[a]},i.prototype._extend=function(a){te(this,a)},i.prototype._getSupportedDrivers=function(a){for(var f=[],p=0,d=a.length;p<d;p++){var b=a[p];this.supports(b)&&f.push(b)}return f},i.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,f=Re.length;a<f;a++)wo(this,Re[a])},i.prototype.createInstance=function(a){return new i(a)},i}(),To=new xo;r.exports=To},{"3":3}]},{},[4])(4)})})(Rn);var gl={exports:{}};(function(o,t){var e=200,r="__lodash_hash_undefined__",n=800,l=16,u=9007199254740991,v="[object Arguments]",S="[object Array]",C="[object AsyncFunction]",G="[object Boolean]",y="[object Date]",E="[object Error]",M="[object Function]",W="[object GeneratorFunction]",lt="[object Map]",Q="[object Number]",vt="[object Null]",J="[object Object]",me="[object Proxy]",wt="[object RegExp]",T="[object Set]",j="[object String]",I="[object Undefined]",U="[object WeakMap]",ot="[object ArrayBuffer]",it="[object DataView]",nt="[object Float32Array]",at="[object Float64Array]",ft="[object Int8Array]",kt="[object Int16Array]",qt="[object Int32Array]",ye="[object Uint8Array]",St="[object Uint8ClampedArray]",Ge="[object Uint16Array]",Wr="[object Uint32Array]",Gr=/[\\^$.*+?()[\]{}|]/g,pt=/^\[object .+?Constructor\]$/,Ye=/^(?:0|[1-9]\d*)$/,Z={};Z[nt]=Z[at]=Z[ft]=Z[kt]=Z[qt]=Z[ye]=Z[St]=Z[Ge]=Z[Wr]=!0,Z[v]=Z[S]=Z[ot]=Z[G]=Z[it]=Z[y]=Z[E]=Z[M]=Z[lt]=Z[Q]=Z[J]=Z[wt]=Z[T]=Z[j]=Z[U]=!1;var Ke=typeof Dt=="object"&&Dt&&Dt.Object===Object&&Dt,Yr=typeof self=="object"&&self&&self.Object===Object&&self,jt=Ke||Yr||Function("return this")(),qe=t&&!t.nodeType&&t,Bt=qe&&!0&&o&&!o.nodeType&&o,Xe=Bt&&Bt.exports===qe,_e=Xe&&Ke.process,Qe=function(){try{var s=Bt&&Bt.require&&Bt.require("util").types;return s||_e&&_e.binding&&_e.binding("util")}catch{}}(),Je=Qe&&Qe.isTypedArray;function Kr(s,h,g){switch(g.length){case 0:return s.call(h);case 1:return s.call(h,g[0]);case 2:return s.call(h,g[0],g[1]);case 3:return s.call(h,g[0],g[1],g[2])}return s.apply(h,g)}function qr(s,h){for(var g=-1,$=Array(s);++g<s;)$[g]=h(g);return $}function bt(s){return function(h){return s(h)}}function Xr(s,h){return s==null?void 0:s[h]}function tr(s,h){return function(g){return s(h(g))}}var Xt=Array.prototype,we=Function.prototype,Ct=Object.prototype,zt=jt["__core-js_shared__"],Ft=we.toString,ct=Ct.hasOwnProperty,xe=function(){var s=/[^.]+$/.exec(zt&&zt.keys&&zt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Te=Ct.toString,er=Ft.call(Object),rr=RegExp("^"+Ft.call(ct).replace(Gr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ut=Xe?jt.Buffer:void 0,$e=jt.Symbol,Ee=jt.Uint8Array,Ae=Ut?Ut.allocUnsafe:void 0,Se=tr(Object.getPrototypeOf,Object),Ce=Object.create,Pe=Ct.propertyIsEnumerable,Qr=Xt.splice,xt=$e?$e.toStringTag:void 0,Pt=function(){try{var s=w(Object,"defineProperty");return s({},"",{}),s}catch{}}(),or=Ut?Ut.isBuffer:void 0,lr=Math.max,mt=Date.now,ir=w(jt,"Map"),Ht=w(Object,"create"),nr=function(){function s(){}return function(h){if(!Wt(h))return{};if(Ce)return Ce(h);s.prototype=h;var g=new s;return s.prototype=void 0,g}}();function Tt(s){var h=-1,g=s==null?0:s.length;for(this.clear();++h<g;){var $=s[h];this.set($[0],$[1])}}function Jr(){this.__data__=Ht?Ht(null):{},this.size=0}function to(s){var h=this.has(s)&&delete this.__data__[s];return this.size-=h?1:0,h}function eo(s){var h=this.__data__;if(Ht){var g=h[s];return g===r?void 0:g}return ct.call(h,s)?h[s]:void 0}function ro(s){var h=this.__data__;return Ht?h[s]!==void 0:ct.call(h,s)}function oo(s,h){var g=this.__data__;return this.size+=this.has(s)?0:1,g[s]=Ht&&h===void 0?r:h,this}Tt.prototype.clear=Jr,Tt.prototype.delete=to,Tt.prototype.get=eo,Tt.prototype.has=ro,Tt.prototype.set=oo;function gt(s){var h=-1,g=s==null?0:s.length;for(this.clear();++h<g;){var $=s[h];this.set($[0],$[1])}}function lo(){this.__data__=[],this.size=0}function io(s){var h=this.__data__,g=yt(h,s);if(g<0)return!1;var $=h.length-1;return g==$?h.pop():Qr.call(h,g,1),--this.size,!0}function no(s){var h=this.__data__,g=yt(h,s);return g<0?void 0:h[g][1]}function ar(s){return yt(this.__data__,s)>-1}function ao(s,h){var g=this.__data__,$=yt(g,s);return $<0?(++this.size,g.push([s,h])):g[$][1]=h,this}gt.prototype.clear=lo,gt.prototype.delete=io,gt.prototype.get=no,gt.prototype.has=ar,gt.prototype.set=ao;function Ot(s){var h=-1,g=s==null?0:s.length;for(this.clear();++h<g;){var $=s[h];this.set($[0],$[1])}}function so(){this.size=0,this.__data__={hash:new Tt,map:new(ir||gt),string:new Tt}}function uo(s){var h=_(this,s).delete(s);return this.size-=h?1:0,h}function co(s){return _(this,s).get(s)}function ho(s){return _(this,s).has(s)}function vo(s,h){var g=_(this,s),$=g.size;return g.set(s,h),this.size+=g.size==$?0:1,this}Ot.prototype.clear=so,Ot.prototype.delete=uo,Ot.prototype.get=co,Ot.prototype.has=ho,Ot.prototype.set=vo;function Rt(s){var h=this.__data__=new gt(s);this.size=h.size}function fo(){this.__data__=new gt,this.size=0}function po(s){var h=this.__data__,g=h.delete(s);return this.size=h.size,g}function go(s){return this.__data__.get(s)}function bo(s){return this.__data__.has(s)}function mo(s,h){var g=this.__data__;if(g instanceof gt){var $=g.__data__;if(!ir||$.length<e-1)return $.push([s,h]),this.size=++g.size,this;g=this.__data__=new Ot($)}return g.set(s,h),this.size=g.size,this}Rt.prototype.clear=fo,Rt.prototype.delete=po,Rt.prototype.get=go,Rt.prototype.has=bo,Rt.prototype.set=mo;function yo(s,h){var g=Eo(s),$=!g&&re(s),k=!g&&!$&&ml(s),V=!g&&!$&&!k&&_l(s),K=g||$||k||V,L=K?qr(s.length,String):[],q=L.length;for(var dt in s)(h||ct.call(s,dt))&&!(K&&(dt=="length"||k&&(dt=="offset"||dt=="parent")||V&&(dt=="buffer"||dt=="byteLength"||dt=="byteOffset")||R(dt,q)))&&L.push(dt);return L}function Oe(s,h,g){(g!==void 0&&!ee(s[h],g)||g===void 0&&!(h in s))&&Qt(s,h,g)}function sr(s,h,g){var $=s[h];(!(ct.call(s,h)&&ee($,g))||g===void 0&&!(h in s))&&Qt(s,h,g)}function yt(s,h){for(var g=s.length;g--;)if(ee(s[g][0],h))return g;return-1}function Qt(s,h,g){h=="__proto__"&&Pt?Pt(s,h,{configurable:!0,enumerable:!0,value:g,writable:!0}):s[h]=g}var It=m();function Jt(s){return s==null?s===void 0?I:vt:xt&&xt in Object(s)?x(s):Vt(s)}function Zt(s){return Le(s)&&Jt(s)==v}function Re(s){if(!Wt(s)||X(s))return!1;var h=So(s)?rr:pt;return h.test($o(s))}function _o(s){return Le(s)&&yl(s.length)&&!!Z[Jt(s)]}function wo(s){if(!Wt(s))return st(s);var h=Y(s),g=[];for(var $ in s)$=="constructor"&&(h||!ct.call(s,$))||g.push($);return g}function te(s,h,g,$,k){s!==h&&It(h,function(V,K){if(k||(k=new Rt),Wt(V))xo(s,h,K,g,te,$,k);else{var L=$?$(Ne(s,K),V,K+"",s,h,k):void 0;L===void 0&&(L=V),Oe(s,K,L)}},wl)}function xo(s,h,g,$,k,V,K){var L=Ne(s,g),q=Ne(h,g),dt=K.get(q);if(dt){Oe(s,g,dt);return}var ut=V?V(L,q,g+"",s,h,K):void 0,De=ut===void 0;if(De){var Co=Eo(q),Po=!Co&&ml(q),Tl=!Co&&!Po&&_l(q);ut=q,Co||Po||Tl?Eo(L)?ut=L:Pi(L)?ut=p(L):Po?(De=!1,ut=c(q,!0)):Tl?(De=!1,ut=f(q,!0)):ut=[]:Oi(q)||re(q)?(ut=L,re(L)?ut=Ri(L):(!Wt(L)||So(L))&&(ut=A(q))):De=!1}De&&(K.set(q,ut),k(ut,q,$,V,K),K.delete(q)),Oe(s,g,ut)}function To(s,h){return Me(Ie(s,h,xl),s+"")}var i=Pt?function(s,h){return Pt(s,"toString",{configurable:!0,enumerable:!1,value:Ni(h),writable:!0})}:xl;function c(s,h){if(h)return s.slice();var g=s.length,$=Ae?Ae(g):new s.constructor(g);return s.copy($),$}function a(s){var h=new s.constructor(s.byteLength);return new Ee(h).set(new Ee(s)),h}function f(s,h){var g=h?a(s.buffer):s.buffer;return new s.constructor(g,s.byteOffset,s.length)}function p(s,h){var g=-1,$=s.length;for(h||(h=Array($));++g<$;)h[g]=s[g];return h}function d(s,h,g,$){var k=!g;g||(g={});for(var V=-1,K=h.length;++V<K;){var L=h[V],q=$?$(g[L],s[L],L,g,s):void 0;q===void 0&&(q=s[L]),k?Qt(g,L,q):sr(g,L,q)}return g}function b(s){return To(function(h,g){var $=-1,k=g.length,V=k>1?g[k-1]:void 0,K=k>2?g[2]:void 0;for(V=s.length>3&&typeof V=="function"?(k--,V):void 0,K&&B(g[0],g[1],K)&&(V=k<3?void 0:V,k=1),h=Object(h);++$<k;){var L=g[$];L&&s(h,L,$,V)}return h})}function m(s){return function(h,g,$){for(var k=-1,V=Object(h),K=$(h),L=K.length;L--;){var q=K[s?L:++k];if(g(V[q],q,V)===!1)break}return h}}function _(s,h){var g=s.__data__;return z(h)?g[typeof h=="string"?"string":"hash"]:g.map}function w(s,h){var g=Xr(s,h);return Re(g)?g:void 0}function x(s){var h=ct.call(s,xt),g=s[xt];try{s[xt]=void 0;var $=!0}catch{}var k=Te.call(s);return $&&(h?s[xt]=g:delete s[xt]),k}function A(s){return typeof s.constructor=="function"&&!Y(s)?nr(Se(s)):{}}function R(s,h){var g=typeof s;return h=h==null?u:h,!!h&&(g=="number"||g!="symbol"&&Ye.test(s))&&s>-1&&s%1==0&&s<h}function B(s,h,g){if(!Wt(g))return!1;var $=typeof h;return($=="number"?Ao(g)&&R(h,g.length):$=="string"&&h in g)?ee(g[h],s):!1}function z(s){var h=typeof s;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?s!=="__proto__":s===null}function X(s){return!!xe&&xe in s}function Y(s){var h=s&&s.constructor,g=typeof h=="function"&&h.prototype||Ct;return s===g}function st(s){var h=[];if(s!=null)for(var g in Object(s))h.push(g);return h}function Vt(s){return Te.call(s)}function Ie(s,h,g){return h=lr(h===void 0?s.length-1:h,0),function(){for(var $=arguments,k=-1,V=lr($.length-h,0),K=Array(V);++k<V;)K[k]=$[h+k];k=-1;for(var L=Array(h+1);++k<h;)L[k]=$[k];return L[h]=g(K),Kr(s,this,L)}}function Ne(s,h){if(!(h==="constructor"&&typeof s[h]=="function")&&h!="__proto__")return s[h]}var Me=bl(i);function bl(s){var h=0,g=0;return function(){var $=mt(),k=l-($-g);if(g=$,k>0){if(++h>=n)return arguments[0]}else h=0;return s.apply(void 0,arguments)}}function $o(s){if(s!=null){try{return Ft.call(s)}catch{}try{return s+""}catch{}}return""}function ee(s,h){return s===h||s!==s&&h!==h}var re=Zt(function(){return arguments}())?Zt:function(s){return Le(s)&&ct.call(s,"callee")&&!Pe.call(s,"callee")},Eo=Array.isArray;function Ao(s){return s!=null&&yl(s.length)&&!So(s)}function Pi(s){return Le(s)&&Ao(s)}var ml=or||Mi;function So(s){if(!Wt(s))return!1;var h=Jt(s);return h==M||h==W||h==C||h==me}function yl(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function Wt(s){var h=typeof s;return s!=null&&(h=="object"||h=="function")}function Le(s){return s!=null&&typeof s=="object"}function Oi(s){if(!Le(s)||Jt(s)!=J)return!1;var h=Se(s);if(h===null)return!0;var g=ct.call(h,"constructor")&&h.constructor;return typeof g=="function"&&g instanceof g&&Ft.call(g)==er}var _l=Je?bt(Je):_o;function Ri(s){return d(s,wl(s))}function wl(s){return Ao(s)?yo(s,!0):wo(s)}var Ii=b(function(s,h,g){te(s,h,g)});function Ni(s){return function(){return s}}function xl(s){return s}function Mi(){return!1}o.exports=Ii})(gl,gl.exports);var Ln=gl.exports;export{Nn as a,Rn as l,Ln as m,Mn as r};
