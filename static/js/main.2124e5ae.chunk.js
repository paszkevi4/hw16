(this.webpackJsonphw16=this.webpackJsonphw16||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),l=(a(13),a(1)),o=a(4),i=a(5),u=a(6),h=a(7),m=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],f=(a(14),function(e){var t=e.firstName,a=e.lastName,n=e.phone;e.gender;return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact-avatar"},r.a.createElement("div",{className:"contact-avatar__inner"},r.a.createElement("p",null,t.slice(0,1)))),r.a.createElement("div",{className:"contact-name"},"".concat(t," ").concat(a)),r.a.createElement("div",{className:"contact-phone"},n))}),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showMale:!0,showFemale:!0,showNotGiven:!1,searchValue:"",contacts:m},e.inputHandler=function(t){e.setState({searchValue:t.target.value})},e.arrange=function(t){var a=[];return e.state.showMale&&(a=[].concat(Object(l.a)(a),Object(l.a)(function(e){return e.filter((function(e){return"male"===e.gender}))}(t)))),e.state.showFemale&&(a=[].concat(Object(l.a)(a),Object(l.a)(function(e){return e.filter((function(e){return"female"===e.gender}))}(t)))),e.state.showNotGiven&&(a=a=[].concat(Object(l.a)(a),Object(l.a)(function(e){return e.filter((function(e){return!e.gender}))}(t)))),a=function(e){return e.sort((function(e,t){return e.firstName>t.firstName?1:-1}))}(a)},e.filterItself=function(t){return t.lastName.toLowerCase().includes(e.state.searchValue.toLowerCase())>0||t.firstName.toLowerCase().includes(e.state.searchValue.toLowerCase())>0||t.phone.includes(e.state.searchValue)>0},e.searchFilter=function(t){return t.filter((function(t){return e.filterItself(t)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{value:this.state.searchValue,onChange:this.inputHandler}),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"showMale",checked:this.state.showMale,onClick:function(){e.setState({showMale:!e.state.showMale})}}),r.a.createElement("label",{htmlFor:"showMale"},"show male"),r.a.createElement("input",{type:"checkbox",id:"showFemale",checked:this.state.showFemale,onClick:function(){e.setState({showFemale:!e.state.showFemale})}}),r.a.createElement("label",{htmlFor:"showFemale"},"show female"),r.a.createElement("input",{type:"checkbox",id:"showNotGiven",checked:this.state.showNotGiven,onClick:function(){e.setState({showNotGiven:!e.state.showNotGiven})}}),r.a.createElement("label",{htmlFor:"showNotGiven"},"show not given")),this.searchFilter(this.arrange(this.state.contacts)).map((function(e,t){return r.a.createElement(f,Object.assign({key:t},e))})))}}]),a}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2124e5ae.chunk.js.map