(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{10:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),r=c(3),i=c.n(r),s=(c(8),c(0));if(localStorage.getItem("productList"))var a=localStorage.getItem("productList").split(",").map((function(t,e){return Object(s.jsxs)("li",{className:"productListContainter__list--element",children:[t,Object(s.jsx)("button",{className:"productListContainter__list--element-deleteButton",onClick:function(){!function(t){var e=localStorage.getItem("productList").split(","),c=e.indexOf(t);console.log(c),c>-1&&e.splice(c,1),localStorage.setItem("productList",e)}(t),window.location.reload(!1)}})]},e)}));var l=function(){return Object(s.jsx)("div",{className:"productListContainter",children:Object(s.jsx)("ul",{className:"productListContainter__list",children:a})})},u=function(){var t=o.a.createRef(),e=function(){t.current.value=""},c=function(t){localStorage.setItem("productList",t)},n=function(){return localStorage.getItem("productList")},r=function(){window.location.reload(!1)};return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsxs)("div",{className:"app__firstSection",children:[Object(s.jsx)("form",{className:"app__enterProduct",children:Object(s.jsx)("input",{className:"app__enterProduct--input",ref:t,type:"text",placeholder:"Wprowad\u017a produkt",maxLength:"50"})}),Object(s.jsx)("button",{className:"app__submitProduct",onClick:function(){!function(o){if(""!==t.current.value){if(n()){var r=n().split(",");-1==r.indexOf(t.current.value)&&(r.push(t.current.value),c(r))}else c(t.current.value);e()}}(),r()}}),Object(s.jsx)("button",{className:"app__newList",onClick:function(){localStorage.removeItem("productList"),r()},children:"NEW"})]}),Object(s.jsx)("div",{className:"app__secondSection",children:Object(s.jsx)(l,{})})]})};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))},8:function(t,e,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.1859406e.chunk.js.map