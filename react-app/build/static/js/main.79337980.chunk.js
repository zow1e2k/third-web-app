(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),u=n.n(i);n(14);var c=function(){return r.a.createElement("header",{className:"navbar"},"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0435\u043b \u043e\u043d\u043b\u0430\u0439\u043d")},o=n(4),l=n(5),s=n(6),h=n(1),m=n(8),d=n(7),f=(n(15),{list:{},add:function(e,t,n,a,r){f.list[e]={id:e,name:t,hour:n,min:a,description:r},f.count++},remove:function(e){f.list[e]={}},count:0}),p=function(e){return/\S+/.test(e)},v=function(e){return/^\d+$/.test(e)},E=f.count,g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:"",hour:"",min:"",description:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(s.a)(n,[{key:"add",value:function(){var e=this.state,t=e.name,n=e.hour,a=e.min,r=e.description;p(t)&&p(n)&&p(a)&&p(r)&&v(n)&&v(a)&&(f.add(E++,t,n,a,r),this.forceUpdate())}},{key:"remove",value:function(e){f.remove(e),this.forceUpdate()}},{key:"handleChange",value:function(e,t){this.setState(Object(o.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this;E=f.count;var t="",n=[];if(0!==E)for(var a=0;a<E;a++)void 0!==f.list[a].name?(t="\u0414\u0435\u043b\u043e: "+f.list[a].name+"\n\u0427\u0430\u0441: "+f.list[a].hour+"\n\u041c\u0438\u043d\u0443\u0442\u044b: "+f.list[a].min+"\n\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: "+f.list[a].description,n[a]=t):console.log("ID: "+a);return r.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430",r.a.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleChange(t,"name")}}),"\u0427\u0430\u0441",r.a.createElement("input",{type:"text",value:this.state.hour,onChange:function(t){return e.handleChange(t,"hour")}}),"\u041c\u0438\u043d\u0443\u0442\u044b",r.a.createElement("input",{type:"text",value:this.state.min,onChange:function(t){return e.handleChange(t,"min")}}),"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",r.a.createElement("input",{type:"text",value:this.state.description,onChange:function(t){return e.handleChange(t,"description")}}),r.a.createElement("button",{onClick:function(){return e.add()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),Object.keys(n).map((function(t){return r.a.createElement("div",{key:t,className:"arr"},n[t],r.a.createElement("button",{onClick:function(){return e.remove(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})))}}]),n}(r.a.Component);n(16);var C=function(){return r.a.createElement("footer",null,"\u041a\u043e\u043d\u0435\u0446 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0435\u043b :)")};var b=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(g,null),r.a.createElement(C,null))};n(17);u.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.79337980.chunk.js.map