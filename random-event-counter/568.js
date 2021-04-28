(self.webpackChunk_genshin_utils_app_random_event_counter=self.webpackChunk_genshin_utils_app_random_event_counter||[]).push([[568],{229:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AppRandomEventCounter:()=>H});var n=a(834),o=a(927),r=a(819),s=a(619),i=a.n(s),l=a(394);const d=i().div`
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
`,w=i().button`
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
`,b=i()(l.TPM)`
  margin-inline-end: 0.3em;
  font-size: 0.9em;
  vertical-align: middle;
`,k=({state:e,onChangeRemains:t})=>{switch(e.type){case"failed":return o.createElement("p",null,"Failed");case"loading":return o.createElement("p",null,"Loading");case"loaded":return o.createElement(v,null,o.createElement(f,{count:e.data.remains,max:10,onClick:()=>t(e.data.remains-1)}),o.createElement(w,{disabled:e.data.remains>=10,onClick:()=>t(e.data.remains+1)},o.createElement(b,{role:"img","aria-label":"Go back icon"}),o.createElement("span",null,"Undo (add 1)")))}};var E=a(702),x=a(62),y=a(367),C=a(578),_=a(807),R=a(147),Z=a(761),O=a(598);function z(e,t){const a=(0,y.Z)(e,e.getTimezoneOffset()),n=(0,C.Z)(a,t.tzOffset),o=(t.tzOffset<0?"-":"+")+("00"+t.tzOffset).slice(-2)+":00";return(0,_.Z)((0,R.Z)(n.getHours()<4?(0,Z.Z)(n,1):n,{representation:"date"})+"T"+"004".slice(-2)+":00:00"+o)}const D=({profile:e})=>{const{state:t,setRemains:a}=function(e){const[t,a]=(0,o.useState)({type:"loading"}),[n,r]=(0,o.useState)(null),s=(0,o.useMemo)((()=>z(new Date,e.server)),[e.server.tzOffset]),i=(0,o.useCallback)((e=>{n&&n.save(g,e)}),[n]);return(0,o.useEffect)((()=>{const e=s.valueOf()-(new Date).valueOf(),t=setTimeout((()=>{a((e=>{if("loaded"!==e.type)return e;const t={remains:10,loggedAt:(0,R.Z)(new Date)};return i(t),{type:"loaded",data:t}}))}),e);return()=>{clearTimeout(t)}}),[s.valueOf(),i]),(0,o.useEffect)((()=>{(0,E.O)(x.z.AppProfile).then((async t=>{const{Store:a}=await t.getModule("store");r(new a(e.id,"app_random_event_counter"))}))}),[e]),(0,o.useEffect)((()=>{n&&n.load(g).then((t=>{const n={remains:10,loggedAt:(0,R.Z)(new Date)};if(!t)return void a({type:"loaded",data:n});const o=(0,O.Z)(new Date,z((0,_.Z)(t.loggedAt),e.server));o&&i(n),a({type:"loaded",data:o?n:t})}))}),[n]),{state:t,nextReset:s,setRemains(e){const t={remains:Math.max(0,Math.min(10,e)),loggedAt:(0,R.Z)(new Date)};i(t),a((e=>"loaded"===e.type?{type:"loaded",data:t}:e))}}}(e);return o.createElement(k,{state:t,onChangeRemains:a})};var M,A=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},T=(e,t,a)=>(A(e,t,"read from private field"),a?a.call(e):t.get(e)),S=(e,t,a,n)=>(A(e,t,"write to private field"),n?n.call(e,a):t.set(e,a),a);class H extends HTMLElement{constructor(){super(),M.set(this,void 0),this.attachShadow({mode:"open"})}connectedCallback(){if(!this.isConnected||!this.shadowRoot)return;const e=document.createElement("style");e.textContent=n,S(this,M,document.createElement("div")),this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(T(this,M)),this.profile&&r.render(o.createElement(s.StyleSheetManager,{target:this.shadowRoot},o.createElement(D,{profile:this.profile})),T(this,M))}disconnectedCallback(){T(this,M)&&(r.unmountComponentAtNode(T(this,M)),S(this,M,void 0))}}M=new WeakMap}}]);