(window.webpackJsonpleagueWebsite=window.webpackJsonpleagueWebsite||[]).push([[0],{33:function(e,t,n){e.exports=n(77)},38:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){var a={"./Emblem_Bronze.png":66,"./Emblem_Challenger.png":67,"./Emblem_Diamond.png":68,"./Emblem_Gold.png":69,"./Emblem_Grandmaster.png":70,"./Emblem_Iron.png":71,"./Emblem_Master.png":72,"./Emblem_Platinum.png":73,"./Emblem_Silver.png":74,"./Emblem_null.png":75};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=65},66:function(e,t,n){e.exports=n.p+"static/media/Emblem_Bronze.39964f7f.png"},67:function(e,t,n){e.exports=n.p+"static/media/Emblem_Challenger.4aaf9754.png"},68:function(e,t,n){e.exports=n.p+"static/media/Emblem_Diamond.c9018327.png"},69:function(e,t,n){e.exports=n.p+"static/media/Emblem_Gold.19be519b.png"},70:function(e,t,n){e.exports=n.p+"static/media/Emblem_Grandmaster.d0d4b62f.png"},71:function(e,t,n){e.exports=n.p+"static/media/Emblem_Iron.1a6b4669.png"},72:function(e,t,n){e.exports=n.p+"static/media/Emblem_Master.4156f1c1.png"},73:function(e,t,n){e.exports=n.p+"static/media/Emblem_Platinum.86ac5170.png"},74:function(e,t,n){e.exports=n.p+"static/media/Emblem_Silver.3a4aa1a5.png"},75:function(e,t,n){e.exports=n.p+"static/media/Emblem_null.12ca6a07.png"},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=(n(38),n(1)),l=n(9);function s(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("responsive"),s=Object(i.a)(o,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){m(n?"right responsive":"right")}),[n]),r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"brand-logo"},r.a.createElement(l.c,{to:"/league-info"},"LeagueInfo")),r.a.createElement("ul",{className:u},r.a.createElement("li",{onClick:function(){return c(!1)}},r.a.createElement(l.c,{to:"/league-info/champions"},"Champions")),r.a.createElement("li",{onClick:function(){return c(!1)}},r.a.createElement(l.c,{to:"/league-info/players"},"Players"))),r.a.createElement("div",{className:"hamburger",onClick:function(){return c(!n)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))))}var u=n(2),m=n(3),f=n.n(m);function d(e){var t=e.search,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],s=c[1];Object(a.useEffect)((function(){var e;return f.a.get("".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","data/en_US/champion.json "),{cancelToken:new f.a.CancelToken((function(t){e=t}))}).then((function(e){s(e.data.data)})),function(){return e()}}),[]);var u=t,m=Object.values(o),d=u?m.map((function(e){var t=new RegExp(u,"i");return e.id.match(t)?r.a.createElement("div",{className:"post card",key:e.key},r.a.createElement(l.b,{to:"/league-info/champions/"+e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_0.jpg"),alt:"splash-art",height:"200",width:"120"}),r.a.createElement("span",{className:"card-title"},e.id),r.a.createElement("p",null,e.title)))):null})):m.map((function(e){return r.a.createElement("div",{className:"post card",key:e.key},r.a.createElement(l.b,{to:"/"+e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_0.jpg"),alt:"splash-art",height:"200",width:"120"}),r.a.createElement("span",{className:"card-title"},e.id),r.a.createElement("p",null,e.title))))}));return d.every((function(e){return void 0===e}))?r.a.createElement("div",{className:"center no-results"},"No results were found"):r.a.createElement("div",{className:"results"},d)}function p(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"container home"},r.a.createElement("h6",{className:"center"},"Type below to search"),r.a.createElement("div",{className:"form-search"},r.a.createElement("form",{action:"",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"center",spellCheck:"false",value:n,type:"text",onChange:function(e){return c(e.target.value)}}))),r.a.createElement(d,{search:n}))}function h(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"center"},"How to Use"),r.a.createElement("h3",null,"This website was created using React.js. ",r.a.createElement("br",null)," Please click the tabs on the navigation bar to use the functions of the website."," ",r.a.createElement("br",null)," The ",r.a.createElement("span",{style:{color:"#ffff"}},"Champions")," tab will display out all the existing champions cards and access to details inside. ",r.a.createElement("br",null)," The"," ",r.a.createElement("span",{style:{color:"#ffff"}},"Players")," tab will allow you to use the Riot API to search up individual player ranks and other information."))}n(15).config();var v=n(30);n(64);function g(e){var t=e.sumId,c=Object(a.useState)([]),o=Object(i.a)(c,2),l=o[0],s=o[1];Object(a.useEffect)((function(){f.a.post("".concat("https://league-info-server.onrender.com/","info"),{sumId:t}).then((function(e){s(e.data[0])})).catch((function(e){console.log(e.response)}))}),[t]);var u=l&&l.tier,m=u?u.toString().charAt(0)+u.toString().toLowerCase().slice(1):null,d=l&&l.rank,p=l&&l.leaguePoints,h=l&&l.wins,v=l&&l.losses,g=n(65),E=g(u?"./Emblem_".concat(m,".png"):"./Emblem_null.png"),b=null!==m?r.a.createElement("div",null,r.a.createElement("div",{className:"ranking"},r.a.createElement("img",{src:E,alt:"rank-icon",height:"270",width:"270"}),r.a.createElement("h3",null,"".concat(m," ").concat(d)),r.a.createElement("h4",null,p," LP")),r.a.createElement("div",{className:"rank-stats"},r.a.createElement("h5",null,"Wins: ",h),r.a.createElement("h5",null,"Losses : ",v))):r.a.createElement("div",null,r.a.createElement("div",{className:"ranking"},r.a.createElement("img",{src:E,alt:"rank-icon",height:"270",width:"270"}),r.a.createElement("h3",null,"Unranked"),r.a.createElement("h4",null,"0 LP")),r.a.createElement("div",{className:"rank-stats"},r.a.createElement("h5",null,"Wins: 0"),r.a.createElement("h5",null,"Losses: 0",v)));return r.a.createElement("div",null,b)}var E=n(32),b=n(31);function y(e){var t=e.champId,n=e.api,c=Object(a.useState)([]),o=Object(i.a)(c,2),l=o[0],s=o[1];Object(a.useEffect)((function(){var e;return f.a.get("".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","data/en_US/champion.json"),{cancelToken:new f.a.CancelToken((function(t){e=t}))}).then((function(e){s(e.data.data)})).catch((function(e){console.log(e.response)})),function(){return e}}),[]);var u=Object.values(l).map((function(e,a){return Number(e.key)===t?r.a.createElement("div",{className:"champ-icon",key:a},r.a.createElement("img",{src:"".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","img/champion/").concat(e.id,".png?api_key=").concat(n),alt:"".concat(e.name,"-icon"),width:"80",height:"80"}),r.a.createElement("h6",null,e.name)):null}));return r.a.createElement("div",null,u)}function w(e){var t=e.matchIds,n=e.champ,c=e.api,o=e.puuid,l=Object(a.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)([]),p=Object(i.a)(d,2),h=p[0],v=p[1];Object(a.useEffect)((function(){var e;if(m([]),t.length)return t.slice(0,10).forEach((function(t){f.a.post("".concat("https://league-info-server.onrender.com/","results"),{matchId:t,cancelToken:new f.a.CancelToken((function(t){e=t}))}).then((function(e){m((function(t){return[].concat(Object(b.a)(t),[Object(E.a)({},e.data)])}))})).catch((function(e){console.log(e)}))})),function(){return e}}),[t]),Object(a.useEffect)((function(){var e;return f.a.get("".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","data/en_US/champion.json"),{cancelToken:new f.a.CancelToken((function(t){e=t}))}).then((function(e){v(e.data.data)})).catch((function(e){console.log(e.response)})),function(){return e}}),[]);var g=10===u.length?u.map((function(e,t){var a=e&&e.info,i=a&&a.gameMode,l=a&&a.gameDuration,s=Math.floor(l/60),u=l%60>=10?l%60:"0".concat(l%60),m="".concat(s," : ").concat(u),f=(a&&a.participants).find((function(e){return e.puuid===o})),d=null===f||void 0===f?void 0:f.championId,p=null===f||void 0===f?void 0:f.deaths,v=null===f||void 0===f?void 0:f.assists,g=null===f||void 0===f?void 0:f.kills,E="".concat(g,"/").concat(p,"/").concat(v),b=(null===f||void 0===f?void 0:f.win)?"green-text":"red-text",w=(null===f||void 0===f?void 0:f.win)?"VICTORY":"DEFEAT",j=Object.values(h).find((function(e){return Number(e.key)===d})),N=new RegExp(n,"i"),O=n?String(j.name).match(N)?"true":"false":"true";return f?O&&r.a.createElement("div",{className:"match-post ".concat(O),key:t},r.a.createElement(y,{champId:d,api:c}),r.a.createElement("div",null,r.a.createElement("h4",{className:b},w),r.a.createElement("h4",{className:b},E)),r.a.createElement("div",{className:"match-body"},r.a.createElement("h4",null,i),r.a.createElement("h5",null,m))):r.a.createElement("div",null,"Loading ...")})):r.a.createElement("div",{className:"error"},"None");return r.a.createElement("div",{className:"match-list"},g)}function j(e){var t=e.puuid,n=e.api,c=(e.sumName,Object(a.useState)([])),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(a.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1];return Object(a.useEffect)((function(){f.a.post("".concat("https://league-info-server.onrender.com/","matches"),{puuid:t}).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[t]),r.a.createElement("div",{className:"match-container"},r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{spellCheck:"false",type:"text",placeholder:"Enter Champion Name",onChange:function(e){return p(e.target.value)}})),r.a.createElement(w,{matchIds:l,api:n,champ:d,puuid:t}))}function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var c=t&&t.prototype instanceof f?t:f,o=Object.create(c.prototype),i=new x(r||[]);return a(o,"_invoke",{value:w(e,n,i)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function f(){}function d(){}function p(){}var h={};l(h,c,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==t&&n.call(g,c)&&(h=g);var E=p.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;a(this,"_invoke",{value:function(a,c){function o(){return new t((function(r,o){!function a(r,c,o,i){var l=u(e[r],e,c);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,i)}))}i(l.arg)}(a,c,r,o)}))}return r=r?r.then(o,o):o()}})}function w(e,t,n){var a="suspendedStart";return function(r,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw c;return L()}for(n.method=r,n.arg=c;;){var o=n.delegate;if(o){var i=j(o,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var c=r.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,a(E,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(y.prototype),l(y.prototype,o,(function(){return this})),e.AsyncIterator=y,e.async=function(t,n,a,r,c){void 0===c&&(c=Promise);var o=new y(s(t,n,a,r),c);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(E),l(E,i,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=_,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function O(e){var t=e.search,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),m=u[0],d=u[1],p="RGAPI-740a65b1-0ab0-40b5-9e24-84900f817e83";Object(a.useEffect)((function(){(function(){var e=Object(v.a)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=5;break}return d(!0),e.next=4,f.a.post("".concat("https://league-info-server.onrender.com/","summoner"),{search:t}).then((function(e){l(e.data)})).catch((function(e){console.log(e)}));case 4:d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var h=o&&o.name,E=o&&o.summonerLevel,b=o&&o.profileIconId,y=o&&o.id,w=o&&o.puuid,O=h?r.a.createElement("div",{className:"result-container"},r.a.createElement("div",{className:"profile-head"},r.a.createElement("img",{src:"".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","img/profileicon/").concat(b,".png?api_key=").concat(p),height:"150",width:"150",alt:"player-icon"}),r.a.createElement("div",{className:"player-name"},r.a.createElement("h1",null,h),r.a.createElement("h4",null,"Level ",E))),r.a.createElement("div",{className:"profile-body"},r.a.createElement(g,{sumId:y,api:p})),r.a.createElement(j,{puuid:w,api:p,sumName:h})):m?r.a.createElement("div",{className:"error"},r.a.createElement("h5",null,"Loading ...")):r.a.createElement("div",{className:"error"},r.a.createElement("h5",null,"No results"));return r.a.createElement("div",null,O)}function k(){var e=Object(a.useRef)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"container home"},r.a.createElement("h6",{className:"center"},"Enter Summoner ID to search"),r.a.createElement("div",{className:"form-search"},r.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),o(e.current.value)}},r.a.createElement("input",{className:"center",spellCheck:"false",type:"text",ref:e}))),r.a.createElement(O,{search:c}))}n(15).config(),n(15).config();n(76);function x(e){var t=e.match,n=Object(a.useState)([]),c=Object(i.a)(n,2),o=c[0],l=c[1];Object(a.useEffect)((function(){f.a.get("".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","data/en_US/champion/").concat(t.params.post_id,".json ")).then((function(e){l(e.data.data)}))}),[t]);var s=Object(a.useState)(0),u=Object(i.a)(s,2),m=u[0],d=u[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),v=h[0],g=h[1],E=Object(a.useState)("skin-screen"),b=Object(i.a)(E,2),y=b[0],w=b[1];Object(a.useEffect)((function(){w(v?"skin-screen open":"skin-screen")}),[v]);var j=Object.values(o),N=j?j.map((function(e){return r.a.createElement("div",{className:"main-display",key:e.key},r.a.createElement("div",{className:y},r.a.createElement("div",{className:"skin-select"},e.skins.map((function(t,n){return r.a.createElement("img",{key:n,onClick:function(){d(t.num),g(!1)},src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_").concat(t.num,".jpg"),alt:"splash-art"})})))),r.a.createElement("div",{className:"main-image"},r.a.createElement("h2",{className:"champ-name"},e.name),r.a.createElement("div",{className:"change-skin"},r.a.createElement("button",{onClick:function(){return g(!0)}},"Change Skin"))," ",r.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_").concat(m,".jpg"),alt:"splash-art"})),r.a.createElement("div",{className:"main-info"},r.a.createElement("div",{className:"skill-set"},e.spells.map((function(e,t){return r.a.createElement("div",{className:"spell-info",key:t},r.a.createElement("img",{src:"".concat("https://ddragon.leagueoflegends.com/cdn/13.9.1/","img/spell/").concat(e.id,".png"),alt:e.id}),r.a.createElement("div",{className:"spell-text"},r.a.createElement("h5",null,e.name),r.a.createElement("div",{className:"spell-body"},r.a.createElement("div",{className:"cd-text"},r.a.createElement("span",null,"Cooldown:"),r.a.createElement("p",null,e.cooldown.map((function(e){return" [".concat(e,"]")})))),r.a.createElement("div",{className:"cost-text"},r.a.createElement("span",null,e.costType,":"),r.a.createElement("p",null,e.cost.map((function(e){return" [".concat(e,"]")})))))))})))))})):r.a.createElement("div",{className:"center no-result"},"API is not found.");return N.every((function(e){return void 0===e}))?r.a.createElement("div",{className:"center no-results"},"Loading . . ."):r.a.createElement("div",null,N)}var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(s,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/league-info/champions",component:p}),r.a.createElement(u.a,{exact:!0,path:"/league-info/players",component:k}),r.a.createElement(u.a,{exact:!0,path:"/league-info",component:h}),r.a.createElement(u.a,{path:"/league-info/champions/:post_id",component:x}))))};o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9fff7f1d.chunk.js.map