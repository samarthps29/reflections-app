import{H as w}from"./highlight.js-ce00471d.js";const k={},x="hljs-";function _(y){const e=w.newInstance();return y&&a(y),{highlight:s,highlightAuto:i,listLanguages:l,register:a,registerAlias:d,registered:f};function s(t,r,n){const o=n||k,p=typeof o.prefix=="string"?o.prefix:x;if(!e.getLanguage(t))throw new Error("Unknown language: `"+t+"` is not registered");e.configure({__emitter:L,classPrefix:p});const c=e.highlight(r,{ignoreIllegals:!0,language:t});if(c.errorRaised)throw new Error("Could not highlight with `Highlight.js`",{cause:c.errorRaised});const g=c._emitter.root,h=g.data;return h.language=c.language,h.relevance=c.relevance,g}function i(t,r){const o=(r||k).subset||l();let p=-1,c=0,g;for(;++p<o.length;){const h=o[p];if(!e.getLanguage(h))continue;const u=s(h,t,r);u.data&&u.data.relevance!==void 0&&u.data.relevance>c&&(c=u.data.relevance,g=u)}return g||{type:"root",children:[],data:{language:void 0,relevance:c}}}function l(){return e.listLanguages()}function a(t,r){if(typeof t=="string")e.registerLanguage(t,r);else{let n;for(n in t)Object.hasOwn(t,n)&&e.registerLanguage(n,t[n])}}function d(t,r){if(typeof t=="string")e.registerAliases(typeof r=="string"?r:[...r],{languageName:t});else{let n;for(n in t)if(Object.hasOwn(t,n)){const o=t[n];e.registerAliases(typeof o=="string"?o:[...o],{languageName:n})}}}function f(t){return!!e.getLanguage(t)}}class L{constructor(e){this.options=e,this.root={type:"root",children:[],data:{language:void 0,relevance:0}},this.stack=[this.root]}addText(e){if(e==="")return;const s=this.stack[this.stack.length-1],i=s.children[s.children.length-1];i&&i.type==="text"?i.value+=e:s.children.push({type:"text",value:e})}startScope(e){this.openNode(String(e))}endScope(){this.closeNode()}__addSublanguage(e,s){const i=this.stack[this.stack.length-1],l=e.root.children;s?i.children.push({type:"element",tagName:"span",properties:{className:[s]},children:l}):i.children.push(...l)}openNode(e){const s=this,i=e.split(".").map(function(d,f){return f?d+"_".repeat(f):s.options.classPrefix+d}),l=this.stack[this.stack.length-1],a={type:"element",tagName:"span",properties:{className:i},children:[]};l.children.push(a),this.stack.push(a)}closeNode(){this.stack.pop()}finalize(){}toHTML(){return""}}export{_ as c};