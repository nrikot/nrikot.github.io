(this["webpackJsonpweather-now"]=this["webpackJsonpweather-now"]||[]).push([[0],{12:function(e,s,t){},13:function(e,s,t){},15:function(e,s,t){},17:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(5),i=t.n(n),r=(t(12),t(13),t(7)),j=t(4),d=t.n(j),l=t(6),o=t(2),b=(t(15),t(0));var u=function(e){var s=e.temp,t=e.humidity,a=e.pressure,n=e.weatherType,i=e.name,r=e.speed,j=e.country,d=e.sunset,l=Object(c.useState)(""),u=Object(o.a)(l,2),h=u[0],x=u[1];Object(c.useEffect)((function(){if(n)switch(n){case"Clouds":x("wi-day-cloudy");break;case"Haze":x("wi-fog");break;default:x("wi-day-sunny");break;case"Mist":x("wi-dust");break;case"Rain":x("wi-day-rain")}}),[n]);var O=d;console.log(s);var m=parseFloat(s).toFixed(1),p=new Date(1e3*O),w="".concat(p.getHours(),":").concat(p.getMinutes());return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"widget",children:[Object(b.jsx)("div",{className:"weatherIcon",children:Object(b.jsx)("i",{className:"wi ".concat(h)})}),Object(b.jsxs)("div",{className:"weatherInfo",children:[Object(b.jsx)("div",{className:"temperature",children:Object(b.jsxs)("span",{children:[m,"\xb0C"]})}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("div",{className:"weatherCondition",children:n}),Object(b.jsxs)("div",{className:"place",children:[i,", ",j]})]})]}),Object(b.jsx)("div",{className:"date",children:(new Date).toLocaleString()}),Object(b.jsxs)("div",{className:"extra-temp",children:[Object(b.jsxs)("div",{className:"temp-info-minmax",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-sunset"})}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[w," PM ",Object(b.jsx)("br",{}),"Sunset"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-humidity"})}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[t," ",Object(b.jsx)("br",{}),"Humidity"]})]})]}),Object(b.jsxs)("div",{className:"weather-extra-info",children:[Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-rain"})}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[a," ",Object(b.jsx)("br",{}),"Pressure"]})]}),Object(b.jsxs)("div",{className:"two-sided-section",children:[Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:"wi wi-strong-wind"})}),Object(b.jsxs)("p",{className:"extra-info-leftside",children:[r," ",Object(b.jsx)("br",{}),"Speed"]})]})]})]})]})})};var h=function(){var e=Object(c.useState)("San Francisco"),s=Object(o.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)({}),i=Object(o.a)(n,2),j=i[0],h=i[1],x=function(){var e=Object(l.a)(d.a.mark((function e(){var s,c,a,n,i,r,j,l,o,b,u,x,O;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat("679e2b244b4efa1d9b420c236490aec7"),e.next=4,fetch(s);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,n=a.main,i=n.temp,r=n.humidity,j=n.pressure,l=a.weather[0].main,o=a.name,b=a.wind.speed,u=a.sys,x=u.country,O=u.sunset,h({temp:i,humidity:r,pressure:j,weatherType:l,name:o,speed:b,country:x,sunset:O}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"wrap",children:Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("input",{type:"search",placeholder:"Enter City",id:"search",value:t,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("button",{className:"searchButton",onClick:x,children:"SEARCH"})]})}),Object(b.jsx)(u,Object(r.a)({},j))]})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.49e13353.chunk.js.map