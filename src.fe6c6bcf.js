parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],s=document.querySelector('[data-action="start"]'),e=document.querySelector('[data-action="stop"]'),r=document.querySelector("body");class a{constructor(t,s,e,r){this.colors=t,this.place=r,this.intervalId=null,this.startBtn=s,this.stopBtn=e}randomIntegerFromInterval(t,s){return Math.floor(Math.random()*(s-t+1)+t)}placeColor(){this.place.style.backgroundColor=this.colors[this.randomIntegerFromInterval(0,this.colors.length-1)]}startSwitch(){this.startBtn.addEventListener("click",()=>{this.intervalId=setInterval(()=>{this.placeColor(this.place)},1e3),this.startBtn.disabled=!0})}stopSwitch(){this.stopBtn.addEventListener("click",()=>{clearInterval(this.intervalId),this.startBtn.disabled=!1})}}const o=new a(t,s,e,r);o.startSwitch(),o.stopSwitch();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-12-countries/src.fe6c6bcf.js.map