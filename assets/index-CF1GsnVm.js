(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var $f={exports:{}},Uo={};var T0;function CS(){if(T0)return Uo;T0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var A0;function wS(){return A0||(A0=1,$f.exports=CS()),$f.exports}var Z=wS(),th={exports:{}},Lo={},eh={exports:{}},nh={};var R0;function DS(){return R0||(R0=1,(function(o){function e(N,F){var rt=N.length;N.push(F);t:for(;0<rt;){var mt=rt-1>>>1,Mt=N[mt];if(0<l(Mt,F))N[mt]=F,N[rt]=Mt,rt=mt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var F=N[0],rt=N.pop();if(rt!==F){N[0]=rt;t:for(var mt=0,Mt=N.length,L=Mt>>>1;mt<L;){var Q=2*(mt+1)-1,xt=N[Q],At=Q+1,Dt=N[At];if(0>l(xt,rt))At<Mt&&0>l(Dt,xt)?(N[mt]=Dt,N[At]=rt,mt=At):(N[mt]=xt,N[Q]=rt,mt=Q);else if(At<Mt&&0>l(Dt,rt))N[mt]=Dt,N[At]=rt,mt=At;else break t}}return F}function l(N,F){var rt=N.sortIndex-F.sortIndex;return rt!==0?rt:N.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,_=3,E=!1,A=!1,D=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(N){for(var F=i(d);F!==null;){if(F.callback===null)s(d);else if(F.startTime<=N)s(d),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(d)}}function k(N){if(D=!1,O(N),!A)if(i(m)!==null)A=!0,P||(P=!0,J());else{var F=i(d);F!==null&&X(k,F.startTime-N)}}var P=!1,B=-1,b=5,z=-1;function j(){return y?!0:!(o.unstable_now()-z<b)}function H(){if(y=!1,P){var N=o.unstable_now();z=N;var F=!0;try{t:{A=!1,D&&(D=!1,w(B),B=-1),E=!0;var rt=_;try{e:{for(O(N),x=i(m);x!==null&&!(x.expirationTime>N&&j());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,_=x.priorityLevel;var Mt=mt(x.expirationTime<=N);if(N=o.unstable_now(),typeof Mt=="function"){x.callback=Mt,O(N),F=!0;break e}x===i(m)&&s(m),O(N)}else s(m);x=i(m)}if(x!==null)F=!0;else{var L=i(d);L!==null&&X(k,L.startTime-N),F=!1}}break t}finally{x=null,_=rt,E=!1}F=void 0}}finally{F?J():P=!1}}}var J;if(typeof U=="function")J=function(){U(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ft=ut.port2;ut.port1.onmessage=H,J=function(){ft.postMessage(null)}}else J=function(){S(H,0)};function X(N,F){B=S(function(){N(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(N){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var rt=_;_=F;try{return N()}finally{_=rt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var rt=_;_=N;try{return F()}finally{_=rt}},o.unstable_scheduleCallback=function(N,F,rt){var mt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?mt+rt:mt):rt=mt,N){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=rt+Mt,N={id:v++,callback:F,priorityLevel:N,startTime:rt,expirationTime:Mt,sortIndex:-1},rt>mt?(N.sortIndex=rt,e(d,N),i(m)===null&&N===i(d)&&(D?(w(B),B=-1):D=!0,X(k,rt-mt))):(N.sortIndex=Mt,e(m,N),A||E||(A=!0,P||(P=!0,J()))),N},o.unstable_shouldYield=j,o.unstable_wrapCallback=function(N){var F=_;return function(){var rt=_;_=F;try{return N.apply(this,arguments)}finally{_=rt}}}})(nh)),nh}var C0;function NS(){return C0||(C0=1,eh.exports=DS()),eh.exports}var ih={exports:{}},ae={};var w0;function US(){if(w0)return ae;w0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function S(L,Q,xt){this.props=L,this.context=Q,this.refs=y,this.updater=xt||A}S.prototype.isReactComponent={},S.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=S.prototype;function U(L,Q,xt){this.props=L,this.context=Q,this.refs=y,this.updater=xt||A}var O=U.prototype=new w;O.constructor=U,D(O,S.prototype),O.isPureReactComponent=!0;var k=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function z(L,Q,xt){var At=xt.ref;return{$$typeof:o,type:L,key:Q,ref:At!==void 0?At:null,props:xt}}function j(L,Q){return z(L.type,Q,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function J(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xt){return Q[xt]})}var ut=/\/+/g;function ft(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):Q.toString(36)}function X(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,Q,xt,At,Dt){var ot=typeof L;(ot==="undefined"||ot==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(ot){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case e:St=!0;break;case v:return St=L._init,N(St(L._payload),Q,xt,At,Dt)}}if(St)return Dt=Dt(L),St=At===""?"."+ft(L,0):At,k(Dt)?(xt="",St!=null&&(xt=St.replace(ut,"$&/")+"/"),N(Dt,Q,xt,"",function($t){return $t})):Dt!=null&&(H(Dt)&&(Dt=j(Dt,xt+(Dt.key==null||L&&L.key===Dt.key?"":(""+Dt.key).replace(ut,"$&/")+"/")+St)),Q.push(Dt)),1;St=0;var bt=At===""?".":At+":";if(k(L))for(var Ht=0;Ht<L.length;Ht++)At=L[Ht],ot=bt+ft(At,Ht),St+=N(At,Q,xt,ot,Dt);else if(Ht=E(L),typeof Ht=="function")for(L=Ht.call(L),Ht=0;!(At=L.next()).done;)At=At.value,ot=bt+ft(At,Ht++),St+=N(At,Q,xt,ot,Dt);else if(ot==="object"){if(typeof L.then=="function")return N(X(L),Q,xt,At,Dt);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function F(L,Q,xt){if(L==null)return L;var At=[],Dt=0;return N(L,At,"","",function(ot){return Q.call(xt,ot,Dt++)}),At}function rt(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(xt){(L._status===0||L._status===-1)&&(L._status=1,L._result=xt)},function(xt){(L._status===0||L._status===-1)&&(L._status=2,L._result=xt)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:F,forEach:function(L,Q,xt){F(L,function(){Q.apply(this,arguments)},xt)},count:function(L){var Q=0;return F(L,function(){Q++}),Q},toArray:function(L){return F(L,function(Q){return Q})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ae.Activity=x,ae.Children=Mt,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=U,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ae.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},ae.cache=function(L){return function(){return L.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(L,Q,xt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=D({},L.props),Dt=L.key;if(Q!=null)for(ot in Q.key!==void 0&&(Dt=""+Q.key),Q)!b.call(Q,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&Q.ref===void 0||(At[ot]=Q[ot]);var ot=arguments.length-2;if(ot===1)At.children=xt;else if(1<ot){for(var St=Array(ot),bt=0;bt<ot;bt++)St[bt]=arguments[bt+2];At.children=St}return z(L.type,Dt,At)},ae.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ae.createElement=function(L,Q,xt){var At,Dt={},ot=null;if(Q!=null)for(At in Q.key!==void 0&&(ot=""+Q.key),Q)b.call(Q,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=Q[At]);var St=arguments.length-2;if(St===1)Dt.children=xt;else if(1<St){for(var bt=Array(St),Ht=0;Ht<St;Ht++)bt[Ht]=arguments[Ht+2];Dt.children=bt}if(L&&L.defaultProps)for(At in St=L.defaultProps,St)Dt[At]===void 0&&(Dt[At]=St[At]);return z(L,ot,Dt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(L){return{$$typeof:p,render:L}},ae.isValidElement=H,ae.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:rt}},ae.memo=function(L,Q){return{$$typeof:d,type:L,compare:Q===void 0?null:Q}},ae.startTransition=function(L){var Q=B.T,xt={};B.T=xt;try{var At=L(),Dt=B.S;Dt!==null&&Dt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(P,mt)}catch(ot){mt(ot)}finally{Q!==null&&xt.types!==null&&(Q.types=xt.types),B.T=Q}},ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ae.use=function(L){return B.H.use(L)},ae.useActionState=function(L,Q,xt){return B.H.useActionState(L,Q,xt)},ae.useCallback=function(L,Q){return B.H.useCallback(L,Q)},ae.useContext=function(L){return B.H.useContext(L)},ae.useDebugValue=function(){},ae.useDeferredValue=function(L,Q){return B.H.useDeferredValue(L,Q)},ae.useEffect=function(L,Q){return B.H.useEffect(L,Q)},ae.useEffectEvent=function(L){return B.H.useEffectEvent(L)},ae.useId=function(){return B.H.useId()},ae.useImperativeHandle=function(L,Q,xt){return B.H.useImperativeHandle(L,Q,xt)},ae.useInsertionEffect=function(L,Q){return B.H.useInsertionEffect(L,Q)},ae.useLayoutEffect=function(L,Q){return B.H.useLayoutEffect(L,Q)},ae.useMemo=function(L,Q){return B.H.useMemo(L,Q)},ae.useOptimistic=function(L,Q){return B.H.useOptimistic(L,Q)},ae.useReducer=function(L,Q,xt){return B.H.useReducer(L,Q,xt)},ae.useRef=function(L){return B.H.useRef(L)},ae.useState=function(L){return B.H.useState(L)},ae.useSyncExternalStore=function(L,Q,xt){return B.H.useSyncExternalStore(L,Q,xt)},ae.useTransition=function(){return B.H.useTransition()},ae.version="19.2.3",ae}var D0;function Nd(){return D0||(D0=1,ih.exports=US()),ih.exports}var ah={exports:{}},Un={};var N0;function LS(){if(N0)return Un;N0=1;var o=Nd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Un.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Un.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Un.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,d){return m(d)},Un.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.3",Un}var U0;function OS(){if(U0)return ah.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ah.exports=LS(),ah.exports}var L0;function PS(){if(L0)return Lo;L0=1;var o=NS(),e=Nd(),i=OS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,R=u.child;R;){if(R===a){g=!0,a=u,r=f;break}if(R===r){g=!0,r=u,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,r=u;break}if(R===r){g=!0,r=f,a=u;break}R=R.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case P:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var X=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},mt=[],Mt=-1;function L(t){return{current:t}}function Q(t){0>Mt||(t.current=mt[Mt],mt[Mt]=null,Mt--)}function xt(t,n){Mt++,mt[Mt]=t.current,t.current=n}var At=L(null),Dt=L(null),ot=L(null),St=L(null);function bt(t,n){switch(xt(ot,n),xt(Dt,t),xt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jg(n),t=Zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(At),xt(At,t)}function Ht(){Q(At),Q(Dt),Q(ot)}function $t(t){t.memoizedState!==null&&xt(St,t);var n=At.current,a=Zg(n,t.type);n!==a&&(xt(Dt,t),xt(At,a))}function Qt(t){Dt.current===t&&(Q(At),Q(Dt)),St.current===t&&(Q(St),Co._currentValue=rt)}var Xe,fe;function _e(t){if(Xe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xe=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+t+fe}var Ne=!1;function le(t,n){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var st=lt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(lt){st=lt}t.call(vt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var I=g.split(`
`),tt=R.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===tt.length)for(r=I.length-1,u=tt.length-1;1<=r&&0<=u&&I[r]!==tt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==tt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==tt[u]){var dt=`
`+I[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_e(a):""}function sn(t,n){switch(t.tag){case 26:case 27:case 5:return _e(t.type);case 16:return _e("Lazy");case 13:return t.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return _e("Activity");default:return""}}function Ye(t){try{var n="",a=null;do n+=sn(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var En=Object.prototype.hasOwnProperty,W=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,he=o.unstable_shouldYield,Ie=o.unstable_requestPaint,Rt=o.unstable_now,Ke=o.unstable_getCurrentPriorityLevel,C=o.unstable_ImmediatePriority,M=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Et=o.unstable_IdlePriority,Ct=o.log,Lt=o.unstable_setDisableYieldValue,ct=null,ht=null;function Ot(t){if(typeof Ct=="function"&&Lt(t),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ct,t)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Nt=Math.log,wt=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Nt(t)/wt|0)|0}var ie=256,de=262144,G=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Tt(r):(g&=R,g!==0?u=Tt(g):a||(a=R&~t,a!==0&&(u=Tt(a))))):(R=r&~f,R!==0?u=Tt(R):g!==0?u=Tt(g):a||(a=r&~t,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var t=G;return G<<=1,(G&62914560)===0&&(G=4194304),t}function qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function te(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,a,r,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var dt=31-Pt(a),vt=1<<dt;R[dt]=0,I[dt]=-1;var st=tt[dt];if(st!==null)for(tt[dt]=null,dt=0;dt<st.length;dt++){var lt=st[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}r!==0&&Ce(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ce(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ri(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function jn(t,n){var a=n&-n;return a=(a&42)!==0?1:os(a),(a&(t.suspendedLanes|n))!==0?0:a}function os(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hr(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:v0(t.type))}function Gr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var Dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Dn,bn="__reactProps$"+Dn,qi="__reactContainer$"+Dn,Ea="__reactEvents$"+Dn,Ko="__reactListeners$"+Dn,Is="__reactHandles$"+Dn,Vr="__reactResources$"+Dn,ba="__reactMarker$"+Dn;function kr(t){delete t[rn],delete t[bn],delete t[Ea],delete t[Ko],delete t[Is]}function Ta(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=n0(t);t!==null;){if(a=t[rn])return a;t=n0(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[rn]||t[qi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ls(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[Vr];return n||(n=t[Vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[ba]=!0}var Qo=new Set,T={};function q(t,n){at(t,n),at(t+"Capture",n)}function at(t,n){for(T[t]=n,t=0;t<n.length;t++)Qo.add(n[t])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Ft={};function Vt(t){return En.call(Ft,t)?!0:En.call(nt,t)?!1:et.test(t)?Ft[t]=!0:(nt[t]=!0,!1)}function zt(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function kt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function re(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Te(t){if(!t._valueTracker){var n=re(t)?"checked":"value";t._valueTracker=jt(t,n,""+t[n])}}function Qe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=re(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function We(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function Le(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(t,n,a,r,u,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?pe(t,g,Zt(n)):a!=null?pe(t,g,Zt(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Zt(R):t.removeAttribute("name")}function Nn(t,n,a,r,u,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Te(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Te(t)}function pe(t,n,a){n==="number"&&We(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Zn(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function xi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(X(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Te(t)}function Kn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Je(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Oe.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Si(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Je(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Je(t,f,n[f])}function De(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var Zc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function Yd(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Le(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[bn]||null;if(!u)throw Error(s(90));Gt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Qe(r)}break t;case"textarea":Zn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var Qc=!1;function jd(t,n,a){if(Qc)return t(n,a);Qc=!0;try{var r=t(n);return r}finally{if(Qc=!1,(Hs!==null||Gs!==null)&&(Bl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,Yd(n),t)))for(n=0;n<t.length;n++)Yd(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[bn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(ji)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Jc=!1}var wa=null,$c=null,Jo=null;function Zd(){if(Jo)return Jo;var t,n=$c,a=n.length,r,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return Jo=u.slice(t,1<r?1-r:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Kd(){return!1}function In(t){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Kd,this.isPropagationStopped=Kd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=In(us),qr=x({},us,{view:0,detail:0}),Av=In(qr),tu,eu,Yr,nl=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?(tu=t.screenX-Yr.screenX,eu=t.screenY-Yr.screenY):eu=tu=0,Yr=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Qd=In(nl),Rv=x({},nl,{dataTransfer:0}),Cv=In(Rv),wv=x({},qr,{relatedTarget:0}),nu=In(wv),Dv=x({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=In(Dv),Uv=x({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=In(Uv),Ov=x({},us,{data:0}),Jd=In(Ov),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Fv[t])?!!n[t]:!1}function iu(){return Bv}var Iv=x({},qr,{key:function(t){if(t.key){var n=Pv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=In(Iv),Gv=x({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=In(Gv),Vv=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),kv=In(Vv),Xv=x({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=In(Xv),qv=x({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=In(qv),jv=x({},us,{newState:0,oldState:0}),Zv=In(jv),Kv=[9,13,27,32],au=ji&&"CompositionEvent"in window,jr=null;ji&&"documentMode"in document&&(jr=document.documentMode);var Qv=ji&&"TextEvent"in window&&!jr,tp=ji&&(!au||jr&&8<jr&&11>=jr),ep=" ",np=!1;function ip(t,n){switch(t){case"keyup":return Kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function Jv(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return t=n.data,t===ep&&np?null:t;default:return null}}function $v(t,n){if(Vs)return t==="compositionend"||!au&&ip(t,n)?(t=Zd(),Jo=$c=wa=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tx[t.type]:n==="textarea"}function rp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Wl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Zr=null,Kr=null;function ex(t){Vg(t,0)}function il(t){var n=ls(t);if(Qe(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(ji){var su;if(ji){var ru="oninput"in document;if(!ru){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),ru=typeof cp.oninput=="function"}su=ru}else su=!1;lp=su&&(!document.documentMode||9<document.documentMode)}function up(){Zr&&(Zr.detachEvent("onpropertychange",fp),Kr=Zr=null)}function fp(t){if(t.propertyName==="value"&&il(Kr)){var n=[];rp(n,Kr,t,Kc(t)),jd(ex,n)}}function nx(t,n,a){t==="focusin"?(up(),Zr=n,Kr=a,Zr.attachEvent("onpropertychange",fp)):t==="focusout"&&up()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Kr)}function ax(t,n){if(t==="click")return il(n)}function sx(t,n){if(t==="input"||t==="change")return il(n)}function rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:rx;function Qr(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!En.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=hp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=We(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=We(t.document)}return n}function ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ox=ji&&"documentMode"in document&&11>=document.documentMode,ks=null,lu=null,Jr=null,cu=!1;function gp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||ks==null||ks!==We(r)||(r=ks,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Wl(lu,"onSelect"),0<r.length&&(n=new el("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},uu={},_p={};ji&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function hs(t){if(uu[t])return uu[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return uu[t]=n[a];return t}var vp=hs("animationend"),xp=hs("animationiteration"),Sp=hs("animationstart"),lx=hs("transitionrun"),cx=hs("transitionstart"),ux=hs("transitioncancel"),yp=hs("transitionend"),Mp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function yi(t,n){Mp.set(t,n),q(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],Ws=0,hu=0;function sl(){for(var t=Ws,n=hu=Ws=0;n<t;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&Ep(a,u,f)}}function rl(t,n,a,r){oi[Ws++]=t,oi[Ws++]=n,oi[Ws++]=a,oi[Ws++]=r,hu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function du(t,n,a,r){return rl(t,n,a,r),ol(t)}function ds(t,n){return rl(t,null,null,n),ol(t)}function Ep(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<yo)throw yo=0,Ef=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function fx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new fx(t,n,a,r)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,r,u,f){var g=0;if(r=t,typeof t=="function")pu(t)&&(g=1);else if(typeof t=="string")g=gS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case z:return t=Jn(31,a,n,u),t.elementType=z,t.lanes=f,t;case D:return ps(a.children,u,f,n);case y:g=8,u|=24;break;case S:return t=Jn(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case k:return t=Jn(13,a,n,u),t.elementType=k,t.lanes=f,t;case P:return t=Jn(19,a,n,u),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case w:g=9;break t;case O:g=11;break t;case B:g=14;break t;case b:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ps(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function mu(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function Tp(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function gu(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ap=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ye(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:Ye(n)}}var Ys=[],js=0,cl=null,$r=0,ci=[],ui=0,Da=null,Oi=1,Pi="";function Ki(t,n){Ys[js++]=$r,Ys[js++]=cl,cl=t,$r=n}function Rp(t,n,a){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=Da,Da=t;var r=Oi;t=Pi;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Oi=1<<32-Pt(n)+u|a<<u|r,Pi=f+t}else Oi=1<<f|a<<u|r,Pi=t}function _u(t){t.return!==null&&(Ki(t,1),Rp(t,1,0))}function vu(t){for(;t===cl;)cl=Ys[--js],Ys[js]=null,$r=Ys[--js],Ys[js]=null;for(;t===Da;)Da=ci[--ui],ci[ui]=null,Pi=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null}function Cp(t,n){ci[ui++]=Oi,ci[ui++]=Pi,ci[ui++]=Da,Oi=n.id,Pi=n.overflow,Da=t}var Tn=null,je=null,Se=!1,Na=null,fi=!1,xu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(li(n,t)),xu}function wp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[rn]=t,n[bn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)ge(Eo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Nn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),xi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||qg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ua(t,!0)}function Dp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Zs(t){if(t!==Tn)return!1;if(!Se)return Dp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Bf(t.type,t.memoizedProps)),a=!a),a&&je&&Ua(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=e0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=e0(t)}else n===27?(n=je,qa(t.type)?(t=kf,kf=null,je=t):je=n):je=Tn?di(t.stateNode.nextSibling):null;return!0}function ms(){je=Tn=null,Se=!1}function Su(){var t=Na;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Na=null),t}function to(t){Na===null?Na=[t]:Na.push(t)}var yu=L(null),gs=null,Qi=null;function La(t,n,a){xt(yu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=yu.current,Q(yu)}function Mu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Eu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Mu(f.return,a,t),r||(g=null);break t}f=R.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Mu(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var R=u.type;Qn(u.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(u===St.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Eu(n,t,a,r),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){gs=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Np(gs,t)}function fl(t,n){return gs===null&&_s(t),Np(t,n)}function Np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(s(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new hx,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&dx(px,function(){t.controller.abort()})}var no=null,Tu=0,Qs=0,Js=null;function mx(t,n){if(no===null){var a=no=[];Tu=0,Qs=wf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Up,Up),n}function Up(){if(--Tu===0&&no!==null){Js!==null&&(Js.status="fulfilled");var t=no;no=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function gx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Lp=N.S;N.S=function(t,n){gg=Rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mx(t,n),Lp!==null&&Lp(t,n)};var vs=L(null);function Au(){var t=vs.current;return t!==null?t:qe.pooledCache}function hl(t,n){n===null?xt(vs,vs.current):xt(vs,n.pool)}function Op(){var t=Au();return t===null?null:{parent:fn._currentValue,pool:t}}var $s=Error(s(460)),Ru=Error(s(474)),dl=Error(s(542)),pl={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bp(t),t}throw Ss=n,$s}}function xs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,$s):a}}var Ss=null;function Fp(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function Bp(t){if(t===$s||t===dl)throw Error(s(483))}var tr=null,io=0;function ml(t){var n=io;return io+=1,tr===null&&(tr=[]),zp(tr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ip(t){function n(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Zi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,V,$,gt){return V===null||V.tag!==6?(V=mu($,Y.mode,gt),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function I(Y,V,$,gt){var Kt=$.type;return Kt===D?dt(Y,V,$.props.children,gt,$.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&xs(Kt)===V.type)?(V=u(V,$.props),ao(V,$),V.return=Y,V):(V=ll($.type,$.key,$.props,null,Y.mode,gt),ao(V,$),V.return=Y,V)}function tt(Y,V,$,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=gu($,Y.mode,gt),V.return=Y,V):(V=u(V,$.children||[]),V.return=Y,V)}function dt(Y,V,$,gt,Kt){return V===null||V.tag!==7?(V=ps($,Y.mode,gt,Kt),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function vt(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=mu(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return $=ll(V.type,V.key,V.props,null,Y.mode,$),ao($,V),$.return=Y,$;case A:return V=gu(V,Y.mode,$),V.return=Y,V;case b:return V=xs(V),vt(Y,V,$)}if(X(V)||J(V))return V=ps(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return vt(Y,ml(V),$);if(V.$$typeof===U)return vt(Y,fl(Y,V),$);gl(Y,V)}return null}function st(Y,V,$,gt){var Kt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:R(Y,V,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Kt?I(Y,V,$,gt):null;case A:return $.key===Kt?tt(Y,V,$,gt):null;case b:return $=xs($),st(Y,V,$,gt)}if(X($)||J($))return Kt!==null?null:dt(Y,V,$,gt,null);if(typeof $.then=="function")return st(Y,V,ml($),gt);if($.$$typeof===U)return st(Y,V,fl(Y,$),gt);gl(Y,$)}return null}function lt(Y,V,$,gt,Kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get($)||null,R(V,Y,""+gt,Kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return Y=Y.get(gt.key===null?$:gt.key)||null,I(V,Y,gt,Kt);case A:return Y=Y.get(gt.key===null?$:gt.key)||null,tt(V,Y,gt,Kt);case b:return gt=xs(gt),lt(Y,V,$,gt,Kt)}if(X(gt)||J(gt))return Y=Y.get($)||null,dt(V,Y,gt,Kt,null);if(typeof gt.then=="function")return lt(Y,V,$,ml(gt),Kt);if(gt.$$typeof===U)return lt(Y,V,$,fl(V,gt),Kt);gl(V,gt)}return null}function Wt(Y,V,$,gt){for(var Kt=null,Ae=null,Yt=V,ce=V=0,xe=null;Yt!==null&&ce<$.length;ce++){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=st(Y,Yt,$[ce],gt);if(Re===null){Yt===null&&(Yt=xe);break}t&&Yt&&Re.alternate===null&&n(Y,Yt),V=f(Re,V,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(ce===$.length)return a(Y,Yt),Se&&Ki(Y,ce),Kt;if(Yt===null){for(;ce<$.length;ce++)Yt=vt(Y,$[ce],gt),Yt!==null&&(V=f(Yt,V,ce),Ae===null?Kt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&Ki(Y,ce),Kt}for(Yt=r(Yt);ce<$.length;ce++)xe=lt(Yt,Y,ce,$[ce],gt),xe!==null&&(t&&xe.alternate!==null&&Yt.delete(xe.key===null?ce:xe.key),V=f(xe,V,ce),Ae===null?Kt=xe:Ae.sibling=xe,Ae=xe);return t&&Yt.forEach(function(Qa){return n(Y,Qa)}),Se&&Ki(Y,ce),Kt}function Jt(Y,V,$,gt){if($==null)throw Error(s(151));for(var Kt=null,Ae=null,Yt=V,ce=V=0,xe=null,Re=$.next();Yt!==null&&!Re.done;ce++,Re=$.next()){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var Qa=st(Y,Yt,Re.value,gt);if(Qa===null){Yt===null&&(Yt=xe);break}t&&Yt&&Qa.alternate===null&&n(Y,Yt),V=f(Qa,V,ce),Ae===null?Kt=Qa:Ae.sibling=Qa,Ae=Qa,Yt=xe}if(Re.done)return a(Y,Yt),Se&&Ki(Y,ce),Kt;if(Yt===null){for(;!Re.done;ce++,Re=$.next())Re=vt(Y,Re.value,gt),Re!==null&&(V=f(Re,V,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return Se&&Ki(Y,ce),Kt}for(Yt=r(Yt);!Re.done;ce++,Re=$.next())Re=lt(Yt,Y,ce,Re.value,gt),Re!==null&&(t&&Re.alternate!==null&&Yt.delete(Re.key===null?ce:Re.key),V=f(Re,V,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return t&&Yt.forEach(function(RS){return n(Y,RS)}),Se&&Ki(Y,ce),Kt}function Ve(Y,V,$,gt){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Kt=$.key;V!==null;){if(V.key===Kt){if(Kt=$.type,Kt===D){if(V.tag===7){a(Y,V.sibling),gt=u(V,$.props.children),gt.return=Y,Y=gt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&xs(Kt)===V.type){a(Y,V.sibling),gt=u(V,$.props),ao(gt,$),gt.return=Y,Y=gt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}$.type===D?(gt=ps($.props.children,Y.mode,gt,$.key),gt.return=Y,Y=gt):(gt=ll($.type,$.key,$.props,null,Y.mode,gt),ao(gt,$),gt.return=Y,Y=gt)}return g(Y);case A:t:{for(Kt=$.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),gt=u(V,$.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}gt=gu($,Y.mode,gt),gt.return=Y,Y=gt}return g(Y);case b:return $=xs($),Ve(Y,V,$,gt)}if(X($))return Wt(Y,V,$,gt);if(J($)){if(Kt=J($),typeof Kt!="function")throw Error(s(150));return $=Kt.call($),Jt(Y,V,$,gt)}if(typeof $.then=="function")return Ve(Y,V,ml($),gt);if($.$$typeof===U)return Ve(Y,V,fl(Y,$),gt);gl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),gt=u(V,$),gt.return=Y,Y=gt):(a(Y,V),gt=mu($,Y.mode,gt),gt.return=Y,Y=gt),g(Y)):a(Y,V)}return function(Y,V,$,gt){try{io=0;var Kt=Ve(Y,V,$,gt);return tr=null,Kt}catch(Yt){if(Yt===$s||Yt===dl)throw Yt;var Ae=Jn(29,Yt,null,Y.mode);return Ae.lanes=gt,Ae.return=Y,Ae}}}var ys=Ip(!0),Hp=Ip(!1),Oa=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ol(t),Ep(t,null,a),n}return rl(t,r,n,a),ol(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ri(t,a)}}function Du(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function ro(){if(Nu){var t=Js;if(t!==null)throw t}}function oo(t,n,a,r){Nu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var I=R,tt=I.next;I.next=null,g===null?f=tt:g.next=tt,g=I;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==g&&(R===null?dt.firstBaseUpdate=tt:R.next=tt,dt.lastBaseUpdate=I))}if(f!==null){var vt=u.baseState;g=0,dt=tt=I=null,R=f;do{var st=R.lane&-536870913,lt=st!==R.lane;if(lt?(ve&st)===st:(r&st)===st){st!==0&&st===Qs&&(Nu=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=t,Jt=R;st=n;var Ve=a;switch(Jt.tag){case 1:if(Wt=Jt.payload,typeof Wt=="function"){vt=Wt.call(Ve,vt,st);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=Jt.payload,st=typeof Wt=="function"?Wt.call(Ve,vt,st):Wt,st==null)break t;vt=x({},vt,st);break t;case 2:Oa=!0}}st=R.callback,st!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(tt=dt=lt,I=vt):dt=dt.next=lt,g|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(I=vt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ga|=g,t.lanes=g,t.memoizedState=vt}}function Gp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var er=L(null),_l=L(0);function kp(t,n){t=oa,xt(_l,t),xt(er,n),oa=t|n.baseLanes}function Uu(){xt(_l,oa),xt(er,er.current)}function Lu(){oa=_l.current,Q(er),Q(_l)}var $n=L(null),hi=null;function Fa(t){var n=t.alternate;xt(on,on.current&1),xt($n,t),hi===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(hi=t)}function Ou(t){xt(on,on.current),xt($n,t),hi===null&&(hi=t)}function Xp(t){t.tag===22?(xt(on,on.current),xt($n,t),hi===null&&(hi=t)):Ba()}function Ba(){xt(on,on.current),xt($n,$n.current)}function ti(t){Q($n),hi===t&&(hi=null),Q(on)}var on=L(0);function vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,oe=null,He=null,hn=null,xl=!1,nr=!1,Ms=!1,Sl=0,lo=0,ir=null,_x=0;function nn(){throw Error(s(321))}function Pu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function zu(t,n,a,r,u,f){return $i=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Rm:Qu,Ms=!1,f=a(r,u),Ms=!1,nr&&(f=qp(n,a,r,u)),Wp(t),f}function Wp(t){N.H=fo;var n=He!==null&&He.next!==null;if($i=0,hn=He=oe=null,xl=!1,lo=0,ir=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&ul(t)&&(dn=!0))}function qp(t,n,a,r){oe=t;var u=0;do{if(nr&&(ir=null),lo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,hn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Cm,f=n(a,r)}while(nr);return f}function vx(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Fu(){var t=Sl!==0;return Sl=0,t}function Bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Iu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}$i=0,hn=He=oe=null,nr=!1,lo=Sl=0,ir=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?oe.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=hn===null?oe.memoizedState:hn.next;if(n!==null)hn=n,He=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},hn===null?oe.memoizedState=hn=t:hn=hn.next=t}return hn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,ir===null&&(ir=[]),t=zp(ir,t,n),n=oe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Rm:Qu),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function Hu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=j;return n.index++,a}function ta(t,n){return typeof n=="function"?n(t):n}function El(t){var n=ln();return Gu(n,He,t)}function Gu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=g=null,I=null,tt=n,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(ve&vt)===vt:($i&vt)===vt){var st=tt.revertLane;if(st===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Qs&&(dt=!0);else if(($i&st)===st){tt=tt.next,st===Qs&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(R=I=vt,g=f):I=I.next=vt,oe.lanes|=st,Ga|=st;vt=tt.action,Ms&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else st={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(R=I=st,g=f):I=I.next=st,oe.lanes|=vt,Ga|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?g=f:I.next=R,!Qn(f,t.memoizedState)&&(dn=!0,dt&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Vu(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Qn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Yp(t,n,a){var r=oe,u=ln(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Qn((He||u).memoizedState,a);if(g&&(u.memoizedState=a,dn=!0),u=u.queue,Wu(Kp.bind(null,r,u,t),[t]),u.getSnapshot!==n||g||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},Zp.bind(null,r,u,a,n),null),qe===null)throw Error(s(349));f||($i&127)!==0||jp(r,n,a)}return a}function jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=yl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zp(t,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function Jp(t){var n=ds(t,2);n!==null&&Xn(n,t,2)}function ku(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Ms){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},n}function $p(t,n,a,r){return t.baseState=a,Gu(t,He,typeof r=="function"?r:ta)}function xx(t,n,a,r,u){if(Al(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var R=a(u,r),I=N.S;I!==null&&I(g,R),em(t,n,R)}catch(tt){Xu(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,r),em(t,n,f)}catch(tt){Xu(t,n,tt)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(t,n,r)},function(r){return Xu(t,n,r)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Xu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function sm(t,n){if(Se){var a=qe.formState;if(a!==null){t:{var r=oe;if(Se){if(je){e:{for(var u=je,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=di(u.nextSibling),r=u.data==="F!";break t}}Ua(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=bm.bind(null,oe,r),r.dispatch=a,r=ku(!1),f=Ku.bind(null,oe,!1,r.queue),r=zn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=xx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function rm(t){var n=ln();return om(n,He,t)}function om(t,n,a){if(n=Gu(t,n,am)[0],t=El(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(g){throw g===$s?dl:g}else r=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ar(9,{destroy:void 0},Sx.bind(null,u,a),null)),[r,f,t]}function Sx(t,n){t.action=n}function lm(t){var n=ln(),a=He;if(a!==null)return om(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=yl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function cm(){return ln().memoizedState}function bl(t,n,a,r){var u=zn();oe.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(t,n,a,r){var u=ln();r=r===void 0?null:r;var f=u.memoizedState.inst;He!==null&&r!==null&&Pu(r,He.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(oe.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function um(t,n){bl(8390656,8,t,n)}function Wu(t,n){Tl(2048,8,t,n)}function yx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=yl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fm(t){var n=ln().memoizedState;return yx({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hm(t,n){return Tl(4,2,t,n)}function dm(t,n){return Tl(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,pm.bind(null,n,t),a)}function qu(){}function gm(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Pu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function _m(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Pu(n,r[1]))return r[0];if(r=t(),Ms){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function Yu(t,n,a){return a===void 0||($i&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=vg(),oe.lanes|=t,Ga|=t,a)}function vm(t,n,a,r){return Qn(a,n)?a:er.current!==null?(t=Yu(t,a,r),Qn(t,n)||(dn=!0),t):($i&42)===0||($i&1073741824)!==0&&(ve&261930)===0?(dn=!0,t.memoizedState=a):(t=vg(),oe.lanes|=t,Ga|=t,n)}function xm(t,n,a,r,u){var f=F.p;F.p=f!==0&&8>f?f:8;var g=N.T,R={};N.T=R,Ku(t,!1,n,a);try{var I=u(),tt=N.S;if(tt!==null&&tt(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=gx(I,r);uo(t,n,dt,ii(t))}else uo(t,n,r,ii(t))}catch(vt){uo(t,n,{then:function(){},status:"rejected",reason:vt},ii())}finally{F.p=f,g!==null&&R.types!==null&&(g.types=R.types),N.T=g}}function Mx(){}function ju(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Sm(t).queue;xm(t,u,n,rt,a===null?Mx:function(){return ym(t),a(r)})}function Sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ym(t){var n=Sm(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ii())}function Zu(){return An(Co)}function Mm(){return ln().memoizedState}function Em(){return ln().memoizedState}function Ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Pa(a);var r=za(n,t,a);r!==null&&(Xn(r,n,a),so(r,n,a)),n={cache:bu()},t.payload=n;return}n=n.return}}function bx(t,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Tm(n,a):(a=du(t,n,a,r),a!==null&&(Xn(a,t,r),Am(a,n,r)))}function bm(t,n,a){var r=ii();uo(t,n,a,r)}function uo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Tm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(u.hasEagerState=!0,u.eagerState=R,Qn(R,g))return rl(t,n,u,0),qe===null&&sl(),!1}catch{}if(a=du(t,n,u,r),a!==null)return Xn(a,t,r),Am(a,n,r),!0}return!1}function Ku(t,n,a,r){if(r={lane:2,revertLane:wf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(s(479))}else n=du(t,a,r,2),n!==null&&Xn(n,t,2)}function Al(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Tm(t,n){nr=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ri(t,a)}}var fo={readContext:An,use:Ml,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};fo.useEffectEvent=nn;var Rm={readContext:An,use:Ml,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var r=t();if(Ms){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=zn();if(a!==void 0){var u=a(n);if(Ms){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=bx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=ku(t);var n=t.queue,a=bm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(t,n){var a=zn();return Yu(a,t,n)},useTransition:function(){var t=ku(!1);return t=xm.bind(null,oe,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=zn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ve&127)!==0||jp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,um(Kp.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var t=zn(),n=qe.identifierPrefix;if(Se){var a=Pi,r=Oi;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Zu,useFormState:sm,useActionState:sm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Hu,useCacheRefresh:function(){return zn().memoizedState=Ex.bind(null,oe)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:An,use:Ml,useCallback:gm,useContext:An,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:El,useRef:cm,useState:function(){return El(ta)},useDebugValue:qu,useDeferredValue:function(t,n){var a=ln();return vm(a,He.memoizedState,t,n)},useTransition:function(){var t=El(ta)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:Zu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=ln();return $p(a,He,t,n)},useMemoCache:Hu,useCacheRefresh:Em};Qu.useEffectEvent=fm;var Cm={readContext:An,use:Ml,useCallback:gm,useContext:An,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Vu,useRef:cm,useState:function(){return Vu(ta)},useDebugValue:qu,useDeferredValue:function(t,n){var a=ln();return He===null?Yu(a,t,n):vm(a,He.memoizedState,t,n)},useTransition:function(){var t=Vu(ta)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:Zu,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=ln();return He!==null?$p(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function Ju(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $u={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,r),n!==null&&(Xn(n,t,r),so(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ii(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,r),n!==null&&(Xn(n,t,r),so(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=za(t,r,a),n!==null&&(Xn(n,t,a),so(n,t,a))}};function wm(t,n,a,r,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Dm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&$u.enqueueReplaceState(n,n.state,null)}function Es(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Nm(t){al(t)}function Um(t){console.error(t)}function Lm(t){al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function Pm(t){return t=Pa(t),t.tag=3,t}function zm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Om(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Om(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Tx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Il():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Af(t,r,u)),!1;case 22:return a.flags|=65536,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Af(t,r,u)),!1}throw Error(s(435,a.tag))}return Af(t,r,u),Il(),!1}if(Se)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==xu&&(t=Error(s(422),{cause:r}),to(li(t,a)))):(r!==xu&&(n=Error(s(423),{cause:r}),to(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=li(r,a),u=tf(t.stateNode,r,u),Du(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),So===null?So=[f]:So.push(f),an!==4&&(an=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=tf(a.stateNode,r,t),Du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),zm(u,t,a,r),Du(a,u),!1}a=a.return}while(a!==null);return!1}var ef=Error(s(461)),dn=!1;function Rn(t,n,a,r){n.child=t===null?Hp(n,null,a,r):ys(n,t.child,a,r)}function Fm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var R in r)R!=="ref"&&(g[R]=r[R])}else g=r;return _s(n),r=zu(t,n,a,g,f,u),R=Fu(),t!==null&&!dn?(Bu(t,n,u),ea(t,n,u)):(Se&&R&&_u(n),n.flags|=1,Rn(t,n,r,u),n.child)}function Bm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Im(t,n,f,r,u)):(t=ll(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!uf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(g,r)&&t.ref===n.ref)return ea(t,n,u)}return n.flags|=1,t=Zi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Im(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Qr(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,uf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ea(t,n,u)}return nf(t,n,a,r,u)}function Hm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Gm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&hl(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Uu(),Xp(n);else return r=n.lanes=536870912,Gm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(hl(n,f.cachePool),kp(n,f),Ba(),n.memoizedState=null):(t!==null&&hl(n,null),Uu(),Ba());return Rn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(t,n,a,r,u){var f=Au();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&hl(n,null),Uu(),Xp(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Cl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return ys(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function Ax(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Cl(n,r),n.lanes=536870912,ho(null,t);if(Ou(n),(t=je)?(t=t0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Tn=n,je=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Cl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Ou(n),u)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(r=qe,r!==null&&(g=jn(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ds(t,g),Xn(r,t,g),ef;Il(),n=Vm(t,n,a)}else t=f.treeContext,je=di(g.nextSibling),Tn=n,Se=!0,Na=null,fi=!1,t!==null&&Cp(n,t),n=Cl(n,r),n.flags|=4096;return n}return t=Zi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nf(t,n,a,r,u){return _s(n),a=zu(t,n,a,r,void 0,u),r=Fu(),t!==null&&!dn?(Bu(t,n,u),ea(t,n,u)):(Se&&r&&_u(n),n.flags|=1,Rn(t,n,a,u),n.child)}function km(t,n,a,r,u,f){return _s(n),n.updateQueue=null,a=qp(n,r,a,u),Wp(t),r=Fu(),t!==null&&!dn?(Bu(t,n,f),ea(t,n,f)):(Se&&r&&_u(n),n.flags|=1,Rn(t,n,a,f),n.child)}function Xm(t,n,a,r,u){if(_s(n),n.stateNode===null){var f=qs,g=a.contextType;typeof g=="object"&&g!==null&&(f=An(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Cu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?An(g):qs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ju(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&$u.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,I=Es(a,R);f.props=I;var tt=f.context,dt=a.contextType;g=qs,typeof dt=="object"&&dt!==null&&(g=An(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||tt!==g)&&Dm(n,f,r,g),Oa=!1;var st=n.memoizedState;f.state=st,oo(n,r,f,u),ro(),tt=n.memoizedState,R||st!==tt||Oa?(typeof vt=="function"&&(Ju(n,a,vt,r),tt=n.memoizedState),(I=Oa||wm(n,a,I,r,st,tt,g))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,wu(t,n),g=n.memoizedProps,dt=Es(a,g),f.props=dt,vt=n.pendingProps,st=f.context,tt=a.contextType,I=qs,typeof tt=="object"&&tt!==null&&(I=An(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||st!==I)&&Dm(n,f,r,I),Oa=!1,st=n.memoizedState,f.state=st,oo(n,r,f,u),ro();var lt=n.memoizedState;g!==vt||st!==lt||Oa||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof R=="function"&&(Ju(n,a,R,r),lt=n.memoizedState),(dt=Oa||wm(n,a,dt,r,st,lt,I)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,wl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ys(n,t.child,null,u),n.child=ys(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ea(t,n,u),t}function Wm(t,n,a,r){return ms(),n.flags|=256,Rn(t,n,a,r),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(t){return{baseLanes:t,cachePool:Op()}}function rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function qm(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Fa(n):Ba(),(t=je)?(t=t0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Tn=n,je=null)):t=null,t===null)throw Ua(n);return Vf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Ba(),u=n.mode,R=Dl({mode:"hidden",children:R},u),r=ps(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=sf(a),r.childLanes=rf(t,g,a),n.memoizedState=af,ho(null,r)):(Fa(n),of(n,R))}var I=t.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=lf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),R=r.fallback,u=n.mode,r=Dl({mode:"visible",children:r.children},u),R=ps(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ys(n,t.child,null,a),r=n.child,r.memoizedState=sf(a),r.childLanes=rf(t,g,a),n.memoizedState=af,n=ho(null,r));else if(Fa(n),Vf(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var tt=g.dgst;g=tt,r=Error(s(419)),r.stack="",r.digest=g,to({value:r,source:null,stack:null}),n=lf(t,n,a)}else if(dn||Ks(t,n,a,!1),g=(a&t.childLanes)!==0,dn||g){if(g=qe,g!==null&&(r=jn(g,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,ds(t,r),Xn(g,t,r),ef;Gf(R)||Il(),n=lf(t,n,a)}else Gf(R)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,je=di(R.nextSibling),Tn=n,Se=!0,Na=null,fi=!1,t!==null&&Cp(n,t),n=of(n,r.children),n.flags|=4096);return n}return u?(Ba(),R=r.fallback,u=n.mode,I=t.child,tt=I.sibling,r=Zi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,tt!==null?R=Zi(tt,R):(R=ps(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,ho(null,r),r=n.child,R=t.child.memoizedState,R===null?R=sf(a):(u=R.cachePool,u!==null?(I=fn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Op(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=rf(t,g,a),n.memoizedState=af,ho(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function of(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function lf(t,n,a){return ys(n,t.child,null,a),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ym(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Mu(t.return,n,a)}function cf(t,n,a,r,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function jm(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=on.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,xt(on,g),Rn(t,n,r,a),r=Se?$r:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,a,n);else if(t.tag===19)Ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&vl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&vl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}cf(n,!0,a,null,f,r);break;case"together":cf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function Rx(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),La(n,fn,t.memoizedState.cache),ms();break;case 27:case 5:$t(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(t,n,a):(Fa(n),t=ea(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return jm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(on,on.current),r)break;return null;case 22:return n.lanes=0,Hm(t,n,a,n.pendingProps);case 24:La(n,fn,t.memoizedState.cache)}return ea(t,n,a)}function Zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!uf(t,a)&&(n.flags&128)===0)return dn=!1,Rx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Se&&(n.flags&1048576)!==0&&Rp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=xs(n.elementType),n.type=t,typeof t=="function")pu(t)?(r=Es(t,r),n.tag=1,n=Xm(null,n,t,r,a)):(n.tag=0,n=nf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=Fm(null,n,t,r,a);break t}else if(u===B){n.tag=14,n=Bm(null,n,t,r,a);break t}}throw n=ft(t)||t,Error(s(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Es(r,n.pendingProps),Xm(t,n,r,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,wu(t,n),oo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,La(n,fn,r),r!==f.cache&&Eu(n,[fn],a,!0),ro(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(t,n,r,a);break t}else if(r!==u){u=li(Error(s(424)),n),to(u),n=Wm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=di(t.firstChild),Tn=n,Se=!0,Na=null,fi=!0,a=Hp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),r===u){n=ea(t,n,a);break t}Rn(t,n,r,a)}n=n.child}return n;case 26:return wl(t,n),t===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=ql(ot.current).createElement(a),r[rn]=n,r[bn]=t,Cn(r,a,t),un(r),n.stateNode=r):n.memoizedState=r0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $t(n),t===null&&Se&&(r=n.stateNode=i0(n.type,n.pendingProps,ot.current),Tn=n,fi=!0,u=je,qa(n.type)?(kf=u,je=di(r.firstChild)):je=u),Rn(t,n,n.pendingProps.children,a),wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=r=je)&&(r=iS(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Tn=n,je=di(r.firstChild),fi=!1,u=!0):u=!1),u||Ua(n)),$t(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Bf(u,f)?r=null:g!==null&&Bf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(t,n,vx,null,null,a),Co._currentValue=u),wl(t,n),Rn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=aS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,je=null,t=!0):t=!1),t||Ua(n)),null;case 13:return qm(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ys(n,null,r,a):Rn(t,n,r,a),n.child;case 11:return Fm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),Rn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,_s(n),u=An(u),r=r(u),n.flags|=1,Rn(t,n,r,a),n.child;case 14:return Bm(t,n,n.type,n.pendingProps,a);case 15:return Im(t,n,n.type,n.pendingProps,a);case 19:return jm(t,n,a);case 31:return Ax(t,n,a);case 22:return Hm(t,n,a,n.pendingProps);case 24:return _s(n),r=An(fn),t===null?(u=Au(),u===null&&(u=qe,f=bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Cu(n),La(n,fn,u)):((t.lanes&a)!==0&&(wu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,fn,r)):(r=f.cache,La(n,fn,r),r!==u.cache&&Eu(n,[fn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(t){t.flags|=4}function ff(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Mg())t.flags|=8192;else throw Ss=pl,Ru}else t.flags&=-16777217}function Km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f0(n))if(Mg())t.flags|=8192;else throw Ss=pl,Ru}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yt():536870912,t.lanes|=n,lr|=n)}function po(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Cx(t,n,a){var r=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(fn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Ze(n),Km(n,f)):(Ze(n),ff(n,u,null,r,a))):f?f!==t.memoizedState?(na(n),Ze(n),Km(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&na(n),Ze(n),ff(n,u,t,r,a)),null;case 27:if(Qt(n),a=ot.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}t=At.current,Zs(n)?wp(n):(t=i0(u,r,a),n.stateNode=t,na(n))}return Ze(n),null;case 5:if(Qt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=At.current,Zs(n))wp(n);else{var g=ql(ot.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[rn]=n,f[bn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return Ze(n),ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ot.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||qg(t.nodeValue,a)),t||Ua(n,!0)}else t=ql(t).createTextNode(r),t[rn]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[rn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),Ze(n),null);case 4:return Ht(),t===null&&Lf(n.stateNode.containerInfo),Ze(n),null;case 10:return Ji(n.type),Ze(n),null;case 19:if(Q(on),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vl(t),f!==null){for(n.flags|=128,po(r,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bp(a,t),a=a.sibling;return xt(on,on.current&1|2),Se&&Ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Rt()>zl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(t=vl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Ze(n),null}else 2*Rt()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Rt(),t.sibling=null,a=on.current,xt(on,u?a&1|2:a&1),Se&&Ki(n,r.treeForkCount),t):(Ze(n),null);case 22:case 23:return ti(n),Lu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Q(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wx(t,n){switch(vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(fn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(on),null;case 4:return Ht(),null;case 10:return Ji(n.type),null;case 22:case 23:return ti(n),Lu(),t!==null&&Q(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(fn),null;case 25:return null;default:return null}}function Qm(t,n){switch(vu(n),n.tag){case 3:Ji(fn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Q(on);break;case 10:Ji(n.type);break;case 22:case 23:ti(n),Lu(),t!==null&&Q(vs);break;case 24:Ji(fn)}}function mo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(R){ze(n,n.return,R)}}function Ia(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var g=r.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,u=n;var I=a,tt=R;try{tt()}catch(dt){ze(u,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){ze(n,n.return,dt)}}function Jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(r){ze(t,t.return,r)}}}function $m(t,n,a){a.props=Es(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){ze(t,n,u)}}function zi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function tg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function hf(t,n,a){try{var r=t.stateNode;Qx(r,t.type,a,n),r[bn]=n}catch(u){ze(t,t.return,u)}}function eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function df(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(pf(t,n,a),t=t.sibling;t!==null;)pf(t,n,a),t=t.sibling}function Ul(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function ng(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[rn]=t,n[bn]=a}catch(f){ze(t,t.return,f)}}var ia=!1,pn=!1,mf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Dx(t,n){if(t=t.containerInfo,zf=$l,t=mp(t),ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,R=-1,I=-1,tt=0,dt=0,vt=t,st=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(R=g+u),vt!==f||r!==0&&vt.nodeType!==3||(I=g+r),vt.nodeType===3&&(g+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)st=vt,vt=lt;for(;;){if(vt===t)break e;if(st===a&&++tt===u&&(R=g),st===f&&++dt===r&&(I=g),(lt=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=lt}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:t,selectionRange:a},$l=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Wt=Es(a.type,u);t=r.getSnapshotBeforeUpdate(Wt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function ag(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),r&4&&mo(5,a);break;case 1:if(sa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}r&64&&Jm(a),r&512&&go(a,a.return);break;case 3:if(sa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&r&4&&ng(a);case 26:case 5:sa(t,a),n===null&&r&4&&tg(a),r&512&&go(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),r&4&&og(t,a);break;case 13:sa(t,a),r&4&&lg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ix.bind(null,a),sS(t,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||pn,u=ia;var f=pn;ia=r,(pn=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),ia=u,pn=f}break;case 30:break;default:sa(t,a)}}function sg(t){var n=t.alternate;n!==null&&(t.alternate=null,sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Hn=!1;function aa(t,n,a){for(a=a.child;a!==null;)rg(t,n,a),a=a.sibling}function rg(t,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:pn||zi(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||zi(a,n);var r=$e,u=Hn;qa(a.type)&&($e=a.stateNode,Hn=!1),aa(t,n,a),To(a.stateNode),$e=r,Hn=u;break;case 5:pn||zi(a,n);case 6:if(r=$e,u=Hn,$e=null,aa(t,n,a),$e=r,Hn=u,$e!==null)if(Hn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:$e!==null&&(Hn?(t=$e,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):Jg($e,a.stateNode));break;case 4:r=$e,u=Hn,$e=a.stateNode.containerInfo,Hn=!0,aa(t,n,a),$e=r,Hn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),pn||Ia(4,a,n),aa(t,n,a);break;case 1:pn||(zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:pn=(r=pn)||a.memoizedState!==null,aa(t,n,a),pn=r;break;default:aa(t,n,a)}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){ze(n,n.return,a)}}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){ze(n,n.return,a)}}function Nx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ig),n;default:throw Error(s(435,t.tag))}}function Ll(t,n){var a=Nx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Hx.bind(null,t,r);r.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){$e=R.stateNode,Hn=!1;break t}break;case 5:$e=R.stateNode,Hn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Hn=!0;break t}R=R.return}if($e===null)throw Error(s(160));rg(f,g,u),$e=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,t),n=n.sibling}var Mi=null;function cg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),r&4&&(Ia(3,t,t.return),mo(3,t),Ia(5,t,t.return));break;case 1:Gn(n,t),Vn(t),r&512&&(pn||a===null||zi(a,a.return)),r&64&&ia&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Mi;if(Gn(n,t),Vn(t),r&512&&(pn||a===null||zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[rn]=t,un(f),r=f;break t;case"link":var g=c0("link","href",u).get(r+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(g=c0("meta","content",u).get(r+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=t,un(f),r=f}t.stateNode=r}else u0(u,t.type,t.stateNode);else t.stateNode=l0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?u0(u,t.type,t.stateNode):l0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),r&512&&(pn||a===null||zi(a,a.return)),a!==null&&r&4&&hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),r&512&&(pn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Kn(u,"")}catch(Wt){ze(t,t.return,Wt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,hf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(mf=!0);break;case 6:if(Gn(n,t),Vn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Wt){ze(t,t.return,Wt)}}break;case 3:if(Zl=null,u=Mi,Mi=Yl(n.containerInfo),Gn(n,t),Mi=u,Vn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Wt){ze(t,t.return,Wt)}mf&&(mf=!1,ug(t));break;case 4:r=Mi,Mi=Yl(t.stateNode.containerInfo),Gn(n,t),Vn(t),Mi=r;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=Rt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=ia,dt=pn;if(ia=tt||u,pn=dt||I,Gn(n,t),pn=dt,ia=tt,Vn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ia||pn||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=I.stateNode;var vt=I.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Wt){ze(I,I.return,Wt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Wt){ze(I,I.return,Wt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?$g(lt,!0):$g(I.stateNode,!1)}catch(Wt){ze(I,I.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ll(t,a))));break;case 19:Gn(n,t),Vn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ll(t,r)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(eg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=df(t);Ul(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Kn(g,""),a.flags&=-33);var R=df(t);Ul(t,R,g);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=df(t);pf(t,tt,I);break;default:throw Error(s(161))}}catch(dt){ze(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),bs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),bs(n);break;case 27:To(n.stateNode);case 26:case 5:zi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),mo(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){ze(r,r.return,tt)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Gp(I[u],R)}catch(tt){ze(r,r.return,tt)}}a&&g&64&&Jm(f),go(f,f.return);break;case 27:ng(f);case 26:case 5:ra(u,f,a),a&&r===null&&g&4&&tg(f),go(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&g&4&&og(u,f);break;case 13:ra(u,f,a),a&&g&4&&lg(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),go(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function Ei(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,a,r),n=n.sibling}function fg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,r),u&2048&&mo(9,n);break;case 1:Ei(t,n,a,r);break;case 3:Ei(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){Ei(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){ze(n,n.return,I)}}else Ei(t,n,a,r);break;case 31:Ei(t,n,a,r);break;case 13:Ei(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,r):_o(t,n):f._visibility&2?Ei(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(g,n);break;case 24:Ei(t,n,a,r),u&2048&&_f(n.alternate,n);break;default:Ei(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,I=r,tt=g.flags;switch(g.tag){case 0:case 11:case 15:sr(f,g,R,I,u),mo(8,g);break;case 23:break;case 22:var dt=g.stateNode;g.memoizedState!==null?dt._visibility&2?sr(f,g,R,I,u):_o(f,g):(dt._visibility|=2,sr(f,g,R,I,u)),u&&tt&2048&&gf(g.alternate,g);break;case 24:sr(f,g,R,I,u),u&&tt&2048&&_f(g.alternate,g);break;default:sr(f,g,R,I,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&gf(r.alternate,r);break;case 24:_o(a,r),u&2048&&_f(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function rr(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)hg(t,n,a),t=t.sibling}function hg(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&vo&&t.memoizedState!==null&&_S(a,Mi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=Mi;Mi=Yl(t.stateNode.containerInfo),rr(t,n,a),Mi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,rr(t,n,a),vo=r):rr(t,n,a));break;default:rr(t,n,a)}}function dg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,mg(r,t)}dg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):xo(t);break;default:xo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,mg(r,t)}dg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function mg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else t:for(a=t;yn!==null;){r=yn;var u=r.sibling,f=r.return;if(sg(r),r===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var Ux={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(fn).controller.signal}},Lx=typeof WeakMap=="function"?WeakMap:Map,we=0,qe=null,me=null,ve=0,Pe=0,ei=null,Ha=!1,or=!1,vf=!1,oa=0,an=0,Ga=0,Ts=0,xf=0,ni=0,lr=0,So=null,kn=null,Sf=!1,Pl=0,gg=0,zl=1/0,Fl=null,Va=null,vn=0,ka=null,cr=null,la=0,yf=0,Mf=null,_g=null,yo=0,Ef=null;function ii(){return(we&2)!==0&&ve!==0?ve&-ve:N.T!==null?wf():Hr()}function vg(){if(ni===0)if((ve&536870912)===0||Se){var t=de;de<<=1,(de&3932160)===0&&(de=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Xn(t,n,a){(t===qe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Xa(t,ve,ni,!1)),te(t,a),((we&2)===0||t!==qe)&&(t===qe&&((we&2)===0&&(Ts|=a),an===4&&Xa(t,ve,ni,!1)),Fi(t))}function xg(t,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),u=r?zx(t,n):Tf(t,n,!0),f=r;do{if(u===0){or&&!r&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ox(a)){u=Tf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;u=So;var I=R.current.memoizedState.isDehydrated;if(I&&(ur(R,g).flags|=256),g=Tf(R,g,!1),g!==2){if(vf&&!I){R.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),Xa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ni,!Ha);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Pl+300-Rt(),10<u)){if(Xa(r,n,ni,!Ha),pt(r,0,!0)!==0)break t;la=n,r.timeoutHandle=Kg(Sg.bind(null,r,a,kn,Fl,Sf,n,ni,Ts,lr,Ha,f,"Throttled",-0,0),u);break t}Sg(r,a,kn,Fl,Sf,n,ni,Ts,lr,Ha,f,null,-0,0)}}break}while(!0);Fi(t)}function Sg(t,n,a,r,u,f,g,R,I,tt,dt,vt,st,lt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},hg(n,f,vt);var Wt=(f&62914560)===f?Pl-Rt():(f&4194048)===f?gg-Rt():0;if(Wt=vS(vt,Wt),Wt!==null){la=f,t.cancelPendingCommit=Wt(Cg.bind(null,t,n,f,a,r,u,g,R,I,dt,vt,null,st,lt)),Xa(t,f,g,!tt);return}}Cg(t,n,f,a,r,u,g,R,I)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,r){n&=~xf,n&=~Ts,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&Ce(t,a,n)}function Bl(){return(we&6)===0?(Mo(0),!1):!0}function bf(){if(me!==null){if(Pe===0)var t=me.return;else t=me,Qi=gs=null,Iu(t),tr=null,io=0,t=me;for(;t!==null;)Qm(t.alternate,t),t=t.return;me=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,tS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,bf(),qe=t,me=a=Zi(t.current,null),ve=n,Pe=0,ei=null,Ha=!1,or=Bt(t,n),vf=!1,lr=ni=xf=Ts=Ga=an=0,kn=So=null,Sf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=t[u],r&=~f}return oa=n,sl(),a}function yg(t,n){oe=null,N.H=fo,n===$s||n===dl?(n=Fp(),Pe=3):n===Ru?(n=Fp(),Pe=4):Pe=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,me===null&&(an=1,Rl(t,li(n,t.current)))}function Mg(){var t=$n.current;return t===null?!0:(ve&4194048)===ve?hi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===hi:!1}function Eg(){var t=N.H;return N.H=fo,t===null?fo:t}function bg(){var t=N.A;return N.A=Ux,t}function Il(){an=4,Ha||(ve&4194048)!==ve&&$n.current!==null||(or=!0),(Ga&134217727)===0&&(Ts&134217727)===0||qe===null||Xa(qe,ve,ni,!1)}function Tf(t,n,a){var r=we;we|=2;var u=Eg(),f=bg();(qe!==t||ve!==n)&&(Fl=null,ur(t,n)),n=!1;var g=an;t:do try{if(Pe!==0&&me!==null){var R=me,I=ei;switch(Pe){case 8:bf(),g=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var tt=Pe;if(Pe=0,ei=null,fr(t,R,I,tt),a&&or){g=0;break t}break;default:tt=Pe,Pe=0,ei=null,fr(t,R,I,tt)}}Px(),g=an;break}catch(dt){yg(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Qi=gs=null,we=r,N.H=u,N.A=f,me===null&&(qe=null,ve=0,sl()),g}function Px(){for(;me!==null;)Tg(me)}function zx(t,n){var a=we;we|=2;var r=Eg(),u=bg();qe!==t||ve!==n?(Fl=null,zl=Rt()+500,ur(t,n)):or=Bt(t,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=ei;e:switch(Pe){case 1:Pe=0,ei=null,fr(t,n,f,1);break;case 2:case 9:if(Pp(f)){Pe=0,ei=null,Ag(n);break}n=function(){Pe!==2&&Pe!==9||qe!==t||(Pe=7),Fi(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Pp(f)?(Pe=0,ei=null,Ag(n)):(Pe=0,ei=null,fr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var R=me;if(g?f0(g):R.stateNode.complete){Pe=0,ei=null;var I=R.sibling;if(I!==null)me=I;else{var tt=R.return;tt!==null?(me=tt,Hl(tt)):me=null}break e}}Pe=0,ei=null,fr(t,n,f,5);break;case 6:Pe=0,ei=null,fr(t,n,f,6);break;case 8:bf(),an=6;break t;default:throw Error(s(462))}}Fx();break}catch(dt){yg(t,dt)}while(!0);return Qi=gs=null,N.H=r,N.A=u,we=a,me!==null?0:(qe=null,ve=0,sl(),an)}function Fx(){for(;me!==null&&!he();)Tg(me)}function Tg(t){var n=Zm(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?Hl(t):me=n}function Ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Iu(n);default:Qm(a,n),n=me=bp(n,oa),n=Zm(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?Hl(t):me=n}function fr(t,n,a,r){Qi=gs=null,Iu(n),tr=null,io=0;var u=n.return;try{if(Tx(t,u,n,a,ve)){an=1,Rl(t,li(a,t.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;an=1,Rl(t,li(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:or||(ve&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rg(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){Rg(n,Ha);return}t=n.return;var a=Cx(n.alternate,n,oa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);an===0&&(an=5)}function Rg(t,n){do{var a=wx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);an=6,me=null}function Cg(t,n,a,r,u,f,g,R,I){t.cancelPendingCommit=null;do Gl();while(vn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,en(t,a,f,g,R,I),t===qe&&(me=qe=null,ve=0),cr=n,ka=t,la=a,yf=f,Mf=u,_g=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gx(K,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,u=F.p,F.p=2,g=we,we|=4;try{Dx(t,n,a)}finally{we=g,F.p=u,N.T=r}}vn=1,wg(),Dg(),Ng()}}function wg(){if(vn===1){vn=0;var t=ka,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var u=we;we|=4;try{cg(n,t);var f=Ff,g=mp(t.containerInfo),R=f.focusedElem,I=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(I!==null&&ou(R)){var tt=I.start,dt=I.end;if(dt===void 0&&(dt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Wt=R.textContent.length,Jt=Math.min(I.start,Wt),Ve=I.end===void 0?Jt:Math.min(I.end,Wt);!lt.extend&&Jt>Ve&&(g=Ve,Ve=Jt,Jt=g);var Y=dp(R,Jt),V=dp(R,Ve);if(Y&&V&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var $=vt.createRange();$.setStart(Y.node,Y.offset),lt.removeAllRanges(),Jt>Ve?(lt.addRange($),lt.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),lt.addRange($))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}$l=!!zf,Ff=zf=null}finally{we=u,F.p=r,N.T=a}}t.current=n,vn=2}}function Dg(){if(vn===2){vn=0;var t=ka,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=F.p;F.p=2;var u=we;we|=4;try{ag(t,n.alternate,n)}finally{we=u,F.p=r,N.T=a}}vn=3}}function Ng(){if(vn===4||vn===3){vn=0,Ie();var t=ka,n=cr,a=la,r=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,cr=ka=null,Ug(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Ir(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,u=F.p,F.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var R=r[g];f(R.value,{componentStack:R.stack})}}finally{N.T=n,F.p=u}}(la&3)!==0&&Gl(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Ef?yo++:(yo=0,Ef=t):yo=0,Mo(0)}}function Ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Gl(){return wg(),Dg(),Ng(),Lg()}function Lg(){if(vn!==5)return!1;var t=ka,n=yf;yf=0;var a=Ir(la),r=N.T,u=F.p;try{F.p=32>a?32:a,N.T=null,a=Mf,Mf=null;var f=ka,g=la;if(vn=0,cr=ka=null,la=0,(we&6)!==0)throw Error(s(331));var R=we;if(we|=4,pg(f.current),fg(f,f.current,g,a),we=R,Mo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{F.p=u,N.T=r,Ug(t,n)}}function Og(t,n,a){n=li(a,n),n=tf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(te(t,2),Fi(t))}function ze(t,n,a){if(t.tag===3)Og(t,t,a);else for(;n!==null;){if(n.tag===3){Og(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=li(a,t),a=Pm(2),r=za(n,a,2),r!==null&&(zm(a,r,n,t),te(r,2),Fi(r));break}}n=n.return}}function Af(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Lx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(vf=!0,u.add(a),t=Bx.bind(null,t,n,a),n.then(t,t))}function Bx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(ve&a)===a&&(an===4||an===3&&(ve&62914560)===ve&&300>Rt()-Pl?(we&2)===0&&ur(t,0):xf|=a,lr===ve&&(lr=0)),Fi(t)}function Pg(t,n){n===0&&(n=yt()),t=ds(t,n),t!==null&&(te(t,n),Fi(t))}function Ix(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(t,a)}function Hx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Pg(t,a)}function Gx(t,n){return W(t,n)}var Vl=null,hr=null,Rf=!1,kl=!1,Cf=!1,Wa=0;function Fi(t){t!==hr&&t.next===null&&(hr===null?Vl=hr=t:hr=hr.next=t),kl=!0,Rf||(Rf=!0,kx())}function Mo(t,n){if(!Cf&&kl){Cf=!0;do for(var a=!1,r=Vl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ig(r,f))}else f=ve,f=pt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,Ig(r,f));r=r.next}while(a);Cf=!1}}function Vx(){zg()}function zg(){kl=Rf=!1;var t=0;Wa!==0&&$x()&&(t=Wa);for(var n=Rt(),a=null,r=Vl;r!==null;){var u=r.next,f=Fg(r,n);f===0?(r.next=null,a===null?Vl=u:a.next=u,u===null&&(hr=a)):(a=r,(t!==0||(f&3)!==0)&&(kl=!0)),r=u}vn!==0&&vn!==5||Mo(t),Wa!==0&&(Wa=0)}function Fg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),R=1<<g,I=u[g];I===-1?((R&a)===0||(R&r)!==0)&&(u[g]=Ut(R,n)):I<=n&&(t.expiredLanes|=R),f&=~R}if(n=qe,a=ve,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&tn(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&tn(r),Ir(a)){case 2:case 8:a=M;break;case 32:a=K;break;case 268435456:a=Et;break;default:a=K}return r=Bg.bind(null,t),a=W(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&tn(r),t.callbackPriority=2,t.callbackNode=null,2}function Bg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var r=ve;return r=pt(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(xg(t,r,n),Fg(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?Bg.bind(null,t):null)}function Ig(t,n){if(Gl())return null;xg(t,n,!0)}function kx(){eS(function(){(we&6)!==0?W(C,Vx):zg()})}function wf(){if(Wa===0){var t=Qs;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Wa=t}return Wa}function Hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cs(""+t)}function Gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Xx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hg((u[bn]||null).action),g=r.submitter;g&&(n=(n=g[bn]||null)?Hg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new el("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var I=g?Gg(u,g):new FormData(u);ju(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=g?Gg(u,g):new FormData(u),ju(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Df=0;Df<fu.length;Df++){var Nf=fu[Df],Wx=Nf.toLowerCase(),qx=Nf[0].toUpperCase()+Nf.slice(1);yi(Wx,"on"+qx)}yi(vp,"onAnimationEnd"),yi(xp,"onAnimationIteration"),yi(Sp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(lx,"onTransitionRun"),yi(cx,"onTransitionStart"),yi(ux,"onTransitionCancel"),yi(yp,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var R=r[g],I=R.instance,tt=R.currentTarget;if(R=R.listener,I!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=tt;try{f(u)}catch(dt){al(dt)}u.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(R=r[g],I=R.instance,tt=R.currentTarget,R=R.listener,I!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=tt;try{f(u)}catch(dt){al(dt)}u.currentTarget=null,f=I}}}}function ge(t,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=t+"__bubble";a.has(r)||(kg(n,t,2,!1),a.add(r))}function Uf(t,n,a){var r=0;n&&(r|=4),kg(a,t,r,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[Xl]){t[Xl]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Uf(a,!1,t),Uf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Uf("selectionchange",!1,n))}}function kg(t,n,a,r){switch(v0(n)){case 2:var u=yS;break;case 8:u=MS;break;default:u=jf}a=u.bind(null,n,a,t),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Of(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var R=r.stateNode.containerInfo;if(R===u)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;R!==null;){if(g=Ta(R),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue t}R=R.parentNode}}r=r.return}jd(function(){var tt=f,dt=Kc(a),vt=[];t:{var st=Mp.get(t);if(st!==void 0){var lt=el,Wt=t;switch(t){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":lt=Hv;break;case"focusin":Wt="focus",lt=nu;break;case"focusout":Wt="blur",lt=nu;break;case"beforeblur":case"afterblur":lt=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=kv;break;case vp:case xp:case Sp:lt=Nv;break;case yp:lt=Wv;break;case"scroll":case"scrollend":lt=Av;break;case"wheel":lt=Yv;break;case"copy":case"cut":case"paste":lt=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=$d;break;case"toggle":case"beforetoggle":lt=Zv}var Jt=(n&4)!==0,Ve=!Jt&&(t==="scroll"||t==="scrollend"),Y=Jt?st!==null?st+"Capture":null:st;Jt=[];for(var V=tt,$;V!==null;){var gt=V;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||Y===null||(gt=Xr(V,Y),gt!=null&&Jt.push(bo(V,gt,$))),Ve)break;V=V.return}0<Jt.length&&(st=new lt(st,Wt,null,a,dt),vt.push({event:st,listeners:Jt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",st&&a!==Zc&&(Wt=a.relatedTarget||a.fromElement)&&(Ta(Wt)||Wt[qi]))break t;if((lt||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=tt,Wt=Wt?Ta(Wt):null,Wt!==null&&(Ve=c(Wt),Jt=Wt.tag,Wt!==Ve||Jt!==5&&Jt!==27&&Jt!==6)&&(Wt=null)):(lt=null,Wt=tt),lt!==Wt)){if(Jt=Qd,gt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=$d,gt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=lt==null?st:ls(lt),$=Wt==null?st:ls(Wt),st=new Jt(gt,V+"leave",lt,a,dt),st.target=Ve,st.relatedTarget=$,gt=null,Ta(dt)===tt&&(Jt=new Jt(Y,V+"enter",Wt,a,dt),Jt.target=$,Jt.relatedTarget=Ve,gt=Jt),Ve=gt,lt&&Wt)e:{for(Jt=jx,Y=lt,V=Wt,$=0,gt=Y;gt;gt=Jt(gt))$++;gt=0;for(var Kt=V;Kt;Kt=Jt(Kt))gt++;for(;0<$-gt;)Y=Jt(Y),$--;for(;0<gt-$;)V=Jt(V),gt--;for(;$--;){if(Y===V||V!==null&&Y===V.alternate){Jt=Y;break e}Y=Jt(Y),V=Jt(V)}Jt=null}else Jt=null;lt!==null&&Xg(vt,st,lt,Jt,!1),Wt!==null&&Ve!==null&&Xg(vt,Ve,Wt,Jt,!0)}}t:{if(st=tt?ls(tt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ae=op;else if(sp(st))if(lp)Ae=sx;else{Ae=ix;var Yt=nx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&De(tt.elementType)&&(Ae=op):Ae=ax;if(Ae&&(Ae=Ae(t,tt))){rp(vt,Ae,a,dt);break t}Yt&&Yt(t,st,tt),t==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&pe(st,"number",st.value)}switch(Yt=tt?ls(tt):window,t){case"focusin":(sp(Yt)||Yt.contentEditable==="true")&&(ks=Yt,lu=tt,Jr=null);break;case"focusout":Jr=lu=ks=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,gp(vt,a,dt);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":gp(vt,a,dt)}var ce;if(au)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Vs?ip(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(tp&&a.locale!=="ko"&&(Vs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Vs&&(ce=Zd()):(wa=dt,$c="value"in wa?wa.value:wa.textContent,Vs=!0)),Yt=Wl(tt,xe),0<Yt.length&&(xe=new Jd(xe,t,null,a,dt),vt.push({event:xe,listeners:Yt}),ce?xe.data=ce:(ce=ap(a),ce!==null&&(xe.data=ce)))),(ce=Qv?Jv(t,a):$v(t,a))&&(xe=Wl(tt,"onBeforeInput"),0<xe.length&&(Yt=new Jd("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Yt,listeners:xe}),Yt.data=ce)),Xx(vt,t,tt,a,dt)}Vg(vt,n)})}function bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(t,a),u!=null&&r.unshift(bo(t,u,f)),u=Xr(t,n),u!=null&&r.push(bo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function jx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xg(t,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var R=a,I=R.alternate,tt=R.stateNode;if(R=R.tag,I!==null&&I===r)break;R!==5&&R!==26&&R!==27||tt===null||(I=tt,u?(tt=Xr(a,f),tt!=null&&g.unshift(bo(a,tt,I))):u||(tt=Xr(a,f),tt!=null&&g.push(bo(a,tt,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Zx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Kx,"")}function qg(t,n){return n=Wg(n),Wg(t)===n}function Ge(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Kn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Kn(t,""+r);break;case"className":Xt(t,"class",r);break;case"tabIndex":Xt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,r);break;case"style":Si(t,r,f);break;case"data":if(n!=="object"){Xt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cs(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cs(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=cs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),zt(t,"popover",r);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":zt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,zt(t,a,r))}}function Pf(t,n,a,r,u,f){switch(a){case"style":Si(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Kn(t,r):(typeof r=="number"||typeof r=="bigint")&&Kn(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):zt(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,g,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var R=f=g=u=null,I=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":u=dt;break;case"type":g=dt;break;case"checked":I=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ge(t,n,r,dt,a,null)}}Nn(t,f,R,I,tt,g,u,!1);return;case"select":ge("invalid",t),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":r=R;default:Ge(t,n,u,R,a,null)}n=f,a=g,t.multiple=!!r,n!=null?_n(t,!!r,n,!1):a!=null&&_n(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ge(t,n,g,R,a,null)}xi(t,r,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,I,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<Eo.length;r++)ge(Eo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,tt,r,a,null)}return;default:if(De(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Pf(t,n,dt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ge(t,n,R,r,a,null))}function Qx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,R=null,I=null,tt=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=vt;default:r.hasOwnProperty(lt)||Ge(t,n,lt,null,r,vt)}}for(var st in r){var lt=r[st];if(vt=a[st],r.hasOwnProperty(st)&&(lt!=null||vt!=null))switch(st){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":dt=lt;break;case"value":g=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Ge(t,n,st,lt,r,vt)}}Gt(t,g,R,I,tt,dt,f,u);return;case"select":lt=g=R=st=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":st=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==I&&Ge(t,n,u,f,r,I)}n=R,a=g,r=lt,st!=null?_n(t,!!a,st,!1):!!r!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ge(t,n,R,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ge(t,n,g,u,r,f)}Zn(t,st,lt);return;case"option":for(var Wt in a)st=a[Wt],a.hasOwnProperty(Wt)&&st!=null&&!r.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:Ge(t,n,Wt,null,r,st));for(I in r)st=r[I],lt=a[I],r.hasOwnProperty(I)&&st!==lt&&(st!=null||lt!=null)&&(I==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Ge(t,n,I,st,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)st=a[Jt],a.hasOwnProperty(Jt)&&st!=null&&!r.hasOwnProperty(Jt)&&Ge(t,n,Jt,null,r,st);for(tt in r)if(st=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&st!==lt&&(st!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ge(t,n,tt,st,r,lt)}return;default:if(De(n)){for(var Ve in a)st=a[Ve],a.hasOwnProperty(Ve)&&st!==void 0&&!r.hasOwnProperty(Ve)&&Pf(t,n,Ve,void 0,r,st);for(dt in r)st=r[dt],lt=a[dt],!r.hasOwnProperty(dt)||st===lt||st===void 0&&lt===void 0||Pf(t,n,dt,st,r,lt);return}}for(var Y in a)st=a[Y],a.hasOwnProperty(Y)&&st!=null&&!r.hasOwnProperty(Y)&&Ge(t,n,Y,null,r,st);for(vt in r)st=r[vt],lt=a[vt],!r.hasOwnProperty(vt)||st===lt||st==null&&lt==null||Ge(t,n,vt,st,r,lt)}function Yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,R=u.duration;if(f&&R&&Yg(g)){for(g=0,R=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],tt=I.startTime;if(tt>R)break;var dt=I.transferSize,vt=I.initiatorType;dt&&Yg(vt)&&(I=I.responseEnd,g+=dt*(I<R?1:(R-tt)/(I-tt)))}if(--r,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zf=null,Ff=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function jg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function $x(){var t=window.event;return t&&t.type==="popstate"?t===If?!1:(If=t,!0):(If=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(nS)}:Kg;function nS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function Jg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&To(t.ownerDocument.body);a=u}while(a);gr(n)}function $g(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function iS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function aS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function t0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$?"||t.data==="$~"}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kf=null;function e0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function n0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function i0(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kr(t)}var pi=new Map,a0=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=F.d;F.d={f:rS,r:oS,D:lS,C:cS,L:uS,m:fS,X:dS,S:hS,M:pS};function rS(){var t=ca.f(),n=Bl();return t||n}function oS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?ym(n):ca.r(t)}var dr=typeof document>"u"?null:document;function s0(t,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=Le(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),un(n),r.head.appendChild(n)))}}function lS(t){ca.D(t),s0("dns-prefetch",t,null)}function cS(t,n){ca.C(t,n),s0("preconnect",t,n)}function uS(t,n,a){ca.L(t,n,a);var r=dr;if(r&&t&&n){var u='link[rel="preload"][as="'+Le(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Le(a.imageSizes)+'"]')):u+='[href="'+Le(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}pi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Ro(f))||(n=r.createElement("link"),Cn(n,"link",t),un(n),r.head.appendChild(n)))}}function fS(t,n){ca.m(t,n);var a=dr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Le(r)+'"][href="'+Le(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!pi.has(f)&&(t=x({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}r=a.createElement("link"),Cn(r,"link",t),un(r),a.head.appendChild(r)}}}function hS(t,n,a){ca.S(t,n,a);var r=dr;if(r&&t){var u=Ra(r).hoistableStyles,f=pr(t);n=n||"default";var g=u.get(f);if(!g){var R={loading:0,preload:null};if(g=r.querySelector(Ao(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&Xf(t,a);var I=g=r.createElement("link");un(I),Cn(I,"link",t),I._p=new Promise(function(tt,dt){I.onload=tt,I.onerror=dt}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:R},u.set(f,g)}}}function dS(t,n){ca.X(t,n);var a=dr;if(a&&t){var r=Ra(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(t=x({src:t,async:!0},n),(n=pi.get(u))&&Wf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function pS(t,n){ca.M(t,n);var a=dr;if(a&&t){var r=Ra(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&Wf(t,n),f=a.createElement("script"),un(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function r0(t,n,a,r){var u=(u=ot.current)?Yl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Ra(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Ra(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Ao(t)))&&!f._p&&(g.instance=f,g.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||mS(u,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Ra(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Le(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function o0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function mS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),un(n),t.head.appendChild(n))}function mr(t){return'[src="'+Le(t)+'"]'}function Ro(t){return"script[async]"+t}function l0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Le(a.href)+'"]');if(r)return n.instance=r,un(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),un(r),Cn(r,"style",u),jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;r=o0(a),(u=pi.get(u))&&Xf(r,u),f=(t.ownerDocument||t).createElement("link"),un(f);var g=f;return g._p=new Promise(function(R,I){g.onload=R,g.onerror=I}),Cn(f,"link",r),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,un(u),u):(r=a,(u=pi.get(f))&&(r=x({},a),Wf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),un(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,jl(r,a.precedence,t));return n.instance}function jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var R=r[g];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function c0(t,n,a){if(Zl===null){var r=new Map,u=Zl=new Map;u.set(a,r)}else u=Zl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=r.get(g);R?R.push(f):r.set(g,[f])}}return r}function u0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function gS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _S(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,r=o0(r),(u=pi.get(u))&&Xf(r,u),f=f.createElement("link"),un(f);var g=f;g._p=new Promise(function(R,I){g.onload=R,g.onerror=I}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function vS(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&qf===0&&(qf=62500*Jx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(xS,t),Ql=null,Kl.call(t))}function xS(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var r=a.get(null);else{a=new Map,Ql.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=Kl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function SS(t,n,a,r,u,f,g,R,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function h0(t,n,a,r,u,f,g,R,I,tt,dt,vt){return t=new SS(t,n,a,g,I,tt,dt,vt,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=bu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Cu(f),t}function d0(t){return t?(t=qs,t):qs}function p0(t,n,a,r,u,f){u=d0(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=za(t,r,n),a!==null&&(Xn(a,t,n),so(a,t,n))}function m0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Yf(t,n){m0(t,n),(t=t.alternate)&&m0(t,n)}function g0(t){if(t.tag===13||t.tag===31){var n=ds(t,67108864);n!==null&&Xn(n,t,67108864),Yf(t,67108864)}}function _0(t){if(t.tag===13||t.tag===31){var n=ii();n=os(n);var a=ds(t,n);a!==null&&Xn(a,t,n),Yf(t,n)}}var $l=!0;function yS(t,n,a,r){var u=N.T;N.T=null;var f=F.p;try{F.p=2,jf(t,n,a,r)}finally{F.p=f,N.T=u}}function MS(t,n,a,r){var u=N.T;N.T=null;var f=F.p;try{F.p=8,jf(t,n,a,r)}finally{F.p=f,N.T=u}}function jf(t,n,a,r){if($l){var u=Zf(r);if(u===null)Of(t,n,r,tc,a),x0(t,r);else if(bS(u,t,n,a,r))r.stopPropagation();else if(x0(t,r),n&4&&-1<ES.indexOf(t)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Tt(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var I=1<<31-Pt(g);R.entanglements[1]|=I,g&=~I}Fi(f),(we&6)===0&&(zl=Rt()+500,Mo(0))}}break;case 31:case 13:R=ds(f,2),R!==null&&Xn(R,f,2),Bl(),Yf(f,2)}if(f=Zf(r),f===null&&Of(t,n,r,tc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Of(t,n,r,null,a)}}function Zf(t){return t=Kc(t),Kf(t)}var tc=null;function Kf(t){if(tc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function v0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ke()){case C:return 2;case M:return 8;case K:case _t:return 32;case Et:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ya=null,ja=null,Za=null,wo=new Map,Do=new Map,Ka=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function No(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&g0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function bS(t,n,a,r,u){switch(n){case"focusin":return Ya=No(Ya,t,n,a,r,u),!0;case"dragenter":return ja=No(ja,t,n,a,r,u),!0;case"mouseover":return Za=No(Za,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,No(wo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,No(Do.get(f)||null,t,n,a,r,u)),!0}return!1}function S0(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){_0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){_0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Zc=r,a.target.dispatchEvent(r),Zc=null}else return n=Aa(a),n!==null&&g0(n),t.blockedOn=a,!1;n.shift()}return!0}function y0(t,n,a){ec(t)&&a.delete(n)}function TS(){Qf=!1,Ya!==null&&ec(Ya)&&(Ya=null),ja!==null&&ec(ja)&&(ja=null),Za!==null&&ec(Za)&&(Za=null),wo.forEach(y0),Do.forEach(y0)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,Qf||(Qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TS)))}var ic=null;function M0(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(Kf(r||a)===null)continue;break}var f=Aa(a);f!==null&&(t.splice(n,3),n-=3,ju(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(I){return nc(I,t)}Ya!==null&&nc(Ya,t),ja!==null&&nc(ja,t),Za!==null&&nc(Za,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[bn]||null;if(typeof f=="function")g||M0(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[bn]||null)R=g.formAction;else if(Kf(u)!==null)continue}else R=g.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),M0(a)}}}function E0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(t){this._internalRoot=t}ac.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();p0(a,r,t,n,null,null)},ac.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p0(t.current,2,null,t,null,null),Bl(),n[qi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&S0(t)}};var b0=e.version;if(b0!=="19.2.3")throw Error(s(527,b0,"19.2.3"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var AS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ct=sc.inject(AS),ht=sc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Nm,f=Um,g=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=h0(t,1,!1,null,null,a,r,null,u,f,g,E0),t[qi]=n.current,Lf(t),new Jf(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Nm,g=Um,R=Lm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=h0(t,1,!0,n,a??null,r,u,I,f,g,R,E0),n.context=d0(null),a=n.current,r=ii(),r=os(r),u=Pa(r),u.callback=null,za(a,u,r),a=r,n.current.lanes=a,te(n,a),Fi(n),t[qi]=n.current,Lf(t),new ac(n)},Lo.version="19.2.3",Lo}var O0;function zS(){if(O0)return th.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),th.exports=PS(),th.exports}var FS=zS(),be=Nd();function B_(o,e,i){return Math.max(o,Math.min(e,i))}class BS{advance(e){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(s=this.value,l=this.to,c=60*this.lerp,h=e,(function(p,m,d){return(1-d)*p+d*m})(s,l,1-Math.exp(-c*h))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=e;const p=B_(0,this.currentTime/this.duration,1);i=p>=1;const m=i?1:this.easing(p);this.value=this.from+(this.to-this.from)*m}var s,l,c,h;this.onUpdate?.(this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(e,i,{lerp:s=.1,duration:l=1,easing:c=(m=>m),onStart:h,onUpdate:p}){this.from=this.value=e,this.to=i,this.lerp=s,this.duration=l,this.easing=c,this.currentTime=0,this.isRunning=!0,h?.(),this.onUpdate=p}}class IS{constructor({wrapper:e,content:i,autoResize:s=!0,debounce:l=250}={}){this.wrapper=e,this.content=i,s&&(this.debouncedResize=(function(c,h){let p;return function(){let m=arguments,d=this;clearTimeout(p),p=setTimeout((function(){c.apply(d,m)}),h)}})(this.resize,l),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class I_{constructor(){this.events={}}emit(e,...i){let s=this.events[e]||[];for(let l=0,c=s.length;l<c;l++)s[l](...i)}on(e,i){return this.events[e]?.push(i)||(this.events[e]=[i]),()=>{this.events[e]=this.events[e]?.filter((s=>i!==s))}}off(e,i){this.events[e]=this.events[e]?.filter((s=>i!==s))}destroy(){this.events={}}}const P0=100/6;class HS{constructor(e,{wheelMultiplier:i=1,touchMultiplier:s=1}){this.element=e,this.wheelMultiplier=i,this.touchMultiplier=s,this.touchStart={x:null,y:null},this.emitter=new I_,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=e=>{const{clientX:i,clientY:s}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{const{clientX:i,clientY:s}=e.targetTouches?e.targetTouches[0]:e,l=-(i-this.touchStart.x)*this.touchMultiplier,c=-(s-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:l,y:c},this.emitter.emit("scroll",{deltaX:l,deltaY:c,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:i,deltaY:s,deltaMode:l}=e;i*=l===1?P0:l===2?this.windowWidth:1,s*=l===1?P0:l===2?this.windowHeight:1,i*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class GS{constructor({wrapper:e=window,content:i=document.documentElement,wheelEventsTarget:s=e,eventsTarget:l=s,smoothWheel:c=!0,syncTouch:h=!1,syncTouchLerp:p=.075,touchInertiaMultiplier:m=35,duration:d,easing:v=(U=>Math.min(1,1.001-Math.pow(2,-10*U))),lerp:x=!d&&.1,infinite:_=!1,orientation:E="vertical",gestureOrientation:A="vertical",touchMultiplier:D=1,wheelMultiplier:y=1,autoResize:S=!0,__experimental__naiveDimensions:w=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:U,deltaY:O,event:k})=>{if(k.ctrlKey)return;const P=k.type.includes("touch"),B=k.type.includes("wheel");if(this.options.syncTouch&&P&&k.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const b=U===0&&O===0,z=this.options.gestureOrientation==="vertical"&&O===0||this.options.gestureOrientation==="horizontal"&&U===0;if(b||z)return;let j=k.composedPath();if(j=j.slice(0,j.indexOf(this.rootElement)),j.find((ft=>{var X,N,F,rt,mt;return((X=ft.hasAttribute)===null||X===void 0?void 0:X.call(ft,"data-lenis-prevent"))||P&&((N=ft.hasAttribute)===null||N===void 0?void 0:N.call(ft,"data-lenis-prevent-touch"))||B&&((F=ft.hasAttribute)===null||F===void 0?void 0:F.call(ft,"data-lenis-prevent-wheel"))||((rt=ft.classList)===null||rt===void 0?void 0:rt.contains("lenis"))&&!(!((mt=ft.classList)===null||mt===void 0)&&mt.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void k.preventDefault();if(this.isSmooth=this.options.syncTouch&&P||this.options.smoothWheel&&B,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();k.preventDefault();let H=O;this.options.gestureOrientation==="both"?H=Math.abs(O)>Math.abs(U)?O:U:this.options.gestureOrientation==="horizontal"&&(H=U);const J=P&&this.options.syncTouch,ut=P&&k.type==="touchend"&&Math.abs(H)>5;ut&&(H=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+H,Object.assign({programmatic:!1},J?{lerp:ut?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const U=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-U),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:i,wheelEventsTarget:s,eventsTarget:l,smoothWheel:c,syncTouch:h,syncTouchLerp:p,touchInertiaMultiplier:m,duration:d,easing:v,lerp:x,infinite:_,gestureOrientation:A,orientation:E,touchMultiplier:D,wheelMultiplier:y,autoResize:S,__experimental__naiveDimensions:w},this.animate=new BS,this.emitter=new I_,this.dimensions=new IS({wrapper:e,content:i,autoResize:S}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=h||c,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new HS(l,{touchMultiplier:D,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,i){return this.emitter.on(e,i)}off(e,i){return this.emitter.off(e,i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const i=e-(this.time||e);this.time=e,this.animate.advance(.001*i)}scrollTo(e,{offset:i=0,immediate:s=!1,lock:l=!1,duration:c=this.options.duration,easing:h=this.options.easing,lerp:p=!c&&this.options.lerp,onComplete:m,force:d=!1,programmatic:v=!0}={}){if(!this.isStopped&&!this.isLocked||d){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let x;if(typeof e=="string"?x=document.querySelector(e):e?.nodeType&&(x=e),x){if(this.options.wrapper!==window){const E=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?E.left:E.top}const _=x.getBoundingClientRect();e=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=i,e=Math.round(e),this.options.infinite?v&&(this.targetScroll=this.animatedScroll=this.scroll):e=B_(0,e,this.limit),s)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(m==null||m(this));if(!v){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:c,easing:h,lerp:p,onStart:()=>{l&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(x,_)=>{this.isScrolling=!0,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),v&&(this.targetScroll=x),_||this.emit(),_&&(this.reset(),this.emit(),m?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,i=this.limit,(e%i+i)%i):this.animatedScroll;var e,i}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,i){this.rootElement.classList.toggle(e,i),this.emitter.emit("className change",this)}}const Ud="184",VS=0,z0=1,kS=2,Uc=1,XS=2,Go=3,rs=0,qn=1,ma=2,_a=0,Nr=1,Bh=2,F0=3,B0=4,WS=5,Ns=100,qS=101,YS=102,jS=103,ZS=104,KS=200,QS=201,JS=202,$S=203,Ih=204,Hh=205,ty=206,ey=207,ny=208,iy=209,ay=210,sy=211,ry=212,oy=213,ly=214,Gh=0,Vh=1,kh=2,Lr=3,Xh=4,Wh=5,qh=6,Yh=7,H_=0,cy=1,uy=2,ki=0,G_=1,V_=2,k_=3,X_=4,W_=5,q_=6,Y_=7,j_=300,Ps=301,Or=302,sh=303,rh=304,Wc=306,jh=1e3,ga=1001,Zh=1002,wn=1003,fy=1004,rc=1005,Pn=1006,oh=1007,Ls=1008,vi=1009,Z_=1010,K_=1011,ko=1012,Ld=1013,Wi=1014,Gi=1015,Sa=1016,Od=1017,Pd=1018,Xo=1020,Q_=35902,J_=35899,$_=1021,tv=1022,Ci=1023,ya=1026,Os=1027,ev=1028,zd=1029,zs=1030,Fd=1031,Bd=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,Kh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37488,ad=37489,Bc=37490,sd=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,Sd=36492,yd=36494,Md=36495,Ed=36283,bd=36284,Ic=36285,Td=36286,hy=3200,I0=0,dy=1,as="",gi="srgb",Hc="srgb-linear",Gc="linear",Fe="srgb",_r=7680,H0=519,py=512,my=513,gy=514,Id=515,_y=516,vy=517,Hd=518,xy=519,G0=35044,V0="300 es",Vi=2e3,Vc=2001;function Sy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yy(){const o=kc("canvas");return o.style.display="block",o}const k0={};function X0(...o){const e="THREE."+o.shift();console.log(e,...o)}function nv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ee(...o){o=nv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ee(...o){o=nv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Ad(...o){const e=o.join(" ");e in k0||(k0[e]=!0,ee(...o))}function My(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Ey={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[Lr]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:Lr};class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Rd=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function by(o,e){return(o%e+e)%e}function ch(o,e,i){return(1-i)*o+i*e}function Oo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Vd=class Vd{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vd.prototype.isVector2=!0;let ke=Vd;class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],x=s[l+3],_=c[h+0],E=c[h+1],A=c[h+2],D=c[h+3];if(x!==D||m!==_||d!==E||v!==A){let y=m*_+d*E+v*A+x*D;y<0&&(_=-_,E=-E,A=-A,D=-D,y=-y);let S=1-p;if(y<.9995){const w=Math.acos(y),U=Math.sin(w);S=Math.sin(S*w)/U,p=Math.sin(p*w)/U,m=m*S+_*p,d=d*S+E*p,v=v*S+A*p,x=x*S+D*p}else{m=m*S+_*p,d=d*S+E*p,v=v*S+A*p,x=x*S+D*p;const w=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=w,d*=w,v*=w,x*=w}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],x=c[h],_=c[h+1],E=c[h+2],A=c[h+3];return e[i]=p*A+v*x+m*E-d*_,e[i+1]=m*A+v*_+d*x-p*E,e[i+2]=d*A+v*E+p*_-m*x,e[i+3]=v*A-p*x-m*_-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),x=p(c/2),_=m(s/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=_*v*x+d*E*A,this._y=d*E*x-_*v*A,this._z=d*v*A+_*E*x,this._w=d*v*x-_*E*A;break;case"YXZ":this._x=_*v*x+d*E*A,this._y=d*E*x-_*v*A,this._z=d*v*A-_*E*x,this._w=d*v*x+_*E*A;break;case"ZXY":this._x=_*v*x-d*E*A,this._y=d*E*x+_*v*A,this._z=d*v*A+_*E*x,this._w=d*v*x-_*E*A;break;case"ZYX":this._x=_*v*x-d*E*A,this._y=d*E*x+_*v*A,this._z=d*v*A-_*E*x,this._w=d*v*x+_*E*A;break;case"YZX":this._x=_*v*x+d*E*A,this._y=d*E*x+_*v*A,this._z=d*v*A-_*E*x,this._w=d*v*x-_*E*A;break;case"XZY":this._x=_*v*x-d*E*A,this._y=d*E*x-_*v*A,this._z=d*v*A+_*E*x,this._w=d*v*x+_*E*A;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],x=i[10],_=s+p+x;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>x){const E=2*Math.sqrt(1+s-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>x){const E=2*Math.sqrt(1+p-s-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kd=class kd{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(W0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*v,this.y=s+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kd.prototype.isVector3=!0;let it=kd;const uh=new it,W0=new Fr,Xd=class Xd{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],x=s[7],_=s[2],E=s[5],A=s[8],D=l[0],y=l[3],S=l[6],w=l[1],U=l[4],O=l[7],k=l[2],P=l[5],B=l[8];return c[0]=h*D+p*w+m*k,c[3]=h*y+p*U+m*P,c[6]=h*S+p*O+m*B,c[1]=d*D+v*w+x*k,c[4]=d*y+v*U+x*P,c[7]=d*S+v*O+x*B,c[2]=_*D+E*w+A*k,c[5]=_*y+E*U+A*P,c[8]=_*S+E*O+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=v*h-p*d,_=p*m-v*c,E=d*c-h*m,A=i*x+s*_+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=x*D,e[1]=(l*d-v*s)*D,e[2]=(p*s-l*h)*D,e[3]=_*D,e[4]=(v*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=E*D,e[7]=(s*m-d*i)*D,e[8]=(h*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(fh.makeScale(e,i)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,i){return this.premultiply(fh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xd.prototype.isMatrix3=!0;let se=Xd;const fh=new se,q0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const o={enabled:!0,workingColorSpace:Hc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Ur(l.r),l.g=Ur(l.g),l.b=Ur(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ad("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ad("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Hc]:{primaries:e,whitePoint:s,transfer:Gc,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const ye=Ty();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ur(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class Ay{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=kc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:e.width,height:e.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ry=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(hh(l[h].image)):c.push(hh(l[h]))}else c=hh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ay.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let Cy=0;const dh=new it;class Bn extends Bs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=ga,l=ga,c=Pn,h=Ls,p=Ci,m=vi,d=Bn.DEFAULT_ANISOTROPY,v=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Wo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=j_;Bn.DEFAULT_ANISOTROPY=1;const Wd=class Wd{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],x=m[8],_=m[1],E=m[5],A=m[9],D=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-D)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+D)<.1&&Math.abs(A+y)<.1&&Math.abs(d+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(d+1)/2,O=(E+1)/2,k=(S+1)/2,P=(v+_)/4,B=(x+D)/4,b=(A+y)/4;return U>O&&U>k?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=P/s,c=B/s):O>k?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=P/l,c=b/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=b/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-A)*(y-A)+(x-D)*(x-D)+(_-v)*(_-v));return Math.abs(w)<.001&&(w=1),this.x=(y-A)/w,this.y=(x-D)/w,this.z=(_-v)/w,this.w=Math.acos((d+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wd.prototype.isVector4=!0;let cn=Wd;class wy extends Bs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Bn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends wy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class iv extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends Bn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xc=class Xc{constructor(e,i,s,l,c,h,p,m,d,v,x,_,E,A,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,v,x,_,E,A,D,y)}set(e,i,s,l,c,h,p,m,d,v,x,_,E,A,D,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=v,S[10]=x,S[14]=_,S[3]=E,S[7]=A,S[11]=D,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),h=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=h*v,E=h*x,A=p*v,D=p*x;i[0]=m*v,i[4]=-m*x,i[8]=d,i[1]=E+A*d,i[5]=_-D*d,i[9]=-p*m,i[2]=D-_*d,i[6]=A+E*d,i[10]=h*m}else if(e.order==="YXZ"){const _=m*v,E=m*x,A=d*v,D=d*x;i[0]=_+D*p,i[4]=A*p-E,i[8]=h*d,i[1]=h*x,i[5]=h*v,i[9]=-p,i[2]=E*p-A,i[6]=D+_*p,i[10]=h*m}else if(e.order==="ZXY"){const _=m*v,E=m*x,A=d*v,D=d*x;i[0]=_-D*p,i[4]=-h*x,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*v,i[9]=D-_*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const _=h*v,E=h*x,A=p*v,D=p*x;i[0]=m*v,i[4]=A*d-E,i[8]=_*d+D,i[1]=m*x,i[5]=D*d+_,i[9]=E*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=D-_*x,i[8]=A*x+E,i[1]=x,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*x+A,i[10]=_-D*x}else if(e.order==="XZY"){const _=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=-x,i[8]=d*v,i[1]=_*x+D,i[5]=h*v,i[9]=E*x-A,i[2]=A*x-E,i[6]=p*v,i[10]=D*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,Uy)}lookAt(e,i,s){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ja.crossVectors(s,ai),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ja.crossVectors(s,ai)),Ja.normalize(),oc.crossVectors(ai,Ja),l[0]=Ja.x,l[4]=oc.x,l[8]=ai.x,l[1]=Ja.y,l[5]=oc.y,l[9]=ai.y,l[2]=Ja.z,l[6]=oc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],x=s[5],_=s[9],E=s[13],A=s[2],D=s[6],y=s[10],S=s[14],w=s[3],U=s[7],O=s[11],k=s[15],P=l[0],B=l[4],b=l[8],z=l[12],j=l[1],H=l[5],J=l[9],ut=l[13],ft=l[2],X=l[6],N=l[10],F=l[14],rt=l[3],mt=l[7],Mt=l[11],L=l[15];return c[0]=h*P+p*j+m*ft+d*rt,c[4]=h*B+p*H+m*X+d*mt,c[8]=h*b+p*J+m*N+d*Mt,c[12]=h*z+p*ut+m*F+d*L,c[1]=v*P+x*j+_*ft+E*rt,c[5]=v*B+x*H+_*X+E*mt,c[9]=v*b+x*J+_*N+E*Mt,c[13]=v*z+x*ut+_*F+E*L,c[2]=A*P+D*j+y*ft+S*rt,c[6]=A*B+D*H+y*X+S*mt,c[10]=A*b+D*J+y*N+S*Mt,c[14]=A*z+D*ut+y*F+S*L,c[3]=w*P+U*j+O*ft+k*rt,c[7]=w*B+U*H+O*X+k*mt,c[11]=w*b+U*J+O*N+k*Mt,c[15]=w*z+U*ut+O*F+k*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],x=e[6],_=e[10],E=e[14],A=e[3],D=e[7],y=e[11],S=e[15],w=m*E-d*_,U=p*E-d*x,O=p*_-m*x,k=h*E-d*v,P=h*_-m*v,B=h*x-p*v;return i*(D*w-y*U+S*O)-s*(A*w-y*k+S*P)+l*(A*U-D*k+S*B)-c*(A*O-D*P+y*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=e[9],_=e[10],E=e[11],A=e[12],D=e[13],y=e[14],S=e[15],w=i*p-s*h,U=i*m-l*h,O=i*d-c*h,k=s*m-l*p,P=s*d-c*p,B=l*d-c*m,b=v*D-x*A,z=v*y-_*A,j=v*S-E*A,H=x*y-_*D,J=x*S-E*D,ut=_*S-E*y,ft=w*ut-U*J+O*H+k*j-P*z+B*b;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ft;return e[0]=(p*ut-m*J+d*H)*X,e[1]=(l*J-s*ut-c*H)*X,e[2]=(D*B-y*P+S*k)*X,e[3]=(_*P-x*B-E*k)*X,e[4]=(m*j-h*ut-d*z)*X,e[5]=(i*ut-l*j+c*z)*X,e[6]=(y*O-A*B-S*U)*X,e[7]=(v*B-_*O+E*U)*X,e[8]=(h*J-p*j+d*b)*X,e[9]=(s*j-i*J-c*b)*X,e[10]=(A*P-D*O+S*w)*X,e[11]=(x*O-v*P-E*w)*X,e[12]=(p*z-h*H-m*b)*X,e[13]=(i*H-s*z+l*b)*X,e[14]=(D*U-A*k-y*w)*X,e[15]=(v*k-x*U+_*w)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,x=p+p,_=c*d,E=c*v,A=c*x,D=h*v,y=h*x,S=p*x,w=m*d,U=m*v,O=m*x,k=s.x,P=s.y,B=s.z;return l[0]=(1-(D+S))*k,l[1]=(E+O)*k,l[2]=(A-U)*k,l[3]=0,l[4]=(E-O)*P,l[5]=(1-(_+S))*P,l[6]=(y+w)*P,l[7]=0,l[8]=(A+U)*B,l[9]=(y-w)*B,l[10]=(1-(_+D))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),bi.copy(this);const d=1/h,v=1/p,x=1/m;return bi.elements[0]*=d,bi.elements[1]*=d,bi.elements[2]*=d,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=Vi,m=!1){const d=this.elements,v=2*c/(i-e),x=2*c/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let A,D;if(m)A=c/(h-c),D=h*c/(h-c);else if(p===Vi)A=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(p===Vc)A=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=Vi,m=!1){const d=this.elements,v=2/(i-e),x=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let A,D;if(m)A=1/(h-c),D=h/(h-c);else if(p===Vi)A=-2/(h-c),D=-(h+c)/(h-c);else if(p===Vc)A=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Xc.prototype.isMatrix4=!0;let gn=Xc;const xr=new it,bi=new gn,Ny=new it(0,0,0),Uy=new it(1,1,1),Ja=new it,oc=new it,ai=new it,j0=new gn,Z0=new Fr;class Fs{constructor(e=0,i=0,s=0,l=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const K0=new it,Sr=new Fr,ua=new gn,lc=new it,Po=new it,Oy=new it,Py=new Fr,Q0=new it(1,0,0),J0=new it(0,1,0),$0=new it(0,0,1),t_={type:"added"},zy={type:"removed"},yr={type:"childadded",child:null},ph={type:"childremoved",child:null};class Yn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new it,i=new Fs,s=new Fr,l=new it(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new se}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,i){return K0.copy(e).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?lc.copy(e):lc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Po,lc,this.up):ua.lookAt(lc,Po,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ua),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ee("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t_),yr.child=e,this.dispatchEvent(yr),yr.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zy),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),x=h(e.shapes),_=h(e.skeletons),E=h(e.animations),A=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new it(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cc extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,s),S=this._getHandJoint(d,D);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],_=v.position.distanceTo(x.position),E=.02,A=.005;d.inputState.pinching&&_>E+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=E-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new cc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ye.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=ye.workingColorSpace){return this.r=e,this.g=i,this.b=s,ye.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=ye.workingColorSpace){if(e=by(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=gh(h,c,e+1/3),this.g=gh(h,c,e),this.b=gh(h,c,e-1/3)}return ye.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const s=sv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return ye.workingToColorSpace(On.copy(this),e),Math.round(Me(On.r*255,0,255))*65536+Math.round(Me(On.g*255,0,255))*256+Math.round(Me(On.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ye.workingColorSpace){ye.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=ye.workingColorSpace){return ye.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=gi){ye.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(uc);const s=ch($a.h,uc.h,i),l=ch($a.s,uc.s,i),c=ch($a.l,uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Be;Be.NAMES=sv;class By extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ti=new it,fa=new it,_h=new it,ha=new it,Mr=new it,Er=new it,e_=new it,vh=new it,xh=new it,Sh=new it,yh=new cn,Mh=new cn,Eh=new cn;class Ri{constructor(e=new it,i=new it,s=new it){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ti.subVectors(l,i),fa.subVectors(s,i),_h.subVectors(e,i);const h=Ti.dot(Ti),p=Ti.dot(fa),m=Ti.dot(_h),d=fa.dot(fa),v=fa.dot(_h),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,E=(d*m-p*v)*_,A=(h*v-p*m)*_;return c.set(1-E-A,A,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(e,i),Mh.fromBufferAttribute(e,s),Eh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(yh,c.x),h.addScaledVector(Mh,c.y),h.addScaledVector(Eh,c.z),h}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),fa.subVectors(e,i),Ti.cross(fa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Mr.subVectors(l,s),Er.subVectors(c,s),vh.subVectors(e,s);const m=Mr.dot(vh),d=Er.dot(vh);if(m<=0&&d<=0)return i.copy(s);xh.subVectors(e,l);const v=Mr.dot(xh),x=Er.dot(xh);if(v>=0&&x<=v)return i.copy(l);const _=m*x-v*d;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Mr,h);Sh.subVectors(e,c);const E=Mr.dot(Sh),A=Er.dot(Sh);if(A>=0&&E<=A)return i.copy(c);const D=E*d-m*A;if(D<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(s).addScaledVector(Er,p);const y=v*A-E*x;if(y<=0&&x-v>=0&&E-A>=0)return e_.subVectors(c,l),p=(x-v)/(x-v+(E-A)),i.copy(l).addScaledVector(e_,p);const S=1/(y+D+_);return h=D*S,p=_*S,i.copy(s).addScaledVector(Mr,h).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),hc.subVectors(this.max,zo),br.subVectors(e.a,zo),Tr.subVectors(e.b,zo),Ar.subVectors(e.c,zo),ts.subVectors(Tr,br),es.subVectors(Ar,Tr),As.subVectors(br,Ar);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-As.z,As.y,ts.z,0,-ts.x,es.z,0,-es.x,As.z,0,-As.x,-ts.y,ts.x,0,-es.y,es.x,0,-As.y,As.x,0];return!bh(i,br,Tr,Ar,hc)||(i=[1,0,0,0,1,0,0,0,1],!bh(i,br,Tr,Ar,hc))?!1:(dc.crossVectors(ts,es),i=[dc.x,dc.y,dc.z],bh(i,br,Tr,Ar,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const da=[new it,new it,new it,new it,new it,new it,new it,new it],Ai=new it,fc=new qo,br=new it,Tr=new it,Ar=new it,ts=new it,es=new it,As=new it,zo=new it,hc=new it,dc=new it,Rs=new it;function bh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Rs.fromArray(o,c);const p=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),m=e.dot(Rs),d=i.dot(Rs),v=s.dot(Rs);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const mn=new it,pc=new ke;let Iy=0;class wi extends Bs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=G0,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rv extends wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ov extends wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class xa extends wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Hy=new qo,Fo=new it,Th=new it;class qc{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Hy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Th)),this.expandByPoint(Fo.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gy=0;const mi=new gn,Ah=new Yn,Rr=new it,si=new qo,Bo=new qo,Mn=new it;class Ni extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?ov:rv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,s){return mi.makeTranslation(e,i,s),this.applyMatrix4(mi),this}scale(e,i,s){return mi.makeScale(e,i,s),this.applyMatrix4(mi),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Bo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(si.min,Bo.min),si.expandByPoint(Mn),Mn.addVectors(si.max,Bo.max),si.expandByPoint(Mn)):(si.expandByPoint(Bo.min),si.expandByPoint(Bo.max))}si.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)Mn.fromBufferAttribute(p,d),m&&(Rr.fromBufferAttribute(e,d),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new it,m[b]=new it;const d=new it,v=new it,x=new it,_=new ke,E=new ke,A=new ke,D=new it,y=new it;function S(b,z,j){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,z),x.fromBufferAttribute(s,j),_.fromBufferAttribute(c,b),E.fromBufferAttribute(c,z),A.fromBufferAttribute(c,j),v.sub(d),x.sub(d),E.sub(_),A.sub(_);const H=1/(E.x*A.y-A.x*E.y);isFinite(H)&&(D.copy(v).multiplyScalar(A.y).addScaledVector(x,-E.y).multiplyScalar(H),y.copy(x).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(H),p[b].add(D),p[z].add(D),p[j].add(D),m[b].add(y),m[z].add(y),m[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,z=w.length;b<z;++b){const j=w[b],H=j.start,J=j.count;for(let ut=H,ft=H+J;ut<ft;ut+=3)S(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const U=new it,O=new it,k=new it,P=new it;function B(b){k.fromBufferAttribute(l,b),P.copy(k);const z=p[b];U.copy(z),U.sub(k.multiplyScalar(k.dot(z))).normalize(),O.crossVectors(P,z);const H=O.dot(m[b])<0?-1:1;h.setXYZW(b,U.x,U.y,U.z,H)}for(let b=0,z=w.length;b<z;++b){const j=w[b],H=j.start,J=j.count;for(let ut=H,ft=H+J;ut<ft;ut+=3)B(e.getX(ut+0)),B(e.getX(ut+1)),B(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new it,c=new it,h=new it,p=new it,m=new it,d=new it,v=new it,x=new it;if(e)for(let _=0,E=e.count;_<E;_+=3){const A=e.getX(_+0),D=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,D),d.fromBufferAttribute(s,y),p.add(v),m.add(v),d.add(v),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,x=p.normalized,_=new d.constructor(m.length*v);let E=0,A=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?E=m[D]*p.data.stride+p.offset:E=m[D]*v;for(let S=0;S<v;S++)_[A++]=d[E++]}return new wi(_,v,x)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const _=d[v],E=e(_,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,_=d.length;x<_;x++){const E=d[x];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],x=c[d];for(let _=0,E=x.length;_<E;_++)v.push(x[_].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Vy=0;class Yo extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Nr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Hh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==Hh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pa=new it,Rh=new it,mc=new it,ns=new it,Ch=new it,gc=new it,wh=new it;class lv{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Rh.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Rh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(mc),p=ns.dot(this.direction),m=-ns.dot(mc),d=ns.lengthSq(),v=Math.abs(1-h*h);let x,_,E,A;if(v>0)if(x=h*m-p,_=h*p-m,A=c*v,x>=0)if(_>=-A)if(_<=A){const D=1/v;x*=D,_*=D,E=x*(x+h*_+2*p)+_*(h*x+_+2*m)+d}else _=c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;else _=-c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;else _<=-A?(x=Math.max(0,-(-h*c+p)),_=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+_*(_+2*m)+d):_<=A?(x=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+d):(x=Math.max(0,-(h*c+p)),_=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+_*(_+2*m)+d);else _=h>0?-c:c,x=Math.max(0,-(h*_+p)),E=-x*x+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Rh).addScaledVector(mc,_),E}intersectSphere(e,i){pa.subVectors(e.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return d>=0?(s=(e.min.x-_.x)*d,l=(e.max.x-_.x)*d):(s=(e.max.x-_.x)*d,l=(e.min.x-_.x)*d),v>=0?(c=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,i,s,l,c){Ch.subVectors(i,e),gc.subVectors(s,e),wh.crossVectors(Ch,gc);let h=this.direction.dot(wh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ns.subVectors(this.origin,e);const m=p*this.direction.dot(gc.crossVectors(ns,gc));if(m<0)return null;const d=p*this.direction.dot(Ch.cross(ns));if(d<0||m+d>h)return null;const v=-p*ns.dot(wh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cv extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const n_=new gn,Cs=new lv,_c=new qc,i_=new it,vc=new it,xc=new it,Sc=new it,Dh=new it,yc=new it,a_=new it,Mc=new it;class Ma extends Yn{constructor(e=new Ni,i=new cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){yc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(Dh.fromBufferAttribute(x,e),h?yc.addScaledVector(Dh,v):yc.addScaledVector(Dh.sub(i),v))}i.add(yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),Cs.copy(e.ray).recast(e.near),!(_c.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(_c,i_)===null||Cs.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(c).invert(),Cs.copy(e.ray).applyMatrix4(n_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,D=_.length;A<D;A++){const y=_[A],S=h[y.materialIndex],w=Math.max(y.start,E.start),U=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let O=w,k=U;O<k;O+=3){const P=p.getX(O),B=p.getX(O+1),b=p.getX(O+2);l=Ec(this,S,e,s,d,v,x,P,B,b),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let y=A,S=D;y<S;y+=3){const w=p.getX(y),U=p.getX(y+1),O=p.getX(y+2);l=Ec(this,h,e,s,d,v,x,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,D=_.length;A<D;A++){const y=_[A],S=h[y.materialIndex],w=Math.max(y.start,E.start),U=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let O=w,k=U;O<k;O+=3){const P=O,B=O+1,b=O+2;l=Ec(this,S,e,s,d,v,x,P,B,b),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let y=A,S=D;y<S;y+=3){const w=y,U=y+1,O=y+2;l=Ec(this,h,e,s,d,v,x,w,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(o,e,i,s,l,c,h,p){let m;if(e.side===qn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===rs,p),m===null)return null;Mc.copy(p),Mc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Mc);return d<i.near||d>i.far?null:{distance:d,point:Mc.clone(),object:o}}function Ec(o,e,i,s,l,c,h,p,m,d){o.getVertexPosition(p,vc),o.getVertexPosition(m,xc),o.getVertexPosition(d,Sc);const v=ky(o,e,i,s,vc,xc,Sc,a_);if(v){const x=new it;Ri.getBarycoord(a_,vc,xc,Sc,x),l&&(v.uv=Ri.getInterpolatedAttribute(l,p,m,d,x,new ke)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,p,m,d,x,new ke)),h&&(v.normal=Ri.getInterpolatedAttribute(h,p,m,d,x,new it),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new it,materialIndex:0};Ri.getNormal(vc,xc,Sc,_.normal),v.face=_,v.barycoord=x}return v}class Xy extends Bn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=wn,v=wn,x,_){super(null,h,p,m,d,v,l,c,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new it,Wy=new it,qy=new se;class Ds{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Nh.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Nh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(Nh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new qc,Yy=new ke(.5,.5),bc=new it;class uv{constructor(e=new Ds,i=new Ds,s=new Ds,l=new Ds,c=new Ds,h=new Ds){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],_=c[6],E=c[7],A=c[8],D=c[9],y=c[10],S=c[11],w=c[12],U=c[13],O=c[14],k=c[15];if(l[0].setComponents(d-h,E-v,S-A,k-w).normalize(),l[1].setComponents(d+h,E+v,S+A,k+w).normalize(),l[2].setComponents(d+p,E+x,S+D,k+U).normalize(),l[3].setComponents(d-p,E-x,S-D,k-U).normalize(),s)l[4].setComponents(m,_,y,O).normalize(),l[5].setComponents(d-m,E-_,S-y,k-O).normalize();else if(l[4].setComponents(d-m,E-_,S-y,k-O).normalize(),i===Vi)l[5].setComponents(d+m,E+_,S+y,k+O).normalize();else if(i===Vc)l[5].setComponents(m,_,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=Yy.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jy extends Yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const s_=new gn,Cd=new lv,Tc=new qc,Ac=new it;class Zy extends Yn{constructor(e=new Ni,i=new jy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,e.ray.intersectsSphere(Tc)===!1)return;s_.copy(l).invert(),Cd.copy(e.ray).applyMatrix4(s_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const _=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let A=_,D=E;A<D;A++){const y=d.getX(A);Ac.fromBufferAttribute(x,y),r_(Ac,y,m,l,e,i,this)}}else{const _=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=_,D=E;A<D;A++)Ac.fromBufferAttribute(x,A),r_(Ac,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function r_(o,e,i,s,l,c,h){const p=Cd.distanceSqToPoint(o);if(p<i){const m=new it;Cd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class fv extends Bn{constructor(e=[],i=Ps,s,l,c,h,p,m,d,v){super(e,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pr extends Bn{constructor(e,i,s=Wi,l,c,h,p=wn,m=wn,d,v=ya,x=1){if(v!==ya&&v!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ky extends Pr{constructor(e,i=Wi,s=Ps,l,c,h=wn,p=wn,m,d=ya){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jo extends Ni{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let _=0,E=0;A("z","y","x",-1,-1,s,i,e,h,c,0),A("z","y","x",1,-1,s,i,-e,h,c,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new xa(d,3)),this.setAttribute("normal",new xa(v,3)),this.setAttribute("uv",new xa(x,2));function A(D,y,S,w,U,O,k,P,B,b,z){const j=O/B,H=k/b,J=O/2,ut=k/2,ft=P/2,X=B+1,N=b+1;let F=0,rt=0;const mt=new it;for(let Mt=0;Mt<N;Mt++){const L=Mt*H-ut;for(let Q=0;Q<X;Q++){const xt=Q*j-J;mt[D]=xt*w,mt[y]=L*U,mt[S]=ft,d.push(mt.x,mt.y,mt.z),mt[D]=0,mt[y]=0,mt[S]=P>0?1:-1,v.push(mt.x,mt.y,mt.z),x.push(Q/B),x.push(1-Mt/b),F+=1}}for(let Mt=0;Mt<b;Mt++)for(let L=0;L<B;L++){const Q=_+L+X*Mt,xt=_+L+X*(Mt+1),At=_+(L+1)+X*(Mt+1),Dt=_+(L+1)+X*Mt;m.push(Q,xt,Dt),m.push(xt,At,Dt),rt+=6}p.addGroup(E,rt,z),E+=rt,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends Ni{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,x=e/p,_=i/m,E=[],A=[],D=[],y=[];for(let S=0;S<v;S++){const w=S*_-h;for(let U=0;U<d;U++){const O=U*x-c;A.push(O,-w,0),D.push(0,0,1),y.push(U/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const U=w+d*S,O=w+d*(S+1),k=w+1+d*(S+1),P=w+1+d*S;E.push(U,O,P),E.push(O,k,P)}this.setIndex(E),this.setAttribute("position",new xa(A,3)),this.setAttribute("normal",new xa(D,3)),this.setAttribute("uv",new xa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}function zr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(o_(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(o_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Fn(o){const e={};for(let i=0;i<o.length;i++){const s=zr(o[i]);for(const l in s)e[l]=s[l]}return e}function o_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Qy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function dv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ye.workingColorSpace}const Jy={clone:zr,merge:Fn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class eM extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nM extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rc=new it,Cc=new Fr,Bi=new it;class pv extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Rc,Cc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new it,l_=new ke,c_=new ke;class _i extends pv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(lh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mv extends pv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,wr=1;class aM extends Yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new _i(Cr,wr,e,i);c.layers=this.layers,this.add(c);const h=new _i(Cr,wr,e,i);h.layers=this.layers,this.add(h);const p=new _i(Cr,wr,e,i);p.layers=this.layers,this.add(p);const m=new _i(Cr,wr,e,i);m.layers=this.layers,this.add(m);const d=new _i(Cr,wr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,_,E),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class sM extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let rM=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}};const qd=class qd{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};qd.prototype.isMatrix2=!0;let u_=qd;function f_(o,e,i,s){const l=oM(s);switch(i){case $_:return o*e;case ev:return o*e/l.components*l.byteLength;case zd:return o*e/l.components*l.byteLength;case zs:return o*e*2/l.components*l.byteLength;case Fd:return o*e*2/l.components*l.byteLength;case tv:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Bd:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qh:case $h:return Math.max(o,16)*Math.max(e,8)/4;case Kh:case Jh:return Math.max(o,8)*Math.max(e,8)/2;case td:case ed:case id:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nd:case Bc:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sd:case yd:case Md:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ed:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ic:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oM(o){switch(o){case vi:case Z_:return{byteLength:1,components:1};case ko:case K_:case Sa:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Wi:case Ld:case Gi:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function gv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function lM(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,x=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const v=m.array,x=m.updateRanges;if(o.bindBuffer(d,p),x.length===0)o.bufferSubData(d,0,v);else{x.sort((E,A)=>E.start-A.start);let _=0;for(let E=1;E<x.length;E++){const A=x[_],D=x[E];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++_,x[_]=D)}x.length=_+1;for(let E=0,A=x.length;E<A;E++){const D=x[E];o.bufferSubData(d,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var cM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tE=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,nE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ME=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UE=`#ifdef USE_NORMALMAP
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
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,jE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,v1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,b1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,T1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,A1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,R1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,C1=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,w1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,D1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,O1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,F1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,B1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,G1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,V1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ue={alphahash_fragment:cM,alphahash_pars_fragment:uM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:xM,beginnormal_vertex:SM,bsdfs:yM,iridescence_fragment:MM,bumpmap_pars_fragment:EM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:wM,color_pars_vertex:DM,color_vertex:NM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:OM,displacementmap_pars_vertex:PM,displacementmap_vertex:zM,emissivemap_fragment:FM,emissivemap_pars_fragment:BM,colorspace_fragment:IM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:kM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:eE,envmap_vertex:WM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:jM,fog_pars_fragment:ZM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:QM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:$M,lights_pars_begin:tE,lights_toon_fragment:nE,lights_toon_pars_fragment:iE,lights_phong_fragment:aE,lights_phong_pars_fragment:sE,lights_physical_fragment:rE,lights_physical_pars_fragment:oE,lights_fragment_begin:lE,lights_fragment_maps:cE,lights_fragment_end:uE,lightprobes_pars_fragment:fE,logdepthbuf_fragment:hE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:gE,map_pars_fragment:_E,map_particle_fragment:vE,map_particle_pars_fragment:xE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:yE,morphinstance_vertex:ME,morphcolor_vertex:EE,morphnormal_vertex:bE,morphtarget_pars_vertex:TE,morphtarget_vertex:AE,normal_fragment_begin:RE,normal_fragment_maps:CE,normal_pars_fragment:wE,normal_pars_vertex:DE,normal_vertex:NE,normalmap_pars_fragment:UE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:OE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:zE,opaque_fragment:FE,packing:BE,premultiplied_alpha_fragment:IE,project_vertex:HE,dithering_fragment:GE,dithering_pars_fragment:VE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:XE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:qE,shadowmap_vertex:YE,shadowmask_pars_fragment:jE,skinbase_vertex:ZE,skinning_pars_vertex:KE,skinning_vertex:QE,skinnormal_vertex:JE,specularmap_fragment:$E,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:l1,background_vert:c1,background_frag:u1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distance_vert:_1,distance_frag:v1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:y1,linedashed_frag:M1,meshbasic_vert:E1,meshbasic_frag:b1,meshlambert_vert:T1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:N1,meshphong_frag:U1,meshphysical_vert:L1,meshphysical_frag:O1,meshtoon_vert:P1,meshtoon_frag:z1,points_vert:F1,points_frag:B1,shadow_vert:I1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},It={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new it},probesMax:{value:new it},probesResolution:{value:new it}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Fn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Fn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Fn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Be(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Fn([It.points,It.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Fn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Fn([It.common,It.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Fn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Fn([It.sprite,It.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Fn([It.common,It.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Fn([It.lights,It.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const wc={r:0,b:0,g:0},k1=new gn,_v=new se;_v.set(-1,0,0,0,1,0,0,0,1);function X1(o,e,i,s,l,c){const h=new Be(0);let p=l===!0?0:1,m,d,v=null,x=0,_=null;function E(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const O=w.backgroundBlurriness>0;U=e.get(U,O)}return U}function A(w){let U=!1;const O=E(w);O===null?y(h,p):O&&O.isColor&&(y(O,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(w,U){const O=E(U);O&&(O.isCubeTexture||O.mapping===Wc)?(d===void 0&&(d=new Ma(new jo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:zr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=O,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(U.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(_v),d.material.toneMapped=ye.getTransfer(O.colorSpace)!==Fe,(v!==O||x!==O.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,v=O,x=O.version,_=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Ma(new Zo(2,2),new Di({name:"BackgroundMaterial",uniforms:zr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=ye.getTransfer(O.colorSpace)!==Fe,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,v=O,x=O.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,U){w.getRGB(wc,dv(o)),i.buffers.color.setClear(wc.r,wc.g,wc.b,U,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,U=1){h.set(w),p=U,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,y(h,p)},render:A,addToRenderList:D,dispose:S}}function W1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,h=!1;function p(H,J,ut,ft,X){let N=!1;const F=x(H,ft,ut,J);c!==F&&(c=F,d(c.object)),N=E(H,ft,ut,X),N&&A(H,ft,ut,X),X!==null&&e.update(X,o.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,O(H,J,ut,ft),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function x(H,J,ut,ft){const X=ft.wireframe===!0;let N=s[J.id];N===void 0&&(N={},s[J.id]=N);const F=H.isInstancedMesh===!0?H.id:0;let rt=N[F];rt===void 0&&(rt={},N[F]=rt);let mt=rt[ut.id];mt===void 0&&(mt={},rt[ut.id]=mt);let Mt=mt[X];return Mt===void 0&&(Mt=_(m()),mt[X]=Mt),Mt}function _(H){const J=[],ut=[],ft=[];for(let X=0;X<i;X++)J[X]=0,ut[X]=0,ft[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ut,attributeDivisors:ft,object:H,attributes:{},index:null}}function E(H,J,ut,ft){const X=c.attributes,N=J.attributes;let F=0;const rt=ut.getAttributes();for(const mt in rt)if(rt[mt].location>=0){const L=X[mt];let Q=N[mt];if(Q===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==ft}function A(H,J,ut,ft){const X={},N=J.attributes;let F=0;const rt=ut.getAttributes();for(const mt in rt)if(rt[mt].location>=0){let L=N[mt];L===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),X[mt]=Q,F++}c.attributes=X,c.attributesNum=F,c.index=ft}function D(){const H=c.newAttributes;for(let J=0,ut=H.length;J<ut;J++)H[J]=0}function y(H){S(H,0)}function S(H,J){const ut=c.newAttributes,ft=c.enabledAttributes,X=c.attributeDivisors;ut[H]=1,ft[H]===0&&(o.enableVertexAttribArray(H),ft[H]=1),X[H]!==J&&(o.vertexAttribDivisor(H,J),X[H]=J)}function w(){const H=c.newAttributes,J=c.enabledAttributes;for(let ut=0,ft=J.length;ut<ft;ut++)J[ut]!==H[ut]&&(o.disableVertexAttribArray(ut),J[ut]=0)}function U(H,J,ut,ft,X,N,F){F===!0?o.vertexAttribIPointer(H,J,ut,X,N):o.vertexAttribPointer(H,J,ut,ft,X,N)}function O(H,J,ut,ft){D();const X=ft.attributes,N=ut.getAttributes(),F=J.defaultAttributeValues;for(const rt in N){const mt=N[rt];if(mt.location>=0){let Mt=X[rt];if(Mt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const L=Mt.normalized,Q=Mt.itemSize,xt=e.get(Mt);if(xt===void 0)continue;const At=xt.buffer,Dt=xt.type,ot=xt.bytesPerElement,St=Dt===o.INT||Dt===o.UNSIGNED_INT||Mt.gpuType===Ld;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ht=bt.stride,$t=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<mt.locationSize;Qt++)S(mt.location+Qt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<mt.locationSize;Qt++)y(mt.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Qt=0;Qt<mt.locationSize;Qt++)U(mt.location+Qt,Q/mt.locationSize,Dt,L,Ht*ot,($t+Q/mt.locationSize*Qt)*ot,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<mt.locationSize;bt++)S(mt.location+bt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<mt.locationSize;bt++)y(mt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<mt.locationSize;bt++)U(mt.location+bt,Q/mt.locationSize,Dt,L,Q*ot,Q/mt.locationSize*bt*ot,St)}}else if(F!==void 0){const L=F[rt];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(mt.location,L);break;case 3:o.vertexAttrib3fv(mt.location,L);break;case 4:o.vertexAttrib4fv(mt.location,L);break;default:o.vertexAttrib1fv(mt.location,L)}}}}w()}function k(){z();for(const H in s){const J=s[H];for(const ut in J){const ft=J[ut];for(const X in ft){const N=ft[X];for(const F in N)v(N[F].object),delete N[F];delete ft[X]}}delete s[H]}}function P(H){if(s[H.id]===void 0)return;const J=s[H.id];for(const ut in J){const ft=J[ut];for(const X in ft){const N=ft[X];for(const F in N)v(N[F].object),delete N[F];delete ft[X]}}delete s[H.id]}function B(H){for(const J in s){const ut=s[J];for(const ft in ut){const X=ut[ft];if(X[H.id]===void 0)continue;const N=X[H.id];for(const F in N)v(N[F].object),delete N[F];delete X[H.id]}}}function b(H){for(const J in s){const ut=s[J],ft=H.isInstancedMesh===!0?H.id:0,X=ut[ft];if(X!==void 0){for(const N in X){const F=X[N];for(const rt in F)v(F[rt].object),delete F[rt];delete X[N]}delete ut[ft],Object.keys(ut).length===0&&delete s[J]}}}function z(){j(),h=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:j,dispose:k,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:y,disableUnusedAttributes:w}}function q1(o,e,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,v){v!==0&&(o.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let _=0;for(let E=0;E<v;E++)_+=d[E];i.update(_,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function Y1(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ci&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const b=B===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==vi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gi&&!b)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(ee("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:O,maxSamples:k,samples:P}}function j1(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Ds,p=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const E=x.length!==0||_||s!==0||l;return l=_,s=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=v(x,_,0)},this.setState=function(x,_,E){const A=x.clippingPlanes,D=x.clipIntersection,y=x.clipShadows,S=o.get(x);if(!l||A===null||A.length===0||c&&!y)c?v(null):d();else{const w=c?0:s,U=w*4;let O=S.clippingState||null;m.value=O,O=v(A,_,U,E);for(let k=0;k!==U;++k)O[k]=i[k];S.clippingState=O,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,_,E,A){const D=x!==null?x.length:0;let y=null;if(D!==0){if(y=m.value,A!==!0||y===null){const S=E+D*4,w=_.matrixWorldInverse;p.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,O=E;U!==D;++U,O+=4)h.copy(x[U]).applyMatrix4(w,p),h.normal.toArray(y,O),y[O+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const ss=4,h_=[.125,.215,.35,.446,.526,.582],Us=20,Z1=256,Io=new mv,d_=new Be;let Uh=null,Lh=0,Oh=0,Ph=!1;const K1=new it;class p_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=K1}=c;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Lh,Oh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ps||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Sa,format:Ci,colorSpace:Hc,depthBuffer:!1},l=m_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q1(c)),this._blurMaterial=$1(c,e,i),this._ggxMaterial=J1(c,e,i)}return l}_compileMaterial(e){const i=new Ma(new Ni,e);this._renderer.compile(i,Io)}_sceneToCubeUV(e,i,s,l,c){const m=new _i(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,E=x.toneMapping;x.getClearColor(d_),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ma(new jo,new cv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(d_),S=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):O===1?(m.up.set(0,0,d[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,d[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const k=this._cubeSize;Dr(l,O*k,U>2?k:0,k,k),x.setRenderTarget(l),S&&x.render(D,m),x.render(e,m)}x.toneMapping=E,x.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ps||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Io)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),_=0+d*1.25,E=x*_,{_lodMax:A}=this,D=this._sizeLods[s],y=3*D*(s>A-ss?s-A+ss:0),S=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,Dr(c,y,S,3*D,2*D),l.setRenderTarget(c),l.render(p,Io),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Dr(e,y,S,3*D,2*D),l.setRenderTarget(e),l.render(p,Io)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const _=d.uniforms,E=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Us-1),D=c/A,y=isFinite(c)?1+Math.floor(v*D):Us;y>Us&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const S=[];let w=0;for(let B=0;B<Us;++B){const b=B/D,z=Math.exp(-b*b/2);S.push(z),B===0?w+=z:B<y&&(w+=2*z)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:U}=this;_.dTheta.value=A,_.mipInt.value=U-s;const O=this._sizeLods[l],k=3*O*(l>U-ss?l-U+ss:0),P=4*(this._cubeSize-O);Dr(i,k,P,3*O,2*O),m.setRenderTarget(i),m.render(x,Io)}}function Q1(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+h_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-ss?m=h_[h-o+ss-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,x=1+d,_=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,A=6,D=3,y=2,S=1,w=new Float32Array(D*A*E),U=new Float32Array(y*A*E),O=new Float32Array(S*A*E);for(let P=0;P<E;P++){const B=P%3*2/3-1,b=P>2?0:-1,z=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];w.set(z,D*A*P),U.set(_,y*A*P);const j=[P,P,P,P,P,P];O.set(j,S*A*P)}const k=new Ni;k.setAttribute("position",new wi(w,D)),k.setAttribute("uv",new wi(U,y)),k.setAttribute("faceIndex",new wi(O,S)),s.push(new Ma(k,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function m_(o,e,i){const s=new Xi(o,e,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function J1(o,e,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function $1(o,e,i){const s=new Float32Array(Us),l=new it(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function g_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function __(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}class vv extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:_a});c.uniforms.tEquirect.value=i;const h=new Ma(l,c),p=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Pn),new aM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function tb(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?h(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===sh||E===rh)if(e.has(_)){const A=e.get(_).texture;return p(A,_.mapping)}else{const A=_.image;if(A&&A.height>0){const D=new vv(A.height);return D.fromEquirectangularTexture(o,_),e.set(_,D),_.addEventListener("dispose",d),p(D.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,A=E===sh||E===rh,D=E===Ps||E===Or;if(A||D){let y=i.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new p_(o)),y=A?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const w=_.image;return A&&w&&w.height>0||D&&w&&m(w)?(s===null&&(s=new p_(o)),y=A?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function p(_,E){return E===sh?_.mapping=Ps:E===rh&&(_.mapping=Or),_}function m(_){let E=0;const A=6;for(let D=0;D<A;D++)_[D]!==void 0&&E++;return E===A}function d(_){const E=_.target;E.removeEventListener("dispose",d);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(_){const E=_.target;E.removeEventListener("dispose",v);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function eb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ad("WebGLRenderer: "+s+" extension not supported."),l}}}function nb(o,e,i,s){const l={},c=new WeakMap;function h(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);_.removeEventListener("dispose",h),delete l[_.id];const E=c.get(_);E&&(e.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function d(x){const _=[],E=x.index,A=x.attributes.position;let D=0;if(A===void 0)return;if(E!==null){const w=E.array;D=E.version;for(let U=0,O=w.length;U<O;U+=3){const k=w[U+0],P=w[U+1],B=w[U+2];_.push(k,P,P,B,B,k)}}else{const w=A.array;D=A.version;for(let U=0,O=w.length/3-1;U<O;U+=3){const k=U+0,P=U+1,B=U+2;_.push(k,P,P,B,B,k)}}const y=new(A.count>=65535?ov:rv)(_,1);y.version=D;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function v(x){const _=c.get(x);if(_){const E=x.index;E!==null&&_.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function ib(o,e,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,_){o.drawElements(s,_,c,x*h),i.update(_,s,1)}function d(x,_,E){E!==0&&(o.drawElementsInstanced(s,_,c,x*h,E),i.update(_,s,E))}function v(x,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,c,x,0,E);let D=0;for(let y=0;y<E;y++)D+=_[y];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function ab(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ee("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sb(o,e,i){const s=new WeakMap,l=new cn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let j=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",j)};var E=j;_!==void 0&&_.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let O=0;A===!0&&(O=1),D===!0&&(O=2),y===!0&&(O=3);let k=p.attributes.position.count*O,P=1;k>e.maxTextureSize&&(P=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*P*4*x),b=new iv(B,k,P,x);b.type=Gi,b.needsUpdate=!0;const z=O*4;for(let H=0;H<x;H++){const J=S[H],ut=w[H],ft=U[H],X=k*P*4*H;for(let N=0;N<J.count;N++){const F=N*z;A===!0&&(l.fromBufferAttribute(J,N),B[X+F+0]=l.x,B[X+F+1]=l.y,B[X+F+2]=l.z,B[X+F+3]=0),D===!0&&(l.fromBufferAttribute(ut,N),B[X+F+4]=l.x,B[X+F+5]=l.y,B[X+F+6]=l.z,B[X+F+7]=0),y===!0&&(l.fromBufferAttribute(ft,N),B[X+F+8]=l.x,B[X+F+9]=l.y,B[X+F+10]=l.z,B[X+F+11]=ft.itemSize===4?l.w:1)}}_={count:x,texture:b,size:new ke(k,P)},s.set(p,_),p.addEventListener("dispose",j)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<d.length;y++)A+=d[y];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function rb(o,e,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,_=e.get(d,x);if(c.get(_)!==v&&(e.update(_),c.set(_,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return _}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const ob={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function lb(o,e,i,s,l){const c=new Xi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Pr(e,i):void 0}),h=new Xi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Ni;p.setAttribute("position",new xa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new xa([0,2,0,0,2,0],2));const m=new eM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ma(p,m),v=new mv(-1,1,1,-1,0,1);let x=null,_=null,E=!1,A,D=null,y=[],S=!1;this.setSize=function(w,U){c.setSize(w,U),h.setSize(w,U);for(let O=0;O<y.length;O++){const k=y[O];k.setSize&&k.setSize(w,U)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const U=c.width,O=c.height;for(let k=0;k<y.length;k++){const P=y[k];P.setSize&&P.setSize(U,O)}},this.begin=function(w,U){if(E||w.toneMapping===ki&&y.length===0)return!1;if(D=U,U!==null){const O=U.width,k=U.height;(c.width!==O||c.height!==k)&&this.setSize(O,k)}return S===!1&&w.setRenderTarget(c),A=w.toneMapping,w.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(w,U){w.toneMapping=A,E=!0;let O=c,k=h;for(let P=0;P<y.length;P++){const B=y[P];if(B.enabled!==!1&&(B.render(w,k,O,U),B.needsSwap!==!1)){const b=O;O=k,k=b}}if(x!==w.outputColorSpace||_!==w.toneMapping){x=w.outputColorSpace,_=w.toneMapping,m.defines={},ye.getTransfer(x)===Fe&&(m.defines.SRGB_TRANSFER="");const P=ob[_];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(D),w.render(d,v),D=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const xv=new Bn,wd=new Pr(1,1),Sv=new iv,yv=new Dy,Mv=new fv,v_=[],x_=[],S_=new Float32Array(16),y_=new Float32Array(9),M_=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=v_[l];if(c===void 0&&(c=new Float32Array(l),v_[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(c,p)}return c}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function jc(o,e){let i=x_[e];i===void 0&&(i=new Int32Array(e),x_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function db(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;M_.set(s),o.uniformMatrix2fv(this.addr,!1,M_),Sn(i,s)}}function pb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;y_.set(s),o.uniformMatrix3fv(this.addr,!1,y_),Sn(i,s)}}function mb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;S_.set(s),o.uniformMatrix4fv(this.addr,!1,S_),Sn(i,s)}}function gb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function vb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function Sb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function Mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function Eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function bb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(wd.compareFunction=i.isReversedDepthBuffer()?Hd:Id,c=wd):c=xv,i.setTexture2D(e||c,l)}function Tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||yv,l)}function Ab(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Mv,l)}function Rb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Sv,l)}function Cb(o){switch(o){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function wb(o,e){o.uniform1fv(this.addr,e)}function Db(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function Nb(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function Ub(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function Lb(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Ob(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Pb(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zb(o,e){o.uniform1iv(this.addr,e)}function Fb(o,e){o.uniform2iv(this.addr,e)}function Bb(o,e){o.uniform3iv(this.addr,e)}function Ib(o,e){o.uniform4iv(this.addr,e)}function Hb(o,e){o.uniform1uiv(this.addr,e)}function Gb(o,e){o.uniform2uiv(this.addr,e)}function Vb(o,e){o.uniform3uiv(this.addr,e)}function kb(o,e){o.uniform4uiv(this.addr,e)}function Xb(o,e,i){const s=this.cache,l=e.length,c=jc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=wd:h=xv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function Wb(o,e,i){const s=this.cache,l=e.length,c=jc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||yv,c[h])}function qb(o,e,i){const s=this.cache,l=e.length,c=jc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Mv,c[h])}function Yb(o,e,i){const s=this.cache,l=e.length,c=jc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Sv,c[h])}function jb(o){switch(o){case 5126:return wb;case 35664:return Db;case 35665:return Nb;case 35666:return Ub;case 35674:return Lb;case 35675:return Ob;case 35676:return Pb;case 5124:case 35670:return zb;case 35667:case 35671:return Fb;case 35668:case 35672:return Bb;case 35669:case 35673:return Ib;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Zb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Cb(i.type)}}class Kb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jb(i.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function E_(o,e){o.seq.push(e),o.map[e.id]=e}function Jb(o,e,i){const s=o.name,l=s.length;for(zh.lastIndex=0;;){const c=zh.exec(s),h=zh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){E_(i,d===void 0?new Zb(p,o,e):new Kb(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new Qb(p),E_(i,x)),i=x}}}class Fc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);Jb(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function b_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const $b=37297;let tT=0;function eT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const T_=new se;function nT(o){ye._getMatrix(T_,ye.workingColorSpace,o);const e=`mat3( ${T_.elements.map(i=>i.toFixed(4))} )`;switch(ye.getTransfer(o)){case Gc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function A_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+eT(o.getShaderSource(e),p)}else return c}function iT(o,e){const i=nT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aT={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[Y_]:"Neutral",[W_]:"Custom"};function sT(o,e){const i=aT[e];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new it;function rT(){ye.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function lT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function cT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Vo(o){return o!==""}function R_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(uT,hT)}const fT=new Map;function hT(o,e){let i=ue[e];if(i===void 0){const s=fT.get(e);if(s!==void 0)i=ue[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(i)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(o){return o.replace(dT,pT)}function pT(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function D_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mT={[Uc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function gT(o){return mT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _T={[Ps]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function vT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":_T[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const xT={[Or]:"ENVMAP_MODE_REFRACTION"};function ST(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":xT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yT={[H_]:"ENVMAP_BLENDING_MULTIPLY",[cy]:"ENVMAP_BLENDING_MIX",[uy]:"ENVMAP_BLENDING_ADD"};function MT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":yT[o.combine]||"ENVMAP_BLENDING_NONE"}function ET(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bT(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=gT(i),d=vT(i),v=ST(i),x=MT(i),_=ET(i),E=oT(i),A=lT(c),D=l.createProgram();let y,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Vo).join(`
`),S.length>0&&(S+=`
`)):(y=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),S=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ue.tonemapping_pars_fragment:"",i.toneMapping!==ki?sT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,iT("linearToOutputTexel",i.outputColorSpace),rT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Dd(h),h=R_(h,i),h=C_(h,i),p=Dd(p),p=R_(p,i),p=C_(p,i),h=w_(h),p=w_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=w+y+h,O=w+S+p,k=b_(l,l.VERTEX_SHADER,U),P=b_(l,l.FRAGMENT_SHADER,O);l.attachShader(D,k),l.attachShader(D,P),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(H){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(D)||"",ut=l.getShaderInfoLog(k)||"",ft=l.getShaderInfoLog(P)||"",X=J.trim(),N=ut.trim(),F=ft.trim();let rt=!0,mt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,k,P);else{const Mt=A_(l,k,"vertex"),L=A_(l,P,"fragment");Ee("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+Mt+`
`+L)}else X!==""?ee("WebGLProgram: Program Info Log:",X):(N===""||F==="")&&(mt=!1);mt&&(H.diagnostics={runnable:rt,programLog:X,vertexShader:{log:N,prefix:y},fragmentShader:{log:F,prefix:S}})}l.deleteShader(k),l.deleteShader(P),b=new Fc(l,D),z=cT(l,D)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(D,$b)),j},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=k,this.fragmentShader=P,this}let TT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new RT(e),i.set(e,s)),s}}class RT{constructor(e){this.id=TT++,this.code=e,this.usedTimes=0}}function CT(o){return o===zs||o===Bc||o===Ic}function wT(o,e,i,s,l,c){const h=new av,p=new AT,m=new Set,d=[],v=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,z,j,H,J,ut){const ft=H.fog,X=J.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,rt=e.get(b.envMap||N,F),mt=rt&&rt.mapping===Wc?rt.image.height:null,Mt=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&ee("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=L!==void 0?L.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let At,Dt,ot,St;if(Mt){const te=Hi[Mt];At=te.vertexShader,Dt=te.fragmentShader}else At=b.vertexShader,Dt=b.fragmentShader,p.update(b),ot=p.getVertexShaderID(b),St=p.getFragmentShaderID(b);const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),$t=J.isInstancedMesh===!0,Qt=J.isBatchedMesh===!0,Xe=!!b.map,fe=!!b.matcap,_e=!!rt,Ne=!!b.aoMap,le=!!b.lightMap,sn=!!b.bumpMap,Ye=!!b.normalMap,En=!!b.displacementMap,W=!!b.emissiveMap,tn=!!b.metalnessMap,he=!!b.roughnessMap,Ie=b.anisotropy>0,Rt=b.clearcoat>0,Ke=b.dispersion>0,C=b.iridescence>0,M=b.sheen>0,K=b.transmission>0,_t=Ie&&!!b.anisotropyMap,Et=Rt&&!!b.clearcoatMap,Ct=Rt&&!!b.clearcoatNormalMap,Lt=Rt&&!!b.clearcoatRoughnessMap,ct=C&&!!b.iridescenceMap,ht=C&&!!b.iridescenceThicknessMap,Ot=M&&!!b.sheenColorMap,Pt=M&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,wt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=K&&!!b.transmissionMap,de=K&&!!b.thicknessMap,G=!!b.gradientMap,Tt=!!b.alphaMap,pt=b.alphaTest>0,Bt=!!b.alphaHash,Ut=!!b.extensions;let yt=ki;b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(yt=o.toneMapping);const qt={shaderID:Mt,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:Dt,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Qt,batchingColor:Qt&&J._colorsTexture!==null,instancing:$t,instancingColor:$t&&J.instanceColor!==null,instancingMorph:$t&&J.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:fe,envMap:_e,envMapMode:_e&&rt.mapping,envMapCubeUVHeight:mt,aoMap:Ne,lightMap:le,bumpMap:sn,normalMap:Ye,displacementMap:En,emissiveMap:W,normalMapObjectSpace:Ye&&b.normalMapType===dy,normalMapTangentSpace:Ye&&b.normalMapType===I0,packedNormalMap:Ye&&b.normalMapType===I0&&CT(b.normalMap.format),metalnessMap:tn,roughnessMap:he,anisotropy:Ie,anisotropyMap:_t,clearcoat:Rt,clearcoatMap:Et,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Lt,dispersion:Ke,iridescence:C,iridescenceMap:ct,iridescenceThicknessMap:ht,sheen:M,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Nt,specularColorMap:wt,specularIntensityMap:ne,transmission:K,transmissionMap:ie,thicknessMap:de,gradientMap:G,opaque:b.transparent===!1&&b.blending===Nr&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:Bt,combine:b.combine,mapUv:Xe&&A(b.map.channel),aoMapUv:Ne&&A(b.aoMap.channel),lightMapUv:le&&A(b.lightMap.channel),bumpMapUv:sn&&A(b.bumpMap.channel),normalMapUv:Ye&&A(b.normalMap.channel),displacementMapUv:En&&A(b.displacementMap.channel),emissiveMapUv:W&&A(b.emissiveMap.channel),metalnessMapUv:tn&&A(b.metalnessMap.channel),roughnessMapUv:he&&A(b.roughnessMap.channel),anisotropyMapUv:_t&&A(b.anisotropyMap.channel),clearcoatMapUv:Et&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(b.sheenRoughnessMap.channel),specularMapUv:Nt&&A(b.specularMap.channel),specularColorMapUv:wt&&A(b.specularColorMap.channel),specularIntensityMapUv:ne&&A(b.specularIntensityMap.channel),transmissionMapUv:ie&&A(b.transmissionMap.channel),thicknessMapUv:de&&A(b.thicknessMap.channel),alphaMapUv:Tt&&A(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ye||Ie),vertexNormals:!!X.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!X.attributes.uv&&(Xe||Tt),fog:!!ft,useFog:b.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||X.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ht,skinning:J.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:yt,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&ye.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:W&&b.emissiveMap.isVideoTexture===!0&&ye.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ma,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function y(b){const z=[];if(b.shaderID?z.push(b.shaderID):(z.push(b.customVertexShaderID),z.push(b.customFragmentShaderID)),b.defines!==void 0)for(const j in b.defines)z.push(j),z.push(b.defines[j]);return b.isRawShaderMaterial===!1&&(S(z,b),w(z,b),z.push(o.outputColorSpace)),z.push(b.customProgramCacheKey),z.join()}function S(b,z){b.push(z.precision),b.push(z.outputColorSpace),b.push(z.envMapMode),b.push(z.envMapCubeUVHeight),b.push(z.mapUv),b.push(z.alphaMapUv),b.push(z.lightMapUv),b.push(z.aoMapUv),b.push(z.bumpMapUv),b.push(z.normalMapUv),b.push(z.displacementMapUv),b.push(z.emissiveMapUv),b.push(z.metalnessMapUv),b.push(z.roughnessMapUv),b.push(z.anisotropyMapUv),b.push(z.clearcoatMapUv),b.push(z.clearcoatNormalMapUv),b.push(z.clearcoatRoughnessMapUv),b.push(z.iridescenceMapUv),b.push(z.iridescenceThicknessMapUv),b.push(z.sheenColorMapUv),b.push(z.sheenRoughnessMapUv),b.push(z.specularMapUv),b.push(z.specularColorMapUv),b.push(z.specularIntensityMapUv),b.push(z.transmissionMapUv),b.push(z.thicknessMapUv),b.push(z.combine),b.push(z.fogExp2),b.push(z.sizeAttenuation),b.push(z.morphTargetsCount),b.push(z.morphAttributeCount),b.push(z.numDirLights),b.push(z.numPointLights),b.push(z.numSpotLights),b.push(z.numSpotLightMaps),b.push(z.numHemiLights),b.push(z.numRectAreaLights),b.push(z.numDirLightShadows),b.push(z.numPointLightShadows),b.push(z.numSpotLightShadows),b.push(z.numSpotLightShadowsWithMaps),b.push(z.numLightProbes),b.push(z.shadowMapType),b.push(z.toneMapping),b.push(z.numClippingPlanes),b.push(z.numClipIntersection),b.push(z.depthPacking)}function w(b,z){h.disableAll(),z.instancing&&h.enable(0),z.instancingColor&&h.enable(1),z.instancingMorph&&h.enable(2),z.matcap&&h.enable(3),z.envMap&&h.enable(4),z.normalMapObjectSpace&&h.enable(5),z.normalMapTangentSpace&&h.enable(6),z.clearcoat&&h.enable(7),z.iridescence&&h.enable(8),z.alphaTest&&h.enable(9),z.vertexColors&&h.enable(10),z.vertexAlphas&&h.enable(11),z.vertexUv1s&&h.enable(12),z.vertexUv2s&&h.enable(13),z.vertexUv3s&&h.enable(14),z.vertexTangents&&h.enable(15),z.anisotropy&&h.enable(16),z.alphaHash&&h.enable(17),z.batching&&h.enable(18),z.dispersion&&h.enable(19),z.batchingColor&&h.enable(20),z.gradientMap&&h.enable(21),z.packedNormalMap&&h.enable(22),z.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),z.fog&&h.enable(0),z.useFog&&h.enable(1),z.flatShading&&h.enable(2),z.logarithmicDepthBuffer&&h.enable(3),z.reversedDepthBuffer&&h.enable(4),z.skinning&&h.enable(5),z.morphTargets&&h.enable(6),z.morphNormals&&h.enable(7),z.morphColors&&h.enable(8),z.premultipliedAlpha&&h.enable(9),z.shadowMapEnabled&&h.enable(10),z.doubleSided&&h.enable(11),z.flipSided&&h.enable(12),z.useDepthPacking&&h.enable(13),z.dithering&&h.enable(14),z.transmission&&h.enable(15),z.sheen&&h.enable(16),z.opaque&&h.enable(17),z.pointsUvs&&h.enable(18),z.decodeVideoTexture&&h.enable(19),z.decodeVideoTextureEmissive&&h.enable(20),z.alphaToCoverage&&h.enable(21),z.numLightProbeGrids>0&&h.enable(22),b.push(h.mask)}function U(b){const z=E[b.type];let j;if(z){const H=Hi[z];j=Jy.clone(H.uniforms)}else j=b.uniforms;return j}function O(b,z){let j=v.get(z);return j!==void 0?++j.usedTimes:(j=new bT(o,z,b,l),d.push(j),v.set(z,j)),j}function k(b){if(--b.usedTimes===0){const z=d.indexOf(b);d[z]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function P(b){p.remove(b)}function B(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:U,acquireProgram:O,releaseProgram:k,releaseShaderCache:P,programs:d,dispose:B}}function DT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function NT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function N_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function U_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,A,D,y,S){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:E,material:A,materialVariant:h(_),groupOrder:D,renderOrder:_.renderOrder,z:y,group:S},o[e]=w):(w.id=_.id,w.object=_,w.geometry=E,w.material=A,w.materialVariant=h(_),w.groupOrder=D,w.renderOrder=_.renderOrder,w.z=y,w.group=S),e++,w}function m(_,E,A,D,y,S){const w=p(_,E,A,D,y,S);A.transmission>0?s.push(w):A.transparent===!0?l.push(w):i.push(w)}function d(_,E,A,D,y,S){const w=p(_,E,A,D,y,S);A.transmission>0?s.unshift(w):A.transparent===!0?l.unshift(w):i.unshift(w)}function v(_,E){i.length>1&&i.sort(_||NT),s.length>1&&s.sort(E||N_),l.length>1&&l.sort(E||N_)}function x(){for(let _=e,E=o.length;_<E;_++){const A=o[_];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function UT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new U_,o.set(s,[h])):l>=c.length?(h=new U_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function LT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Be};break;case"SpotLight":i={position:new it,direction:new it,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function OT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let PT=0;function zT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function FT(o){const e=new LT,i=OT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new it);const l=new it,c=new gn,h=new gn;function p(d){let v=0,x=0,_=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let E=0,A=0,D=0,y=0,S=0,w=0,U=0,O=0,k=0,P=0,B=0;d.sort(zT);for(let z=0,j=d.length;z<j;z++){const H=d[z],J=H.color,ut=H.intensity,ft=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===zs?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=J.r*ut,x+=J.g*ut,_+=J.b*ut;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],ut);B++}else if(H.isDirectionalLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,s.directionalShadow[E]=rt,s.directionalShadowMap[E]=X,s.directionalShadowMatrix[E]=H.shadow.matrix,w++}s.directional[E]=N,E++}else if(H.isSpotLight){const N=e.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(J).multiplyScalar(ut),N.distance=ft,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[D]=N;const F=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,F.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[D]=F.matrix,H.castShadow){const rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,s.spotShadow[D]=rt,s.spotShadowMap[D]=X,O++}D++}else if(H.isRectAreaLight){const N=e.get(H);N.color.copy(J).multiplyScalar(ut),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=N,y++}else if(H.isPointLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const F=H.shadow,rt=i.get(H);rt.shadowIntensity=F.intensity,rt.shadowBias=F.bias,rt.shadowNormalBias=F.normalBias,rt.shadowRadius=F.radius,rt.shadowMapSize=F.mapSize,rt.shadowCameraNear=F.camera.near,rt.shadowCameraFar=F.camera.far,s.pointShadow[A]=rt,s.pointShadowMap[A]=X,s.pointShadowMatrix[A]=H.shadow.matrix,U++}s.point[A]=N,A++}else if(H.isHemisphereLight){const N=e.get(H);N.skyColor.copy(H.color).multiplyScalar(ut),N.groundColor.copy(H.groundColor).multiplyScalar(ut),s.hemi[S]=N,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=_;const b=s.hash;(b.directionalLength!==E||b.pointLength!==A||b.spotLength!==D||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==U||b.numSpotShadows!==O||b.numSpotMaps!==k||b.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=D,s.rectArea.length=y,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=O+k-P,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=B,b.directionalLength=E,b.pointLength=A,b.spotLength=D,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=U,b.numSpotShadows=O,b.numSpotMaps=k,b.numLightProbes=B,s.version=PT++)}function m(d,v){let x=0,_=0,E=0,A=0,D=0;const y=v.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const U=d[S];if(U.isDirectionalLight){const O=s.directional[x];O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),x++}else if(U.isSpotLight){const O=s.spot[E];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),E++}else if(U.isRectAreaLight){const O=s.rectArea[A];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),A++}else if(U.isPointLight){const O=s.point[_];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const O=s.hemi[D];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:s}}function L_(o){const e=new FT(o),i=[],s=[],l=[];function c(_){x.camera=_,i.length=0,s.length=0,l.length=0}function h(_){i.push(_)}function p(_){s.push(_)}function m(_){l.push(_)}function d(){e.setup(i)}function v(_){e.setupView(i,_)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function BT(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new L_(o),e.set(l,[p])):c>=h.length?(p=new L_(o),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GT=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],VT=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],O_=new gn,Ho=new it,Fh=new it;function kT(o,e,i){let s=new uv;const l=new ke,c=new ke,h=new cn,p=new nM,m=new iM,d={},v=i.maxTextureSize,x={[rs]:qn,[qn]:rs,[ma]:ma},_=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:IT,fragmentShader:HT}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const A=new Ni;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Ma(A,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let S=this.type;this.render=function(P,B,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===XS&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uc);const z=o.getRenderTarget(),j=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),J=o.state;J.setBlending(_a),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ut=S!==this.type;ut&&B.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(X=>X.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,X=P.length;ft<X;ft++){const N=P[ft],F=N.shadow;if(F===void 0){ee("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const rt=F.getFrameExtents();l.multiply(rt),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/rt.x),l.x=c.x*rt.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/rt.y),l.y=c.y*rt.y,F.mapSize.y=c.y));const mt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=mt,F.map===null||ut===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Go){if(N.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Xi(l.x,l.y,{format:zs,type:Sa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Pr(l.x,l.y,Gi),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=ya,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn}else N.isPointLight?(F.map=new vv(l.x),F.map.depthTexture=new Ky(l.x,Wi)):(F.map=new Xi(l.x,l.y),F.map.depthTexture=new Pr(l.x,l.y,Wi)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=ya,this.type===Uc?(F.map.depthTexture.compareFunction=mt?Hd:Id,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn);F.camera.updateProjectionMatrix()}const Mt=F.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Mt;L++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,L),o.clear();else{L===0&&(o.setRenderTarget(F.map),o.clear());const Q=F.getViewport(L);h.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),J.viewport(h)}if(N.isPointLight){const Q=F.camera,xt=F.matrix,At=N.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),Ho.setFromMatrixPosition(N.matrixWorld),Q.position.copy(Ho),Fh.copy(Q.position),Fh.add(GT[L]),Q.up.copy(VT[L]),Q.lookAt(Fh),Q.updateMatrixWorld(),xt.makeTranslation(-Ho.x,-Ho.y,-Ho.z),O_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(O_,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(N);s=F.getFrustum(),O(B,b,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===Go&&w(F,b),F.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(z,j,H)};function w(P,B){const b=e.update(D);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xi(l.x,l.y,{format:zs,type:Sa})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(B,null,b,_,D,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(B,null,b,E,D,null)}function U(P,B,b,z){let j=null;const H=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)j=H;else if(j=b.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const J=j.uuid,ut=B.uuid;let ft=d[J];ft===void 0&&(ft={},d[J]=ft);let X=ft[ut];X===void 0&&(X=j.clone(),ft[ut]=X,B.addEventListener("dispose",k)),j=X}if(j.visible=B.visible,j.wireframe=B.wireframe,z===Go?j.side=B.shadowSide!==null?B.shadowSide:B.side:j.side=B.shadowSide!==null?B.shadowSide:x[B.side],j.alphaMap=B.alphaMap,j.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,j.map=B.map,j.clipShadows=B.clipShadows,j.clippingPlanes=B.clippingPlanes,j.clipIntersection=B.clipIntersection,j.displacementMap=B.displacementMap,j.displacementScale=B.displacementScale,j.displacementBias=B.displacementBias,j.wireframeLinewidth=B.wireframeLinewidth,j.linewidth=B.linewidth,b.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const J=o.properties.get(j);J.light=b}return j}function O(P,B,b,z,j){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&j===Go)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const ut=e.update(P),ft=P.material;if(Array.isArray(ft)){const X=ut.groups;for(let N=0,F=X.length;N<F;N++){const rt=X[N],mt=ft[rt.materialIndex];if(mt&&mt.visible){const Mt=U(P,mt,z,j);P.onBeforeShadow(o,P,B,b,ut,Mt,rt),o.renderBufferDirect(b,null,ut,Mt,P,rt),P.onAfterShadow(o,P,B,b,ut,Mt,rt)}}}else if(ft.visible){const X=U(P,ft,z,j);P.onBeforeShadow(o,P,B,b,ut,X,null),o.renderBufferDirect(b,null,ut,X,P,null),P.onAfterShadow(o,P,B,b,ut,X,null)}}const J=P.children;for(let ut=0,ft=J.length;ut<ft;ut++)O(J[ut],B,b,z,j)}function k(P){P.target.removeEventListener("dispose",k);for(const b in d){const z=d[b],j=P.target.uuid;j in z&&(z[j].dispose(),delete z[j])}}}function XT(o,e){function i(){let G=!1;const Tt=new cn;let pt=null;const Bt=new cn(0,0,0,0);return{setMask:function(Ut){pt!==Ut&&!G&&(o.colorMask(Ut,Ut,Ut,Ut),pt=Ut)},setLocked:function(Ut){G=Ut},setClear:function(Ut,yt,qt,te,en){en===!0&&(Ut*=te,yt*=te,qt*=te),Tt.set(Ut,yt,qt,te),Bt.equals(Tt)===!1&&(o.clearColor(Ut,yt,qt,te),Bt.copy(Tt))},reset:function(){G=!1,pt=null,Bt.set(-1,0,0,0)}}}function s(){let G=!1,Tt=!1,pt=null,Bt=null,Ut=null;return{setReversed:function(yt){if(Tt!==yt){const qt=e.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=yt;const te=Ut;Ut=null,this.setClear(te)}},getReversed:function(){return Tt},setTest:function(yt){yt?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(yt){pt!==yt&&!G&&(o.depthMask(yt),pt=yt)},setFunc:function(yt){if(Tt&&(yt=Ey[yt]),Bt!==yt){switch(yt){case Gh:o.depthFunc(o.NEVER);break;case Vh:o.depthFunc(o.ALWAYS);break;case kh:o.depthFunc(o.LESS);break;case Lr:o.depthFunc(o.LEQUAL);break;case Xh:o.depthFunc(o.EQUAL);break;case Wh:o.depthFunc(o.GEQUAL);break;case qh:o.depthFunc(o.GREATER);break;case Yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=yt}},setLocked:function(yt){G=yt},setClear:function(yt){Ut!==yt&&(Ut=yt,Tt&&(yt=1-yt),o.clearDepth(yt))},reset:function(){G=!1,pt=null,Bt=null,Ut=null,Tt=!1}}}function l(){let G=!1,Tt=null,pt=null,Bt=null,Ut=null,yt=null,qt=null,te=null,en=null;return{setTest:function(Ce){G||(Ce?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Ce){Tt!==Ce&&!G&&(o.stencilMask(Ce),Tt=Ce)},setFunc:function(Ce,ri,jn){(pt!==Ce||Bt!==ri||Ut!==jn)&&(o.stencilFunc(Ce,ri,jn),pt=Ce,Bt=ri,Ut=jn)},setOp:function(Ce,ri,jn){(yt!==Ce||qt!==ri||te!==jn)&&(o.stencilOp(Ce,ri,jn),yt=Ce,qt=ri,te=jn)},setLocked:function(Ce){G=Ce},setClear:function(Ce){en!==Ce&&(o.clearStencil(Ce),en=Ce)},reset:function(){G=!1,Tt=null,pt=null,Bt=null,Ut=null,yt=null,qt=null,te=null,en=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},_={},E=new WeakMap,A=[],D=null,y=!1,S=null,w=null,U=null,O=null,k=null,P=null,B=null,b=new Be(0,0,0),z=0,j=!1,H=null,J=null,ut=null,ft=null,X=null;const N=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,rt=0;const mt=o.getParameter(o.VERSION);mt.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),F=rt>=1):mt.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),F=rt>=2);let Mt=null,L={};const Q=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),At=new cn().fromArray(Q),Dt=new cn().fromArray(xt);function ot(G,Tt,pt,Bt){const Ut=new Uint8Array(4),yt=o.createTexture();o.bindTexture(G,yt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<pt;qt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(Tt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return yt}const St={};St[o.TEXTURE_2D]=ot(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),bt(o.DEPTH_TEST),h.setFunc(Lr),sn(!1),Ye(z0),bt(o.CULL_FACE),Ne(_a);function bt(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function Ht(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function $t(G,Tt){return _[G]!==Tt?(o.bindFramebuffer(G,Tt),_[G]=Tt,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(G,Tt){let pt=A,Bt=!1;if(G){pt=E.get(Tt),pt===void 0&&(pt=[],E.set(Tt,pt));const Ut=G.textures;if(pt.length!==Ut.length||pt[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,qt=Ut.length;yt<qt;yt++)pt[yt]=o.COLOR_ATTACHMENT0+yt;pt.length=Ut.length,Bt=!0}}else pt[0]!==o.BACK&&(pt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(pt)}function Xe(G){return D!==G?(o.useProgram(G),D=G,!0):!1}const fe={[Ns]:o.FUNC_ADD,[qS]:o.FUNC_SUBTRACT,[YS]:o.FUNC_REVERSE_SUBTRACT};fe[jS]=o.MIN,fe[ZS]=o.MAX;const _e={[KS]:o.ZERO,[QS]:o.ONE,[JS]:o.SRC_COLOR,[Ih]:o.SRC_ALPHA,[ay]:o.SRC_ALPHA_SATURATE,[ny]:o.DST_COLOR,[ty]:o.DST_ALPHA,[$S]:o.ONE_MINUS_SRC_COLOR,[Hh]:o.ONE_MINUS_SRC_ALPHA,[iy]:o.ONE_MINUS_DST_COLOR,[ey]:o.ONE_MINUS_DST_ALPHA,[sy]:o.CONSTANT_COLOR,[ry]:o.ONE_MINUS_CONSTANT_COLOR,[oy]:o.CONSTANT_ALPHA,[ly]:o.ONE_MINUS_CONSTANT_ALPHA};function Ne(G,Tt,pt,Bt,Ut,yt,qt,te,en,Ce){if(G===_a){y===!0&&(Ht(o.BLEND),y=!1);return}if(y===!1&&(bt(o.BLEND),y=!0),G!==WS){if(G!==S||Ce!==j){if((w!==Ns||k!==Ns)&&(o.blendEquation(o.FUNC_ADD),w=Ns,k=Ns),Ce)switch(G){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bh:o.blendFunc(o.ONE,o.ONE);break;case F0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ee("WebGLState: Invalid blending: ",G);break}else switch(G){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case F0:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",G);break}U=null,O=null,P=null,B=null,b.set(0,0,0),z=0,S=G,j=Ce}return}Ut=Ut||Tt,yt=yt||pt,qt=qt||Bt,(Tt!==w||Ut!==k)&&(o.blendEquationSeparate(fe[Tt],fe[Ut]),w=Tt,k=Ut),(pt!==U||Bt!==O||yt!==P||qt!==B)&&(o.blendFuncSeparate(_e[pt],_e[Bt],_e[yt],_e[qt]),U=pt,O=Bt,P=yt,B=qt),(te.equals(b)===!1||en!==z)&&(o.blendColor(te.r,te.g,te.b,en),b.copy(te),z=en),S=G,j=!1}function le(G,Tt){G.side===ma?Ht(o.CULL_FACE):bt(o.CULL_FACE);let pt=G.side===qn;Tt&&(pt=!pt),sn(pt),G.blending===Nr&&G.transparent===!1?Ne(_a):Ne(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),c.setMask(G.colorWrite);const Bt=G.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function sn(G){H!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),H=G)}function Ye(G){G!==VS?(bt(o.CULL_FACE),G!==J&&(G===z0?o.cullFace(o.BACK):G===kS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),J=G}function En(G){G!==ut&&(F&&o.lineWidth(G),ut=G)}function W(G,Tt,pt){G?(bt(o.POLYGON_OFFSET_FILL),(ft!==Tt||X!==pt)&&(ft=Tt,X=pt,h.getReversed()&&(Tt=-Tt),o.polygonOffset(Tt,pt))):Ht(o.POLYGON_OFFSET_FILL)}function tn(G){G?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function he(G){G===void 0&&(G=o.TEXTURE0+N-1),Mt!==G&&(o.activeTexture(G),Mt=G)}function Ie(G,Tt,pt){pt===void 0&&(Mt===null?pt=o.TEXTURE0+N-1:pt=Mt);let Bt=L[pt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[pt]=Bt),(Bt.type!==G||Bt.texture!==Tt)&&(Mt!==pt&&(o.activeTexture(pt),Mt=pt),o.bindTexture(G,Tt||St[G]),Bt.type=G,Bt.texture=Tt)}function Rt(){const G=L[Mt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ke(){try{o.compressedTexImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function C(){try{o.compressedTexImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function M(){try{o.texSubImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function K(){try{o.texSubImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Et(){try{o.compressedTexSubImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Ct(){try{o.texStorage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Lt(){try{o.texStorage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function ct(){try{o.texImage2D(...arguments)}catch(G){Ee("WebGLState:",G)}}function ht(){try{o.texImage3D(...arguments)}catch(G){Ee("WebGLState:",G)}}function Ot(G){return x[G]!==void 0?x[G]:o.getParameter(G)}function Pt(G,Tt){x[G]!==Tt&&(o.pixelStorei(G,Tt),x[G]=Tt)}function Nt(G){At.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),At.copy(G))}function wt(G){Dt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Dt.copy(G))}function ne(G,Tt){let pt=d.get(Tt);pt===void 0&&(pt=new WeakMap,d.set(Tt,pt));let Bt=pt.get(G);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,G.name),pt.set(G,Bt))}function ie(G,Tt){const Bt=d.get(Tt).get(G);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,G.__bindingPointIndex),m.set(Tt,Bt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},x={},Mt=null,L={},_={},E=new WeakMap,A=[],D=null,y=!1,S=null,w=null,U=null,O=null,k=null,P=null,B=null,b=new Be(0,0,0),z=0,j=!1,H=null,J=null,ut=null,ft=null,X=null,At.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:bt,disable:Ht,bindFramebuffer:$t,drawBuffers:Qt,useProgram:Xe,setBlending:Ne,setMaterial:le,setFlipSided:sn,setCullFace:Ye,setLineWidth:En,setPolygonOffset:W,setScissorTest:tn,activeTexture:he,bindTexture:Ie,unbindTexture:Rt,compressedTexImage2D:Ke,compressedTexImage3D:C,texImage2D:ct,texImage3D:ht,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Ct,texStorage3D:Lt,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:Nt,viewport:wt,reset:de}}function WT(o,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ke,v=new WeakMap,x=new Set;let _;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(C,M){return A?new OffscreenCanvas(C,M):kc("canvas")}function y(C,M,K){let _t=1;const Et=Ke(C);if((Et.width>K||Et.height>K)&&(_t=K/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ct=Math.floor(_t*Et.width),Lt=Math.floor(_t*Et.height);_===void 0&&(_=D(Ct,Lt));const ct=M?D(Ct,Lt):_;return ct.width=Ct,ct.height=Lt,ct.getContext("2d").drawImage(C,0,0,Ct,Lt),ee("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ct+"x"+Lt+")."),ct}else return"data"in C&&ee("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),C;return C}function S(C){return C.generateMipmaps}function w(C){o.generateMipmap(C)}function U(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(C,M,K,_t,Et,Ct=!1){if(C!==null){if(o[C]!==void 0)return o[C];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Lt;_t&&(Lt=e.get("EXT_texture_norm16"),Lt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=M;if(M===o.RED&&(K===o.FLOAT&&(ct=o.R32F),K===o.HALF_FLOAT&&(ct=o.R16F),K===o.UNSIGNED_BYTE&&(ct=o.R8),K===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.R16_EXT),K===o.SHORT&&Lt&&(ct=Lt.R16_SNORM_EXT)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.R8UI),K===o.UNSIGNED_SHORT&&(ct=o.R16UI),K===o.UNSIGNED_INT&&(ct=o.R32UI),K===o.BYTE&&(ct=o.R8I),K===o.SHORT&&(ct=o.R16I),K===o.INT&&(ct=o.R32I)),M===o.RG&&(K===o.FLOAT&&(ct=o.RG32F),K===o.HALF_FLOAT&&(ct=o.RG16F),K===o.UNSIGNED_BYTE&&(ct=o.RG8),K===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RG16_EXT),K===o.SHORT&&Lt&&(ct=Lt.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RG8UI),K===o.UNSIGNED_SHORT&&(ct=o.RG16UI),K===o.UNSIGNED_INT&&(ct=o.RG32UI),K===o.BYTE&&(ct=o.RG8I),K===o.SHORT&&(ct=o.RG16I),K===o.INT&&(ct=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),K===o.UNSIGNED_INT&&(ct=o.RGB32UI),K===o.BYTE&&(ct=o.RGB8I),K===o.SHORT&&(ct=o.RGB16I),K===o.INT&&(ct=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),K===o.UNSIGNED_INT&&(ct=o.RGBA32UI),K===o.BYTE&&(ct=o.RGBA8I),K===o.SHORT&&(ct=o.RGBA16I),K===o.INT&&(ct=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RGB16_EXT),K===o.SHORT&&Lt&&(ct=Lt.RGB16_SNORM_EXT),K===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),M===o.RGBA){const ht=Ct?Gc:ye.getTransfer(Et);K===o.FLOAT&&(ct=o.RGBA32F),K===o.HALF_FLOAT&&(ct=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ct=ht===Fe?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT&&Lt&&(ct=Lt.RGBA16_EXT),K===o.SHORT&&Lt&&(ct=Lt.RGBA16_SNORM_EXT),K===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function k(C,M){let K;return C?M===null||M===Wi||M===Xo?K=o.DEPTH24_STENCIL8:M===Gi?K=o.DEPTH32F_STENCIL8:M===ko&&(K=o.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===Xo?K=o.DEPTH_COMPONENT24:M===Gi?K=o.DEPTH_COMPONENT32F:M===ko&&(K=o.DEPTH_COMPONENT16),K}function P(C,M){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function B(C){const M=C.target;M.removeEventListener("dispose",B),z(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&x.delete(M)}function b(C){const M=C.target;M.removeEventListener("dispose",b),H(M)}function z(C){const M=s.get(C);if(M.__webglInit===void 0)return;const K=C.source,_t=E.get(K);if(_t){const Et=_t[M.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&j(C),Object.keys(_t).length===0&&E.delete(K)}s.remove(C)}function j(C){const M=s.get(C);o.deleteTexture(M.__webglTexture);const K=C.source,_t=E.get(K);delete _t[M.__cacheKey],h.memory.textures--}function H(C){const M=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(M.__webglFramebuffer[_t]))for(let Et=0;Et<M.__webglFramebuffer[_t].length;Et++)o.deleteFramebuffer(M.__webglFramebuffer[_t][Et]);else o.deleteFramebuffer(M.__webglFramebuffer[_t]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[_t])}else{if(Array.isArray(M.__webglFramebuffer))for(let _t=0;_t<M.__webglFramebuffer.length;_t++)o.deleteFramebuffer(M.__webglFramebuffer[_t]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _t=0;_t<M.__webglColorRenderbuffer.length;_t++)M.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[_t]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=C.textures;for(let _t=0,Et=K.length;_t<Et;_t++){const Ct=s.get(K[_t]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),h.memory.textures--),s.remove(K[_t])}s.remove(C)}let J=0;function ut(){J=0}function ft(){return J}function X(C){J=C}function N(){const C=J;return C>=l.maxTextures&&ee("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),J+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function rt(C,M){const K=s.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&K.__version!==C.version){const _t=C.image;if(_t===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(K,C,M);return}}else C.isExternalTexture&&(K.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function mt(C,M){const K=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Ht(K,C,M);return}else C.isExternalTexture&&(K.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function Mt(C,M){const K=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Ht(K,C,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function L(C,M){const K=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&K.__version!==C.version){$t(K,C,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const Q={[jh]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[Zh]:o.MIRRORED_REPEAT},xt={[wn]:o.NEAREST,[fy]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Ls]:o.LINEAR_MIPMAP_LINEAR},At={[py]:o.NEVER,[xy]:o.ALWAYS,[my]:o.LESS,[Id]:o.LEQUAL,[gy]:o.EQUAL,[Hd]:o.GEQUAL,[_y]:o.GREATER,[vy]:o.NOTEQUAL};function Dt(C,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===oh||M.magFilter===rc||M.magFilter===Ls||M.minFilter===Pn||M.minFilter===oh||M.minFilter===rc||M.minFilter===Ls)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,Q[M.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,Q[M.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,Q[M.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,At[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==rc&&M.minFilter!==Ls||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ot(C,M){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",B));const _t=M.source;let Et=E.get(_t);Et===void 0&&(Et={},E.set(_t,Et));const Ct=F(M);if(Ct!==C.__cacheKey){Et[Ct]===void 0&&(Et[Ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),Et[Ct].usedTimes++;const Lt=Et[C.__cacheKey];Lt!==void 0&&(Et[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&j(M)),C.__cacheKey=Ct,C.__webglTexture=Et[Ct].texture}return K}function St(C,M,K){return Math.floor(Math.floor(C/K)/M)}function bt(C,M,K,_t){const Ct=C.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,_t,M.data);else{Ct.sort((Pt,Nt)=>Pt.start-Nt.start);let Lt=0;for(let Pt=1;Pt<Ct.length;Pt++){const Nt=Ct[Lt],wt=Ct[Pt],ne=Nt.start+Nt.count,ie=St(wt.start,M.width,4),de=St(Nt.start,M.width,4);wt.start<=ne+1&&ie===de&&St(wt.start+wt.count-1,M.width,4)===ie?Nt.count=Math.max(Nt.count,wt.start+wt.count-Nt.start):(++Lt,Ct[Lt]=wt)}Ct.length=Lt+1;const ct=i.getParameter(o.UNPACK_ROW_LENGTH),ht=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Pt=0,Nt=Ct.length;Pt<Nt;Pt++){const wt=Ct[Pt],ne=Math.floor(wt.start/4),ie=Math.ceil(wt.count/4),de=ne%M.width,G=Math.floor(ne/M.width),Tt=ie,pt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,de,G,Tt,pt,K,_t,M.data)}C.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ct),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Ht(C,M,K){let _t=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_t=o.TEXTURE_3D);const Et=ot(C,M),Ct=M.source;i.bindTexture(_t,C.__webglTexture,o.TEXTURE0+K);const Lt=s.get(Ct);if(Ct.version!==Lt.__version||Et===!0){if(i.activeTexture(o.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const pt=ye.getPrimaries(ye.workingColorSpace),Bt=M.colorSpace===as?null:ye.getPrimaries(M.colorSpace),Ut=M.colorSpace===as||pt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let ht=y(M.image,!1,l.maxTextureSize);ht=Rt(M,ht);const Ot=c.convert(M.format,M.colorSpace),Pt=c.convert(M.type);let Nt=O(M.internalFormat,Ot,Pt,M.normalized,M.colorSpace,M.isVideoTexture);Dt(_t,M);let wt;const ne=M.mipmaps,ie=M.isVideoTexture!==!0,de=Lt.__version===void 0||Et===!0,G=Ct.dataReady,Tt=P(M,ht);if(M.isDepthTexture)Nt=k(M.format===Os,M.type),de&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Nt,ht.width,ht.height):i.texImage2D(o.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Ot,Pt,null));else if(M.isDataTexture)if(ne.length>0){ie&&de&&i.texStorage2D(o.TEXTURE_2D,Tt,Nt,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],ie?G&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(o.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,Ot,Pt,wt.data);M.generateMipmaps=!1}else ie?(de&&i.texStorage2D(o.TEXTURE_2D,Tt,Nt,ht.width,ht.height),G&&bt(M,ht,Ot,Pt)):i.texImage2D(o.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Ot,Pt,ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ie&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Nt,ne[0].width,ne[0].height,ht.depth);for(let pt=0,Bt=ne.length;pt<Bt;pt++)if(wt=ne[pt],M.format!==Ci)if(Ot!==null)if(ie){if(G)if(M.layerUpdates.size>0){const Ut=f_(wt.width,wt.height,M.format,M.type);for(const yt of M.layerUpdates){const qt=wt.data.subarray(yt*Ut/wt.data.BYTES_PER_ELEMENT,(yt+1)*Ut/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,yt,wt.width,wt.height,1,Ot,qt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,ht.depth,Ot,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pt,Nt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,ht.depth,Ot,Pt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pt,Nt,wt.width,wt.height,ht.depth,0,Ot,Pt,wt.data)}else{ie&&de&&i.texStorage2D(o.TEXTURE_2D,Tt,Nt,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],M.format!==Ci?Ot!==null?ie?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,wt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?G&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(o.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,Ot,Pt,wt.data)}else if(M.isDataArrayTexture)if(ie){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Nt,ht.width,ht.height,ht.depth),G)if(M.layerUpdates.size>0){const pt=f_(ht.width,ht.height,M.format,M.type);for(const Bt of M.layerUpdates){const Ut=ht.data.subarray(Bt*pt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*pt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Bt,ht.width,ht.height,1,Ot,Pt,Ut)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Pt,ht.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,Ot,Pt,ht.data);else if(M.isData3DTexture)ie?(de&&i.texStorage3D(o.TEXTURE_3D,Tt,Nt,ht.width,ht.height,ht.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Pt,ht.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,Ot,Pt,ht.data);else if(M.isFramebufferTexture){if(de)if(ie)i.texStorage2D(o.TEXTURE_2D,Tt,Nt,ht.width,ht.height);else{let pt=ht.width,Bt=ht.height;for(let Ut=0;Ut<Tt;Ut++)i.texImage2D(o.TEXTURE_2D,Ut,Nt,pt,Bt,0,Ot,Pt,null),pt>>=1,Bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const pt=o.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ht.parentNode!==pt){pt.appendChild(ht),x.add(M),pt.onpaint=te=>{const en=te.changedElements;for(const Ce of x)en.includes(Ce.image)&&(Ce.needsUpdate=!0)},pt.requestPaint();return}const Bt=0,Ut=o.RGBA,yt=o.RGBA,qt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Bt,Ut,yt,qt,ht),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&de){const pt=Ke(ne[0]);i.texStorage2D(o.TEXTURE_2D,Tt,Nt,pt.width,pt.height)}for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],ie?G&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Ot,Pt,wt):i.texImage2D(o.TEXTURE_2D,pt,Nt,Ot,Pt,wt);M.generateMipmaps=!1}else if(ie){if(de){const pt=Ke(ht);i.texStorage2D(o.TEXTURE_2D,Tt,Nt,pt.width,pt.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Pt,ht)}else i.texImage2D(o.TEXTURE_2D,0,Nt,Ot,Pt,ht);S(M)&&w(_t),Lt.__version=Ct.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $t(C,M,K){if(M.image.length!==6)return;const _t=ot(C,M),Et=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+K);const Ct=s.get(Et);if(Et.version!==Ct.__version||_t===!0){i.activeTexture(o.TEXTURE0+K);const Lt=ye.getPrimaries(ye.workingColorSpace),ct=M.colorSpace===as?null:ye.getPrimaries(M.colorSpace),ht=M.colorSpace===as||Lt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ot=M.isCompressedTexture||M.image[0].isCompressedTexture,Pt=M.image[0]&&M.image[0].isDataTexture,Nt=[];for(let yt=0;yt<6;yt++)!Ot&&!Pt?Nt[yt]=y(M.image[yt],!0,l.maxCubemapSize):Nt[yt]=Pt?M.image[yt].image:M.image[yt],Nt[yt]=Rt(M,Nt[yt]);const wt=Nt[0],ne=c.convert(M.format,M.colorSpace),ie=c.convert(M.type),de=O(M.internalFormat,ne,ie,M.normalized,M.colorSpace),G=M.isVideoTexture!==!0,Tt=Ct.__version===void 0||_t===!0,pt=Et.dataReady;let Bt=P(M,wt);Dt(o.TEXTURE_CUBE_MAP,M);let Ut;if(Ot){G&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,de,wt.width,wt.height);for(let yt=0;yt<6;yt++){Ut=Nt[yt].mipmaps;for(let qt=0;qt<Ut.length;qt++){const te=Ut[qt];M.format!==Ci?ne!==null?G?pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,te.width,te.height,ne,te.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,de,te.width,te.height,0,te.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,te.width,te.height,ne,ie,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,de,te.width,te.height,0,ne,ie,te.data)}}}else{if(Ut=M.mipmaps,G&&Tt){Ut.length>0&&Bt++;const yt=Ke(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,de,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Pt){G?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Nt[yt].width,Nt[yt].height,ne,ie,Nt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,Nt[yt].width,Nt[yt].height,0,ne,ie,Nt[yt].data);for(let qt=0;qt<Ut.length;qt++){const en=Ut[qt].image[yt].image;G?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,en.width,en.height,ne,ie,en.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,de,en.width,en.height,0,ne,ie,en.data)}}else{G?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ne,ie,Nt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,ne,ie,Nt[yt]);for(let qt=0;qt<Ut.length;qt++){const te=Ut[qt];G?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,ne,ie,te.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,de,ne,ie,te.image[yt])}}}S(M)&&w(o.TEXTURE_CUBE_MAP),Ct.__version=Et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Qt(C,M,K,_t,Et,Ct){const Lt=c.convert(K.format,K.colorSpace),ct=c.convert(K.type),ht=O(K.internalFormat,Lt,ct,K.normalized,K.colorSpace),Ot=s.get(M),Pt=s.get(K);if(Pt.__renderTarget=M,!Ot.__hasExternalTextures){const Nt=Math.max(1,M.width>>Ct),wt=Math.max(1,M.height>>Ct);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,Ct,ht,Nt,wt,M.depth,0,Lt,ct,null):i.texImage2D(Et,Ct,ht,Nt,wt,0,Lt,ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,C),he(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Et,Pt.__webglTexture,0,tn(M)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Et,Pt.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(C,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,C),M.depthBuffer){const _t=M.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,Ct=k(M.stencilBuffer,Et),Lt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(M),Ct,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(M),Ct,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,C)}else{const _t=M.textures;for(let Et=0;Et<_t.length;Et++){const Ct=_t[Et],Lt=c.convert(Ct.format,Ct.colorSpace),ct=c.convert(Ct.type),ht=O(Ct.internalFormat,Lt,ct,Ct.normalized,Ct.colorSpace);he(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(M),ht,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(M),ht,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ht,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function fe(C,M,K){const _t=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(M.depthTexture);if(Et.__renderTarget=M,(!Et.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Ot=c.convert(M.depthTexture.format),Pt=c.convert(M.depthTexture.type);let Nt;M.depthTexture.format===ya?Nt=o.DEPTH_COMPONENT24:M.depthTexture.format===Os&&(Nt=o.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Nt,M.width,M.height,0,Ot,Pt,null)}}else rt(M.depthTexture,0);const Ct=Et.__webglTexture,Lt=tn(M),ct=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,ht=M.depthTexture.format===Os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===ya)he(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ct,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ct,Ct,0);else if(M.depthTexture.format===Os)he(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ct,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ct,Ct,0);else throw new Error("Unknown depthTexture format")}function _e(C){const M=s.get(C),K=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const _t=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_t){const Et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),M.__depthDisposeCallback=Et}M.__boundDepthTexture=_t}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let _t=0;_t<6;_t++)fe(M.__webglFramebuffer[_t],C,_t);else{const _t=C.texture.mipmaps;_t&&_t.length>0?fe(M.__webglFramebuffer[0],C,0):fe(M.__webglFramebuffer,C,0)}else if(K){M.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[_t]),M.__webglDepthbuffer[_t]===void 0)M.__webglDepthbuffer[_t]=o.createRenderbuffer(),Xe(M.__webglDepthbuffer[_t],C,!1);else{const Et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}else{const _t=C.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Xe(M.__webglDepthbuffer,C,!1);else{const Et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(C,M,K){const _t=s.get(C);M!==void 0&&Qt(_t.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&_e(C)}function le(C){const M=C.texture,K=s.get(C),_t=s.get(M);C.addEventListener("dispose",b);const Et=C.textures,Ct=C.isWebGLCubeRenderTarget===!0,Lt=Et.length>1;if(Lt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=M.version,h.memory.textures++),Ct){K.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ct]=[];for(let ht=0;ht<M.mipmaps.length;ht++)K.__webglFramebuffer[ct][ht]=o.createFramebuffer()}else K.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)K.__webglFramebuffer[ct]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let ct=0,ht=Et.length;ct<ht;ct++){const Ot=s.get(Et[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),h.memory.textures++)}if(C.samples>0&&he(C)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ct=0;ct<Et.length;ct++){const ht=Et[ct];K.__webglColorRenderbuffer[ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[ct]);const Ot=c.convert(ht.format,ht.colorSpace),Pt=c.convert(ht.type),Nt=O(ht.internalFormat,Ot,Pt,ht.normalized,ht.colorSpace,C.isXRRenderTarget===!0),wt=tn(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,Nt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ct,o.RENDERBUFFER,K.__webglColorRenderbuffer[ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(K.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Qt(K.__webglFramebuffer[ct][ht],C,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else Qt(K.__webglFramebuffer[ct],C,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(M)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let ct=0,ht=Et.length;ct<ht;ct++){const Ot=Et[ct],Pt=s.get(Ot);let Nt=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Nt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Pt.__webglTexture),Dt(Nt,Ot),Qt(K.__webglFramebuffer,C,Ot,o.COLOR_ATTACHMENT0+ct,Nt,0),S(Ot)&&w(Nt)}i.unbindTexture()}else{let ct=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ct,_t.__webglTexture),Dt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Qt(K.__webglFramebuffer[ht],C,M,o.COLOR_ATTACHMENT0,ct,ht);else Qt(K.__webglFramebuffer,C,M,o.COLOR_ATTACHMENT0,ct,0);S(M)&&w(ct),i.unbindTexture()}C.depthBuffer&&_e(C)}function sn(C){const M=C.textures;for(let K=0,_t=M.length;K<_t;K++){const Et=M[K];if(S(Et)){const Ct=U(C),Lt=s.get(Et).__webglTexture;i.bindTexture(Ct,Lt),w(Ct),i.unbindTexture()}}}const Ye=[],En=[];function W(C){if(C.samples>0){if(he(C)===!1){const M=C.textures,K=C.width,_t=C.height;let Et=o.COLOR_BUFFER_BIT;const Ct=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(C),ct=M.length>1;if(ct)for(let Ot=0;Ot<M.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const ht=C.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<M.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(M[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,K,_t,0,0,K,_t,Et,o.NEAREST),m===!0&&(Ye.length=0,En.length=0,Ye.push(o.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ye.push(Ct),En.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,En)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<M.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(M[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const M=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function tn(C){return Math.min(l.maxSamples,C.samples)}function he(C){const M=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(C){const M=h.render.frame;v.get(C)!==M&&(v.set(C,M),C.update())}function Rt(C,M){const K=C.colorSpace,_t=C.format,Et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||K!==Hc&&K!==as&&(ye.getTransfer(K)===Fe?(_t!==Ci||Et!==vi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",K)),M}function Ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=N,this.resetTextureUnits=ut,this.getTextureUnits=ft,this.setTextureUnits=X,this.setTexture2D=rt,this.setTexture2DArray=mt,this.setTexture3D=Mt,this.setTextureCube=L,this.rebindTextures=Ne,this.setupRenderTarget=le,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qT(o,e){function i(s,l=as){let c;const h=ye.getTransfer(l);if(s===vi)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===J_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z_)return o.BYTE;if(s===K_)return o.SHORT;if(s===ko)return o.UNSIGNED_SHORT;if(s===Ld)return o.INT;if(s===Wi)return o.UNSIGNED_INT;if(s===Gi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===$_)return o.ALPHA;if(s===tv)return o.RGB;if(s===Ci)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Os)return o.DEPTH_STENCIL;if(s===ev)return o.RED;if(s===zd)return o.RED_INTEGER;if(s===zs)return o.RG;if(s===Fd)return o.RG_INTEGER;if(s===Bd)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===zc)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Qh||s===Jh||s===$h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td||s===ed||s===nd||s===id||s===ad||s===Bc||s===sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===td||s===ed)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===id)return c.COMPRESSED_R11_EAC;if(s===ad)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bc)return c.COMPRESSED_RG11_EAC;if(s===sd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sd||s===yd||s===Md)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Sd)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===bd||s===Ic||s===Td)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ed)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ic)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Td)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new hv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Di({vertexShader:YT,fragmentShader:jT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ma(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends Bs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,_=null,E=null,A=null;const D=typeof XRWebGLBinding<"u",y=new ZT,S={},w=i.getContextAttributes();let U=null,O=null;const k=[],P=[],B=new ke;let b=null;const z=new _i;z.viewport=new cn;const j=new _i;j.viewport=new cn;const H=[z,j],J=new sM;let ut=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let St=k[ot];return St===void 0&&(St=new mh,k[ot]=St),St.getTargetRaySpace()},this.getControllerGrip=function(ot){let St=k[ot];return St===void 0&&(St=new mh,k[ot]=St),St.getGripSpace()},this.getHand=function(ot){let St=k[ot];return St===void 0&&(St=new mh,k[ot]=St),St.getHandSpace()};function X(ot){const St=P.indexOf(ot.inputSource);if(St===-1)return;const bt=k[St];bt!==void 0&&(bt.update(ot.inputSource,ot.frame,d||h),bt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function N(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",F);for(let ot=0;ot<k.length;ot++){const St=P[ot];St!==null&&(P[ot]=null,k[ot].disconnect(St))}ut=null,ft=null,y.reset();for(const ot in S)delete S[ot];e.setRenderTarget(U),E=null,_=null,x=null,l=null,O=null,Dt.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){c=ot,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){p=ot,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ot){d=ot},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ot){if(l=ot,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",N),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,$t=null;w.depth&&($t=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=w.stencil?Os:ya,Ht=w.stencil?Xo:Wi);const Qt={colorFormat:i.RGBA8,depthFormat:$t,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Qt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Xi(_.textureWidth,_.textureHeight,{format:Ci,type:vi,depthTexture:new Pr(_.textureWidth,_.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const bt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Ci,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Dt.setContext(l),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(ot){for(let St=0;St<ot.removed.length;St++){const bt=ot.removed[St],Ht=P.indexOf(bt);Ht>=0&&(P[Ht]=null,k[Ht].disconnect(bt))}for(let St=0;St<ot.added.length;St++){const bt=ot.added[St];let Ht=P.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<k.length;Qt++)if(Qt>=P.length){P.push(bt),Ht=Qt;break}else if(P[Qt]===null){P[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const $t=k[Ht];$t&&$t.connect(bt)}}const rt=new it,mt=new it;function Mt(ot,St,bt){rt.setFromMatrixPosition(St.matrixWorld),mt.setFromMatrixPosition(bt.matrixWorld);const Ht=rt.distanceTo(mt),$t=St.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,Xe=$t[14]/($t[10]-1),fe=$t[14]/($t[10]+1),_e=($t[9]+1)/$t[5],Ne=($t[9]-1)/$t[5],le=($t[8]-1)/$t[0],sn=(Qt[8]+1)/Qt[0],Ye=Xe*le,En=Xe*sn,W=Ht/(-le+sn),tn=W*-le;if(St.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(tn),ot.translateZ(W),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),$t[10]===-1)ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const he=Xe+W,Ie=fe+W,Rt=Ye-tn,Ke=En+(Ht-tn),C=_e*fe/Ie*he,M=Ne*fe/Ie*he;ot.projectionMatrix.makePerspective(Rt,Ke,C,M,he,Ie),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function L(ot,St){St===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(St.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(l===null)return;let St=ot.near,bt=ot.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),J.near=j.near=z.near=St,J.far=j.far=z.far=bt,(ut!==J.near||ft!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ut=J.near,ft=J.far),J.layers.mask=ot.layers.mask|6,z.layers.mask=J.layers.mask&-5,j.layers.mask=J.layers.mask&-3;const Ht=ot.parent,$t=J.cameras;L(J,Ht);for(let Qt=0;Qt<$t.length;Qt++)L($t[Qt],Ht);$t.length===2?Mt(J,z,j):J.projectionMatrix.copy(z.projectionMatrix),Q(ot,J,Ht)};function Q(ot,St,bt){bt===null?ot.matrix.copy(St.matrixWorld):(ot.matrix.copy(bt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(St.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(St.projectionMatrix),ot.projectionMatrixInverse.copy(St.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Rd*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(ot){m=ot,_!==null&&(_.fixedFoveation=ot),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ot)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(ot){return S[ot]};let xt=null;function At(ot,St){if(v=St.getViewerPose(d||h),A=St,v!==null){const bt=v.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let Ht=!1;bt.length!==J.cameras.length&&(J.cameras.length=0,Ht=!0);for(let fe=0;fe<bt.length;fe++){const _e=bt[fe];let Ne=null;if(E!==null)Ne=E.getViewport(_e);else{const sn=x.getViewSubImage(_,_e);Ne=sn.viewport,fe===0&&(e.setRenderTargetTextures(O,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(O))}let le=H[fe];le===void 0&&(le=new _i,le.layers.enable(fe),le.viewport=new cn,H[fe]=le),le.matrix.fromArray(_e.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(_e.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),fe===0&&(J.matrix.copy(le.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ht===!0&&J.cameras.push(le)}const $t=l.enabledFeatures;if($t&&$t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const fe=x.getDepthInformation(bt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,l.renderState)}if($t&&$t.includes("camera-access")&&D){e.state.unbindTexture(),x=s.getBinding();for(let fe=0;fe<bt.length;fe++){const _e=bt[fe].camera;if(_e){let Ne=S[_e];Ne||(Ne=new hv,S[_e]=Ne);const le=x.getCameraImage(_e);Ne.sourceTexture=le}}}}for(let bt=0;bt<k.length;bt++){const Ht=P[bt],$t=k[bt];Ht!==null&&$t!==void 0&&$t.update(Ht,St,d||h)}xt&&xt(ot,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),A=null}const Dt=new gv;Dt.setAnimationLoop(At),this.setAnimationLoop=function(ot){xt=ot},this.dispose=function(){}}}const QT=new gn,Ev=new se;Ev.set(-1,0,0,0,1,0,0,0,1);function JT(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,dv(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,w,U,O){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),_(y,S),S.isMeshPhysicalMaterial&&E(y,S,O)):S.isMeshMatcapMaterial?(c(y,S),A(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),D(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,w,U):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),U=w.envMap,O=w.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(QT.makeRotationFromEuler(O)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Ev),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,w,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=U*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function D(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function $T(o,e,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const O=U.program;s.uniformBlockBinding(w,O)}function d(w,U){let O=l[w.id];O===void 0&&(A(w),O=v(w),l[w.id]=O,w.addEventListener("dispose",y));const k=U.program;s.updateUBOMapping(w,k);const P=e.render.frame;c[w.id]!==P&&(_(w),c[w.id]=P)}function v(w){const U=x();w.__bindingPointIndex=U;const O=o.createBuffer(),k=w.__size,P=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,k,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,O),O}function x(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const U=l[w.id],O=w.uniforms,k=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,B=O.length;P<B;P++){const b=Array.isArray(O[P])?O[P]:[O[P]];for(let z=0,j=b.length;z<j;z++){const H=b[z];if(E(H,P,z,k)===!0){const J=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let X=0;X<ut.length;X++){const N=ut[X],F=D(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,J+ft,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):ArrayBuffer.isView(N)?H.__data.set(new N.constructor(N.buffer,N.byteOffset,H.__data.length)):(N.toArray(H.__data,ft),ft+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,U,O,k){const P=w.value,B=U+"_"+O;if(k[B]===void 0)return typeof P=="number"||typeof P=="boolean"?k[B]=P:ArrayBuffer.isView(P)?k[B]=P.slice():k[B]=P.clone(),!0;{const b=k[B];if(typeof P=="number"||typeof P=="boolean"){if(b!==P)return k[B]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(b.equals(P)===!1)return b.copy(P),!0}}return!1}function A(w){const U=w.uniforms;let O=0;const k=16;for(let B=0,b=U.length;B<b;B++){const z=Array.isArray(U[B])?U[B]:[U[B]];for(let j=0,H=z.length;j<H;j++){const J=z[j],ut=Array.isArray(J.value)?J.value:[J.value];for(let ft=0,X=ut.length;ft<X;ft++){const N=ut[ft],F=D(N),rt=O%k,mt=rt%F.boundary,Mt=rt+mt;O+=mt,Mt!==0&&k-Mt<F.storage&&(O+=k-Mt),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=O,O+=F.storage}}}const P=O%k;return P>0&&(O+=k-P),w.__size=O,w.__cache={},this}function D(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(U.boundary=16,U.storage=w.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",w),U}function y(w){const U=w.target;U.removeEventListener("dispose",y);const O=h.indexOf(U.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const tA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function eA(){return Ii===null&&(Ii=new Xy(tA,16,16,zs,Sa),Ii.name="DFG_LUT",Ii.minFilter=Pn,Ii.magFilter=Pn,Ii.wrapS=ga,Ii.wrapT=ga,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class nA{constructor(e={}){const{canvas:i=yy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:E=vi}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const D=E,y=new Set([Bd,Fd,zd]),S=new Set([vi,Wi,ko,Xo,Od,Pd]),w=new Uint32Array(4),U=new Int32Array(4),O=new it;let k=null,P=null;const B=[],b=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let H=!1,J=null;this._outputColorSpace=gi;let ut=0,ft=0,X=null,N=-1,F=null;const rt=new cn,mt=new cn;let Mt=null;const L=new Be(0);let Q=0,xt=i.width,At=i.height,Dt=1,ot=null,St=null;const bt=new cn(0,0,xt,At),Ht=new cn(0,0,xt,At);let $t=!1;const Qt=new uv;let Xe=!1,fe=!1;const _e=new gn,Ne=new it,le=new cn,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function En(){return X===null?Dt:1}let W=s;function tn(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",te,!1),W===null){const q="webgl2";if(W=tn(q,T),W===null)throw tn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ee("WebGLRenderer: "+T.message),T}let he,Ie,Rt,Ke,C,M,K,_t,Et,Ct,Lt,ct,ht,Ot,Pt,Nt,wt,ne,ie,de,G,Tt,pt;function Bt(){he=new eb(W),he.init(),G=new qT(W,he),Ie=new Y1(W,he,e,G),Rt=new XT(W,he),Ie.reversedDepthBuffer&&_&&Rt.buffers.depth.setReversed(!0),Ke=new ab(W),C=new DT,M=new WT(W,he,Rt,C,Ie,G,Ke),K=new tb(j),_t=new lM(W),Tt=new W1(W,_t),Et=new nb(W,_t,Ke,Tt),Ct=new rb(W,Et,_t,Tt,Ke),ne=new sb(W,Ie,M),Pt=new j1(C),Lt=new wT(j,K,he,Ie,Tt,Pt),ct=new JT(j,C),ht=new UT,Ot=new BT(he),wt=new X1(j,K,Rt,Ct,A,m),Nt=new kT(j,Ct,Ie),pt=new $T(W,Ke,Ie,Rt),ie=new q1(W,he,Ke),de=new ib(W,he,Ke),Ke.programs=Lt.programs,j.capabilities=Ie,j.extensions=he,j.properties=C,j.renderLists=ht,j.shadowMap=Nt,j.state=Rt,j.info=Ke}Bt(),D!==vi&&(z=new lb(D,i.width,i.height,l,c));const Ut=new KT(j,W);this.xr=Ut,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(T){T!==void 0&&(Dt=T,this.setSize(xt,At,!1))},this.getSize=function(T){return T.set(xt,At)},this.setSize=function(T,q,at=!0){if(Ut.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=T,At=q,i.width=Math.floor(T*Dt),i.height=Math.floor(q*Dt),at===!0&&(i.style.width=T+"px",i.style.height=q+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(xt*Dt,At*Dt).floor()},this.setDrawingBufferSize=function(T,q,at){xt=T,At=q,Dt=at,i.width=Math.floor(T*at),i.height=Math.floor(q*at),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(D===vi){Ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(rt)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,q,at,et){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,q,at,et),Rt.viewport(rt.copy(bt).multiplyScalar(Dt).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,q,at,et){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,q,at,et),Rt.scissor(mt.copy(Ht).multiplyScalar(Dt).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(T){Rt.setScissorTest($t=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){St=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,at=!0){let et=0;if(T){let nt=!1;if(X!==null){const Ft=X.texture.format;nt=y.has(Ft)}if(nt){const Ft=X.texture.type,Vt=S.has(Ft),zt=wt.getClearColor(),Xt=wt.getClearAlpha(),kt=zt.r,Zt=zt.g,re=zt.b;Vt?(w[0]=kt,w[1]=Zt,w[2]=re,w[3]=Xt,W.clearBufferuiv(W.COLOR,0,w)):(U[0]=kt,U[1]=Zt,U[2]=re,U[3]=Xt,W.clearBufferiv(W.COLOR,0,U))}else et|=W.COLOR_BUFFER_BIT}q&&(et|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&W.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),J=T},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",te,!1),wt.dispose(),ht.dispose(),Ot.dispose(),C.dispose(),K.dispose(),Ct.dispose(),Tt.dispose(),pt.dispose(),Lt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Hr),Ut.removeEventListener("sessionend",Gr),Dn.stop()};function yt(T){T.preventDefault(),X0("WebGLRenderer: Context Lost."),H=!0}function qt(){X0("WebGLRenderer: Context Restored."),H=!1;const T=Ke.autoReset,q=Nt.enabled,at=Nt.autoUpdate,et=Nt.needsUpdate,nt=Nt.type;Bt(),Ke.autoReset=T,Nt.enabled=q,Nt.autoUpdate=at,Nt.needsUpdate=et,Nt.type=nt}function te(T){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function en(T){const q=T.target;q.removeEventListener("dispose",en),Ce(q)}function Ce(T){ri(T),C.remove(T)}function ri(T){const q=C.get(T).programs;q!==void 0&&(q.forEach(function(at){Lt.releaseProgram(at)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,at,et,nt,Ft){q===null&&(q=sn);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,zt=Ta(T,q,at,et,nt);Rt.setMaterial(et,Vt);let Xt=at.index,kt=1;if(et.wireframe===!0){if(Xt=Et.getWireframeAttribute(at),Xt===void 0)return;kt=2}const Zt=at.drawRange,re=at.attributes.position;let jt=Zt.start*kt,Te=(Zt.start+Zt.count)*kt;Ft!==null&&(jt=Math.max(jt,Ft.start*kt),Te=Math.min(Te,(Ft.start+Ft.count)*kt)),Xt!==null?(jt=Math.max(jt,0),Te=Math.min(Te,Xt.count)):re!=null&&(jt=Math.max(jt,0),Te=Math.min(Te,re.count));const Qe=Te-jt;if(Qe<0||Qe===1/0)return;Tt.setup(nt,et,zt,at,Xt);let We,Ue=ie;if(Xt!==null&&(We=_t.get(Xt),Ue=de,Ue.setIndex(We)),nt.isMesh)et.wireframe===!0?(Rt.setLineWidth(et.wireframeLinewidth*En()),Ue.setMode(W.LINES)):Ue.setMode(W.TRIANGLES);else if(nt.isLine){let Le=et.linewidth;Le===void 0&&(Le=1),Rt.setLineWidth(Le*En()),nt.isLineSegments?Ue.setMode(W.LINES):nt.isLineLoop?Ue.setMode(W.LINE_LOOP):Ue.setMode(W.LINE_STRIP)}else nt.isPoints?Ue.setMode(W.POINTS):nt.isSprite&&Ue.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ue.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Le=nt._multiDrawStarts,Gt=nt._multiDrawCounts,Nn=nt._multiDrawCount,pe=Xt?_t.get(Xt).bytesPerElement:1,_n=C.get(et).currentProgram.getUniforms();for(let Zn=0;Zn<Nn;Zn++)_n.setValue(W,"_gl_DrawID",Zn),Ue.render(Le[Zn]/pe,Gt[Zn])}else if(nt.isInstancedMesh)Ue.renderInstances(jt,Qe,nt.count);else if(at.isInstancedBufferGeometry){const Le=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Gt=Math.min(at.instanceCount,Le);Ue.renderInstances(jt,Qe,Gt)}else Ue.render(jt,Qe)};function jn(T,q,at){T.transparent===!0&&T.side===ma&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,Is(T,q,at),T.side=rs,T.needsUpdate=!0,Is(T,q,at),T.side=ma):Is(T,q,at)}this.compile=function(T,q,at=null){at===null&&(at=T),P=Ot.get(at),P.init(q),b.push(P),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(P.pushLight(nt),nt.castShadow&&P.pushShadow(nt))}),T!==at&&T.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(P.pushLight(nt),nt.castShadow&&P.pushShadow(nt))}),P.setupLights();const et=new Set;return T.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ft=nt.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const zt=Ft[Vt];jn(zt,at,nt),et.add(zt)}else jn(Ft,at,nt),et.add(Ft)}),P=b.pop(),et},this.compileAsync=function(T,q,at=null){const et=this.compile(T,q,at);return new Promise(nt=>{function Ft(){if(et.forEach(function(Vt){C.get(Vt).currentProgram.isReady()&&et.delete(Vt)}),et.size===0){nt(T);return}setTimeout(Ft,10)}he.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let os=null;function Ir(T){os&&os(T)}function Hr(){Dn.stop()}function Gr(){Dn.start()}const Dn=new gv;Dn.setAnimationLoop(Ir),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(T){os=T,Ut.setAnimationLoop(T),T===null?Dn.stop():Dn.start()},Ut.addEventListener("sessionstart",Hr),Ut.addEventListener("sessionend",Gr),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(T,q);const at=Ut.enabled===!0&&Ut.isPresenting===!0,et=z!==null&&(X===null||at)&&z.begin(j,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(q),q=Ut.getCamera()),T.isScene===!0&&T.onBeforeRender(j,T,q,X),P=Ot.get(T,b.length),P.init(q),P.state.textureUnits=M.getTextureUnits(),b.push(P),_e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qt.setFromProjectionMatrix(_e,Vi,q.reversedDepth),fe=this.localClippingEnabled,Xe=Pt.init(this.clippingPlanes,fe),k=ht.get(T,B.length),k.init(),B.push(k),Ut.enabled===!0&&Ut.isPresenting===!0){const Vt=j.xr.getDepthSensingMesh();Vt!==null&&rn(Vt,q,-1/0,j.sortObjects)}rn(T,q,0,j.sortObjects),k.finish(),j.sortObjects===!0&&k.sort(ot,St),Ye=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Ye&&wt.addToRenderList(k,T),this.info.render.frame++,Xe===!0&&Pt.beginShadows();const nt=P.state.shadowsArray;if(Nt.render(nt,T,q),Xe===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&z.hasRenderPass())===!1){const Vt=k.opaque,zt=k.transmissive;if(P.setupLights(),q.isArrayCamera){const Xt=q.cameras;if(zt.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];qi(Vt,zt,T,re)}Ye&&wt.render(T);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];bn(k,T,re,re.viewport)}}else zt.length>0&&qi(Vt,zt,T,q),Ye&&wt.render(T),bn(k,T,q)}X!==null&&ft===0&&(M.updateMultisampleRenderTarget(X),M.updateRenderTargetMipmap(X)),et&&z.end(j),T.isScene===!0&&T.onAfterRender(j,T,q),Tt.resetDefaultState(),N=-1,F=null,b.pop(),b.length>0?(P=b[b.length-1],M.setTextureUnits(P.state.textureUnits),Xe===!0&&Pt.setGlobalState(j.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?k=B[B.length-1]:k=null,J!==null&&J.renderEnd()};function rn(T,q,at,et){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)at=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qt.intersectsSprite(T)){et&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const Vt=Ct.update(T),zt=T.material;zt.visible&&k.push(T,Vt,zt,at,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qt.intersectsObject(T))){const Vt=Ct.update(T),zt=T.material;if(et&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),le.copy(Vt.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(zt)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt],jt=zt[re.materialIndex];jt&&jt.visible&&k.push(T,Vt,jt,at,le.z,re)}}else zt.visible&&k.push(T,Vt,zt,at,le.z,null)}}const Ft=T.children;for(let Vt=0,zt=Ft.length;Vt<zt;Vt++)rn(Ft[Vt],q,at,et)}function bn(T,q,at,et){const{opaque:nt,transmissive:Ft,transparent:Vt}=T;P.setupLightsView(at),Xe===!0&&Pt.setGlobalState(j.clippingPlanes,at),et&&Rt.viewport(rt.copy(et)),nt.length>0&&Ea(nt,q,at),Ft.length>0&&Ea(Ft,q,at),Vt.length>0&&Ea(Vt,q,at),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function qi(T,q,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[et.id]===void 0){const jt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[et.id]=new Xi(1,1,{generateMipmaps:!0,type:jt?Sa:vi,minFilter:Ls,samples:Math.max(4,Ie.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace})}const Ft=P.state.transmissionRenderTarget[et.id],Vt=et.viewport||rt;Ft.setSize(Vt.z*j.transmissionResolutionScale,Vt.w*j.transmissionResolutionScale);const zt=j.getRenderTarget(),Xt=j.getActiveCubeFace(),kt=j.getActiveMipmapLevel();j.setRenderTarget(Ft),j.getClearColor(L),Q=j.getClearAlpha(),Q<1&&j.setClearColor(16777215,.5),j.clear(),Ye&&wt.render(at);const Zt=j.toneMapping;j.toneMapping=ki;const re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),P.setupLightsView(et),Xe===!0&&Pt.setGlobalState(j.clippingPlanes,et),Ea(T,at,et),M.updateMultisampleRenderTarget(Ft),M.updateRenderTargetMipmap(Ft),he.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Te=0,Qe=q.length;Te<Qe;Te++){const We=q[Te],{object:Ue,geometry:Le,material:Gt,group:Nn}=We;if(Gt.side===ma&&Ue.layers.test(et.layers)){const pe=Gt.side;Gt.side=qn,Gt.needsUpdate=!0,Ko(Ue,at,et,Le,Gt,Nn),Gt.side=pe,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(M.updateMultisampleRenderTarget(Ft),M.updateRenderTargetMipmap(Ft))}j.setRenderTarget(zt,Xt,kt),j.setClearColor(L,Q),re!==void 0&&(et.viewport=re),j.toneMapping=Zt}function Ea(T,q,at){const et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,Ft=T.length;nt<Ft;nt++){const Vt=T[nt],{object:zt,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&et!==null&&(Zt=et),zt.layers.test(at.layers)&&Ko(zt,q,at,Xt,Zt,kt)}}function Ko(T,q,at,et,nt,Ft){T.onBeforeRender(j,q,at,et,nt,Ft),T.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),nt.onBeforeRender(j,q,at,et,T,Ft),nt.transparent===!0&&nt.side===ma&&nt.forceSinglePass===!1?(nt.side=qn,nt.needsUpdate=!0,j.renderBufferDirect(at,q,et,nt,T,Ft),nt.side=rs,nt.needsUpdate=!0,j.renderBufferDirect(at,q,et,nt,T,Ft),nt.side=ma):j.renderBufferDirect(at,q,et,nt,T,Ft),T.onAfterRender(j,q,at,et,nt,Ft)}function Is(T,q,at){q.isScene!==!0&&(q=sn);const et=C.get(T),nt=P.state.lights,Ft=P.state.shadowsArray,Vt=nt.state.version,zt=Lt.getParameters(T,nt.state,Ft,q,at,P.state.lightProbeGridArray),Xt=Lt.getProgramCacheKey(zt);let kt=et.programs;et.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;const Zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;et.envMap=K.get(T.envMap||et.environment,Zt),et.envMapRotation=et.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",en),kt=new Map,et.programs=kt);let re=kt.get(Xt);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===Vt)return ba(T,zt),re}else zt.uniforms=Lt.getUniforms(T),J!==null&&T.isNodeMaterial&&J.build(T,at,zt),T.onBeforeCompile(zt,j),re=Lt.acquireProgram(zt,Xt),kt.set(Xt,re),et.uniforms=zt.uniforms;const jt=et.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=Pt.uniform),ba(T,zt),et.needsLights=ls(T),et.lightsStateVersion=Vt,et.needsLights&&(jt.ambientLightColor.value=nt.state.ambient,jt.lightProbe.value=nt.state.probe,jt.directionalLights.value=nt.state.directional,jt.directionalLightShadows.value=nt.state.directionalShadow,jt.spotLights.value=nt.state.spot,jt.spotLightShadows.value=nt.state.spotShadow,jt.rectAreaLights.value=nt.state.rectArea,jt.ltc_1.value=nt.state.rectAreaLTC1,jt.ltc_2.value=nt.state.rectAreaLTC2,jt.pointLights.value=nt.state.point,jt.pointLightShadows.value=nt.state.pointShadow,jt.hemisphereLights.value=nt.state.hemi,jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,jt.spotLightMatrix.value=nt.state.spotLightMatrix,jt.spotLightMap.value=nt.state.spotLightMap,jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=P.state.lightProbeGridArray.length>0,et.currentProgram=re,et.uniformsList=null,re}function Vr(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Fc.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function ba(T,q){const at=C.get(T);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function kr(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;O.setFromMatrixPosition(q.matrixWorld);for(let at=0,et=T.length;at<et;at++){const nt=T[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(O))return nt}return null}function Ta(T,q,at,et,nt){q.isScene!==!0&&(q=sn),M.resetTextureUnits();const Ft=q.fog,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,zt=X===null?j.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ye.workingColorSpace,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=K.get(et.envMap||Vt,Xt),Zt=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),jt=!!at.morphAttributes.position,Te=!!at.morphAttributes.normal,Qe=!!at.morphAttributes.color;let We=ki;et.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=j.toneMapping);const Ue=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Le=Ue!==void 0?Ue.length:0,Gt=C.get(et),Nn=P.state.lights;if(Xe===!0&&(fe===!0||T!==F)){const De=T===F&&et.id===N;Pt.setState(et,T,De)}let pe=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Nn.state.version||Gt.outputColorSpace!==zt||nt.isBatchedMesh&&Gt.batching===!1||!nt.isBatchedMesh&&Gt.batching===!0||nt.isBatchedMesh&&Gt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Gt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Gt.instancing===!1||!nt.isInstancedMesh&&Gt.instancing===!0||nt.isSkinnedMesh&&Gt.skinning===!1||!nt.isSkinnedMesh&&Gt.skinning===!0||nt.isInstancedMesh&&Gt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Gt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Gt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Gt.instancingMorph===!1&&nt.morphTexture!==null||Gt.envMap!==kt||et.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==re||Gt.morphTargets!==jt||Gt.morphNormals!==Te||Gt.morphColors!==Qe||Gt.toneMapping!==We||Gt.morphTargetsCount!==Le||!!Gt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Gt.__version=et.version);let _n=Gt.currentProgram;pe===!0&&(_n=Is(et,q,nt),J&&et.isNodeMaterial&&J.onUpdateProgram(et,_n,Gt));let Zn=!1,xi=!1,Kn=!1;const Oe=_n.getUniforms(),Je=Gt.uniforms;if(Rt.useProgram(_n.program)&&(Zn=!0,xi=!0,Kn=!0),et.id!==N&&(N=et.id,xi=!0),Gt.needsLights){const De=kr(P.state.lightProbeGridArray,nt);Gt.lightProbeGrid!==De&&(Gt.lightProbeGrid=De,xi=!0)}if(Zn||F!==T){Rt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(W,"projectionMatrix",T.projectionMatrix),Oe.setValue(W,"viewMatrix",T.matrixWorldInverse);const Li=Oe.map.cameraPosition;Li!==void 0&&Li.setValue(W,Ne.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&Oe.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Oe.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,xi=!0,Kn=!0)}if(Gt.needsLights&&(Nn.state.directionalShadowMap.length>0&&Oe.setValue(W,"directionalShadowMap",Nn.state.directionalShadowMap,M),Nn.state.spotShadowMap.length>0&&Oe.setValue(W,"spotShadowMap",Nn.state.spotShadowMap,M),Nn.state.pointShadowMap.length>0&&Oe.setValue(W,"pointShadowMap",Nn.state.pointShadowMap,M)),nt.isSkinnedMesh){Oe.setOptional(W,nt,"bindMatrix"),Oe.setOptional(W,nt,"bindMatrixInverse");const De=nt.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Oe.setValue(W,"boneTexture",De.boneTexture,M))}nt.isBatchedMesh&&(Oe.setOptional(W,nt,"batchingTexture"),Oe.setValue(W,"batchingTexture",nt._matricesTexture,M),Oe.setOptional(W,nt,"batchingIdTexture"),Oe.setValue(W,"batchingIdTexture",nt._indirectTexture,M),Oe.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Oe.setValue(W,"batchingColorTexture",nt._colorsTexture,M));const Si=at.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&ne.update(nt,at,_n),(xi||Gt.receiveShadow!==nt.receiveShadow)&&(Gt.receiveShadow=nt.receiveShadow,Oe.setValue(W,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(Je.envMapIntensity.value=q.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=eA()),xi){if(Oe.setValue(W,"toneMappingExposure",j.toneMappingExposure),Gt.needsLights&&Aa(Je,Kn),Ft&&et.fog===!0&&ct.refreshFogUniforms(Je,Ft),ct.refreshMaterialUniforms(Je,et,Dt,At,P.state.transmissionRenderTarget[T.id]),Gt.needsLights&&Gt.lightProbeGrid){const De=Gt.lightProbeGrid;Je.probesSH.value=De.texture,Je.probesMin.value.copy(De.boundingBox.min),Je.probesMax.value.copy(De.boundingBox.max),Je.probesResolution.value.copy(De.resolution)}Fc.upload(W,Vr(Gt),Je,M)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Fc.upload(W,Vr(Gt),Je,M),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Oe.setValue(W,"center",nt.center),Oe.setValue(W,"modelViewMatrix",nt.modelViewMatrix),Oe.setValue(W,"normalMatrix",nt.normalMatrix),Oe.setValue(W,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const De=et.uniformsGroups;for(let Li=0,Ca=De.length;Li<Ca;Li++){const cs=De[Li];pt.update(cs,_n),pt.bind(cs,_n)}}return _n}function Aa(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function ls(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,q,at){const et=C.get(T);et.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=q,C.get(T.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const at=C.get(T);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const Ra=W.createFramebuffer();this.setRenderTarget=function(T,q=0,at=0){X=T,ut=q,ft=at;let et=null,nt=!1,Ft=!1;if(T){const zt=C.get(T);if(zt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(W.FRAMEBUFFER,zt.__webglFramebuffer),rt.copy(T.viewport),mt.copy(T.scissor),Mt=T.scissorTest,Rt.viewport(rt),Rt.scissor(mt),Rt.setScissorTest(Mt),N=-1;return}else if(zt.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(zt.__hasExternalTextures)M.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(zt.__boundDepthTexture!==Zt){if(Zt!==null&&C.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const kt=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?et=kt[q][at]:et=kt[q],nt=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?et=C.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[at]:et=kt,rt.copy(T.viewport),mt.copy(T.scissor),Mt=T.scissorTest}else rt.copy(bt).multiplyScalar(Dt).floor(),mt.copy(Ht).multiplyScalar(Dt).floor(),Mt=$t;if(at!==0&&(et=Ra),Rt.bindFramebuffer(W.FRAMEBUFFER,et)&&Rt.drawBuffers(T,et),Rt.viewport(rt),Rt.scissor(mt),Rt.setScissorTest(Mt),nt){const zt=C.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,at)}else if(Ft){const zt=q;for(let Xt=0;Xt<T.textures.length;Xt++){const kt=C.get(T.textures[Xt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,at,zt)}}else if(T!==null&&at!==0){const zt=C.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,zt.__webglTexture,at)}N=-1},this.readRenderTargetPixels=function(T,q,at,et,nt,Ft,Vt,zt=0){if(!(T&&T.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Rt.bindFramebuffer(W.FRAMEBUFFER,Xt);try{const kt=T.textures[zt],Zt=kt.format,re=kt.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+zt),!Ie.textureFormatReadable(Zt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(re)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-et&&at>=0&&at<=T.height-nt&&W.readPixels(q,at,et,nt,G.convert(Zt),G.convert(re),Ft)}finally{const kt=X!==null?C.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(W.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,q,at,et,nt,Ft,Vt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(q>=0&&q<=T.width-et&&at>=0&&at<=T.height-nt){Rt.bindFramebuffer(W.FRAMEBUFFER,Xt);const kt=T.textures[zt],Zt=kt.format,re=kt.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+zt),!Ie.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,jt),W.bufferData(W.PIXEL_PACK_BUFFER,Ft.byteLength,W.STREAM_READ),W.readPixels(q,at,et,nt,G.convert(Zt),G.convert(re),0);const Te=X!==null?C.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(W.FRAMEBUFFER,Te);const Qe=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await My(W,Qe,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,jt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ft),W.deleteBuffer(jt),W.deleteSync(Qe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,at=0){const et=Math.pow(2,-at),nt=Math.floor(T.image.width*et),Ft=Math.floor(T.image.height*et),Vt=q!==null?q.x:0,zt=q!==null?q.y:0;M.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,at,0,0,Vt,zt,nt,Ft),Rt.unbindTexture()};const un=W.createFramebuffer(),Qo=W.createFramebuffer();this.copyTextureToTexture=function(T,q,at=null,et=null,nt=0,Ft=0){let Vt,zt,Xt,kt,Zt,re,jt,Te,Qe;const We=T.isCompressedTexture?T.mipmaps[Ft]:T.image;if(at!==null)Vt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,Zt=at.min.y,re=at.isBox3?at.min.z:0;else{const Je=Math.pow(2,-nt);Vt=Math.floor(We.width*Je),zt=Math.floor(We.height*Je),T.isDataArrayTexture?Xt=We.depth:T.isData3DTexture?Xt=Math.floor(We.depth*Je):Xt=1,kt=0,Zt=0,re=0}et!==null?(jt=et.x,Te=et.y,Qe=et.z):(jt=0,Te=0,Qe=0);const Ue=G.convert(q.format),Le=G.convert(q.type);let Gt;q.isData3DTexture?(M.setTexture3D(q,0),Gt=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(M.setTexture2DArray(q,0),Gt=W.TEXTURE_2D_ARRAY):(M.setTexture2D(q,0),Gt=W.TEXTURE_2D),Rt.activeTexture(W.TEXTURE0),Rt.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),Rt.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Rt.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Nn=Rt.getParameter(W.UNPACK_ROW_LENGTH),pe=Rt.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=Rt.getParameter(W.UNPACK_SKIP_PIXELS),Zn=Rt.getParameter(W.UNPACK_SKIP_ROWS),xi=Rt.getParameter(W.UNPACK_SKIP_IMAGES);Rt.pixelStorei(W.UNPACK_ROW_LENGTH,We.width),Rt.pixelStorei(W.UNPACK_IMAGE_HEIGHT,We.height),Rt.pixelStorei(W.UNPACK_SKIP_PIXELS,kt),Rt.pixelStorei(W.UNPACK_SKIP_ROWS,Zt),Rt.pixelStorei(W.UNPACK_SKIP_IMAGES,re);const Kn=T.isDataArrayTexture||T.isData3DTexture,Oe=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Je=C.get(T),Si=C.get(q),De=C.get(Je.__renderTarget),Li=C.get(Si.__renderTarget);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,De.__webglFramebuffer),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ca=0;Ca<Xt;Ca++)Kn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,C.get(T).__webglTexture,nt,re+Ca),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,C.get(q).__webglTexture,Ft,Qe+Ca)),W.blitFramebuffer(kt,Zt,Vt,zt,jt,Te,Vt,zt,W.DEPTH_BUFFER_BIT,W.NEAREST);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||T.isRenderTargetTexture||C.has(T)){const Je=C.get(T),Si=C.get(q);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,un),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Qo);for(let De=0;De<Xt;De++)Kn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,nt,re+De):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,nt),Oe?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Si.__webglTexture,Ft,Qe+De):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Si.__webglTexture,Ft),nt!==0?W.blitFramebuffer(kt,Zt,Vt,zt,jt,Te,Vt,zt,W.COLOR_BUFFER_BIT,W.NEAREST):Oe?W.copyTexSubImage3D(Gt,Ft,jt,Te,Qe+De,kt,Zt,Vt,zt):W.copyTexSubImage2D(Gt,Ft,jt,Te,kt,Zt,Vt,zt);Rt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Oe?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Gt,Ft,jt,Te,Qe,Vt,zt,Xt,Ue,Le,We.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Gt,Ft,jt,Te,Qe,Vt,zt,Xt,Ue,We.data):W.texSubImage3D(Gt,Ft,jt,Te,Qe,Vt,zt,Xt,Ue,Le,We):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ft,jt,Te,Vt,zt,Ue,Le,We.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ft,jt,Te,We.width,We.height,Ue,We.data):W.texSubImage2D(W.TEXTURE_2D,Ft,jt,Te,Vt,zt,Ue,Le,We);Rt.pixelStorei(W.UNPACK_ROW_LENGTH,Nn),Rt.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pe),Rt.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),Rt.pixelStorei(W.UNPACK_SKIP_ROWS,Zn),Rt.pixelStorei(W.UNPACK_SKIP_IMAGES,xi),Ft===0&&q.generateMipmaps&&W.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){ut=0,ft=0,X=null,Rt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(e),i.unpackColorSpace=ye._getUnpackColorSpace()}}const iA=`
  uniform float uTime;
  uniform float uRow;
  uniform float uColumn;
  varying float vFlash;
  varying float vDist;

  // Simplex noise helpers
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 pos = position;
    float noise = snoise(vec3(pos.x * 0.02, pos.y * 0.02, uTime * 0.15));
    pos.z += noise * 8.0;
    pos.x += snoise(vec3(pos.y * 0.03, pos.z * 0.03, uTime * 0.1 + 100.0)) * 3.0;
    pos.y += snoise(vec3(pos.x * 0.03, pos.z * 0.03, uTime * 0.1 + 200.0)) * 3.0;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float dist = length(mvPosition.xyz);
    float size = 2.0 * (150.0 / dist);
    size = clamp(size, 0.5, 4.0);

    // Scroll spotlight
    float rowPos = mod(uRow, 30.0) / 30.0;
    float colPos = mod(uColumn, 30.0) / 30.0;
    float nx = (pos.x + 75.0) / 150.0;
    float ny = (pos.y + 75.0) / 150.0;
    float rowDist = abs(ny - rowPos);
    float colDist = abs(nx - colPos);
    float flash = exp(-rowDist * rowDist * 80.0) * exp(-colDist * colDist * 80.0);

    // Occasional sparkle
    float sparkle = snoise(vec3(pos.xy * 0.5, uTime * 0.5 + 300.0));
    if (sparkle > 0.8) {
      size *= 1.5;
      flash += 0.3;
    }

    gl_PointSize = size;
    gl_Position = projectionMatrix * mvPosition;
    vFlash = flash;
    vDist = dist;
  }
`,aA=`
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uFlash;
  varying float vFlash;
  varying float vDist;

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= smoothstep(300.0, 50.0, vDist);
    alpha = clamp(alpha, 0.0, 1.0);

    vec3 color = mix(uColor1, uColor2, vFlash * 2.0 + 0.1);

    float core = pow(dist, 4.0);
    core *= smoothstep(0.0, 0.05, vFlash);
    color += vec3(1.0) * core * 0.8;

    float flashBoost = smoothstep(0.0, 0.3, vFlash);
    color = mix(color, vec3(1.0), flashBoost * 0.6);
    alpha = mix(alpha, alpha * 2.5, flashBoost);

    gl_FragColor = vec4(color, alpha * 0.85);
  }
`;function sA({lenisRef:o}){const e=be.useRef(null),i=be.useRef(null);return be.useEffect(()=>{if(!e.current)return;i.current&&(i.current(),i.current=null);const s=e.current,l=new nA({canvas:s,antialias:!1,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(window.innerWidth,window.innerHeight);const c=new By,h=new _i(60,window.innerWidth/window.innerHeight,1,1e3);h.position.z=120;const p=new Zo(150,150,500,500),m=p.attributes.position.array,d=new Ni;d.setAttribute("position",new wi(m.slice(),3));const v=new Di({vertexShader:iA,fragmentShader:aA,uniforms:{uTime:{value:0},uRow:{value:0},uColumn:{value:0},uColor1:{value:new it(.02,.02,.03)},uColor2:{value:new it(.4,.3,.1)},uFlash:{value:0}},transparent:!0,depthWrite:!1,blending:Bh}),x=new Zy(d,v);c.add(x);let _=0,E=0,A=0;const D=()=>{const U=window.scrollY,O=document.body.scrollHeight-window.innerHeight||1;E=U/O*30,_=U/O*30};window.addEventListener("scroll",D,{passive:!0});const y=new rM,S=()=>{A=requestAnimationFrame(S);const U=y.getElapsedTime();v.uniforms.uTime.value=U,v.uniforms.uColumn.value=E,v.uniforms.uRow.value=_,l.render(c,h)};S();const w=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",w),i.current=()=>{cancelAnimationFrame(A),window.removeEventListener("resize",w),window.removeEventListener("scroll",D),d.dispose(),v.dispose(),l.dispose(),p.dispose()},()=>{i.current&&(i.current(),i.current=null)}},[o]),Z.jsx("canvas",{"code-path":"src/sections/ThreeParticles.tsx:237:5",ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,pointerEvents:"none"}})}const rA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),P_=o=>{const e=oA(o);return e.charAt(0).toUpperCase()+e.slice(1)},bv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),lA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var cA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uA=be.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>be.createElement("svg",{ref:m,...cA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:bv("lucide",l),...!c&&!lA(p)&&{"aria-hidden":"true"},...p},[...h.map(([d,v])=>be.createElement(d,v)),...Array.isArray(c)?c:[c]]));const Ui=(o,e)=>{const i=be.forwardRef(({className:s,...l},c)=>be.createElement(uA,{ref:c,iconNode:e,className:bv(`lucide-${rA(P_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=P_(o),i};const fA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hA=Ui("calendar",fA);const dA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pA=Ui("check",dA);const mA=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],gA=Ui("clock",mA);const _A=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],vA=Ui("compass",_A);const xA=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],SA=Ui("house",xA);const yA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],MA=Ui("mail",yA);const EA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bA=Ui("map-pin",EA);const TA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],AA=Ui("menu",TA);const RA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],z_=Ui("send",RA);const CA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wA=Ui("star",CA);const DA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],NA=Ui("x",DA);function UA(){const[o,e]=be.useState(!1),[i,s]=be.useState(!1);be.useEffect(()=>{const h=()=>{e(window.scrollY>80)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]);const l=h=>{const p=document.getElementById(h);p&&(p.scrollIntoView({behavior:"smooth"}),s(!1))},c=[{label:"Services",id:"services"},{label:"Transformations",id:"transformations"},{label:"Pricing",id:"pricing"},{label:"Contact",id:"contact"}];return Z.jsxs("nav",{"code-path":"src/sections/Navigation.tsx:32:5",className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${o?"bg-[#050505]/90 backdrop-blur-md border-b border-[#262626]":"bg-transparent"}`,children:[Z.jsxs("div",{"code-path":"src/sections/Navigation.tsx:39:7",className:"max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20",children:[Z.jsx("button",{"code-path":"src/sections/Navigation.tsx:40:9",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-xl lg:text-2xl font-semibold tracking-wider",style:{fontFamily:"'Playfair Display', serif",color:"#C4B59D"},children:"觉明"}),Z.jsx("div",{"code-path":"src/sections/Navigation.tsx:48:9",className:"hidden md:flex items-center gap-8",children:c.map(h=>Z.jsx("button",{"code-path":"src/sections/Navigation.tsx:50:13",onClick:()=>l(h.id),className:"text-sm tracking-wide uppercase transition-colors duration-300 hover:text-[#C4B59D]",style:{color:"#737373",fontFamily:"'Noto Sans SC', sans-serif"},children:h.label},h.id))}),Z.jsx("button",{"code-path":"src/sections/Navigation.tsx:61:9",className:"md:hidden",onClick:()=>s(!i),style:{color:"#e5e5e5"},children:i?Z.jsx(NA,{"code-path":"src/sections/Navigation.tsx:66:25",size:24}):Z.jsx(AA,{"code-path":"src/sections/Navigation.tsx:66:43",size:24})})]}),i&&Z.jsx("div",{"code-path":"src/sections/Navigation.tsx:71:9",className:"md:hidden absolute top-full left-0 w-full py-6 px-6 flex flex-col gap-4 border-b",style:{backgroundColor:"rgba(5,5,5,0.95)",borderColor:"#262626"},children:c.map(h=>Z.jsx("button",{"code-path":"src/sections/Navigation.tsx:76:13",onClick:()=>l(h.id),className:"text-left text-sm tracking-wide uppercase py-2",style:{color:"#737373"},children:h.label},h.id))})]})}function Tv({lenisRef:o,scale:e=1,opacity:i=1}){const s=be.useRef(null);return be.useEffect(()=>{const l=s.current;if(!l)return;const c=()=>{const h=o.current;let p=0;h&&h.velocity!==void 0?p=h.velocity:p=window.scrollY*.01;const m=Math.abs(p),d=Math.min(m,10),v=Math.max(1,10-d);l.style.animationDuration=`${v}s`};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c)}},[o]),Z.jsx("div",{"code-path":"src/sections/BaGua.tsx:37:5",className:"bagu-stage",style:{transform:`scale(${e})`,opacity:i},children:Z.jsx("div",{"code-path":"src/sections/BaGua.tsx:44:7",className:"bagu-spin",id:"bagu-spin",ref:s,children:Array.from({length:8}).map((l,c)=>Z.jsx("div",{"code-path":"src/sections/BaGua.tsx:46:11",className:"bagua-slice"},c))})})}function LA({lenisRef:o}){const e=be.useRef(null),i=be.useRef(null),s=be.useRef(null);be.useEffect(()=>{const c=i.current,h=s.current;if(!c||!h)return;c.style.opacity="0",c.style.transform="translateY(40px)",h.style.opacity="0",h.style.transform="scale(1.1)";const p=setTimeout(()=>{c.style.transition="all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",c.style.opacity="1",c.style.transform="translateY(0)",h.style.transition="all 2s cubic-bezier(0.16, 1, 0.3, 1)",h.style.opacity="1",h.style.transform="scale(1)"},300),m=()=>{const d=window.scrollY,v=window.innerHeight;d<v*1.5&&c&&(c.style.transform=`translateY(${d*.15}px)`,c.style.opacity=`${1-d/(v*.8)}`),d<v*1.5&&h&&(h.style.transform=`scale(${1+d*3e-4}) translateY(${d*.08}px)`)};return window.addEventListener("scroll",m,{passive:!0}),()=>{clearTimeout(p),window.removeEventListener("scroll",m)}},[]);const l=()=>{const c=document.getElementById("services");c&&c.scrollIntoView({behavior:"smooth"})};return Z.jsxs("section",{"code-path":"src/sections/Hero.tsx:59:5",ref:e,className:"relative w-full min-h-screen flex items-center overflow-hidden",id:"hero",children:[Z.jsxs("div",{"code-path":"src/sections/Hero.tsx:65:7",ref:s,className:"absolute left-0 top-0 w-full lg:w-[65%] h-full",children:[Z.jsx("img",{"code-path":"src/sections/Hero.tsx:69:9",src:"/images/buddha_hero.jpg",alt:"Buddha with Ba Gua",className:"w-full h-full object-cover object-center",style:{maskImage:"linear-gradient(to right, black 60%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, black 60%, transparent 100%)"}}),Z.jsx("div",{"code-path":"src/sections/Hero.tsx:78:9",className:"absolute inset-0",style:{background:"linear-gradient(to right, transparent 0%, #050505 85%, #050505 100%)"}})]}),Z.jsx("div",{"code-path":"src/sections/Hero.tsx:88:7",className:"absolute left-[8%] lg:left-[12%] bottom-[20%] lg:bottom-[18%] z-10",children:Z.jsx("div",{"code-path":"src/sections/Hero.tsx:89:9",style:{animation:"float 4s ease-in-out infinite"},children:Z.jsx(Tv,{"code-path":"src/sections/Hero.tsx:90:11",lenisRef:o,scale:.7,opacity:.85})})}),Z.jsxs("div",{"code-path":"src/sections/Hero.tsx:95:7",ref:i,className:"relative z-10 w-full lg:w-1/2 ml-auto px-6 lg:px-16 py-32 lg:py-0",children:[Z.jsx("p",{"code-path":"src/sections/Hero.tsx:99:9",className:"text-xs lg:text-sm tracking-[0.3em] uppercase mb-6",style:{color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:"Chinese Feng Shui & Life Destiny Reading"}),Z.jsxs("h1",{"code-path":"src/sections/Hero.tsx:106:9",className:"text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.15] font-normal mb-8",style:{fontFamily:"'Playfair Display', 'Noto Serif SC', serif",color:"#e5e5e5"},children:[Z.jsx("em",{"code-path":"src/sections/Hero.tsx:113:11",children:"Destiny is not a matter"}),Z.jsx("br",{"code-path":"src/sections/Hero.tsx:114:11"}),Z.jsx("em",{"code-path":"src/sections/Hero.tsx:115:11",children:"of chance,"}),Z.jsx("br",{"code-path":"src/sections/Hero.tsx:116:11"}),"but a matter of choice"]}),Z.jsx("p",{"code-path":"src/sections/Hero.tsx:120:9",className:"text-sm lg:text-base leading-relaxed max-w-md mb-10",style:{color:"#737373",fontFamily:"'Noto Sans SC', sans-serif"},children:"Through the ancient wisdom of Feng Shui and Chinese metaphysics, we guide you to align your environment and energy with your true path."}),Z.jsxs("button",{"code-path":"src/sections/Hero.tsx:128:9",onClick:l,className:"relative overflow-hidden px-8 py-3.5 text-sm tracking-widest uppercase transition-all duration-500 group",style:{border:"1px solid rgba(196,181,157,0.4)",color:"#C4B59D",fontFamily:"'Noto Sans SC', sans-serif"},children:[Z.jsx("span",{"code-path":"src/sections/Hero.tsx:137:11",className:"absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500",style:{background:"linear-gradient(90deg, transparent, rgba(196,181,157,0.15), transparent)"}}),Z.jsx("span",{"code-path":"src/sections/Hero.tsx:144:11",className:"relative z-10",children:"Uncover Your Path"})]})]})]})}const OA=[{icon:vA,title:"Ba Zi Destiny Reading",desc:"Unlock your Four Pillars of Destiny to understand your innate strengths, career paths, and life cycles through your birth chart."},{icon:SA,title:"Feng Shui Consultation",desc:"Transform your living and working spaces to harmonize energy flow, enhance prosperity, and create balance in your environment."},{icon:wA,title:"Qi Men Dun Jia",desc:"Ancient Chinese oracle art for strategic decision-making, optimal timing, and navigating complex life situations with clarity."},{icon:hA,title:"Auspicious Date Selection",desc:"Choose the most favorable dates for major life events — weddings, business launches, relocations, and investments."}];function PA(){const o=be.useRef([]);return be.useEffect(()=>{const e=new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){const l=s.target;l.style.opacity="1",l.style.transform="translateY(0)",e.unobserve(l)}})},{threshold:.15});return o.current.forEach(i=>{i&&(i.style.opacity="0",i.style.transform="translateY(30px)",i.style.transition="all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",e.observe(i))}),()=>e.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/Services.tsx:58:5",id:"services",className:"relative z-10 py-24 lg:py-40 px-6 lg:px-16",children:Z.jsxs("div",{"code-path":"src/sections/Services.tsx:59:7",className:"max-w-7xl mx-auto",children:[Z.jsxs("div",{"code-path":"src/sections/Services.tsx:60:9",className:"text-center mb-16 lg:mb-24",children:[Z.jsx("p",{"code-path":"src/sections/Services.tsx:61:11",className:"text-xs tracking-[0.3em] uppercase mb-4",style:{color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:"Our Services"}),Z.jsx("h2",{"code-path":"src/sections/Services.tsx:67:11",className:"text-3xl lg:text-5xl font-normal",style:{fontFamily:"'Playfair Display', 'Noto Serif SC', serif",color:"#e5e5e5"},children:"Ancient Wisdom, Modern Guidance"})]}),Z.jsx("div",{"code-path":"src/sections/Services.tsx:78:9",className:"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",children:OA.map((e,i)=>{const s=e.icon;return Z.jsxs("div",{"code-path":"src/sections/Services.tsx:82:15",ref:l=>{o.current[i]=l},className:"group relative p-8 lg:p-10 transition-all duration-500",style:{background:"rgba(17,17,17,0.6)",border:"1px solid #262626",transitionDelay:`${i*.1}s`},children:[Z.jsx("div",{"code-path":"src/sections/Services.tsx:92:17",className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{background:"linear-gradient(135deg, rgba(138,154,91,0.05) 0%, transparent 60%)"}}),Z.jsxs("div",{"code-path":"src/sections/Services.tsx:99:17",className:"relative z-10",children:[Z.jsx(s,{"code-path":"src/sections/Services.tsx:100:19",size:28,strokeWidth:1.2,className:"mb-6 transition-colors duration-300",style:{color:"#8A9A5B"}}),Z.jsx("h3",{"code-path":"src/sections/Services.tsx:106:19",className:"text-xl lg:text-2xl font-normal mb-4",style:{fontFamily:"'Playfair Display', serif",color:"#e5e5e5"},children:e.title}),Z.jsx("p",{"code-path":"src/sections/Services.tsx:115:19",className:"text-sm leading-relaxed",style:{color:"#737373",fontFamily:"'Noto Sans SC', sans-serif"},children:e.desc})]})]},e.title)})})]})})}const zA=["/images/flow_before_1.jpg","/images/flow_before_2.jpg","/images/flow_before_3.jpg"],FA=["/images/flow_after_1.jpg","/images/flow_after_2.jpg","/images/flow_after_1.jpg"],Nc=["BALANCE","HARMONY","PROSPERITY","FLOW","ALIGNMENT","CLARITY"];function BA(){const o=be.useRef(null),e=be.useRef(null);return be.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&e.current&&(e.current.style.animationPlayState="running")})},{threshold:.1});return o.current&&i.observe(o.current),()=>i.disconnect()},[]),Z.jsxs("section",{"code-path":"src/sections/ScrollFlow.tsx:42:5",ref:o,id:"transformations",className:"relative z-10 py-24 lg:py-40 overflow-hidden",children:[Z.jsxs("div",{"code-path":"src/sections/ScrollFlow.tsx:47:7",className:"text-center mb-16 px-6",children:[Z.jsx("p",{"code-path":"src/sections/ScrollFlow.tsx:48:9",className:"text-xs tracking-[0.3em] uppercase mb-4",style:{color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:"Transformations"}),Z.jsx("h2",{"code-path":"src/sections/ScrollFlow.tsx:54:9",className:"text-3xl lg:text-5xl font-normal",style:{fontFamily:"'Playfair Display', 'Noto Serif SC', serif",color:"#e5e5e5"},children:"Energy Flow, Reimagined"})]}),Z.jsxs("div",{"code-path":"src/sections/ScrollFlow.tsx:66:7",className:"mb-4 px-4 lg:px-8",children:[Z.jsx("p",{"code-path":"src/sections/ScrollFlow.tsx:67:9",className:"text-xs tracking-widest uppercase mb-4 px-2",style:{color:"#737373"},children:"Before — Stagnant Energy"}),Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:73:9",className:"grid-flow",style:{perspective:"1000px"},children:Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:79:11",ref:e,className:"grid-wrap",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"5vw",transformStyle:"preserve-3d",animation:"gridFlowIn 2.5s ease-out forwards",animationPlayState:"paused"},children:zA.map((i,s)=>Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:92:15",className:"overflow-hidden",style:{aspectRatio:"1.5"},children:Z.jsx("img",{"code-path":"src/sections/ScrollFlow.tsx:99:17",src:i,alt:`Before transformation ${s+1}`,className:"w-full h-full object-cover transition-all duration-700",style:{filter:"grayscale(60%) brightness(0.6)"}})},`before-${s}`))})})]}),Z.jsxs("div",{"code-path":"src/sections/ScrollFlow.tsx:114:7",className:"mb-12 px-4 lg:px-8",children:[Z.jsx("p",{"code-path":"src/sections/ScrollFlow.tsx:115:9",className:"text-xs tracking-widest uppercase mb-4 px-2",style:{color:"#8A9A5B"},children:"After — Harmonized Flow"}),Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:121:9",style:{perspective:"1000px"},children:Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:122:11",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"5vw",transformStyle:"preserve-3d"},children:FA.map((i,s)=>Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:131:15",className:"overflow-hidden group",style:{aspectRatio:"1.5"},children:Z.jsx("img",{"code-path":"src/sections/ScrollFlow.tsx:138:17",src:i,alt:`After transformation ${s+1}`,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"})},`after-${s}`))})})]}),Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:150:7",className:"relative overflow-hidden py-8",children:Z.jsx("div",{"code-path":"src/sections/ScrollFlow.tsx:151:9",className:"flex whitespace-nowrap",style:{animation:"marquee 20s linear infinite"},children:[...Nc,...Nc,...Nc,...Nc].map((i,s)=>Z.jsx("span",{"code-path":"src/sections/ScrollFlow.tsx:158:13",className:"text-6xl lg:text-8xl font-light mx-8 lg:mx-16 select-none",style:{fontFamily:"'Playfair Display', serif",color:"transparent",WebkitTextStroke:"1px rgba(196,181,157,0.15)"},children:i},s))})})]})}const F_=[{name:"Essential",price:"$199",period:"per session",desc:"Personal energy assessment and foundational guidance.",features:["Birth Chart Overview","Elemental Analysis","General Life Direction","Email Summary Report"],highlighted:!1},{name:"Advanced",price:"$499",period:"per session",desc:"Comprehensive destiny reading with environmental feng shui.",features:["Detailed Ba Zi Reading","Feng Shui Space Audit","Career & Wealth Focus","Relationship Compatibility","60-min Video Consultation","Personalized Remedies"],highlighted:!0},{name:"Master",price:"$1,299",period:"full program",desc:"Complete transformation program with ongoing guidance.",features:["Everything in Advanced","Qi Men Dun Jia Strategy","Auspicious Date Selection","Monthly Follow-up (3 mo)","Priority Support","Lifetime Chart Updates"],highlighted:!1}],IA=["Wealth","Career","Love","Health"];function HA({lenisRef:o}){const e=be.useRef(null),i=be.useRef([]),[s,l]=be.useState(null),[c,h]=be.useState(null);return be.useEffect(()=>{const p=new IntersectionObserver(m=>{m.forEach(d=>{d.isIntersecting&&(i.current.forEach((v,x)=>{v&&setTimeout(()=>{v.style.opacity="1",v.style.transform="translateY(0)"},x*150)}),p.unobserve(d.target))})},{threshold:.1});return e.current&&p.observe(e.current),()=>p.disconnect()},[]),Z.jsxs("section",{"code-path":"src/sections/Pricing.tsx:91:5",ref:e,id:"pricing",className:"relative z-10 py-24 lg:py-40 overflow-hidden",children:[Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:97:7",className:"absolute inset-0 z-0",children:[Z.jsx("video",{"code-path":"src/sections/Pricing.tsx:98:9",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover",style:{opacity:.15},children:Z.jsx("source",{"code-path":"src/sections/Pricing.tsx:106:11",src:"/videos/pricing_bg.mp4",type:"video/mp4"})}),Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:108:9",className:"absolute inset-0",style:{background:"linear-gradient(to bottom, #050505 0%, transparent 30%, transparent 70%, #050505 100%)"}})]}),Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:117:7",className:"relative z-10 px-6 lg:px-16 max-w-7xl mx-auto",children:[Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:119:9",className:"flex justify-center mb-12",children:Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:120:11",style:{animation:"float 5s ease-in-out infinite"},children:Z.jsx(Tv,{"code-path":"src/sections/Pricing.tsx:121:13",lenisRef:o,scale:.25,opacity:.5})})}),Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:125:9",className:"text-center mb-16 lg:mb-24",children:[Z.jsx("p",{"code-path":"src/sections/Pricing.tsx:126:11",className:"text-xs tracking-[0.3em] uppercase mb-4",style:{color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:"Pricing"}),Z.jsx("h2",{"code-path":"src/sections/Pricing.tsx:132:11",className:"text-3xl lg:text-5xl font-normal",style:{fontFamily:"'Playfair Display', 'Noto Serif SC', serif",color:"#e5e5e5"},children:"Choose Your Path"})]}),Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:144:9",className:"hidden lg:flex justify-center gap-0 mb-12",children:[Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:145:11",className:"w-32"}),F_.map((p,m)=>Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:147:13",className:"flex-1 text-center"},m))]}),Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:152:9",className:"hidden lg:block mb-4",children:IA.map((p,m)=>Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:154:13",className:"flex items-center gap-4 py-1 transition-opacity duration-300",style:{opacity:s===m?1:.3},children:[Z.jsx("span",{"code-path":"src/sections/Pricing.tsx:159:15",className:"w-20 text-right text-xs tracking-wider uppercase",style:{color:"#737373"},children:p}),Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:165:15",className:"flex-1 h-px",style:{backgroundColor:"#262626"}})]},p))}),Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:171:9",className:"grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8",children:F_.map((p,m)=>Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:173:13",ref:d=>{i.current[m]=d},className:"relative p-8 lg:p-10 transition-all duration-500",style:{background:p.highlighted?"rgba(196,181,157,0.06)":"rgba(17,17,17,0.6)",border:p.highlighted?"1px solid rgba(196,181,157,0.3)":"1px solid #262626",opacity:0,transform:"translateY(30px)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},onMouseEnter:()=>h(m),onMouseLeave:()=>h(null),children:[p.highlighted&&Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:193:17",className:"absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] tracking-[0.2em] uppercase",style:{background:"#C4B59D",color:"#050505",fontFamily:"'Noto Sans SC', sans-serif"},children:"Recommended"}),Z.jsx("h3",{"code-path":"src/sections/Pricing.tsx:205:15",className:"text-lg tracking-wider uppercase mb-2",style:{color:p.highlighted?"#C4B59D":"#e5e5e5",fontFamily:"'Noto Sans SC', sans-serif"},children:p.name}),Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:215:15",className:"flex items-baseline gap-2 mb-4",children:[Z.jsx("span",{"code-path":"src/sections/Pricing.tsx:216:17",className:"text-4xl lg:text-5xl font-light",style:{fontFamily:"'Playfair Display', serif",color:"#e5e5e5"},children:p.price}),Z.jsx("span",{"code-path":"src/sections/Pricing.tsx:225:17",className:"text-sm",style:{color:"#737373"},children:p.period})]}),Z.jsx("p",{"code-path":"src/sections/Pricing.tsx:233:15",className:"text-sm leading-relaxed mb-8",style:{color:"#737373"},children:p.desc}),Z.jsxs("div",{"code-path":"src/sections/Pricing.tsx:241:15",className:"relative",children:[c===m&&s!==null&&Z.jsx("div",{"code-path":"src/sections/Pricing.tsx:243:19",className:"absolute left-0 right-0 h-8 -z-10 transition-all duration-200",style:{top:`${s*25}%`,background:"linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",transform:"scaleX(1.02)"}}),Z.jsx("ul",{"code-path":"src/sections/Pricing.tsx:254:17",className:"space-y-3",children:p.features.map((d,v)=>Z.jsxs("li",{"code-path":"src/sections/Pricing.tsx:256:21",className:"flex items-center gap-3 text-sm",style:{color:"#e5e5e5"},onMouseEnter:()=>l(v%4),onMouseLeave:()=>l(null),children:[Z.jsx(pA,{"code-path":"src/sections/Pricing.tsx:263:23",size:14,style:{color:p.highlighted?"#C4B59D":"#8A9A5B",flexShrink:0}}),Z.jsx("span",{"code-path":"src/sections/Pricing.tsx:270:23",style:{color:"#b0b0b0"},children:d})]},d))})]}),Z.jsx("button",{"code-path":"src/sections/Pricing.tsx:276:15",className:"w-full mt-8 py-3 text-sm tracking-widest uppercase transition-all duration-500",style:{background:p.highlighted?"rgba(196,181,157,0.15)":"transparent",border:p.highlighted?"1px solid rgba(196,181,157,0.4)":"1px solid #262626",color:p.highlighted?"#C4B59D":"#737373",fontFamily:"'Noto Sans SC', sans-serif"},onClick:()=>{const d=document.getElementById("contact");d&&d.scrollIntoView({behavior:"smooth"})},children:"Book Now"})]},p.name))})]})]})}function GA(){const o=be.useRef(null),e=be.useRef(null),[i,s]=be.useState(!1);be.useEffect(()=>{const c=new IntersectionObserver(h=>{h.forEach(p=>{if(p.isIntersecting){const m=p.target;m.style.opacity="1",m.style.transform="translateY(0)",c.unobserve(m)}})},{threshold:.1});return e.current&&(e.current.style.opacity="0",e.current.style.transform="translateY(30px)",e.current.style.transition="all 1s cubic-bezier(0.16, 1, 0.3, 1)",c.observe(e.current)),()=>c.disconnect()},[]);const l=c=>{c.preventDefault(),s(!0),setTimeout(()=>s(!1),3e3)};return Z.jsx("section",{"code-path":"src/sections/Contact.tsx:41:5",ref:o,id:"contact",className:"relative z-10 py-24 lg:py-40 px-6 lg:px-16",children:Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:46:7",className:"max-w-6xl mx-auto",children:[Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:47:9",className:"text-center mb-16 lg:mb-24",children:[Z.jsx("p",{"code-path":"src/sections/Contact.tsx:48:11",className:"text-xs tracking-[0.3em] uppercase mb-4",style:{color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:"Contact"}),Z.jsx("h2",{"code-path":"src/sections/Contact.tsx:54:11",className:"text-3xl lg:text-5xl font-normal",style:{fontFamily:"'Playfair Display', 'Noto Serif SC', serif",color:"#e5e5e5"},children:"Begin Your Journey"})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:65:9",className:"grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16",children:[Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:67:11",className:"lg:col-span-2 space-y-8",children:[Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:68:13",className:"flex items-start gap-4",children:[Z.jsx(bA,{"code-path":"src/sections/Contact.tsx:69:15",size:20,strokeWidth:1.2,style:{color:"#8A9A5B",flexShrink:0}}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:70:15",children:[Z.jsx("p",{"code-path":"src/sections/Contact.tsx:71:17",className:"text-sm font-medium mb-1",style:{color:"#e5e5e5"},children:"Location"}),Z.jsxs("p",{"code-path":"src/sections/Contact.tsx:74:17",className:"text-sm",style:{color:"#737373"},children:["Online consultations worldwide",Z.jsx("br",{"code-path":"src/sections/Contact.tsx:76:19"}),"In-person: Los Angeles, CA"]})]})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:82:13",className:"flex items-start gap-4",children:[Z.jsx(MA,{"code-path":"src/sections/Contact.tsx:83:15",size:20,strokeWidth:1.2,style:{color:"#8A9A5B",flexShrink:0}}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:84:15",children:[Z.jsx("p",{"code-path":"src/sections/Contact.tsx:85:17",className:"text-sm font-medium mb-1",style:{color:"#e5e5e5"},children:"Email"}),Z.jsx("p",{"code-path":"src/sections/Contact.tsx:88:17",className:"text-sm",style:{color:"#737373"},children:"consult@jueming.fengshui"})]})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:94:13",className:"flex items-start gap-4",children:[Z.jsx(gA,{"code-path":"src/sections/Contact.tsx:95:15",size:20,strokeWidth:1.2,style:{color:"#8A9A5B",flexShrink:0}}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:96:15",children:[Z.jsx("p",{"code-path":"src/sections/Contact.tsx:97:17",className:"text-sm font-medium mb-1",style:{color:"#e5e5e5"},children:"Availability"}),Z.jsxs("p",{"code-path":"src/sections/Contact.tsx:100:17",className:"text-sm",style:{color:"#737373"},children:["Monday — Saturday",Z.jsx("br",{"code-path":"src/sections/Contact.tsx:102:19"}),"9:00 AM — 8:00 PM (PST)"]})]})]})]}),Z.jsx("form",{"code-path":"src/sections/Contact.tsx:110:11",ref:e,onSubmit:l,className:"lg:col-span-3 p-8 lg:p-10",style:{background:"rgba(17,17,17,0.5)",border:"1px solid #262626",backdropFilter:"blur(20px)"},children:i?Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:121:15",className:"flex flex-col items-center justify-center py-12 text-center",children:[Z.jsx("div",{"code-path":"src/sections/Contact.tsx:122:17",className:"w-12 h-12 rounded-full flex items-center justify-center mb-4",style:{border:"1px solid #8A9A5B"},children:Z.jsx(z_,{"code-path":"src/sections/Contact.tsx:126:19",size:20,style:{color:"#8A9A5B"}})}),Z.jsx("h3",{"code-path":"src/sections/Contact.tsx:128:17",className:"text-xl mb-2",style:{fontFamily:"'Playfair Display', serif",color:"#e5e5e5"},children:"Message Sent"}),Z.jsx("p",{"code-path":"src/sections/Contact.tsx:137:17",className:"text-sm",style:{color:"#737373"},children:"We will contact you within 24 hours."})]}):Z.jsxs(Z.Fragment,{children:[Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:143:17",className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6",children:[Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:144:19",children:[Z.jsx("label",{"code-path":"src/sections/Contact.tsx:145:21",className:"block text-xs tracking-wider uppercase mb-2",style:{color:"#737373"},children:"Name"}),Z.jsx("input",{"code-path":"src/sections/Contact.tsx:151:21",type:"text",required:!0,className:"w-full bg-transparent border-b py-2 text-sm outline-none transition-colors duration-300 focus:border-[#8A9A5B]",style:{borderColor:"#262626",color:"#e5e5e5"}})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:161:19",children:[Z.jsx("label",{"code-path":"src/sections/Contact.tsx:162:21",className:"block text-xs tracking-wider uppercase mb-2",style:{color:"#737373"},children:"Email"}),Z.jsx("input",{"code-path":"src/sections/Contact.tsx:168:21",type:"email",required:!0,className:"w-full bg-transparent border-b py-2 text-sm outline-none transition-colors duration-300 focus:border-[#8A9A5B]",style:{borderColor:"#262626",color:"#e5e5e5"}})]})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:180:17",className:"mb-6",children:[Z.jsx("label",{"code-path":"src/sections/Contact.tsx:181:19",className:"block text-xs tracking-wider uppercase mb-2",style:{color:"#737373"},children:"Service Interest"}),Z.jsxs("select",{"code-path":"src/sections/Contact.tsx:187:19",className:"w-full bg-transparent border-b py-2 text-sm outline-none transition-colors duration-300 focus:border-[#8A9A5B]",style:{borderColor:"#262626",color:"#e5e5e5"},children:[Z.jsx("option",{"code-path":"src/sections/Contact.tsx:194:21",value:"",style:{background:"#111"},children:"Select a service"}),Z.jsx("option",{"code-path":"src/sections/Contact.tsx:197:21",value:"bazi",style:{background:"#111"},children:"Ba Zi Destiny Reading"}),Z.jsx("option",{"code-path":"src/sections/Contact.tsx:200:21",value:"fengshui",style:{background:"#111"},children:"Feng Shui Consultation"}),Z.jsx("option",{"code-path":"src/sections/Contact.tsx:203:21",value:"qimen",style:{background:"#111"},children:"Qi Men Dun Jia"}),Z.jsx("option",{"code-path":"src/sections/Contact.tsx:206:21",value:"date",style:{background:"#111"},children:"Auspicious Date Selection"})]})]}),Z.jsxs("div",{"code-path":"src/sections/Contact.tsx:212:17",className:"mb-8",children:[Z.jsx("label",{"code-path":"src/sections/Contact.tsx:213:19",className:"block text-xs tracking-wider uppercase mb-2",style:{color:"#737373"},children:"Message"}),Z.jsx("textarea",{"code-path":"src/sections/Contact.tsx:219:19",rows:4,placeholder:"Tell us about your goals and what you seek to understand...",className:"w-full bg-transparent border-b py-2 text-sm outline-none transition-colors duration-300 resize-none focus:border-[#8A9A5B]",style:{borderColor:"#262626",color:"#e5e5e5"}})]}),Z.jsxs("button",{"code-path":"src/sections/Contact.tsx:230:17",type:"submit",className:"flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 group",style:{border:"1px solid rgba(138,154,91,0.4)",color:"#8A9A5B",fontFamily:"'Noto Sans SC', sans-serif"},children:[Z.jsx("span",{"code-path":"src/sections/Contact.tsx:239:19",className:"absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-500",style:{background:"linear-gradient(90deg, transparent, rgba(138,154,91,0.1), transparent)"}}),Z.jsx("span",{"code-path":"src/sections/Contact.tsx:246:19",className:"relative z-10",children:"Send Inquiry"}),Z.jsx(z_,{"code-path":"src/sections/Contact.tsx:247:19",size:14,className:"relative z-10 transition-transform duration-300 group-hover:translate-x-1"})]})]})})]})]})})}function VA(){return Z.jsx("footer",{"code-path":"src/sections/Footer.tsx:3:5",className:"relative z-10 py-12 lg:py-16 px-6 lg:px-16",style:{borderTop:"1px solid #262626"},children:Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:7:7",className:"max-w-7xl mx-auto",children:[Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:8:9",className:"flex flex-col lg:flex-row items-center justify-between gap-6",children:[Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:9:11",className:"text-center lg:text-left",children:[Z.jsx("p",{"code-path":"src/sections/Footer.tsx:10:13",className:"text-lg font-semibold tracking-wider mb-1",style:{fontFamily:"'Playfair Display', serif",color:"#C4B59D"},children:"觉明"}),Z.jsx("p",{"code-path":"src/sections/Footer.tsx:19:13",className:"text-xs",style:{color:"#737373"},children:"Chinese Feng Shui & Life Destiny Reading"})]}),Z.jsx("div",{"code-path":"src/sections/Footer.tsx:24:11",className:"flex items-center gap-6",children:["Instagram","YouTube","TikTok"].map(o=>Z.jsx("a",{"code-path":"src/sections/Footer.tsx:26:15",href:"#",className:"text-xs tracking-wider uppercase transition-colors duration-300 hover:text-[#C4B59D]",style:{color:"#737373"},children:o},o))}),Z.jsxs("p",{"code-path":"src/sections/Footer.tsx:37:11",className:"text-xs",style:{color:"#737373"},children:["© ",new Date().getFullYear()," Jueming. All rights reserved."]})]}),Z.jsx("div",{"code-path":"src/sections/Footer.tsx:42:9",className:"mt-8 pt-6 text-center",style:{borderTop:"1px solid #1a1a1a"},children:Z.jsx("p",{"code-path":"src/sections/Footer.tsx:43:11",className:"text-[10px leading-relaxed max-w-2xl mx-auto",style:{color:"#4a4a4a"},children:"The services provided are for cultural exploration and entertainment purposes only. Results may vary and should not be considered as professional advice. We respect all beliefs and traditions."})})]})})}function kA(){const o=be.useRef(null);return be.useEffect(()=>{const e=new GS({duration:1.2,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0});o.current=e;function i(s){e.raf(s),requestAnimationFrame(i)}return requestAnimationFrame(i),()=>{e.destroy()}},[]),Z.jsxs("div",{"code-path":"src/App.tsx:36:5",className:"relative min-h-screen",style:{background:"#050505"},children:[Z.jsx(sA,{"code-path":"src/App.tsx:37:7",lenisRef:o}),Z.jsx(UA,{"code-path":"src/App.tsx:38:7"}),Z.jsx(LA,{"code-path":"src/App.tsx:39:7",lenisRef:o}),Z.jsx(PA,{"code-path":"src/App.tsx:40:7"}),Z.jsx(BA,{"code-path":"src/App.tsx:41:7"}),Z.jsx(HA,{"code-path":"src/App.tsx:42:7",lenisRef:o}),Z.jsx(GA,{"code-path":"src/App.tsx:43:7"}),Z.jsx(VA,{"code-path":"src/App.tsx:44:7"})]})}FS.createRoot(document.getElementById("root")).render(Z.jsx(kA,{"code-path":"src/main.tsx:5:53"}));
