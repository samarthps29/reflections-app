import{g as nn}from"./dayjs-afe83796.js";function nt(e){const n=e.regex,t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),c="decltype\\(auto\\)",b="[a-zA-Z_]\\w*::",S="<[^<>]+>",a="(?!struct)("+c+"|"+n.optional(b)+"[a-zA-Z_]\\w*"+n.optional(S)+")",s={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},l="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+l+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},A={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},R={className:"title",begin:n.optional(b)+e.IDENT_RE,relevance:0},C=n.optional(b)+e.IDENT_RE+"\\s*\\(",m=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],x=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],U=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],F=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],w={type:x,keyword:m,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:U},$={className:"function.dispatch",relevance:0,keywords:{_hint:F},begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))},v=[$,A,s,t,e.C_BLOCK_COMMENT_MODE,h,p],J={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:w,contains:v.concat([{begin:/\(/,end:/\)/,keywords:w,contains:v.concat(["self"]),relevance:0}]),relevance:0},X={className:"function",begin:"("+a+"[\\*&\\s]+)+"+C,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:w,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:c,keywords:w,relevance:0},{begin:C,returnBegin:!0,contains:[R],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[p,h]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,p,h,s,{begin:/\(/,end:/\)/,keywords:w,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,p,h,s]}]},s,t,e.C_BLOCK_COMMENT_MODE,A]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:w,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(J,X,$,v,[A,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:w,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:w},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}const Me="[A-Za-z$_][0-9A-Za-z$_]*",tn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],sn=["true","false","null","undefined","NaN","Infinity"],ke=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Le=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Be=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],rn=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],an=[].concat(Be,ke,Le);function tt(e){const n=e.regex,t=(o,{after:f})=>{const _="</"+o[0].slice(1);return o.input.indexOf(_,f)!==-1},c=Me,b={begin:"<>",end:"</>"},S=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(o,f)=>{const _=o[0].length+o.index,y=o.input[_];if(y==="<"||y===","){f.ignoreMatch();return}y===">"&&(t(o,{after:_})||f.ignoreMatch());let O;const k=o.input.substring(_);if(O=k.match(/^\s*=/)){f.ignoreMatch();return}if((O=k.match(/^\s+extends\s+/))&&O.index===0){f.ignoreMatch();return}}},s={$pattern:Me,keyword:tn,literal:sn,built_in:an,"variable.language":rn},l="[0-9](_?[0-9])*",p=`\\.(${l})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${h})((${p})|\\.)?|(${p}))[eE][+-]?(${l})\\b`},{begin:`\\b(${h})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},R={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},C={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"css"}},x={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"graphql"}},U={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,R]},W={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},Z=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,m,x,U,{match:/\$\d+/},A];R.contains=Z.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(Z)});const w=[].concat(W,R.contains),$=w.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(w)}]),v={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$},J={variants:[{match:[/class/,/\s+/,c,/\s+/,/extends/,/\s+/,n.concat(c,"(",n.concat(/\./,c),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,c],scope:{1:"keyword",3:"title.class"}}]},X={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ke,...Le]}},L={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ee={variants:[{match:[/function/,/\s+/,c,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[v],illegal:/%/},ne={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function le(o){return n.concat("(?!",o.join("|"),")")}const ue={match:n.concat(/\b/,le([...Be,"super","import"]),c,n.lookahead(/\(/)),className:"title.function",relevance:0},ge={begin:n.concat(/\./,n.lookahead(n.concat(c,/(?![0-9A-Za-z$_(])/))),end:c,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Y={match:[/get|set/,/\s+/,c,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},v]},te="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",i={match:[/const|var|let/,/\s+/,c,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(te)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[v]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:$,CLASS_REFERENCE:X},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),L,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,m,x,U,W,{match:/\$\d+/},A,X,{className:"attr",begin:c+n.lookahead(":"),relevance:0},i,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[W,e.REGEXP_MODE,{className:"function",begin:te,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:$}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:b.begin,end:b.end},{match:S},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[v,e.inherit(e.TITLE_MODE,{begin:c,className:"title.function"})]},{match:/\.\.\./,relevance:0},ge,{match:"\\$"+c,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[v]},ue,ne,J,Y,{match:/\$[(.]/}]}}function it(e){const n=e.regex,t=/[\p{XID_Start}_]\p{XID_Continue}*/u,c=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:c,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},p={className:"subst",begin:/\{/,end:/\}/,keywords:s,illegal:/#/},h={begin:/\{\{/,relevance:0},A={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,l,h,p]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,l,h,p]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,h,p]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,h,p]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},R="[0-9](_?[0-9])*",C=`(\\b(${R}))?\\.(${R})|\\b(${R})\\.`,m=`\\b|${c.join("|")}`,x={className:"number",relevance:0,variants:[{begin:`(\\b(${R})|(${C}))[eE][+-]?(${R})[jJ]?(?=${m})`},{begin:`(${C})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${m})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${m})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`},{begin:`\\b(${R})[jJ](?=${m})`}]},U={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},F={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:["self",l,x,A,e.HASH_COMMENT_MODE]}]};return p.contains=[A,x,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,illegal:/(<\/|\?)|=>/,contains:[l,x,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},A,U,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[F]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[x,F,A]}]}}function De(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],c=typeof t;(c==="object"||c==="function")&&!Object.isFrozen(t)&&De(t)}),e}class Te{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function H(e,...n){const t=Object.create(null);for(const c in e)t[c]=e[c];return n.forEach(function(c){for(const b in c)t[b]=c[b]}),t}const cn="</span>",Oe=e=>!!e.scope,on=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((c,b)=>`${c}${"_".repeat(b+1)}`)].join(" ")}return`${n}${e}`};class ln{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Pe(n)}openNode(n){if(!Oe(n))return;const t=on(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){Oe(n)&&(this.buffer+=cn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const me=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class _e{constructor(){this.rootNode=me(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=me({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(c=>this._walk(n,c)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{_e._collapse(t)}))}}class un extends _e{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const c=n.root;t&&(c.scope=`language:${t}`),this.add(c)}toHTML(){return new ln(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function V(e){return e?typeof e=="string"?e:e.source:null}function Ue(e){return z("(?=",e,")")}function gn(e){return z("(?:",e,")*")}function fn(e){return z("(?:",e,")?")}function z(...e){return e.map(t=>V(t)).join("")}function dn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function be(...e){return"("+(dn(e).capture?"":"?:")+e.map(c=>V(c)).join("|")+")"}function $e(e){return new RegExp(e.toString()+"|").exec("").length-1}function pn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const hn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ee(e,{joinWith:n}){let t=0;return e.map(c=>{t+=1;const b=t;let S=V(c),a="";for(;S.length>0;){const s=hn.exec(S);if(!s){a+=S;break}a+=S.substring(0,s.index),S=S.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?a+="\\"+String(Number(s[1])+b):(a+=s[0],s[0]==="("&&t++)}return a}).map(c=>`(${c})`).join(n)}const _n=/\b\B/,He="[a-zA-Z]\\w*",Se="[a-zA-Z_]\\w*",Fe="\\b\\d+(\\.\\d+)?",Ge="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ke="\\b(0b[01]+)",bn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",En=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=z(n,/.*\b/,e.binary,/\b.*/)),H({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,c)=>{t.index!==0&&c.ignoreMatch()}},e)},Q={begin:"\\\\[\\s\\S]",relevance:0},Sn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Q]},Nn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Q]},yn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},oe=function(e,n,t={}){const c=H({scope:"comment",begin:e,end:n,contains:[]},t);c.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const b=be("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return c.contains.push({begin:z(/[ ]+/,"(",b,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),c},Rn=oe("//","$"),An=oe("/\\*","\\*/"),wn=oe("#","$"),Mn={scope:"number",begin:Fe,relevance:0},Tn={scope:"number",begin:Ge,relevance:0},On={scope:"number",begin:Ke,relevance:0},mn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Q,{begin:/\[/,end:/\]/,relevance:0,contains:[Q]}]},xn={scope:"title",begin:He,relevance:0},In={scope:"title",begin:Se,relevance:0},Cn={begin:"\\.\\s*"+Se,relevance:0},vn=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ae=Object.freeze({__proto__:null,APOS_STRING_MODE:Sn,BACKSLASH_ESCAPE:Q,BINARY_NUMBER_MODE:On,BINARY_NUMBER_RE:Ke,COMMENT:oe,C_BLOCK_COMMENT_MODE:An,C_LINE_COMMENT_MODE:Rn,C_NUMBER_MODE:Tn,C_NUMBER_RE:Ge,END_SAME_AS_BEGIN:vn,HASH_COMMENT_MODE:wn,IDENT_RE:He,MATCH_NOTHING_RE:_n,METHOD_GUARD:Cn,NUMBER_MODE:Mn,NUMBER_RE:Fe,PHRASAL_WORDS_MODE:yn,QUOTE_STRING_MODE:Nn,REGEXP_MODE:mn,RE_STARTERS_RE:bn,SHEBANG:En,TITLE_MODE:xn,UNDERSCORE_IDENT_RE:Se,UNDERSCORE_TITLE_MODE:In});function kn(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Ln(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Bn(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=kn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Dn(e,n){Array.isArray(e.illegal)&&(e.illegal=be(...e.illegal))}function Pn(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Un(e,n){e.relevance===void 0&&(e.relevance=1)}const $n=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(c=>{delete e[c]}),e.keywords=t.keywords,e.begin=z(t.beforeMatch,Ue(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Hn=["of","and","for","in","not","or","if","then","parent","list","value"],Fn="keyword";function ze(e,n,t=Fn){const c=Object.create(null);return typeof e=="string"?b(t,e.split(" ")):Array.isArray(e)?b(t,e):Object.keys(e).forEach(function(S){Object.assign(c,ze(e[S],n,S))}),c;function b(S,a){n&&(a=a.map(s=>s.toLowerCase())),a.forEach(function(s){const l=s.split("|");c[l[0]]=[S,Gn(l[0],l[1])]})}}function Gn(e,n){return n?Number(n):Kn(e)?0:1}function Kn(e){return Hn.includes(e.toLowerCase())}const xe={},K=e=>{console.error(e)},Ie=(e,...n)=>{console.log(`WARN: ${e}`,...n)},q=(e,n)=>{xe[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),xe[`${e}/${n}`]=!0)},ce=new Error;function We(e,n,{key:t}){let c=0;const b=e[t],S={},a={};for(let s=1;s<=n.length;s++)a[s+c]=b[s],S[s+c]=!0,c+=$e(n[s-1]);e[t]=a,e[t]._emit=S,e[t]._multi=!0}function zn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ce;if(typeof e.beginScope!="object"||e.beginScope===null)throw K("beginScope must be object"),ce;We(e,e.begin,{key:"beginScope"}),e.begin=Ee(e.begin,{joinWith:""})}}function Wn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ce;if(typeof e.endScope!="object"||e.endScope===null)throw K("endScope must be object"),ce;We(e,e.end,{key:"endScope"}),e.end=Ee(e.end,{joinWith:""})}}function Zn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Xn(e){Zn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),zn(e),Wn(e)}function Yn(e){function n(a,s){return new RegExp(V(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,s]),this.matchAt+=$e(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(l=>l[1]);this.matcherRe=n(Ee(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(s);if(!l)return null;const p=l.findIndex((A,R)=>R>0&&A!==void 0),h=this.matchIndexes[p];return l.splice(0,p),Object.assign(l,h)}}class c{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const l=new t;return this.rules.slice(s).forEach(([p,h])=>l.addRule(p,h)),l.compile(),this.multiRegexes[s]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,l){this.rules.push([s,l]),l.type==="begin"&&this.count++}exec(s){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let p=l.exec(s);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const h=this.getMatcher(0);h.lastIndex=this.lastIndex+1,p=h.exec(s)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}function b(a){const s=new c;return a.contains.forEach(l=>s.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&s.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&s.addRule(a.illegal,{type:"illegal"}),s}function S(a,s){const l=a;if(a.isCompiled)return l;[Ln,Pn,Xn,$n].forEach(h=>h(a,s)),e.compilerExtensions.forEach(h=>h(a,s)),a.__beforeBegin=null,[Bn,Dn,Un].forEach(h=>h(a,s)),a.isCompiled=!0;let p=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),p=a.keywords.$pattern,delete a.keywords.$pattern),p=p||/\w+/,a.keywords&&(a.keywords=ze(a.keywords,e.case_insensitive)),l.keywordPatternRe=n(p,!0),s&&(a.begin||(a.begin=/\B|\b/),l.beginRe=n(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=n(l.end)),l.terminatorEnd=V(l.end)||"",a.endsWithParent&&s.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+s.terminatorEnd)),a.illegal&&(l.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(h){return qn(h==="self"?a:h)})),a.contains.forEach(function(h){S(h,l)}),a.starts&&S(a.starts,s),l.matcher=b(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=H(e.classNameAliases||{}),S(e)}function Ze(e){return e?e.endsWithParent||Ze(e.starts):!1}function qn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return H(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Ze(e)?H(e,{starts:e.starts?H(e.starts):null}):Object.isFrozen(e)?H(e):e}var jn="11.9.0";class Jn extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const he=Pe,Ce=H,ve=Symbol("nomatch"),Vn=7,Xe=function(e){const n=Object.create(null),t=Object.create(null),c=[];let b=!0;const S="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:un};function l(i){return s.noHighlightRe.test(i)}function p(i){let o=i.className+" ";o+=i.parentNode?i.parentNode.className:"";const f=s.languageDetectRe.exec(o);if(f){const _=L(f[1]);return _||(Ie(S.replace("{}",f[1])),Ie("Falling back to no-highlight mode for this block.",i)),_?f[1]:"no-highlight"}return o.split(/\s+/).find(_=>l(_)||L(_))}function h(i,o,f){let _="",y="";typeof o=="object"?(_=i,f=o.ignoreIllegals,y=o.language):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),y=i,_=o),f===void 0&&(f=!0);const O={code:_,language:y};Y("before:highlight",O);const k=O.result?O.result:A(O.language,O.code,f);return k.code=O.code,Y("after:highlight",k),k}function A(i,o,f,_){const y=Object.create(null);function O(r,u){return r.keywords[u]}function k(){if(!g.keywords){M.addText(N);return}let r=0;g.keywordPatternRe.lastIndex=0;let u=g.keywordPatternRe.exec(N),d="";for(;u;){d+=N.substring(r,u.index);const E=D.case_insensitive?u[0].toLowerCase():u[0],T=O(g,E);if(T){const[P,Qe]=T;if(M.addText(d),d="",y[E]=(y[E]||0)+1,y[E]<=Vn&&(re+=Qe),P.startsWith("_"))d+=u[0];else{const en=D.classNameAliases[P]||P;B(u[0],en)}}else d+=u[0];r=g.keywordPatternRe.lastIndex,u=g.keywordPatternRe.exec(N)}d+=N.substring(r),M.addText(d)}function ie(){if(N==="")return;let r=null;if(typeof g.subLanguage=="string"){if(!n[g.subLanguage]){M.addText(N);return}r=A(g.subLanguage,N,!0,we[g.subLanguage]),we[g.subLanguage]=r._top}else r=C(N,g.subLanguage.length?g.subLanguage:null);g.relevance>0&&(re+=r.relevance),M.__addSublanguage(r._emitter,r.language)}function I(){g.subLanguage!=null?ie():k(),N=""}function B(r,u){r!==""&&(M.startScope(u),M.addText(r),M.endScope())}function Ne(r,u){let d=1;const E=u.length-1;for(;d<=E;){if(!r._emit[d]){d++;continue}const T=D.classNameAliases[r[d]]||r[d],P=u[d];T?B(P,T):(N=P,k(),N=""),d++}}function ye(r,u){return r.scope&&typeof r.scope=="string"&&M.openNode(D.classNameAliases[r.scope]||r.scope),r.beginScope&&(r.beginScope._wrap?(B(N,D.classNameAliases[r.beginScope._wrap]||r.beginScope._wrap),N=""):r.beginScope._multi&&(Ne(r.beginScope,u),N="")),g=Object.create(r,{parent:{value:g}}),g}function Re(r,u,d){let E=pn(r.endRe,d);if(E){if(r["on:end"]){const T=new Te(r);r["on:end"](u,T),T.isMatchIgnored&&(E=!1)}if(E){for(;r.endsParent&&r.parent;)r=r.parent;return r}}if(r.endsWithParent)return Re(r.parent,u,d)}function Ye(r){return g.matcher.regexIndex===0?(N+=r[0],1):(pe=!0,0)}function qe(r){const u=r[0],d=r.rule,E=new Te(d),T=[d.__beforeBegin,d["on:begin"]];for(const P of T)if(P&&(P(r,E),E.isMatchIgnored))return Ye(u);return d.skip?N+=u:(d.excludeBegin&&(N+=u),I(),!d.returnBegin&&!d.excludeBegin&&(N=u)),ye(d,r),d.returnBegin?0:u.length}function je(r){const u=r[0],d=o.substring(r.index),E=Re(g,r,d);if(!E)return ve;const T=g;g.endScope&&g.endScope._wrap?(I(),B(u,g.endScope._wrap)):g.endScope&&g.endScope._multi?(I(),Ne(g.endScope,r)):T.skip?N+=u:(T.returnEnd||T.excludeEnd||(N+=u),I(),T.excludeEnd&&(N=u));do g.scope&&M.closeNode(),!g.skip&&!g.subLanguage&&(re+=g.relevance),g=g.parent;while(g!==E.parent);return E.starts&&ye(E.starts,r),T.returnEnd?0:u.length}function Je(){const r=[];for(let u=g;u!==D;u=u.parent)u.scope&&r.unshift(u.scope);r.forEach(u=>M.openNode(u))}let se={};function Ae(r,u){const d=u&&u[0];if(N+=r,d==null)return I(),0;if(se.type==="begin"&&u.type==="end"&&se.index===u.index&&d===""){if(N+=o.slice(u.index,u.index+1),!b){const E=new Error(`0 width match regex (${i})`);throw E.languageName=i,E.badRule=se.rule,E}return 1}if(se=u,u.type==="begin")return qe(u);if(u.type==="illegal"&&!f){const E=new Error('Illegal lexeme "'+d+'" for mode "'+(g.scope||"<unnamed>")+'"');throw E.mode=g,E}else if(u.type==="end"){const E=je(u);if(E!==ve)return E}if(u.type==="illegal"&&d==="")return 1;if(de>1e5&&de>u.index*3)throw new Error("potential infinite loop, way more iterations than matches");return N+=d,d.length}const D=L(i);if(!D)throw K(S.replace("{}",i)),new Error('Unknown language: "'+i+'"');const Ve=Yn(D);let fe="",g=_||Ve;const we={},M=new s.__emitter(s);Je();let N="",re=0,G=0,de=0,pe=!1;try{if(D.__emitTokens)D.__emitTokens(o,M);else{for(g.matcher.considerAll();;){de++,pe?pe=!1:g.matcher.considerAll(),g.matcher.lastIndex=G;const r=g.matcher.exec(o);if(!r)break;const u=o.substring(G,r.index),d=Ae(u,r);G=r.index+d}Ae(o.substring(G))}return M.finalize(),fe=M.toHTML(),{language:i,value:fe,relevance:re,illegal:!1,_emitter:M,_top:g}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:i,value:he(o),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:G,context:o.slice(G-100,G+100),mode:r.mode,resultSoFar:fe},_emitter:M};if(b)return{language:i,value:he(o),illegal:!1,relevance:0,errorRaised:r,_emitter:M,_top:g};throw r}}function R(i){const o={value:he(i),illegal:!1,relevance:0,_top:a,_emitter:new s.__emitter(s)};return o._emitter.addText(i),o}function C(i,o){o=o||s.languages||Object.keys(n);const f=R(i),_=o.filter(L).filter(ne).map(I=>A(I,i,!1));_.unshift(f);const y=_.sort((I,B)=>{if(I.relevance!==B.relevance)return B.relevance-I.relevance;if(I.language&&B.language){if(L(I.language).supersetOf===B.language)return 1;if(L(B.language).supersetOf===I.language)return-1}return 0}),[O,k]=y,ie=O;return ie.secondBest=k,ie}function m(i,o,f){const _=o&&t[o]||f;i.classList.add("hljs"),i.classList.add(`language-${_}`)}function x(i){let o=null;const f=p(i);if(l(f))return;if(Y("before:highlightElement",{el:i,language:f}),i.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",i);return}if(i.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(i)),s.throwUnescapedHTML))throw new Jn("One of your code blocks includes unescaped HTML.",i.innerHTML);o=i;const _=o.textContent,y=f?h(_,{language:f,ignoreIllegals:!0}):C(_);i.innerHTML=y.value,i.dataset.highlighted="yes",m(i,f,y.language),i.result={language:y.language,re:y.relevance,relevance:y.relevance},y.secondBest&&(i.secondBest={language:y.secondBest.language,relevance:y.secondBest.relevance}),Y("after:highlightElement",{el:i,result:y,text:_})}function U(i){s=Ce(s,i)}const F=()=>{w(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function W(){w(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Z=!1;function w(){if(document.readyState==="loading"){Z=!0;return}document.querySelectorAll(s.cssSelector).forEach(x)}function $(){Z&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",$,!1);function v(i,o){let f=null;try{f=o(e)}catch(_){if(K("Language definition for '{}' could not be registered.".replace("{}",i)),b)K(_);else throw _;f=a}f.name||(f.name=i),n[i]=f,f.rawDefinition=o.bind(null,e),f.aliases&&ee(f.aliases,{languageName:i})}function J(i){delete n[i];for(const o of Object.keys(t))t[o]===i&&delete t[o]}function X(){return Object.keys(n)}function L(i){return i=(i||"").toLowerCase(),n[i]||n[t[i]]}function ee(i,{languageName:o}){typeof i=="string"&&(i=[i]),i.forEach(f=>{t[f.toLowerCase()]=o})}function ne(i){const o=L(i);return o&&!o.disableAutodetect}function le(i){i["before:highlightBlock"]&&!i["before:highlightElement"]&&(i["before:highlightElement"]=o=>{i["before:highlightBlock"](Object.assign({block:o.el},o))}),i["after:highlightBlock"]&&!i["after:highlightElement"]&&(i["after:highlightElement"]=o=>{i["after:highlightBlock"](Object.assign({block:o.el},o))})}function ue(i){le(i),c.push(i)}function ge(i){const o=c.indexOf(i);o!==-1&&c.splice(o,1)}function Y(i,o){const f=i;c.forEach(function(_){_[f]&&_[f](o)})}function te(i){return q("10.7.0","highlightBlock will be removed entirely in v12.0"),q("10.7.0","Please use highlightElement now."),x(i)}Object.assign(e,{highlight:h,highlightAuto:C,highlightAll:w,highlightElement:x,highlightBlock:te,configure:U,initHighlighting:F,initHighlightingOnLoad:W,registerLanguage:v,unregisterLanguage:J,listLanguages:X,getLanguage:L,registerAliases:ee,autoDetection:ne,inherit:Ce,addPlugin:ue,removePlugin:ge}),e.debugMode=function(){b=!1},e.safeMode=function(){b=!0},e.versionString=jn,e.regex={concat:z,lookahead:Ue,either:be,optional:fn,anyNumberOfTimes:gn};for(const i in ae)typeof ae[i]=="object"&&De(ae[i]);return Object.assign(e,ae),e},j=Xe({});j.newInstance=()=>Xe({});var Qn=j;j.HighlightJS=j;j.default=j;const st=nn(Qn);export{st as H,nt as c,tt as j,it as p};
