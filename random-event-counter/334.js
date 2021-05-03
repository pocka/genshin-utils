/*! For license information please see 334.js.LICENSE.txt */
(self.webpackChunk_genshin_utils_app_random_event_counter=self.webpackChunk_genshin_utils_app_random_event_counter||[]).push([[334],{758:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AppRandomEventCounter:()=>P});var n=a(834),r=a(927),o=a(819),s=a(619),i=a.n(s),l=a(394);const d=i().button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: auto;

  background-color: var(--theme-bg-sub);
  border-radius: 50%;
  overflow: hidden;

  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
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
  display: block;
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;

  text-align: center;
  user-select: none;

  transform: translate(-50%, -50%);
`,f=i().span`
  display: block;
  font-size: 5em;
  margin: 0.1em 0;

  font-weight: bold;
`,g=i().small`
  font-size: 0.8em;
  white-space: nowrap;
`,v=i().span`
  &::before {
    content: "Tap";
  }

  @media (hover: hover) {
    &::before {
      content: "Click";
    }
  }
`,b=({count:e,max:t,onClick:a,...n})=>r.createElement(d,{...n,onClick:()=>null==a?void 0:a()},r.createElement(c,null),r.createElement(u,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},r.createElement(h,{cx:"50",cy:"50",r:"47.5",strokeWidth:"5","data-max":e===t?"max":""}),r.createElement(m,{cx:"50",cy:"50",r:"47.5",pathLength:"1000",strokeWidth:"5",strokeDasharray:"1000",strokeDashoffset:1e3-e/t*1e3,"data-count":e})),r.createElement(p,null,"Reward remains",r.createElement(f,null,e),r.createElement(g,null,"(",r.createElement(v,null)," to consume)"))),w="award_remains",k=i().div`
  padding: 3.2rem;
`,E=i().button`
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
`,y=i()(l.TPM)`
  margin-inline-end: 0.3em;
  font-size: 0.9em;
  vertical-align: middle;
`,x=({state:e,onChangeRemains:t})=>{switch(e.type){case"failed":return r.createElement("p",null,"Failed");case"loading":return r.createElement("p",null,"Loading");case"loaded":return r.createElement(k,null,r.createElement(b,{count:e.data.remains,max:10,onClick:()=>t(e.data.remains-1)}),r.createElement(E,{disabled:e.data.remains>=10,onClick:()=>t(e.data.remains+1)},r.createElement(y,{role:"img","aria-label":"Go back icon"}),r.createElement("span",null,"Undo (add 1)")))}};var C=a(702),_=a(62),R=a(147),z=a(598),M=a(807),Z=a(367),A=a(578),O=a(761);function D(e,t){const a=function(e,t){const a=(0,Z.Z)(e,e.getTimezoneOffset());return(0,A.Z)(a,t.tzOffset)}(e,t),n=(t.tzOffset<0?"-":"+")+("00"+Math.abs(t.tzOffset)).slice(-2)+":00";return(0,M.Z)((0,R.Z)(a.getHours()<4?a:(0,O.Z)(a,1),{representation:"date"})+"T"+"004".slice(-2)+":00:00"+n)}const S=({profile:e})=>{const{state:t,setRemains:a}=function(e){const[t,a]=(0,r.useState)({type:"loading"}),[n,o]=(0,r.useState)(null),[s,i]=(0,r.useState)(null),l=(0,r.useMemo)((()=>D(new Date,e.server)),[e.server.tzOffset]),d=(0,r.useCallback)((e=>{n&&n.save(w,e)}),[n]);return(0,r.useEffect)((()=>{(0,C.O)(_.z.AppTimer).then((async e=>{const t=await e.getModule("timer");i((()=>t.schedule))}))}),[]),(0,r.useEffect)((()=>{if(s)return s(l,(()=>{a((e=>{if("loaded"!==e.type)return e;const t={remains:10,loggedAt:(0,R.Z)(new Date)};return d(t),{type:"loaded",data:t}}))}))}),[s,l.valueOf(),d]),(0,r.useEffect)((()=>{(0,C.O)(_.z.AppProfile).then((async t=>{const{Store:a}=await t.getModule("store");o(new a(e.id,"app_random_event_counter"))}))}),[e]),(0,r.useEffect)((()=>{n&&n.load(w).then((t=>{const n={remains:10,loggedAt:(0,R.Z)(new Date)};if(!t)return void a({type:"loaded",data:n});const r=(0,z.Z)(new Date,D((0,M.Z)(t.loggedAt),e.server));r&&d(n),a({type:"loaded",data:r?n:t})}))}),[n]),{state:t,nextReset:l,setRemains(e){const t={remains:Math.max(0,Math.min(10,e)),loggedAt:(0,R.Z)(new Date)};d(t),a((e=>"loaded"===e.type?{type:"loaded",data:t}:e))}}}(e);return r.createElement(x,{state:t,onChangeRemains:a})};var T,H=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},L=(e,t,a)=>(H(e,t,"read from private field"),a?a.call(e):t.get(e)),W=(e,t,a,n)=>(H(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a);class P extends HTMLElement{constructor(){super(),T.set(this,void 0),this.attachShadow({mode:"open"})}connectedCallback(){if(!this.isConnected||!this.shadowRoot)return;const e=document.createElement("style");e.textContent=n,W(this,T,document.createElement("div")),this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(L(this,T)),this.profile&&o.render(r.createElement(s.StyleSheetManager,{target:this.shadowRoot},r.createElement(S,{profile:this.profile})),L(this,T))}disconnectedCallback(){L(this,T)&&(o.unmountComponentAtNode(L(this,T)),W(this,T,void 0))}}T=new WeakMap}}]);