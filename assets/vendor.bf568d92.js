var ri=Object.defineProperty,oi=Object.defineProperties;var li=Object.getOwnPropertyDescriptors;var Xr=Object.getOwnPropertySymbols;var ii=Object.prototype.hasOwnProperty,ni=Object.prototype.propertyIsEnumerable;var qr=(o,t,e)=>t in o?ri(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Ze=(o,t)=>{for(var e in t||(t={}))ii.call(t,e)&&qr(o,e,t[e]);if(Xr)for(var e of Xr(t))ni.call(t,e)&&qr(o,e,t[e]);return o},Ve=(o,t)=>oi(o,li(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),Jr=new Map;class to{constructor(t,e){if(this._$cssResult$=!0,e!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Jr.get(this.cssText);return We&&t===void 0&&(Jr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const ai=o=>new to(typeof o=="string"?o:o+"",Ge),M=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,n,l)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[l+1],o[0]);return new to(e,Ge)},si=(o,t)=>{We?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},eo=We?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ai(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye;const ro=window.trustedTypes,ui=ro?ro.emptyScript:"",oo=window.reactiveElementPolyfillSupport,Ke={toAttribute(o,t){switch(t){case Boolean:o=o?ui:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},lo=(o,t)=>t!==o&&(t==t||o==o),Qe={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:lo};class mt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=Qe){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(eo(n))}else t!==void 0&&e.push(eo(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return si(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Qe){var n,l;const s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){const d=((l=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&l!==void 0?l:Ke.toAttribute)(e,r.type);this._$Ei=t,d==null?this.removeAttribute(s):this.setAttribute(s,d),this._$Ei=null}}_$AK(t,e){var r,n,l;const s=this.constructor,d=s._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const T=s.getPropertyOptions(d),$=T.converter,j=(l=(n=(r=$)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof $=="function"?$:null)!==null&&l!==void 0?l:Ke.fromAttribute;this._$Ei=d,this[d]=j(e,T.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||lo)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,l)=>this[l]=n),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var l;return(l=n.hostUpdate)===null||l===void 0?void 0:l.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},oo==null||oo({ReactiveElement:mt}),((Ye=globalThis.reactiveElementVersions)!==null&&Ye!==void 0?Ye:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe;const yt=globalThis.trustedTypes,io=yt?yt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ut=`lit$${(Math.random()+"").slice(9)}$`,no="?"+ut,ci=`<${no}>`,wt=document,Mt=(o="")=>wt.createComment(o),Dt=o=>o===null||typeof o!="object"&&typeof o!="function",ao=Array.isArray,di=o=>{var t;return ao(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,uo=/>/g,vt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,co=/'/g,ho=/"/g,vo=/^(?:script|style|textarea)$/i,fo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),I=fo(1),R=fo(2),ct=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),po=new WeakMap,hi=(o,t,e)=>{var r,n;const l=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let s=l._$litPart$;if(s===void 0){const d=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=s=new zt(t.insertBefore(Mt(),d),d,void 0,e!=null?e:{})}return s._$AI(o),s},_t=wt.createTreeWalker(wt,129,null,!1),vi=(o,t)=>{const e=o.length-1,r=[];let n,l=t===2?"<svg>":"",s=Bt;for(let T=0;T<e;T++){const $=o[T];let j,g,_=-1,O=0;for(;O<$.length&&(s.lastIndex=O,g=s.exec($),g!==null);)O=s.lastIndex,s===Bt?g[1]==="!--"?s=so:g[1]!==void 0?s=uo:g[2]!==void 0?(vo.test(g[2])&&(n=RegExp("</"+g[2],"g")),s=vt):g[3]!==void 0&&(s=vt):s===vt?g[0]===">"?(s=n!=null?n:Bt,_=-1):g[1]===void 0?_=-2:(_=s.lastIndex-g[2].length,j=g[1],s=g[3]===void 0?vt:g[3]==='"'?ho:co):s===ho||s===co?s=vt:s===so||s===uo?s=Bt:(s=vt,n=void 0);const B=s===vt&&o[T+1].startsWith("/>")?" ":"";l+=s===Bt?$+ci:_>=0?(r.push(j),$.slice(0,_)+"$lit$"+$.slice(_)+ut+B):$+ut+(_===-2?(r.push(void 0),T):B)}const d=l+(o[e]||"<?>")+(t===2?"</svg>":"");return[io!==void 0?io.createHTML(d):d,r]};class jt{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let l=0,s=0;const d=t.length-1,T=this.parts,[$,j]=vi(t,e);if(this.el=jt.createElement($,r),_t.currentNode=this.el.content,e===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(n=_t.nextNode())!==null&&T.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const g=[];for(const _ of n.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(ut)){const O=j[s++];if(g.push(_),O!==void 0){const B=n.getAttribute(O.toLowerCase()+"$lit$").split(ut),Y=/([.?@])?(.*)/.exec(O);T.push({type:1,index:l,name:Y[2],strings:B,ctor:Y[1]==="."?pi:Y[1]==="?"?bi:Y[1]==="@"?mi:Kt})}else T.push({type:6,index:l})}for(const _ of g)n.removeAttribute(_)}if(vo.test(n.tagName)){const g=n.textContent.split(ut),_=g.length-1;if(_>0){n.textContent=yt?yt.emptyScript:"";for(let O=0;O<_;O++)n.append(g[O],Mt()),_t.nextNode(),T.push({type:2,index:++l});n.append(g[_],Mt())}}}else if(n.nodeType===8)if(n.data===no)T.push({type:2,index:l});else{let g=-1;for(;(g=n.data.indexOf(ut,g+1))!==-1;)T.push({type:7,index:l}),g+=ut.length-1}l++}}static createElement(t,e){const r=wt.createElement("template");return r.innerHTML=t,r}}function xt(o,t,e=o,r){var n,l,s,d;if(t===ct)return t;let T=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu;const $=Dt(t)?void 0:t._$litDirective$;return(T==null?void 0:T.constructor)!==$&&((l=T==null?void 0:T._$AO)===null||l===void 0||l.call(T,!1),$===void 0?T=void 0:(T=new $(o),T._$AT(o,e,r)),r!==void 0?((s=(d=e)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[r]=T:e._$Cu=T),T!==void 0&&(t=xt(o,T._$AS(o,t.values),T,r)),t}class fi{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:wt).importNode(r,!0);_t.currentNode=l;let s=_t.nextNode(),d=0,T=0,$=n[0];for(;$!==void 0;){if(d===$.index){let j;$.type===2?j=new zt(s,s.nextSibling,this,t):$.type===1?j=new $.ctor(s,$.name,$.strings,this,t):$.type===6&&(j=new yi(s,this,t)),this.v.push(j),$=n[++T]}d!==($==null?void 0:$.index)&&(s=_t.nextNode(),d++)}return l}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class zt{constructor(t,e,r,n){var l;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(l=n==null?void 0:n.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Dt(t)?t===H||t==null||t===""?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==ct&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):di(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&Dt(this._$AH)?this._$AA.nextSibling.data=t:this.S(wt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,l=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=jt.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.m(r);else{const s=new fi(l,this),d=s.p(this.options);s.m(r),this.S(d),this._$AH=s}}_$AC(t){let e=po.get(t.strings);return e===void 0&&po.set(t.strings,e=new jt(t)),e}M(t){ao(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const l of t)n===e.length?e.push(r=new zt(this.A(Mt()),this.A(Mt()),this,this.options)):r=e[n],r._$AI(l),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Kt{constructor(t,e,r,n,l){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const l=this.strings;let s=!1;if(l===void 0)t=xt(this,t,e,0),s=!Dt(t)||t!==this._$AH&&t!==ct,s&&(this._$AH=t);else{const d=t;let T,$;for(t=l[0],T=0;T<l.length-1;T++)$=xt(this,d[r+T],e,T),$===ct&&($=this._$AH[T]),s||(s=!Dt($)||$!==this._$AH[T]),$===H?t=H:t!==H&&(t+=($!=null?$:"")+l[T+1]),this._$AH[T]=$}s&&!n&&this.k(t)}k(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class pi extends Kt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===H?void 0:t}}const gi=yt?yt.emptyScript:"";class bi extends Kt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==H?this.element.setAttribute(this.name,gi):this.element.removeAttribute(this.name)}}class mi extends Kt{constructor(t,e,r,n,l){super(t,e,r,n,l),this.type=5}_$AI(t,e=this){var r;if((t=(r=xt(this,t,e,0))!==null&&r!==void 0?r:H)===ct)return;const n=this._$AH,l=t===H&&n!==H||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==H&&(n===H||l);l&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class yi{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const go=window.litHtmlPolyfillSupport;go==null||go(jt,zt),((Xe=globalThis.litHtmlVersions)!==null&&Xe!==void 0?Xe:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qe,Je;class E extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=hi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ct}}E.finalized=!0,E._$litElement$=!0,(qe=globalThis.litElementHydrateSupport)===null||qe===void 0||qe.call(globalThis,{LitElement:E});const bo=globalThis.litElementPolyfillSupport;bo==null||bo({LitElement:E});((Je=globalThis.litElementVersions)!==null&&Je!==void 0?Je:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ve(Ze({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function P(o){return(t,e)=>e!==void 0?((r,n,l)=>{n.constructor.createProperty(l,r)})(o,t,e):wi(o,t)}const A=M`
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
`;var mo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Qt extends E{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[A,M`
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
      `]}render(){return I`
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
    `}}Qt.defaultTagName="turtle-avatar";mo([P({type:Boolean,reflect:!0})],Qt.prototype,"bordered",void 0);mo([P({type:String,attribute:"placeholder-alt"})],Qt.prototype,"placeholderAlt",void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yo=o=>(...t)=>({_$litDirective$:o,values:t});class wo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=yo(class extends wo{constructor(o){var t;if(super(o),o.type!==Xt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const r in t)this.ut.add(r);return this.render(t)}this.ut.forEach(r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const n=t[r];n!=null&&(this.ut.add(r),r.includes("-")?e.setProperty(r,n):e[r]=n)}return ct}});var _o=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class qt extends E{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[A,M`
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
      `]}render(){return I`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${tr({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}qt.defaultTagName="turtle-balloon";_o([P({type:String,attribute:"tail-position"})],qt.prototype,"tailPosition",void 0);_o([P({type:Number,attribute:"tail-offset"})],qt.prototype,"tailOffset",void 0);var xo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Jt;class lt{constructor(t,e=""){this.assigned=!1,Jt.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",n=this.host.shadowRoot.querySelector(r);this.assigned=!!n&&n.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",xo(this,Jt,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",xo(this,Jt,"f"))}}Jt=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=o=>o!=null?o:H;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=(o,t)=>{var e,r;const n=o._$AN;if(n===void 0)return!1;for(const l of n)(r=(e=l)._$AO)===null||r===void 0||r.call(e,t,!1),Ft(l,t);return!0},ee=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},To=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),$i(t)}};function xi(o){this._$AN!==void 0?(ee(this),this._$AM=o,To(this)):this._$AM=o}function Ti(o,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let l=e;l<r.length;l++)Ft(r[l],!1),ee(r[l]);else r!=null&&(Ft(r,!1),ee(r));else Ft(this,o)}const $i=o=>{var t,e,r,n;o.type==Xt.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=Ti),(e=(n=o)._$AQ)!==null&&e!==void 0||(n._$AQ=xi))};class Ei extends wo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),To(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(Ft(this,t),ee(this))}setValue(t){if(_i(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var re=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},oe=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Tt,$t;class Ai extends Ei{constructor(t){super(t);if(Tt.set(this,null),$t.set(this,[]),t.type!==Xt.CHILD&&t.type!==Xt.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=re(this,Tt,"f"))===null||r===void 0||r.call(this);const n="parentNode"in t?t.parentNode:t.element;if(!("tagName"in n)||n.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{re(this,$t,"f").forEach(d=>d());const s=n.assignedElements();oe(this,$t,s.map(e).filter(d=>!!d),"f")};return n.addEventListener("slotchange",l),oe(this,Tt,()=>{n.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return ct}disconnected(){var t;(t=re(this,Tt,"f"))===null||t===void 0||t.call(this),oe(this,Tt,null,"f"),re(this,$t,"f").forEach(e=>e()),oe(this,$t,[],"f")}}Tt=new WeakMap,$t=new WeakMap;const it=yo(Ai);var $o=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Eo=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function Et(o){var t,e,r;class n extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(s=>{!s[0]||Eo(this,t,Ao(s[0].target),"f")})),r.set(this,s=>{!Ut(this,t,"f")||(s.preventDefault(),s.stopPropagation())})}renderLightDOMSlot(s){return I`<slot id="lightdom" class=${te(s)}>
        ${it(d=>{if("getAttribute"in d)return Eo(this,t,Ao(d),"f"),d.addEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").observe(d,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{d.removeEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,$o([P({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),$o([P({type:Boolean,attribute:"lightdom"})],n.prototype,"lightDOM",void 0),n}function Ao(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var er=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},So=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},le;class Ht extends Et(E){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,le.set(this,new lt(this,"icon"))}static get styles(){return[A,M`
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
      `]}render(){const t=So(this,le,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):I`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return I`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!So(this,le,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}le=new WeakMap;Ht.defaultTagName="turtle-button";er([P({type:String})],Ht.prototype,"variant",void 0);er([P({type:Boolean,reflect:!0})],Ht.prototype,"rounded",void 0);er([P({type:Boolean,reflect:!0,attribute:"icon-only"})],Ht.prototype,"iconOnly",void 0);var Si=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class rr extends E{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[A,M`
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
      `]}render(){return I` <slot></slot> `}}rr.defaultTagName="turtle-button-group";Si([P({type:Boolean,reflect:!0})],rr.prototype,"evenly",void 0);var Co=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Po=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},or,lr;class ie extends E{constructor(){super(...arguments);or.set(this,new lt(this,"action")),lr.set(this,new lt(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[A,M`
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
      `]}render(){return I`
      <div class="image-sizer" ?assigned=${Po(this,lr,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${Po(this,or,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}or=new WeakMap,lr=new WeakMap;ie.defaultTagName="turtle-card";Co([P({type:Boolean,attribute:"shadowed",reflect:!0})],ie.prototype,"shadowed",void 0);Co([P({type:Boolean,attribute:"bordered",reflect:!0})],ie.prototype,"bordered",void 0);class Ro extends Et(E){static get styles(){return[A,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():I`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Ro.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(o){return P(Ve(Ze({},o),{state:!0}))}var Oo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},tt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ne,At,St;class ae extends E{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,ne.set(this,new MutationObserver(t=>{!t[0]||tt(this,At,"f").call(this,t[0].target)})),At.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),St.set(this,t=>{tt(this,At,"f").call(this,t.currentTarget)})}static get styles(){return[A,M`
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
      `]}render(){return I`
      <slot
        >${it(t=>{if("checked"in t)return tt(this,At,"f").call(this,t),t.addEventListener("change",tt(this,St,"f")),t.addEventListener("input",tt(this,St,"f")),tt(this,ne,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),this.sync=()=>{tt(this,At,"f").call(this,t)},()=>{t.removeEventListener("change",tt(this,St,"f")),t.removeEventListener("input",tt(this,St,"f")),tt(this,ne,"f").disconnect(),this.sync=()=>{}}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${Ci}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${Pi}
      </svg>
    `}}ne=new WeakMap,At=new WeakMap,St=new WeakMap;ae.defaultTagName="turtle-checkbox";Oo([J()],ae.prototype,"_checkState",void 0);Oo([J()],ae.prototype,"_disabled",void 0);const Ci=R`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,Pi=R`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`,F=M`
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
`;class ko extends E{static get styles(){return[A,F]}render(){return No()}}ko.defaultTagName="turtle-terminal-icon";const No=o=>R`
  <svg part=${te(o)} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var se=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ir=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Z=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},nt,dt,Ct,ue,ce,nr,ar;class Pt extends E{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,nt.set(this,null),dt.set(this,0),this._listbox=null,this._options=[],Ct.set(this,t=>{var e,r;if(this.noAutoAria||(ir(this,dt,t,"f"),!Z(this,nt,"f")))return;if(!this._options.length){Z(this,nt,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((l,s)=>{s===t?l.setAttribute("aria-selected","true"):l.removeAttribute("aria-selected")});const n=this._options[t];if(!(n==null?void 0:n.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&n.scrollIntoView(),Z(this,nt,"f").setAttribute("aria-activedescendant",n.id)}),ue.set(this,()=>{if(this.noAutoAria||!Z(this,nt,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),Z(this,nt,"f").setAttribute("aria-controls",this._listbox.id)}),ce.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":Z(this,nr,"f").call(this),t.preventDefault();return;case"Escape":Z(this,ar,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=Z(this,dt,"f")<=0?this._options.length-1:Z(this,dt,"f")-1;Z(this,Ct,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=Z(this,dt,"f")>=this._options.length-1?0:Z(this,dt,"f")+1;Z(this,Ct,"f").call(this,e),t.preventDefault();return}}}),nr.set(this,(t=Z(this,dt,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),ar.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[A,M`
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
      `]}render(){return I`
      <div class="searchbox">
        <slot class="icon" name="icon"
          >${No("icon")}</slot
        >
        <slot class="search" name="search"
          >${it(t=>{if("disabled"in t)return ir(this,nt,t,"f"),Z(this,ue,"f").call(this),t.addEventListener("keydown",Z(this,ce,"f")),()=>{ir(this,nt,null,"f"),t.removeEventListener("keydown",Z(this,ce,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${it(t=>{var e;this._listbox=t,this._options=Array.from(t.children),Z(this,ue,"f").call(this),Z(this,Ct,"f").call(this,0);const r=()=>{Z(this,Ct,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const n=l=>{if(!l.target||!("getAttribute"in l.target))return;const d=l.target.closest("turtle-command-palette-option");d&&d.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",n),()=>{var l;this._listbox=null,this._options=[],(l=t.shadowRoot)===null||l===void 0||l.removeEventListener("slotchange",r),t.removeEventListener("click",n)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}nt=new WeakMap,dt=new WeakMap,Ct=new WeakMap,ue=new WeakMap,ce=new WeakMap,nr=new WeakMap,ar=new WeakMap;Pt.defaultTagName="turtle-command-palette";se([P({type:String,reflect:!0})],Pt.prototype,"role",void 0);se([P({type:Boolean,attribute:"noautoaria"})],Pt.prototype,"noAutoAria",void 0);se([J()],Pt.prototype,"_listbox",void 0);se([J()],Pt.prototype,"_options",void 0);var Ri=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Io=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},de;class sr extends E{constructor(){super(...arguments);this.role="listbox",de.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[A,M`
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
      `]}connectedCallback(){super.connectedCallback(),Io(this,de,"f").call(this)}render(){return I`<slot @slotchange=${Io(this,de,"f")}></slot>`}}de=new WeakMap;sr.defaultTagName="turtle-command-palette-listbox";Ri([P({type:String,reflect:!0})],sr.prototype,"role",void 0);var Oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class ur extends E{constructor(){super(...arguments);this.role="option"}static get styles(){return[A,M`
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
      `]}render(){return I`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}ur.defaultTagName="turtle-command-palette-option";Oi([P({type:String,reflect:!0})],ur.prototype,"role",void 0);var ki=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class cr extends E{static get styles(){return M`
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
    `}render(){return I`<slot></slot>`}}cr.defaultTagName="turtle-design-system";ki([P({type:String,reflect:!0})],cr.prototype,"theme",void 0);var Ni=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Rt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ot,he;class dr extends E{constructor(){super(...arguments);this._elementState="neutral",Ot.set(this,t=>{Rt(this,he,"f").call(this,t.currentTarget)}),he.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[A,M`
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
      `]}render(){return I`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${it(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return Rt(this,he,"f").call(this,t),t.addEventListener("validitychange",Rt(this,Ot,"f")),t.addEventListener("fieldtouch",Rt(this,Ot,"f")),()=>{t.removeEventListener("validitychange",Rt(this,Ot,"f")),t.removeEventListener("fieldtouch",Rt(this,Ot,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}Ot=new WeakMap,he=new WeakMap;dr.defaultTagName="turtle-form-field";Ni([J()],dr.prototype,"_elementState",void 0);class Lo extends E{static get styles(){return[A,M`
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
      `]}render(){return I`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}Lo.defaultTagName="turtle-labelled-item";class Mo extends E{static get styles(){return[A,M`
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
      `]}render(){return I` <slot></slot> `}}Mo.defaultTagName="turtle-list";var Do=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},hr,vr;class Bo extends Et(E){constructor(){super(...arguments);hr.set(this,new lt(this,"icon-start")),vr.set(this,new lt(this,"icon-end"))}static get styles(){return[A,M`
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
      `]}render(){const t=["body-slot",Do(this,hr,"f").assigned?"icon-start":"",Do(this,vr,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):I`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return I`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}hr=new WeakMap,vr=new WeakMap;Bo.defaultTagName="turtle-list-item";var Ii=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},fr;class jo extends E{constructor(){super(...arguments);fr.set(this,new lt(this,"image"))}static get styles(){return[A,M`
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
      `]}render(){return I`
      <div class="body">
        <div class="image" ?data-hidden=${!Ii(this,fr,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}fr=new WeakMap;jo.defaultTagName="turtle-notification";class zo extends Et(E){static get styles(){return[A,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():I`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}zo.defaultTagName="turtle-notification-action";var Li=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ve=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},fe,pe;class pr extends Et(E){constructor(){super(...arguments);this.pressable=!1,fe.set(this,new lt(this,"icon")),pe.set(this,new lt(this,"action-icon"))}static get styles(){return[A,M`
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
      `]}render(){const t=[ve(this,fe,"f").assigned?"with-icon":null,ve(this,pe,"f").assigned?"with-action-icon":null].filter(Boolean).join(" "),e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):this.pressable?I`<button part="button" class="button ${t}">
          <slot></slot>
        </button>`:I`<span part="label" class="label ${t}"
          ><slot></slot
        ></span>`;return I`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!ve(this,fe,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${e}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!ve(this,pe,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `}}fe=new WeakMap,pe=new WeakMap;pr.defaultTagName="turtle-pill";Li([P({type:Boolean})],pr.prototype,"pressable",void 0);var Mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ge=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},be,me;class gr extends E{constructor(){super(...arguments);this._progress={max:1,value:0},be.set(this,t=>{this._progress={max:t.max,value:t.value}}),me.set(this,new MutationObserver(t=>{!t[0]||ge(this,be,"f").call(this,t[0].target)}))}static get styles(){return[A,M`
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
      `]}render(){const{max:t,value:e}=this._progress,r=Math.min(1,Math.max(0,t<0?0:e/t));return I`
      <slot
        >${it(n=>{if(n instanceof HTMLProgressElement)return ge(this,be,"f").call(this,n),ge(this,me,"f").observe(n,{attributes:!0,attributeFilter:["value","max"]}),()=>{ge(this,me,"f").disconnect()}})}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${tr({width:r*100+"%"})}
      ></div>
    `}}be=new WeakMap,me=new WeakMap;gr.defaultTagName="turtle-progressbar";Mi([J()],gr.prototype,"_progress",void 0);class Fo extends E{static get styles(){return[A,M`
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
      `]}render(){return I`<slot></slot>`}}Fo.defaultTagName="turtle-radio-button";var ye=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ft=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},we,_e,Zt;function xe(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class pt extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,we.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&ft(this,Zt,"f").call(this,t[0].target)})),_e.set(this,t=>{ft(this,Zt,"f").call(this,t.currentTarget)}),Zt.set(this,t=>{const e=xe(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[A,M`
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
      `]}get isValid(){return!!this._isElementValid}render(){var t;return I`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${it(e=>{if("validity"in e)return ft(this,Zt,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",ft(this,_e,"f")),e.addEventListener("focusout",this.touch),ft(this,we,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",ft(this,_e,"f")),e.removeEventListener("focusout",this.touch),ft(this,we,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Uo}</div>
        <div class="indicator invalid" aria-hidden="true">${Ho}</div>
      </div>
    `}}we=new WeakMap,_e=new WeakMap,Zt=new WeakMap;pt.defaultTagName="turtle-textbox";ye([P({type:Boolean,reflect:!0})],pt.prototype,"touched",void 0);ye([P({type:Boolean,attribute:"novalidity"})],pt.prototype,"noValidity",void 0);ye([J()],pt.prototype,"_isElementValid",void 0);ye([J()],pt.prototype,"_disabled",void 0);const Uo=R`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Ho=R`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var Te=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},$e=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ee,Ae;class kt extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,Ee.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=xe(t[0].target))})),Ae.set(this,t=>{this._isElementValid=xe(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...pt.styles,M`
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
      `]}render(){var t;return I`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${it(e=>{if("validity"in e)return this._isElementValid=xe(e),this._disabled=e.disabled,e.addEventListener("input",$e(this,Ae,"f")),e.addEventListener("focusout",this.touch),$e(this,Ee,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",$e(this,Ae,"f")),e.removeEventListener("focusout",this.touch),$e(this,Ee,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Uo}</div>
        <div class="indicator invalid" aria-hidden="true">${Ho}</div>

        <div class="caret" aria-hidden="true">${Di}</div>
      </div>
    `}}Ee=new WeakMap,Ae=new WeakMap;kt.defaultTagName="turtle-selectbox";Te([P({type:Boolean,reflect:!0})],kt.prototype,"touched",void 0);Te([P({type:Boolean,attribute:"novalidity"})],kt.prototype,"noValidity",void 0);Te([J()],kt.prototype,"_isElementValid",void 0);Te([J()],kt.prototype,"_disabled",void 0);const Di=R`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var Bi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};function ji(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return Bi([P({type:Boolean})],t.prototype,"autofocus",void 0),t}var br=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Zo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},mr,yr;class Vt extends ji(E){constructor(){super(...arguments);mr.set(this,new lt(this,"action")),this.severity="info",yr.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[A,M`
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
      `]}render(){return I`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?R`
        <svg
          class="lifetime"
          style=${tr({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${te(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${te(this.lifetimeLabel)}
          @animationend=${Zo(this,yr,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:H}

      <div class="actions" ?data-assigned=${Zo(this,mr,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}mr=new WeakMap,yr=new WeakMap;Vt.defaultTagName="turtle-snackbar";br([P({type:String,reflect:!0})],Vt.prototype,"severity",void 0);br([P({type:Number})],Vt.prototype,"lifetime",void 0);br([P({type:String,attribute:"lifetime-label"})],Vt.prototype,"lifetimeLabel",void 0);class Vo extends Et(E){static get styles(){return[A,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():I`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Vo.defaultTagName="turtle-snackbar-action";var Wo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Se=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ce,Pe;class Re extends E{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,Ce.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),Pe.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[A,M`
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
      `]}render(){return I`
      <slot>
        ${it(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",Se(this,Pe,"f")),Se(this,Ce,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",Se(this,Pe,"f")),Se(this,Ce,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}Ce=new WeakMap,Pe=new WeakMap;Re.defaultTagName="turtle-toggle-switch";Wo([J()],Re.prototype,"_checked",void 0);Wo([J()],Re.prototype,"_disabled",void 0);var zi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class wr extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[A,F,M`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}wr.defaultTagName="turtle-angle-icon";zi([P({type:String,reflect:!0})],wr.prototype,"direction",void 0);var Fi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class _r extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[A,F,M`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}_r.defaultTagName="turtle-arrow-icon";Fi([P({type:String,reflect:!0})],_r.prototype,"direction",void 0);var Ui=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class xr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}xr.defaultTagName="turtle-attention-icon";Ui([P({type:Boolean})],xr.prototype,"outlined",void 0);class Go extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}Go.defaultTagName="turtle-brand-icon";class Yo extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Yo.defaultTagName="turtle-check-icon";var Hi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Tr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}Tr.defaultTagName="turtle-circle-check-icon";Hi([P({type:Boolean})],Tr.prototype,"outlined",void 0);var Zi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class $r extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}$r.defaultTagName="turtle-circle-cross-icon";Zi([P({type:Boolean})],$r.prototype,"outlined",void 0);var Vi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Er extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}Er.defaultTagName="turtle-circle-minus-icon";Vi([P({type:Boolean})],Er.prototype,"outlined",void 0);var Wi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Ar extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}Ar.defaultTagName="turtle-circle-plus-icon";Wi([P({type:Boolean})],Ar.prototype,"outlined",void 0);class Ko extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}Ko.defaultTagName="turtle-cross-icon";class Qo extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}Qo.defaultTagName="turtle-dots-icon";class Xo extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `}}Xo.defaultTagName="turtle-file-upload-icon";class qo extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `}}qo.defaultTagName="turtle-first-page-icon";var Gi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Sr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}Sr.defaultTagName="turtle-heart-icon";Gi([P({type:Boolean})],Sr.prototype,"outlined",void 0);var Yi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Cr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}Cr.defaultTagName="turtle-info-icon";Yi([P({type:Boolean})],Cr.prototype,"outlined",void 0);class Jo extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `}}Jo.defaultTagName="turtle-last-page-icon";class tl extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}tl.defaultTagName="turtle-minus-icon";class el extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}el.defaultTagName="turtle-plus-icon";var Ki=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Pr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[A,F]}render(){return this.outlined?R`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}Pr.defaultTagName="turtle-question-icon";Ki([P({type:Boolean})],Pr.prototype,"outlined",void 0);class rl extends E{static get styles(){return[A,F]}render(){return R`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}rl.defaultTagName="turtle-reload-icon";const Qi=[wr,_r,xr,Go,Yo,Tr,$r,Er,Ar,Ko,Qo,Xo,qo,Sr,Cr,Jo,tl,el,Pr,rl,ko],tn=[Qt,qt,Ht,rr,ie,Ro,ae,Pt,sr,ur,cr,dr,Lo,Mo,Bo,jo,zo,pr,gr,Fo,kt,Vt,Vo,pt,Re,...Qi];function en(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var Oe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ke(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Xi={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(r,n,l){function s($,j){if(!n[$]){if(!r[$]){var g=typeof ke=="function"&&ke;if(!j&&g)return g($,!0);if(d)return d($,!0);var _=new Error("Cannot find module '"+$+"'");throw _.code="MODULE_NOT_FOUND",_}var O=n[$]={exports:{}};r[$][0].call(O.exports,function(B){var Y=r[$][1][B];return s(Y||B)},O,O.exports,e,r,n,l)}return n[$].exports}for(var d=typeof ke=="function"&&ke,T=0;T<l.length;T++)s(l[T]);return s}({1:[function(e,r,n){(function(l){var s=l.MutationObserver||l.WebKitMutationObserver,d;if(s){var T=0,$=new s(B),j=l.document.createTextNode("");$.observe(j,{characterData:!0}),d=function(){j.data=T=++T%2}}else if(!l.setImmediate&&typeof l.MessageChannel!="undefined"){var g=new l.MessageChannel;g.port1.onmessage=B,d=function(){g.port2.postMessage(0)}}else"document"in l&&"onreadystatechange"in l.document.createElement("script")?d=function(){var V=l.document.createElement("script");V.onreadystatechange=function(){B(),V.onreadystatechange=null,V.parentNode.removeChild(V),V=null},l.document.documentElement.appendChild(V)}:d=function(){setTimeout(B,0)};var _,O=[];function B(){_=!0;for(var V,et,W=O.length;W;){for(et=O,O=[],V=-1;++V<W;)et[V]();W=O.length}_=!1}r.exports=Y;function Y(V){O.push(V)===1&&!_&&d()}}).call(this,typeof Oe!="undefined"?Oe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(e,r,n){var l=e(1);function s(){}var d={},T=["REJECTED"],$=["FULFILLED"],j=["PENDING"];r.exports=g;function g(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=j,this.queue=[],this.outcome=void 0,w!==s&&Y(this,w)}g.prototype.catch=function(w){return this.then(null,w)},g.prototype.then=function(w,k){if(typeof w!="function"&&this.state===$||typeof k!="function"&&this.state===T)return this;var C=new this.constructor(s);if(this.state!==j){var D=this.state===$?w:k;O(C,D,this.outcome)}else this.queue.push(new _(C,w,k));return C};function _(w,k,C){this.promise=w,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(w){d.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){O(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){d.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){O(this.promise,this.onRejected,w)};function O(w,k,C){l(function(){var D;try{D=k(C)}catch(G){return d.reject(w,G)}D===w?d.reject(w,new TypeError("Cannot resolve promise with itself")):d.resolve(w,D)})}d.resolve=function(w,k){var C=V(B,k);if(C.status==="error")return d.reject(w,C.value);var D=C.value;if(D)Y(w,D);else{w.state=$,w.outcome=k;for(var G=-1,K=w.queue.length;++G<K;)w.queue[G].callFulfilled(k)}return w},d.reject=function(w,k){w.state=T,w.outcome=k;for(var C=-1,D=w.queue.length;++C<D;)w.queue[C].callRejected(k);return w};function B(w){var k=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof k=="function")return function(){k.apply(w,arguments)}}function Y(w,k){var C=!1;function D(X){C||(C=!0,d.reject(w,X))}function G(X){C||(C=!0,d.resolve(w,X))}function K(){k(G,D)}var Q=V(K);Q.status==="error"&&D(Q.value)}function V(w,k){var C={};try{C.value=w(k),C.status="success"}catch(D){C.status="error",C.value=D}return C}g.resolve=et;function et(w){return w instanceof this?w:d.resolve(new this(s),w)}g.reject=W;function W(w){var k=new this(s);return d.reject(k,w)}g.all=Ne;function Ne(w){var k=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,D=!1;if(!C)return this.resolve([]);for(var G=new Array(C),K=0,Q=-1,X=new this(s);++Q<C;)rt(w[Q],Q);return X;function rt(Nt,Wt){k.resolve(Nt).then(Ie,function(gt){D||(D=!0,d.reject(X,gt))});function Ie(gt){G[Wt]=gt,++K===C&&!D&&(D=!0,d.resolve(X,G))}}}g.race=ht;function ht(w){var k=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,D=!1;if(!C)return this.resolve([]);for(var G=-1,K=new this(s);++G<C;)Q(w[G]);return K;function Q(X){k.resolve(X).then(function(rt){D||(D=!0,d.resolve(K,rt))},function(rt){D||(D=!0,d.reject(K,rt))})}}},{"1":1}],3:[function(e,r,n){(function(l){typeof l.Promise!="function"&&(l.Promise=e(2))}).call(this,typeof Oe!="undefined"?Oe:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(e,r,n){var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};function s(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function d(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var T=d();function $(){try{if(!T||!T.open)return!1;var i=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),u=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!i||u)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function j(i,u){i=i||[],u=u||{};try{return new Blob(i,u)}catch(c){if(c.name!=="TypeError")throw c;for(var a=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,h=new a,v=0;v<i.length;v+=1)h.append(i[v]);return h.getBlob(u.type)}}typeof Promise=="undefined"&&e(3);var g=Promise;function _(i,u){u&&i.then(function(a){u(null,a)},function(a){u(a)})}function O(i,u,a){typeof u=="function"&&i.then(u),typeof a=="function"&&i.catch(a)}function B(i){return typeof i!="string"&&(console.warn(i+" used as a key, but it is not a string."),i=String(i)),i}function Y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var V="local-forage-detect-blob-support",et=void 0,W={},Ne=Object.prototype.toString,ht="readonly",w="readwrite";function k(i){for(var u=i.length,a=new ArrayBuffer(u),h=new Uint8Array(a),v=0;v<u;v++)h[v]=i.charCodeAt(v);return a}function C(i){return new g(function(u){var a=i.transaction(V,w),h=j([""]);a.objectStore(V).put(h,"key"),a.onabort=function(v){v.preventDefault(),v.stopPropagation(),u(!1)},a.oncomplete=function(){var v=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);u(c||!v||parseInt(v[1],10)>=43)}}).catch(function(){return!1})}function D(i){return typeof et=="boolean"?g.resolve(et):C(i).then(function(u){return et=u,et})}function G(i){var u=W[i.name],a={};a.promise=new g(function(h,v){a.resolve=h,a.reject=v}),u.deferredOperations.push(a),u.dbReady?u.dbReady=u.dbReady.then(function(){return a.promise}):u.dbReady=a.promise}function K(i){var u=W[i.name],a=u.deferredOperations.pop();if(a)return a.resolve(),a.promise}function Q(i,u){var a=W[i.name],h=a.deferredOperations.pop();if(h)return h.reject(u),h.promise}function X(i,u){return new g(function(a,h){if(W[i.name]=W[i.name]||Or(),i.db)if(u)G(i),i.db.close();else return a(i.db);var v=[i.name];u&&v.push(i.version);var c=T.open.apply(T,v);u&&(c.onupgradeneeded=function(f){var p=c.result;try{p.createObjectStore(i.storeName),f.oldVersion<=1&&p.createObjectStore(V)}catch(b){if(b.name==="ConstraintError")console.warn('The database "'+i.name+'" has been upgraded from version '+f.oldVersion+" to version "+f.newVersion+', but the storage "'+i.storeName+'" already exists.');else throw b}}),c.onerror=function(f){f.preventDefault(),h(c.error)},c.onsuccess=function(){var f=c.result;f.onversionchange=function(p){p.target.close()},a(f),K(i)}})}function rt(i){return X(i,!1)}function Nt(i){return X(i,!0)}function Wt(i,u){if(!i.db)return!0;var a=!i.db.objectStoreNames.contains(i.storeName),h=i.version<i.db.version,v=i.version>i.db.version;if(h&&(i.version!==u&&console.warn('The database "'+i.name+`" can't be downgraded from version `+i.db.version+" to version "+i.version+"."),i.version=i.db.version),v||a){if(a){var c=i.db.version+1;c>i.version&&(i.version=c)}return!0}return!1}function Ie(i){return new g(function(u,a){var h=new FileReader;h.onerror=a,h.onloadend=function(v){var c=btoa(v.target.result||"");u({__local_forage_encoded_blob:!0,data:c,type:i.type})},h.readAsBinaryString(i)})}function gt(i){var u=k(atob(i.data));return j([u],{type:i.type})}function Rr(i){return i&&i.__local_forage_encoded_blob}function ol(i){var u=this,a=u._initReady().then(function(){var h=W[u._dbInfo.name];if(h&&h.dbReady)return h.dbReady});return O(a,i,i),a}function ll(i){G(i);for(var u=W[i.name],a=u.forages,h=0;h<a.length;h++){var v=a[h];v._dbInfo.db&&(v._dbInfo.db.close(),v._dbInfo.db=null)}return i.db=null,rt(i).then(function(c){return i.db=c,Wt(i)?Nt(i):c}).then(function(c){i.db=u.db=c;for(var f=0;f<a.length;f++)a[f]._dbInfo.db=c}).catch(function(c){throw Q(i,c),c})}function ot(i,u,a,h){h===void 0&&(h=1);try{var v=i.db.transaction(i.storeName,u);a(null,v)}catch(c){if(h>0&&(!i.db||c.name==="InvalidStateError"||c.name==="NotFoundError"))return g.resolve().then(function(){if(!i.db||c.name==="NotFoundError"&&!i.db.objectStoreNames.contains(i.storeName)&&i.version<=i.db.version)return i.db&&(i.version=i.db.version+1),Nt(i)}).then(function(){return ll(i).then(function(){ot(i,u,a,h-1)})}).catch(a);a(c)}}function Or(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function il(i){var u=this,a={db:null};if(i)for(var h in i)a[h]=i[h];var v=W[a.name];v||(v=Or(),W[a.name]=v),v.forages.push(u),u._initReady||(u._initReady=u.ready,u.ready=ol);var c=[];function f(){return g.resolve()}for(var p=0;p<v.forages.length;p++){var b=v.forages[p];b!==u&&c.push(b._initReady().catch(f))}var m=v.forages.slice(0);return g.all(c).then(function(){return a.db=v.db,rt(a)}).then(function(y){return a.db=y,Wt(a,u._defaultConfig.version)?Nt(a):y}).then(function(y){a.db=v.db=y,u._dbInfo=a;for(var x=0;x<m.length;x++){var S=m[x];S!==u&&(S._dbInfo.db=a.db,S._dbInfo.version=a.version)}})}function nl(i,u){var a=this;i=B(i);var h=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,ht,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.get(i);m.onsuccess=function(){var y=m.result;y===void 0&&(y=null),Rr(y)&&(y=gt(y)),v(y)},m.onerror=function(){c(m.error)}}catch(y){c(y)}})}).catch(c)});return _(h,u),h}function al(i,u){var a=this,h=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,ht,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.openCursor(),y=1;m.onsuccess=function(){var x=m.result;if(x){var S=x.value;Rr(S)&&(S=gt(S));var N=i(S,x.key,y++);N!==void 0?v(N):x.continue()}else v()},m.onerror=function(){c(m.error)}}catch(x){c(x)}})}).catch(c)});return _(h,u),h}function sl(i,u,a){var h=this;i=B(i);var v=new g(function(c,f){var p;h.ready().then(function(){return p=h._dbInfo,Ne.call(u)==="[object Blob]"?D(p.db).then(function(b){return b?u:Ie(u)}):u}).then(function(b){ot(h._dbInfo,w,function(m,y){if(m)return f(m);try{var x=y.objectStore(h._dbInfo.storeName);b===null&&(b=void 0);var S=x.put(b,i);y.oncomplete=function(){b===void 0&&(b=null),c(b)},y.onabort=y.onerror=function(){var N=S.error?S.error:S.transaction.error;f(N)}}catch(N){f(N)}})}).catch(f)});return _(v,a),v}function ul(i,u){var a=this;i=B(i);var h=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,w,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.delete(i);p.oncomplete=function(){v()},p.onerror=function(){c(m.error)},p.onabort=function(){var y=m.error?m.error:m.transaction.error;c(y)}}catch(y){c(y)}})}).catch(c)});return _(h,u),h}function cl(i){var u=this,a=new g(function(h,v){u.ready().then(function(){ot(u._dbInfo,w,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.clear();f.oncomplete=function(){h()},f.onabort=f.onerror=function(){var m=b.error?b.error:b.transaction.error;v(m)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function dl(i){var u=this,a=new g(function(h,v){u.ready().then(function(){ot(u._dbInfo,ht,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.count();b.onsuccess=function(){h(b.result)},b.onerror=function(){v(b.error)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function hl(i,u){var a=this,h=new g(function(v,c){if(i<0){v(null);return}a.ready().then(function(){ot(a._dbInfo,ht,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=!1,y=b.openKeyCursor();y.onsuccess=function(){var x=y.result;if(!x){v(null);return}i===0||m?v(x.key):(m=!0,x.advance(i))},y.onerror=function(){c(y.error)}}catch(x){c(x)}})}).catch(c)});return _(h,u),h}function vl(i){var u=this,a=new g(function(h,v){u.ready().then(function(){ot(u._dbInfo,ht,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.openKeyCursor(),m=[];b.onsuccess=function(){var y=b.result;if(!y){h(m);return}m.push(y.key),y.continue()},b.onerror=function(){v(b.error)}}catch(y){v(y)}})}).catch(v)});return _(a,i),a}function fl(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var h=this,v;if(!i.name)v=g.reject("Invalid arguments");else{var c=i.name===a.name&&h._dbInfo.db,f=c?g.resolve(h._dbInfo.db):rt(i).then(function(p){var b=W[i.name],m=b.forages;b.db=p;for(var y=0;y<m.length;y++)m[y]._dbInfo.db=p;return p});i.storeName?v=f.then(function(p){if(!!p.objectStoreNames.contains(i.storeName)){var b=p.version+1;G(i);var m=W[i.name],y=m.forages;p.close();for(var x=0;x<y.length;x++){var S=y[x];S._dbInfo.db=null,S._dbInfo.version=b}var N=new g(function(L,U){var z=T.open(i.name,b);z.onerror=function(q){var Lt=z.result;Lt.close(),U(q)},z.onupgradeneeded=function(){var q=z.result;q.deleteObjectStore(i.storeName)},z.onsuccess=function(){var q=z.result;q.close(),L(q)}});return N.then(function(L){m.db=L;for(var U=0;U<y.length;U++){var z=y[U];z._dbInfo.db=L,K(z._dbInfo)}}).catch(function(L){throw(Q(i,L)||g.resolve()).catch(function(){}),L})}}):v=f.then(function(p){G(i);var b=W[i.name],m=b.forages;p.close();for(var y=0;y<m.length;y++){var x=m[y];x._dbInfo.db=null}var S=new g(function(N,L){var U=T.deleteDatabase(i.name);U.onerror=function(){var z=U.result;z&&z.close(),L(U.error)},U.onblocked=function(){console.warn('dropInstance blocked for database "'+i.name+'" until all open connections are closed')},U.onsuccess=function(){var z=U.result;z&&z.close(),N(z)}});return S.then(function(N){b.db=N;for(var L=0;L<m.length;L++){var U=m[L];K(U._dbInfo)}}).catch(function(N){throw(Q(i,N)||g.resolve()).catch(function(){}),N})})}return _(v,u),v}var pl={_driver:"asyncStorage",_initStorage:il,_support:$(),iterate:al,getItem:nl,setItem:sl,removeItem:ul,clear:cl,length:dl,key:hl,keys:vl,dropInstance:fl};function gl(){return typeof openDatabase=="function"}var at="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bl="~~local_forage_type~",kr=/^~~local_forage_type~([^~]+)~/,Gt="__lfsc__:",Le=Gt.length,Me="arbf",De="blob",Nr="si08",Ir="ui08",Lr="uic8",Mr="si16",Dr="si32",Br="ur16",jr="ui32",zr="fl32",Fr="fl64",Ur=Le+Me.length,Hr=Object.prototype.toString;function Zr(i){var u=i.length*.75,a=i.length,h,v=0,c,f,p,b;i[i.length-1]==="="&&(u--,i[i.length-2]==="="&&u--);var m=new ArrayBuffer(u),y=new Uint8Array(m);for(h=0;h<a;h+=4)c=at.indexOf(i[h]),f=at.indexOf(i[h+1]),p=at.indexOf(i[h+2]),b=at.indexOf(i[h+3]),y[v++]=c<<2|f>>4,y[v++]=(f&15)<<4|p>>2,y[v++]=(p&3)<<6|b&63;return m}function Be(i){var u=new Uint8Array(i),a="",h;for(h=0;h<u.length;h+=3)a+=at[u[h]>>2],a+=at[(u[h]&3)<<4|u[h+1]>>4],a+=at[(u[h+1]&15)<<2|u[h+2]>>6],a+=at[u[h+2]&63];return u.length%3==2?a=a.substring(0,a.length-1)+"=":u.length%3==1&&(a=a.substring(0,a.length-2)+"=="),a}function ml(i,u){var a="";if(i&&(a=Hr.call(i)),i&&(a==="[object ArrayBuffer]"||i.buffer&&Hr.call(i.buffer)==="[object ArrayBuffer]")){var h,v=Gt;i instanceof ArrayBuffer?(h=i,v+=Me):(h=i.buffer,a==="[object Int8Array]"?v+=Nr:a==="[object Uint8Array]"?v+=Ir:a==="[object Uint8ClampedArray]"?v+=Lr:a==="[object Int16Array]"?v+=Mr:a==="[object Uint16Array]"?v+=Br:a==="[object Int32Array]"?v+=Dr:a==="[object Uint32Array]"?v+=jr:a==="[object Float32Array]"?v+=zr:a==="[object Float64Array]"?v+=Fr:u(new Error("Failed to get type for BinaryArray"))),u(v+Be(h))}else if(a==="[object Blob]"){var c=new FileReader;c.onload=function(){var f=bl+i.type+"~"+Be(this.result);u(Gt+De+f)},c.readAsArrayBuffer(i)}else try{u(JSON.stringify(i))}catch(f){console.error("Couldn't convert value into a JSON string: ",i),u(null,f)}}function yl(i){if(i.substring(0,Le)!==Gt)return JSON.parse(i);var u=i.substring(Ur),a=i.substring(Le,Ur),h;if(a===De&&kr.test(u)){var v=u.match(kr);h=v[1],u=u.substring(v[0].length)}var c=Zr(u);switch(a){case Me:return c;case De:return j([c],{type:h});case Nr:return new Int8Array(c);case Ir:return new Uint8Array(c);case Lr:return new Uint8ClampedArray(c);case Mr:return new Int16Array(c);case Br:return new Uint16Array(c);case Dr:return new Int32Array(c);case jr:return new Uint32Array(c);case zr:return new Float32Array(c);case Fr:return new Float64Array(c);default:throw new Error("Unkown type: "+a)}}var je={serialize:ml,deserialize:yl,stringToBuffer:Zr,bufferToString:Be};function Vr(i,u,a,h){i.executeSql("CREATE TABLE IF NOT EXISTS "+u.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],a,h)}function wl(i){var u=this,a={db:null};if(i)for(var h in i)a[h]=typeof i[h]!="string"?i[h].toString():i[h];var v=new g(function(c,f){try{a.db=openDatabase(a.name,String(a.version),a.description,a.size)}catch(p){return f(p)}a.db.transaction(function(p){Vr(p,a,function(){u._dbInfo=a,c()},function(b,m){f(m)})},f)});return a.serializer=je,v}function st(i,u,a,h,v,c){i.executeSql(a,h,v,function(f,p){p.code===p.SYNTAX_ERR?f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[u.storeName],function(b,m){m.rows.length?c(b,p):Vr(b,u,function(){b.executeSql(a,h,v,c)},c)},c):c(f,p)},c)}function _l(i,u){var a=this;i=B(i);var h=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){st(p,f,"SELECT * FROM "+f.storeName+" WHERE key = ? LIMIT 1",[i],function(b,m){var y=m.rows.length?m.rows.item(0).value:null;y&&(y=f.serializer.deserialize(y)),v(y)},function(b,m){c(m)})})}).catch(c)});return _(h,u),h}function xl(i,u){var a=this,h=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){st(p,f,"SELECT * FROM "+f.storeName,[],function(b,m){for(var y=m.rows,x=y.length,S=0;S<x;S++){var N=y.item(S),L=N.value;if(L&&(L=f.serializer.deserialize(L)),L=i(L,N.key,S+1),L!==void 0){v(L);return}}v()},function(b,m){c(m)})})}).catch(c)});return _(h,u),h}function Wr(i,u,a,h){var v=this;i=B(i);var c=new g(function(f,p){v.ready().then(function(){u===void 0&&(u=null);var b=u,m=v._dbInfo;m.serializer.serialize(u,function(y,x){x?p(x):m.db.transaction(function(S){st(S,m,"INSERT OR REPLACE INTO "+m.storeName+" (key, value) VALUES (?, ?)",[i,y],function(){f(b)},function(N,L){p(L)})},function(S){if(S.code===S.QUOTA_ERR){if(h>0){f(Wr.apply(v,[i,b,a,h-1]));return}p(S)}})})}).catch(p)});return _(c,a),c}function Tl(i,u,a){return Wr.apply(this,[i,u,a,1])}function $l(i,u){var a=this;i=B(i);var h=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){st(p,f,"DELETE FROM "+f.storeName+" WHERE key = ?",[i],function(){v()},function(b,m){c(m)})})}).catch(c)});return _(h,u),h}function El(i){var u=this,a=new g(function(h,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){st(f,c,"DELETE FROM "+c.storeName,[],function(){h()},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function Al(i){var u=this,a=new g(function(h,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){st(f,c,"SELECT COUNT(key) as c FROM "+c.storeName,[],function(p,b){var m=b.rows.item(0).c;h(m)},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function Sl(i,u){var a=this,h=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){st(p,f,"SELECT key FROM "+f.storeName+" WHERE id = ? LIMIT 1",[i+1],function(b,m){var y=m.rows.length?m.rows.item(0).key:null;v(y)},function(b,m){c(m)})})}).catch(c)});return _(h,u),h}function Cl(i){var u=this,a=new g(function(h,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){st(f,c,"SELECT key FROM "+c.storeName,[],function(p,b){for(var m=[],y=0;y<b.rows.length;y++)m.push(b.rows.item(y).key);h(m)},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function Pl(i){return new g(function(u,a){i.transaction(function(h){h.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(v,c){for(var f=[],p=0;p<c.rows.length;p++)f.push(c.rows.item(p).name);u({db:i,storeNames:f})},function(v,c){a(c)})},function(h){a(h)})})}function Rl(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var h=this,v;return i.name?v=new g(function(c){var f;i.name===a.name?f=h._dbInfo.db:f=openDatabase(i.name,"","",0),i.storeName?c({db:f,storeNames:[i.storeName]}):c(Pl(f))}).then(function(c){return new g(function(f,p){c.db.transaction(function(b){function m(N){return new g(function(L,U){b.executeSql("DROP TABLE IF EXISTS "+N,[],function(){L()},function(z,q){U(q)})})}for(var y=[],x=0,S=c.storeNames.length;x<S;x++)y.push(m(c.storeNames[x]));g.all(y).then(function(){f()}).catch(function(N){p(N)})},function(b){p(b)})})}):v=g.reject("Invalid arguments"),_(v,u),v}var Ol={_driver:"webSQLStorage",_initStorage:wl,_support:gl(),iterate:xl,getItem:_l,setItem:Tl,removeItem:$l,clear:El,length:Al,key:Sl,keys:Cl,dropInstance:Rl};function kl(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Gr(i,u){var a=i.name+"/";return i.storeName!==u.storeName&&(a+=i.storeName+"/"),a}function Nl(){var i="_localforage_support_test";try{return localStorage.setItem(i,!0),localStorage.removeItem(i),!1}catch{return!0}}function Il(){return!Nl()||localStorage.length>0}function Ll(i){var u=this,a={};if(i)for(var h in i)a[h]=i[h];return a.keyPrefix=Gr(i,u._defaultConfig),Il()?(u._dbInfo=a,a.serializer=je,g.resolve()):g.reject()}function Ml(i){var u=this,a=u.ready().then(function(){for(var h=u._dbInfo.keyPrefix,v=localStorage.length-1;v>=0;v--){var c=localStorage.key(v);c.indexOf(h)===0&&localStorage.removeItem(c)}});return _(a,i),a}function Dl(i,u){var a=this;i=B(i);var h=a.ready().then(function(){var v=a._dbInfo,c=localStorage.getItem(v.keyPrefix+i);return c&&(c=v.serializer.deserialize(c)),c});return _(h,u),h}function Bl(i,u){var a=this,h=a.ready().then(function(){for(var v=a._dbInfo,c=v.keyPrefix,f=c.length,p=localStorage.length,b=1,m=0;m<p;m++){var y=localStorage.key(m);if(y.indexOf(c)===0){var x=localStorage.getItem(y);if(x&&(x=v.serializer.deserialize(x)),x=i(x,y.substring(f),b++),x!==void 0)return x}}});return _(h,u),h}function jl(i,u){var a=this,h=a.ready().then(function(){var v=a._dbInfo,c;try{c=localStorage.key(i)}catch{c=null}return c&&(c=c.substring(v.keyPrefix.length)),c});return _(h,u),h}function zl(i){var u=this,a=u.ready().then(function(){for(var h=u._dbInfo,v=localStorage.length,c=[],f=0;f<v;f++){var p=localStorage.key(f);p.indexOf(h.keyPrefix)===0&&c.push(p.substring(h.keyPrefix.length))}return c});return _(a,i),a}function Fl(i){var u=this,a=u.keys().then(function(h){return h.length});return _(a,i),a}function Ul(i,u){var a=this;i=B(i);var h=a.ready().then(function(){var v=a._dbInfo;localStorage.removeItem(v.keyPrefix+i)});return _(h,u),h}function Hl(i,u,a){var h=this;i=B(i);var v=h.ready().then(function(){u===void 0&&(u=null);var c=u;return new g(function(f,p){var b=h._dbInfo;b.serializer.serialize(u,function(m,y){if(y)p(y);else try{localStorage.setItem(b.keyPrefix+i,m),f(c)}catch(x){(x.name==="QuotaExceededError"||x.name==="NS_ERROR_DOM_QUOTA_REACHED")&&p(x),p(x)}})})});return _(v,a),v}function Zl(i,u){if(u=Y.apply(this,arguments),i=typeof i!="function"&&i||{},!i.name){var a=this.config();i.name=i.name||a.name,i.storeName=i.storeName||a.storeName}var h=this,v;return i.name?v=new g(function(c){i.storeName?c(Gr(i,h._defaultConfig)):c(i.name+"/")}).then(function(c){for(var f=localStorage.length-1;f>=0;f--){var p=localStorage.key(f);p.indexOf(c)===0&&localStorage.removeItem(p)}}):v=g.reject("Invalid arguments"),_(v,u),v}var Vl={_driver:"localStorageWrapper",_initStorage:Ll,_support:kl(),iterate:Bl,getItem:Dl,setItem:Hl,removeItem:Ul,clear:Ml,length:Fl,key:jl,keys:zl,dropInstance:Zl},Wl=function(u,a){return u===a||typeof u=="number"&&typeof a=="number"&&isNaN(u)&&isNaN(a)},Gl=function(u,a){for(var h=u.length,v=0;v<h;){if(Wl(u[v],a))return!0;v++}return!1},Yr=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"},It={},Kr={},bt={INDEXEDDB:pl,WEBSQL:Ol,LOCALSTORAGE:Vl},Yl=[bt.INDEXEDDB._driver,bt.WEBSQL._driver,bt.LOCALSTORAGE._driver],Yt=["dropInstance"],ze=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Yt),Kl={description:"",driver:Yl.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ql(i,u){i[u]=function(){var a=arguments;return i.ready().then(function(){return i[u].apply(i,a)})}}function Fe(){for(var i=1;i<arguments.length;i++){var u=arguments[i];if(u)for(var a in u)u.hasOwnProperty(a)&&(Yr(u[a])?arguments[0][a]=u[a].slice():arguments[0][a]=u[a])}return arguments[0]}var Xl=function(){function i(u){s(this,i);for(var a in bt)if(bt.hasOwnProperty(a)){var h=bt[a],v=h._driver;this[a]=v,It[v]||this.defineDriver(h)}this._defaultConfig=Fe({},Kl),this._config=Fe({},this._defaultConfig,u),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return i.prototype.config=function(a){if((typeof a=="undefined"?"undefined":l(a))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var h in a){if(h==="storeName"&&(a[h]=a[h].replace(/\W/g,"_")),h==="version"&&typeof a[h]!="number")return new Error("Database version must be a number.");this._config[h]=a[h]}return"driver"in a&&a.driver?this.setDriver(this._config.driver):!0}else return typeof a=="string"?this._config[a]:this._config},i.prototype.defineDriver=function(a,h,v){var c=new g(function(f,p){try{var b=a._driver,m=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver){p(m);return}for(var y=ze.concat("_initStorage"),x=0,S=y.length;x<S;x++){var N=y[x],L=!Gl(Yt,N);if((L||a[N])&&typeof a[N]!="function"){p(m);return}}var U=function(){for(var Lt=function(ti){return function(){var ei=new Error("Method "+ti+" is not implemented by the current driver"),Qr=g.reject(ei);return _(Qr,arguments[arguments.length-1]),Qr}},Ue=0,Jl=Yt.length;Ue<Jl;Ue++){var He=Yt[Ue];a[He]||(a[He]=Lt(He))}};U();var z=function(Lt){It[b]&&console.info("Redefining LocalForage driver: "+b),It[b]=a,Kr[b]=Lt,f()};"_support"in a?a._support&&typeof a._support=="function"?a._support().then(z,p):z(!!a._support):z(!0)}catch(q){p(q)}});return O(c,h,v),c},i.prototype.driver=function(){return this._driver||null},i.prototype.getDriver=function(a,h,v){var c=It[a]?g.resolve(It[a]):g.reject(new Error("Driver not found."));return O(c,h,v),c},i.prototype.getSerializer=function(a){var h=g.resolve(je);return O(h,a),h},i.prototype.ready=function(a){var h=this,v=h._driverSet.then(function(){return h._ready===null&&(h._ready=h._initDriver()),h._ready});return O(v,a,a),v},i.prototype.setDriver=function(a,h,v){var c=this;Yr(a)||(a=[a]);var f=this._getSupportedDrivers(a);function p(){c._config.driver=c.driver()}function b(x){return c._extend(x),p(),c._ready=c._initStorage(c._config),c._ready}function m(x){return function(){var S=0;function N(){for(;S<x.length;){var L=x[S];return S++,c._dbInfo=null,c._ready=null,c.getDriver(L).then(b).catch(N)}p();var U=new Error("No available storage method found.");return c._driverSet=g.reject(U),c._driverSet}return N()}}var y=this._driverSet!==null?this._driverSet.catch(function(){return g.resolve()}):g.resolve();return this._driverSet=y.then(function(){var x=f[0];return c._dbInfo=null,c._ready=null,c.getDriver(x).then(function(S){c._driver=S._driver,p(),c._wrapLibraryMethodsWithReady(),c._initDriver=m(f)})}).catch(function(){p();var x=new Error("No available storage method found.");return c._driverSet=g.reject(x),c._driverSet}),O(this._driverSet,h,v),this._driverSet},i.prototype.supports=function(a){return!!Kr[a]},i.prototype._extend=function(a){Fe(this,a)},i.prototype._getSupportedDrivers=function(a){for(var h=[],v=0,c=a.length;v<c;v++){var f=a[v];this.supports(f)&&h.push(f)}return h},i.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,h=ze.length;a<h;a++)Ql(this,ze[a])},i.prototype.createInstance=function(a){return new i(a)},i}(),ql=new Xl;r.exports=ql},{"3":3}]},{},[4])(4)})})(Xi);export{tn as a,Xi as l,en as r};
