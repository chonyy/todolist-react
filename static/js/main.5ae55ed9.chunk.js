(this["webpackJsonpproject-react"]=this["webpackJsonpproject-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),l=a(1),s=a(5);function i(e){var t=e.todo,a=e.toggletodo;return c.a.createElement("div",{class:"task"},c.a.createElement("label",{class:"checkcontain"},t.name,c.a.createElement("input",{type:"checkbox",checked:t.complete,onChange:function(){a(t.id)}}),c.a.createElement("span",{class:"checkmark"})))}function u(e){var t=e.todos,a=e.toggletodo;return t.map((function(e){return c.a.createElement(i,{key:e.id,todo:e,toggletodo:a})}))}var m=a(4),d=a.n(m);a(13);var f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&o(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(a))}),[a]),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"title"},"To Do List"),c.a.createElement("div",{class:"line"}),c.a.createElement("div",{class:"tasks"},c.a.createElement(u,{todos:a,toggletodo:function(e){var t=Object(l.a)(a),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,o(t)}}),c.a.createElement("div",{class:"left"},a.filter((function(e){return!e.complete})).length," tasks left to do"),c.a.createElement("div",{class:"addtask"},c.a.createElement("div",{class:"form__group"},c.a.createElement("input",{ref:r,type:"input",class:"form__field",placeholder:" Enter tasks...",name:"Task",id:"name",required:!0}),c.a.createElement("label",{for:"name",class:"form__label"},"Enter Task...")),c.a.createElement("button",{onClick:function(e){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(l.a)(e),[{id:d()(),name:t,complete:!1}])})),r.current.value=null)}},"ADD TODO")),c.a.createElement("button",{onClick:function(){var e=a.filter((function(e){return!e.complete}));o(e)}},"CLEAR COMPLETED")))};r.a.render(c.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.5ae55ed9.chunk.js.map