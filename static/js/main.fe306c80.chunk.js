(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),l=(n(2),n(4)),o=n(5),u=n(8),s=n(7),b=n(6),m=n.n(b),f=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={activeTabTitle:"Tab 1"},t.onTabSelected=function(e){t.setState({activeTabTitle:e})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state.activeTabTitle;return c.a.createElement("div",null,e.map((function(e){return c.a.createElement("button",{className:m()("button",{active:n===e.title}),key:e.title,type:"button",onClick:function(){t.onTabSelected(e.title)}},e.title)})),c.a.createElement("div",{className:"content"},e.find((function(t){return t.title===n})).content))}}]),n}(c.a.Component),p=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],v=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(f,{tabs:p}))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))},2:function(t,e,n){},9:function(t,e,n){t.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.fe306c80.chunk.js.map