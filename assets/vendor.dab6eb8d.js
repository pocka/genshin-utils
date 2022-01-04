var Zl=Object.defineProperty,Hl=Object.defineProperties;var Wl=Object.getOwnPropertyDescriptors;var Fr=Object.getOwnPropertySymbols;var Vl=Object.prototype.hasOwnProperty,Gl=Object.prototype.propertyIsEnumerable;var Zr=(o,t,e)=>t in o?Zl(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Le=(o,t)=>{for(var e in t||(t={}))Vl.call(t,e)&&Zr(o,e,t[e]);if(Fr)for(var e of Fr(t))Gl.call(t,e)&&Zr(o,e,t[e]);return o},Be=(o,t)=>Hl(o,Wl(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Hr=new Map;class Wr{constructor(t,e){if(this._$cssResult$=!0,e!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Hr.get(this.cssText);return je&&t===void 0&&(Hr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Yl=o=>new Wr(typeof o=="string"?o:o+"",ze),M=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,n,l)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[l+1],o[0]);return new Wr(e,ze)},Kl=(o,t)=>{je?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},Vr=je?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Yl(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const Gr=window.trustedTypes,Ql=Gr?Gr.emptyScript:"",Yr=window.reactiveElementPolyfillSupport,Fe={toAttribute(o,t){switch(t){case Boolean:o=o?Ql:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Kr=(o,t)=>t!==o&&(t==t||o==o),Ze={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:Kr};class mt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=Ze){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ze}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Vr(n))}else t!==void 0&&e.push(Vr(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Kl(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Ze){var n,l;const s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){const h=((l=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&l!==void 0?l:Fe.toAttribute)(e,r.type);this._$Ei=t,h==null?this.removeAttribute(s):this.setAttribute(s,h),this._$Ei=null}}_$AK(t,e){var r,n,l;const s=this.constructor,h=s._$Eu.get(t);if(h!==void 0&&this._$Ei!==h){const T=s.getPropertyOptions(h),$=T.converter,j=(l=(n=(r=$)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof $=="function"?$:null)!==null&&l!==void 0?l:Fe.fromAttribute;this._$Ei=h,this[h]=j(e,T.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Kr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,l)=>this[l]=n),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var l;return(l=n.hostUpdate)===null||l===void 0?void 0:l.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},Yr==null||Yr({ReactiveElement:mt}),((Ue=globalThis.reactiveElementVersions)!==null&&Ue!==void 0?Ue:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He;const yt=globalThis.trustedTypes,Qr=yt?yt.createPolicy("lit-html",{createHTML:o=>o}):void 0,at=`lit$${(Math.random()+"").slice(9)}$`,Xr="?"+at,Xl=`<${Xr}>`,wt=document,Dt=(o="")=>wt.createComment(o),Mt=o=>o===null||typeof o!="object"&&typeof o!="function",qr=Array.isArray,ql=o=>{var t;return qr(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jr=/-->/g,to=/>/g,ht=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,eo=/'/g,ro=/"/g,oo=/^(?:script|style|textarea)$/i,lo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),L=lo(1),k=lo(2),st=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),io=new WeakMap,Jl=(o,t,e)=>{var r,n;const l=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let s=l._$litPart$;if(s===void 0){const h=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;l._$litPart$=s=new jt(t.insertBefore(Dt(),h),h,void 0,e!=null?e:{})}return s._$AI(o),s},_t=wt.createTreeWalker(wt,129,null,!1),ti=(o,t)=>{const e=o.length-1,r=[];let n,l=t===2?"<svg>":"",s=Lt;for(let T=0;T<e;T++){const $=o[T];let j,g,_=-1,R=0;for(;R<$.length&&(s.lastIndex=R,g=s.exec($),g!==null);)R=s.lastIndex,s===Lt?g[1]==="!--"?s=Jr:g[1]!==void 0?s=to:g[2]!==void 0?(oo.test(g[2])&&(n=RegExp("</"+g[2],"g")),s=ht):g[3]!==void 0&&(s=ht):s===ht?g[0]===">"?(s=n!=null?n:Lt,_=-1):g[1]===void 0?_=-2:(_=s.lastIndex-g[2].length,j=g[1],s=g[3]===void 0?ht:g[3]==='"'?ro:eo):s===ro||s===eo?s=ht:s===Jr||s===to?s=Lt:(s=ht,n=void 0);const B=s===ht&&o[T+1].startsWith("/>")?" ":"";l+=s===Lt?$+Xl:_>=0?(r.push(j),$.slice(0,_)+"$lit$"+$.slice(_)+at+B):$+at+(_===-2?(r.push(void 0),T):B)}const h=l+(o[e]||"<?>")+(t===2?"</svg>":"");return[Qr!==void 0?Qr.createHTML(h):h,r]};class Bt{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let l=0,s=0;const h=t.length-1,T=this.parts,[$,j]=ti(t,e);if(this.el=Bt.createElement($,r),_t.currentNode=this.el.content,e===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(n=_t.nextNode())!==null&&T.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const g=[];for(const _ of n.getAttributeNames())if(_.endsWith("$lit$")||_.startsWith(at)){const R=j[s++];if(g.push(_),R!==void 0){const B=n.getAttribute(R.toLowerCase()+"$lit$").split(at),Y=/([.?@])?(.*)/.exec(R);T.push({type:1,index:l,name:Y[2],strings:B,ctor:Y[1]==="."?ri:Y[1]==="?"?li:Y[1]==="@"?ii:Kt})}else T.push({type:6,index:l})}for(const _ of g)n.removeAttribute(_)}if(oo.test(n.tagName)){const g=n.textContent.split(at),_=g.length-1;if(_>0){n.textContent=yt?yt.emptyScript:"";for(let R=0;R<_;R++)n.append(g[R],Dt()),_t.nextNode(),T.push({type:2,index:++l});n.append(g[_],Dt())}}}else if(n.nodeType===8)if(n.data===Xr)T.push({type:2,index:l});else{let g=-1;for(;(g=n.data.indexOf(at,g+1))!==-1;)T.push({type:7,index:l}),g+=at.length-1}l++}}static createElement(t,e){const r=wt.createElement("template");return r.innerHTML=t,r}}function xt(o,t,e=o,r){var n,l,s,h;if(t===st)return t;let T=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu;const $=Mt(t)?void 0:t._$litDirective$;return(T==null?void 0:T.constructor)!==$&&((l=T==null?void 0:T._$AO)===null||l===void 0||l.call(T,!1),$===void 0?T=void 0:(T=new $(o),T._$AT(o,e,r)),r!==void 0?((s=(h=e)._$Cl)!==null&&s!==void 0?s:h._$Cl=[])[r]=T:e._$Cu=T),T!==void 0&&(t=xt(o,T._$AS(o,t.values),T,r)),t}class ei{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:n}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:wt).importNode(r,!0);_t.currentNode=l;let s=_t.nextNode(),h=0,T=0,$=n[0];for(;$!==void 0;){if(h===$.index){let j;$.type===2?j=new jt(s,s.nextSibling,this,t):$.type===1?j=new $.ctor(s,$.name,$.strings,this,t):$.type===6&&(j=new ni(s,this,t)),this.v.push(j),$=n[++T]}h!==($==null?void 0:$.index)&&(s=_t.nextNode(),h++)}return l}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class jt{constructor(t,e,r,n){var l;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(l=n==null?void 0:n.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Mt(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==st&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):ql(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.S(wt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:n}=t,l=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Bt.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.m(r);else{const s=new ei(l,this),h=s.p(this.options);s.m(r),this.S(h),this._$AH=s}}_$AC(t){let e=io.get(t.strings);return e===void 0&&io.set(t.strings,e=new Bt(t)),e}M(t){qr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const l of t)n===e.length?e.push(r=new jt(this.A(Dt()),this.A(Dt()),this,this.options)):r=e[n],r._$AI(l),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Kt{constructor(t,e,r,n,l){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){const l=this.strings;let s=!1;if(l===void 0)t=xt(this,t,e,0),s=!Mt(t)||t!==this._$AH&&t!==st,s&&(this._$AH=t);else{const h=t;let T,$;for(t=l[0],T=0;T<l.length-1;T++)$=xt(this,h[r+T],e,T),$===st&&($=this._$AH[T]),s||(s=!Mt($)||$!==this._$AH[T]),$===F?t=F:t!==F&&(t+=($!=null?$:"")+l[T+1]),this._$AH[T]=$}s&&!n&&this.k(t)}k(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ri extends Kt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===F?void 0:t}}const oi=yt?yt.emptyScript:"";class li extends Kt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==F?this.element.setAttribute(this.name,oi):this.element.removeAttribute(this.name)}}class ii extends Kt{constructor(t,e,r,n,l){super(t,e,r,n,l),this.type=5}_$AI(t,e=this){var r;if((t=(r=xt(this,t,e,0))!==null&&r!==void 0?r:F)===st)return;const n=this._$AH,l=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==F&&(n===F||l);l&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ni{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const no=window.litHtmlPolyfillSupport;no==null||no(Bt,jt),((He=globalThis.litHtmlVersions)!==null&&He!==void 0?He:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We,Ve;class E extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Jl(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return st}}E.finalized=!0,E._$litElement$=!0,(We=globalThis.litElementHydrateSupport)===null||We===void 0||We.call(globalThis,{LitElement:E});const ao=globalThis.litElementPolyfillSupport;ao==null||ao({LitElement:E});((Ve=globalThis.litElementVersions)!==null&&Ve!==void 0?Ve:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Be(Le({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function P(o){return(t,e)=>e!==void 0?((r,n,l)=>{n.constructor.createProperty(l,r)})(o,t,e):ai(o,t)}const S=M`
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
`;var so=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Qt extends E{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[S,M`
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
      `]}render(){return L`
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
 */const ho=uo(class extends co{constructor(o){var t;if(super(o),o.type!==Xt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const r in t)this.ut.add(r);return this.render(t)}this.ut.forEach(r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const n=t[r];n!=null&&(this.ut.add(r),r.includes("-")?e.setProperty(r,n):e[r]=n)}return st}});var vo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class qt extends E{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[S,M`
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
      `]}render(){return L`
      <div class="body">
        <slot></slot>
      </div>

      <div
        class="tail"
        style=${ho({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}qt.defaultTagName="turtle-balloon";vo([P({type:String,attribute:"tail-position"})],qt.prototype,"tailPosition",void 0);vo([P({type:Number,attribute:"tail-offset"})],qt.prototype,"tailOffset",void 0);var fo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Jt;class vt{constructor(t,e=""){this.assigned=!1,Jt.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",n=this.host.shadowRoot.querySelector(r);this.assigned=!!n&&n.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",fo(this,Jt,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",fo(this,Jt,"f"))}}Jt=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=o=>o!=null?o:F;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(o,t)=>{var e,r;const n=o._$AN;if(n===void 0)return!1;for(const l of n)(r=(e=l)._$AO)===null||r===void 0||r.call(e,t,!1),zt(l,t);return!0},te=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},po=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),di(t)}};function ui(o){this._$AN!==void 0?(te(this),this._$AM=o,po(this)):this._$AM=o}function ci(o,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let l=e;l<r.length;l++)zt(r[l],!1),te(r[l]);else r!=null&&(zt(r,!1),te(r));else zt(this,o)}const di=o=>{var t,e,r,n;o.type==Xt.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=ci),(e=(n=o)._$AQ)!==null&&e!==void 0||(n._$AQ=ui))};class hi extends co{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),po(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(zt(this,t),te(this))}setValue(t){if(si(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var ee=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},re=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Tt,$t;class vi extends hi{constructor(t){super(t);if(Tt.set(this,null),$t.set(this,[]),t.type!==Xt.CHILD&&t.type!==Xt.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=ee(this,Tt,"f"))===null||r===void 0||r.call(this);const n="parentNode"in t?t.parentNode:t.element;if(!("tagName"in n)||n.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{ee(this,$t,"f").forEach(h=>h());const s=n.assignedElements();re(this,$t,s.map(e).filter(h=>!!h),"f")};return n.addEventListener("slotchange",l),re(this,Tt,()=>{n.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return st}disconnected(){var t;(t=ee(this,Tt,"f"))===null||t===void 0||t.call(this),re(this,Tt,null,"f"),ee(this,$t,"f").forEach(e=>e()),re(this,$t,[],"f")}}Tt=new WeakMap,$t=new WeakMap;const ut=uo(vi);var go=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},bo=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Ut=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function Ft(o){var t,e,r;class n extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(s=>{!s[0]||bo(this,t,mo(s[0].target),"f")})),r.set(this,s=>{!Ut(this,t,"f")||(s.preventDefault(),s.stopPropagation())})}renderLightDOMSlot(s){return L`<slot id="lightdom" class=${Ge(s)}>
        ${ut(h=>{if("getAttribute"in h)return bo(this,t,mo(h),"f"),h.addEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").observe(h,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{h.removeEventListener("click",Ut(this,r,"f")),Ut(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,go([P({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),go([P({type:Boolean,attribute:"lightdom"})],n.prototype,"lightDOM",void 0),n}function mo(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var Ye=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},yo=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},oe;class Zt extends Ft(E){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,oe.set(this,new vt(this,"icon"))}static get styles(){return[S,M`
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
      `]}render(){const t=yo(this,oe,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):L`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return L`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!yo(this,oe,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}oe=new WeakMap;Zt.defaultTagName="turtle-button";Ye([P({type:String})],Zt.prototype,"variant",void 0);Ye([P({type:Boolean,reflect:!0})],Zt.prototype,"rounded",void 0);Ye([P({type:Boolean,reflect:!0,attribute:"icon-only"})],Zt.prototype,"iconOnly",void 0);var fi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class Ke extends E{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[S,M`
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
      `]}render(){return L` <slot></slot> `}}Ke.defaultTagName="turtle-button-group";fi([P({type:Boolean,reflect:!0})],Ke.prototype,"evenly",void 0);var wo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},_o=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Qe,Xe;class le extends E{constructor(){super(...arguments);Qe.set(this,new vt(this,"action")),Xe.set(this,new vt(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[S,M`
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
      `]}render(){return L`
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
    `}}Qe=new WeakMap,Xe=new WeakMap;le.defaultTagName="turtle-card";wo([P({type:Boolean,attribute:"shadowed",reflect:!0})],le.prototype,"shadowed",void 0);wo([P({type:Boolean,attribute:"bordered",reflect:!0})],le.prototype,"bordered",void 0);class xo extends Ft(E){static get styles(){return[S,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():L`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}xo.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(o){return P(Be(Le({},o),{state:!0}))}var To=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},tt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ie,Et,At;class ne extends E{constructor(){super(...arguments);this.sync=()=>{},this._checkState="unchecked",this._disabled=!1,ie.set(this,new MutationObserver(t=>{!t[0]||tt(this,Et,"f").call(this,t[0].target)})),Et.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),At.set(this,t=>{tt(this,Et,"f").call(this,t.currentTarget)})}static get styles(){return[S,M`
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
      `]}render(){return L`
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
        ${pi}
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
    `}}ie=new WeakMap,Et=new WeakMap,At=new WeakMap;ne.defaultTagName="turtle-checkbox";To([J()],ne.prototype,"_checkState",void 0);To([J()],ne.prototype,"_disabled",void 0);const pi=k`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,gi=k`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`;var ae=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},qe=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,n){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!n:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?n.call(o,e):n?n.value=e:t.set(o,e),e},Z=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},lt,ct,St,se,ue,Je,tr;class Ct extends E{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,lt.set(this,null),ct.set(this,0),this._listbox=null,this._options=[],St.set(this,t=>{var e,r;if(this.noAutoAria||(qe(this,ct,t,"f"),!Z(this,lt,"f")))return;if(!this._options.length){Z(this,lt,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((l,s)=>{s===t?l.setAttribute("aria-selected","true"):l.removeAttribute("aria-selected")});const n=this._options[t];if(!(n==null?void 0:n.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&n.scrollIntoView(),Z(this,lt,"f").setAttribute("aria-activedescendant",n.id)}),se.set(this,()=>{if(this.noAutoAria||!Z(this,lt,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),Z(this,lt,"f").setAttribute("aria-controls",this._listbox.id)}),ue.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":Z(this,Je,"f").call(this),t.preventDefault();return;case"Escape":Z(this,tr,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=Z(this,ct,"f")<=0?this._options.length-1:Z(this,ct,"f")-1;Z(this,St,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=Z(this,ct,"f")>=this._options.length-1?0:Z(this,ct,"f")+1;Z(this,St,"f").call(this,e),t.preventDefault();return}}}),Je.set(this,(t=Z(this,ct,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),tr.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[S,M`
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
      `]}render(){return L`
      <div class="searchbox">
        <slot class="icon" name="icon">${bi}</slot>
        <slot class="search" name="search"
          >${ut(t=>{if("disabled"in t)return qe(this,lt,t,"f"),Z(this,se,"f").call(this),t.addEventListener("keydown",Z(this,ue,"f")),()=>{qe(this,lt,null,"f"),t.removeEventListener("keydown",Z(this,ue,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${ut(t=>{var e;this._listbox=t,this._options=Array.from(t.children),Z(this,se,"f").call(this),Z(this,St,"f").call(this,0);const r=()=>{Z(this,St,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const n=l=>{if(!l.target||!("getAttribute"in l.target))return;const h=l.target.closest("turtle-command-palette-option");h&&h.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",n),()=>{var l;this._listbox=null,this._options=[],(l=t.shadowRoot)===null||l===void 0||l.removeEventListener("slotchange",r),t.removeEventListener("click",n)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}lt=new WeakMap,ct=new WeakMap,St=new WeakMap,se=new WeakMap,ue=new WeakMap,Je=new WeakMap,tr=new WeakMap;Ct.defaultTagName="turtle-command-palette";ae([P({type:String,reflect:!0})],Ct.prototype,"role",void 0);ae([P({type:Boolean,attribute:"noautoaria"})],Ct.prototype,"noAutoAria",void 0);ae([J()],Ct.prototype,"_listbox",void 0);ae([J()],Ct.prototype,"_options",void 0);const bi=k`
  <svg part="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},$o=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ce;class er extends E{constructor(){super(...arguments);this.role="listbox",ce.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[S,M`
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
      `]}connectedCallback(){super.connectedCallback(),$o(this,ce,"f").call(this)}render(){return L`<slot @slotchange=${$o(this,ce,"f")}></slot>`}}ce=new WeakMap;er.defaultTagName="turtle-command-palette-listbox";mi([P({type:String,reflect:!0})],er.prototype,"role",void 0);var yi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class rr extends E{constructor(){super(...arguments);this.role="option"}static get styles(){return[S,M`
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
      `]}render(){return L`
      <span class="title">
        <slot></slot>
      </span>

      <slot class="description" name="description"></slot>
    `}}rr.defaultTagName="turtle-command-palette-option";yi([P({type:String,reflect:!0})],rr.prototype,"role",void 0);var wi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class or extends E{static get styles(){return M`
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
    `}render(){return L`<slot></slot>`}}or.defaultTagName="turtle-design-system";wi([P({type:String,reflect:!0})],or.prototype,"theme",void 0);var _i=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Pt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Rt,de;class lr extends E{constructor(){super(...arguments);this._elementState="neutral",Rt.set(this,t=>{Pt(this,de,"f").call(this,t.currentTarget)}),de.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[S,M`
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
      `]}render(){return L`
      <slot class="label" name="label"></slot>

      <slot class="item"
        >${ut(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return Pt(this,de,"f").call(this,t),t.addEventListener("validitychange",Pt(this,Rt,"f")),t.addEventListener("fieldtouch",Pt(this,Rt,"f")),()=>{t.removeEventListener("validitychange",Pt(this,Rt,"f")),t.removeEventListener("fieldtouch",Pt(this,Rt,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}Rt=new WeakMap,de=new WeakMap;lr.defaultTagName="turtle-form-field";_i([J()],lr.prototype,"_elementState",void 0);class Eo extends E{static get styles(){return[S,M`
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
      `]}render(){return L`
      <slot></slot>

      <slot class="label" name="label"></slot>
    `}}Eo.defaultTagName="turtle-labelled-item";class Ao extends E{static get styles(){return[S,M`
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
      `]}render(){return L` <slot></slot> `}}Ao.defaultTagName="turtle-list";var So=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ir,nr;class Co extends Ft(E){constructor(){super(...arguments);ir.set(this,new vt(this,"icon-start")),nr.set(this,new vt(this,"icon-end"))}static get styles(){return[S,M`
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
      `]}render(){const t=["body-slot",So(this,ir,"f").assigned?"icon-start":"",So(this,nr,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):L`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return L`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}ir=new WeakMap,nr=new WeakMap;Co.defaultTagName="turtle-list-item";var xi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ar;class Po extends E{constructor(){super(...arguments);ar.set(this,new vt(this,"image"))}static get styles(){return[S,M`
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
      `]}render(){return L`
      <div class="body">
        <div class="image" ?data-hidden=${!xi(this,ar,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}ar=new WeakMap;Po.defaultTagName="turtle-notification";class Ro extends Ft(E){static get styles(){return[S,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():L`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Ro.defaultTagName="turtle-notification-action";class ko extends E{static get styles(){return[S,M`
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
      `]}render(){return L`<slot></slot>`}}ko.defaultTagName="turtle-radio-button";var he=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},ft=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ve,fe,Ht;function pe(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class pt extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,ve.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&ft(this,Ht,"f").call(this,t[0].target)})),fe.set(this,t=>{ft(this,Ht,"f").call(this,t.currentTarget)}),Ht.set(this,t=>{const e=pe(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[S,M`
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
      `]}get isValid(){return!!this._isElementValid}render(){var t;return L`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${ut(e=>{if("validity"in e)return ft(this,Ht,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",ft(this,fe,"f")),e.addEventListener("focusout",this.touch),ft(this,ve,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",ft(this,fe,"f")),e.removeEventListener("focusout",this.touch),ft(this,ve,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Oo}</div>
        <div class="indicator invalid" aria-hidden="true">${No}</div>
      </div>
    `}}ve=new WeakMap,fe=new WeakMap,Ht=new WeakMap;pt.defaultTagName="turtle-textbox";he([P({type:Boolean,reflect:!0})],pt.prototype,"touched",void 0);he([P({type:Boolean,attribute:"novalidity"})],pt.prototype,"noValidity",void 0);he([J()],pt.prototype,"_isElementValid",void 0);he([J()],pt.prototype,"_disabled",void 0);const Oo=k`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,No=k`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var ge=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},be=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},me,ye;class kt extends E{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,me.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=pe(t[0].target))})),ye.set(this,t=>{this._isElementValid=pe(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...pt.styles,M`
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
      `]}render(){var t;return L`
      <div
        class="wrapper"
        data-invalid=${String(!((t=this._isElementValid)!==null&&t!==void 0?t:!0))}
        ?data-disabled=${this._disabled}
      >
        <slot>
          ${ut(e=>{if("validity"in e)return this._isElementValid=pe(e),this._disabled=e.disabled,e.addEventListener("input",be(this,ye,"f")),e.addEventListener("focusout",this.touch),be(this,me,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",be(this,ye,"f")),e.removeEventListener("focusout",this.touch),be(this,me,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Oo}</div>
        <div class="indicator invalid" aria-hidden="true">${No}</div>

        <div class="caret" aria-hidden="true">${Ti}</div>
      </div>
    `}}me=new WeakMap,ye=new WeakMap;kt.defaultTagName="turtle-selectbox";ge([P({type:Boolean,reflect:!0})],kt.prototype,"touched",void 0);ge([P({type:Boolean,attribute:"novalidity"})],kt.prototype,"noValidity",void 0);ge([J()],kt.prototype,"_isElementValid",void 0);ge([J()],kt.prototype,"_disabled",void 0);const Ti=k`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var $i=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};function Ei(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return $i([P({type:Boolean})],t.prototype,"autofocus",void 0),t}var sr=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},Io=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ur,cr;class Wt extends Ei(E){constructor(){super(...arguments);ur.set(this,new vt(this,"action")),this.severity="info",cr.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[S,M`
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
      `]}render(){return L`
      <div class="body">
        <slot></slot>
      </div>

      ${typeof this.lifetime=="number"?k`
        <svg
          class="lifetime"
          style=${ho({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${Ge(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${Ge(this.lifetimeLabel)}
          @animationend=${Io(this,cr,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:F}

      <div class="actions" ?data-assigned=${Io(this,ur,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}ur=new WeakMap,cr=new WeakMap;Wt.defaultTagName="turtle-snackbar";sr([P({type:String,reflect:!0})],Wt.prototype,"severity",void 0);sr([P({type:Number})],Wt.prototype,"lifetime",void 0);sr([P({type:String,attribute:"lifetime-label"})],Wt.prototype,"lifetimeLabel",void 0);class Do extends Ft(E){static get styles(){return[S,M`
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
      `]}render(){return this.lightDOM?this.renderLightDOMSlot():L`
          <button class="button" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `}}Do.defaultTagName="turtle-snackbar-action";var Mo=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l},we=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},_e,xe;class Te extends E{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,_e.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),xe.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[S,M`
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
      `]}render(){return L`
      <slot>
        ${ut(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",we(this,xe,"f")),we(this,_e,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",we(this,xe,"f")),we(this,_e,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}_e=new WeakMap,xe=new WeakMap;Te.defaultTagName="turtle-toggle-switch";Mo([J()],Te.prototype,"_checked",void 0);Mo([J()],Te.prototype,"_disabled",void 0);const G=M`
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
`;var Ai=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class dr extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[S,G,M`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.414 8.414 19 7l-7.293 7.293L4.414 7 3 8.414l8.707 8.707 8.707-8.707Z" fill="currentColor"/>
      </svg>
    `}}dr.defaultTagName="turtle-angle-icon";Ai([P({type:String,reflect:!0})],dr.prototype,"direction",void 0);var Si=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class hr extends E{constructor(){super(...arguments);this.direction="down"}static get styles(){return[S,G,M`
        :host([direction="up"]) > .icon {
          transform: rotate(180deg);
        }

        :host([direction="right"]) > .icon {
          transform: rotate(-90deg);
        }

        :host([direction="left"]) > .icon {
          transform: rotate(90deg);
        }
      `]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m13.034 17.043 6.504-6.505L21 12l-9 9-9-9 1.462-1.462 6.504 6.505V3h2.068v14.043Z" fill="currentColor"/>
      </svg>
    `}}hr.defaultTagName="turtle-arrow-icon";Si([P({type:String,reflect:!0})],hr.prototype,"direction",void 0);var Ci=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class vr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}vr.defaultTagName="turtle-attention-icon";Ci([P({type:Boolean})],vr.prototype,"outlined",void 0);class Lo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}Lo.defaultTagName="turtle-brand-icon";class Bo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Bo.defaultTagName="turtle-check-icon";var Pi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class fr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Zm7 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm9 3.914 6.207-6.207-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414L11 15.914Z"
          fill="currentColor"
        />
      </svg>
    `}}fr.defaultTagName="turtle-circle-check-icon";Pi([P({type:Boolean})],fr.prototype,"outlined",void 0);var Ri=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class pr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}pr.defaultTagName="turtle-circle-cross-icon";Ri([P({type:Boolean})],pr.prototype,"outlined",void 0);var ki=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class gr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}gr.defaultTagName="turtle-circle-minus-icon";ki([P({type:Boolean})],gr.prototype,"outlined",void 0);var Oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class br extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}br.defaultTagName="turtle-circle-plus-icon";Oi([P({type:Boolean})],br.prototype,"outlined",void 0);class jo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}jo.defaultTagName="turtle-cross-icon";class zo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}zo.defaultTagName="turtle-dots-icon";var Ni=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class mr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}mr.defaultTagName="turtle-heart-icon";Ni([P({type:Boolean})],mr.prototype,"outlined",void 0);var Ii=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class yr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}yr.defaultTagName="turtle-info-icon";Ii([P({type:Boolean})],yr.prototype,"outlined",void 0);class Uo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Uo.defaultTagName="turtle-minus-icon";class Fo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}Fo.defaultTagName="turtle-plus-icon";var Di=globalThis&&globalThis.__decorate||function(o,t,e,r){var n=arguments.length,l=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var h=o.length-1;h>=0;h--)(s=o[h])&&(l=(n<3?s(l):n>3?s(t,e,l):s(t,e))||l);return n>3&&l&&Object.defineProperty(t,e,l),l};class wr extends E{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[S,G]}render(){return this.outlined?k`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}wr.defaultTagName="turtle-question-icon";Di([P({type:Boolean})],wr.prototype,"outlined",void 0);class Zo extends E{static get styles(){return[S,G]}render(){return k`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}Zo.defaultTagName="turtle-reload-icon";const Mi=[dr,hr,vr,Lo,Bo,fr,pr,gr,br,jo,zo,mr,yr,Uo,Fo,wr,Zo],zi=[Qt,qt,Zt,Ke,le,xo,ne,Ct,er,rr,or,lr,Eo,Ao,Co,Po,Ro,ko,kt,Wt,Do,pt,Te,...Mi];function Ui(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var $e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ee(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Li={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(r,n,l){function s($,j){if(!n[$]){if(!r[$]){var g=typeof Ee=="function"&&Ee;if(!j&&g)return g($,!0);if(h)return h($,!0);var _=new Error("Cannot find module '"+$+"'");throw _.code="MODULE_NOT_FOUND",_}var R=n[$]={exports:{}};r[$][0].call(R.exports,function(B){var Y=r[$][1][B];return s(Y||B)},R,R.exports,e,r,n,l)}return n[$].exports}for(var h=typeof Ee=="function"&&Ee,T=0;T<l.length;T++)s(l[T]);return s}({1:[function(e,r,n){(function(l){var s=l.MutationObserver||l.WebKitMutationObserver,h;if(s){var T=0,$=new s(B),j=l.document.createTextNode("");$.observe(j,{characterData:!0}),h=function(){j.data=T=++T%2}}else if(!l.setImmediate&&typeof l.MessageChannel!="undefined"){var g=new l.MessageChannel;g.port1.onmessage=B,h=function(){g.port2.postMessage(0)}}else"document"in l&&"onreadystatechange"in l.document.createElement("script")?h=function(){var H=l.document.createElement("script");H.onreadystatechange=function(){B(),H.onreadystatechange=null,H.parentNode.removeChild(H),H=null},l.document.documentElement.appendChild(H)}:h=function(){setTimeout(B,0)};var _,R=[];function B(){_=!0;for(var H,et,W=R.length;W;){for(et=R,R=[],H=-1;++H<W;)et[H]();W=R.length}_=!1}r.exports=Y;function Y(H){R.push(H)===1&&!_&&h()}}).call(this,typeof $e!="undefined"?$e:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(e,r,n){var l=e(1);function s(){}var h={},T=["REJECTED"],$=["FULFILLED"],j=["PENDING"];r.exports=g;function g(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=j,this.queue=[],this.outcome=void 0,w!==s&&Y(this,w)}g.prototype.catch=function(w){return this.then(null,w)},g.prototype.then=function(w,O){if(typeof w!="function"&&this.state===$||typeof O!="function"&&this.state===T)return this;var C=new this.constructor(s);if(this.state!==j){var D=this.state===$?w:O;R(C,D,this.outcome)}else this.queue.push(new _(C,w,O));return C};function _(w,O,C){this.promise=w,typeof O=="function"&&(this.onFulfilled=O,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},_.prototype.otherCallFulfilled=function(w){R(this.promise,this.onFulfilled,w)},_.prototype.callRejected=function(w){h.reject(this.promise,w)},_.prototype.otherCallRejected=function(w){R(this.promise,this.onRejected,w)};function R(w,O,C){l(function(){var D;try{D=O(C)}catch(V){return h.reject(w,V)}D===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,D)})}h.resolve=function(w,O){var C=H(B,O);if(C.status==="error")return h.reject(w,C.value);var D=C.value;if(D)Y(w,D);else{w.state=$,w.outcome=O;for(var V=-1,K=w.queue.length;++V<K;)w.queue[V].callFulfilled(O)}return w},h.reject=function(w,O){w.state=T,w.outcome=O;for(var C=-1,D=w.queue.length;++C<D;)w.queue[C].callRejected(O);return w};function B(w){var O=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof O=="function")return function(){O.apply(w,arguments)}}function Y(w,O){var C=!1;function D(X){C||(C=!0,h.reject(w,X))}function V(X){C||(C=!0,h.resolve(w,X))}function K(){O(V,D)}var Q=H(K);Q.status==="error"&&D(Q.value)}function H(w,O){var C={};try{C.value=w(O),C.status="success"}catch(D){C.status="error",C.value=D}return C}g.resolve=et;function et(w){return w instanceof this?w:h.resolve(new this(s),w)}g.reject=W;function W(w){var O=new this(s);return h.reject(O,w)}g.all=Ae;function Ae(w){var O=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,D=!1;if(!C)return this.resolve([]);for(var V=new Array(C),K=0,Q=-1,X=new this(s);++Q<C;)rt(w[Q],Q);return X;function rt(Ot,Vt){O.resolve(Ot).then(Se,function(gt){D||(D=!0,h.reject(X,gt))});function Se(gt){V[Vt]=gt,++K===C&&!D&&(D=!0,h.resolve(X,V))}}}g.race=dt;function dt(w){var O=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=w.length,D=!1;if(!C)return this.resolve([]);for(var V=-1,K=new this(s);++V<C;)Q(w[V]);return K;function Q(X){O.resolve(X).then(function(rt){D||(D=!0,h.resolve(K,rt))},function(rt){D||(D=!0,h.reject(K,rt))})}}},{"1":1}],3:[function(e,r,n){(function(l){typeof l.Promise!="function"&&(l.Promise=e(2))}).call(this,typeof $e!="undefined"?$e:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(e,r,n){var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};function s(i,u){if(!(i instanceof u))throw new TypeError("Cannot call a class as a function")}function h(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var T=h();function $(){try{if(!T||!T.open)return!1;var i=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),u=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!i||u)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function j(i,u){i=i||[],u=u||{};try{return new Blob(i,u)}catch(c){if(c.name!=="TypeError")throw c;for(var a=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,d=new a,v=0;v<i.length;v+=1)d.append(i[v]);return d.getBlob(u.type)}}typeof Promise=="undefined"&&e(3);var g=Promise;function _(i,u){u&&i.then(function(a){u(null,a)},function(a){u(a)})}function R(i,u,a){typeof u=="function"&&i.then(u),typeof a=="function"&&i.catch(a)}function B(i){return typeof i!="string"&&(console.warn(i+" used as a key, but it is not a string."),i=String(i)),i}function Y(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var H="local-forage-detect-blob-support",et=void 0,W={},Ae=Object.prototype.toString,dt="readonly",w="readwrite";function O(i){for(var u=i.length,a=new ArrayBuffer(u),d=new Uint8Array(a),v=0;v<u;v++)d[v]=i.charCodeAt(v);return a}function C(i){return new g(function(u){var a=i.transaction(H,w),d=j([""]);a.objectStore(H).put(d,"key"),a.onabort=function(v){v.preventDefault(),v.stopPropagation(),u(!1)},a.oncomplete=function(){var v=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);u(c||!v||parseInt(v[1],10)>=43)}}).catch(function(){return!1})}function D(i){return typeof et=="boolean"?g.resolve(et):C(i).then(function(u){return et=u,et})}function V(i){var u=W[i.name],a={};a.promise=new g(function(d,v){a.resolve=d,a.reject=v}),u.deferredOperations.push(a),u.dbReady?u.dbReady=u.dbReady.then(function(){return a.promise}):u.dbReady=a.promise}function K(i){var u=W[i.name],a=u.deferredOperations.pop();if(a)return a.resolve(),a.promise}function Q(i,u){var a=W[i.name],d=a.deferredOperations.pop();if(d)return d.reject(u),d.promise}function X(i,u){return new g(function(a,d){if(W[i.name]=W[i.name]||xr(),i.db)if(u)V(i),i.db.close();else return a(i.db);var v=[i.name];u&&v.push(i.version);var c=T.open.apply(T,v);u&&(c.onupgradeneeded=function(f){var p=c.result;try{p.createObjectStore(i.storeName),f.oldVersion<=1&&p.createObjectStore(H)}catch(b){if(b.name==="ConstraintError")console.warn('The database "'+i.name+'" has been upgraded from version '+f.oldVersion+" to version "+f.newVersion+', but the storage "'+i.storeName+'" already exists.');else throw b}}),c.onerror=function(f){f.preventDefault(),d(c.error)},c.onsuccess=function(){var f=c.result;f.onversionchange=function(p){p.target.close()},a(f),K(i)}})}function rt(i){return X(i,!1)}function Ot(i){return X(i,!0)}function Vt(i,u){if(!i.db)return!0;var a=!i.db.objectStoreNames.contains(i.storeName),d=i.version<i.db.version,v=i.version>i.db.version;if(d&&(i.version!==u&&console.warn('The database "'+i.name+`" can't be downgraded from version `+i.db.version+" to version "+i.version+"."),i.version=i.db.version),v||a){if(a){var c=i.db.version+1;c>i.version&&(i.version=c)}return!0}return!1}function Se(i){return new g(function(u,a){var d=new FileReader;d.onerror=a,d.onloadend=function(v){var c=btoa(v.target.result||"");u({__local_forage_encoded_blob:!0,data:c,type:i.type})},d.readAsBinaryString(i)})}function gt(i){var u=O(atob(i.data));return j([u],{type:i.type})}function _r(i){return i&&i.__local_forage_encoded_blob}function Ho(i){var u=this,a=u._initReady().then(function(){var d=W[u._dbInfo.name];if(d&&d.dbReady)return d.dbReady});return R(a,i,i),a}function Wo(i){V(i);for(var u=W[i.name],a=u.forages,d=0;d<a.length;d++){var v=a[d];v._dbInfo.db&&(v._dbInfo.db.close(),v._dbInfo.db=null)}return i.db=null,rt(i).then(function(c){return i.db=c,Vt(i)?Ot(i):c}).then(function(c){i.db=u.db=c;for(var f=0;f<a.length;f++)a[f]._dbInfo.db=c}).catch(function(c){throw Q(i,c),c})}function ot(i,u,a,d){d===void 0&&(d=1);try{var v=i.db.transaction(i.storeName,u);a(null,v)}catch(c){if(d>0&&(!i.db||c.name==="InvalidStateError"||c.name==="NotFoundError"))return g.resolve().then(function(){if(!i.db||c.name==="NotFoundError"&&!i.db.objectStoreNames.contains(i.storeName)&&i.version<=i.db.version)return i.db&&(i.version=i.db.version+1),Ot(i)}).then(function(){return Wo(i).then(function(){ot(i,u,a,d-1)})}).catch(a);a(c)}}function xr(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Vo(i){var u=this,a={db:null};if(i)for(var d in i)a[d]=i[d];var v=W[a.name];v||(v=xr(),W[a.name]=v),v.forages.push(u),u._initReady||(u._initReady=u.ready,u.ready=Ho);var c=[];function f(){return g.resolve()}for(var p=0;p<v.forages.length;p++){var b=v.forages[p];b!==u&&c.push(b._initReady().catch(f))}var m=v.forages.slice(0);return g.all(c).then(function(){return a.db=v.db,rt(a)}).then(function(y){return a.db=y,Vt(a,u._defaultConfig.version)?Ot(a):y}).then(function(y){a.db=v.db=y,u._dbInfo=a;for(var x=0;x<m.length;x++){var A=m[x];A!==u&&(A._dbInfo.db=a.db,A._dbInfo.version=a.version)}})}function Go(i,u){var a=this;i=B(i);var d=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.get(i);m.onsuccess=function(){var y=m.result;y===void 0&&(y=null),_r(y)&&(y=gt(y)),v(y)},m.onerror=function(){c(m.error)}}catch(y){c(y)}})}).catch(c)});return _(d,u),d}function Yo(i,u){var a=this,d=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.openCursor(),y=1;m.onsuccess=function(){var x=m.result;if(x){var A=x.value;_r(A)&&(A=gt(A));var N=i(A,x.key,y++);N!==void 0?v(N):x.continue()}else v()},m.onerror=function(){c(m.error)}}catch(x){c(x)}})}).catch(c)});return _(d,u),d}function Ko(i,u,a){var d=this;i=B(i);var v=new g(function(c,f){var p;d.ready().then(function(){return p=d._dbInfo,Ae.call(u)==="[object Blob]"?D(p.db).then(function(b){return b?u:Se(u)}):u}).then(function(b){ot(d._dbInfo,w,function(m,y){if(m)return f(m);try{var x=y.objectStore(d._dbInfo.storeName);b===null&&(b=void 0);var A=x.put(b,i);y.oncomplete=function(){b===void 0&&(b=null),c(b)},y.onabort=y.onerror=function(){var N=A.error?A.error:A.transaction.error;f(N)}}catch(N){f(N)}})}).catch(f)});return _(v,a),v}function Qo(i,u){var a=this;i=B(i);var d=new g(function(v,c){a.ready().then(function(){ot(a._dbInfo,w,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=b.delete(i);p.oncomplete=function(){v()},p.onerror=function(){c(m.error)},p.onabort=function(){var y=m.error?m.error:m.transaction.error;c(y)}}catch(y){c(y)}})}).catch(c)});return _(d,u),d}function Xo(i){var u=this,a=new g(function(d,v){u.ready().then(function(){ot(u._dbInfo,w,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.clear();f.oncomplete=function(){d()},f.onabort=f.onerror=function(){var m=b.error?b.error:b.transaction.error;v(m)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function qo(i){var u=this,a=new g(function(d,v){u.ready().then(function(){ot(u._dbInfo,dt,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.count();b.onsuccess=function(){d(b.result)},b.onerror=function(){v(b.error)}}catch(m){v(m)}})}).catch(v)});return _(a,i),a}function Jo(i,u){var a=this,d=new g(function(v,c){if(i<0){v(null);return}a.ready().then(function(){ot(a._dbInfo,dt,function(f,p){if(f)return c(f);try{var b=p.objectStore(a._dbInfo.storeName),m=!1,y=b.openKeyCursor();y.onsuccess=function(){var x=y.result;if(!x){v(null);return}i===0||m?v(x.key):(m=!0,x.advance(i))},y.onerror=function(){c(y.error)}}catch(x){c(x)}})}).catch(c)});return _(d,u),d}function tl(i){var u=this,a=new g(function(d,v){u.ready().then(function(){ot(u._dbInfo,dt,function(c,f){if(c)return v(c);try{var p=f.objectStore(u._dbInfo.storeName),b=p.openKeyCursor(),m=[];b.onsuccess=function(){var y=b.result;if(!y){d(m);return}m.push(y.key),y.continue()},b.onerror=function(){v(b.error)}}catch(y){v(y)}})}).catch(v)});return _(a,i),a}function el(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var d=this,v;if(!i.name)v=g.reject("Invalid arguments");else{var c=i.name===a.name&&d._dbInfo.db,f=c?g.resolve(d._dbInfo.db):rt(i).then(function(p){var b=W[i.name],m=b.forages;b.db=p;for(var y=0;y<m.length;y++)m[y]._dbInfo.db=p;return p});i.storeName?v=f.then(function(p){if(!!p.objectStoreNames.contains(i.storeName)){var b=p.version+1;V(i);var m=W[i.name],y=m.forages;p.close();for(var x=0;x<y.length;x++){var A=y[x];A._dbInfo.db=null,A._dbInfo.version=b}var N=new g(function(I,U){var z=T.open(i.name,b);z.onerror=function(q){var It=z.result;It.close(),U(q)},z.onupgradeneeded=function(){var q=z.result;q.deleteObjectStore(i.storeName)},z.onsuccess=function(){var q=z.result;q.close(),I(q)}});return N.then(function(I){m.db=I;for(var U=0;U<y.length;U++){var z=y[U];z._dbInfo.db=I,K(z._dbInfo)}}).catch(function(I){throw(Q(i,I)||g.resolve()).catch(function(){}),I})}}):v=f.then(function(p){V(i);var b=W[i.name],m=b.forages;p.close();for(var y=0;y<m.length;y++){var x=m[y];x._dbInfo.db=null}var A=new g(function(N,I){var U=T.deleteDatabase(i.name);U.onerror=function(){var z=U.result;z&&z.close(),I(U.error)},U.onblocked=function(){console.warn('dropInstance blocked for database "'+i.name+'" until all open connections are closed')},U.onsuccess=function(){var z=U.result;z&&z.close(),N(z)}});return A.then(function(N){b.db=N;for(var I=0;I<m.length;I++){var U=m[I];K(U._dbInfo)}}).catch(function(N){throw(Q(i,N)||g.resolve()).catch(function(){}),N})})}return _(v,u),v}var rl={_driver:"asyncStorage",_initStorage:Vo,_support:$(),iterate:Yo,getItem:Go,setItem:Ko,removeItem:Qo,clear:Xo,length:qo,key:Jo,keys:tl,dropInstance:el};function ol(){return typeof openDatabase=="function"}var it="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ll="~~local_forage_type~",Tr=/^~~local_forage_type~([^~]+)~/,Gt="__lfsc__:",Ce=Gt.length,Pe="arbf",Re="blob",$r="si08",Er="ui08",Ar="uic8",Sr="si16",Cr="si32",Pr="ur16",Rr="ui32",kr="fl32",Or="fl64",Nr=Ce+Pe.length,Ir=Object.prototype.toString;function Dr(i){var u=i.length*.75,a=i.length,d,v=0,c,f,p,b;i[i.length-1]==="="&&(u--,i[i.length-2]==="="&&u--);var m=new ArrayBuffer(u),y=new Uint8Array(m);for(d=0;d<a;d+=4)c=it.indexOf(i[d]),f=it.indexOf(i[d+1]),p=it.indexOf(i[d+2]),b=it.indexOf(i[d+3]),y[v++]=c<<2|f>>4,y[v++]=(f&15)<<4|p>>2,y[v++]=(p&3)<<6|b&63;return m}function ke(i){var u=new Uint8Array(i),a="",d;for(d=0;d<u.length;d+=3)a+=it[u[d]>>2],a+=it[(u[d]&3)<<4|u[d+1]>>4],a+=it[(u[d+1]&15)<<2|u[d+2]>>6],a+=it[u[d+2]&63];return u.length%3==2?a=a.substring(0,a.length-1)+"=":u.length%3==1&&(a=a.substring(0,a.length-2)+"=="),a}function il(i,u){var a="";if(i&&(a=Ir.call(i)),i&&(a==="[object ArrayBuffer]"||i.buffer&&Ir.call(i.buffer)==="[object ArrayBuffer]")){var d,v=Gt;i instanceof ArrayBuffer?(d=i,v+=Pe):(d=i.buffer,a==="[object Int8Array]"?v+=$r:a==="[object Uint8Array]"?v+=Er:a==="[object Uint8ClampedArray]"?v+=Ar:a==="[object Int16Array]"?v+=Sr:a==="[object Uint16Array]"?v+=Pr:a==="[object Int32Array]"?v+=Cr:a==="[object Uint32Array]"?v+=Rr:a==="[object Float32Array]"?v+=kr:a==="[object Float64Array]"?v+=Or:u(new Error("Failed to get type for BinaryArray"))),u(v+ke(d))}else if(a==="[object Blob]"){var c=new FileReader;c.onload=function(){var f=ll+i.type+"~"+ke(this.result);u(Gt+Re+f)},c.readAsArrayBuffer(i)}else try{u(JSON.stringify(i))}catch(f){console.error("Couldn't convert value into a JSON string: ",i),u(null,f)}}function nl(i){if(i.substring(0,Ce)!==Gt)return JSON.parse(i);var u=i.substring(Nr),a=i.substring(Ce,Nr),d;if(a===Re&&Tr.test(u)){var v=u.match(Tr);d=v[1],u=u.substring(v[0].length)}var c=Dr(u);switch(a){case Pe:return c;case Re:return j([c],{type:d});case $r:return new Int8Array(c);case Er:return new Uint8Array(c);case Ar:return new Uint8ClampedArray(c);case Sr:return new Int16Array(c);case Pr:return new Uint16Array(c);case Cr:return new Int32Array(c);case Rr:return new Uint32Array(c);case kr:return new Float32Array(c);case Or:return new Float64Array(c);default:throw new Error("Unkown type: "+a)}}var Oe={serialize:il,deserialize:nl,stringToBuffer:Dr,bufferToString:ke};function Mr(i,u,a,d){i.executeSql("CREATE TABLE IF NOT EXISTS "+u.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],a,d)}function al(i){var u=this,a={db:null};if(i)for(var d in i)a[d]=typeof i[d]!="string"?i[d].toString():i[d];var v=new g(function(c,f){try{a.db=openDatabase(a.name,String(a.version),a.description,a.size)}catch(p){return f(p)}a.db.transaction(function(p){Mr(p,a,function(){u._dbInfo=a,c()},function(b,m){f(m)})},f)});return a.serializer=Oe,v}function nt(i,u,a,d,v,c){i.executeSql(a,d,v,function(f,p){p.code===p.SYNTAX_ERR?f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[u.storeName],function(b,m){m.rows.length?c(b,p):Mr(b,u,function(){b.executeSql(a,d,v,c)},c)},c):c(f,p)},c)}function sl(i,u){var a=this;i=B(i);var d=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){nt(p,f,"SELECT * FROM "+f.storeName+" WHERE key = ? LIMIT 1",[i],function(b,m){var y=m.rows.length?m.rows.item(0).value:null;y&&(y=f.serializer.deserialize(y)),v(y)},function(b,m){c(m)})})}).catch(c)});return _(d,u),d}function ul(i,u){var a=this,d=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){nt(p,f,"SELECT * FROM "+f.storeName,[],function(b,m){for(var y=m.rows,x=y.length,A=0;A<x;A++){var N=y.item(A),I=N.value;if(I&&(I=f.serializer.deserialize(I)),I=i(I,N.key,A+1),I!==void 0){v(I);return}}v()},function(b,m){c(m)})})}).catch(c)});return _(d,u),d}function Lr(i,u,a,d){var v=this;i=B(i);var c=new g(function(f,p){v.ready().then(function(){u===void 0&&(u=null);var b=u,m=v._dbInfo;m.serializer.serialize(u,function(y,x){x?p(x):m.db.transaction(function(A){nt(A,m,"INSERT OR REPLACE INTO "+m.storeName+" (key, value) VALUES (?, ?)",[i,y],function(){f(b)},function(N,I){p(I)})},function(A){if(A.code===A.QUOTA_ERR){if(d>0){f(Lr.apply(v,[i,b,a,d-1]));return}p(A)}})})}).catch(p)});return _(c,a),c}function cl(i,u,a){return Lr.apply(this,[i,u,a,1])}function dl(i,u){var a=this;i=B(i);var d=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){nt(p,f,"DELETE FROM "+f.storeName+" WHERE key = ?",[i],function(){v()},function(b,m){c(m)})})}).catch(c)});return _(d,u),d}function hl(i){var u=this,a=new g(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){nt(f,c,"DELETE FROM "+c.storeName,[],function(){d()},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function vl(i){var u=this,a=new g(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){nt(f,c,"SELECT COUNT(key) as c FROM "+c.storeName,[],function(p,b){var m=b.rows.item(0).c;d(m)},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function fl(i,u){var a=this,d=new g(function(v,c){a.ready().then(function(){var f=a._dbInfo;f.db.transaction(function(p){nt(p,f,"SELECT key FROM "+f.storeName+" WHERE id = ? LIMIT 1",[i+1],function(b,m){var y=m.rows.length?m.rows.item(0).key:null;v(y)},function(b,m){c(m)})})}).catch(c)});return _(d,u),d}function pl(i){var u=this,a=new g(function(d,v){u.ready().then(function(){var c=u._dbInfo;c.db.transaction(function(f){nt(f,c,"SELECT key FROM "+c.storeName,[],function(p,b){for(var m=[],y=0;y<b.rows.length;y++)m.push(b.rows.item(y).key);d(m)},function(p,b){v(b)})})}).catch(v)});return _(a,i),a}function gl(i){return new g(function(u,a){i.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(v,c){for(var f=[],p=0;p<c.rows.length;p++)f.push(c.rows.item(p).name);u({db:i,storeNames:f})},function(v,c){a(c)})},function(d){a(d)})})}function bl(i,u){u=Y.apply(this,arguments);var a=this.config();i=typeof i!="function"&&i||{},i.name||(i.name=i.name||a.name,i.storeName=i.storeName||a.storeName);var d=this,v;return i.name?v=new g(function(c){var f;i.name===a.name?f=d._dbInfo.db:f=openDatabase(i.name,"","",0),i.storeName?c({db:f,storeNames:[i.storeName]}):c(gl(f))}).then(function(c){return new g(function(f,p){c.db.transaction(function(b){function m(N){return new g(function(I,U){b.executeSql("DROP TABLE IF EXISTS "+N,[],function(){I()},function(z,q){U(q)})})}for(var y=[],x=0,A=c.storeNames.length;x<A;x++)y.push(m(c.storeNames[x]));g.all(y).then(function(){f()}).catch(function(N){p(N)})},function(b){p(b)})})}):v=g.reject("Invalid arguments"),_(v,u),v}var ml={_driver:"webSQLStorage",_initStorage:al,_support:ol(),iterate:ul,getItem:sl,setItem:cl,removeItem:dl,clear:hl,length:vl,key:fl,keys:pl,dropInstance:bl};function yl(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Br(i,u){var a=i.name+"/";return i.storeName!==u.storeName&&(a+=i.storeName+"/"),a}function wl(){var i="_localforage_support_test";try{return localStorage.setItem(i,!0),localStorage.removeItem(i),!1}catch{return!0}}function _l(){return!wl()||localStorage.length>0}function xl(i){var u=this,a={};if(i)for(var d in i)a[d]=i[d];return a.keyPrefix=Br(i,u._defaultConfig),_l()?(u._dbInfo=a,a.serializer=Oe,g.resolve()):g.reject()}function Tl(i){var u=this,a=u.ready().then(function(){for(var d=u._dbInfo.keyPrefix,v=localStorage.length-1;v>=0;v--){var c=localStorage.key(v);c.indexOf(d)===0&&localStorage.removeItem(c)}});return _(a,i),a}function $l(i,u){var a=this;i=B(i);var d=a.ready().then(function(){var v=a._dbInfo,c=localStorage.getItem(v.keyPrefix+i);return c&&(c=v.serializer.deserialize(c)),c});return _(d,u),d}function El(i,u){var a=this,d=a.ready().then(function(){for(var v=a._dbInfo,c=v.keyPrefix,f=c.length,p=localStorage.length,b=1,m=0;m<p;m++){var y=localStorage.key(m);if(y.indexOf(c)===0){var x=localStorage.getItem(y);if(x&&(x=v.serializer.deserialize(x)),x=i(x,y.substring(f),b++),x!==void 0)return x}}});return _(d,u),d}function Al(i,u){var a=this,d=a.ready().then(function(){var v=a._dbInfo,c;try{c=localStorage.key(i)}catch{c=null}return c&&(c=c.substring(v.keyPrefix.length)),c});return _(d,u),d}function Sl(i){var u=this,a=u.ready().then(function(){for(var d=u._dbInfo,v=localStorage.length,c=[],f=0;f<v;f++){var p=localStorage.key(f);p.indexOf(d.keyPrefix)===0&&c.push(p.substring(d.keyPrefix.length))}return c});return _(a,i),a}function Cl(i){var u=this,a=u.keys().then(function(d){return d.length});return _(a,i),a}function Pl(i,u){var a=this;i=B(i);var d=a.ready().then(function(){var v=a._dbInfo;localStorage.removeItem(v.keyPrefix+i)});return _(d,u),d}function Rl(i,u,a){var d=this;i=B(i);var v=d.ready().then(function(){u===void 0&&(u=null);var c=u;return new g(function(f,p){var b=d._dbInfo;b.serializer.serialize(u,function(m,y){if(y)p(y);else try{localStorage.setItem(b.keyPrefix+i,m),f(c)}catch(x){(x.name==="QuotaExceededError"||x.name==="NS_ERROR_DOM_QUOTA_REACHED")&&p(x),p(x)}})})});return _(v,a),v}function kl(i,u){if(u=Y.apply(this,arguments),i=typeof i!="function"&&i||{},!i.name){var a=this.config();i.name=i.name||a.name,i.storeName=i.storeName||a.storeName}var d=this,v;return i.name?v=new g(function(c){i.storeName?c(Br(i,d._defaultConfig)):c(i.name+"/")}).then(function(c){for(var f=localStorage.length-1;f>=0;f--){var p=localStorage.key(f);p.indexOf(c)===0&&localStorage.removeItem(p)}}):v=g.reject("Invalid arguments"),_(v,u),v}var Ol={_driver:"localStorageWrapper",_initStorage:xl,_support:yl(),iterate:El,getItem:$l,setItem:Rl,removeItem:Pl,clear:Tl,length:Cl,key:Al,keys:Sl,dropInstance:kl},Nl=function(u,a){return u===a||typeof u=="number"&&typeof a=="number"&&isNaN(u)&&isNaN(a)},Il=function(u,a){for(var d=u.length,v=0;v<d;){if(Nl(u[v],a))return!0;v++}return!1},jr=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"},Nt={},zr={},bt={INDEXEDDB:rl,WEBSQL:ml,LOCALSTORAGE:Ol},Dl=[bt.INDEXEDDB._driver,bt.WEBSQL._driver,bt.LOCALSTORAGE._driver],Yt=["dropInstance"],Ne=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Yt),Ml={description:"",driver:Dl.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ll(i,u){i[u]=function(){var a=arguments;return i.ready().then(function(){return i[u].apply(i,a)})}}function Ie(){for(var i=1;i<arguments.length;i++){var u=arguments[i];if(u)for(var a in u)u.hasOwnProperty(a)&&(jr(u[a])?arguments[0][a]=u[a].slice():arguments[0][a]=u[a])}return arguments[0]}var Bl=function(){function i(u){s(this,i);for(var a in bt)if(bt.hasOwnProperty(a)){var d=bt[a],v=d._driver;this[a]=v,Nt[v]||this.defineDriver(d)}this._defaultConfig=Ie({},Ml),this._config=Ie({},this._defaultConfig,u),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return i.prototype.config=function(a){if((typeof a=="undefined"?"undefined":l(a))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var d in a){if(d==="storeName"&&(a[d]=a[d].replace(/\W/g,"_")),d==="version"&&typeof a[d]!="number")return new Error("Database version must be a number.");this._config[d]=a[d]}return"driver"in a&&a.driver?this.setDriver(this._config.driver):!0}else return typeof a=="string"?this._config[a]:this._config},i.prototype.defineDriver=function(a,d,v){var c=new g(function(f,p){try{var b=a._driver,m=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver){p(m);return}for(var y=Ne.concat("_initStorage"),x=0,A=y.length;x<A;x++){var N=y[x],I=!Il(Yt,N);if((I||a[N])&&typeof a[N]!="function"){p(m);return}}var U=function(){for(var It=function(Ul){return function(){var Fl=new Error("Method "+Ul+" is not implemented by the current driver"),Ur=g.reject(Fl);return _(Ur,arguments[arguments.length-1]),Ur}},De=0,zl=Yt.length;De<zl;De++){var Me=Yt[De];a[Me]||(a[Me]=It(Me))}};U();var z=function(It){Nt[b]&&console.info("Redefining LocalForage driver: "+b),Nt[b]=a,zr[b]=It,f()};"_support"in a?a._support&&typeof a._support=="function"?a._support().then(z,p):z(!!a._support):z(!0)}catch(q){p(q)}});return R(c,d,v),c},i.prototype.driver=function(){return this._driver||null},i.prototype.getDriver=function(a,d,v){var c=Nt[a]?g.resolve(Nt[a]):g.reject(new Error("Driver not found."));return R(c,d,v),c},i.prototype.getSerializer=function(a){var d=g.resolve(Oe);return R(d,a),d},i.prototype.ready=function(a){var d=this,v=d._driverSet.then(function(){return d._ready===null&&(d._ready=d._initDriver()),d._ready});return R(v,a,a),v},i.prototype.setDriver=function(a,d,v){var c=this;jr(a)||(a=[a]);var f=this._getSupportedDrivers(a);function p(){c._config.driver=c.driver()}function b(x){return c._extend(x),p(),c._ready=c._initStorage(c._config),c._ready}function m(x){return function(){var A=0;function N(){for(;A<x.length;){var I=x[A];return A++,c._dbInfo=null,c._ready=null,c.getDriver(I).then(b).catch(N)}p();var U=new Error("No available storage method found.");return c._driverSet=g.reject(U),c._driverSet}return N()}}var y=this._driverSet!==null?this._driverSet.catch(function(){return g.resolve()}):g.resolve();return this._driverSet=y.then(function(){var x=f[0];return c._dbInfo=null,c._ready=null,c.getDriver(x).then(function(A){c._driver=A._driver,p(),c._wrapLibraryMethodsWithReady(),c._initDriver=m(f)})}).catch(function(){p();var x=new Error("No available storage method found.");return c._driverSet=g.reject(x),c._driverSet}),R(this._driverSet,d,v),this._driverSet},i.prototype.supports=function(a){return!!zr[a]},i.prototype._extend=function(a){Ie(this,a)},i.prototype._getSupportedDrivers=function(a){for(var d=[],v=0,c=a.length;v<c;v++){var f=a[v];this.supports(f)&&d.push(f)}return d},i.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,d=Ne.length;a<d;a++)Ll(this,Ne[a])},i.prototype.createInstance=function(a){return new i(a)},i}(),jl=new Bl;r.exports=jl},{"3":3}]},{},[4])(4)})})(Li);export{zi as a,Li as l,Ui as r};
