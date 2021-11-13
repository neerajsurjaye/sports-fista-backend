(this["webpackJsonpsports-fista-frontend"]=this["webpackJsonpsports-fista-frontend"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(17),o=n.n(a),i=n(3),r=(n(26),n(8)),u="http://localhost:8000",j={getEvents:function(e){return fetch(u+"/event/page/"+e).then((function(e){return e.json()}))},logIn:function(e,t){var n={username:e,password:t};return fetch(u+"/users/log-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},signUp:function(e,t){var n={username:e,password:t};return fetch(u+"/users/sign-up",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},createEvent:function(e,t,n,c){var s=localStorage.getItem("auth"),a={title:e,desc:t,about:n,images:c};return fetch(u+"/event/",{method:"POST",headers:{"Content-type":"application/json",auth:s},body:JSON.stringify(a)}).then((function(e){return e.json()}))},getSingleEvent:function(e){return fetch(u+"/event/"+e).then((function(e){return e.json()}))},submitComment:function(e,t){var n=localStorage.getItem("auth"),c={desc:e,event:t};return fetch(u+"/comment/",{method:"POST",headers:{"Content-type":"application/json",auth:n},body:JSON.stringify(c)}).then((function(e){return e.json()}))},getCurrentUser:function(){return fetch(u+"/users/get-current-user",{headers:{auth:localStorage.getItem("auth")}}).then((function(e){return e.json()}))},uploadEventImage:function(e){var t=new FormData;t.append("image",e);var n=localStorage.getItem("auth");return fetch(u+"/event/upload-event-image/",{method:"POST",headers:{auth:n},body:t}).then((function(e){return e.json()}))}},l=n(0),h=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(0),u=Object(i.a)(o,2),h=u[0],b=u[1];return Object(c.useEffect)((function(){j.getCurrentUser().then((function(e){a(e)}))}),[h,e.refresh]),Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(r.b,{className:"title no-link",to:"/",children:Object(l.jsx)("div",{children:"Sports-Fista"})}),s&&s.success?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"to-right username",children:s.success.username}),Object(l.jsx)(r.b,{to:"/addevent",className:"btn no-link",children:"+"}),Object(l.jsx)("div",{className:"login btn",onClick:function(){localStorage.setItem("auth",null),b(h+1)},children:"Logout"})]}):Object(l.jsx)(r.b,{to:"/auth",className:"login btn no-link to-right",children:"Login"})]})},b=n(2),d=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(1),o=Object(i.a)(a,2),h=o[0],b=o[1],d=function(e){h+e<=0||b(h+e)};return Object(c.useEffect)((function(){console.log("ran effect"),j.getEvents(h).then((function(e){console.log(e.success.docs[0]),s(e.success.docs)})).catch((function(e){console.log(e)}))}),[h]),n?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"event-holder",children:function(){var e=[];for(var t in n){var c;e.push(Object(l.jsxs)(r.b,{to:"/event/".concat(n[t]._id),className:"event-card no-link",children:[Object(l.jsx)("img",{className:"event-image",alt:"event img",src:"".concat(u,"/").concat(null===(c=n[t])||void 0===c?void 0:c.images[0])}),Object(l.jsxs)("div",{className:"event-text",children:[Object(l.jsx)("h1",{className:"bold",children:n[t].title}),Object(l.jsx)("p",{className:"event-desc",children:n[t].desc})]})]},n[t]._id))}return e}()}),Object(l.jsxs)("form",{className:"page-controller",children:[Object(l.jsx)("input",{type:"button",value:"prev",className:"btn",onClick:function(){d(-1)}}),Object(l.jsx)("h4",{className:"page",children:h}),Object(l.jsx)("input",{type:"button",value:"next",className:"btn",onClick:function(){d(1)}})]})]}):Object(l.jsx)("h1",{children:"Loading"})},O=function(e){var t=Object(c.useState)(1),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),u=r[0],h=r[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),O=d[0],f=d[1],g=function(e){localStorage.setItem("auth",e)};return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h2",{onClick:function(){a(1)},children:"Login"}),Object(l.jsx)("h2",{onClick:function(){a(0)},children:"Sign-up"}),Object(l.jsx)("p",{children:"Username"}),Object(l.jsx)("input",{value:u,onChange:function(e){h(e.target.value)}}),Object(l.jsx)("p",{children:"Password"}),Object(l.jsx)("input",{value:O,onChange:function(e){f(e.target.value)}}),Object(l.jsx)("input",{type:"button",value:"Submit",onClick:function(){s?j.logIn(u,O).then((function(t){console.log(t),t.success&&(g(t.token),e.setRefresh(e.refresh+1),console.log(e.refresh))})):(console.log("sign - up"),j.signUp(u,O).then((function(t){console.log(t),t.success&&(g(t.token),e.setRefresh(e.refresh+1))})))}})]})})},f=n(21),g=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),r=o[0],u=o[1],h=Object(c.useState)(""),b=Object(i.a)(h,2),d=b[0],O=b[1],g=Object(c.useState)(""),v=Object(i.a)(g,2),x=v[0],m=v[1],p=Object(c.useState)([]),S=Object(i.a)(p,2),C=S[0],N=S[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"Add Event"}),Object(l.jsx)("h4",{children:"Title"}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("h4",{children:"Desc"}),Object(l.jsx)("textarea",{value:r,onChange:function(e){u(e.target.value)}}),Object(l.jsx)("h4",{children:"About"}),Object(l.jsx)("textarea",{value:d,onChange:function(e){O(e.target.value)}}),Object(l.jsx)("h4",{children:"Image"}),Object(l.jsx)("input",{type:"file",onChange:function(e){console.log(C),m(e.target.files[0])}}),Object(l.jsx)("input",{type:"button",value:"uploadImage",onClick:function(){j.uploadEventImage(x).then((function(e){console.log("submit event : success : ",e.success),N([].concat(Object(f.a)(C),[e.success]))}))}}),Object(l.jsx)("div",{}),Object(l.jsx)("input",{type:"button",value:"submit",onClick:function(){console.log(C),j.createEvent(n,r,d,C).then((function(e){console.log(e)}))}})]})})},v=n(20),x=n.n(v),m=function(){var e=Object(b.f)().id,t=Object(c.useState)(null),n=Object(i.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),h=r[0],d=r[1],O=Object(c.useState)(0),f=Object(i.a)(O,2),g=f[0],v=f[1],m=Object(c.useState)(null),p=Object(i.a)(m,2),S=p[0],C=p[1];return Object(c.useEffect)((function(){j.getSingleEvent(e).then((function(e){console.log(e.success);var t=e.success.images,n=[];if(t&&t.length>0)for(var c in t)n.push({url:"".concat(u,"/").concat(t[c])});console.log(n),a(e.success),C(n)}))}),[e,g]),s?Object(l.jsxs)("div",{children:[S?(console.log("img",S),Object(l.jsx)(x.a,{width:896,height:504,images:S,showBullets:!0,showNavs:!0,autoPlay:!0})):null,Object(l.jsx)("h1",{children:s.title}),Object(l.jsx)("p",{children:s.desc}),Object(l.jsx)("h3",{children:"About"}),Object(l.jsx)("p",{children:s.about}),function(){var e=[];for(var t in s.images)e.push(Object(l.jsx)("img",{alt:"event",src:"".concat(u,"/").concat(s.images[t])},s.images[t]));return e}(),Object(l.jsxs)("form",{children:[Object(l.jsx)("textarea",{value:h,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("input",{type:"button",value:"Submit",onClick:function(){j.submitComment(h,e).then((function(){v(g+1)}))}})]}),Object(l.jsx)("div",{className:"comments",children:function(e){var t=[];for(var n in e){var c=e[n];t.push(Object(l.jsxs)("div",{className:"comment-single",children:[Object(l.jsx)("h6",{children:c.userid.username}),Object(l.jsx)("p",{children:c.desc})]},c._id))}return t.reverse(),t}(s.comments)})]}):Object(l.jsx)("div",{children:"Loading"})};n(33);var p=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(h,{refresh:n}),Object(l.jsx)(b.c,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b.a,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(b.a,{exact:!0,path:"/auth",children:Object(l.jsx)(O,{refresh:n,setRefresh:s})}),Object(l.jsx)(b.a,{exact:!0,path:"/addevent",children:Object(l.jsx)(g,{})}),Object(l.jsx)(b.a,{exact:!0,path:"/event/:id",children:Object(l.jsx)(m,{})})]})})]})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ab86ba12.chunk.js.map