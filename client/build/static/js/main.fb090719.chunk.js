(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n(14),s=n.n(r),o=(n(84),n(9)),i=n(30),l=n(11),j=n.n(l),u=n(21),d=n(16),b=Object(a.createContext)({links:[],pushLink:function(){}}),p=n(27),h=n(128),x=n(152),O=n(38),f=n(131),m=Object(h.a)((function(e){return{links:{textDecoration:"none",color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"1px",fontFamily:"Roboto",fontWeight:"500",transition:"all 0.3s ease","&:hover":{opacity:.8,borderBottom:"1px solid"}},breadcrumbsRoot:{"& > ol > li > p":{textAlign:"left"},"& .MuiBreadcrumbs-separator":{color:"rgba(255,255,255,0.6)"}}}})),g=function(e){var t=e.links,n=(e.active,m());return Object(c.jsx)(x.a,{separator:Object(c.jsx)(f.a,{}),maxItems:2,className:n.breadcrumbsRoot,children:t.map((function(e,t){return Object(c.jsx)(O.a,{children:Object(c.jsx)(p.b,{color:"inherit",to:e.route,className:n.links,children:e.text})},t)}))})},v=n(135),y=n(136),k=n(138),w=n(139),C=n(140),S=n(153),N=n(141),I=n(151),R=n(137),M=n(142),D=n(70),E=n.n(D),P=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(d.a)(r,2),o=s[0],i=s[1];return[n,o,function(){i(null)},function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,r,s,o,l=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:{},r=l.length>3&&void 0!==l[3]?l[3]:{},s=l.length>4&&void 0!==l[4]?l[4]:"",e.prev=4,c(!0),i(null),e.next=9,E()(t,{method:n,data:a,headers:r,responseType:s});case 9:if("success"!==(o=e.sent).data.status){e.next=13;break}return c(!1),e.abrupt("return",o.data);case 13:if("blob"!==s){e.next=16;break}return c(!1),e.abrupt("return",o);case 16:e.next=23;break;case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),i("blob"===s?"Error while downloading. Please try again":e.t0.response.data.error),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}()]},F=(n(108),function(){return Object(c.jsx)("div",{className:"center",children:Object(c.jsxs)("div",{className:"lds-ring",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})}),H=n(150),T=n(132),L=n(133),B=n(134),A=function(e){var t=e.showModal,n=e.closeModalHandler,a=e.title,r=e.isLoading,s=e.error,o=e.children,i=e.footer;return Object(c.jsxs)(H.a,{open:t,onClose:n,children:[Object(c.jsx)(T.a,{children:a}),Object(c.jsxs)(L.a,{children:[r?Object(c.jsx)(F,{}):o,s&&Object(c.jsx)(O.a,{color:"secondary",children:s}),Object(c.jsx)(B.a,{children:i})]})]})},U=(n(109),Object(h.a)({root:{minHeight:"80vh",border:"1px solid rgba(1,1,1,0.2)",padding:"10px"},header:{textAlign:"right",display:"flex",justifyContent:"space-between",alignItems:"center"},cardRoot:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"all 0.3s ease","&:hover":{transform:"translateY(-2px)",boxShadow:"0px 3px 10px rgba(0,0,0,0.2)",backgroundColor:"rgba(255,255,255, 1)"},"& span":{fontFamily:"Roboto",fontWeight:"bold"},backgroundColor:"rgba(255,255,255, 0.8)"},file:{display:"none"},errText:{padding:"10px",border:"1px solid red",borderRadius:"6px",marginBottom:"10px"}})),_=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=P(),l=Object(d.a)(s,4),p=l[0],h=l[1],x=l[2],f=l[3],m=Object(o.h)(),D=m.semId,E=m.subId,H=Object(a.useContext)(b),T=Object(a.useRef)(),L=U();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://my-notes-node.herokuapp.com","/docs/").concat(D,"/").concat(E));case 3:t=e.sent,r(t.docs),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(),e.next=4,f("".concat("https://my-notes-node.herokuapp.com","/docs/").concat(t,"?type=").concat(n),"GET",null,{},"blob");case 4:c=e.sent,console.log("RESPONSE",c),a=new Blob([c.data],{type:c.headers["content-type"]}),r=URL.createObjectURL(a),window.open(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("ERROR",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("doc",t.target.files[0]),e.prev=2,e.next=5,f("".concat("https://my-notes-node.herokuapp.com","/docs/").concat(D,"/").concat(E),"POST",c);case 5:"success"===(a=e.sent).status&&r([].concat(Object(i.a)(n),[a.doc])),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(v.a,{children:Object(c.jsxs)("div",{className:L.root,children:[Object(c.jsxs)("div",{className:L.header,children:[Object(c.jsx)(g,{links:H.links,active:"/".concat(D,"/").concat(E)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"file",id:"upload",className:L.file,ref:T,onChange:_}),Object(c.jsx)(y.a,{onClick:function(){T.current.click()},title:"Upload file",children:Object(c.jsx)(R.a,{color:"secondary"})})]})]}),h&&Object(c.jsx)(O.a,{color:"error",align:"center",className:L.errText,children:"Something went wrong. Please try again"}),p&&0!==n.length&&Object(c.jsx)(A,{title:"Processing, please wait",showModal:!0,children:Object(c.jsx)(F,{})}),p&&0===n.length?Object(c.jsx)(F,{}):Object(c.jsx)(I.a,{in:!p&&n.length>0,timeout:3e3,classNames:"files",children:Object(c.jsx)(k.a,{container:!0,spacing:4,children:n.map((function(e){return Object(c.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,children:Object(c.jsxs)(w.a,{className:L.cardRoot,variant:"outlined",children:[Object(c.jsx)(C.a,{title:e.name,subheader:"".concat(e.semester,", ").concat(e.subject),avatar:Object(c.jsx)(S.a,{children:e.name.split(".")[1]})}),Object(c.jsx)(N.a,{children:Object(c.jsx)(y.a,{title:"Download",onClick:function(){return B(e._id,"download")},children:Object(c.jsx)(M.a,{})})})]})},e._id)}))})})]})})},z=n(143),G=n(144),J=function(){return Object(c.jsx)(z.a,{position:"static",style:{backgroundColor:"#4D004D"},children:Object(c.jsx)(G.a,{children:Object(c.jsx)(v.a,{children:Object(c.jsx)(O.a,{variant:"h5",style:{color:"rgb(202,0,255)",fontFamily:"Pacifico",letterSpacing:"1px"},children:"My Notes"})})})})},W=n(148),Y=n(74),q=n(145),K=n(146),Q=(n(110),Object(h.a)((function(e){return{directory:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",margin:"10px 0",transition:"all 0.3s ease",backgroundColor:"rgba(255,255,255, 0.7)","&:hover":{cursor:"pointer",transform:"translateY(-2px)",boxShadow:"0px 2px 10px rgba(0,0,0,0.3)","& .MuiSvgIcon-root":{color:e.palette.primary.main}}},directoryDetails:{display:"flex",justifyContent:"space-around",fontFamily:"Roboto",letterSpacing:"1px",alignItems:"center","& .MuiSvgIcon-root":{marginRight:"10px"}}}}))),V=function(e){var t=e.dirs,n=e.root,r=Q(),s=Object(o.f)(),i=Object(o.g)(),l=Object(a.useContext)(b);return Object(c.jsx)(I.a,{in:t.length>0,timeout:500,classNames:"folders",children:Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsxs)(Y.a,{className:r.directory,variant:"outlined",elevation:2,onClick:function(){return function(e){s.push("".concat(n?"/".concat(e.slug):"".concat(i.pathname,"/").concat(e.slug))),n?l.links.push({text:e.name,route:"/".concat(e.slug)}):l.links.push({text:e.name,route:"".concat(i.pathname,"/").concat(e.slug)})}(e)},children:[Object(c.jsxs)("div",{className:r.directoryDetails,children:[Object(c.jsx)(q.a,{})," ",e.name]}),Object(c.jsx)(y.a,{className:r.deleteBtn,children:Object(c.jsx)(K.a,{})})]},e._id)}))})})},X=n(147),Z=Object(h.a)((function(e){return{input:{height:"30px",fontSize:"1.2rem"}}})),$=function(e){var t=e.setDirectories,n=e.showModal,r=e.closeModalHandler,s=e.semId,o=Object(a.useState)(""),i=Object(d.a)(o,2),l=i[0],b=i[1],p=P(),h=Object(d.a)(p,4),x=h[0],O=h[1],f=h[2],m=h[3],g=Z(),v=function(){var e=Object(u.a)(j.a.mark((function e(n){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=s?"".concat("https://my-notes-node.herokuapp.com","/subjects/").concat(s):"".concat("https://my-notes-node.herokuapp.com","/semesters"),e.prev=2,e.next=5,m(c,"POST",{name:l});case 5:a=e.sent,t(a),r(),b(""),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(A,{title:"Create a New Folder",showModal:n,closeModalHandler:r,isLoading:x,error:O,footer:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(X.a,{variant:"outlined",color:"primary",onClick:v,children:"Create"}),Object(c.jsx)(X.a,{variant:"outlined",color:"secondary",onClick:r,children:"Cancel"})]}),children:Object(c.jsx)("input",{type:"text",className:g.input,value:l,onChange:function(e){b(e.target.value),f()}})})},ee=Object(h.a)((function(e){return{root:{minHeight:"80vh",border:"1px solid rgba(1,1,1,0.2)",padding:"10px"},header:{textAlign:"right",display:"flex",justifyContent:"space-between",alignItems:"center"},input:{height:"30px",fontSize:"1.2rem"}}})),te=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),l=o[0],p=o[1],h=P([]),x=Object(d.a)(h,4),f=x[0],m=x[1],k=x[2],w=x[3],C=Object(a.useContext)(b),S=ee();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C.links=C.links.slice(0,1),e.prev=1,e.next=4,w("".concat("https://my-notes-node.herokuapp.com","/semesters"));case 4:t=e.sent,r(t.semesters),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)($,{showModal:l,setDirectories:function(e){r([].concat(Object(i.a)(n),[e.semester]))},closeModalHandler:function(){p(!1),k()},root:!0}),Object(c.jsx)(v.a,{children:Object(c.jsxs)("div",{className:S.root,children:[Object(c.jsxs)("div",{className:S.header,children:[Object(c.jsx)(g,{links:C.links,active:"/"}),Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{onClick:function(){p(!0)},title:"Create new folder",children:Object(c.jsx)(W.a,{color:"secondary"})})})]}),f&&0===n.length?Object(c.jsx)(F,{}):Object(c.jsx)(V,{dirs:n,root:!0}),m&&0===n.length&&Object(c.jsx)(O.a,{color:"error",children:"Something went wrong. Please try again"})]})})]})},ne=Object(h.a)({root:{minHeight:"80vh",border:"1px solid rgba(1,1,1,0.2)",padding:"10px"},header:{textAlign:"right",display:"flex",justifyContent:"space-between",alignItems:"center"}}),ce=function(){var e=Object(o.h)().semId,t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],l=Object(a.useState)(!1),p=Object(d.a)(l,2),h=p[0],x=p[1],f=P(),m=Object(d.a)(f,4),k=m[0],w=m[1],C=m[2],S=m[3],N=Object(a.useContext)(b),I=ne();Object(a.useEffect)((function(){(function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.links=N.links.slice(0,2),t.prev=1,t.next=4,S("".concat("https://my-notes-node.herokuapp.com","/subjects/").concat(e));case 4:n=t.sent,s(n.subjects),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}})()()}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)($,{showModal:h,setDirectories:function(e){s([].concat(Object(i.a)(r),[e.subject]))},closeModalHandler:function(){x(!1),C()},semId:e}),Object(c.jsx)(v.a,{children:Object(c.jsxs)("div",{className:I.root,children:[Object(c.jsxs)("div",{className:I.header,children:[Object(c.jsx)(g,{links:N.links,active:"/".concat(e)}),Object(c.jsx)("div",{children:Object(c.jsx)(y.a,{onClick:function(){x(!0)},title:"Create new folder",children:Object(c.jsx)(W.a,{color:"secondary"})})})]}),k&&0===r.length?Object(c.jsx)(F,{}):Object(c.jsx)(V,{dirs:r}),w&&0===r.length&&Object(c.jsx)(O.a,{color:"error",children:"Something went wrong. Please try again"})]})})]})},ae=n.p+"static/media/Endless-Constellation1.49a19961.svg";var re=function(){return Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(ae,")"),minHeight:"100vh"},children:Object(c.jsxs)(b.Provider,{value:{links:[{text:"ALL",route:"/"}]},children:[Object(c.jsx)(J,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:te}),Object(c.jsx)(o.a,{path:"/:semId/:subId",exact:!0,component:_}),Object(c.jsx)(o.a,{path:"/:semId",exact:!0,component:ce})]})]})})},se=n(71),oe=n(149),ie=Object(se.a)({palette:{}});s.a.render(Object(c.jsx)(p.a,{children:Object(c.jsx)(oe.a,{theme:ie,children:Object(c.jsx)(re,{})})}),document.getElementById("root"))},84:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.fb090719.chunk.js.map