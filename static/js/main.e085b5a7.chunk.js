(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),i=n.n(r),a=n(2),u=c.a.createContext(""),s=n(0),l={li:{display:"flex",justifyContent:"space-between"},input:{display:"inlineBlock",margin:"0 5px 0 0"}};function d(e){var t=Object(o.useContext)(u).removeTodo,n=[];return e.todo.completed&&n.push("completed"),Object(s.jsxs)("li",{style:l.li,className:"todo-item",children:[Object(s.jsxs)("div",{className:n.join(""),children:[Object(s.jsx)("input",{type:"checkbox",style:l.input,onChange:function(){return e.onChange(e.todo.id)},checked:e.todo.completed}),Object(s.jsx)("span",{children:e.todo.title})]}),Object(s.jsx)("button",{className:"button-remove",onClick:function(){return t(e.todo.id)},children:"\xd7"})]})}function j(e){return Object(s.jsx)("ul",{className:"todo-list",children:e.todos.map((function(t){return Object(s.jsx)(d,{todo:t,onChange:e.onToggle},t.id)}))})}var p=n(5);function b(e){var t=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1];return{bind:{value:n,onChange:function(e){return c(e.target.value)}},clear:function(){return c("")},value:function(){return n}}}();return Object(s.jsx)("form",{onSubmit:function(n){n.preventDefault(),t.value().trim()&&(e.onCreate(t.value()),t.clear(""))},children:Object(s.jsx)("input",Object(p.a)({type:"text"},t.bind))})}function f(){var e=c.a.useState([]),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(s.jsx)(u.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}},children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(b,{onCreate:function(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}}),Object(s.jsx)("h2",{children:"Your Todo list."}),n.length?Object(s.jsx)(j,{todos:n,onToggle:function(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):Object(s.jsx)("p",{children:"You have not any todos."})]})})}n(11);i.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e085b5a7.chunk.js.map