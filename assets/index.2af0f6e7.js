import{r as Qu,a as zu,l as fo,m as Yu,e as Hr,s as tr,b as Te,c as gr,$ as Y,n as se,t as Zu,w as Xu}from"./vendor.dfa7d2d4.js";const Ku=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};Ku();Qu(zu);function $e(r,e,t){return t.a=r,t.f=e,t}function $(r){return $e(2,r,function(e){return function(t){return r(e,t)}})}function y(r){return $e(3,r,function(e){return function(t){return function(n){return r(e,t,n)}}})}function Z(r){return $e(4,r,function(e){return function(t){return function(n){return function(o){return r(e,t,n,o)}}}})}function dr(r){return $e(5,r,function(e){return function(t){return function(n){return function(o){return function(i){return r(e,t,n,o,i)}}}}})}function it(r){return $e(6,r,function(e){return function(t){return function(n){return function(o){return function(i){return function(u){return r(e,t,n,o,i,u)}}}}}})}function Yr(r){return $e(7,r,function(e){return function(t){return function(n){return function(o){return function(i){return function(u){return function(s){return r(e,t,n,o,i,u,s)}}}}}}})}function po(r){return $e(8,r,function(e){return function(t){return function(n){return function(o){return function(i){return function(u){return function(s){return function(v){return r(e,t,n,o,i,u,s,v)}}}}}}}})}function ho(r){return $e(9,r,function(e){return function(t){return function(n){return function(o){return function(i){return function(u){return function(s){return function(v){return function(l){return r(e,t,n,o,i,u,s,v,l)}}}}}}}}})}function a(r,e,t){return r.a===2?r.f(e,t):r(e)(t)}function h(r,e,t,n){return r.a===3?r.f(e,t,n):r(e)(t)(n)}function W(r,e,t,n,o){return r.a===4?r.f(e,t,n,o):r(e)(t)(n)(o)}function T(r,e,t,n,o,i){return r.a===5?r.f(e,t,n,o,i):r(e)(t)(n)(o)(i)}function Zr(r,e,t,n,o,i,u){return r.a===6?r.f(e,t,n,o,i,u):r(e)(t)(n)(o)(i)(u)}function mo(r,e,t,n,o,i,u,s){return r.a===7?r.f(e,t,n,o,i,u,s):r(e)(t)(n)(o)(i)(u)(s)}function ke(r,e,t,n,o,i,u,s,v){return r.a===8?r.f(e,t,n,o,i,u,s,v):r(e)(t)(n)(o)(i)(u)(s)(v)}function N(r,e){for(var t,n=[],o=Bn(r,e,0,n);o&&(t=n.pop());o=Bn(t.a,t.b,0,n));return o}function Bn(r,e,t,n){if(r===e)return!0;if(typeof r!="object"||r===null||e===null)return typeof r=="function"&&De(5),!1;if(t>100)return n.push(p(r,e)),!0;r.$<0&&(r=Yn(r),e=Yn(e));for(var o in r)if(!Bn(r[o],e[o],t+1,n))return!1;return!0}$(N);$(function(r,e){return!N(r,e)});function I(r,e,t){if(typeof r!="object")return r===e?0:r<e?-1:1;if(typeof r.$=="undefined")return(t=I(r.a,e.a))||(t=I(r.b,e.b))?t:I(r.c,e.c);for(;r.b&&e.b&&!(t=I(r.a,e.a));r=r.b,e=e.b);return t||(r.b?1:e.b?-1:0)}$(function(r,e){return I(r,e)<0});$(function(r,e){return I(r,e)<1});$(function(r,e){return I(r,e)>0});$(function(r,e){return I(r,e)>=0});var rc=$(function(r,e){var t=I(r,e);return t<0?Wo:t?zs:Uo}),Ee=0;function p(r,e){return{a:r,b:e}}function ut(r,e,t){return{a:r,b:e,c:t}}function Xr(r){return r}function x(r,e){var t={};for(var n in r)t[n]=r[n];for(var n in e)t[n]=e[n];return t}$(Ir);function Ir(r,e){if(typeof r=="string")return r+e;if(!r.b)return e;var t=Ur(r.a,e);r=r.b;for(var n=t;r.b;r=r.b)n=n.b=Ur(r.a,e);return t}var _={$:0};function Ur(r,e){return{$:1,a:r,b:e}}var ec=$(Ur);function c(r){for(var e=_,t=r.length;t--;)e=Ur(r[t],e);return e}function Vn(r){for(var e=[];r.b;r=r.b)e.push(r.a);return e}var tc=y(function(r,e,t){for(var n=[];e.b&&t.b;e=e.b,t=t.b)n.push(a(r,e.a,t.a));return c(n)});Z(function(r,e,t,n){for(var o=[];e.b&&t.b&&n.b;e=e.b,t=t.b,n=n.b)o.push(h(r,e.a,t.a,n.a));return c(o)});dr(function(r,e,t,n,o){for(var i=[];e.b&&t.b&&n.b&&o.b;e=e.b,t=t.b,n=n.b,o=o.b)i.push(W(r,e.a,t.a,n.a,o.a));return c(i)});it(function(r,e,t,n,o,i){for(var u=[];e.b&&t.b&&n.b&&o.b&&i.b;e=e.b,t=t.b,n=n.b,o=o.b,i=i.b)u.push(T(r,e.a,t.a,n.a,o.a,i.a));return c(u)});$(function(r,e){return c(Vn(e).sort(function(t,n){return I(r(t),r(n))}))});$(function(r,e){return c(Vn(e).sort(function(t,n){var o=a(r,t,n);return o===Uo?0:o===Wo?-1:1}))});var nc=[];function ac(r){return r.length}var oc=y(function(r,e,t){for(var n=new Array(r),o=0;o<r;o++)n[o]=t(e+o);return n}),ic=$(function(r,e){for(var t=new Array(r),n=0;n<r&&e.b;n++)t[n]=e.a,e=e.b;return t.length=n,p(t,e)});$(function(r,e){return e[r]});y(function(r,e,t){for(var n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=t[i];return o[r]=e,o});$(function(r,e){for(var t=e.length,n=new Array(t+1),o=0;o<t;o++)n[o]=e[o];return n[t]=r,n});y(function(r,e,t){for(var n=t.length,o=0;o<n;o++)e=a(r,t[o],e);return e});var uc=y(function(r,e,t){for(var n=t.length-1;n>=0;n--)e=a(r,t[n],e);return e});$(function(r,e){for(var t=e.length,n=new Array(t),o=0;o<t;o++)n[o]=r(e[o]);return n});y(function(r,e,t){for(var n=t.length,o=new Array(n),i=0;i<n;i++)o[i]=a(r,e+i,t[i]);return o});y(function(r,e,t){return t.slice(r,e)});y(function(r,e,t){var n=e.length,o=r-n;o>t.length&&(o=t.length);for(var i=n+o,u=new Array(i),s=0;s<n;s++)u[s]=e[s];for(var s=0;s<o;s++)u[s+n]=t[s];return u});$(function(r,e){return e});$(function(r,e){return console.log(r+": "+cc()),e});function cc(r){return"<internals>"}function De(r){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}$(function(r,e){return r+e});$(function(r,e){return r-e});$(function(r,e){return r*e});$(function(r,e){return r/e});$(function(r,e){return r/e|0});$(Math.pow);$(function(r,e){return e%r});var sc=$(function(r,e){var t=e%r;return r===0?De(11):t>0&&r<0||t<0&&r>0?t+r:t});$(Math.atan2);var $c=Math.ceil,lc=Math.floor,bo=Math.log;$(function(r,e){return r&&e});$(function(r,e){return r||e});$(function(r,e){return r!==e});$(function(r,e){return r+e});function vc(r){var e=r.charCodeAt(0);return isNaN(e)?P:B(55296<=e&&e<=56319?p(Xr(r[0]+r[1]),r.slice(2)):p(Xr(r[0]),r.slice(1)))}$(function(r,e){return r+e});function fc(r){return r.length}$(function(r,e){for(var t=e.length,n=new Array(t),o=0;o<t;){var i=e.charCodeAt(o);if(55296<=i&&i<=56319){n[o]=r(Xr(e[o]+e[o+1])),o+=2;continue}n[o]=r(Xr(e[o])),o++}return n.join("")});$(function(r,e){for(var t=[],n=e.length,o=0;o<n;){var i=e[o],u=e.charCodeAt(o);o++,55296<=u&&u<=56319&&(i+=e[o],o++),r(Xr(i))&&t.push(i)}return t.join("")});y(function(r,e,t){for(var n=t.length,o=0;o<n;){var i=t[o],u=t.charCodeAt(o);o++,55296<=u&&u<=56319&&(i+=t[o],o++),e=a(r,Xr(i),e)}return e});y(function(r,e,t){for(var n=t.length;n--;){var o=t[n],i=t.charCodeAt(n);56320<=i&&i<=57343&&(n--,o=t[n]+o),e=a(r,Xr(o),e)}return e});var pc=$(function(r,e){return e.split(r)}),dc=$(function(r,e){return e.join(r)}),hc=y(function(r,e,t){return t.slice(r,e)});function mc(r){return r.trim()}$(function(r,e){for(var t=e.length;t--;){var n=e[t],o=e.charCodeAt(t);if(56320<=o&&o<=57343&&(t--,n=e[t]+n),r(Xr(n)))return!0}return!1});var bc=$(function(r,e){for(var t=e.length;t--;){var n=e[t],o=e.charCodeAt(t);if(56320<=o&&o<=57343&&(t--,n=e[t]+n),!r(Xr(n)))return!1}return!0}),gc=$(function(r,e){return e.indexOf(r)>-1}),wc=$(function(r,e){return e.indexOf(r)===0}),_c=$(function(r,e){return e.length>=r.length&&e.lastIndexOf(r)===e.length-r.length}),Ac=$(function(r,e){var t=r.length;if(t<1)return _;for(var n=0,o=[];(n=e.indexOf(r,n))>-1;)o.push(n),n=n+t;return c(o)});function jc(r){return r+""}function yc(r){for(var e=0,t=r.charCodeAt(0),n=t==43||t==45?1:0,o=n;o<r.length;++o){var i=r.charCodeAt(o);if(i<48||57<i)return P;e=10*e+i-48}return o==n?P:B(t==45?-e:e)}function Tc(r){var e=r.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+r.charCodeAt(1)-56320+65536:e}function kc(r){return{$:0,a:r}}function Ec(r){return{$:1,a:r}}function Ot(r){return{$:2,b:r}}var Dc=Ot(function(r){return typeof r!="number"?Er("an INT",r):-2147483647<r&&r<2147483647&&(r|0)===r||isFinite(r)&&!(r%1)?_r(r):Er("an INT",r)}),Cc=Ot(function(r){return typeof r=="boolean"?_r(r):Er("a BOOL",r)}),Pc=Ot(function(r){return _r(hr(r))}),Sc=Ot(function(r){return typeof r=="string"?_r(r):r instanceof String?_r(r+""):Er("a STRING",r)});function Bc(r){return{$:3,b:r}}function Vc(r){return{$:5,c:r}}var Rc=$(function(r,e){return{$:6,d:r,b:e}});$(function(r,e){return{$:7,e:r,b:e}});function Lc(r){return{$:8,b:r}}function le(r,e){return{$:9,f:r,g:e}}var xc=$(function(r,e){return{$:10,b:e,h:r}});function Mc(r){return{$:11,g:r}}var Jc=$(function(r,e){return le(r,[e])}),Fc=y(function(r,e,t){return le(r,[e,t])}),Oc=Z(function(r,e,t,n){return le(r,[e,t,n])}),Hc=dr(function(r,e,t,n,o){return le(r,[e,t,n,o])}),Ic=it(function(r,e,t,n,o,i){return le(r,[e,t,n,o,i])});Yr(function(r,e,t,n,o,i,u){return le(r,[e,t,n,o,i,u])});var Uc=po(function(r,e,t,n,o,i,u,s){return le(r,[e,t,n,o,i,u,s])});ho(function(r,e,t,n,o,i,u,s,v){return le(r,[e,t,n,o,i,u,s,v])});$(function(r,e){try{var t=JSON.parse(e);return wr(r,t)}catch(n){return mr(a(Zn,"This is not valid JSON! "+n.message,hr(e)))}});var Rn=$(function(r,e){return wr(r,Ce(e))});function wr(r,e){switch(r.$){case 2:return r.b(e);case 5:return e===null?_r(r.c):Er("null",e);case 3:return Ht(e)?go(r.b,e,c):Er("a LIST",e);case 4:return Ht(e)?go(r.b,e,Wc):Er("an ARRAY",e);case 6:var t=r.d;if(typeof e!="object"||e===null||!(t in e))return Er("an OBJECT with a field named `"+t+"`",e);var n=wr(r.b,e[t]);return Pr(n)?n:mr(a(No,t,n.a));case 7:var o=r.e;if(!Ht(e))return Er("an ARRAY",e);if(o>=e.length)return Er("a LONGER array. Need index "+o+" but only see "+e.length+" entries",e);var n=wr(r.b,e[o]);return Pr(n)?n:mr(a(Go,o,n.a));case 8:if(typeof e!="object"||e===null||Ht(e))return Er("an OBJECT",e);var i=_;for(var u in e)if(e.hasOwnProperty(u)){var n=wr(r.b,e[u]);if(!Pr(n))return mr(a(No,u,n.a));i=Ur(p(u,n.a),i)}return _r(he(i));case 9:for(var s=r.f,v=r.g,l=0;l<v.length;l++){var n=wr(v[l],e);if(!Pr(n))return n;s=s(n.a)}return _r(s);case 10:var n=wr(r.b,e);return Pr(n)?wr(r.h(n.a),e):n;case 11:for(var d=_,g=r.g;g.b;g=g.b){var n=wr(g.a,e);if(Pr(n))return n;d=Ur(n.a,d)}return mr(Ys(he(d)));case 1:return mr(a(Zn,r.a,hr(e)));case 0:return _r(r.a)}}function go(r,e,t){for(var n=e.length,o=new Array(n),i=0;i<n;i++){var u=wr(r,e[i]);if(!Pr(u))return mr(a(Go,i,u.a));o[i]=u.a}return _r(t(o))}function Ht(r){return Array.isArray(r)||typeof FileList!="undefined"&&r instanceof FileList}function Wc(r){return a(d$,r.length,function(e){return r[e]})}function Er(r,e){return mr(a(Zn,"Expecting "+r,hr(e)))}function Oe(r,e){if(r===e)return!0;if(r.$!==e.$)return!1;switch(r.$){case 0:case 1:return r.a===e.a;case 2:return r.b===e.b;case 5:return r.c===e.c;case 3:case 4:case 8:return Oe(r.b,e.b);case 6:return r.d===e.d&&Oe(r.b,e.b);case 7:return r.e===e.e&&Oe(r.b,e.b);case 9:return r.f===e.f&&wo(r.g,e.g);case 10:return r.h===e.h&&Oe(r.b,e.b);case 11:return wo(r.g,e.g)}}function wo(r,e){var t=r.length;if(t!==e.length)return!1;for(var n=0;n<t;n++)if(!Oe(r[n],e[n]))return!1;return!0}var qc=$(function(r,e){return JSON.stringify(Ce(e),null,r)+""});function hr(r){return r}function Ce(r){return r}function Nc(){return[]}function Gc(){return{}}var Qc=y(function(r,e,t){return t[r]=Ce(e),t});function zc(r){return $(function(e,t){return t.push(Ce(r(e))),t})}var Yc=hr(null);function Wr(r){return{$:0,a:r}}function Zc(r){return{$:1,a:r}}function lr(r){return{$:2,b:r,c:null}}var Ln=$(function(r,e){return{$:3,b:r,d:e}});$(function(r,e){return{$:4,b:r,d:e}});function Xc(r){return{$:5,b:r}}var Kc=0;function It(r){var e={$:0,e:Kc++,f:r,g:null,h:[]};return Jn(e),e}function xn(r){return lr(function(e){e(Wr(It(r)))})}function _o(r,e){r.h.push(e),Jn(r)}var rs=$(function(r,e){return lr(function(t){_o(r,e),t(Wr(Ee))})});function es(r){return lr(function(e){var t=r.f;t.$===2&&t.c&&t.c(),r.f=null,e(Wr(Ee))})}var Mn=!1,Ao=[];function Jn(r){if(Ao.push(r),!Mn){for(Mn=!0;r=Ao.shift();)ts(r);Mn=!1}}function ts(r){for(;r.f;){var e=r.f.$;if(e===0||e===1){for(;r.g&&r.g.$!==e;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else if(e===2){r.f.c=r.f.b(function(t){r.f=t,Jn(r)});return}else if(e===5){if(r.h.length===0)return;r.f=r.f.b(r.h.shift())}else r.g={$:e===3?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}function jo(r){return lr(function(e){var t=setTimeout(function(){e(Wr(Ee))},r);return function(){clearTimeout(t)}})}Z(function(r,e,t,n){return Fn(e,n,r.cr,r.dg,r.c4,function(){return function(){}})});function Fn(r,e,t,n,o,i){var u=a(Rn,r,hr(e?e.flags:void 0));Pr(u)||De(2);var s={},v=t(u.a),l=v.a,d=i(m,l),g=ns(s,m);function m(b,A){var k=a(n,b,l);d(l=k.a,A),Do(s,k.b,o(l))}return Do(s,v.b,o(l)),g?{ports:g}:{}}var ir={};function ns(r,e){var t;for(var n in ir){var o=ir[n];o.a&&(t=t||{},t[n]=o.a(n,e)),r[n]=as(o,e)}return t}function yo(r,e,t,n,o){return{b:r,c:e,d:t,e:n,f:o}}function as(r,e){var t={g:e,h:void 0},n=r.c,o=r.d,i=r.e,u=r.f;function s(v){return a(Ln,s,Xc(function(l){var d=l.a;return l.$===0?h(o,t,d,v):i&&u?W(n,t,d.i,d.j,v):h(n,t,i?d.i:d.j,v)}))}return t.h=It(a(Ln,s,r.b))}var os=$(function(r,e){return lr(function(t){r.g(e),t(Wr(Ee))})}),is=$(function(r,e){return a(rs,r.h,{$:0,a:e})});function Ut(r){return function(e){return{$:1,k:r,l:e}}}function To(r){return{$:2,m:r}}var ko=$(function(r,e){return{$:3,n:r,o:e}}),Eo=[],On=!1;function Do(r,e,t){if(Eo.push({p:r,q:e,r:t}),!On){On=!0;for(var n;n=Eo.shift();)us(n.p,n.q,n.r);On=!1}}function us(r,e,t){var n={};Wt(!0,e,n,null),Wt(!1,t,n,null);for(var o in r)_o(r[o],{$:"fx",a:n[o]||{i:_,j:_}})}function Wt(r,e,t,n){switch(e.$){case 1:var o=e.k,i=cs(r,o,n,e.l);t[o]=ss(r,i,t[o]);return;case 2:for(var u=e.m;u.b;u=u.b)Wt(r,u.a,t,n);return;case 3:Wt(r,e.o,t,{s:e.n,t:n});return}}function cs(r,e,t,n){function o(u){for(var s=t;s;s=s.t)u=s.s(u);return u}var i=r?ir[e].e:ir[e].f;return a(i,o,n)}function ss(r,e,t){return t=t||{i:_,j:_},r?t.i=Ur(e,t.i):t.j=Ur(e,t.j),t}function Co(r){ir[r]&&De(3)}function ct(r,e){return Co(r),ir[r]={e:$s,u:e,a:ls},Ut(r)}var $s=$(function(r,e){return e});function ls(r){var e=[],t=ir[r].u,n=jo(0);ir[r].b=n,ir[r].c=y(function(u,s,v){for(;s.b;s=s.b)for(var l=e,d=Ce(t(s.a)),g=0;g<l.length;g++)l[g](d);return n});function o(u){e.push(u)}function i(u){e=e.slice();var s=e.indexOf(u);s>=0&&e.splice(s,1)}return{subscribe:o,unsubscribe:i}}function Hn(r,e){return Co(r),ir[r]={f:vs,u:e,a:fs},Ut(r)}var vs=$(function(r,e){return function(t){return r(e(t))}});function fs(r,e){var t=_,n=ir[r].u,o=Wr(null);ir[r].b=o,ir[r].c=y(function(u,s,v){return t=s,o});function i(u){var s=a(Rn,n,hr(u));Pr(s)||De(4,r,s.a);for(var v=s.a,l=t;l.b;l=l.b)e(l.a(v))}return{send:i}}var qt,Kr=typeof document!="undefined"?document:{};function In(r,e){r.appendChild(e)}Z(function(r,e,t,n){var o=n.node;return o.parentNode.replaceChild(fe(r,function(){}),o),{}});function Un(r){return{$:0,a:r}}var ps=$(function(r,e){return $(function(t,n){for(var o=[],i=0;n.b;n=n.b){var u=n.a;i+=u.b||0,o.push(u)}return i+=o.length,{$:1,c:e,d:Ro(t),e:o,f:r,b:i}})}),q=ps(void 0),ds=$(function(r,e){return $(function(t,n){for(var o=[],i=0;n.b;n=n.b){var u=n.a;i+=u.b.b||0,o.push(u)}return i+=o.length,{$:2,c:e,d:Ro(t),e:o,f:r,b:i}})}),hs=ds(void 0),ms=$(function(r,e){return{$:4,j:r,k:e,b:1+(e.b||0)}});function ve(r,e){return{$:5,l:r,m:e,k:void 0}}$(function(r,e){return ve([r,e],function(){return r(e)})});y(function(r,e,t){return ve([r,e,t],function(){return a(r,e,t)})});Z(function(r,e,t,n){return ve([r,e,t,n],function(){return h(r,e,t,n)})});dr(function(r,e,t,n,o){return ve([r,e,t,n,o],function(){return W(r,e,t,n,o)})});it(function(r,e,t,n,o,i){return ve([r,e,t,n,o,i],function(){return T(r,e,t,n,o,i)})});Yr(function(r,e,t,n,o,i,u){return ve([r,e,t,n,o,i,u],function(){return Zr(r,e,t,n,o,i,u)})});po(function(r,e,t,n,o,i,u,s){return ve([r,e,t,n,o,i,u,s],function(){return mo(r,e,t,n,o,i,u,s)})});ho(function(r,e,t,n,o,i,u,s,v){return ve([r,e,t,n,o,i,u,s,v],function(){return ke(r,e,t,n,o,i,u,s,v)})});var Po=$(function(r,e){return{$:"a0",n:r,o:e}});$(function(r,e){return{$:"a1",n:r,o:e}});var Wn=$(function(r,e){return{$:"a2",n:r,o:e}}),So=$(function(r,e){return{$:"a3",n:r,o:e}});y(function(r,e,t){return{$:"a4",n:e,o:{f:r,o:t}}});function Bo(r){return r=="script"?"p":r}function bs(r){return/^(on|formAction$)/i.test(r)?"data-"+r:r}function gs(r){return r=="innerHTML"||r=="formAction"?"data-"+r:r}function ws(r){return/^javascript:/i.test(r.replace(/\s/g,""))?"":r}function Vo(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}$(function(r,e){return e.$==="a0"?a(Po,e.n,_s(r,e.o)):e});function _s(r,e){var t=na(e);return{$:e.$,a:t?h(Sr,t<3?As:js,G(r),e.a):a(M,r,e.a)}}var As=$(function(r,e){return p(r(e.a),e.b)}),js=$(function(r,e){return{A:r(e.A),aF:e.aF,aD:e.aD}});function Ro(r){for(var e={};r.b;r=r.b){var t=r.a,n=t.$,o=t.n,i=t.o;if(n==="a2"){o==="className"?Lo(e,o,Ce(i)):e[o]=Ce(i);continue}var u=e[n]||(e[n]={});n==="a3"&&o==="class"?Lo(u,o,i):u[o]=i}return e}function Lo(r,e,t){var n=r[e];r[e]=n?n+" "+t:t}function fe(r,e){var t=r.$;if(t===5)return fe(r.k||(r.k=r.m()),e);if(t===0)return Kr.createTextNode(r.a);if(t===4){for(var n=r.k,o=r.j;n.$===4;)typeof o!="object"?o=[o,n.j]:o.push(n.j),n=n.k;var i={j:o,p:e},u=fe(n,i);return u.elm_event_node_ref=i,u}if(t===3){var u=r.h(r.g);return qn(u,e,r.d),u}var u=r.f?Kr.createElementNS(r.f,r.c):Kr.createElement(r.c);qt&&r.c=="a"&&u.addEventListener("click",qt(u)),qn(u,e,r.d);for(var s=r.e,v=0;v<s.length;v++)In(u,fe(t===1?s[v]:s[v].b,e));return u}function qn(r,e,t){for(var n in t){var o=t[n];n==="a1"?ys(r,o):n==="a0"?Es(r,e,o):n==="a3"?Ts(r,o):n==="a4"?ks(r,o):(n!=="value"&&n!=="checked"||r[n]!==o)&&(r[n]=o)}}function ys(r,e){var t=r.style;for(var n in e)t[n]=e[n]}function Ts(r,e){for(var t in e){var n=e[t];typeof n!="undefined"?r.setAttribute(t,n):r.removeAttribute(t)}}function ks(r,e){for(var t in e){var n=e[t],o=n.f,i=n.o;typeof i!="undefined"?r.setAttributeNS(o,t,i):r.removeAttributeNS(o,t)}}function Es(r,e,t){var n=r.elmFs||(r.elmFs={});for(var o in t){var i=t[o],u=n[o];if(!i){r.removeEventListener(o,u),n[o]=void 0;continue}if(u){var s=u.q;if(s.$===i.$){u.q=i;continue}r.removeEventListener(o,u)}u=Ds(e,i),r.addEventListener(o,u,Nn&&{passive:na(i)<2}),n[o]=u}}var Nn;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Nn=!0}}))}catch{}function Ds(r,e){function t(n){var o=t.q,i=wr(o.a,n);if(!!Pr(i)){for(var u=na(o),s=i.a,v=u?u<3?s.a:s.A:s,l=u==1?s.b:u==3&&s.aF,d=(l&&n.stopPropagation(),(u==2?s.b:u==3&&s.aD)&&n.preventDefault(),r),g,m;g=d.j;){if(typeof g=="function")v=g(v);else for(var m=g.length;m--;)v=g[m](v);d=d.p}d(v,l)}}return t.q=e,t}function Cs(r,e){return r.$==e.$&&Oe(r.a,e.a)}function xo(r,e){var t=[];return Dr(r,e,t,0),t}function ur(r,e,t,n){var o={$:e,r:t,s:n,t:void 0,u:void 0};return r.push(o),o}function Dr(r,e,t,n){if(r!==e){var o=r.$,i=e.$;if(o!==i)if(o===1&&i===2)e=Ms(e),i=1;else{ur(t,0,n,e);return}switch(i){case 5:for(var u=r.l,s=e.l,v=u.length,l=v===s.length;l&&v--;)l=u[v]===s[v];if(l){e.k=r.k;return}e.k=e.m();var d=[];Dr(r.k,e.k,d,0),d.length>0&&ur(t,1,n,d);return;case 4:for(var g=r.j,m=e.j,b=!1,A=r.k;A.$===4;)b=!0,typeof g!="object"?g=[g,A.j]:g.push(A.j),A=A.k;for(var k=e.k;k.$===4;)b=!0,typeof m!="object"?m=[m,k.j]:m.push(k.j),k=k.k;if(b&&g.length!==m.length){ur(t,0,n,e);return}(b?!Ps(g,m):g!==m)&&ur(t,2,n,m),Dr(A,k,t,n+1);return;case 0:r.a!==e.a&&ur(t,3,n,e.a);return;case 1:Mo(r,e,t,n,Ss);return;case 2:Mo(r,e,t,n,Bs);return;case 3:if(r.h!==e.h){ur(t,0,n,e);return}var E=Gn(r.d,e.d);E&&ur(t,4,n,E);var D=e.i(r.g,e.g);D&&ur(t,5,n,D);return}}}function Ps(r,e){for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Mo(r,e,t,n,o){if(r.c!==e.c||r.f!==e.f){ur(t,0,n,e);return}var i=Gn(r.d,e.d);i&&ur(t,4,n,i),o(r,e,t,n)}function Gn(r,e,t){var n;for(var o in r){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=Gn(r[o],e[o]||{},o);i&&(n=n||{},n[o]=i);continue}if(!(o in e)){n=n||{},n[o]=t?t==="a1"?"":t==="a0"||t==="a3"?void 0:{f:r[o].f,o:void 0}:typeof r[o]=="string"?"":null;continue}var u=r[o],s=e[o];u===s&&o!=="value"&&o!=="checked"||t==="a0"&&Cs(u,s)||(n=n||{},n[o]=s)}for(var v in e)v in r||(n=n||{},n[v]=e[v]);return n}function Ss(r,e,t,n){var o=r.e,i=e.e,u=o.length,s=i.length;u>s?ur(t,6,n,{v:s,i:u-s}):u<s&&ur(t,7,n,{v:u,e:i});for(var v=u<s?u:s,l=0;l<v;l++){var d=o[l];Dr(d,i[l],t,++n),n+=d.b||0}}function Bs(r,e,t,n){for(var o=[],i={},u=[],s=r.e,v=e.e,l=s.length,d=v.length,g=0,m=0,b=n;g<l&&m<d;){var A=s[g],k=v[m],E=A.a,D=k.a,C=A.b,U=k.b,sr=void 0,ye=void 0;if(E===D){b++,Dr(C,U,o,b),b+=C.b||0,g++,m++;continue}var ie=s[g+1],Fe=v[m+1];if(ie){var Jt=ie.a,ue=ie.b;ye=D===Jt}if(Fe){var at=Fe.a,ot=Fe.b;sr=E===at}if(sr&&ye){b++,Dr(C,ot,o,b),st(i,o,E,U,m,u),b+=C.b||0,b++,$t(i,o,E,ue,b),b+=ue.b||0,g+=2,m+=2;continue}if(sr){b++,st(i,o,D,U,m,u),Dr(C,ot,o,b),b+=C.b||0,g+=1,m+=2;continue}if(ye){b++,$t(i,o,E,C,b),b+=C.b||0,b++,Dr(ue,U,o,b),b+=ue.b||0,g+=2,m+=1;continue}if(ie&&Jt===at){b++,$t(i,o,E,C,b),st(i,o,D,U,m,u),b+=C.b||0,b++,Dr(ue,ot,o,b),b+=ue.b||0,g+=2,m+=2;continue}break}for(;g<l;){b++;var A=s[g],C=A.b;$t(i,o,A.a,C,b),b+=C.b||0,g++}for(;m<d;){var ce=ce||[],k=v[m];st(i,o,k.a,k.b,void 0,ce),m++}(o.length>0||u.length>0||ce)&&ur(t,8,n,{w:o,x:u,y:ce})}var Jo="_elmW6BL";function st(r,e,t,n,o,i){var u=r[t];if(!u){u={c:0,z:n,r:o,s:void 0},i.push({r:o,A:u}),r[t]=u;return}if(u.c===1){i.push({r:o,A:u}),u.c=2;var s=[];Dr(u.z,n,s,u.r),u.r=o,u.s.s={w:s,A:u};return}st(r,e,t+Jo,n,o,i)}function $t(r,e,t,n,o){var i=r[t];if(!i){var u=ur(e,9,o,void 0);r[t]={c:1,z:n,r:o,s:u};return}if(i.c===0){i.c=2;var s=[];Dr(n,i.z,s,o),ur(e,9,o,{w:s,A:i});return}$t(r,e,t+Jo,n,o)}function Fo(r,e,t,n){lt(r,e,t,0,0,e.b,n)}function lt(r,e,t,n,o,i,u){for(var s=t[n],v=s.r;v===o;){var l=s.$;if(l===1)Fo(r,e.k,s.s,u);else if(l===8){s.t=r,s.u=u;var d=s.s.w;d.length>0&&lt(r,e,d,0,o,i,u)}else if(l===9){s.t=r,s.u=u;var g=s.s;if(g){g.A.s=r;var d=g.w;d.length>0&&lt(r,e,d,0,o,i,u)}}else s.t=r,s.u=u;if(n++,!(s=t[n])||(v=s.r)>i)return n}var m=e.$;if(m===4){for(var b=e.k;b.$===4;)b=b.k;return lt(r,b,t,n,o+1,i,r.elm_event_node_ref)}for(var A=e.e,k=r.childNodes,E=0;E<A.length;E++){o++;var D=m===1?A[E]:A[E].b,C=o+(D.b||0);if(o<=v&&v<=C&&(n=lt(k[E],D,t,n,o,C,u),!(s=t[n])||(v=s.r)>i))return n;o=C}return n}function Oo(r,e,t,n){return t.length===0?r:(Fo(r,e,t,n),Nt(r,t))}function Nt(r,e){for(var t=0;t<e.length;t++){var n=e[t],o=n.t,i=Vs(o,n);o===r&&(r=i)}return r}function Vs(r,e){switch(e.$){case 0:return Rs(r,e.s,e.u);case 4:return qn(r,e.u,e.s),r;case 3:return r.replaceData(0,r.length,e.s),r;case 1:return Nt(r,e.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=e.s:r.elm_event_node_ref={j:e.s,p:e.u},r;case 6:for(var t=e.s,o=0;o<t.i;o++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var t=e.s,n=t.e,o=t.v,i=r.childNodes[o];o<n.length;o++)r.insertBefore(fe(n[o],e.u),i);return r;case 9:var t=e.s;if(!t)return r.parentNode.removeChild(r),r;var u=t.A;return typeof u.r!="undefined"&&r.parentNode.removeChild(r),u.s=Nt(r,t.w),r;case 8:return Ls(r,e);case 5:return e.s(r);default:De(10)}}function Rs(r,e,t){var n=r.parentNode,o=fe(e,t);return o.elm_event_node_ref||(o.elm_event_node_ref=r.elm_event_node_ref),n&&o!==r&&n.replaceChild(o,r),o}function Ls(r,e){var t=e.s,n=xs(t.y,e);r=Nt(r,t.w);for(var o=t.x,i=0;i<o.length;i++){var u=o[i],s=u.A,v=s.c===2?s.s:fe(s.z,e.u);r.insertBefore(v,r.childNodes[u.r])}return n&&In(r,n),r}function xs(r,e){if(!!r){for(var t=Kr.createDocumentFragment(),n=0;n<r.length;n++){var o=r[n],i=o.A;In(t,i.c===2?i.s:fe(i.z,e.u))}return t}}function Qn(r){if(r.nodeType===3)return Un(r.textContent);if(r.nodeType!==1)return Un("");for(var e=_,t=r.attributes,n=t.length;n--;){var o=t[n],i=o.name,u=o.value;e=Ur(a(So,i,u),e)}for(var s=r.tagName.toLowerCase(),v=_,l=r.childNodes,n=l.length;n--;)v=Ur(Qn(l[n]),v);return h(q,s,e,v)}function Ms(r){for(var e=r.e,t=e.length,n=new Array(t),o=0;o<t;o++)n[o]=e[o].b;return{$:1,c:r.c,d:r.d,e:n,f:r.f,b:r.b}}Z(function(r,e,t,n){return Fn(e,n,r.cr,r.dg,r.c4,function(o,i){var u=r.dh,s=n.node,v=Qn(s);return Ho(i,function(l){var d=u(l),g=xo(v,d);s=Oo(s,v,g,o),v=d})})});var Js=Z(function(r,e,t,n){return Fn(e,n,r.cr,r.dg,r.c4,function(o,i){var u=r.aE&&r.aE(o),s=r.dh,v=Kr.title,l=Kr.body,d=Qn(l);return Ho(i,function(g){qt=u;var m=s(g),b=q("body")(_)(m.aP),A=xo(d,b);l=Oo(l,d,A,o),d=b,qt=0,v!==m.J&&(Kr.title=v=m.J)})})}),Gt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)};function Ho(r,e){e(r);var t=0;function n(){t=t===1?0:(Gt(n),e(r),1)}return function(o,i){r=o,i?(e(r),t===2&&(t=1)):(t===0&&Gt(n),t=2)}}function Fs(r){var e=r.cL,t=r.cM,n=function(){n.a(e(zn()))};return Js({aE:function(o){return n.a=o,vt.addEventListener("popstate",n),vt.navigator.userAgent.indexOf("Trident")<0||vt.addEventListener("hashchange",n),$(function(i,u){if(!u.ctrlKey&&!u.metaKey&&!u.shiftKey&&u.button<1&&!i.target&&!i.hasAttribute("download")){u.preventDefault();var s=i.href,v=zn(),l=aa(s).a;o(t(l&&v.cV===l.cV&&v.co===l.co&&v.cT.a===l.cT.a?m$(l):h$(s)))}})},cr:function(o){return h(r.cr,o,zn(),n)},dh:r.dh,dg:r.dg,c4:r.c4})}function zn(){return aa(Kr.location.href).a||De(1)}$(function(r,e){return a(ft,Kt,lr(function(){e&&history.go(e),r()}))});var Os=$(function(r,e){return a(ft,Kt,lr(function(){history.pushState({},"",e),r()}))});$(function(r,e){return a(ft,Kt,lr(function(){history.replaceState({},"",e),r()}))});var Hs={addEventListener:function(){},removeEventListener:function(){}},vt=typeof window!="undefined"?window:Hs;y(function(r,e,t){return xn(lr(function(n){function o(i){It(t(i))}return r.addEventListener(e,o,Nn&&{passive:!0}),function(){r.removeEventListener(e,o)}}))});$(function(r,e){var t=wr(r,e);return Pr(t)?B(t.a):P});function Io(r,e){return lr(function(t){Gt(function(){var n=document.getElementById(r);t(n?Wr(e(n)):Zc(b$(r)))})})}function Is(r){return lr(function(e){Gt(function(){e(Wr(r()))})})}$(function(r,e){return Io(e,function(t){return t[r](),Ee})});$(function(r,e){return Is(function(){return vt.scroll(r,e),Ee})});y(function(r,e,t){return Io(r,function(n){return n.scrollLeft=e,n.scrollTop=t,Ee})});function Us(r){return a(ft,Kt,lr(function(e){try{vt.location=r}catch{Kr.location.reload(!1)}}))}function Ws(r){try{return B(decodeURIComponent(r))}catch{return P}}function qs(r){return lr(function(e){e(Wr(r(Date.now())))})}var Ns=$(function(r,e){return lr(function(t){var n=setInterval(function(){It(e)},r);return function(){clearInterval(n)}})}),Gs=function(r){return{$:0,a:r}},Qs=function(r){return{$:1,a:r}},Uo=1,zs=2,Wo=0,O=ec,qo=y(function(r,e,t){r:for(;;){if(t.$===-2)return e;var n=t.b,o=t.c,i=t.d,u=t.e,s=r,v=h(r,n,o,h(qo,r,e,u)),l=i;r=s,e=v,t=l;continue r}}),Yn=function(r){return h(qo,y(function(e,t,n){return a(O,p(e,t),n)}),_,r)},Qt=uc;y(function(r,e,t){var n=t.c,o=t.d,i=$(function(u,s){if(u.$){var l=u.a;return h(Qt,r,s,l)}else{var v=u.a;return h(Qt,i,s,v)}});return h(Qt,i,h(Qt,r,e,o),n)});var mr=function(r){return{$:1,a:r}},Zn=$(function(r,e){return{$:3,a:r,b:e}}),No=$(function(r,e){return{$:0,a:r,b:e}}),Go=$(function(r,e){return{$:1,a:r,b:e}}),_r=function(r){return{$:0,a:r}},Ys=function(r){return{$:2,a:r}},B=function(r){return{$:0,a:r}},P={$:1},Zs=bc,Xs=qc,vr=jc,pe=$(function(r,e){return a(dc,r,Vn(e))}),He=$(function(r,e){return c(a(pc,r,e))}),Qo=function(r){return a(pe,`
    `,a(He,`
`,r))},de=y(function(r,e,t){r:for(;;)if(t.b){var n=t.a,o=t.b,i=r,u=a(r,n,e),s=o;r=i,e=u,t=s;continue r}else return e}),zo=function(r){return h(de,$(function(e,t){return t+1}),0,r)},Ks=tc,r$=y(function(r,e,t){r:for(;;)if(I(r,e)<1){var n=r,o=e-1,i=a(O,e,t);r=n,e=o,t=i;continue r}else return t}),Yo=$(function(r,e){return h(r$,r,e,_)}),e$=$(function(r,e){return h(Ks,r,a(Yo,0,zo(e)-1),e)}),Xn=Tc,Zo=function(r){var e=Xn(r);return 97<=e&&e<=122},Xo=function(r){var e=Xn(r);return e<=90&&65<=e},t$=function(r){return Zo(r)||Xo(r)},n$=function(r){var e=Xn(r);return e<=57&&48<=e},a$=function(r){return Zo(r)||Xo(r)||n$(r)},he=function(r){return h(de,O,_,r)},o$=vc,i$=$(function(r,e){return`

(`+(vr(r+1)+(") "+Qo(Ie(e))))}),Ie=function(r){return a(u$,r,_)},u$=$(function(r,e){r:for(;;)switch(r.$){case 0:var t=r.a,n=r.b,o=function(){var k=o$(t);if(k.$===1)return!1;var E=k.a,D=E.a,C=E.b;return t$(D)&&a(Zs,a$,C)}(),i=o?"."+t:"['"+(t+"']"),u=n,s=a(O,i,e);r=u,e=s;continue r;case 1:var v=r.a,n=r.b,l="["+(vr(v)+"]"),u=n,s=a(O,l,e);r=u,e=s;continue r;case 2:var d=r.a;if(d.b)if(d.b.b){var g=function(){return e.b?"The Json.Decode.oneOf at json"+a(pe,"",he(e)):"Json.Decode.oneOf"}(),A=g+(" failed in the following "+(vr(zo(d))+" ways:"));return a(pe,`

`,a(O,A,a(e$,i$,d)))}else{var n=d.a,u=n,s=e;r=u,e=s;continue r}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+a(pe,"",he(e)):"!"}();default:var m=r.a,b=r.b,A=function(){return e.b?"Problem with the value at json"+(a(pe,"",he(e))+`:

    `):`Problem with the given value:

`}();return A+(Qo(a(Xs,4,b))+(`

`+m))}}),Cr=32,Kn=Z(function(r,e,t,n){return{$:0,a:r,b:e,c:t,d:n}}),ra=nc,Ko=$c,ri=$(function(r,e){return bo(e)/bo(r)}),ea=Ko(a(ri,2,Cr)),c$=W(Kn,0,ea,ra,ra),ei=oc,s$=function(r){return{$:1,a:r}};$(function(r,e){return r(e)});$(function(r,e){return e(r)});var ta=lc,ti=ac,Pe=$(function(r,e){return I(r,e)>0?r:e}),$$=function(r){return{$:0,a:r}},ni=ic,l$=$(function(r,e){r:for(;;){var t=a(ni,Cr,r),n=t.a,o=t.b,i=a(O,$$(n),e);if(o.b){var u=o,s=i;r=u,e=s;continue r}else return he(i)}}),v$=$(function(r,e){r:for(;;){var t=Ko(e/Cr);if(t===1)return a(ni,Cr,r).a;var n=a(l$,r,_),o=t;r=n,e=o;continue r}}),f$=$(function(r,e){if(e.f){var t=e.f*Cr,n=ta(a(ri,Cr,t-1)),o=r?he(e.h):e.h,i=a(v$,o,e.f);return W(Kn,ti(e.g)+t,a(Pe,5,n*ea),i,e.g)}else return W(Kn,ti(e.g),ea,ra,e.g)}),p$=dr(function(r,e,t,n,o){r:for(;;){if(e<0)return a(f$,!1,{h:n,f:t/Cr|0,g:o});var i=s$(h(ei,Cr,e,r)),u=r,s=e-Cr,v=t,l=a(O,i,n),d=o;r=u,e=s,t=v,n=l,o=d;continue r}}),d$=$(function(r,e){if(r<=0)return c$;var t=r%Cr,n=h(ei,t,r-t,e),o=r-t-Cr;return T(p$,e,o,r,_,n)}),Pr=function(r){return!r.$},M=Jc,Sr=Fc,G=kc,na=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},h$=function(r){return{$:1,a:r}},m$=function(r){return{$:0,a:r}},rr=function(r){return r},b$=rr,ai=it(function(r,e,t,n,o,i){return{cm:i,co:e,cP:n,cT:t,cV:r,cW:o}}),g$=gc,w$=fc,oi=hc,Ue=$(function(r,e){return r<1?e:h(oi,r,w$(e),e)}),zt=Ac,Yt=function(r){return r===""},Zt=$(function(r,e){return r<1?"":h(oi,0,r,e)}),Xt=yc,ii=dr(function(r,e,t,n,o){if(Yt(o)||a(g$,"@",o))return P;var i=a(zt,":",o);if(i.b){if(i.b.b)return P;var u=i.a,s=Xt(a(Ue,u+1,o));if(s.$===1)return P;var v=s;return B(Zr(ai,r,a(Zt,u,o),v,e,t,n))}else return B(Zr(ai,r,o,P,e,t,n))}),ui=Z(function(r,e,t,n){if(Yt(n))return P;var o=a(zt,"/",n);if(o.b){var i=o.a;return T(ii,r,a(Ue,i,n),e,t,a(Zt,i,n))}else return T(ii,r,"/",e,t,n)}),ci=y(function(r,e,t){if(Yt(t))return P;var n=a(zt,"?",t);if(n.b){var o=n.a;return W(ui,r,B(a(Ue,o+1,t)),e,a(Zt,o,t))}else return W(ui,r,P,e,t)}),si=$(function(r,e){if(Yt(e))return P;var t=a(zt,"#",e);if(t.b){var n=t.a;return h(ci,r,B(a(Ue,n+1,e)),a(Zt,n,e))}else return h(ci,r,P,e)}),$i=wc,aa=function(r){return a($i,"http://",r)?a(si,0,a(Ue,7,r)):a($i,"https://",r)?a(si,1,a(Ue,8,r)):P},Kt=function(r){},Br=Wr,_$=Br(0),li=Z(function(r,e,t,n){if(n.b){var o=n.a,i=n.b;if(i.b){var u=i.a,s=i.b;if(s.b){var v=s.a,l=s.b;if(l.b){var d=l.a,g=l.b,m=t>500?h(de,r,e,he(g)):W(li,r,e,t+1,g);return a(r,o,a(r,u,a(r,v,a(r,d,m))))}else return a(r,o,a(r,u,a(r,v,e)))}else return a(r,o,a(r,u,e))}else return a(r,o,e)}else return e}),We=y(function(r,e,t){return W(li,r,e,0,t)}),Vr=$(function(r,e){return h(We,$(function(t,n){return a(O,r(t),n)}),_,e)}),qr=Ln,oa=$(function(r,e){return a(qr,function(t){return Br(r(t))},e)}),A$=y(function(r,e,t){return a(qr,function(n){return a(qr,function(o){return Br(a(r,n,o))},t)},e)}),vi=function(r){return h(We,A$(O),Br(_),r)},fi=os,j$=$(function(r,e){var t=e;return xn(a(qr,fi(r),t))}),y$=y(function(r,e,t){return a(oa,function(n){return 0},vi(a(Vr,j$(r),e)))}),T$=y(function(r,e,t){return Br(0)}),k$=$(function(r,e){var t=e;return a(oa,r,t)});ir.Task=yo(_$,y$,T$,k$);var E$=Ut("Task"),ft=$(function(r,e){return E$(a(oa,r,e))}),D$=Fs,rn=$(function(r,e){return{$:1,a:r,b:e}}),en=function(r){return{$:3,a:r}},C$=$(function(r,e){return{$:0,a:r,b:e}}),P$=function(r){return{$:1,a:r}},S$=function(r){return{$:4,a:r}},B$=function(r){return{$:3,a:r}},V$=function(r){return{$:2,a:r}},R$={$:0},F=Sc,L$=a(M,rr,F),re={$:-2},me=re,S=dr(function(r,e,t,n,o){return{$:-1,a:r,b:e,c:t,d:n,e:o}}),qe=dr(function(r,e,t,n,o){if(o.$===-1&&!o.a){o.a;var i=o.b,u=o.c,s=o.d,v=o.e;if(n.$===-1&&!n.a){n.a;var l=n.b,d=n.c,g=n.d,m=n.e;return T(S,0,e,t,T(S,1,l,d,g,m),T(S,1,i,u,s,v))}else return T(S,r,i,u,T(S,0,e,t,n,s),v)}else if(n.$===-1&&!n.a&&n.d.$===-1&&!n.d.a){n.a;var l=n.b,d=n.c,b=n.d;b.a;var A=b.b,k=b.c,E=b.d,D=b.e,m=n.e;return T(S,0,l,d,T(S,1,A,k,E,D),T(S,1,e,t,m,o))}else return T(S,r,e,t,n,o)}),pi=rc,ia=y(function(r,e,t){if(t.$===-2)return T(S,0,r,e,re,re);var n=t.a,o=t.b,i=t.c,u=t.d,s=t.e,v=a(pi,r,o);switch(v){case 0:return T(qe,n,o,i,h(ia,r,e,u),s);case 1:return T(S,n,o,e,u,s);default:return T(qe,n,o,i,u,h(ia,r,e,s))}}),Ne=y(function(r,e,t){var n=h(ia,r,e,t);if(n.$===-1&&!n.a){n.a;var o=n.b,i=n.c,u=n.d,s=n.e;return T(S,1,o,i,u,s)}else{var v=n;return v}}),x$=function(r){return h(de,$(function(e,t){var n=e.a,o=e.b;return h(Ne,n,o,t)}),me,r)},M$=Lc,di=function(r){return a(M,x$,M$(r))},J$=di(di(L$)),Nr=Rn,F$=dr(function(r,e,t,n,o){return{cU:n,cX:t,c0:r,c8:e,dc:o}}),Gr=xc,f=Rc,ua=Z(function(r,e,t,n){return{aR:n,a0:r,au:t,be:e}}),ca={b3:"en-GB",G:"English"},tn=Cc,sa=function(r){return r?0:1},pt=a(M,sa,tn),hi=a(M,function(r){return W(ua,r,ca,0,1)},a(f,"feedbackVibration",pt)),be=Ec,$a=$(function(r,e){return h(We,$(function(t,n){return r(t)?a(O,t,n):n}),_,e)}),la=function(r){if(r.b){var e=r.a;return r.b,B(e)}else return P},O$={b3:"ja-JP",G:"\u65E5\u672C\u8A9E"},mi=c([ca,O$]),bi=function(r){return la(a($a,function(e){return N(e.b3,r)},mi))},br=$(function(r,e){if(e.$)return P;var t=e.a;return B(r(t))}),Rr=$(function(r,e){if(e.$)return r;var t=e.a;return t}),gi=a(Gr,function(r){return a(Rr,be("[App.Language] Unknown language code: "+r),a(br,G,bi(r)))},F),H$=a(M,function(r){return a(r,0,1)},h(Sr,ua,a(f,"feedbackVibration",pt),a(f,"language",gi))),Ge=Hc,I$=T(Ge,ua,a(f,"feedbackVibration",pt),a(f,"language",gi),a(f,"inAppNotification",pt),a(f,"browserNotification",pt)),U$=a(Gr,function(r){switch(r){case"1":return hi;case"2":return H$;case"3":return I$;default:return hi}},a(f,"version",F)),W$=$(function(r,e){return{af:e,Z:r}}),Se=Dc,Lr=rr,q$=h(Sr,W$,a(f,"remains",Se),a(M,Lr,a(f,"loggedAt",Se))),N$=Z(function(r,e,t,n){return{F:r,G:t,bB:n,de:e}}),wi=T(Ge,N$,a(f,"id",F),a(f,"tzOffset",a(M,rr,Se)),a(f,"name",F),a(f,"shortName",F)),G$=Z(function(r,e,t,n){return{aY:t,F:r,G:e,C:n}}),va=rr,Q$=a(M,va,Se),z$=a(M,rr,F),_i=$(function(r,e){return{$:2,a:r,b:e}}),fa={$:0},Ai=function(r){return{$:1,a:r}},Y$=a(Gr,function(r){switch(r){case"Idle":return G(fa);case"Running":return a(M,Ai,a(M,Lr,a(f,"startedAt",Se)));case"Completed":return h(Sr,_i,a(M,Lr,a(f,"startedAt",Se)),a(M,Lr,a(f,"completedAt",Se)));default:return be("[App.Timer] Unknown state: "+r)}},a(f,"type",F)),Z$=T(Ge,G$,a(f,"id",z$),a(f,"name",F),a(f,"duration",Q$),a(f,"state",Y$)),X$=a(Gr,function(r){return r==="1.0"?Z$:be("[App.Timer] Invalid timer version: "+r)},a(f,"version",F)),ji=function(r){switch(r){case"dark":return 1;case"light":return 2;default:return 0}},K$=a(M,ji,F),yi={aR:1,a0:1,au:0,be:ca},pa=Bc,dt=Ic,Qe=Mc,da=function(r){return Qe(c([a(M,B,r),G(P)]))},rl=Zr(dt,F$,a(f,"server",wi),a(f,"theme",K$),a(f,"randomEvent",da(q$)),a(f,"preference",Qe(c([U$,G(yi)]))),a(f,"timers",Qe(c([pa(X$),G(_)])))),el=Yr(function(r,e,t,n,o,i,u){return{bU:u,bX:i,b4:r,cB:n,cJ:o,cY:e,db:t}}),tl=Z(function(r,e,t,n){return{bT:n,cU:t,ad:r,di:e}}),j=a(M,rr,F),nl=T(Ge,tl,a(f,"wakeLock",j),a(f,"wakeLockNotSupported",j),a(f,"preference",j),a(f,"about",j)),al=Yr(function(r,e,t,n,o,i,u){return{aM:o,ct:i,bf:t,bs:n,c9:u,J:r,bL:e}}),ze=Uc,ol=ke(ze,al,a(f,"title",j),a(f,"version",j),a(f,"license",j),a(f,"repository",j),a(f,"author",j),a(f,"issues",j),a(f,"thirdPartyNotice",j)),il=dr(function(r,e,t,n,o){return{M:e,a2:t,W:n,J:r,v:o}}),ul=$(function(r,e){return{bq:e,J:r}}),cl=$(function(r,e){return{M:e,U:r}}),nn=h(Sr,cl,a(f,"label",j),a(f,"description",j)),sl=h(Sr,ul,a(f,"title",j),a(f,"referenceServer",nn)),$l=y(function(r,e,t){return{aR:t,au:e,J:r}}),ll=Yr(function(r,e,t,n,o,i,u){return{b$:t,ca:o,M:e,U:r,bj:n,cQ:i,bu:u}}),vl=ke(ze,ll,a(f,"label",j),a(f,"description",j),a(f,"checking",j),a(f,"notSupported",j),a(f,"denied",j),a(f,"permissionRequesting",j),a(f,"requestPermission",j)),an=Oc,fl=W(an,$l,a(f,"title",j),a(f,"inAppNotification",nn),a(f,"browserNotification",vl)),pl=Yr(function(r,e,t,n,o,i,u){return{b6:o,a0:u,be:e,cv:i,c5:n,c8:t,J:r}}),dl=y(function(r,e,t){return{M:e,U:r,bj:t}}),hl=W(an,dl,a(f,"label",j),a(f,"description",j),a(f,"notSupported",j)),ml=ke(ze,pl,a(f,"title",j),a(f,"language",nn),a(f,"theme",nn),a(f,"systemDefaultTheme",j),a(f,"dark",j),a(f,"light",j),a(f,"feedbackVibration",hl)),bl=Zr(dt,il,a(f,"title",j),a(f,"description",j),a(f,"general",sl),a(f,"notification",fl),a(f,"ui",ml)),gl=$(function(r,e){return{z:e,J:r}}),wl=Z(function(r,e,t,n){return{aY:e,as:n,G:r,c3:t}}),_l=dr(function(r,e,t,n,o){return{b7:t,cp:n,cx:o,dd:e,J:r}}),Al=$(function(r,e){return{U:r,cR:e}}),on=h(Sr,Al,a(f,"label",j),a(f,"placeholder",j)),jl=Zr(dt,_l,a(f,"title",j),a(f,"tips",j),a(f,"day",on),a(f,"hour",on),a(f,"minute",on)),yl=y(function(r,e,t){return{cf:r,cA:e,dl:t}}),Tl=W(an,yl,a(f,"emptyName",j),a(f,"negativeDuration",j),a(f,"zeroDuration",j)),kl=T(Ge,wl,a(f,"name",on),a(f,"duration",jl),a(f,"submit",j),a(f,"errors",Tl)),El=h(Sr,gl,a(f,"title",j),a(f,"form",kl)),Dl=dr(function(r,e,t,n,o){return{aJ:t,bW:o,M:e,cu:n,J:r}}),Cl=$(function(r,e){return{b1:r,df:e}}),Pl=h(Sr,Cl,a(f,"claim",j),a(f,"undo",j)),Sl=Zr(dt,Dl,a(f,"title",j),a(f,"description",j),a(f,"actions",Pl),a(f,"lastClaimedLabel",j),a(f,"ago",j)),Bl=dr(function(r,e,t,n,o){return{aJ:n,M:e,ce:t,bI:o,J:r}}),Vl=Yr(function(r,e,t,n,o,i,u){return{b2:o,aW:r,b9:t,cw:i,bm:u,c1:e,c2:n}}),Rl=ke(ze,Vl,a(f,"create",j),a(f,"start",j),a(f,"delete",j),a(f,"stop",j),a(f,"clear",j),a(f,"menu",j),a(f,"presets",j)),Ll=$(function(r,e){return{M:e,J:r}}),xl=h(Sr,Ll,a(f,"title",j),a(f,"description",j)),Ml=y(function(r,e,t){return{aY:r,cg:t,Z:e}}),Jl=W(an,Ml,a(f,"duration",j),a(f,"remains",j),a(f,"ended",j)),Fl=Zr(dt,Bl,a(f,"title",j),a(f,"description",j),a(f,"empty",xl),a(f,"actions",Rl),a(f,"timerCard",Jl)),Ol=function(r){return{da:r}},Hl=Z(function(r,e,t,n){return{aP:e,cb:n,cN:t,J:r}}),Il=T(Ge,Hl,a(f,"title",j),a(f,"body",j),a(f,"open",j),a(f,"dismiss",j)),Ul=a(M,Ol,a(f,"timer",Il)),Ti=ke(ze,el,a(f,"configPage",bl),a(f,"randomEventCounterPage",Sl),a(f,"timerPage",Fl),a(f,"newTimerPage",El),a(f,"notifications",Ul),a(f,"appMenu",nl),a(f,"aboutPage",ol)),Wl=a(Gr,function(r){switch(r){case"production":return G(0);case"development":return G(1);default:return G(0)}},F),ql=a(M,function(r){return r?0:1},tn),Nl=Vc,Gl=function(r){return Qe(c([Nl(P),a(M,B,r)]))},Ql=Yr(function(r,e,t,n,o,i,u){return{aM:t,aS:u,aV:n,a7:o,bf:e,bs:i,bL:r}}),zl=$(function(r,e){return{ar:e,G:r}}),ki=Qe(c([a(M,function(r){return{ar:P,G:r}},F),h(Sr,zl,a(f,"name",F),da(a(f,"email",F)))])),Yl=function(r){return{bK:r}},Zl=a(M,Yl,da(a(f,"url",F))),ha=a(Gr,function(r){var e=aa(r);if(e.$)return be("Could not parse given string as a URL");var t=e.a;return G(t)},F),Xl=Qe(c([ha,a(f,"url",ha)])),Kl=ke(ze,Ql,a(f,"version",F),a(f,"license",F),a(f,"author",ki),a(f,"contributors",pa(ki)),a(f,"homepage",ha),a(f,"repository",Xl),a(f,"bugs",Zl)),Ei=$(function(r,e){if(e.$)return r;var t=e.a;return t}),rv=function(r){return{ae:a(Nr,a(f,"cssModules",J$),r),ay:a(Ei,0,a(Nr,a(f,"mode",Wl),r)),aj:a(Nr,a(f,"packageInfo",Kl),r),ak:a(Nr,a(f,"profile",Gl(rl)),r),am:a(Nr,a(f,"servers",pa(wi)),r),R:a(Nr,a(f,"translation",Ti),r),an:a(Ei,1,a(Nr,a(f,"vibrationApi",ql),r))}},Di=dr(function(r,e,t,n,o){return{E:n,H:t,D:e,x:o,K:r}}),ev=function(r){r:for(;;)if(r.b){var e=r.a,t=r.b,n=e.D;if(n.b){if(n.a===""&&!n.b.b)return B(e.x);var o=t;r=o;continue r}else return B(e.x)}else return P},ma=function(r){if(r.b){if(r.a===""&&!r.b.b)return _;var e=r.a,t=r.b;return a(O,e,ma(t))}else return _},tv=function(r){var e=a(He,"/",r);if(e.b&&e.a===""){var t=e.b;return ma(t)}else{var t=e;return ma(t)}},nv=$(function(r,e){if(e.$===1)return B(c([r]));var t=e.a;return B(a(O,r,t))}),Ci=Ws,ht=$(function(r,e){r:for(;;){if(e.$===-2)return P;var t=e.b,n=e.c,o=e.d,i=e.e,u=a(pi,r,t);switch(u){case 0:var s=r,v=o;r=s,e=v;continue r;case 1:return B(n);default:var s=r,v=i;r=s,e=v;continue r}}}),av=function(r){r:for(;;)if(r.$===-1&&r.d.$===-1){var e=r.d,t=e;r=t;continue r}else return r},Pi=function(r){if(r.$===-1&&r.d.$===-1&&r.e.$===-1)if(r.e.d.$===-1&&!r.e.d.a){var e=r.a,t=r.b,n=r.c,o=r.d;o.a;var i=o.b,u=o.c,s=o.d,v=o.e,l=r.e;l.a;var d=l.b,g=l.c,m=l.d;m.a;var b=m.b,A=m.c,k=m.d,E=m.e,D=l.e;return T(S,0,b,A,T(S,1,t,n,T(S,0,i,u,s,v),k),T(S,1,d,g,E,D))}else{var e=r.a,t=r.b,n=r.c,C=r.d;C.a;var i=C.b,u=C.c,s=C.d,v=C.e,U=r.e;U.a;var d=U.b,g=U.c,m=U.d,D=U.e;return T(S,1,t,n,T(S,0,i,u,s,v),T(S,0,d,g,m,D))}else return r},Si=function(r){if(r.$===-1&&r.d.$===-1&&r.e.$===-1)if(r.d.d.$===-1&&!r.d.d.a){var e=r.a,t=r.b,n=r.c,o=r.d;o.a;var i=o.b,u=o.c,s=o.d;s.a;var v=s.b,l=s.c,d=s.d,g=s.e,m=o.e,b=r.e;b.a;var A=b.b,k=b.c,E=b.d,D=b.e;return T(S,0,i,u,T(S,1,v,l,d,g),T(S,1,t,n,m,T(S,0,A,k,E,D)))}else{var e=r.a,t=r.b,n=r.c,C=r.d;C.a;var i=C.b,u=C.c,U=C.d,m=C.e,sr=r.e;sr.a;var A=sr.b,k=sr.c,E=sr.d,D=sr.e;return T(S,1,t,n,T(S,0,i,u,U,m),T(S,0,A,k,E,D))}else return r},ov=Yr(function(r,e,t,n,o,i,u){if(i.$===-1&&!i.a){i.a;var s=i.b,v=i.c,l=i.d,d=i.e;return T(S,t,s,v,l,T(S,0,n,o,d,u))}else{r:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var g=u.d;return g.a,Si(e)}else break r;else return u.a,u.d,Si(e);else break r;return e}}),un=function(r){if(r.$===-1&&r.d.$===-1){var e=r.a,t=r.b,n=r.c,o=r.d,i=o.a,u=o.d,s=r.e;if(i===1){if(u.$===-1&&!u.a)return u.a,T(S,e,t,n,un(o),s);var v=Pi(r);if(v.$===-1){var l=v.a,d=v.b,g=v.c,m=v.d,b=v.e;return T(qe,l,d,g,un(m),b)}else return re}else return T(S,e,t,n,un(o),s)}else return re},mt=$(function(r,e){if(e.$===-2)return re;var t=e.a,n=e.b,o=e.c,i=e.d,u=e.e;if(I(r,n)<0)if(i.$===-1&&i.a===1){i.a;var s=i.d;if(s.$===-1&&!s.a)return s.a,T(S,t,n,o,a(mt,r,i),u);var v=Pi(e);if(v.$===-1){var l=v.a,d=v.b,g=v.c,m=v.d,b=v.e;return T(qe,l,d,g,a(mt,r,m),b)}else return re}else return T(S,t,n,o,a(mt,r,i),u);else return a(iv,r,mo(ov,r,e,t,n,o,i,u))}),iv=$(function(r,e){if(e.$===-1){var t=e.a,n=e.b,o=e.c,i=e.d,u=e.e;if(N(r,n)){var s=av(u);if(s.$===-1){var v=s.b,l=s.c;return T(qe,t,v,l,i,un(u))}else return re}else return T(qe,t,n,o,i,a(mt,r,u))}else return re}),uv=$(function(r,e){var t=a(mt,r,e);if(t.$===-1&&!t.a){t.a;var n=t.b,o=t.c,i=t.d,u=t.e;return T(S,1,n,o,i,u)}else{var s=t;return s}}),cv=y(function(r,e,t){var n=e(a(ht,r,t));if(n.$)return a(uv,r,t);var o=n.a;return h(Ne,r,o,t)}),sv=$(function(r,e){var t=a(He,"=",r);if(t.b&&t.b.b&&!t.b.b.b){var n=t.a,o=t.b,i=o.a,u=Ci(n);if(u.$===1)return e;var s=u.a,v=Ci(i);if(v.$===1)return e;var l=v.a;return h(cv,s,nv(l),e)}else return e}),$v=function(r){if(r.$===1)return me;var e=r.a;return h(We,sv,me,a(He,"&",e))},lv=$(function(r,e){var t=r;return ev(t(T(Di,_,tv(e.cP),$v(e.cW),e.cm,rr)))}),vv=function(r){return function(e){var t=e.K,n=e.D,o=e.H,i=e.E,u=e.x;return c([T(Di,t,n,o,i,u(r(i)))])}},fv=function(r){if(r.$===1)return 4;switch(r.a){case"":return 4;case"about":return 1;case"config":return 2;case"randoms":return 3;case"timers":return 4;case"timers/new":return 5;default:return 0}},pv=vv(fv),Bi=function(r){return a(Rr,0,a(lv,pv,x(r,{cP:""})))},ba=function(r){return{$:11,a:r}},bt=function(r){return{$:10,a:r}},cn=To,ga={ap:"0",at:"1",ax:"0",G:""},dv={$:0},X=function(r){return hr(h(de,$(function(e,t){var n=e.a,o=e.b;return h(Qc,n,o,t)}),Gc(),r))},H=hr,hv=function(r){var e=r.a,t=r.b;return p(e,t)},mv=function(r){var e=r.a,t=r.b;return X(c([p("title",H(e)),p("options",X(a(Vr,hv,t)))]))},bv=function(r){switch(r.$){case 0:return X(c([p("type",H("CheckAvailability"))]));case 1:return X(c([p("type",H("RequestPermission"))]));default:var e=r.a;return X(c([p("type",H("Send")),p("notification",mv(e))]))}},gv=ct("sendNotificationsEvent",rr),wa=function(r){return gv(bv(r))},wv=p({aN:0},wa(dv)),_v={$:0},Av=function(r){switch(r){case 0:return X(c([p("type",H("SendLockRequest"))]));case 1:return X(c([p("type",H("SendReleaseRequest"))]));default:return X(c([p("type",H("SendStatusRequest"))]))}},jv=ct("sendAppWakeLockEvent",rr),_a=function(r){return jv(Av(r))},yv=p(_v,_a(2)),Ye=ko,Tv=$(function(r,e){var t=yv,n=t.a,o=t.b,i=wv,u=i.a,s=i.b;return p({n:r,O:p(ga,mr(0)),W:u,Q:e,ad:n},cn(c([a(Ye,bt,o),a(Ye,ba,s)])))}),V=cn(_),kv=y(function(r,e,t){var n=rv(r),o=C$(n.ay),i=ut(n.ae,n.am,n.aj);if(i.a.$){var D=i.a.a;return p(o(P$(Ie(D))),V)}else if(i.b.$){var D=i.b.a;return p(o(V$(Ie(D))),V)}else if(i.c.$){var D=i.c.a;return p(o(B$(Ie(D))),V)}else{var u=i.a.a,s=i.b.a,v=i.c.a,l=n.R;if(l.$){var D=l.a;return p(o(S$(Ie(D))),V)}else{var d=l.a;if(s.b){var g=s.a,m={ae:u,bh:t,cK:Lr(0),aj:v,cS:{an:n.an},R:d,bK:e},b={ak:function(){var C=n.ak;if(!C.$&&!C.a.$){var U=C.a.a;return U}else return{cU:yi,cX:P,c0:g,c8:0,dc:_}}(),am:s},A=a(Tv,b,m),k=A.a,E=A.b;return p(a(rn,Bi(e),k),a(Ye,en,E))}else return p(o(R$),V)}}}),Ev={$:4},Dv=function(r){return{$:2,a:r}},Aa=To,ja=ko,Cv=Aa(_),Vi=function(r){return{$:1,a:r}},Pv=function(r){return{$:0,a:r}},Sv=a(Gr,function(r){switch(r){case"RecievedTranslation":return a(M,Pv,a(f,"translation",Ti));case"FailedToFetch":return a(M,Vi,a(f,"error",F));default:return be("[App.Translation] Unknown event type: "+r)}},a(f,"type",F)),sn=Pc,Bv=Hn("recieveAppTranslationEvent",sn),Vv=function(r){return Bv(function(e){var t=a(Nr,Sv,e);if(t.$){var o=t.a;return r(Vi(Ie(o)))}else{var n=t.a;return r(n)}})},Rv=function(r){return{$:5,a:r}},Ri=$(function(r,e){return{$:0,a:r,b:e}}),Li=$(function(r,e){return{bp:e,bH:r}}),Lv=Br(a(Li,me,me)),xv=$(function(r,e){var t=r.a,n=r.b,o=a(ht,t,e);if(o.$===1)return h(Ne,t,c([n]),e);var i=o.a;return h(Ne,t,a(O,n,i),e)}),Mv=es,xi=y(function(r,e,t){r:for(;;){if(t.$===-2)return e;var n=t.b,o=t.c,i=t.d,u=t.e,s=r,v=h(r,n,o,h(xi,r,e,i)),l=u;r=s,e=v,t=l;continue r}}),Jv=it(function(r,e,t,n,o,i){var u=y(function(d,g,m){r:for(;;){var b=m.a,A=m.b;if(b.b){var k=b.a,E=k.a,D=k.b,C=b.b;if(I(E,d)<0){var U=d,sr=g,ye=p(C,h(r,E,D,A));d=U,g=sr,m=ye;continue r}else return I(E,d)>0?p(b,h(t,d,g,A)):p(C,W(e,E,D,g,A))}else return p(b,h(t,d,g,A))}}),s=h(xi,u,p(Yn(n),i),o),v=s.a,l=s.b;return h(de,$(function(d,g){var m=d.a,b=d.b;return h(r,m,b,g)}),l,v)}),Fv=is,Ov=$(function(r,e){return{$:0,a:r,b:e}}),Hv=Ns,Iv=xn,Mi=y(function(r,e,t){if(e.b){var n=e.a,o=e.b,i=Iv(a(Hv,n,a(Fv,r,n))),u=function(s){return h(Mi,r,o,h(Ne,n,s,t))};return a(qr,u,i)}else return Br(t)}),Uv=y(function(r,e,t){var n=t.bp,o=y(function(m,b,A){var k=A.a,E=A.b,D=A.c;return ut(k,E,a(qr,function(C){return D},Mv(b)))}),i=h(de,xv,me,e),u=y(function(m,b,A){var k=A.a,E=A.b,D=A.c;return ut(a(O,m,k),E,D)}),s=Z(function(m,b,A,k){var E=k.a,D=k.b,C=k.c;return ut(E,h(Ne,m,A,D),C)}),v=Zr(Jv,u,s,o,i,n,ut(_,me,Br(0))),l=v.a,d=v.b,g=v.c;return a(qr,function(m){return Br(a(Li,i,m))},a(qr,function(m){return h(Mi,r,l,d)},g))}),Wv=qs(Lr),qv=y(function(r,e,t){var n=a(ht,e,t.bH);if(n.$===1)return Br(t);var o=n.a,i=function(u){return vi(a(Vr,function(s){return a(fi,r,s(u))},o))};return a(qr,function(u){return Br(t)},a(qr,i,Wv))}),Nv=y(function(r,e,t){return r(e(t))}),Gv=$(function(r,e){var t=e.a,n=e.b;return a(Ri,t,a(Nv,r,n))});ir.Time=yo(Lv,Uv,qv,0,Gv);var Qv=Ut("Time"),zv=$(function(r,e){return Qv(a(Ri,r,e))}),Yv={$:1},Zv=function(r){return{$:0,a:r}},Xv=a(Gr,function(r){switch(r){case"PlatformNotSupported":return G(1);case"RequiresPermission":return G(2);case"PermissionRequestDenied":return G(3);case"Available":return G(5);case"RequestingPermission":return G(4);default:return be("[Notifications] Unknown availability type: "+r)}},F),Kv=a(Gr,function(r){return r==="RecieveAvailability"?a(M,rr,a(f,"availability",Xv)):be("[Notifications] Unknown event type: "+r)},a(f,"type",F)),rf=Hn("recieveNotificationsEvent",sn),ef=function(r){return rf(function(e){var t=a(Nr,Kv,e);if(t.$)return Yv;var n=t.a;return Zv(n)})},tf=function(r){return{$:6,a:r}},nf=function(r){return{$:1,a:r}},af={$:4},of={$:0},uf={$:7},cf={$:5},sf=function(r){return{$:4,a:r}},$f=function(r){return{$:1,a:r}},lf={$:2},vf={$:3},ff={$:0},pf=a(Gr,function(r){switch(r){case"RecieveUnsupportedStatus":return G(ff);case"RecieveInitiallyLocked":return a(M,$f,a(f,"locked",tn));case"RecieveLocked":return G(lf);case"RecieveReleased":return G(vf);case"RecieveError":return a(M,sf,a(f,"error",F));default:return be("[App.WakeLock] Unknown incoming event type: "+r)}},a(f,"type",F)),df=Hn("recieveAppWakeLockEvent",sn),hf=function(r){return df(function(e){var t=a(Nr,pf,e);if(t.$)return uf;switch(t.a.$){case 0:return t.a,of;case 1:var n=t.a.a;return nf(n?1:3);case 2:return t.a,af;case 3:return t.a,cf;default:var o=t.a.a;return tf(o)}})},mf=function(r){return Aa(c([a(ja,bt,hf(r.ad)),a(ja,ba,ef(r.W)),a(zv,500,Rv)]))},bf=function(r){return Aa(c([Vv(function(e){if(e.$)return Ev;var t=e.a;return Dv(t)}),function(){if(r.$===1){var e=r.b;return a(ja,en,mf(e))}else return Cv}()]))},gf=_c,ya=Us,Ji=Os,wf=$(function(r,e){if(r.$===1)return e;var t=r.a;return e+(":"+vr(t))}),Fi=y(function(r,e,t){if(e.$===1)return t;var n=e.a;return Ir(t,Ir(r,n))}),$n=function(r){var e=function(){var t=r.cV;return t?"https://":"http://"}();return h(Fi,"#",r.cm,h(Fi,"?",r.cW,Ir(a(wf,r.cT,Ir(e,r.co)),r.cP)))},xr=function(r){return{$:6,a:r}},_f={$:2},Af={$:3},gt=function(r){return{$:19,a:r}},Ta=$(function(r,e){return{$:0,a:r,b:e}}),jf=function(r){return a(Ta,"body",H(r))},yf=$(function(r,e){r:for(;;)if(e.b){var t=e.a,n=e.b;if(N(t.F,r.F))return B(t);var o=r,i=n;r=o,e=i;continue r}else return P}),Oi=$(function(r,e){var t=p(r,e);if(t.a.b)if(t.b.b){var n=t.a,o=n.a,i=n.b,u=t.b,s=u.a,v=u.b;return a(O,o,a(O,s,a(Oi,i,v)))}else{var l=t.a,o=l.a,i=l.b;return a(O,o,i)}else if(t.b.b){var d=t.b,s=d.a,v=d.b;return a(O,s,v)}else return _}),cr=$(function(r,e){var t=e;return r.b?a(pe,"",a(Oi,a(He,"%s",t),r)):t}),ka=1e3,Ea=60*ka,Da=60*Ea,Hi=24*Da,Tf=function(r){var e=r.b7,t=r.cp,n=r.cx,o=r.c$;return e*Hi+t*Da+n*Ea+o*ka},ln=function(r){switch(r){case 0:return"#";case 1:return"#about";case 2:return"#config";case 3:return"#randoms";case 4:return"#timers";default:return"#timers/new"}},kf=function(r){return a(Ta,"lang",H(r))},Ze=10,Ca=$(function(r,e){return I(r,e)<0?r:e}),Ef=$(function(r,e){return{$:0,a:r,b:e}}),Df=Ef,Cf=$(function(r,e){var t=e.a;return p(t,r)}),Mr=hr,Ii=function(r){return H(r.b3)},Pa=function(r){return!r},Pf=function(r){return X(c([p("version",H("3")),p("feedbackVibration",Mr(Pa(r.a0))),p("language",Ii(r.be)),p("inAppNotification",Mr(Pa(r.au))),p("browserNotification",Mr(Pa(r.aR)))]))},ge=hr,z=function(r){var e=r;return e},Sf=function(r){return X(c([p("remains",ge(r.Z)),p("loggedAt",ge(z(r.af)))]))},Bf=function(r){var e=r;return ge(e)},Vf=function(r){return X(c([p("id",H(r.F)),p("tzOffset",Bf(r.de)),p("name",H(r.G)),p("shortName",H(r.bB))]))},Rf=function(r){var e=r;return ge(e)},Lf=function(r){var e=r;return H(e)},xf=function(r){switch(r.$){case 0:return X(c([p("type",H("Idle"))]));case 1:var e=r.a;return X(c([p("type",H("Running")),p("startedAt",ge(z(e)))]));default:var e=r.a,t=r.b;return X(c([p("type",H("Completed")),p("startedAt",ge(z(e))),p("completedAt",ge(z(t)))]))}},Mf=function(r){return X(c([p("version",H("1.0")),p("id",Lf(r.F)),p("name",H(r.G)),p("duration",Rf(r.aY)),p("state",xf(r.C))]))},wt=function(r){switch(r){case 0:return"system";case 1:return"dark";default:return"light"}},Jf=function(r){return H(wt(r))},Ff=Yc,Of=$(function(r,e){if(e.$)return Ff;var t=e.a;return r(t)}),Ui=$(function(r,e){return hr(h(de,zc(r),Nc(),e))}),Hf=function(r){return X(c([p("server",Vf(r.c0)),p("theme",Jf(r.c8)),p("randomEvent",a(Of,Sf,r.cX)),p("preference",Pf(r.cU)),p("timers",a(Ui,Mf,r.dc))]))},If=function(r){var e=r;return X(c([p("type",H("PersistProfile")),p("profile",Hf(e))]))},Uf=ct("sendAppProfileEvent",rr),Wf=function(r){return Uf(If(r))},qf=function(r){return Wf(r)},Nf=function(r){return vr(z(r))},Wi=function(r){return p(r,0)},Gf=y(function(r,e,t){r:for(;;){if(e<=0)return r;var n=a(O,t,r),o=e-1,i=t;r=n,e=o,t=i;continue r}}),Qf=$(function(r,e){return h(Gf,_,r,e)}),zf=$(function(r,e){return a(Qf,e,r)}),Yf=function(r){var e=r;return X(c([p("type",H("RequestTranslation")),p("lang",Ii(e))]))},Zf=ct("sendAppTranslationEvent",rr),Xf=function(r){return Zf(Yf(r))},Kf={$:1},rp=wa(Kf),ep=function(r){return{$:2,a:r}},tp=function(r){return wa(ep(r))},np=jo,_t=function(r){var e=r;return e},ap=$(function(r,e){var t=e.C;if(t.$===1){var n=t.a,o=z(n)+_t(e.aY);return I(z(r),o)>-1?x(e,{C:a(_i,n,Lr(o))}):e}else return e}),op=mc,ip=$(function(r,e){if(r.$)return p(e,V);var t=r.a;return p(x(e,{aN:t}),V)}),up=function(r){return{$:2,a:r}},cp=function(r){return{$:3,a:r}},qi={$:1},sp={$:0},$p={$:1},Be=$(function(r,e){return{$:2,a:r,b:e}}),lp=$(function(r,e){var t=p(r,e);r:for(;;)switch(t.b.$){case 0:switch(t.a.$){case 0:return t.a,t.b,p(qi,V);case 1:var n=t.a.a;return t.b,p(a(Be,n,P),V);default:break r}case 2:switch(t.a.$){case 2:if(t.b.a===3){t.a;var o=t.b;return o.a,p(a(Be,0,B(sp)),_a(0))}else break r;case 3:if(t.b.a===1){t.a;var i=t.b;return i.a,p(a(Be,2,B($p)),_a(1))}else break r;case 4:if(t.b.a)break r;t.a;var u=t.b;return u.a,p(a(Be,1,P),V);case 5:return t.a,t.b,p(a(Be,3,P),V);case 6:switch(t.b.a){case 0:var s=t.a.a,v=t.b;return v.a,p(a(Be,3,B(up(s))),V);case 2:var s=t.a.a,l=t.b;return l.a,p(a(Be,1,B(cp(s))),V);default:break r}default:break r}default:break r}return p(e,V)}),vp=$(function(r,e){return x(e,{n:r(e.n)})}),we=function(r){return vp(function(e){return x(e,{ak:r(e.ak)})})},Sa=function(r){return we(function(e){return x(e,{cU:r(e.cU)})})},Ar=sc,Ni=function(r){return!a(Ar,4,r)&&!!a(Ar,100,r)||!a(Ar,400,r)},Ba=$(function(r,e){var t=Ni(r)?1:0;switch(e){case 0:return 0;case 1:return 31;case 2:return 59+t;case 3:return 90+t;case 4:return 120+t;case 5:return 151+t;case 6:return 181+t;case 7:return 212+t;case 8:return 243+t;case 9:return 273+t;case 10:return 304+t;default:return 334+t}}),At=$(function(r,e){return ta(r/e)}),jt=function(r){var e=r-1,t=a(At,e,4)-a(At,e,100)+a(At,e,400);return 365*e+t},Va=$(function(r,e){switch(e){case 0:return 31;case 1:return Ni(r)?29:28;case 2:return 31;case 3:return 30;case 4:return 31;case 5:return 30;case 6:return 31;case 7:return 31;case 8:return 30;case 9:return 31;case 10:return 30;default:return 31}}),Ra=function(r){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;case 6:return 7;case 7:return 8;case 8:return 9;case 9:return 10;case 10:return 11;default:return 12}},La=function(r){var e=a(Pe,1,r);switch(e){case 1:return 0;case 2:return 1;case 3:return 2;case 4:return 3;case 5:return 4;case 6:return 5;case 7:return 6;case 8:return 7;case 9:return 8;case 10:return 9;case 11:return 10;default:return 11}},fp=y(function(r,e,t){r:for(;;){var n=a(Va,r,e),o=Ra(e);if(o<12&&I(t,n)>0){var i=r,u=La(o+1),s=t-n;r=i,e=u,t=s;continue r}else return{b7:t,bg:e,bS:r}}}),vn=$(function(r,e){return p(a(At,r,e),a(Ar,e,r))}),fn=function(r){var e=r,t=a(vn,e,146097),n=t.a,o=t.b,i=a(vn,o,36524),u=i.a,s=i.b,v=a(vn,s,1461),l=v.a,d=v.b,g=a(vn,d,365),m=g.a,b=g.b,A=b?1:0;return n*400+u*100+l*4+m+A},pp=function(r){var e=r,t=fn(e);return{aC:e-jt(t),bS:t}},Gi=function(r){var e=r,t=pp(e);return h(fp,t.bS,0,t.aC)},xa=y(function(r,e,t){var n=t;switch(r){case 0:return h(xa,1,12*e,n);case 1:var o=Gi(n),i=12*(o.bS-1)+(Ra(o.bg)-1)+e,u=La(a(Ar,12,i)+1),s=a(At,i,12)+1;return jt(s)+a(Ba,s,u)+a(Ca,o.b7,a(Va,s,u));case 2:return n+7*e;default:return n+e}}),dp=y(function(r,e,t){return I(t,r)<0?r:I(t,e)>0?e:t}),hp=y(function(r,e,t){return jt(r)+a(Ba,r,e)+h(dp,1,a(Va,r,e),t)}),pn=$(function(r,e){return ta(r/e)}),mp=y(function(r,e,t){r:for(;;)if(t.b){var n=t.a,o=t.b;if(I(n.c1,e)<0)return e+n.b;var i=r,u=e,s=o;r=i,e=u,t=s;continue r}else return e+r}),yt=$(function(r,e){var t=r.a,n=r.b;return h(mp,t,a(pn,z(e),6e4),n)}),Ma=function(r){var e=a(pn,r,60*24)+719468,t=(e>=0?e:e-146096)/146097|0,n=e-t*146097,o=(n-(n/1460|0)+(n/36524|0)-(n/146096|0))/365|0,i=n-(365*o+(o/4|0)-(o/100|0)),u=(5*i+2)/153|0,s=u+(u<10?3:-9),v=o+t*400;return{b7:i-((153*u+2)/5|0)+1,bg:s,bS:v+(s<=2?1:0)}},bp=$(function(r,e){return Ma(a(yt,r,e)).b7}),gp=$(function(r,e){var t=Ma(a(yt,r,e)).bg;switch(t){case 1:return 0;case 2:return 1;case 3:return 2;case 4:return 3;case 5:return 4;case 6:return 5;case 7:return 6;case 8:return 7;case 9:return 8;case 10:return 9;case 11:return 10;default:return 11}}),wp=$(function(r,e){return Ma(a(yt,r,e)).bS}),Ve=$(function(r,e){return h(hp,a(wp,r,e),a(gp,r,e),a(bp,r,e))}),_p=function(r){var e=r;return e},Qi=function(r){var e=_p(r)-719163;return e*864e5},dn=Z(function(r,e,t,n){return r*36e5+e*6e4+t*1e3+n}),Tt=$(function(r,e){return a(Ar,24,a(pn,a(yt,r,e),60))}),Ap=$(function(r,e){return a(Ar,1e3,z(e))}),Ja=$(function(r,e){return a(Ar,60,a(yt,r,e))}),zi=$(function(r,e){return a(Ar,60,a(pn,z(e),1e3))}),Fa=$(function(r,e){return W(dn,a(Tt,r,e),a(Ja,r,e),a(zi,r,e),a(Ap,r,e))}),Oa=$(function(r,e){var t=z(e),n=Qi(a(Ve,r,e))+a(Fa,r,e);return(n-t)/6e4|0}),Xe=y(function(r,e,t){var n=Qi(e)+t,o=a(Oa,r,Lr(n)),i=Lr(n-o*6e4),u=a(Oa,r,i);if(N(o,u))return i;var s=Lr(n-u*6e4),v=a(Oa,r,s);return N(u,v)?s:i}),Yi=Z(function(r,e,t,n){r:for(;;)switch(r){case 15:return Lr(z(n)+e);case 14:var o=15,i=e*1e3,u=t,s=n;r=o,e=i,t=u,n=s;continue r;case 13:var o=15,i=e*6e4,u=t,s=n;r=o,e=i,t=u,n=s;continue r;case 12:var o=15,i=e*36e5,u=t,s=n;r=o,e=i,t=u,n=s;continue r;case 11:return h(Xe,t,h(xa,3,e,a(Ve,t,n)),a(Fa,t,n));case 2:return h(Xe,t,h(xa,1,e,a(Ve,t,n)),a(Fa,t,n));case 0:var o=2,i=e*12,u=t,s=n;r=o,e=i,t=u,n=s;continue r;case 1:var o=2,i=e*3,u=t,s=n;r=o,e=i,t=u,n=s;continue r;case 3:var o=11,i=e*7,u=t,s=n;r=o,e=i,t=u,n=s;continue r;default:var o=11,i=e*7,u=t,s=n;r=o,e=i,t=u,n=s;continue r}}),jp=function(r){var e=r,t=a(Ar,7,e);if(t){var n=t;return n}else return 7},yp=function(r){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;default:return 7}},_e=$(function(r,e){return a(Ar,7,jp(e)+7-yp(r))}),Zi=$(function(r,e){return jt(r)+a(Ba,r,e)+1}),Tp=function(r){return jt(r)+1},Xi=y(function(r,e,t){return e(r(t))}),Ki=a(Xi,Gi,function(r){return r.bg}),kp=function(r){return(Ra(r)+2)/3|0},Ep=a(Xi,Ki,kp),Dp=function(r){return La(r*3-2)},Cp=$(function(r,e){var t=e;switch(r){case 0:return Tp(fn(e));case 1:return a(Zi,fn(e),Dp(Ep(e)));case 2:return a(Zi,fn(e),Ki(e));case 3:return t-a(_e,0,e);case 4:return t-a(_e,0,e);case 5:return t-a(_e,1,e);case 6:return t-a(_e,2,e);case 7:return t-a(_e,3,e);case 8:return t-a(_e,4,e);case 9:return t-a(_e,5,e);case 10:return t-a(_e,6,e);default:return e}}),jr=y(function(r,e,t){return h(Xe,e,a(Cp,r,a(Ve,e,t)),0)}),Pp=y(function(r,e,t){switch(r){case 15:return t;case 14:return h(Xe,e,a(Ve,e,t),W(dn,a(Tt,e,t),a(Ja,e,t),a(zi,e,t),0));case 13:return h(Xe,e,a(Ve,e,t),W(dn,a(Tt,e,t),a(Ja,e,t),0,0));case 12:return h(Xe,e,a(Ve,e,t),W(dn,a(Tt,e,t),0,0,0));case 11:return h(jr,11,e,t);case 2:return h(jr,2,e,t);case 0:return h(jr,0,e,t);case 1:return h(jr,1,e,t);case 3:return h(jr,3,e,t);case 4:return h(jr,4,e,t);case 5:return h(jr,5,e,t);case 6:return h(jr,6,e,t);case 7:return h(jr,7,e,t);case 8:return h(jr,8,e,t);case 9:return h(jr,9,e,t);default:return h(jr,10,e,t)}}),hn=a(Ov,0,_),Sp=$(function(r,e){var t=function(){var o=e.de,i=o;return a(Ar,24,4-i)}(),n=I(a(Tt,hn,r),t)>-1?1:0;return W(Yi,12,t,hn,h(Pp,11,hn,W(Yi,11,n,hn,r)))}),Bp=y(function(r,e,t){return I(z(e),z(a(Sp,t.af,r)))>-1?{af:e,Z:Ze}:t}),Ha=$(function(r,e){return a(we,function(t){return x(t,{cX:r(a(br,function(n){return h(Bp,t.c0,e.Q.cK,n)},t.cX))})},e)}),Vp=$(function(r,e){return x(e,{Q:r(e.Q)})}),ru=$(function(r,e){return we(function(t){return x(t,{dc:a(Vr,function(n){return N(n.F,e.F)?r(n):n},t.dc)})})}),eu=function(r){if(r.b)if(r.b.b){var n=r.a,t=n.a,o=n.b,i=r.b;return a(O,t,a(O,o,eu(i)))}else{var e=r.a,t=e.a;return c([t])}else return _},tu=function(r){return a(Ui,ge,eu(r))},Rp=function(r){return a(Ta,"vibrate",tu(r))},Lp=function(r){var e=r;return X(c([p("type",H("Vibrate")),p("pattern",tu(e))]))},xp=ct("sendVibrationEvent",rr),Mp=function(r){return xp(Lp(r))},Jr=$(function(r,e){var t=e.a,n=e.b,o=a(nu,r,t),i=o.a,u=o.b;return p(i,cn(c([n,u])))}),nu=$(function(r,e){r:for(;;)switch(r.$){case 0:var t=r.a;return a(Jr,xr(e),p(h(ru,function(L){return x(L,{C:Ai(e.Q.cK)})},t,e),V));case 1:var t=r.a;return a(Jr,xr(e),p(h(ru,function(L){return x(L,{C:fa})},t,e),V));case 2:var t=r.a;return a(Jr,xr(e),p(a(we,function(L){return x(L,{dc:a($a,function(Q){return!N(Q.F,t.F)},L.dc)})},e),V));case 19:var n=r.a,o=n(e.O.a),i=function(){if(op(o.G)==="")return mr(0);var L=a(Rr,0,Xt(o.ax)),Q=a(Rr,0,Xt(o.at)),$r=a(Rr,0,Xt(o.ap)),Ft=Tf({b7:$r,cp:Q,cx:L,c$:0}),vo=_t(Ft);return vo<0?mr(1):vo?_r(p(o.G,Ft)):mr(2)}();return p(x(e,{O:p(o,i)}),V);case 20:var u=gt(function(L){return ga}),s=e;r=u,e=s;continue r;case 21:var v=e.O;if(v.b.$)return p(e,V);var l=v.b.a,d=l.a,g=l.b,t={aY:g,F:Nf(e.Q.cK),G:d,C:fa};return a(Jr,xr(e),p(a(we,function(Q){return x(Q,{dc:a(O,t,Q.dc)})},x(e,{O:p(ga,mr(0))})),a(Ji,e.Q.bh,ln(4))));case 3:return a(Jr,xr(e),p(a(Ha,function(L){if(L.$)return B({af:e.Q.cK,Z:Ze-1});var Q=L.a.Z;return Q?B({af:e.Q.cK,Z:Q-1}):L},e),V));case 4:return p(a(Ha,br(function(L){var Q=L.Z,$r=L.af;return{af:$r,Z:a(Ca,Q+1,Ze)}}),e),V);case 5:var m=r.a;return a(Jr,xr(e),p(a(Ha,rr,a(we,function(L){return x(L,{dc:a(Vr,ap(m),L.dc)})},a(Vp,function(L){return x(L,{cK:m})},e))),V));case 14:var b=r.a;return a(Jr,xr(e),p(a(we,function(L){return x(L,{c8:b})},e),V));case 22:var A=r.a;return a(Jr,xr(e),p(a(we,function(L){return x(L,{c0:A})},e),V));case 15:var k=r.a;return a(Jr,xr(e),p(a(Sa,function(L){return x(L,{be:k})},e),Xf(k)));case 16:var E=r.a;return a(Jr,xr(e),p(a(Sa,function(L){return x(L,{a0:E})},e),V));case 8:var D=r.a,C=e.n.ak.cU.a0;return C?p(e,V):p(e,Mp(D));case 6:var U=r.a;return p(e,N(U.n.ak,e.n.ak)?V:qf(e.n.ak));case 7:var U=r.a;if(e.n.ak.cU.aR===1)return p(e,V);var sr=$(function(Q,$r){return a(cr,Q,$r(e.Q.R.cJ.da))}),ye=a($a,function(Q){var $r=p(Q.C,a(yf,Q,U.n.ak.dc));if($r.a.$===2&&!$r.b.$){$r.a;var Ft=$r.b.a;return!N(Ft.C,Q.C)}else return!1},e.n.ak.dc),ce=cn(a(Vr,function(Q){return tp(a(Df,a(sr,c([Q.G]),function($r){return $r.J}),c([jf(a(sr,c([Q.G]),function($r){return $r.aP})),kf(e.n.ak.cU.be.b3),Rp(a(zf,a(Cf,8,Wi(8)),3))])))},ye));return p(e,ce);case 10:var ie=r.a,Fe=a(lp,ie,e.ad),Jt=Fe.a,ue=Fe.b;return p(x(e,{ad:Jt}),a(Ye,bt,ue));case 12:var u=bt(_f),s=e;r=u,e=s;continue r;case 13:var u=bt(Af),s=e;r=u,e=s;continue r;case 11:var ie=r.a,at=a(ip,ie,e.W),ot=at.a,ce=at.b;return p(x(e,{W:ot}),a(Ye,ba,ce));case 17:var qu=r.a;return a(Jr,xr(e),p(a(Sa,function(L){return x(L,{aR:qu})},e),V));case 18:return p(e,rp);case 9:var Nu=r.a,Gu=r.b;return p(e,a(ft,function(L){return Gu},np(Nu)));default:return p(e,V)}}),Jp=$(function(r,e){var t=p(r,e);r:for(;;)switch(t.a.$){case 0:if(t.a.a.$===1){var n=t.a.a.a;return p(e,ya(n))}else if(t.b.$===1){var o=t.a.a,i=t.b,u=i.b.Q;if(o.$){var n=o.a;return p(e,ya(n))}else{var n=o.a;return a(gf,".txt",n.cP)?p(e,ya($n(n))):p(e,a(Ji,u.bh,$n(n)))}}else break r;case 1:if(t.b.$===1){var n=t.a.a,s=t.b,v=s.b,l=v,u=l.Q;return p(a(rn,Bi(n),x(v,{Q:x(u,{bK:n})})),V)}else break r;case 2:if(t.b.$===1){var d=t.a.a,g=t.b,m=g.a,v=g.b,b=v,u=b.Q;return p(a(rn,m,x(v,{Q:x(u,{R:d})})),V)}else break r;case 3:if(t.b.$===1){var A=t.a.a,k=t.b,m=k.a,v=k.b,E=a(nu,A,v),D=E.a,C=E.b;return p(a(rn,m,D),a(Ye,en,C))}else break r;default:break r}return p(e,V)}),Fp=$(function(r,e){return a(So,bs(r),Vo(e))}),er=Fp,Fr=$(function(r,e){return a(Wn,r,H(e))}),nr=Fr("className"),mn=q("code"),Op=q("h1"),Hp=function(r){return q(Bo(r))},ar=Hp,Qr=q("p"),kt=q("pre"),K=q("span"),Ip=Un,w=Ip,Up=function(r){switch(r.$){case 0:return"E-201";case 1:return"E-101";case 2:return"E-102";case 3:return"E-103";case 4:return"E-104";default:return"E-999"}},Wp=$(function(r,e){return e+(" ("+(Up(r)+")"))}),qp=$(function(r,e){var t=Wp(e),n=function(){var u=p(r,e);r:for(;;)if(u.a===1)switch(u.b.$){case 1:u.a;var s=u.b.a;return p("Failed to decode CSS Modules object",c([a(Qr,c([nr("app--error--description")]),c([w("You passed an invalid CSS Modules object via flag. Check the "),a(mn,_,c([w("cssModules")])),w(" property.")])),a(kt,c([nr("app--error--details")]),c([w(s)]))]));case 0:return u.a,u.b,p("No game servers available",c([a(Qr,c([nr("app--error--description")]),c([w("You passed an empty list of game servers. Please include more than or equal to one server configuration in "),a(mn,_,c([w("servers")])),w(" property.")]))]));case 2:u.a;var s=u.b.a;return p("Failed to decode server list",c([a(Qr,c([nr("app--error--description")]),c([w("You passed an invalid server list via flag. Check the "),a(mn,_,c([w("servers")])),w(" property.")])),a(kt,c([nr("app--error--details")]),c([w(s)]))]));case 3:u.a;var s=u.b.a;return p("Failed to decode package.json",c([a(Qr,c([nr("app--error--description")]),c([w("Cannot parse contents of the package.json file. See details below.")])),a(kt,c([nr("app--error--details")]),c([w(s)]))]));case 4:u.a;var s=u.b.a;return p("Failed to decode initial translation dictionary",c([a(Qr,c([nr("app--error--description")]),c([w("Cannot parse `defaultTranslation` flag. Please make sure you passed it correctly.")])),a(kt,c([nr("app--error--details")]),c([w(s)]))]));default:break r}else{if(u.b.$===5)break r;return u.a,p("Failed to launch application",c([a(Qr,c([nr("app--error--description")]),c([w("Sorry, application has an unexpected error during booting process. This is due to misconfiguration slipped into production code.")]))]))}return u.b,p("Failed to launch application",c([a(Qr,c([nr("app--error--description")]),c([w("Sorry, application encountered an unexpected error during booting process.")]))]))}(),o=n.a,i=n.b;return{aP:c([h(ar,"turtle-design-system",c([nr("app--error")]),c([h(ar,"turtle-snackbar",c([a(er,"severity","danger")]),a(O,a(Op,c([nr("app--error--title")]),c([h(ar,"turtle-attention-icon",c([nr("app--error--icon")]),_),a(K,_,c([w(o)]))])),i))]))]),J:t("Failed to launch application")}}),Np=function(r){var e=r;return e},Re=y(function(r,e,t){return nr(Np(a(Rr,"",a(ht,t,a(Rr,me,a(ht,r,e))))))}),Gp=q("nav"),Qp=y(function(r,e,t){var n=r.Q,o=a(Re,"Views.Layout",n.ae);return c([h(ar,"main",c([o("main")]),t),a(Gp,c([o("nav")]),c([e]))])}),zp=ms,Yp=zp,Zp={$:13},Xp={$:12},yr=q("a"),Kp=a(er,"slot","action"),rd=$(function(r,e){return a(Wn,gs(r),Vo(e))}),Ae=rd,au=function(r){return a(Ae,"active",Mr(r))},fr=ar("adw-button"),Tr=q("button"),ou=$(function(r,e){return a(Wn,r,Mr(e))}),Et=ou("disabled"),iu=ar("adw-dropdown"),kr=function(r){return a(Fr,"href",ws(r))},ed=function(r){switch(r){case 0:return"timer";case 1:return"backpack";case 2:return"check";case 3:return"dots-vertical";case 4:return"trash";default:return"pencil2"}},Ke=$(function(r,e){return h(ar,"radix-icons-"+ed(r),e,_)}),uu=function(r){return a(Ae,"iconOnly",Mr(r))},cu=a(er,"slot","icon"),su=a(er,"slot","icon"),or=Fr("id"),$u=function(r){return a(Ae,"loading",Mr(r))},lu=ar("adw-menu"),bn=ar("adw-menu-item"),td=ar("adw-nav"),vu=ar("adw-nav-item"),nd=function(r){return{$:0,a:r}},Ia=Po,Ua=$(function(r,e){return a(Ia,r,nd(e))}),ee=function(r){return a(Ua,"click",G(r))},fu=Fr("title"),pu=a(er,"slot","trigger"),ad=$(function(r,e){var t=function(n){return a(cr,_,n(e.Q.R))};return a(td,_,c([a(vu,c([au(r===4)]),c([a(Ke,0,c([su])),a(yr,c([kr(ln(4))]),c([w("Timer")]))])),a(vu,c([au(r===3)]),c([a(Ke,1,c([su])),a(yr,c([kr(ln(3))]),c([w("Rewards")]))])),a(iu,c([Kp]),c([a(fr,c([pu,uu(!0)]),c([a(Tr,_,c([a(Ke,3,_)]))])),a(lu,c([or("app_nav_menu")]),c([a(bn,function(){var n=e.ad;r:for(;;)switch(n.$){case 2:switch(n.a){case 1:return n.a,c([Et(!1),ee(Zp)]);case 3:return n.a,c([Et(!1),ee(Xp)]);default:break r}case 1:return c([Et(!0)]);default:break r}return c([$u(!0)])}(),c([function(){var n=e.ad;return n.$===2&&n.a===1?(n.a,a(Ke,2,c([cu]))):w("")}(),a(Tr,c([N(e.ad,qi)?fu(t(function(n){return n.bX.di})):nr("")]),c([w(t(function(n){return n.bX.ad}))]))])),a(bn,_,c([a(yr,c([kr(ln(2))]),c([w(t(function(n){return n.bX.cU}))]))])),a(bn,_,c([a(yr,c([kr("#about")]),c([w(t(function(n){return n.bX.bT}))]))]))]))]))]))}),Le=function(r){var e=r.Q;return a(Re,"Views.About",e.ae)},od=q("dl"),id=q("dt"),rt=$(function(r,e){var t=Le(r);return a(id,c([t("label")]),c([w(e)]))}),ud=q("dd"),et=function(r){return ud(c([a(Le,r,"value")]))},cd=function(r){var e=function(s){return a(cr,_,s(r.Q.R.bU))},t=r.Q.aj,n=$n(t.bs),o=function(){var s=t.aS.bK;if(s.$)return p(w(""),w(""));var v=s.a;return p(a(rt,r,e(function(l){return l.ct})),a(et,r,c([a(yr,c([a(Le,r,"link"),kr(v)]),c([w(v)]))])))}(),i=o.a,u=o.b;return a(od,c([a(Le,r,"container")]),c([a(rt,r,e(function(s){return s.bL})),a(et,r,c([w(t.bL)])),a(rt,r,e(function(s){return s.bf})),a(et,r,c([w(t.bf)])),a(rt,r,e(function(s){return s.bs})),a(et,r,c([a(yr,c([a(Le,r,"link"),kr(n)]),c([w(n)]))])),a(rt,r,e(function(s){return s.aM})),a(et,r,c([function(){var s=t.aM.ar;if(s.$)return w(t.aM.G);var v=s.a;return a(yr,c([a(Le,r,"link"),kr("mailto:"+v)]),c([w(t.aM.G)]))}()])),i,u,a(rt,r,e(function(s){return s.c9})),a(et,r,c([a(yr,c([a(Le,r,"link"),kr("ThirdPartyNotice.txt")]),c([w("ThirdPartyNotice.txt")]))]))]))},sd=function(r){return{$:22,a:r}},Wa={$:23},$d={$:18},ld=function(r){return{$:17,a:r}},vd=function(r){return{$:16,a:r}},fd=function(r){return{$:15,a:r}},pd=function(r){return{$:14,a:r}},du=function(r){return a(Ae,"checked",Mr(r))},dd=function(r){return a(Ae,"disabled",Mr(r))},R=q("div"),hd=$(function(r,e){r:for(;;)if(e.b){var t=e.a,n=e.b;if(r(t))return B(t);var o=r,i=n;r=o,e=i;continue r}else return P}),te=Fr("htmlFor"),ne=q("label"),hu=$(function(r,e){return h(We,f,e,r)}),md=a(hu,c(["target","checked"]),tn),mu=function(r){return a(Ua,"change",a(M,r,md))},bd=function(r){return p(r,!0)},gd=function(r){return{$:1,a:r}},wd=$(function(r,e){return a(Ia,r,gd(e))}),_d=a(hu,c(["target","value"]),F),xe=function(r){return a(wd,"input",a(M,bd,a(M,r,_d)))},Dt=q("option"),qa=$(function(r,e){return h(ar,"adw-select",r,c([e]))}),Na=q("select"),bu=function(r){return h(ar,"adw-switch",r,_)},gu=function(r){return r.b3},Or=Fr("value"),Ad=function(r){var e=r.n,t=r.Q,n=r.W,o=function(l){return a(cr,_,l(t.R.b4))},i=a(Re,"Views.Config",t.ae),u=i("field"),s=i("label"),v=i("tips");return a(R,c([i("container")]),c([a(R,c([u]),c([a(ne,c([s,te("reference_server")]),c([w(o(function(l){return l.a2.bq.U}))])),a(qa,_,a(Na,c([or("reference_server"),a(er,"aria-describedby","reference_server_tips"),Or(e.ak.c0.F),xe(function(l){return a(Rr,Wa,a(br,sd,a(hd,function(d){return N(d.F,l)},e.am)))})]),a(Vr,function(l){return a(Dt,c([Or(l.F)]),c([w(l.G)]))},e.am))),a(K,c([v,or("reference_server_tips")]),c([w(o(function(l){return l.a2.bq.M}))]))])),a(R,c([u]),c([a(ne,c([s,te("language")]),c([w(o(function(l){return l.v.be.U}))])),a(qa,_,a(Na,c([or("language"),a(er,"aria-describedby","language_tips"),Or(gu(e.ak.cU.be)),xe(function(l){return a(Rr,Wa,a(br,fd,bi(l)))})]),a(Vr,function(l){return a(Dt,c([Or(gu(l))]),c([w(l.G)]))},mi))),a(K,c([v,or("language_tips")]),c([w(o(function(l){return l.v.be.M}))]))])),a(R,c([u]),c([a(ne,c([s,te("ui_theme")]),c([w(o(function(l){return l.v.c8.U}))])),a(qa,_,a(Na,c([or("ui_theme"),a(er,"aria-describedby","ui_theme_tips"),Or(wt(e.ak.c8)),xe(function(l){return pd(ji(l))})]),c([a(Dt,c([Or(wt(0))]),c([w(o(function(l){return l.v.c5}))])),a(Dt,c([Or(wt(1))]),c([w(o(function(l){return l.v.b6}))])),a(Dt,c([Or(wt(2))]),c([w(o(function(l){return l.v.cv}))]))]))),a(K,c([v,or("ui_theme_tips")]),c([w(o(function(l){return l.v.c8.M}))]))])),a(R,c([u]),c([a(ne,c([s,te("feedback_vibration")]),c([w(o(function(l){return l.v.a0.U}))])),bu(c([or("feedback_vibration"),a(er,"aria-describedby","feedback_vibration_tips"),i("switch"),dd(t.cS.an===1),du(!e.ak.cU.a0),mu(function(l){return vd(sa(l))})])),a(K,c([v,or("feedback_vibration_tips")]),c([w(o(function(l){var d=t.cS.an;return d?l.v.a0.bj:l.v.a0.M}))]))])),a(R,c([u]),c([a(ne,c([s,te("os_notification")]),c([w(o(function(l){return l.W.aR.U}))])),function(){var l=a(fr,c([ee($d)]),c([a(Tr,_,c([w(o(function(A){return A.W.aR.bu}))]))])),d=a(fr,c([$u(!0)]),c([a(Tr,_,c([w(o(function(A){return A.W.aR.bu}))]))])),g=c([or("os_notification"),i("switch"),a(er,"aria-describedby","os_notification_tips")]),m=bu(Ir(c([du(!e.ak.cU.aR),mu(function(A){return ld(sa(A))})]),g)),b=n.aN;switch(b){case 5:return m;case 2:return l;case 3:return l;case 0:return d;case 1:return d;default:return d}}(),a(K,c([v,or("os_notification_tips")]),c([w(o(function(l){var d=n.aN;switch(d){case 5:return l.W.aR.M;case 0:return l.W.aR.b$;case 1:return l.W.aR.bj;case 2:return l.W.aR.M;case 3:return l.W.aR.ca;default:return l.W.aR.cQ}}))]))]))]))},gn=function(r){return{$:1,a:r}},jd={$:21},Ga=function(r){return a(Ae,"disabled",Mr(r))},yd=q("form"),wn=$(function(r,e){return h(ar,"adw-input",r,c([e]))}),_n=q("input"),Qa=Fr("max"),za=Fr("min"),Td=function(r){return p(r,!0)},kd=function(r){return{$:2,a:r}},Ed=$(function(r,e){return a(Ia,r,kd(e))}),Dd=function(r){return a(Ed,"submit",a(M,Td,G(r)))},Cd=Fr("placeholder"),Pd=ou("required"),Me=function(r){return a(er,"size",function(){return r?"medium":"large"}())},Ya=function(r){return a(Fr,"step",r)},Ct={$:0},Sd=y(function(r,e,t){var n=r(e);if(n.$)return t;var o=n.a;return a(O,o,t)}),wu=$(function(r,e){return h(We,Sd(r),_,e)}),Bd=function(r){var e=_t(r),t=(e/ka|0)%60,n=(e/Ea|0)%60,o=(e/Da|0)%24,i=e/Hi|0;return{b7:i,cp:o,cx:n,c$:t}},An=y(function(r,e,t){var n=Bd(t),o=n.b7,i=n.cp,u=n.cx,s=n.c$,v=o>0||N(e,gn(0))?B(o):P,l=function(){if(e.$===1)switch(e.a){case 0:return e.a,P;case 1:return e.a,B(a(Pe,0,i));default:return i>0||!N(v,P)?B(i):P}else return i>0?B(i):P}(),d=function(){if(e.$===1)switch(e.a){case 0:return e.a,P;case 1:return e.a,P;default:return u>0||!N(l,P)?B(a(Pe,0,u)):P}else return u>0?B(u):P}(),g=function(){return e.$===1?e.a===3?(e.a,B(a(Pe,0,s))):P:B(a(Pe,0,s))}(),m=a(He,"-",r.b3);if(m.b&&m.a==="ja"){var b=a(wu,rr,c([a(br,function(A){return vr(A)+"\u65E5"},v),a(br,function(A){return vr(A)+"\u6642\u9593"},l),a(br,function(A){return vr(A)+"\u5206"},d),a(br,function(A){return vr(A)+"\u79D2"},g)]));return e.$?a(pe,"",b):a(Rr,"---",la(b))}else{var b=a(wu,rr,c([a(br,function(k){return Ir(vr(k),N(e,Ct)?" days":"days,")},v),a(br,function(k){return Ir(vr(k),N(e,Ct)?" hours":"h")},l),a(br,function(k){return Ir(vr(k),N(e,Ct)?" minutes":"m")},d),a(br,function(k){return Ir(vr(k),N(e,Ct)?" seconds":"s")},g)]));return e.$?a(pe," ",b):a(Rr,"---",la(b))}}),jn=Fr("type"),Pt=function(r){return a(er,"variant",function(){return r?"neutral":"primary"}())},Vd=function(r){var e=r.O,t=r.n,n=r.Q,o=function(l){return a(cr,_,l(n.R.cB))},i=a(Re,"Views.NewTimer",n.ae),u=e,s=u.a,v=u.b;return a(yd,c([i("form"),Dd(jd)]),c([a(R,c([i("field")]),c([a(ne,c([i("label"),te("timer_name")]),c([w(o(function(l){return l.z.G.U}))])),a(wn,_,a(_n,c([or("timer_name"),Or(s.G),Pd(!0),Cd(o(function(l){return l.z.G.cR})),a(er,"enterkeyhint","next"),xe(function(l){return gt(function(d){return x(d,{G:l})})})]),_))])),a(R,c([i("field")]),c([a(K,c([i("label")]),c([w(o(function(l){return l.z.aY.J}))])),a(R,c([i("fieldGroup")]),c([a(R,c([i("suffixField")]),c([a(wn,_,a(_n,c([or("timer_days"),Or(s.ap),jn("number"),za("0"),Qa("365"),Ya("1"),a(er,"enterkeyhint","next"),xe(function(l){return gt(function(d){return x(d,{ap:l})})})]),_)),a(ne,c([te("timer_days")]),c([w("days")]))])),a(R,c([i("suffixField")]),c([a(wn,_,a(_n,c([or("timer_hours"),Or(s.at),jn("number"),za("-999"),Qa("999"),Ya("1"),a(er,"enterkeyhint","next"),xe(function(l){return gt(function(d){return x(d,{at:l})})})]),_)),a(ne,c([te("timer_hours")]),c([w("hours")]))])),a(R,c([i("suffixField")]),c([a(wn,_,a(_n,c([or("timer_minutes"),a(er,"value",s.ax),jn("number"),za("-999"),Qa("999"),Ya("1"),a(er,"enterkeyhint","done"),xe(function(l){return gt(function(d){return x(d,{ax:l})})})]),_)),a(ne,c([te("timer_minutes")]),c([w("minutes")]))])),function(){if(v.$){var m=v.a;return a(K,c([i("error")]),c([w(function(){switch(m){case 0:return o(function(b){return b.z.as.cf});case 1:return o(function(b){return b.z.as.cA});default:return o(function(b){return b.z.as.dl})}}())]))}else{var l=v.a,d=l.b,g=h(An,t.ak.cU.be,gn(2),d);return a(K,c([i("duration")]),c([w(a(cr,c([g]),n.R.cB.z.aY.dd))]))}}()]))])),a(fr,c([Ga(function(){return!!v.$}()),Pt(0),Me(0)]),c([a(Tr,c([jn("submit")]),c([w(o(function(l){return l.z.c3}))]))]))]))},Rd=function(r){var e=r.Q,t=a(Re,"Views.NotFound",e.ae);return a(R,c([t("container")]),c([a(Qr,c([t("paragraph")]),c([w("Sorry, this page does not exist.")])),a(kt,c([t("url")]),c([a(mn,_,c([w($n(e.bK))]))]))]))},Ld={$:3},xd=$(function(r,e){return{$:9,a:r,b:e}}),Md={$:4},Jd=function(r){return{$:8,a:r}},Fd=$(function(r,e){return a(ar,"adw-glow-dot",a(O,a(Ae,"glowing",Mr(r)),e))}),Od=c([Wi(8)]),Hd=function(r){var e=function(){var i=r.n.ak.cX;if(i.$)return Ze;var u=i.a;return u.Z}(),t=r.Q.R.cY,n=function(i){return a(cr,_,i(t))},o=a(Re,"Views.RandomEventCounter",r.Q.ae);return a(R,c([o("container")]),c([a(R,c([o("menus")]),c([a(fr,c([Ga(N(e,Ze))]),c([a(Tr,c([ee(Md)]),c([w(n(function(i){return i.aJ.df}))]))]))])),a(R,c([o("header")]),c([a(R,c([o("dots")]),a(Vr,function(i){return h(Fd,I(e,i)>-1,_,_)},a(Yo,1,Ze))),a(K,c([o("number")]),c([w(vr(e))]))])),a(R,c([o("control")]),c([a(R,c([o("texts")]),c([a(K,_,c([w(n(function(i){return i.M}))])),function(){var i=function(){var u=r.n.ak.cX;if(u.$)return"---";var s=u.a.af;return function(v){return a(cr,c([v]),t.bW)}(h(An,r.n.ak.cU.be,Ct,va(z(r.Q.cK)-z(s))))}();return a(K,c([o("delta")]),c([w(n(function(u){return u.cu})),w(": "),w(i)]))}()])),a(R,c([o("actions")]),c([a(fr,c([Pt(0),Me(0),Ga(!e),a(Ua,"touchstart",G(e>0?a(xd,30,Jd(Od)):Wa))]),c([a(Tr,c([ee(Ld)]),c([w(n(function(i){return i.aJ.b1}))]))]))]))]))]))},yn=Re("Views.Timer"),Id=q("h2"),Ud=function(r){var e=function(o){return a(cr,_,o(r.Q.R.db.aJ))},t=function(o){return a(cr,_,o(r.Q.R.db.ce))},n=yn(r.Q.ae);return a(R,c([n("empty")]),c([a(Id,c([n("emptyTitle")]),c([w(t(function(o){return o.J}))])),a(Qr,c([n("emptyDescription")]),c([w(t(function(o){return o.M}))])),a(fr,c([Pt(0),Me(0),Et(!0)]),c([a(yr,c([kr("#timers/presets")]),c([w(e(function(o){return o.bm}))]))])),a(fr,c([Me(0)]),c([a(yr,c([kr("#timers/new")]),c([w(e(function(o){return o.aW}))]))]))]))},Wd=function(r){return!r.b},_u=function(r){var e=r;return e},qd=function(r){return hs(Bo(r))},Nd=qd,Gd=function(r){return{$:2,a:r}},Qd=function(r){return{$:0,a:r}},Au=function(r){return{$:1,a:r}},Za=q("li"),Xa=function(r){return h(ar,"adw-progress",r,_)},zd=hr,ju=function(r){return a(Ae,"value",zd(r))},Yd=$(function(r,e){var t=function(m){return a(cr,_,m(r.Q.R.db))},n=function(m){return t(function(b){return m(b.aJ)})},o=a(iu,_,c([a(fr,c([pu,uu(!0),fu(n(function(m){return m.cw}))]),c([a(Tr,_,c([a(Ke,3,_)]))])),a(lu,c([or("timer_entry_"+_u(e.F))]),c([a(bn,_,c([a(Ke,4,c([cu])),a(Tr,c([ee(Gd(e))]),c([w(n(function(m){return m.b9}))]))]))]))])),i=r.n.ak.cU.be,u=r.Q.R.db,s=yn(r.Q.ae),v=e.C;switch(v.$){case 0:return a(Za,c([s("timer")]),c([a(R,c([s("timer--header")]),c([a(R,c([s("timer--header--info")]),c([a(K,c([s("timer--header--info--title")]),c([w(e.G)])),a(R,c([s("timer--header--info--status")]),c([Xa(_),a(K,_,c([w(a(cr,c([h(An,i,gn(2),e.aY)]),u.bI.aY))]))]))])),o])),a(fr,c([Me(0)]),c([a(Tr,c([ee(Qd(e))]),c([w(n(function(m){return m.c1}))]))]))]));case 1:var l=v.a,d=h(An,i,gn(3),va(z(l)+_t(e.aY)-z(r.Q.cK))),g=function(){var m=_t(e.aY),b=z(r.Q.cK)-z(l);return a(Pe,0,a(Ca,1,b/m))}();return a(Za,c([s("timer")]),c([a(R,c([s("timer--header")]),c([a(R,c([s("timer--header--info")]),c([a(K,c([s("timer--header--info--title")]),c([w(e.G)])),a(R,c([s("timer--header--info--status")]),c([Xa(c([ju(g)])),a(K,_,c([w(a(cr,c([d]),u.bI.Z))]))]))]))])),a(fr,c([Me(0)]),c([a(Tr,c([ee(Au(e))]),c([w(n(function(m){return m.c2}))]))]))]));default:return a(Za,c([s("timer")]),c([a(R,c([s("timer--header")]),c([a(R,c([s("timer--header--info")]),c([a(K,c([s("timer--header--info--title")]),c([w(e.G)])),a(R,c([s("timer--header--info--status")]),c([Xa(c([ju(1)])),a(K,_,c([w("Completed!")]))]))])),o])),a(fr,c([Me(0),Pt(0)]),c([a(Tr,c([ee(Au(e))]),c([w(n(function(m){return m.b2}))]))]))]))}}),Zd=$(function(r,e){var t=yn(r.Q.ae);return h(Nd,"ul",c([t("timers")]),a(Vr,function(n){return p(_u(n.F),a(Yd,r,n))},e))}),Xd=function(r){var e=function(n){return a(cr,_,n(r.Q.R.db))},t=yn(r.Q.ae);return Wd(r.n.ak.dc)?Ud(r):a(R,c([t("container")]),c([a(R,c([t("header")]),c([a(R,c([t("actions")]),c([a(fr,c([Pt(0),Et(!0)]),c([a(yr,c([kr("#timers/presets")]),c([w(e(function(n){return n.aJ.bm}))]))])),a(fr,_,c([a(yr,c([kr("#timers/new")]),c([w(e(function(n){return n.aJ.aW}))]))]))])),a(Qr,c([t("description")]),c([w(e(function(n){return n.M}))]))])),a(Zd,r,r.n.ak.dc)]))},Kd=function(r){if(r.$===1){var e=r.a,t=r.b,n=function(s){return a(cr,_,s(t.Q.R))},o=function(){switch(e){case 0:return"Not Found";case 1:return n(function(s){return s.bU.J});case 2:return n(function(s){return s.b4.J});case 5:return n(function(s){return s.cB.J});case 3:return n(function(s){return s.cY.J});default:return n(function(s){return s.db.J})}}();return{aP:a(Vr,Yp(en),h(Qp,t,a(ad,e,t),c([function(){switch(e){case 0:return Rd(t);case 1:return cd(t);case 3:return Hd(t);case 4:return Xd(t);case 5:return Vd(t);default:return Ad(t)}}()]))),J:o+" - Genshin Utils"}}else{var i=r.a,u=r.b;return a(qp,i,u)}},rh=D$({cr:kv,cL:Qs,cM:Gs,c4:bf,dg:Jp,dh:Kd});const eh={App:{App:{init:rh(sn)(0)}}},yu="profile_v2";function th(r){r.sendAppProfileEvent.subscribe(e=>{switch(e.type){case"PersistProfile":{document.documentElement.setAttribute("data-adw-theme",e.profile.theme),fo.exports.setItem(yu,e.profile);return}}})}function nh(){return fo.exports.getItem(yu)}function ah(r){let e;r.sendAppWakeLockEvent.subscribe(async t=>{switch(t.type){case"SendLockRequest":{try{e=await navigator.wakeLock.request("screen"),e.addEventListener("release",()=>{r.recieveAppWakeLockEvent.send({type:"RecieveReleased"}),e=null}),r.recieveAppWakeLockEvent.send({type:"RecieveLocked"})}catch(n){r.recieveAppWakeLockEvent.send({type:"RecieveError",error:n instanceof Error?n.message:String(n)})}return}case"SendReleaseRequest":{try{await(e==null?void 0:e.release()),e=null}catch(n){r.recieveAppWakeLockEvent.send({type:"RecieveError",error:n instanceof Error?n.message:String(n)})}return}case"SendStatusRequest":{if(!("wakeLock"in navigator)){r.recieveAppWakeLockEvent.send({type:"RecieveUnsupportedStatus"});return}r.recieveAppWakeLockEvent.send({type:"RecieveInitiallyLocked",locked:!!e});return}}})}function Tu(r){if(!("Notification"in window))return"PlatformNotSupported";switch(r||Notification.permission){case"granted":return"Available";case"denied":return"PermissionRequestDenied";case"default":return"RequiresPermission"}}function oh(r){r.sendNotificationsEvent.subscribe(e=>{switch(e.type){case"CheckAvailability":{r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:Tu()});return}case"RequestPermission":{if(Notification.permission==="granted"){r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:"Available"});return}r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:"RequestingPermission"}),Notification.requestPermission().then(t=>{r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:Tu(t)})});return}case"Send":{navigator.serviceWorker.ready.then(t=>{t.showNotification(e.notification.title,e.notification.options)});return}}})}function ih(r){r.sendVibrationEvent.subscribe(e=>{switch(e.type){case"Vibrate":{navigator.vibrate(e.pattern);return}}})}const uh="modulepreload",ku={},ch="https://pocka.github.io/genshin-utils/",Eu=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${ch}${n}`,n in ku)return;ku[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":uh,o||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),o)return new Promise((s,v)=>{u.addEventListener("load",s),u.addEventListener("error",v)})})).then(()=>e())},Du={title:"Config",description:"Configure this application.",general:{title:"General",referenceServer:{label:"Reference Server",description:"Select Genshin Game Server used for timer resets."}},notification:{title:"Notifications",inAppNotification:{label:"In-App Notification",description:"Whether to display in-page notification. This does not triggers OS/browser notification."},browserNotification:{label:"Browser Notification",description:"Whether to display OS/browser notification using Notifications API.",checking:"Checking availability...",notSupported:"Your browser does not support Notifications API.",denied:"Access to Notifications API was rejected.",permissionRequesting:"Requesting permission...",requestPermission:"Enable Notifications API"}},ui:{title:"User Interface",language:{label:"Language",description:"Choose a language to use in UI. Some may partially lack translations."},theme:{label:"UI Theme",description:"Select your preferred application theme."},systemDefaultTheme:"System Default",light:"Light",dark:"Dark",feedbackVibration:{label:"Feedback Vibration",description:"When turned on, the device perform short feedback vibration for primary actions. On devices without vibration mechanism, this setting has no effect.",notSupported:"Your browser does not support Vibration API."}}},Cu={title:"Random event counter",description:"Log and Manage how many times left you can get a reward by completing a random event/quest.",lastClaimedLabel:"Last claimed",ago:"%s ago",actions:{claim:"Claim",undo:"Undo"}},Pu={title:"Timer",description:"Setup timers for parameteric transformer, investigation points, etc. You can optionally enable push notification on config page.",empty:{title:"No timers created",description:"Let's create a timer to use your resouces efficiently."},actions:{create:"Create",start:"Start",delete:"Delete",stop:"Cancel",clear:"Clear",menu:"Open Menu",presets:"Create from presets"},timerCard:{duration:"Duration: %s",remains:"%s remains",ended:"Ended %s ago"}},Su={title:"Create a new timer",form:{name:{label:"Name",placeholder:"Artifact spawn"},duration:{title:"Duration",tips:"The timer will run for %s.",day:{label:"days",placeholder:""},hour:{label:"hours",placeholder:""},minute:{label:"minutes",placeholder:""}},submit:"Create",errors:{emptyName:"Please input a name",negativeDuration:"Duration cannot be negative.",zeroDuration:"Duration cannot be zero."}}},Bu={timer:{title:"%s",body:'Timer "%s" has finished just now.',open:"Open",dismiss:"Dismiss"}},Vu={wakeLock:"Screen Lock",wakeLockNotSupported:"This browser does not support WakeLock API.",preference:"Preference",about:"About"},Ru={title:"About this app",version:"Version",license:"License",repository:"Source code",author:"Author",issues:"Issue tracker",thirdPartyNotice:"Third party notice"};var Tn={configPage:Du,randomEventCounterPage:Cu,timerPage:Pu,newTimerPage:Su,notifications:Bu,appMenu:Vu,aboutPage:Ru},sh=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",configPage:Du,randomEventCounterPage:Cu,timerPage:Pu,newTimerPage:Su,notifications:Bu,appMenu:Vu,aboutPage:Ru,default:Tn});function $h(r){switch(r){case"../translations/en-GB.json":return Eu(()=>Promise.resolve().then(function(){return sh}),void 0);case"../translations/ja-JP.json":return Eu(()=>import("./ja-JP.84bab039.js"),[]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function lh(r,{profile:e}){const t=async n=>{if(n==="en-GB"){r.recieveAppTranslationEvent.send({type:"RecievedTranslation",translation:Tn});return}try{const o=await $h(`../translations/${n}.json`).then(i=>i.default);r.recieveAppTranslationEvent.send({type:"RecievedTranslation",translation:Yu({},Tn,o)})}catch(o){const i=o instanceof Error?o.message:String(o);r.recieveAppTranslationEvent.send({type:"FailedToFetch",error:i})}};e&&"language"in e.preference&&t(e.preference.language),r.sendAppTranslationEvent.subscribe(n=>{switch(n.type){case"RequestTranslation":{t(n.lang);return}}})}var vh=[{id:"asia",name:"Asia",tzOffset:8,shortName:"AS"},{id:"us",name:"America",tzOffset:-5,shortName:"US"},{id:"eu",name:"Europe",tzOffset:1,shortName:"EU"}];const fh="_container_nosb7_1",ph="_label_nosb7_11",dh="_value_nosb7_26",hh="_link_nosb7_37";var mh={container:fh,label:ph,value:dh,link:hh};const bh="_container_38e9r_1",gh="_field_38e9r_7",wh="_label_38e9r_15",_h="_tips_38e9r_21";var Ah={container:bh,field:gh,label:wh,tips:_h,switch:"_switch_38e9r_26"};const jh="_main_zsx7y_1",yh="_nav_zsx7y_5";var Th={main:jh,nav:yh};const kh="_container_1qvjc_1",Eh="_menus_1qvjc_6",Dh="_header_1qvjc_14",Ch="_dots_1qvjc_24",Ph="_number_1qvjc_29",Sh="_control_1qvjc_35",Bh="_actions_1qvjc_44",Vh="_texts_1qvjc_45",Rh="_delta_1qvjc_53";var Lh={container:kh,menus:Eh,header:Dh,dots:Ch,number:Ph,control:Sh,actions:Bh,texts:Vh,delta:Rh};const xh="_container_15jgu_1",Mh="_paragraph_15jgu_8",Jh="_url_15jgu_13";var Fh={container:xh,paragraph:Mh,url:Jh};const Oh="_form_qnhb2_1",Hh="_field_qnhb2_2",Ih="_fieldGroup_qnhb2_3",Uh="_suffixField_qnhb2_25",Wh="_label_qnhb2_38",qh="_duration_qnhb2_50",Nh="_error_qnhb2_54";var Gh={form:Oh,field:Hh,fieldGroup:Ih,suffixField:Uh,label:Wh,duration:qh,error:Nh};const Qh="_empty_axxp9_1",zh="_emptyTitle_axxp9_13",Yh="_emptyDescription_axxp9_21",Zh="_container_axxp9_28",Xh="_header_axxp9_34",Kh="_description_axxp9_41",rm="_actions_axxp9_46",em="_timers_axxp9_53",tm="_timer_axxp9_53";var nm={empty:Qh,emptyTitle:zh,emptyDescription:Yh,container:Zh,header:Xh,description:Kh,actions:rm,timers:em,timer:tm,"timer--header":"_timer--header_axxp9_88","timer--header--info":"_timer--header--info_axxp9_95","timer--header--info--title":"_timer--header--info--title_axxp9_104","timer--header--info--status":"_timer--header--info--status_axxp9_110"},am=Object.defineProperty,om=Object.getOwnPropertyDescriptor,Lu=(r,e,t,n)=>{for(var o=n>1?void 0:n?om(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&am(e,t,o),o};class St extends tr{constructor(){super();this.actionSlot=Te(),this.disabled=!1,this.loading=!1,this.addEventListener("click",e=>{if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}},{capture:!0})}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled)),e.has("loading")&&this.setAttribute("aria-busy",String(this.loading))}getActionInstance(){if(!this.actionSlot.value)return null;const e=this.actionSlot.value.assignedElements();for(const t of e)if(t instanceof HTMLButtonElement||t instanceof HTMLAnchorElement)return t;return null}get tabIndex(){const e=this.getActionInstance();return e?e.tabIndex:super.tabIndex}set tabIndex(e){const t=this.getActionInstance();if(t){t.tabIndex=e;return}super.tabIndex=e}focus(e){const t=this.getActionInstance();if(t){t.focus(e);return}super.focus.call(this,e)}}Lu([Hr({type:Boolean,attribute:!0,reflect:!0})],St.prototype,"disabled",2);Lu([Hr({type:Boolean,attribute:!0,reflect:!0})],St.prototype,"loading",2);var im=Object.defineProperty,um=Object.getOwnPropertyDescriptor,cm=(r,e,t,n)=>{for(var o=n>1?void 0:n?um(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&im(e,t,o),o};class Ka extends St{constructor(){super(...arguments);this.iconOnly=!1}static get styles(){return gr`
      :host {
        --_bg-hue: var(--adw-color-bg-hue);
        --_bg-saturation: var(--adw-color-bg-saturation);
        --_bg-lightness: var(--adw-color-bg-lightness);

        --_fg-hue: var(--adw-color-fg-hue);
        --_fg-saturation: var(--adw-color-fg-saturation);
        --_fg-lightness: var(--adw-color-fg-lightness);

        --_spinner-size: calc(var(--adw-fontsize-medium) * 0.8);

        position: relative;
        display: inline-block;
      }
      :host([size="large"]) {
        --_spinner-size: calc(var(--adw-fontsize-large) * 0.8);
      }

      ::slotted(button),
      ::slotted(a[href]) {
        --_bg-level: 1;

        --_gradient-start: hsl(
          var(--_bg-hue),
          var(--_bg-saturation),
          calc(var(--_bg-lightness) * var(--_bg-level) + 1%)
        );
        --_gradient-end: hsl(
          var(--_bg-hue),
          calc(var(--_bg-saturation) + 1%),
          calc(var(--_bg-lightness) * var(--_bg-level) - 5%)
        );

        --_border-color: hsl(
          var(--_bg-hue),
          var(--_bg-saturation),
          calc(var(--_bg-lightness) - var(--adw-lightness-step))
        );

        display: block;
        width: 100%;
        padding: var(--adw-spacing-xsmall) var(--adw-spacing-small);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-lineheight-medium);
        border: 1px solid var(--_border-color);

        background-image: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border-radius: var(--adw-radius-medium);
        color: hsl(var(--_fg-hue), var(--_fg-saturation), var(--_fg-lightness));
        cursor: pointer;
        font-weight: var(--adw-fontweight-bold);
        text-align: center;
        text-decoration: none;
        user-select: none;
      }

      :host([variant="primary"]) {
        --_bg-hue: var(--adw-color-primary-hue);
        --_bg-saturation: var(--adw-color-primary-saturation);
        --_bg-lightness: var(--adw-color-primary-lightness);

        --_fg-hue: var(--adw-color-onprimary-hue);
        --_fg-saturation: var(--adw-color-onprimary-saturation);
        --_fg-lightness: var(--adw-color-onprimary-lightness);
      }

      :host([size="large"]) > ::slotted(button),
      :host([size="large"]) > ::slotted(a[href]) {
        font-size: var(--adw-fontsize-large);
        padding: var(--adw-spacing-small) var(--adw-spacing-medium);
      }

      ::slotted(button:hover),
      ::slotted(a[href]:hover) {
        --_bg-level: 1.12;
      }

      ::slotted(button:active),
      ::slotted(a[href]:active) {
        --_bg-level: 0.85;
      }

      ::slotted(button:focus),
      ::slotted(a[href]:focus) {
        border-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        box-shadow: 0 0 0 var(--adw-spacing-xsmall)
          hsla(
            var(--adw-color-primary-hue),
            var(--adw-color-primary-saturation),
            var(--adw-color-primary-lightness),
            0.6
          );
        outline: none;
      }

      :host([icon-only]) > ::slotted(button),
      :host([icon-only]) > ::slotted(a[href]) {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
      }

      :host([disabled]) {
        --_bg-saturation: 1%;
        --_bg-lightness: calc(
          var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
        );
      }
      :host([disabled]) > ::slotted(button),
      :host([disabled]) > ::slotted(a[href]) {
        background-image: none;
        background-color: hsl(
          var(--_bg-hue),
          1%,
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5)
        );
        color: hsl(
          var(--_fg-hue),
          var(--_fg-saturation),
          calc(var(--_fg-lightness) + var(--adw-lightness-step) * 1.5)
        );
        cursor: default;
      }

      :host([loading]) > ::slotted(button),
      :host([loading]) > ::slotted(a[href]) {
        background-image: none;
        background-color: hsl(
          var(--_bg-hue),
          calc(var(--_bg-saturation) * 0.8),
          calc(var(--_bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        color: hsla(
          var(--_fg-hue),
          var(--_fg-saturation),
          var(--_fg-lightness),
          0.3
        );
        cursor: wait;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      .spinner {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: var(--_spinner-size);
        height: var(--_spinner-size);
        border: 2px solid
          hsl(var(--_fg-hue), var(--_fg-saturation), var(--_fg-lightness));

        border-top-color: transparent;
        border-radius: 50%;
        pointer-events: none;
      }

      :host([loading]) > .spinner {
        display: block;

        animation: 1.2s ease-in-out infinite both spin;
      }
    `}render(){return Y`
      <slot ${se(this.actionSlot)}></slot>
      <div class="spinner"></div>
    `}}Ka.defaultTagName="adw-button";cm([Hr({type:Boolean,attribute:"icon-only",reflect:!0})],Ka.prototype,"iconOnly",2);class kn extends St{static get styles(){return gr`
      :host {
        --_icon-size: calc(1.6 * var(--adw-unit));
        --_left-padding: 8px;
        --_gap: 8px;
        --_spinner-size: calc(var(--adw-fontsize-medium) * 0.8);

        position: relative;
        display: inline-block;

        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
      }

      :host(:focus-within) {
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          var(--adw-color-onprimary-lightness)
        );
      }

      .button::slotted(button),
      .button::slotted(a) {
        appearance: none;
        display: block;
        width: 100%;
        padding: 12px;
        padding-left: calc(
          var(--_left-padding) + var(--_icon-size) + var(--_gap)
        );
        border: none;
        font-family: var(--adw-fontfamily-sans);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-lineheight-dense);

        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.1)
        );
        color: inherit;
        cursor: pointer;
        text-align: start;
        text-decoration: none;
        outline: none;
        white-space: nowrap;
      }

      .button::slotted(button:hover),
      .button::slotted(a:hover) {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.3)
        );
      }

      .button::slotted(button:focus),
      .button::slotted(a:focus) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      :host([disabled]),
      :host([loading]) {
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(
            (var(--adw-color-fg-lightness) + var(--adw-color-bg-lightness)) / 2
          )
        );
      }
      :host([disabled]) > .button::slotted(button),
      :host([disabled]) > .button::slotted(a),
      :host([loading]) > .button::slotted(button),
      :host([loading]) > .button::slotted(a) {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.1)
        );
        cursor: default;
      }
      :host([disabled]) > .button::slotted(button:focus),
      :host([disabled]) > .button::slotted(a:focus),
      :host([loading]) > .button::slotted(button:focus),
      :host([loading]) > .button::slotted(a:focus) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          calc(
            (
                var(--adw-color-primary-saturation) +
                  var(--adw-color-bg-saturation)
              ) / 2
          ),
          calc(
            (var(--adw-color-primary-lightness) + var(--adw-color-bg-lightness)) /
              2
          )
        );
      }

      :host([loading]) > .button::slotted(button),
      :host([loading]) > .button::slotted(a) {
        cursor: wait;
      }

      .icon::slotted(*),
      .spinner {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        left: var(--_left-padding);
        width: var(--_icon-size);
        height: var(--_icon-size);

        pointer-events: none;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }

      .spinner {
        display: none;
        box-sizing: border-box;
        border: 2px solid
          hsl(
            var(--adw-color-fg-hue),
            var(--adw-color-fg-saturation),
            var(--adw-color-fg-lightness)
          );

        border-top-color: transparent;
        border-radius: 50%;
      }

      :host([loading]) > .spinner {
        display: block;

        animation: 1.2s ease-in-out infinite both spin;
      }
      :host([loading]) > .icon::slotted(*) {
        display: none;
      }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","listitem")}render(){return Y`
      <slot class="button" ${se(this.actionSlot)}></slot>
      <slot class="icon" name="icon"></slot>
      <div class="spinner"></div>
    `}}kn.defaultTagName="adw-menu-item";var sm=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Bt=(r,e,t)=>(sm(r,e,"read from private field"),t?t.call(r):e.get(r)),xu=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Vt,En;class ro extends tr{constructor(){super();xu(this,Vt,Te()),this.getMenuItems=()=>Bt(this,Vt).value?Bt(this,Vt).value.assignedElements().filter(e=>e instanceof kn):[],xu(this,En,e=>{const t=this.getMenuItems();if(!t.length)return;const n=this.querySelector(":scope > :focus-within"),o=n&&n instanceof kn?t.indexOf(n):-1,i=o<0?0:o+e,u=i<0?t.length-1:i>=t.length?0:i;t.forEach((s,v)=>{if(v===u){s.focus(),s.tabIndex=0;return}s.tabIndex=-1})}),this.addEventListener("keydown",e=>{if(!e.isComposing)switch(e.key){case"ArrowUp":Bt(this,En).call(this,-1),e.preventDefault(),e.stopPropagation();return;case"ArrowDown":Bt(this,En).call(this,1),e.preventDefault(),e.stopPropagation();return}}),this.addEventListener("focusin",e=>{const t=this.getMenuItems(),n=this.querySelector(":scope > :focus-within");!n||t.forEach(o=>{o.tabIndex=o===n?0:-1})})}static get styles(){return gr`
      :host {
        --_border-color: hsl(
          var(--adw-color-border-hue),
          var(--adw-color-border-saturation),
          calc(
            var(--adw-color-border-lightness) + var(--adw-lightness-step) * 0.7
          )
        );

        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        border: 1px solid var(--_border-color);

        border-radius: var(--adw-radius-medium);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
        overflow: hidden;
      }

      :host(:focus) {
        border-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        box-shadow: 0 0 0 var(--adw-spacing-xsmall)
          hsla(
            var(--adw-color-primary-hue),
            var(--adw-color-primary-saturation),
            var(--adw-color-primary-lightness),
            0.6
          );
        outline: none;
      }

      ::slotted(:not(:first-child)) {
        border-top: 1px solid var(--_border-color);
      }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","list")}render(){return Y` <slot ${se(Bt(this,Vt))}></slot> `}}Vt=new WeakMap;En=new WeakMap;ro.defaultTagName="adw-menu";var $m=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,vm=(r,e,t,n)=>{for(var o=n>1?void 0:n?lm(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&$m(e,t,o),o},fm=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},J=(r,e,t)=>(fm(r,e,"read from private field"),t?t.call(r):e.get(r)),tt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},ae,pr,Je,Dn,eo,Cn;class to extends tr{constructor(){super();tt(this,ae,Te()),tt(this,pr,Te()),tt(this,Je,Te()),this.opened=!1,tt(this,Dn,()=>{if(!J(this,ae).value||!J(this,Je).value)return;const[e]=J(this,ae).value.assignedElements();if(!e)return;const t=(e instanceof St?e.getActionInstance():null)||e,[n]=J(this,Je).value.assignedElements();!n||!(n instanceof HTMLElement)||!n.id||(t.setAttribute("aria-expanded",String(this.opened)),t.setAttribute("aria-controls",n.id))}),tt(this,eo,()=>{this.opened?this.close():this.open()}),this.close=(e=!1)=>{if(!!this.opened){if(document.removeEventListener("focusout",J(this,Cn)),J(this,pr).value&&(J(this,pr).value.style.display="none"),J(this,ae).value){const[t]=J(this,ae).value.assignedElements();t&&t instanceof HTMLElement&&(t.tabIndex=0,e&&t.focus())}this.dispatchEvent(new CustomEvent("menuclose")),this.opened=!1}},this.open=()=>{if(!this.opened){if(J(this,ae).value){const[e]=J(this,ae).value.assignedElements();e&&e instanceof HTMLElement&&(e.tabIndex=-1)}if(document.addEventListener("focusout",J(this,Cn)),J(this,pr).value){J(this,pr).value.style.display="block",J(this,pr).value.style.visibility="hidden",J(this,pr).value.style.pointerEvents="none";const e=J(this,pr).value.getBoundingClientRect(),t=this.getBoundingClientRect(),n={width:window.innerWidth,height:window.innerHeight},o=pm(n,t,e);if(J(this,pr).value.style.visibility="visible",J(this,pr).value.style.pointerEvents="all",J(this,pr).value.style.left=o.x+"px",J(this,pr).value.style.top=o.y+"px",J(this,Je).value){const[i]=J(this,Je).value.assignedElements();i instanceof ro&&(i.tabIndex=0,i.focus(),i.addEventListener("blur",u=>{i.removeAttribute("tabindex")},{once:!0}))}}this.dispatchEvent(new CustomEvent("menuopen")),this.opened=!0}},tt(this,Cn,e=>{e.relatedTarget&&e.relatedTarget instanceof HTMLElement&&this.contains(e.relatedTarget)||this.close()}),this.addEventListener("keydown",e=>{if(!e.isComposing)switch(e.key){case"Escape":this.close(!0),e.preventDefault(),e.stopPropagation();return}})}static get styles(){return gr`
      :host {
        position: relative;

        overflow: visible;
      }

      .content {
        position: absolute;
        display: none;
        visibility: hidden;
        pointer-events: none;

        min-width: 0;
        max-width: none;
        z-index: 9999;
      }
    `}render(){return Y`
      <slot
        name="trigger"
        @click=${J(this,eo)}
        @slotchange=${J(this,Dn)}
        ${se(J(this,ae))}
      ></slot>

      <div class="content" ${se(J(this,pr))}>
        <slot ${se(J(this,Je))} @click=${this.close}></slot>
      </div>
    `}updated(e){super.updated(e),e.has("opened")&&J(this,Dn).call(this)}}ae=new WeakMap;pr=new WeakMap;Je=new WeakMap;Dn=new WeakMap;eo=new WeakMap;Cn=new WeakMap;to.defaultTagName="adw-dropdown";vm([Hr({attribute:!0,type:Boolean,reflect:!0})],to.prototype,"opened",2);function pm(r,e,t,n=10){const o=e.x+t.width+n<=r.width?0:-(t.width-e.width),i=e.y+e.height+t.height+n*2<=r.height?e.height+n:-(t.height+n*2);return{x:o,y:i}}var dm=Object.defineProperty,hm=Object.getOwnPropertyDescriptor,mm=(r,e,t,n)=>{for(var o=n>1?void 0:n?hm(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&dm(e,t,o),o};class no extends tr{constructor(){super();this.glowing=!1}static get styles(){return gr`
      :host {
        --_size: calc(0.8 * var(--adw-unit));
        --_glow-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );

        display: block;
        position: relative;
        width: var(--_size);
        height: var(--_size);
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );

        background-color: hsl(
          var(--adw-color-border-hue),
          var(--adw-color-border-saturation),
          calc(var(--adw-color-border-lightness) + var(--adw-lightness-step))
        );
        border-radius: 50%;

        transition: background-color 0.1s ease-out, box-shadow 0.1s ease-out;
      }

      :host([glowing]) {
        background-color: var(--_glow-color);
        border-color: transparent;
        box-shadow: 0 0 calc(0.3 * var(--adw-unit)) var(--_glow-color);
      }

      .shiny {
        --_shiny-size: calc(var(--_size) * 0.5);

        position: absolute;
        top: calc(0.05 * var(--adw-unit));
        right: calc(0.05 * var(--adw-unit));
        width: var(--_shiny-size);
        height: var(--_shiny-size);

        background-color: hsla(0, 0%, 100%, 0.25);
        border-radius: 50%;
      }
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Y` <div class="shiny"></div> `}}no.defaultTagName="adw-glow-dot";mm([Hr({type:Boolean,attribute:!0,reflect:!0})],no.prototype,"glowing",2);var bm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,wm=(r,e,t,n)=>{for(var o=n>1?void 0:n?gm(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&bm(e,t,o),o},_m=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},oe=(r,e,t)=>(_m(r,e,"read from private field"),t?t.call(r):e.get(r)),Rt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Lt,ao,xt,oo,io;class uo extends tr{constructor(){super(...arguments);Rt(this,Lt,Te()),Rt(this,ao,()=>{oe(this,xt).call(this)}),Rt(this,xt,()=>{if(!oe(this,Lt).value)return null;const[e]=oe(this,Lt).value.assignedElements();return!e||!(e instanceof HTMLInputElement)?null:(this.__type=e.type,e)}),Rt(this,oo,()=>{const e=oe(this,xt).call(this);!e||(e.stepDown(),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})))}),Rt(this,io,()=>{const e=oe(this,xt).call(this);!e||(e.stepUp(),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})))})}static get styles(){return gr`
      :host {
        --_button-size: calc(2.8 * var(--adw-unit));

        display: inline-flex;
        min-width: 0;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );

        background: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        border-radius: var(--adw-radius-medium);
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
        overflow: hidden;
      }
      :host(:focus-within) {
        border-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        box-shadow: 0 0 0 var(--adw-spacing-xsmall)
          hsla(
            var(--adw-color-primary-hue),
            var(--adw-color-primary-saturation),
            var(--adw-color-primary-lightness),
            0.6
          );
      }

      ::slotted(input) {
        -moz-appearance: textfield;
        display: inline-block;
        min-width: 0;
        max-width: 100%;
        flex-shrink: 1;
        flex-grow: 1;
        font-size: calc(1.6 * var(--adw-unit));
        line-height: var(--adw-lineheight-medium);
        border: none;
        padding: calc(var(--adw-spacing-xsmall) * 0.5) var(--adw-spacing-small);
        margin: 0;

        background: inherit;
        border-radius: 0;
        color: inherit;
      }
      ::slotted(input)::-webkit-inner-spin-button,
      ::slotted(input)::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      ::slotted(input:focus) {
        outline: none;
      }

      .button {
        display: block;
        width: var(--_button-size);
        height: var(--_button-size);
        padding: 0;
        margin: 0;
        flex-shrink: 0;
        flex-grow: 0;
        border: none;
        border-left: 1px solid
          hsl(
            var(--adw-color-bg-hue),
            var(--adw-color-bg-saturation),
            calc(
              var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
            )
          );

        background: inherit;
        border-radius: 0;
        color: inherit;
        cursor: pointer;
      }
      .button:hover {
        background-color: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          var(--adw-color-bg-lightness)
        );
      }
      .button:focus {
        outline: none;
      }
      .button:focus-visible {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }
    `}render(){return Y`
      <slot ${se(oe(this,Lt))} @slotchange=${oe(this,ao)}></slot>
      ${this.__type==="number"?Y`
            <button
              class="button"
              tabindex="-1"
              aria-label="Decrement"
              @click=${oe(this,oo)}
            >
              -
            </button>
            <button
              class="button"
              tabindex="-1"
              aria-label="Increment"
              @click=${oe(this,io)}
            >
              +
            </button>
          `:Xu}
    `}}Lt=new WeakMap;ao=new WeakMap;xt=new WeakMap;oo=new WeakMap;io=new WeakMap;uo.defaultTagName="adw-input";wm([Zu()],uo.prototype,"__type",2);class Mu extends tr{static get styles(){return gr`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--adw-spacing-medium);
        padding: var(--adw-spacing-small);
        border: 1px solid
          hsl(
            calc(var(--adw-color-bg-hue) - 10),
            var(--adw-color-bg-saturation),
            calc(
              var(--adw-color-bg-lightness) - var(--adw-lightness-step) * 0.5
            )
          );

        background-color: hsl(
          calc(var(--adw-color-bg-hue) + 10),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) + var(--adw-lightness-step) * 0.5)
        );
        border-radius: var(--adw-radius-medium);
        box-shadow: 1px 1px 8px hsla(0, 0%, 0%, 0.07);
      }

      .items {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        gap: var(--adw-spacing-small);
      }

      .item::slotted(*) {
        min-width: calc(6 * var(--adw-unit));
        flex-shrink: 0;
        flex-grow: 0;
      }

      .action::slotted(*) {
        align-self: center;
      }
    `}render(){return Y`
      <div class="items">
        <slot class="item"></slot>
      </div>

      <slot class="action" name="action"></slot>
    `}}Mu.defaultTagName="adw-nav";var Am=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,ym=(r,e,t,n)=>{for(var o=n>1?void 0:n?jm(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&Am(e,t,o),o};class co extends tr{constructor(){super(...arguments);this.active=!1}static get styles(){return gr`
      :host {
        --_icon-size: var(--adw-spacing-large);
        --_padding: var(--adw-spacing-xsmall);
        --_gap: 2px;
        --_bg: transparent;

        position: relative;
        display: flex;

        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-fg-lightness)
        );
      }

      :host([active]) {
        --_bg: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          var(--adw-color-onprimary-lightness)
        );
      }

      :host(:not([active]):focus-within) {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      .link::slotted(*) {
        display: block;
        width: 100%;
        padding: var(--_padding);
        padding-top: calc(var(--_padding) + var(--_icon-size) + var(--_gap));
        font-size: var(--adw-fontsize-small);
        font-weight: var(--adw-fontweight-bold);

        background-color: var(--_bg);
        color: inherit;
        text-decoration: none;
        text-align: center;
        border-radius: var(--adw-radius-medium);
      }
      .link::slotted(:focus-visible) {
        text-decoration: underline;
        outline: none;
      }

      .icon::slotted(*) {
        top: var(--_padding);
        left: 50%;
        margin: 0 auto;
        position: absolute;
        font-size: var(--_icon-size);

        pointer-events: none;

        transform: translateX(-50%);
      }
    `}render(){return Y`
      <slot class="icon" name="icon"></slot>
      <slot class="link"></slot>
    `}}co.defaultTagName="adw-nav-item";ym([Hr({type:Boolean,attribute:!0,reflect:!0})],co.prototype,"active",2);var Tm=Object.defineProperty,km=Object.getOwnPropertyDescriptor,Em=(r,e,t,n)=>{for(var o=n>1?void 0:n?km(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&Tm(e,t,o),o};class so extends tr{static get styles(){return gr`
      * {
        box-sizing: border-box;
      }

      :host {
        --_size: var(--adw-progress--size, calc(1.8 * var(--adw-unit)));
        --_zindex: var(--adw-progress--zindex, 0);
        --_bg: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          var(--adw-color-bg-lightness)
        );

        display: inline-flex;
        width: var(--_size);
        height: var(--_size);
        padding: 1px;
        justify-content: stretch;
        align-items: stretch;
        border: 1px solid currentColor;

        border-radius: 50%;
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          var(--adw-color-primary-lightness)
        );
        z-index: var(--_zindex);
      }

      :host([value^="0"]) {
        padding: 2px;

        background-color: var(--_bg);
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(var(--adw-color-fg-lightness) + var(--adw-lightness-step) * 0.5)
        );
      }

      :host([value]:not([value^="0"])) {
        color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
      }

      .progress {
        display: none;
        flex: 1;
        position: relative;
        transform: rotate(45deg);
      }
      :host([value^="0"]) > .progress {
        display: block;
      }

      .inner-fill,
      .inner-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: calc((var(--_size) - 6px) * 0.5) solid transparent;

        border-radius: 50%;
        border-bottom-color: currentColor;
        border-left-color: currentColor;
      }
      .inner-fill {
        transform: scale(0.98) rotate(var(--_rotation));
      }
      .inner-mask {
        color: var(--_bg);
        z-index: calc(var(--_zindex) + 1);

        transform: scale(1.15);
      }

      .check {
        display: none;
      }
      :host([value]:not([value^="0"])) > .check {
        display: block;
        flex-basis: 100%;

        fill: currentColor;
      }
    `}render(){if(typeof this.value!="number")return Y``;const e=Math.min(this.value*360,180),t=Math.min(this.value*360,360),n=this.value>.5?"calc(var(--_zindex) + 2)":"var(--_zindex)";return Y`
      <div class="progress" role="presentation">
        <div class="inner-fill" style="--_rotation: ${e}deg;"></div>
        <div
          class="inner-fill"
          style="--_rotation: ${t}deg; z-index: ${n};"
        ></div>
        <div class="inner-mask"></div>
      </div>

      <svg
        class="check"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7253 3.44353C11.0142 3.63242 11.0953 4.01976 10.9064 4.30866L6.93969 10.3753C6.83953 10.5285 6.67727 10.6301 6.49572 10.6533C6.31417 10.6764 6.13159 10.6189 5.99617 10.4958L3.4295 8.16243C3.17409 7.93024 3.15526 7.53496 3.38746 7.27954C3.61965 7.02413 4.01493 7.00531 4.27034 7.2375L6.29462 9.07776L9.86015 3.6246C10.049 3.3357 10.4364 3.25463 10.7253 3.44353Z"
        />
      </svg>
    `}}so.defaultTagName="adw-progress";Em([Hr({attribute:!0,reflect:!0,type:Number})],so.prototype,"value",2);class Ju extends tr{static get styles(){return gr`
      :host {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
      }

      ::slotted(select) {
        --_bg-level: 1;

        --_gradient-start: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * var(--_bg-level) + 1%)
        );
        --_gradient-end: hsl(
          var(--adw-color-bg-hue),
          calc(var(--adw-color-bg-saturation) + 1%),
          calc(var(--adw-color-bg-lightness) * var(--_bg-level) - 5%)
        );

        position: relative;
        width: 100%;
        appearance: none;
        padding: 4px 8px;
        padding-right: 20px;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            var(--adw-color-border-lightness)
          );
        box-sizing: border-box;
        font-size: var(--adw-fontsize-medium);

        background: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border-radius: var(--adw-radius-medium);
        box-shadow: none;
        color: currentColor;
        outline: none;
      }

      ::slotted(select:hover) {
        --_bg-level: 1.12;
      }

      ::slotted(select:active) {
        --_bg-level: 0.85;
      }

      ::slotted(select:focus-visible) {
        border-color: hsl(
          var(--adw-color-primary-hue),
          var(--adw-color-primary-saturation),
          var(--adw-color-primary-lightness)
        );
        box-shadow: 0 0 0 var(--adw-spacing-xsmall)
          hsla(
            var(--adw-color-primary-hue),
            var(--adw-color-primary-saturation),
            var(--adw-color-primary-lightness),
            0.6
          );
        outline: none;
      }

      .caret {
        position: absolute;
        right: 8px;
        top: 50%;
        width: 8px;
        height: 6px;

        transform: translateY(-50%);
      }
    `}render(){return Y`
      <slot></slot>

      <svg
        class="caret"
        role="presentation"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4.5.5359 0h6.9282L4 4.5Z" fill="currentColor" />
      </svg>
    `}}Ju.defaultTagName="adw-select";var Dm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,$o=(r,e,t,n)=>{for(var o=n>1?void 0:n?Cm(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(n?u(e,t,o):u(o))||o);return n&&o&&Dm(e,t,o),o},Pm=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},zr=(r,e,t)=>(Pm(r,e,"read from private field"),t?t.call(r):e.get(r)),lo=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},je,Pn,Sn;class Mt extends tr{constructor(){super();this.checked=!1,this.readOnly=!1,this.disabled=!1,lo(this,je,Te()),lo(this,Pn,()=>{this.disabled||this.readOnly||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}),lo(this,Sn,()=>{this.setAttribute("aria-checked",String(this.checked)),this.setAttribute("aria-readonly",String(this.readOnly)),this.setAttribute("aria-disabled",String(this.disabled))}),this.addEventListener("click",()=>{zr(this,Pn).call(this)},{passive:!0}),this.addEventListener("keypress",e=>{if(!e.isComposing)switch(e.key){case" ":e.preventDefault(),this.scrollIntoView(),zr(this,Pn).call(this)}})}static get styles(){return gr`
      :host {
        --_saturation-adjust: 1;
        --_lightness-strength: 1;

        position: relative;
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "on off";
        gap: 2px;
        border: 1px solid
          hsl(
            var(--adw-color-border-hue),
            var(--adw-color-border-saturation),
            calc(
              var(--adw-color-border-lightness) * var(--_lightness-strength) +
                var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
            )
          );

        background-color: hsl(
          var(--adw-color-bg-hue),
          calc(var(--adw-color-bg-saturation) * var(--_saturation-adjust)),
          calc(
            var(--adw-color-bg-lightness) * 0.95 * var(--_lightness-strength) +
              (
                var(--_adw-color-bg-lightness) *
                  (1 - var(--_lightness-strength))
              )
          )
        );
        color: hsl(
          var(--adw-color-fg-hue),
          var(--adw-color-fg-saturation),
          calc(
            var(--adw-color-fg-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
        border-radius: var(--adw-radius-medium);
        cursor: pointer;

        transition: background-color 0.2s ease, color 0.2s ease;
      }
      :host([aria-checked="true"]) {
        background-color: hsl(
          var(--adw-color-primary-hue),
          calc(var(--adw-color-primary-saturation) * var(--_saturation-adjust)),
          calc(
            var(--adw-color-primary-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
        border-color: hsl(
          var(--adw-color-primary-hue),
          calc(var(--adw-color-primary-saturation) * var(--_saturation-adjust)),
          calc(
            (var(--adw-color-primary-lightness) * 0.8) *
              var(--_lightness-strength) + var(--adw-color-bg-lightness) *
              (1 - var(--_lightness-strength))
          )
        );
        color: hsl(
          var(--adw-color-onprimary-hue),
          var(--adw-color-onprimary-saturation),
          calc(
            var(--adw-color-onprimary-lightness) * var(--_lightness-strength) +
              var(--adw-color-bg-lightness) * (1 - var(--_lightness-strength))
          )
        );
      }
      :host([disabled]),
      :host([readonly]) {
        --_saturation-adjust: 0.2;
        --_lightness-strength: 0.3;

        cursor: not-allowed;
      }

      .on,
      .off {
        padding: calc(var(--adw-spacing-xsmall) * 0.5) var(--adw-spacing-small);
        font-size: var(--adw-fontsize-medium);
        line-height: var(--adw-fontsize-dense);
        text-align: center;

        user-select: none;
      }
      .on {
        grid-area: on;
      }
      .off {
        grid-area: off;
      }

      .block {
        --_gradient-start: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * 0.85 + 100% * 0.15)
        );
        --_gradient-end: hsl(
          var(--adw-color-bg-hue),
          var(--adw-color-bg-saturation),
          calc(var(--adw-color-bg-lightness) * 0.85 + 80% * 0.15)
        );
        background-image: linear-gradient(
          180deg,
          var(--_gradient-start) 0%,
          var(--_gradient-end) 100%
        );
        border: inherit;
        margin: -1px;
        grid-area: on;

        border-radius: inherit;
      }
      .block[data-state="on"] {
        grid-area: off;
      }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","switch"),this.hasAttribute("tabindex")||(this.tabIndex=0),zr(this,Sn).call(this)}render(){return Y`
      <div class="on"><slot name="on">ON</slot></div>
      <div class="off"><slot name="off">OFF</slot></div>
      <div class="block" ${se(zr(this,je))}></div>
    `}updated(e){if(super.updated(e),e.has("checked")&&(zr(this,Sn).call(this),zr(this,je).value)){const t=zr(this,je).value.getBoundingClientRect();zr(this,je).value.dataset.state=this.checked?"on":"off";const n=zr(this,je).value.getBoundingClientRect(),o=t.left-n.left;zr(this,je).value.animate([{transform:`translateX(${o}px)`},{transform:"translateX(0)"}],{duration:200,easing:"ease"})}}}je=new WeakMap;Pn=new WeakMap;Sn=new WeakMap;Mt.defaultTagName="adw-switch";$o([Hr({attribute:!0,type:Boolean})],Mt.prototype,"checked",2);$o([Hr({attribute:!0,type:Boolean,reflect:!0})],Mt.prototype,"readOnly",2);$o([Hr({attribute:!0,type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);const Sm=[Ka,to,no,uo,ro,kn,Mu,co,so,Ju,Mt];function Bm(){Sm.forEach(r=>{customElements.get(r.defaultTagName)||customElements.define(r.defaultTagName,r)})}Bm();const nt=gr`
  :host {
    display: inline-flex;
    vertical-align: baseline;
  }

  .icon {
    width: auto;
    height: 1em;
  }
`;class Fu extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Fu.defaultTagName="radix-icons-backpack";class Ou extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Ou.defaultTagName="radix-icons-check";class Hu extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Hu.defaultTagName="radix-icons-dots-vertical";class Iu extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1464 1.14645C12.3417 0.951184 12.6583 0.951184 12.8535 1.14645L14.8535 3.14645C15.0488 3.34171 15.0488 3.65829 14.8535 3.85355L10.9109 7.79618C10.8349 7.87218 10.7471 7.93543 10.651 7.9835L6.72359 9.94721C6.53109 10.0435 6.29861 10.0057 6.14643 9.85355C5.99425 9.70137 5.95652 9.46889 6.05277 9.27639L8.01648 5.34897C8.06455 5.25283 8.1278 5.16507 8.2038 5.08907L12.1464 1.14645ZM12.5 2.20711L8.91091 5.79618L7.87266 7.87267L8.12731 8.12732L10.2038 7.08907L13.7929 3.5L12.5 2.20711ZM9.99998 2L8.99998 3H4.9C4.47171 3 4.18056 3.00039 3.95552 3.01877C3.73631 3.03668 3.62421 3.06915 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3.06915 3.62421 3.03669 3.73631 3.01878 3.95552C3.00039 4.18056 3 4.47171 3 4.9V11.1C3 11.5283 3.00039 11.8194 3.01878 12.0445C3.03669 12.2637 3.06915 12.3758 3.10899 12.454C3.20487 12.6422 3.35785 12.7951 3.54601 12.891C3.62421 12.9309 3.73631 12.9633 3.95552 12.9812C4.18056 12.9996 4.47171 13 4.9 13H11.1C11.5283 13 11.8194 12.9996 12.0445 12.9812C12.2637 12.9633 12.3758 12.9309 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C12.9309 12.3758 12.9633 12.2637 12.9812 12.0445C12.9996 11.8194 13 11.5283 13 11.1V6.99998L14 5.99998V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H4.9H4.87934C4.47686 14 4.14468 14 3.87409 13.9779C3.59304 13.9549 3.33469 13.9057 3.09202 13.782C2.7157 13.5903 2.40973 13.2843 2.21799 12.908C2.09434 12.6653 2.04506 12.407 2.0221 12.1259C1.99999 11.8553 1.99999 11.5231 2 11.1207V11.1206V11.1V4.9V4.87935V4.87932V4.87931C1.99999 4.47685 1.99999 4.14468 2.0221 3.87409C2.04506 3.59304 2.09434 3.33469 2.21799 3.09202C2.40973 2.71569 2.7157 2.40973 3.09202 2.21799C3.33469 2.09434 3.59304 2.04506 3.87409 2.0221C4.14468 1.99999 4.47685 1.99999 4.87932 2H4.87935H4.9H9.99998Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Iu.defaultTagName="radix-icons-pencil2";class Uu extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Uu.defaultTagName="radix-icons-timer";class Wu extends tr{static get styles(){return nt}render(){return Y`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Wu.defaultTagName="radix-icons-trash";const Vm=[Fu,Ou,Hu,Iu,Uu,Wu];function Rm(){Vm.forEach(r=>{customElements.get(r.defaultTagName)||customElements.define(r.defaultTagName,r)})}Rm();if("serviceWorker"in navigator){const r=new URL("sw.js",location.href);navigator.serviceWorker.register(r).catch(e=>{console.group("Failed to register ServiceWorker"),console.info("worker file: "+r.href),console.error(e),console.groupEnd()})}async function Lm(){const r=await nh();r&&document.documentElement.setAttribute("data-adw-theme",r.theme);const e=eh.App.App.init({flags:{cssModules:{"Views.Timer":nm,"Views.NewTimer":Gh,"Views.RandomEventCounter":Lh,"Views.Layout":Th,"Views.NotFound":Fh,"Views.About":mh,"Views.Config":Ah},servers:vh,packageInfo:{version:"2.0.0",license:"GPL-3.0-only",homepage:"https://pocka.github.io/genshin-utils/",author:{name:"Shota FUJI (pocka)"},contributors:[],repository:{type:"git",url:"https://github.com/pocka/genshin-utils"},bugs:{url:"https://github.com/pocka/genshin-utils/issues"}},mode:"production",profile:r,vibrationApi:"vibrate"in navigator,translation:Tn}});oh(e.ports),th(e.ports),ah(e.ports),ih(e.ports),lh(e.ports,{profile:r})}Lm();
