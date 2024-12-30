(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),o=a(12),i=a(2);a(31);var u=function(){var e=Object(i.g)();return c.a.createElement("header",{className:"navigation"},c.a.createElement("div",{className:"navigation-content"},c.a.createElement("div",{className:"logo"},c.a.createElement("button",{onClick:function(){e.push("/React-Countries")}},c.a.createElement("h1",null,"Where in the world?"))),c.a.createElement("div",{className:"theme-toggle"},c.a.createElement("button",{onClick:function(){document.querySelector(":root").classList.toggle("dark-mode")}},c.a.createElement("i",{className:"far fa-moon"}),"Dark Mode"))))},s=a(11),m=a.n(s),E=a(16),f=a(8),d=a(4),p=(a(38),a(18));function v(e){var t=e.country,a=Object(i.g)();return c.a.createElement("div",{className:"countries-card",onClick:function(){!function(e){a.push("/React-Countries/".concat(e.cca3))}(t)}},c.a.createElement("img",{loading:"lazy",src:t.flags.svg,alt:t.name.common}),c.a.createElement("div",{className:"card-description"},c.a.createElement("h2",null,t.name.common),c.a.createElement("ul",{className:"card-info"},c.a.createElement("li",null,c.a.createElement("b",null,"Population: "),c.a.createElement(p.a,{value:t.population,displayType:"text",thousandSeparator:!0,renderText:function(e){return c.a.createElement("span",null," ",e)}})),c.a.createElement("li",null,c.a.createElement("b",null,"Region: "),t.region),c.a.createElement("li",null,c.a.createElement("b",null,"Capital: "),t.capital))))}a(39);function b(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.filterName})),a=Object(n.useState)(t||""),l=Object(f.a)(a,2),r=l[0],o=l[1];return c.a.createElement("div",{className:"search-input"},c.a.createElement("i",{className:"fas fa-search"}),c.a.createElement("input",{type:"text",placeholder:"Search for a country...",value:r,onChange:function(t){var a;a=t.target.value,o(a),e({type:"FILTER_COUNTRY_BY_NAME",payload:a})}}))}a(40);function g(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.filterName})),a=Object(d.c)((function(e){return e.filterRegion})),l=Object(n.useState)(a||"Filter by region"),r=Object(f.a)(l,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){!function(){var e=document.querySelector(".custom-options"),t=document.querySelector(".custom-select");window.addEventListener("click",(function(a){a.target!==t?e.classList.remove("show-select-options"):e.classList.toggle("show-select-options")}))}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"custom-select-wrapper"},c.a.createElement("div",{className:"custom-select"},c.a.createElement("div",{className:"custom-select-trigger"},c.a.createElement("span",null,o),c.a.createElement("i",{className:"fas fa-chevron-down"}))),c.a.createElement("div",{className:"custom-options"},[{name:"Unfiltered",value:""},{name:"Africa",value:"Africa"},{name:"America",value:"Americas"},{name:"Asia",value:"Asia"},{name:"Europe",value:"Europe"},{name:"Oceania",value:"Oceania"}].map((function(a,n){return c.a.createElement("span",{key:n,onClick:function(){!function(a){var n=a.name,c=a.value;i(n),e({type:"FILTER_COUNTRY_BY_REGION",payload:c}),e({type:"FILTER_COUNTRY_BY_NAME",payload:t})}(a)}},a.name)})))))}a(41);function y(){return c.a.createElement("div",{className:"loading-background"},c.a.createElement("div",{className:"lds-ripple"},c.a.createElement("div",null),c.a.createElement("div",null)))}a(42);function N(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.filterName})),a=Object(d.c)((function(e){return e.filterRegion})),l=Object(d.c)((function(e){return""!==t?e.countryListByName:""!==a?e.countryListByRegion:e.countryList})),r=Object(n.useState)(!1),o=Object(f.a)(r,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){(function(){var t=Object(E.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://restcountries.com/v3.1/all",t.next=3,fetch("https://restcountries.com/v3.1/all").then((function(e){return e.json()})).then((function(t){404!==t.status&&400!==t.status&&(u(!0),console.log(t),e({type:"SET_COUNTRY_LIST",payload:t}))})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),i?c.a.createElement("section",{className:"countries-list"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"search"},c.a.createElement(b,null),c.a.createElement(g,null)),l&&c.a.createElement("div",{className:"cards-grid"},l.map((function(e,t){return c.a.createElement(v,{country:e,key:t})})))),0===l.length&&c.a.createElement("h2",{className:"not-found"},"Country not found")):c.a.createElement(y,null)}a(43);function O(){var e=Object(i.h)().code,t="https://restcountries.com/v3.1/alpha/",a=Object(i.g)(),l=Object(n.useState)({}),r=Object(f.a)(l,2),o=r[0],u=r[1],s=Object(n.useState)(!1),d=Object(f.a)(s,2),v=d[0],b=d[1];Object(n.useEffect)((function(){(function(){var a=Object(E.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(t).concat(e.toLowerCase())).then((function(e){return e.json()})).then((function(e){console.log(e),404!==e.status&&(u(e[0]),b(!0))}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e,t]);var g;return v?c.a.createElement("section",{className:"detail-view"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"back-btn"},c.a.createElement("button",{onClick:function(){a.goBack()}},c.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),"Back")),c.a.createElement("div",{className:"detail-wrapper"},c.a.createElement("div",{className:"country-img"},c.a.createElement("img",{src:o.flags.svg,alt:o.flags.alt})),c.a.createElement("div",{className:"country-info"},c.a.createElement("div",{className:"info-wrapper"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,o.name.common)),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"left-info"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Native name:")," ",o.name.common),c.a.createElement("li",null,c.a.createElement("b",null,"Population: "),c.a.createElement(p.a,{value:o.population,displayType:"text",thousandSeparator:!0,renderText:function(e){return c.a.createElement("span",null," ",e)}})),c.a.createElement("li",null,c.a.createElement("b",null,"Region:")," ",o.region),c.a.createElement("li",null,c.a.createElement("b",null,"Subregion:")," ",o.subregion),c.a.createElement("li",null,c.a.createElement("b",null,"Capital:")," ",o.capital))),c.a.createElement("div",{className:"right-info"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Top level domains:")," ",o.tld),c.a.createElement("li",null,c.a.createElement("b",null,"Currencies: "),Object.keys(o.currencies)),c.a.createElement("li",null,c.a.createElement("b",null,"Languages: "),Object.values(o.languages))))),c.a.createElement("div",{className:"bottom-info"},c.a.createElement("b",null,"Border countries: "),null===(g=o.borders)||void 0===g?void 0:g.map((function(e,t){return c.a.createElement("label",{className:"chip",key:t},e)})))))))):c.a.createElement(y,null)}var h=a(9),j=a(17);var R=Object(j.b)((function(e,t){switch(t.type){case"SET_COUNTRY_LIST":return Object(h.a)(Object(h.a)({},e),{},{countryList:t.payload});case"FILTER_COUNTRY_BY_NAME":var a;return a=""!==e.filterRegion?e.countryListByRegion.filter((function(e){return e.name.common.toLowerCase().includes(t.payload.toLowerCase())})):e.countryList.filter((function(e){return e.name.common.toLowerCase().includes(t.payload.toLowerCase())})),Object(h.a)(Object(h.a)({},e),{},{countryListByName:a,filterName:t.payload});case"FILTER_COUNTRY_BY_REGION":var n=e.countryList.filter((function(e){return e.region===t.payload}));return Object(h.a)(Object(h.a)({},e),{},{countryListByRegion:n,filterRegion:t.payload});default:return e}}),{countryList:[],countryListByName:[],countryListByRegion:[],filterRegion:"",filterName:""});var L=function(){return c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:R},c.a.createElement(o.a,null,c.a.createElement(u,null),c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/React-Countries",component:N}),c.a.createElement(i.b,{path:"/React-Countries/:code",component:O}),c.a.createElement(i.a,{from:"/",to:"/React-Countries"})))))};a(44);r.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1f63fb9d.chunk.js.map