var Yi=Object.defineProperty,Ki=Object.defineProperties;var qi=Object.getOwnPropertyDescriptors;var Ml=Object.getOwnPropertySymbols;var Xi=Object.prototype.hasOwnProperty,Qi=Object.prototype.propertyIsEnumerable;var Dl=(o,t,e)=>t in o?Yi(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Bo=(o,t)=>{for(var e in t||(t={}))Xi.call(t,e)&&Dl(o,e,t[e]);if(Ml)for(var e of Ml(t))Qi.call(t,e)&&Dl(o,e,t[e]);return o},zo=(o,t)=>Ki(o,qi(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uo=Symbol(),jl=new Map;class kl{constructor(t,e){if(this._$cssResult$=!0,e!==Uo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=jl.get(this.cssText);return Fo&&t===void 0&&(jl.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Ji=o=>new kl(typeof o=="string"?o:o+"",Uo),U=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,i,l)=>r+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[l+1],o[0]);return new kl(e,Uo)},tn=(o,t)=>{Fo?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)})},Bl=Fo?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Ji(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ho;const zl=window.trustedTypes,en=zl?zl.emptyScript:"",Fl=window.reactiveElementPolyfillSupport,Zo={toAttribute(o,t){switch(t){case Boolean:o=o?en:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ul=(o,t)=>t!==o&&(t==t||o==o),Wo={attribute:!0,type:String,converter:Zo,reflect:!1,hasChanged:Ul};class ne extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=Wo){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const l=this[t];this[e]=i,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(Bl(i))}else t!==void 0&&e.push(Bl(t));return e}static _$Eh(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return tn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Wo){var i,l;const u=this.constructor._$Eh(t,r);if(u!==void 0&&r.reflect===!0){const d=((l=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&l!==void 0?l:Zo.toAttribute)(e,r.type);this._$Ei=t,d==null?this.removeAttribute(u):this.setAttribute(u,d),this._$Ei=null}}_$AK(t,e){var r,i,l;const u=this.constructor,d=u._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const S=u.getPropertyOptions(d),C=S.converter,G=(l=(i=(r=C)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof C=="function"?C:null)!==null&&l!==void 0?l:Zo.fromAttribute;this._$Ei=d,this[d]=G(e,S.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ul)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,l)=>this[l]=i),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var l;return(l=i.hostUpdate)===null||l===void 0?void 0:l.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$ES(r,this[r],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}ne.finalized=!0,ne.elementProperties=new Map,ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},Fl==null||Fl({ReactiveElement:ne}),((Ho=globalThis.reactiveElementVersions)!==null&&Ho!==void 0?Ho:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vo;const ae=globalThis.trustedTypes,Hl=ae?ae.createPolicy("lit-html",{createHTML:o=>o}):void 0,Lt=`lit$${(Math.random()+"").slice(9)}$`,Zl="?"+Lt,rn=`<${Zl}>`,se=document,Ue=(o="")=>se.createComment(o),He=o=>o===null||typeof o!="object"&&typeof o!="function",Wl=Array.isArray,on=o=>{var t;return Wl(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vl=/-->/g,Gl=/>/g,Kt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Yl=/'/g,Kl=/"/g,ql=/^(?:script|style|textarea|title)$/i,Xl=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),k=Xl(1),D=Xl(2),Mt=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Ql=new WeakMap,ln=(o,t,e)=>{var r,i;const l=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let u=l._$litPart$;if(u===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;l._$litPart$=u=new Ve(t.insertBefore(Ue(),d),d,void 0,e!=null?e:{})}return u._$AI(o),u},ue=se.createTreeWalker(se,129,null,!1),nn=(o,t)=>{const e=o.length-1,r=[];let i,l=t===2?"<svg>":"",u=Ze;for(let S=0;S<e;S++){const C=o[S];let G,y,E=-1,L=0;for(;L<C.length&&(u.lastIndex=L,y=u.exec(C),y!==null);)L=u.lastIndex,u===Ze?y[1]==="!--"?u=Vl:y[1]!==void 0?u=Gl:y[2]!==void 0?(ql.test(y[2])&&(i=RegExp("</"+y[2],"g")),u=Kt):y[3]!==void 0&&(u=Kt):u===Kt?y[0]===">"?(u=i!=null?i:Ze,E=-1):y[1]===void 0?E=-2:(E=u.lastIndex-y[2].length,G=y[1],u=y[3]===void 0?Kt:y[3]==='"'?Kl:Yl):u===Kl||u===Yl?u=Kt:u===Vl||u===Gl?u=Ze:(u=Kt,i=void 0);const V=u===Kt&&o[S+1].startsWith("/>")?" ":"";l+=u===Ze?C+rn:E>=0?(r.push(G),C.slice(0,E)+"$lit$"+C.slice(E)+Lt+V):C+Lt+(E===-2?(r.push(void 0),S):V)}const d=l+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Hl!==void 0?Hl.createHTML(d):d,r]};class We{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let l=0,u=0;const d=t.length-1,S=this.parts,[C,G]=nn(t,e);if(this.el=We.createElement(C,r),ue.currentNode=this.el.content,e===2){const y=this.el.content,E=y.firstChild;E.remove(),y.append(...E.childNodes)}for(;(i=ue.nextNode())!==null&&S.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const y=[];for(const E of i.getAttributeNames())if(E.endsWith("$lit$")||E.startsWith(Lt)){const L=G[u++];if(y.push(E),L!==void 0){const V=i.getAttribute(L.toLowerCase()+"$lit$").split(Lt),lt=/([.?@])?(.*)/.exec(L);S.push({type:1,index:l,name:lt[2],strings:V,ctor:lt[1]==="."?sn:lt[1]==="?"?cn:lt[1]==="@"?dn:pr})}else S.push({type:6,index:l})}for(const E of y)i.removeAttribute(E)}if(ql.test(i.tagName)){const y=i.textContent.split(Lt),E=y.length-1;if(E>0){i.textContent=ae?ae.emptyScript:"";for(let L=0;L<E;L++)i.append(y[L],Ue()),ue.nextNode(),S.push({type:2,index:++l});i.append(y[E],Ue())}}}else if(i.nodeType===8)if(i.data===Zl)S.push({type:2,index:l});else{let y=-1;for(;(y=i.data.indexOf(Lt,y+1))!==-1;)S.push({type:7,index:l}),y+=Lt.length-1}l++}}static createElement(t,e){const r=se.createElement("template");return r.innerHTML=t,r}}function ce(o,t,e=o,r){var i,l,u,d;if(t===Mt)return t;let S=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu;const C=He(t)?void 0:t._$litDirective$;return(S==null?void 0:S.constructor)!==C&&((l=S==null?void 0:S._$AO)===null||l===void 0||l.call(S,!1),C===void 0?S=void 0:(S=new C(o),S._$AT(o,e,r)),r!==void 0?((u=(d=e)._$Cl)!==null&&u!==void 0?u:d._$Cl=[])[r]=S:e._$Cu=S),S!==void 0&&(t=ce(o,S._$AS(o,t.values),S,r)),t}class an{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:i}=this._$AD,l=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:se).importNode(r,!0);ue.currentNode=l;let u=ue.nextNode(),d=0,S=0,C=i[0];for(;C!==void 0;){if(d===C.index){let G;C.type===2?G=new Ve(u,u.nextSibling,this,t):C.type===1?G=new C.ctor(u,C.name,C.strings,this,t):C.type===6&&(G=new hn(u,this,t)),this.v.push(G),C=i[++S]}d!==(C==null?void 0:C.index)&&(u=ue.nextNode(),d++)}return l}m(t){let e=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Ve{constructor(t,e,r,i){var l;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(l=i==null?void 0:i.isConnected)===null||l===void 0||l}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ce(this,t,e),He(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==Mt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):on(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==Q&&He(this._$AH)?this._$AA.nextSibling.data=t:this.k(se.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:i}=t,l=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=We.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===l)this._$AH.m(r);else{const u=new an(l,this),d=u.p(this.options);u.m(r),this.k(d),this._$AH=u}}_$AC(t){let e=Ql.get(t.strings);return e===void 0&&Ql.set(t.strings,e=new We(t)),e}S(t){Wl(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const l of t)i===e.length?e.push(r=new Ve(this.M(Ue()),this.M(Ue()),this,this.options)):r=e[i],r._$AI(l),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class pr{constructor(t,e,r,i,l){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const l=this.strings;let u=!1;if(l===void 0)t=ce(this,t,e,0),u=!He(t)||t!==this._$AH&&t!==Mt,u&&(this._$AH=t);else{const d=t;let S,C;for(t=l[0],S=0;S<l.length-1;S++)C=ce(this,d[r+S],e,S),C===Mt&&(C=this._$AH[S]),u||(u=!He(C)||C!==this._$AH[S]),C===Q?t=Q:t!==Q&&(t+=(C!=null?C:"")+l[S+1]),this._$AH[S]=C}u&&!i&&this.C(t)}C(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class sn extends pr{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===Q?void 0:t}}const un=ae?ae.emptyScript:"";class cn extends pr{constructor(){super(...arguments),this.type=4}C(t){t&&t!==Q?this.element.setAttribute(this.name,un):this.element.removeAttribute(this.name)}}class dn extends pr{constructor(t,e,r,i,l){super(t,e,r,i,l),this.type=5}_$AI(t,e=this){var r;if((t=(r=ce(this,t,e,0))!==null&&r!==void 0?r:Q)===Mt)return;const i=this._$AH,l=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,u=t!==Q&&(i===Q||l);l&&this.element.removeEventListener(this.name,this,i),u&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class hn{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ce(this,t)}}const Jl=window.litHtmlPolyfillSupport;Jl==null||Jl(We,Ve),((Vo=globalThis.litHtmlVersions)!==null&&Vo!==void 0?Vo:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Go,Yo;class P extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ln(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Mt}}P.finalized=!0,P._$litElement$=!0,(Go=globalThis.litElementHydrateSupport)===null||Go===void 0||Go.call(globalThis,{LitElement:P});const ti=globalThis.litElementPolyfillSupport;ti==null||ti({LitElement:P});((Yo=globalThis.litElementVersions)!==null&&Yo!==void 0?Yo:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?zo(Bo({},t),{finisher(e){e.createProperty(t.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function R(o){return(t,e)=>e!==void 0?((r,i,l)=>{i.constructor.createProperty(l,r)})(o,t,e):vn(o,t)}const O=U`
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
`;var ei=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class gr extends P{constructor(){super(...arguments);this.bordered=!1,this.placeholderAlt=""}static get styles(){return[O,U`
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
    `}}gr.defaultTagName="turtle-avatar";ei([R({type:Boolean,reflect:!0})],gr.prototype,"bordered",void 0);ei([R({type:String,attribute:"placeholder-alt"})],gr.prototype,"placeholderAlt",void 0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ko=o=>(...t)=>({_$litDirective$:o,values:t});class ri{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=Ko(class extends ri{constructor(o){var t;if(super(o),o.type!==br.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ct===void 0){this.ct=new Set;for(const r in t)this.ct.add(r);return this.render(t)}this.ct.forEach(r=>{t[r]==null&&(this.ct.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const i=t[r];i!=null&&(this.ct.add(r),r.includes("-")?e.setProperty(r,i):e[r]=i)}return Mt}});var oi=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class mr extends P{constructor(){super(...arguments);this.tailPosition="bottom",this.tailOffset=.5}static get styles(){return[O,U`
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
        style=${qo({"--turtle-balloon--tail-offset":`${this.tailOffset}`})}
        aria-hidden="true"
      ></div>
    `}}mr.defaultTagName="turtle-balloon";oi([R({type:String,attribute:"tail-position"})],mr.prototype,"tailPosition",void 0);oi([R({type:Number,attribute:"tail-offset"})],mr.prototype,"tailOffset",void 0);var li=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},yr;class At{constructor(t,e=""){this.assigned=!1,yr.set(this,()=>{if(!this.host.shadowRoot)return;const r=this.slotName?`slot[name="${this.slotName}"]`:"slot:not([name])",i=this.host.shadowRoot.querySelector(r);this.assigned=!!i&&i.assignedNodes().length>0,this.host.requestUpdate()}),t.addController(this),this.host=t,this.slotName=e}hostConnected(){!this.host.shadowRoot||this.host.shadowRoot.addEventListener("slotchange",li(this,yr,"f"))}hostDisconnected(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",li(this,yr,"f"))}}yr=new WeakMap;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=o=>o!=null?o:Q;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(o,t)=>{var e,r;const i=o._$AN;if(i===void 0)return!1;for(const l of i)(r=(e=l)._$AO)===null||r===void 0||r.call(e,t,!1),Ge(l,t);return!0},wr=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},ii=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),bn(t)}};function pn(o){this._$AN!==void 0?(wr(this),this._$AM=o,ii(this)):this._$AM=o}function gn(o,t=!1,e=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let l=e;l<r.length;l++)Ge(r[l],!1),wr(r[l]);else r!=null&&(Ge(r,!1),wr(r));else Ge(this,o)}const bn=o=>{var t,e,r,i;o.type==br.CHILD&&((t=(r=o)._$AP)!==null&&t!==void 0||(r._$AP=gn),(e=(i=o)._$AQ)!==null&&e!==void 0||(i._$AQ=pn))};class ni extends ri{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ii(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),e&&(Ge(this,t),wr(this))}setValue(t){if(fn(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}var xr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Tr=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},de,he;class mn extends ni{constructor(t){super(t);if(de.set(this,null),he.set(this,[]),t.type!==br.CHILD&&t.type!==br.ELEMENT)throw new Error("The `wormhole` directive must be used in either the child or the element position.")}update(t,[e]){var r;(r=xr(this,de,"f"))===null||r===void 0||r.call(this);const i="parentNode"in t?t.parentNode:t.element;if(!("tagName"in i)||i.tagName!=="SLOT")throw new Error("The `wormhole` directive must be used with <slot> element.");const l=()=>{xr(this,he,"f").forEach(d=>d());const u=i.assignedElements();Tr(this,he,u.map(e).filter(d=>!!d),"f")};return i.addEventListener("slotchange",l),Tr(this,de,()=>{i.removeEventListener("slotchange",l)},"f"),this.render(e)}render(t){return Mt}disconnected(){var t;(t=xr(this,de,"f"))===null||t===void 0||t.call(this),Tr(this,de,null,"f"),xr(this,he,"f").forEach(e=>e()),Tr(this,he,[],"f")}}de=new WeakMap,he=new WeakMap;const xt=Ko(mn);var ai=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},si=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},Ye=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)};function ve(o){var t,e,r;class i extends o{constructor(){super(...arguments);this.disabled=!1,this.lightDOM=!1,t.set(this,!1),e.set(this,new MutationObserver(u=>{!u[0]||si(this,t,ui(u[0].target),"f")})),r.set(this,u=>{!Ye(this,t,"f")||(u.preventDefault(),u.stopPropagation())})}renderLightDOMSlot(u){return k`<slot id="lightdom" class=${_r(u)}>
        ${xt(d=>{if("getAttribute"in d)return si(this,t,ui(d),"f"),d.addEventListener("click",Ye(this,r,"f")),Ye(this,e,"f").observe(d,{attributes:!0,attributeFilter:["disabled","aria-disabled"]}),()=>{d.removeEventListener("click",Ye(this,r,"f")),Ye(this,e,"f").disconnect()}})}
      </slot>`}}return t=new WeakMap,e=new WeakMap,r=new WeakMap,ai([R({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0),ai([R({type:Boolean,attribute:"lightdom"})],i.prototype,"lightDOM",void 0),i}function ui(o){const t=o.getAttribute("aria-disabled");return t?t==="true":"disabled"in o?o.disabled:!1}var Xo=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},ci=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},$r;class Ke extends ve(P){constructor(){super(...arguments);this.variant="normal",this.rounded=!1,this.iconOnly=!1,$r.set(this,new At(this,"icon"))}static get styles(){return[O,U`
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
      `]}render(){const t=ci(this,$r,"f").assigned?"with-icon":"",e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):k`
          <button
            class="button ${t}"
            ?disabled=${this.disabled}
            part="button"
          >
            <slot></slot>
          </button>
        `;return k`
      ${e}

      <span
        class="icon"
        ?data-hidden=${!ci(this,$r,"f").assigned}
        ?data-disabled=${this.disabled}
        part="icon"
      >
        <slot name="icon"></slot>
      </span>
    `}}$r=new WeakMap;Ke.defaultTagName="turtle-button";Xo([R({type:String})],Ke.prototype,"variant",void 0);Xo([R({type:Boolean,reflect:!0})],Ke.prototype,"rounded",void 0);Xo([R({type:Boolean,reflect:!0,attribute:"icon-only"})],Ke.prototype,"iconOnly",void 0);var yn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Qo extends P{constructor(){super(...arguments);this.evenly=!1}static get styles(){return[O,U`
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
      `]}render(){return k` <slot></slot> `}}Qo.defaultTagName="turtle-button-group";yn([R({type:Boolean,reflect:!0})],Qo.prototype,"evenly",void 0);var di=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},hi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Jo,tl;class Er extends P{constructor(){super(...arguments);Jo.set(this,new At(this,"action")),tl.set(this,new At(this,"image")),this.shadowed=!1,this.bordered=!1}static get styles(){return[O,U`
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
      <div class="image-sizer" ?assigned=${hi(this,tl,"f").assigned}>
        <div class="image">
          <slot name="image"></slot>
        </div>
      </div>

      <div class="body">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="actions" ?assigned=${hi(this,Jo,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}Jo=new WeakMap,tl=new WeakMap;Er.defaultTagName="turtle-card";di([R({type:Boolean,attribute:"shadowed",reflect:!0})],Er.prototype,"shadowed",void 0);di([R({type:Boolean,attribute:"bordered",reflect:!0})],Er.prototype,"bordered",void 0);class vi extends ve(P){static get styles(){return[O,U`
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
        `}}vi.defaultTagName="turtle-card-action";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(o){return R(zo(Bo({},o),{state:!0}))}var fi=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},mt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ar,qe,Dt;class Sr extends P{constructor(){super(...arguments);this._checkState="unchecked",this._disabled=!1,Ar.set(this,new MutationObserver(t=>{!t[0]||mt(this,qe,"f").call(this,t[0].target)})),qe.set(this,t=>{if(this._disabled=t.disabled,t.indeterminate){this._checkState="indeterminate";return}this._checkState=t.checked?"checked":"unchecked"}),Dt.set(this,t=>{mt(this,qe,"f").call(this,t.currentTarget)})}static get styles(){return[O,U`
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

          transition: 1ms 0s linear background-color;
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
        >${xt(t=>{if("checked"in t)return mt(this,qe,"f").call(this,t),t.addEventListener("change",mt(this,Dt,"f")),t.addEventListener("input",mt(this,Dt,"f")),t.addEventListener("transitionstart",mt(this,Dt,"f")),mt(this,Ar,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked","indeterminate"]}),()=>{t.removeEventListener("change",mt(this,Dt,"f")),t.removeEventListener("input",mt(this,Dt,"f")),t.removeEventListener("transitionstart",mt(this,Dt,"f")),mt(this,Ar,"f").disconnect()}})}</slot
      >

      <svg
        class="icon"
        ?data-active=${this._checkState==="checked"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${_n}
      </svg>

      <svg
        class="icon"
        ?data-active=${this._checkState==="indeterminate"}
        ?data-disabled=${this._disabled}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${wn}
      </svg>
    `}}Ar=new WeakMap,qe=new WeakMap,Dt=new WeakMap;Sr.defaultTagName="turtle-checkbox";fi([ht()],Sr.prototype,"_checkState",void 0);fi([ht()],Sr.prototype,"_disabled",void 0);const _n=D`
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
`,wn=D`
      <path d="M19 13H5v-2h14v2Z" fill="currentColor"/>
`,et=U`
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
`;class pi extends P{static get styles(){return[O,et]}render(){return gi()}}pi.defaultTagName="turtle-terminal-icon";const gi=o=>D`
  <svg part=${_r(o)} class="icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3333 5.33333H6.66667C5.18667 5.33333 4 6.53333 4 8v16c0 1.4667 1.18667 2.6667 2.66667 2.6667H25.3333C26.8 26.6667 28 25.4667 28 24V8c0-1.46667-1.1867-2.66667-2.6667-2.66667Zm0 5.33337V24H6.66667V10.6667H25.3333Zm-14.0404 7.3737-1.95957-1.9595 1.41417-1.4142 3.3738 3.3737-3.3738 3.3738L9.33333 20l1.95957-1.9596ZM16 21.3333h5.3333v-2.6666H16v2.6666Z" fill="currentColor"/>
  </svg>
`;var Cr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},el=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},rt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},St,jt,fe,Pr,Or,rl,ol;class pe extends P{constructor(){super(...arguments);this.role="combobox",this.noAutoAria=!1,St.set(this,null),jt.set(this,0),this._listbox=null,this._options=[],fe.set(this,t=>{var e,r;if(this.noAutoAria||(el(this,jt,t,"f"),!rt(this,St,"f")))return;if(!this._options.length){rt(this,St,"f").removeAttribute("aria-activedescendant");return}this._options.forEach((l,u)=>{u===t?l.setAttribute("aria-selected","true"):l.removeAttribute("aria-selected")});const i=this._options[t];if(!(i==null?void 0:i.id)){console.warn("[turtle-command-palette] Listbox option MUST have an ID.");return}((e=this._listbox)===null||e===void 0?void 0:e.clientHeight)!==((r=this._listbox)===null||r===void 0?void 0:r.scrollHeight)&&i.scrollIntoView(),rt(this,St,"f").setAttribute("aria-activedescendant",i.id)}),Pr.set(this,()=>{if(this.noAutoAria||!rt(this,St,"f")||!this._listbox||this.role!=="combobox")return;if(!this._listbox.id){console.warn("[turtle-command-palette] Listbox MUST have an ID.");return}const t=Array.from(this._listbox.children);this.setAttribute("aria-haspopup","listbox"),this.setAttribute("aria-owns",this._listbox.id),this.setAttribute("aria-expanded",String(t.length>0)),rt(this,St,"f").setAttribute("aria-controls",this._listbox.id)}),Or.set(this,t=>{if(!t.isComposing)switch(t.key){case"Enter":rt(this,rl,"f").call(this),t.preventDefault();return;case"Escape":rt(this,ol,"f").call(this),t.preventDefault();return;case"ArrowUp":{const e=rt(this,jt,"f")<=0?this._options.length-1:rt(this,jt,"f")-1;rt(this,fe,"f").call(this,e),t.preventDefault();return}case"ArrowDown":{const e=rt(this,jt,"f")>=this._options.length-1?0:rt(this,jt,"f")+1;rt(this,fe,"f").call(this,e),t.preventDefault();return}}}),rl.set(this,(t=rt(this,jt,"f"))=>{const e=this._options[t];!e||e.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))}),ol.set(this,()=>{this.dispatchEvent(new CustomEvent("cancel"))})}static get styles(){return[O,U`
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
        <slot class="icon" name="icon"
          >${gi("icon")}</slot
        >
        <slot class="search" name="search"
          >${xt(t=>{if("disabled"in t)return el(this,St,t,"f"),rt(this,Pr,"f").call(this),t.addEventListener("keydown",rt(this,Or,"f")),()=>{el(this,St,null,"f"),t.removeEventListener("keydown",rt(this,Or,"f"))}})}</slot
        >
      </div>

      <slot class="listbox" name="listbox"
        >${xt(t=>{var e;this._listbox=t,this._options=Array.from(t.children),rt(this,Pr,"f").call(this),rt(this,fe,"f").call(this,0);const r=()=>{rt(this,fe,"f").call(this,0),this._options=Array.from(t.children)};(e=t.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",r);const i=l=>{if(!l.target||!("getAttribute"in l.target))return;const d=l.target.closest("turtle-command-palette-option");d&&d.dispatchEvent(new CustomEvent("selectoption",{bubbles:!0}))};return t.addEventListener("click",i),()=>{var l;this._listbox=null,this._options=[],(l=t.shadowRoot)===null||l===void 0||l.removeEventListener("slotchange",r),t.removeEventListener("click",i)}})}</slot
      >

      <slot
        class="placeholder"
        name="placeholder"
        ?data-hidden=${this._options.length>0}
      ></slot>
    `}}St=new WeakMap,jt=new WeakMap,fe=new WeakMap,Pr=new WeakMap,Or=new WeakMap,rl=new WeakMap,ol=new WeakMap;pe.defaultTagName="turtle-command-palette";Cr([R({type:String,reflect:!0})],pe.prototype,"role",void 0);Cr([R({type:Boolean,attribute:"noautoaria"})],pe.prototype,"noAutoAria",void 0);Cr([ht()],pe.prototype,"_listbox",void 0);Cr([ht()],pe.prototype,"_options",void 0);var xn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},bi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Rr;class ll extends P{constructor(){super(...arguments);this.role="listbox",Rr.set(this,()=>{this.children.length>0?this.removeAttribute("empty"):this.setAttribute("empty","")})}static get styles(){return[O,U`
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
      `]}connectedCallback(){super.connectedCallback(),bi(this,Rr,"f").call(this)}render(){return k`<slot @slotchange=${bi(this,Rr,"f")}></slot>`}}Rr=new WeakMap;ll.defaultTagName="turtle-command-palette-listbox";xn([R({type:String,reflect:!0})],ll.prototype,"role",void 0);var Tn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class il extends P{constructor(){super(...arguments);this.role="option"}static get styles(){return[O,U`
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
    `}}il.defaultTagName="turtle-command-palette-option";Tn([R({type:String,reflect:!0})],il.prototype,"role",void 0);var $n=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class nl extends P{static get styles(){return U`
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
    `}render(){return k`<slot></slot>`}}nl.defaultTagName="turtle-design-system";$n([R({type:String,reflect:!0})],nl.prototype,"theme",void 0);var mi=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Ir extends P{constructor(){super();this.disabled=!1,this.borderColor="neutral",this.addEventListener("drop",t=>{t.preventDefault(),this.disabled&&t.stopImmediatePropagation()},{capture:!0}),this.addEventListener("dragover",t=>{t.preventDefault(),this.disabled&&(t.dataTransfer&&(t.dataTransfer.dropEffect="none"),t.stopImmediatePropagation())},{capture:!0})}static get styles(){return[O,U`
        :host {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: calc(24 * var(--turtle-ui--unit));
          gap: calc(0.8 * var(--turtle-ui--unit));
          border: 2px dashed
            hsl(
              var(--turtle-ui--color--tone--mono),
              var(--turtle-ui--color--level--7)
            );

          background-color: hsla(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--10),
            0.24
          );
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--0)
          );
          border-radius: 8px;
          user-select: none;
        }
        :host([disabled]) {
          color: hsl(
            var(--turtle-ui--color--tone--mono),
            var(--turtle-ui--color--level--4)
          );
          cursor: not-allowed;
        }
        :host([border-color="primary"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--primary),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="safe"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--safe),
            var(--turtle-ui--color--level--3)
          );
        }
        :host([border-color="danger"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--danger),
            var(--turtle-ui--color--level--4)
          );
        }
        :host([border-color="warning"]) {
          border-color: hsl(
            var(--turtle-ui--color--tone--warning),
            var(--turtle-ui--color--level--4)
          );
        }

        .icon::slotted(*) {
          font-size: calc(3.2 * var(--turtle-ui--unit));
        }

        .text {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;
        }
      `]}render(){return k`
      <slot class="icon" name="icon"></slot>

      <span class="text">
        <slot></slot>
      </span>
    `}}Ir.defaultTagName="turtle-drop-zone";mi([R({type:Boolean,reflect:!0})],Ir.prototype,"disabled",void 0);mi([R({type:String,reflect:!0,attribute:"border-color"})],Ir.prototype,"borderColor",void 0);var Nr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},En=globalThis&&globalThis.__classPrivateFieldSet||function(o,t,e,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!i:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(o,e):i?i.value=e:t.set(o,e),e},vt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ge,qt,Lr,yi,Mr,Dr;function An(o){const t=o.getAttribute("aria-controls");if(!t)return null;const e=document.getElementById(t);return!e||!(e instanceof HTMLInputElement)||e.type!=="file"?null:e}class be extends P{constructor(){super(...arguments);ge.add(this),this.multiple=!1,this.delimiter=", ",qt.set(this,null),Mr.set(this,t=>{const e=t.currentTarget;En(this,qt,e.files,"f"),this.requestUpdate(),this.dispatchEvent(new CustomEvent("selectfile",{detail:{files:e.files}}))}),Dr.set(this,t=>{const e=t.currentTarget,r=An(e)||vt(this,ge,"m",yi).call(this);r.removeEventListener("input",vt(this,Mr,"f")),r.addEventListener("input",vt(this,Mr,"f"),{once:!0}),r.click()})}static get styles(){return[O,U`
        :host {
          display: flex;
          gap: calc(1.6 * var(--turtle-ui--unit));
          justify-content: start;
          align-items: center;

          overflow: visible;
        }

        .input::slotted(*) {
          flex-shrink: 0;
        }

        .filename {
          font-size: calc(1.4 * var(--turtle-ui--unit));
          line-height: 1.71;

          white-space: nowrap;
          overflow-x: hidden;
          text-overflow: ellipsis;
        }
      `]}get files(){return vt(this,qt,"f")}render(){return k`
      <slot class="input"
        >${xt(t=>(t.addEventListener("click",vt(this,Dr,"f")),()=>{t.removeEventListener("click",vt(this,Dr,"f"))}))}</slot
      >

      <span class="filename" part="text">
        ${vt(this,ge,"a",Lr)?k`<span title=${vt(this,ge,"a",Lr)}>${vt(this,ge,"a",Lr)}</span>`:k`<slot name="placeholder"></slot>`}
      </span>
    `}}qt=new WeakMap,Mr=new WeakMap,Dr=new WeakMap,ge=new WeakSet,Lr=function(){return!vt(this,qt,"f")||!vt(this,qt,"f").length?null:Array.from(vt(this,qt,"f")).map(t=>t.name).join(this.delimiter)},yi=function(){const t=document.createElement("input");return t.type="file",typeof this.accept=="string"&&(t.accept=this.accept),typeof this.capture=="string"&&(t.capture=this.capture),t.multiple=this.multiple,t};be.defaultTagName="turtle-file-input";Nr([R({type:String})],be.prototype,"accept",void 0);Nr([R({type:String})],be.prototype,"capture",void 0);Nr([R({type:Boolean})],be.prototype,"multiple",void 0);Nr([R({type:String})],be.prototype,"delimiter",void 0);var Sn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},me=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},ye,jr;class al extends P{constructor(){super(...arguments);this._elementState="neutral",ye.set(this,t=>{me(this,jr,"f").call(this,t.currentTarget)}),jr.set(this,t=>{this._elementState=!t.touched||t.noValidity?"neutral":t.isValid?"valid":"invalid"})}static get styles(){return[O,U`
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
        >${xt(t=>{if("touched"in t&&"isValid"in t&&"noValidity"in t)return me(this,jr,"f").call(this,t),t.addEventListener("validitychange",me(this,ye,"f")),t.addEventListener("fieldtouch",me(this,ye,"f")),()=>{t.removeEventListener("validitychange",me(this,ye,"f")),t.removeEventListener("fieldtouch",me(this,ye,"f"))}})}</slot
      >

      <slot class="description ${this._elementState}" name="description"></slot>
    `}}ye=new WeakMap,jr=new WeakMap;al.defaultTagName="turtle-form-field";Sn([ht()],al.prototype,"_elementState",void 0);class _i extends P{static get styles(){return[O,U`
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
    `}}_i.defaultTagName="turtle-labelled-item";class wi extends P{static get styles(){return[O,U`
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
      `]}render(){return k` <slot></slot> `}}wi.defaultTagName="turtle-list";var xi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},sl,ul;class Ti extends ve(P){constructor(){super(...arguments);sl.set(this,new At(this,"icon-start")),ul.set(this,new At(this,"icon-end"))}static get styles(){return[O,U`
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
      `]}render(){const t=["body-slot",xi(this,sl,"f").assigned?"icon-start":"",xi(this,ul,"f").assigned?"icon-end":""].join(" "),e=this.lightDOM?this.renderLightDOMSlot(t):k`
          <button class="button ${t}" ?disabled=${this.disabled}>
            <slot></slot>
          </button>
        `;return k`
      <slot name="icon-start"></slot>

      ${e}

      <slot name="icon-end"></slot>
    `}}sl=new WeakMap,ul=new WeakMap;Ti.defaultTagName="turtle-list-item";var Cn=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},cl;class $i extends P{constructor(){super(...arguments);cl.set(this,new At(this,"image"))}static get styles(){return[O,U`
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
        <div class="image" ?data-hidden=${!Cn(this,cl,"f").assigned}>
          <slot name="image"></slot>
        </div>

        <p class="text">
          <slot></slot>
        </p>
      </div>

      <div class="actions">
        <slot name="action"></slot>
      </div>
    `}}cl=new WeakMap;$i.defaultTagName="turtle-notification";class Ei extends ve(P){static get styles(){return[O,U`
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
        `}}Ei.defaultTagName="turtle-notification-action";var Pn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},kr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Br,zr;class dl extends ve(P){constructor(){super(...arguments);this.pressable=!1,Br.set(this,new At(this,"icon")),zr.set(this,new At(this,"action-icon"))}static get styles(){return[O,U`
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
      `]}render(){const t=[kr(this,Br,"f").assigned?"with-icon":null,kr(this,zr,"f").assigned?"with-action-icon":null].filter(Boolean).join(" "),e=this.lightDOM?this.renderLightDOMSlot(`lightdom ${t}`):this.pressable?k`<button part="button" class="button ${t}">
          <slot></slot>
        </button>`:k`<span part="label" class="label ${t}"
          ><slot></slot
        ></span>`;return k`
      <div
        part="icon"
        class="icon"
        ?data-hidden=${!kr(this,Br,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="icon"></slot>
      </div>

      ${e}

      <div
        part="action-icon"
        class="action-icon"
        ?data-hidden=${!kr(this,zr,"f").assigned}
        ?data-disabled=${this.disabled}
      >
        <slot name="action-icon"></slot>
      </div>
    `}}Br=new WeakMap,zr=new WeakMap;dl.defaultTagName="turtle-pill";Pn([R({type:Boolean})],dl.prototype,"pressable",void 0);var On=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Fr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Ur,Hr;class hl extends P{constructor(){super(...arguments);this._progress={max:1,value:0},Ur.set(this,t=>{this._progress={max:t.max,value:t.value}}),Hr.set(this,new MutationObserver(t=>{!t[0]||Fr(this,Ur,"f").call(this,t[0].target)}))}static get styles(){return[O,U`
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
      `]}render(){const{max:t,value:e}=this._progress,r=Math.min(1,Math.max(0,t<0?0:e/t));return k`
      <slot
        >${xt(i=>{if(i instanceof HTMLProgressElement)return Fr(this,Ur,"f").call(this,i),Fr(this,Hr,"f").observe(i,{attributes:!0,attributeFilter:["value","max"]}),()=>{Fr(this,Hr,"f").disconnect()}})}</slot
      >

      <div
        part="inner-bar"
        class="inner-bar"
        aria-hidden="true"
        style=${qo({width:r*100+"%"})}
      ></div>
    `}}Ur=new WeakMap,Hr=new WeakMap;hl.defaultTagName="turtle-progressbar";On([ht()],hl.prototype,"_progress",void 0);class Ai extends P{static get styles(){return[O,U`
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
      `]}render(){return k`<slot></slot>`}}Ai.defaultTagName="turtle-radio-button";var Zr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Xt=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Wr,Vr,Xe;function Gr(o){switch(o.getAttribute("aria-invalid")){case"true":return!1;case"false":return!0}return o.validity.valid}class Qt extends P{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,Wr.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&Xt(this,Xe,"f").call(this,t[0].target)})),Vr.set(this,t=>{Xt(this,Xe,"f").call(this,t.currentTarget)}),Xe.set(this,t=>{const e=Gr(t);e!==this._isElementValid&&(this._isElementValid=e,this.dispatchEvent(new CustomEvent("validitychange")))}),this.touch=()=>{this.touched||(this.touched=!0,this.dispatchEvent(new CustomEvent("fieldtouch")))}}static get styles(){return[O,U`
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
          ${xt(e=>{if("validity"in e)return Xt(this,Xe,"f").call(this,e),this._disabled=e.disabled,e.addEventListener("input",Xt(this,Vr,"f")),e.addEventListener("focusout",this.touch),Xt(this,Wr,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","checked","required","min","max","pattern","maxlength","type","minlength"]}),()=>{e.removeEventListener("input",Xt(this,Vr,"f")),e.removeEventListener("focusout",this.touch),Xt(this,Wr,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Si}</div>
        <div class="indicator invalid" aria-hidden="true">${Ci}</div>
      </div>
    `}}Wr=new WeakMap,Vr=new WeakMap,Xe=new WeakMap;Qt.defaultTagName="turtle-textbox";Zr([R({type:Boolean,reflect:!0})],Qt.prototype,"touched",void 0);Zr([R({type:Boolean,attribute:"novalidity"})],Qt.prototype,"noValidity",void 0);Zr([ht()],Qt.prototype,"_isElementValid",void 0);Zr([ht()],Qt.prototype,"_disabled",void 0);const Si=D`
  <svg class="icon" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.48475 7.21035 12.3002 0 5.07261l1.28149-1.28456 5.92886 5.94303L16.7185.2002 18 1.48475Z" fill="currentColor"/>
</svg>
`,Ci=D`
<svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z" fill="currentColor"/>
</svg>

`;var Yr=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Kr=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},qr,Xr;class _e extends P{constructor(){super(...arguments);this.touched=!1,this.noValidity=!1,this._disabled=!1,qr.set(this,new MutationObserver(t=>{let e=!1;for(const r of t)switch(r.attributeName){case"disabled":this._disabled=r.target.disabled;break;default:e=!0;break}e&&(this._isElementValid=Gr(t[0].target))})),Xr.set(this,t=>{this._isElementValid=Gr(t.currentTarget)}),this.touch=()=>{this.touched=!0}}static get styles(){return[...Qt.styles,U`
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
          ${xt(e=>{if("validity"in e)return this._isElementValid=Gr(e),this._disabled=e.disabled,e.addEventListener("input",Kr(this,Xr,"f")),e.addEventListener("focusout",this.touch),Kr(this,qr,"f").observe(e,{attributes:!0,attributeFilter:["aria-invalid","disabled","required"]}),()=>{e.removeEventListener("input",Kr(this,Xr,"f")),e.removeEventListener("focusout",this.touch),Kr(this,qr,"f").disconnect()}})}
        </slot>

        <div class="indicator valid" aria-hidden="true">${Si}</div>
        <div class="indicator invalid" aria-hidden="true">${Ci}</div>

        <div class="caret" aria-hidden="true">${Rn}</div>
      </div>
    `}}qr=new WeakMap,Xr=new WeakMap;_e.defaultTagName="turtle-selectbox";Yr([R({type:Boolean,reflect:!0})],_e.prototype,"touched",void 0);Yr([R({type:Boolean,attribute:"novalidity"})],_e.prototype,"noValidity",void 0);Yr([ht()],_e.prototype,"_isElementValid",void 0);Yr([ht()],_e.prototype,"_disabled",void 0);const Rn=D`
  <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.6095 5.60932-.9429-.94281-4.86188 4.86193-4.86193-4.86193-.94281.94281 5.80474 5.80478 5.80478-5.80478Z" fill="currentColor"/>
</svg>

`;var In=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};function Nn(o){class t extends o{constructor(){super(...arguments);this.autofocus=!1}firstUpdated(r){super.firstUpdated(r),this.autofocus&&this.focus()}}return In([R({type:Boolean})],t.prototype,"autofocus",void 0),t}var vl=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},Pi=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},fl,pl;class Qe extends Nn(P){constructor(){super(...arguments);fl.set(this,new At(this,"action")),this.severity="info",pl.set(this,()=>{this.dispatchEvent(new CustomEvent("timerend"))})}static get styles(){return[O,U`
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

      ${typeof this.lifetime=="number"?D`
        <svg
          class="lifetime"
          style=${qo({"animation-duration":this.lifetime+"s"})}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden=${typeof this.lifetimeLabel!="string"?"true":"false"}
          role=${_r(typeof this.lifetimeLabel=="string"?"img":void 0)}
          aria-label=${_r(this.lifetimeLabel)}
          @animationend=${Pi(this,pl,"f")}
        >
          <circle cx="50" cy="50" r="25" pathLength="10" />
        </svg>`:Q}

      <div class="actions" ?data-assigned=${Pi(this,fl,"f").assigned}>
        <slot name="action"></slot>
      </div>
    `}}fl=new WeakMap,pl=new WeakMap;Qe.defaultTagName="turtle-snackbar";vl([R({type:String,reflect:!0})],Qe.prototype,"severity",void 0);vl([R({type:Number})],Qe.prototype,"lifetime",void 0);vl([R({type:String,attribute:"lifetime-label"})],Qe.prototype,"lifetimeLabel",void 0);class Oi extends ve(P){static get styles(){return[O,U`
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
        `}}Oi.defaultTagName="turtle-snackbar-action";var Ri=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l},we=globalThis&&globalThis.__classPrivateFieldGet||function(o,t,e,r){if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!r:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?r:e==="a"?r.call(o):r?r.value:t.get(o)},Qr,xe;class Jr extends P{constructor(){super(...arguments);this._checked=!1,this._disabled=!1,Qr.set(this,new MutationObserver(t=>{for(const e of t)switch(e.attributeName){case"disabled":this._disabled=e.target.disabled;break;case"checked":this._checked=e.target.checked;break}})),xe.set(this,t=>{this._checked=t.currentTarget.checked})}static get styles(){return[O,U`
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

          transition: 1ms 0s linear background-color;
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
      `]}render(){return k`
      <slot>
        ${xt(t=>{if("checked"in t)return this._disabled=t.disabled,this._checked=t.checked,t.addEventListener("input",we(this,xe,"f")),t.addEventListener("transitionstart",we(this,xe,"f")),we(this,Qr,"f").observe(t,{attributes:!0,attributeFilter:["disabled","checked"]}),()=>{t.removeEventListener("input",we(this,xe,"f")),t.removeEventListener("transitionstart",we(this,xe,"f")),we(this,Qr,"f").disconnect()}})}
      </slot>

      <div
        class="knob"
        ?data-checked=${this._checked}
        ?data-disabled=${this._disabled}
      ></div>
    `}}Qr=new WeakMap,xe=new WeakMap;Jr.defaultTagName="turtle-toggle-switch";Ri([ht()],Jr.prototype,"_checked",void 0);Ri([ht()],Jr.prototype,"_disabled",void 0);var Ln=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class gl extends P{constructor(){super(...arguments);this.direction="down"}static get styles(){return[O,et,U`
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
    `}}gl.defaultTagName="turtle-angle-icon";Ln([R({type:String,reflect:!0})],gl.prototype,"direction",void 0);var Mn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class bl extends P{constructor(){super(...arguments);this.direction="down"}static get styles(){return[O,et,U`
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
    `}}bl.defaultTagName="turtle-arrow-icon";Mn([R({type:String,reflect:!0})],bl.prototype,"direction",void 0);var Dn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class ml extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m3.033 18-.02-.001L11.966 3.01a.103.103 0 0 1 .004-.006A.082.082 0 0 1 12 3c.015 0 .025.003.03.005l.003.006 8.955 14.988a.143.143 0 0 1-.02.001H3.032Zm-1.75-1.006 8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033c-1.57 0-2.545-1.676-1.75-3.006ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.033 20c-1.57 0-2.545-1.676-1.75-3.006l8.967-15.01c.784-1.312 2.716-1.312 3.5 0l8.967 15.01c.795 1.33-.18 3.006-1.75 3.006H3.033ZM13 8h-2v5h2V8Zm0 7h-2v2h2v-2Z" fill="currentColor"/>
      </svg>
    `}}ml.defaultTagName="turtle-attention-icon";Dn([R({type:Boolean})],ml.prototype,"outlined",void 0);class Ii extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.605 16.2.096-.388c-.41-.05-.818-.108-1.224-.173L2 13.767c.703.13 1.414.238 2.132.322 0 0 .525-2.062.709-2.724C5.583 8.69 8.522 6 12.186 6c3.664 0 6.51 2.543 7.342 5.35.06.2.124.428.193.679a31.564 31.564 0 0 0 2.831-1.302L23 12.483c-.919.464-1.862.886-2.828 1.265.212.833.436 1.74.651 2.616.139.564.304 1.114.469 1.636h-1.866c-.118-.389-.234-.8-.337-1.221-.201-.818-.407-1.651-.602-2.42a33.675 33.675 0 0 1-10.624 1.707c-.796 0-1.585-.027-2.367-.082l-.158.635c-.118.477-.259.942-.401 1.381h-1.88a22.27 22.27 0 0 0 .548-1.8Zm8.581-8.438c-2.805 0-5.08 2.106-5.624 4.069-.164.59-.386 1.45-.63 2.416a32.43 32.43 0 0 0 1.931.057c3.562 0 6.986-.583 10.178-1.657a36.603 36.603 0 0 0-.226-.802c-.628-2.119-2.823-4.083-5.629-4.083Zm9.755 4.505c.172 0 .31-.137.31-.307a.308.308 0 0 0-.31-.306.308.308 0 0 0-.31.306c0 .17.139.307.31.307Z" fill="currentColor"/></svg>
    `}}Ii.defaultTagName="turtle-brand-icon";class Ni extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.485 10.21 18.3 3 11.073l1.281-1.285 5.93 5.943 9.507-9.53L21 7.484Z" fill="currentColor"/>
      </svg>
    `}}Ni.defaultTagName="turtle-check-icon";var jn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class yl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
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
    `}}yl.defaultTagName="turtle-circle-check-icon";jn([R({type:Boolean})],yl.prototype,"outlined",void 0);var kn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class _l extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47 6.47 2 12 2s10 4.47 10 10-4.47 10-10 10S2 17.53 2 12Zm13.59-5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7Z" fill="currentColor"/>
      </svg>
    `}}_l.defaultTagName="turtle-circle-cross-icon";kn([R({type:Boolean})],_l.prototype,"outlined",void 0);var Bn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class wl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11v2h10v-2H7Zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm5-1v2h10v-2H7Z" fill="currentColor"/>
      </svg>
    `}}wl.defaultTagName="turtle-circle-minus-icon";Bn([R({type:Boolean})],wl.prototype,"outlined",void 0);var zn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class xl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7Zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm11-1V7h-2v4H7v2h4v4h2v-4h4v-2h-4Z" fill="currentColor"/>
      </svg>
    `}}xl.defaultTagName="turtle-circle-plus-icon";zn([R({type:Boolean})],xl.prototype,"outlined",void 0);class Li extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" fill="currentColor"/>
      </svg>
    `}}Li.defaultTagName="turtle-cross-icon";class Mi extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor"/>
      </svg>
    `}}Mi.defaultTagName="turtle-dots-icon";class Di extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V19H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z" fill="currentColor"/>
      </svg>
    `}}Di.defaultTagName="turtle-file-upload-icon";class ji extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1213 4.70718L17.7071 3.29297L9 12.0001L17.7071 20.7072L19.1213 19.293L11.8284 12.0001L19.1213 4.70718ZM6 4H4V20H6V4Z" fill="currentColor" />
      </svg>
    `}}ji.defaultTagName="turtle-first-page-icon";var Fn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class Tl extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Zm-4.4 15.253-.1.099-.1-.099C7.14 14.026 4 11.23 4 8.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.04.971 3.57 2.315h1.87c.52-1.344 2.02-2.315 3.56-2.315 2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3c-1.74 0-3.41.795-4.5 2.05A6.037 6.037 0 0 0 7.5 3C4.42 3 2 5.374 2 8.395c0 3.708 3.4 6.73 8.55 11.32L12 21l1.45-1.295C18.6 15.125 22 12.103 22 8.395 22 5.374 19.58 3 16.5 3Z" fill="currentColor"/>
      </svg>
    `}}Tl.defaultTagName="turtle-heart-icon";Fn([R({type:Boolean})],Tl.prototype,"outlined",void 0);var Un=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class $l extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9-3V7h2v2h-2Zm0 8v-6h2v6h-2Z" fill="currentColor"/>
      </svg>
    `}}$l.defaultTagName="turtle-info-icon";Un([R({type:Boolean})],$l.prototype,"outlined",void 0);class ki extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.87866 4.70718L6.29288 3.29297L15 12.0001L6.29288 20.7072L4.87866 19.293L12.1716 12.0001L4.87866 4.70718ZM20 4H18V20H20V4Z" fill="currentColor"/>
      </svg>
    `}}ki.defaultTagName="turtle-last-page-icon";class Bi extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14v2Z" fill="currentColor"/></svg>
    `}}Bi.defaultTagName="turtle-minus-icon";class zi extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor"/>
      </svg>
    `}}zi.defaultTagName="turtle-plus-icon";var Hn=globalThis&&globalThis.__decorate||function(o,t,e,r){var i=arguments.length,l=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(o,t,e,r);else for(var d=o.length-1;d>=0;d--)(u=o[d])&&(l=(i<3?u(l):i>3?u(t,e,l):u(t,e))||l);return i>3&&l&&Object.defineProperty(t,e,l),l};class El extends P{constructor(){super(...arguments);this.outlined=!1}static get styles(){return[O,et]}render(){return this.outlined?D`
        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18h2v-2h-2v2Zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4Z" fill="currentColor"/>
        </svg>
      `:D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-6c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822C11.942 12.457 11 13.179 11 15h2c0-1.095.711-1.717 1.44-2.354C15.21 11.973 16 11.283 16 10c0-2.21-1.79-4-4-4Zm-1 10v2h2v-2h-2Z" fill="currentColor"/>
      </svg>
    `}}El.defaultTagName="turtle-question-icon";Hn([R({type:Boolean})],El.prototype,"outlined",void 0);class Fi extends P{static get styles(){return[O,et]}render(){return D`
      <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.414.793 11.207l1.414-1.414.89.89a9.075 9.075 0 0 1 5.459-6.998c3.327-1.378 7.261-.596 9.808 1.951L16.95 7.05a7.003 7.003 0 0 0-11.767 3.353l.61-.61 1.414 1.414L4 14.414ZM20 9.586l3.207 3.207-1.414 1.414-.89-.89a9.075 9.075 0 0 1-5.459 6.998c-3.327 1.378-7.261.596-9.808-1.951L7.05 16.95a7.003 7.003 0 0 0 11.767-3.352l-.61.609-1.414-1.414L20 9.586Z" fill="currentColor"/>
      </svg>
    `}}Fi.defaultTagName="turtle-reload-icon";const Zn=[gl,bl,ml,Ii,Ni,yl,_l,wl,xl,Li,Mi,Di,ji,Tl,$l,ki,Bi,zi,El,Fi,pi],Yn=[gr,mr,Ke,Qo,Er,vi,Sr,pe,ll,il,nl,Ir,be,al,_i,wi,Ti,$i,Ei,dl,hl,Ai,_e,Qe,Oi,Qt,Jr,...Zn];function Kn(o){for(const t of o){const[e,r]="defaultTagName"in t?[t.defaultTagName,t]:t;customElements.get(e)||customElements.define(e,r)}}var kt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function to(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Wn={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(o,t){(function(e){o.exports=e()})(function(){return function e(r,i,l){function u(C,G){if(!i[C]){if(!r[C]){var y=typeof to=="function"&&to;if(!G&&y)return y(C,!0);if(d)return d(C,!0);var E=new Error("Cannot find module '"+C+"'");throw E.code="MODULE_NOT_FOUND",E}var L=i[C]={exports:{}};r[C][0].call(L.exports,function(V){var lt=r[C][1][V];return u(lt||V)},L,L.exports,e,r,i,l)}return i[C].exports}for(var d=typeof to=="function"&&to,S=0;S<l.length;S++)u(l[S]);return u}({1:[function(e,r,i){(function(l){var u=l.MutationObserver||l.WebKitMutationObserver,d;if(u){var S=0,C=new u(V),G=l.document.createTextNode("");C.observe(G,{characterData:!0}),d=function(){G.data=S=++S%2}}else if(!l.setImmediate&&typeof l.MessageChannel!="undefined"){var y=new l.MessageChannel;y.port1.onmessage=V,d=function(){y.port2.postMessage(0)}}else"document"in l&&"onreadystatechange"in l.document.createElement("script")?d=function(){var J=l.document.createElement("script");J.onreadystatechange=function(){V(),J.onreadystatechange=null,J.parentNode.removeChild(J),J=null},l.document.documentElement.appendChild(J)}:d=function(){setTimeout(V,0)};var E,L=[];function V(){E=!0;for(var J,ft,tt=L.length;tt;){for(ft=L,L=[],J=-1;++J<tt;)ft[J]();tt=L.length}E=!1}r.exports=lt;function lt(J){L.push(J)===1&&!E&&d()}}).call(this,typeof kt!="undefined"?kt:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(e,r,i){var l=e(1);function u(){}var d={},S=["REJECTED"],C=["FULFILLED"],G=["PENDING"];r.exports=y;function y(T){if(typeof T!="function")throw new TypeError("resolver must be a function");this.state=G,this.queue=[],this.outcome=void 0,T!==u&&lt(this,T)}y.prototype.catch=function(T){return this.then(null,T)},y.prototype.then=function(T,B){if(typeof T!="function"&&this.state===C||typeof B!="function"&&this.state===S)return this;var N=new this.constructor(u);if(this.state!==G){var H=this.state===C?T:B;L(N,H,this.outcome)}else this.queue.push(new E(N,T,B));return N};function E(T,B,N){this.promise=T,typeof B=="function"&&(this.onFulfilled=B,this.callFulfilled=this.otherCallFulfilled),typeof N=="function"&&(this.onRejected=N,this.callRejected=this.otherCallRejected)}E.prototype.callFulfilled=function(T){d.resolve(this.promise,T)},E.prototype.otherCallFulfilled=function(T){L(this.promise,this.onFulfilled,T)},E.prototype.callRejected=function(T){d.reject(this.promise,T)},E.prototype.otherCallRejected=function(T){L(this.promise,this.onRejected,T)};function L(T,B,N){l(function(){var H;try{H=B(N)}catch(ot){return d.reject(T,ot)}H===T?d.reject(T,new TypeError("Cannot resolve promise with itself")):d.resolve(T,H)})}d.resolve=function(T,B){var N=J(V,B);if(N.status==="error")return d.reject(T,N.value);var H=N.value;if(H)lt(T,H);else{T.state=C,T.outcome=B;for(var ot=-1,it=T.queue.length;++ot<it;)T.queue[ot].callFulfilled(B)}return T},d.reject=function(T,B){T.state=S,T.outcome=B;for(var N=-1,H=T.queue.length;++N<H;)T.queue[N].callRejected(B);return T};function V(T){var B=T&&T.then;if(T&&(typeof T=="object"||typeof T=="function")&&typeof B=="function")return function(){B.apply(T,arguments)}}function lt(T,B){var N=!1;function H(at){N||(N=!0,d.reject(T,at))}function ot(at){N||(N=!0,d.resolve(T,at))}function it(){B(ot,H)}var nt=J(it);nt.status==="error"&&H(nt.value)}function J(T,B){var N={};try{N.value=T(B),N.status="success"}catch(H){N.status="error",N.value=H}return N}y.resolve=ft;function ft(T){return T instanceof this?T:d.resolve(new this(u),T)}y.reject=tt;function tt(T){var B=new this(u);return d.reject(B,T)}y.all=Te;function Te(T){var B=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=T.length,H=!1;if(!N)return this.resolve([]);for(var ot=new Array(N),it=0,nt=-1,at=new this(u);++nt<N;)pt(T[nt],nt);return at;function pt(Bt,Jt){B.resolve(Bt).then($e,function(Ct){H||(H=!0,d.reject(at,Ct))});function $e(Ct){ot[Jt]=Ct,++it===N&&!H&&(H=!0,d.resolve(at,ot))}}}y.race=Tt;function Tt(T){var B=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=T.length,H=!1;if(!N)return this.resolve([]);for(var ot=-1,it=new this(u);++ot<N;)nt(T[ot]);return it;function nt(at){B.resolve(at).then(function(pt){H||(H=!0,d.resolve(it,pt))},function(pt){H||(H=!0,d.reject(it,pt))})}}},{"1":1}],3:[function(e,r,i){(function(l){typeof l.Promise!="function"&&(l.Promise=e(2))}).call(this,typeof kt!="undefined"?kt:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"2":2}],4:[function(e,r,i){var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};function u(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}function d(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch{return}}var S=d();function C(){try{if(!S||!S.open)return!1;var n=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),c=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!n||c)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch{return!1}}function G(n,c){n=n||[],c=c||{};try{return new Blob(n,c)}catch(h){if(h.name!=="TypeError")throw h;for(var a=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,f=new a,p=0;p<n.length;p+=1)f.append(n[p]);return f.getBlob(c.type)}}typeof Promise=="undefined"&&e(3);var y=Promise;function E(n,c){c&&n.then(function(a){c(null,a)},function(a){c(a)})}function L(n,c,a){typeof c=="function"&&n.then(c),typeof a=="function"&&n.catch(a)}function V(n){return typeof n!="string"&&(console.warn(n+" used as a key, but it is not a string."),n=String(n)),n}function lt(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var J="local-forage-detect-blob-support",ft=void 0,tt={},Te=Object.prototype.toString,Tt="readonly",T="readwrite";function B(n){for(var c=n.length,a=new ArrayBuffer(c),f=new Uint8Array(a),p=0;p<c;p++)f[p]=n.charCodeAt(p);return a}function N(n){return new y(function(c){var a=n.transaction(J,T),f=G([""]);a.objectStore(J).put(f,"key"),a.onabort=function(p){p.preventDefault(),p.stopPropagation(),c(!1)},a.oncomplete=function(){var p=navigator.userAgent.match(/Chrome\/(\d+)/),h=navigator.userAgent.match(/Edge\//);c(h||!p||parseInt(p[1],10)>=43)}}).catch(function(){return!1})}function H(n){return typeof ft=="boolean"?y.resolve(ft):N(n).then(function(c){return ft=c,ft})}function ot(n){var c=tt[n.name],a={};a.promise=new y(function(f,p){a.resolve=f,a.reject=p}),c.deferredOperations.push(a),c.dbReady?c.dbReady=c.dbReady.then(function(){return a.promise}):c.dbReady=a.promise}function it(n){var c=tt[n.name],a=c.deferredOperations.pop();if(a)return a.resolve(),a.promise}function nt(n,c){var a=tt[n.name],f=a.deferredOperations.pop();if(f)return f.reject(c),f.promise}function at(n,c){return new y(function(a,f){if(tt[n.name]=tt[n.name]||tr(),n.db)if(c)ot(n),n.db.close();else return a(n.db);var p=[n.name];c&&p.push(n.version);var h=S.open.apply(S,p);c&&(h.onupgradeneeded=function(b){var m=h.result;try{m.createObjectStore(n.storeName),b.oldVersion<=1&&m.createObjectStore(J)}catch(_){if(_.name==="ConstraintError")console.warn('The database "'+n.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+n.storeName+'" already exists.');else throw _}}),h.onerror=function(b){b.preventDefault(),f(h.error)},h.onsuccess=function(){var b=h.result;b.onversionchange=function(m){m.target.close()},a(b),it(n)}})}function pt(n){return at(n,!1)}function Bt(n){return at(n,!0)}function Jt(n,c){if(!n.db)return!0;var a=!n.db.objectStoreNames.contains(n.storeName),f=n.version<n.db.version,p=n.version>n.db.version;if(f&&(n.version!==c&&console.warn('The database "'+n.name+`" can't be downgraded from version `+n.db.version+" to version "+n.version+"."),n.version=n.db.version),p||a){if(a){var h=n.db.version+1;h>n.version&&(n.version=h)}return!0}return!1}function $e(n){return new y(function(c,a){var f=new FileReader;f.onerror=a,f.onloadend=function(p){var h=btoa(p.target.result||"");c({__local_forage_encoded_blob:!0,data:h,type:n.type})},f.readAsBinaryString(n)})}function Ct(n){var c=B(atob(n.data));return G([c],{type:n.type})}function Je(n){return n&&n.__local_forage_encoded_blob}function eo(n){var c=this,a=c._initReady().then(function(){var f=tt[c._dbInfo.name];if(f&&f.dbReady)return f.dbReady});return L(a,n,n),a}function ro(n){ot(n);for(var c=tt[n.name],a=c.forages,f=0;f<a.length;f++){var p=a[f];p._dbInfo.db&&(p._dbInfo.db.close(),p._dbInfo.db=null)}return n.db=null,pt(n).then(function(h){return n.db=h,Jt(n)?Bt(n):h}).then(function(h){n.db=c.db=h;for(var b=0;b<a.length;b++)a[b]._dbInfo.db=h}).catch(function(h){throw nt(n,h),h})}function gt(n,c,a,f){f===void 0&&(f=1);try{var p=n.db.transaction(n.storeName,c);a(null,p)}catch(h){if(f>0&&(!n.db||h.name==="InvalidStateError"||h.name==="NotFoundError"))return y.resolve().then(function(){if(!n.db||h.name==="NotFoundError"&&!n.db.objectStoreNames.contains(n.storeName)&&n.version<=n.db.version)return n.db&&(n.version=n.db.version+1),Bt(n)}).then(function(){return ro(n).then(function(){gt(n,c,a,f-1)})}).catch(a);a(h)}}function tr(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Z(n){var c=this,a={db:null};if(n)for(var f in n)a[f]=n[f];var p=tt[a.name];p||(p=tr(),tt[a.name]=p),p.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=eo);var h=[];function b(){return y.resolve()}for(var m=0;m<p.forages.length;m++){var _=p.forages[m];_!==c&&h.push(_._initReady().catch(b))}var w=p.forages.slice(0);return y.all(h).then(function(){return a.db=p.db,pt(a)}).then(function(x){return a.db=x,Jt(a,c._defaultConfig.version)?Bt(a):x}).then(function(x){a.db=p.db=x,c._dbInfo=a;for(var A=0;A<w.length;A++){var I=w[A];I!==c&&(I._dbInfo.db=a.db,I._dbInfo.version=a.version)}})}function er(n,c){var a=this;n=V(n);var f=new y(function(p,h){a.ready().then(function(){gt(a._dbInfo,Tt,function(b,m){if(b)return h(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.get(n);w.onsuccess=function(){var x=w.result;x===void 0&&(x=null),Je(x)&&(x=Ct(x)),p(x)},w.onerror=function(){h(w.error)}}catch(x){h(x)}})}).catch(h)});return E(f,c),f}function oo(n,c){var a=this,f=new y(function(p,h){a.ready().then(function(){gt(a._dbInfo,Tt,function(b,m){if(b)return h(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.openCursor(),x=1;w.onsuccess=function(){var A=w.result;if(A){var I=A.value;Je(I)&&(I=Ct(I));var z=n(I,A.key,x++);z!==void 0?p(z):A.continue()}else p()},w.onerror=function(){h(w.error)}}catch(A){h(A)}})}).catch(h)});return E(f,c),f}function zt(n,c,a){var f=this;n=V(n);var p=new y(function(h,b){var m;f.ready().then(function(){return m=f._dbInfo,Te.call(c)==="[object Blob]"?H(m.db).then(function(_){return _?c:$e(c)}):c}).then(function(_){gt(f._dbInfo,T,function(w,x){if(w)return b(w);try{var A=x.objectStore(f._dbInfo.storeName);_===null&&(_=void 0);var I=A.put(_,n);x.oncomplete=function(){_===void 0&&(_=null),h(_)},x.onabort=x.onerror=function(){var z=I.error?I.error:I.transaction.error;b(z)}}catch(z){b(z)}})}).catch(b)});return E(p,a),p}function rr(n,c){var a=this;n=V(n);var f=new y(function(p,h){a.ready().then(function(){gt(a._dbInfo,T,function(b,m){if(b)return h(b);try{var _=m.objectStore(a._dbInfo.storeName),w=_.delete(n);m.oncomplete=function(){p()},m.onerror=function(){h(w.error)},m.onabort=function(){var x=w.error?w.error:w.transaction.error;h(x)}}catch(x){h(x)}})}).catch(h)});return E(f,c),f}function Ft(n){var c=this,a=new y(function(f,p){c.ready().then(function(){gt(c._dbInfo,T,function(h,b){if(h)return p(h);try{var m=b.objectStore(c._dbInfo.storeName),_=m.clear();b.oncomplete=function(){f()},b.onabort=b.onerror=function(){var w=_.error?_.error:_.transaction.error;p(w)}}catch(w){p(w)}})}).catch(p)});return E(a,n),a}function or(n){var c=this,a=new y(function(f,p){c.ready().then(function(){gt(c._dbInfo,Tt,function(h,b){if(h)return p(h);try{var m=b.objectStore(c._dbInfo.storeName),_=m.count();_.onsuccess=function(){f(_.result)},_.onerror=function(){p(_.error)}}catch(w){p(w)}})}).catch(p)});return E(a,n),a}function Ee(n,c){var a=this,f=new y(function(p,h){if(n<0){p(null);return}a.ready().then(function(){gt(a._dbInfo,Tt,function(b,m){if(b)return h(b);try{var _=m.objectStore(a._dbInfo.storeName),w=!1,x=_.openKeyCursor();x.onsuccess=function(){var A=x.result;if(!A){p(null);return}n===0||w?p(A.key):(w=!0,A.advance(n))},x.onerror=function(){h(x.error)}}catch(A){h(A)}})}).catch(h)});return E(f,c),f}function lr(n){var c=this,a=new y(function(f,p){c.ready().then(function(){gt(c._dbInfo,Tt,function(h,b){if(h)return p(h);try{var m=b.objectStore(c._dbInfo.storeName),_=m.openKeyCursor(),w=[];_.onsuccess=function(){var x=_.result;if(!x){f(w);return}w.push(x.key),x.continue()},_.onerror=function(){p(_.error)}}catch(x){p(x)}})}).catch(p)});return E(a,n),a}function ir(n,c){c=lt.apply(this,arguments);var a=this.config();n=typeof n!="function"&&n||{},n.name||(n.name=n.name||a.name,n.storeName=n.storeName||a.storeName);var f=this,p;if(!n.name)p=y.reject("Invalid arguments");else{var h=n.name===a.name&&f._dbInfo.db,b=h?y.resolve(f._dbInfo.db):pt(n).then(function(m){var _=tt[n.name],w=_.forages;_.db=m;for(var x=0;x<w.length;x++)w[x]._dbInfo.db=m;return m});n.storeName?p=b.then(function(m){if(!!m.objectStoreNames.contains(n.storeName)){var _=m.version+1;ot(n);var w=tt[n.name],x=w.forages;m.close();for(var A=0;A<x.length;A++){var I=x[A];I._dbInfo.db=null,I._dbInfo.version=_}var z=new y(function(F,X){var Y=S.open(n.name,_);Y.onerror=function(st){var Gt=Y.result;Gt.close(),X(st)},Y.onupgradeneeded=function(){var st=Y.result;st.deleteObjectStore(n.storeName)},Y.onsuccess=function(){var st=Y.result;st.close(),F(st)}});return z.then(function(F){w.db=F;for(var X=0;X<x.length;X++){var Y=x[X];Y._dbInfo.db=F,it(Y._dbInfo)}}).catch(function(F){throw(nt(n,F)||y.resolve()).catch(function(){}),F})}}):p=b.then(function(m){ot(n);var _=tt[n.name],w=_.forages;m.close();for(var x=0;x<w.length;x++){var A=w[x];A._dbInfo.db=null}var I=new y(function(z,F){var X=S.deleteDatabase(n.name);X.onerror=function(){var Y=X.result;Y&&Y.close(),F(X.error)},X.onblocked=function(){console.warn('dropInstance blocked for database "'+n.name+'" until all open connections are closed')},X.onsuccess=function(){var Y=X.result;Y&&Y.close(),z(Y)}});return I.then(function(z){_.db=z;for(var F=0;F<w.length;F++){var X=w[F];it(X._dbInfo)}}).catch(function(z){throw(nt(n,z)||y.resolve()).catch(function(){}),z})})}return E(p,c),p}var lo={_driver:"asyncStorage",_initStorage:Z,_support:C(),iterate:oo,getItem:er,setItem:zt,removeItem:rr,clear:Ft,length:or,key:Ee,keys:lr,dropInstance:ir};function io(){return typeof openDatabase=="function"}var yt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",no="~~local_forage_type~",nr=/^~~local_forage_type~([^~]+)~/,te="__lfsc__:",Ae=te.length,Pt="arbf",Ut="blob",Ht="si08",ct="ui08",Se="uic8",Ce="si16",ar="si32",sr="ur16",Zt="ui32",Pe="fl32",Oe="fl64",Re=Ae+Pt.length,Ie=Object.prototype.toString;function Ne(n){var c=n.length*.75,a=n.length,f,p=0,h,b,m,_;n[n.length-1]==="="&&(c--,n[n.length-2]==="="&&c--);var w=new ArrayBuffer(c),x=new Uint8Array(w);for(f=0;f<a;f+=4)h=yt.indexOf(n[f]),b=yt.indexOf(n[f+1]),m=yt.indexOf(n[f+2]),_=yt.indexOf(n[f+3]),x[p++]=h<<2|b>>4,x[p++]=(b&15)<<4|m>>2,x[p++]=(m&3)<<6|_&63;return w}function Le(n){var c=new Uint8Array(n),a="",f;for(f=0;f<c.length;f+=3)a+=yt[c[f]>>2],a+=yt[(c[f]&3)<<4|c[f+1]>>4],a+=yt[(c[f+1]&15)<<2|c[f+2]>>6],a+=yt[c[f+2]&63];return c.length%3==2?a=a.substring(0,a.length-1)+"=":c.length%3==1&&(a=a.substring(0,a.length-2)+"=="),a}function ao(n,c){var a="";if(n&&(a=Ie.call(n)),n&&(a==="[object ArrayBuffer]"||n.buffer&&Ie.call(n.buffer)==="[object ArrayBuffer]")){var f,p=te;n instanceof ArrayBuffer?(f=n,p+=Pt):(f=n.buffer,a==="[object Int8Array]"?p+=Ht:a==="[object Uint8Array]"?p+=ct:a==="[object Uint8ClampedArray]"?p+=Se:a==="[object Int16Array]"?p+=Ce:a==="[object Uint16Array]"?p+=sr:a==="[object Int32Array]"?p+=ar:a==="[object Uint32Array]"?p+=Zt:a==="[object Float32Array]"?p+=Pe:a==="[object Float64Array]"?p+=Oe:c(new Error("Failed to get type for BinaryArray"))),c(p+Le(f))}else if(a==="[object Blob]"){var h=new FileReader;h.onload=function(){var b=no+n.type+"~"+Le(this.result);c(te+Ut+b)},h.readAsArrayBuffer(n)}else try{c(JSON.stringify(n))}catch(b){console.error("Couldn't convert value into a JSON string: ",n),c(null,b)}}function $t(n){if(n.substring(0,Ae)!==te)return JSON.parse(n);var c=n.substring(Re),a=n.substring(Ae,Re),f;if(a===Ut&&nr.test(c)){var p=c.match(nr);f=p[1],c=c.substring(p[0].length)}var h=Ne(c);switch(a){case Pt:return h;case Ut:return G([h],{type:f});case Ht:return new Int8Array(h);case ct:return new Uint8Array(h);case Se:return new Uint8ClampedArray(h);case Ce:return new Int16Array(h);case sr:return new Uint16Array(h);case ar:return new Int32Array(h);case Zt:return new Uint32Array(h);case Pe:return new Float32Array(h);case Oe:return new Float64Array(h);default:throw new Error("Unkown type: "+a)}}var Ot={serialize:ao,deserialize:$t,stringToBuffer:Ne,bufferToString:Le};function ur(n,c,a,f){n.executeSql("CREATE TABLE IF NOT EXISTS "+c.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],a,f)}function cr(n){var c=this,a={db:null};if(n)for(var f in n)a[f]=typeof n[f]!="string"?n[f].toString():n[f];var p=new y(function(h,b){try{a.db=openDatabase(a.name,String(a.version),a.description,a.size)}catch(m){return b(m)}a.db.transaction(function(m){ur(m,a,function(){c._dbInfo=a,h()},function(_,w){b(w)})},b)});return a.serializer=Ot,p}function _t(n,c,a,f,p,h){n.executeSql(a,f,p,function(b,m){m.code===m.SYNTAX_ERR?b.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[c.storeName],function(_,w){w.rows.length?h(_,m):ur(_,c,function(){_.executeSql(a,f,p,h)},h)},h):h(b,m)},h)}function dr(n,c){var a=this;n=V(n);var f=new y(function(p,h){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){_t(m,b,"SELECT * FROM "+b.storeName+" WHERE key = ? LIMIT 1",[n],function(_,w){var x=w.rows.length?w.rows.item(0).value:null;x&&(x=b.serializer.deserialize(x)),p(x)},function(_,w){h(w)})})}).catch(h)});return E(f,c),f}function Wt(n,c){var a=this,f=new y(function(p,h){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){_t(m,b,"SELECT * FROM "+b.storeName,[],function(_,w){for(var x=w.rows,A=x.length,I=0;I<A;I++){var z=x.item(I),F=z.value;if(F&&(F=b.serializer.deserialize(F)),F=n(F,z.key,I+1),F!==void 0){p(F);return}}p()},function(_,w){h(w)})})}).catch(h)});return E(f,c),f}function hr(n,c,a,f){var p=this;n=V(n);var h=new y(function(b,m){p.ready().then(function(){c===void 0&&(c=null);var _=c,w=p._dbInfo;w.serializer.serialize(c,function(x,A){A?m(A):w.db.transaction(function(I){_t(I,w,"INSERT OR REPLACE INTO "+w.storeName+" (key, value) VALUES (?, ?)",[n,x],function(){b(_)},function(z,F){m(F)})},function(I){if(I.code===I.QUOTA_ERR){if(f>0){b(hr.apply(p,[n,_,a,f-1]));return}m(I)}})})}).catch(m)});return E(h,a),h}function Et(n,c,a){return hr.apply(this,[n,c,a,1])}function so(n,c){var a=this;n=V(n);var f=new y(function(p,h){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){_t(m,b,"DELETE FROM "+b.storeName+" WHERE key = ?",[n],function(){p()},function(_,w){h(w)})})}).catch(h)});return E(f,c),f}function uo(n){var c=this,a=new y(function(f,p){c.ready().then(function(){var h=c._dbInfo;h.db.transaction(function(b){_t(b,h,"DELETE FROM "+h.storeName,[],function(){f()},function(m,_){p(_)})})}).catch(p)});return E(a,n),a}function co(n){var c=this,a=new y(function(f,p){c.ready().then(function(){var h=c._dbInfo;h.db.transaction(function(b){_t(b,h,"SELECT COUNT(key) as c FROM "+h.storeName,[],function(m,_){var w=_.rows.item(0).c;f(w)},function(m,_){p(_)})})}).catch(p)});return E(a,n),a}function ho(n,c){var a=this,f=new y(function(p,h){a.ready().then(function(){var b=a._dbInfo;b.db.transaction(function(m){_t(m,b,"SELECT key FROM "+b.storeName+" WHERE id = ? LIMIT 1",[n+1],function(_,w){var x=w.rows.length?w.rows.item(0).key:null;p(x)},function(_,w){h(w)})})}).catch(h)});return E(f,c),f}function vo(n){var c=this,a=new y(function(f,p){c.ready().then(function(){var h=c._dbInfo;h.db.transaction(function(b){_t(b,h,"SELECT key FROM "+h.storeName,[],function(m,_){for(var w=[],x=0;x<_.rows.length;x++)w.push(_.rows.item(x).key);f(w)},function(m,_){p(_)})})}).catch(p)});return E(a,n),a}function bt(n){return new y(function(c,a){n.transaction(function(f){f.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(p,h){for(var b=[],m=0;m<h.rows.length;m++)b.push(h.rows.item(m).name);c({db:n,storeNames:b})},function(p,h){a(h)})},function(f){a(f)})})}function fo(n,c){c=lt.apply(this,arguments);var a=this.config();n=typeof n!="function"&&n||{},n.name||(n.name=n.name||a.name,n.storeName=n.storeName||a.storeName);var f=this,p;return n.name?p=new y(function(h){var b;n.name===a.name?b=f._dbInfo.db:b=openDatabase(n.name,"","",0),n.storeName?h({db:b,storeNames:[n.storeName]}):h(bt(b))}).then(function(h){return new y(function(b,m){h.db.transaction(function(_){function w(z){return new y(function(F,X){_.executeSql("DROP TABLE IF EXISTS "+z,[],function(){F()},function(Y,st){X(st)})})}for(var x=[],A=0,I=h.storeNames.length;A<I;A++)x.push(w(h.storeNames[A]));y.all(x).then(function(){b()}).catch(function(z){m(z)})},function(_){m(_)})})}):p=y.reject("Invalid arguments"),E(p,c),p}var po={_driver:"webSQLStorage",_initStorage:cr,_support:io(),iterate:Wt,getItem:dr,setItem:Et,removeItem:so,clear:uo,length:co,key:ho,keys:vo,dropInstance:fo};function go(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function vr(n,c){var a=n.name+"/";return n.storeName!==c.storeName&&(a+=n.storeName+"/"),a}function bo(){var n="_localforage_support_test";try{return localStorage.setItem(n,!0),localStorage.removeItem(n),!1}catch{return!0}}function Rt(){return!bo()||localStorage.length>0}function mo(n){var c=this,a={};if(n)for(var f in n)a[f]=n[f];return a.keyPrefix=vr(n,c._defaultConfig),Rt()?(c._dbInfo=a,a.serializer=Ot,y.resolve()):y.reject()}function yo(n){var c=this,a=c.ready().then(function(){for(var f=c._dbInfo.keyPrefix,p=localStorage.length-1;p>=0;p--){var h=localStorage.key(p);h.indexOf(f)===0&&localStorage.removeItem(h)}});return E(a,n),a}function _o(n,c){var a=this;n=V(n);var f=a.ready().then(function(){var p=a._dbInfo,h=localStorage.getItem(p.keyPrefix+n);return h&&(h=p.serializer.deserialize(h)),h});return E(f,c),f}function wo(n,c){var a=this,f=a.ready().then(function(){for(var p=a._dbInfo,h=p.keyPrefix,b=h.length,m=localStorage.length,_=1,w=0;w<m;w++){var x=localStorage.key(w);if(x.indexOf(h)===0){var A=localStorage.getItem(x);if(A&&(A=p.serializer.deserialize(A)),A=n(A,x.substring(b),_++),A!==void 0)return A}}});return E(f,c),f}function xo(n,c){var a=this,f=a.ready().then(function(){var p=a._dbInfo,h;try{h=localStorage.key(n)}catch{h=null}return h&&(h=h.substring(p.keyPrefix.length)),h});return E(f,c),f}function It(n){var c=this,a=c.ready().then(function(){for(var f=c._dbInfo,p=localStorage.length,h=[],b=0;b<p;b++){var m=localStorage.key(b);m.indexOf(f.keyPrefix)===0&&h.push(m.substring(f.keyPrefix.length))}return h});return E(a,n),a}function To(n){var c=this,a=c.keys().then(function(f){return f.length});return E(a,n),a}function $o(n,c){var a=this;n=V(n);var f=a.ready().then(function(){var p=a._dbInfo;localStorage.removeItem(p.keyPrefix+n)});return E(f,c),f}function Eo(n,c,a){var f=this;n=V(n);var p=f.ready().then(function(){c===void 0&&(c=null);var h=c;return new y(function(b,m){var _=f._dbInfo;_.serializer.serialize(c,function(w,x){if(x)m(x);else try{localStorage.setItem(_.keyPrefix+n,w),b(h)}catch(A){(A.name==="QuotaExceededError"||A.name==="NS_ERROR_DOM_QUOTA_REACHED")&&m(A),m(A)}})})});return E(p,a),p}function Ao(n,c){if(c=lt.apply(this,arguments),n=typeof n!="function"&&n||{},!n.name){var a=this.config();n.name=n.name||a.name,n.storeName=n.storeName||a.storeName}var f=this,p;return n.name?p=new y(function(h){n.storeName?h(vr(n,f._defaultConfig)):h(n.name+"/")}).then(function(h){for(var b=localStorage.length-1;b>=0;b--){var m=localStorage.key(b);m.indexOf(h)===0&&localStorage.removeItem(m)}}):p=y.reject("Invalid arguments"),E(p,c),p}var So={_driver:"localStorageWrapper",_initStorage:mo,_support:go(),iterate:wo,getItem:_o,setItem:Eo,removeItem:$o,clear:yo,length:To,key:xo,keys:It,dropInstance:Ao},Co=function(c,a){return c===a||typeof c=="number"&&typeof a=="number"&&isNaN(c)&&isNaN(a)},Me=function(c,a){for(var f=c.length,p=0;p<f;){if(Co(c[p],a))return!0;p++}return!1},fr=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"},wt={},ee={},Nt={INDEXEDDB:lo,WEBSQL:po,LOCALSTORAGE:So},re=[Nt.INDEXEDDB._driver,Nt.WEBSQL._driver,Nt.LOCALSTORAGE._driver],Vt=["dropInstance"],De=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Vt),Po={description:"",driver:re.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Oo(n,c){n[c]=function(){var a=arguments;return n.ready().then(function(){return n[c].apply(n,a)})}}function oe(){for(var n=1;n<arguments.length;n++){var c=arguments[n];if(c)for(var a in c)c.hasOwnProperty(a)&&(fr(c[a])?arguments[0][a]=c[a].slice():arguments[0][a]=c[a])}return arguments[0]}var Ro=function(){function n(c){u(this,n);for(var a in Nt)if(Nt.hasOwnProperty(a)){var f=Nt[a],p=f._driver;this[a]=p,wt[p]||this.defineDriver(f)}this._defaultConfig=oe({},Po),this._config=oe({},this._defaultConfig,c),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return n.prototype.config=function(a){if((typeof a=="undefined"?"undefined":l(a))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var f in a){if(f==="storeName"&&(a[f]=a[f].replace(/\W/g,"_")),f==="version"&&typeof a[f]!="number")return new Error("Database version must be a number.");this._config[f]=a[f]}return"driver"in a&&a.driver?this.setDriver(this._config.driver):!0}else return typeof a=="string"?this._config[a]:this._config},n.prototype.defineDriver=function(a,f,p){var h=new y(function(b,m){try{var _=a._driver,w=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver){m(w);return}for(var x=De.concat("_initStorage"),A=0,I=x.length;A<I;A++){var z=x[A],F=!Me(Vt,z);if((F||a[z])&&typeof a[z]!="function"){m(w);return}}var X=function(){for(var Gt=function(No){return function(){var le=new Error("Method "+No+" is not implemented by the current driver"),ie=y.reject(le);return E(ie,arguments[arguments.length-1]),ie}},je=0,ke=Vt.length;je<ke;je++){var Be=Vt[je];a[Be]||(a[Be]=Gt(Be))}};X();var Y=function(Gt){wt[_]&&console.info("Redefining LocalForage driver: "+_),wt[_]=a,ee[_]=Gt,b()};"_support"in a?a._support&&typeof a._support=="function"?a._support().then(Y,m):Y(!!a._support):Y(!0)}catch(st){m(st)}});return L(h,f,p),h},n.prototype.driver=function(){return this._driver||null},n.prototype.getDriver=function(a,f,p){var h=wt[a]?y.resolve(wt[a]):y.reject(new Error("Driver not found."));return L(h,f,p),h},n.prototype.getSerializer=function(a){var f=y.resolve(Ot);return L(f,a),f},n.prototype.ready=function(a){var f=this,p=f._driverSet.then(function(){return f._ready===null&&(f._ready=f._initDriver()),f._ready});return L(p,a,a),p},n.prototype.setDriver=function(a,f,p){var h=this;fr(a)||(a=[a]);var b=this._getSupportedDrivers(a);function m(){h._config.driver=h.driver()}function _(A){return h._extend(A),m(),h._ready=h._initStorage(h._config),h._ready}function w(A){return function(){var I=0;function z(){for(;I<A.length;){var F=A[I];return I++,h._dbInfo=null,h._ready=null,h.getDriver(F).then(_).catch(z)}m();var X=new Error("No available storage method found.");return h._driverSet=y.reject(X),h._driverSet}return z()}}var x=this._driverSet!==null?this._driverSet.catch(function(){return y.resolve()}):y.resolve();return this._driverSet=x.then(function(){var A=b[0];return h._dbInfo=null,h._ready=null,h.getDriver(A).then(function(I){h._driver=I._driver,m(),h._wrapLibraryMethodsWithReady(),h._initDriver=w(b)})}).catch(function(){m();var A=new Error("No available storage method found.");return h._driverSet=y.reject(A),h._driverSet}),L(this._driverSet,f,p),this._driverSet},n.prototype.supports=function(a){return!!ee[a]},n.prototype._extend=function(a){oe(this,a)},n.prototype._getSupportedDrivers=function(a){for(var f=[],p=0,h=a.length;p<h;p++){var b=a[p];this.supports(b)&&f.push(b)}return f},n.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,f=De.length;a<f;a++)Oo(this,De[a])},n.prototype.createInstance=function(a){return new n(a)},n}(),Io=new Ro;r.exports=Io},{"3":3}]},{},[4])(4)})})(Wn);var Al={exports:{}};(function(o,t){var e=200,r="__lodash_hash_undefined__",i=800,l=16,u=9007199254740991,d="[object Arguments]",S="[object Array]",C="[object AsyncFunction]",G="[object Boolean]",y="[object Date]",E="[object Error]",L="[object Function]",V="[object GeneratorFunction]",lt="[object Map]",J="[object Number]",ft="[object Null]",tt="[object Object]",Te="[object Proxy]",Tt="[object RegExp]",T="[object Set]",B="[object String]",N="[object Undefined]",H="[object WeakMap]",ot="[object ArrayBuffer]",it="[object DataView]",nt="[object Float32Array]",at="[object Float64Array]",pt="[object Int8Array]",Bt="[object Int16Array]",Jt="[object Int32Array]",$e="[object Uint8Array]",Ct="[object Uint8ClampedArray]",Je="[object Uint16Array]",eo="[object Uint32Array]",ro=/[\\^$.*+?()[\]{}|]/g,gt=/^\[object .+?Constructor\]$/,tr=/^(?:0|[1-9]\d*)$/,Z={};Z[nt]=Z[at]=Z[pt]=Z[Bt]=Z[Jt]=Z[$e]=Z[Ct]=Z[Je]=Z[eo]=!0,Z[d]=Z[S]=Z[ot]=Z[G]=Z[it]=Z[y]=Z[E]=Z[L]=Z[lt]=Z[J]=Z[tt]=Z[Tt]=Z[T]=Z[B]=Z[H]=!1;var er=typeof kt=="object"&&kt&&kt.Object===Object&&kt,oo=typeof self=="object"&&self&&self.Object===Object&&self,zt=er||oo||Function("return this")(),rr=t&&!t.nodeType&&t,Ft=rr&&!0&&o&&!o.nodeType&&o,or=Ft&&Ft.exports===rr,Ee=or&&er.process,lr=function(){try{var s=Ft&&Ft.require&&Ft.require("util").types;return s||Ee&&Ee.binding&&Ee.binding("util")}catch{}}(),ir=lr&&lr.isTypedArray;function lo(s,v,g){switch(g.length){case 0:return s.call(v);case 1:return s.call(v,g[0]);case 2:return s.call(v,g[0],g[1]);case 3:return s.call(v,g[0],g[1],g[2])}return s.apply(v,g)}function io(s,v){for(var g=-1,$=Array(s);++g<s;)$[g]=v(g);return $}function yt(s){return function(v){return s(v)}}function no(s,v){return s==null?void 0:s[v]}function nr(s,v){return function(g){return s(v(g))}}var te=Array.prototype,Ae=Function.prototype,Pt=Object.prototype,Ut=zt["__core-js_shared__"],Ht=Ae.toString,ct=Pt.hasOwnProperty,Se=function(){var s=/[^.]+$/.exec(Ut&&Ut.keys&&Ut.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Ce=Pt.toString,ar=Ht.call(Object),sr=RegExp("^"+Ht.call(ct).replace(ro,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zt=or?zt.Buffer:void 0,Pe=zt.Symbol,Oe=zt.Uint8Array,Re=Zt?Zt.allocUnsafe:void 0,Ie=nr(Object.getPrototypeOf,Object),Ne=Object.create,Le=Pt.propertyIsEnumerable,ao=te.splice,$t=Pe?Pe.toStringTag:void 0,Ot=function(){try{var s=w(Object,"defineProperty");return s({},"",{}),s}catch{}}(),ur=Zt?Zt.isBuffer:void 0,cr=Math.max,_t=Date.now,dr=w(zt,"Map"),Wt=w(Object,"create"),hr=function(){function s(){}return function(v){if(!Yt(v))return{};if(Ne)return Ne(v);s.prototype=v;var g=new s;return s.prototype=void 0,g}}();function Et(s){var v=-1,g=s==null?0:s.length;for(this.clear();++v<g;){var $=s[v];this.set($[0],$[1])}}function so(){this.__data__=Wt?Wt(null):{},this.size=0}function uo(s){var v=this.has(s)&&delete this.__data__[s];return this.size-=v?1:0,v}function co(s){var v=this.__data__;if(Wt){var g=v[s];return g===r?void 0:g}return ct.call(v,s)?v[s]:void 0}function ho(s){var v=this.__data__;return Wt?v[s]!==void 0:ct.call(v,s)}function vo(s,v){var g=this.__data__;return this.size+=this.has(s)?0:1,g[s]=Wt&&v===void 0?r:v,this}Et.prototype.clear=so,Et.prototype.delete=uo,Et.prototype.get=co,Et.prototype.has=ho,Et.prototype.set=vo;function bt(s){var v=-1,g=s==null?0:s.length;for(this.clear();++v<g;){var $=s[v];this.set($[0],$[1])}}function fo(){this.__data__=[],this.size=0}function po(s){var v=this.__data__,g=wt(v,s);if(g<0)return!1;var $=v.length-1;return g==$?v.pop():ao.call(v,g,1),--this.size,!0}function go(s){var v=this.__data__,g=wt(v,s);return g<0?void 0:v[g][1]}function vr(s){return wt(this.__data__,s)>-1}function bo(s,v){var g=this.__data__,$=wt(g,s);return $<0?(++this.size,g.push([s,v])):g[$][1]=v,this}bt.prototype.clear=fo,bt.prototype.delete=po,bt.prototype.get=go,bt.prototype.has=vr,bt.prototype.set=bo;function Rt(s){var v=-1,g=s==null?0:s.length;for(this.clear();++v<g;){var $=s[v];this.set($[0],$[1])}}function mo(){this.size=0,this.__data__={hash:new Et,map:new(dr||bt),string:new Et}}function yo(s){var v=_(this,s).delete(s);return this.size-=v?1:0,v}function _o(s){return _(this,s).get(s)}function wo(s){return _(this,s).has(s)}function xo(s,v){var g=_(this,s),$=g.size;return g.set(s,v),this.size+=g.size==$?0:1,this}Rt.prototype.clear=mo,Rt.prototype.delete=yo,Rt.prototype.get=_o,Rt.prototype.has=wo,Rt.prototype.set=xo;function It(s){var v=this.__data__=new bt(s);this.size=v.size}function To(){this.__data__=new bt,this.size=0}function $o(s){var v=this.__data__,g=v.delete(s);return this.size=v.size,g}function Eo(s){return this.__data__.get(s)}function Ao(s){return this.__data__.has(s)}function So(s,v){var g=this.__data__;if(g instanceof bt){var $=g.__data__;if(!dr||$.length<e-1)return $.push([s,v]),this.size=++g.size,this;g=this.__data__=new Rt($)}return g.set(s,v),this.size=g.size,this}It.prototype.clear=To,It.prototype.delete=$o,It.prototype.get=Eo,It.prototype.has=Ao,It.prototype.set=So;function Co(s,v){var g=Lo(s),$=!g&&ie(s),j=!g&&!$&&Pl(s),W=!g&&!$&&!j&&Rl(s),K=g||$||j||W,M=K?io(s.length,String):[],q=M.length;for(var dt in s)(v||ct.call(s,dt))&&!(K&&(dt=="length"||j&&(dt=="offset"||dt=="parent")||W&&(dt=="buffer"||dt=="byteLength"||dt=="byteOffset")||I(dt,q)))&&M.push(dt);return M}function Me(s,v,g){(g!==void 0&&!le(s[v],g)||g===void 0&&!(v in s))&&ee(s,v,g)}function fr(s,v,g){var $=s[v];(!(ct.call(s,v)&&le($,g))||g===void 0&&!(v in s))&&ee(s,v,g)}function wt(s,v){for(var g=s.length;g--;)if(le(s[g][0],v))return g;return-1}function ee(s,v,g){v=="__proto__"&&Ot?Ot(s,v,{configurable:!0,enumerable:!0,value:g,writable:!0}):s[v]=g}var Nt=m();function re(s){return s==null?s===void 0?N:ft:$t&&$t in Object(s)?x(s):Gt(s)}function Vt(s){return ze(s)&&re(s)==d}function De(s){if(!Yt(s)||X(s))return!1;var v=Do(s)?sr:gt;return v.test(No(s))}function Po(s){return ze(s)&&Ol(s.length)&&!!Z[re(s)]}function Oo(s){if(!Yt(s))return st(s);var v=Y(s),g=[];for(var $ in s)$=="constructor"&&(v||!ct.call(s,$))||g.push($);return g}function oe(s,v,g,$,j){s!==v&&Nt(v,function(W,K){if(j||(j=new It),Yt(W))Ro(s,v,K,g,oe,$,j);else{var M=$?$(ke(s,K),W,K+"",s,v,j):void 0;M===void 0&&(M=W),Me(s,K,M)}},Il)}function Ro(s,v,g,$,j,W,K){var M=ke(s,g),q=ke(v,g),dt=K.get(q);if(dt){Me(s,g,dt);return}var ut=W?W(M,q,g+"",s,v,K):void 0,Fe=ut===void 0;if(Fe){var jo=Lo(q),ko=!jo&&Pl(q),Ll=!jo&&!ko&&Rl(q);ut=q,jo||ko||Ll?Lo(M)?ut=M:Ui(M)?ut=p(M):ko?(Fe=!1,ut=c(q,!0)):Ll?(Fe=!1,ut=f(q,!0)):ut=[]:Hi(q)||ie(q)?(ut=M,ie(M)?ut=Zi(M):(!Yt(M)||Do(M))&&(ut=A(q))):Fe=!1}Fe&&(K.set(q,ut),j(ut,q,$,W,K),K.delete(q)),Me(s,g,ut)}function Io(s,v){return Be(je(s,v,Nl),s+"")}var n=Ot?function(s,v){return Ot(s,"toString",{configurable:!0,enumerable:!1,value:Vi(v),writable:!0})}:Nl;function c(s,v){if(v)return s.slice();var g=s.length,$=Re?Re(g):new s.constructor(g);return s.copy($),$}function a(s){var v=new s.constructor(s.byteLength);return new Oe(v).set(new Oe(s)),v}function f(s,v){var g=v?a(s.buffer):s.buffer;return new s.constructor(g,s.byteOffset,s.length)}function p(s,v){var g=-1,$=s.length;for(v||(v=Array($));++g<$;)v[g]=s[g];return v}function h(s,v,g,$){var j=!g;g||(g={});for(var W=-1,K=v.length;++W<K;){var M=v[W],q=$?$(g[M],s[M],M,g,s):void 0;q===void 0&&(q=s[M]),j?ee(g,M,q):fr(g,M,q)}return g}function b(s){return Io(function(v,g){var $=-1,j=g.length,W=j>1?g[j-1]:void 0,K=j>2?g[2]:void 0;for(W=s.length>3&&typeof W=="function"?(j--,W):void 0,K&&z(g[0],g[1],K)&&(W=j<3?void 0:W,j=1),v=Object(v);++$<j;){var M=g[$];M&&s(v,M,$,W)}return v})}function m(s){return function(v,g,$){for(var j=-1,W=Object(v),K=$(v),M=K.length;M--;){var q=K[s?M:++j];if(g(W[q],q,W)===!1)break}return v}}function _(s,v){var g=s.__data__;return F(v)?g[typeof v=="string"?"string":"hash"]:g.map}function w(s,v){var g=no(s,v);return De(g)?g:void 0}function x(s){var v=ct.call(s,$t),g=s[$t];try{s[$t]=void 0;var $=!0}catch{}var j=Ce.call(s);return $&&(v?s[$t]=g:delete s[$t]),j}function A(s){return typeof s.constructor=="function"&&!Y(s)?hr(Ie(s)):{}}function I(s,v){var g=typeof s;return v=v==null?u:v,!!v&&(g=="number"||g!="symbol"&&tr.test(s))&&s>-1&&s%1==0&&s<v}function z(s,v,g){if(!Yt(g))return!1;var $=typeof v;return($=="number"?Mo(g)&&I(v,g.length):$=="string"&&v in g)?le(g[v],s):!1}function F(s){var v=typeof s;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?s!=="__proto__":s===null}function X(s){return!!Se&&Se in s}function Y(s){var v=s&&s.constructor,g=typeof v=="function"&&v.prototype||Pt;return s===g}function st(s){var v=[];if(s!=null)for(var g in Object(s))v.push(g);return v}function Gt(s){return Ce.call(s)}function je(s,v,g){return v=cr(v===void 0?s.length-1:v,0),function(){for(var $=arguments,j=-1,W=cr($.length-v,0),K=Array(W);++j<W;)K[j]=$[v+j];j=-1;for(var M=Array(v+1);++j<v;)M[j]=$[j];return M[v]=g(K),lo(s,this,M)}}function ke(s,v){if(!(v==="constructor"&&typeof s[v]=="function")&&v!="__proto__")return s[v]}var Be=Cl(n);function Cl(s){var v=0,g=0;return function(){var $=_t(),j=l-($-g);if(g=$,j>0){if(++v>=i)return arguments[0]}else v=0;return s.apply(void 0,arguments)}}function No(s){if(s!=null){try{return Ht.call(s)}catch{}try{return s+""}catch{}}return""}function le(s,v){return s===v||s!==s&&v!==v}var ie=Vt(function(){return arguments}())?Vt:function(s){return ze(s)&&ct.call(s,"callee")&&!Le.call(s,"callee")},Lo=Array.isArray;function Mo(s){return s!=null&&Ol(s.length)&&!Do(s)}function Ui(s){return ze(s)&&Mo(s)}var Pl=ur||Gi;function Do(s){if(!Yt(s))return!1;var v=re(s);return v==L||v==V||v==C||v==Te}function Ol(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function Yt(s){var v=typeof s;return s!=null&&(v=="object"||v=="function")}function ze(s){return s!=null&&typeof s=="object"}function Hi(s){if(!ze(s)||re(s)!=tt)return!1;var v=Ie(s);if(v===null)return!0;var g=ct.call(v,"constructor")&&v.constructor;return typeof g=="function"&&g instanceof g&&Ht.call(g)==ar}var Rl=ir?yt(ir):Po;function Zi(s){return h(s,Il(s))}function Il(s){return Mo(s)?Co(s,!0):Oo(s)}var Wi=b(function(s,v,g){oe(s,v,g)});function Vi(s){return function(){return s}}function Nl(s){return s}function Gi(){return!1}o.exports=Wi})(Al,Al.exports);var qn=Al.exports;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn=()=>new Vn;class Vn{}const Sl=new WeakMap,Qn=Ko(class extends ni{render(o){return Q}update(o,[t]){var e;const r=t!==this.U;return r&&this.U!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.U=t,this.ht=(e=o.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=o.element)),Q}ot(o){var t;if(typeof this.U=="function"){const e=(t=this.ht)!==null&&t!==void 0?t:globalThis;let r=Sl.get(e);r===void 0&&(r=new WeakMap,Sl.set(e,r)),r.get(this.U)!==void 0&&this.U.call(this.ht,void 0),r.set(this.U,o),o!==void 0&&this.U.call(this.ht,o)}else this.U.value=o}get rt(){var o,t,e;return typeof this.U=="function"?(t=Sl.get((o=this.ht)!==null&&o!==void 0?o:globalThis))===null||t===void 0?void 0:t.get(this.U):(e=this.U)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});export{k as $,Yn as a,Xn as b,U as c,R as e,Wn as l,qn as m,Qn as n,Kn as r,P as s,ht as t,Q as w};
