import{e as E,d as Ir,f as x,g as ma,h as Ra}from"./@babel-c1091338.js";import{r as n}from"./react-4fd50329.js";import{r as Da}from"./react-dom-07ff982c.js";import{c as Lr,b as J,d as ka,u as $a,r as ra,s as ha,e as ga,f as _e,i as Yr,h as Na,j as aa,g as Xr,k as La,l as Ta,m as za,n as Wa}from"./rc-util-314658b4.js";import{c as Je}from"./classnames-4ba1ba1a.js";import{R as ya}from"./rc-resize-observer-473a17d9.js";import{C as Ca}from"./rc-motion-29c75f2f.js";import"./react-is-e8e5dbb3.js";var Ma=n.createContext(null),na=[];function _a(e,a){var r=n.useState(function(){if(!Lr())return null;var m=document.createElement("div");return m}),t=E(r,1),o=t[0],u=n.useRef(!1),l=n.useContext(Ma),c=n.useState(na),f=E(c,2),h=f[0],C=f[1],d=l||(u.current?void 0:function(m){C(function(M){var D=[m].concat(Ir(M));return D})});function w(){o.parentElement||document.body.appendChild(o),u.current=!0}function s(){var m;(m=o.parentElement)===null||m===void 0||m.removeChild(o),u.current=!1}return J(function(){return e?l?l(w):w():s(),s},[e]),J(function(){h.length&&(h.forEach(function(m){return m()}),C(na))},[h]),[o,d]}function Ha(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var xa="rc-util-locker-".concat(Date.now()),ta=0;function Ba(e){var a=!!e,r=n.useState(function(){return ta+=1,"".concat(xa,"_").concat(ta)}),t=E(r,1),o=t[0];J(function(){if(a){var u=ka(),l=Ha();$a(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(u,"px);"):"",`
}`),o)}else ra(o);return function(){ra(o)}},[a,o])}var oa=!1;function Fa(e){return typeof e=="boolean"&&(oa=e),oa}var ia=function(a){return a===!1?!1:!Lr()||!a?null:typeof a=="string"?document.querySelector(a):typeof a=="function"?a():a},Sa=n.forwardRef(function(e,a){var r=e.open,t=e.autoLock,o=e.getContainer;e.debug;var u=e.autoDestroy,l=u===void 0?!0:u,c=e.children,f=n.useState(r),h=E(f,2),C=h[0],d=h[1],w=C||r;n.useEffect(function(){(l||r)&&d(r)},[r,l]);var s=n.useState(function(){return ia(o)}),m=E(s,2),M=m[0],D=m[1];n.useEffect(function(){var K=ia(o);D(K??null)});var k=_a(w&&!M),g=E(k,2),z=g[0],V=g[1],W=M??z;Ba(t&&r&&Lr()&&(W===z||W===document.body));var p=null;if(c&&ha(c)&&a){var B=c;p=B.ref}var y=ga(p,a);if(!w||!Lr()||M===void 0)return null;var G=W===!1||Fa(),b=c;return a&&(b=n.cloneElement(c,{ref:y})),n.createElement(Ma.Provider,{value:V},G?b:Da.createPortal(b,W))}),ua=n.createContext(null);function la(e){return e?Array.isArray(e)?e:[e]:[]}function Va(e,a,r,t){return n.useMemo(function(){var o=la(r??a),u=la(t??a),l=new Set(o),c=new Set(u);return e&&(l.has("hover")&&(l.delete("hover"),l.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[l,c]},[e,a,r,t])}function Aa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===a[0]:e[0]===a[0]&&e[1]===a[1]}function qa(e,a,r,t){for(var o=r.points,u=Object.keys(e),l=0;l<u.length;l+=1){var c,f=u[l];if(Aa((c=e[f])===null||c===void 0?void 0:c.points,o,t))return"".concat(a,"-placement-").concat(f)}return""}function sa(e,a,r,t){return a||(r?{motionName:"".concat(e,"-").concat(r)}:t?{motionName:t}:null)}function sr(e){return e.ownerDocument.defaultView}function Or(e){for(var a=[],r=e==null?void 0:e.parentElement,t=["hidden","scroll","clip","auto"];r;){var o=sr(r).getComputedStyle(r),u=o.overflowX,l=o.overflowY,c=o.overflow;[u,l,c].some(function(f){return t.includes(f)})&&a.push(r),r=r.parentElement}return a}function lr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?a:e}function ur(e){return lr(parseFloat(e),0)}function va(e,a){var r=x({},e);return(a||[]).forEach(function(t){if(!(t instanceof HTMLBodyElement)){var o=sr(t).getComputedStyle(t),u=o.overflow,l=o.overflowClipMargin,c=o.borderTopWidth,f=o.borderBottomWidth,h=o.borderLeftWidth,C=o.borderRightWidth,d=t.getBoundingClientRect(),w=t.offsetHeight,s=t.clientHeight,m=t.offsetWidth,M=t.clientWidth,D=ur(c),k=ur(f),g=ur(h),z=ur(C),V=lr(Math.round(d.width/m*1e3)/1e3),W=lr(Math.round(d.height/w*1e3)/1e3),p=(m-M-g-z)*V,B=(w-s-D-k)*W,y=D*W,G=k*W,b=g*V,K=z*V,ee=0,A=0;if(u==="clip"){var T=ur(l);ee=T*V,A=T*W}var Z=d.x+b-ee,q=d.y+y-A,me=Z+d.width+2*ee-b-K-p,le=q+d.height+2*A-y-G-B;r.left=Math.max(r.left,Z),r.top=Math.max(r.top,q),r.right=Math.min(r.right,me),r.bottom=Math.min(r.bottom,le)}}),r}function ca(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(a),t=r.match(/^(.*)\%$/);return t?e*(parseFloat(t[1])/100):parseFloat(r)}function fa(e,a){var r=a||[],t=E(r,2),o=t[0],u=t[1];return[ca(e.width,o),ca(e.height,u)]}function da(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function je(e,a){var r=a[0],t=a[1],o,u;return r==="t"?u=e.y:r==="b"?u=e.y+e.height:u=e.y+e.height/2,t==="l"?o=e.x:t==="r"?o=e.x+e.width:o=e.x+e.width/2,{x:o,y:u}}function Me(e,a){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(t,o){return o===a?r[t]||"c":t}).join("")}function Ua(e,a,r,t,o,u,l){var c=n.useState({ready:!1,offsetX:0,offsetY:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:o[t]||{}}),f=E(c,2),h=f[0],C=f[1],d=n.useRef(0),w=n.useMemo(function(){return a?Or(a):[]},[a]),s=n.useRef({}),m=function(){s.current={}};e||m();var M=_e(function(){if(a&&r&&e){let X=function(We,ue){var de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:R,or=b.x+We,Qe=b.y+ue,Gr=or+ae,Kr=Qe+H,Rr=Math.max(or,de.left),Dr=Math.max(Qe,de.top),ir=Math.min(Gr,de.right),kr=Math.min(Kr,de.bottom);return Math.max(0,(ir-Rr)*(kr-Dr))},tr=function(){Ee=b.y+L,Re=Ee+H,ge=b.x+N,De=ge+ae};var g=a,z=g.style.left,V=g.style.top,W=g.ownerDocument,p=sr(g),B=x(x({},o[t]),u);g.style.left="0",g.style.top="0";var y;if(Array.isArray(r))y={x:r[0],y:r[1],width:0,height:0};else{var G=r.getBoundingClientRect();y={x:G.x,y:G.y,width:G.width,height:G.height}}var b=g.getBoundingClientRect(),K=p.getComputedStyle(g),ee=K.width,A=K.height,T=W.documentElement,Z=T.clientWidth,q=T.clientHeight,me=T.scrollWidth,le=T.scrollHeight,Se=T.scrollTop,re=T.scrollLeft,H=b.height,ae=b.width,se=y.height,_=y.width,Ge={left:0,top:0,right:Z,bottom:q},we={left:-re,top:-Se,right:me-re,bottom:le-Se},I=B.htmlRegion,ne="visible",He="visibleFirst";I!=="scroll"&&I!==He&&(I=ne);var ve=I===He,vr=va(we,w),ce=va(Ge,w),R=I===ne?ce:vr,xe=ve?ce:R;g.style.left=z,g.style.top=V;var Be=lr(Math.round(ae/parseFloat(ee)*1e3)/1e3),be=lr(Math.round(H/parseFloat(A)*1e3)/1e3);if(Be===0||be===0||Yr(r)&&!Na(r))return;var Tr=B.offset,zr=B.targetOffset,cr=fa(b,Tr),te=E(cr,2),Ke=te[0],Ze=te[1],Wr=fa(y,zr),Ie=E(Wr,2),O=Ie[0],_r=Ie[1];y.x-=O,y.y-=_r;var Hr=B.points||[],fr=E(Hr,2),dr=fr[0],he=fr[1],fe=da(he),U=da(dr),Pe=je(y,fe),Q=je(b,U),j=x({},B),N=Pe.x-Q.x+Ke,L=Pe.y-Q.y+Ze,oe=X(N,L),Fe=X(N,L,ce),Ye=je(y,["t","l"]),mr=je(b,["t","l"]),Xe=je(y,["b","r"]),F=je(b,["b","r"]),Ve=B.overflow||{},Oe=Ve.adjustX,hr=Ve.adjustY,pe=Ve.shiftX,er=Ve.shiftY,ie=function(ue){return typeof ue=="boolean"?ue:ue>=0},Ee,Re,ge,De;tr();var rr=ie(hr),gr=U[0]===fe[0];if(rr&&U[0]==="t"&&(Re>xe.bottom||s.current.bt)){var ye=L;gr?ye-=H-se:ye=Ye.y-F.y-Ze;var Ae=X(N,ye),yr=X(N,ye,ce);Ae>oe||Ae===oe&&(!ve||yr>=Fe)?(s.current.bt=!0,L=ye,j.points=[Me(U,0),Me(fe,0)]):s.current.bt=!1}if(rr&&U[0]==="b"&&(Ee<xe.top||s.current.tb)){var ke=L;gr?ke+=H-se:ke=Xe.y-mr.y-Ze;var ar=X(N,ke),Cr=X(N,ke,ce);ar>oe||ar===oe&&(!ve||Cr>=Fe)?(s.current.tb=!0,L=ke,j.points=[Me(U,0),Me(fe,0)]):s.current.tb=!1}var Mr=ie(Oe),qe=U[1]===fe[1];if(Mr&&U[1]==="l"&&(De>xe.right||s.current.rl)){var $e=N;qe?$e-=ae-_:$e=Ye.x-F.x-Ke;var Y=X($e,L),xr=X($e,L,ce);Y>oe||Y===oe&&(!ve||xr>=Fe)?(s.current.rl=!0,N=$e,j.points=[Me(U,1),Me(fe,1)]):s.current.rl=!1}if(Mr&&U[1]==="r"&&(ge<xe.left||s.current.lr)){var Ne=N;qe?Ne+=ae-_:Ne=Xe.x-mr.x-Ke;var Sr=X(Ne,L),Br=X(Ne,L,ce);Sr>oe||Sr===oe&&(!ve||Br>=Fe)?(s.current.lr=!0,N=Ne,j.points=[Me(U,1),Me(fe,1)]):s.current.lr=!1}tr();var Le=pe===!0?0:pe;typeof Le=="number"&&(ge<R.left&&(N-=ge-R.left,y.x+_<R.left+Le&&(N+=y.x-R.left+_-Le)),De>R.right&&(N-=De-R.right,y.x>R.right-Le&&(N+=y.x-R.right+Le)));var Te=er===!0?0:er;typeof Te=="number"&&(Ee<R.top&&(L-=Ee-R.top,y.y+se<R.top+Te&&(L+=y.y-R.top+se-Te)),Re>R.bottom&&(L-=Re-R.bottom,y.y>R.bottom-Te&&(L+=y.y-R.bottom+Te)));var nr=b.x+N,Ue=nr+ae,ze=b.y+L,Ce=ze+H,wr=y.x,Fr=wr+_,br=y.y,Vr=br+se,Pr=Math.max(nr,wr),Ar=Math.min(Ue,Fr),qr=(Pr+Ar)/2,Ur=qr-nr,Er=Math.max(ze,br),Qr=Math.min(Ce,Vr),jr=(Er+Qr)/2,Jr=jr-ze;l==null||l(a,j),C({ready:!0,offsetX:N/Be,offsetY:L/be,arrowX:Ur/Be,arrowY:Jr/be,scaleX:Be,scaleY:be,align:j})}}),D=function(){d.current+=1;var z=d.current;Promise.resolve().then(function(){d.current===z&&M()})},k=function(){C(function(z){return x(x({},z),{},{ready:!1})})};return J(k,[t]),J(function(){e||k()},[e]),[h.ready,h.offsetX,h.offsetY,h.arrowX,h.arrowY,h.scaleX,h.scaleY,h.align,D]}function Qa(e,a,r,t){J(function(){if(e&&a&&r){let C=function(){t()};var o=a,u=r,l=Or(o),c=Or(u),f=sr(u),h=new Set([f].concat(Ir(l),Ir(c)));return h.forEach(function(d){d.addEventListener("scroll",C,{passive:!0})}),f.addEventListener("resize",C,{passive:!0}),t(),function(){h.forEach(function(d){d.removeEventListener("scroll",C),f.removeEventListener("resize",C)})}}},[e,a,r])}function ja(e,a,r,t,o,u,l,c){var f=n.useRef(e),h=n.useRef(!1);f.current!==e&&(h.current=!0,f.current=e),n.useEffect(function(){var C=aa(function(){h.current=!1});return function(){aa.cancel(C)}},[e]),n.useEffect(function(){if(a&&t&&(!o||u)){var C=!1,d=function(D){var k=D.target;C=l(k)},w=function(D){var k=D.target;!h.current&&f.current&&!C&&!l(k)&&c(!1)},s=sr(t);s.addEventListener("mousedown",d),s.addEventListener("click",w);var m=Xr(r);return m&&(m.addEventListener("mousedown",d),m.addEventListener("click",w)),function(){s.removeEventListener("mousedown",d),s.removeEventListener("click",w),m&&(m.removeEventListener("mousedown",d),m.removeEventListener("click",w))}}},[a,r,t,o,u])}function Ja(e){var a=e.prefixCls,r=e.align,t=e.arrow,o=e.arrowPos,u=t||{},l=u.className,c=u.content,f=o.x,h=f===void 0?0:f,C=o.y,d=C===void 0?0:C,w=n.useRef();if(!r||!r.points)return null;var s={position:"absolute"};if(r.autoArrow!==!1){var m=r.points[0],M=r.points[1],D=m[0],k=m[1],g=M[0],z=M[1];D===g||!["t","b"].includes(D)?s.top=d:D==="t"?s.top=0:s.bottom=0,k===z||!["l","r"].includes(k)?s.left=h:k==="l"?s.left=0:s.right=0}return n.createElement("div",{ref:w,className:Je("".concat(a,"-arrow"),l),style:s},c)}function Ga(e){var a=e.prefixCls,r=e.open,t=e.zIndex,o=e.mask,u=e.motion;return o?n.createElement(Ca,ma({},u,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(l){var c=l.className;return n.createElement("div",{style:{zIndex:t},className:Je("".concat(a,"-mask"),c)})}):null}var Ka=n.memo(function(e){var a=e.children;return a},function(e,a){return a.cache}),Za=n.forwardRef(function(e,a){var r=e.popup,t=e.className,o=e.prefixCls,u=e.style,l=e.target,c=e.onVisibleChanged,f=e.open,h=e.keepDom,C=e.onClick,d=e.mask,w=e.arrow,s=e.arrowPos,m=e.align,M=e.motion,D=e.maskMotion,k=e.forceRender,g=e.getPopupContainer,z=e.autoDestroy,V=e.portal,W=e.zIndex,p=e.onMouseEnter,B=e.onMouseLeave,y=e.ready,G=e.offsetX,b=e.offsetY,K=e.onAlign,ee=e.onPrepare,A=e.stretch,T=e.targetWidth,Z=e.targetHeight,q=typeof r=="function"?r():r,me=f||h,le=(g==null?void 0:g.length)>0,Se=n.useState(!g||!le),re=E(Se,2),H=re[0],ae=re[1];if(J(function(){!H&&le&&l&&ae(!0)},[H,le,l]),!H)return null;var se=y||!f?{left:G,top:b}:{left:"-1000vw",top:"-1000vh"},_={};return A&&(A.includes("height")&&Z?_.height=Z:A.includes("minHeight")&&Z&&(_.minHeight=Z),A.includes("width")&&T?_.width=T:A.includes("minWidth")&&T&&(_.minWidth=T)),f||(_.pointerEvents="none"),n.createElement(V,{open:k||me,getContainer:g&&function(){return g(l)},autoDestroy:z},n.createElement(Ga,{prefixCls:o,open:f,zIndex:W,mask:d,motion:D}),n.createElement(ya,{onResize:K,disabled:!f},function(Ge){return n.createElement(Ca,ma({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:k,leavedClassName:"".concat(o,"-hidden")},M,{onAppearPrepare:ee,onEnterPrepare:ee,visible:f,onVisibleChanged:function(I){var ne;M==null||(ne=M.onVisibleChanged)===null||ne===void 0||ne.call(M,I),c(I)}}),function(we,I){var ne=we.className,He=we.style,ve=Je(o,ne,t);return n.createElement("div",{ref:La(Ge,a,I),className:ve,style:x(x(x(x({"--arrow-x":"".concat(s.x||0,"px"),"--arrow-y":"".concat(s.y||0,"px")},se),_),He),{},{boxSizing:"border-box",zIndex:W},u),onMouseEnter:p,onMouseLeave:B,onClick:C},w&&n.createElement(Ja,{prefixCls:o,arrow:w,arrowPos:s,align:m}),n.createElement(Ka,{cache:!f},q))})}))}),Ia=n.forwardRef(function(e,a){var r=e.children,t=e.getTriggerDOMNode,o=ha(r),u=n.useCallback(function(c){Ta(a,t?t(c):c)},[t]),l=ga(u,r.ref);return o?n.cloneElement(r,{ref:l}):r}),Ya=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Xa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Sa,a=n.forwardRef(function(r,t){var o=r.prefixCls,u=o===void 0?"rc-trigger-popup":o,l=r.children,c=r.action,f=c===void 0?"hover":c,h=r.showAction,C=r.hideAction,d=r.popupVisible,w=r.defaultPopupVisible,s=r.onPopupVisibleChange,m=r.afterPopupVisibleChange,M=r.mouseEnterDelay,D=r.mouseLeaveDelay,k=D===void 0?.1:D,g=r.focusDelay,z=r.blurDelay,V=r.mask,W=r.maskClosable,p=W===void 0?!0:W,B=r.getPopupContainer,y=r.forceRender,G=r.autoDestroy,b=r.destroyPopupOnHide,K=r.popup,ee=r.popupClassName,A=r.popupStyle,T=r.popupPlacement,Z=r.builtinPlacements,q=Z===void 0?{}:Z,me=r.popupAlign,le=r.zIndex,Se=r.stretch,re=r.getPopupClassNameFromAlign,H=r.alignPoint,ae=r.onPopupClick,se=r.onPopupAlign,_=r.arrow,Ge=r.popupMotion,we=r.maskMotion,I=r.popupTransitionName,ne=r.popupAnimation,He=r.maskTransitionName,ve=r.maskAnimation,vr=r.className,ce=r.getTriggerDOMNode,R=Ra(r,Ya),xe=G||b||!1,Be=n.useState(!1),be=E(Be,2),Tr=be[0],zr=be[1];J(function(){zr(za())},[]);var cr=n.useRef({}),te=n.useContext(ua),Ke=n.useMemo(function(){return{registerSubPopup:function(v,S){cr.current[v]=S,te==null||te.registerSubPopup(v,S)}}},[te]),Ze=Wa(),Wr=n.useState(null),Ie=E(Wr,2),O=Ie[0],_r=Ie[1],Hr=_e(function(i){Yr(i)&&O!==i&&_r(i),te==null||te.registerSubPopup(Ze,i)}),fr=n.useState(null),dr=E(fr,2),he=dr[0],fe=dr[1],U=_e(function(i){Yr(i)&&he!==i&&fe(i)}),Pe=n.Children.only(l),Q=(Pe==null?void 0:Pe.props)||{},j={},N=_e(function(i){var v,S,$=he;return($==null?void 0:$.contains(i))||((v=Xr($))===null||v===void 0?void 0:v.host)===i||i===$||(O==null?void 0:O.contains(i))||((S=Xr(O))===null||S===void 0?void 0:S.host)===i||i===O||Object.values(cr.current).some(function(P){return(P==null?void 0:P.contains(i))||i===P})}),L=sa(u,Ge,ne,I),oe=sa(u,we,ve,He),Fe=n.useState(w||!1),Ye=E(Fe,2),mr=Ye[0],Xe=Ye[1],F=d??mr,Ve=_e(function(i){d===void 0&&Xe(i)});J(function(){Xe(d||!1)},[d]);var Oe=n.useRef(F);Oe.current=F;var hr=_e(function(i){F!==i&&(Ve(i),s==null||s(i))}),pe=n.useRef(),er=function(){clearTimeout(pe.current)},ie=function(v){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;er(),S===0?hr(v):pe.current=setTimeout(function(){hr(v)},S*1e3)};n.useEffect(function(){return er},[]);var Ee=n.useState(!1),Re=E(Ee,2),ge=Re[0],De=Re[1],rr=n.useRef(!0);J(function(){(!rr.current||F)&&De(!0),rr.current=!0},[F]);var gr=n.useState(null),ye=E(gr,2),Ae=ye[0],yr=ye[1],ke=n.useState([0,0]),ar=E(ke,2),Cr=ar[0],Mr=ar[1],qe=function(v){Mr([v.clientX,v.clientY])},$e=Ua(F,O,H?Cr:he,T,q,me,se),Y=E($e,9),xr=Y[0],Ne=Y[1],Sr=Y[2],Br=Y[3],Le=Y[4],Te=Y[5],nr=Y[6],Ue=Y[7],ze=Y[8],Ce=_e(function(){ge||ze()});Qa(F,he,O,Ce),J(function(){Ce()},[Cr,T]),J(function(){F&&!(q!=null&&q[T])&&Ce()},[JSON.stringify(me)]);var wr=n.useMemo(function(){var i=qa(q,u,Ue,H);return Je(i,re==null?void 0:re(Ue))},[Ue,re,q,u,H]);n.useImperativeHandle(t,function(){return{forceAlign:Ce}});var Fr=function(v){De(!1),ze(),m==null||m(v)},br=function(){return new Promise(function(v){yr(function(){return v})})};J(function(){Ae&&(ze(),Ae(),yr(null))},[Ae]);var Vr=n.useState(0),Pr=E(Vr,2),Ar=Pr[0],qr=Pr[1],Ur=n.useState(0),Er=E(Ur,2),Qr=Er[0],jr=Er[1],Jr=function(v,S){if(Ce(),Se){var $=S.getBoundingClientRect();qr($.width),jr($.height)}},X=Va(Tr,f,h,C),tr=E(X,2),We=tr[0],ue=tr[1],de=function(v,S,$,P){j[v]=function(pr){var $r;P==null||P(pr),ie(S,$);for(var Zr=arguments.length,ea=new Array(Zr>1?Zr-1:0),Nr=1;Nr<Zr;Nr++)ea[Nr-1]=arguments[Nr];($r=Q[v])===null||$r===void 0||$r.call.apply($r,[Q,pr].concat(ea))}},or=We.has("click"),Qe=ue.has("click")||ue.has("contextMenu");(or||Qe)&&(j.onClick=function(i){var v;Oe.current&&Qe?ie(!1):!Oe.current&&or&&(qe(i),ie(!0));for(var S=arguments.length,$=new Array(S>1?S-1:0),P=1;P<S;P++)$[P-1]=arguments[P];(v=Q.onClick)===null||v===void 0||v.call.apply(v,[Q,i].concat($))}),ja(F,Qe,he,O,V,p,N,ie);var Gr=We.has("hover"),Kr=ue.has("hover"),Rr,Dr;Gr&&(de("onMouseEnter",!0,M,function(i){qe(i)}),Rr=function(){ie(!0,M)},H&&(j.onMouseMove=function(i){var v;(v=Q.onMouseMove)===null||v===void 0||v.call(Q,i)})),Kr&&(de("onMouseLeave",!1,k),Dr=function(){ie(!1,k)}),We.has("focus")&&de("onFocus",!0,g),ue.has("focus")&&de("onBlur",!1,z),We.has("contextMenu")&&(j.onContextMenu=function(i){var v;qe(i),ie(!0),i.preventDefault();for(var S=arguments.length,$=new Array(S>1?S-1:0),P=1;P<S;P++)$[P-1]=arguments[P];(v=Q.onContextMenu)===null||v===void 0||v.call.apply(v,[Q,i].concat($))}),vr&&(j.className=Je(Q.className,vr));var ir=x(x({},Q),j),kr={},wa=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];wa.forEach(function(i){R[i]&&(kr[i]=function(){for(var v,S=arguments.length,$=new Array(S),P=0;P<S;P++)$[P]=arguments[P];(v=ir[i])===null||v===void 0||v.call.apply(v,[ir].concat($)),R[i].apply(R,$)})});var ba=n.cloneElement(Pe,x(x({},ir),kr)),Pa={x:Br,y:Le},Ea=_?x({},_!==!0?_:{}):null;return n.createElement(n.Fragment,null,n.createElement(ya,{disabled:!F,ref:U,onResize:Jr},n.createElement(Ia,{getTriggerDOMNode:ce},ba)),n.createElement(ua.Provider,{value:Ke},n.createElement(Za,{portal:e,ref:Hr,prefixCls:u,popup:K,className:Je(ee,wr),style:A,target:he,onMouseEnter:Rr,onMouseLeave:Dr,zIndex:le,open:F,keepDom:ge,onClick:ae,mask:V,motion:L,maskMotion:oe,onVisibleChanged:Fr,onPrepare:br,forceRender:y,autoDestroy:xe,getPopupContainer:B,align:Ue,arrow:Ea,arrowPos:Pa,ready:xr,offsetX:Ne,offsetY:Sr,onAlign:Ce,stretch:Se,targetWidth:Ar/Te,targetHeight:Qr/nr})))});return a}const un=Xa(Sa);export{un as T};
