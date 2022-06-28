(this.webpackJsonppostings=this.webpackJsonppostings||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),c=n(29),a=n.n(c),r=(n(45),n(46),n(47),n(11)),s=n(8),l=n(12),u=n(13),p=n(23),d="LOAD_POSTS_REQUEST",j="LOAD_POSTS_SUCCESS",m="LOAD_POSTS_FAILURE",b="FILTER_POSTS_BY_LOCATION_REQUEST",h="FILTER_POSTS_BY_TYPE_REQUEST",v="FILTER_POSTS_BY_TYPE_AND_LOCATION_REQUEST",O="FILTER_POSTS_SUCCESS",f="FILTER_POSTS_FAILURE",g=n(1),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"slider"})}}]),n}(o.a.Component),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.location_address,i=e.location_zone,o=e.location_city,c=e.description;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{className:"description-title",children:[" ",t," "]}),Object(g.jsxs)("div",{children:[n&&Object(g.jsxs)("span",{className:"post-special-text",children:[" ",n,", "]}),i&&Object(g.jsxs)("span",{className:"post-special-text",children:[" ",i,", "]}),o&&Object(g.jsxs)("span",{className:"post-special-text",children:[" ",o," "]})]}),Object(g.jsx)("div",{className:"description-container",children:Object(g.jsxs)("div",{className:"description-text",children:[" ",c," "]})})]})}}]),n}(o.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).formatMoney=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:",",c=Math.floor(t/Math.pow(10,3+n)),a=t%Math.pow(10,3+n),r=a.toString();r.length<3;)r="0"+r;var s=null;if("USD"===e)s="US";else s="$";if(n){var l=t%Math.pow(10,n);return"".concat(s).concat(c).concat(o).concat(r).concat(i).concat(l)}Math.pow(10,n);return"".concat(s).concat(c).concat(o).concat(r)},i.state={price:0,expenses:0},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.priceCurrency,n=e.priceAmount,i=e.expensesCurrency,o=e.expensesAmount,c=this.formatMoney(t,n,0,"","."),a=null;o&&(a=this.formatMoney(i,o,0,"",".")),this.setState({price:c,expenses:a})}},{key:"render",value:function(){var e=this.state,t=e.price,n=e.expenses;return Object(g.jsxs)("div",{className:"post-price-container",children:[Object(g.jsx)("div",{className:"price",children:t}),n&&Object(g.jsxs)("span",{children:["+ ",n," Expensas"]})]})}}]),n}(o.a.Component),S=y,T=n(36),w=n.n(T),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).setReorderedDate=function(e){if(e.includes("/")){var t=e.split("/"),n=t[0],i=t[1],o=t[2];return"".concat(i,"/").concat(n,"/").concat(o)}},i.state={publish_dates_count:0},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.publish_date,n=(e.posting_id,this.setReorderedDate(t)),i=new Date(n),o=new Date,c=Math.abs(o-i),a=Math.ceil(c/864e5);this.setState({publish_dates_count:a})}},{key:"render",value:function(){var e=this.state.publish_dates_count;return Object(g.jsxs)("span",{className:"post-special-text inline",children:[Object(g.jsx)(w.a,{className:"icon short-icon"}),"Publicado hace ",e," d\xedas"]})}}]),n}(o.a.Component),F=n(38),N=n.n(F),k=n(37),L=n.n(k),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleToggleFavorites=function(e){var t=i.state.isFavorite,n=localStorage.getItem("postsFavorites")||"";if(n.includes(e)){n.indexOf(e);n=n.replace("".concat(e,"-"),"")}else n=n.concat(e,"-");localStorage.setItem("postsFavorites",n),i.setState({isFavorite:!t})},i.state={isFavorite:!1},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.post.posting_id,t=(localStorage.getItem("postsFavorites")||"").includes(e);this.setState({isFavorite:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.index,i=t.post,o=this.state.isFavorite;return Object(g.jsx)("li",{className:"container post-item-container decoration-plan ".concat(i.publication_plan),children:Object(g.jsxs)("div",{className:"inline inline-with-image",children:[Object(g.jsxs)("div",{className:"post-image-container",children:[Object(g.jsx)("div",{className:"favorite-container",onClick:function(){return e.handleToggleFavorites(i.posting_id)},children:o?Object(g.jsx)(L.a,{className:"icon right short-icon favorite"}):Object(g.jsx)(N.a,{className:"icon right short-icon"})}),Object(g.jsx)(x,{}),i.posting_prices[0].expenses?Object(g.jsx)(S,{priceCurrency:i.posting_prices[0].price.currency,priceAmount:i.posting_prices[0].price.amount,expensesCurrency:i.posting_prices[0].expenses.currency,expensesAmount:i.posting_prices[0].expenses.amount}):Object(g.jsx)(S,{priceCurrency:i.posting_prices[0].price.currency,priceAmount:i.posting_prices[0].price.amount})]}),Object(g.jsxs)("div",{className:"post-description-container",children:[Object(g.jsx)("div",{children:Object(g.jsx)(_,{title:i.title,location_address:i.posting_location.address,location_zone:i.posting_location.zone,location_city:i.posting_location.city,description:i.posting_description})}),Object(g.jsxs)("div",{className:"post-options",children:[Object(g.jsx)(A,{publish_date:i.publish_date,posting_id:i.posting_id}),Object(g.jsx)("a",{href:"https://google.com",className:"without-link-styles btn btn-primary",children:"Contactar"})]})]})]})},n)}}]),n}(o.a.Component),E=n(34),P=n.n(E),B=n(39),D=n.n(B),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).toggleAcordion=function(e){var t=document.querySelectorAll(".accordion-content"),n=document.querySelectorAll(".selectorAccordion");e>=0&&(t[e].classList.toggle("animaAccordion"),n[e].classList.toggle("muestraInfo"))},i.setFilterByLocation=function(e){var t=i.state,n=t.currentFilter,o=t.currentFilterByType,c=i.props,a=(c.onFilterPostsByLocation,c.onFilterPostsByTypeAndLocation);e!==n&&(i.setState({currentFilter:e,currentFilterByLocation:e}),a(o,e))},i.setFilterByType=function(e){var t=i.state,n=t.currentFilter,o=t.currentFilterByLocation,c=i.props,a=(c.onFilterPostsByType,c.onFilterPostsByTypeAndLocation);e!==n&&(i.setState({currentFilter:e,currentFilterByType:e}),a(e,o))},i.state={currentFilter:"Todos",currentFilterByType:"Todos",currentFilterByLocation:""},i}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"container filters",children:[Object(g.jsx)("h2",{children:"Filtrado actual"}),Object(g.jsxs)("div",{className:"inline divider cursor",onClick:function(){return e.toggleAcordion(0)},children:[Object(g.jsx)("div",{className:"accordion-title",children:Object(g.jsx)("h3",{children:"Direcci\xf3n"})}),Object(g.jsx)("div",{className:"selectorAccordion",children:Object(g.jsx)(P.a,{className:"icon right short-icon"})})]}),Object(g.jsxs)("div",{className:"accordion-content inline",children:[Object(g.jsx)("input",{placeholder:"Buscar por direccion",onBlur:function(t){return e.setFilterByLocation(t.target.value)}}),Object(g.jsx)(D.a,{className:"icon right short-icon special-icon"})]}),Object(g.jsxs)("div",{className:"inline divider cursor",onClick:function(){return e.toggleAcordion(1)},children:[Object(g.jsx)("div",{className:"accordion-title",children:Object(g.jsx)("h3",{children:"Tipo de operaci\xf3n"})}),Object(g.jsx)("div",{className:"selectorAccordion",children:Object(g.jsx)(P.a,{className:"icon right short-icon"})})]}),Object(g.jsxs)("div",{className:"accordion-content",children:[Object(g.jsxs)("div",{className:"radio-option",children:[Object(g.jsx)("input",{type:"radio",id:"age1",name:"age",value:"30",onClick:function(){return e.setFilterByType("Venta")}}),Object(g.jsx)("label",{htmlFor:"age1",children:"Comprar"})]}),Object(g.jsxs)("div",{className:"radio-option",children:[Object(g.jsx)("input",{type:"radio",id:"age2",name:"age",value:"60",onClick:function(){return e.setFilterByType("Alquiler")}}),Object(g.jsx)("label",{htmlFor:"age2",children:"Alquilar"})]}),Object(g.jsxs)("div",{className:"radio-option",children:[Object(g.jsx)("input",{type:"radio",id:"age3",name:"age",value:"100",onClick:function(){return e.setFilterByType("Alquiler Temporal")}}),Object(g.jsx)("label",{htmlFor:"age3",children:"Temporal"})]}),Object(g.jsxs)("div",{className:"radio-option last-option",children:[Object(g.jsx)("input",{type:"radio",id:"age3",name:"age",value:"100",onClick:function(){return e.setFilterByType("Todos")}}),Object(g.jsx)("label",{htmlFor:"age3",children:"Todos"})]})]})]})}}]),n}(o.a.Component),I=Object(p.b)(null,(function(e){return{onFilterPostsByLocation:function(t){return e({type:b,condition:t})},onFilterPostsByType:function(t){return e({type:h,condition:t})},onFilterPostsByTypeAndLocation:function(t,n){return e({type:v,conditionType:t,conditionLocation:n})}}}))(q),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.onLoadData)()}},{key:"render",value:function(){var e=this.props.posts;return Object(g.jsxs)("div",{className:"posts-page",children:[Object(g.jsx)(I,{}),e&&Object(g.jsx)("ul",{className:"post-list-container",children:e.map((function(e,t){return Object(g.jsx)(C,{index:t,post:e},t)}))})]})}}]),n}(o.a.Component),z=Object(p.b)((function(e){return{value:e.value,fetching:e.fetching,posts:e.filteredPosts}}),(function(e){return{onLoadData:function(){return e({type:d})}}}))(R);var M=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header"}),Object(g.jsx)(z,{})]})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=n(24),H=n(5),Q={posts:null,filteredPosts:null};var W=n(22),Y=n(6),J=n(9),X=Object(Y.a)().mark(ae),$=Object(Y.a)().mark(re),K=Object(Y.a)().mark(se),Z=Object(Y.a)().mark(le),ee=Object(Y.a)().mark(ue),te=Object(Y.a)().mark(pe),ne=Object(Y.a)().mark(de),ie=Object(Y.a)().mark(je),oe=Object(Y.a)().mark(me),ce=[{posting_id:"44557981",posting_location:{address:"Guido 1800",zone:"Recoleta",city:"Capital Federal"},posting_prices:[{operation_type:1,price:{amount:13500,currency:"ARS"},expenses:{amount:3500,currency:"ARS"}}],operation_type:{operation_type_id:1,operation_type_name:"Alquiler"},publication_plan:"SIMPLE",publish_date:"23/01/2020",posting_status:{status:"AVAILABLE",label:"Disponible"},title:"Guido y Callao, 2amb coc y lav todo luz 50m impec amob categor\xeda ",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/79/81/360x266/1693121343.jpg",posting_slug:"guido-y-callao-2amb-coc-y-lav-todo-luz-50m-impec-44557981",posting_description:"Sed in felis nec lorem imperdiet euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lectus mi, imperdiet et venenatis pulvinar, mattis id orci. In ut aliquam orci. Cras vitae risus posuere, ullamcorper erat vitae, tempor libero. Nulla placerat euismod lectus et maximus. Duis non magna mattis, mattis neque eu, dictum dui. Aliquam aliquam fermentum purus quis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet ligula odio. Integer id tempor ipsum. Phasellus maximus quam felis, id vulputate massa ullamcorper id."},{posting_id:"44554144",posting_location:{address:"San Lorenzo 1300",zone:"G\xfcemes",city:"Mar del Plata"},posting_prices:[{operation_type:2,price:{amount:110500,currency:"USD"},expenses:{amount:3e3,currency:"ARS"}}],operation_type:{operation_type_id:2,operation_type_name:"Venta"},publication_plan:"SUPERHIGHLIGHTED",publish_date:"18/07/2019",posting_status:{status:"AVAILABLE",label:"Disponible"},title:"Due\xf1o San Lorenzo/G\xfcemes. LC  2 d, a balc\xf3n terraza a jard\xedn. A nvo. cochera",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/55/41/44/360x266/1693069558.jpg",posting_slug:"dueno-san-lorenzo-guemes.-lc-2-d-a-balcon-terraz-44554144",posting_description:"Fusce nec pretium elit. Nullam commodo ornare massa, eget viverra erat vestibulum nec. Integer convallis est nec ex pharetra, non fermentum elit commodo. Maecenas eget ante vitae lorem interdum viverra. Aenean nisl erat, eleifend in tortor quis, ornare ultricies libero. Ut at egestas orci. Quisque laoreet ut diam quis molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque metus a libero feugiat, et lacinia odio tristique."},{posting_id:"44186948",posting_location:{address:"Juncal 3000",zone:"Barrio Norte",city:"Capital Federal"},posting_prices:[{operation_type:3,price:{amount:22500,currency:"ARS"},expenses:null}],operation_type:{operation_type_id:3,operation_type_name:"Alquiler Temporal"},publication_plan:"HIGHLIGHTED",publish_date:"02/12/2019",posting_status:{status:"RESERVED",label:"Reservado"},title:"Juncal/Coronel D\xedaz. Al frente, 63m, gran balc\xf3n terraza. Todo luz",posting_picture:"https://preprostatic.zonapropcdn.com/avisos/1/00/44/18/69/48/360x266/1688441607.jpg",posting_slug:"juncal-coronel-diaz.-al-frente-63m-gran-balcon-t-44186948",posting_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a neque non magna scelerisque imperdiet sed ac magna. Mauris enim lectus, varius at quam a, venenatis condimentum ante. Morbi mattis velit vel dictum varius. Suspendisse tempor velit ac rhoncus vehicula. Aenean elementum dolor purus, et mattis arcu consectetur a. Sed dictum felis id molestie accumsan. Aliquam sit amet diam feugiat, tincidunt sem vehicula, dignissim augue. Integer gravida sapien erat, in faucibus ligula cursus non. Aliquam vestibulum est nibh, vitae vehicula ipsum facilisis quis. Pellentesque ac tempus metus, non posuere dolor."}];function ae(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(d,ue);case 2:case"end":return e.stop()}}),X)}function re(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(h,je);case 2:case"end":return e.stop()}}),$)}function se(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(b,de);case 2:case"end":return e.stop()}}),K)}function le(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.d)(v,pe);case 2:case"end":return e.stop()}}),Z)}function ue(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.b)(W.b,1500);case 2:return e.next=4,Object(J.c)({type:j,posts:ce});case 4:case"end":return e.stop()}}),ee)}function pe(e){var t,n,i;return Object(Y.a)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.conditionType,n=e.conditionLocation,o.next=3,Object(J.b)(W.b,1500);case 3:if(i=ce,n){o.next=9;break}return o.next=7,Object(J.c)({type:h,condition:t});case 7:case 12:o.next=17;break;case 9:if("Todos"!==t){o.next=14;break}return o.next=12,Object(J.c)({type:b,condition:n});case 14:return i=ce.filter((function(e){return(e.posting_location.zone===n||e.posting_location.city===n)&&e.operation_type.operation_type_name===t})),o.next=17,Object(J.c)({type:O,filteredPosts:i});case 17:case"end":return o.stop()}}),te)}function de(e){var t,n;return Object(Y.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.condition,i.next=3,Object(J.b)(W.b,1500);case 3:return n=ce,""!==t&&(n=ce.filter((function(e){return e.posting_location.zone===t||e.posting_location.city===t}))),i.next=7,Object(J.c)({type:O,filteredPosts:n});case 7:case"end":return i.stop()}}),ne)}function je(e){var t,n;return Object(Y.a)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.condition,i.next=3,Object(J.b)(W.b,1500);case 3:return n=ce,"Todos"!==t&&(n=ce.filter((function(e){return e.operation_type.operation_type_name===t}))),i.next=7,Object(J.c)({type:O,filteredPosts:n});case 7:case"end":return i.stop()}}),ie)}function me(){return Object(Y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([ae(),re(),se(),le()]);case 2:case"end":return e.stop()}}),oe)}var be=Object(W.a)(),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,ve=Object(V.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(H.a)(Object(H.a)({},e),{},{posts:null,filteredPosts:null,fetching:!0});case j:return Object(H.a)(Object(H.a)({},e),{},{posts:t.posts,filteredPosts:t.posts,fetching:!1});case m:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1});case b:case h:case v:return Object(H.a)(Object(H.a)({},e),{},{filteredPosts:null,fetching:!0});case O:return Object(H.a)(Object(H.a)({},e),{},{filteredPosts:t.filteredPosts,fetching:!1});case f:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1});default:return e}}),he(Object(V.a)(be)));be.run(me),a.a.render(Object(g.jsx)(p.a,{store:ve,children:Object(g.jsx)(M,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/postings",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/postings","/service-worker.js");U?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):G(e)}))}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.7fc5121a.chunk.js.map