(this["webpackJsonpmern-frontend-places"]=this["webpackJsonpmern-frontend-places"]||[]).push([[6],{68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),c=a(14),l=a(5),s=a(0),m=a.n(s),i=a(3),u=(a(68),function(e){return m.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},m.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),o=a(19),p=(a(69),function(e){return m.a.createElement("li",{className:"user-item"},m.a.createElement(o.a,{className:"user-item__content"},m.a.createElement(i.b,{to:"/portfolio/mern-places/".concat(e.id,"/places")},m.a.createElement("div",{className:"user-item__image"},m.a.createElement(u,{image:"".concat("https://mern-bwa.herokuapp.com","/").concat(e.image),alt:e.name})),m.a.createElement("div",{className:"user-item__info"},m.a.createElement("h2",null,e.name),m.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),f=(a(70),function(e){return 0===e.items.length?m.a.createElement("div",{className:"center"},m.a.createElement(o.a,null,m.a.createElement("h2",null,"No users found."))):m.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return m.a.createElement(p,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))}),E=a(17),h=a(13),d=a(18);t.default=function(){var e=Object(d.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,i=e.clearError,u=Object(s.useState)(),o=Object(l.a)(u,2),p=o[0],v=o[1];return Object(s.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://mern-bwa.herokuapp.com/api/users");case 3:t=e.sent,v(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{error:a,onClear:i}),t&&m.a.createElement("div",{className:"center"},m.a.createElement(h.a,null)),!t&&p&&m.a.createElement(f,{items:p}))}}}]);
//# sourceMappingURL=6.269935d9.chunk.js.map