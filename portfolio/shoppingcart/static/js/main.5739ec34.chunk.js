(this["webpackJsonpshopping-cart-reactjs"]=this["webpackJsonpshopping-cart-reactjs"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__fOJv2",control:"Checkout_control__VHv-L",actions:"Checkout_actions__A6AQb",submit:"Checkout_submit__2NuRo",invalid:"Checkout_invalid__13y7N"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1_nO1",total:"Cart_total__sBhs3",actions:"Cart_actions__1xfq1","button--alt":"Cart_button--alt__17Ssf",button:"Cart_button__1iPg4"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__287H-","meals-appear":"AvailableMeals_meals-appear__1yfR9",mealsloading:"AvailableMeals_mealsloading__j_TDW",mealserror:"AvailableMeals_mealserror__3IkFU"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__35qsT",summary:"CartItem_summary__L-512",price:"CartItem_price__3CEzU",amount:"CartItem_amount__mbWw7",actions:"CartItem_actions__1l8Ro"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__EsNtz",icon:"HeaderCartButton_icon__3HDxG",badge:"HeaderCartButton_badge__TX4W6",bump:"HeaderCartButton_bump__26Dzk"}},,function(e,t,n){e.exports={meal:"MealItem_meal__24JMx",description:"MealItem_description__2CQ-3",price:"MealItem_price__2Dsmm"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1IbMg",modal:"Modal_modal__3tjTl","slide-down":"Modal_slide-down__2klsn"}},,,,function(e,t,n){e.exports={header:"Header_header__3_vG9","main-image":"Header_main-image__2p7Qy"}},,function(e,t,n){e.exports={card:"Card_card__2Okl3"}},function(e,t,n){e.exports={input:"Input_input__1K4WW"}},function(e,t,n){e.exports={form:"MealItemForm_form__1MSe0"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(26),n(2)),s=n(1),i=n.n(s),o=n(16),l=n(4),u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),d={items:[],totalAmount:0},m=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(l.a)(Object(l.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(o.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,u=e.items.findIndex((function(e){return e.id===t.id})),j=e.items[u],m=e.totalAmount-j.price;if(1===j.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(l.a)(Object(l.a)({},j),{},{amount:j.amount-1});(i=Object(o.a)(e.items))[u]=b}return{items:i,totalAmount:m}}return t.type,d},b=function(e){var t=Object(s.useReducer)(m,d),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(j.jsx)(u.Provider,{value:i,children:e.children})},O=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},h=n(10),x=n.n(h),p=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(x.a.button," ").concat(a?x.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(j.jsxs)("button",{className:l,onClick:e.onShowCart,children:[Object(j.jsx)("span",{className:x.a.icon,children:Object(j.jsx)(O,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:x.a.badge,children:o})]})},f=n(17),_=n.n(f),v=function(e){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("header",{className:_.a.header,children:[Object(j.jsx)("h1",{children:Object(j.jsx)("a",{style:{color:"white",textDecoration:"none"},href:"./",children:"QUICK WebStore"})}),Object(j.jsx)(p,{onShowCart:e.onShowCart})]})})},C=n(15),N=n.n(C),g=n(18),y=n(19),A=n.n(y),S=function(e){return Object(j.jsx)("div",{className:"".concat(A.a.card," ").concat(e.className?e.className:""),children:e.children})},k=n(20),I=n.n(k),w=i.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:I.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(l.a)({ref:t,id:e.input.id},e.input))]})})),M=n(21),F=n.n(M),R=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(j.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>12?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(w,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"12",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-12)"})]})},H=n(12),E=n.n(H),T=function(e){var t=Object(s.useContext)(u),n="$".concat(e.meal.price.toFixed(2));return Object(j.jsxs)("li",{className:E.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.meal.name}),Object(j.jsx)("div",{className:E.a.description,children:e.meal.description}),Object(j.jsx)("div",{className:E.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{id:e.meal.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},D=n(6),P=n.n(D),B=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)(null),d=Object(r.a)(u,2),m=d[0],b=d[1];if(Object(s.useEffect)((function(){l(!0),function(){var e=Object(g.a)(N.a.mark((function e(){var t,n,c,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://http-react-791ad-default-rtdb.europe-west1.firebasedatabase.app/meals.json",{});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,console.log(n,t.ok),c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),l(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(j.jsx)("section",{className:"".concat(P.a.meals," ").concat(P.a.mealsloading),children:Object(j.jsx)(S,{children:Object(j.jsx)("p",{children:"Loading..."})})});if(m)return Object(j.jsx)("section",{className:"".concat(P.a.meals," ").concat(P.a.mealserror),children:Object(j.jsx)(S,{children:Object(j.jsx)("p",{children:m})})});var O=n.map((function(e){return Object(j.jsx)(T,{id:e.id,meal:e,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:P.a.meals,children:Object(j.jsx)(S,{className:"meals-list",children:Object(j.jsx)("ul",{children:O})})})},z=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)(B,{})})},W=n(13),J=n.n(W),L=function(e){return Object(j.jsx)("div",{className:J.a.backdrop,onClick:e.onTutup})},Q=function(e){return Object(j.jsx)("div",{className:J.a.modal,children:Object(j.jsx)("div",{className:J.a.content,children:e.children})})},V=document.getElementById("overlays"),U=function(e){return Object(j.jsxs)(i.a.Fragment,{children:[c.a.createPortal(Object(j.jsx)(L,{onTutup:e.onShut}),V),c.a.createPortal(Object(j.jsx)(Q,{children:e.children}),V)]})},$=n(7),q=n.n($),G=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:q.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:q.a.summary,children:[Object(j.jsx)("span",{className:q.a.price,children:t}),Object(j.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:q.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(3),Y=n.n(K),X=function(e){return""===e.trim()},Z=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postal:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d="".concat(Y.a.control," ").concat(a.name?"":Y.a.invalid),m="".concat(Y.a.control," ").concat(a.street?"":Y.a.invalid),b="".concat(Y.a.control," ").concat(a.postalCode?"":Y.a.invalid),O="".concat(Y.a.control," ").concat(a.city?"":Y.a.invalid);return Object(j.jsxs)("form",{className:Y.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,j=!X(n),d=!X(a),m=!(r.trim().lenght>=5),b=!X(s);c({name:j,street:d,postal:m,city:b}),j&&d&&m&&b&&e.onConfirm({name:n,street:a,city:s,postal:r})},children:[Object(j.jsxs)("div",{className:d,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(j.jsx)("p",{children:"Please enter a valid name"})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(j.jsx)("p",{children:"Please enter a valid street"})]}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postal&&Object(j.jsx)("p",{children:"Please enter a valid postal code, 5 digits long"})]}),Object(j.jsxs)("div",{className:O,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(j.jsx)("p",{children:"Please enter a valid city"})]}),Object(j.jsxs)("div",{className:Y.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:Y.a.submit,children:"Confirm"})]})]})},ee=n(5),te=n.n(ee),ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),d=Object(r.a)(o,2),m=d[0],b=d[1],O=Object(s.useState)(!1),h=Object(r.a)(O,2),x=h[0],p=h[1],f=Object(s.useContext)(u),_="$".concat(f.totalAmount.toFixed(2)),v=f.items.length>0,C=function(e){f.removeItem(e)},N=function(e){f.addItem(Object(l.a)(Object(l.a)({},e),{},{amount:1}))},g=Object(j.jsx)("ul",{className:te.a["cart-items"],children:f.items.map((function(e){return Object(j.jsx)(G,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),y=Object(j.jsxs)("div",{className:te.a.actions,children:[Object(j.jsx)("button",{className:te.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),v&&Object(j.jsx)("button",{className:te.a.button,onClick:function(){c(!0)},children:"Order"})]}),A=Object(j.jsxs)(i.a.Fragment,{children:[g,Object(j.jsxs)("div",{className:te.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:_})]}),a&&Object(j.jsx)(Z,{onConfirm:function(e){fetch("https://http-react-791ad-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify({user:e,orderedItems:f.items})}),b(!1),p(!0),f.clearCart()},onCancel:e.onCloseCart}),!a&&y]}),S=Object(j.jsx)("p",{children:"Sending order data..."}),k=Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("p",{children:"Successfully sent the order!"}),Object(j.jsx)("div",{className:te.a.actions,children:Object(j.jsx)("button",{className:te.a.button,onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(U,{onShut:e.onCloseCart,children:[!m&&!x&&A,m&&S,!m&&x&&k]})};var ae=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(b,{children:[n&&Object(j.jsx)(ne,{onCloseCart:function(){a(!1)}}),Object(j.jsx)(v,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(z,{})})]})};c.a.render(Object(j.jsx)(ae,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.5739ec34.chunk.js.map