!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"body{\n    background-color: aqua;\n}",""])},function(t,e,n){"use strict";t.exports=function(n){var s=[];return s.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(r),a=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var a=0;a<t.length;a++){var i=t[a];null!=i[0]&&n[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="(".concat(i[2],") and (").concat(e,")")),s.push(i))}},s}},function(t,e,o){"use strict";var n,r,l={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=(r={},function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]});function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=l[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{for(var i=[];a<r.parts.length;a++)i.push(b(r.parts[a],e));l[r.id]={id:r.id,refs:1,parts:i}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var t=o.nc;t&&(e.attributes.nonce=t)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var u,c=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=c(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}var v=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var a=h++;n=v=v||s(t),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=function(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(t){if(null===t.parentNode)return;t.parentNode.removeChild(t)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}t.exports=function(t,u){(u=u||{}).attributes="object"==typeof u.attributes?u.attributes:{},u.singleton||"boolean"==typeof u.singleton||(u.singleton=a());var c=f(t,u);return d(c,u),function(t){for(var e=[],n=0;n<c.length;n++){var r=c[n],o=l[r.id];o&&(o.refs--,e.push(o))}t&&d(f(t,u),u);for(var a=0;a<e.length;a++){var i=e[a];if(0===i.refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete l[i.id]}}}}},function(t,e,n){"use strict";n.r(e);var r={anounce:function(t){alert(t)},log:function(t){console.log(t)}};new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),alert("Yeh form classes are awsome no mater what the browser is ");var e=[2,4,8].map(function(t){return 2*t});console.log(e)},n(0),r.log("Its an console log")}]);