(self.webpackChunk_genshin_utils_app_profile=self.webpackChunk_genshin_utils_app_profile||[]).push([[29],{379:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AppProfile:()=>ge});var n=r(3834),o=r(6927),a=r(4819),l=r(1619),i=r.n(l),c=r(2224),s=r(2231);const d=i()((({className:e,...t})=>o.createElement("shell-loading",{class:e,...t})))`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,m=e=>o.createElement(d,{...e});var u=r(2050),f=r(5394);const p=i().i`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,h=l.keyframes`
  from {
    transfrom: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,g=i()(f.HxQ)`
  font-size: 1.1em;

  animation: 1s ease infinite both ${h};
`,v=i().span`
  [data-icon="false"] > & > svg {
    vertical-align: middle;
    transform: translateY(-10%);
  }

  [data-icon="true"] > & {
    display: flex;
  }
`,b=i().button`
  --hover-color: var(--color-emerald);
  --hover-fg: var(--color-midnight-blue);
  --active-color: var(--color-nephritis);
  --active-fg: var(--color-midnight-blue);

  &[data-variant="normal"] {
    --hover-color: var(--theme-fg);
    --hover-fg: var(--theme-bg);
    --active-color: var(--theme-fg-sub);
    --active-fg: var(--theme-bg);
  }

  &[data-variant="danger"] {
    --hover-color: var(--color-alizarin);
    --hover-fg: var(--theme-bg);
    --active-color: var(--color-pomegranate);
    --active-fg: var(--theme-bg);
  }

  position: relative;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.2rem solid var(--hover-color);

  border-radius: 1.5em;
  text-align: center;

  transition: transform 0.1s ease;

  &[data-icon="true"] {
    padding: 0.5em;
    border-radius: 50%;
  }

  &:focus {
    text-decoration: underline;
    color: Highlight;
  }

  &:hover {
    background-color: var(--hover-color);
    border-color: var(--hover-color);
    color: var(--hover-fg);
  }

  &:active {
    background-color: var(--active-color);
    border-color: var(--active-color);
    color: var(--active-fg);

    transform: scale(0.98);
  }

  &:not(:disabled)[data-loading="loading"] {
    opacity: 0.8;
    pointer-events: none;

    & > ${v} {
      visibility: hidden;
    }

    & > ${p} {
      display: flex;
    }
  }

  &:disabled {
    border-color: var(--theme-fg-sub);
    color: var(--theme-fg-sub);
    pointer-events: none;

    opacity: 0.8;
  }
`,E=({children:e,title:t,loadingTitle:r="Loading",loading:n,variant:a="normal",icon:l,onClick:i,...c})=>o.createElement(b,{"data-loading":n?"loading":null,"data-variant":a,"data-icon":l?"true":"false",title:n?r:t,"aria-busy":n,onClick:()=>{n||null==i||i()},...c},o.createElement(v,null,e),o.createElement(p,null,o.createElement(g,null)));function w(e){return(e>=0?"+":"-")+("00"+Math.abs(e).toString(10)).slice(-2)+":00"}const y=i().form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 4rem 2.4rem;
`,C=i().div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
`,k=i().label`
  display: block;
  font-size: 0.8em;
  padding-left: 0.8rem;

  color: var(--theme-fg-sub);
`,S=i().input`
  display: block;
  border-bottom: 0.1rem solid var(--theme-fg-sub);
  padding: 0.8rem;

  &::placeholder {
    color: var(--color-asbestos);
  }

  &:focus {
    border-bottom-color: var(--theme-fg);

    & + ${k} {
      color: var(--theme-fg);
    }
  }
`,_=i()(E)`
  display: block;
  grid-column: 1 / -1;
`,x=i().select`
  display: block;
  border-bottom: 0.1rem solid var(--theme-fg-sub);
  padding: 0.8rem;

  &:focus {
    border-bottom-color: var(--theme-fg);

    & + ${k} {
      color: var(--theme-fg);
    }
  }
`,z=i()(u.if)`
  // override react-color's style
  &&& {
    width: 100% !important; // the lib uses inline style (wtf)
    min-height: 10rem;
    margin-block-start: 0.8rem;
  }
`,L=[{name:"America",tzOffset:-5},{name:"Asia",tzOffset:8},{name:"Europe",tzOffset:1}],P=["--color-turquoise","--color-green-sea","--color-emerald","--color-nephritis","--color-peter-river","--color-belize-hole","--color-amethyst","--color-wisteria","--color-wet-asphalt","--color-midnight-blue","--color-sun-flower","--color-orange","--color-carrot","--color-pumpkin","--color-alizarin","--color-pomegranate","--color-clouds","--color-silver","--color-concrete","--color-asbestos"],F=({initialData:e,loading:t,onSubmit:r,...n})=>{const[a,l]=(0,o.useState)((null==e?void 0:e.name)||""),[i,c]=(0,o.useState)((()=>(null==e?void 0:e.server)||L[1])),[s,d]=(0,o.useState)((()=>(null==e?void 0:e.color)||getComputedStyle(document.documentElement).getPropertyValue("--theme-primary").trim()||"#fa5310")),m=(0,o.useMemo)((()=>{const e=getComputedStyle(document.documentElement);return P.map((t=>e.getPropertyValue(t).trim()))}),[]);return o.createElement(y,{...n,onSubmit:e=>{e.preventDefault(),r({name:a,server:i,color:s})}},o.createElement(C,null,o.createElement(S,{id:"profile_name",required:!0,disabled:t,type:"text",placeholder:"mycharacter",value:a,onChange:e=>{l(e.currentTarget.value)}}),o.createElement(k,{htmlFor:"profile_name"},"Profile name (required)")),o.createElement(C,null,o.createElement(x,{id:"server",required:!0,disabled:t,value:i.name,onChange:e=>{const{value:t}=e.currentTarget;c((e=>L.find((e=>e.name===t))||e))}},L.map((e=>o.createElement("option",{key:e.name,value:e.name},e.name," (UTC",w(e.tzOffset),")")))),o.createElement(k,{htmlFor:"server"},"Server location (select one)")),o.createElement(C,null,o.createElement(z,{color:s,colors:m,triangle:"hide",onChange:e=>d(e.hex)}),o.createElement(k,null,"Profile color (UI primary color)")),o.createElement(_,{variant:"primary",loading:t},e?"Update profile":"Create new profile"))},M=i().h1`
  font-size: 2.4rem;

  font-weight: bold;
`,D=i().section`
  margin-block-start: 4.8rem;
  font-size: 0.9em;
`,T=i().h2`
  font-size: 1.4em;

  font-weight: bold;
`,O=i().p`
  margin-block-start: 1.6rem;
  line-height: 1.4;
`,$=i()(F)`
  margin-block-start: 4rem;
`,A=i().ul`
  margin-block-start: 2.4rem;
  padding-inline-start: 1em;

  list-style: disc;
`,I=i().li`
  line-height: 1.4;
`,U=({onAppend:e})=>o.createElement("div",null,o.createElement(M,null,"Create a profile to start!"),o.createElement(D,null,o.createElement(T,null,"Important notice"),o.createElement(O,null,"This is unofficial, fan-made utility web app for Genshin Impact. This app/website is not affiliated with miHoYo Limited.")),o.createElement($,{onSubmit:e}),o.createElement(D,null,o.createElement(T,null,"Data lifespan"),o.createElement(O,null,"The profile and every other information you input will be stored only inside your browser. Some browsers will delete browser's local storage based on their own policy and rules, without users' permission."),o.createElement(O,null,"Unfortunately, we web developers can do nothing against this non-standard behaviour. If you want to make sure your data will not be deleted automatically, please follow one of below:"),o.createElement(A,null,o.createElement(I,null,"Open this app at least a once per week"),o.createElement(I,null,"Pin this site to your homescreen"))),o.createElement(D,null,o.createElement(T,null,"Why do I need to choose a server?"),o.createElement(O,null,"We use that info to know when we reset our spawn timers and random event/quest counters.")),o.createElement(D,null,o.createElement(T,null,"Should I use the same name in Genshin account?"),o.createElement(O,null,"No. This unofficial app is not affiliated with miHoYo Limited, hence no account association nor data sharing occurs. The name is for you to identify multiple profiles later."))),q=i().main`
  position: relative;
  max-width: 60rem;
  margin: 0 auto;
  padding: 8rem 1.6rem;
`;var N=r(730);const H=i().dialog`
  position: fixed;
  padding: 0;
  border: 0 none;
  max-width: 90%;
  max-height: 90%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  background-color: var(--theme-bg);
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem #0003;
  color: var(--bg);
  overflow: auto;

  &::backdrop,
  & + .backdrop {
    background-color: #00000080;
  }

  // the dialog will be closed one cycle after children is hidden
  // this flag prevents flashing empty dialog
  &[data-opened="false"] {
    display: none;
  }
`,R=i().div`
  padding: 2.4rem;
`,Y=({children:e,opened:t=!1,closeOnBackdropClick:r=!0,onClose:n,...a})=>{const l=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=l.current;return()=>{(null==e?void 0:e.open)&&e.close()}}),[]),(0,o.useEffect)((()=>{l.current&&N.Z.registerDialog(l.current)}),[l.current]),(0,o.useEffect)((()=>{if(!l.current)return;const e=e=>{e.preventDefault(),null==n||n()};return l.current.addEventListener("cancel",e),()=>{var t;return null==(t=l.current)?void 0:t.removeEventListener("cancel",e)}}),[l.current,n]),(0,o.useEffect)((()=>{var e,r,n,o;t?(null==(e=l.current)?void 0:e.open)||null==(r=l.current)||r.showModal():(null==(n=l.current)?void 0:n.open)&&(null==(o=l.current)||o.close())}),[t,l.current]),o.createElement(H,{ref:l,"data-opened":String(t),onClick:()=>r&&(null==n?void 0:n()),...a},o.createElement(R,{onClick:e=>{e.stopPropagation()}},t&&e))},Q=i().h1`
  font-size: 2.4rem;

  font-weight: bold;
`,W=i().ul`
  margin-block-start: 4em;
`,G=i().li`
  margin-block-start: 2em;
  padding: 0.5em 0.8em;
  border-left: 1.6rem solid var(--color-asbestos);
  border-bottom: 0.2rem solid var(--color-asbestos);

  border-bottom-left-radius: 0.2rem;
`,J=i()(E)`
  margin-block-start: 0.5em;
`,V=i().div`
  margin-block-start: 1.5em;
  font-size: 0.8em;

  text-align: end;

  & > :not(:first-child) {
    margin-inline-start: 0.5em;
  }
`,X=i().span`
  display: block;
  font-size: 1.1em;

  color: var(--theme-fg-sub);
  font-weight: bold;

  &[data-current="current"] {
    color: var(--theme-fg);
  }
`,j=i().span`
  margin-inline-start: 0.5em;
  font-size: 0.6em;
  padding: 0.05em 0.5em;

  background-color: var(--theme-fg);
  border-radius: 0.4rem;
  color: var(--theme-bg);
`,B=i().span`
  display: block;
  font-size: 0.9em;
  margin-block-start: 0.2em;

  color: var(--theme-fg-sub);
`,Z=i().h1`
  font-size: 1.2em;
  margin-block-end: 1.6rem;

  font-weight: bold;
`,K=i()(E)`
  margin-block-start: 1.6rem;
  width: 100%;
`,ee=i()(E)`
  margin-block-start: 6.4rem;
  width: 100%;
`,te=({mutating:e,profile:t,onChangeCurrent:r,onDelete:n,onEdit:a})=>{const[l,i]=(0,o.useState)(!1),[c,s]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{e||(i(!1),s(!1))}),[e]);return(0,o.useEffect)((()=>{d()}),[e]),o.createElement(G,{style:{borderColor:t.color||"var(--theme-primary)"}},o.createElement("div",null,o.createElement(X,{"data-current":t.isCurrent?"current":null},t.name,t.isCurrent&&o.createElement(j,null,"Current")),o.createElement(B,null,t.server.name," (UTC",w(t.server.tzOffset),")")),o.createElement(V,null,!t.isCurrent&&o.createElement(J,{disabled:e,onClick:()=>r(t)},o.createElement(f.Mtf,null)," Select"),o.createElement(J,{disabled:e,onClick:()=>i(!0)},o.createElement(f.v0Y,null)," Edit"),o.createElement(J,{variant:"danger",disabled:e,onClick:()=>s(!0)},o.createElement(f.qy0,null)," Delete")),o.createElement(Y,{opened:l,"aria-labelledby":`edit_dialog_${t.id}`,onClose:d},o.createElement(Z,{id:`edit_dialog_${t.id}`},'Edit "',t.name,'"'),o.createElement(F,{initialData:t,loading:e,onSubmit:e=>a({...t,...e})}),o.createElement(K,{disabled:e,onClick:d},"Cancel")),o.createElement(Y,{opened:c,"aria-labelledby":`delete_dialog_${t.id}`,onClose:d},o.createElement(Z,{id:`delete_dialog_${t.id}`},'Delete "',t.name,'"?'),o.createElement(K,{loading:e,variant:"danger",onClick:()=>n(t)},"Delete"),o.createElement(K,{disabled:e,onClick:d},"Cancel")))},re=({list:e,mutating:t,onCreate:r,onChangeCurrent:n,onDelete:a,onEdit:l,...i})=>{const[c,s]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{t||s(!1)}),[t]);return(0,o.useEffect)((()=>{d()}),[t]),o.createElement("div",{...i},o.createElement(Q,null,"Your profiles"),o.createElement(W,null,e.map((e=>o.createElement(te,{key:e.id,profile:e,mutating:t,onChangeCurrent:n,onDelete:a,onEdit:l})))),o.createElement(ee,{disabled:t,onClick:()=>s(!0)},"Create new profile"),c&&o.createElement(Y,{opened:c,onClose:d},o.createElement(Z,{id:"new_profile_dialog"},"New profile"),o.createElement(F,{loading:t,onSubmit:r}),o.createElement(K,{disabled:t,onClick:d},"Cancel")))};var ne,oe;(oe=ne||(ne={}))[oe.Loading=0]="Loading",oe[oe.LoadFailed=1]="LoadFailed",oe[oe.Loaded=2]="Loaded",oe[oe.Mutating=3]="Mutating",oe[oe.MutateFailed=4]="MutateFailed";const ae={state:0},le=e=>({state:2,list:e}),ie=({state:e,onAppend:t,onUpdate:r})=>{switch(e.state){case ne.Loading:return o.createElement(m,null);case ne.LoadFailed:return o.createElement("p",null,"Failed to load profile");default:return e.list.length>0?o.createElement(re,{list:e.list,mutating:e.state===ne.Mutating,onCreate:t,onChangeCurrent:t=>r(e.list.map((e=>({...e,isCurrent:e.id===t.id})))),onDelete:t=>r(e.list.filter((e=>e.id!==t.id)).map(((e,r)=>t.isCurrent&&0===r?{...e,isCurrent:!0}:e))),onEdit:t=>r(e.list.map((e=>e.id===t.id?t:e)))}):o.createElement(U,{onAppend:t})}},ce=e=>o.createElement(q,null,o.createElement(ie,{...e}));var se=r(6484),de=r(9793);const me=({onSelectProfile:e})=>{const[t,r]=(0,o.useState)(ae);(0,o.useEffect)((()=>{Promise.all([(0,de.c)(),(1e3,new Promise((e=>{setTimeout((()=>{e()}),1e3)})))]).then((([t])=>{r(le(t));const n=t.find((e=>e.isCurrent));null==e||e(n||null)})).catch((e=>r({state:1,reason:e})))}),[]),(0,o.useEffect)((()=>(0,se.Xl)((e=>{r(le(e))}),!1)),[]);const n=async n=>{if(t.state!==ne.Loaded&&t.state!==ne.MutateFailed)return;const o=(0,se.FQ)();r((e=>({state:3,list:e}))(t.list));const a=t.list.find((e=>e.isCurrent))||null,l=n.find((e=>e.isCurrent))||null;JSON.stringify(a)!==JSON.stringify(l)&&(null==e||e(l),o.currentProfile.forEach((e=>{try{e(l)}catch(e){console.warn(e)}})));try{const e=await(0,de.O)(n);o.profiles.forEach((t=>{try{t(e)}catch(e){console.warn(e)}})),r(le(e))}catch(e){r(((e,t)=>({state:4,list:e,reason:t}))(t.list,e))}};return o.createElement(ce,{state:t,onAppend:async e=>{if(t.state===ne.Loaded||t.state===ne.MutateFailed)return n([...t.list.map((e=>({...e,isCurrent:!1}))),{...e,id:(0,s.v4)(),isCurrent:!0}])},onUpdate:n})};var ue,fe=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},pe=(e,t,r)=>(fe(e,t,"read from private field"),r?r.call(e):t.get(e)),he=(e,t,r,n)=>(fe(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);class ge extends HTMLElement{constructor(){super(),ue.set(this,void 0),this.attachShadow({mode:"open"})}connectedCallback(){if(!this.isConnected||!this.shadowRoot)return;const e=document.createElement("style");e.textContent=n+c,he(this,ue,document.createElement("div")),this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(pe(this,ue)),a.render(o.createElement(l.StyleSheetManager,{target:this.shadowRoot},o.createElement(me,{onSelectProfile:e=>{this.dispatchEvent(new CustomEvent("selectprofile",{detail:e}))}})),pe(this,ue))}disconnectedCallback(){pe(this,ue)&&(a.unmountComponentAtNode(pe(this,ue)),he(this,ue,void 0))}}ue=new WeakMap},6484:(e,t,r)=>{"use strict";r.d(t,{FQ:()=>a,gg:()=>l,Xl:()=>i});var n=r(9793);const o="__gu_observers";function a(){return window[o]||(window[o]={currentProfile:[],profiles:[]}),window[o]}const l=(e,t=!0)=>{const r=a();return r.currentProfile.push(e),t&&(0,n.c)().then((t=>{e(t.find((e=>e.isCurrent))||null)})).catch((e=>{console.warn("Failed to retrieve profiles store",e)})),()=>{r.currentProfile=r.currentProfile.filter((t=>t!==e))}},i=(e,t=!0)=>{const r=a();return r.profiles.push(e),t&&(0,n.c)().then((t=>{e(t)})).catch((e=>{console.warn("Failed to retrieve profiles store",e)})),()=>{r.profiles=r.profiles.filter((t=>t!==e))}}},9793:(e,t,r)=>{"use strict";r.d(t,{c:()=>a,O:()=>l});var n=r(5486);const o="gu_profile_v1";async function a(){return await n.getItem(o)||[]}async function l(e){return await n.setItem(o,e)||[]}}}]);