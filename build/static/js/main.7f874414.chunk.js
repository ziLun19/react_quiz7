(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(10),s=n.n(r),c=(n(68),n(16)),i=n(17),d=n(20),l=n(19),u=(n(69),n(36)),j=n(121),b=n(26),p=n(14),h=n(54),O=n(118),m=n(123),f=n(113),g=n(116),x=n(52),v=n.n(x),C=n(53),I=n.n(C),k=n(120),w=n(119),y=n(4),T=Object(f.a)((function(e){return{paper:{display:"flex",alignItems:"center"}}}));function L(){var e,t=T(),n=a.a.useState({amount:"",password:"",showPassword:!1}),o=Object(h.a)(n,2),r=o[0],s=o[1];return Object(y.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(y.jsx)(O.a,{}),Object(y.jsxs)("div",{className:t.paper,children:[Object(y.jsx)(m.a,{variant:"filled",required:!0,id:"filled-password-input",label:"email",name:"email",autoComplete:"current-password",autoFocus:!0}),Object(y.jsx)(m.a,{variant:"filled",required:!0,name:"password",label:"password",type:r.showPassword?"text":"password",value:r.password,onChange:(e="password",function(t){s(Object(p.a)(Object(p.a)({},r),{},Object(b.a)({},e,t.target.value)))}),id:"filled-password-input",autoComplete:"current-password",endAdornment:Object(y.jsx)(w.a,{position:"end",children:Object(y.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(p.a)(Object(p.a)({},r),{},{showPassword:!r.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:r.showPassword?Object(y.jsx)(v.a,{}):Object(y.jsx)(I.a,{})})})})]})]})}var D=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).todoRef=a.a.createRef(),e.addItemOnList=function(t){t.preventDefault();var n={todo:e.todoRef.current.value,isCompleted:!1};e.props.addToDoItems(n),t.currentTarget.reset()},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("form",{id:"todoList-form",onSubmit:this.addItemOnList,children:[Object(y.jsx)("input",{type:"text",name:"todosTxtbx",ref:this.todoRef,required:!0}),Object(y.jsx)("button",{children:"Add"})]})}}]),n}(a.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleChange=function(t){var n=Object(p.a)(Object(p.a)({},e.props.todoItems),{},Object(b.a)({},t.currentTarget.name,t.currentTarget.value));console.log(t.currentTarget.value),e.props.updateTodos(e.props.index,n)},e.toggleCheckbox=function(t){var n=Object(p.a)(Object(p.a)({},e.props.todoItems),{},Object(b.a)({},t.currentTarget.name,t.currentTarget.checked));e.props.updateTodos(e.props.index,n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("li",{className:this.props.todoItems.isCompleted?"done":null,children:[Object(y.jsx)("input",{type:"checkbox",name:"isCompleted",checked:this.props.todoItems.isCompleted,onChange:this.toggleCheckbox}),Object(y.jsx)("input",{type:"text",name:"todo",value:this.props.todoItems.todo,onChange:this.handleChange}),Object(y.jsx)("button",{className:"del-btn",onClick:function(){return e.props.removeToDoItem(e.props.index)},children:"x"})]})}}]),n}(a.a.Component);var A={textAlign:"center",padding:"10px"},P=function(){return Object(y.jsx)("header",{style:A,children:Object(y.jsx)("h1",{children:"CGU Todo list"})})},F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todoItems:{}},e.addToDoItems=function(t){var n=Object(p.a)({},e.state.todoItems);console.log(n),n["item".concat(Date.now())]=t,e.setState({todoItems:n})},e.removeToDoItem=function(t){var n=Object(p.a)({},e.state.todoItems);delete n[t],e.setState({todoItems:n})},e.updateTodos=function(t,n){var o=Object(p.a)({},e.state.todoItems);o[t]=n,e.setState({todoItems:o})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"ToDoApp",children:[Object(y.jsx)(P,{}),Object(y.jsx)(D,{addToDoItems:this.addToDoItems}),Object(y.jsx)("ul",{children:Object.keys(this.state.todoItems).map((function(t){return Object(y.jsx)(S,{index:t,todoItems:e.state.todoItems[t],removeToDoItem:e.removeToDoItem,updateTodos:e.updateTodos},t)}))})]})}}]),n}(o.Component);function N(e){return Object(y.jsx)(L,{})}function R(e){return Object(y.jsx)(F,{})}function q(e){return e.isLoggedIn?Object(y.jsx)(R,{}):Object(y.jsx)(N,{})}s.a.render(Object(y.jsx)(q,{isLoggedIn:!1}),document.getElementById("root"));var B=q,E=n(122);function J(e){return Object(y.jsx)(j.a,{onClick:e.onClick,type:"submit",variant:"contained",children:Object(y.jsx)(E.a,{color:"inherit",children:"sign in"})})}function M(e){return Object(y.jsx)("button",{onClick:e.onClick,children:"logout"})}var G=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).handleLoginClick=o.handleLoginClick.bind(Object(u.a)(o)),o.handleLogoutClick=o.handleLogoutClick.bind(Object(u.a)(o)),o.state={isLoggedIn:!1},o}return Object(i.a)(n,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this.state.isLoggedIn,t=null;return t=e?Object(y.jsx)(M,{onClick:this.handleLogoutClick}):Object(y.jsx)(J,{onClick:this.handleLoginClick}),Object(y.jsxs)("div",{children:[Object(y.jsx)(B,{isLoggedIn:e}),t]})}}]),n}(a.a.Component),U=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("section",{children:Object(y.jsx)(G,{})})})}}]),n}(o.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),r(e),s(e)}))};s.a.render(Object(y.jsxs)(a.a.StrictMode,{children:[Object(y.jsx)(U,{}),","]}),document.getElementById("root")),W()}},[[77,1,2]]]);
//# sourceMappingURL=main.7f874414.chunk.js.map