"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[657],{9657:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var a,r,o,i,s,l,c,u,p,d,m=t(9434),x=t(8174),f=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.err},g=function(n){var e=n.contacts.items,t=n.filter;return t?e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):e},Z=t(2791),v=t(3634),j=t(1036),w=t(168),y=t(6444),k=y.ZP.form(a||(a=(0,w.Z)(["\n  width: 500px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),C=y.ZP.button(r||(r=(0,w.Z)(["\n  width: 502px;\n  padding: 10px;\n  font-family: 'Lato', sans-serif;\n  font-size: 0.875em;\n  color: #75706c;\n  background: transparent;\n\n  outline: none;\n  cursor: pointer;\n\n  border: solid 1px #b3aca7;\n\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n\n  :hover {\n    background: #b3aca7;\n    color: #e2dedb;\n  }\n"]))),z=y.ZP.input(o||(o=(0,w.Z)(["\n  font-family: 'Lato', sans-serif;\n  font-size: 0.875em;\n  width: 470px;\n  height: 50px;\n  padding: 0px 15px 0px 15px;\n\n  background: transparent;\n  outline: none;\n  color: #726659;\n\n  border: solid 1px #b3aca7;\n\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n\n  :hover {\n    background: #b3aca7;\n    color: #e2dedb;\n  }\n"]))),L=t(1634),P=function(n){return n.filter},A=t(184),I=function(){var n=(0,m.v9)(P),e=(0,m.I0)();return(0,A.jsx)(k,{children:(0,A.jsxs)("label",{children:["Find contacts by name",(0,A.jsx)(z,{type:"text",name:"filter",value:n,onChange:function(n){e((0,L.Tv)(n.target.value))}})]})})},F=y.ZP.li(i||(i=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),S=y.ZP.button(s||(s=(0,w.Z)(["\n  padding: 2px;\n  width: 90px;\n  font-family: 'Lato', sans-serif;\n  font-size: 0.875em;\n  color: #75706c;\n  background: transparent;\n\n  outline: none;\n  cursor: pointer;\n\n  border: solid 1px #b3aca7;\n\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n\n  :hover {\n    background: #b3aca7;\n    color: #e2dedb;\n  }\n"]))),_=function(n){var e=n.contact,t=e.name,a=e.number,r=e.id,o=(0,m.I0)();return(0,A.jsxs)(F,{children:[t,": ",a,(0,A.jsx)(S,{onClick:function(){return o((0,v.GK)(r))},children:"Delete"})]})},N=y.ZP.ul(l||(l=(0,w.Z)(["\n  text-align: center;\n  width: 482px;\n  margin: 20px auto 100px;\n  border: solid 1px #b3aca7;\n  padding: 20px 10px;\n"]))),q=function(){var n=(0,m.v9)(g);if(n.length)return(0,A.jsx)(N,{children:n.map((function(n){return(0,A.jsx)(_,{contact:n},n.id)}))})},D=t(9439),K=function(){var n=(0,Z.useState)(""),e=(0,D.Z)(n,2),t=e[0],a=e[1],r=(0,Z.useState)(""),o=(0,D.Z)(r,2),i=o[0],s=o[1],l=(0,m.v9)(f),c=(0,m.I0)(),u=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?a(r):"number"===t&&s(r)};return(0,A.jsxs)(k,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i};l.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()||n.number===e.number}))?x.Am.error("".concat(e.name," or ").concat(e.number," has already existed")):(c((0,v.uK)(e)),a(""),s(""))},children:[(0,A.jsxs)("label",{children:["Name",(0,A.jsx)(z,{type:"text",name:"name",value:t,onChange:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,A.jsxs)("label",{children:["Number",(0,A.jsx)(z,{type:"tel",name:"number",value:i,onChange:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(C,{type:"submit",children:"Add contact"})]})},B=y.ZP.h2(c||(c=(0,w.Z)(["\n  font-family: 'Lato', sans-serif;\n  margin: 0 auto;\n  margin: 10px 0;\n  font-size: 2.3em;\n  text-align: center;\n  letter-spacing: 7px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]))),E=(y.ZP.p(u||(u=(0,w.Z)(["\n  margin-top: 50px;\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 7px;\n  text-transform: uppercase;\n"]))),y.ZP.h2(p||(p=(0,w.Z)(["\n  font-family: 'Lato', sans-serif;\n  margin: 0 auto;\n  margin: 10px 0;\n  font-size: 2.3em;\n  text-align: center;\n  letter-spacing: 7px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]))),y.ZP.p(d||(d=(0,w.Z)(["\n  margin-top: 50px;\n  text-align: center;\n  font-family: 'Lato', sans-serif;\n  letter-spacing: 7px;\n  text-transform: uppercase;\n"]))));function G(){var n=(0,m.v9)(f),e=(0,m.v9)(h),t=(0,m.v9)(b),a=(0,m.I0)();return(0,Z.useEffect)((function(){a((0,v.yF)())}),[a]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(B,{children:"Phonebook"}),(0,A.jsx)(K,{}),e&&(0,A.jsx)(j.Z,{}),(0,A.jsx)(B,{children:"Contacts"}),t&&x.Am.error("Oops...Something went wrong"),0!==n.length&&(0,A.jsx)(I,{}),(0,A.jsx)(q,{}),0===n.length&&(0,A.jsx)(E,{children:"Contact list is empty =("}),(0,A.jsx)(x.Ix,{position:"top-right",autoClose:3e3,theme:"colored"})]})}}}]);
//# sourceMappingURL=657.ee13bb72.chunk.js.map