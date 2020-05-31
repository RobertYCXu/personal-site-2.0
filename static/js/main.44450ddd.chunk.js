(this["webpackJsonppersonal-site-2.0"]=this["webpackJsonppersonal-site-2.0"]||[]).push([[0],{24:function(n,e,t){n.exports=t.p+"static/media/profile.da674292.jpeg"},31:function(n,e,t){n.exports=t(43)},43:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(20),o=t.n(i),c=t(26),l=t(3),m=t(4);function u(){var n=Object(m.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    height: 100vh;\n    text-rendering: optimizeLegibility;\n    font-family: 'Open Sans', sans-serif;\n  }\n\n  h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 4rem;\n    font-weight: 700;\n    cursor: pointer;\n  }\n\n  h1:after {\n    content: '';\n    display: block;\n    border-bottom: 0.8rem solid ",";\n\t\twidth: 40px;\n    transition: width 250ms ease-in-out;\n\n  }\n\n  h1:hover:after {\n    width: 100%;\n  }\n\n\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n\n  small {\n    display: block;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 20pt;\n    line-height: 2;\n  }\n"]);return u=function(){return n},n}var s=Object(l.b)(u(),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.primaryDark}),(function(n){return n.theme.primaryAccent}),(function(n){return n.theme.primaryDark})),d={primaryDark:"#313638",primaryLight:"white",primaryAccent:"#EF6461",mobile:"576px"},p=t(12);function f(){var n=Object(m.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n  outline: none;\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    :first-child {\n      transform: ",";\n    }\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return f=function(){return n},n}var h=l.c.button(f(),(function(n){return n.theme.primaryDark}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),g=function(n){var e=n.open,t=n.setOpen,r=Object(p.a)(n,["open","setOpen"]),i=!!e;return a.a.createElement(h,Object.assign({"aria-label":"Toggle menu","aria-expanded":i,open:e,onClick:function(){return t(!e)}},r),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))};function b(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  height: 100vh;\n  border-right: "," solid ",";\n  text-align: left;\n  padding: 4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n    width: 100%;\n  }\n\n  a {\n    font-size: 1rem;\n    padding: 1.1rem 0;\n    letter-spacing: 0.3rem;\n    color: ",";\n    text-decoration: none;\n    outline: none;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  span, a {\n    transition: color 0.3s linear;\n    &:hover {\n      color: ",";\n    }\n  }\n\n  span {\n    color: ",";\n    font-size: 2rem;\n    font-weight: bold;\n    letter-spacing: 2px;\n    transform: translateY(460%) translateX(120%) rotate(90deg);\n    cursor: pointer;\n  }\n\n  .active {\n    color: ",";\n  }\n"]);return b=function(){return n},n}var v=l.c.nav(b(),(function(n){return n.theme.primaryDark}),(function(n){var e=n.open,t=n.isMobile;return e?"translateX(0)":t?"translateX(-100%)":"translateX(-75%)"}),(function(n){return n.isMobile?"1rem":"0.75rem"}),(function(n){return n.theme.primaryAccent}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primaryHover}),(function(n){return n.theme.primaryHover}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.primaryHover})),E=t(9),x=function(n){var e,t=n.open,r=n.setOpen,i=n.isMobile,o=Object(p.a)(n,["open","setOpen","isMobile"]),c=function(){return r(!t)},l=function(){return i?c():void 0};return e=i?a.a.createElement(a.a.Fragment,null):a.a.createElement("span",{onClick:c},"..."),a.a.createElement(v,Object.assign({open:t,"aria-hidden":!t,isMobile:i},o),e,[{path:"/",name:"home"},{path:"/about",name:"about"},{path:"/travels",name:"travels"},{path:"/blog",name:"blog"},{path:"/ideas",name:"ideas"},{path:"/resume",name:"resume"}].map((function(n){return a.a.createElement(E.c,{to:""+n.path,activeClassName:"active",exact:!0,onClick:l,key:n.name},n.name)})))},y=t(2);function w(){var n=Object(m.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    height: auto;\n    width: 10rem;\n    padding-right: 3rem;\n    transform: translateY(-10px);\n  }\n"]);return w=function(){return n},n}var k=l.c.div(w());var O=function(){return a.a.createElement(k,null,a.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2813/2813094.svg",alt:"burger icon"}),a.a.createElement(E.b,{to:"/"},a.a.createElement("h1",null,"robert xu")))},j=t(24),M=t.n(j);function z(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 15rem;\n\n  .header {\n    padding-top: 5rem;\n  }\n\n  .content {\n    margin-top: 2%;\n    display: flex;\n\n    img {\n      border-radius: 50%;\n      border: 0.8rem solid ",";\n      margin-left: 25%;\n      margin-top: 2%;\n      height: auto;\n      width: auto;\n      max-height: 15rem;\n      max-width: 15rem;\n    }\n\n    p {\n      padding-left: 5rem;\n\n    }\n\n\t\ta {\n\t\t\tposition: relative;\n\t\t}\n\n    a:after {\n\t\t\tposition: absolute;\n      content: '';\n      display: block;\n      background: ",";\n\t\t\tbottom:0;\n\t\t\tleft: 0%;\n      height: 4px;\n\t\t\twidth: 19px;\n\t\t\ttransition: width 250ms ease-in-out;\n    }\n\n    a:hover:after {\n      width: 100%;\n    }\n  }\n"]);return z=function(){return n},n}var C=l.c.div(z(),(function(n){return n.theme.primaryAccent}),(function(n){return n.theme.primaryAccent}));var L=function(){return a.a.createElement(C,null,a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"about")),a.a.createElement("div",{className:"content"},a.a.createElement("img",{src:M.a,alt:"robert xu"}),a.a.createElement("p",null,"Hi! I'm a Computer Science student at the University of Waterloo and I'm currently a Software Engineer Intern at Facebook on the Warm Storage team. I've previously interned at companies like Citadel and Square. I also love travelling, playing piano, and messing around with random creative ",a.a.createElement(E.b,{to:"/ideas"},"ideas"),". Check out my ",a.a.createElement("a",{id:"linkedin",href:"https://www.linkedin.com/in/robert-xu/"},"Linkedin"),"\xa0and\xa0",a.a.createElement("a",{href:"https://github.com/RobertYCXu"},"Github"),"!")))};function N(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 15rem;\n\n  .header {\n    padding-top: 5rem;\n  }\n"]);return N=function(){return n},n}var X=l.c.div(N());var I=function(){return a.a.createElement(X,null,a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"travels")))};function S(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 15rem;\n\n  .header {\n    padding-top: 5rem;\n  }\n"]);return S=function(){return n},n}var A=l.c.div(S());var D=function(){return a.a.createElement(A,null,a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"blog")))};function H(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 15rem;\n\n  .header {\n    padding-top: 5rem;\n  }\n"]);return H=function(){return n},n}var F=l.c.div(H());var Y=function(){return a.a.createElement(F,null,a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"resume")))};function J(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 15rem;\n\n  .header {\n    padding-top: 5rem;\n  }\n"]);return J=function(){return n},n}var R=l.c.div(J());var W=function(){return a.a.createElement(R,null,a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"ideas")))};var q=function(){return a.a.createElement(y.c,null,a.a.createElement(y.a,{exact:!0,path:"/",component:O}),a.a.createElement(y.a,{exact:!0,path:"/about",component:L}),a.a.createElement(y.a,{exact:!0,path:"/travels",component:I}),a.a.createElement(y.a,{exact:!0,path:"/blog",component:D}),a.a.createElement(y.a,{exact:!0,path:"/ideas",component:W}),a.a.createElement(y.a,{exact:!0,path:"/resume",component:Y}))},B=t(25),G=t(18);var T=function(){var n,e,t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],m=i[1],u=Object(r.useRef)();return n=u,e=function(){return m(!1)},Object(r.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e]),a.a.createElement(l.a,{theme:d},a.a.createElement(s,null),a.a.createElement("div",{ref:u},a.a.createElement(B.a,{disabled:!o},a.a.createElement(G.MobileView,null,a.a.createElement(g,{open:o,setOpen:m,"aria-controls":"main-menu"})),a.a.createElement(x,{open:o,setOpen:m,id:"main-menu",isMobile:G.isMobile}))),a.a.createElement(q,null))};o.a.render(a.a.createElement(E.a,null,a.a.createElement(T,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.44450ddd.chunk.js.map