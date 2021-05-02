/*! For license information please see 334.js.LICENSE.txt */
(self.webpackChunk_genshin_utils_app_random_event_counter=self.webpackChunk_genshin_utils_app_random_event_counter||[]).push([[334],{758:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AppRandomEventCounter:()=>H});var n=a(834),o=a(927),r=a(819),s=a(619),i=a.n(s),l=a(394);const d=i().div`
  position: relative;
  max-width: 600px;
  margin: auto;
`,c=i().div`
  width: 100%;
  height: 0;
  padding-top: 100%;
`,m=i().circle`
  fill: none;
  stroke: var(--theme-primary);

  transition: stroke-dashoffset 0.2s 0.1s ease, stroke 0.2s ease;

  &[data-count="0"] {
    stroke: var(--theme-bg-sub);
    transition: stroke-dashoffset 0.2s ease, stroke 0.2s 0.1s ease;
  }
`,h=i()(m)`
  stroke: var(--theme-bg-sub);

  &[data-max="max"] {
    stroke: var(--theme-primary);
    transition: stroke 0.1s 0.16s linear;
  }
`,u=i().svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: rotate(-90deg);
`,p=i().span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 5em;

  font-weight: bold;
  user-select: none;

  transform: translate(-50%, -50%);
`,f=({count:e,max:t,onClick:a,...n})=>o.createElement(d,{...n,onClick:()=>null==a?void 0:a()},o.createElement(c,null),o.createElement(u,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},o.createElement(h,{cx:"50",cy:"50",r:"47.5",strokeWidth:"5","data-max":e===t?"max":""}),o.createElement(m,{cx:"50",cy:"50",r:"47.5",pathLength:"1000",strokeWidth:"5",strokeDasharray:"1000",strokeDashoffset:1e3-e/t*1e3,"data-count":e})),o.createElement(p,null,e)),g="award_remains",v=i().div`
  padding: 3.2rem;
`,b=i().button`
  display: flex;
  align-items: center;
  position: relative;
  margin: auto;
  margin-block-start: 16rem;
  padding: 0.8rem 1.6rem;

  background-color: var(--theme-fg);
  border: 0.2rem solid var(--theme-bg);
  border-radius: 0.4rem;
  color: var(--theme-bg);
  overflow: hidden;

  &:hover:not(:disabled) {
    box-shadow: 0 0 0 0.15rem var(--theme-fg);
  }
  &:active:not(:disabled) {
    opacity: 0.8;
    transform: scale(0.98);
  }
  &:focus {
    box-shadow: 0 0 0 0.15rem Highlight;
    outline: none;
  }
  &:disabled {
    background-color: var(--theme-fg-sub);
    color: var(--theme-bg-sub);
  }
`,w=i()(l.TPM)`
  margin-inline-end: 0.3em;
  font-size: 0.9em;
  vertical-align: middle;
`,k=({state:e,onChangeRemains:t})=>{switch(e.type){case"failed":return o.createElement("p",null,"Failed");case"loading":return o.createElement("p",null,"Loading");case"loaded":return o.createElement(v,null,o.createElement(f,{count:e.data.remains,max:10,onClick:()=>t(e.data.remains-1)}),o.createElement(b,{disabled:e.data.remains>=10,onClick:()=>t(e.data.remains+1)},o.createElement(w,{role:"img","aria-label":"Go back icon"}),o.createElement("span",null,"Undo (add 1)")))}};var E=a(702),y=a(62),x=a(147),C=a(598),_=a(807),M=a(367),R=a(578),Z=a(761);function z(e,t){const a=function(e,t){const a=(0,M.Z)(e,e.getTimezoneOffset());return(0,R.Z)(a,t.tzOffset)}(e,t),n=(t.tzOffset<0?"-":"+")+("00"+Math.abs(t.tzOffset)).slice(-2)+":00";return(0,_.Z)((0,x.Z)(a.getHours()<4?a:(0,Z.Z)(a,1),{representation:"date"})+"T"+"004".slice(-2)+":00:00"+n)}const A=({profile:e})=>{const{state:t,setRemains:a}=function(e){const[t,a]=(0,o.useState)({type:"loading"}),[n,r]=(0,o.useState)(null),[s,i]=(0,o.useState)(null),l=(0,o.useMemo)((()=>z(new Date,e.server)),[e.server.tzOffset]),d=(0,o.useCallback)((e=>{n&&n.save(g,e)}),[n]);return(0,o.useEffect)((()=>{(0,E.O)(y.z.AppTimer).then((async e=>{const t=await e.getModule("timer");i((()=>t.schedule))}))}),[]),(0,o.useEffect)((()=>{if(s)return s(l,(()=>{a((e=>{if("loaded"!==e.type)return e;const t={remains:10,loggedAt:(0,x.Z)(new Date)};return d(t),{type:"loaded",data:t}}))}))}),[s,l.valueOf(),d]),(0,o.useEffect)((()=>{(0,E.O)(y.z.AppProfile).then((async t=>{const{Store:a}=await t.getModule("store");r(new a(e.id,"app_random_event_counter"))}))}),[e]),(0,o.useEffect)((()=>{n&&n.load(g).then((t=>{const n={remains:10,loggedAt:(0,x.Z)(new Date)};if(!t)return void a({type:"loaded",data:n});const o=(0,C.Z)(new Date,z((0,_.Z)(t.loggedAt),e.server));o&&d(n),a({type:"loaded",data:o?n:t})}))}),[n]),{state:t,nextReset:l,setRemains(e){const t={remains:Math.max(0,Math.min(10,e)),loggedAt:(0,x.Z)(new Date)};d(t),a((e=>"loaded"===e.type?{type:"loaded",data:t}:e))}}}(e);return o.createElement(k,{state:t,onChangeRemains:a})};var O,D=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},S=(e,t,a)=>(D(e,t,"read from private field"),a?a.call(e):t.get(e)),T=(e,t,a,n)=>(D(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a);class H extends HTMLElement{constructor(){super(),O.set(this,void 0),this.attachShadow({mode:"open"})}connectedCallback(){if(!this.isConnected||!this.shadowRoot)return;const e=document.createElement("style");e.textContent=n,T(this,O,document.createElement("div")),this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(S(this,O)),this.profile&&r.render(o.createElement(s.StyleSheetManager,{target:this.shadowRoot},o.createElement(A,{profile:this.profile})),S(this,O))}disconnectedCallback(){S(this,O)&&(r.unmountComponentAtNode(S(this,O)),T(this,O,void 0))}}O=new WeakMap}}]);