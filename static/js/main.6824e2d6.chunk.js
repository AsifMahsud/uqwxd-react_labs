(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),o=n.n(c),i=(n(14),n(1)),r=n(2),u=(n(15),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),u=Object(r.a)(o,2),d=u[0],m=u[1];return Object(a.useEffect)(function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&c(t)},[]),Object(a.useEffect)(function(){if(n.length>0){var e=JSON.stringify(n);localStorage.setItem("todos",e)}},[n]),l.a.createElement("div",{id:"todo-list"},l.a.createElement("h1",null,"Todo List"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("todoAdd").value,a={id:(new Date).getTime(),text:t.trim(),completed:!1};a.text.length>0?c(Object(i.a)(n).concat(a)):alert("Enter Valid Task"),document.getElementById("todoAdd").value=""}},l.a.createElement("input",{type:"text",id:"todoAdd"}),l.a.createElement("button",{type:"submit"},"Add Todo")),n.map(function(e){return l.a.createElement("div",{key:e.id,className:"todo"},l.a.createElement("div",{className:"todo-text"},l.a.createElement("input",{type:"checkbox",id:"completed",checked:e.completed,onChange:function(){return function(e){var t=Object(i.a)(n).map(function(t){return t.id===e&&(t.completed=!t.completed),t});c(t)}(e.id)}}),e.id===d?l.a.createElement("input",{type:"text",id:e.id,defaultValue:e.text}):l.a.createElement("div",null,e.text)),l.a.createElement("div",{className:"todo-actions"},e.id===d?l.a.createElement("button",{onClick:function(){return function(e){var t=Object(i.a)(n).map(function(t){return t.id===e.id&&(t.text=document.getElementById(e.id).value),t});c(t),m(null)}(e)}},"Submit Edits"):l.a.createElement("button",{onClick:function(){return m(e.id)}},"Edit"),l.a.createElement("button",{onClick:function(){return function(e){var t=Object(i.a)(n).filter(function(t){return t.id!==e});c(t)}(e.id)}},"Delete")))}),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Name: Muhammad Asif"),l.a.createElement("p",null,"Connect with me:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/asif543/",target:"_blank",rel:"noopener noreferrer"},"Linkedin")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:Asifmahsud543@gmail.com"},"Email")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/AsifMahsud",target:"_blank",rel:"noopener noreferrer"},"Github")))))}),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.6824e2d6.chunk.js.map