webpackJsonp([25,141],{6:function(n,a,s){"use strict";s(18),s(17),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(13),p=t(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,p["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=s(11);t(e)},13:function(n,a,s){n.exports={"default":s(14),__esModule:!0}},14:function(n,a,s){s(30),s(16),n.exports=s(20).Array.from},15:function(n,a,s){"use strict";var t=s(25),e=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},16:function(n,a,s){"use strict";var t=s(28),e=s(22),p=s(26),o=s(34),c=s(33),l=s(31),u=s(15),i=s(32);e(e.S+e.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),d="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,v=0,b=i(k);if(g&&(m=t(m,f>2?arguments[2]:void 0,2)),void 0==b||d==Array&&c(b))for(a=l(k.length),s=new d(a);a>v;v++)u(s,v,g?m(k[v],v):k[v]);else for(r=b.call(k),s=new d;!(e=r.next()).done;v++)u(s,v,g?o(r,m,[e.value,v],!0):e.value);return s.length=v,s}})},17:function(n,a){},18:function(n,a){},23:function(n,a,s){"use strict";s(36)},36:function(n,a){},43:function(n,a,s){"use strict";s(6),s(23),s(50)},50:function(n,a){},51:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s,t){var e={};if(a&&a.antLocale&&a.antLocale[s])e=a.antLocale[s];else{var p=t();e=p["default"]||p}var o=(0,c["default"])({},e);return n.locale&&(o=(0,c["default"])({},o,n.locale),n.locale.lang&&(o.lang=(0,c["default"])({},e.lang,n.locale.lang))),o}function p(n){var a=n.antLocale&&n.antLocale.locale;return n.antLocale&&n.antLocale.exist&&!a?"zh-cn":a}Object.defineProperty(a,"__esModule",{value:!0});var o=s(2),c=t(o);a.getComponentLocale=e,a.getLocaleCode=p},67:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(10),c=t(o),l=s(3),u=t(l),i=s(5),r=t(i),k=s(4),d=t(k),f=s(1),m=t(f),g=s(7),v=t(g),b=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},y=function(n){function a(){return(0,u["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,e=a.justify,o=a.align,l=a.alignContent,u=a.className,i=a.children,r=a.prefixCls,k=a.style,d=b(a,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),f=(0,v["default"])(r,u,(n={},(0,c["default"])(n,r+"-dir-row","row"===s),(0,c["default"])(n,r+"-dir-row-reverse","row-reverse"===s),(0,c["default"])(n,r+"-dir-column","column"===s),(0,c["default"])(n,r+"-dir-column-reverse","column-reverse"===s),(0,c["default"])(n,r+"-nowrap","nowrap"===t),(0,c["default"])(n,r+"-wrap","wrap"===t),(0,c["default"])(n,r+"-wrap-reverse","wrap-reverse"===t),(0,c["default"])(n,r+"-justify-start","start"===e),(0,c["default"])(n,r+"-justify-end","end"===e),(0,c["default"])(n,r+"-justify-center","center"===e),(0,c["default"])(n,r+"-justify-between","between"===e),(0,c["default"])(n,r+"-justify-around","around"===e),(0,c["default"])(n,r+"-align-start","start"===o),(0,c["default"])(n,r+"-align-center","center"===o),(0,c["default"])(n,r+"-align-end","end"===o),(0,c["default"])(n,r+"-align-baseline","baseline"===o),(0,c["default"])(n,r+"-align-stretch","stretch"===o),(0,c["default"])(n,r+"-align-content-start","start"===l),(0,c["default"])(n,r+"-align-content-end","end"===l),(0,c["default"])(n,r+"-align-content-center","center"===l),(0,c["default"])(n,r+"-align-content-between","between"===l),(0,c["default"])(n,r+"-align-content-around","around"===l),(0,c["default"])(n,r+"-align-content-stretch","stretch"===l),n));return m["default"].createElement("div",(0,p["default"])({className:f,style:k},d),i)},a}(m["default"].Component);a["default"]=y,y.defaultProps={prefixCls:"am-flexbox",align:"center"},n.exports=a["default"]},68:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(2),p=t(e),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),r=t(i),k=s(1),d=t(k),f=s(7),m=t(f),g=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},v=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.children,s=n.className,t=n.prefixCls,e=n.style,o=g(n,["children","className","prefixCls","style"]),c=(0,m["default"])(t+"-item",s);return d["default"].createElement("div",(0,p["default"])({className:c,style:e},o),a)},a}(d["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},69:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(67),p=t(e),o=s(68),c=t(o);p["default"].Item=c["default"],a["default"]=p["default"],n.exports=a["default"]},70:function(n,a,s){"use strict";s(6),s(71)},71:function(n,a){},310:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(10),p=t(e),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),r=t(i),k=s(1),d=t(k),f=s(21),m=t(f),g=s(7),v=t(g),b=s(65),y=t(b),h=s(69),x=t(h),w=s(51),N=function(n){function a(s){(0,c["default"])(this,a);var t=(0,u["default"])(this,n.call(this,s));return t.state={current:s.current},t}return(0,r["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){n.current!==this.state.current&&this.setState({current:n.current})},a.prototype.onChange=function(n){this.setState({current:n}),this.props.onChange&&this.props.onChange(n)},a.prototype.render=function(){var n=this,a=this.props,t=a.prefixCls,e=a.className,o=a.style,c=a.mode,l=a.total,u=a.simple,i=this.state.current,r=(0,w.getComponentLocale)(this.props,this.context,"Pagination",function(){return s(311)}),k=r.prevText,f=r.nextText,m=d["default"].createElement(x["default"],null,d["default"].createElement(x["default"].Item,{className:t+"-wrap-btn "+t+"-wrap-btn-prev"},d["default"].createElement(y["default"],{inline:!0,disabled:i<=1,onClick:function(){return n.onChange(i-1)}},k)),this.props.children?d["default"].createElement(x["default"].Item,null,this.props.children):!u&&d["default"].createElement(x["default"].Item,{className:t+"-wrap","aria-live":"assertive"},d["default"].createElement("span",{className:"active"},i),"/",d["default"].createElement("span",null,l)),d["default"].createElement(x["default"].Item,{className:t+"-wrap-btn "+t+"-wrap-btn-next"},d["default"].createElement(y["default"],{inline:!0,disabled:i>=l,onClick:function(){return n.onChange(n.state.current+1)}},f)));if("number"===c)m=d["default"].createElement("div",{className:t+"-wrap"},d["default"].createElement("span",{className:"active"},i),"/",d["default"].createElement("span",null,l));else if("pointer"===c){for(var g=[],b=0;b<l;b++)g.push(d["default"].createElement("div",{key:"dot-"+b,className:(0,v["default"])(t+"-wrap-dot",(0,p["default"])({},t+"-wrap-dot-active",b+1===i))},d["default"].createElement("span",null)));m=d["default"].createElement("div",{className:t+"-wrap"},g)}var h=(0,v["default"])(t,e);return d["default"].createElement("div",{className:h,style:o},m)},a}(d["default"].Component);a["default"]=N,N.defaultProps={prefixCls:"am-pagination",mode:"button",current:1,total:0,simple:!1,onChange:function(){}},N.contextTypes={antLocale:m["default"].object},n.exports=a["default"]},311:function(n,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={prevText:"\u4e0a\u4e00\u9875",nextText:"\u4e0b\u4e00\u9875"},n.exports=a["default"]},312:function(n,a,s){"use strict";s(6),s(43),s(70),s(344)},344:function(n,a){},633:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],"en-US":[["p","Basic Pagination"]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/pagination/demo/basic.md",id:"components-pagination-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prevText<span class="token punctuation">:</span> <span class="token string">\'Prev\'</span><span class="token punctuation">,</span>\n  nextText<span class="token punctuation">:</span> <span class="token string">\'Next\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button <span class="token keyword">with</span> text and icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-pagination-with-icon<span class="token punctuation">"</span></span>\n      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        prevText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\u4e0a\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        nextText<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>arrow-align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u4e0b\u4e00\u6b65<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hide number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">simple</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show number only<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Point style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pointer<span class="token punctuation">"</span></span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(1),s(23),s(63)),e=n(t),p=(s(312),s(310)),o=n(p),c={prevText:"Prev",nextText:"Next"},l=function(){return a.createElement("div",{className:"pagination-container"},a.createElement("p",{className:"sub-title"},"Button with text"),a.createElement(o["default"],{total:5,current:1,locale:c}),a.createElement("p",{className:"sub-title"},"Button with text and icon"),a.createElement(o["default"],{total:5,className:"custom-pagination-with-icon",current:1,locale:{prevText:a.createElement("span",{className:"arrow-align"},a.createElement(e["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:a.createElement("span",{className:"arrow-align"},"\u4e0b\u4e00\u6b65",a.createElement(e["default"],{type:"right"}))}}),a.createElement("p",{className:"sub-title"},"Hide number"),a.createElement(o["default"],{simple:!0,total:5,current:1,locale:c}),a.createElement("p",{className:"sub-title"},"Show number only"),a.createElement(o["default"],{mode:"number",total:5,current:3}),a.createElement("p",{className:"sub-title"},"Point style"),a.createElement(o["default"],{mode:"pointer",total:5,current:2,style:{marginBottom:"16px"}}))};return a.createElement(l,null)},style:".pagination-container {\n  margin: 0 15px;\n}\n\n.custom-pagination-with-icon .am-pagination-wrap-btn-prev .am-button-inline{\n  padding-left: 0;\n  padding-right: 10px;\n}\n.custom-pagination-with-icon .am-pagination-wrap-btn-next .am-button-inline{\n  padding-left: 10px;\n  padding-right: 0;\n}\n.arrow-align {\n  display: flex;\n  align-items: center;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.pagination-container</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-prev</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-pagination-with-icon</span> <span class="token class">.am-pagination-wrap-btn-next</span> <span class="token class">.am-button-inline</span></span><span class="token punctuation">{</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.arrow-align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},734:function(n,a,s){n.exports={basic:s(633)}}});