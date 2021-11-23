(this["webpackJsonpsports-fista-frontend"]=this["webpackJsonpsports-fista-frontend"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(17),o=n.n(a),i=n(2),r=(n(26),n(8)),u="http://localhost:8000",l={getEvents:function(e){return fetch(u+"/event/page/"+e).then((function(e){return e.json()}))},logIn:function(e,t){var n={username:e,password:t};return fetch(u+"/users/log-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},signUp:function(e,t){var n={username:e,password:t};return fetch(u+"/users/sign-up",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},createEvent:function(e,t,n,c){var s=localStorage.getItem("auth"),a={title:e,desc:t,about:n,images:c};return fetch(u+"/event/",{method:"POST",headers:{"Content-type":"application/json",auth:s},body:JSON.stringify(a)}).then((function(e){return e.json()}))},getSingleEvent:function(e){return fetch(u+"/event/"+e).then((function(e){return e.json()}))},submitComment:function(e,t){var n=localStorage.getItem("auth"),c={desc:e,event:t};return fetch(u+"/comment/",{method:"POST",headers:{"Content-type":"application/json",auth:n},body:JSON.stringify(c)}).then((function(e){return e.json()}))},getCurrentUser:function(){return fetch(u+"/users/get-current-user",{headers:{auth:localStorage.getItem("auth")}}).then((function(e){return e.json()}))},uploadEventImage:function(e){var t=new FormData;t.append("image",e);var n=localStorage.getItem("auth");return fetch(u+"/event/upload-event-image/",{method:"POST",headers:{auth:n},body:t}).then((function(e){return e.json()}))}},j=n(0),b=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(0),u=Object(i.a)(o,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){l.getCurrentUser().then((function(e){a(e)}))}),[b,e.refresh]),Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)(r.b,{className:"title no-link",to:"/",children:Object(j.jsx)("div",{children:"Sports-Fista"})}),s&&s.success?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"to-right username",children:s.success.username}),Object(j.jsx)(r.b,{to:"/addevent",className:"btn no-link",children:"+"}),Object(j.jsx)("div",{className:"login btn",onClick:function(){localStorage.setItem("auth",null),h(b+1)},children:"Logout"})]}):Object(j.jsx)(r.b,{to:"/auth",className:"login btn no-link to-right",children:"Login"})]})},h=n(3),d=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(1),o=Object(i.a)(a,2),b=o[0],h=o[1],d=function(e){b+e<=0||h(b+e)};return Object(c.useEffect)((function(){console.log("ran effect"),l.getEvents(b).then((function(e){console.log(e.success.docs[0]),s(e.success.docs)})).catch((function(e){console.log(e)}))}),[b]),n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"event-holder",children:function(){var e=[];for(var t in n){var c;e.push(Object(j.jsxs)(r.b,{to:"/event/".concat(n[t]._id),className:"event-card no-link",children:[Object(j.jsx)("img",{className:"event-image",alt:"event img",src:"".concat(u,"/").concat(null===(c=n[t])||void 0===c?void 0:c.images[0])}),Object(j.jsxs)("div",{className:"event-text",children:[Object(j.jsx)("h1",{className:"bold",children:n[t].title}),Object(j.jsx)("p",{className:"event-desc",children:n[t].desc.substr(0,30)+"..."})]})]},n[t]._id))}return e}()}),Object(j.jsxs)("form",{className:"page-controller",children:[Object(j.jsx)("input",{type:"button",value:"prev",className:"btn",onClick:function(){d(-1)}}),Object(j.jsx)("h4",{className:"page",children:b}),Object(j.jsx)("input",{type:"button",value:"next",className:"btn",onClick:function(){d(1)}})]})]}):Object(j.jsx)("h1",{children:"Loading"})},O=function(e){var t=Object(c.useState)(1),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),u=r[0],b=r[1],d=Object(c.useState)(""),O=Object(i.a)(d,2),m=O[0],f=O[1],v=Object(c.useState)("line"),g=Object(i.a)(v,2),p=g[0],x=g[1],N=Object(c.useState)(""),S=Object(i.a)(N,2),y=S[0],C=S[1],k=Object(h.f)(),E=function(e){localStorage.setItem("auth",e)};return Object(j.jsx)("div",{className:"loginsignup",children:Object(j.jsxs)("form",{className:"loginsignupform",children:[Object(j.jsxs)("div",{className:"loginsignupcont",children:[Object(j.jsx)("h2",{className:"emptyLine ".concat(p),onClick:function(){a(1),x("line"),C("")},children:"Login"}),Object(j.jsx)("h2",{className:"emptyLine ".concat(y),onClick:function(){a(0),x(""),C("line")},children:"Sign-up"})]}),Object(j.jsx)("p",{className:"loginsignupheader",children:"Username"}),Object(j.jsx)("input",{className:"inp",value:u,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("p",{className:"loginsignupheader",children:"Password"}),Object(j.jsx)("input",{className:"inp",value:m,onChange:function(e){f(e.target.value)},type:"password"}),Object(j.jsx)("input",{className:"btn",type:"button",value:"Submit",onClick:function(){s?l.logIn(u,m).then((function(t){console.log(t),t.success&&(E(t.token),e.setRefresh(e.refresh+1),console.log(e.refresh))})):(console.log("sign - up"),l.signUp(u,m).then((function(t){console.log(t),t.success&&(E(t.token),e.setRefresh(e.refresh+1))}))),k.push("/")}})]})})},m=n(21),f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),r=o[0],u=o[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),d=h[0],O=h[1],f=Object(c.useState)(""),v=Object(i.a)(f,2),g=v[0],p=v[1],x=Object(c.useState)([]),N=Object(i.a)(x,2),S=N[0],y=N[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Add Event"}),Object(j.jsx)("h4",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("h4",{children:"Desc"}),Object(j.jsx)("textarea",{value:r,onChange:function(e){u(e.target.value)}}),Object(j.jsx)("h4",{children:"About"}),Object(j.jsx)("textarea",{value:d,onChange:function(e){O(e.target.value)}}),Object(j.jsx)("h4",{children:"Image"}),Object(j.jsx)("input",{type:"file",onChange:function(e){console.log(S),p(e.target.files[0])}}),Object(j.jsx)("input",{type:"button",value:"uploadImage",onClick:function(){l.uploadEventImage(g).then((function(e){console.log("submit event : success : ",e.success),y([].concat(Object(m.a)(S),[e.success]))}))}}),Object(j.jsx)("div",{}),Object(j.jsx)("input",{type:"button",value:"submit",onClick:function(){console.log(S),l.createEvent(n,r,d,S).then((function(e){console.log(e)}))}})]})})},v=n(20),g=n.n(v),p=function(){var e=Object(h.g)().id,t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),b=r[0],d=r[1],O=Object(c.useState)(0),m=Object(i.a)(O,2),f=m[0],v=m[1],p=Object(c.useState)(null),x=Object(i.a)(p,2),N=x[0],S=x[1],y=Object(c.useState)(null),C=Object(i.a)(y,2),k=C[0],E=C[1],I=Object(c.useRef)(null);return Object(c.useEffect)((function(){s&&E(I.current.offsetWidth),window.addEventListener("resize",(function(){s&&I.current&&E(null===I||void 0===I?void 0:I.current.offsetWidth)}))}),[s]),Object(c.useEffect)((function(){l.getSingleEvent(e).then((function(e){var t=e.success.images,n=null;if(t&&t.length>0)for(var c in n=[],t)n.push({url:"".concat(u,"/").concat(t[c])});a(e.success),S(n)}))}),[e,f]),s?Object(j.jsxs)("div",{className:"event-container",children:[Object(j.jsx)("div",{className:"event-top",ref:I,children:N?Object(j.jsx)(g.a,{width:k,height:400,images:N,showBullets:!0,showNavs:!0,autoPlay:!0,slideDuration:2}):null}),Object(j.jsxs)("div",{className:"event-right",children:[Object(j.jsx)("h2",{className:"event-heading",children:s.title}),Object(j.jsx)("p",{className:"event-desc",children:s.desc})]}),Object(j.jsx)("p",{className:"event-desc",children:s.about}),Object(j.jsxs)("form",{className:"event-form",children:[Object(j.jsx)("h3",{children:"Comments"}),Object(j.jsx)("textarea",{placeholder:"Enter your comment here...",value:b,onChange:function(e){d(e.target.value)},className:"event-commentinp"}),Object(j.jsx)("input",{type:"button",value:"Submit",className:"event-comment-submit btn",onClick:function(){l.submitComment(b,e).then((function(){v(f+1)}))}})]}),Object(j.jsx)("div",{className:"comments",children:function(e){var t=[];for(var n in e){var c=e[n];t.push(Object(j.jsxs)("div",{className:"comment-single",children:[Object(j.jsx)("p",{className:"comment-comment",children:c.desc}),Object(j.jsxs)("p",{className:"comment-username",children:[":-",c.userid.username]})]},c._id))}return t.reverse(),t}(s.comments)})]}):Object(j.jsx)("div",{children:"Loading"})};n(33);var x=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(b,{refresh:n}),Object(j.jsx)(h.c,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/auth",children:Object(j.jsx)(O,{refresh:n,setRefresh:s})}),Object(j.jsx)(h.a,{exact:!0,path:"/addevent",children:Object(j.jsx)(f,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/event/:id",children:Object(j.jsx)(p,{})})]})})]})};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7673a6fd.chunk.js.map