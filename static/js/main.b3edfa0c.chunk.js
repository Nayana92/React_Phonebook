(this["webpackJsonpmonsters-inc"]=this["webpackJsonpmonsters-inc"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(12),n(3)),i=n(4),l=n(6),m=n(5),u=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"member",src:"https://robohash.org/".concat(e.member.id,"?set=set1&size=180x180")}),r.a.createElement("h2",null,e.member.name),r.a.createElement("p",null,e.member.email))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.members.map((function(e){return r.a.createElement(u,{key:e.id,member:e})})))}),d=(n(15),function(e){return r.a.createElement("input",{className:"search",type:"search",placeholder:e.placeholder,onChange:e.handleChange})}),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={members:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({members:t})}))}},{key:"render",value:function(){var e=this.state,t=e.members,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Phonebook"),r.a.createElement(d,{placeholder:"Seach members",handleChange:this.handleChange}),r.a.createElement(h,{members:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b3edfa0c.chunk.js.map