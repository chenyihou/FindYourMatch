(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){e.exports=n(217)},139:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(139),n(140),n(129)),i=(n(93),n(24)),u=n(16),s=n(28),d=n.n(s),m=n(50),f="LOGIN_SUCCEED",h="LOGOUT",b="RETRIVE_LADDER_SUCCEED",E=function(e){return function(){var e=Object(m.a)(d.a.mark(function e(t,n){var a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:4000/api/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({})});case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).username&&localStorage.setItem("username",r.username),t({type:f,payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}()},v=function(){return{type:h}},g=n(58),p=n(219),O=n(13),j=n(26);p.b.SubMenu;function y(e){return r.a.createElement("div",{id:"menu"},r.a.createElement(j.b,{to:""},r.a.createElement(O.a,{type:"home"})),r.a.createElement(j.b,{to:"ladder"},r.a.createElement(O.a,{type:"radar-chart"})),r.a.createElement(j.b,{to:"history"},r.a.createElement(O.a,{type:"line-chart"})))}var L=n(120),w=n(121),k=n(131),S=n(122),x=n(130),C=n(220),T=function(){},M=function(e){function t(e){var n;return Object(L.a)(this,t),(n=Object(k.a)(this,Object(S.a)(t).call(this,e))).state={ModalText:"Content of the modal",visible:!1,confirmLoading:!1},n.handleOk=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({ModalText:"Verifying user information",confirmLoading:!0}),n.props.login();case 2:case"end":return e.stop()}},e)})),n.handleCancel=function(){console.log("Clicked cancel button"),n.setState({visible:!1})},T=function(){n.setState({visible:!0})},n}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,n=e.confirmLoading,a=e.ModalText;return r.a.createElement(C.a,{title:"Title",visible:t,onOk:this.handleOk,confirmLoading:n,onCancel:this.handleCancel},r.a.createElement("p",null,a))}}]),t}(r.a.Component);M.getDerivedStateFromProps=function(e,t){return e.isLogin?{visible:!1,confirmLoading:!1}:null};var D=Object(i.b)(function(e){return{isLogin:e.profile.isLogin}},function(e){return Object(u.b)({login:E},e)})(M);function q(e){return r.a.createElement("header",{id:"head-bar"},r.a.createElement("div",{id:"logo"},"logo"),r.a.createElement("div",{id:"head-middle"},r.a.createElement(y,null)),r.a.createElement("div",{id:"head-right"},r.a.createElement("div",null,"search bar"),e.isLogin?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login"},r.a.createElement(g.a,{ghost:!0,onClick:e.logout},"log out")),e.username):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(g.a,{ghost:!0,onClick:T},"log in")),r.a.createElement("div",null,r.a.createElement(g.a,{ghost:!0},"register")))))}var I=Object(i.b)(function(e){return{isLogin:e.profile.isLogin,username:e.profile.username}},function(e){return Object(u.b)({logout:v},e)})(function(e){var t=e.username,n=e.isLogin;return e.location,r.a.createElement(q,{username:t,isLogin:n})}),F=n(218),H=(F.a.Meta,function(){return r.a.createElement("div",{style:{height:"1000px"}},"sdf")});function J(e){return Object(a.useEffect)(function(){}),r.a.createElement("main",null,r.a.createElement(H,null),r.a.createElement(H,null),r.a.createElement(H,null),r.a.createElement(H,null))}var N=function(){return function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:b,payload:{username:"sdf"}})}catch(n){console.log(n)}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};var R=Object(i.b)(function(e){return{ladder:e}})(function(e){e.retriveLadder;var t=e.ladder;return Object(a.useEffect)(function(){console.log(t)}),r.a.createElement("div",null,"ladder")});F.a.Meta;var U=Object(i.b)(null,function(e){return Object(u.b)({retriveLadder:N},e)})(function(e){var t=e.retriveLadder,n=e.ladder;return Object(a.useEffect)(function(){t(),console.log(n,t)}),r.a.createElement(R,null)}),Y=n(42),_=(F.a.Meta,function(){return r.a.createElement("div",{style:{height:"1000px"}},"sdf")});function B(e){return Object(a.useEffect)(function(){}),r.a.createElement("main",null,r.a.createElement(Y.a,{exact:!0,path:"/",component:J}),r.a.createElement(Y.a,{path:"/ladder",component:U}),r.a.createElement(_,null),r.a.createElement(_,null),r.a.createElement(_,null),r.a.createElement(_,null))}n(216);var G=Object(Y.d)(function(e){return console.log(e.location,"/"===e.location.pathname),"/"===e.location.pathname&&r.a.createElement("div",{id:"head-background"}," ")});var P,V=Object(Y.d)(function(e){var t=e.location,n=Object(a.useState)(!0),c=Object(l.a)(n,2);return c[0],c[1],Object(a.useEffect)(function(){window.addEventListener("mousemove",function(t){window.scrollY>n&&(t.clientY<e.clientHeight?(e.classList.remove("hide-headbar"),e.classList.add("headbar-background")):(e.classList.add("hide-headbar"),e.classList.remove("headbar-background")))}),window.addEventListener("scroll",function(t){window.scrollY>n?e.classList.add("hide-headbar"):e.classList.remove("hide-headbar")});var e=document.querySelector("header"),t=document.querySelector("#head-background"),n=t?t.clientHeight:e.clientHeight;document.querySelector("main").style.marginTop=n+"px",console.log(document.querySelector("main"))}),r.a.createElement("div",{id:"container"},"/"===t.pathname&&r.a.createElement(G,null),r.a.createElement(D,null),r.a.createElement(I,null),r.a.createElement(B,null))}),W=n(128),A=n(43),$=n(126),z=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return t[a.type]?Object($.a)({},n,t[a.type](a.payload)):n}},K=z({username:"",isLogin:!1},(P={},Object(A.a)(P,f,function(e){return{username:e.username,isLogin:!0}}),Object(A.a)(P,h,function(){return{username:"",isLogin:!1}}),P)),Q=z({username:"defalut"},Object(A.a)({},b,function(e){return{username:e.username}})),X=Object(u.c)({profile:K,ladder:Q}),Z=[n(127).a],ee=Object(u.d)(X,u.a.apply(void 0,Object(W.a)(Z)));var te=function(e){return r.a.createElement(i.a,{store:ee},r.a.createElement(j.a,null,r.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.e98845ad.chunk.js.map