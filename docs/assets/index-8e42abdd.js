(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function _(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=_(o);fetch(o.href,n)}})();var V,d,de,S,te,fe,Y,O={},pe=[],He=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function L(e,t){for(var _ in t)e[_]=t[_];return e}function me(e){var t=e.parentNode;t&&t.removeChild(e)}function we(e,t,_){var l,o,n,u={};for(n in t)n=="key"?l=t[n]:n=="ref"?o=t[n]:u[n]=t[n];if(arguments.length>2&&(u.children=arguments.length>3?V.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)u[n]===void 0&&(u[n]=e.defaultProps[n]);return T(e,u,l,o,null)}function T(e,t,_,l,o){var n={type:e,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++de};return o==null&&d.vnode!=null&&d.vnode(n),n}function C(e){return e.children}function M(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?H(e):null}function ve(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return ve(e)}}function _e(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!W.__r++||te!==d.debounceRendering)&&((te=d.debounceRendering)||fe)(W)}function W(){var e,t,_,l,o,n,u,s;for(S.sort(Y);e=S.shift();)e.__d&&(t=S.length,l=void 0,o=void 0,u=(n=(_=e).__v).__e,(s=_.__P)&&(l=[],(o=L({},n)).__v=n.__v+1,J(s,n,o,_.__n,s.ownerSVGElement!==void 0,n.__h!=null?[u]:null,l,u??H(n),n.__h),ke(l,n),n.__e!=u&&ve(n)),S.length>t&&S.sort(Y));W.__r=0}function be(e,t,_,l,o,n,u,s,h,f){var i,m,a,c,p,P,v,g=l&&l.__k||pe,N=g.length;for(_.__k=[],i=0;i<t.length;i++)if((c=_.__k[i]=(c=t[i])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?T(null,c,null,null,c):K(c)?T(C,{children:c},null,null,null):c.__b>0?T(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=_,c.__b=_.__b+1,(a=g[i])===null||a&&c.key==a.key&&c.type===a.type)g[i]=void 0;else for(m=0;m<N;m++){if((a=g[m])&&c.key==a.key&&c.type===a.type){g[m]=void 0;break}a=null}J(e,c,a=a||O,o,n,u,s,h,f),p=c.__e,(m=c.ref)&&a.ref!=m&&(v||(v=[]),a.ref&&v.push(a.ref,null,c),v.push(m,c.__c||p,c)),p!=null?(P==null&&(P=p),typeof c.type=="function"&&c.__k===a.__k?c.__d=h=ge(c,h,e):h=ye(e,c,a,g,p,h),typeof _.type=="function"&&(_.__d=h)):h&&a.__e==h&&h.parentNode!=e&&(h=H(a))}for(_.__e=P,i=N;i--;)g[i]!=null&&(typeof _.type=="function"&&g[i].__e!=null&&g[i].__e==_.__d&&(_.__d=Ne(l).nextSibling),Se(g[i],g[i]));if(v)for(i=0;i<v.length;i++)Le(v[i],v[++i],v[++i])}function ge(e,t,_){for(var l,o=e.__k,n=0;o&&n<o.length;n++)(l=o[n])&&(l.__=e,t=typeof l.type=="function"?ge(l,t,_):ye(_,l,l,o,l.__e,t));return t}function ye(e,t,_,l,o,n){var u,s,h;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(_==null||o!=n||o.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(o),u=null;else{for(s=n,h=0;(s=s.nextSibling)&&h<l.length;h+=1)if(s==o)break e;e.insertBefore(o,n),u=n}return u!==void 0?u:o.nextSibling}function Ne(e){var t,_,l;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(l=Ne(_)))return l}return null}function Ce(e,t,_,l,o){var n;for(n in _)n==="children"||n==="key"||n in t||B(e,n,null,_[n],l);for(n in t)o&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||_[n]===t[n]||B(e,n,t[n],_[n],l)}function ie(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||He.test(t)?_:_+"px"}function B(e,t,_,l,o){var n;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)_&&t in _||ie(e.style,t,"");if(_)for(t in _)l&&_[t]===l[t]||ie(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=_,_?l||e.addEventListener(t,n?le:ne,n):e.removeEventListener(t,n?le:ne,n);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function ne(e){return this.l[e.type+!1](d.event?d.event(e):e)}function le(e){return this.l[e.type+!0](d.event?d.event(e):e)}function J(e,t,_,l,o,n,u,s,h){var f,i,m,a,c,p,P,v,g,N,x,$,ee,A,R,y=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(h=_.__h,s=t.__e=_.__e,t.__h=null,n=[s]),(f=d.__b)&&f(t);try{e:if(typeof y=="function"){if(v=t.props,g=(f=y.contextType)&&l[f.__c],N=f?g?g.props.value:f.__:l,_.__c?P=(i=t.__c=_.__c).__=i.__E:("prototype"in y&&y.prototype.render?t.__c=i=new y(v,N):(t.__c=i=new M(v,N),i.constructor=y,i.render=Ae),g&&g.sub(i),i.props=v,i.state||(i.state={}),i.context=N,i.__n=l,m=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),y.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=L({},i.__s)),L(i.__s,y.getDerivedStateFromProps(v,i.__s))),a=i.props,c=i.state,i.__v=t,m)y.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y.getDerivedStateFromProps==null&&v!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,N),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,N)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(i.props=v,i.state=i.__s,i.__d=!1),i.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(D){D&&(D.__=t)}),x=0;x<i._sb.length;x++)i.__h.push(i._sb[x]);i._sb=[],i.__h.length&&u.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,N),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,c,p)})}if(i.context=N,i.props=v,i.__P=e,$=d.__r,ee=0,"prototype"in y&&y.prototype.render){for(i.state=i.__s,i.__d=!1,$&&$(t),f=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,$&&$(t),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ee<25);i.state=i.__s,i.getChildContext!=null&&(l=L(L({},l),i.getChildContext())),m||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(a,c)),be(e,K(R=f!=null&&f.type===C&&f.key==null?f.props.children:f)?R:[R],t,_,l,o,n,u,s,h),i.base=t.__e,t.__h=null,i.__h.length&&u.push(i),P&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=xe(_.__e,t,_,l,o,n,u,h);(f=d.diffed)&&f(t)}catch(D){t.__v=null,(h||n!=null)&&(t.__e=s,t.__h=!!h,n[n.indexOf(s)]=null),d.__e(D,t,_)}}function ke(e,t){d.__c&&d.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(l){l.call(_)})}catch(l){d.__e(l,_.__v)}})}function xe(e,t,_,l,o,n,u,s){var h,f,i,m=_.props,a=t.props,c=t.type,p=0;if(c==="svg"&&(o=!0),n!=null){for(;p<n.length;p++)if((h=n[p])&&"setAttribute"in h==!!c&&(c?h.localName===c:h.nodeType===3)){e=h,n[p]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=o?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),n=null,s=!1}if(c===null)m===a||s&&e.data===a||(e.data=a);else{if(n=n&&V.call(e.childNodes),f=(m=_.props||O).dangerouslySetInnerHTML,i=a.dangerouslySetInnerHTML,!s){if(n!=null)for(m={},p=0;p<e.attributes.length;p++)m[e.attributes[p].name]=e.attributes[p].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Ce(e,a,m,o,s),i)t.__k=[];else if(be(e,K(p=t.props.children)?p:[p],t,_,l,o&&c!=="foreignObject",n,u,n?n[0]:_.__k&&H(_,0),s),n!=null)for(p=n.length;p--;)n[p]!=null&&me(n[p]);s||("value"in a&&(p=a.value)!==void 0&&(p!==e.value||c==="progress"&&!p||c==="option"&&p!==m.value)&&B(e,"value",p,m.value,!1),"checked"in a&&(p=a.checked)!==void 0&&p!==e.checked&&B(e,"checked",p,m.checked,!1))}return e}function Le(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(l){d.__e(l,_)}}function Se(e,t,_){var l,o;if(d.unmount&&d.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||Le(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){d.__e(n,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&Se(l[o],t,_||typeof e.type!="function");_||e.__e==null||me(e.__e),e.__=e.__e=e.__d=void 0}function Ae(e,t,_){return this.constructor(e,_)}function De(e,t,_){var l,o,n;d.__&&d.__(e,t),o=(l=typeof _=="function")?null:_&&_.__k||t.__k,n=[],J(t,e=(!l&&_||t).__k=we(C,null,[e]),o||O,O,t.ownerSVGElement!==void 0,!l&&_?[_]:o?null:t.firstChild?V.call(t.childNodes):null,n,!l&&_?_:o?o.__e:t.firstChild,l),ke(n,e)}V=pe.slice,d={__e:function(e,t,_,l){for(var o,n,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((n=o.constructor)&&n.getDerivedStateFromError!=null&&(o.setState(n.getDerivedStateFromError(e)),u=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,l||{}),u=o.__d),u)return o.__E=o}catch(s){e=s}throw e}},de=0,M.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},_),this.props)),e&&L(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),_e(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_e(this))},M.prototype.render=C,S=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0;var w,b,q,oe,I=0,Ee=[],U=[],re=d.__b,ce=d.__r,ae=d.diffed,se=d.__c,ue=d.unmount;function Q(e,t){d.__h&&d.__h(b,e,I||t),I=0;var _=b.__H||(b.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:U}),_.__[e]}function X(e){return I=1,Te($e,e)}function Te(e,t,_){var l=Q(w++,2);if(l.t=e,!l.__c&&(l.__=[_?_(t):$e(void 0,t),function(s){var h=l.__N?l.__N[0]:l.__[0],f=l.t(h,s);h!==f&&(l.__N=[f,l.__[1]],l.__c.setState({}))}],l.__c=b,!b.u)){var o=function(s,h,f){if(!l.__c.__H)return!0;var i=l.__c.__H.__.filter(function(a){return a.__c});if(i.every(function(a){return!a.__N}))return!n||n.call(this,s,h,f);var m=!1;return i.forEach(function(a){if(a.__N){var c=a.__[0];a.__=a.__N,a.__N=void 0,c!==a.__[0]&&(m=!0)}}),!(!m&&l.__c.props===s)&&(!n||n.call(this,s,h,f))};b.u=!0;var n=b.shouldComponentUpdate,u=b.componentWillUpdate;b.componentWillUpdate=function(s,h,f){if(this.__e){var i=n;n=void 0,o(s,h,f),n=i}u&&u.call(this,s,h,f)},b.shouldComponentUpdate=o}return l.__N||l.__}function j(e,t){var _=Q(w++,3);!d.__s&&Pe(_.__H,t)&&(_.__=e,_.i=t,b.__H.__h.push(_))}function Z(e){return I=5,Me(function(){return{current:e}},[])}function Me(e,t){var _=Q(w++,7);return Pe(_.__H,t)?(_.__V=e(),_.i=t,_.__h=e,_.__V):_.__}function Ue(){for(var e;e=Ee.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){b=null,re&&re(e)},d.__r=function(e){ce&&ce(e),w=0;var t=(b=e.__c).__H;t&&(q===b?(t.__h=[],b.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=U,_.__N=_.i=void 0})):(t.__h.forEach(F),t.__h.forEach(G),t.__h=[],w=0)),q=b},d.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ee.push(t)!==1&&oe===d.requestAnimationFrame||((oe=d.requestAnimationFrame)||Fe)(Ue)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==U&&(_.__=_.__V),_.i=void 0,_.__V=U})),q=b=null},d.__c=function(e,t){t.some(function(_){try{_.__h.forEach(F),_.__h=_.__h.filter(function(l){return!l.__||G(l)})}catch(l){t.some(function(o){o.__h&&(o.__h=[])}),t=[],d.__e(l,_.__v)}}),se&&se(e,t)},d.unmount=function(e){ue&&ue(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(l){try{F(l)}catch(o){t=o}}),_.__H=void 0,t&&d.__e(t,_.__v))};var he=typeof requestAnimationFrame=="function";function Fe(e){var t,_=function(){clearTimeout(l),he&&cancelAnimationFrame(t),setTimeout(e)},l=setTimeout(_,100);he&&(t=requestAnimationFrame(_))}function F(e){var t=b,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),b=t}function G(e){var t=b;e.__c=e.__(),b=t}function Pe(e,t){return!e||e.length!==t.length||t.some(function(_,l){return _!==e[l]})}function $e(e,t){return typeof t=="function"?t(e):t}var Oe=0;function r(e,t,_,l,o,n){var u,s,h={};for(s in t)s=="ref"?u=t[s]:h[s]=t[s];var f={type:e,props:h,key:_,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Oe,__source:o,__self:n};if(typeof e=="function"&&(u=e.defaultProps))for(s in u)h[s]===void 0&&(h[s]=u[s]);return d.vnode&&d.vnode(f),f}function We(){let[e,t]=X(!1),[_,l]=X(!1);const o=()=>{_||l(!0),t(!e)};return r("header",{className:"header",children:[r("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),r("button",{className:"header__menu","aria-expanded":e?"true":"false",onClick:o,children:r("span",{className:"header__menu-text a11y-hidden",children:e?"Закрыть меню":"Открыть меню"})}),r("ul",{className:"header__links"+(e?" header__links_opened":"")+(_?" header__links-toggled":""),children:[r("li",{className:"header__item",children:r("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),r("li",{className:"header__item",children:r("a",{className:"header__link",href:"/devices",children:"Устройства"})}),r("li",{className:"header__item",children:r("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}function k(e){const t=Z(),{onSize:_}=e;return j(()=>{const l=t.current.offsetWidth,o=t.current.offsetHeight;_&&_({width:l,height:o})}),r("li",{ref:t,className:"event"+(e.slim?" event_slim":""),children:r("button",{className:"event__button",children:[r("span",{className:`event__icon event__icon_${e.icon}`,role:"img","aria-label":e.iconLabel}),r("h4",{className:"event__title",children:e.title}),e.subtitle&&r("span",{className:"event__subtitle",children:e.subtitle})]})})}const E={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)E.all.items=[...E.all.items,...E.all.items];const z=Object.keys(E);function Be(){const e=Z(),t=Z(!1),[_,l]=X(""),[o,n]=X(!1);j(()=>{!_&&!t.current&&(t.current=!0,l(new URLSearchParams(location.search).get("tab")||"all"))});const u=i=>{l(i.target.value)};let s=[];const h=i=>{s=[...s,i]};j(()=>{const i=s.reduce((a,c)=>a+c.width,0);s.reduce((a,c)=>a+c.height,0);const m=i>e.current.offsetWidth;m!==o&&n(m)});const f=()=>{const i=e.current.querySelector(".section__panel:not(.section__panel_hidden)");i&&i.scrollTo({left:i.scrollLeft+400,behavior:"smooth"})};return r("main",{className:"main",children:[r("section",{className:"section main__general",children:[r("h2",{className:"section__title section__title-header section__main-title",children:"Главное"}),r("div",{className:"hero-dashboard",children:[r("div",{className:"hero-dashboard__primary",children:[r("h3",{className:"hero-dashboard__title",children:"Привет, Геннадий!"}),r("p",{className:"hero-dashboard__subtitle",children:"Двери и окна закрыты, сигнализация включена."}),r("ul",{className:"hero-dashboard__info",children:[r("li",{className:"hero-dashboard__item",children:[r("div",{className:"hero-dashboard__item-title",children:"Дома"}),r("div",{className:"hero-dashboard__item-details",children:["+23",r("span",{className:"a11y-hidden",children:"°"})]})]}),r("li",{className:"hero-dashboard__item",children:[r("div",{className:"hero-dashboard__item-title",children:"За окном"}),r("div",{className:"hero-dashboard__item-details",children:["+19",r("span",{className:"a11y-hidden",children:"°"}),r("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"})]})]})]})]}),r("ul",{className:"hero-dashboard__schedule",children:[r(k,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),r(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),r(k,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})]})]})]}),r("section",{className:"section main__scripts",children:[r("h2",{className:"section__title section__title-header",children:"Избранные сценарии"}),r("ul",{className:"event-grid",children:[r(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),r(k,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),r(k,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),r(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),r(k,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})]})]}),r("section",{className:"section main__devices",children:[r("div",{className:"section__title",children:[r("h2",{className:"section__title-header",children:"Избранные устройства"}),r("select",{className:"section__select",defaultValue:"all",onInput:u,children:z.map(i=>r("option",{value:i,children:E[i].title},i))}),r("ul",{role:"tablist",className:"section__tabs",children:z.map(i=>r("li",{role:"tab","aria-selected":i===_?"true":"false",className:"section__tab"+(i===_?" section__tab_active":""),id:`tab_${i}`,"aria-controls":`panel_${i}`,onClick:()=>l(i),children:E[i].title},i))})]}),r("div",{className:"section__panel-wrapper",ref:e,children:[z.map(i=>r("div",{role:"tabpanel",className:"section__panel"+(i===_?"":" section__panel_hidden"),"aria-hidden":i===_?"false":"true",id:`panel_${i}`,"aria-labelledby":`tab_${i}`,children:r("ul",{className:"section__panel-list",children:E[i].items.map((m,a)=>r(k,{...m,onSize:h},a))})},i)),o&&r("div",{className:"section__arrow",onClick:f})]})]})]})}function Ie(){return r(C,{children:[r(We,{}),r(Be,{})]})}De(r(Ie,{}),document.getElementById("app"));
