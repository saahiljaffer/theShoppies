(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a(15),i=a.n(c),r=a(6),l=(a(22),a(31)),j=a(27),d=a(28),o=a(33);function h(e){var t=e.setTitle,a=e.setPage;return Object(s.jsx)("div",{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(o.a.Header,{children:Object(s.jsx)("h5",{children:"Movie Title"})}),Object(s.jsx)(o.a.Body,{children:Object(s.jsx)("input",{onChange:function(e){t(e.target.value),a(1)},type:"text",id:"textInput",placeholder:"Please search with 3+ characters...",className:"w-100 p-3",style:{width:"100%"}})})]})})}var b=a(16),u=a(34),O=a(32),x=a(29),m=a(30);function p(e){return"N/A"===e?"https://saahiljaffer.com/black.jpg":e}function f(e){var t=e.page,a=e.setPage,n=e.data,c=[];c.push(Object(s.jsx)(u.a.First,{disabled:1===t,onClick:function(){return a(1)}},"first")),c.push(Object(s.jsx)(u.a.Prev,{disabled:1===t,onClick:function(){return a(t-1)}},"previous"));var i=Math.max(t-2,1),r=Math.ceil(n.totalResults/10),l=Math.min(r,i+4);i>=2&&l-t===1?i-=1:i>=3&&l-t===0&&(i-=2);for(var j=function(e){c.push(Object(s.jsx)(u.a.Item,{className:"text-secondary",onClick:function(){return a(e)},active:e===t,children:e},e))},d=i;d<=l;d++)j(d);return c.push(Object(s.jsx)(u.a.Next,{disabled:t===r,onClick:function(){return a(t+1)}},"next")),c.push(Object(s.jsx)(u.a.Last,{disabled:t===r,onClick:function(){return a(r)}},"last")),Object(s.jsx)(u.a,{children:c})}function g(e){var t=e.data,a=e.nominated,n=e.setNominated;return Object(s.jsx)(O.a,{variant:"flush",children:t.Search.map((function(e){return Object(s.jsx)(O.a.Item,{children:Object(s.jsxs)(j.a,{className:"align-items-center",children:[Object(s.jsx)(d.a,{className:"px-2",sm:"auto",style:{width:"auto"},children:Object(s.jsx)(x.a,{onClick:function(){a.list.length<5&&n({list:[].concat(Object(b.a)(a.list),[e])})},disabled:a.list.find((function(t){return t.imdbID===e.imdbID}))||a.list.length>=5,variant:"secondary",size:"sm",name:"nominate",value:e,children:"Nominate"})}),Object(s.jsx)(d.a,{className:"px-2",sm:"auto",style:{width:"auto"},children:Object(s.jsx)(m.a,{src:p(e.Poster),alt:"",style:{height:"40px",width:"27px"},rounded:!0})}),Object(s.jsxs)(d.a,{className:"px-2",children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})}function N(e){var t=e.title,a=e.page,c=e.setNominated,i=e.nominated,l=e.setPage,d=Object(n.useState)(null),h=Object(r.a)(d,2),b=h[0],u=h[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),m=x[0],p=x[1],N=Object(n.useState)(null),v=Object(r.a)(N,2),y=v[0],w=v[1];return Object(n.useEffect)((function(){t&&t.length>=3&&(p(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(a)).then((function(e){return e.json()})).then(u).then((function(){return p(!1)})).catch(w))}),[a,t]),t.length<3?Object(s.jsx)(o.a.Header,{children:Object(s.jsx)("h5",{children:"Results"})}):m?Object(s.jsx)(o.a.Header,{children:Object(s.jsx)("h5",{children:"Loading..."})}):y?(console.log(JSON.stringify(y,null,2)),Object(s.jsx)(o.a.Header,{children:Object(s.jsx)("h5",{children:"Error! Please contact saahil.jaffer@uwaterloo.ca"})})):b?"False"===b.Response?Object(s.jsx)(o.a.Header,{children:Object(s.jsxs)("h5",{children:['No results for "',t,'"']})}):Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a.Header,{children:Object(s.jsxs)(o.a.Title,{children:['Results for "',t,'"']})}),Object(s.jsx)(o.a.Body,{style:{padding:"0"},children:Object(s.jsx)(g,{data:b,nominated:i,setNominated:c})}),Object(s.jsx)(o.a.Footer,{children:Object(s.jsx)(j.a,{className:"justify-content-center",children:Object(s.jsx)(f,{page:a,setPage:l,data:b})})})]}):null}function v(e){var t=e.nominated,a=e.setNominated;return Object(s.jsx)(O.a,{variant:"flush",children:t.list.map((function(e){return Object(s.jsx)(O.a.Item,{children:Object(s.jsxs)(j.a,{className:"align-items-center",children:[Object(s.jsx)(d.a,{className:"px-2",sm:"auto",style:{width:"auto"},children:Object(s.jsx)(x.a,{onClick:function(){return a({list:t.list.filter((function(t){return t.imdbID!==e.imdbID}))})},variant:"secondary",size:"sm",name:"remove",value:e.imdbID,children:"Remove"})}),Object(s.jsx)(d.a,{className:"px-2",sm:"auto",style:{width:"auto"},children:Object(s.jsx)(m.a,{src:p(e.Poster),alt:"",style:{height:"40px",width:"27px"},rounded:!0})}),Object(s.jsxs)(d.a,{className:"px-2",children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})}function y(e){var t=e.nominated,a=e.setNominated;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(o.a.Header,{children:Object(s.jsx)("h5",{children:"Nominations"})}),Object(s.jsx)(o.a.Body,{style:{minHeight:"0",padding:"0"},children:Object(s.jsx)(v,{nominated:t,setNominated:a})})]})})}var w=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),b=Object(r.a)(i,2),u=b[0],O=b[1],x=JSON.parse(localStorage.getItem("nominated")),m=Object(n.useState)(x||{list:[]}),p=Object(r.a)(m,2),f=p[0],g=p[1];return Object(n.useEffect)((function(){localStorage.setItem("nominated",JSON.stringify(f))}),[f]),document.body.style="background: #E9E9EC;",Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(j.a,{children:Object(s.jsxs)(d.a,{className:"py-3",children:[Object(s.jsx)("h2",{children:"The Shoppies"}),Object(s.jsx)(h,{setTitle:c,setPage:O})]})}),Object(s.jsxs)(j.a,{children:[Object(s.jsx)(d.a,{className:"py-3",children:Object(s.jsx)(o.a,{className:"w-100",children:Object(s.jsx)(N,{title:a,page:u,setPage:O,setNominated:g,nominated:f})})}),Object(s.jsx)("div",{className:"d-md-none w-100"}),Object(s.jsx)(d.a,{className:"py-3",children:Object(s.jsx)(y,{nominated:f,setNominated:g})})]})]})})};a(25);i.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.805d0cd2.chunk.js.map