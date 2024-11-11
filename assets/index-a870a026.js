(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function df(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Nt={},bs=[],Yn=()=>{},R0=()=>!1,C0=/^on[^a-z]/,wl=n=>C0.test(n),pf=n=>n.startsWith("onUpdate:"),en=Object.assign,mf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},L0=Object.prototype.hasOwnProperty,gt=(n,e)=>L0.call(n,e),st=Array.isArray,Ts=n=>Rl(n)==="[object Map]",Zm=n=>Rl(n)==="[object Set]",lt=n=>typeof n=="function",Xt=n=>typeof n=="string",gf=n=>typeof n=="symbol",Ut=n=>n!==null&&typeof n=="object",Jm=n=>Ut(n)&&lt(n.then)&&lt(n.catch),Qm=Object.prototype.toString,Rl=n=>Qm.call(n),P0=n=>Rl(n).slice(8,-1),eg=n=>Rl(n)==="[object Object]",_f=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,al=df(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},I0=/-(\w)/g,ci=Cl(n=>n.replace(I0,(e,t)=>t?t.toUpperCase():"")),D0=/\B([A-Z])/g,Ys=Cl(n=>n.replace(D0,"-$1").toLowerCase()),Ll=Cl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xc=Cl(n=>n?`on${Ll(n)}`:""),Vo=(n,e)=>!Object.is(n,e),jc=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},pl=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},N0=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ud;const Bu=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Xt(i)?B0(i):Pl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Xt(n))return n;if(Ut(n))return n}}const U0=/;(?![^(]*\))/g,O0=/:([^]+)/,F0=/\/\*[^]*?\*\//g;function B0(n){const e={};return n.replace(F0,"").split(U0).forEach(t=>{if(t){const i=t.split(O0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vf(n){let e="";if(Xt(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=vf(n[t]);i&&(e+=i+" ")}else if(Ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const H0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",k0=df(H0);function tg(n){return!!n||n===""}const qc=n=>Xt(n)?n:n==null?"":st(n)||Ut(n)&&(n.toString===Qm||!lt(n.toString))?JSON.stringify(n,ng,2):String(n),ng=(n,e)=>e&&e.__v_isRef?ng(n,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Zm(e)?{[`Set(${e.size})`]:[...e.values()]}:Ut(e)&&!st(e)&&!eg(e)?String(e):e;let Vn;class z0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Vn,!e&&Vn&&(this.index=(Vn.scopes||(Vn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Vn;try{return Vn=this,e()}finally{Vn=t}}}on(){Vn=this}off(){Vn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function V0(n,e=Vn){e&&e.active&&e.effects.push(n)}function G0(){return Vn}const xf=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ig=n=>(n.w&or)>0,rg=n=>(n.n&or)>0,W0=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=or},X0=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ig(r)&&!rg(r)?r.delete(n):e[t++]=r,r.w&=~or,r.n&=~or}e.length=t}},Hu=new WeakMap;let Po=0,or=1;const ku=30;let Wn;const Rr=Symbol(""),zu=Symbol("");class Sf{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,V0(this,i)}run(){if(!this.active)return this.fn();let e=Wn,t=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wn,Wn=this,tr=!0,or=1<<++Po,Po<=ku?W0(this):fd(this),this.fn()}finally{Po<=ku&&X0(this),or=1<<--Po,Wn=this.parent,tr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wn===this?this.deferStop=!0:this.active&&(fd(this),this.onStop&&this.onStop(),this.active=!1)}}function fd(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let tr=!0;const sg=[];function Ks(){sg.push(tr),tr=!1}function $s(){const n=sg.pop();tr=n===void 0?!0:n}function En(n,e,t){if(tr&&Wn){let i=Hu.get(n);i||Hu.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=xf()),og(r)}}function og(n,e){let t=!1;Po<=ku?rg(n)||(n.n|=or,t=!ig(n)):t=!n.has(Wn),t&&(n.add(Wn),Wn.deps.push(n))}function Di(n,e,t,i,r,s){const o=Hu.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&st(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":st(n)?_f(t)&&a.push(o.get("length")):(a.push(o.get(Rr)),Ts(n)&&a.push(o.get(zu)));break;case"delete":st(n)||(a.push(o.get(Rr)),Ts(n)&&a.push(o.get(zu)));break;case"set":Ts(n)&&a.push(o.get(Rr));break}if(a.length===1)a[0]&&Vu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vu(xf(l))}}function Vu(n,e){const t=st(n)?n:[...n];for(const i of t)i.computed&&hd(i);for(const i of t)i.computed||hd(i)}function hd(n,e){(n!==Wn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const j0=df("__proto__,__v_isRef,__isVue"),ag=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gf)),q0=yf(),Y0=yf(!1,!0),K0=yf(!0),dd=$0();function $0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=vt(this);for(let s=0,o=this.length;s<o;s++)En(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(vt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ks();const i=vt(this)[e].apply(this,t);return $s(),i}}),n}function Z0(n){const e=vt(this);return En(e,"has",n),e.hasOwnProperty(n)}function yf(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?dv:hg:e?fg:ug).get(i))return i;const o=st(i);if(!n){if(o&&gt(dd,r))return Reflect.get(dd,r,s);if(r==="hasOwnProperty")return Z0}const a=Reflect.get(i,r,s);return(gf(r)?ag.has(r):j0(r))||(n||En(i,"get",r),e)?a:hn(a)?o&&_f(r)?a:a.value:Ut(a)?n?pg(a):Dl(a):a}}const J0=lg(),Q0=lg(!0);function lg(n=!1){return function(t,i,r,s){let o=t[i];if(Ps(o)&&hn(o)&&!hn(r))return!1;if(!n&&(!ml(r)&&!Ps(r)&&(o=vt(o),r=vt(r)),!st(t)&&hn(o)&&!hn(r)))return o.value=r,!0;const a=st(t)&&_f(i)?Number(i)<t.length:gt(t,i),l=Reflect.set(t,i,r,s);return t===vt(s)&&(a?Vo(r,o)&&Di(t,"set",i,r):Di(t,"add",i,r)),l}}function ev(n,e){const t=gt(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Di(n,"delete",e,void 0),i}function tv(n,e){const t=Reflect.has(n,e);return(!gf(e)||!ag.has(e))&&En(n,"has",e),t}function nv(n){return En(n,"iterate",st(n)?"length":Rr),Reflect.ownKeys(n)}const cg={get:q0,set:J0,deleteProperty:ev,has:tv,ownKeys:nv},iv={get:K0,set(n,e){return!0},deleteProperty(n,e){return!0}},rv=en({},cg,{get:Y0,set:Q0}),Mf=n=>n,Il=n=>Reflect.getPrototypeOf(n);function wa(n,e,t=!1,i=!1){n=n.__v_raw;const r=vt(n),s=vt(e);t||(e!==s&&En(r,"get",e),En(r,"get",s));const{has:o}=Il(r),a=i?Mf:t?Tf:Go;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ra(n,e=!1){const t=this.__v_raw,i=vt(t),r=vt(n);return e||(n!==r&&En(i,"has",n),En(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ca(n,e=!1){return n=n.__v_raw,!e&&En(vt(n),"iterate",Rr),Reflect.get(n,"size",n)}function pd(n){n=vt(n);const e=vt(this);return Il(e).has.call(e,n)||(e.add(n),Di(e,"add",n,n)),this}function md(n,e){e=vt(e);const t=vt(this),{has:i,get:r}=Il(t);let s=i.call(t,n);s||(n=vt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Vo(e,o)&&Di(t,"set",n,e):Di(t,"add",n,e),this}function gd(n){const e=vt(this),{has:t,get:i}=Il(e);let r=t.call(e,n);r||(n=vt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Di(e,"delete",n,void 0),s}function _d(){const n=vt(this),e=n.size!==0,t=n.clear();return e&&Di(n,"clear",void 0,void 0),t}function La(n,e){return function(i,r){const s=this,o=s.__v_raw,a=vt(o),l=e?Mf:n?Tf:Go;return!n&&En(a,"iterate",Rr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Pa(n,e,t){return function(...i){const r=this.__v_raw,s=vt(r),o=Ts(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Mf:e?Tf:Go;return!e&&En(s,"iterate",l?zu:Rr),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Vi(n){return function(...e){return n==="delete"?!1:this}}function sv(){const n={get(s){return wa(this,s)},get size(){return Ca(this)},has:Ra,add:pd,set:md,delete:gd,clear:_d,forEach:La(!1,!1)},e={get(s){return wa(this,s,!1,!0)},get size(){return Ca(this)},has:Ra,add:pd,set:md,delete:gd,clear:_d,forEach:La(!1,!0)},t={get(s){return wa(this,s,!0)},get size(){return Ca(this,!0)},has(s){return Ra.call(this,s,!0)},add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear"),forEach:La(!0,!1)},i={get(s){return wa(this,s,!0,!0)},get size(){return Ca(this,!0)},has(s){return Ra.call(this,s,!0)},add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear"),forEach:La(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pa(s,!1,!1),t[s]=Pa(s,!0,!1),e[s]=Pa(s,!1,!0),i[s]=Pa(s,!0,!0)}),[n,t,e,i]}const[ov,av,lv,cv]=sv();function Ef(n,e){const t=e?n?cv:lv:n?av:ov;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(gt(t,r)&&r in i?t:i,r,s)}const uv={get:Ef(!1,!1)},fv={get:Ef(!1,!0)},hv={get:Ef(!0,!1)},ug=new WeakMap,fg=new WeakMap,hg=new WeakMap,dv=new WeakMap;function pv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mv(n){return n.__v_skip||!Object.isExtensible(n)?0:pv(P0(n))}function Dl(n){return Ps(n)?n:bf(n,!1,cg,uv,ug)}function dg(n){return bf(n,!1,rv,fv,fg)}function pg(n){return bf(n,!0,iv,hv,hg)}function bf(n,e,t,i,r){if(!Ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=mv(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function As(n){return Ps(n)?As(n.__v_raw):!!(n&&n.__v_isReactive)}function Ps(n){return!!(n&&n.__v_isReadonly)}function ml(n){return!!(n&&n.__v_isShallow)}function mg(n){return As(n)||Ps(n)}function vt(n){const e=n&&n.__v_raw;return e?vt(e):n}function gg(n){return pl(n,"__v_skip",!0),n}const Go=n=>Ut(n)?Dl(n):n,Tf=n=>Ut(n)?pg(n):n;function _g(n){tr&&Wn&&(n=vt(n),og(n.dep||(n.dep=xf())))}function vg(n,e){n=vt(n);const t=n.dep;t&&Vu(t)}function hn(n){return!!(n&&n.__v_isRef===!0)}function Is(n){return xg(n,!1)}function gv(n){return xg(n,!0)}function xg(n,e){return hn(n)?n:new _v(n,e)}class _v{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:vt(e),this._value=t?e:Go(e)}get value(){return _g(this),this._value}set value(e){const t=this.__v_isShallow||ml(e)||Ps(e);e=t?e:vt(e),Vo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Go(e),vg(this))}}function jn(n){return hn(n)?n.value:n}const vv={get:(n,e,t)=>jn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return hn(r)&&!hn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Sg(n){return As(n)?n:new Proxy(n,vv)}class xv{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sf(e,()=>{this._dirty||(this._dirty=!0,vg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=vt(this);return _g(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Sv(n,e,t=!1){let i,r;const s=lt(n);return s?(i=n,r=Yn):(i=n.get,r=n.set),new xv(i,r,s||!r,t)}function nr(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Nl(s,e,t)}return r}function Kn(n,e,t,i){if(lt(n)){const s=nr(n,e,t,i);return s&&Jm(s)&&s.catch(o=>{Nl(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Kn(n[s],e,t,i));return r}function Nl(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){nr(l,null,10,[n,o,a]);return}}yv(n,t,r,i)}function yv(n,e,t,i=!0){console.error(n)}let Wo=!1,Gu=!1;const fn=[];let si=0;const ws=[];let Ai=null,Er=0;const yg=Promise.resolve();let Af=null;function Mg(n){const e=Af||yg;return n?e.then(this?n.bind(this):n):e}function Mv(n){let e=si+1,t=fn.length;for(;e<t;){const i=e+t>>>1;Xo(fn[i])<n?e=i+1:t=i}return e}function wf(n){(!fn.length||!fn.includes(n,Wo&&n.allowRecurse?si+1:si))&&(n.id==null?fn.push(n):fn.splice(Mv(n.id),0,n),Eg())}function Eg(){!Wo&&!Gu&&(Gu=!0,Af=yg.then(Tg))}function Ev(n){const e=fn.indexOf(n);e>si&&fn.splice(e,1)}function bv(n){st(n)?ws.push(...n):(!Ai||!Ai.includes(n,n.allowRecurse?Er+1:Er))&&ws.push(n),Eg()}function vd(n,e=Wo?si+1:0){for(;e<fn.length;e++){const t=fn[e];t&&t.pre&&(fn.splice(e,1),e--,t())}}function bg(n){if(ws.length){const e=[...new Set(ws)];if(ws.length=0,Ai){Ai.push(...e);return}for(Ai=e,Ai.sort((t,i)=>Xo(t)-Xo(i)),Er=0;Er<Ai.length;Er++)Ai[Er]();Ai=null,Er=0}}const Xo=n=>n.id==null?1/0:n.id,Tv=(n,e)=>{const t=Xo(n)-Xo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Tg(n){Gu=!1,Wo=!0,fn.sort(Tv);const e=Yn;try{for(si=0;si<fn.length;si++){const t=fn[si];t&&t.active!==!1&&nr(t,null,14)}}finally{si=0,fn.length=0,bg(),Wo=!1,Af=null,(fn.length||ws.length)&&Tg()}}function Av(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||Nt;h&&(r=t.map(m=>Xt(m)?m.trim():m)),d&&(r=t.map(N0))}let a,l=i[a=Xc(e)]||i[a=Xc(ci(e))];!l&&s&&(l=i[a=Xc(Ys(e))]),l&&Kn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Kn(c,n,6,r)}}function Ag(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!lt(n)){const l=c=>{const u=Ag(c,e,!0);u&&(a=!0,en(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ut(n)&&i.set(n,null),null):(st(s)?s.forEach(l=>o[l]=null):en(o,s),Ut(n)&&i.set(n,o),o)}function Ul(n,e){return!n||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,Ys(e))||gt(n,e))}let _n=null,Ol=null;function gl(n){const e=_n;return _n=n,Ol=n&&n.type.__scopeId||null,e}function wv(n){Ol=n}function Rv(){Ol=null}function wg(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Cd(-1);const s=gl(e);let o;try{o=n(...r)}finally{gl(s),i._d&&Cd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yc(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:m,ctx:v,inheritAttrs:x}=n;let p,g;const b=gl(n);try{if(t.shapeFlag&4){const A=r||i;p=ii(u.call(A,A,d,s,m,h,v)),g=l}else{const A=e;p=ii(A.length>1?A(s,{attrs:l,slots:a,emit:c}):A(s,null)),g=e.props?l:Cv(l)}}catch(A){Oo.length=0,Nl(A,n,1),p=zt(Ds)}let E=p;if(g&&x!==!1){const A=Object.keys(g),{shapeFlag:C}=E;A.length&&C&7&&(o&&A.some(pf)&&(g=Lv(g,o)),E=Ns(E,g))}return t.dirs&&(E=Ns(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),p=E,gl(b),p}const Cv=n=>{let e;for(const t in n)(t==="class"||t==="style"||wl(t))&&((e||(e={}))[t]=n[t]);return e},Lv=(n,e)=>{const t={};for(const i in n)(!pf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Pv(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?xd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!Ul(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?xd(i,o,c):!0:!!o;return!1}function xd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ul(t,s))return!0}return!1}function Iv({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Dv=n=>n.__isSuspense;function Nv(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):bv(n)}const Ia={};function ll(n,e,t){return Rg(n,e,t)}function Rg(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Nt){var a;const l=G0()===((a=rn)==null?void 0:a.scope)?rn:null;let c,u=!1,d=!1;if(hn(n)?(c=()=>n.value,u=ml(n)):As(n)?(c=()=>n,i=!0):st(n)?(d=!0,u=n.some(A=>As(A)||ml(A)),c=()=>n.map(A=>{if(hn(A))return A.value;if(As(A))return Ms(A);if(lt(A))return nr(A,l,2)})):lt(n)?e?c=()=>nr(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Kn(n,l,3,[m])}:c=Yn,e&&i){const A=c;c=()=>Ms(A())}let h,m=A=>{h=b.onStop=()=>{nr(A,l,4)}},v;if(qo)if(m=Yn,e?t&&Kn(e,l,3,[c(),d?[]:void 0,m]):c(),r==="sync"){const A=Cx();v=A.__watcherHandles||(A.__watcherHandles=[])}else return Yn;let x=d?new Array(n.length).fill(Ia):Ia;const p=()=>{if(b.active)if(e){const A=b.run();(i||u||(d?A.some((C,B)=>Vo(C,x[B])):Vo(A,x)))&&(h&&h(),Kn(e,l,3,[A,x===Ia?void 0:d&&x[0]===Ia?[]:x,m]),x=A)}else b.run()};p.allowRecurse=!!e;let g;r==="sync"?g=p:r==="post"?g=()=>Sn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),g=()=>wf(p));const b=new Sf(c,g);e?t?p():x=b.run():r==="post"?Sn(b.run.bind(b),l&&l.suspense):b.run();const E=()=>{b.stop(),l&&l.scope&&mf(l.scope.effects,b)};return v&&v.push(E),E}function Uv(n,e,t){const i=this.proxy,r=Xt(n)?n.includes(".")?Cg(i,n):()=>i[n]:n.bind(i,i);let s;lt(e)?s=e:(s=e.handler,t=e);const o=rn;Us(this);const a=Rg(r,s.bind(i),t);return o?Us(o):Lr(),a}function Cg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ms(n,e){if(!Ut(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),hn(n))Ms(n.value,e);else if(st(n))for(let t=0;t<n.length;t++)Ms(n[t],e);else if(Zm(n)||Ts(n))n.forEach(t=>{Ms(t,e)});else if(eg(n))for(const t in n)Ms(n[t],e);return n}function mr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ks(),Kn(l,t,8,[n.el,a,n,e]),$s())}}function Lg(n,e){return lt(n)?(()=>en({name:n.name},e,{setup:n}))():n}const No=n=>!!n.type.__asyncLoader,Pg=n=>n.type.__isKeepAlive;function Ov(n,e){Ig(n,"a",e)}function Fv(n,e){Ig(n,"da",e)}function Ig(n,e,t=rn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Pg(r.parent.vnode)&&Bv(i,e,t,r),r=r.parent}}function Bv(n,e,t,i){const r=Fl(e,n,i,!0);Cf(()=>{mf(i[e],r)},t)}function Fl(n,e,t=rn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ks(),Us(t);const a=Kn(e,t,n,o);return Lr(),$s(),a});return i?r.unshift(s):r.push(s),s}}const Ui=n=>(e,t=rn)=>(!qo||n==="sp")&&Fl(n,(...i)=>e(...i),t),Hv=Ui("bm"),Rf=Ui("m"),kv=Ui("bu"),zv=Ui("u"),Dg=Ui("bum"),Cf=Ui("um"),Vv=Ui("sp"),Gv=Ui("rtg"),Wv=Ui("rtc");function Xv(n,e=rn){Fl("ec",n,e)}const Ng="components";function jv(n,e){return Yv(Ng,n,!0,e)||n}const qv=Symbol.for("v-ndc");function Yv(n,e,t=!0,i=!1){const r=_n||rn;if(r){const s=r.type;if(n===Ng){const a=Ax(s,!1);if(a&&(a===e||a===ci(e)||a===Ll(ci(e))))return s}const o=Sd(r[n]||s[n],e)||Sd(r.appContext[n],e);return!o&&i?s:o}}function Sd(n,e){return n&&(n[e]||n[ci(e)]||n[Ll(ci(e))])}function Kv(n,e,t,i){let r;const s=t&&t[i];if(st(n)||Xt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Ut(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function $v(n,e,t={},i,r){if(_n.isCE||_n.parent&&No(_n.parent)&&_n.parent.isCE)return e!=="default"&&(t.name=e),zt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Pi();const o=s&&Ug(s(t)),a=Xg(Nn,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ug(n){return n.some(e=>xl(e)?!(e.type===Ds||e.type===Nn&&!Ug(e.children)):!0)?n:null}const Wu=n=>n?qg(n)?Nf(n)||n.proxy:Wu(n.parent):null,Uo=en(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wu(n.parent),$root:n=>Wu(n.root),$emit:n=>n.emit,$options:n=>Lf(n),$forceUpdate:n=>n.f||(n.f=()=>wf(n.update)),$nextTick:n=>n.n||(n.n=Mg.bind(n.proxy)),$watch:n=>Uv.bind(n)}),Kc=(n,e)=>n!==Nt&&!n.__isScriptSetup&&gt(n,e),Zv={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Kc(i,e))return o[e]=1,i[e];if(r!==Nt&&gt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&gt(c,e))return o[e]=3,s[e];if(t!==Nt&&gt(t,e))return o[e]=4,t[e];Xu&&(o[e]=0)}}const u=Uo[e];let d,h;if(u)return e==="$attrs"&&En(n,"get",e),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Nt&&gt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,gt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Kc(r,e)?(r[e]=t,!0):i!==Nt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Nt&&gt(n,o)||Kc(e,o)||(a=s[0])&&gt(a,o)||gt(i,o)||gt(Uo,o)||gt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yd(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Xu=!0;function Jv(n){const e=Lf(n),t=n.proxy,i=n.ctx;Xu=!1,e.beforeCreate&&Md(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:v,activated:x,deactivated:p,beforeDestroy:g,beforeUnmount:b,destroyed:E,unmounted:A,render:C,renderTracked:B,renderTriggered:D,errorCaptured:ie,serverPrefetch:R,expose:N,inheritAttrs:de,components:Me,directives:Ee,filters:H}=e;if(c&&Qv(c,i,null),o)for(const te in o){const pe=o[te];lt(pe)&&(i[te]=pe.bind(t))}if(r){const te=r.call(t,t);Ut(te)&&(n.data=Dl(te))}if(Xu=!0,s)for(const te in s){const pe=s[te],ye=lt(pe)?pe.bind(t,t):lt(pe.get)?pe.get.bind(t,t):Yn,xe=!lt(pe)&&lt(pe.set)?pe.set.bind(t):Yn,z=Xn({get:ye,set:xe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>z.value,set:ee=>z.value=ee})}if(a)for(const te in a)Og(a[te],i,t,te);if(l){const te=lt(l)?l.call(t):l;Reflect.ownKeys(te).forEach(pe=>{cl(pe,te[pe])})}u&&Md(u,n,"c");function ce(te,pe){st(pe)?pe.forEach(ye=>te(ye.bind(t))):pe&&te(pe.bind(t))}if(ce(Hv,d),ce(Rf,h),ce(kv,m),ce(zv,v),ce(Ov,x),ce(Fv,p),ce(Xv,ie),ce(Wv,B),ce(Gv,D),ce(Dg,b),ce(Cf,A),ce(Vv,R),st(N))if(N.length){const te=n.exposed||(n.exposed={});N.forEach(pe=>{Object.defineProperty(te,pe,{get:()=>t[pe],set:ye=>t[pe]=ye})})}else n.exposed||(n.exposed={});C&&n.render===Yn&&(n.render=C),de!=null&&(n.inheritAttrs=de),Me&&(n.components=Me),Ee&&(n.directives=Ee)}function Qv(n,e,t=Yn){st(n)&&(n=ju(n));for(const i in n){const r=n[i];let s;Ut(r)?"default"in r?s=Li(r.from||i,r.default,!0):s=Li(r.from||i):s=Li(r),hn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Md(n,e,t){Kn(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Og(n,e,t,i){const r=i.includes(".")?Cg(t,i):()=>t[i];if(Xt(n)){const s=e[n];lt(s)&&ll(r,s)}else if(lt(n))ll(r,n.bind(t));else if(Ut(n))if(st(n))n.forEach(s=>Og(s,e,t,i));else{const s=lt(n.handler)?n.handler.bind(t):e[n.handler];lt(s)&&ll(r,s,n)}}function Lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_l(l,c,o,!0)),_l(l,e,o)),Ut(e)&&s.set(e,l),l}function _l(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_l(n,s,t,!0),r&&r.forEach(o=>_l(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ex[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ex={data:Ed,props:bd,emits:bd,methods:Io,computed:Io,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Io,directives:Io,watch:nx,provide:Ed,inject:tx};function Ed(n,e){return e?n?function(){return en(lt(n)?n.call(this,this):n,lt(e)?e.call(this,this):e)}:e:n}function tx(n,e){return Io(ju(n),ju(e))}function ju(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pn(n,e){return n?[...new Set([].concat(n,e))]:e}function Io(n,e){return n?en(Object.create(null),n,e):e}function bd(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:en(Object.create(null),yd(n),yd(e??{})):e}function nx(n,e){if(!n)return e;if(!e)return n;const t=en(Object.create(null),n);for(const i in e)t[i]=pn(n[i],e[i]);return t}function Fg(){return{app:null,config:{isNativeTag:R0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ix=0;function rx(n,e){return function(i,r=null){lt(i)||(i=en({},i)),r!=null&&!Ut(r)&&(r=null);const s=Fg(),o=new Set;let a=!1;const l=s.app={_uid:ix++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Lx,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&lt(c.install)?(o.add(c),c.install(l,...u)):lt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=zt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Nf(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vl=l;try{return c()}finally{vl=null}}};return l}}let vl=null;function cl(n,e){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[n]=e}}function Li(n,e,t=!1){const i=rn||_n;if(i||vl){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:vl._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&lt(e)?e.call(i&&i.proxy):e}}function sx(n,e,t,i=!1){const r={},s={};pl(s,Hl,1),n.propsDefaults=Object.create(null),Bg(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:dg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ox(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=vt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ul(n.emitsOptions,h))continue;const m=e[h];if(l)if(gt(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const v=ci(h);r[v]=qu(l,a,v,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Bg(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=Ys(d))===d||!gt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=qu(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!gt(e,d))&&(delete s[d],c=!0)}c&&Di(n,"set","$attrs")}function Bg(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(al(l))continue;const c=e[l];let u;r&&gt(r,u=ci(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ul(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=vt(t),c=a||Nt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=qu(r,l,d,c[d],n,!gt(c,d))}}return o}function qu(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Us(r),i=c[t]=l.call(null,e),Lr())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ys(t))&&(i=!0))}return i}function Hg(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!lt(n)){const u=d=>{l=!0;const[h,m]=Hg(d,e,!0);en(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ut(n)&&i.set(n,bs),bs;if(st(s))for(let u=0;u<s.length;u++){const d=ci(s[u]);Td(d)&&(o[d]=Nt)}else if(s)for(const u in s){const d=ci(u);if(Td(d)){const h=s[u],m=o[d]=st(h)||lt(h)?{type:h}:en({},h);if(m){const v=Rd(Boolean,m.type),x=Rd(String,m.type);m[0]=v>-1,m[1]=x<0||v<x,(v>-1||gt(m,"default"))&&a.push(d)}}}const c=[o,a];return Ut(n)&&i.set(n,c),c}function Td(n){return n[0]!=="$"}function Ad(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function wd(n,e){return Ad(n)===Ad(e)}function Rd(n,e){return st(e)?e.findIndex(t=>wd(t,n)):lt(e)&&wd(e,n)?0:-1}const kg=n=>n[0]==="_"||n==="$stable",Pf=n=>st(n)?n.map(ii):[ii(n)],ax=(n,e,t)=>{if(e._n)return e;const i=wg((...r)=>Pf(e(...r)),t);return i._c=!1,i},zg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(kg(r))continue;const s=n[r];if(lt(s))e[r]=ax(r,s,i);else if(s!=null){const o=Pf(s);e[r]=()=>o}}},Vg=(n,e)=>{const t=Pf(e);n.slots.default=()=>t},lx=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=vt(e),pl(e,"_",t)):zg(e,n.slots={})}else n.slots={},e&&Vg(n,e);pl(n.slots,Hl,1)},cx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(en(r,e),!t&&a===1&&delete r._):(s=!e.$stable,zg(e,r)),o=e}else e&&(Vg(n,e),o={default:1});if(s)for(const a in r)!kg(a)&&!(a in o)&&delete r[a]};function Yu(n,e,t,i,r=!1){if(st(n)){n.forEach((h,m)=>Yu(h,e&&(st(e)?e[m]:e),t,i,r));return}if(No(i)&&!r)return;const s=i.shapeFlag&4?Nf(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Nt?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Xt(c)?(u[c]=null,gt(d,c)&&(d[c]=null)):hn(c)&&(c.value=null)),lt(l))nr(l,a,12,[o,u]);else{const h=Xt(l),m=hn(l);if(h||m){const v=()=>{if(n.f){const x=h?gt(d,l)?d[l]:u[l]:l.value;r?st(x)&&mf(x,s):st(x)?x.includes(s)||x.push(s):h?(u[l]=[s],gt(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,gt(d,l)&&(d[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,Sn(v,t)):v()}}}const Sn=Nv;function ux(n){return fx(n)}function fx(n,e){const t=Bu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Yn,insertStaticContent:v}=n,x=(S,I,O,W=null,K=null,se=null,ve=!1,oe=null,Se=!!I.dynamicChildren)=>{if(S===I)return;S&&!yo(S,I)&&(W=j(S),ee(S,K,se,!0),S=null),I.patchFlag===-2&&(Se=!1,I.dynamicChildren=null);const{type:_e,ref:Be,shapeFlag:w}=I;switch(_e){case Bl:p(S,I,O,W);break;case Ds:g(S,I,O,W);break;case ul:S==null&&b(I,O,W,ve);break;case Nn:Me(S,I,O,W,K,se,ve,oe,Se);break;default:w&1?C(S,I,O,W,K,se,ve,oe,Se):w&6?Ee(S,I,O,W,K,se,ve,oe,Se):(w&64||w&128)&&_e.process(S,I,O,W,K,se,ve,oe,Se,ge)}Be!=null&&K&&Yu(Be,S&&S.ref,se,I||S,!I)},p=(S,I,O,W)=>{if(S==null)i(I.el=a(I.children),O,W);else{const K=I.el=S.el;I.children!==S.children&&c(K,I.children)}},g=(S,I,O,W)=>{S==null?i(I.el=l(I.children||""),O,W):I.el=S.el},b=(S,I,O,W)=>{[S.el,S.anchor]=v(S.children,I,O,W,S.el,S.anchor)},E=({el:S,anchor:I},O,W)=>{let K;for(;S&&S!==I;)K=h(S),i(S,O,W),S=K;i(I,O,W)},A=({el:S,anchor:I})=>{let O;for(;S&&S!==I;)O=h(S),r(S),S=O;r(I)},C=(S,I,O,W,K,se,ve,oe,Se)=>{ve=ve||I.type==="svg",S==null?B(I,O,W,K,se,ve,oe,Se):R(S,I,K,se,ve,oe,Se)},B=(S,I,O,W,K,se,ve,oe)=>{let Se,_e;const{type:Be,props:w,shapeFlag:y,transition:G,dirs:ue}=S;if(Se=S.el=o(S.type,se,w&&w.is,w),y&8?u(Se,S.children):y&16&&ie(S.children,Se,null,W,K,se&&Be!=="foreignObject",ve,oe),ue&&mr(S,null,W,"created"),D(Se,S,S.scopeId,ve,W),w){for(const me in w)me!=="value"&&!al(me)&&s(Se,me,null,w[me],se,S.children,W,K,He);"value"in w&&s(Se,"value",null,w.value),(_e=w.onVnodeBeforeMount)&&ni(_e,W,S)}ue&&mr(S,null,W,"beforeMount");const fe=(!K||K&&!K.pendingBranch)&&G&&!G.persisted;fe&&G.beforeEnter(Se),i(Se,I,O),((_e=w&&w.onVnodeMounted)||fe||ue)&&Sn(()=>{_e&&ni(_e,W,S),fe&&G.enter(Se),ue&&mr(S,null,W,"mounted")},K)},D=(S,I,O,W,K)=>{if(O&&m(S,O),W)for(let se=0;se<W.length;se++)m(S,W[se]);if(K){let se=K.subTree;if(I===se){const ve=K.vnode;D(S,ve,ve.scopeId,ve.slotScopeIds,K.parent)}}},ie=(S,I,O,W,K,se,ve,oe,Se=0)=>{for(let _e=Se;_e<S.length;_e++){const Be=S[_e]=oe?$i(S[_e]):ii(S[_e]);x(null,Be,I,O,W,K,se,ve,oe)}},R=(S,I,O,W,K,se,ve)=>{const oe=I.el=S.el;let{patchFlag:Se,dynamicChildren:_e,dirs:Be}=I;Se|=S.patchFlag&16;const w=S.props||Nt,y=I.props||Nt;let G;O&&gr(O,!1),(G=y.onVnodeBeforeUpdate)&&ni(G,O,I,S),Be&&mr(I,S,O,"beforeUpdate"),O&&gr(O,!0);const ue=K&&I.type!=="foreignObject";if(_e?N(S.dynamicChildren,_e,oe,O,W,ue,se):ve||pe(S,I,oe,null,O,W,ue,se,!1),Se>0){if(Se&16)de(oe,I,w,y,O,W,K);else if(Se&2&&w.class!==y.class&&s(oe,"class",null,y.class,K),Se&4&&s(oe,"style",w.style,y.style,K),Se&8){const fe=I.dynamicProps;for(let me=0;me<fe.length;me++){const De=fe[me],Te=w[De],Q=y[De];(Q!==Te||De==="value")&&s(oe,De,Te,Q,K,S.children,O,W,He)}}Se&1&&S.children!==I.children&&u(oe,I.children)}else!ve&&_e==null&&de(oe,I,w,y,O,W,K);((G=y.onVnodeUpdated)||Be)&&Sn(()=>{G&&ni(G,O,I,S),Be&&mr(I,S,O,"updated")},W)},N=(S,I,O,W,K,se,ve)=>{for(let oe=0;oe<I.length;oe++){const Se=S[oe],_e=I[oe],Be=Se.el&&(Se.type===Nn||!yo(Se,_e)||Se.shapeFlag&70)?d(Se.el):O;x(Se,_e,Be,null,W,K,se,ve,!0)}},de=(S,I,O,W,K,se,ve)=>{if(O!==W){if(O!==Nt)for(const oe in O)!al(oe)&&!(oe in W)&&s(S,oe,O[oe],null,ve,I.children,K,se,He);for(const oe in W){if(al(oe))continue;const Se=W[oe],_e=O[oe];Se!==_e&&oe!=="value"&&s(S,oe,_e,Se,ve,I.children,K,se,He)}"value"in W&&s(S,"value",O.value,W.value)}},Me=(S,I,O,W,K,se,ve,oe,Se)=>{const _e=I.el=S?S.el:a(""),Be=I.anchor=S?S.anchor:a("");let{patchFlag:w,dynamicChildren:y,slotScopeIds:G}=I;G&&(oe=oe?oe.concat(G):G),S==null?(i(_e,O,W),i(Be,O,W),ie(I.children,O,Be,K,se,ve,oe,Se)):w>0&&w&64&&y&&S.dynamicChildren?(N(S.dynamicChildren,y,O,K,se,ve,oe),(I.key!=null||K&&I===K.subTree)&&Gg(S,I,!0)):pe(S,I,O,Be,K,se,ve,oe,Se)},Ee=(S,I,O,W,K,se,ve,oe,Se)=>{I.slotScopeIds=oe,S==null?I.shapeFlag&512?K.ctx.activate(I,O,W,ve,Se):H(I,O,W,K,se,ve,Se):Z(S,I,Se)},H=(S,I,O,W,K,se,ve)=>{const oe=S.component=yx(S,W,K);if(Pg(S)&&(oe.ctx.renderer=ge),Mx(oe),oe.asyncDep){if(K&&K.registerDep(oe,ce),!S.el){const Se=oe.subTree=zt(Ds);g(null,Se,I,O)}return}ce(oe,S,I,O,K,se,ve)},Z=(S,I,O)=>{const W=I.component=S.component;if(Pv(S,I,O))if(W.asyncDep&&!W.asyncResolved){te(W,I,O);return}else W.next=I,Ev(W.update),W.update();else I.el=S.el,W.vnode=I},ce=(S,I,O,W,K,se,ve)=>{const oe=()=>{if(S.isMounted){let{next:Be,bu:w,u:y,parent:G,vnode:ue}=S,fe=Be,me;gr(S,!1),Be?(Be.el=ue.el,te(S,Be,ve)):Be=ue,w&&jc(w),(me=Be.props&&Be.props.onVnodeBeforeUpdate)&&ni(me,G,Be,ue),gr(S,!0);const De=Yc(S),Te=S.subTree;S.subTree=De,x(Te,De,d(Te.el),j(Te),S,K,se),Be.el=De.el,fe===null&&Iv(S,De.el),y&&Sn(y,K),(me=Be.props&&Be.props.onVnodeUpdated)&&Sn(()=>ni(me,G,Be,ue),K)}else{let Be;const{el:w,props:y}=I,{bm:G,m:ue,parent:fe}=S,me=No(I);if(gr(S,!1),G&&jc(G),!me&&(Be=y&&y.onVnodeBeforeMount)&&ni(Be,fe,I),gr(S,!0),w&&Ie){const De=()=>{S.subTree=Yc(S),Ie(w,S.subTree,S,K,null)};me?I.type.__asyncLoader().then(()=>!S.isUnmounted&&De()):De()}else{const De=S.subTree=Yc(S);x(null,De,O,W,S,K,se),I.el=De.el}if(ue&&Sn(ue,K),!me&&(Be=y&&y.onVnodeMounted)){const De=I;Sn(()=>ni(Be,fe,De),K)}(I.shapeFlag&256||fe&&No(fe.vnode)&&fe.vnode.shapeFlag&256)&&S.a&&Sn(S.a,K),S.isMounted=!0,I=O=W=null}},Se=S.effect=new Sf(oe,()=>wf(_e),S.scope),_e=S.update=()=>Se.run();_e.id=S.uid,gr(S,!0),_e()},te=(S,I,O)=>{I.component=S;const W=S.vnode.props;S.vnode=I,S.next=null,ox(S,I.props,W,O),cx(S,I.children,O),Ks(),vd(),$s()},pe=(S,I,O,W,K,se,ve,oe,Se=!1)=>{const _e=S&&S.children,Be=S?S.shapeFlag:0,w=I.children,{patchFlag:y,shapeFlag:G}=I;if(y>0){if(y&128){xe(_e,w,O,W,K,se,ve,oe,Se);return}else if(y&256){ye(_e,w,O,W,K,se,ve,oe,Se);return}}G&8?(Be&16&&He(_e,K,se),w!==_e&&u(O,w)):Be&16?G&16?xe(_e,w,O,W,K,se,ve,oe,Se):He(_e,K,se,!0):(Be&8&&u(O,""),G&16&&ie(w,O,W,K,se,ve,oe,Se))},ye=(S,I,O,W,K,se,ve,oe,Se)=>{S=S||bs,I=I||bs;const _e=S.length,Be=I.length,w=Math.min(_e,Be);let y;for(y=0;y<w;y++){const G=I[y]=Se?$i(I[y]):ii(I[y]);x(S[y],G,O,null,K,se,ve,oe,Se)}_e>Be?He(S,K,se,!0,!1,w):ie(I,O,W,K,se,ve,oe,Se,w)},xe=(S,I,O,W,K,se,ve,oe,Se)=>{let _e=0;const Be=I.length;let w=S.length-1,y=Be-1;for(;_e<=w&&_e<=y;){const G=S[_e],ue=I[_e]=Se?$i(I[_e]):ii(I[_e]);if(yo(G,ue))x(G,ue,O,null,K,se,ve,oe,Se);else break;_e++}for(;_e<=w&&_e<=y;){const G=S[w],ue=I[y]=Se?$i(I[y]):ii(I[y]);if(yo(G,ue))x(G,ue,O,null,K,se,ve,oe,Se);else break;w--,y--}if(_e>w){if(_e<=y){const G=y+1,ue=G<Be?I[G].el:W;for(;_e<=y;)x(null,I[_e]=Se?$i(I[_e]):ii(I[_e]),O,ue,K,se,ve,oe,Se),_e++}}else if(_e>y)for(;_e<=w;)ee(S[_e],K,se,!0),_e++;else{const G=_e,ue=_e,fe=new Map;for(_e=ue;_e<=y;_e++){const Ge=I[_e]=Se?$i(I[_e]):ii(I[_e]);Ge.key!=null&&fe.set(Ge.key,_e)}let me,De=0;const Te=y-ue+1;let Q=!1,T=0;const Y=new Array(Te);for(_e=0;_e<Te;_e++)Y[_e]=0;for(_e=G;_e<=w;_e++){const Ge=S[_e];if(De>=Te){ee(Ge,K,se,!0);continue}let ke;if(Ge.key!=null)ke=fe.get(Ge.key);else for(me=ue;me<=y;me++)if(Y[me-ue]===0&&yo(Ge,I[me])){ke=me;break}ke===void 0?ee(Ge,K,se,!0):(Y[ke-ue]=_e+1,ke>=T?T=ke:Q=!0,x(Ge,I[ke],O,null,K,se,ve,oe,Se),De++)}const V=Q?hx(Y):bs;for(me=V.length-1,_e=Te-1;_e>=0;_e--){const Ge=ue+_e,ke=I[Ge],je=Ge+1<Be?I[Ge+1].el:W;Y[_e]===0?x(null,ke,O,je,K,se,ve,oe,Se):Q&&(me<0||_e!==V[me]?z(ke,O,je,2):me--)}}},z=(S,I,O,W,K=null)=>{const{el:se,type:ve,transition:oe,children:Se,shapeFlag:_e}=S;if(_e&6){z(S.component.subTree,I,O,W);return}if(_e&128){S.suspense.move(I,O,W);return}if(_e&64){ve.move(S,I,O,ge);return}if(ve===Nn){i(se,I,O);for(let w=0;w<Se.length;w++)z(Se[w],I,O,W);i(S.anchor,I,O);return}if(ve===ul){E(S,I,O);return}if(W!==2&&_e&1&&oe)if(W===0)oe.beforeEnter(se),i(se,I,O),Sn(()=>oe.enter(se),K);else{const{leave:w,delayLeave:y,afterLeave:G}=oe,ue=()=>i(se,I,O),fe=()=>{w(se,()=>{ue(),G&&G()})};y?y(se,ue,fe):fe()}else i(se,I,O)},ee=(S,I,O,W=!1,K=!1)=>{const{type:se,props:ve,ref:oe,children:Se,dynamicChildren:_e,shapeFlag:Be,patchFlag:w,dirs:y}=S;if(oe!=null&&Yu(oe,null,O,S,!0),Be&256){I.ctx.deactivate(S);return}const G=Be&1&&y,ue=!No(S);let fe;if(ue&&(fe=ve&&ve.onVnodeBeforeUnmount)&&ni(fe,I,S),Be&6)Ne(S.component,O,W);else{if(Be&128){S.suspense.unmount(O,W);return}G&&mr(S,null,I,"beforeUnmount"),Be&64?S.type.remove(S,I,O,K,ge,W):_e&&(se!==Nn||w>0&&w&64)?He(_e,I,O,!1,!0):(se===Nn&&w&384||!K&&Be&16)&&He(Se,I,O),W&&Re(S)}(ue&&(fe=ve&&ve.onVnodeUnmounted)||G)&&Sn(()=>{fe&&ni(fe,I,S),G&&mr(S,null,I,"unmounted")},O)},Re=S=>{const{type:I,el:O,anchor:W,transition:K}=S;if(I===Nn){Pe(O,W);return}if(I===ul){A(S);return}const se=()=>{r(O),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(S.shapeFlag&1&&K&&!K.persisted){const{leave:ve,delayLeave:oe}=K,Se=()=>ve(O,se);oe?oe(S.el,se,Se):Se()}else se()},Pe=(S,I)=>{let O;for(;S!==I;)O=h(S),r(S),S=O;r(I)},Ne=(S,I,O)=>{const{bum:W,scope:K,update:se,subTree:ve,um:oe}=S;W&&jc(W),K.stop(),se&&(se.active=!1,ee(ve,S,I,O)),oe&&Sn(oe,I),Sn(()=>{S.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},He=(S,I,O,W=!1,K=!1,se=0)=>{for(let ve=se;ve<S.length;ve++)ee(S[ve],I,O,W,K)},j=S=>S.shapeFlag&6?j(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),ne=(S,I,O)=>{S==null?I._vnode&&ee(I._vnode,null,null,!0):x(I._vnode||null,S,I,null,null,null,O),vd(),bg(),I._vnode=S},ge={p:x,um:ee,m:z,r:Re,mt:H,mc:ie,pc:pe,pbc:N,n:j,o:n};let Le,Ie;return e&&([Le,Ie]=e(ge)),{render:ne,hydrate:Le,createApp:rx(ne,Le)}}function gr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Gg(n,e,t=!1){const i=n.children,r=e.children;if(st(i)&&st(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$i(r[s]),a.el=o.el),t||Gg(o,a)),a.type===Bl&&(a.el=o.el)}}function hx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const dx=n=>n.__isTeleport,Nn=Symbol.for("v-fgt"),Bl=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),ul=Symbol.for("v-stc"),Oo=[];let qn=null;function Pi(n=!1){Oo.push(qn=n?null:[])}function px(){Oo.pop(),qn=Oo[Oo.length-1]||null}let jo=1;function Cd(n){jo+=n}function Wg(n){return n.dynamicChildren=jo>0?qn||bs:null,px(),jo>0&&qn&&qn.push(n),n}function Cr(n,e,t,i,r,s){return Wg(J(n,e,t,i,r,s,!0))}function Xg(n,e,t,i,r){return Wg(zt(n,e,t,i,r,!0))}function xl(n){return n?n.__v_isVNode===!0:!1}function yo(n,e){return n.type===e.type&&n.key===e.key}const Hl="__vInternal",jg=({key:n})=>n??null,fl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xt(n)||hn(n)||lt(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function J(n,e=null,t=null,i=0,r=null,s=n===Nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jg(e),ref:e&&fl(e),scopeId:Ol,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return a?(If(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),jo>0&&!o&&qn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qn.push(l),l}const zt=mx;function mx(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===qv)&&(n=Ds),xl(n)){const a=Ns(n,e,!0);return t&&If(a,t),jo>0&&!s&&qn&&(a.shapeFlag&6?qn[qn.indexOf(n)]=a:qn.push(a)),a.patchFlag|=-2,a}if(wx(n)&&(n=n.__vccOpts),e){e=gx(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=vf(a)),Ut(l)&&(mg(l)&&!st(l)&&(l=en({},l)),e.style=Pl(l))}const o=Xt(n)?1:Dv(n)?128:dx(n)?64:Ut(n)?4:lt(n)?2:0;return J(n,e,t,i,r,o,s,!0)}function gx(n){return n?mg(n)||Hl in n?en({},n):n:null}function Ns(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?vx(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&jg(a),ref:e&&e.ref?t&&r?st(r)?r.concat(fl(e)):[r,fl(e)]:fl(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ns(n.ssContent),ssFallback:n.ssFallback&&Ns(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function wi(n=" ",e=0){return zt(Bl,null,n,e)}function _x(n,e){const t=zt(ul,null,n);return t.staticCount=e,t}function ii(n){return n==null||typeof n=="boolean"?zt(Ds):st(n)?zt(Nn,null,n.slice()):typeof n=="object"?$i(n):zt(Bl,null,String(n))}function $i(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ns(n)}function If(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),If(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Hl in e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[wi(e)]):t=8);n.children=e,n.shapeFlag|=t}function vx(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=vf([e.class,i.class]));else if(r==="style")e.style=Pl([e.style,i.style]);else if(wl(r)){const s=e[r],o=i[r];o&&s!==o&&!(st(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ni(n,e,t,i=null){Kn(n,e,7,[t,i])}const xx=Fg();let Sx=0;function yx(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||xx,s={uid:Sx++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new z0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(i,r),emitsOptions:Ag(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Av.bind(null,s),n.ce&&n.ce(s),s}let rn=null,Df,Qr,Ld="__VUE_INSTANCE_SETTERS__";(Qr=Bu()[Ld])||(Qr=Bu()[Ld]=[]),Qr.push(n=>rn=n),Df=n=>{Qr.length>1?Qr.forEach(e=>e(n)):Qr[0](n)};const Us=n=>{Df(n),n.scope.on()},Lr=()=>{rn&&rn.scope.off(),Df(null)};function qg(n){return n.vnode.shapeFlag&4}let qo=!1;function Mx(n,e=!1){qo=e;const{props:t,children:i}=n.vnode,r=qg(n);sx(n,t,r,e),lx(n,i);const s=r?Ex(n,e):void 0;return qo=!1,s}function Ex(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=gg(new Proxy(n.ctx,Zv));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Tx(n):null;Us(n),Ks();const s=nr(i,n,0,[n.props,r]);if($s(),Lr(),Jm(s)){if(s.then(Lr,Lr),e)return s.then(o=>{Pd(n,o,e)}).catch(o=>{Nl(o,n,0)});n.asyncDep=s}else Pd(n,s,e)}else Yg(n,e)}function Pd(n,e,t){lt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ut(e)&&(n.setupState=Sg(e)),Yg(n,t)}let Id;function Yg(n,e,t){const i=n.type;if(!n.render){if(!e&&Id&&!i.render){const r=i.template||Lf(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=en(en({isCustomElement:s,delimiters:a},o),l);i.render=Id(r,c)}}n.render=i.render||Yn}Us(n),Ks(),Jv(n),$s(),Lr()}function bx(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return En(n,"get","$attrs"),e[t]}}))}function Tx(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return bx(n)},slots:n.slots,emit:n.emit,expose:e}}function Nf(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Sg(gg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Uo)return Uo[t](n)},has(e,t){return t in e||t in Uo}}))}function Ax(n,e=!0){return lt(n)?n.displayName||n.name:n.name||e&&n.__name}function wx(n){return lt(n)&&"__vccOpts"in n}const Xn=(n,e)=>Sv(n,e,qo);function Kg(n,e,t){const i=arguments.length;return i===2?Ut(e)&&!st(e)?xl(e)?zt(n,null,[e]):zt(n,e):zt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&xl(t)&&(t=[t]),zt(n,e,t))}const Rx=Symbol.for("v-scx"),Cx=()=>Li(Rx),Lx="3.3.4",Px="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,Dd=br&&br.createElement("template"),Ix={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?br.createElementNS(Px,n):br.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>br.createTextNode(n),createComment:n=>br.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>br.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Dd.innerHTML=i?`<svg>${n}</svg>`:n;const a=Dd.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Dx(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Nx(n,e,t){const i=n.style,r=Xt(t);if(t&&!r){if(e&&!Xt(e))for(const s in e)t[s]==null&&Ku(i,s,"");for(const s in t)Ku(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Nd=/\s*!important$/;function Ku(n,e,t){if(st(t))t.forEach(i=>Ku(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ux(n,e);Nd.test(t)?n.setProperty(Ys(i),t.replace(Nd,""),"important"):n[i]=t}}const Ud=["Webkit","Moz","ms"],$c={};function Ux(n,e){const t=$c[e];if(t)return t;let i=ci(e);if(i!=="filter"&&i in n)return $c[e]=i;i=Ll(i);for(let r=0;r<Ud.length;r++){const s=Ud[r]+i;if(s in n)return $c[e]=s}return e}const Od="http://www.w3.org/1999/xlink";function Ox(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Od,e.slice(6,e.length)):n.setAttributeNS(Od,e,t);else{const s=k0(e);t==null||s&&!tg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Fx(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=tg(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Bx(n,e,t,i){n.addEventListener(e,t,i)}function Hx(n,e,t,i){n.removeEventListener(e,t,i)}function kx(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=zx(e);if(i){const c=s[e]=Wx(i,r);Bx(n,a,c,l)}else o&&(Hx(n,a,o,l),s[e]=void 0)}}const Fd=/(?:Once|Passive|Capture)$/;function zx(n){let e;if(Fd.test(n)){e={};let i;for(;i=n.match(Fd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ys(n.slice(2)),e]}let Zc=0;const Vx=Promise.resolve(),Gx=()=>Zc||(Vx.then(()=>Zc=0),Zc=Date.now());function Wx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Kn(Xx(i,t.value),e,5,[i])};return t.value=n,t.attached=Gx(),t}function Xx(n,e){if(st(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bd=/^on[a-z]/,jx=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Dx(n,i,r):e==="style"?Nx(n,t,i):wl(e)?pf(e)||kx(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qx(n,e,i,r))?Fx(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ox(n,e,i,r))};function qx(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Bd.test(e)&&lt(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Bd.test(e)&&Xt(t)?!1:e in n}const Yx=en({patchProp:jx},Ix);let Hd;function Kx(){return Hd||(Hd=ux(Yx))}const $x=(...n)=>{const e=Kx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zx(i);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zx(n){return Xt(n)?document.querySelector(n):n}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function Jx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const St=Object.assign;function Jc(n,e){const t={};for(const i in e){const r=e[i];t[i]=Zn(r)?r.map(n):n(r)}return t}const Fo=()=>{},Zn=Array.isArray,Qx=/\/$/,eS=n=>n.replace(Qx,"");function Qc(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=rS(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function tS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function kd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function nS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Os(e.matched[i],t.matched[r])&&$g(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Os(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function $g(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!iS(n[t],e[t]))return!1;return!0}function iS(n,e){return Zn(n)?zd(n,e):Zn(e)?zd(e,n):n===e}function zd(n,e){return Zn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function rS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Yo;(function(n){n.pop="pop",n.push="push"})(Yo||(Yo={}));var Bo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Bo||(Bo={}));function sS(n){if(!n)if(Ss){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),eS(n)}const oS=/^[^#]+#/;function aS(n,e){return n.replace(oS,"#")+e}function lS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const kl=()=>({left:window.pageXOffset,top:window.pageYOffset});function cS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=lS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vd(n,e){return(history.state?history.state.position-e:-1)+n}const $u=new Map;function uS(n,e){$u.set(n,e)}function fS(n){const e=$u.get(n);return $u.delete(n),e}let hS=()=>location.protocol+"//"+location.host;function Zg(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),kd(l,"")}return kd(t,n)+i+r}function dS(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=Zg(n,location),v=t.value,x=e.value;let p=0;if(h){if(t.value=m,e.value=h,o&&o===v){o=null;return}p=x?h.position-x.position:0}else i(m);r.forEach(g=>{g(t.value,v,{delta:p,type:Yo.pop,direction:p?p>0?Bo.forward:Bo.back:Bo.unknown})})};function l(){o=t.value}function c(h){r.push(h);const m=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(St({},h.state,{scroll:kl()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Gd(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?kl():null}}function pS(n){const{history:e,location:t}=window,i={value:Zg(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:hS()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function o(l,c){const u=St({},e.state,Gd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=St({},r.value,e.state,{forward:l,scroll:kl()});s(u.current,u,!0);const d=St({},Gd(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function mS(n){n=sS(n);const e=pS(n),t=dS(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=St({location:"",base:n,go:i,createHref:aS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gS(n){return typeof n=="string"||n&&typeof n=="object"}function Jg(n){return typeof n=="string"||typeof n=="symbol"}const Gi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qg=Symbol("");var Wd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Wd||(Wd={}));function Fs(n,e){return St(new Error,{type:n,[Qg]:!0},e)}function _i(n,e){return n instanceof Error&&Qg in n&&(e==null||!!(n.type&e))}const Xd="[^/]+?",_S={sensitive:!1,strict:!1,start:!0,end:!0},vS=/[.+*?^${}()[\]/\\]/g;function xS(n,e){const t=St({},_S,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(t.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(vS,"\\$&"),m+=40;else if(h.type===1){const{value:v,repeatable:x,optional:p,regexp:g}=h;s.push({name:v,repeatable:x,optional:p});const b=g||Xd;if(b!==Xd){m+=10;try{new RegExp(`(${b})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${v}" (${b}): `+A.message)}}let E=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(E=p&&c.length<2?`(?:/${E})`:"/"+E),p&&(E+="?"),r+=E,m+=20,p&&(m+=-8),x&&(m+=-20),b===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",v=s[h-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:x,optional:p}=m,g=v in c?c[v]:"";if(Zn(g)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const b=Zn(g)?g.join("/"):g;if(!b)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function SS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yS(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=SS(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(jd(i))return 1;if(jd(r))return-1}return r.length-i.length}function jd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const MS={type:0,value:""},ES=/[a-zA-Z0-9_]/;function bS(n){if(!n)return[[]];if(n==="/")return[[MS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:ES.test(l)?h():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function TS(n,e,t){const i=xS(bS(n.path),t),r=St(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function AS(n,e){const t=[],i=new Map;e=Kd({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const m=!h,v=wS(u);v.aliasOf=h&&h.record;const x=Kd(e,u),p=[v];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of E)p.push(St({},v,{components:h?h.record.components:v.components,path:A,aliasOf:h?h.record:v}))}let g,b;for(const E of p){const{path:A}=E;if(d&&A[0]!=="/"){const C=d.record.path,B=C[C.length-1]==="/"?"":"/";E.path=d.record.path+(A&&B+A)}if(g=TS(E,d,x),h?h.alias.push(g):(b=b||g,b!==g&&b.alias.push(g),m&&u.name&&!Yd(g)&&o(u.name)),v.children){const C=v.children;for(let B=0;B<C.length;B++)s(C[B],g,h&&h.children[B])}h=h||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&l(g)}return b?()=>{o(b)}:Fo}function o(u){if(Jg(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let d=0;for(;d<t.length&&yS(u,t[d])>=0&&(u.record.path!==t[d].record.path||!e_(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!Yd(u)&&i.set(u.record.name,u)}function c(u,d){let h,m={},v,x;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Fs(1,{location:u});x=h.record.name,m=St(qd(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&qd(u.params,h.keys.map(b=>b.name))),v=h.stringify(m)}else if("path"in u)v=u.path,h=t.find(b=>b.re.test(v)),h&&(m=h.parse(v),x=h.record.name);else{if(h=d.name?i.get(d.name):t.find(b=>b.re.test(d.path)),!h)throw Fs(1,{location:u,currentLocation:d});x=h.record.name,m=St({},d.params,u.params),v=h.stringify(m)}const p=[];let g=h;for(;g;)p.unshift(g.record),g=g.parent;return{name:x,path:v,params:m,matched:p,meta:CS(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function qd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function wS(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:RS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function RS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Yd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function CS(n){return n.reduce((e,t)=>St(e,t.meta),{})}function Kd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function e_(n,e){return e.children.some(t=>t===n||e_(n,t))}const t_=/#/g,LS=/&/g,PS=/\//g,IS=/=/g,DS=/\?/g,n_=/\+/g,NS=/%5B/g,US=/%5D/g,i_=/%5E/g,OS=/%60/g,r_=/%7B/g,FS=/%7C/g,s_=/%7D/g,BS=/%20/g;function Uf(n){return encodeURI(""+n).replace(FS,"|").replace(NS,"[").replace(US,"]")}function HS(n){return Uf(n).replace(r_,"{").replace(s_,"}").replace(i_,"^")}function Zu(n){return Uf(n).replace(n_,"%2B").replace(BS,"+").replace(t_,"%23").replace(LS,"%26").replace(OS,"`").replace(r_,"{").replace(s_,"}").replace(i_,"^")}function kS(n){return Zu(n).replace(IS,"%3D")}function zS(n){return Uf(n).replace(t_,"%23").replace(DS,"%3F")}function VS(n){return n==null?"":zS(n).replace(PS,"%2F")}function Sl(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function GS(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(n_," "),o=s.indexOf("="),a=Sl(o<0?s:s.slice(0,o)),l=o<0?null:Sl(s.slice(o+1));if(a in e){let c=e[a];Zn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $d(n){let e="";for(let t in n){const i=n[t];if(t=kS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Zn(i)?i.map(s=>s&&Zu(s)):[i&&Zu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function WS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Zn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const XS=Symbol(""),Zd=Symbol(""),Of=Symbol(""),o_=Symbol(""),Ju=Symbol("");function Mo(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Zi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Fs(4,{from:t,to:e})):d instanceof Error?a(d):gS(d)?a(Fs(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function eu(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jS(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Zi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Jx(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Zi(h,t,i,s,o)()}))}}return r}function jS(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Jd(n){const e=Li(Of),t=Li(o_),i=Xn(()=>e.resolve(jn(n.to))),r=Xn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Os.bind(null,u));if(h>-1)return h;const m=Qd(l[c-2]);return c>1&&Qd(u)===m&&d[d.length-1].path!==m?d.findIndex(Os.bind(null,l[c-2])):h}),s=Xn(()=>r.value>-1&&$S(t.params,i.value.params)),o=Xn(()=>r.value>-1&&r.value===t.matched.length-1&&$g(t.params,i.value.params));function a(l={}){return KS(l)?e[jn(n.replace)?"replace":"push"](jn(n.to)).catch(Fo):Promise.resolve()}return{route:i,href:Xn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const qS=Lg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jd,setup(n,{slots:e}){const t=Dl(Jd(n)),{options:i}=Li(Of),r=Xn(()=>({[ep(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ep(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Kg("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),YS=qS;function KS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $S(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Zn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Qd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ep=(n,e,t)=>n??e??t,ZS=Lg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Li(Ju),r=Xn(()=>n.route||i.value),s=Li(Zd,0),o=Xn(()=>{let c=jn(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Xn(()=>r.value.matched[o.value]);cl(Zd,Xn(()=>o.value+1)),cl(XS,a),cl(Ju,r);const l=Is();return ll(()=>[l.value,a.value,n.name],([c,u,d],[h,m,v])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Os(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=a.value,h=d&&d.components[u];if(!h)return tp(t.default,{Component:h,route:c});const m=d.props[u],v=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=Kg(h,St({},v,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return tp(t.default,{Component:p,route:c})||p}}});function tp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const a_=ZS;function JS(n){const e=AS(n.routes,n),t=n.parseQuery||GS,i=n.stringifyQuery||$d,r=n.history,s=Mo(),o=Mo(),a=Mo(),l=gv(Gi);let c=Gi;Ss&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Jc.bind(null,j=>""+j),d=Jc.bind(null,VS),h=Jc.bind(null,Sl);function m(j,ne){let ge,Le;return Jg(j)?(ge=e.getRecordMatcher(j),Le=ne):Le=j,e.addRoute(Le,ge)}function v(j){const ne=e.getRecordMatcher(j);ne&&e.removeRoute(ne)}function x(){return e.getRoutes().map(j=>j.record)}function p(j){return!!e.getRecordMatcher(j)}function g(j,ne){if(ne=St({},ne||l.value),typeof j=="string"){const O=Qc(t,j,ne.path),W=e.resolve({path:O.path},ne),K=r.createHref(O.fullPath);return St(O,W,{params:h(W.params),hash:Sl(O.hash),redirectedFrom:void 0,href:K})}let ge;if("path"in j)ge=St({},j,{path:Qc(t,j.path,ne.path).path});else{const O=St({},j.params);for(const W in O)O[W]==null&&delete O[W];ge=St({},j,{params:d(O)}),ne.params=d(ne.params)}const Le=e.resolve(ge,ne),Ie=j.hash||"";Le.params=u(h(Le.params));const S=tS(i,St({},j,{hash:HS(Ie),path:Le.path})),I=r.createHref(S);return St({fullPath:S,hash:Ie,query:i===$d?WS(j.query):j.query||{}},Le,{redirectedFrom:void 0,href:I})}function b(j){return typeof j=="string"?Qc(t,j,l.value.path):St({},j)}function E(j,ne){if(c!==j)return Fs(8,{from:ne,to:j})}function A(j){return D(j)}function C(j){return A(St(b(j),{replace:!0}))}function B(j){const ne=j.matched[j.matched.length-1];if(ne&&ne.redirect){const{redirect:ge}=ne;let Le=typeof ge=="function"?ge(j):ge;return typeof Le=="string"&&(Le=Le.includes("?")||Le.includes("#")?Le=b(Le):{path:Le},Le.params={}),St({query:j.query,hash:j.hash,params:"path"in Le?{}:j.params},Le)}}function D(j,ne){const ge=c=g(j),Le=l.value,Ie=j.state,S=j.force,I=j.replace===!0,O=B(ge);if(O)return D(St(b(O),{state:typeof O=="object"?St({},Ie,O.state):Ie,force:S,replace:I}),ne||ge);const W=ge;W.redirectedFrom=ne;let K;return!S&&nS(i,Le,ge)&&(K=Fs(16,{to:W,from:Le}),z(Le,Le,!0,!1)),(K?Promise.resolve(K):N(W,Le)).catch(se=>_i(se)?_i(se,2)?se:xe(se):pe(se,W,Le)).then(se=>{if(se){if(_i(se,2))return D(St({replace:I},b(se.to),{state:typeof se.to=="object"?St({},Ie,se.to.state):Ie,force:S}),ne||W)}else se=Me(W,Le,!0,I,Ie);return de(W,Le,se),se})}function ie(j,ne){const ge=E(j,ne);return ge?Promise.reject(ge):Promise.resolve()}function R(j){const ne=Pe.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(j):j()}function N(j,ne){let ge;const[Le,Ie,S]=QS(j,ne);ge=eu(Le.reverse(),"beforeRouteLeave",j,ne);for(const O of Le)O.leaveGuards.forEach(W=>{ge.push(Zi(W,j,ne))});const I=ie.bind(null,j,ne);return ge.push(I),He(ge).then(()=>{ge=[];for(const O of s.list())ge.push(Zi(O,j,ne));return ge.push(I),He(ge)}).then(()=>{ge=eu(Ie,"beforeRouteUpdate",j,ne);for(const O of Ie)O.updateGuards.forEach(W=>{ge.push(Zi(W,j,ne))});return ge.push(I),He(ge)}).then(()=>{ge=[];for(const O of S)if(O.beforeEnter)if(Zn(O.beforeEnter))for(const W of O.beforeEnter)ge.push(Zi(W,j,ne));else ge.push(Zi(O.beforeEnter,j,ne));return ge.push(I),He(ge)}).then(()=>(j.matched.forEach(O=>O.enterCallbacks={}),ge=eu(S,"beforeRouteEnter",j,ne),ge.push(I),He(ge))).then(()=>{ge=[];for(const O of o.list())ge.push(Zi(O,j,ne));return ge.push(I),He(ge)}).catch(O=>_i(O,8)?O:Promise.reject(O))}function de(j,ne,ge){a.list().forEach(Le=>R(()=>Le(j,ne,ge)))}function Me(j,ne,ge,Le,Ie){const S=E(j,ne);if(S)return S;const I=ne===Gi,O=Ss?history.state:{};ge&&(Le||I?r.replace(j.fullPath,St({scroll:I&&O&&O.scroll},Ie)):r.push(j.fullPath,Ie)),l.value=j,z(j,ne,ge,I),xe()}let Ee;function H(){Ee||(Ee=r.listen((j,ne,ge)=>{if(!Ne.listening)return;const Le=g(j),Ie=B(Le);if(Ie){D(St(Ie,{replace:!0}),Le).catch(Fo);return}c=Le;const S=l.value;Ss&&uS(Vd(S.fullPath,ge.delta),kl()),N(Le,S).catch(I=>_i(I,12)?I:_i(I,2)?(D(I.to,Le).then(O=>{_i(O,20)&&!ge.delta&&ge.type===Yo.pop&&r.go(-1,!1)}).catch(Fo),Promise.reject()):(ge.delta&&r.go(-ge.delta,!1),pe(I,Le,S))).then(I=>{I=I||Me(Le,S,!1),I&&(ge.delta&&!_i(I,8)?r.go(-ge.delta,!1):ge.type===Yo.pop&&_i(I,20)&&r.go(-1,!1)),de(Le,S,I)}).catch(Fo)}))}let Z=Mo(),ce=Mo(),te;function pe(j,ne,ge){xe(j);const Le=ce.list();return Le.length?Le.forEach(Ie=>Ie(j,ne,ge)):console.error(j),Promise.reject(j)}function ye(){return te&&l.value!==Gi?Promise.resolve():new Promise((j,ne)=>{Z.add([j,ne])})}function xe(j){return te||(te=!j,H(),Z.list().forEach(([ne,ge])=>j?ge(j):ne()),Z.reset()),j}function z(j,ne,ge,Le){const{scrollBehavior:Ie}=n;if(!Ss||!Ie)return Promise.resolve();const S=!ge&&fS(Vd(j.fullPath,0))||(Le||!ge)&&history.state&&history.state.scroll||null;return Mg().then(()=>Ie(j,ne,S)).then(I=>I&&cS(I)).catch(I=>pe(I,j,ne))}const ee=j=>r.go(j);let Re;const Pe=new Set,Ne={currentRoute:l,listening:!0,addRoute:m,removeRoute:v,hasRoute:p,getRoutes:x,resolve:g,options:n,push:A,replace:C,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:ye,install(j){const ne=this;j.component("RouterLink",YS),j.component("RouterView",a_),j.config.globalProperties.$router=ne,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>jn(l)}),Ss&&!Re&&l.value===Gi&&(Re=!0,A(r.location).catch(Ie=>{}));const ge={};for(const Ie in Gi)Object.defineProperty(ge,Ie,{get:()=>l.value[Ie],enumerable:!0});j.provide(Of,ne),j.provide(o_,dg(ge)),j.provide(Ju,l);const Le=j.unmount;Pe.add(j),j.unmount=function(){Pe.delete(j),Pe.size<1&&(c=Gi,Ee&&Ee(),Ee=null,l.value=Gi,Re=!1,te=!1),Le()}}};function He(j){return j.reduce((ne,ge)=>ne.then(()=>R(ge)),Promise.resolve())}return Ne}function QS(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Os(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Os(c,l))||r.push(l))}return[t,i,r]}const Jo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ey={__name:"App",setup(n){return(e,t)=>(Pi(),Xg(jn(a_)))}},ty=Jo(ey,[["__scopeId","data-v-74a0fbe4"]]),ny="/assets/shape1-c9c43a6d.png";const iy={},ry={class:"minimalist-header"},sy=_x('<nav data-v-eb018bba><ul class="text-lg" data-v-eb018bba><li class="hidden md:block" data-v-eb018bba><a href="#home" data-v-eb018bba><b data-v-eb018bba>Pierre Barth</b></a></li><li data-v-eb018bba><a href="#skills" data-v-eb018bba>Compétences</a></li><li data-v-eb018bba><a href="#projects" data-v-eb018bba>Projets</a></li><li data-v-eb018bba><a href="#contact" data-v-eb018bba>Contact</a></li></ul></nav>',1),oy=[sy];function ay(n,e){return Pi(),Cr("div",ry,oy)}const ly=Jo(iy,[["render",ay],["__scopeId","data-v-eb018bba"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="157",es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cy=0,np=1,uy=2,l_=1,fy=2,Ti=3,Ni=0,Mn=1,oi=2,ir=0,Rs=1,ip=2,rp=3,sp=4,hy=5,ys=100,dy=101,py=102,op=103,ap=104,my=200,gy=201,_y=202,vy=203,c_=204,u_=205,xy=206,Sy=207,yy=208,My=209,Ey=210,by=0,Ty=1,Ay=2,Qu=3,wy=4,Ry=5,Cy=6,Ly=7,f_=0,Py=1,Iy=2,rr=0,Dy=1,Ny=2,Uy=3,Oy=4,Fy=5,h_=300,Bs=301,Hs=302,ef=303,tf=304,zl=306,ks=1e3,Un=1001,yl=1002,Qt=1003,nf=1004,hl=1005,yn=1006,d_=1007,Nr=1008,sr=1009,By=1010,Hy=1011,Bf=1012,p_=1013,er=1014,Ri=1015,Ko=1016,m_=1017,g_=1018,Pr=1020,ky=1021,On=1023,zy=1024,Vy=1025,Ir=1026,zs=1027,Gy=1028,__=1029,Wy=1030,v_=1031,x_=1033,tu=33776,nu=33777,iu=33778,ru=33779,lp=35840,cp=35841,up=35842,fp=35843,Xy=36196,hp=37492,dp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,Sp=37814,yp=37815,Mp=37816,Ep=37817,bp=37818,Tp=37819,Ap=37820,wp=37821,su=36492,Rp=36494,Cp=36495,jy=36283,Lp=36284,Pp=36285,Ip=36286,$o=2300,Vs=2301,ou=2302,Dp=2400,Np=2401,Up=2402,qy=2500,Yy=0,S_=1,rf=2,y_=3e3,Dr=3001,Ky=3200,$y=3201,M_=0,Zy=1,Fn="",kt="srgb",on="srgb-linear",Hf="display-p3",Vl="display-p3-linear",Ml="linear",Pt="srgb",El="rec709",bl="p3",au=7680,Jy=519,Qy=512,eM=513,tM=514,nM=515,iM=516,rM=517,sM=518,oM=519,sf=35044,Op="300 es",of=1035,Ci=2e3,Tl=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fp=1234567;const Ho=Math.PI/180,Gs=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function kf(n,e){return(n%e+e)%e}function aM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lM(n,e,t){return n!==e?(t-n)/(e-n):0}function ko(n,e,t){return(1-t)*n+t*e}function cM(n,e,t,i){return ko(n,e,1-Math.exp(-t*i))}function uM(n,e=1){return e-Math.abs(kf(n,e*2)-e)}function fM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pM(n,e){return n+Math.random()*(e-n)}function mM(n){return n*(.5-Math.random())}function gM(n){n!==void 0&&(Fp=n);let e=Fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _M(n){return n*Ho}function vM(n){return n*Gs}function af(n){return(n&n-1)===0&&n!==0}function E_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Al(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:Ho,RAD2DEG:Gs,generateUUID:$n,clamp:nn,euclideanModulo:kf,mapLinear:aM,inverseLerp:lM,lerp:ko,damp:cM,pingpong:uM,smoothstep:fM,smootherstep:hM,randInt:dM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:_M,radToDeg:vM,isPowerOfTwo:af,ceilPowerOfTwo:E_,floorPowerOfTwo:Al,setQuaternionFromProperEuler:xM,normalize:bt,denormalize:ai};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,i,r,s,o,a,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],g=r[6],b=r[1],E=r[4],A=r[7],C=r[2],B=r[5],D=r[8];return s[0]=o*x+a*b+l*C,s[3]=o*p+a*E+l*B,s[6]=o*g+a*A+l*D,s[1]=c*x+u*b+d*C,s[4]=c*p+u*E+d*B,s[7]=c*g+u*A+d*D,s[2]=h*x+m*b+v*C,s[5]=h*p+m*E+v*B,s[8]=h*g+m*A+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=t*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lu.makeScale(e,t)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new ft;function T_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SM(){const n=Zo("canvas");return n.style.display="block",n}const Bp={};function zo(n){n in Bp||(Bp[n]=!0,console.warn(n))}const Hp=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[on]:{transfer:Ml,primaries:El,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:Pt,primaries:El,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vl]:{transfer:Ml,primaries:bl,toReference:n=>n.applyMatrix3(kp),fromReference:n=>n.applyMatrix3(Hp)},[Hf]:{transfer:Pt,primaries:bl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(kp),fromReference:n=>n.applyMatrix3(Hp).convertLinearToSRGB()}},yM=new Set([on,Vl]),xt={enabled:!0,_workingColorSpace:on,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Da[e].toReference,r=Da[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Da[n].primaries},getTransfer:function(n){return n===Fn?Ml:Da[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class A_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Zo("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class w_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=$n(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uu(r[o].image)):s.push(uu(r[o]))}else s=uu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function uu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class sn extends Br{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=Un,r=Un,s=yn,o=Nr,a=On,l=sr,c=sn.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=$n(),this.name="",this.source=new w_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Dr?kt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Dr:y_}set encoding(e){zo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dr?kt:Fn}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=h_;sn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,A=(m+1)/2,C=(g+1)/2,B=(u+h)/4,D=(d+x)/4,ie=(v+p)/4;return E>A&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=B/i,s=D/i):A>C?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=B/r,s=ie/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=ie/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(d-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bM extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(zo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Dr?kt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new w_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends bM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class R_ extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TM extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==h||c!==m||u!==v){let p=1-a;const g=l*h+c*m+u*v+d*x,b=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){const C=Math.sqrt(E),B=Math.atan2(C,g*b);p=Math.sin(p*B)/C,a=Math.sin(a*B)/C}const A=a*b;if(l=l*p+h*A,c=c*p+m*A,u=u*p+v*A,d=d*p+x*A,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*m-c*h,e[t+1]=l*v+u*h+c*d-a*m,e[t+2]=c*v+u*m+a*h-l*d,e[t+3]=u*v-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"YXZ":this._x=h*u*d+c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"ZXY":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d-h*m*v;break;case"ZYX":this._x=h*u*d-c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d+h*m*v;break;case"YZX":this._x=h*u*d+c*m*v,this._y=c*m*d+h*u*v,this._z=c*u*v-h*m*d,this._w=c*u*d-h*m*v;break;case"XZY":this._x=h*u*d-c*m*v,this._y=c*m*d-h*u*v,this._z=c*u*v+h*m*d,this._w=c*u*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new X,zp=new ui;class Oi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox),is.applyMatrix4(e.matrixWorld),this.union(is);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)xi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xi)}else r.boundingBox===null&&r.computeBoundingBox(),is.copy(r.boundingBox),is.applyMatrix4(e.matrixWorld),this.union(is)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Na.subVectors(this.max,Eo),rs.subVectors(e.a,Eo),ss.subVectors(e.b,Eo),os.subVectors(e.c,Eo),Wi.subVectors(ss,rs),Xi.subVectors(os,ss),_r.subVectors(rs,os);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-_r.z,_r.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,_r.z,0,-_r.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-_r.y,_r.x,0];return!hu(t,rs,ss,os,Na)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,rs,ss,os,Na))?!1:(Ua.crossVectors(Wi,Xi),t=[Ua.x,Ua.y,Ua.z],hu(t,rs,ss,os,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new X,new X,new X,new X,new X,new X,new X,new X],xi=new X,is=new Oi,rs=new X,ss=new X,os=new X,Wi=new X,Xi=new X,_r=new X,Eo=new X,Na=new X,Ua=new X,vr=new X;function hu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vr.fromArray(n,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AM=new Oi,bo=new X,du=new X;class fi{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(du)),this.expandByPoint(bo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new X,pu=new X,Oa=new X,ji=new X,mu=new X,Fa=new X,gu=new X;class Qo{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pu.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(pu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oa),a=ji.dot(this.direction),l=-ji.dot(Oa),c=ji.lengthSq(),u=Math.abs(1-o*o);let d,h,m,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const x=1/u;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pu).addScaledVector(Oa,h),m}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){mu.subVectors(t,e),Fa.subVectors(i,e),gu.crossVectors(mu,Fa);let o=this.direction.dot(gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(ji,Fa));if(l<0)return null;const c=a*this.direction.dot(mu.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(gu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,u,d,h,m,v,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,m,v,x,p)}set(e,t,i,r,s,o,a,l,c,u,d,h,m,v,x,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=m,g[7]=v,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,v=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,v=c*u,x=c*d;t[0]=h+x*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,v=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,v=a*u,x=a*d;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=v*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+v,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wM,e,RM)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),qi.crossVectors(i,Rn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),qi.crossVectors(i,Rn)),qi.normalize(),Ba.crossVectors(Rn,qi),r[0]=qi.x,r[4]=Ba.x,r[8]=Rn.x,r[1]=qi.y,r[5]=Ba.y,r[9]=Rn.y,r[2]=qi.z,r[6]=Ba.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],g=i[14],b=i[3],E=i[7],A=i[11],C=i[15],B=r[0],D=r[4],ie=r[8],R=r[12],N=r[1],de=r[5],Me=r[9],Ee=r[13],H=r[2],Z=r[6],ce=r[10],te=r[14],pe=r[3],ye=r[7],xe=r[11],z=r[15];return s[0]=o*B+a*N+l*H+c*pe,s[4]=o*D+a*de+l*Z+c*ye,s[8]=o*ie+a*Me+l*ce+c*xe,s[12]=o*R+a*Ee+l*te+c*z,s[1]=u*B+d*N+h*H+m*pe,s[5]=u*D+d*de+h*Z+m*ye,s[9]=u*ie+d*Me+h*ce+m*xe,s[13]=u*R+d*Ee+h*te+m*z,s[2]=v*B+x*N+p*H+g*pe,s[6]=v*D+x*de+p*Z+g*ye,s[10]=v*ie+x*Me+p*ce+g*xe,s[14]=v*R+x*Ee+p*te+g*z,s[3]=b*B+E*N+A*H+C*pe,s[7]=b*D+E*de+A*Z+C*ye,s[11]=b*ie+E*Me+A*ce+C*xe,s[15]=b*R+E*Ee+A*te+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],g=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],g=e[15],b=d*p*c-x*h*c+x*l*m-a*p*m-d*l*g+a*h*g,E=v*h*c-u*p*c-v*l*m+o*p*m+u*l*g-o*h*g,A=u*x*c-v*d*c+v*a*m-o*x*m-u*a*g+o*d*g,C=v*d*l-u*x*l-v*a*h+o*x*h+u*a*p-o*d*p,B=t*b+i*E+r*A+s*C;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/B;return e[0]=b*D,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*g-i*h*g)*D,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*g+i*l*g)*D,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*D,e[4]=E*D,e[5]=(u*p*s-v*h*s+v*r*m-t*p*m-u*r*g+t*h*g)*D,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*g-t*l*g)*D,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*D,e[8]=A*D,e[9]=(v*d*s-u*x*s-v*i*m+t*x*m+u*i*g-t*d*g)*D,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*g+t*a*g)*D,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*D,e[12]=C*D,e[13]=(u*x*r-v*d*r+v*i*h-t*x*h-u*i*p+t*d*p)*D,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*p-t*a*p)*D,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,v=s*d,x=o*u,p=o*d,g=a*d,b=l*c,E=l*u,A=l*d,C=i.x,B=i.y,D=i.z;return r[0]=(1-(x+g))*C,r[1]=(m+A)*C,r[2]=(v-E)*C,r[3]=0,r[4]=(m-A)*B,r[5]=(1-(h+g))*B,r[6]=(p+b)*B,r[7]=0,r[8]=(v+E)*D,r[9]=(p-b)*D,r[10]=(1-(h+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(a===Ci)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Tl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,m=(i+r)*u;let v,x;if(a===Ci)v=(o+s)*d,x=-2*d;else if(a===Tl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const as=new X,kn=new ht,wM=new X(0,0,0),RM=new X(1,1,1),qi=new X,Ba=new X,Rn=new X,Vp=new ht,Gp=new ui;class Gl{constructor(e=0,t=0,i=0,r=Gl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gl.DEFAULT_ORDER="XYZ";class C_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CM=0;const Wp=new X,ls=new ui,yi=new ht,Ha=new X,To=new X,LM=new X,PM=new ui,Xp=new X(1,0,0),jp=new X(0,1,0),qp=new X(0,0,1),IM={type:"added"},DM={type:"removed"};class Bt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new X,t=new Gl,i=new ui,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ft}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new C_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ha.copy(e):Ha.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(To,Ha,this.up):yi.lookAt(Ha,To,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(yi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,PM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new X(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new X,Mi=new X,_u=new X,Ei=new X,cs=new X,us=new X,Yp=new X,vu=new X,xu=new X,Su=new X;let ka=!1;class Gn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),Mi.subVectors(i,t),_u.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(Mi),l=zn.dot(_u),c=Mi.dot(Mi),u=Mi.dot(_u),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,i,r,s,o,a,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ei),l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),Mi.subVectors(e,t),zn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),vu.subVectors(e,i);const l=cs.dot(vu),c=us.dot(vu);if(l<=0&&c<=0)return t.copy(i);xu.subVectors(e,r);const u=cs.dot(xu),d=us.dot(xu);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(cs,o);Su.subVectors(e,s);const m=cs.dot(Su),v=us.dot(Su);if(v>=0&&m<=v)return t.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(us,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return Yp.subVectors(s,r),a=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(Yp,a);const g=1/(p+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let NM=0;class li extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Rs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c_,this.blendDst=u_,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=au,this.stencilZFail=au,this.stencilZPass=au,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},za={h:0,s:0,l:0};function yu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=kf(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=L_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=cu(e.r),this.g=cu(e.g),this.b=cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return xt.fromWorkingColorSpace(un.copy(this),e),Math.round(nn(un.r*255,0,255))*65536+Math.round(nn(un.g*255,0,255))*256+Math.round(nn(un.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=kt){xt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(za);const i=ko(Yi.h,za.h,t),r=ko(Yi.s,za.s,t),s=ko(Yi.l,za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ct;ct.NAMES=L_;class Ar extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new X,Va=new rt;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sf,this.updateRange={offset:0,count:-1},this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class P_ extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class I_ extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ii extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let UM=0;const In=new ht,Mu=new Bt,fs=new X,Cn=new Oi,Ao=new Oi,Jt=new X;class hi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?I_:P_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Cn.min,Ao.min),Cn.expandByPoint(Jt),Jt.addVectors(Cn.max,Ao.max),Cn.expandByPoint(Jt)):(Cn.expandByPoint(Ao.min),Cn.expandByPoint(Ao.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Jt.add(fs)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new X,u[N]=new X;const d=new X,h=new X,m=new X,v=new rt,x=new rt,p=new rt,g=new X,b=new X;function E(N,de,Me){d.fromArray(r,N*3),h.fromArray(r,de*3),m.fromArray(r,Me*3),v.fromArray(o,N*2),x.fromArray(o,de*2),p.fromArray(o,Me*2),h.sub(d),m.sub(d),x.sub(v),p.sub(v);const Ee=1/(x.x*p.y-p.x*x.y);isFinite(Ee)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Ee),b.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(Ee),c[N].add(g),c[de].add(g),c[Me].add(g),u[N].add(b),u[de].add(b),u[Me].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let N=0,de=A.length;N<de;++N){const Me=A[N],Ee=Me.start,H=Me.count;for(let Z=Ee,ce=Ee+H;Z<ce;Z+=3)E(i[Z+0],i[Z+1],i[Z+2])}const C=new X,B=new X,D=new X,ie=new X;function R(N){D.fromArray(s,N*3),ie.copy(D);const de=c[N];C.copy(de),C.sub(D.multiplyScalar(D.dot(de))).normalize(),B.crossVectors(ie,de);const Ee=B.dot(u[N])<0?-1:1;l[N*4]=C.x,l[N*4+1]=C.y,l[N*4+2]=C.z,l[N*4+3]=Ee}for(let N=0,de=A.length;N<de;++N){const Me=A[N],Ee=Me.start,H=Me.count;for(let Z=Ee,ce=Ee+H;Z<ce;Z+=3)R(i[Z+0]),R(i[Z+1]),R(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let g=0;g<u;g++)h[v++]=c[m++]}return new vn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new ht,xr=new Qo,Ga=new fi,$p=new X,hs=new X,ds=new X,ps=new X,Eu=new X,Wa=new X,Xa=new rt,ja=new rt,qa=new rt,Zp=new X,Jp=new X,Qp=new X,Ya=new X,Ka=new X;class Bn extends Bt{constructor(e=new hi,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Eu.fromBufferAttribute(d,e),o?Wa.addScaledVector(Eu,u):Wa.addScaledVector(Eu.sub(t),u))}t.add(Wa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ga.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ga,$p)===null||xr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Kp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],g=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,C=E;A<C;A+=3){const B=a.getX(A),D=a.getX(A+1),ie=a.getX(A+2);r=$a(this,g,e,i,c,u,d,B,D,ie),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,g=x;p<g;p+=3){const b=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);r=$a(this,o,e,i,c,u,d,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],g=o[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,C=E;A<C;A+=3){const B=A,D=A+1,ie=A+2;r=$a(this,g,e,i,c,u,d,B,D,ie),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,g=x;p<g;p+=3){const b=p,E=p+1,A=p+2;r=$a(this,o,e,i,c,u,d,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function OM(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:n}}function $a(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,hs),n.getVertexPosition(l,ds),n.getVertexPosition(c,ps);const u=OM(n,e,t,i,hs,ds,ps,Ya);if(u){r&&(Xa.fromBufferAttribute(r,a),ja.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),u.uv=Gn.getInterpolation(Ya,hs,ds,ps,Xa,ja,qa,new rt)),s&&(Xa.fromBufferAttribute(s,a),ja.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),u.uv1=Gn.getInterpolation(Ya,hs,ds,ps,Xa,ja,qa,new rt),u.uv2=u.uv1),o&&(Zp.fromBufferAttribute(o,a),Jp.fromBufferAttribute(o,l),Qp.fromBufferAttribute(o,c),u.normal=Gn.getInterpolation(Ya,hs,ds,ps,Zp,Jp,Qp,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};Gn.getNormal(hs,ds,ps,d.normal),u.face=d}return u}class ea extends hi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(d,2));function v(x,p,g,b,E,A,C,B,D,ie,R){const N=A/D,de=C/ie,Me=A/2,Ee=C/2,H=B/2,Z=D+1,ce=ie+1;let te=0,pe=0;const ye=new X;for(let xe=0;xe<ce;xe++){const z=xe*de-Ee;for(let ee=0;ee<Z;ee++){const Re=ee*N-Me;ye[x]=Re*b,ye[p]=z*E,ye[g]=H,c.push(ye.x,ye.y,ye.z),ye[x]=0,ye[p]=0,ye[g]=B>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(ee/D),d.push(1-xe/ie),te+=1}}for(let xe=0;xe<ie;xe++)for(let z=0;z<D;z++){const ee=h+z+Z*xe,Re=h+z+Z*(xe+1),Pe=h+(z+1)+Z*(xe+1),Ne=h+(z+1)+Z*xe;l.push(ee,Re,Ne),l.push(Re,Pe,Ne),pe+=6}a.addGroup(m,pe,R),m+=pe,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const r in i)e[r]=i[r]}return e}function FM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function D_(n){return n.getRenderTarget()===null?n.outputColorSpace:xt.workingColorSpace}const BM={clone:Ws,merge:mn};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class N_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends N_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class zM extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(ms,gs,e,t);r.layers=this.layers,this.add(r);const s=new gn(ms,gs,e,t);s.layers=this.layers,this.add(s);const o=new gn(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new gn(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new gn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new gn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class U_ extends sn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VM extends Ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(zo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dr?kt:Fn),this.texture=new U_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ea(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:ir});s.uniforms.tEquirect.value=t;const o=new Bn(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=yn),new zM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const bu=new X,GM=new X,WM=new ft;class Ji{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bu.subVectors(i,t).cross(GM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||WM.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new fi,Za=new X;class zf{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],g=r[12],b=r[13],E=r[14],A=r[15];if(i[0].setComponents(l-s,h-c,p-m,A-g).normalize(),i[1].setComponents(l+s,h+c,p+m,A+g).normalize(),i[2].setComponents(l+o,h+u,p+v,A+b).normalize(),i[3].setComponents(l-o,h-u,p-v,A-b).normalize(),i[4].setComponents(l-a,h-d,p-x,A-E).normalize(),t===Ci)i[5].setComponents(l+a,h+d,p+x,A+E).normalize();else if(t===Tl)i[5].setComponents(a,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function XM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Vf extends hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,m=[],v=[],x=[],p=[];for(let g=0;g<u;g++){const b=g*h-o;for(let E=0;E<c;E++){const A=E*d-s;v.push(A,-b,0),x.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const E=b+c*g,A=b+c*(g+1),C=b+1+c*(g+1),B=b+1+c*g;m.push(E,A,B),m.push(A,C,B)}this.setIndex(m),this.setAttribute("position",new Ii(v,3)),this.setAttribute("normal",new Ii(x,3)),this.setAttribute("uv",new Ii(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.width,e.height,e.widthSegments,e.heightSegments)}}var jM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,GE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:jM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:KM,alphatest_fragment:$M,alphatest_pars_fragment:ZM,aomap_fragment:JM,aomap_pars_fragment:QM,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:rE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:FE,envmap_vertex:AE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:LE,gradientmap_pars_fragment:PE,lightmap_fragment:IE,lightmap_pars_fragment:DE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:UE,lights_pars_begin:OE,lights_toon_fragment:BE,lights_toon_pars_fragment:HE,lights_phong_fragment:kE,lights_phong_pars_fragment:zE,lights_physical_fragment:VE,lights_physical_pars_fragment:GE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:jE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:$E,map_fragment:ZE,map_pars_fragment:JE,map_particle_fragment:QE,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:S1,dithering_fragment:y1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:w1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:L1,skinning_vertex:P1,skinnormal_vertex:I1,specularmap_fragment:D1,specularmap_pars_fragment:N1,tonemapping_fragment:U1,tonemapping_pars_fragment:O1,transmission_fragment:F1,transmission_pars_fragment:B1,uv_pars_fragment:H1,uv_pars_vertex:k1,uv_vertex:z1,worldpos_vertex:V1,background_vert:G1,background_frag:W1,backgroundCube_vert:X1,backgroundCube_frag:j1,cube_vert:q1,cube_frag:Y1,depth_vert:K1,depth_frag:$1,distanceRGBA_vert:Z1,distanceRGBA_frag:J1,equirect_vert:Q1,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:rb,meshlambert_vert:sb,meshlambert_frag:ob,meshmatcap_vert:ab,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:fb,meshphong_frag:hb,meshphysical_vert:db,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:_b,points_frag:vb,shadow_vert:xb,shadow_frag:Sb,sprite_vert:yb,sprite_frag:Mb},Fe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ri={basic:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:mn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:mn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:mn([Fe.points,Fe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:mn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:mn([Fe.common,Fe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:mn([Fe.sprite,Fe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:mn([Fe.common,Fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:mn([Fe.lights,Fe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ri.physical={uniforms:mn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ja={r:0,b:0,g:0};function Eb(n,e,t,i,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function v(p,g){let b=!1,E=g.isScene===!0?g.background:null;E&&E.isTexture&&(E=(g.backgroundBlurriness>0?t:e).get(E)),E===null?x(a,l):E&&E.isColor&&(x(E,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===zl)?(u===void 0&&(u=new Bn(new ea(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Ws(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=xt.getTransfer(E.colorSpace)!==Pt,(d!==E||h!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Bn(new Vf(2,2),new Or({name:"BackgroundMaterial",uniforms:Ws(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=xt.getTransfer(E.colorSpace)!==Pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,g){p.getRGB(Ja,D_(n)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:v}}function bb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(H,Z,ce,te,pe){let ye=!1;if(o){const xe=x(te,ce,Z);c!==xe&&(c=xe,m(c.object)),ye=g(H,te,ce,pe),ye&&b(H,te,ce,pe)}else{const xe=Z.wireframe===!0;(c.geometry!==te.id||c.program!==ce.id||c.wireframe!==xe)&&(c.geometry=te.id,c.program=ce.id,c.wireframe=xe,ye=!0)}pe!==null&&t.update(pe,n.ELEMENT_ARRAY_BUFFER),(ye||u)&&(u=!1,ie(H,Z,ce,te),pe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function v(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function x(H,Z,ce){const te=ce.wireframe===!0;let pe=a[H.id];pe===void 0&&(pe={},a[H.id]=pe);let ye=pe[Z.id];ye===void 0&&(ye={},pe[Z.id]=ye);let xe=ye[te];return xe===void 0&&(xe=p(h()),ye[te]=xe),xe}function p(H){const Z=[],ce=[],te=[];for(let pe=0;pe<r;pe++)Z[pe]=0,ce[pe]=0,te[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:te,object:H,attributes:{},index:null}}function g(H,Z,ce,te){const pe=c.attributes,ye=Z.attributes;let xe=0;const z=ce.getAttributes();for(const ee in z)if(z[ee].location>=0){const Pe=pe[ee];let Ne=ye[ee];if(Ne===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(Ne=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(Ne=H.instanceColor)),Pe===void 0||Pe.attribute!==Ne||Ne&&Pe.data!==Ne.data)return!0;xe++}return c.attributesNum!==xe||c.index!==te}function b(H,Z,ce,te){const pe={},ye=Z.attributes;let xe=0;const z=ce.getAttributes();for(const ee in z)if(z[ee].location>=0){let Pe=ye[ee];Pe===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(Pe=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(Pe=H.instanceColor));const Ne={};Ne.attribute=Pe,Pe&&Pe.data&&(Ne.data=Pe.data),pe[ee]=Ne,xe++}c.attributes=pe,c.attributesNum=xe,c.index=te}function E(){const H=c.newAttributes;for(let Z=0,ce=H.length;Z<ce;Z++)H[Z]=0}function A(H){C(H,0)}function C(H,Z){const ce=c.newAttributes,te=c.enabledAttributes,pe=c.attributeDivisors;ce[H]=1,te[H]===0&&(n.enableVertexAttribArray(H),te[H]=1),pe[H]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Z),pe[H]=Z)}function B(){const H=c.newAttributes,Z=c.enabledAttributes;for(let ce=0,te=Z.length;ce<te;ce++)Z[ce]!==H[ce]&&(n.disableVertexAttribArray(ce),Z[ce]=0)}function D(H,Z,ce,te,pe,ye,xe){xe===!0?n.vertexAttribIPointer(H,Z,ce,pe,ye):n.vertexAttribPointer(H,Z,ce,te,pe,ye)}function ie(H,Z,ce,te){if(i.isWebGL2===!1&&(H.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const pe=te.attributes,ye=ce.getAttributes(),xe=Z.defaultAttributeValues;for(const z in ye){const ee=ye[z];if(ee.location>=0){let Re=pe[z];if(Re===void 0&&(z==="instanceMatrix"&&H.instanceMatrix&&(Re=H.instanceMatrix),z==="instanceColor"&&H.instanceColor&&(Re=H.instanceColor)),Re!==void 0){const Pe=Re.normalized,Ne=Re.itemSize,He=t.get(Re);if(He===void 0)continue;const j=He.buffer,ne=He.type,ge=He.bytesPerElement,Le=i.isWebGL2===!0&&(ne===n.INT||ne===n.UNSIGNED_INT||Re.gpuType===p_);if(Re.isInterleavedBufferAttribute){const Ie=Re.data,S=Ie.stride,I=Re.offset;if(Ie.isInstancedInterleavedBuffer){for(let O=0;O<ee.locationSize;O++)C(ee.location+O,Ie.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let O=0;O<ee.locationSize;O++)A(ee.location+O);n.bindBuffer(n.ARRAY_BUFFER,j);for(let O=0;O<ee.locationSize;O++)D(ee.location+O,Ne/ee.locationSize,ne,Pe,S*ge,(I+Ne/ee.locationSize*O)*ge,Le)}else{if(Re.isInstancedBufferAttribute){for(let Ie=0;Ie<ee.locationSize;Ie++)C(ee.location+Ie,Re.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ie=0;Ie<ee.locationSize;Ie++)A(ee.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Ie=0;Ie<ee.locationSize;Ie++)D(ee.location+Ie,Ne/ee.locationSize,ne,Pe,Ne*ge,Ne/ee.locationSize*Ie*ge,Le)}}else if(xe!==void 0){const Pe=xe[z];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(ee.location,Pe);break;case 3:n.vertexAttrib3fv(ee.location,Pe);break;case 4:n.vertexAttrib4fv(ee.location,Pe);break;default:n.vertexAttrib1fv(ee.location,Pe)}}}}B()}function R(){Me();for(const H in a){const Z=a[H];for(const ce in Z){const te=Z[ce];for(const pe in te)v(te[pe].object),delete te[pe];delete Z[ce]}delete a[H]}}function N(H){if(a[H.id]===void 0)return;const Z=a[H.id];for(const ce in Z){const te=Z[ce];for(const pe in te)v(te[pe].object),delete te[pe];delete Z[ce]}delete a[H.id]}function de(H){for(const Z in a){const ce=a[Z];if(ce[H.id]===void 0)continue;const te=ce[H.id];for(const pe in te)v(te[pe].object),delete te[pe];delete ce[H.id]}}function Me(){Ee(),u=!0,c!==l&&(c=l,m(c.object))}function Ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Me,resetDefaultState:Ee,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:de,initAttributes:E,enableAttribute:A,disableUnusedAttributes:B}}function Tb(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Ab(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,A=o||e.has("OES_texture_float"),C=E&&A,B=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:C,maxSamples:B}}function wb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,E=b*4;let A=g.clippingState||null;l.value=A,A=u(v,h,E,m);for(let C=0;C!==E;++C)A[C]=t[C];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const g=m+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,A=m;E!==x;++E,A+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Rb(n){let e=new WeakMap;function t(o,a){return a===ef?o.mapping=Bs:a===tf&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ef||a===tf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new VM(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gf extends N_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,em=[.125,.215,.35,.446,.526,.582],Tr=20,Tu=new Gf,tm=new ct;let Au=null;const Mr=(1+Math.sqrt(5))/2,_s=1/Mr,nm=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Mr,_s),new X(0,Mr,-_s),new X(_s,0,Mr),new X(-_s,0,Mr),new X(Mr,_s,0),new X(-Mr,_s,0)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Au=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ko,format:On,colorSpace:on,depthBuffer:!1},r=rm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Lb(s,e,t)}return r}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,r){const a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(tm),u.toneMapping=rr,u.autoClear=!1;const m=new Ar({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new Bn(new ea,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(tm),x=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const E=this._cubeSize;Qa(r,b*E,g>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nm[(r-1)%nm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const g=[];let b=0;for(let D=0;D<Tr;++D){const ie=D/x,R=Math.exp(-ie*ie/2);g.push(R),D===0?b+=R:D<p&&(b+=2*R)}for(let D=0;D<g.length;D++)g[D]=g[D]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-i;const A=this._sizeLods[r],C=3*A*(r>E-Es?r-E+Es:0),B=4*(this._cubeSize-A);Qa(t,C,B,3*A,2*A),l.setRenderTarget(t),l.render(d,Tu)}}function Cb(n){const e=[],t=[],i=[];let r=n;const s=n-Es+1+em.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Es?l=em[o-n+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,x=3,p=2,g=1,b=new Float32Array(x*v*m),E=new Float32Array(p*v*m),A=new Float32Array(g*v*m);for(let B=0;B<m;B++){const D=B%3*2/3-1,ie=B>2?0:-1,R=[D,ie,0,D+2/3,ie,0,D+2/3,ie+1,0,D,ie,0,D+2/3,ie+1,0,D,ie+1,0];b.set(R,x*v*B),E.set(h,p*v*B);const N=[B,B,B,B,B,B];A.set(N,g*v*B)}const C=new hi;C.setAttribute("position",new vn(b,x)),C.setAttribute("uv",new vn(E,p)),C.setAttribute("faceIndex",new vn(A,g)),e.push(C),r>Es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rm(n,e,t){const i=new Ur(n,e,t);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lb(n,e,t){const i=new Float32Array(Tr),r=new X(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function sm(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function om(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ef||l===tf,u=l===Bs||l===Hs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new im(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new im(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ib(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Db(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,g=x.length;p<g;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let E=0,A=b.length;E<A;E+=3){const C=b[E+0],B=b[E+1],D=b[E+2];h.push(C,B,B,D,D,C)}}else if(v!==void 0){const b=v.array;x=v.version;for(let E=0,A=b.length/3-1;E<A;E+=3){const C=E+0,B=E+1,D=E+2;h.push(C,B,B,D,D,C)}}else return;const p=new(T_(h)?I_:P_)(h,1);p.version=x;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Nb(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function d(h,m,v){if(v===0)return;let x,p;if(r)x=n,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](s,m,a,h*l,v),t.update(m,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Ub(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ob(n,e){return n[0]-e[0]}function Fb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bb(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new At,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==x){let Z=function(){Ee.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};var m=Z;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,B=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],ie=u.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),C===!0&&(R=3);let N=u.attributes.position.count*R,de=1;N>e.maxTextureSize&&(de=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const Me=new Float32Array(N*de*4*x),Ee=new R_(Me,N,de,x);Ee.type=Ri,Ee.needsUpdate=!0;const H=R*4;for(let ce=0;ce<x;ce++){const te=B[ce],pe=D[ce],ye=ie[ce],xe=N*de*4*ce;for(let z=0;z<te.count;z++){const ee=z*H;E===!0&&(o.fromBufferAttribute(te,z),Me[xe+ee+0]=o.x,Me[xe+ee+1]=o.y,Me[xe+ee+2]=o.z,Me[xe+ee+3]=0),A===!0&&(o.fromBufferAttribute(pe,z),Me[xe+ee+4]=o.x,Me[xe+ee+5]=o.y,Me[xe+ee+6]=o.z,Me[xe+ee+7]=0),C===!0&&(o.fromBufferAttribute(ye,z),Me[xe+ee+8]=o.x,Me[xe+ee+9]=o.y,Me[xe+ee+10]=o.z,Me[xe+ee+11]=ye.itemSize===4?o.w:1)}}p={count:x,texture:Ee,size:new rt(N,de)},s.set(u,p),u.addEventListener("dispose",Z)}let g=0;for(let E=0;E<h.length;E++)g+=h[E];const b=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==v){x=[];for(let A=0;A<v;A++)x[A]=[A,0];i[u.id]=x}for(let A=0;A<v;A++){const C=x[A];C[0]=A,C[1]=h[A]}x.sort(Fb);for(let A=0;A<8;A++)A<v&&x[A][1]?(a[A][0]=x[A][0],a[A][1]=x[A][1]):(a[A][0]=Number.MAX_SAFE_INTEGER,a[A][1]=0);a.sort(Ob);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let b=0;for(let A=0;A<8;A++){const C=a[A],B=C[0],D=C[1];B!==Number.MAX_SAFE_INTEGER&&D?(p&&u.getAttribute("morphTarget"+A)!==p[B]&&u.setAttribute("morphTarget"+A,p[B]),g&&u.getAttribute("morphNormal"+A)!==g[B]&&u.setAttribute("morphNormal"+A,g[B]),r[A]=D,b+=D):(p&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),g&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const E=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Hb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const F_=new sn,B_=new R_,H_=new TM,k_=new U_,am=[],lm=[],cm=new Float32Array(16),um=new Float32Array(9),fm=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wl(n,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;fm.set(i),n.uniformMatrix2fv(this.addr,!1,fm),qt(t,i)}}function Xb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;um.set(i),n.uniformMatrix3fv(this.addr,!1,um),qt(t,i)}}function jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,i))return;cm.set(i),n.uniformMatrix4fv(this.addr,!1,cm),qt(t,i)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Zb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function tT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||F_,r)}function nT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||H_,r)}function iT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||k_,r)}function rT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||B_,r)}function sT(n){switch(n){case 5126:return kb;case 35664:return zb;case 35665:return Vb;case 35666:return Gb;case 35674:return Wb;case 35675:return Xb;case 35676:return jb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Kb;case 35669:case 35673:return $b;case 5125:return Zb;case 36294:return Jb;case 36295:return Qb;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(n,e){n.uniform1fv(this.addr,e)}function aT(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function lT(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function cT(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function uT(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fT(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hT(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dT(n,e){n.uniform1iv(this.addr,e)}function pT(n,e){n.uniform2iv(this.addr,e)}function mT(n,e){n.uniform3iv(this.addr,e)}function gT(n,e){n.uniform4iv(this.addr,e)}function _T(n,e){n.uniform1uiv(this.addr,e)}function vT(n,e){n.uniform2uiv(this.addr,e)}function xT(n,e){n.uniform3uiv(this.addr,e)}function ST(n,e){n.uniform4uiv(this.addr,e)}function yT(n,e,t){const i=this.cache,r=e.length,s=Wl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||F_,s[o])}function MT(n,e,t){const i=this.cache,r=e.length,s=Wl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||H_,s[o])}function ET(n,e,t){const i=this.cache,r=e.length,s=Wl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||k_,s[o])}function bT(n,e,t){const i=this.cache,r=e.length,s=Wl(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||B_,s[o])}function TT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return hT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}class AT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=sT(t.type)}}class wT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=TT(t.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function hm(n,e){n.seq.push(e),n.map[e.id]=e}function CT(n,e,t){const i=n.name,r=i.length;for(wu.lastIndex=0;;){const s=wu.exec(i),o=wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hm(t,c===void 0?new AT(a,n,e):new wT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new RT(a),hm(t,d)),t=d}}}class dl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);CT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function dm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let LT=0;function PT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function IT(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===bl&&t===El?i="LinearDisplayP3ToLinearSRGB":e===El&&t===bl&&(i="LinearSRGBToLinearDisplayP3"),n){case on:case Vl:return[i,"LinearTransferOETF"];case kt:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PT(n.getShaderSource(e),o)}else return r}function DT(n,e){const t=IT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function NT(n,e){let t;switch(e){case Dy:t="Linear";break;case Ny:t="Reinhard";break;case Uy:t="OptimizedCineon";break;case Oy:t="ACESFilmic";break;case Fy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function UT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Do).join(`
`)}function OT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Do(n){return n!==""}function mm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(n){return n.replace(BT,kT)}const HT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kT(n,e){let t=at[e];if(t===void 0){const i=HT.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(zT,VT)}function VT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case f_:e="ENVMAP_BLENDING_MULTIPLY";break;case Py:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function qT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function YT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=GT(t),c=WT(t),u=XT(t),d=jT(t),h=qT(t),m=t.isWebGL2?"":UT(t),v=OT(s),x=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Do).join(`
`),p.length>0&&(p+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(p=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[m,vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?at.tonemapping_pars_fragment:"",t.toneMapping!==rr?NT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,DT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),o=lf(o),o=mm(o,t),o=gm(o,t),a=lf(a),a=mm(a,t),a=gm(a,t),o=_m(o),a=_m(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=b+p+o,A=b+g+a,C=dm(r,r.VERTEX_SHADER,E),B=dm(r,r.FRAGMENT_SHADER,A);if(r.attachShader(x,C),r.attachShader(x,B),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const R=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(C).trim(),de=r.getShaderInfoLog(B).trim();let Me=!0,Ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,B);else{const H=pm(r,C,"vertex"),Z=pm(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+H+`
`+Z)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(N===""||de==="")&&(Ee=!1);Ee&&(this.diagnostics={runnable:Me,programLog:R,vertexShader:{log:N,prefix:p},fragmentShader:{log:de,prefix:g}})}r.deleteShader(C),r.deleteShader(B);let D;this.getUniforms=function(){return D===void 0&&(D=new dl(r,x)),D};let ie;return this.getAttributes=function(){return ie===void 0&&(ie=FT(r,x)),ie},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=B,this}let KT=0;class $T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZT(e),t.set(e,i)),i}}class ZT{constructor(e){this.id=KT++,this.code=e,this.usedTimes=0}}function JT(n,e,t,i,r,s,o){const a=new C_,l=new $T,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(R){return R===0?"uv":`uv${R}`}function p(R,N,de,Me,Ee){const H=Me.fog,Z=Ee.geometry,ce=R.isMeshStandardMaterial?Me.environment:null,te=(R.isMeshStandardMaterial?t:e).get(R.envMap||ce),pe=te&&te.mapping===zl?te.image.height:null,ye=v[R.type];R.precision!==null&&(m=r.getMaxPrecision(R.precision),m!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",m,"instead."));const xe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,z=xe!==void 0?xe.length:0;let ee=0;Z.morphAttributes.position!==void 0&&(ee=1),Z.morphAttributes.normal!==void 0&&(ee=2),Z.morphAttributes.color!==void 0&&(ee=3);let Re,Pe,Ne,He;if(ye){const Mt=ri[ye];Re=Mt.vertexShader,Pe=Mt.fragmentShader}else Re=R.vertexShader,Pe=R.fragmentShader,l.update(R),Ne=l.getVertexShaderID(R),He=l.getFragmentShaderID(R);const j=n.getRenderTarget(),ne=Ee.isInstancedMesh===!0,ge=!!R.map,Le=!!R.matcap,Ie=!!te,S=!!R.aoMap,I=!!R.lightMap,O=!!R.bumpMap,W=!!R.normalMap,K=!!R.displacementMap,se=!!R.emissiveMap,ve=!!R.metalnessMap,oe=!!R.roughnessMap,Se=R.anisotropy>0,_e=R.clearcoat>0,Be=R.iridescence>0,w=R.sheen>0,y=R.transmission>0,G=Se&&!!R.anisotropyMap,ue=_e&&!!R.clearcoatMap,fe=_e&&!!R.clearcoatNormalMap,me=_e&&!!R.clearcoatRoughnessMap,De=Be&&!!R.iridescenceMap,Te=Be&&!!R.iridescenceThicknessMap,Q=w&&!!R.sheenColorMap,T=w&&!!R.sheenRoughnessMap,Y=!!R.specularMap,V=!!R.specularColorMap,Ge=!!R.specularIntensityMap,ke=y&&!!R.transmissionMap,je=y&&!!R.thicknessMap,Xe=!!R.gradientMap,F=!!R.alphaMap,Ae=R.alphaTest>0,we=!!R.alphaHash,Ue=!!R.extensions,Ce=!!Z.attributes.uv1,be=!!Z.attributes.uv2,We=!!Z.attributes.uv3;let $e=rr;return R.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&($e=n.toneMapping),{isWebGL2:u,shaderID:ye,shaderType:R.type,shaderName:R.name,vertexShader:Re,fragmentShader:Pe,defines:R.defines,customVertexShaderID:Ne,customFragmentShaderID:He,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:m,instancing:ne,instancingColor:ne&&Ee.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:on,map:ge,matcap:Le,envMap:Ie,envMapMode:Ie&&te.mapping,envMapCubeUVHeight:pe,aoMap:S,lightMap:I,bumpMap:O,normalMap:W,displacementMap:h&&K,emissiveMap:se,normalMapObjectSpace:W&&R.normalMapType===Zy,normalMapTangentSpace:W&&R.normalMapType===M_,metalnessMap:ve,roughnessMap:oe,anisotropy:Se,anisotropyMap:G,clearcoat:_e,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:me,iridescence:Be,iridescenceMap:De,iridescenceThicknessMap:Te,sheen:w,sheenColorMap:Q,sheenRoughnessMap:T,specularMap:Y,specularColorMap:V,specularIntensityMap:Ge,transmission:y,transmissionMap:ke,thicknessMap:je,gradientMap:Xe,opaque:R.transparent===!1&&R.blending===Rs,alphaMap:F,alphaTest:Ae,alphaHash:we,combine:R.combine,mapUv:ge&&x(R.map.channel),aoMapUv:S&&x(R.aoMap.channel),lightMapUv:I&&x(R.lightMap.channel),bumpMapUv:O&&x(R.bumpMap.channel),normalMapUv:W&&x(R.normalMap.channel),displacementMapUv:K&&x(R.displacementMap.channel),emissiveMapUv:se&&x(R.emissiveMap.channel),metalnessMapUv:ve&&x(R.metalnessMap.channel),roughnessMapUv:oe&&x(R.roughnessMap.channel),anisotropyMapUv:G&&x(R.anisotropyMap.channel),clearcoatMapUv:ue&&x(R.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(R.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(R.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(R.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&x(R.sheenColorMap.channel),sheenRoughnessMapUv:T&&x(R.sheenRoughnessMap.channel),specularMapUv:Y&&x(R.specularMap.channel),specularColorMapUv:V&&x(R.specularColorMap.channel),specularIntensityMapUv:Ge&&x(R.specularIntensityMap.channel),transmissionMapUv:ke&&x(R.transmissionMap.channel),thicknessMapUv:je&&x(R.thicknessMap.channel),alphaMapUv:F&&x(R.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(W||Se),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:be,vertexUv3s:We,pointsUvs:Ee.isPoints===!0&&!!Z.attributes.uv&&(ge||F),fog:!!H,useFog:R.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Ee.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&de.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&xt.getTransfer(R.map.colorSpace)===Pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===oi,flipSided:R.side===Mn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Ue&&R.extensions.derivatives===!0,extensionFragDepth:Ue&&R.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const de in R.defines)N.push(de),N.push(R.defines[de]);return R.isRawShaderMaterial===!1&&(b(N,R),E(N,R),N.push(n.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function b(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.anisotropyMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.numLightProbes),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function E(R,N){a.disableAll(),N.isWebGL2&&a.enable(0),N.supportsVertexTextures&&a.enable(1),N.instancing&&a.enable(2),N.instancingColor&&a.enable(3),N.matcap&&a.enable(4),N.envMap&&a.enable(5),N.normalMapObjectSpace&&a.enable(6),N.normalMapTangentSpace&&a.enable(7),N.clearcoat&&a.enable(8),N.iridescence&&a.enable(9),N.alphaTest&&a.enable(10),N.vertexColors&&a.enable(11),N.vertexAlphas&&a.enable(12),N.vertexUv1s&&a.enable(13),N.vertexUv2s&&a.enable(14),N.vertexUv3s&&a.enable(15),N.vertexTangents&&a.enable(16),N.anisotropy&&a.enable(17),R.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.skinning&&a.enable(4),N.morphTargets&&a.enable(5),N.morphNormals&&a.enable(6),N.morphColors&&a.enable(7),N.premultipliedAlpha&&a.enable(8),N.shadowMapEnabled&&a.enable(9),N.useLegacyLights&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function A(R){const N=v[R.type];let de;if(N){const Me=ri[N];de=BM.clone(Me.uniforms)}else de=R.uniforms;return de}function C(R,N){let de;for(let Me=0,Ee=c.length;Me<Ee;Me++){const H=c[Me];if(H.cacheKey===N){de=H,++de.usedTimes;break}}return de===void 0&&(de=new YT(n,N,R,s),c.push(de)),de}function B(R){if(--R.usedTimes===0){const N=c.indexOf(R);c[N]=c[c.length-1],c.pop(),R.destroy()}}function D(R){l.remove(R)}function ie(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:A,acquireProgram:C,releaseProgram:B,releaseShaderCache:D,programs:c,dispose:ie}}function QT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function eA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.groupOrder=v,g.renderOrder=d.renderOrder,g.z=x,g.group=p),e++,g}function a(d,h,m,v,x,p){const g=o(d,h,m,v,x,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,h,m,v,x,p){const g=o(d,h,m,v,x,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||eA),i.length>1&&i.sort(h||xm),r.length>1&&r.sort(h||xm)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function tA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Sm,n.set(i,[o])):r>=s.length?(o=new Sm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ct};break;case"SpotLight":t={position:new X,direction:new X,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function iA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rA=0;function sA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oA(n,e){const t=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,o=new ht,a=new ht;function l(u,d){let h=0,m=0,v=0;for(let Me=0;Me<9;Me++)r.probe[Me].set(0,0,0);let x=0,p=0,g=0,b=0,E=0,A=0,C=0,B=0,D=0,ie=0,R=0;u.sort(sA);const N=d===!0?Math.PI:1;for(let Me=0,Ee=u.length;Me<Ee;Me++){const H=u[Me],Z=H.color,ce=H.intensity,te=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=Z.r*ce*N,m+=Z.g*ce*N,v+=Z.b*ce*N;else if(H.isLightProbe){for(let ye=0;ye<9;ye++)r.probe[ye].addScaledVector(H.sh.coefficients[ye],ce);R++}else if(H.isDirectionalLight){const ye=t.get(H);if(ye.color.copy(H.color).multiplyScalar(H.intensity*N),H.castShadow){const xe=H.shadow,z=i.get(H);z.shadowBias=xe.bias,z.shadowNormalBias=xe.normalBias,z.shadowRadius=xe.radius,z.shadowMapSize=xe.mapSize,r.directionalShadow[x]=z,r.directionalShadowMap[x]=pe,r.directionalShadowMatrix[x]=H.shadow.matrix,A++}r.directional[x]=ye,x++}else if(H.isSpotLight){const ye=t.get(H);ye.position.setFromMatrixPosition(H.matrixWorld),ye.color.copy(Z).multiplyScalar(ce*N),ye.distance=te,ye.coneCos=Math.cos(H.angle),ye.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ye.decay=H.decay,r.spot[g]=ye;const xe=H.shadow;if(H.map&&(r.spotLightMap[D]=H.map,D++,xe.updateMatrices(H),H.castShadow&&ie++),r.spotLightMatrix[g]=xe.matrix,H.castShadow){const z=i.get(H);z.shadowBias=xe.bias,z.shadowNormalBias=xe.normalBias,z.shadowRadius=xe.radius,z.shadowMapSize=xe.mapSize,r.spotShadow[g]=z,r.spotShadowMap[g]=pe,B++}g++}else if(H.isRectAreaLight){const ye=t.get(H);ye.color.copy(Z).multiplyScalar(ce),ye.halfWidth.set(H.width*.5,0,0),ye.halfHeight.set(0,H.height*.5,0),r.rectArea[b]=ye,b++}else if(H.isPointLight){const ye=t.get(H);if(ye.color.copy(H.color).multiplyScalar(H.intensity*N),ye.distance=H.distance,ye.decay=H.decay,H.castShadow){const xe=H.shadow,z=i.get(H);z.shadowBias=xe.bias,z.shadowNormalBias=xe.normalBias,z.shadowRadius=xe.radius,z.shadowMapSize=xe.mapSize,z.shadowCameraNear=xe.camera.near,z.shadowCameraFar=xe.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=pe,r.pointShadowMatrix[p]=H.shadow.matrix,C++}r.point[p]=ye,p++}else if(H.isHemisphereLight){const ye=t.get(H);ye.skyColor.copy(H.color).multiplyScalar(ce*N),ye.groundColor.copy(H.groundColor).multiplyScalar(ce*N),r.hemi[E]=ye,E++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const de=r.hash;(de.directionalLength!==x||de.pointLength!==p||de.spotLength!==g||de.rectAreaLength!==b||de.hemiLength!==E||de.numDirectionalShadows!==A||de.numPointShadows!==C||de.numSpotShadows!==B||de.numSpotMaps!==D||de.numLightProbes!==R)&&(r.directional.length=x,r.spot.length=g,r.rectArea.length=b,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=B+D-ie,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=ie,r.numLightProbes=R,de.directionalLength=x,de.pointLength=p,de.spotLength=g,de.rectAreaLength=b,de.hemiLength=E,de.numDirectionalShadows=A,de.numPointShadows=C,de.numSpotShadows=B,de.numSpotMaps=D,de.numLightProbes=R,r.version=rA++)}function c(u,d){let h=0,m=0,v=0,x=0,p=0;const g=d.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const A=u[b];if(A.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),h++}else if(A.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),v++}else if(A.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),a.identity(),o.copy(A.matrixWorld),o.premultiply(g),a.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function ym(n,e){const t=new oA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ym(n,e),t.set(s,[l])):o>=a.length?(l=new ym(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class lA extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cA extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hA(n,e,t){let i=new zf;const r=new rt,s=new rt,o=new At,a=new lA({depthPacking:$y}),l=new cA,c={},u=t.maxTextureSize,d={[Ni]:Mn,[Mn]:Ni,[oi]:oi},h=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:uA,fragmentShader:fA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new hi;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Bn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l_;let g=this.type;this.render=function(C,B,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const ie=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),de=n.state;de.setBlending(ir),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const Me=g!==Ti&&this.type===Ti,Ee=g===Ti&&this.type!==Ti;for(let H=0,Z=C.length;H<Z;H++){const ce=C[H],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);const pe=te.getFrameExtents();if(r.multiply(pe),s.copy(te.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,te.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,te.mapSize.y=s.y)),te.map===null||Me===!0||Ee===!0){const xe=this.type!==Ti?{minFilter:Qt,magFilter:Qt}:{};te.map!==null&&te.map.dispose(),te.map=new Ur(r.x,r.y,xe),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}n.setRenderTarget(te.map),n.clear();const ye=te.getViewportCount();for(let xe=0;xe<ye;xe++){const z=te.getViewport(xe);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),de.viewport(o),te.updateMatrices(ce,xe),i=te.getFrustum(),A(B,D,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Ti&&b(te,D),te.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(ie,R,N)};function b(C,B){const D=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ur(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(B,null,D,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(B,null,D,m,x,null)}function E(C,B,D,ie){let R=null;const N=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)R=N;else if(R=D.isPointLight===!0?l:a,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const de=R.uuid,Me=B.uuid;let Ee=c[de];Ee===void 0&&(Ee={},c[de]=Ee);let H=Ee[Me];H===void 0&&(H=R.clone(),Ee[Me]=H),R=H}if(R.visible=B.visible,R.wireframe=B.wireframe,ie===Ti?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:d[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,D.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const de=n.properties.get(R);de.light=D}return R}function A(C,B,D,ie,R){if(C.visible===!1)return;if(C.layers.test(B.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const Me=e.update(C),Ee=C.material;if(Array.isArray(Ee)){const H=Me.groups;for(let Z=0,ce=H.length;Z<ce;Z++){const te=H[Z],pe=Ee[te.materialIndex];if(pe&&pe.visible){const ye=E(C,pe,ie,R);n.renderBufferDirect(D,null,Me,ye,C,te)}}}else if(Ee.visible){const H=E(C,Ee,ie,R);n.renderBufferDirect(D,null,Me,H,C,null)}}const de=C.children;for(let Me=0,Ee=de.length;Me<Ee;Me++)A(de[Me],B,D,ie,R)}}function dA(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const Ae=new At;let we=null;const Ue=new At(0,0,0,0);return{setMask:function(Ce){we!==Ce&&!F&&(n.colorMask(Ce,Ce,Ce,Ce),we=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,be,We,$e,Ot){Ot===!0&&(Ce*=$e,be*=$e,We*=$e),Ae.set(Ce,be,We,$e),Ue.equals(Ae)===!1&&(n.clearColor(Ce,be,We,$e),Ue.copy(Ae))},reset:function(){F=!1,we=null,Ue.set(-1,0,0,0)}}}function s(){let F=!1,Ae=null,we=null,Ue=null;return{setTest:function(Ce){Ce?j(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Ce){Ae!==Ce&&!F&&(n.depthMask(Ce),Ae=Ce)},setFunc:function(Ce){if(we!==Ce){switch(Ce){case by:n.depthFunc(n.NEVER);break;case Ty:n.depthFunc(n.ALWAYS);break;case Ay:n.depthFunc(n.LESS);break;case Qu:n.depthFunc(n.LEQUAL);break;case wy:n.depthFunc(n.EQUAL);break;case Ry:n.depthFunc(n.GEQUAL);break;case Cy:n.depthFunc(n.GREATER);break;case Ly:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){Ue!==Ce&&(n.clearDepth(Ce),Ue=Ce)},reset:function(){F=!1,Ae=null,we=null,Ue=null}}}function o(){let F=!1,Ae=null,we=null,Ue=null,Ce=null,be=null,We=null,$e=null,Ot=null;return{setTest:function(Mt){F||(Mt?j(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(Mt){Ae!==Mt&&!F&&(n.stencilMask(Mt),Ae=Mt)},setFunc:function(Mt,bn,Yt){(we!==Mt||Ue!==bn||Ce!==Yt)&&(n.stencilFunc(Mt,bn,Yt),we=Mt,Ue=bn,Ce=Yt)},setOp:function(Mt,bn,Yt){(be!==Mt||We!==bn||$e!==Yt)&&(n.stencilOp(Mt,bn,Yt),be=Mt,We=bn,$e=Yt)},setLocked:function(Mt){F=Mt},setClear:function(Mt){Ot!==Mt&&(n.clearStencil(Mt),Ot=Mt)},reset:function(){F=!1,Ae=null,we=null,Ue=null,Ce=null,be=null,We=null,$e=null,Ot=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,g=!1,b=null,E=null,A=null,C=null,B=null,D=null,ie=null,R=!1,N=null,de=null,Me=null,Ee=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,te=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(pe)[1]),ce=te>=1):pe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),ce=te>=2);let ye=null,xe={};const z=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Re=new At().fromArray(z),Pe=new At().fromArray(ee);function Ne(F,Ae,we,Ue){const Ce=new Uint8Array(4),be=n.createTexture();n.bindTexture(F,be),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<we;We++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ae,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Ae+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return be}const He={};He[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),He[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(He[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),He[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(n.DEPTH_TEST),l.setFunc(Qu),K(!1),se(np),j(n.CULL_FACE),O(ir);function j(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ne(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ge(F,Ae){return m[F]!==Ae?(n.bindFramebuffer(F,Ae),m[F]=Ae,i&&(F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ae),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function Le(F,Ae){let we=x,Ue=!1;if(F)if(we=v.get(Ae),we===void 0&&(we=[],v.set(Ae,we)),F.isWebGLMultipleRenderTargets){const Ce=F.texture;if(we.length!==Ce.length||we[0]!==n.COLOR_ATTACHMENT0){for(let be=0,We=Ce.length;be<We;be++)we[be]=n.COLOR_ATTACHMENT0+be;we.length=Ce.length,Ue=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ue=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Ie(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const S={[ys]:n.FUNC_ADD,[dy]:n.FUNC_SUBTRACT,[py]:n.FUNC_REVERSE_SUBTRACT};if(i)S[op]=n.MIN,S[ap]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(S[op]=F.MIN_EXT,S[ap]=F.MAX_EXT)}const I={[my]:n.ZERO,[gy]:n.ONE,[_y]:n.SRC_COLOR,[c_]:n.SRC_ALPHA,[Ey]:n.SRC_ALPHA_SATURATE,[yy]:n.DST_COLOR,[xy]:n.DST_ALPHA,[vy]:n.ONE_MINUS_SRC_COLOR,[u_]:n.ONE_MINUS_SRC_ALPHA,[My]:n.ONE_MINUS_DST_COLOR,[Sy]:n.ONE_MINUS_DST_ALPHA};function O(F,Ae,we,Ue,Ce,be,We,$e){if(F===ir){g===!0&&(ne(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),F!==hy){if(F!==b||$e!==R){if((E!==ys||B!==ys)&&(n.blendEquation(n.FUNC_ADD),E=ys,B=ys),$e)switch(F){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ip:n.blendFunc(n.ONE,n.ONE);break;case rp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ip:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,C=null,D=null,ie=null,b=F,R=$e}return}Ce=Ce||Ae,be=be||we,We=We||Ue,(Ae!==E||Ce!==B)&&(n.blendEquationSeparate(S[Ae],S[Ce]),E=Ae,B=Ce),(we!==A||Ue!==C||be!==D||We!==ie)&&(n.blendFuncSeparate(I[we],I[Ue],I[be],I[We]),A=we,C=Ue,D=be,ie=We),b=F,R=!1}function W(F,Ae){F.side===oi?ne(n.CULL_FACE):j(n.CULL_FACE);let we=F.side===Mn;Ae&&(we=!we),K(we),F.blending===Rs&&F.transparent===!1?O(ir):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ue=F.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function se(F){F!==cy?(j(n.CULL_FACE),F!==de&&(F===np?n.cullFace(n.BACK):F===uy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),de=F}function ve(F){F!==Me&&(ce&&n.lineWidth(F),Me=F)}function oe(F,Ae,we){F?(j(n.POLYGON_OFFSET_FILL),(Ee!==Ae||H!==we)&&(n.polygonOffset(Ae,we),Ee=Ae,H=we)):ne(n.POLYGON_OFFSET_FILL)}function Se(F){F?j(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function _e(F){F===void 0&&(F=n.TEXTURE0+Z-1),ye!==F&&(n.activeTexture(F),ye=F)}function Be(F,Ae,we){we===void 0&&(ye===null?we=n.TEXTURE0+Z-1:we=ye);let Ue=xe[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[we]=Ue),(Ue.type!==F||Ue.texture!==Ae)&&(ye!==we&&(n.activeTexture(we),ye=we),n.bindTexture(F,Ae||He[F]),Ue.type=F,Ue.texture=Ae)}function w(){const F=xe[ye];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function T(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(F){Re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Re.copy(F))}function Ge(F){Pe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Pe.copy(F))}function ke(F,Ae){let we=d.get(Ae);we===void 0&&(we=new WeakMap,d.set(Ae,we));let Ue=we.get(F);Ue===void 0&&(Ue=n.getUniformBlockIndex(Ae,F.name),we.set(F,Ue))}function je(F,Ae){const Ue=d.get(Ae).get(F);u.get(Ae)!==Ue&&(n.uniformBlockBinding(Ae,Ue,F.__bindingPointIndex),u.set(Ae,Ue))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ye=null,xe={},m={},v=new WeakMap,x=[],p=null,g=!1,b=null,E=null,A=null,C=null,B=null,D=null,ie=null,R=!1,N=null,de=null,Me=null,Ee=null,H=null,Re.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:j,disable:ne,bindFramebuffer:ge,drawBuffers:Le,useProgram:Ie,setBlending:O,setMaterial:W,setFlipSided:K,setCullFace:se,setLineWidth:ve,setPolygonOffset:oe,setScissorTest:Se,activeTexture:_e,bindTexture:Be,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:G,texImage2D:T,texImage3D:Y,updateUBOMapping:ke,uniformBlockBinding:je,texStorage2D:Te,texStorage3D:Q,texSubImage2D:ue,texSubImage3D:fe,compressedTexSubImage2D:me,compressedTexSubImage3D:De,scissor:V,viewport:Ge,reset:Xe}}function pA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,y){return g?new OffscreenCanvas(w,y):Zo("canvas")}function E(w,y,G,ue){let fe=1;if((w.width>ue||w.height>ue)&&(fe=ue/Math.max(w.width,w.height)),fe<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const me=y?Al:Math.floor,De=me(fe*w.width),Te=me(fe*w.height);x===void 0&&(x=b(De,Te));const Q=G?b(De,Te):x;return Q.width=De,Q.height=Te,Q.getContext("2d").drawImage(w,0,0,De,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+De+"x"+Te+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function A(w){return af(w.width)&&af(w.height)}function C(w){return a?!1:w.wrapS!==Un||w.wrapT!==Un||w.minFilter!==Qt&&w.minFilter!==yn}function B(w,y){return w.generateMipmaps&&y&&w.minFilter!==Qt&&w.minFilter!==yn}function D(w){n.generateMipmap(w)}function ie(w,y,G,ue,fe=!1){if(a===!1)return y;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me=y;if(y===n.RED&&(G===n.FLOAT&&(me=n.R32F),G===n.HALF_FLOAT&&(me=n.R16F),G===n.UNSIGNED_BYTE&&(me=n.R8)),y===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(me=n.R8UI),G===n.UNSIGNED_SHORT&&(me=n.R16UI),G===n.UNSIGNED_INT&&(me=n.R32UI),G===n.BYTE&&(me=n.R8I),G===n.SHORT&&(me=n.R16I),G===n.INT&&(me=n.R32I)),y===n.RG&&(G===n.FLOAT&&(me=n.RG32F),G===n.HALF_FLOAT&&(me=n.RG16F),G===n.UNSIGNED_BYTE&&(me=n.RG8)),y===n.RGBA){const De=fe?Ml:xt.getTransfer(ue);G===n.FLOAT&&(me=n.RGBA32F),G===n.HALF_FLOAT&&(me=n.RGBA16F),G===n.UNSIGNED_BYTE&&(me=De===Pt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function R(w,y,G){return B(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Qt&&w.minFilter!==yn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function N(w){return w===Qt||w===nf||w===hl?n.NEAREST:n.LINEAR}function de(w){const y=w.target;y.removeEventListener("dispose",de),Ee(y),y.isVideoTexture&&v.delete(y)}function Me(w){const y=w.target;y.removeEventListener("dispose",Me),Z(y)}function Ee(w){const y=i.get(w);if(y.__webglInit===void 0)return;const G=w.source,ue=p.get(G);if(ue){const fe=ue[y.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&H(w),Object.keys(ue).length===0&&p.delete(G)}i.remove(w)}function H(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const G=w.source,ue=p.get(G);delete ue[y.__cacheKey],o.memory.textures--}function Z(w){const y=w.texture,G=i.get(w),ue=i.get(y);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(G.__webglFramebuffer[fe]))for(let me=0;me<G.__webglFramebuffer[fe].length;me++)n.deleteFramebuffer(G.__webglFramebuffer[fe][me]);else n.deleteFramebuffer(G.__webglFramebuffer[fe]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[fe])}else{if(Array.isArray(G.__webglFramebuffer))for(let fe=0;fe<G.__webglFramebuffer.length;fe++)n.deleteFramebuffer(G.__webglFramebuffer[fe]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let fe=0;fe<G.__webglColorRenderbuffer.length;fe++)G.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[fe]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let fe=0,me=y.length;fe<me;fe++){const De=i.get(y[fe]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),o.memory.textures--),i.remove(y[fe])}i.remove(y),i.remove(w)}let ce=0;function te(){ce=0}function pe(){const w=ce;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),ce+=1,w}function ye(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function xe(w,y){const G=i.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const ue=w.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(G,w,y);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+y)}function z(w,y){const G=i.get(w);if(w.version>0&&G.__version!==w.version){ge(G,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+y)}function ee(w,y){const G=i.get(w);if(w.version>0&&G.__version!==w.version){ge(G,w,y);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+y)}function Re(w,y){const G=i.get(w);if(w.version>0&&G.__version!==w.version){Le(G,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+y)}const Pe={[ks]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},Ne={[Qt]:n.NEAREST,[nf]:n.NEAREST_MIPMAP_NEAREST,[hl]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[d_]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},He={[Qy]:n.NEVER,[oM]:n.ALWAYS,[eM]:n.LESS,[nM]:n.LEQUAL,[tM]:n.EQUAL,[sM]:n.GEQUAL,[iM]:n.GREATER,[rM]:n.NOTEQUAL};function j(w,y,G){if(G?(n.texParameteri(w,n.TEXTURE_WRAP_S,Pe[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Pe[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Pe[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ne[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ne[y.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Un||y.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,N(y.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,N(y.minFilter)),y.minFilter!==Qt&&y.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Qt||y.minFilter!==hl&&y.minFilter!==Nr||y.type===Ri&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ko&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(w,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ne(w,y){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",de));const ue=y.source;let fe=p.get(ue);fe===void 0&&(fe={},p.set(ue,fe));const me=ye(y);if(me!==w.__cacheKey){fe[me]===void 0&&(fe[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),fe[me].usedTimes++;const De=fe[w.__cacheKey];De!==void 0&&(fe[w.__cacheKey].usedTimes--,De.usedTimes===0&&H(y)),w.__cacheKey=me,w.__webglTexture=fe[me].texture}return G}function ge(w,y,G){let ue=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ue=n.TEXTURE_3D);const fe=ne(w,y),me=y.source;t.bindTexture(ue,w.__webglTexture,n.TEXTURE0+G);const De=i.get(me);if(me.version!==De.__version||fe===!0){t.activeTexture(n.TEXTURE0+G);const Te=xt.getPrimaries(xt.workingColorSpace),Q=y.colorSpace===Fn?null:xt.getPrimaries(y.colorSpace),T=y.colorSpace===Fn||Te===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);const Y=C(y)&&A(y.image)===!1;let V=E(y.image,Y,!1,u);V=Be(y,V);const Ge=A(V)||a,ke=s.convert(y.format,y.colorSpace);let je=s.convert(y.type),Xe=ie(y.internalFormat,ke,je,y.colorSpace,y.isVideoTexture);j(ue,y,Ge);let F;const Ae=y.mipmaps,we=a&&y.isVideoTexture!==!0,Ue=De.__version===void 0||fe===!0,Ce=R(y,V,Ge);if(y.isDepthTexture)Xe=n.DEPTH_COMPONENT,a?y.type===Ri?Xe=n.DEPTH_COMPONENT32F:y.type===er?Xe=n.DEPTH_COMPONENT24:y.type===Pr?Xe=n.DEPTH24_STENCIL8:Xe=n.DEPTH_COMPONENT16:y.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ir&&Xe===n.DEPTH_COMPONENT&&y.type!==Bf&&y.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=er,je=s.convert(y.type)),y.format===zs&&Xe===n.DEPTH_COMPONENT&&(Xe=n.DEPTH_STENCIL,y.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Pr,je=s.convert(y.type))),Ue&&(we?t.texStorage2D(n.TEXTURE_2D,1,Xe,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,Xe,V.width,V.height,0,ke,je,null));else if(y.isDataTexture)if(Ae.length>0&&Ge){we&&Ue&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Ae[0].width,Ae[0].height);for(let be=0,We=Ae.length;be<We;be++)F=Ae[be],we?t.texSubImage2D(n.TEXTURE_2D,be,0,0,F.width,F.height,ke,je,F.data):t.texImage2D(n.TEXTURE_2D,be,Xe,F.width,F.height,0,ke,je,F.data);y.generateMipmaps=!1}else we?(Ue&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,ke,je,V.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,V.width,V.height,0,ke,je,V.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){we&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Xe,Ae[0].width,Ae[0].height,V.depth);for(let be=0,We=Ae.length;be<We;be++)F=Ae[be],y.format!==On?ke!==null?we?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,F.width,F.height,V.depth,ke,F.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Xe,F.width,F.height,V.depth,0,F.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,F.width,F.height,V.depth,ke,je,F.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Xe,F.width,F.height,V.depth,0,ke,je,F.data)}else{we&&Ue&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Ae[0].width,Ae[0].height);for(let be=0,We=Ae.length;be<We;be++)F=Ae[be],y.format!==On?ke!==null?we?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,F.width,F.height,ke,F.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Xe,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(n.TEXTURE_2D,be,0,0,F.width,F.height,ke,je,F.data):t.texImage2D(n.TEXTURE_2D,be,Xe,F.width,F.height,0,ke,je,F.data)}else if(y.isDataArrayTexture)we?(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Xe,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ke,je,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,V.width,V.height,V.depth,0,ke,je,V.data);else if(y.isData3DTexture)we?(Ue&&t.texStorage3D(n.TEXTURE_3D,Ce,Xe,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ke,je,V.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,V.width,V.height,V.depth,0,ke,je,V.data);else if(y.isFramebufferTexture){if(Ue)if(we)t.texStorage2D(n.TEXTURE_2D,Ce,Xe,V.width,V.height);else{let be=V.width,We=V.height;for(let $e=0;$e<Ce;$e++)t.texImage2D(n.TEXTURE_2D,$e,Xe,be,We,0,ke,je,null),be>>=1,We>>=1}}else if(Ae.length>0&&Ge){we&&Ue&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,Ae[0].width,Ae[0].height);for(let be=0,We=Ae.length;be<We;be++)F=Ae[be],we?t.texSubImage2D(n.TEXTURE_2D,be,0,0,ke,je,F):t.texImage2D(n.TEXTURE_2D,be,Xe,ke,je,F);y.generateMipmaps=!1}else we?(Ue&&t.texStorage2D(n.TEXTURE_2D,Ce,Xe,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,je,V)):t.texImage2D(n.TEXTURE_2D,0,Xe,ke,je,V);B(y,Ge)&&D(ue),De.__version=me.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Le(w,y,G){if(y.image.length!==6)return;const ue=ne(w,y),fe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+G);const me=i.get(fe);if(fe.version!==me.__version||ue===!0){t.activeTexture(n.TEXTURE0+G);const De=xt.getPrimaries(xt.workingColorSpace),Te=y.colorSpace===Fn?null:xt.getPrimaries(y.colorSpace),Q=y.colorSpace===Fn||De===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const T=y.isCompressedTexture||y.image[0].isCompressedTexture,Y=y.image[0]&&y.image[0].isDataTexture,V=[];for(let be=0;be<6;be++)!T&&!Y?V[be]=E(y.image[be],!1,!0,c):V[be]=Y?y.image[be].image:y.image[be],V[be]=Be(y,V[be]);const Ge=V[0],ke=A(Ge)||a,je=s.convert(y.format,y.colorSpace),Xe=s.convert(y.type),F=ie(y.internalFormat,je,Xe,y.colorSpace),Ae=a&&y.isVideoTexture!==!0,we=me.__version===void 0||ue===!0;let Ue=R(y,Ge,ke);j(n.TEXTURE_CUBE_MAP,y,ke);let Ce;if(T){Ae&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,F,Ge.width,Ge.height);for(let be=0;be<6;be++){Ce=V[be].mipmaps;for(let We=0;We<Ce.length;We++){const $e=Ce[We];y.format!==On?je!==null?Ae?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,$e.width,$e.height,je,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,F,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,$e.width,$e.height,je,Xe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,F,$e.width,$e.height,0,je,Xe,$e.data)}}}else{Ce=y.mipmaps,Ae&&we&&(Ce.length>0&&Ue++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,F,V[0].width,V[0].height));for(let be=0;be<6;be++)if(Y){Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,V[be].width,V[be].height,je,Xe,V[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,F,V[be].width,V[be].height,0,je,Xe,V[be].data);for(let We=0;We<Ce.length;We++){const Ot=Ce[We].image[be].image;Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Ot.width,Ot.height,je,Xe,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,F,Ot.width,Ot.height,0,je,Xe,Ot.data)}}else{Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,Xe,V[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,F,je,Xe,V[be]);for(let We=0;We<Ce.length;We++){const $e=Ce[We];Ae?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,je,Xe,$e.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,F,je,Xe,$e.image[be])}}}B(y,ke)&&D(n.TEXTURE_CUBE_MAP),me.__version=fe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ie(w,y,G,ue,fe,me){const De=s.convert(G.format,G.colorSpace),Te=s.convert(G.type),Q=ie(G.internalFormat,De,Te,G.colorSpace);if(!i.get(y).__hasExternalTextures){const Y=Math.max(1,y.width>>me),V=Math.max(1,y.height>>me);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,me,Q,Y,V,y.depth,0,De,Te,null):t.texImage2D(fe,me,Q,Y,V,0,De,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Se(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,fe,i.get(G).__webglTexture,0,oe(y)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,fe,i.get(G).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function S(w,y,G){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let ue=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||Se(y)){const fe=y.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Ri?ue=n.DEPTH_COMPONENT32F:fe.type===er&&(ue=n.DEPTH_COMPONENT24));const me=oe(y);Se(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,ue,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ue,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const ue=oe(y);G&&Se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,y.width,y.height):Se(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const ue=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let fe=0;fe<ue.length;fe++){const me=ue[fe],De=s.convert(me.format,me.colorSpace),Te=s.convert(me.type),Q=ie(me.internalFormat,De,Te,me.colorSpace),T=oe(y);G&&Se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,T,Q,y.width,y.height):Se(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T,Q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Q,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function I(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),xe(y.depthTexture,0);const ue=i.get(y.depthTexture).__webglTexture,fe=oe(y);if(y.depthTexture.format===Ir)Se(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(y.depthTexture.format===zs)Se(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function O(w){const y=i.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");I(y.__webglFramebuffer,w)}else if(G){y.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ue]),y.__webglDepthbuffer[ue]=n.createRenderbuffer(),S(y.__webglDepthbuffer[ue],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),S(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(w,y,G){const ue=i.get(w);y!==void 0&&Ie(ue.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&O(w)}function K(w){const y=w.texture,G=i.get(w),ue=i.get(y);w.addEventListener("dispose",Me),w.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=y.version,o.memory.textures++);const fe=w.isWebGLCubeRenderTarget===!0,me=w.isWebGLMultipleRenderTargets===!0,De=A(w)||a;if(fe){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Q=0;Q<y.mipmaps.length;Q++)G.__webglFramebuffer[Te][Q]=n.createFramebuffer()}else G.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<y.mipmaps.length;Te++)G.__webglFramebuffer[Te]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(me)if(r.drawBuffers){const Te=w.texture;for(let Q=0,T=Te.length;Q<T;Q++){const Y=i.get(Te[Q]);Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Se(w)===!1){const Te=me?y:[y];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<Te.length;Q++){const T=Te[Q];G.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const Y=s.convert(T.format,T.colorSpace),V=s.convert(T.type),Ge=ie(T.internalFormat,Y,V,T.colorSpace,w.isXRRenderTarget===!0),ke=oe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ge,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),S(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),j(n.TEXTURE_CUBE_MAP,y,De);for(let Te=0;Te<6;Te++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ie(G.__webglFramebuffer[Te][Q],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Q);else Ie(G.__webglFramebuffer[Te],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);B(y,De)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const Te=w.texture;for(let Q=0,T=Te.length;Q<T;Q++){const Y=Te[Q],V=i.get(Y);t.bindTexture(n.TEXTURE_2D,V.__webglTexture),j(n.TEXTURE_2D,Y,De),Ie(G.__webglFramebuffer,w,Y,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),B(Y,De)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?Te=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ue.__webglTexture),j(Te,y,De),a&&y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Ie(G.__webglFramebuffer[Q],w,y,n.COLOR_ATTACHMENT0,Te,Q);else Ie(G.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,Te,0);B(y,De)&&D(Te),t.unbindTexture()}w.depthBuffer&&O(w)}function se(w){const y=A(w)||a,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0,fe=G.length;ue<fe;ue++){const me=G[ue];if(B(me,y)){const De=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(me).__webglTexture;t.bindTexture(De,Te),D(De),t.unbindTexture()}}}function ve(w){if(a&&w.samples>0&&Se(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,ue=w.height;let fe=n.COLOR_BUFFER_BIT;const me=[],De=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(w),Q=w.isWebGLMultipleRenderTargets===!0;if(Q)for(let T=0;T<y.length;T++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let T=0;T<y.length;T++){me.push(n.COLOR_ATTACHMENT0+T),w.depthBuffer&&me.push(De);const Y=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Y===!1&&(w.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),Q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[T]),Y===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),Q){const V=i.get(y[T]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,V,0)}n.blitFramebuffer(0,0,G,ue,0,0,G,ue,fe,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let T=0;T<y.length;T++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,Te.__webglColorRenderbuffer[T]);const Y=i.get(y[T]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,Y,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function oe(w){return Math.min(d,w.samples)}function Se(w){const y=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(w){const y=o.render.frame;v.get(w)!==y&&(v.set(w,y),w.update())}function Be(w,y){const G=w.colorSpace,ue=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===of||G!==on&&G!==Fn&&(xt.getTransfer(G)===Pt?a===!1?e.has("EXT_sRGB")===!0&&ue===On?(w.format=of,w.minFilter=yn,w.generateMipmaps=!1):y=A_.sRGBToLinear(y):(ue!==On||fe!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=pe,this.resetTextureUnits=te,this.setTexture2D=xe,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=Re,this.rebindTextures=W,this.setupRenderTarget=K,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Se}function mA(n,e,t){const i=t.isWebGL2;function r(s,o=Fn){let a;const l=xt.getTransfer(o);if(s===sr)return n.UNSIGNED_BYTE;if(s===m_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===g_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===By)return n.BYTE;if(s===Hy)return n.SHORT;if(s===Bf)return n.UNSIGNED_SHORT;if(s===p_)return n.INT;if(s===er)return n.UNSIGNED_INT;if(s===Ri)return n.FLOAT;if(s===Ko)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ky)return n.ALPHA;if(s===On)return n.RGBA;if(s===zy)return n.LUMINANCE;if(s===Vy)return n.LUMINANCE_ALPHA;if(s===Ir)return n.DEPTH_COMPONENT;if(s===zs)return n.DEPTH_STENCIL;if(s===of)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Gy)return n.RED;if(s===__)return n.RED_INTEGER;if(s===Wy)return n.RG;if(s===v_)return n.RG_INTEGER;if(s===x_)return n.RGBA_INTEGER;if(s===tu||s===nu||s===iu||s===ru)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lp||s===cp||s===up||s===fp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===lp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===up)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hp||s===dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hp)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===dp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===bp||s===Tp||s===Ap||s===wp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ep)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ap)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===su||s===Rp||s===Cp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===su)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jy||s===Lp||s===Pp||s===Ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===su)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class gA extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _A={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_A)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vA extends sn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ir&&(i=er),i===void 0&&u===zs&&(i=Pr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xA extends Br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,v=null;const x=t.getContextAttributes();let p=null,g=null;const b=[],E=[],A=new gn;A.layers.enable(1),A.viewport=new At;const C=new gn;C.layers.enable(2),C.viewport=new At;const B=[A,C],D=new gA;D.layers.enable(1),D.layers.enable(2);let ie=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=b[z];return ee===void 0&&(ee=new Ru,b[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=b[z];return ee===void 0&&(ee=new Ru,b[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=b[z];return ee===void 0&&(ee=new Ru,b[z]=ee),ee.getHandSpace()};function N(z){const ee=E.indexOf(z.inputSource);if(ee===-1)return;const Re=b[ee];Re!==void 0&&(Re.update(z.inputSource,z.frame,c||o),Re.dispatchEvent({type:z.type,data:z.inputSource}))}function de(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",Me);for(let z=0;z<b.length;z++){const ee=E[z];ee!==null&&(E[z]=null,b[z].disconnect(ee))}ie=null,R=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,g=null,xe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",de),r.addEventListener("inputsourceschange",Me),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),g=new Ur(m.framebufferWidth,m.framebufferHeight,{format:On,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,Re=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?zs:Ir,Re=x.stencil?Pr:er);const Ne={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),g=new Ur(h.textureWidth,h.textureHeight,{format:On,type:sr,depthTexture:new vA(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const He=e.properties.get(g);He.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Me(z){for(let ee=0;ee<z.removed.length;ee++){const Re=z.removed[ee],Pe=E.indexOf(Re);Pe>=0&&(E[Pe]=null,b[Pe].disconnect(Re))}for(let ee=0;ee<z.added.length;ee++){const Re=z.added[ee];let Pe=E.indexOf(Re);if(Pe===-1){for(let He=0;He<b.length;He++)if(He>=E.length){E.push(Re),Pe=He;break}else if(E[He]===null){E[He]=Re,Pe=He;break}if(Pe===-1)break}const Ne=b[Pe];Ne&&Ne.connect(Re)}}const Ee=new X,H=new X;function Z(z,ee,Re){Ee.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(Re.matrixWorld);const Pe=Ee.distanceTo(H),Ne=ee.projectionMatrix.elements,He=Re.projectionMatrix.elements,j=Ne[14]/(Ne[10]-1),ne=Ne[14]/(Ne[10]+1),ge=(Ne[9]+1)/Ne[5],Le=(Ne[9]-1)/Ne[5],Ie=(Ne[8]-1)/Ne[0],S=(He[8]+1)/He[0],I=j*Ie,O=j*S,W=Pe/(-Ie+S),K=W*-Ie;ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(K),z.translateZ(W),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const se=j+W,ve=ne+W,oe=I-K,Se=O+(Pe-K),_e=ge*ne/ve*se,Be=Le*ne/ve*se;z.projectionMatrix.makePerspective(oe,Se,_e,Be,se,ve),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function ce(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;D.near=C.near=A.near=z.near,D.far=C.far=A.far=z.far,(ie!==D.near||R!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),ie=D.near,R=D.far);const ee=z.parent,Re=D.cameras;ce(D,ee);for(let Pe=0;Pe<Re.length;Pe++)ce(Re[Pe],ee);Re.length===2?Z(D,A,C):D.projectionMatrix.copy(A.projectionMatrix),te(z,D,ee)};function te(z,ee,Re){Re===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(Re.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Gs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let pe=null;function ye(z,ee){if(u=ee.getViewerPose(c||o),v=ee,u!==null){const Re=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Pe=!1;Re.length!==D.cameras.length&&(D.cameras.length=0,Pe=!0);for(let Ne=0;Ne<Re.length;Ne++){const He=Re[Ne];let j=null;if(m!==null)j=m.getViewport(He);else{const ge=d.getViewSubImage(h,He);j=ge.viewport,Ne===0&&(e.setRenderTargetTextures(g,ge.colorTexture,h.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(g))}let ne=B[Ne];ne===void 0&&(ne=new gn,ne.layers.enable(Ne),ne.viewport=new At,B[Ne]=ne),ne.matrix.fromArray(He.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(He.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(j.x,j.y,j.width,j.height),Ne===0&&(D.matrix.copy(ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pe===!0&&D.cameras.push(ne)}}for(let Re=0;Re<b.length;Re++){const Pe=E[Re],Ne=b[Re];Pe!==null&&Ne!==void 0&&Ne.update(Pe,ee,c||o)}pe&&pe(z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const xe=new O_;xe.setAnimationLoop(ye),this.setAnimationLoop=function(z){pe=z},this.dispose=function(){}}}function SA(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,D_(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,b,E,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&m(p,g,A)):g.isMeshMatcapMaterial?(s(p,g),v(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*E,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,E){const A=E.program;i.uniformBlockBinding(b,A)}function c(b,E){let A=r[b.id];A===void 0&&(v(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",p));const C=E.program;i.updateUBOMapping(b,C);const B=e.render.frame;s[b.id]!==B&&(h(b),s[b.id]=B)}function u(b){const E=d();b.__bindingPointIndex=E;const A=n.createBuffer(),C=b.__size,B=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=r[b.id],A=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let B=0,D=A.length;B<D;B++){const ie=A[B];if(m(ie,B,C)===!0){const R=ie.__offset,N=Array.isArray(ie.value)?ie.value:[ie.value];let de=0;for(let Me=0;Me<N.length;Me++){const Ee=N[Me],H=x(Ee);typeof Ee=="number"?(ie.__data[0]=Ee,n.bufferSubData(n.UNIFORM_BUFFER,R+de,ie.__data)):Ee.isMatrix3?(ie.__data[0]=Ee.elements[0],ie.__data[1]=Ee.elements[1],ie.__data[2]=Ee.elements[2],ie.__data[3]=Ee.elements[0],ie.__data[4]=Ee.elements[3],ie.__data[5]=Ee.elements[4],ie.__data[6]=Ee.elements[5],ie.__data[7]=Ee.elements[0],ie.__data[8]=Ee.elements[6],ie.__data[9]=Ee.elements[7],ie.__data[10]=Ee.elements[8],ie.__data[11]=Ee.elements[0]):(Ee.toArray(ie.__data,de),de+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,ie.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,E,A){const C=b.value;if(A[E]===void 0){if(typeof C=="number")A[E]=C;else{const B=Array.isArray(C)?C:[C],D=[];for(let ie=0;ie<B.length;ie++)D.push(B[ie].clone());A[E]=D}return!0}else if(typeof C=="number"){if(A[E]!==C)return A[E]=C,!0}else{const B=Array.isArray(A[E])?A[E]:[A[E]],D=Array.isArray(C)?C:[C];for(let ie=0;ie<B.length;ie++){const R=B[ie];if(R.equals(D[ie])===!1)return R.copy(D[ie]),!0}}return!1}function v(b){const E=b.uniforms;let A=0;const C=16;let B=0;for(let D=0,ie=E.length;D<ie;D++){const R=E[D],N={boundary:0,storage:0},de=Array.isArray(R.value)?R.value:[R.value];for(let Me=0,Ee=de.length;Me<Ee;Me++){const H=de[Me],Z=x(H);N.boundary+=Z.boundary,N.storage+=Z.storage}if(R.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=A,D>0){B=A%C;const Me=C-B;B!==0&&Me-N.boundary<0&&(A+=C-B,R.__offset=A)}A+=N.storage}return B=A%C,B>0&&(A+=C-B),b.__size=A,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function g(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class z_{constructor(e={}){const{canvas:t=SM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const E=this;let A=!1,C=0,B=0,D=null,ie=-1,R=null;const N=new At,de=new At;let Me=null;const Ee=new ct(0);let H=0,Z=t.width,ce=t.height,te=1,pe=null,ye=null;const xe=new At(0,0,Z,ce),z=new At(0,0,Z,ce);let ee=!1;const Re=new zf;let Pe=!1,Ne=!1,He=null;const j=new ht,ne=new rt,ge=new X,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return D===null?te:1}let S=i;function I(L,$){for(let ae=0;ae<L.length;ae++){const q=L[ae],le=t.getContext(q,$);if(le!==null)return le}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ff}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),S===null){const $=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&$.shift(),S=I($,L),S===null)throw I($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let O,W,K,se,ve,oe,Se,_e,Be,w,y,G,ue,fe,me,De,Te,Q,T,Y,V,Ge,ke,je;function Xe(){O=new Ib(S),W=new Ab(S,O,e),O.init(W),Ge=new mA(S,O,W),K=new dA(S,O,W),se=new Ub(S),ve=new QT,oe=new pA(S,O,K,ve,W,Ge,se),Se=new Rb(E),_e=new Pb(E),Be=new XM(S,W),ke=new bb(S,O,Be,W),w=new Db(S,Be,se,ke),y=new Hb(S,w,Be,se),T=new Bb(S,W,oe),De=new wb(ve),G=new JT(E,Se,_e,O,W,ke,De),ue=new SA(E,ve),fe=new tA,me=new aA(O,W),Q=new Eb(E,Se,_e,K,y,h,l),Te=new hA(E,y,W),je=new yA(S,se,W,K),Y=new Tb(S,O,se,W),V=new Nb(S,O,se,W),se.programs=G.programs,E.capabilities=W,E.extensions=O,E.properties=ve,E.renderLists=fe,E.shadowMap=Te,E.state=K,E.info=se}Xe();const F=new xA(E,S);this.xr=F,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const L=O.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=O.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(L){L!==void 0&&(te=L,this.setSize(Z,ce,!1))},this.getSize=function(L){return L.set(Z,ce)},this.setSize=function(L,$,ae=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,ce=$,t.width=Math.floor(L*te),t.height=Math.floor($*te),ae===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(Z*te,ce*te).floor()},this.setDrawingBufferSize=function(L,$,ae){Z=L,ce=$,te=ae,t.width=Math.floor(L*ae),t.height=Math.floor($*ae),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(xe)},this.setViewport=function(L,$,ae,q){L.isVector4?xe.set(L.x,L.y,L.z,L.w):xe.set(L,$,ae,q),K.viewport(N.copy(xe).multiplyScalar(te).floor())},this.getScissor=function(L){return L.copy(z)},this.setScissor=function(L,$,ae,q){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,$,ae,q),K.scissor(de.copy(z).multiplyScalar(te).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(L){K.setScissorTest(ee=L)},this.setOpaqueSort=function(L){pe=L},this.setTransparentSort=function(L){ye=L},this.getClearColor=function(L){return L.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(L=!0,$=!0,ae=!0){let q=0;if(L){let le=!1;if(D!==null){const ze=D.texture.format;le=ze===x_||ze===v_||ze===__}if(le){const ze=D.texture.type,Ye=ze===sr||ze===er||ze===Bf||ze===Pr||ze===m_||ze===g_,qe=Q.getClearColor(),Qe=Q.getClearAlpha(),it=qe.r,Ze=qe.g,ot=qe.b;Ye?(m[0]=it,m[1]=Ze,m[2]=ot,m[3]=Qe,S.clearBufferuiv(S.COLOR,0,m)):(v[0]=it,v[1]=Ze,v[2]=ot,v[3]=Qe,S.clearBufferiv(S.COLOR,0,v))}else q|=S.COLOR_BUFFER_BIT}$&&(q|=S.DEPTH_BUFFER_BIT),ae&&(q|=S.STENCIL_BUFFER_BIT),S.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),fe.dispose(),me.dispose(),ve.dispose(),Se.dispose(),_e.dispose(),y.dispose(),ke.dispose(),je.dispose(),G.dispose(),F.dispose(),F.removeEventListener("sessionstart",Mt),F.removeEventListener("sessionend",bn),He&&(He.dispose(),He=null),Yt.stop()};function Ae(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const L=se.autoReset,$=Te.enabled,ae=Te.autoUpdate,q=Te.needsUpdate,le=Te.type;Xe(),se.autoReset=L,Te.enabled=$,Te.autoUpdate=ae,Te.needsUpdate=q,Te.type=le}function Ue(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ce(L){const $=L.target;$.removeEventListener("dispose",Ce),be($)}function be(L){We(L),ve.remove(L)}function We(L){const $=ve.get(L).programs;$!==void 0&&($.forEach(function(ae){G.releaseProgram(ae)}),L.isShaderMaterial&&G.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ae,q,le,ze){$===null&&($=Le);const Ye=le.isMesh&&le.matrixWorld.determinant()<0,qe=so(L,$,ae,q,le);K.setMaterial(q,Ye);let Qe=ae.index,it=1;if(q.wireframe===!0){if(Qe=w.getWireframeAttribute(ae),Qe===void 0)return;it=2}const Ze=ae.drawRange,ot=ae.attributes.position;let Tt=Ze.start*it,wt=(Ze.start+Ze.count)*it;ze!==null&&(Tt=Math.max(Tt,ze.start*it),wt=Math.min(wt,(ze.start+ze.count)*it)),Qe!==null?(Tt=Math.max(Tt,0),wt=Math.min(wt,Qe.count)):ot!=null&&(Tt=Math.max(Tt,0),wt=Math.min(wt,ot.count));const Ht=wt-Tt;if(Ht<0||Ht===1/0)return;ke.setup(le,q,qe,ae,Qe);let Tn,Rt=Y;if(Qe!==null&&(Tn=Be.get(Qe),Rt=V,Rt.setIndex(Tn)),le.isMesh)q.wireframe===!0?(K.setLineWidth(q.wireframeLinewidth*Ie()),Rt.setMode(S.LINES)):Rt.setMode(S.TRIANGLES);else if(le.isLine){let ut=q.linewidth;ut===void 0&&(ut=1),K.setLineWidth(ut*Ie()),le.isLineSegments?Rt.setMode(S.LINES):le.isLineLoop?Rt.setMode(S.LINE_LOOP):Rt.setMode(S.LINE_STRIP)}else le.isPoints?Rt.setMode(S.POINTS):le.isSprite&&Rt.setMode(S.TRIANGLES);if(le.isInstancedMesh)Rt.renderInstances(Tt,Ht,le.count);else if(ae.isInstancedBufferGeometry){const ut=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Jn=Math.min(ae.instanceCount,ut);Rt.renderInstances(Tt,Ht,Jn)}else Rt.render(Tt,Ht)},this.compile=function(L,$){function ae(q,le,ze){q.transparent===!0&&q.side===oi&&q.forceSinglePass===!1?(q.side=Mn,q.needsUpdate=!0,Hr(q,le,ze),q.side=Ni,q.needsUpdate=!0,Hr(q,le,ze),q.side=oi):Hr(q,le,ze)}p=me.get(L),p.init(),b.push(p),L.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(E._useLegacyLights),L.traverse(function(q){const le=q.material;if(le)if(Array.isArray(le))for(let ze=0;ze<le.length;ze++){const Ye=le[ze];ae(Ye,L,q)}else ae(le,L,q)}),b.pop(),p=null};let $e=null;function Ot(L){$e&&$e(L)}function Mt(){Yt.stop()}function bn(){Yt.start()}const Yt=new O_;Yt.setAnimationLoop(Ot),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(L){$e=L,F.setAnimationLoop(L),L===null?Yt.stop():Yt.start()},F.addEventListener("sessionstart",Mt),F.addEventListener("sessionend",bn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera($),$=F.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,$,D),p=me.get(L,b.length),p.init(),b.push(p),j.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Re.setFromProjectionMatrix(j),Ne=this.localClippingEnabled,Pe=De.init(this.clippingPlanes,Ne),x=fe.get(L,g.length),x.init(),g.push(x),to(L,$,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(pe,ye),this.info.render.frame++,Pe===!0&&De.beginShadows();const ae=p.state.shadowsArray;if(Te.render(ae,L,$),Pe===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(x,L),p.setupLights(E._useLegacyLights),$.isArrayCamera){const q=$.cameras;for(let le=0,ze=q.length;le<ze;le++){const Ye=q[le];no(x,L,Ye,Ye.viewport)}}else no(x,L,$);D!==null&&(oe.updateMultisampleRenderTarget(D),oe.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(E,L,$),ke.resetDefaultState(),ie=-1,R=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function to(L,$,ae,q){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ae=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Re.intersectsSprite(L)){q&&ge.setFromMatrixPosition(L.matrixWorld).applyMatrix4(j);const Ye=y.update(L),qe=L.material;qe.visible&&x.push(L,Ye,qe,ae,ge.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Re.intersectsObject(L))){const Ye=y.update(L),qe=L.material;if(q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ge.copy(L.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ge.copy(Ye.boundingSphere.center)),ge.applyMatrix4(L.matrixWorld).applyMatrix4(j)),Array.isArray(qe)){const Qe=Ye.groups;for(let it=0,Ze=Qe.length;it<Ze;it++){const ot=Qe[it],Tt=qe[ot.materialIndex];Tt&&Tt.visible&&x.push(L,Ye,Tt,ae,ge.z,ot)}}else qe.visible&&x.push(L,Ye,qe,ae,ge.z,null)}}const ze=L.children;for(let Ye=0,qe=ze.length;Ye<qe;Ye++)to(ze[Ye],$,ae,q)}function no(L,$,ae,q){const le=L.opaque,ze=L.transmissive,Ye=L.transparent;p.setupLightsView(ae),Pe===!0&&De.setGlobalState(E.clippingPlanes,ae),ze.length>0&&io(le,ze,$,ae),q&&K.viewport(N.copy(q)),le.length>0&&Fi(le,$,ae),ze.length>0&&Fi(ze,$,ae),Ye.length>0&&Fi(Ye,$,ae),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function io(L,$,ae,q){const le=W.isWebGL2;He===null&&(He=new Ur(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Ko:sr,minFilter:Nr,samples:le?4:0})),E.getDrawingBufferSize(ne),le?He.setSize(ne.x,ne.y):He.setSize(Al(ne.x),Al(ne.y));const ze=E.getRenderTarget();E.setRenderTarget(He),E.getClearColor(Ee),H=E.getClearAlpha(),H<1&&E.setClearColor(16777215,.5),E.clear();const Ye=E.toneMapping;E.toneMapping=rr,Fi(L,ae,q),oe.updateMultisampleRenderTarget(He),oe.updateRenderTargetMipmap(He);let qe=!1;for(let Qe=0,it=$.length;Qe<it;Qe++){const Ze=$[Qe],ot=Ze.object,Tt=Ze.geometry,wt=Ze.material,Ht=Ze.group;if(wt.side===oi&&ot.layers.test(q.layers)){const Tn=wt.side;wt.side=Mn,wt.needsUpdate=!0,ro(ot,ae,q,Tt,wt,Ht),wt.side=Tn,wt.needsUpdate=!0,qe=!0}}qe===!0&&(oe.updateMultisampleRenderTarget(He),oe.updateRenderTargetMipmap(He)),E.setRenderTarget(ze),E.setClearColor(Ee,H),E.toneMapping=Ye}function Fi(L,$,ae){const q=$.isScene===!0?$.overrideMaterial:null;for(let le=0,ze=L.length;le<ze;le++){const Ye=L[le],qe=Ye.object,Qe=Ye.geometry,it=q===null?Ye.material:q,Ze=Ye.group;qe.layers.test(ae.layers)&&ro(qe,$,ae,Qe,it,Ze)}}function ro(L,$,ae,q,le,ze){L.onBeforeRender(E,$,ae,q,le,ze),L.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(E,$,ae,q,L,ze),le.transparent===!0&&le.side===oi&&le.forceSinglePass===!1?(le.side=Mn,le.needsUpdate=!0,E.renderBufferDirect(ae,$,q,le,L,ze),le.side=Ni,le.needsUpdate=!0,E.renderBufferDirect(ae,$,q,le,L,ze),le.side=oi):E.renderBufferDirect(ae,$,q,le,L,ze),L.onAfterRender(E,$,ae,q,le,ze)}function Hr(L,$,ae){$.isScene!==!0&&($=Le);const q=ve.get(L),le=p.state.lights,ze=p.state.shadowsArray,Ye=le.state.version,qe=G.getParameters(L,le.state,ze,$,ae),Qe=G.getProgramCacheKey(qe);let it=q.programs;q.environment=L.isMeshStandardMaterial?$.environment:null,q.fog=$.fog,q.envMap=(L.isMeshStandardMaterial?_e:Se).get(L.envMap||q.environment),it===void 0&&(L.addEventListener("dispose",Ce),it=new Map,q.programs=it);let Ze=it.get(Qe);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===Ye)return na(L,qe),Ze}else qe.uniforms=G.getUniforms(L),L.onBuild(ae,qe,E),L.onBeforeCompile(qe,E),Ze=G.acquireProgram(qe,Qe),it.set(Qe,Ze),q.uniforms=qe.uniforms;const ot=q.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ot.clippingPlanes=De.uniform),na(L,qe),q.needsLights=kr(L),q.lightsStateVersion=Ye,q.needsLights&&(ot.ambientLightColor.value=le.state.ambient,ot.lightProbe.value=le.state.probe,ot.directionalLights.value=le.state.directional,ot.directionalLightShadows.value=le.state.directionalShadow,ot.spotLights.value=le.state.spot,ot.spotLightShadows.value=le.state.spotShadow,ot.rectAreaLights.value=le.state.rectArea,ot.ltc_1.value=le.state.rectAreaLTC1,ot.ltc_2.value=le.state.rectAreaLTC2,ot.pointLights.value=le.state.point,ot.pointLightShadows.value=le.state.pointShadow,ot.hemisphereLights.value=le.state.hemi,ot.directionalShadowMap.value=le.state.directionalShadowMap,ot.directionalShadowMatrix.value=le.state.directionalShadowMatrix,ot.spotShadowMap.value=le.state.spotShadowMap,ot.spotLightMatrix.value=le.state.spotLightMatrix,ot.spotLightMap.value=le.state.spotLightMap,ot.pointShadowMap.value=le.state.pointShadowMap,ot.pointShadowMatrix.value=le.state.pointShadowMatrix);const Tt=Ze.getUniforms(),wt=dl.seqWithValue(Tt.seq,ot);return q.currentProgram=Ze,q.uniformsList=wt,Ze}function na(L,$){const ae=ve.get(L);ae.outputColorSpace=$.outputColorSpace,ae.instancing=$.instancing,ae.instancingColor=$.instancingColor,ae.skinning=$.skinning,ae.morphTargets=$.morphTargets,ae.morphNormals=$.morphNormals,ae.morphColors=$.morphColors,ae.morphTargetsCount=$.morphTargetsCount,ae.numClippingPlanes=$.numClippingPlanes,ae.numIntersection=$.numClipIntersection,ae.vertexAlphas=$.vertexAlphas,ae.vertexTangents=$.vertexTangents,ae.toneMapping=$.toneMapping}function so(L,$,ae,q,le){$.isScene!==!0&&($=Le),oe.resetTextureUnits();const ze=$.fog,Ye=q.isMeshStandardMaterial?$.environment:null,qe=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:on,Qe=(q.isMeshStandardMaterial?_e:Se).get(q.envMap||Ye),it=q.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ze=!!ae.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ot=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let Ht=rr;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ht=E.toneMapping);const Tn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Rt=Tn!==void 0?Tn.length:0,ut=ve.get(q),Jn=p.state.lights;if(Pe===!0&&(Ne===!0||L!==R)){const an=L===R&&q.id===ie;De.setState(q,L,an)}let Ct=!1;q.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Jn.state.version||ut.outputColorSpace!==qe||le.isInstancedMesh&&ut.instancing===!1||!le.isInstancedMesh&&ut.instancing===!0||le.isSkinnedMesh&&ut.skinning===!1||!le.isSkinnedMesh&&ut.skinning===!0||le.isInstancedMesh&&ut.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&ut.instancingColor===!1&&le.instanceColor!==null||ut.envMap!==Qe||q.fog===!0&&ut.fog!==ze||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==De.numPlanes||ut.numIntersection!==De.numIntersection)||ut.vertexAlphas!==it||ut.vertexTangents!==Ze||ut.morphTargets!==ot||ut.morphNormals!==Tt||ut.morphColors!==wt||ut.toneMapping!==Ht||W.isWebGL2===!0&&ut.morphTargetsCount!==Rt)&&(Ct=!0):(Ct=!0,ut.__version=q.version);let An=ut.currentProgram;Ct===!0&&(An=Hr(q,$,le));let zr=!1,Bi=!1,Vr=!1;const Gt=An.getUniforms(),Qn=ut.uniforms;if(K.useProgram(An.program)&&(zr=!0,Bi=!0,Vr=!0),q.id!==ie&&(ie=q.id,Bi=!0),zr||R!==L){Gt.setValue(S,"projectionMatrix",L.projectionMatrix),Gt.setValue(S,"viewMatrix",L.matrixWorldInverse);const an=Gt.map.cameraPosition;an!==void 0&&an.setValue(S,ge.setFromMatrixPosition(L.matrixWorld)),W.logarithmicDepthBuffer&&Gt.setValue(S,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Gt.setValue(S,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Bi=!0,Vr=!0)}if(le.isSkinnedMesh){Gt.setOptional(S,le,"bindMatrix"),Gt.setOptional(S,le,"bindMatrixInverse");const an=le.skeleton;an&&(W.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Gt.setValue(S,"boneTexture",an.boneTexture,oe),Gt.setValue(S,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=ae.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&W.isWebGL2===!0)&&T.update(le,ae,An),(Bi||ut.receiveShadow!==le.receiveShadow)&&(ut.receiveShadow=le.receiveShadow,Gt.setValue(S,"receiveShadow",le.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Qn.envMap.value=Qe,Qn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Bi&&(Gt.setValue(S,"toneMappingExposure",E.toneMappingExposure),ut.needsLights&&pi(Qn,Vr),ze&&q.fog===!0&&ue.refreshFogUniforms(Qn,ze),ue.refreshMaterialUniforms(Qn,q,te,ce,He),dl.upload(S,ut.uniformsList,Qn,oe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(dl.upload(S,ut.uniformsList,Qn,oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Gt.setValue(S,"center",le.center),Gt.setValue(S,"modelViewMatrix",le.modelViewMatrix),Gt.setValue(S,"normalMatrix",le.normalMatrix),Gt.setValue(S,"modelMatrix",le.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const an=q.uniformsGroups;for(let Hi=0,cr=an.length;Hi<cr;Hi++)if(W.isWebGL2){const oo=an[Hi];je.update(oo,An),je.bind(oo,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function pi(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function kr(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,$,ae){ve.get(L.texture).__webglTexture=$,ve.get(L.depthTexture).__webglTexture=ae;const q=ve.get(L);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ae===void 0,q.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){const ae=ve.get(L);ae.__webglFramebuffer=$,ae.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,ae=0){D=L,C=$,B=ae;let q=!0,le=null,ze=!1,Ye=!1;if(L){const Qe=ve.get(L);Qe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(S.FRAMEBUFFER,null),q=!1):Qe.__webglFramebuffer===void 0?oe.setupRenderTarget(L):Qe.__hasExternalTextures&&oe.rebindTextures(L,ve.get(L.texture).__webglTexture,ve.get(L.depthTexture).__webglTexture);const it=L.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ye=!0);const Ze=ve.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?le=Ze[$][ae]:le=Ze[$],ze=!0):W.isWebGL2&&L.samples>0&&oe.useMultisampledRTT(L)===!1?le=ve.get(L).__webglMultisampledFramebuffer:Array.isArray(Ze)?le=Ze[ae]:le=Ze,N.copy(L.viewport),de.copy(L.scissor),Me=L.scissorTest}else N.copy(xe).multiplyScalar(te).floor(),de.copy(z).multiplyScalar(te).floor(),Me=ee;if(K.bindFramebuffer(S.FRAMEBUFFER,le)&&W.drawBuffers&&q&&K.drawBuffers(L,le),K.viewport(N),K.scissor(de),K.setScissorTest(Me),ze){const Qe=ve.get(L.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,Qe.__webglTexture,ae)}else if(Ye){const Qe=ve.get(L.texture),it=$||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Qe.__webglTexture,ae||0,it)}ie=-1},this.readRenderTargetPixels=function(L,$,ae,q,le,ze,Ye){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&(qe=qe[Ye]),qe){K.bindFramebuffer(S.FRAMEBUFFER,qe);try{const Qe=L.texture,it=Qe.format,Ze=Qe.type;if(it!==On&&Ge.convert(it)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=Ze===Ko&&(O.has("EXT_color_buffer_half_float")||W.isWebGL2&&O.has("EXT_color_buffer_float"));if(Ze!==sr&&Ge.convert(Ze)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Ri&&(W.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-q&&ae>=0&&ae<=L.height-le&&S.readPixels($,ae,q,le,Ge.convert(it),Ge.convert(Ze),ze)}finally{const Qe=D!==null?ve.get(D).__webglFramebuffer:null;K.bindFramebuffer(S.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(L,$,ae=0){const q=Math.pow(2,-ae),le=Math.floor($.image.width*q),ze=Math.floor($.image.height*q);oe.setTexture2D($,0),S.copyTexSubImage2D(S.TEXTURE_2D,ae,0,0,L.x,L.y,le,ze),K.unbindTexture()},this.copyTextureToTexture=function(L,$,ae,q=0){const le=$.image.width,ze=$.image.height,Ye=Ge.convert(ae.format),qe=Ge.convert(ae.type);oe.setTexture2D(ae,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ae.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ae.unpackAlignment),$.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,q,L.x,L.y,le,ze,Ye,qe,$.image.data):$.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,q,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Ye,$.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,q,L.x,L.y,Ye,qe,$.image),q===0&&ae.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(L,$,ae,q,le=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=L.max.x-L.min.x+1,Ye=L.max.y-L.min.y+1,qe=L.max.z-L.min.z+1,Qe=Ge.convert(q.format),it=Ge.convert(q.type);let Ze;if(q.isData3DTexture)oe.setTexture3D(q,0),Ze=S.TEXTURE_3D;else if(q.isDataArrayTexture)oe.setTexture2DArray(q,0),Ze=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,q.unpackAlignment);const ot=S.getParameter(S.UNPACK_ROW_LENGTH),Tt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),wt=S.getParameter(S.UNPACK_SKIP_PIXELS),Ht=S.getParameter(S.UNPACK_SKIP_ROWS),Tn=S.getParameter(S.UNPACK_SKIP_IMAGES),Rt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,Rt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Rt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,L.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,L.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,L.min.z),ae.isDataTexture||ae.isData3DTexture?S.texSubImage3D(Ze,le,$.x,$.y,$.z,ze,Ye,qe,Qe,it,Rt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(Ze,le,$.x,$.y,$.z,ze,Ye,qe,Qe,Rt.data)):S.texSubImage3D(Ze,le,$.x,$.y,$.z,ze,Ye,qe,Qe,it,Rt),S.pixelStorei(S.UNPACK_ROW_LENGTH,ot),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Tt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,wt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ht),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Tn),le===0&&q.generateMipmaps&&S.generateMipmap(Ze),K.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?oe.setTextureCube(L,0):L.isData3DTexture?oe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?oe.setTexture2DArray(L,0):oe.setTexture2D(L,0),K.unbindTexture()},this.resetState=function(){C=0,B=0,D=null,K.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Vl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Dr:y_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dr?kt:on}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MA extends z_{}MA.prototype.isWebGL1Renderer=!0;let EA=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class bA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new X;class Xf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mm=new X,Em=new At,bm=new At,TA=new X,Tm=new ht,vs=new X,Cu=new fi,Am=new ht,Lu=new Qo;class AA extends Bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)vs.fromBufferAttribute(t,i),this.applyBoneTransform(i,vs),this.boundingBox.expandByPoint(vs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)vs.fromBufferAttribute(t,i),this.applyBoneTransform(i,vs),this.boundingSphere.expandByPoint(vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cu.copy(this.boundingSphere),Cu.applyMatrix4(r),e.ray.intersectsSphere(Cu)!==!1&&(Am.copy(r).invert(),Lu.copy(e.ray).applyMatrix4(Am),!(this.boundingBox!==null&&Lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Em.fromBufferAttribute(r.attributes.skinIndex,e),bm.fromBufferAttribute(r.attributes.skinWeight,e),Mm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=bm.getComponent(s);if(o!==0){const a=Em.getComponent(s);Tm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(TA.copy(Mm).applyMatrix4(Tm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class V_ extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wA extends sn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Qt,u=Qt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wm=new ht,RA=new ht;class jf{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ht;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:RA;wm.multiplyMatrices(a,t[s]),wm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new jf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=E_(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wA(t,e,e,On,Ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new V_),this.bones.push(o),this.boneInverses.push(new ht().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Rm extends vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new ht,Cm=new ht,el=[],Lm=new Oi,CA=new ht,wo=new Bn,Ro=new fi;class LA extends Bn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,CA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),Lm.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Lm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xs),Ro.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xs),Cm.multiplyMatrices(i,xs),wo.matrixWorld=Cm,wo.raycast(e,el);for(let o=0,a=el.length;o<a;o++){const l=el[o];l.instanceId=s,l.object=this,t.push(l)}el.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pm=new X,Im=new X,Dm=new ht,Pu=new Qo,tl=new fi;class qf extends Bt{constructor(e=new hi,t=new G_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Pm.fromBufferAttribute(t,r-1),Im.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pm.distanceTo(Im);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Dm.copy(r).invert(),Pu.copy(e.ray).applyMatrix4(Dm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new X,u=new X,d=new X,h=new X,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const g=Math.max(0,o.start),b=Math.min(v.count,o.start+o.count);for(let E=g,A=b-1;E<A;E+=m){const C=v.getX(E),B=v.getX(E+1);if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,B),Pu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const ie=e.ray.origin.distanceTo(h);ie<e.near||ie>e.far||t.push({distance:ie,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let E=g,A=b-1;E<A;E+=m){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),Pu.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Nm=new X,Um=new X;class PA extends qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Nm.fromBufferAttribute(t,r),Um.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nm.distanceTo(Um);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IA extends qf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class W_ extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new ht,cf=new Qo,nl=new fi,il=new X;class DA extends Bt{constructor(e=new hi,t=new W_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;Om.copy(r).invert(),cf.copy(e.ray).applyMatrix4(Om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const p=c.getX(v);il.fromBufferAttribute(d,p),Fm(il,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m;v<x;v++)il.fromBufferAttribute(d,v),Fm(il,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fm(n,e,t,i,r,s,o){const a=cf.distanceSqToPoint(n);if(a<t){const l=new X;cf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Yf extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=M_,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ar extends Yf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function rl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function NA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function UA(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Bm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function X_(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class ta{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OA extends ta{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dp,endingEnd:Dp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Np:s=e,a=2*t-i;break;case Up:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Np:o=e,l=2*i-t;break;case Up:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,v=(i-t)/(r-t),x=v*v,p=x*v,g=-h*p+2*h*x-h*v,b=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*v+1,E=(-1-m)*p+(1.5+m)*x+.5*v,A=m*p-m*x;for(let C=0;C!==a;++C)s[C]=g*o[u+C]+b*o[c+C]+E*o[l+C]+A*o[d+C];return s}}class FA extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class BA extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new BA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new FA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $o:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case ou:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&NA(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ou,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,m=d+i;for(let v=0;v!==i;++v){const x=t[d+v];if(x!==t[h+v]||x!==t[m+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Vs;class Js extends di{}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=$o;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class j_ extends di{}j_.prototype.ValueTypeName="color";class Xs extends di{}Xs.prototype.ValueTypeName="number";class HA extends ta{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ui.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fr extends di{InterpolantFactoryMethodLinear(e){return new HA(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Vs;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends di{}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=$o;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends di{}js.prototype.ValueTypeName="vector";class kA{constructor(e,t=-1,i,r=qy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(VA(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(di.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=UA(l);l=Bm(l,1,u),c=Bm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,m,v,x){if(m.length!==0){const p=[],g=[];X_(m,p,g,v),p.length!==0&&x.push(new d(h,p,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let x=0;x<h[v].morphTargets.length;x++)m[h[v].morphTargets[x]]=-1;for(const x in m){const p=[],g=[];for(let b=0;b!==h[v].morphTargets.length;++b){const E=h[v];p.push(E.time),g.push(E.morphTarget===x?1:0)}r.push(new Xs(".morphTargetInfluence["+x+"]",p,g))}l=m.length*o}else{const m=".bones["+t[d].name+"]";i(js,m+".position",h,"pos",r),i(Fr,m+".quaternion",h,"rot",r),i(js,m+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return j_;case"quaternion":return Fr;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function VA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zA(n.type);if(n.times===void 0){const t=[],i=[];X_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const qs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class GA{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const WA=new GA;class eo{constructor(e){this.manager=e!==void 0?e:WA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class XA extends Error{constructor(e,t){super(e),this.response=t}}class q_ extends eo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:r});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,v=m!==0;let x=0;const p=new ReadableStream({start(g){b();function b(){d.read().then(({done:E,value:A})=>{if(E)g.close();else{x+=A.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let B=0,D=u.length;B<D;B++){const ie=u[B];ie.onProgress&&ie.onProgress(C)}g.enqueue(A),b()}})}}});return new Response(p)}else throw new XA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(v=>m.decode(v))}}}).then(c=>{qs.add(e,c);const u=bi[e];delete bi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jA extends eo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Zo("img");function l(){u(),qs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class qA extends eo{constructor(e){super(e)}load(e,t,i,r){const s=new sn,o=new jA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Xl extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Iu=new ht,Hm=new X,km=new X;class Kf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(km),t.updateMatrixWorld(),Iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YA extends Kf{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class KA extends Xl{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new YA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zm=new ht,Co=new X,Du=new X;class $A extends Kf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),i.position.copy(Co),Du.copy(i.position),Du.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Du),i.updateMatrixWorld(),r.makeTranslation(-Co.x,-Co.y,-Co.z),zm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}}class ZA extends Xl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $A}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class JA extends Kf{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y_ extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new JA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QA extends Xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uf{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ew extends eo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){qs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const $f="\\[\\]\\.:\\/",tw=new RegExp("["+$f+"]","g"),Zf="[^"+$f+"]",nw="[^"+$f.replace("\\.","")+"]",iw=/((?:WC+[\/:])*)/.source.replace("WC",Zf),rw=/(WCOD+)?/.source.replace("WCOD",nw),sw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zf),ow=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zf),aw=new RegExp("^"+iw+rw+sw+ow+"$"),lw=["material","materials","bones","map"];class cw{constructor(e,t,i){const r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class yt{constructor(e,t,i){this.path=t,this.parsedPath=i||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,i):new yt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tw,"")}static parseTrackName(e){const t=aw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);lw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=cw;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);function Gm(n,e){if(e===Yy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===rf||e===S_){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===rf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class uw extends eo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mw(t)}),this.register(function(t){return new Ew(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new ww(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=uf.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new q_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===K_){try{o[mt.KHR_BINARY_GLTF]=new Rw(e)}catch(d){r&&r(d);return}s=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case mt.KHR_MATERIALS_UNLIT:o[d]=new dw;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Cw(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[d]=new Lw;break;case mt.KHR_MESH_QUANTIZATION:o[d]=new Pw;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function fw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hw{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ct(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Y_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ZA(u),c.distance=d;break;case"spot":c=new KA(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class dw{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ar}extendParams(e,t,i){const r=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,kt))}return Promise.all(r)}}class pw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(a,a)}return Promise.all(s)}}class gw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class xw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(a[0],a[1],a[2],on),Promise.all(s)}}class Sw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class yw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ew{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class bw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Aw{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(m),u,d,h,r.mode,r.filter),m})})}else return null}}class ww{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,m=[];for(const v of d){const x=new ht,p=new X,g=new ui,b=new X(1,1,1),E=new LA(v.geometry,v.material,h);for(let A=0;A<h;A++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,A),l.SCALE&&b.fromBufferAttribute(l.SCALE,A),E.setMatrixAt(A,x.compose(p,g,b));for(const A in l)A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&v.geometry.setAttribute(A,l[A]);Bt.prototype.copy.call(E,v),this.parser.assignFinalMaterial(E),m.push(E)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const K_="glTF",Lo=12,Wm={JSON:1313821514,BIN:5130562};class Rw{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==K_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Lo,s=new DataView(e,Lo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Wm.JSON){const c=new Uint8Array(e,Lo+o,a);this.content=i.decode(c)}else if(l===Wm.BIN){const c=Lo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=ff[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=ff[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],m=Ls[h.componentType];c[d]=m.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d){r.decodeDracoFile(u,function(h){for(const m in h.attributes){const v=h.attributes[m],x=l[m];x!==void 0&&(v.normalized=x)}d(h)},a,c)})})}}class Lw{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pw{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class $_ extends ta{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,m=h*d,v=e*c,x=v-c,p=-2*m+3*h,g=m-h,b=1-p,E=g-h+d;for(let A=0;A!==a;A++){const C=o[x+A+a],B=o[x+A+l]*u,D=o[v+A+a],ie=o[v+A]*u;s[A]=b*C+E*B+p*D+g*ie}return s}}const Iw=new ui;class Dw extends $_{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return Iw.fromArray(s).normalize().toArray(s),s}}const Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xm={9728:Qt,9729:yn,9984:nf,9985:d_,9986:hl,9987:Nr},jm={33071:Un,33648:yl,10497:ks},Nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ff={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nw={CUBICSPLINE:void 0,LINEAR:Vs,STEP:$o},Uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uw(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Yf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),n.DefaultMaterial}function yr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Qi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ow(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function Fw(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bw(n){let e;const t=n.extensions&&n.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ou(t.attributes):e=n.indices+":"+Ou(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ou(n.targets[i]);return e}function Ou(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hw(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const kw=new ht;class zw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new qA(this.options.manager):this.textureLoader=new ew(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new q_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return yr(s,a,r),Qi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(uf.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Nu[r.type],a=Ls[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new vn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nu[r.type],c=Ls[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let x,p;if(m&&m!==d){const g=Math.floor(h/m),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let E=t.cache.get(b);E||(x=new c(a,g*m,r.count*m/u),E=new bA(x,m/u),t.cache.add(b,E)),p=new Xf(E,l,h%m/u,v)}else a===null?x=new c(r.count*l):x=new c(a,h,r.count*l),p=new vn(x,l,v);if(r.sparse!==void 0){const g=Nu.SCALAR,b=Ls[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,C=new b(o[1],E,r.sparse.count*g),B=new c(o[2],A,r.sparse.count*l);a!==null&&(p=new vn(p.array.slice(),p.itemSize,p.normalized));for(let D=0,ie=C.length;D<ie;D++){const R=C[D];if(p.setX(R,B[D*l]),l>=2&&p.setY(R,B[D*l+1]),l>=3&&p.setZ(R,B[D*l+2]),l>=4&&p.setW(R,B[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Xm[h.magFilter]||yn,u.minFilter=Xm[h.minFilter]||Nr,u.wrapS=jm[h.wrapS]||ks,u.wrapT=jm[h.wrapT]||ks,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,m){let v=h;t.isImageBitmapLoader===!0&&(v=function(x){const p=new sn(x);p.needsUpdate=!0,h(p)}),t.load(uf.resolveURL(d,s.path),v,void 0,m)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||Hw(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new W_,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new G_,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Yf}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const d=r[mt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new ct(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],on),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,kt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=oi);const u=s.alphaMode||Uu.OPAQUE;if(u===Uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Uu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ar&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Ar&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ar){const d=s.emissiveFactor;a.emissive=new ct().setRGB(d[0],d[1],d[2],on)}return s.emissiveTexture!==void 0&&o!==Ar&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,kt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Qi(d,s),t.associations.set(d,{materials:e}),s.extensions&&yr(r,d,s),d})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return qm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Bw(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=qm(new hi,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Uw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,v=u.length;m<v;m++){const x=u[m],p=o[m];let g;const b=c[m];if(p.mode===Dn.TRIANGLES||p.mode===Dn.TRIANGLE_STRIP||p.mode===Dn.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new AA(x,b):new Bn(x,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Dn.TRIANGLE_STRIP?g.geometry=Gm(g.geometry,S_):p.mode===Dn.TRIANGLE_FAN&&(g.geometry=Gm(g.geometry,rf));else if(p.mode===Dn.LINES)g=new PA(x,b);else if(p.mode===Dn.LINE_STRIP)g=new qf(x,b);else if(p.mode===Dn.LINE_LOOP)g=new IA(x,b);else if(p.mode===Dn.POINTS)g=new DA(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Fw(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Qi(g,s),p.extensions&&yr(r,g,p),t.assignFinalMaterial(g),d.push(g)}for(let m=0,v=d.length;m<v;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return s.extensions&&yr(r,d[0],s),d[0];const h=new wr;s.extensions&&yr(r,h,s),t.associations.set(h,{meshes:e});for(let m=0,v=d.length;m<v;m++)h.add(d[m]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(b_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Gf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Qi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new ht;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jf(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const m=r.channels[d],v=r.samplers[m.sampler],x=m.target,p=x.node,g=r.parameters!==void 0?r.parameters[v.input]:v.input,b=r.parameters!==void 0?r.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(v),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],m=d[1],v=d[2],x=d[3],p=d[4],g=[];for(let b=0,E=h.length;b<E;b++){const A=h[b],C=m[b],B=v[b],D=x[b],ie=p[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const R=i._createAnimationTracks(A,C,B,D,ie);if(R)for(let N=0;N<R.length;N++)g.push(R[N])}return new kA(s,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(h,kw)});for(let m=0,v=d.length;m<v;m++)u.add(d[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new V_:c.length>1?u=new wr:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Qi(u,s),s.extensions&&yr(i,u,s),s.matrix!==void 0){const d=new ht;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new wr;i.name&&(s.name=r.createUniqueName(i.name)),Qi(s,i),i.extensions&&yr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,m]of r.associations)(h instanceof li||h instanceof sn)&&d.set(h,m);return u.traverse(h=>{const m=r.associations.get(h);m!=null&&d.set(h,m)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ki[s.path]===Ki.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ki[s.path]){case Ki.weights:c=Xs;break;case Ki.rotation:c=Fr;break;case Ki.position:case Ki.scale:c=js;break;default:switch(i.itemSize){case 1:c=Xs;break;case 2:case 3:default:c=js;break}break}const u=r.interpolation!==void 0?Nw[r.interpolation]:Vs,d=this._getArrayFromAccessor(i);for(let h=0,m=l.length;h<m;h++){const v=new c(l[h]+"."+Ki[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=hf(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Fr?Dw:$_;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vw(n,e,t){const i=e.attributes,r=new Oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),a.normalized){const u=hf(Ls[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new X,l=new X;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],m=h.min,v=h.max;if(m!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(v[2]))),h.normalized){const x=hf(Ls[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new fi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function qm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ff[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return xt.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Qi(n,e),Vw(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ow(n,e.targets,t):n})}const Ym={type:"change"},Fu={type:"start"},Km={type:"end"},sl=new Qo,$m=new Ji,Gw=Math.cos(70*b_.DEG2RAD);class Ww extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",y),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ym),i.update(),s=r.NONE},this.update=function(){const T=new X,Y=new ui().setFromUnitVectors(e.up,new X(0,1,0)),V=Y.clone().invert(),Ge=new X,ke=new ui,je=new X,Xe=2*Math.PI;return function(Ae=null){const we=i.object.position;T.copy(we).sub(i.target),T.applyQuaternion(Y),a.setFromVector3(T),i.autoRotate&&s===r.NONE&&de(R(Ae)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ue=i.minAzimuthAngle,Ce=i.maxAzimuthAngle;isFinite(Ue)&&isFinite(Ce)&&(Ue<-Math.PI?Ue+=Xe:Ue>Math.PI&&(Ue-=Xe),Ce<-Math.PI?Ce+=Xe:Ce>Math.PI&&(Ce-=Xe),Ue<=Ce?a.theta=Math.max(Ue,Math.min(Ce,a.theta)):a.theta=a.theta>(Ue+Ce)/2?Math.max(Ue,a.theta):Math.min(Ce,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&B||i.object.isOrthographicCamera?a.radius=ye(a.radius):a.radius=ye(a.radius*c),T.setFromSpherical(a),T.applyQuaternion(V),we.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let be=!1;if(i.zoomToCursor&&B){let We=null;if(i.object.isPerspectiveCamera){const $e=T.length();We=ye($e*c);const Ot=$e-We;i.object.position.addScaledVector(A,Ot),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new X(C.x,C.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),be=!0;const Ot=new X(C.x,C.y,0);Ot.unproject(i.object),i.object.position.sub(Ot).add($e),i.object.updateMatrixWorld(),We=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;We!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(We).add(i.object.position):(sl.origin.copy(i.object.position),sl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(sl.direction))<Gw?e.lookAt(i.target):($m.setFromNormalAndCoplanarPoint(i.object.up,i.target),sl.intersectPlane($m,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),be=!0);return c=1,B=!1,be||Ge.distanceToSquared(i.object.position)>o||8*(1-ke.dot(i.object.quaternion))>o||je.distanceToSquared(i.target)>0?(i.dispatchEvent(Ym),Ge.copy(i.object.position),ke.copy(i.object.quaternion),je.copy(i.target),be=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",fe),i.domElement.removeEventListener("pointerdown",ve),i.domElement.removeEventListener("pointercancel",Se),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",oe),i.domElement.removeEventListener("pointerup",Se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Vm,l=new Vm;let c=1;const u=new X,d=new rt,h=new rt,m=new rt,v=new rt,x=new rt,p=new rt,g=new rt,b=new rt,E=new rt,A=new X,C=new rt;let B=!1;const D=[],ie={};function R(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function N(){return Math.pow(.95,i.zoomSpeed)}function de(T){l.theta-=T}function Me(T){l.phi-=T}const Ee=function(){const T=new X;return function(V,Ge){T.setFromMatrixColumn(Ge,0),T.multiplyScalar(-V),u.add(T)}}(),H=function(){const T=new X;return function(V,Ge){i.screenSpacePanning===!0?T.setFromMatrixColumn(Ge,1):(T.setFromMatrixColumn(Ge,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(V),u.add(T)}}(),Z=function(){const T=new X;return function(V,Ge){const ke=i.domElement;if(i.object.isPerspectiveCamera){const je=i.object.position;T.copy(je).sub(i.target);let Xe=T.length();Xe*=Math.tan(i.object.fov/2*Math.PI/180),Ee(2*V*Xe/ke.clientHeight,i.object.matrix),H(2*Ge*Xe/ke.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Ee(V*(i.object.right-i.object.left)/i.object.zoom/ke.clientWidth,i.object.matrix),H(Ge*(i.object.top-i.object.bottom)/i.object.zoom/ke.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function pe(T){if(!i.zoomToCursor)return;B=!0;const Y=i.domElement.getBoundingClientRect(),V=T.clientX-Y.left,Ge=T.clientY-Y.top,ke=Y.width,je=Y.height;C.x=V/ke*2-1,C.y=-(Ge/je)*2+1,A.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ye(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function xe(T){d.set(T.clientX,T.clientY)}function z(T){pe(T),g.set(T.clientX,T.clientY)}function ee(T){v.set(T.clientX,T.clientY)}function Re(T){h.set(T.clientX,T.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;de(2*Math.PI*m.x/Y.clientHeight),Me(2*Math.PI*m.y/Y.clientHeight),d.copy(h),i.update()}function Pe(T){b.set(T.clientX,T.clientY),E.subVectors(b,g),E.y>0?ce(N()):E.y<0&&te(N()),g.copy(b),i.update()}function Ne(T){x.set(T.clientX,T.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(x),i.update()}function He(T){pe(T),T.deltaY<0?te(N()):T.deltaY>0&&ce(N()),i.update()}function j(T){let Y=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?Me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?Me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?de(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?de(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),Y=!0;break}Y&&(T.preventDefault(),i.update())}function ne(){if(D.length===1)d.set(D[0].pageX,D[0].pageY);else{const T=.5*(D[0].pageX+D[1].pageX),Y=.5*(D[0].pageY+D[1].pageY);d.set(T,Y)}}function ge(){if(D.length===1)v.set(D[0].pageX,D[0].pageY);else{const T=.5*(D[0].pageX+D[1].pageX),Y=.5*(D[0].pageY+D[1].pageY);v.set(T,Y)}}function Le(){const T=D[0].pageX-D[1].pageX,Y=D[0].pageY-D[1].pageY,V=Math.sqrt(T*T+Y*Y);g.set(0,V)}function Ie(){i.enableZoom&&Le(),i.enablePan&&ge()}function S(){i.enableZoom&&Le(),i.enableRotate&&ne()}function I(T){if(D.length==1)h.set(T.pageX,T.pageY);else{const V=Q(T),Ge=.5*(T.pageX+V.x),ke=.5*(T.pageY+V.y);h.set(Ge,ke)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;de(2*Math.PI*m.x/Y.clientHeight),Me(2*Math.PI*m.y/Y.clientHeight),d.copy(h)}function O(T){if(D.length===1)x.set(T.pageX,T.pageY);else{const Y=Q(T),V=.5*(T.pageX+Y.x),Ge=.5*(T.pageY+Y.y);x.set(V,Ge)}p.subVectors(x,v).multiplyScalar(i.panSpeed),Z(p.x,p.y),v.copy(x)}function W(T){const Y=Q(T),V=T.pageX-Y.x,Ge=T.pageY-Y.y,ke=Math.sqrt(V*V+Ge*Ge);b.set(0,ke),E.set(0,Math.pow(b.y/g.y,i.zoomSpeed)),ce(E.y),g.copy(b)}function K(T){i.enableZoom&&W(T),i.enablePan&&O(T)}function se(T){i.enableZoom&&W(T),i.enableRotate&&I(T)}function ve(T){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",oe),i.domElement.addEventListener("pointerup",Se)),me(T),T.pointerType==="touch"?G(T):_e(T))}function oe(T){i.enabled!==!1&&(T.pointerType==="touch"?ue(T):Be(T))}function Se(T){De(T),D.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",oe),i.domElement.removeEventListener("pointerup",Se)),i.dispatchEvent(Km),s=r.NONE}function _e(T){let Y;switch(T.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case es.DOLLY:if(i.enableZoom===!1)return;z(T),s=r.DOLLY;break;case es.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;ee(T),s=r.PAN}else{if(i.enableRotate===!1)return;xe(T),s=r.ROTATE}break;case es.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;xe(T),s=r.ROTATE}else{if(i.enablePan===!1)return;ee(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fu)}function Be(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Re(T);break;case r.DOLLY:if(i.enableZoom===!1)return;Pe(T);break;case r.PAN:if(i.enablePan===!1)return;Ne(T);break}}function w(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Fu),He(T),i.dispatchEvent(Km))}function y(T){i.enabled===!1||i.enablePan===!1||j(T)}function G(T){switch(Te(T),D.length){case 1:switch(i.touches.ONE){case ts.ROTATE:if(i.enableRotate===!1)return;ne(),s=r.TOUCH_ROTATE;break;case ts.PAN:if(i.enablePan===!1)return;ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ts.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(),s=r.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fu)}function ue(T){switch(Te(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;I(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;O(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(T),i.update();break;default:s=r.NONE}}function fe(T){i.enabled!==!1&&T.preventDefault()}function me(T){D.push(T)}function De(T){delete ie[T.pointerId];for(let Y=0;Y<D.length;Y++)if(D[Y].pointerId==T.pointerId){D.splice(Y,1);return}}function Te(T){let Y=ie[T.pointerId];Y===void 0&&(Y=new rt,ie[T.pointerId]=Y),Y.set(T.pageX,T.pageY)}function Q(T){const Y=T.pointerId===D[0].pointerId?D[1]:D[0];return ie[Y.pointerId]}i.domElement.addEventListener("contextmenu",fe),i.domElement.addEventListener("pointerdown",ve),i.domElement.addEventListener("pointercancel",Se),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const Xw={__name:"Scene",setup(n){const e=Is(null);let t,i,r,s,o;Rf(()=>{a(),c(),u()}),Dg(()=>{r.dispose(),t.dispose(),s&&s.dispose()});const a=()=>{const d=e.value.clientWidth,h=e.value.clientHeight;t=new EA,i=new gn(75,d/h,.1,700),i.position.z=5,r=new z_({antialias:!0,alpha:!0}),r.setSize(d,h),e.value.appendChild(r.domElement),o=new Y_(16777215,1),o.position.set(1,1,1).normalize(),t.add(o);const m=new QA(16777215,2.5);t.add(m);const v=new Ww(i,r.domElement);v.enableDamping=!0,v.dampingFactor=.05,v.minPolarAngle=v.maxPolarAngle=Math.PI/2,v.enableZoom=!1;const x=()=>{requestAnimationFrame(x),v.update(),r.render(t,i)};x()},l=new URL("/scene/scene.gltf",self.location).href,c=()=>{new uw().load(l,h=>{s=h.scene,s.scale.set(4,4,4),s.position.set(0,-2.5,0),s.rotation.y=Math.PI/4,t.add(s)},void 0,function(h){console.error(h)})},u=()=>{const d=()=>{s&&(s.rotation.y+=.002),requestAnimationFrame(d)};d()};return(d,h)=>(Pi(),Cr("div",{ref_key:"mount",ref:e},null,512))}},jw=Jo(Xw,[["__scopeId","data-v-5d033239"]]);const qw={class:"flex flex-wrap justify-center gap-4 p-4"},Yw={class:"flip-card-front absolute inset-0 flex h-full w-full items-center justify-center rounded-3xl transition-all duration-1000 ease-in-out"},Kw={class:"flip-card-back absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-black p-4 text-white transition-all duration-1000 ease-in-out"},$w={class:"mb-2 text-2xl font-bold"},Zw={class:"font-semibold"},Jw={class:"grid grid-cols-2 gap-2 text-nowrap text-sm"},Qw={__name:"FlipCard",props:{ImageUrl:{type:String,required:!0},title:{type:String,required:!0},projectDescription:{type:String,required:!0},technologies:{type:Array,required:!0,default:()=>[]}},setup(n){const e=Is(null),t=Is(!1),i=a=>{const l=e.value.getBoundingClientRect(),c=a.clientX-l.left,d=((a.clientY-l.top)/l.height-.5)*50,h=-(c/l.width-.5)*50;e.value.style.transform=`rotateX(${d}deg) rotateY(${h}deg)`},r=()=>{e.value.style.transform=""},s=()=>{t.value=!t.value,e.value.classList.toggle("is-flipped")},o=a=>{a.key==="Enter"&&s()};return(a,l)=>(Pi(),Cr("div",qw,[J("figure",{ref_key:"flipContainer",ref:e,onMousemove:i,onMouseleave:r,onKeydown:o,onClick:s,tabindex:"0",class:"flip-container relative h-96 w-96 cursor-pointer rounded-3xl"},[J("div",Yw,[J("div",{class:"image-container w-full h-full bg-cover bg-center",style:Pl({backgroundImage:`url(${n.ImageUrl})`})},null,4)]),J("figcaption",Kw,[J("h2",$w,qc(n.title),1),J("p",Zw,qc(n.projectDescription),1),J("div",Jw,[(Pi(!0),Cr(Nn,null,Kv(n.technologies,c=>(Pi(),Cr("div",{key:c,class:"rounded-full bg-important px-4 py-2 text-center font-semibold text-white"},qc(c),1))),128))])])],544)]))}},ol=Jo(Qw,[["__scopeId","data-v-e8588da4"]]),eR="/assets/mockup1-604327ba-e91e1186.png",tR="/assets/mockup2-49b2f8d8-3dcef86b.png",nR="/assets/mockup3-50942724-282cee48.png",iR="/assets/mockup4-29d82ad7-f8982d42.png";const jl=n=>(wv("data-v-14afed03"),n=n(),Rv(),n),rR={class:"section"},sR={class:"relative w-full h-screen"},oR=jl(()=>J("section",{class:"flex flex-col md:flex-row items-center justify-center md:h-screen md:w-full md:px-10vw mb-10"},[J("div",{class:"md:flex-1 pt-16 md:pt-0"},[J("h2",{class:"text-6xl md:text-8xl text-stone-50 mb-4"},[J("span",{class:"font-bold"},"P"),J("span",{class:"font-bold"},"i"),J("span",{class:"font-bold"},"e"),J("span",{class:"font-bold"},"r"),J("span",{class:"font-bold"},"r"),J("span",{class:"font-bold"},"e"),J("br",{class:"block md:hidden"}),J("span",{class:"md:mr-8"}),J("span",{class:"font-bold"},"B"),J("span",{class:"font-bold"},"a"),J("span",{class:"font-bold"},"r"),J("span",{class:"font-bold"},"t"),J("span",{class:"font-bold"},"h"),J("span",{class:"font-bold"},",")]),J("h1",{class:"text-2xl sm:text-4xl text-stone-50 mb-4"},"Développeur Web")]),J("img",{src:ny,alt:"Design",class:"pt-8 md:absolute h-auto shape1"})],-1)),aR=jl(()=>J("div",{class:"section"},[J("section",{class:"flex flex-col items-center md:h-screen justify-start pt-5vw mb-10"},[J("h2",{class:"text-5xl font-semibold mb-6 text-stone-50 text-center"},"Mes compétences"),J("p",{class:"text-center max-w-lg mb-12 text-stone-50 text-lg"}," Passionné par la création web, je réalise sites dynamiques, interfaces intuitives, applis web & mobiles. Voici les technologies que j'utilise principalement pour donner vie à vos projets numériques : "),J("div",{class:"grid grid-cols-3 gap-12 md:grid-cols-5 md:gap-12 svg-compet"},[J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("g",{id:"c133de6af664cd4f011a55de6b0011b2"},[J("path",{display:"inline",d:"M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646 l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506 l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014 v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z"})])])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"HTML")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl flex justify-center items-center flex-col"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("g",{id:"c133de6af664cd4f011a55de6b001b19"},[J("path",{display:"inline",d:"M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"})])])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"CSS")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl flex justify-center items-center flex-col"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50 flex justify-center",fill:"currentColor",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("title",null,"javascript"),wi(),J("path",{d:"M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"JavaScript")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",viewBox:"0 0 24 24",fill:"",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{d:"M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z",fill:"currentColor"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"Vue")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",fill:"#ffffff",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{d:"M26.297 27.031l0.031-0.063c0.031-0.047 0.052-0.099 0.073-0.156v-0.005c0.099-0.26 0.12-0.536 0.073-0.813v0.010c-0.052-0.292-0.156-0.573-0.313-0.828l0.010 0.010-7.094-12.474-1.083-1.891-8.156 14.365c-0.141 0.25-0.229 0.521-0.276 0.802v0.016c-0.057 0.323-0.021 0.651 0.109 0.953l-0.005-0.010c0.016 0.047 0.042 0.089 0.068 0.135l-0.005-0.005c0.214 0.365 0.667 0.802 1.667 0.802h13.198c0.208 0 1.234-0.042 1.708-0.849zM17.995 14.609l6.479 11.396h-12.953zM31.661 25.188l-9.354-16.479c-0.099-0.177-0.635-1.052-1.578-1.052-0.422 0-1.026 0.182-1.521 1.047l-1.208 2.12 1.073 1.896 1.667-2.953 9.255 16.245h-3.521c0.047 0.271 0.021 0.547-0.073 0.807v-0.010c-0.021 0.057-0.042 0.115-0.073 0.167v-0.005l-0.031 0.063c-0.474 0.807-1.495 0.849-1.693 0.849h5.505c0.203 0 1.219-0.042 1.693-0.849 0.214-0.37 0.359-0.984-0.141-1.844zM9.74 27.078c-0.021-0.042-0.042-0.083-0.063-0.125v-0.005c-0.13-0.302-0.172-0.63-0.115-0.953v0.010h-7.563l11.24-19.776 3.687 6.484 1.073-1.891-3.219-5.667c-0.089-0.161-0.63-1.036-1.568-1.036-0.422 0-1.031 0.182-1.521 1.052l-11.385 20.016c-0.099 0.172-0.568 1.078-0.099 1.885 0.214 0.37 0.667 0.802 1.667 0.802h9.531c-0.99 0-1.453-0.427-1.667-0.802z"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"Nuxt")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{"fill-rule":"nonzero","clip-rule":"nonzero",d:"M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z",fill:"#ffffff"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"Node")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16",viewBox:"-2.5 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"#000000"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("g",{fill:"none","fill-rule":"evenodd"},[J("path",{d:"M-3 0h32v32H-3z"}),wi(),J("path",{fill:"#ffffff",d:"M1.192 16.267c.04 2.065.288 3.982.745 5.75.456 1.767 1.16 3.307 2.115 4.618.953 1.31 2.185 2.343 3.694 3.098 1.51.755 3.357 1.132 5.54 1.132 3.22 0 5.89-.844 8.016-2.532 2.125-1.69 3.446-4.22 3.962-7.597h1.192c-.437 3.575-1.847 6.345-4.23 8.312-2.384 1.966-5.324 2.95-8.82 2.95-2.383.04-4.42-.338-6.107-1.133-1.69-.794-3.07-1.917-4.142-3.367-1.073-1.45-1.867-3.158-2.383-5.124C.258 20.408 0 18.294 0 16.028c0-2.542.377-4.806 1.132-6.792C1.887 7.25 2.88 5.57 4.112 4.2 5.34 2.83 6.77 1.79 8.4 1.074 10.03.358 11.698 0 13.406 0c2.383 0 4.44.457 6.167 1.37 1.728.914 3.138 2.126 4.23 3.635 1.093 1.51 1.887 3.238 2.384 5.184.496 1.945.705 3.97.625 6.077H1.193zm24.43-1.192c0-1.867-.26-3.645-.775-5.333-.516-1.688-1.28-3.168-2.294-4.44-1.013-1.27-2.274-2.273-3.784-3.008-1.51-.735-3.258-1.102-5.244-1.102-1.67 0-3.228.317-4.678.953-1.45.636-2.72 1.56-3.813 2.77-1.092 1.212-1.976 2.672-2.652 4.38-.675 1.708-1.072 3.635-1.19 5.78h24.43z"})])])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"Express")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16",fill:"#ffffff",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"TailWind")])]),J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl flex justify-center items-center flex-col"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("title",null,"react"),wi(),J("rect",{width:"24",height:"24",fill:"none"}),wi(),J("path",{d:"M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"React Native")])]),J("div",{class:"hidden md:block"},[J("div",{class:"flex items-center justify-center"},[J("span",{class:"material-icons text-4xl"},[J("svg",{class:"h-10 w-10 sm:h-16 sm:w-16 text-stone-50",fill:"currentColor",viewBox:"0 0 24 24",role:"img",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("title",null,"Figma icon"),J("path",{d:"M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z"})])]),J("p",{class:"text-stone-50 text-base text-center mt-2"},"Figma")])])])])])],-1)),lR={class:"section"},cR={class:"flex flex-col md:justify-center items-center md:h-screen"},uR=jl(()=>J("h2",{class:"text-5xl font-semibold mb-8 mt-8 md:mt-0 text-stone-50 text-center"},"Quelques Projets",-1)),fR={class:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4"},hR={class:"section"},dR={class:"flex flex-col md:justify-center items-center md:h-screen"},pR={class:"flex flex-col md:flex-row items-center w-3/4"},mR=jl(()=>J("div",{class:"w-full md:w-1/2 flex flex-col items-center md:order-2 mb-4"},[J("h1",{class:"text-2xl font-bold mb-10 mt-16 md:mt-0 text-center text-stone-50"},"Vous avez un projet en tête ? Parlons-en !"),J("a",{href:"mailto:contact@pierre-barth.fr",class:"flex hover:text-opacity-80 transition duration-500"},[J("span",{class:"text-xl sm:text-2xl w-max text-stone-50 font-bold transition-colors duration-500 hover:text-important"},"contact@pierre-barth.fr")]),J("div",{class:"flex flew-row"},[J("a",{href:"https://www.linkedin.com/in/barth-pierre/",target:"_blank",rel:"noopener noreferrer",class:"flex items-center space-x-3 transform transition-transform duration-300 hover:scale-110"},[J("svg",{class:"h-8 w-8 sm:h-12 sm:w-12 mt-10 mx-4",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{d:"M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z",fill:"#ffffff"}),wi(),J("path",{d:"M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z",fill:"#ffffff"}),wi(),J("path",{d:"M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z",fill:"#ffffff"}),wi(),J("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z",fill:"#ffffff"})])])]),J("a",{href:"https://github.com/Pudi07",target:"_blank",rel:"noopener noreferrer",class:"flex items-center space-x-3 transform transition-transform duration-300 hover:scale-110"},[J("svg",{class:"h-8 w-8 sm:h-12 sm:w-12 mt-10 mx-4",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[J("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),J("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),J("g",{id:"SVGRepo_iconCarrier"},[J("path",{d:"M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2189 8.89949 10.155 8.91822 10.0912 8.93795L10.0894 8.93853C10.0564 8.94889 10.0205 8.94235 9.99324 8.92103V8.92103C9.95517 8.8914 9.91766 8.8627 9.8807 8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491C14.0848 8.86084 14.0499 8.88755 14.0144 8.91508V8.91508C13.9824 8.94011 13.9402 8.94762 13.9013 8.93566C13.9005 8.9354 13.8997 8.93514 13.8988 8.93488C13.8384 8.91627 13.7778 8.89857 13.717 8.88177Z",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),wi(),J("path",{d:"M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z",stroke:"#ffffff","stroke-width":"2"})])])])])],-1)),gR={class:"h-full w-full md:w-1/2 md:order-1"},_R={__name:"HomeView",setup(n){let e=null;Rf(()=>{const i=Is(document.querySelectorAll("section"));e=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting?s.target.classList.add("apparition"):s.target.classList.remove("apparition")})}),i.value.forEach(r=>{e.observe(r)})}),Cf(()=>{e&&e.disconnect()});const t=Is({licenseKey:"gplv3-license",scrollingSpeed:700,anchors:["home","skills","projects","contact"],showActiveTooltip:!1,navigation:!0,navigationTooltips:["Accueil","Compétences","Projets","Contact"],responsiveWidth:1024,controlArrows:!0,slidesNavigation:!0});return(i,r)=>{const s=jv("full-page");return Pi(),Cr("main",null,[zt(s,{options:t.value},{default:wg(()=>[J("div",rR,[J("div",sR,[zt(ly),oR])]),aR,J("div",lR,[J("section",cR,[uR,J("div",fR,[zt(ol,{ImageUrl:jn(eR),title:"Application e-Commerce iOS/Android",projectDescription:"Application mobile cross-platform. Développée en équipe avec React Native et PHP, l'application intègre un catalogue dynamique et une gestion fluide des commandes.",technologies:["React Native","PHP","MySQL"]},null,8,["ImageUrl"]),zt(ol,{ImageUrl:jn(tR),title:"Web App Magasin Audiovisuel",projectDescription:"Plateforme web développée pour la gestion interne de produits audiovisuels. Utilisation de Vue.js pour une interface utilisateur intuitive et réactive, et PHP pour une gestion robuste des données.",technologies:["Vue.js","PHP","Sqlite"]},null,8,["ImageUrl","technologies"]),zt(ol,{ImageUrl:jn(nR),title:"Interface de Bornes Interactives - Musée de l'OSUG, Grenoble",projectDescription:"Application web dédiée à la création et à la modification collaborative de cartes interactives. Construite avec Vue.js, Nuxt, Express, et MongoDB, elle permet aux utilisateurs de contribuer en temps réel, tout en offrant une gestion avancée des données géospatiales.",technologies:["Vue.js","Nuxt","Express","MongoDB"]},null,8,["ImageUrl","technologies"]),zt(ol,{ImageUrl:jn(iR),title:"Web App Interface de Bornes Interactives",projectDescription:"Plateforme web permettant de créer, visualiser, et transmettre des interfaces vers des systèmes embarqués. Conçue avec TypeScript et Django, cette solution est utilisée pour la gestion des bornes interactives du musée OSUG, facilitant l'affichage de contenus tactiles et immersifs.",technologies:["TypeScript","Django","PostgreSQL"]},null,8,["ImageUrl"])])])]),J("div",hR,[J("section",dR,[J("div",pR,[mR,J("div",gR,[zt(jw)])])])])]),_:1},8,["options"])])}}},vR=Jo(_R,[["__scopeId","data-v-14afed03"]]),xR=JS({history:mS("/"),routes:[{path:"/",name:"home",component:vR}]});/*!
* vue-fullpage 0.2.14
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/var SR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Z_={exports:{}};/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/(function(n,e){(function(t,i){n.exports=i()})(SR,function(){var t,i,r,s;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(f){if(this==null)throw new TypeError('"this" is null or not defined');var _=Object(this),M=_.length>>>0;if(typeof f!="function")throw new TypeError("predicate must be a function");for(var P=arguments[1],k=0;k<M;){var he=_[k];if(f.call(P,he,k,_))return he;k++}}}),Array.from||(Array.from=(t=Object.prototype.toString,i=function(f){return typeof f=="function"||t.call(f)==="[object Function]"},r=Math.pow(2,53)-1,s=function(f){var _=function(M){var P=Number(M);return isNaN(P)?0:P!==0&&isFinite(P)?(P>0?1:-1)*Math.floor(Math.abs(P)):P}(f);return Math.min(Math.max(_,0),r)},function(f){var _=this,M=Object(f);if(f==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");var P,k=arguments.length>1?arguments[1]:void 0;if(k!==void 0){if(!i(k))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(P=arguments[2])}for(var he,re=s(M.length),Ve=i(_)?Object(new _(re)):new Array(re),Oe=0;Oe<re;)he=M[Oe],Ve[Oe]=k?P===void 0?k(he,Oe):k.call(P,he,Oe):he,Oe+=1;return Ve.length=re,Ve}));var o=window,a=document,l=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),c=/(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent),u="ontouchstart"in o||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,d=!!window.MSInputMethodContext&&!!document.documentMode,h={test:{},shared:{}};function m(f,_){o.console&&o.console[f]&&o.console[f]("fullPage: "+_)}function v(f){return o.getComputedStyle(f).display!=="none"}function x(f){return Array.from(f).filter(function(_){return v(_)})}function p(f,_){return(_=arguments.length>1?_:document)?_.querySelectorAll(f):null}function g(f){f=f||{};for(var _=1,M=arguments.length;_<M;++_){var P=arguments[_];if(P)for(var k in P)P.hasOwnProperty(k)&&k!="__proto__"&&k!="constructor"&&(Object.prototype.toString.call(P[k])!=="[object Object]"?f[k]=P[k]:f[k]=g(f[k],P[k]))}return f}function b(f,_){return f!=null&&f.classList.contains(_)}function E(){return"innerHeight"in o?o.innerHeight:a.documentElement.offsetHeight}function A(){return o.innerWidth}function C(f,_){var M;for(M in f=N(f),_)if(_.hasOwnProperty(M)&&M!==null)for(var P=0;P<f.length;P++)f[P].style[M]=_[M];return f}function B(f,_){if(!f)return null;if(_==null)return f.previousElementSibling;var M=B(f);return M&&W(M,_)?M:null}function D(f,_){if(!f)return null;if(_==null)return f.nextElementSibling;var M=D(f);return M&&W(M,_)?M:null}function ie(f){return f[f.length-1]}function R(f,_){f=Ee(f)?f[0]:f;for(var M=_!=null?p(_,f.parentNode):f.parentNode.childNodes,P=0,k=0;k<M.length;k++){if(M[k]==f)return P;M[k].nodeType==1&&P++}return-1}function N(f){return Ee(f)?f:[f]}function de(f){f=N(f);for(var _=0;_<f.length;_++)f[_].style.display="none";return f}function Me(f){f=N(f);for(var _=0;_<f.length;_++)f[_].style.display="block";return f}function Ee(f){return Object.prototype.toString.call(f)==="[object Array]"||Object.prototype.toString.call(f)==="[object NodeList]"}function H(f,_){f=N(f);for(var M=0;M<f.length;M++)f[M].classList.add(_);return f}function Z(f,_){f=N(f);for(var M=_.split(" "),P=0;P<M.length;P++){_=M[P];for(var k=0;k<f.length;k++)f[k].classList.remove(_)}return f}function ce(f,_){_.appendChild(f)}function te(f,_,M){var P;_=_||a.createElement("div");for(var k=0;k<f.length;k++){var he=f[k];(M&&!k||!M)&&(P=_.cloneNode(!0),he.parentNode.insertBefore(P,he)),P.appendChild(he)}return f}function pe(f,_){te(f,_,!0)}function ye(f,_){for(typeof _=="string"&&(_=se(_)),f.appendChild(_);f.firstChild!==_;)_.appendChild(f.firstChild)}function xe(f){for(var _=a.createDocumentFragment();f.firstChild;)_.appendChild(f.firstChild);f.parentNode.replaceChild(_,f)}function z(f,_){return f&&f.nodeType===1?W(f,_)?f:z(f.parentNode,_):null}function ee(f,_){Pe(f,f.nextSibling,_)}function Re(f,_){Pe(f,f,_)}function Pe(f,_,M){Ee(M)||(typeof M=="string"&&(M=se(M)),M=[M]);for(var P=0;P<M.length;P++)f.parentNode.insertBefore(M[P],_)}function Ne(){var f=a.documentElement;return(o.pageYOffset||f.scrollTop)-(f.clientTop||0)}function He(f){return Array.prototype.filter.call(f.parentNode.children,function(_){return _!==f})}function j(f){f.preventDefault()}function ne(f,_){return f.getAttribute(_)}function ge(f,_,M){a.addEventListener(f,_,M==="undefined"?null:M)}function Le(f,_,M){o.addEventListener(f,_,M==="undefined"?null:M)}function Ie(f,_,M){a.removeEventListener(f,_,M==="undefined"?null:M)}function S(f,_,M){o.removeEventListener(f,_,M==="undefined"?null:M)}function I(f){if(typeof f=="function")return!0;var _=Object.prototype.toString.call(f);return _==="[object Function]"||_==="[object GeneratorFunction]"}function O(f,_,M){var P;M=M===void 0?{}:M,typeof o.CustomEvent=="function"?P=new CustomEvent(_,{detail:M}):(P=a.createEvent("CustomEvent")).initCustomEvent(_,!0,!0,M),f.dispatchEvent(P)}function W(f,_){return(f.matches||f.t||f.msMatchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector).call(f,_)}function K(f,_){if(typeof _=="boolean")for(var M=0;M<f.length;M++)f[M].style.display=_?"block":"none";return f}function se(f){var _=a.createElement("div");return _.innerHTML=f.trim(),_.firstChild}function ve(f){f=N(f);for(var _=0;_<f.length;_++){var M=f[_];M&&M.parentElement&&M.parentNode.removeChild(M)}}function oe(f,_){Array.prototype.filter.call(f,_)}function Se(f,_,M){for(var P=f[M],k=[];P;)(W(P,_)||_==null)&&k.push(P),P=P[M];return k}function _e(f,_){return Se(f,_,"nextElementSibling")}function Be(f,_){return Se(f,_,"previousElementSibling")}function w(f){return Object.keys(f).map(function(_){return f[_]})}function y(f){return f[f.length-1]}function G(f,_){for(var M=0,P=f.slice(Math.max(f.length-_,1)),k=0;k<P.length;k++)M+=P[k];return Math.ceil(M/_)}function ue(f,_){f.setAttribute(_,ne(f,"data-"+_)),f.removeAttribute("data-"+_)}function fe(f,_){var M=[f];do f=f.parentNode,M.push(f);while(!W(f,_));return M}function me(){var f=a.activeElement;return W(f,"textarea")||W(f,"input")||W(f,"select")||ne(f,"contentEditable")=="true"||ne(f,"contentEditable")==""}o.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(f,_){_=_||window;for(var M=0;M<this.length;M++)f.call(_,this[M],M,this)}),typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(f,_){if(f==null)throw new TypeError("Cannot convert undefined or null to object");for(var M=Object(f),P=1;P<arguments.length;P++){var k=arguments[P];if(k!=null)for(var he in k)Object.prototype.hasOwnProperty.call(k,he)&&(M[he]=k[he])}return M},writable:!0,i:!0}),window.fp_utils={$:p,deepExtend:g,hasClass:b,getWindowHeight:E,css:C,prev:B,next:D,last:ie,index:R,getList:N,hide:de,show:Me,isArrayOrList:Ee,addClass:H,removeClass:Z,appendTo:ce,wrap:te,wrapAll:pe,wrapInner:ye,unwrap:xe,closest:z,after:ee,before:Re,insertBefore:Pe,getScrollTop:Ne,siblings:He,preventDefault:j,isFunction:I,trigger:O,matches:W,toggle:K,createElementFromHTML:se,remove:ve,filter:oe,untilAll:Se,nextAll:_e,prevAll:Be,showError:m};var De=Object.freeze({__proto__:null,showError:m,isVisible:v,getVisible:x,$:p,deepExtend:g,hasClass:b,getWindowHeight:E,o:A,css:C,prev:B,next:D,last:ie,index:R,getList:N,hide:de,show:Me,isArrayOrList:Ee,addClass:H,removeClass:Z,appendTo:ce,wrap:te,wrapAll:pe,wrapInner:ye,unwrap:xe,closest:z,after:ee,before:Re,insertBefore:Pe,getScrollTop:Ne,siblings:He,preventDefault:j,l:ne,u:ge,v:Le,p:Ie,h:S,isFunction:I,trigger:O,matches:W,toggle:K,createElementFromHTML:se,remove:ve,filter:oe,untilAll:Se,nextAll:_e,prevAll:Be,toArray:w,g:y,S:G,M:ue,T:fe,A:me});function Te(f){return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},Te(f)}var Q={O:{},R:function(f,_){var M=this;return Te(this.O[f])!=="object"&&(this.O[f]=[]),this.O[f].push(_),function(){return M.removeListener(f,_)}},removeListener:function(f,_){if(Te(this.O[f])==="object"){var M=this.O[f].indexOf(_);M>-1&&this.O[f].splice(M,1)}},L:function(f){for(var _=this,M=arguments.length,P=new Array(M>1?M-1:0),k=1;k<M;k++)P[k-1]=arguments[k];Te(this.O[f])==="object"&&this.O[f].forEach(function(he){return he.apply(_,P)})},once:function(f,_){var M=this,P=this.R(f,function(){P();for(var k=arguments.length,he=new Array(k),re=0;re<k;re++)he[re]=arguments[re];_.apply(M,he)})}},T={j:0,D:0,slides:[],N:[],P:null,H:null,C:!1,I:!1,W:!1,F:!1,V:!1,Z:void 0,B:void 0,G:!1,canScroll:!0,Y:"none",U:"none",X:!1,_:!1,J:!0,K:0,q:E(),nn:!1,tn:{}};function Y(f){Object.assign(T,f)}function V(){return T}o.state=T;var Ge="onAfterRenderNoAnchor",ke="onClickOrTouch",je="moveSlideLeft",Xe="moveSlideRight",F="onInitialise",Ae="bindEvents",we="onDestroy",Ue="contentChanged",Ce="onScrollOverflowScrolled",be="onScrollPageAndSlide",We="onKeyDown",$e="onMenuClick",Ot="scrollPage",Mt="landscapeScroll",bn="scrollBeyondFullpage",Yt="onPerformMovement",to="onSlideLeave",no="onLeave",io="afterSectionLoads",Fi="afterSlideLoads";function ro(f){Q.L(ke,{e:f,target:f.target})}function Hr(){["click","touchstart"].forEach(function(f){Ie(f,ro,{passive:!1})})}function na(){Y({J:!0})}Q.R(Ae,function(){["click","touchstart"].forEach(function(f){ge(f,ro,{passive:!1})}),Le("focus",na),Q.R(we,Hr)});var so="fullpage-wrapper",pi="."+so,kr="fp-responsive",L="fp-notransition",$="fp-destroyed",ae="fp-enabled",q="active",le=".active",ze="fp-completely",Ye="fp-section",qe="."+Ye,Qe=".fp-tableCell",it="#fp-nav",Ze="fp-slide",ot="."+Ze,Tt=".fp-slide.active",wt="fp-slides",Ht=".fp-slides",Tn="fp-slidesContainer",Rt="."+Tn,ut="fp-table",Jn="fp-overflow",Ct="."+Jn,An="fp-is-overflow",zr=".fp-slidesNav",Bi=".fp-slidesNav a",Vr="fp-controlArrow",Gt="."+Vr,Qn="fp-prev",lr=".fp-controlArrow.fp-prev",an=".fp-controlArrow.fp-next",Hi={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,en:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},cr=null,oo=!1,ql=g({},Hi),ia=null;function Ke(f){return cr}function U(){return ia||Hi}function Gr(){return ql}function ra(f,_,M){ia[f]=_,M!=="internal"&&(ql[f]=_)}function Qf(){if(!U().anchors.length){var f=p(U().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",cr);f.length&&f.length===p(U().sectionSelector,cr).length&&(oo=!0,f.forEach(function(M){U().anchors.push(ne(M,"data-anchor").toString())}))}if(!U().navigationTooltips.length){var _=p(U().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",cr);_.length&&_.forEach(function(M){U().navigationTooltips.push(ne(M,"data-tooltip").toString())})}}function eh(f){return window["fp_"+f+"Extension"]!==void 0}function Ft(f){var _=U();return _[f]!==null&&Object.prototype.toString.call(_[f])==="[object Array]"?_[f].length&&h[f]:_[f]&&h[f]}function Je(f,_,M){if(Ft(f))return I(h[f][_])?h[f][_](M):h[f][_]}function sa(){return Je("dragAndMove","isAnimating")}function th(){return Je("dragAndMove","isGrabbing")}function Yl(f){if(U().offsetSections&&h.offsetSections){var _=Je("offsetSections","getWindowHeight",f);return _!==""?Math.round(_)+"px":_}return E()+"px"}function nh(f,_){f.insertBefore(_,f.firstChild)}function ln(f){var _="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function M(k){var he,re,Ve,Oe,nt,dt,tt="",_t=0;for(k=k.replace(/[^A-Za-z0-9+/=]/g,"");_t<k.length;)he=_.indexOf(k.charAt(_t++))<<2|(Oe=_.indexOf(k.charAt(_t++)))>>4,re=(15&Oe)<<4|(nt=_.indexOf(k.charAt(_t++)))>>2,Ve=(3&nt)<<6|(dt=_.indexOf(k.charAt(_t++))),tt+=String.fromCharCode(he),nt!=64&&(tt+=String.fromCharCode(re)),dt!=64&&(tt+=String.fromCharCode(Ve));return tt=function(Et){for(var $t,Wt="",It=0,Dt=0,pt=0;It<Et.length;)(Dt=Et.charCodeAt(It))<128?(Wt+=String.fromCharCode(Dt),It++):Dt>191&&Dt<224?(pt=Et.charCodeAt(It+1),Wt+=String.fromCharCode((31&Dt)<<6|63&pt),It+=2):(pt=Et.charCodeAt(It+1),$t=Et.charCodeAt(It+2),Wt+=String.fromCharCode((15&Dt)<<12|(63&pt)<<6|63&$t),It+=3);return Wt}(tt),tt}function P(k){return k.slice(3).slice(0,-3)}return function(k){var he=k.split("_");if(he.length>1){var re=he[1];return M(k.replace(P(he[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+M(re.slice(3).slice(0,-3))}return P(k)}(M(f))}o.fp_utils=o.fp_utils||{},Object.assign(o.fp_utils,{prependTo:nh,toggleClass:function(f,_,M){if(f.classList&&M==null)f.classList.toggle(_);else{var P=b(f,_);P&&M==null||!M?Z(f,_):(!P&&M==null||M)&&H(f,_)}}});var ih=function(f){this.anchor=f.anchor,this.item=f.item,this.index=f.index(),this.isLast=this.index===f.item.parentElement.querySelectorAll(f.selector).length-1,this.isFirst=!this.index,this.isActive=f.isActive},Hn=function(f,_){this.parent=this.parent||null,this.selector=_,this.anchor=ne(f,"data-anchor")||U().anchors[R(f,U().sectionSelector)],this.item=f,this.isVisible=v(f),this.isActive=b(f,q),this.on=b(f,Jn)||p(Ct,f)[0]!=null,this.rn=_===U().sectionSelector,this.container=z(f,Rt)||z(f,pi),this.index=function(){return this.siblings().indexOf(this)}};function Kl(f){return f.map(function(_){return _.item})}function $l(f,_){return f.find(function(M){return M.item===_})}Hn.prototype.siblings=function(){return this.rn?this.isVisible?T.N:T.an:this.parent?this.parent.slides:0},Hn.prototype.prev=function(){var f=this.siblings(),_=(this.rn?f.indexOf(this):this.parent.slides.indexOf(this))-1;return _>=0?f[_]:null},Hn.prototype.next=function(){var f=this.siblings(),_=(this.rn?f.indexOf(this):this.parent.slides.indexOf(this))+1;return _<f.length?f[_]:null},Hn.prototype.prevPanel=function(){return this===this.prev()?this.parent?this.parent.prev():null:this.prev()||(this.parent?this.parent.prev():null)},Hn.prototype.nextPanel=function(){return this===this.next()?this.parent?this.parent.next():null:this.next()||(this.parent?this.parent.next():null)},Hn.prototype.ln=function(){return this.rn?T.N:T.un};var rh,sh=function(f){ih.call(this,f)},J_=function(f){ih.call(this,f)};function ur(f){var _=p(Tt,f);return _.length&&(f=_[0]),f}function oh(f){return f?f.activeSlide?f.activeSlide:f:null}function Wr(f){var _,M,P=U();return P.autoScrolling&&!P.scrollBar?(_=-f,M=p(pi)[0]):(_=f,M=window),{options:_,element:M}}function ah(f,_){!U().autoScrolling||U().scrollBar||f.self!=window&&b(f,wt)?f.self!=window&&b(f,wt)?f.scrollLeft=_:f.scrollTo(0,_):f.style.top=_+"px"}function Zl(f){var _="transform "+U().scrollingSpeed+"ms "+U().easingcss3;return Z(f,L),C(f,{"-webkit-transition":_,transition:_})}function Jl(f,_){var M=f.index(),P=R(_,qe);return M==P?"none":M>P?"up":"down"}function oa(f){return H(f,L)}function Ql(f){return{"-webkit-transform":f,"-moz-transform":f,"-ms-transform":f,transform:f}}function lh(f,_){_?Zl(Ke()):oa(Ke()),clearTimeout(rh),C(Ke(),Ql(f)),h.test.cn=f,rh=setTimeout(function(){Z(Ke(),L)},10)}function fr(f){var _=Math.round(f);if(U().css3&&U().autoScrolling&&!U().scrollBar)lh("translate3d(0px, -"+_+"px, 0px)",!1);else if(U().autoScrolling&&!U().scrollBar)C(Ke(),{top:-_+"px"}),h.test.top=-_+"px";else{var M=Wr(_);ah(M.element,M.options)}}function ao(f,_){_!=="internal"&&Je("fadingEffect","update",f),Je("cards","update_",f),ra("scrollingSpeed",f,_)}h.setScrollingSpeed=ao;var lo,Lt=null,co=null,aa=null;function la(f,_,M,P){var k,he=function(nt){return nt.self!=o&&b(nt,wt)?nt.scrollLeft:!U().autoScrolling||U().scrollBar?Ne():nt.offsetTop}(f),re=_-he,Ve=!1,Oe=T.G;Y({G:!0}),lo&&window.cancelAnimationFrame(lo),lo=function(nt){k||(k=nt);var dt=Math.floor(nt-k);if(T.G){var tt=_;M&&(tt=o.fp_easings[U().easing](dt,he,re,M)),dt<=M&&ah(f,tt),dt<M?window.requestAnimationFrame(lo):P===void 0||Ve||(P(),Y({G:!1}),Ve=!0)}else Ve||Oe||(P(),Y({G:!1}),Ve=!0)},window.requestAnimationFrame(lo)}function ki(f){return f&&!f.item?new sh(new pr(f)):f?new sh(f):null}function ec(f){return f?new J_(f):null}function ei(f,_){var M=function(P,k){var he={afterRender:function(){return{section:ki(V().P),sn:ec(V().P.activeSlide)}},onLeave:function(){return{origin:ki(k.items.origin),destination:ki(k.items.destination),direction:k.direction,trigger:V().H}},afterLoad:function(){return he.onLeave()},afterSlideLoad:function(){return{section:ki(k.items.section),origin:ki(k.items.origin),destination:ki(k.items.destination),direction:k.direction,trigger:V().H}},onSlideLeave:function(){return he.afterSlideLoad()},beforeLeave:function(){return he.onLeave()},onScrollOverflow:function(){return{section:ki(V().P),sn:ec(V().P.activeSlide),position:k.position,direction:k.direction}}};return he[P]()}(f,_);return O(Ke(),f,M),U()[f].apply(M[Object.keys(M)[0]],w(M))!==!1}function ca(f){var _=ur(f);p("video, audio",_).forEach(function(M){M.hasAttribute("data-autoplay")&&typeof M.play=="function"&&M.play()}),p('iframe[src*="youtube.com/embed/"]',_).forEach(function(M){M.hasAttribute("data-autoplay")&&ch(M),M.onload=function(){M.hasAttribute("data-autoplay")&&ch(M)}})}function ch(f){f.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tc(f){var _=ur(f);p("video, audio",_).forEach(function(M){M.hasAttribute("data-keepplaying")||typeof M.pause!="function"||M.pause()}),p('iframe[src*="youtube.com/embed/"]',_).forEach(function(M){/youtube\.com\/embed\//.test(ne(M,"src"))&&!M.hasAttribute("data-keepplaying")&&M.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Xr(f){U().lazyLoading&&p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",ur(f)).forEach(function(_){if(["src","srcset"].forEach(function(P){var k=ne(_,"data-"+P);k!=null&&k&&(ue(_,P),_.addEventListener("load",function(){}))}),W(_,"source")){var M=z(_,"video, audio");M&&(M.load(),M.onloadeddata=function(){})}})}function uh(){var f=V().P.item,_=V().P.activeSlide,M=fh(f),P=String(M);_&&(P=P+"-"+fh(_.item)),P=P.replace("/","-").replace("#","");var k=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");Lt.className=Lt.className.replace(k,""),H(Lt,"fp-viewing-"+P)}function fh(f){if(!f)return null;var _=ne(f,"data-anchor"),M=R(f);return _==null&&(_=M),_}function nc(f,_,M){var P="";U().anchors.length&&!U().lockAnchors&&(f?(M!=null&&(P=M),_==null&&(_=f),Y({B:_}),hh(P+"/"+_)):(f!=null&&Y({B:_}),hh(M))),uh()}function hh(f){if(U().recordHistory)location.hash=f;else if(l||u)o.history.replaceState(void 0,void 0,"#"+f);else{var _=o.location.href.split("#")[0];o.location.replace(_+"#"+f)}}function dh(f,_,M){var P=_==="Section"?U().anchors[f]:ne(M,"data-anchor");return encodeURI(U().navigationTooltips[f]||P||_+" "+(f+1))}function Q_(f){f.cancelable&&j(f),Y({H:"horizontalNav"});var _=z(this,qe),M=p(Ht,z(this,qe))[0],P=$l(V().N,_).slides[R(z(this,"li"))];Q.L(Mt,{slides:M,destination:P.item})}function ph(f,_){U().slidesNavigation&&f!=null&&(Z(p(le,f),q),H(p("a",p("li",f)[_]),q))}var ua,hr={};function fa(f,_,M){_!=="all"?hr[M][_]=f:Object.keys(hr[M]).forEach(function(P){hr[M][P]=f})}function Kt(){return hr}function e0(){var f=z(this,qe);b(this,Qn)?Kt().m.left&&(Y({H:"slideArrow"}),Q.L(je,{section:f})):Kt().m.right&&(Y({H:"slideArrow"}),Q.L(Xe,{section:f}))}function mh(f){!U().loopHorizontal&&U().controlArrows&&(K(p(lr,f.section),f.slideIndex!==0),K(p(an,f.section),D(f.destiny)!=null))}function t0(){clearTimeout(ua),Y({W:!1})}function dr(f,_,M){var P=z(f,qe),k=V().N.filter(function(Ve){return Ve.item==P})[0],he=k.slides.filter(function(Ve){return Ve.item==_})[0],re={slides:f,destiny:_,direction:M,destinyPos:{left:_.offsetLeft},slideIndex:he.index(),section:P,sectionIndex:k.index(),anchorLink:k.anchor,slidesNav:p(zr,P)[0],slideAnchor:he.anchor,prevSlide:k.activeSlide.item,prevSlideIndex:k.activeSlide.index(),items:{section:k,origin:k.activeSlide,destination:he},localIsResizing:T.F};re.xMovement=_h(re.prevSlideIndex,re.slideIndex),re.direction=re.direction?re.direction:re.xMovement,re.localIsResizing||Y({canScroll:!1}),Je("parallax","applyHorizontal",re),Je("cards","apply",re),Je("dropEffect","apply",re),Je("waterEffect","apply",re),U().onSlideLeave&&!re.localIsResizing&&re.xMovement!=="none"&&I(U().onSlideLeave)&&ei("onSlideLeave",re)===!1?Y({W:!1}):(Ft("dropEffect")&&U().dropEffect||(H(_,q),Z(He(_),q)),ti(),re.localIsResizing||(tc(re.prevSlide),Xr(_)),mh(re),k.isActive&&!re.localIsResizing&&nc(re.slideIndex,re.slideAnchor,re.anchorLink),Je("continuousHorizontal","apply",re),Q.L(to,re),th()?ic(re):gh(f,re,!0),U().interlockedSlides&&h.interlockedSlides&&(Ft("continuousHorizontal")&&M!==void 0&&M!==re.xMovement||Je("interlockedSlides","apply",re)))}function gh(f,_,M){var P=_.destinyPos;if(ph(_.slidesNav,_.slideIndex),Y({scrollX:Math.round(P.left)}),U().css3){var k="translate3d(-"+Math.round(P.left)+"px, 0px, 0px)";h.test.dn[_.sectionIndex]=k,Ft("dragAndMove")&&_.vn!==void 0||Zl(p(Rt,f)),C(p(Rt,f),Ql(k)),Ft("interlockedSlides")||clearTimeout(ua),ua=setTimeout(function(){M&&ic(_)},U().scrollingSpeed)}else h.test.left[_.sectionIndex]=Math.round(P.left),la(f,Math.round(P.left),U().scrollingSpeed,function(){M&&ic(_)})}function _h(f,_){return f==_?"none":f>_?"left":"right"}function n0(){clearTimeout(ua)}function ic(f){Je("continuousHorizontal","afterSlideLoads",f),Je("dragAndMove","afterSlideLoads",f),f.localIsResizing||(Je("parallax","afterSlideLoads"),Je("scrollOverflowReset","setPrevious",f.prevSlide),Je("scrollOverflowReset","reset"),I(U().afterSlideLoad)&&ei("afterSlideLoad",f),Y({canScroll:!0}),ca(f.destiny),Q.L(Fi,f)),Y({W:!1}),Je("interlockedSlides","interlockedSlides",f)}function uo(f,_){ao(0,"internal"),_!==void 0&&Y({F:!0}),dr(z(f,Ht),f),_!==void 0&&Y({F:!1}),ao(Gr().scrollingSpeed,"internal")}function rc(f,_){ra("recordHistory",f,_)}function jr(f,_){f||fr(0),ra("autoScrolling",f,_);var M=V().P.item;if(U().autoScrolling&&!U().scrollBar)C(aa,{overflow:"hidden",height:"100%"}),Z(Lt,"fp-scrollable"),rc(Gr().recordHistory,"internal"),C(Ke(),{"-ms-touch-action":"none","touch-action":"none"}),M!=null&&fr(M.offsetTop);else if(C(aa,{overflow:"visible",height:"initial"}),H(Lt,"fp-scrollable"),rc(!!U().autoScrolling&&Gr().recordHistory,"internal"),C(Ke(),{"-ms-touch-action":"","touch-action":""}),oa(Ke()),M!=null){var P=Wr(M.offsetTop);P.element.scrollTo(0,P.options)}O(Ke(),"setAutoScrolling",f)}function sc(){for(var f=p(Tt),_=0;_<f.length;_++)uo(f[_],"internal")}function vh(){var f=p(".fp-auto-height")[0]||dc()&&p(".fp-auto-height-responsive")[0];U().lazyLoading&&f&&p(".fp-section:not(.active)").forEach(function(_){var M,P,k,he,re;P=(M=_.getBoundingClientRect()).top,k=M.bottom,he=P+2<T.q&&P>0,re=k>2&&k<T.q,(he||re)&&Xr(_)})}function i0(){O(B(this),"click")}function xh(){ve(p(it));var f=a.createElement("div");f.setAttribute("id","fp-nav");var _=a.createElement("ul");f.appendChild(_),ce(f,Lt);var M=p(it)[0];H(M,"fp-"+U().navigationPosition),U().showActiveTooltip&&H(M,"fp-show-active");for(var P="",k=0;k<V().N.length;k++){var he=V().N[k],re="";U().anchors.length&&(re=he.anchor),P+='<li><a href="#'+encodeURI(re)+'"><span class="fp-sr-only">'+dh(he.index(),"Section")+"</span><span></span></a>";var Ve=U().navigationTooltips[he.index()];Ve!==void 0&&Ve!==""&&(P+='<div class="fp-tooltip fp-'+U().navigationPosition+'">'+Ve+"</div>"),P+="</li>"}p("ul",M)[0].innerHTML=P;var Oe=p("li",p(it)[0])[V().P.index()];H(p("a",Oe),q)}function r0(f){f.preventDefault&&j(f),Y({H:"verticalNav"});var _=R(z(this,"#fp-nav li"));Q.L(Ot,{destination:V().N[_]})}function oc(f,_){var M;M=f,U().menu&&U().menu.length&&p(U().menu).forEach(function(P){P!=null&&(Z(p(le,P),q),H(p('[data-menuanchor="'+M+'"]',P),q))}),function(P,k){var he=p(it)[0];U().navigation&&he!=null&&he.style.display!=="none"&&(Z(p(le,he),q),H(P?p('a[href="#'+P+'"]',he):p("a",p("li",he)[k]),q))}(f,_)}hr.m={up:!0,down:!0,left:!0,right:!0},hr.k=g({},hr.m),Q.R(ke,function(f){var _=f.target;(W(_,Gt)||z(_,Gt))&&e0.call(_,f)}),h.landscapeScroll=dr,Q.R(Ae,function(){Q.R(Yt,t0)}),h.setRecordHistory=rc,h.setAutoScrolling=jr,h.test.setAutoScrolling=jr,new Date().getTime();var ac,lc,cc,uc,fo,fc,s0=(lc=!0,cc=new Date().getTime(),uc=!o.fullpage_api,function(f,_){var M=new Date().getTime(),P=f==="wheel"?U().scrollingSpeed:100;return lc=uc||M-cc>=P,uc=!o.fullpage_api,lc&&(ac=_(),cc=M),ac===void 0||ac});function Sh(f,_){if(I(U().beforeLeave))return s0(V().H,function(){return ei(f,_)})}function qr(f,_,M){var P=f.item;if(P!=null){var k,he,re={element:P,callback:_,isMovementUp:M,dtop:yh(P),yMovement:Jl(V().P,P),anchorLink:f.anchor,sectionIndex:f.index(),activeSlide:f.activeSlide?f.activeSlide.item:null,leavingSection:V().P.index()+1,localIsResizing:T.F,items:{origin:V().P,destination:f},direction:null};if(!(V().P.item==P&&!T.F||U().scrollBar&&Ne()===re.dtop&&!b(P,"fp-auto-height"))){if(re.activeSlide!=null&&(k=ne(re.activeSlide,"data-anchor"),he=R(re.activeSlide,null)),!re.localIsResizing){var Ve=re.yMovement;if(M!==void 0&&(Ve=M?"up":"down"),re.direction=Ve,eh("dropEffect")&&h.dropEffect.onLeave_(re),eh("waterEffect")&&h.waterEffect.onLeave_(re),I(U().beforeLeave)&&Sh("beforeLeave",re)===!1||I(U().onLeave)&&!ei("onLeave",re))return}Je("parallax","apply",re),Je("cards","apply",re),Je("dropEffect","apply",re),Je("waterEffect","apply",re),U().autoScrolling&&U().continuousVertical&&re.isMovementUp!==void 0&&(!re.isMovementUp&&re.yMovement=="up"||re.isMovementUp&&re.yMovement=="down")&&(re=function(Oe){Y({nn:!0});var nt=V().P.item;return Oe.isMovementUp?Re(nt,_e(nt,qe)):ee(nt,Be(nt,qe).reverse()),fr(V().P.item.offsetTop),sc(),Oe.pn=nt,Oe.dtop=Oe.element.offsetTop,Oe.yMovement=Jl(V().P,Oe.element),Oe.leavingSection=Oe.items.origin.index()+1,Oe.sectionIndex=Oe.items.destination.index(),O(Ke(),"onContinuousVertical",Oe),Oe}(re)),Je("scrollOverflowReset","setPrevious",V().P.item),re.localIsResizing||tc(V().P.item),Ft("dropEffect")&&U().dropEffect||(H(P,q),Z(He(P),q)),ti(),Xr(P),Y({canScroll:h.test.hn}),nc(he,k,re.anchorLink),Q.L(no,re),function(Oe){var nt=U().scrollingSpeed<700,dt=nt?700:U().scrollingSpeed;if(Y({Y:"none",scrollY:Math.round(Oe.dtop)}),Q.L(Yt),U().css3&&U().autoScrolling&&!U().scrollBar)lh("translate3d(0px, -"+Math.round(Oe.dtop)+"px, 0px)",!0),Ft("waterEffect")&&sc(),U().scrollingSpeed?(clearTimeout(fo),fo=setTimeout(function(){ha(Oe),Y({canScroll:!nt||h.test.hn})},U().scrollingSpeed)):ha(Oe);else{var tt=Wr(Oe.dtop);h.test.top=-Oe.dtop+"px",clearTimeout(fo),la(tt.element,tt.options,U().scrollingSpeed,function(){U().scrollBar?fo=setTimeout(function(){ha(Oe)},30):(ha(Oe),Y({canScroll:!nt||h.test.hn}))})}nt&&(clearTimeout(fc),fc=setTimeout(function(){Y({canScroll:!0})},dt))}(re),Y({Z:re.anchorLink}),oc(re.anchorLink,function(Oe){return Oe.pn!=null?Oe.isMovementUp?T.j-1:0:Oe.sectionIndex}(re))}}}function yh(f){var _=f.offsetHeight,M=f.offsetTop,P=M,k=Ft("dragAndMove")&&Je("dragAndMove","isGrabbing")?Je("dragAndMove","isScrollingDown"):M>T.K,he=P-E()+_,re=U().bigSectionsDestination;return _>E()?(k||re)&&re!=="bottom"||(P=he):(k||T.F&&D(f)==null)&&(P=he),Ft("offsetSections")&&(P=h.offsetSections.getSectionPosition_(k,P,f)),Y({K:P}),P}function ha(f){Y({C:!1}),function(_){_.pn!=null&&(_.isMovementUp?Re(p(qe)[0],_.pn):ee(p(qe)[V().N.length-1],_.pn),fr(V().P.item.offsetTop),function(){for(var M=p(Tt),P=0;P<M.length;P++)uo(M[P],"internal")}(),_.sectionIndex=_.items.destination.index(),_.leavingSection=_.items.origin.index()+1,Y({nn:!1}))}(f),I(U().afterLoad)&&!f.localIsResizing&&ei("afterLoad",f),Je("parallax","afterLoad"),Je("waterEffect","afterLoad"),Je("dropEffect","afterLoad"),Je("scrollOverflowReset","reset"),Je("resetSliders","apply",f),ti(),f.localIsResizing||ca(f.element),H(f.element,ze),Z(He(f.element),ze),vh(),Y({canScroll:!0}),Q.L(io,f),I(f.callback)&&f.callback()}function hc(f,_){ra("fitToSection",f,_)}function Mh(){T.canScroll&&(Y({F:!0}),qr(T.P),Y({F:!1}))}function Eh(){var f=U().responsive||U().responsiveWidth,_=U().responsiveHeight,M=f&&o.innerWidth<f,P=_&&o.innerHeight<_;f&&_?da(M||P):f?da(M):_&&da(P)}function da(f){var _=dc();f?_||(jr(!1,"internal"),hc(!1,"internal"),de(p(it)),H(Lt,kr),I(U().afterResponsive)&&U().afterResponsive.call(Ke(),f),Je("responsiveSlides","toSections"),O(Ke(),"afterResponsive",f)):_&&(jr(Gr().autoScrolling,"internal"),hc(Gr().autoScrolling,"internal"),Me(p(it)),Z(Lt,kr),I(U().afterResponsive)&&U().afterResponsive.call(Ke(),f),Je("responsiveSlides","toSlides"),O(Ke(),"afterResponsive",f))}function dc(){return b(Lt,kr)}function bh(f){U().verticalCentered&&(!U().scrollOverflow&&et.gn(f.item)||et.mn(f)||b(f.item,ut)||H(f.item,ut))}h.moveTo=moveTo,h.getScrollY=function(){return T.scrollY},Q.R(we,function(){clearTimeout(fo),clearTimeout(fc)}),h.setFitToSection=hc,h.fitToSection=Mh,h.setResponsive=da;var pc,Th=null;function mc(f){var _=f.item,M=f.wn.length,P=f.index();!V().P&&f.isVisible&&(H(_,q),ti(),Th=V().P.item),Ft("offsetSections")&&C(_,{height:Yl(_)}),U().paddingTop&&C(_,{"padding-top":U().paddingTop}),U().paddingBottom&&C(_,{"padding-bottom":U().paddingBottom}),U().sectionsColor[P]!==void 0&&C(_,{"background-color":U().sectionsColor[P]}),U().anchors[P]!==void 0&&_.setAttribute("data-anchor",f.anchor),M||bh(f)}function Ah(){U().scrollOverflow&&!U().scrollBar&&(et.bn(),et.Sn())}function o0(){Q.removeListener(Ge,Ah),Ie("keyup",et.yn)}h.getActiveSection=function(){return V().P},Q.R(Ae,function(){Q.R(Ge,Ah),Q.R(no,et.onLeave),Q.R(to,et.onLeave),Q.R(Fi,et.afterLoad),Q.R(io,et.afterLoad),Q.R(we,o0),ge("keyup",et.yn)});var gc,et={Mn:null,Tn:!0,An:!0,xn:null,On:null,kn:function(f){if(!T.canScroll)return j(f),!1},En:function(f){if(!me()&&U().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(f.keyCode)>-1&&!et.An)return j(f),!1},yn:function(){et.Tn=T.canScroll},onLeave:function(){clearTimeout(pc),et.An=!1},afterLoad:function(){et.An=!1,clearTimeout(pc),pc=setTimeout(function(){et.Tn=T.canScroll},200)},Rn:function(){a.activeElement===this.Mn&&(this.Mn.blur(),et.An=!1)},Sn:function(){if(U().scrollOverflow&&et.Tn){et.Rn();var f=et.Ln(V().P.item);!f||l||u||(this.Mn=f,requestAnimationFrame(function(){f.focus(),et.An=!0})),et.Tn=!1}},bn:function(){U().scrollOverflowMacStyle&&!c&&H(Lt,"fp-scroll-mac"),V().un.forEach(function(f){if(!(f.slides&&f.slides.length||b(f.item,"fp-auto-height-responsive")&&dc())){var _,M=ur(f.item),P=et.gn(f.item),k=(_=f).rn?_:_.parent;if(d){var he=P?"addClass":"removeClass";De[he](k.item,An),De[he](f.item,An)}else H(k.item,An),H(f.item,An);f.on||(et.jn(M),et.zn(M)),f.on=!0}})},zn:function(f){et.Ln(f).addEventListener("scroll",et.Dn),f.addEventListener("wheel",et.kn,{passive:!1}),f.addEventListener("keydown",et.En,{passive:!1})},jn:function(f){var _=document.createElement("div");_.className=Jn,ye(f,_),_.setAttribute("tabindex","-1")},Nn:function(f){var _=p(Ct,f)[0];_&&(xe(_),f.removeAttribute("tabindex"))},Ln:function(f){var _=ur(f);return p(Ct,_)[0]||_},on:function(f){return b(f,Jn)||p(Ct,f)[0]!=null},mn:function(f){return f.rn&&f.activeSlide?f.activeSlide.on:f.on},gn:function(f){return et.Ln(f).scrollHeight>o.innerHeight},Pn:function(f,_){if(!T.canScroll)return!1;if(U().scrollBar)return!0;var M=et.Ln(_);if(!U().scrollOverflow||!b(M,Jn)||b(_,"fp-noscroll")||b(ur(_),"fp-noscroll"))return!0;var P=d?1:0,k=M.scrollTop,he=f==="up"&&k<=0,re=f==="down"&&M.scrollHeight<=Math.ceil(M.offsetHeight+k)+P,Ve=he||re;return Ve||(this.xn=new Date().getTime()),Ve},Hn:function(){this.On=new Date().getTime();var f=this.On-et.xn,_=(l||u)&&T.X,M=T._&&f>600;return _&&f>400||M},Dn:(gc=0,function(f){var _=f.target.scrollTop,M=T.Y!=="none"?T.Y:gc<_?"down":"up";gc=_,I(U().onScrollOverflow)&&ei("onScrollOverflow",{position:_,direction:M}),b(f.target,Jn)&&T.canScroll&&et.Pn(M,f.target)&&et.Hn()&&et.gn(V().P.item)&&Q.L(Ce,{direction:M})})},_c=null,vc=null;function ti(){T.P=null,T.N.map(function(f){var _=b(f.item,q);f.isActive=_,f.on=et.on(f.item),_&&(T.P=f),f.slides.length&&(f.activeSlide=null,f.slides.map(function(M){var P=b(M.item,q);M.on=et.on(f.item),M.isActive=P,P&&(f.activeSlide=M)}))}),function(){var f=T.P,_=!!T.P&&T.P.slides.length,M=T.P?T.P.activeSlide:null;if(!f&&T.N.length&&!V().C){if(_c){var P=Rh(_c,T.N);P&&(T.P=P,T.P.isActive=!0,H(T.P.item,q)),T.P&&fr(T.P.item.offsetTop)}if(_&&!M&&vc){var k=Rh(vc,T.P.slides);k&&(T.P.activeSlide=k,T.P.activeSlide.isActive=!0,H(T.P.activeSlide.item,q)),T.P.activeSlide&&uo(T.P.activeSlide.item,"internal")}}}(),O(Ke(),"onUpdateStateDone")}function pa(){var f=p(U().sectionSelector+", "+qe,Ke()),_=x(f),M=Array.from(f).map(function(he){return new pr(he)}),P=M.filter(function(he){return he.isVisible}),k=P.reduce(function(he,re){return he.concat(re.slides)},[]);_c=wh(T.P),vc=wh(T.P?T.P.activeSlide:null),T.j=_.length,T.D=P.reduce(function(he,re){return he+re.slides.length},0),T.N=P,T.an=M,T.slides=k,T.un=T.N.concat(T.slides)}function wh(f){if(!f)return null;var _=f?f.item:null,M=f.rn?T.an:T.P.Cn;if(_){var P=$l(M,_);return P?P.index():null}return null}function Rh(f,_){var M,P=f-1,k=f;do{if(M=_[P]||_[k])break;P-=1,k+=1}while(P>=0||k<_.length);return M}var pr=function(f){var _=this;[].push.call(arguments,U().sectionSelector),Hn.apply(this,arguments),this.wn=p(U().slideSelector,f),this.Cn=Array.from(this.wn).map(function(M){return new ma(M,_)}),this.slides=this.Cn.filter(function(M){return M.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(M){return M.isActive})[0]||this.slides[0]:null};pr.prototype=Hn.prototype,pr.prototype.constructor=pr;var ho,ma=function(f,_){this.parent=_,Hn.call(this,f,U().slideSelector)};function Ch(){H(p(U().sectionSelector,Ke()),Ye),H(p(U().slideSelector,Ke()),Ze)}function xc(f){var _=f.slides.length,M=f.wn,P=f.slides,k=100*_,he=100/_;if(!p(Ht,f.item)[0]){var re=a.createElement("div");re.className=wt,pe(M,re);var Ve=a.createElement("div");Ve.className=Tn,pe(M,Ve)}C(p(Rt,f.item),{width:k+"%"}),_>1&&(U().controlArrows&&function(nt){var dt=nt.item,tt=[se(U().controlArrowsHTML[0]),se(U().controlArrowsHTML[1])];ee(p(Ht,dt)[0],tt),H(tt,Vr),H(tt[0],Qn),H(tt[1],"fp-next"),U().controlArrowColor!=="#fff"&&(C(p(an,dt),{"border-color":"transparent transparent transparent "+U().controlArrowColor}),C(p(lr,dt),{"border-color":"transparent "+U().controlArrowColor+" transparent transparent"})),U().loopHorizontal||de(p(lr,dt))}(f),U().slidesNavigation&&function(nt){var dt=nt.item,tt=nt.slides.length;ce(se('<div class="fp-slidesNav"><ul></ul></div>'),dt);var _t=p(zr,dt)[0];H(_t,"fp-"+U().slidesNavPosition);for(var Et=0;Et<tt;Et++)ce(se('<li><a href="#"><span class="fp-sr-only">'+dh(Et,"Slide",p(ot,dt)[Et])+"</span><span></span></a></li>"),p("ul",_t)[0]);C(_t,{"margin-left":"-"+_t.innerWidth/2+"px"});var $t=nt.activeSlide?nt.activeSlide.index():0;H(p("a",p("li",_t)[$t]),q)}(f)),P.forEach(function(nt){C(nt.item,{width:he+"%"}),U().verticalCentered&&bh(nt)});var Oe=Ft("responsiveSlides")?null:f.activeSlide||null;Oe!=null&&T.P&&(T.P.index()!==0||T.P.index()===0&&Oe.index()!==0)?(uo(Oe.item,"internal"),H(Oe.item,"fp-initial")):H(M[0],q)}ma.prototype=Hn.prototype,ma.prototype.constructor=pr;var Lh={attributes:!1,subtree:!0,childList:!0,characterData:!0};function Ph(){return Je("responsiveSlides","isResponsiveSlidesChanging")||x(p(U().slideSelector,Ke())).length!==V().D}function Sc(f){var _=Ph();(Ph()||Je("responsiveSlides","isResponsiveSlidesChanging")||x(p(U().sectionSelector,Ke())).length!==V().j)&&!T.nn&&(U().observer&&ho&&ho.disconnect(),pa(),ti(),U().anchors=[],ve(p(it)),Je("responsiveSlides","isResponsiveSlidesChanging")||Ch(),Qf(),U().navigation&&xh(),_&&(ve(p(zr)),ve(p(Gt))),V().N.forEach(function(M){M.slides.length?_&&xc(M):mc(M)})),U().observer&&ho&&p(pi)[0]&&ho.observe(p(pi)[0],Lh)}Q.R(Ae,function(){var f,_,M;U().observer&&"MutationObserver"in window&&p(pi)[0]&&(f=p(pi)[0],_=Lh,(M=new MutationObserver(Sc)).observe(f,_),ho=M),Q.R(Ue,Sc)}),h.render=Sc;var a0=function(){var f=!1;try{var _=Object.defineProperty({},"passive",{get:function(){f=!0}});Le("testPassive",null,_),S("testPassive",null,_)}catch{}return function(){return f}}();function Ih(){return!!a0()&&{passive:!1}}var Dh,Nh,yc,zi,ga=(yc=new Date().getTime(),zi=[],{In:function(f){var _=(f=f||o.event).wheelDelta||-f.deltaY||-f.detail,M=Math.max(-1,Math.min(1,_)),P=f.wheelDeltaX!==void 0||f.deltaX!==void 0;Dh=Math.abs(f.wheelDeltaX)<Math.abs(f.wheelDelta)||Math.abs(f.deltaX)<Math.abs(f.deltaY)||!P;var k=new Date().getTime();Nh=M<0?"down":"up",zi.length>149&&zi.shift(),zi.push(Math.abs(_));var he=k-yc;yc=k,he>200&&(zi=[])},Wn:function(){var f=G(zi,10)>=G(zi,70);return!!zi.length&&f&&Dh},Fn:function(){return Nh}});function l0(){var f=U().css3?Ne()+E():y(V().N).item.offsetTop+y(V().N).item.offsetHeight,_=Wr(f);h.test.top=-f+"px",Y({canScroll:!1}),la(_.element,_.options,U().scrollingSpeed,function(){setTimeout(function(){Y({C:!0}),Y({canScroll:!0})},30)})}function c0(){Ke().getBoundingClientRect().bottom>=0&&Uh()}function Uh(){var f=Wr(y(V().N).item.offsetTop);Y({canScroll:!1}),la(f.element,f.options,U().scrollingSpeed,function(){Y({canScroll:!0}),Y({C:!1}),Y({Vn:!1})})}var Mc,Ec,bc,Oh=(Mc=!1,Ec={},bc={},function(f,_,M){switch(f){case"set":Ec[_]=new Date().getTime(),bc[_]=M;break;case"isNewKeyframe":var P=new Date().getTime();Mc=P-Ec[_]>bc[_]}return Mc});function po(){var f=V().P.next();f||!U().loopBottom&&!U().continuousVertical||(f=V().N[0]),f!=null?qr(f,null,!1):Ke().scrollHeight<Lt.scrollHeight&&U().scrollBar&&U().Zn&&Q.L(bn)}function Yr(){var f=V().P.prev();f||!U().loopTop&&!U().continuousVertical||(f=y(V().N)),f!=null&&qr(f,null,!0)}h.moveSectionDown=po,h.moveSectionUp=Yr;var _a=0;function Fh(f){U().autoScrolling&&(T.canScroll&&(f.pageY<_a&&Kt().m.up?Yr():f.pageY>_a&&Kt().m.down&&po()),_a=f.pageY)}function Bh(f){if(Kt().m[f]){var _=f==="down"?po:Yr;Ft("scrollHorizontally")&&(_=Je("scrollHorizontally","getScrollSection",{type:f,scrollSection:_})),U().scrollOverflow&&et.mn(V().P)?et.Pn(f,V().P.item)&&et.Hn()&&_():_()}}var va,Tc,Kr,xa=0,mo=0,Sa=0,go=0,ya=kh(),Ln={Bn:"ontouchmove"in window?"touchmove":ya?ya.move:null,Gn:"ontouchstart"in window?"touchstart":ya?ya.down:null};function _o(f){var _=z(f.target,qe)||V().P.item,M=et.mn(V().P);if(vo(f)){Y({X:!0,_:!1}),U().autoScrolling&&(M&&!T.canScroll||U().scrollBar)&&j(f);var P=Ac(f);Sa=P.y,go=P.x;var k=Math.abs(xa-Sa)>o.innerHeight/100*U().touchSensitivity,he=Math.abs(mo-go)>A()/100*U().touchSensitivity,re=p(Ht,_).length&&Math.abs(mo-go)>Math.abs(xa-Sa),Ve=xa>Sa?"down":"up";Y({Y:re?mo>go?"right":"left":Ve}),re?!T.W&&he&&(mo>go?Kt().m.right&&Q.L(Xe,{section:_}):Kt().m.left&&Q.L(je,{section:_})):U().autoScrolling&&T.canScroll&&k&&Bh(Ve)}}function vo(f){return f.pointerType===void 0||f.pointerType!="mouse"}function Ma(f){if(U().fitToSection&&Y({G:!1}),vo(f)){var _=Ac(f);xa=_.y,mo=_.x}Le("touchend",Hh)}function Hh(){S("touchend",Hh),Y({X:!1})}function Ac(f){var _={};return _.y=f.pageY!==void 0&&(f.pageY||f.pageX)?f.pageY:f.touches[0].pageY,_.x=f.pageX!==void 0&&(f.pageY||f.pageX)?f.pageX:f.touches[0].pageX,u&&vo(f)&&U().scrollBar&&f.touches!==void 0&&(_.y=f.touches[0].pageY,_.x=f.touches[0].pageX),_}function kh(){var f;return o.PointerEvent&&(f={down:"pointerdown",move:"pointermove"}),f}function wc(f){U().autoScrolling&&vo(f)&&Kt().m.up&&(T.canScroll||j(f))}function zh(f,_){var M=_??V().P.item,P=$l(T.N,M),k=p(Ht,M)[0];if(!(k==null||sa()||T.W||P.slides.length<2)){var he=P.activeSlide,re=f==="left"?he.prev():he.next();if(!re){if(!U().loopHorizontal)return;re=f==="left"?y(P.slides):P.slides[0]}Y({W:!h.test.hn}),dr(k,re.item,f)}}function Rc(f){zh("left",f)}function Cc(f){zh("right",f)}function Lc(f){var _=V().N.filter(function(P){return P.anchor===f})[0];if(!_){var M=f!==void 0?f-1:0;_=V().N[M]}return _}function Vh(f){f!=null&&dr(z(f,Ht),f)}function Pc(f,_){var M=Lc(f);if(M!=null){var P=function(k,he){var re=he.slides.filter(function(Ve){return Ve.anchor===k})[0];return re==null&&(k=k!==void 0?k:0,re=he.slides[k]),re?re.item:null}(_,M);M.anchor&&M.anchor===T.Z||b(M.item,q)?Vh(P):qr(M,function(){Vh(P)})}}function xo(f,_){var M=Lc(f);_!==void 0?Pc(f,_):M!=null&&qr(M)}function u0(){clearTimeout(Tc),Ie("keydown",Gh),Ie("keyup",Wh)}function Gh(f){clearTimeout(Tc);var _=f.keyCode,M=[37,39].indexOf(_)>-1,P=U().autoScrolling||U().fitToSection||M;_===9?function(k){var he=k.shiftKey,re=a.activeElement,Ve=Ic(ur(V().P.item));function Oe(Wt){return j(Wt),Ve[0]?Ve[0].focus():null}if(T.canScroll){if(!function(Wt){var It=Ic(a),Dt=It.indexOf(a.activeElement),pt=It[Wt.shiftKey?Dt-1:Dt+1],Zt=z(pt,ot),tn=z(pt,qe);return!Zt&&!tn}(k)){re?z(re,".fp-section.active,.fp-section.active .fp-slide.active")==null&&(re=Oe(k)):Oe(k);var nt=re==Ve[0],dt=re==Ve[Ve.length-1],tt=he&&nt;if(tt||!he&&dt){j(k);var _t=function(Wt){var It,Dt=Wt?"prevPanel":"nextPanel",pt=[],Zt=oh((T.P&&T.P.activeSlide?T.P.activeSlide:T.P)[Dt]());do(pt=Ic(Zt.item)).length&&(It={Yn:Zt,Un:pt[Wt?pt.length-1:0]}),Zt=oh(Zt[Dt]());while(Zt&&pt.length===0);return It}(tt),Et=_t?_t.Yn:null;if(Et){var $t=Et.rn?Et:Et.parent;Q.L(be,{Xn:$t.index()+1,slideAnchor:Et.rn?0:Et.index()}),Kr=_t.Un,j(k)}}}}else j(k)}(f):!me()&&U().keyboardScrolling&&P&&(va=f.ctrlKey,Tc=setTimeout(function(){(function(k){var he=k.shiftKey,re=a.activeElement,Ve=W(re,"video")||W(re,"audio"),Oe=et.Pn("up",V().P.item),nt=et.Pn("down",V().P.item),dt=[37,39].indexOf(k.keyCode)>-1;if(function(tt){(function(_t){return[40,38,32,33,34].indexOf(_t.keyCode)>-1&&!T.C})(tt)&&!z(tt.target,Ct)&&tt.preventDefault()}(k),T.canScroll||dt)switch(Y({H:"keydown"}),k.keyCode){case 38:case 33:Kt().k.up&&Oe?T.C?Q.L(We,{e:k}):Yr():et.Sn();break;case 32:if(he&&Kt().k.up&&!Ve&&Oe){Yr();break}case 40:case 34:if(Kt().k.down&&nt){if(T.C)return;k.keyCode===32&&Ve||po()}else et.Sn();break;case 36:Kt().k.up&&xo(1);break;case 35:Kt().k.down&&xo(V().N.length);break;case 37:Kt().k.left&&Rc();break;case 39:Kt().k.right&&Cc()}})(f)},0))}function Wh(f){T.J&&(va=f.ctrlKey)}function f0(){Y({J:!1}),va=!1}function h0(f){Xh()}function d0(f){z(Kr,ot)&&!z(Kr,Tt)||Xh()}function Xh(){Kr&&(Kr.focus(),Kr=null)}function Ic(f){return[].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',f)).filter(function(_){return ne(_,"tabindex")!=="-1"&&_.offsetParent!==null})}h.moveSlideLeft=Rc,h.moveSlideRight=Cc,h.moveTo=xo,Q.R(Ae,function(){Le("blur",f0),ge("keydown",Gh),ge("keyup",Wh),Q.R(we,u0),Q.R(Fi,h0),Q.R(io,d0)});var jh=new Date().getTime(),$r=[];function Dc(f){f?(function(){var _,M="";o.addEventListener?_="addEventListener":(_="attachEvent",M="on");var P="onwheel"in a.createElement("div")?"wheel":a.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll",k=Ih();P=="DOMMouseScroll"?a[_](M+"MozMousePixelScroll",Zr,k):a[_](M+P,Zr,k)}(),Ke().addEventListener("mousedown",qh),Ke().addEventListener("mouseup",Yh)):(a.addEventListener?(Ie("mousewheel",Zr,!1),Ie("wheel",Zr,!1),Ie("MozMousePixelScroll",Zr,!1)):a.detachEvent("onmousewheel",Zr),Ke().removeEventListener("mousedown",qh),Ke().removeEventListener("mouseup",Yh))}function Zr(f){var _=new Date().getTime(),M=b(p(".fp-completely")[0],"fp-normal-scroll"),P=function(dt,tt){new Date().getTime();var _t=V().C&&dt.getBoundingClientRect().bottom>=0&&ga.Fn()==="up",Et=V().Vn;if(Et)return j(tt),!1;if(V().C){if(_t){var $t;if(!(Et||Oh("isNewKeyframe","beyondFullpage")&&ga.Wn()))return($t=Wr(y(V().N).item.offsetTop+y(V().N).item.offsetHeight)).element.scrollTo(0,$t.options),Y({Vn:!1}),j(tt),!1;if(ga.Wn())return _t=!1,Y({Vn:!0}),Y({H:"wheel"}),Uh(),j(tt),!1}else Oh("set","beyondFullpage",1e3);if(!Et&&!_t)return!0}}(Ke(),f);if(T._||Y({X:!1,_:!0,Y:"none"}),!Kt().m.down&&!Kt().m.up)return j(f),!1;if(P)return!0;if(P===!1)return j(f),!1;if(U().autoScrolling&&!va&&!M){var k=(f=f||o.event).wheelDelta||-f.deltaY||-f.detail,he=Math.max(-1,Math.min(1,k)),re=f.wheelDeltaX!==void 0||f.deltaX!==void 0,Ve=Math.abs(f.wheelDeltaX)<Math.abs(f.wheelDelta)||Math.abs(f.deltaX)<Math.abs(f.deltaY)||!re,Oe=he<0?"down":he>0?"up":"none";$r.length>149&&$r.shift(),$r.push(Math.abs(k)),U().scrollBar&&j(f);var nt=_-jh;return jh=_,nt>200&&($r=[]),Y({U:Oe}),T.canScroll&&!sa()&&G($r,10)>=G($r,70)&&Ve&&(Y({H:"wheel"}),Bh(he<0?"down":"up")),!1}U().fitToSection&&Y({G:!1})}function qh(f){var _;f.which==2&&(_=f.pageY,_a=_,Ke().addEventListener("mousemove",Fh))}function Yh(f){f.which==2&&Ke().removeEventListener("mousemove",Fh)}function So(f){f?(Dc(!0),function(){if(Ln.Bn&&(l||u)&&(!Ft("dragAndMove")||U().dragAndMove==="mouseonly")){U().autoScrolling&&(Lt.removeEventListener(Ln.Bn,wc,{passive:!1}),Lt.addEventListener(Ln.Bn,wc,{passive:!1}));var _=U().touchWrapper;_.removeEventListener(Ln.Gn,Ma),_.removeEventListener(Ln.Bn,_o,{passive:!1}),_.addEventListener(Ln.Gn,Ma),_.addEventListener(Ln.Bn,_o,{passive:!1})}}()):(Dc(!1),function(){if(Ln.Bn&&(l||u)){U().autoScrolling&&(Lt.removeEventListener(Ln.Bn,_o,{passive:!1}),Lt.removeEventListener(Ln.Bn,wc,{passive:!1}));var _=U().touchWrapper;_.removeEventListener(Ln.Gn,Ma),_.removeEventListener(Ln.Bn,_o,{passive:!1})}}())}h.setMouseWheelScrolling=Dc;var Nc=!0;function p0(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(f){Ie(f,$h,!0)})}function Kh(f,_){document["fp_"+f]=_,ge(f,$h,!0)}function $h(f){var _=f.type,M=!1,P=_==="mouseleave"?f.toElement||f.relatedTarget:f.target;P!=document&&P?(_==="touchend"&&(Nc=!1,setTimeout(function(){Nc=!0},800)),(_!=="mouseenter"||Nc)&&(U().normalScrollElements.split(",").forEach(function(k){if(!M){var he=W(P,k),re=z(P,k);(he||re)&&(h.shared._n||So(!1),h.shared._n=!0,M=!0)}}),!M&&h.shared._n&&(So(!0),h.shared._n=!1))):So(!0)}function Ea(f,_){ao(0,"internal"),xo(f,_),ao(Gr().scrollingSpeed,"internal")}Q.R(Ae,function(){U().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(f){Kh(f,!1)}),["mouseleave","touchend"].forEach(function(f){Kh(f,!0)})),Q.R(we,p0)}),h.silentMoveTo=Ea;var Uc,Zh,Oc=E(),Jh=A(),Fc=!1;function m0(){clearTimeout(Uc),clearTimeout(Zh),S("resize",Bc)}function Bc(){Fc||(U().autoScrolling&&!U().scrollBar||!U().fitToSection)&&Qh(E()),function(){if(l)for(var f=0;f<4;f++)Zh=setTimeout(function(){window.requestAnimationFrame(function(){U().autoScrolling&&!U().scrollBar&&(Y({F:!0}),Ea(T.P.index()+1),Y({F:!1}))})},200*f)}(),Fc=!0,clearTimeout(Uc),Uc=setTimeout(function(){(function(){if(Y({F:!0}),Qh(""),O(Ke(),"onResize"),U().autoScrolling||T.C||function(){if(!U().autoScrolling||U().scrollBar){var k=.01*o.innerHeight;a.documentElement.style.setProperty("--vh","".concat(k,"px"))}}(),Q.L(Ue),ti(),Eh(),l){var f=a.activeElement;if(!W(f,"textarea")&&!W(f,"input")&&!W(f,"select")){var _=E();Math.abs(_-Oc)>20*Math.max(Oc,_)/100&&(Hc(!0),Oc=_)}}else M=E(),P=A(),T.q===M&&Jh===P||(Y({q:M}),Jh=P,Hc(!0));var M,P;O(Ke(),"onResizeEnds"),Y({F:!1})})(),Fc=!1},400)}function Hc(f){if(!b(Ke(),$)){Y({F:!0,q:E(),Qn:A()});for(var _=V().N,M=0;M<_.length;++M){var P=_[M],k=p(Ht,P.item)[0],he=P.slides;Ft("offsetSections")&&C(P.item,{height:Yl(P.item)}),he.length>1&&dr(k,P.activeSlide.item)}U().scrollOverflow&&et.bn();var re=V().P.index();T.C||!re||Ft("fadingEffect")||Ft("dropEffect")||Ft("waterEffect")||Ea(re+1),Y({F:!1}),I(U().afterResize)&&f&&U().afterResize.call(Ke(),o.innerWidth,o.innerHeight),I(U().afterReBuild)&&!f&&U().afterReBuild.call(Ke()),O(Ke(),"afterRebuild")}}function Qh(f){V().N.forEach(function(_){var M=f!==""||Ft("offsetSections")?Yl(_.item):"";C(_.item,{height:M})})}function kc(){var f,_,M=o.location.hash;if(M.length){var P=M.replace("#","").split("/"),k=M.indexOf("#/")>-1;f=k?"/"+P[1]:decodeURIComponent(P[0]);var he=k?P[2]:P[1];he&&he.length&&(_=decodeURIComponent(he))}return{section:f,sn:_}}function g0(){S("hashchange",ed)}function ed(){if(!T.V&&!U().lockAnchors){var f=kc(),_=f.section,M=f.sn,P=T.Z===void 0,k=T.Z===void 0&&M===void 0&&!T.W;_&&_.length&&(_&&_!==T.Z&&!P||k&&!sa()||!T.W&&T.B!=M&&!sa())&&Q.L(be,{Xn:_,slideAnchor:M})}}function _0(f){var _=f.target;z(_,U().menu+" [data-menuanchor]")&&v0.call(_,f)}function v0(f){Y({H:"menu"}),!p(U().menu)[0]||!U().lockAnchors&&U().anchors.length||(j(f),Q.L($e,{anchor:ne(this,"data-menuanchor")}))}function x0(f){var _=f.target;_&&z(_,"#fp-nav a")?r0.call(_,f.e):W(_,".fp-tooltip")?i0.call(_):(W(_,Bi)||z(_,Bi)!=null)&&Q_.call(_,f.e)}h.reBuild=Hc,Q.R(Ae,function(){Bc(),Le("resize",Bc),Q.R(we,m0)}),h.setLockAnchors=function(f){U().lockAnchors=f},Q.R(Ae,function(){Le("hashchange",ed),Q.R(we,g0)}),Q.R(Ae,function(){ge("wheel",ga.In,Ih()),Q.R(bn,l0),Q.R(We,c0)}),Q.R(Ae,function(){Q.R(ke,_0)}),Q.R(Ae,function(){Q.R(ke,x0)});var zc,Vc,td=0;function ba(f){var _,M,P,k,he;if(O(Ke(),"onScroll"),!T.F&&V().P&&(y(V().N),!V().C&&!V().Vn&&(!U().autoScrolling||U().scrollBar||Ft("dragAndMove"))&&!th())){var re=Ft("dragAndMove")?Math.abs(Je("dragAndMove","getCurrentScroll")):Ne(),Ve=function(xn){var Pn=xn>td?"down":"up";return td=xn,Y({K:xn}),Pn}(re),Oe=0,nt=re+E()/2,dt=(Ft("dragAndMove")?Je("dragAndMove","getDocumentHeight"):Lt.scrollHeight-E())===re,tt=V().N;if(Y({scrollY:re}),dt)Oe=tt.length-1;else if(re)for(var _t=0;_t<tt.length;++_t)(z(tt[_t].item,qe)||tt[_t].item).offsetTop<=nt&&(Oe=_t);else Oe=0;if(P=Ve,k=V().P.item.offsetTop,he=k+E(),(P=="up"?he>=Ne()+E():k<=Ne())&&(b(V().P.item,ze)||(H(V().P.item,ze),Z(He(V().P.item),ze))),M=(_=tt[Oe]).item,!_.isActive){Y({V:!0});var Et,$t,Wt=V().P.item,It=V().P.index()+1,Dt=Jl(V().P,M),pt=_.anchor,Zt=_.index()+1,tn=_.activeSlide,gi={P:Wt,sectionIndex:Zt-1,anchorLink:pt,element:M,leavingSection:It,direction:Dt,items:{origin:V().P,destination:_}};tn&&($t=tn.anchor,Et=tn.index()),T.canScroll&&(Z(tt.filter(function(xn){return xn.index()!==_.index()}).map(function(xn){return xn.item}),q),H(M,q),Je("parallax","afterLoad"),I(U().beforeLeave)&&Sh("beforeLeave",gi),I(U().onLeave)&&ei("onLeave",gi),I(U().afterLoad)&&ei("afterLoad",gi),Je("resetSliders","apply",{localIsResizing:T.F,leavingSection:It}),tc(Wt),Xr(M),ca(M),oc(pt,Zt-1),U().anchors.length&&Y({Z:pt}),ti(),nc(Et,$t,pt)),clearTimeout(zc),zc=setTimeout(function(){Y({V:!1})},100)}U().fitToSection&&T.canScroll&&(clearTimeout(Vc),Vc=setTimeout(function(){T.N.filter(function(xn){var Pn=xn.item.getBoundingClientRect();return Math.round(Pn.bottom)===Math.round(E())||Math.round(Pn.top)===0}).length||Mh()},U().en))}}function nd(f,_){_!==void 0?(_=_.replace(/ /g,"").split(",")).forEach(function(M){fa(f,M,"k")}):(fa(f,"all","k"),U().keyboardScrolling=f)}function S0(f){var _=f.index();U().anchors[_]!==void 0&&f.isActive&&oc(U().anchors[_],_),U().menu&&U().css3&&z(p(U().menu)[0],pi)!=null&&p(U().menu).forEach(function(M){Lt.appendChild(M)})}function id(){var f,_,M=V().P,P=V().P.item;H(P,ze),Xr(P),vh(),ca(P),_=Lc((f=kc()).section),f.section&&_&&(_===void 0||_.index()!==R(Th))||!I(U().afterLoad)||ei("afterLoad",{P,element:P,direction:null,anchorLink:M.anchor,sectionIndex:M.index(),items:{origin:V().P,destination:V().P}}),I(U().afterRender)&&ei("afterRender"),O(Ke(),"afterRender")}function Gc(f,_){_!==void 0?(_=_.replace(/ /g,"").split(",")).forEach(function(M){fa(f,M,"m")}):fa(f,"all","m"),O(Ke(),"setAllowScrolling",{value:f,Jn:_})}function rd(){var f=kc(),_=f.section,M=f.sn;_?U().animateAnchor?Pc(_,M):Ea(_,M):Q.L(Ge,null)}Q.R(we,function(){clearTimeout(zc),clearTimeout(Vc)}),Q.R(Ae,function(){Le("scroll",ba),a.body.addEventListener("scroll",ba),Q.R(be,function(f){Pc(f.Xn,f.slideAnchor)}),Q.R($e,function(f){xo(f.anchor,void 0)}),Q.R(Ce,function(f){(f.direction==="down"?po:Yr)()}),Q.R(Ot,function(f){qr(f.destination)})}),Q.R(we,function(){S("scroll",ba)}),h.getActiveSlide=function(){return ec(V().P.activeSlide)},h.getScrollX=function(){return T.scrollX},Q.R(Ae,function(){Q.R(we,n0),Q.R(Mt,function(f){dr(f.slides,f.destination)}),Q.R(Xe,function(f){Cc(f.section)}),Q.R(je,function(f){Rc(f.section)})}),Q.R(Ae,function(){var f=U().credits.position,_=["left","right"].indexOf(f)>-1?"".concat(f,": 0;"):"",M=`
        <div class="fp-watermark" style="`.concat(_,`">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(U().credits.label,`
            </a>
        </div>
    `),P=y(T.N),k=!T.Kn||U().credits.enabled;P&&P.item&&k&&P.item.insertAdjacentHTML("beforeend",M)}),function(){Q.R(F,function(){var Ve,Oe,nt;Y({Kn:(U().licenseKey,Ve=U().licenseKey,Oe=function(dt){var tt=parseInt("514").toString(16);if(!dt||dt.length<29||dt.split(f[0]).length===4)return null;var _t=["Each","for"][k()]().join(""),Et=dt[["split"]]("-"),$t=[];Et[_t](function(Dt,pt){if(pt<4){var Zt=function(xn){var Pn=xn[xn.length-1],A0=["NaN","is"][k()]().join("");return window[A0](Pn)?he(Pn):function(w0){return w0-q.length}(Pn)}(Dt);$t.push(Zt);var tn=he(Dt[Zt]);if(pt===1){var gi=["pa","dS","t","art"].join("");tn=tn.toString()[gi](2,"0")}tt+=tn,pt!==0&&pt!==1||(tt+="-")}});var Wt=0,It="";return dt.split("-").forEach(function(Dt,pt){if(pt<4){for(var Zt=0,tn=0;tn<4;tn++)tn!==$t[pt]&&(Zt+=Math.abs(he(Dt[tn])),isNaN(Dt[tn])||Wt++);var gi=re(Zt);It+=gi}}),It+=re(Wt),{qn:new Date(tt+"T00:00"),$n:tt.split("-")[2]===8*(q.length-2)+"",nt:It}}(Ve),nt=function(dt){var tt=P[k()]().join("");return dt&&tt.indexOf(dt)===0&&dt.length===tt.length}(Ve),(Oe||nt)&&(Oe&&M<=Oe.qn&&Oe.nt===Ve.split(f[0])[4]||nt||Oe.$n)||!1)})});var f=["-"],_="2023-4-29".split("-"),M=new Date(_[0],_[1],_[2]),P=["se","licen","-","v3","l","gp"];function k(){return[["re","verse"].join("")][0]}function he(Ve){return Ve?isNaN(Ve)?Ve.charCodeAt(0)-72:Ve:""}function re(Ve){var Oe=72+Ve;return Oe>90&&Oe<97&&(Oe+=15),String.fromCharCode(Oe).toUpperCase()}}(),h.setKeyboardScrolling=nd,h.shared.tt=id,h.setAllowScrolling=Gc;var y0={};function Jr(){return y0}var Ta,mi,sd,Wc,Aa=!b(Lt,ln("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function od(f){if(mi=a.createElement("div"),Ta=ln("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),Aa||(Ta=Ta.replace("extensions/","").replace("Extension","")),mi.innerHTML=Ta,mi=mi.firstChild,"MutationObserver"in window&&new MutationObserver(M0).observe(a.body,{childList:!0,subtree:!1}),(!Aa||Ft(f)&&h[f])&&(!function(M){var P=Jr()[M]!==void 0&&Jr()[M].length,k=[],he=!1;return Ee(Jr()[M])?k=Jr()[M]:k.push(Jr()[M]),k.forEach(function(re){var Ve=function(){if(a.domain.length){for(var Pn=a.domain.replace(/^(www\.)/,"").split(".");Pn.length>2;)Pn.shift();return Pn.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),Oe=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3","NDU2dGVzdDQ1Ng=="],nt=ln(Oe[0]),dt=ln(Oe[1]),tt=ln(Oe[2]),_t=ln(Oe[6]),Et=ln(Oe[3]),$t=ln(Oe[4]),Wt=ln(Oe[5]),It=U()[$t+Wt]!==void 0;P=P||It;var Dt=[nt,dt,tt,_t].indexOf(Ve)<0&&Ve.length!==0;if(!P&&!It&&Dt)return!1;var pt=P?ln(re):"",Zt=(pt=pt.split("_")).length>1&&pt[1].indexOf(M,pt[1].length-M.length)>-1,tn=pt.length>1&&pt[1].toLowerCase().indexOf($t)>-1,gi=pt[0].indexOf(Ve,pt[0].length-Ve.length)<0,xn=Zt||tn;he=he||!(gi&&Dt&&Et!=pt[0])&&xn||!Dt}),he}(f)||!Aa)){ad();var _=ln("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[_](ad,2e3)}}function ad(){mi&&(Wc||(Math.random()<.5?nh(Lt,mi):ce(mi,Lt),Wc=!0),mi.setAttribute("style",ln("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ln("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function M0(f){f.forEach(function(_){if(_.removedNodes[0]&&_.removedNodes[0].isEqualNode(mi)){clearTimeout(sd);var M=ln("bDIwc2V0VGltZW91dDAzbA==");sd=window[M](E0,900)}})}function E0(){Wc=!1}function b0(){pa(),ti(),U().scrollBar=U().scrollBar||U().hybrid,Qf(),function(){C(fe(Ke(),"body"),{height:"100%",position:"relative"}),H(Ke(),so),H(co,ae),Y({q:E()}),Z(Ke(),$),Ch(),Je("parallax","init");for(var f=V().an,_=0;_<f.length;_++){var M=f[_],P=M.wn,k=ne(M.item,"style");k&&M.item.setAttribute("data-fp-styles",k),mc(M),S0(M),P.length>0&&xc(M)}U().fixedElements&&U().css3&&p(U().fixedElements).forEach(function(he){Lt.appendChild(he)}),U().navigation&&xh(),p('iframe[src*="youtube.com/embed/"]',Ke()).forEach(function(he){var re,Ve;Ve=ne(re=he,"src"),re.setAttribute("src",Ve+(/\?/.test(Ve)?"&":"?")+"enablejsapi=1")}),Je("fadingEffect","apply"),Je("waterEffect","init"),Je("dropEffect","init"),Je("cards","init"),U().scrollOverflow&&et.bn()}(),Gc(!0),So(!0),jr(U().autoScrolling,"internal"),Eh(),uh(),a.readyState==="complete"&&rd(),Le("load",rd),id(),Aa||od("l"),pa(),ti()}function ld(){var f=U().licenseKey;U().licenseKey.trim()===""?(m("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),m("error","https://github.com/alvarotrigo/fullPage.js#options")):U()&&T.Kn||a.domain.indexOf("alvarotrigo.com")>-1?f&&f.length:(m("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),m("error","https://alvarotrigo.com/fullPage/pricing")),b(co,ae)?m("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(U().continuousVertical&&(U().loopTop||U().loopBottom)&&(U().continuousVertical=!1,m("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!U().scrollOverflow||!U().scrollBar&&U().autoScrolling||m("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!U().continuousVertical||!U().scrollBar&&U().autoScrolling||(U().continuousVertical=!1,m("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),U().anchors.forEach(function(_){var M=[].slice.call(p("[name]")).filter(function(he){return ne(he,"name")&&ne(he,"name").toLowerCase()==_.toLowerCase()}),P=[].slice.call(p("[id]")).filter(function(he){return ne(he,"id")&&ne(he,"id").toLowerCase()==_.toLowerCase()});if(P.length||M.length){m("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var k=P.length?"id":"name";(P.length||M.length)&&m("error",'"'+_+'" is is being used by another element `'+k+"` property")}}))}function T0(){return{options:U(),internals:{container:Ke(),canScroll:T.canScroll,isScrollAllowed:Kt(),getDestinationPosition:yh,isTouch:u,c:od,getXmovement:_h,removeAnimation:oa,getTransforms:Ql,lazyLoad:Xr,addAnimation:Zl,performHorizontalMove:gh,landscapeScroll:dr,silentLandscapeScroll:uo,keepSlidesPosition:sc,silentScroll:fr,styleSlides:xc,styleSection:mc,scrollHandler:ba,getEventsPage:Ac,getMSPointer:kh,isReallyTouch:vo,usingExtension:Ft,toggleControlArrows:mh,touchStartHandler:Ma,touchMoveHandler:_o,nullOrSection:ki,items:{SectionPanel:pr,SlidePanel:ma,Item:Hn},getVisible:x,getState:V,updateState:ti,updateStructuralState:pa,activeSlidesNavigation:ph,getPanels:function(){return T.un},getSections:function(){return T.N},setActiveSection:function(f){T.P=f}}}}function wn(f){var _=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],M=ln(_[0]),P=ln(_[1]),k=U()[M+P]!==void 0,he="fp_"+f+"Extension";Jr()[f]=k?U()[M+P]:U()[f+P],h[f]=window[he]!==void 0?new window[he]:null,h[f]&&h[f].c(f)}function cd(f,_){var M;if(Lt=p("body")[0],co=p("html")[0],aa=p("html, body"),!b(co,ae))return M=typeof f=="string"?p(f)[0]:f,Hi.touchWrapper=M,function(P){ia=g({},Hi,P),ql=Object.assign({},ia)}(_),function(P){cr=P}(typeof f=="string"?p(f)[0]:f),Q.L(F),ld(),h.getFullpageData=T0,h.version="4.0.20",h.test=Object.assign(h.test,{top:"0px",cn:"translate3d(0px, 0px, 0px)",dn:function(){for(var P=[],k=0;k<p(U().sectionSelector,Ke()).length;k++)P.push("translate3d(0px, 0px, 0px)");return P}(),left:function(){for(var P=[],k=0;k<p(U().sectionSelector,Ke()).length;k++)P.push(0);return P}(),options:U(),setAutoScrolling:null}),h.shared=Object.assign(h.shared,{tt:null,_n:!1}),o.fullpage_api=h,o.fullpage_extensions=!0,Ke()&&(Q.L("beforeInit"),wn("continuousHorizontal"),wn("scrollHorizontally"),wn("resetSliders"),wn("interlockedSlides"),wn("responsiveSlides"),wn("fadingEffect"),wn("dragAndMove"),wn("offsetSections"),wn("scrollOverflowReset"),wn("parallax"),wn("cards"),wn("dropEffect"),wn("waterEffect"),Je("dragAndMove","init"),Je("responsiveSlides","init"),b0(),Q.L(Ae),Je("dragAndMove","turnOffTouch")),o.fullpage_api;ld()}return h.destroy=function(f){O(Ke(),"destroy",f),jr(!1,"internal"),Gc(!0),So(!1),nd(!1),H(Ke(),$),Q.L(we),Je("dragAndMove","destroy"),f&&(fr(0),p("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ke()).forEach(function(_){ue(_,"src")}),p("img[data-srcset]").forEach(function(_){ue(_,"srcset")}),ve(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")),C(Kl(V().N),{height:"","background-color":"",padding:""}),C(Kl(V().slides),{width:""}),C(Ke(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),C(aa,{overflow:"",height:""}),Z(co,ae),Z(Lt,kr+" fp-scrollable"),Lt.className.split(/\s+/).forEach(function(_){_.indexOf("fp-viewing")===0&&Z(Lt,_)}),Kl(V().un).forEach(function(_){U().scrollOverflow&&et.Nn(_),Z(_,"fp-table active fp-completely "+An);var M=ne(_,"data-fp-styles");M&&_.setAttribute("style",M),b(_,Ye)&&!oo&&_.removeAttribute("data-anchor")}),oa(Ke()),[Qe,Rt,Ht].forEach(function(_){p(_,Ke()).forEach(function(M){xe(M)})}),C(Ke(),{"-webkit-transition":"none",transition:"none"}),Z(Ke(),so),o.scrollTo(0,0),[Ye,Ze,Tn].forEach(function(_){Z(p("."+_),_)}))},o.fp_easings=g(o.fp_easings,{easeInOutCubic:function(f,_,M,P){return(f/=P/2)<1?M/2*f*f*f+_:M/2*((f-=2)*f*f+2)+_}}),o.jQuery&&function(f,_){f&&_?f.fn.fullpage=function(M){M=f.extend({},M,{$:f}),new _(this[0],M),Object.keys(h).forEach(function(P){U().$.fn.fullpage[P]=h[P]})}:m("error","jQuery is required to use the jQuery fullpage adapter!")}(o.jQuery,cd),cd})})(Z_);var MR=Z_.exports;const ER=yR(MR),bR=["afterLoad","onLeave","afterRender","afterResize","afterResponsive","afterSlideLoad","onSlideLeave"],TR=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},AR={name:"FullPage",props:{options:{type:Object,default(){}},skipInit:{type:Boolean,default:!1}},data(){return{events:bR.reduce((n,e)=>({...n,[e]:(...t)=>{this.emitEvent(e,t)}}),{}),api:void 0}},watch:{options:{deep:!0,handler(){this.build()}}},mounted(){!this.skipInit&&this.init()},beforeUnmount(){typeof this.api<"u"&&this.destroy()},methods:{build(){let n=this.options.slideSelector||".slide",e=this.options.sectionSelector||".section";const t=window.fp_utils.index(document.querySelector(e+".active")),i=document.querySelector(e+".active "+n+".active"),r=i?window.fp_utils.index(i):-1;this.destroy(),t>-1&&window.fp_utils.addClass(document.querySelectorAll(e)[t],"active"),r>-1&&window.fp_utils.addClass(i,"active"),this.init()},destroy(){typeof window.fullpage_api<"u"&&typeof window.fullpage_api.destroy<"u"&&window.fullpage_api.destroy("all")},emitEvent(n,e){this.$emit(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),...e),Object.prototype.hasOwnProperty.call(this.options,n)&&this.options[n].apply(this,e)},init(){this.api=new ER(this.$refs.fullpage,this.options)}}},wR={ref:"fullpage"};function RR(n,e,t,i,r,s){return Pi(),Cr("div",wR,[$v(n.$slots,"default")],512)}const CR=TR(AR,[["render",RR]]),LR={install(n){n.component("FullPage",CR)}};const Jf=$x(ty);Jf.use(LR);Jf.use(xR);Jf.mount("#app");
