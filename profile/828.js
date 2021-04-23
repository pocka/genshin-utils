(self.webpackChunk_genshin_utils_app_profile=self.webpackChunk_genshin_utils_app_profile||[]).push([[828],{824:(t,e,o)=>{"use strict";o.d(e,{Z:()=>w});var i=window.CustomEvent;function n(t,e){var o="on"+e.type.toLowerCase();return"function"==typeof t[o]&&t[o](e),t.dispatchEvent(e)}function a(t){for(;t;){if("dialog"===t.localName)return t;t=t.parentElement?t.parentElement:t.parentNode?t.parentNode.host:null}return null}function r(t){for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}function l(t,e){for(var o=0;o<t.length;++o)if(t[o]===e)return!0;return!1}function s(t){return!(!t||!t.hasAttribute("method"))&&"dialog"===t.getAttribute("method").toLowerCase()}function d(t){var e=["button","input","keygen","select","textarea"].map((function(t){return t+":not([disabled])"}));e.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=t.querySelector(e.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var i=t.querySelectorAll("*"),n=0;n<i.length&&!(i[n].tagName&&i[n].shadowRoot&&(o=d(i[n].shadowRoot)));n++);return o}function c(t){return t.isConnected||document.body.contains(t)}function u(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var o=g.formSubmitter;if(!o){var i=t.target;o=("getRootNode"in i&&i.getRootNode()||document).activeElement}return o&&o.form===e?o:null}function h(t){if(!t.defaultPrevented){var e=t.target,o=g.imagemapUseValue,i=u(t);null===o&&i&&(o=i.value);var n=a(e);n&&"dialog"===(i&&i.getAttribute("formmethod")||e.getAttribute("method"))&&(t.preventDefault(),null!=o?n.close(o):n.close())}}function p(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",h,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(t,{attributes:!0,attributeFilter:["open"]});else{var e,o=!1,i=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),n=function(n){if(n.target===t){var a="DOMNodeRemoved";o|=n.type.substr(0,a.length)===a,window.clearTimeout(e),e=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(e){t.addEventListener(e,n)}))}Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}i&&"object"!=typeof i||((i=function(t,e){e=e||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),o}).prototype=window.Event.prototype),p.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&c(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),g.dm.removeDialog(this))},setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var o=document.createEvent("MouseEvents");o.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(o),t.stopPropagation()},focus_:function(){var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=d(this.dialog_)),r(document.activeElement),t&&t.focus()},updateZIndex:function(t,e){if(t<e)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!c(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!g.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),o=function(t,o){return!(void 0===e[t]||e[t]===o)};if(e.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===e.isolation||"fixed"===e.position||"touch"===e.webkitOverflowScrolling)return!0;t=t.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,g.needsCentering(this.dialog_)?(g.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var e=new i("close",{bubbles:!1,cancelable:!1});n(this.dialog_,e)}};var g={reposition:function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,o=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,o)+"px"},isInlinePositionSetByStylesheet:function(t){for(var e=0;e<document.styleSheets.length;++e){var o=document.styleSheets[e],i=null;try{i=o.cssRules}catch(t){}if(i)for(var n=0;n<i.length;++n){var a=i[n],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(t){}if(r&&l(r,t)){var s=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(t){return!("absolute"!==window.getComputedStyle(t).position||"auto"!==t.style.top&&""!==t.style.top||"auto"!==t.style.bottom&&""!==t.style.bottom||g.isInlinePositionSetByStylesheet(t))},forceRegisterDialog:function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),"dialog"!==t.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new p(t)},registerDialog:function(t){t.showModal||g.forceRegisterDialog(t)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(e){var o=[];e.forEach((function(t){for(var e,i=0;e=t.removedNodes[i];++i)e instanceof Element&&("dialog"===e.localName&&o.push(e),o=o.concat(e.querySelectorAll("dialog")))})),o.length&&t(o)})))}};if(g.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},g.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},g.DialogManager.prototype.updateStacking=function(){for(var t,e=this.zIndexHigh_,o=0;t=this.pendingDialogStack[o];++o)t.updateZIndex(--e,--e),0===o&&(this.overlay.style.zIndex=--e);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},g.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=a(t);){for(var e,o=0;e=this.pendingDialogStack[o];++o)if(e.dialog===t)return 0===o;t=t.parentElement}return!1},g.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),r(e),void 0!==this.forwardTab_)){var o=this.pendingDialogStack[0];return o.dialog.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}},g.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var e=new i("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&n(o.dialog,e)&&o.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},g.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach((function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()}))},g.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=e||(1===this.pendingDialogStack.unshift(t)&&this.blockDocument(),this.updateStacking(),0))},g.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);-1!==e&&(this.pendingDialogStack.splice(e,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},g.dm=new g.DialogManager,g.formSubmitter=null,g.imagemapUseValue=null,void 0===window.HTMLDialogElement){var m=document.createElement("form");if(m.setAttribute("method","dialog"),"dialog"!==m.method){var f=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(f){var b=f.get;f.get=function(){return s(this)?"dialog":b.call(this)};var v=f.set;f.set=function(t){return"string"==typeof t&&"dialog"===t.toLowerCase()?this.setAttribute("method",t):v.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",f)}}document.addEventListener("click",(function(t){if(g.formSubmitter=null,g.imagemapUseValue=null,!t.defaultPrevented){var e=t.target;if("composedPath"in t&&(e=t.composedPath().shift()||e),e&&s(e.form)){if(!("submit"===e.type&&["button","input"].indexOf(e.localName)>-1)){if("input"!==e.localName||"image"!==e.type)return;g.imagemapUseValue=t.offsetX+","+t.offsetY}a(e)&&(g.formSubmitter=e)}}}),!1),document.addEventListener("submit",(function(t){var e=t.target;if(!a(e)){var o=u(t);"dialog"===(o&&o.getAttribute("formmethod")||e.getAttribute("method"))&&t.preventDefault()}}));var y=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!s(this))return y.call(this);var t=a(this);t&&t.close()}}const w=g},394:(t,e,o)=>{"use strict";o.d(e,{qy0:()=>h,v0Y:()=>u,HxQ:()=>g,Mtf:()=>p});var i=o(151),n=o.n(i),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n().createContext&&n().createContext(a),l=function(){return(l=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function s(t){return t&&t.map((function(t,e){return n().createElement(t.tag,l({key:e},t.attr),s(t.child))}))}function d(t){return function(e){return n().createElement(c,l({attr:l({},t.attr)},e),s(t.child))}}function c(t){var e=function(e){var o,i=t.attr,a=t.size,r=t.title,s=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o}(t,["attr","size","title"]),d=a||e.size||"1em";return e.className&&(o=e.className),t.className&&(o=(o?o+" ":"")+t.className),n().createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,s,{className:o,style:l(l({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),r&&n().createElement("title",null,r),t.children)};return void 0!==r?n().createElement(r.Consumer,null,(function(t){return e(t)})):e(a)}function u(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"}}]}]})(t)}function h(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}}]}]})(t)}function p(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"}}]}]})(t)}function g(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0zm0-2a9.001 9.001 0 0 1 17.89 0H18.93a7.002 7.002 0 0 0-13.858 0H3.055z"}}]}]})(t)}},834:t=>{"use strict";t.exports="/*! destyle.css v2.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}address,blockquote,dl,figure,form,iframe,p,pre,table{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}ol,ul{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:initial;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:initial;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}embed,iframe,img,object{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}[type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}[type=radio]{-webkit-appearance:radio;appearance:radio}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{cursor:pointer;-webkit-appearance:none;appearance:none}[type=button][disabled],[type=reset][disabled],[type=submit][disabled],button[disabled]{cursor:default}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}select::-ms-expand{display:none}fieldset,option{padding:0}fieldset{margin:0;min-width:0}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:initial}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]{outline:none}table{border-collapse:collapse;border-spacing:0}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}[hidden],template{display:none}"},224:t=>{"use strict";t.exports="dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{background:rgba(0,0,0,.1)}._dialog_overlay,dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}"}}]);