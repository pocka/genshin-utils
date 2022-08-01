import{r as ac,a as nc,l as Ao,m as oc,e as Nr,s as tr,b as ke,c as Ar,$ as Z,n as $e,t as ic,w as uc}from"./vendor.dfa7d2d4.js";const cc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};cc();ac(nc);function le(r,e,t){return t.a=r,t.f=e,t}function $(r){return le(2,r,function(e){return function(t){return r(e,t)}})}function y(r){return le(3,r,function(e){return function(t){return function(a){return r(e,t,a)}}})}function Y(r){return le(4,r,function(e){return function(t){return function(a){return function(o){return r(e,t,a,o)}}}})}function mr(r){return le(5,r,function(e){return function(t){return function(a){return function(o){return function(i){return r(e,t,a,o,i)}}}}})}function st(r){return le(6,r,function(e){return function(t){return function(a){return function(o){return function(i){return function(u){return r(e,t,a,o,i,u)}}}}}})}function ve(r){return le(7,r,function(e){return function(t){return function(a){return function(o){return function(i){return function(u){return function(s){return r(e,t,a,o,i,u,s)}}}}}}})}function Ra(r){return le(8,r,function(e){return function(t){return function(a){return function(o){return function(i){return function(u){return function(s){return function(v){return r(e,t,a,o,i,u,s,v)}}}}}}}})}function jo(r){return le(9,r,function(e){return function(t){return function(a){return function(o){return function(i){return function(u){return function(s){return function(v){return function(l){return r(e,t,a,o,i,u,s,v,l)}}}}}}}}})}function n(r,e,t){return r.a===2?r.f(e,t):r(e)(t)}function h(r,e,t,a){return r.a===3?r.f(e,t,a):r(e)(t)(a)}function J(r,e,t,a,o){return r.a===4?r.f(e,t,a,o):r(e)(t)(a)(o)}function T(r,e,t,a,o,i){return r.a===5?r.f(e,t,a,o,i):r(e)(t)(a)(o)(i)}function Qr(r,e,t,a,o,i,u){return r.a===6?r.f(e,t,a,o,i,u):r(e)(t)(a)(o)(i)(u)}function yo(r,e,t,a,o,i,u,s){return r.a===7?r.f(e,t,a,o,i,u,s):r(e)(t)(a)(o)(i)(u)(s)}function Ge(r,e,t,a,o,i,u,s,v){return r.a===8?r.f(e,t,a,o,i,u,s,v):r(e)(t)(a)(o)(i)(u)(s)(v)}function sc(r,e,t,a,o,i,u,s,v,l){return r.a===9?r.f(e,t,a,o,i,u,s,v,l):r(e)(t)(a)(o)(i)(u)(s)(v)(l)}function G(r,e){for(var t,a=[],o=Fa(r,e,0,a);o&&(t=a.pop());o=Fa(t.a,t.b,0,a));return o}function Fa(r,e,t,a){if(r===e)return!0;if(typeof r!="object"||r===null||e===null)return typeof r=="function"&&De(5),!1;if(t>100)return a.push(p(r,e)),!0;r.$<0&&(r=tn(r),e=tn(e));for(var o in r)if(!Fa(r[o],e[o],t+1,a))return!1;return!0}$(G);$(function(r,e){return!G(r,e)});function U(r,e,t){if(typeof r!="object")return r===e?0:r<e?-1:1;if(typeof r.$=="undefined")return(t=U(r.a,e.a))||(t=U(r.b,e.b))?t:U(r.c,e.c);for(;r.b&&e.b&&!(t=U(r.a,e.a));r=r.b,e=e.b);return t||(r.b?1:e.b?-1:0)}$(function(r,e){return U(r,e)<0});$(function(r,e){return U(r,e)<1});$(function(r,e){return U(r,e)>0});$(function(r,e){return U(r,e)>=0});var $c=$(function(r,e){var t=U(r,e);return t<0?Xo:t?i$:Yo}),Ce=0;function p(r,e){return{a:r,b:e}}function $t(r,e,t){return{a:r,b:e,c:t}}function Kr(r){return r}function M(r,e){var t={};for(var a in r)t[a]=r[a];for(var a in e)t[a]=e[a];return t}$(Gr);function Gr(r,e){if(typeof r=="string")return r+e;if(!r.b)return e;var t=zr(r.a,e);r=r.b;for(var a=t;r.b;r=r.b)a=a.b=zr(r.a,e);return t}var _={$:0};function zr(r,e){return{$:1,a:r,b:e}}var lc=$(zr);function c(r){for(var e=_,t=r.length;t--;)e=zr(r[t],e);return e}function Oa(r){for(var e=[];r.b;r=r.b)e.push(r.a);return e}var vc=y(function(r,e,t){for(var a=[];e.b&&t.b;e=e.b,t=t.b)a.push(n(r,e.a,t.a));return c(a)});Y(function(r,e,t,a){for(var o=[];e.b&&t.b&&a.b;e=e.b,t=t.b,a=a.b)o.push(h(r,e.a,t.a,a.a));return c(o)});mr(function(r,e,t,a,o){for(var i=[];e.b&&t.b&&a.b&&o.b;e=e.b,t=t.b,a=a.b,o=o.b)i.push(J(r,e.a,t.a,a.a,o.a));return c(i)});st(function(r,e,t,a,o,i){for(var u=[];e.b&&t.b&&a.b&&o.b&&i.b;e=e.b,t=t.b,a=a.b,o=o.b,i=i.b)u.push(T(r,e.a,t.a,a.a,o.a,i.a));return c(u)});$(function(r,e){return c(Oa(e).sort(function(t,a){return U(r(t),r(a))}))});$(function(r,e){return c(Oa(e).sort(function(t,a){var o=n(r,t,a);return o===Yo?0:o===Xo?-1:1}))});var fc=[];function pc(r){return r.length}var dc=y(function(r,e,t){for(var a=new Array(r),o=0;o<r;o++)a[o]=t(e+o);return a}),hc=$(function(r,e){for(var t=new Array(r),a=0;a<r&&e.b;a++)t[a]=e.a,e=e.b;return t.length=a,p(t,e)});$(function(r,e){return e[r]});y(function(r,e,t){for(var a=t.length,o=new Array(a),i=0;i<a;i++)o[i]=t[i];return o[r]=e,o});$(function(r,e){for(var t=e.length,a=new Array(t+1),o=0;o<t;o++)a[o]=e[o];return a[t]=r,a});y(function(r,e,t){for(var a=t.length,o=0;o<a;o++)e=n(r,t[o],e);return e});var mc=y(function(r,e,t){for(var a=t.length-1;a>=0;a--)e=n(r,t[a],e);return e});$(function(r,e){for(var t=e.length,a=new Array(t),o=0;o<t;o++)a[o]=r(e[o]);return a});y(function(r,e,t){for(var a=t.length,o=new Array(a),i=0;i<a;i++)o[i]=n(r,e+i,t[i]);return o});y(function(r,e,t){return t.slice(r,e)});y(function(r,e,t){var a=e.length,o=r-a;o>t.length&&(o=t.length);for(var i=a+o,u=new Array(i),s=0;s<a;s++)u[s]=e[s];for(var s=0;s<o;s++)u[s+a]=t[s];return u});$(function(r,e){return e});$(function(r,e){return console.log(r+": "+bc()),e});function bc(r){return"<internals>"}function De(r){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}$(function(r,e){return r+e});$(function(r,e){return r-e});$(function(r,e){return r*e});$(function(r,e){return r/e});$(function(r,e){return r/e|0});$(Math.pow);$(function(r,e){return e%r});var gc=$(function(r,e){var t=e%r;return r===0?De(11):t>0&&r<0||t<0&&r>0?t+r:t});$(Math.atan2);var wc=Math.ceil,_c=Math.floor,To=Math.log;$(function(r,e){return r&&e});$(function(r,e){return r||e});$(function(r,e){return r!==e});$(function(r,e){return r+e});function Ac(r){var e=r.charCodeAt(0);return isNaN(e)?E:R(55296<=e&&e<=56319?p(Kr(r[0]+r[1]),r.slice(2)):p(Kr(r[0]),r.slice(1)))}$(function(r,e){return r+e});function jc(r){return r.length}$(function(r,e){for(var t=e.length,a=new Array(t),o=0;o<t;){var i=e.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=r(Kr(e[o]+e[o+1])),o+=2;continue}a[o]=r(Kr(e[o])),o++}return a.join("")});$(function(r,e){for(var t=[],a=e.length,o=0;o<a;){var i=e[o],u=e.charCodeAt(o);o++,55296<=u&&u<=56319&&(i+=e[o],o++),r(Kr(i))&&t.push(i)}return t.join("")});y(function(r,e,t){for(var a=t.length,o=0;o<a;){var i=t[o],u=t.charCodeAt(o);o++,55296<=u&&u<=56319&&(i+=t[o],o++),e=n(r,Kr(i),e)}return e});y(function(r,e,t){for(var a=t.length;a--;){var o=t[a],i=t.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=t[a]+o),e=n(r,Kr(o),e)}return e});var yc=$(function(r,e){return e.split(r)}),Tc=$(function(r,e){return e.join(r)}),kc=y(function(r,e,t){return t.slice(r,e)});function Cc(r){return r.trim()}$(function(r,e){for(var t=e.length;t--;){var a=e[t],o=e.charCodeAt(t);if(56320<=o&&o<=57343&&(t--,a=e[t]+a),r(Kr(a)))return!0}return!1});var Dc=$(function(r,e){for(var t=e.length;t--;){var a=e[t],o=e.charCodeAt(t);if(56320<=o&&o<=57343&&(t--,a=e[t]+a),!r(Kr(a)))return!1}return!0}),Ec=$(function(r,e){return e.indexOf(r)>-1}),Pc=$(function(r,e){return e.indexOf(r)===0}),Vc=$(function(r,e){return e.length>=r.length&&e.lastIndexOf(r)===e.length-r.length}),Bc=$(function(r,e){var t=r.length;if(t<1)return _;for(var a=0,o=[];(a=e.indexOf(r,a))>-1;)o.push(a),a=a+t;return c(o)});function Sc(r){return r+""}function Lc(r){for(var e=0,t=r.charCodeAt(0),a=t==43||t==45?1:0,o=a;o<r.length;++o){var i=r.charCodeAt(o);if(i<48||57<i)return E;e=10*e+i-48}return o==a?E:R(t==45?-e:e)}function xc(r){var e=r.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+r.charCodeAt(1)-56320+65536:e}function Mc(r){return{$:0,a:r}}function Rc(r){return{$:1,a:r}}function Nt(r){return{$:2,b:r}}var Fc=Nt(function(r){return typeof r!="number"?Sr("an INT",r):-2147483647<r&&r<2147483647&&(r|0)===r||isFinite(r)&&!(r%1)?yr(r):Sr("an INT",r)}),Oc=Nt(function(r){return typeof r=="boolean"?yr(r):Sr("a BOOL",r)}),Hc=Nt(function(r){return yr(br(r))}),Ic=Nt(function(r){return typeof r=="string"?yr(r):r instanceof String?yr(r+""):Sr("a STRING",r)});function Uc(r){return{$:3,b:r}}function Jc(r){return{$:5,c:r}}var Wc=$(function(r,e){return{$:6,d:r,b:e}});$(function(r,e){return{$:7,e:r,b:e}});function qc(r){return{$:8,b:r}}function fe(r,e){return{$:9,f:r,g:e}}var Nc=$(function(r,e){return{$:10,b:e,h:r}});function Gc(r){return{$:11,g:r}}var zc=$(function(r,e){return fe(r,[e])}),Zc=y(function(r,e,t){return fe(r,[e,t])}),Yc=Y(function(r,e,t,a){return fe(r,[e,t,a])}),Xc=mr(function(r,e,t,a,o){return fe(r,[e,t,a,o])}),Qc=st(function(r,e,t,a,o,i){return fe(r,[e,t,a,o,i])});ve(function(r,e,t,a,o,i,u){return fe(r,[e,t,a,o,i,u])});var Kc=Ra(function(r,e,t,a,o,i,u,s){return fe(r,[e,t,a,o,i,u,s])}),rs=jo(function(r,e,t,a,o,i,u,s,v){return fe(r,[e,t,a,o,i,u,s,v])});$(function(r,e){try{var t=JSON.parse(e);return jr(r,t)}catch(a){return gr(n(an,"This is not valid JSON! "+a.message,br(e)))}});var Ha=$(function(r,e){return jr(r,Ee(e))});function jr(r,e){switch(r.$){case 2:return r.b(e);case 5:return e===null?yr(r.c):Sr("null",e);case 3:return Gt(e)?ko(r.b,e,c):Sr("a LIST",e);case 4:return Gt(e)?ko(r.b,e,es):Sr("an ARRAY",e);case 6:var t=r.d;if(typeof e!="object"||e===null||!(t in e))return Sr("an OBJECT with a field named `"+t+"`",e);var a=jr(r.b,e[t]);return Mr(a)?a:gr(n(Ko,t,a.a));case 7:var o=r.e;if(!Gt(e))return Sr("an ARRAY",e);if(o>=e.length)return Sr("a LONGER array. Need index "+o+" but only see "+e.length+" entries",e);var a=jr(r.b,e[o]);return Mr(a)?a:gr(n(ri,o,a.a));case 8:if(typeof e!="object"||e===null||Gt(e))return Sr("an OBJECT",e);var i=_;for(var u in e)if(e.hasOwnProperty(u)){var a=jr(r.b,e[u]);if(!Mr(a))return gr(n(Ko,u,a.a));i=zr(p(u,a.a),i)}return yr(be(i));case 9:for(var s=r.f,v=r.g,l=0;l<v.length;l++){var a=jr(v[l],e);if(!Mr(a))return a;s=s(a.a)}return yr(s);case 10:var a=jr(r.b,e);return Mr(a)?jr(r.h(a.a),e):a;case 11:for(var d=_,g=r.g;g.b;g=g.b){var a=jr(g.a,e);if(Mr(a))return a;d=zr(a.a,d)}return gr(u$(be(d)));case 1:return gr(n(an,r.a,br(e)));case 0:return yr(r.a)}}function ko(r,e,t){for(var a=e.length,o=new Array(a),i=0;i<a;i++){var u=jr(r,e[i]);if(!Mr(u))return gr(n(ri,i,u.a));o[i]=u.a}return yr(t(o))}function Gt(r){return Array.isArray(r)||typeof FileList!="undefined"&&r instanceof FileList}function es(r){return n(k$,r.length,function(e){return r[e]})}function Sr(r,e){return gr(n(an,"Expecting "+r,br(e)))}function ze(r,e){if(r===e)return!0;if(r.$!==e.$)return!1;switch(r.$){case 0:case 1:return r.a===e.a;case 2:return r.b===e.b;case 5:return r.c===e.c;case 3:case 4:case 8:return ze(r.b,e.b);case 6:return r.d===e.d&&ze(r.b,e.b);case 7:return r.e===e.e&&ze(r.b,e.b);case 9:return r.f===e.f&&Co(r.g,e.g);case 10:return r.h===e.h&&ze(r.b,e.b);case 11:return Co(r.g,e.g)}}function Co(r,e){var t=r.length;if(t!==e.length)return!1;for(var a=0;a<t;a++)if(!ze(r[a],e[a]))return!1;return!0}var ts=$(function(r,e){return JSON.stringify(Ee(e),null,r)+""});function br(r){return r}function Ee(r){return r}function as(){return[]}function ns(){return{}}var os=y(function(r,e,t){return t[r]=Ee(e),t});function is(r){return $(function(e,t){return t.push(Ee(r(e))),t})}var us=br(null);function Zr(r){return{$:0,a:r}}function cs(r){return{$:1,a:r}}function fr(r){return{$:2,b:r,c:null}}var Ia=$(function(r,e){return{$:3,b:r,d:e}});$(function(r,e){return{$:4,b:r,d:e}});function ss(r){return{$:5,b:r}}var $s=0;function zt(r){var e={$:0,e:$s++,f:r,g:null,h:[]};return Wa(e),e}function Ua(r){return fr(function(e){e(Zr(zt(r)))})}function Do(r,e){r.h.push(e),Wa(r)}var ls=$(function(r,e){return fr(function(t){Do(r,e),t(Zr(Ce))})});function vs(r){return fr(function(e){var t=r.f;t.$===2&&t.c&&t.c(),r.f=null,e(Zr(Ce))})}var Ja=!1,Eo=[];function Wa(r){if(Eo.push(r),!Ja){for(Ja=!0;r=Eo.shift();)fs(r);Ja=!1}}function fs(r){for(;r.f;){var e=r.f.$;if(e===0||e===1){for(;r.g&&r.g.$!==e;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else if(e===2){r.f.c=r.f.b(function(t){r.f=t,Wa(r)});return}else if(e===5){if(r.h.length===0)return;r.f=r.f.b(r.h.shift())}else r.g={$:e===3?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}function Po(r){return fr(function(e){var t=setTimeout(function(){e(Zr(Ce))},r);return function(){clearTimeout(t)}})}Y(function(r,e,t,a){return qa(e,a,r.cs,r.di,r.c5,function(){return function(){}})});function qa(r,e,t,a,o,i){var u=n(Ha,r,br(e?e.flags:void 0));Mr(u)||De(2);var s={},v=t(u.a),l=v.a,d=i(m,l),g=ps(s,m);function m(b,A){var k=n(a,b,l);d(l=k.a,A),xo(s,k.b,o(l))}return xo(s,v.b,o(l)),g?{ports:g}:{}}var sr={};function ps(r,e){var t;for(var a in sr){var o=sr[a];o.a&&(t=t||{},t[a]=o.a(a,e)),r[a]=ds(o,e)}return t}function Vo(r,e,t,a,o){return{b:r,c:e,d:t,e:a,f:o}}function ds(r,e){var t={g:e,h:void 0},a=r.c,o=r.d,i=r.e,u=r.f;function s(v){return n(Ia,s,ss(function(l){var d=l.a;return l.$===0?h(o,t,d,v):i&&u?J(a,t,d.i,d.j,v):h(a,t,i?d.i:d.j,v)}))}return t.h=zt(n(Ia,s,r.b))}var hs=$(function(r,e){return fr(function(t){r.g(e),t(Zr(Ce))})}),ms=$(function(r,e){return n(ls,r.h,{$:0,a:e})});function Zt(r){return function(e){return{$:1,k:r,l:e}}}function Bo(r){return{$:2,m:r}}var So=$(function(r,e){return{$:3,n:r,o:e}}),Lo=[],Na=!1;function xo(r,e,t){if(Lo.push({p:r,q:e,r:t}),!Na){Na=!0;for(var a;a=Lo.shift();)bs(a.p,a.q,a.r);Na=!1}}function bs(r,e,t){var a={};Yt(!0,e,a,null),Yt(!1,t,a,null);for(var o in r)Do(r[o],{$:"fx",a:a[o]||{i:_,j:_}})}function Yt(r,e,t,a){switch(e.$){case 1:var o=e.k,i=gs(r,o,a,e.l);t[o]=ws(r,i,t[o]);return;case 2:for(var u=e.m;u.b;u=u.b)Yt(r,u.a,t,a);return;case 3:Yt(r,e.o,t,{s:e.n,t:a});return}}function gs(r,e,t,a){function o(u){for(var s=t;s;s=s.t)u=s.s(u);return u}var i=r?sr[e].e:sr[e].f;return n(i,o,a)}function ws(r,e,t){return t=t||{i:_,j:_},r?t.i=zr(e,t.i):t.j=zr(e,t.j),t}function Mo(r){sr[r]&&De(3)}function lt(r,e){return Mo(r),sr[r]={e:_s,u:e,a:As},Zt(r)}var _s=$(function(r,e){return e});function As(r){var e=[],t=sr[r].u,a=Po(0);sr[r].b=a,sr[r].c=y(function(u,s,v){for(;s.b;s=s.b)for(var l=e,d=Ee(t(s.a)),g=0;g<l.length;g++)l[g](d);return a});function o(u){e.push(u)}function i(u){e=e.slice();var s=e.indexOf(u);s>=0&&e.splice(s,1)}return{subscribe:o,unsubscribe:i}}function Ga(r,e){return Mo(r),sr[r]={f:js,u:e,a:ys},Zt(r)}var js=$(function(r,e){return function(t){return r(e(t))}});function ys(r,e){var t=_,a=sr[r].u,o=Zr(null);sr[r].b=o,sr[r].c=y(function(u,s,v){return t=s,o});function i(u){var s=n(Ha,a,br(u));Mr(s)||De(4,r,s.a);for(var v=s.a,l=t;l.b;l=l.b)e(l.a(v))}return{send:i}}var Xt,re=typeof document!="undefined"?document:{};function za(r,e){r.appendChild(e)}Y(function(r,e,t,a){var o=a.node;return o.parentNode.replaceChild(de(r,function(){}),o),{}});function Za(r){return{$:0,a:r}}var Ts=$(function(r,e){return $(function(t,a){for(var o=[],i=0;a.b;a=a.b){var u=a.a;i+=u.b||0,o.push(u)}return i+=o.length,{$:1,c:e,d:Io(t),e:o,f:r,b:i}})}),W=Ts(void 0),ks=$(function(r,e){return $(function(t,a){for(var o=[],i=0;a.b;a=a.b){var u=a.a;i+=u.b.b||0,o.push(u)}return i+=o.length,{$:2,c:e,d:Io(t),e:o,f:r,b:i}})}),Cs=ks(void 0),Ds=$(function(r,e){return{$:4,j:r,k:e,b:1+(e.b||0)}});function pe(r,e){return{$:5,l:r,m:e,k:void 0}}$(function(r,e){return pe([r,e],function(){return r(e)})});y(function(r,e,t){return pe([r,e,t],function(){return n(r,e,t)})});Y(function(r,e,t,a){return pe([r,e,t,a],function(){return h(r,e,t,a)})});mr(function(r,e,t,a,o){return pe([r,e,t,a,o],function(){return J(r,e,t,a,o)})});st(function(r,e,t,a,o,i){return pe([r,e,t,a,o,i],function(){return T(r,e,t,a,o,i)})});ve(function(r,e,t,a,o,i,u){return pe([r,e,t,a,o,i,u],function(){return Qr(r,e,t,a,o,i,u)})});Ra(function(r,e,t,a,o,i,u,s){return pe([r,e,t,a,o,i,u,s],function(){return yo(r,e,t,a,o,i,u,s)})});jo(function(r,e,t,a,o,i,u,s,v){return pe([r,e,t,a,o,i,u,s,v],function(){return Ge(r,e,t,a,o,i,u,s,v)})});var Ro=$(function(r,e){return{$:"a0",n:r,o:e}});$(function(r,e){return{$:"a1",n:r,o:e}});var Ya=$(function(r,e){return{$:"a2",n:r,o:e}}),Fo=$(function(r,e){return{$:"a3",n:r,o:e}});y(function(r,e,t){return{$:"a4",n:e,o:{f:r,o:t}}});function Oo(r){return r=="script"?"p":r}function Es(r){return/^(on|formAction$)/i.test(r)?"data-"+r:r}function Ps(r){return r=="innerHTML"||r=="formAction"?"data-"+r:r}function Vs(r){return/^javascript:/i.test(r.replace(/\s/g,""))?"":r}function Ho(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}$(function(r,e){return e.$==="a0"?n(Ro,e.n,Bs(r,e.o)):e});function Bs(r,e){var t=$n(e);return{$:e.$,a:t?h(wr,t<3?Ss:Ls,N(r),e.a):n(S,r,e.a)}}var Ss=$(function(r,e){return p(r(e.a),e.b)}),Ls=$(function(r,e){return{D:r(e.D),aI:e.aI,aG:e.aG}});function Io(r){for(var e={};r.b;r=r.b){var t=r.a,a=t.$,o=t.n,i=t.o;if(a==="a2"){o==="className"?Uo(e,o,Ee(i)):e[o]=Ee(i);continue}var u=e[a]||(e[a]={});a==="a3"&&o==="class"?Uo(u,o,i):u[o]=i}return e}function Uo(r,e,t){var a=r[e];r[e]=a?a+" "+t:t}function de(r,e){var t=r.$;if(t===5)return de(r.k||(r.k=r.m()),e);if(t===0)return re.createTextNode(r.a);if(t===4){for(var a=r.k,o=r.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:e},u=de(a,i);return u.elm_event_node_ref=i,u}if(t===3){var u=r.h(r.g);return Xa(u,e,r.d),u}var u=r.f?re.createElementNS(r.f,r.c):re.createElement(r.c);Xt&&r.c=="a"&&u.addEventListener("click",Xt(u)),Xa(u,e,r.d);for(var s=r.e,v=0;v<s.length;v++)za(u,de(t===1?s[v]:s[v].b,e));return u}function Xa(r,e,t){for(var a in t){var o=t[a];a==="a1"?xs(r,o):a==="a0"?Fs(r,e,o):a==="a3"?Ms(r,o):a==="a4"?Rs(r,o):(a!=="value"&&a!=="checked"||r[a]!==o)&&(r[a]=o)}}function xs(r,e){var t=r.style;for(var a in e)t[a]=e[a]}function Ms(r,e){for(var t in e){var a=e[t];typeof a!="undefined"?r.setAttribute(t,a):r.removeAttribute(t)}}function Rs(r,e){for(var t in e){var a=e[t],o=a.f,i=a.o;typeof i!="undefined"?r.setAttributeNS(o,t,i):r.removeAttributeNS(o,t)}}function Fs(r,e,t){var a=r.elmFs||(r.elmFs={});for(var o in t){var i=t[o],u=a[o];if(!i){r.removeEventListener(o,u),a[o]=void 0;continue}if(u){var s=u.q;if(s.$===i.$){u.q=i;continue}r.removeEventListener(o,u)}u=Os(e,i),r.addEventListener(o,u,Qa&&{passive:$n(i)<2}),a[o]=u}}var Qa;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qa=!0}}))}catch{}function Os(r,e){function t(a){var o=t.q,i=jr(o.a,a);if(!!Mr(i)){for(var u=$n(o),s=i.a,v=u?u<3?s.a:s.D:s,l=u==1?s.b:u==3&&s.aI,d=(l&&a.stopPropagation(),(u==2?s.b:u==3&&s.aG)&&a.preventDefault(),r),g,m;g=d.j;){if(typeof g=="function")v=g(v);else for(var m=g.length;m--;)v=g[m](v);d=d.p}d(v,l)}}return t.q=e,t}function Hs(r,e){return r.$==e.$&&ze(r.a,e.a)}function Jo(r,e){var t=[];return Lr(r,e,t,0),t}function $r(r,e,t,a){var o={$:e,r:t,s:a,t:void 0,u:void 0};return r.push(o),o}function Lr(r,e,t,a){if(r!==e){var o=r.$,i=e.$;if(o!==i)if(o===1&&i===2)e=zs(e),i=1;else{$r(t,0,a,e);return}switch(i){case 5:for(var u=r.l,s=e.l,v=u.length,l=v===s.length;l&&v--;)l=u[v]===s[v];if(l){e.k=r.k;return}e.k=e.m();var d=[];Lr(r.k,e.k,d,0),d.length>0&&$r(t,1,a,d);return;case 4:for(var g=r.j,m=e.j,b=!1,A=r.k;A.$===4;)b=!0,typeof g!="object"?g=[g,A.j]:g.push(A.j),A=A.k;for(var k=e.k;k.$===4;)b=!0,typeof m!="object"?m=[m,k.j]:m.push(k.j),k=k.k;if(b&&g.length!==m.length){$r(t,0,a,e);return}(b?!Is(g,m):g!==m)&&$r(t,2,a,m),Lr(A,k,t,a+1);return;case 0:r.a!==e.a&&$r(t,3,a,e.a);return;case 1:Wo(r,e,t,a,Us);return;case 2:Wo(r,e,t,a,Js);return;case 3:if(r.h!==e.h){$r(t,0,a,e);return}var D=Ka(r.d,e.d);D&&$r(t,4,a,D);var V=e.i(r.g,e.g);V&&$r(t,5,a,V);return}}}function Is(r,e){for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Wo(r,e,t,a,o){if(r.c!==e.c||r.f!==e.f){$r(t,0,a,e);return}var i=Ka(r.d,e.d);i&&$r(t,4,a,i),o(r,e,t,a)}function Ka(r,e,t){var a;for(var o in r){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=Ka(r[o],e[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in e)){a=a||{},a[o]=t?t==="a1"?"":t==="a0"||t==="a3"?void 0:{f:r[o].f,o:void 0}:typeof r[o]=="string"?"":null;continue}var u=r[o],s=e[o];u===s&&o!=="value"&&o!=="checked"||t==="a0"&&Hs(u,s)||(a=a||{},a[o]=s)}for(var v in e)v in r||(a=a||{},a[v]=e[v]);return a}function Us(r,e,t,a){var o=r.e,i=e.e,u=o.length,s=i.length;u>s?$r(t,6,a,{v:s,i:u-s}):u<s&&$r(t,7,a,{v:u,e:i});for(var v=u<s?u:s,l=0;l<v;l++){var d=o[l];Lr(d,i[l],t,++a),a+=d.b||0}}function Js(r,e,t,a){for(var o=[],i={},u=[],s=r.e,v=e.e,l=s.length,d=v.length,g=0,m=0,b=a;g<l&&m<d;){var A=s[g],k=v[m],D=A.a,V=k.a,C=A.b,q=k.b,er=void 0,ce=void 0;if(D===V){b++,Lr(C,q,o,b),b+=C.b||0,g++,m++;continue}var We=s[g+1],Te=v[m+1];if(We){var ct=We.a,se=We.b;ce=V===ct}if(Te){var Wt=Te.a,qe=Te.b;er=D===Wt}if(er&&ce){b++,Lr(C,qe,o,b),vt(i,o,D,q,m,u),b+=C.b||0,b++,ft(i,o,D,se,b),b+=se.b||0,g+=2,m+=2;continue}if(er){b++,vt(i,o,V,q,m,u),Lr(C,qe,o,b),b+=C.b||0,g+=1,m+=2;continue}if(ce){b++,ft(i,o,D,C,b),b+=C.b||0,b++,Lr(se,q,o,b),b+=se.b||0,g+=2,m+=1;continue}if(We&&ct===Wt){b++,ft(i,o,D,C,b),vt(i,o,V,q,m,u),b+=C.b||0,b++,Lr(se,qe,o,b),b+=se.b||0,g+=2,m+=2;continue}break}for(;g<l;){b++;var A=s[g],C=A.b;ft(i,o,A.a,C,b),b+=C.b||0,g++}for(;m<d;){var Ne=Ne||[],k=v[m];vt(i,o,k.a,k.b,void 0,Ne),m++}(o.length>0||u.length>0||Ne)&&$r(t,8,a,{w:o,x:u,y:Ne})}var qo="_elmW6BL";function vt(r,e,t,a,o,i){var u=r[t];if(!u){u={c:0,z:a,r:o,s:void 0},i.push({r:o,A:u}),r[t]=u;return}if(u.c===1){i.push({r:o,A:u}),u.c=2;var s=[];Lr(u.z,a,s,u.r),u.r=o,u.s.s={w:s,A:u};return}vt(r,e,t+qo,a,o,i)}function ft(r,e,t,a,o){var i=r[t];if(!i){var u=$r(e,9,o,void 0);r[t]={c:1,z:a,r:o,s:u};return}if(i.c===0){i.c=2;var s=[];Lr(a,i.z,s,o),$r(e,9,o,{w:s,A:i});return}ft(r,e,t+qo,a,o)}function No(r,e,t,a){pt(r,e,t,0,0,e.b,a)}function pt(r,e,t,a,o,i,u){for(var s=t[a],v=s.r;v===o;){var l=s.$;if(l===1)No(r,e.k,s.s,u);else if(l===8){s.t=r,s.u=u;var d=s.s.w;d.length>0&&pt(r,e,d,0,o,i,u)}else if(l===9){s.t=r,s.u=u;var g=s.s;if(g){g.A.s=r;var d=g.w;d.length>0&&pt(r,e,d,0,o,i,u)}}else s.t=r,s.u=u;if(a++,!(s=t[a])||(v=s.r)>i)return a}var m=e.$;if(m===4){for(var b=e.k;b.$===4;)b=b.k;return pt(r,b,t,a,o+1,i,r.elm_event_node_ref)}for(var A=e.e,k=r.childNodes,D=0;D<A.length;D++){o++;var V=m===1?A[D]:A[D].b,C=o+(V.b||0);if(o<=v&&v<=C&&(a=pt(k[D],V,t,a,o,C,u),!(s=t[a])||(v=s.r)>i))return a;o=C}return a}function Go(r,e,t,a){return t.length===0?r:(No(r,e,t,a),Qt(r,t))}function Qt(r,e){for(var t=0;t<e.length;t++){var a=e[t],o=a.t,i=Ws(o,a);o===r&&(r=i)}return r}function Ws(r,e){switch(e.$){case 0:return qs(r,e.s,e.u);case 4:return Xa(r,e.u,e.s),r;case 3:return r.replaceData(0,r.length,e.s),r;case 1:return Qt(r,e.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=e.s:r.elm_event_node_ref={j:e.s,p:e.u},r;case 6:for(var t=e.s,o=0;o<t.i;o++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var t=e.s,a=t.e,o=t.v,i=r.childNodes[o];o<a.length;o++)r.insertBefore(de(a[o],e.u),i);return r;case 9:var t=e.s;if(!t)return r.parentNode.removeChild(r),r;var u=t.A;return typeof u.r!="undefined"&&r.parentNode.removeChild(r),u.s=Qt(r,t.w),r;case 8:return Ns(r,e);case 5:return e.s(r);default:De(10)}}function qs(r,e,t){var a=r.parentNode,o=de(e,t);return o.elm_event_node_ref||(o.elm_event_node_ref=r.elm_event_node_ref),a&&o!==r&&a.replaceChild(o,r),o}function Ns(r,e){var t=e.s,a=Gs(t.y,e);r=Qt(r,t.w);for(var o=t.x,i=0;i<o.length;i++){var u=o[i],s=u.A,v=s.c===2?s.s:de(s.z,e.u);r.insertBefore(v,r.childNodes[u.r])}return a&&za(r,a),r}function Gs(r,e){if(!!r){for(var t=re.createDocumentFragment(),a=0;a<r.length;a++){var o=r[a],i=o.A;za(t,i.c===2?i.s:de(i.z,e.u))}return t}}function rn(r){if(r.nodeType===3)return Za(r.textContent);if(r.nodeType!==1)return Za("");for(var e=_,t=r.attributes,a=t.length;a--;){var o=t[a],i=o.name,u=o.value;e=zr(n(Fo,i,u),e)}for(var s=r.tagName.toLowerCase(),v=_,l=r.childNodes,a=l.length;a--;)v=zr(rn(l[a]),v);return h(W,s,e,v)}function zs(r){for(var e=r.e,t=e.length,a=new Array(t),o=0;o<t;o++)a[o]=e[o].b;return{$:1,c:r.c,d:r.d,e:a,f:r.f,b:r.b}}Y(function(r,e,t,a){return qa(e,a,r.cs,r.di,r.c5,function(o,i){var u=r.dj,s=a.node,v=rn(s);return zo(i,function(l){var d=u(l),g=Jo(v,d);s=Go(s,v,g,o),v=d})})});var Zs=Y(function(r,e,t,a){return qa(e,a,r.cs,r.di,r.c5,function(o,i){var u=r.aH&&r.aH(o),s=r.dj,v=re.title,l=re.body,d=rn(l);return zo(i,function(g){Xt=u;var m=s(g),b=W("body")(_)(m.aS),A=Jo(d,b);l=Go(l,d,A,o),d=b,Xt=0,v!==m.F&&(re.title=v=m.F)})})}),Kt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)};function zo(r,e){e(r);var t=0;function a(){t=t===1?0:(Kt(a),e(r),1)}return function(o,i){r=o,i?(e(r),t===2&&(t=1)):(t===0&&Kt(a),t=2)}}function Ys(r){var e=r.cM,t=r.cN,a=function(){a.a(e(en()))};return Zs({aH:function(o){return a.a=o,dt.addEventListener("popstate",a),dt.navigator.userAgent.indexOf("Trident")<0||dt.addEventListener("hashchange",a),$(function(i,u){if(!u.ctrlKey&&!u.metaKey&&!u.shiftKey&&u.button<1&&!i.target&&!i.hasAttribute("download")){u.preventDefault();var s=i.href,v=en(),l=ln(s).a;o(t(l&&v.cW===l.cW&&v.cp===l.cp&&v.cU.a===l.cU.a?D$(l):C$(s)))}})},cs:function(o){return h(r.cs,o,en(),a)},dj:r.dj,di:r.di,c5:r.c5})}function en(){return ln(re.location.href).a||De(1)}$(function(r,e){return n(ht,oa,fr(function(){e&&history.go(e),r()}))});var Xs=$(function(r,e){return n(ht,oa,fr(function(){history.pushState({},"",e),r()}))});$(function(r,e){return n(ht,oa,fr(function(){history.replaceState({},"",e),r()}))});var Qs={addEventListener:function(){},removeEventListener:function(){}},dt=typeof window!="undefined"?window:Qs;y(function(r,e,t){return Ua(fr(function(a){function o(i){zt(t(i))}return r.addEventListener(e,o,Qa&&{passive:!0}),function(){r.removeEventListener(e,o)}}))});$(function(r,e){var t=jr(r,e);return Mr(t)?R(t.a):E});function Zo(r,e){return fr(function(t){Kt(function(){var a=document.getElementById(r);t(a?Zr(e(a)):cs(E$(r)))})})}function Ks(r){return fr(function(e){Kt(function(){e(Zr(r()))})})}$(function(r,e){return Zo(e,function(t){return t[r](),Ce})});$(function(r,e){return Ks(function(){return dt.scroll(r,e),Ce})});y(function(r,e,t){return Zo(r,function(a){return a.scrollLeft=e,a.scrollTop=t,Ce})});function r$(r){return n(ht,oa,fr(function(e){try{dt.location=r}catch{re.location.reload(!1)}}))}function e$(r){try{return R(decodeURIComponent(r))}catch{return E}}function t$(r){return fr(function(e){e(Zr(r(Date.now())))})}var a$=$(function(r,e){return fr(function(t){var a=setInterval(function(){zt(e)},r);return function(){clearInterval(a)}})}),n$=function(r){return{$:0,a:r}},o$=function(r){return{$:1,a:r}},Yo=1,i$=2,Xo=0,H=lc,Qo=y(function(r,e,t){r:for(;;){if(t.$===-2)return e;var a=t.b,o=t.c,i=t.d,u=t.e,s=r,v=h(r,a,o,h(Qo,r,e,u)),l=i;r=s,e=v,t=l;continue r}}),tn=function(r){return h(Qo,y(function(e,t,a){return n(H,p(e,t),a)}),_,r)},ra=mc;y(function(r,e,t){var a=t.c,o=t.d,i=$(function(u,s){if(u.$){var l=u.a;return h(ra,r,s,l)}else{var v=u.a;return h(ra,i,s,v)}});return h(ra,i,h(ra,r,e,o),a)});var gr=function(r){return{$:1,a:r}},an=$(function(r,e){return{$:3,a:r,b:e}}),Ko=$(function(r,e){return{$:0,a:r,b:e}}),ri=$(function(r,e){return{$:1,a:r,b:e}}),yr=function(r){return{$:0,a:r}},u$=function(r){return{$:2,a:r}},R=function(r){return{$:0,a:r}},E={$:1},c$=Dc,s$=ts,pr=Sc,he=$(function(r,e){return n(Tc,r,Oa(e))}),Ze=$(function(r,e){return c(n(yc,r,e))}),ei=function(r){return n(he,`
    `,n(Ze,`
`,r))},me=y(function(r,e,t){r:for(;;)if(t.b){var a=t.a,o=t.b,i=r,u=n(r,a,e),s=o;r=i,e=u,t=s;continue r}else return e}),ti=function(r){return h(me,$(function(e,t){return t+1}),0,r)},$$=vc,l$=y(function(r,e,t){r:for(;;)if(U(r,e)<1){var a=r,o=e-1,i=n(H,e,t);r=a,e=o,t=i;continue r}else return t}),ai=$(function(r,e){return h(l$,r,e,_)}),v$=$(function(r,e){return h($$,r,n(ai,0,ti(e)-1),e)}),nn=xc,ni=function(r){var e=nn(r);return 97<=e&&e<=122},oi=function(r){var e=nn(r);return e<=90&&65<=e},f$=function(r){return ni(r)||oi(r)},p$=function(r){var e=nn(r);return e<=57&&48<=e},d$=function(r){return ni(r)||oi(r)||p$(r)},be=function(r){return h(me,H,_,r)},h$=Ac,m$=$(function(r,e){return`

(`+(pr(r+1)+(") "+ei(Pe(e))))}),Pe=function(r){return n(b$,r,_)},b$=$(function(r,e){r:for(;;)switch(r.$){case 0:var t=r.a,a=r.b,o=function(){var k=h$(t);if(k.$===1)return!1;var D=k.a,V=D.a,C=D.b;return f$(V)&&n(c$,d$,C)}(),i=o?"."+t:"['"+(t+"']"),u=a,s=n(H,i,e);r=u,e=s;continue r;case 1:var v=r.a,a=r.b,l="["+(pr(v)+"]"),u=a,s=n(H,l,e);r=u,e=s;continue r;case 2:var d=r.a;if(d.b)if(d.b.b){var g=function(){return e.b?"The Json.Decode.oneOf at json"+n(he,"",be(e)):"Json.Decode.oneOf"}(),A=g+(" failed in the following "+(pr(ti(d))+" ways:"));return n(he,`

`,n(H,A,n(v$,m$,d)))}else{var a=d.a,u=a,s=e;r=u,e=s;continue r}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+n(he,"",be(e)):"!"}();default:var m=r.a,b=r.b,A=function(){return e.b?"Problem with the value at json"+(n(he,"",be(e))+`:

    `):`Problem with the given value:

`}();return A+(ei(n(s$,4,b))+(`

`+m))}}),xr=32,on=Y(function(r,e,t,a){return{$:0,a:r,b:e,c:t,d:a}}),un=fc,ii=wc,ui=$(function(r,e){return To(e)/To(r)}),cn=ii(n(ui,2,xr)),g$=J(on,0,cn,un,un),ci=dc,w$=function(r){return{$:1,a:r}};$(function(r,e){return r(e)});$(function(r,e){return e(r)});var sn=_c,si=pc,Ve=$(function(r,e){return U(r,e)>0?r:e}),_$=function(r){return{$:0,a:r}},$i=hc,A$=$(function(r,e){r:for(;;){var t=n($i,xr,r),a=t.a,o=t.b,i=n(H,_$(a),e);if(o.b){var u=o,s=i;r=u,e=s;continue r}else return be(i)}}),j$=$(function(r,e){r:for(;;){var t=ii(e/xr);if(t===1)return n($i,xr,r).a;var a=n(A$,r,_),o=t;r=a,e=o;continue r}}),y$=$(function(r,e){if(e.f){var t=e.f*xr,a=sn(n(ui,xr,t-1)),o=r?be(e.h):e.h,i=n(j$,o,e.f);return J(on,si(e.g)+t,n(Ve,5,a*cn),i,e.g)}else return J(on,si(e.g),cn,un,e.g)}),T$=mr(function(r,e,t,a,o){r:for(;;){if(e<0)return n(y$,!1,{h:a,f:t/xr|0,g:o});var i=w$(h(ci,xr,e,r)),u=r,s=e-xr,v=t,l=n(H,i,a),d=o;r=u,e=s,t=v,a=l,o=d;continue r}}),k$=$(function(r,e){if(r<=0)return g$;var t=r%xr,a=h(ci,t,r-t,e),o=r-t-xr;return T(T$,e,o,r,_,a)}),Mr=function(r){return!r.$},S=zc,wr=Zc,N=Mc,$n=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},C$=function(r){return{$:1,a:r}},D$=function(r){return{$:0,a:r}},ar=function(r){return r},E$=ar,li=st(function(r,e,t,a,o,i){return{cn:i,cp:e,cQ:a,cU:t,cW:r,cX:o}}),P$=Ec,V$=jc,vi=kc,Ye=$(function(r,e){return r<1?e:h(vi,r,V$(e),e)}),ea=Bc,ta=function(r){return r===""},aa=$(function(r,e){return r<1?"":h(vi,0,r,e)}),na=Lc,fi=mr(function(r,e,t,a,o){if(ta(o)||n(P$,"@",o))return E;var i=n(ea,":",o);if(i.b){if(i.b.b)return E;var u=i.a,s=na(n(Ye,u+1,o));if(s.$===1)return E;var v=s;return R(Qr(li,r,n(aa,u,o),v,e,t,a))}else return R(Qr(li,r,o,E,e,t,a))}),pi=Y(function(r,e,t,a){if(ta(a))return E;var o=n(ea,"/",a);if(o.b){var i=o.a;return T(fi,r,n(Ye,i,a),e,t,n(aa,i,a))}else return T(fi,r,"/",e,t,a)}),di=y(function(r,e,t){if(ta(t))return E;var a=n(ea,"?",t);if(a.b){var o=a.a;return J(pi,r,R(n(Ye,o+1,t)),e,n(aa,o,t))}else return J(pi,r,E,e,t)}),hi=$(function(r,e){if(ta(e))return E;var t=n(ea,"#",e);if(t.b){var a=t.a;return h(di,r,R(n(Ye,a+1,e)),n(aa,a,e))}else return h(di,r,E,e)}),mi=Pc,ln=function(r){return n(mi,"http://",r)?n(hi,0,n(Ye,7,r)):n(mi,"https://",r)?n(hi,1,n(Ye,8,r)):E},oa=function(r){},Rr=Zr,B$=Rr(0),bi=Y(function(r,e,t,a){if(a.b){var o=a.a,i=a.b;if(i.b){var u=i.a,s=i.b;if(s.b){var v=s.a,l=s.b;if(l.b){var d=l.a,g=l.b,m=t>500?h(me,r,e,be(g)):J(bi,r,e,t+1,g);return n(r,o,n(r,u,n(r,v,n(r,d,m))))}else return n(r,o,n(r,u,n(r,v,e)))}else return n(r,o,n(r,u,e))}else return n(r,o,e)}else return e}),Xe=y(function(r,e,t){return J(bi,r,e,0,t)}),Tr=$(function(r,e){return h(Xe,$(function(t,a){return n(H,r(t),a)}),_,e)}),Yr=Ia,vn=$(function(r,e){return n(Yr,function(t){return Rr(r(t))},e)}),S$=y(function(r,e,t){return n(Yr,function(a){return n(Yr,function(o){return Rr(n(r,a,o))},t)},e)}),gi=function(r){return h(Xe,S$(H),Rr(_),r)},wi=hs,L$=$(function(r,e){var t=e;return Ua(n(Yr,wi(r),t))}),x$=y(function(r,e,t){return n(vn,function(a){return 0},gi(n(Tr,L$(r),e)))}),M$=y(function(r,e,t){return Rr(0)}),R$=$(function(r,e){var t=e;return n(vn,r,t)});sr.Task=Vo(B$,x$,M$,R$);var F$=Zt("Task"),ht=$(function(r,e){return F$(n(vn,r,e))}),O$=Ys,fn=$(function(r,e){return{$:1,a:r,b:e}}),ia=function(r){return{$:2,a:r}},H$=$(function(r,e){return{$:0,a:r,b:e}}),I$=function(r){return{$:1,a:r}},U$=function(r){return{$:4,a:r}},J$=function(r){return{$:3,a:r}},W$=function(r){return{$:2,a:r}},q$=function(r){return{$:5,a:r}},N$={$:0},F=Ic,G$=n(S,ar,F),ee={$:-2},ge=ee,P=mr(function(r,e,t,a,o){return{$:-1,a:r,b:e,c:t,d:a,e:o}}),Qe=mr(function(r,e,t,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,u=o.c,s=o.d,v=o.e;if(a.$===-1&&!a.a){a.a;var l=a.b,d=a.c,g=a.d,m=a.e;return T(P,0,e,t,T(P,1,l,d,g,m),T(P,1,i,u,s,v))}else return T(P,r,i,u,T(P,0,e,t,a,s),v)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var l=a.b,d=a.c,b=a.d;b.a;var A=b.b,k=b.c,D=b.d,V=b.e,m=a.e;return T(P,0,l,d,T(P,1,A,k,D,V),T(P,1,e,t,m,o))}else return T(P,r,e,t,a,o)}),_i=$c,pn=y(function(r,e,t){if(t.$===-2)return T(P,0,r,e,ee,ee);var a=t.a,o=t.b,i=t.c,u=t.d,s=t.e,v=n(_i,r,o);switch(v){case 0:return T(Qe,a,o,i,h(pn,r,e,u),s);case 1:return T(P,a,o,e,u,s);default:return T(Qe,a,o,i,u,h(pn,r,e,s))}}),Ke=y(function(r,e,t){var a=h(pn,r,e,t);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,u=a.d,s=a.e;return T(P,1,o,i,u,s)}else{var v=a;return v}}),z$=function(r){return h(me,$(function(e,t){var a=e.a,o=e.b;return h(Ke,a,o,t)}),ge,r)},Z$=qc,dn=function(r){return n(S,z$,Z$(r))},Y$=dn(dn(G$)),Fr=Ha,X$=mr(function(r,e,t,a,o){return{cV:a,cY:t,c1:r,c9:e,de:o}}),Or=Nc,f=Wc,hn=Y(function(r,e,t,a){return{aU:a,a3:r,aw:t,ax:e}}),mn={b4:"en-GB",x:"English"},ua=Oc,bn=function(r){return r?0:1},mt=n(S,bn,ua),Ai=n(S,function(r){return J(hn,r,mn,0,1)},n(f,"feedbackVibration",mt)),te=Rc,gn=$(function(r,e){return h(Xe,$(function(t,a){return r(t)?n(H,t,a):a}),_,e)}),wn=function(r){if(r.b){var e=r.a;return r.b,R(e)}else return E},Q$={b4:"ja-JP",x:"\u65E5\u672C\u8A9E"},ji=c([mn,Q$]),yi=function(r){return wn(n(gn,function(e){return G(e.b4,r)},ji))},_r=$(function(r,e){if(e.$)return E;var t=e.a;return R(r(t))}),or=$(function(r,e){if(e.$)return r;var t=e.a;return t}),Ti=n(Or,function(r){return n(or,te("[App.Language] Unknown language code: "+r),n(_r,N,yi(r)))},F),K$=n(S,function(r){return n(r,0,1)},h(wr,hn,n(f,"feedbackVibration",mt),n(f,"language",Ti))),Be=Xc,rl=T(Be,hn,n(f,"feedbackVibration",mt),n(f,"language",Ti),n(f,"inAppNotification",mt),n(f,"browserNotification",mt)),el=n(Or,function(r){switch(r){case"1":return Ai;case"2":return K$;case"3":return rl;default:return Ai}},n(f,"version",F)),tl=$(function(r,e){return{af:e,X:r}}),Hr=Fc,Ir=ar,al=h(wr,tl,n(f,"remains",Hr),n(S,Ir,n(f,"loggedAt",Hr))),nl=Y(function(r,e,t,a){return{C:r,x:t,bD:a,dg:e}}),ki=T(Be,nl,n(f,"id",F),n(f,"tzOffset",n(S,ar,Hr)),n(f,"name",F),n(f,"shortName",F)),ol=Y(function(r,e,t,a){return{ae:t,C:r,x:e,y:a}}),il=Y(function(r,e,t,a){return{b8:r,cq:e,cy:t,c0:a}}),Se=Gc,Le=function(r){return Se(c([n(S,R,r),N(E)]))},ul=T(Be,il,n(S,or(0),Le(n(f,"day",Hr))),n(S,or(0),Le(n(f,"hour",Hr))),n(S,or(0),Le(n(f,"minute",Hr))),n(S,or(0),Le(n(f,"second",Hr)))),_n=1e3,An=60*_n,jn=60*An,Ci=24*jn,Di=function(r){var e=r.b8,t=r.cq,a=r.cy,o=r.c0;return e*Ci+t*jn+a*An+o*_n},yn=ar,Ei=Se(c([n(S,yn,Hr),n(Or,function(r){var e=Di(r),t=e;return t<=0?te("Duration must be greater than 0."):N(e)},ul)])),cl=n(S,ar,F),Pi=$(function(r,e){return{$:2,a:r,b:e}}),ca={$:0},Vi=function(r){return{$:1,a:r}},sl=n(Or,function(r){switch(r){case"Idle":return N(ca);case"Running":return n(S,Vi,n(S,Ir,n(f,"startedAt",Hr)));case"Completed":return h(wr,Pi,n(S,Ir,n(f,"startedAt",Hr)),n(S,Ir,n(f,"completedAt",Hr)));default:return te("[App.Timer] Unknown state: "+r)}},n(f,"type",F)),$l=T(Be,ol,n(f,"id",cl),n(f,"name",F),n(f,"duration",Ei),n(f,"state",sl)),ll=n(Or,function(r){return r==="1.0"?$l:te("[App.Timer] Invalid timer version: "+r)},n(f,"version",F)),Bi=function(r){switch(r){case"dark":return 1;case"light":return 2;default:return 0}},vl=n(S,Bi,F),Si={aU:1,a3:1,aw:0,ax:mn},sa=Uc,bt=Qc,fl=Qr(bt,X$,n(f,"server",ki),n(f,"theme",vl),n(f,"randomEvent",Le(al)),n(f,"preference",Se(c([el,N(Si)]))),n(f,"timers",Se(c([sa(ll),N(_)])))),pl=Ra(function(r,e,t,a,o,i,u,s){return{bW:u,bZ:i,b5:r,cC:a,cK:o,cZ:e,dc:t,dd:s}}),dl=Y(function(r,e,t,a){return{bV:a,cV:t,ac:r,dk:e}}),j=n(S,ar,F),hl=T(Be,dl,n(f,"wakeLock",j),n(f,"wakeLockNotSupported",j),n(f,"preference",j),n(f,"about",j)),ml=ve(function(r,e,t,a,o,i,u){return{aP:o,cu:i,bh:t,bu:a,da:u,F:r,bN:e}}),gt=Kc,bl=Ge(gt,ml,n(f,"title",j),n(f,"version",j),n(f,"license",j),n(f,"repository",j),n(f,"author",j),n(f,"issues",j),n(f,"thirdPartyNotice",j)),gl=mr(function(r,e,t,a,o){return{M:e,a5:t,U:a,F:r,v:o}}),wl=$(function(r,e){return{bs:e,F:r}}),_l=$(function(r,e){return{M:e,S:r}}),$a=h(wr,_l,n(f,"label",j),n(f,"description",j)),Al=h(wr,wl,n(f,"title",j),n(f,"referenceServer",$a)),jl=y(function(r,e,t){return{aU:t,aw:e,F:r}}),yl=ve(function(r,e,t,a,o,i,u){return{b1:t,cb:o,M:e,S:r,bl:a,cR:i,bw:u}}),Tl=Ge(gt,yl,n(f,"label",j),n(f,"description",j),n(f,"checking",j),n(f,"notSupported",j),n(f,"denied",j),n(f,"permissionRequesting",j),n(f,"requestPermission",j)),wt=Yc,kl=J(wt,jl,n(f,"title",j),n(f,"inAppNotification",$a),n(f,"browserNotification",Tl)),Cl=ve(function(r,e,t,a,o,i,u){return{b7:o,a3:u,ax:e,cw:i,c6:a,c9:t,F:r}}),Dl=y(function(r,e,t){return{M:e,S:r,bl:t}}),El=J(wt,Dl,n(f,"label",j),n(f,"description",j),n(f,"notSupported",j)),Pl=Ge(gt,Cl,n(f,"title",j),n(f,"language",$a),n(f,"theme",$a),n(f,"systemDefaultTheme",j),n(f,"dark",j),n(f,"light",j),n(f,"feedbackVibration",El)),Vl=Qr(bt,gl,n(f,"title",j),n(f,"description",j),n(f,"general",Al),n(f,"notification",kl),n(f,"ui",Pl)),Bl=$(function(r,e){return{B:e,F:r}}),Sl=Y(function(r,e,t,a){return{ae:e,au:a,x:r,c4:t}}),Ll=mr(function(r,e,t,a,o){return{b8:t,cq:a,cy:o,df:e,F:r}}),xl=$(function(r,e){return{S:r,cS:e}}),la=h(wr,xl,n(f,"label",j),n(f,"placeholder",j)),Ml=Qr(bt,Ll,n(f,"title",j),n(f,"tips",j),n(f,"day",la),n(f,"hour",la),n(f,"minute",la)),Rl=y(function(r,e,t){return{cg:r,cB:e,dn:t}}),Fl=J(wt,Rl,n(f,"emptyName",j),n(f,"negativeDuration",j),n(f,"zeroDuration",j)),Ol=T(Be,Sl,n(f,"name",la),n(f,"duration",Ml),n(f,"submit",j),n(f,"errors",Fl)),Hl=h(wr,Bl,n(f,"title",j),n(f,"form",Ol)),Il=mr(function(r,e,t,a,o){return{aM:t,bY:o,M:e,cv:a,F:r}}),Ul=$(function(r,e){return{b3:r,dh:e}}),Jl=h(wr,Ul,n(f,"claim",j),n(f,"undo",j)),Wl=Qr(bt,Il,n(f,"title",j),n(f,"description",j),n(f,"actions",Jl),n(f,"lastClaimedLabel",j),n(f,"ago",j)),ql=y(function(r,e,t){return{a_:t,M:e,F:r}}),Nl=J(wt,ql,n(f,"title",j),n(f,"description",j),n(f,"create",j)),Gl=mr(function(r,e,t,a,o){return{aM:a,M:e,cf:t,bK:o,F:r}}),zl=ve(function(r,e,t,a,o,i,u){return{aX:o,a_:r,ca:t,cx:i,bo:u,c2:e,c3:a}}),Zl=Ge(gt,zl,n(f,"create",j),n(f,"start",j),n(f,"delete",j),n(f,"stop",j),n(f,"clear",j),n(f,"menu",j),n(f,"presets",j)),Yl=$(function(r,e){return{M:e,F:r}}),Xl=h(wr,Yl,n(f,"title",j),n(f,"description",j)),Ql=y(function(r,e,t){return{ae:r,ch:t,X:e}}),Kl=J(wt,Ql,n(f,"duration",j),n(f,"remains",j),n(f,"ended",j)),rv=Qr(bt,Gl,n(f,"title",j),n(f,"description",j),n(f,"empty",Xl),n(f,"actions",Zl),n(f,"timerCard",Kl)),ev=rs,tv=function(r){return{db:r}},av=Y(function(r,e,t,a){return{aS:e,cc:a,cO:t,F:r}}),nv=T(Be,av,n(f,"title",j),n(f,"body",j),n(f,"open",j),n(f,"dismiss",j)),ov=n(S,tv,n(f,"timer",nv)),Li=sc(ev,pl,n(f,"configPage",Vl),n(f,"randomEventCounterPage",Wl),n(f,"timerPage",rv),n(f,"newTimerPage",Hl),n(f,"notifications",ov),n(f,"appMenu",hl),n(f,"aboutPage",bl),n(f,"timerPresetsPage",Nl)),iv=n(Or,function(r){switch(r){case"production":return N(0);case"development":return N(1);default:return N(0)}},F),uv=n(S,function(r){return r?0:1},ua),cv=$(function(r,e){return{ae:e,x:r}}),Tn=$(function(r,e){return h(Xe,f,e,r)}),rt=$(function(r,e){r:for(;;){if(e.$===-2)return E;var t=e.b,a=e.c,o=e.d,i=e.e,u=n(_i,r,t);switch(u){case 0:var s=r,v=o;r=s,e=v;continue r;case 1:return R(a);default:var s=r,v=i;r=s,e=v;continue r}}}),kn=function(r){return r.b4},sv=h(wr,cv,h(wr,function(r){return function(e){return function(t){return n(or,r,n(rt,kn(t),e))}}},n(Tn,c(["name","default"]),F),n(f,"name",dn(F))),n(f,"duration",Ei)),$v=Jc,lv=function(r){return Se(c([$v(E),n(S,R,r)]))},vv=ve(function(r,e,t,a,o,i,u){return{aP:t,aV:u,aZ:a,ba:o,bh:e,bu:i,bN:r}}),fv=$(function(r,e){return{at:e,x:r}}),xi=Se(c([n(S,function(r){return{at:E,x:r}},F),h(wr,fv,n(f,"name",F),Le(n(f,"email",F)))])),pv=function(r){return{bM:r}},dv=n(S,pv,Le(n(f,"url",F))),Cn=n(Or,function(r){var e=ln(r);if(e.$)return te("Could not parse given string as a URL");var t=e.a;return N(t)},F),hv=Se(c([Cn,n(f,"url",Cn)])),mv=Ge(gt,vv,n(f,"version",F),n(f,"license",F),n(f,"author",xi),n(f,"contributors",sa(xi)),n(f,"homepage",Cn),n(f,"repository",hv),n(f,"bugs",dv)),Mi=$(function(r,e){if(e.$)return r;var t=e.a;return t}),bv=function(r){return{ad:n(Fr,n(f,"cssModules",Y$),r),aB:n(Mi,0,n(Fr,n(f,"mode",iv),r)),aj:n(Fr,n(f,"packageInfo",mv),r),ak:n(Fr,n(f,"profile",lv(fl)),r),am:n(Fr,n(f,"servers",sa(ki)),r),ao:n(Fr,n(f,"timerPresets",sa(sv)),r),_:n(Fr,n(f,"translation",Li),r),ap:n(Mi,1,n(Fr,n(f,"vibrationApi",uv),r))}},Ri=mr(function(r,e,t,a,o){return{H:a,I:t,G:e,z:o,K:r}}),gv=function(r){r:for(;;)if(r.b){var e=r.a,t=r.b,a=e.G;if(a.b){if(a.a===""&&!a.b.b)return R(e.z);var o=t;r=o;continue r}else return R(e.z)}else return E},Dn=function(r){if(r.b){if(r.a===""&&!r.b.b)return _;var e=r.a,t=r.b;return n(H,e,Dn(t))}else return _},wv=function(r){var e=n(Ze,"/",r);if(e.b&&e.a===""){var t=e.b;return Dn(t)}else{var t=e;return Dn(t)}},_v=$(function(r,e){if(e.$===1)return R(c([r]));var t=e.a;return R(n(H,r,t))}),Fi=e$,Av=function(r){r:for(;;)if(r.$===-1&&r.d.$===-1){var e=r.d,t=e;r=t;continue r}else return r},Oi=function(r){if(r.$===-1&&r.d.$===-1&&r.e.$===-1)if(r.e.d.$===-1&&!r.e.d.a){var e=r.a,t=r.b,a=r.c,o=r.d;o.a;var i=o.b,u=o.c,s=o.d,v=o.e,l=r.e;l.a;var d=l.b,g=l.c,m=l.d;m.a;var b=m.b,A=m.c,k=m.d,D=m.e,V=l.e;return T(P,0,b,A,T(P,1,t,a,T(P,0,i,u,s,v),k),T(P,1,d,g,D,V))}else{var e=r.a,t=r.b,a=r.c,C=r.d;C.a;var i=C.b,u=C.c,s=C.d,v=C.e,q=r.e;q.a;var d=q.b,g=q.c,m=q.d,V=q.e;return T(P,1,t,a,T(P,0,i,u,s,v),T(P,0,d,g,m,V))}else return r},Hi=function(r){if(r.$===-1&&r.d.$===-1&&r.e.$===-1)if(r.d.d.$===-1&&!r.d.d.a){var e=r.a,t=r.b,a=r.c,o=r.d;o.a;var i=o.b,u=o.c,s=o.d;s.a;var v=s.b,l=s.c,d=s.d,g=s.e,m=o.e,b=r.e;b.a;var A=b.b,k=b.c,D=b.d,V=b.e;return T(P,0,i,u,T(P,1,v,l,d,g),T(P,1,t,a,m,T(P,0,A,k,D,V)))}else{var e=r.a,t=r.b,a=r.c,C=r.d;C.a;var i=C.b,u=C.c,q=C.d,m=C.e,er=r.e;er.a;var A=er.b,k=er.c,D=er.d,V=er.e;return T(P,1,t,a,T(P,0,i,u,q,m),T(P,0,A,k,D,V))}else return r},jv=ve(function(r,e,t,a,o,i,u){if(i.$===-1&&!i.a){i.a;var s=i.b,v=i.c,l=i.d,d=i.e;return T(P,t,s,v,l,T(P,0,a,o,d,u))}else{r:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var g=u.d;return g.a,Hi(e)}else break r;else return u.a,u.d,Hi(e);else break r;return e}}),va=function(r){if(r.$===-1&&r.d.$===-1){var e=r.a,t=r.b,a=r.c,o=r.d,i=o.a,u=o.d,s=r.e;if(i===1){if(u.$===-1&&!u.a)return u.a,T(P,e,t,a,va(o),s);var v=Oi(r);if(v.$===-1){var l=v.a,d=v.b,g=v.c,m=v.d,b=v.e;return T(Qe,l,d,g,va(m),b)}else return ee}else return T(P,e,t,a,va(o),s)}else return ee},_t=$(function(r,e){if(e.$===-2)return ee;var t=e.a,a=e.b,o=e.c,i=e.d,u=e.e;if(U(r,a)<0)if(i.$===-1&&i.a===1){i.a;var s=i.d;if(s.$===-1&&!s.a)return s.a,T(P,t,a,o,n(_t,r,i),u);var v=Oi(e);if(v.$===-1){var l=v.a,d=v.b,g=v.c,m=v.d,b=v.e;return T(Qe,l,d,g,n(_t,r,m),b)}else return ee}else return T(P,t,a,o,n(_t,r,i),u);else return n(yv,r,yo(jv,r,e,t,a,o,i,u))}),yv=$(function(r,e){if(e.$===-1){var t=e.a,a=e.b,o=e.c,i=e.d,u=e.e;if(G(r,a)){var s=Av(u);if(s.$===-1){var v=s.b,l=s.c;return T(Qe,t,v,l,i,va(u))}else return ee}else return T(Qe,t,a,o,i,n(_t,r,u))}else return ee}),Tv=$(function(r,e){var t=n(_t,r,e);if(t.$===-1&&!t.a){t.a;var a=t.b,o=t.c,i=t.d,u=t.e;return T(P,1,a,o,i,u)}else{var s=t;return s}}),kv=y(function(r,e,t){var a=e(n(rt,r,t));if(a.$)return n(Tv,r,t);var o=a.a;return h(Ke,r,o,t)}),Cv=$(function(r,e){var t=n(Ze,"=",r);if(t.b&&t.b.b&&!t.b.b.b){var a=t.a,o=t.b,i=o.a,u=Fi(a);if(u.$===1)return e;var s=u.a,v=Fi(i);if(v.$===1)return e;var l=v.a;return h(kv,s,_v(l),e)}else return e}),Dv=function(r){if(r.$===1)return ge;var e=r.a;return h(Xe,Cv,ge,n(Ze,"&",e))},Ev=$(function(r,e){var t=r;return gv(t(T(Ri,_,wv(e.cQ),Dv(e.cX),e.cn,ar)))}),Pv=function(r){return function(e){var t=e.K,a=e.G,o=e.I,i=e.H,u=e.z;return c([T(Ri,t,a,o,i,u(r(i)))])}},Vv=function(r){if(r.$===1)return 4;switch(r.a){case"":return 4;case"about":return 1;case"config":return 2;case"randoms":return 3;case"timers":return 4;case"timers/new":return 5;case"timers/presets":return 6;default:return 0}},Bv=Pv(Vv),Ii=function(r){return n(or,0,n(Ev,Bv,M(r,{cQ:""})))},En=function(r){return{$:12,a:r}},At=function(r){return{$:11,a:r}},fa=Bo,Pn={ar:"0",av:"1",aA:"0",x:""},Sv={$:0},K=function(r){return br(h(me,$(function(e,t){var a=e.a,o=e.b;return h(os,a,o,t)}),ns(),r))},I=br,Lv=function(r){var e=r.a,t=r.b;return p(e,t)},xv=function(r){var e=r.a,t=r.b;return K(c([p("title",I(e)),p("options",K(n(Tr,Lv,t)))]))},Mv=function(r){switch(r.$){case 0:return K(c([p("type",I("CheckAvailability"))]));case 1:return K(c([p("type",I("RequestPermission"))]));default:var e=r.a;return K(c([p("type",I("Send")),p("notification",xv(e))]))}},Rv=lt("sendNotificationsEvent",ar),Vn=function(r){return Rv(Mv(r))},Fv=p({aQ:0},Vn(Sv)),Ov={$:0},Hv=function(r){switch(r){case 0:return K(c([p("type",I("SendLockRequest"))]));case 1:return K(c([p("type",I("SendReleaseRequest"))]));default:return K(c([p("type",I("SendStatusRequest"))]))}},Iv=lt("sendAppWakeLockEvent",ar),Bn=function(r){return Iv(Hv(r))},Uv=p(Ov,Bn(2)),et=So,Jv=$(function(r,e){var t=Uv,a=t.a,o=t.b,i=Fv,u=i.a,s=i.b;return p({l:r,O:p(Pn,gr(0)),U:u,an:e,ac:a},fa(c([n(et,At,o),n(et,En,s)])))}),L=fa(_),Wv=y(function(r,e,t){var a=bv(r),o=H$(a.aB),i=$t(a.ad,a.am,a.aj);if(i.a.$){var C=i.a.a;return p(o(I$(Pe(C))),L)}else if(i.b.$){var C=i.b.a;return p(o(W$(Pe(C))),L)}else if(i.c.$){var C=i.c.a;return p(o(J$(Pe(C))),L)}else{var u=i.a.a,s=i.b.a,v=i.c.a,l=p(a._,a.ao);if(l.a.$){var C=l.a.a;return p(o(U$(Pe(C))),L)}else if(l.b.$){var C=l.b.a;return p(o(q$(Pe(C))),L)}else{var d=l.a.a,g=l.b.a;if(s.b){var m=s.a,b={ad:u,bj:t,cL:Ir(0),aj:v,cT:{ap:a.ap},_:d,bM:e},A={ak:function(){var q=a.ak;if(!q.$&&!q.a.$){var er=q.a.a;return er}else return{cV:Si,cY:E,c1:m,c9:0,de:_}}(),am:s,ao:g},k=n(Jv,A,b),D=k.a,V=k.b;return p(n(fn,Ii(e),D),n(et,ia,V))}else return p(o(N$),L)}}}),Sn=Bo,Ln=So,qv=Sn(_),pa={$:25},Nv=function(r){return{$:6,a:r}},Gv=function(r){return{$:19,a:r}},Ui=$(function(r,e){return{$:0,a:r,b:e}}),Ji=$(function(r,e){return{br:e,bJ:r}}),zv=Rr(n(Ji,ge,ge)),Zv=$(function(r,e){var t=r.a,a=r.b,o=n(rt,t,e);if(o.$===1)return h(Ke,t,c([a]),e);var i=o.a;return h(Ke,t,n(H,a,i),e)}),Yv=vs,Wi=y(function(r,e,t){r:for(;;){if(t.$===-2)return e;var a=t.b,o=t.c,i=t.d,u=t.e,s=r,v=h(r,a,o,h(Wi,r,e,i)),l=u;r=s,e=v,t=l;continue r}}),Xv=st(function(r,e,t,a,o,i){var u=y(function(d,g,m){r:for(;;){var b=m.a,A=m.b;if(b.b){var k=b.a,D=k.a,V=k.b,C=b.b;if(U(D,d)<0){var q=d,er=g,ce=p(C,h(r,D,V,A));d=q,g=er,m=ce;continue r}else return U(D,d)>0?p(b,h(t,d,g,A)):p(C,J(e,D,V,g,A))}else return p(b,h(t,d,g,A))}}),s=h(Wi,u,p(tn(a),i),o),v=s.a,l=s.b;return h(me,$(function(d,g){var m=d.a,b=d.b;return h(r,m,b,g)}),l,v)}),Qv=ms,Kv=$(function(r,e){return{$:0,a:r,b:e}}),rf=a$,ef=Ua,qi=y(function(r,e,t){if(e.b){var a=e.a,o=e.b,i=ef(n(rf,a,n(Qv,r,a))),u=function(s){return h(qi,r,o,h(Ke,a,s,t))};return n(Yr,u,i)}else return Rr(t)}),tf=y(function(r,e,t){var a=t.br,o=y(function(m,b,A){var k=A.a,D=A.b,V=A.c;return $t(k,D,n(Yr,function(C){return V},Yv(b)))}),i=h(me,Zv,ge,e),u=y(function(m,b,A){var k=A.a,D=A.b,V=A.c;return $t(n(H,m,k),D,V)}),s=Y(function(m,b,A,k){var D=k.a,V=k.b,C=k.c;return $t(D,h(Ke,m,A,V),C)}),v=Qr(Xv,u,s,o,i,a,$t(_,ge,Rr(0))),l=v.a,d=v.b,g=v.c;return n(Yr,function(m){return Rr(n(Ji,i,m))},n(Yr,function(m){return h(qi,r,l,d)},g))}),af=t$(Ir),nf=y(function(r,e,t){var a=n(rt,e,t.bJ);if(a.$===1)return Rr(t);var o=a.a,i=function(u){return gi(n(Tr,function(s){return n(wi,r,s(u))},o))};return n(Yr,function(u){return Rr(t)},n(Yr,i,af))}),of=y(function(r,e,t){return r(e(t))}),uf=$(function(r,e){var t=e.a,a=e.b;return n(Ui,t,n(of,r,a))});sr.Time=Vo(zv,tf,nf,0,uf);var cf=Zt("Time"),sf=$(function(r,e){return cf(n(Ui,r,e))}),Ni=function(r){return{$:1,a:r}},$f=function(r){return{$:0,a:r}},lf=n(Or,function(r){switch(r){case"RecievedTranslation":return n(S,$f,n(f,"translation",Li));case"FailedToFetch":return n(S,Ni,n(f,"error",F));default:return te("[App.Translation] Unknown event type: "+r)}},n(f,"type",F)),da=Hc,vf=Ga("recieveAppTranslationEvent",da),ff=function(r){return vf(function(e){var t=n(Fr,lf,e);if(t.$){var o=t.a;return r(Ni(Pe(o)))}else{var a=t.a;return r(a)}})},pf={$:1},df=function(r){return{$:0,a:r}},hf=n(Or,function(r){switch(r){case"PlatformNotSupported":return N(1);case"RequiresPermission":return N(2);case"PermissionRequestDenied":return N(3);case"Available":return N(5);case"RequestingPermission":return N(4);default:return te("[Notifications] Unknown availability type: "+r)}},F),mf=n(Or,function(r){return r==="RecieveAvailability"?n(S,ar,n(f,"availability",hf)):te("[Notifications] Unknown event type: "+r)},n(f,"type",F)),bf=Ga("recieveNotificationsEvent",da),gf=function(r){return bf(function(e){var t=n(Fr,mf,e);if(t.$)return pf;var a=t.a;return df(a)})},wf=function(r){return{$:6,a:r}},_f=function(r){return{$:1,a:r}},Af={$:4},jf={$:0},yf={$:7},Tf={$:5},kf=function(r){return{$:4,a:r}},Cf=function(r){return{$:1,a:r}},Df={$:2},Ef={$:3},Pf={$:0},Vf=n(Or,function(r){switch(r){case"RecieveUnsupportedStatus":return N(Pf);case"RecieveInitiallyLocked":return n(S,Cf,n(f,"locked",ua));case"RecieveLocked":return N(Df);case"RecieveReleased":return N(Ef);case"RecieveError":return n(S,kf,n(f,"error",F));default:return te("[App.WakeLock] Unknown incoming event type: "+r)}},n(f,"type",F)),Bf=Ga("recieveAppWakeLockEvent",da),Sf=function(r){return Bf(function(e){var t=n(Fr,Vf,e);if(t.$)return yf;switch(t.a.$){case 0:return t.a,jf;case 1:var a=t.a.a;return _f(a?1:3);case 2:return t.a,Af;case 3:return t.a,Tf;default:var o=t.a.a;return wf(o)}})},Lf=function(r){return Sn(c([n(Ln,At,Sf(r.ac)),n(Ln,En,gf(r.U)),n(sf,500,Nv),ff(function(e){if(e.$)return pa;var t=e.a;return Gv(t)})]))},xf=function(r){return Sn(c([function(){if(r.$===1){var e=r.b;return n(Ln,ia,Lf(e))}else return qv}()]))},Mf=Vc,xn=r$,Mn=Xs,Rf=$(function(r,e){if(r.$===1)return e;var t=r.a;return e+(":"+pr(t))}),Gi=y(function(r,e,t){if(e.$===1)return t;var a=e.a;return Gr(t,Gr(r,a))}),ha=function(r){var e=function(){var t=r.cW;return t?"https://":"http://"}();return h(Gi,"#",r.cn,h(Gi,"?",r.cX,Gr(n(Rf,r.cU,Gr(e,r.cp)),r.cQ)))},kr=function(r){return{$:7,a:r}},Ff={$:2},Of={$:3},jt=function(r){return{$:21,a:r}},Rn=$(function(r,e){return{$:0,a:r,b:e}}),Hf=function(r){return n(Rn,"body",I(r))},If=$(function(r,e){r:for(;;)if(e.b){var t=e.a,a=e.b;if(G(t.C,r.C))return R(t);var o=r,i=a;r=o,e=i;continue r}else return E}),zi=$(function(r,e){var t=p(r,e);if(t.a.b)if(t.b.b){var a=t.a,o=a.a,i=a.b,u=t.b,s=u.a,v=u.b;return n(H,o,n(H,s,n(zi,i,v)))}else{var l=t.a,o=l.a,i=l.b;return n(H,o,i)}else if(t.b.b){var d=t.b,s=d.a,v=d.b;return n(H,s,v)}else return _}),ir=$(function(r,e){var t=e;return r.b?n(he,"",n(zi,n(Ze,"%s",t),r)):t}),yt=function(r){switch(r){case 0:return"#";case 1:return"#about";case 2:return"#config";case 3:return"#randoms";case 4:return"#timers";case 5:return"#timers/new";default:return"#timers/presets"}},Uf=function(r){return n(Rn,"lang",I(r))},tt=10,Fn=$(function(r,e){return U(r,e)<0?r:e}),Jf=$(function(r,e){return{$:0,a:r,b:e}}),Wf=Jf,qf=$(function(r,e){var t=e.a;return p(t,r)}),Ur=br,Zi=function(r){return I(r.b4)},On=function(r){return!r},Nf=function(r){return K(c([p("version",I("3")),p("feedbackVibration",Ur(On(r.a3))),p("language",Zi(r.ax)),p("inAppNotification",Ur(On(r.aw))),p("browserNotification",Ur(On(r.aU)))]))},we=br,X=function(r){var e=r;return e},Gf=function(r){return K(c([p("remains",we(r.X)),p("loggedAt",we(X(r.af)))]))},zf=function(r){var e=r;return we(e)},Zf=function(r){return K(c([p("id",I(r.C)),p("tzOffset",zf(r.dg)),p("name",I(r.x)),p("shortName",I(r.bD))]))},Yf=function(r){var e=r;return we(e)},Xf=function(r){var e=r;return I(e)},Qf=function(r){switch(r.$){case 0:return K(c([p("type",I("Idle"))]));case 1:var e=r.a;return K(c([p("type",I("Running")),p("startedAt",we(X(e)))]));default:var e=r.a,t=r.b;return K(c([p("type",I("Completed")),p("startedAt",we(X(e))),p("completedAt",we(X(t)))]))}},Kf=function(r){return K(c([p("version",I("1.0")),p("id",Xf(r.C)),p("name",I(r.x)),p("duration",Yf(r.ae)),p("state",Qf(r.y))]))},Tt=function(r){switch(r){case 0:return"system";case 1:return"dark";default:return"light"}},rp=function(r){return I(Tt(r))},ep=us,tp=$(function(r,e){if(e.$)return ep;var t=e.a;return r(t)}),Yi=$(function(r,e){return br(h(me,is(r),as(),e))}),ap=function(r){return K(c([p("server",Zf(r.c1)),p("theme",rp(r.c9)),p("randomEvent",n(tp,Gf,r.cY)),p("preference",Nf(r.cV)),p("timers",n(Yi,Kf,r.de))]))},np=function(r){var e=r;return K(c([p("type",I("PersistProfile")),p("profile",ap(e))]))},op=lt("sendAppProfileEvent",ar),ip=function(r){return op(np(r))},up=function(r){return ip(r)},Xi=function(r){return pr(X(r))},Qi=function(r){return p(r,0)},cp=y(function(r,e,t){r:for(;;){if(e<=0)return r;var a=n(H,t,r),o=e-1,i=t;r=a,e=o,t=i;continue r}}),sp=$(function(r,e){return h(cp,_,r,e)}),$p=$(function(r,e){return n(sp,e,r)}),lp=function(r){var e=r;return K(c([p("type",I("RequestTranslation")),p("lang",Zi(e))]))},vp=lt("sendAppTranslationEvent",ar),fp=function(r){return vp(lp(r))},pp={$:1},dp=Vn(pp),hp=function(r){return{$:2,a:r}},mp=function(r){return Vn(hp(r))},bp=Po,kt=function(r){var e=r;return e},gp=$(function(r,e){var t=e.y;if(t.$===1){var a=t.a,o=X(a)+kt(e.ae);return U(X(r),o)>-1?M(e,{y:n(Pi,a,Ir(o))}):e}else return e}),wp=Cc,_p=$(function(r,e){if(r.$)return p(e,L);var t=r.a;return p(M(e,{aQ:t}),L)}),Ap=function(r){return{$:2,a:r}},jp=function(r){return{$:3,a:r}},Ki={$:1},yp={$:0},Tp={$:1},xe=$(function(r,e){return{$:2,a:r,b:e}}),kp=$(function(r,e){var t=p(r,e);r:for(;;)switch(t.b.$){case 0:switch(t.a.$){case 0:return t.a,t.b,p(Ki,L);case 1:var a=t.a.a;return t.b,p(n(xe,a,E),L);default:break r}case 2:switch(t.a.$){case 2:if(t.b.a===3){t.a;var o=t.b;return o.a,p(n(xe,0,R(yp)),Bn(0))}else break r;case 3:if(t.b.a===1){t.a;var i=t.b;return i.a,p(n(xe,2,R(Tp)),Bn(1))}else break r;case 4:if(t.b.a)break r;t.a;var u=t.b;return u.a,p(n(xe,1,E),L);case 5:return t.a,t.b,p(n(xe,3,E),L);case 6:switch(t.b.a){case 0:var s=t.a.a,v=t.b;return v.a,p(n(xe,3,R(Ap(s))),L);case 2:var s=t.a.a,l=t.b;return l.a,p(n(xe,1,R(jp(s))),L);default:break r}default:break r}default:break r}return p(e,L)}),Cp=$(function(r,e){return M(e,{l:r(e.l)})}),ae=function(r){return Cp(function(e){return M(e,{ak:r(e.ak)})})},Hn=function(r){return ae(function(e){return M(e,{cV:r(e.cV)})})},Cr=gc,ru=function(r){return!n(Cr,4,r)&&!!n(Cr,100,r)||!n(Cr,400,r)},In=$(function(r,e){var t=ru(r)?1:0;switch(e){case 0:return 0;case 1:return 31;case 2:return 59+t;case 3:return 90+t;case 4:return 120+t;case 5:return 151+t;case 6:return 181+t;case 7:return 212+t;case 8:return 243+t;case 9:return 273+t;case 10:return 304+t;default:return 334+t}}),Ct=$(function(r,e){return sn(r/e)}),Dt=function(r){var e=r-1,t=n(Ct,e,4)-n(Ct,e,100)+n(Ct,e,400);return 365*e+t},Un=$(function(r,e){switch(e){case 0:return 31;case 1:return ru(r)?29:28;case 2:return 31;case 3:return 30;case 4:return 31;case 5:return 30;case 6:return 31;case 7:return 31;case 8:return 30;case 9:return 31;case 10:return 30;default:return 31}}),Jn=function(r){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;case 6:return 7;case 7:return 8;case 8:return 9;case 9:return 10;case 10:return 11;default:return 12}},Wn=function(r){var e=n(Ve,1,r);switch(e){case 1:return 0;case 2:return 1;case 3:return 2;case 4:return 3;case 5:return 4;case 6:return 5;case 7:return 6;case 8:return 7;case 9:return 8;case 10:return 9;case 11:return 10;default:return 11}},Dp=y(function(r,e,t){r:for(;;){var a=n(Un,r,e),o=Jn(e);if(o<12&&U(t,a)>0){var i=r,u=Wn(o+1),s=t-a;r=i,e=u,t=s;continue r}else return{b8:t,bi:e,bU:r}}}),ma=$(function(r,e){return p(n(Ct,r,e),n(Cr,e,r))}),ba=function(r){var e=r,t=n(ma,e,146097),a=t.a,o=t.b,i=n(ma,o,36524),u=i.a,s=i.b,v=n(ma,s,1461),l=v.a,d=v.b,g=n(ma,d,365),m=g.a,b=g.b,A=b?1:0;return a*400+u*100+l*4+m+A},Ep=function(r){var e=r,t=ba(e);return{aF:e-Dt(t),bU:t}},eu=function(r){var e=r,t=Ep(e);return h(Dp,t.bU,0,t.aF)},qn=y(function(r,e,t){var a=t;switch(r){case 0:return h(qn,1,12*e,a);case 1:var o=eu(a),i=12*(o.bU-1)+(Jn(o.bi)-1)+e,u=Wn(n(Cr,12,i)+1),s=n(Ct,i,12)+1;return Dt(s)+n(In,s,u)+n(Fn,o.b8,n(Un,s,u));case 2:return a+7*e;default:return a+e}}),Pp=y(function(r,e,t){return U(t,r)<0?r:U(t,e)>0?e:t}),Vp=y(function(r,e,t){return Dt(r)+n(In,r,e)+h(Pp,1,n(Un,r,e),t)}),ga=$(function(r,e){return sn(r/e)}),Bp=y(function(r,e,t){r:for(;;)if(t.b){var a=t.a,o=t.b;if(U(a.c2,e)<0)return e+a.b;var i=r,u=e,s=o;r=i,e=u,t=s;continue r}else return e+r}),Et=$(function(r,e){var t=r.a,a=r.b;return h(Bp,t,n(ga,X(e),6e4),a)}),Nn=function(r){var e=n(ga,r,60*24)+719468,t=(e>=0?e:e-146096)/146097|0,a=e-t*146097,o=(a-(a/1460|0)+(a/36524|0)-(a/146096|0))/365|0,i=a-(365*o+(o/4|0)-(o/100|0)),u=(5*i+2)/153|0,s=u+(u<10?3:-9),v=o+t*400;return{b8:i-((153*u+2)/5|0)+1,bi:s,bU:v+(s<=2?1:0)}},Sp=$(function(r,e){return Nn(n(Et,r,e)).b8}),Lp=$(function(r,e){var t=Nn(n(Et,r,e)).bi;switch(t){case 1:return 0;case 2:return 1;case 3:return 2;case 4:return 3;case 5:return 4;case 6:return 5;case 7:return 6;case 8:return 7;case 9:return 8;case 10:return 9;case 11:return 10;default:return 11}}),xp=$(function(r,e){return Nn(n(Et,r,e)).bU}),Me=$(function(r,e){return h(Vp,n(xp,r,e),n(Lp,r,e),n(Sp,r,e))}),Mp=function(r){var e=r;return e},tu=function(r){var e=Mp(r)-719163;return e*864e5},wa=Y(function(r,e,t,a){return r*36e5+e*6e4+t*1e3+a}),Pt=$(function(r,e){return n(Cr,24,n(ga,n(Et,r,e),60))}),Rp=$(function(r,e){return n(Cr,1e3,X(e))}),Gn=$(function(r,e){return n(Cr,60,n(Et,r,e))}),au=$(function(r,e){return n(Cr,60,n(ga,X(e),1e3))}),zn=$(function(r,e){return J(wa,n(Pt,r,e),n(Gn,r,e),n(au,r,e),n(Rp,r,e))}),Zn=$(function(r,e){var t=X(e),a=tu(n(Me,r,e))+n(zn,r,e);return(a-t)/6e4|0}),at=y(function(r,e,t){var a=tu(e)+t,o=n(Zn,r,Ir(a)),i=Ir(a-o*6e4),u=n(Zn,r,i);if(G(o,u))return i;var s=Ir(a-u*6e4),v=n(Zn,r,s);return G(u,v)?s:i}),nu=Y(function(r,e,t,a){r:for(;;)switch(r){case 15:return Ir(X(a)+e);case 14:var o=15,i=e*1e3,u=t,s=a;r=o,e=i,t=u,a=s;continue r;case 13:var o=15,i=e*6e4,u=t,s=a;r=o,e=i,t=u,a=s;continue r;case 12:var o=15,i=e*36e5,u=t,s=a;r=o,e=i,t=u,a=s;continue r;case 11:return h(at,t,h(qn,3,e,n(Me,t,a)),n(zn,t,a));case 2:return h(at,t,h(qn,1,e,n(Me,t,a)),n(zn,t,a));case 0:var o=2,i=e*12,u=t,s=a;r=o,e=i,t=u,a=s;continue r;case 1:var o=2,i=e*3,u=t,s=a;r=o,e=i,t=u,a=s;continue r;case 3:var o=11,i=e*7,u=t,s=a;r=o,e=i,t=u,a=s;continue r;default:var o=11,i=e*7,u=t,s=a;r=o,e=i,t=u,a=s;continue r}}),Fp=function(r){var e=r,t=n(Cr,7,e);if(t){var a=t;return a}else return 7},Op=function(r){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;default:return 7}},_e=$(function(r,e){return n(Cr,7,Fp(e)+7-Op(r))}),ou=$(function(r,e){return Dt(r)+n(In,r,e)+1}),Hp=function(r){return Dt(r)+1},iu=y(function(r,e,t){return e(r(t))}),uu=n(iu,eu,function(r){return r.bi}),Ip=function(r){return(Jn(r)+2)/3|0},Up=n(iu,uu,Ip),Jp=function(r){return Wn(r*3-2)},Wp=$(function(r,e){var t=e;switch(r){case 0:return Hp(ba(e));case 1:return n(ou,ba(e),Jp(Up(e)));case 2:return n(ou,ba(e),uu(e));case 3:return t-n(_e,0,e);case 4:return t-n(_e,0,e);case 5:return t-n(_e,1,e);case 6:return t-n(_e,2,e);case 7:return t-n(_e,3,e);case 8:return t-n(_e,4,e);case 9:return t-n(_e,5,e);case 10:return t-n(_e,6,e);default:return e}}),Dr=y(function(r,e,t){return h(at,e,n(Wp,r,n(Me,e,t)),0)}),qp=y(function(r,e,t){switch(r){case 15:return t;case 14:return h(at,e,n(Me,e,t),J(wa,n(Pt,e,t),n(Gn,e,t),n(au,e,t),0));case 13:return h(at,e,n(Me,e,t),J(wa,n(Pt,e,t),n(Gn,e,t),0,0));case 12:return h(at,e,n(Me,e,t),J(wa,n(Pt,e,t),0,0,0));case 11:return h(Dr,11,e,t);case 2:return h(Dr,2,e,t);case 0:return h(Dr,0,e,t);case 1:return h(Dr,1,e,t);case 3:return h(Dr,3,e,t);case 4:return h(Dr,4,e,t);case 5:return h(Dr,5,e,t);case 6:return h(Dr,6,e,t);case 7:return h(Dr,7,e,t);case 8:return h(Dr,8,e,t);case 9:return h(Dr,9,e,t);default:return h(Dr,10,e,t)}}),_a=n(Kv,0,_),Np=$(function(r,e){var t=function(){var o=e.dg,i=o;return n(Cr,24,4-i)}(),a=U(n(Pt,_a,r),t)>-1?1:0;return J(nu,12,t,_a,h(qp,11,_a,J(nu,11,a,_a,r)))}),Gp=y(function(r,e,t){return U(X(e),X(n(Np,t.af,r)))>-1?{af:e,X:tt}:t}),Yn=$(function(r,e){return n(ae,function(t){return M(t,{cY:r(n(_r,function(a){return h(Gp,t.c1,e.an.cL,a)},t.cY))})},e)}),zp=$(function(r,e){return M(e,{an:r(e.an)})}),cu=$(function(r,e){return ae(function(t){return M(t,{de:n(Tr,function(a){return G(a.C,e.C)?r(a):a},t.de)})})}),su=function(r){if(r.b)if(r.b.b){var a=r.a,t=a.a,o=a.b,i=r.b;return n(H,t,n(H,o,su(i)))}else{var e=r.a,t=e.a;return c([t])}else return _},$u=function(r){return n(Yi,we,su(r))},Zp=function(r){return n(Rn,"vibrate",$u(r))},Yp=function(r){var e=r;return K(c([p("type",I("Vibrate")),p("pattern",$u(e))]))},Xp=lt("sendVibrationEvent",ar),Qp=function(r){return Xp(Yp(r))},Er=$(function(r,e){var t=e.a,a=e.b,o=n(lu,r,t),i=o.a,u=o.b;return p(i,fa(c([a,u])))}),lu=$(function(r,e){r:for(;;)switch(r.$){case 0:var t=r.a;return n(Er,kr(e),p(h(cu,function(B){return M(B,{y:Vi(e.an.cL)})},t,e),L));case 1:var t=r.a;return n(Er,kr(e),p(h(cu,function(B){return M(B,{y:ca})},t,e),L));case 2:var t=r.a;return n(Er,kr(e),p(n(ae,function(B){return M(B,{de:n(gn,function(z){return!G(z.C,t.C)},B.de)})},e),L));case 3:var a=r.a;return n(Er,kr(e),p(n(ae,function(B){return M(B,{de:n(H,{ae:a.ae,C:Xi(e.an.cL),x:a.x(e.l.ak.cV.ax),y:ca},B.de)})},e),n(Mn,e.an.bj,yt(4))));case 21:var o=r.a,i=o(e.O.a),u=function(){if(wp(i.x)==="")return gr(0);var B=n(or,0,na(i.aA)),z=n(or,0,na(i.av)),vr=n(or,0,na(i.ar)),qt=Di({b8:vr,cq:z,cy:B,c0:0}),_o=kt(qt);return _o<0?gr(1):_o?yr(p(i.x,qt)):gr(2)}();return p(M(e,{O:p(i,u)}),L);case 22:var s=jt(function(B){return Pn}),v=e;r=s,e=v;continue r;case 23:var l=e.O;if(l.b.$)return p(e,L);var d=l.b.a,g=d.a,m=d.b,t={ae:m,C:Xi(e.an.cL),x:g,y:ca};return n(Er,kr(e),p(n(ae,function(z){return M(z,{de:n(H,t,z.de)})},M(e,{O:p(Pn,gr(0))})),n(Mn,e.an.bj,yt(4))));case 4:return n(Er,kr(e),p(n(Yn,function(B){if(B.$)return R({af:e.an.cL,X:tt-1});var z=B.a.X;return z?R({af:e.an.cL,X:z-1}):B},e),L));case 5:return p(n(Yn,_r(function(B){var z=B.X,vr=B.af;return{af:vr,X:n(Fn,z+1,tt)}}),e),L);case 6:var b=r.a;return n(Er,kr(e),p(n(Yn,ar,n(ae,function(B){return M(B,{de:n(Tr,gp(b),B.de)})},n(zp,function(B){return M(B,{cL:b})},e))),L));case 15:var A=r.a;return n(Er,kr(e),p(n(ae,function(B){return M(B,{c9:A})},e),L));case 24:var k=r.a;return n(Er,kr(e),p(n(ae,function(B){return M(B,{c1:k})},e),L));case 16:var D=r.a;return n(Er,kr(e),p(n(Hn,function(B){return M(B,{ax:D})},e),fp(D)));case 17:var V=r.a;return n(Er,kr(e),p(n(Hn,function(B){return M(B,{a3:V})},e),L));case 9:var C=r.a,q=e.l.ak.cV.a3;return q?p(e,L):p(e,Qp(C));case 7:var er=r.a;return p(e,G(er.l.ak,e.l.ak)?L:up(e.l.ak));case 8:var er=r.a;if(e.l.ak.cV.aU===1)return p(e,L);var ce=$(function(z,vr){return n(ir,z,vr(e.an._.cK.db))}),We=n(gn,function(z){var vr=p(z.y,n(If,z,er.l.ak.de));if(vr.a.$===2&&!vr.b.$){vr.a;var qt=vr.b.a;return!G(qt.y,z.y)}else return!1},e.l.ak.de),Ma=fa(n(Tr,function(z){return mp(n(Wf,n(ce,c([z.x]),function(vr){return vr.F}),c([Hf(n(ce,c([z.x]),function(vr){return vr.aS})),Uf(e.l.ak.cV.ax.b4),Zp(n($p,n(qf,8,Qi(8)),3))])))},We));return p(e,Ma);case 11:var Te=r.a,ct=n(kp,Te,e.ac),se=ct.a,Wt=ct.b;return p(M(e,{ac:se}),n(et,At,Wt));case 13:var s=At(Ff),v=e;r=s,e=v;continue r;case 14:var s=At(Of),v=e;r=s,e=v;continue r;case 12:var Te=r.a,qe=n(_p,Te,e.U),Ne=qe.a,Ma=qe.b;return p(M(e,{U:Ne}),n(et,En,Ma));case 18:var Xu=r.a;return n(Er,kr(e),p(n(Hn,function(B){return M(B,{aU:Xu})},e),L));case 20:return p(e,dp);case 19:var Qu=r.a,Ku=e,rc=Ku.an;return p(M(e,{an:M(rc,{_:Qu})}),L);case 10:var ec=r.a,tc=r.b;return p(e,n(ht,function(B){return tc},bp(ec)));default:return p(e,L)}}),Kp=$(function(r,e){var t=p(r,e);r:for(;;)switch(t.a.$){case 0:if(t.a.a.$===1){var a=t.a.a.a;return p(e,xn(a))}else if(t.b.$===1){var o=t.a.a,i=t.b,u=i.b.an;if(o.$){var a=o.a;return p(e,xn(a))}else{var a=o.a;return n(Mf,".txt",a.cQ)?p(e,xn(ha(a))):p(e,n(Mn,u.bj,ha(a)))}}else break r;case 1:if(t.b.$===1){var a=t.a.a,s=t.b,v=s.b,l=v,u=l.an;return p(n(fn,Ii(a),M(v,{an:M(u,{bM:a})})),L)}else break r;default:if(t.b.$===1){var d=t.a.a,g=t.b,m=g.a,v=g.b,b=n(lu,d,v),A=b.a,k=b.b;return p(n(fn,m,A),n(et,ia,k))}else break r}return p(e,L)}),rd=$(function(r,e){return n(Fo,Es(r),Ho(e))}),nr=rd,Jr=$(function(r,e){return n(Ya,r,I(e))}),rr=Jr("className"),Aa=W("code"),ed=W("h1"),td=function(r){return W(Oo(r))},ur=td,Pr=W("p"),nt=W("pre"),Q=W("span"),ad=Za,w=ad,nd=function(r){switch(r.$){case 0:return"E-201";case 1:return"E-101";case 2:return"E-102";case 3:return"E-103";case 4:return"E-104";case 5:return"E-105";default:return"E-999"}},od=$(function(r,e){return e+(" ("+(nd(r)+")"))}),id=$(function(r,e){var t=od(e),a=function(){var u=p(r,e);r:for(;;)if(u.a===1)switch(u.b.$){case 1:u.a;var s=u.b.a;return p("Failed to decode CSS Modules object",c([n(Pr,c([rr("app--error--description")]),c([w("You passed an invalid CSS Modules object via flag. Check the "),n(Aa,_,c([w("cssModules")])),w(" property.")])),n(nt,c([rr("app--error--details")]),c([w(s)]))]));case 0:return u.a,u.b,p("No game servers available",c([n(Pr,c([rr("app--error--description")]),c([w("You passed an empty list of game servers. Please include more than or equal to one server configuration in "),n(Aa,_,c([w("servers")])),w(" property.")]))]));case 2:u.a;var s=u.b.a;return p("Failed to decode server list",c([n(Pr,c([rr("app--error--description")]),c([w("You passed an invalid server list via flag. Check the "),n(Aa,_,c([w("servers")])),w(" property.")])),n(nt,c([rr("app--error--details")]),c([w(s)]))]));case 3:u.a;var s=u.b.a;return p("Failed to decode package.json",c([n(Pr,c([rr("app--error--description")]),c([w("Cannot parse contents of the package.json file. See details below.")])),n(nt,c([rr("app--error--details")]),c([w(s)]))]));case 4:u.a;var s=u.b.a;return p("Failed to decode initial translation dictionary",c([n(Pr,c([rr("app--error--description")]),c([w("Cannot parse `defaultTranslation` flag. Please make sure you passed it correctly.")])),n(nt,c([rr("app--error--details")]),c([w(s)]))]));case 5:u.a;var s=u.b.a;return p("Failed to decode timer presets",c([n(Pr,c([rr("app--error--description")]),c([w("Cannot parse `timerPresets` flag. Check syntax and structure of the `timerPresets.json` file.")])),n(nt,c([rr("app--error--details")]),c([w(s)]))]));default:break r}else{if(u.b.$===6)break r;return u.a,p("Failed to launch application",c([n(Pr,c([rr("app--error--description")]),c([w("Sorry, application has an unexpected error during booting process. This is due to misconfiguration slipped into production code.")]))]))}return u.b,p("Failed to launch application",c([n(Pr,c([rr("app--error--description")]),c([w("Sorry, application encountered an unexpected error during booting process.")]))]))}(),o=a.a,i=a.b;return{aS:c([h(ur,"turtle-design-system",c([rr("app--error")]),c([h(ur,"turtle-snackbar",c([n(nr,"severity","danger")]),n(H,n(ed,c([rr("app--error--title")]),c([h(ur,"turtle-attention-icon",c([rr("app--error--icon")]),_),n(Q,_,c([w(o)]))])),i))]))]),F:t("Failed to launch application")}}),ud=function(r){var e=r;return e},Ae=y(function(r,e,t){return rr(ud(n(or,"",n(rt,t,n(or,ge,n(rt,r,e))))))}),cd=W("nav"),sd=y(function(r,e,t){var a=r.an,o=n(Ae,"Views.Layout",a.ad);return c([h(ur,"main",c([o("main")]),t),n(cd,c([o("nav")]),c([e]))])}),$d=Ds,ld=$d,vd={$:14},fd={$:13},Vr=W("a"),pd=n(nr,"slot","action"),dd=$(function(r,e){return n(Ya,Ps(r),Ho(e))}),je=dd,vu=function(r){return n(je,"active",Ur(r))},lr=ur("adw-button"),dr=W("button"),fu=$(function(r,e){return n(Ya,r,Ur(e))}),Vt=fu("disabled"),pu=ur("adw-dropdown"),Br=function(r){return n(Jr,"href",Vs(r))},hd=function(r){switch(r){case 0:return"timer";case 1:return"backpack";case 2:return"check";case 3:return"cross-circled";case 4:return"dots-vertical";case 5:return"trash";default:return"pencil2"}},Re=$(function(r,e){return h(ur,"radix-icons-"+hd(r),e,_)}),du=function(r){return n(je,"iconOnly",Ur(r))},Xn=n(nr,"slot","icon"),hu=n(nr,"slot","icon"),cr=Jr("id"),mu=function(r){return n(je,"loading",Ur(r))},bu=ur("adw-menu"),Bt=ur("adw-menu-item"),md=ur("adw-nav"),gu=ur("adw-nav-item"),bd=function(r){return{$:0,a:r}},Qn=Ro,Kn=$(function(r,e){return n(Qn,r,bd(e))}),Wr=function(r){return n(Kn,"click",N(r))},wu=Jr("title"),_u=n(nr,"slot","trigger"),gd=$(function(r,e){var t=function(a){return n(ir,_,a(e.an._))};return n(md,_,c([n(gu,c([vu(r===4)]),c([n(Re,0,c([hu])),n(Vr,c([Br(yt(4))]),c([w("Timer")]))])),n(gu,c([vu(r===3)]),c([n(Re,1,c([hu])),n(Vr,c([Br(yt(3))]),c([w("Rewards")]))])),n(pu,c([pd]),c([n(lr,c([_u,du(!0)]),c([n(dr,_,c([n(Re,4,_)]))])),n(bu,c([cr("app_nav_menu")]),c([n(Bt,function(){var a=e.ac;r:for(;;)switch(a.$){case 2:switch(a.a){case 1:return a.a,c([Vt(!1),Wr(vd)]);case 3:return a.a,c([Vt(!1),Wr(fd)]);default:break r}case 1:return c([Vt(!0)]);default:break r}return c([mu(!0)])}(),c([function(){var a=e.ac;return a.$===2&&a.a===1?(a.a,n(Re,2,c([Xn]))):w("")}(),n(dr,c([G(e.ac,Ki)?wu(t(function(a){return a.bZ.dk})):rr("")]),c([w(t(function(a){return a.bZ.ac}))]))])),n(Bt,_,c([n(Vr,c([Br(yt(2))]),c([w(t(function(a){return a.bZ.cV}))]))])),n(Bt,_,c([n(Vr,c([Br("#about")]),c([w(t(function(a){return a.bZ.bV}))]))]))]))]))]))}),Fe=function(r){var e=r.an;return n(Ae,"Views.About",e.ad)},wd=W("dl"),_d=W("dt"),ot=$(function(r,e){var t=Fe(r);return n(_d,c([t("label")]),c([w(e)]))}),Ad=W("dd"),it=function(r){return Ad(c([n(Fe,r,"value")]))},jd=function(r){var e=function(s){return n(ir,_,s(r.an._.bW))},t=r.an.aj,a=ha(t.bu),o=function(){var s=t.aV.bM;if(s.$)return p(w(""),w(""));var v=s.a;return p(n(ot,r,e(function(l){return l.cu})),n(it,r,c([n(Vr,c([n(Fe,r,"link"),Br(v)]),c([w(v)]))])))}(),i=o.a,u=o.b;return n(wd,c([n(Fe,r,"container")]),c([n(ot,r,e(function(s){return s.bN})),n(it,r,c([w(t.bN)])),n(ot,r,e(function(s){return s.bh})),n(it,r,c([w(t.bh)])),n(ot,r,e(function(s){return s.bu})),n(it,r,c([n(Vr,c([n(Fe,r,"link"),Br(a)]),c([w(a)]))])),n(ot,r,e(function(s){return s.aP})),n(it,r,c([function(){var s=t.aP.at;if(s.$)return w(t.aP.x);var v=s.a;return n(Vr,c([n(Fe,r,"link"),Br("mailto:"+v)]),c([w(t.aP.x)]))}()])),i,u,n(ot,r,e(function(s){return s.da})),n(it,r,c([n(Vr,c([n(Fe,r,"link"),Br("ThirdPartyNotice.txt")]),c([w("ThirdPartyNotice.txt")]))]))]))},yd=function(r){return{$:24,a:r}},Td={$:20},kd=function(r){return{$:18,a:r}},Cd=function(r){return{$:17,a:r}},Dd=function(r){return{$:16,a:r}},Ed=function(r){return{$:15,a:r}},Au=function(r){return n(je,"checked",Ur(r))},Pd=function(r){return n(je,"disabled",Ur(r))},x=W("div"),Vd=$(function(r,e){r:for(;;)if(e.b){var t=e.a,a=e.b;if(r(t))return R(t);var o=r,i=a;r=o,e=i;continue r}else return E}),ne=Jr("htmlFor"),oe=W("label"),Bd=n(Tn,c(["target","checked"]),ua),ju=function(r){return n(Kn,"change",n(S,r,Bd))},Sd=function(r){return p(r,!0)},Ld=function(r){return{$:1,a:r}},xd=$(function(r,e){return n(Qn,r,Ld(e))}),Md=n(Tn,c(["target","value"]),F),Oe=function(r){return n(xd,"input",n(S,Sd,n(S,r,Md)))},St=W("option"),ro=$(function(r,e){return h(ur,"adw-select",r,c([e]))}),eo=W("select"),yu=function(r){return h(ur,"adw-switch",r,_)},qr=Jr("value"),Rd=function(r){var e=r.l,t=r.an,a=r.U,o=function(l){return n(ir,_,l(t._.b5))},i=n(Ae,"Views.Config",t.ad),u=i("field"),s=i("label"),v=i("tips");return n(x,c([i("container")]),c([n(x,c([u]),c([n(oe,c([s,ne("reference_server")]),c([w(o(function(l){return l.a5.bs.S}))])),n(ro,_,n(eo,c([cr("reference_server"),n(nr,"aria-describedby","reference_server_tips"),qr(e.ak.c1.C),Oe(function(l){return n(or,pa,n(_r,yd,n(Vd,function(d){return G(d.C,l)},e.am)))})]),n(Tr,function(l){return n(St,c([qr(l.C)]),c([w(l.x)]))},e.am))),n(Q,c([v,cr("reference_server_tips")]),c([w(o(function(l){return l.a5.bs.M}))]))])),n(x,c([u]),c([n(oe,c([s,ne("language")]),c([w(o(function(l){return l.v.ax.S}))])),n(ro,_,n(eo,c([cr("language"),n(nr,"aria-describedby","language_tips"),qr(kn(e.ak.cV.ax)),Oe(function(l){return n(or,pa,n(_r,Dd,yi(l)))})]),n(Tr,function(l){return n(St,c([qr(kn(l))]),c([w(l.x)]))},ji))),n(Q,c([v,cr("language_tips")]),c([w(o(function(l){return l.v.ax.M}))]))])),n(x,c([u]),c([n(oe,c([s,ne("ui_theme")]),c([w(o(function(l){return l.v.c9.S}))])),n(ro,_,n(eo,c([cr("ui_theme"),n(nr,"aria-describedby","ui_theme_tips"),qr(Tt(e.ak.c9)),Oe(function(l){return Ed(Bi(l))})]),c([n(St,c([qr(Tt(0))]),c([w(o(function(l){return l.v.c6}))])),n(St,c([qr(Tt(1))]),c([w(o(function(l){return l.v.b7}))])),n(St,c([qr(Tt(2))]),c([w(o(function(l){return l.v.cw}))]))]))),n(Q,c([v,cr("ui_theme_tips")]),c([w(o(function(l){return l.v.c9.M}))]))])),n(x,c([u]),c([n(oe,c([s,ne("feedback_vibration")]),c([w(o(function(l){return l.v.a3.S}))])),yu(c([cr("feedback_vibration"),n(nr,"aria-describedby","feedback_vibration_tips"),i("switch"),Pd(t.cT.ap===1),Au(!e.ak.cV.a3),ju(function(l){return Cd(bn(l))})])),n(Q,c([v,cr("feedback_vibration_tips")]),c([w(o(function(l){var d=t.cT.ap;return d?l.v.a3.bl:l.v.a3.M}))]))])),n(x,c([u]),c([n(oe,c([s,ne("os_notification")]),c([w(o(function(l){return l.U.aU.S}))])),function(){var l=n(lr,c([Wr(Td)]),c([n(dr,_,c([w(o(function(A){return A.U.aU.bw}))]))])),d=n(lr,c([mu(!0)]),c([n(dr,_,c([w(o(function(A){return A.U.aU.bw}))]))])),g=c([cr("os_notification"),i("switch"),n(nr,"aria-describedby","os_notification_tips")]),m=yu(Gr(c([Au(!e.ak.cV.aU),ju(function(A){return kd(bn(A))})]),g)),b=a.aQ;switch(b){case 5:return m;case 2:return l;case 3:return l;case 0:return d;case 1:return d;default:return d}}(),n(Q,c([v,cr("os_notification_tips")]),c([w(o(function(l){var d=a.aQ;switch(d){case 5:return l.U.aU.M;case 0:return l.U.aU.b1;case 1:return l.U.aU.bl;case 2:return l.U.aU.M;case 3:return l.U.aU.cb;default:return l.U.aU.cR}}))]))]))]))},Lt=function(r){return{$:1,a:r}},Fd={$:23},ja=function(r){return n(je,"disabled",Ur(r))},Od=W("form"),ya=$(function(r,e){return h(ur,"adw-input",r,c([e]))}),Ta=W("input"),to=Jr("max"),ao=Jr("min"),Hd=function(r){return p(r,!0)},Id=function(r){return{$:2,a:r}},Ud=$(function(r,e){return n(Qn,r,Id(e))}),Jd=function(r){return n(Ud,"submit",n(S,Hd,N(r)))},Wd=Jr("placeholder"),qd=fu("required"),He=function(r){return n(nr,"size",function(){return r?"medium":"large"}())},no=function(r){return n(Jr,"step",r)},xt={$:0},Nd=y(function(r,e,t){var a=r(e);if(a.$)return t;var o=a.a;return n(H,o,t)}),Tu=$(function(r,e){return h(Xe,Nd(r),_,e)}),Gd=function(r){var e=kt(r),t=(e/_n|0)%60,a=(e/An|0)%60,o=(e/jn|0)%24,i=e/Ci|0;return{b8:i,cq:o,cy:a,c0:t}},Mt=y(function(r,e,t){var a=Gd(t),o=a.b8,i=a.cq,u=a.cy,s=a.c0,v=o>0||G(e,Lt(0))?R(o):E,l=function(){if(e.$===1)switch(e.a){case 0:return e.a,E;case 1:return e.a,R(n(Ve,0,i));default:return i>0||!G(v,E)?R(i):E}else return i>0?R(i):E}(),d=function(){if(e.$===1)switch(e.a){case 0:return e.a,E;case 1:return e.a,E;default:return u>0||!G(l,E)?R(n(Ve,0,u)):E}else return u>0?R(u):E}(),g=function(){return e.$===1?e.a===3?(e.a,R(n(Ve,0,s))):E:R(n(Ve,0,s))}(),m=n(Ze,"-",r.b4);if(m.b&&m.a==="ja"){var b=n(Tu,ar,c([n(_r,function(A){return pr(A)+"\u65E5"},v),n(_r,function(A){return pr(A)+"\u6642\u9593"},l),n(_r,function(A){return pr(A)+"\u5206"},d),n(_r,function(A){return pr(A)+"\u79D2"},g)]));return e.$?n(he,"",b):n(or,"---",wn(b))}else{var b=n(Tu,ar,c([n(_r,function(k){return Gr(pr(k),G(e,xt)?" days":"days,")},v),n(_r,function(k){return Gr(pr(k),G(e,xt)?" hours":"h")},l),n(_r,function(k){return Gr(pr(k),G(e,xt)?" minutes":"m")},d),n(_r,function(k){return Gr(pr(k),G(e,xt)?" seconds":"s")},g)]));return e.$?n(he," ",b):n(or,"---",wn(b))}}),ka=Jr("type"),Ie=function(r){return n(nr,"variant",function(){return r?"neutral":"primary"}())},zd=function(r){var e=r.O,t=r.l,a=r.an,o=function(l){return n(ir,_,l(a._.cC))},i=n(Ae,"Views.NewTimer",a.ad),u=e,s=u.a,v=u.b;return n(Od,c([i("form"),Jd(Fd)]),c([n(x,c([i("field")]),c([n(oe,c([i("label"),ne("timer_name")]),c([w(o(function(l){return l.B.x.S}))])),n(ya,_,n(Ta,c([cr("timer_name"),qr(s.x),qd(!0),Wd(o(function(l){return l.B.x.cS})),n(nr,"enterkeyhint","next"),Oe(function(l){return jt(function(d){return M(d,{x:l})})})]),_))])),n(x,c([i("field")]),c([n(Q,c([i("label")]),c([w(o(function(l){return l.B.ae.F}))])),n(x,c([i("fieldGroup")]),c([n(x,c([i("suffixField")]),c([n(ya,_,n(Ta,c([cr("timer_days"),qr(s.ar),ka("number"),ao("0"),to("365"),no("1"),n(nr,"enterkeyhint","next"),Oe(function(l){return jt(function(d){return M(d,{ar:l})})})]),_)),n(oe,c([ne("timer_days")]),c([w("days")]))])),n(x,c([i("suffixField")]),c([n(ya,_,n(Ta,c([cr("timer_hours"),qr(s.av),ka("number"),ao("-999"),to("999"),no("1"),n(nr,"enterkeyhint","next"),Oe(function(l){return jt(function(d){return M(d,{av:l})})})]),_)),n(oe,c([ne("timer_hours")]),c([w("hours")]))])),n(x,c([i("suffixField")]),c([n(ya,_,n(Ta,c([cr("timer_minutes"),n(nr,"value",s.aA),ka("number"),ao("-999"),to("999"),no("1"),n(nr,"enterkeyhint","done"),Oe(function(l){return jt(function(d){return M(d,{aA:l})})})]),_)),n(oe,c([ne("timer_minutes")]),c([w("minutes")]))])),function(){if(v.$){var m=v.a;return n(Q,c([i("error")]),c([w(function(){switch(m){case 0:return o(function(b){return b.B.au.cg});case 1:return o(function(b){return b.B.au.cB});default:return o(function(b){return b.B.au.dn})}}())]))}else{var l=v.a,d=l.b,g=h(Mt,t.ak.cV.ax,Lt(2),d);return n(Q,c([i("duration")]),c([w(n(ir,c([g]),a._.cC.B.ae.df))]))}}()]))])),n(lr,c([ja(function(){return!!v.$}()),Ie(0),He(0)]),c([n(dr,c([ka("submit")]),c([w(o(function(l){return l.B.c4}))]))]))]))},Zd=function(r){var e=r.an,t=n(Ae,"Views.NotFound",e.ad);return n(x,c([t("container")]),c([n(Pr,c([t("paragraph")]),c([w("Sorry, this page does not exist.")])),n(nt,c([t("url")]),c([n(Aa,_,c([w(ha(e.bM))]))]))]))},Yd={$:4},Xd=$(function(r,e){return{$:10,a:r,b:e}}),Qd={$:5},Kd=function(r){return{$:9,a:r}},rh=$(function(r,e){return n(ur,"adw-glow-dot",n(H,n(je,"glowing",Ur(r)),e))}),eh=c([Qi(8)]),th=function(r){var e=function(){var i=r.l.ak.cY;if(i.$)return tt;var u=i.a;return u.X}(),t=r.an._.cZ,a=function(i){return n(ir,_,i(t))},o=n(Ae,"Views.RandomEventCounter",r.an.ad);return n(x,c([o("container")]),c([n(x,c([o("menus")]),c([n(lr,c([ja(G(e,tt))]),c([n(dr,c([Wr(Qd)]),c([w(a(function(i){return i.aM.dh}))]))]))])),n(x,c([o("header")]),c([n(x,c([o("dots")]),n(Tr,function(i){return h(rh,U(e,i)>-1,_,_)},n(ai,1,tt))),n(Q,c([o("number")]),c([w(pr(e))]))])),n(x,c([o("control")]),c([n(x,c([o("texts")]),c([n(Q,_,c([w(a(function(i){return i.M}))])),function(){var i=function(){var u=r.l.ak.cY;if(u.$)return"---";var s=u.a.af;return function(v){return n(ir,c([v]),t.bY)}(h(Mt,r.l.ak.cV.ax,xt,yn(X(r.an.cL)-X(s))))}();return n(Q,c([o("delta")]),c([w(a(function(u){return u.cv})),w(": "),w(i)]))}()])),n(x,c([o("actions")]),c([n(lr,c([Ie(0),He(0),ja(!e),n(Kn,"touchstart",N(e>0?n(Xd,30,Kd(eh)):pa))]),c([n(dr,c([Wr(Yd)]),c([w(a(function(i){return i.aM.b3}))]))]))]))]))]))},Ca=Ae("Views.Timer"),ah=W("h2"),nh=function(r){var e=function(o){return n(ir,_,o(r.an._.dc.aM))},t=function(o){return n(ir,_,o(r.an._.dc.cf))},a=Ca(r.an.ad);return n(x,c([a("empty")]),c([n(ah,c([a("emptyTitle")]),c([w(t(function(o){return o.F}))])),n(Pr,c([a("emptyDescription")]),c([w(t(function(o){return o.M}))])),n(lr,c([Ie(0),He(0)]),c([n(Vr,c([Br("#timers/presets")]),c([w(e(function(o){return o.bo}))]))])),n(lr,c([He(0)]),c([n(Vr,c([Br("#timers/new")]),c([w(e(function(o){return o.a_}))]))]))]))},oh=function(r){return!r.b},ku=function(r){var e=r;return e},ih=function(r){return Cs(Oo(r))},uh=ih,ch=function(r){return{$:2,a:r}},sh=function(r){return{$:0,a:r}},oo=function(r){return{$:1,a:r}},Da=W("li"),io=function(r){return h(ur,"adw-progress",r,_)},$h=br,Cu=function(r){return n(je,"value",$h(r))},lh=$(function(r,e){var t=function(m){return n(ir,_,m(r.an._.dc))},a=function(m){return t(function(b){return m(b.aM)})},o=n(pu,_,c([n(lr,c([_u,du(!0),wu(a(function(m){return m.cx}))]),c([n(dr,_,c([n(Re,4,_)]))])),n(bu,c([cr("timer_entry_"+ku(e.C))]),c([n(Bt,c([Vt(function(){var m=e.y;return m.$===1}())]),c([n(Re,5,c([Xn])),n(dr,c([Wr(ch(e))]),c([w(a(function(m){return m.ca}))]))])),n(Bt,c([Vt(function(){var m=e.y;return m.$!==1}())]),c([n(Re,3,c([Xn])),n(dr,c([Wr(oo(e))]),c([w(a(function(m){return m.c3}))]))]))]))])),i=r.l.ak.cV.ax,u=r.an._.dc,s=Ca(r.an.ad),v=e.y;switch(v.$){case 0:return n(Da,c([s("timer")]),c([n(x,c([s("timer--header")]),c([n(x,c([s("timer--header--info")]),c([n(Q,c([s("timer--header--info--title")]),c([w(e.x)])),n(x,c([s("timer--header--info--status")]),c([io(_),n(Q,_,c([w(n(ir,c([h(Mt,i,Lt(2),e.ae)]),u.bK.ae))]))]))])),o])),n(lr,c([He(0)]),c([n(dr,c([Wr(sh(e))]),c([w(a(function(m){return m.c2}))]))]))]));case 1:var l=v.a,d=h(Mt,i,Lt(3),yn(X(l)+kt(e.ae)-X(r.an.cL))),g=function(){var m=kt(e.ae),b=X(r.an.cL)-X(l);return n(Ve,0,n(Fn,1,b/m))}();return n(Da,c([s("timer")]),c([n(x,c([s("timer--header")]),c([n(x,c([s("timer--header--info")]),c([n(Q,c([s("timer--header--info--title")]),c([w(e.x)])),n(x,c([s("timer--header--info--status")]),c([io(c([Cu(g)])),n(Q,_,c([w(n(ir,c([d]),u.bK.X))]))]))])),o])),n(lr,c([He(0),Ie(0),ja(!0)]),c([n(dr,c([Wr(oo(e))]),c([w(a(function(m){return m.aX}))]))]))]));default:return n(Da,c([s("timer")]),c([n(x,c([s("timer--header")]),c([n(x,c([s("timer--header--info")]),c([n(Q,c([s("timer--header--info--title")]),c([w(e.x)])),n(x,c([s("timer--header--info--status")]),c([io(c([Cu(1)])),n(Q,_,c([w("Completed!")]))]))])),o])),n(lr,c([He(0),Ie(0)]),c([n(dr,c([Wr(oo(e))]),c([w(a(function(m){return m.aX}))]))]))]))}}),vh=$(function(r,e){var t=Ca(r.an.ad);return h(uh,"ul",c([t("timers")]),n(Tr,function(a){return p(ku(a.C),n(lh,r,a))},e))}),fh=function(r){var e=function(a){return n(ir,_,a(r.an._.dc))},t=Ca(r.an.ad);return oh(r.l.ak.de)?nh(r):n(x,c([t("container")]),c([n(x,c([t("header")]),c([n(x,c([t("actions")]),c([n(lr,c([Ie(0)]),c([n(Vr,c([Br("#timers/presets")]),c([w(e(function(a){return a.aM.bo}))]))])),n(lr,_,c([n(Vr,c([Br("#timers/new")]),c([w(e(function(a){return a.aM.a_}))]))]))])),n(Pr,c([t("description")]),c([w(e(function(a){return a.M}))]))])),n(vh,r,r.l.ak.de)]))},ph=function(r){return{$:3,a:r}},dh=Ae("Views.TimerPresets"),hh=W("ul"),mh=function(r){var e=function(i){return n(ir,_,i(r.an._.dd))},t=dh(r.an.ad),a=r.l.ak.cV,o=a.ax;return n(x,c([t("container")]),c([n(Pr,c([t("description")]),c([w(e(function(i){return i.M}))])),n(hh,c([t("list")]),n(Tr,function(i){return n(Da,c([t("item")]),c([n(Q,_,c([w(i.x(r.l.ak.cV.ax))])),n(Q,c([t("duration")]),c([w(h(Mt,o,Lt(2),i.ae))])),n(lr,c([Ie(0)]),c([n(dr,c([Wr(ph(i))]),c([w(e(function(u){return u.a_}))]))]))]))},r.l.ao))]))},bh=function(r){if(r.$===1){var e=r.a,t=r.b,a=function(s){return n(ir,_,s(t.an._))},o=function(){switch(e){case 0:return"Not Found";case 1:return a(function(s){return s.bW.F});case 2:return a(function(s){return s.b5.F});case 5:return a(function(s){return s.cC.F});case 3:return a(function(s){return s.cZ.F});case 4:return a(function(s){return s.dc.F});default:return a(function(s){return s.dd.F})}}();return{aS:n(Tr,ld(ia),h(sd,t,n(gd,e,t),c([function(){switch(e){case 0:return Zd(t);case 1:return jd(t);case 3:return th(t);case 4:return fh(t);case 5:return zd(t);case 2:return Rd(t);default:return mh(t)}}()]))),F:o+" - Genshin Utils"}}else{var i=r.a,u=r.b;return n(id,i,u)}},gh=O$({cs:Wv,cM:o$,cN:n$,c5:xf,di:Kp,dj:bh});const wh={App:{App:{init:gh(da)(0)}}},Du="profile_v2";function _h(r){r.sendAppProfileEvent.subscribe(e=>{switch(e.type){case"PersistProfile":{document.documentElement.setAttribute("data-adw-theme",e.profile.theme),Ao.exports.setItem(Du,e.profile);return}}})}function Ah(){return Ao.exports.getItem(Du)}function jh(r){let e;r.sendAppWakeLockEvent.subscribe(async t=>{switch(t.type){case"SendLockRequest":{try{e=await navigator.wakeLock.request("screen"),e.addEventListener("release",()=>{r.recieveAppWakeLockEvent.send({type:"RecieveReleased"}),e=null}),r.recieveAppWakeLockEvent.send({type:"RecieveLocked"})}catch(a){r.recieveAppWakeLockEvent.send({type:"RecieveError",error:a instanceof Error?a.message:String(a)})}return}case"SendReleaseRequest":{try{await(e==null?void 0:e.release()),e=null}catch(a){r.recieveAppWakeLockEvent.send({type:"RecieveError",error:a instanceof Error?a.message:String(a)})}return}case"SendStatusRequest":{if(!("wakeLock"in navigator)){r.recieveAppWakeLockEvent.send({type:"RecieveUnsupportedStatus"});return}r.recieveAppWakeLockEvent.send({type:"RecieveInitiallyLocked",locked:!!e});return}}})}function Eu(r){if(!("Notification"in window))return"PlatformNotSupported";switch(r||Notification.permission){case"granted":return"Available";case"denied":return"PermissionRequestDenied";case"default":return"RequiresPermission"}}function yh(r){r.sendNotificationsEvent.subscribe(e=>{switch(e.type){case"CheckAvailability":{r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:Eu()});return}case"RequestPermission":{if(Notification.permission==="granted"){r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:"Available"});return}r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:"RequestingPermission"}),Notification.requestPermission().then(t=>{r.recieveNotificationsEvent.send({type:"RecieveAvailability",availability:Eu(t)})});return}case"Send":{navigator.serviceWorker.ready.then(t=>{t.showNotification(e.notification.title,e.notification.options)});return}}})}function Th(r){r.sendVibrationEvent.subscribe(e=>{switch(e.type){case"Vibrate":{navigator.vibrate(e.pattern);return}}})}const kh="modulepreload",Pu={},Ch="https://pocka.github.io/genshin-utils/",Vu=function(e,t){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=`${Ch}${a}`,a in Pu)return;Pu[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":kh,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((s,v)=>{u.addEventListener("load",s),u.addEventListener("error",v)})})).then(()=>e())},Bu={title:"Config",description:"Configure this application.",general:{title:"General",referenceServer:{label:"Reference Server",description:"Select Genshin Game Server used for timer resets."}},notification:{title:"Notifications",inAppNotification:{label:"In-App Notification",description:"Whether to display in-page notification. This does not triggers OS/browser notification."},browserNotification:{label:"Browser Notification",description:"Whether to display OS/browser notification using Notifications API.",checking:"Checking availability...",notSupported:"Your browser does not support Notifications API.",denied:"Access to Notifications API was rejected.",permissionRequesting:"Requesting permission...",requestPermission:"Enable Notifications API"}},ui:{title:"User Interface",language:{label:"Language",description:"Choose a language to use in UI. Some may partially lack translations."},theme:{label:"UI Theme",description:"Select your preferred application theme."},systemDefaultTheme:"System Default",light:"Light",dark:"Dark",feedbackVibration:{label:"Feedback Vibration",description:"When turned on, the device perform short feedback vibration for primary actions. On devices without vibration mechanism, this setting has no effect.",notSupported:"Your browser does not support Vibration API."}}},Su={title:"Random event counter",description:"Log and Manage how many times left you can get a reward by completing a random event/quest.",lastClaimedLabel:"Last claimed",ago:"%s ago",actions:{claim:"Claim",undo:"Undo"}},Lu={title:"Timer",description:"Setup timers for parameteric transformer, investigation points, etc. You can optionally enable push notification on config page.",empty:{title:"No timers created",description:"Let's create a timer to use your resouces efficiently."},actions:{create:"Create",start:"Start",delete:"Delete",stop:"Cancel",clear:"Clear",menu:"Open Menu",presets:"Create from presets"},timerCard:{duration:"Duration: %s",remains:"%s remains",ended:"Ended %s ago"}},xu={title:"Create a new timer",form:{name:{label:"Name",placeholder:"Artifact spawn"},duration:{title:"Duration",tips:"The timer will run for %s.",day:{label:"days",placeholder:""},hour:{label:"hours",placeholder:""},minute:{label:"minutes",placeholder:""}},submit:"Create",errors:{emptyName:"Please input a name",negativeDuration:"Duration cannot be negative.",zeroDuration:"Duration cannot be zero."}}},Mu={timer:{title:"%s",body:'Timer "%s" has finished just now.',open:"Open",dismiss:"Dismiss"}},Ru={wakeLock:"Screen Lock",wakeLockNotSupported:"This browser does not support WakeLock API.",preference:"Preference",about:"About"},Fu={title:"About this app",version:"Version",license:"License",repository:"Source code",author:"Author",issues:"Issue tracker",thirdPartyNotice:"Third party notice"},Ou={title:"Timer Presets",description:"Create a timer from pre-defined presets.",create:"Create"};var Ea={configPage:Bu,randomEventCounterPage:Su,timerPage:Lu,newTimerPage:xu,notifications:Mu,appMenu:Ru,aboutPage:Fu,timerPresetsPage:Ou},Dh=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",configPage:Bu,randomEventCounterPage:Su,timerPage:Lu,newTimerPage:xu,notifications:Mu,appMenu:Ru,aboutPage:Fu,timerPresetsPage:Ou,default:Ea});function Eh(r){switch(r){case"../translations/en-GB.json":return Vu(()=>Promise.resolve().then(function(){return Dh}),void 0);case"../translations/ja-JP.json":return Vu(()=>import("./ja-JP.159484ab.js"),[]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function Ph(r,{profile:e}){const t=async a=>{if(a==="en-GB"){r.recieveAppTranslationEvent.send({type:"RecievedTranslation",translation:Ea});return}try{const o=await Eh(`../translations/${a}.json`).then(i=>i.default);r.recieveAppTranslationEvent.send({type:"RecievedTranslation",translation:oc({},Ea,o)})}catch(o){const i=o instanceof Error?o.message:String(o);r.recieveAppTranslationEvent.send({type:"FailedToFetch",error:i})}};e&&"language"in e.preference&&t(e.preference.language),r.sendAppTranslationEvent.subscribe(a=>{switch(a.type){case"RequestTranslation":{t(a.lang);return}}})}var Vh=[{id:"asia",name:"Asia",tzOffset:8,shortName:"AS"},{id:"us",name:"America",tzOffset:-5,shortName:"US"},{id:"eu",name:"Europe",tzOffset:1,shortName:"EU"}],Bh=[{name:{default:"Expedition (12hrs)","ja-JP":"\u63A2\u7D22\u6D3E\u9063 (12\u6642\u9593)"},duration:{hour:12}},{name:{default:"Expedition (20hrs)","ja-JP":"\u63A2\u7D22\u6D3E\u9063 (20\u6642\u9593)"},duration:{hour:20}},{name:{default:"Expedition (20hrs, with talents reduce)","ja-JP":"\u63A2\u7D22\u6D3E\u9063 (20\u6642\u9593, \u77ED\u7E2E\u5929\u8CE6\u3042\u308A)"},duration:{hour:15}},{name:{default:"Parametric Transformer","ja-JP":"\u53C2\u91CF\u7269\u8CEA\u5909\u5316\u5668"},duration:{day:7,hour:-2}},{name:{default:"Mystic Enhancement Ore x5 (forging)","ja-JP":"\u4ED5\u4E0A\u3052\u7528\u9B54\u9271x5 (\u935B\u9020)"},duration:{minute:15}}];const Sh="_container_nosb7_1",Lh="_label_nosb7_11",xh="_value_nosb7_26",Mh="_link_nosb7_37";var Rh={container:Sh,label:Lh,value:xh,link:Mh};const Fh="_container_38e9r_1",Oh="_field_38e9r_7",Hh="_label_38e9r_15",Ih="_tips_38e9r_21";var Uh={container:Fh,field:Oh,label:Hh,tips:Ih,switch:"_switch_38e9r_26"};const Jh="_main_1mfss_1",Wh="_nav_1mfss_5";var qh={main:Jh,nav:Wh};const Nh="_container_1qvjc_1",Gh="_menus_1qvjc_6",zh="_header_1qvjc_14",Zh="_dots_1qvjc_24",Yh="_number_1qvjc_29",Xh="_control_1qvjc_35",Qh="_actions_1qvjc_44",Kh="_texts_1qvjc_45",r1="_delta_1qvjc_53";var e1={container:Nh,menus:Gh,header:zh,dots:Zh,number:Yh,control:Xh,actions:Qh,texts:Kh,delta:r1};const t1="_container_15jgu_1",a1="_paragraph_15jgu_8",n1="_url_15jgu_13";var o1={container:t1,paragraph:a1,url:n1};const i1="_form_qnhb2_1",u1="_field_qnhb2_2",c1="_fieldGroup_qnhb2_3",s1="_suffixField_qnhb2_25",$1="_label_qnhb2_38",l1="_duration_qnhb2_50",v1="_error_qnhb2_54";var f1={form:i1,field:u1,fieldGroup:c1,suffixField:s1,label:$1,duration:l1,error:v1};const p1="_empty_axxp9_1",d1="_emptyTitle_axxp9_13",h1="_emptyDescription_axxp9_21",m1="_container_axxp9_28",b1="_header_axxp9_34",g1="_description_axxp9_41",w1="_actions_axxp9_46",_1="_timers_axxp9_53",A1="_timer_axxp9_53";var j1={empty:p1,emptyTitle:d1,emptyDescription:h1,container:m1,header:b1,description:g1,actions:w1,timers:_1,timer:A1,"timer--header":"_timer--header_axxp9_88","timer--header--info":"_timer--header--info_axxp9_95","timer--header--info--title":"_timer--header--info--title_axxp9_104","timer--header--info--status":"_timer--header--info--status_axxp9_110"};const y1="_container_1o9hr_1",T1="_description_1o9hr_8",k1="_list_1o9hr_22",C1="_item_1o9hr_34",D1="_duration_1o9hr_55";var E1={container:y1,description:T1,list:k1,item:C1,duration:D1},P1=Object.defineProperty,V1=Object.getOwnPropertyDescriptor,Hu=(r,e,t,a)=>{for(var o=a>1?void 0:a?V1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&P1(e,t,o),o};class Rt extends tr{constructor(){super();this.actionSlot=ke(),this.disabled=!1,this.loading=!1,this.addEventListener("click",e=>{if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}},{capture:!0})}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled)),e.has("loading")&&this.setAttribute("aria-busy",String(this.loading))}getActionInstance(){if(!this.actionSlot.value)return null;const e=this.actionSlot.value.assignedElements();for(const t of e)if(t instanceof HTMLButtonElement||t instanceof HTMLAnchorElement)return t;return null}get tabIndex(){const e=this.getActionInstance();return e?e.tabIndex:super.tabIndex}set tabIndex(e){const t=this.getActionInstance();if(t){t.tabIndex=e;return}super.tabIndex=e}focus(e){const t=this.getActionInstance();if(t){t.focus(e);return}super.focus.call(this,e)}}Hu([Nr({type:Boolean,attribute:!0,reflect:!0})],Rt.prototype,"disabled",2);Hu([Nr({type:Boolean,attribute:!0,reflect:!0})],Rt.prototype,"loading",2);var B1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,L1=(r,e,t,a)=>{for(var o=a>1?void 0:a?S1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&B1(e,t,o),o};class uo extends Rt{constructor(){super(...arguments);this.iconOnly=!1}static get styles(){return Ar`
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
    `}render(){return Z`
      <slot ${$e(this.actionSlot)}></slot>
      <div class="spinner"></div>
    `}}uo.defaultTagName="adw-button";L1([Nr({type:Boolean,attribute:"icon-only",reflect:!0})],uo.prototype,"iconOnly",2);class Pa extends Rt{static get styles(){return Ar`
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","listitem")}render(){return Z`
      <slot class="button" ${$e(this.actionSlot)}></slot>
      <slot class="icon" name="icon"></slot>
      <div class="spinner"></div>
    `}}Pa.defaultTagName="adw-menu-item";var x1=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Ft=(r,e,t)=>(x1(r,e,"read from private field"),t?t.call(r):e.get(r)),Iu=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Ot,Va;class co extends tr{constructor(){super();Iu(this,Ot,ke()),this.getMenuItems=()=>Ft(this,Ot).value?Ft(this,Ot).value.assignedElements().filter(e=>e instanceof Pa):[],Iu(this,Va,e=>{const t=this.getMenuItems();if(!t.length)return;const a=this.querySelector(":scope > :focus-within"),o=a&&a instanceof Pa?t.indexOf(a):-1,i=o<0?0:o+e,u=i<0?t.length-1:i>=t.length?0:i;t.forEach((s,v)=>{if(v===u){s.focus(),s.tabIndex=0;return}s.tabIndex=-1})}),this.addEventListener("keydown",e=>{if(!e.isComposing)switch(e.key){case"ArrowUp":Ft(this,Va).call(this,-1),e.preventDefault(),e.stopPropagation();return;case"ArrowDown":Ft(this,Va).call(this,1),e.preventDefault(),e.stopPropagation();return}}),this.addEventListener("focusin",e=>{const t=this.getMenuItems(),a=this.querySelector(":scope > :focus-within");!a||t.forEach(o=>{o.tabIndex=o===a?0:-1})})}static get styles(){return Ar`
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","list")}render(){return Z` <slot ${$e(Ft(this,Ot))}></slot> `}}Ot=new WeakMap;Va=new WeakMap;co.defaultTagName="adw-menu";var M1=Object.defineProperty,R1=Object.getOwnPropertyDescriptor,F1=(r,e,t,a)=>{for(var o=a>1?void 0:a?R1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&M1(e,t,o),o},O1=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},O=(r,e,t)=>(O1(r,e,"read from private field"),t?t.call(r):e.get(r)),ut=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},ie,hr,Ue,Ba,so,Sa;class $o extends tr{constructor(){super();ut(this,ie,ke()),ut(this,hr,ke()),ut(this,Ue,ke()),this.opened=!1,ut(this,Ba,()=>{if(!O(this,ie).value||!O(this,Ue).value)return;const[e]=O(this,ie).value.assignedElements();if(!e)return;const t=(e instanceof Rt?e.getActionInstance():null)||e,[a]=O(this,Ue).value.assignedElements();!a||!(a instanceof HTMLElement)||!a.id||(t.setAttribute("aria-expanded",String(this.opened)),t.setAttribute("aria-controls",a.id))}),ut(this,so,()=>{this.opened?this.close():this.open()}),this.close=(e=!1)=>{if(!!this.opened){if(document.removeEventListener("focusout",O(this,Sa)),O(this,hr).value&&(O(this,hr).value.style.display="none"),O(this,ie).value){const[t]=O(this,ie).value.assignedElements();t&&t instanceof HTMLElement&&(t.tabIndex=0,e&&t.focus())}this.dispatchEvent(new CustomEvent("menuclose")),this.opened=!1}},this.open=()=>{if(!this.opened){if(O(this,ie).value){const[e]=O(this,ie).value.assignedElements();e&&e instanceof HTMLElement&&(e.tabIndex=-1)}if(document.addEventListener("focusout",O(this,Sa)),O(this,hr).value){O(this,hr).value.style.display="block",O(this,hr).value.style.visibility="hidden",O(this,hr).value.style.pointerEvents="none";const e=O(this,hr).value.getBoundingClientRect(),t=this.getBoundingClientRect(),a={width:window.innerWidth,height:window.innerHeight},o=H1(a,t,e);if(O(this,hr).value.style.visibility="visible",O(this,hr).value.style.pointerEvents="all",O(this,hr).value.style.left=o.x+"px",O(this,hr).value.style.top=o.y+"px",O(this,Ue).value){const[i]=O(this,Ue).value.assignedElements();i instanceof co&&(i.tabIndex=0,i.focus(),i.addEventListener("blur",u=>{i.removeAttribute("tabindex")},{once:!0}))}}this.dispatchEvent(new CustomEvent("menuopen")),this.opened=!0}},ut(this,Sa,e=>{e.relatedTarget&&e.relatedTarget instanceof HTMLElement&&this.contains(e.relatedTarget)||this.close()}),this.addEventListener("keydown",e=>{if(!e.isComposing)switch(e.key){case"Escape":this.close(!0),e.preventDefault(),e.stopPropagation();return}})}static get styles(){return Ar`
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
    `}render(){return Z`
      <slot
        name="trigger"
        @click=${O(this,so)}
        @slotchange=${O(this,Ba)}
        ${$e(O(this,ie))}
      ></slot>

      <div class="content" ${$e(O(this,hr))}>
        <slot ${$e(O(this,Ue))} @click=${this.close}></slot>
      </div>
    `}updated(e){super.updated(e),e.has("opened")&&O(this,Ba).call(this)}}ie=new WeakMap;hr=new WeakMap;Ue=new WeakMap;Ba=new WeakMap;so=new WeakMap;Sa=new WeakMap;$o.defaultTagName="adw-dropdown";F1([Nr({attribute:!0,type:Boolean,reflect:!0})],$o.prototype,"opened",2);function H1(r,e,t,a=10){const o=e.x+t.width+a<=r.width?0:-(t.width-e.width),i=e.y+e.height+t.height+a*2<=r.height?e.height+a:-(t.height+a*2);return{x:o,y:i}}var I1=Object.defineProperty,U1=Object.getOwnPropertyDescriptor,J1=(r,e,t,a)=>{for(var o=a>1?void 0:a?U1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&I1(e,t,o),o};class lo extends tr{constructor(){super();this.glowing=!1}static get styles(){return Ar`
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
    `}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Z` <div class="shiny"></div> `}}lo.defaultTagName="adw-glow-dot";J1([Nr({type:Boolean,attribute:!0,reflect:!0})],lo.prototype,"glowing",2);var W1=Object.defineProperty,q1=Object.getOwnPropertyDescriptor,N1=(r,e,t,a)=>{for(var o=a>1?void 0:a?q1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&W1(e,t,o),o},G1=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},ue=(r,e,t)=>(G1(r,e,"read from private field"),t?t.call(r):e.get(r)),Ht=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},It,vo,Ut,fo,po;class ho extends tr{constructor(){super(...arguments);Ht(this,It,ke()),Ht(this,vo,()=>{ue(this,Ut).call(this)}),Ht(this,Ut,()=>{if(!ue(this,It).value)return null;const[e]=ue(this,It).value.assignedElements();return!e||!(e instanceof HTMLInputElement)?null:(this.__type=e.type,e)}),Ht(this,fo,()=>{const e=ue(this,Ut).call(this);!e||(e.stepDown(),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})))}),Ht(this,po,()=>{const e=ue(this,Ut).call(this);!e||(e.stepUp(),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})))})}static get styles(){return Ar`
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
    `}render(){return Z`
      <slot ${$e(ue(this,It))} @slotchange=${ue(this,vo)}></slot>
      ${this.__type==="number"?Z`
            <button
              class="button"
              tabindex="-1"
              aria-label="Decrement"
              @click=${ue(this,fo)}
            >
              -
            </button>
            <button
              class="button"
              tabindex="-1"
              aria-label="Increment"
              @click=${ue(this,po)}
            >
              +
            </button>
          `:uc}
    `}}It=new WeakMap;vo=new WeakMap;Ut=new WeakMap;fo=new WeakMap;po=new WeakMap;ho.defaultTagName="adw-input";N1([ic()],ho.prototype,"__type",2);class Uu extends tr{static get styles(){return Ar`
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
    `}render(){return Z`
      <div class="items">
        <slot class="item"></slot>
      </div>

      <slot class="action" name="action"></slot>
    `}}Uu.defaultTagName="adw-nav";var z1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,Y1=(r,e,t,a)=>{for(var o=a>1?void 0:a?Z1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&z1(e,t,o),o};class mo extends tr{constructor(){super(...arguments);this.active=!1}static get styles(){return Ar`
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
    `}render(){return Z`
      <slot class="icon" name="icon"></slot>
      <slot class="link"></slot>
    `}}mo.defaultTagName="adw-nav-item";Y1([Nr({type:Boolean,attribute:!0,reflect:!0})],mo.prototype,"active",2);var X1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,K1=(r,e,t,a)=>{for(var o=a>1?void 0:a?Q1(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&X1(e,t,o),o};class bo extends tr{static get styles(){return Ar`
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
    `}render(){if(typeof this.value!="number")return Z``;const e=Math.min(this.value*360,180),t=Math.min(this.value*360,360),a=this.value>.5?"calc(var(--_zindex) + 2)":"var(--_zindex)";return Z`
      <div class="progress" role="presentation">
        <div class="inner-fill" style="--_rotation: ${e}deg;"></div>
        <div
          class="inner-fill"
          style="--_rotation: ${t}deg; z-index: ${a};"
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
    `}}bo.defaultTagName="adw-progress";K1([Nr({attribute:!0,reflect:!0,type:Number})],bo.prototype,"value",2);class Ju extends tr{static get styles(){return Ar`
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
    `}render(){return Z`
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
    `}}Ju.defaultTagName="adw-select";var rm=Object.defineProperty,em=Object.getOwnPropertyDescriptor,go=(r,e,t,a)=>{for(var o=a>1?void 0:a?em(e,t):e,i=r.length-1,u;i>=0;i--)(u=r[i])&&(o=(a?u(e,t,o):u(o))||o);return a&&o&&rm(e,t,o),o},tm=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Xr=(r,e,t)=>(tm(r,e,"read from private field"),t?t.call(r):e.get(r)),wo=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},ye,La,xa;class Jt extends tr{constructor(){super();this.checked=!1,this.readOnly=!1,this.disabled=!1,wo(this,ye,ke()),wo(this,La,()=>{this.disabled||this.readOnly||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}),wo(this,xa,()=>{this.setAttribute("aria-checked",String(this.checked)),this.setAttribute("aria-readonly",String(this.readOnly)),this.setAttribute("aria-disabled",String(this.disabled))}),this.addEventListener("click",()=>{Xr(this,La).call(this)},{passive:!0}),this.addEventListener("keypress",e=>{if(!e.isComposing)switch(e.key){case" ":e.preventDefault(),this.scrollIntoView(),Xr(this,La).call(this)}})}static get styles(){return Ar`
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
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","switch"),this.hasAttribute("tabindex")||(this.tabIndex=0),Xr(this,xa).call(this)}render(){return Z`
      <div class="on"><slot name="on">ON</slot></div>
      <div class="off"><slot name="off">OFF</slot></div>
      <div class="block" ${$e(Xr(this,ye))}></div>
    `}updated(e){if(super.updated(e),e.has("checked")&&(Xr(this,xa).call(this),Xr(this,ye).value)){const t=Xr(this,ye).value.getBoundingClientRect();Xr(this,ye).value.dataset.state=this.checked?"on":"off";const a=Xr(this,ye).value.getBoundingClientRect(),o=t.left-a.left;Xr(this,ye).value.animate([{transform:`translateX(${o}px)`},{transform:"translateX(0)"}],{duration:200,easing:"ease"})}}}ye=new WeakMap;La=new WeakMap;xa=new WeakMap;Jt.defaultTagName="adw-switch";go([Nr({attribute:!0,type:Boolean})],Jt.prototype,"checked",2);go([Nr({attribute:!0,type:Boolean,reflect:!0})],Jt.prototype,"readOnly",2);go([Nr({attribute:!0,type:Boolean,reflect:!0})],Jt.prototype,"disabled",2);const am=[uo,$o,lo,ho,co,Pa,Uu,mo,bo,Ju,Jt];function nm(){am.forEach(r=>{customElements.get(r.defaultTagName)||customElements.define(r.defaultTagName,r)})}nm();const Je=Ar`
  :host {
    display: inline-flex;
    vertical-align: baseline;
  }

  .icon {
    width: auto;
    height: 1em;
  }
`;class Wu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}Wu.defaultTagName="radix-icons-backpack";class qu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}qu.defaultTagName="radix-icons-check";class Nu extends tr{static get styles(){return Je}render(){return Z`
      <svg
        class="icon"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    `}}Nu.defaultTagName="radix-icons-cross-circled";class Gu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}Gu.defaultTagName="radix-icons-dots-vertical";class zu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}zu.defaultTagName="radix-icons-pencil2";class Zu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}Zu.defaultTagName="radix-icons-timer";class Yu extends tr{static get styles(){return Je}render(){return Z`
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
    `}}Yu.defaultTagName="radix-icons-trash";const om=[Wu,qu,Nu,Gu,zu,Zu,Yu];function im(){om.forEach(r=>{customElements.get(r.defaultTagName)||customElements.define(r.defaultTagName,r)})}im();if("serviceWorker"in navigator){const r=new URL("sw.js",location.href);navigator.serviceWorker.register(r).catch(e=>{console.group("Failed to register ServiceWorker"),console.info("worker file: "+r.href),console.error(e),console.groupEnd()})}async function um(){const r=await Ah();r&&document.documentElement.setAttribute("data-adw-theme",r.theme);const e=wh.App.App.init({flags:{cssModules:{"Views.Timer":j1,"Views.NewTimer":f1,"Views.RandomEventCounter":e1,"Views.Layout":qh,"Views.NotFound":o1,"Views.About":Rh,"Views.Config":Uh,"Views.TimerPresets":E1},servers:Vh,packageInfo:{version:"2.0.0",license:"GPL-3.0-only",homepage:"https://pocka.github.io/genshin-utils/",author:{name:"Shota FUJI (pocka)"},contributors:[],repository:{type:"git",url:"https://github.com/pocka/genshin-utils"},bugs:{url:"https://github.com/pocka/genshin-utils/issues"}},mode:"production",profile:r,vibrationApi:"vibrate"in navigator,translation:Ea,timerPresets:Bh}});yh(e.ports),_h(e.ports),jh(e.ports),Th(e.ports),Ph(e.ports,{profile:r})}um();
