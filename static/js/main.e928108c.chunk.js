(this["webpackJsonpras-calculator"]=this["webpackJsonpras-calculator"]||[]).push([[0],{68:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),o=n(17),c=n.n(o),s=n(98),l=n(97),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},j=(n(67),n(68),n(36)),p=n(51),b=Object(p.a)({palette:{text:{primary:"#542d4e",secondary:"#874a7e"},primary:{text:"#ff00ff",main:"#ce5eba"},secondary:{main:"#19857b"},error:{main:j.a.A400},background:{default:"#ffe8fb"}}}),h=n(16),f=n(7),g=n(101),x=n(92),v=n(100);function O(){return Object(a.jsx)(v.a,{component:"div",m:1,children:Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:"Copyright \xa9   Kai, Alexandru Constantin 2020"})})}var y=n(93),w=n.p+"static/media/logo.4aea2383.svg";function C(){return Object(a.jsxs)(y.a,{container:!0,alignItems:"center",justify:"center",spacing:3,children:[Object(a.jsx)(y.a,{item:!0,xs:2,children:Object(a.jsx)("img",{alt:"logo",src:w})}),Object(a.jsx)(y.a,{item:!0,xs:10,children:Object(a.jsx)(x.a,{align:"left",variant:"h4",gutterBottom:!0,children:"Reproductive Ageing Score"})})]})}var k=n(94),A=n(48),E=n.n(A);var W=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in luctus diam, eu hendrerit leo. Praesent libero ligula, commodo ut lacinia vitae, venenatis in ipsum. Aenean at nisi ullamcorper, sagittis turpis ut, pulvinar ipsum. Praesent luctus ipsum fermentum, ornare sem in, vestibulum mauris. Etiam congue congue mattis. Praesent id tellus et tortor suscipit porttitor. Etiam massa nunc, bibendum et arcu et, vulputate tempor mi. Fusce in augue sed mauris tempus commodo non pretium mauris. Nunc sagittis, felis id auctor placerat, tortor nisi bibendum mi, eu luctus tortor mauris eget sapien. Cras eu faucibus odio, in semper diam. Etiam non velit iaculis augue feugiat fringilla. Maecenas vel leo eget est tempor rutrum eget nec est. Donec augue sem, tincidunt in feugiat in, aliquam nec ex."}),Object(a.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(k.a,{color:"primary",variant:"contained",component:h.b,to:"/calculator",children:"Let's Begin"})}),Object(a.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(k.a,{startIcon:Object(a.jsx)(E.a,{}),variant:"contained",component:h.b,to:"/calculator",children:"Add to homescreen"})})]})},F=n(49),S=n.n(F);var P=function(){return Object(f.f)().value,Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(k.a,{startIcon:Object(a.jsx)(S.a,{}),color:"primary",variant:"contained",component:h.b,to:"/calculator",children:"Try Again"})})})},B=n(95),L=n(50),N=n.n(L);var I=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(k.a,{color:"primary",variant:"contained",component:h.b,to:"/result/1",children:"Calculate"})}),Object(a.jsx)(v.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(B.a,{component:h.b,to:"/about","aria-label":"delete",children:Object(a.jsx)(N.a,{})})})]})},T=(n(75),n(96)),R=[{path:"/about",name:"About",Component:W},{path:"/calculator",name:"Calculator",Component:I},{path:"/result/:value",name:"Result",Component:P}];function U(){return Object(a.jsx)(T.a,{className:"container",maxWidth:"sm",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(f.b,{exact:!0,path:"/",children:Object(a.jsx)(f.a,{to:"/about"})}),R.map((function(e){var t=e.path,n=e.Component;return Object(a.jsx)(f.b,{exact:!0,path:t,children:function(e){var t=e.match;return Object(a.jsx)(g.a,{in:null!=t,timeout:300,classNames:"page",unmountOnExit:!0,children:Object(a.jsxs)(v.a,{className:"page",my:4,children:[Object(a.jsx)(C,{}),Object(a.jsx)(v.a,{m:1,children:Object(a.jsx)(n,{})}),Object(a.jsx)(O,{})]})})}},t)}))]})})}c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsxs)(l.a,{theme:b,children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(U,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){console.log("".concat("/ras-calculator","/service-worker.js"));var t=new URL("/ras-calculator",window.location.href);if(t.origin!==window.location.origin)return void console.error("Error",t.origin,window.location.origin);window.addEventListener("load",(function(){var t="".concat("/ras-calculator","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(t,e)}))}}(),m()}},[[77,1,2]]]);
//# sourceMappingURL=main.e928108c.chunk.js.map