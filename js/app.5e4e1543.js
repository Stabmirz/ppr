(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-dbfe7128":"37ba09ce"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-dbfe7128":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-dbfe7128":"d59ee796"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ppr/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00fe":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACNFBMVEUAAAD/qlX/gED/mTP/gCv/qiv/kiTfgCD/nyD/iy7qlSv/lSvriSftkiT/kiTuiCL3jCH3lCH3jyD3ix/3kx/4jx74kh3xjhz4jhz5jx/zkh7zjh75jh75kR35jiL2kCD2jSD2jx/2kR/3kR73jh31jx/4jx/4kR/1jx/4jx/4kB71jh71kSD1jyD2jh/2kR/2kB/2jx72kB72jyD3jh/3kR/3jx/0jx73jx70kB70jh70jx33jyD0jiD3kSD1jx/3jx/1jh/3kB/1jx/3jx/4jx71kB74kB71jh31jyD4jyD2jh72jx72jx72kB73jh73kR70jx73kB/1jx/3jx/1kB73kB73jx71jx71jx33kR/3kB31kR33jx70jx72kR70jh72kB70jx/1kB31kB71jx71jx71kR71jh71jx71jh/3kB/3jx/0jh/2kB/0kB/2jx30kB32kB30jx32jx70jx72kR71jx72jh72kB72jx/2kB/2jx32jx32jx71jh71kB/1jx/1kB/3jx73kB72jx72jx71jx72kB72jx71jh72kB73jx/2jx32jx72jx72kB72jh72jx72jx72jx/2jh/2jx/1jx71jx71kB71jh71jh71jx71jx/3jx/3jh/1jx/2jx/1jx71jx31jh32jx71jx72kB72jx72jx/2kSL2kiP2kiT2kyX5sWP5s2b5t2/5uXP5unX6vHn6wID96dL96tX+8eL+8eT+8uX//Pn///8GIllkAAAAqHRSTlMAAwQFBgYHCAgLDAwNDg4PHx8gISEiIyQkKSorKywtNzg5Ojw9SUlKS0tMTU9QUVFTVFVZWlpbXV1eX2BgYWFiYmNjZGRmZ2doaWlvcHZ3eHh5fH19fn5/gIKChYaGiYmKiouXl5iZmZqbnJydpaWmpqenqKipqaqsrK2ur7CxtbW2tru8vcLDw8TF19ja5OXl5ubo6Onp7e7u7/Dw8fHy+vr7/P39/v4yNSI/AAAAAWJLR0S71LZ3TAAAAzFJREFUSMeNl/lDjEEYx6c2sRXa1YFQKXKk0IEOHZYQlbat7SLS6kCRIx2kJTqJREkpWuO+Quw/Z+udmXfefWfed74/zc58P7PvO/PM8z4DAFN+a2MTLPkFVmtBvmVXbLgfEFZQdHaJXaGSrOhAIXRNaqmdodIUsy4ammPnKjtE+4ET7ZpKXs1nN56y66gogoP67rALaJsvi122X+mqrm/vcTp72uurlf3py9Ws8SjtuNA/8g4iuR73OeixPKM3639EHq3oega9NNZVIY8fX+H1vuny2I1JyNBEq+xIU773TjJwbghyNFhDTHE0u4F0X5yGXE01EtsmmV1J9rdlFmrozXWy30EE3ov7rsxBTc01Y+duEs/kmWehjmaasBcfk2z0++w01NUUXrVcdAbxZENQQIPYbVqCU9Gvm1BIV/EJW2QDbCiuJsXgcRRrtgAPvBnNdBsKqhMBUdRyKeP56/ePPHgUAZmePGmVmvVKxz/3wk8efl4irH4gHM3TrzS4Pfo7/5kJP0BIGIhFrSdqmIcPIyQGJKC84WLBbNxVJTHxwMJ8ZQIz8TocZCekRjsXZuBtEpMPCqTGXQ1YhXdLzEmAduq+Jux2/35PDd6TmGJR+BcTFnrshflPzMcWWDAvlFqwQ3pbpULJVuXoBQkDha5KHCQ4PEdYMAulwxMfjD41zEYh7EVIKDCgvXJ4H8k/Pz5wjmQtOpIGALLQPGMKw5dvPBQ+RUCGJ5NEo3aXaBrqQEAknQAnxNjn5VQCBClopmticAuyJy3lbTNO44Mi7AB2B0ufDLxkpwUy96saarkWFYIna5zRY183IGuZCX8m92C6WecT+/YSdibKhV8RoTX/e+Yy9hVSdWwEqReapvjsywZiW08XJdtJdw13zQfOENMWZSmVJhdKreMs9EWL7Djgo1HEdY6q4rmjXB4/piogjXl0iVj38BHJDq7h3lp67LCRUbjuUxaoVY5b3U7nnTZHpbI/zZ9ZMseJlMxbfTgVd0SRHlq4jl/qByaWaV8TVmneMswH+WimSfd+Y0q2sUhbUrDQzcoYlVmsJIszIo3ilzpDWEx8rnQdzI2PCTOwXf8BKmfFT86NaYQAAAAASUVORK5CYII="},"0347":function(t,e,n){"use strict";var a=n("e36b"),s=n.n(a);s.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"054c":function(t,e,n){"use strict";var a=n("3641"),s=n.n(a);s.a},"19d2":function(t,e,n){},"1d55":function(t,e,n){"use strict";var a=n("7d98"),s=n.n(a);s.a},2243:function(t,e,n){"use strict";var a=n("84f6"),s=n.n(a);s.a},"35aa":function(t,e,n){t.exports=n.p+"img/handyman.0083b46d.png"},"362c":function(t,e,n){t.exports=n.p+"img/storefront-window.3f17b20e.png"},3641:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=(n("d3b7"),n("8c4f")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Form"),n("Business"),n("Map"),n("Ratings"),n("List"),n("Badge"),n("Video"),n("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form container",style:{backgroundImage:"url("+t.bg1+")"}},[a("div",{staticClass:"bg",style:{backgroundImage:"url("+t.bg2+")"}},[t._m(0),a("div",{staticClass:"input-container"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"input input1",attrs:{type:"text",placeholder:"Current Location"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.businessName,expression:"businessName"}],staticClass:"input input2",attrs:{type:"text",placeholder:"Business name, Plumber, HVAC..."},domProps:{value:t.businessName},on:{input:function(e){e.target.composing||(t.businessName=e.target.value)}}})]),a("div",[a("input",{staticClass:"input input3",attrs:{type:"submit",value:"Find Business"},on:{click:t.search}})])])]),a("img",{staticClass:"border",attrs:{src:n("a67e")}})])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h1",[t._v("Search for the Best Businesses at BusinessRate")]),n("p",[t._v(" Find rated businesses in your local area or across the country and instantly view their latest ratings and reviews ")])])}],u=n("c88d"),l=n.n(u),d=n("6ed6"),p=n.n(d),f={name:"Form",data:function(){return{location:"",businessName:"",bg1:l.a,bg2:p.a}},methods:{search:function(){alert("button clicked")}}},m=f,v=(n("0347"),n("2877")),g=Object(v["a"])(m,o,c,!1,null,"7d62c173",null),h=g.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"business container"},[a("h1",[t._v("It is Fast and Easy to Find Best Rated Businesses in Your Area.")]),a("div",{staticClass:"businesses"},[a("div",{staticClass:"restaurant"},[a("div",[a("img",{attrs:{src:n("c9eb")}})]),a("div",[a("p",[t._v("Restaurant")])])]),a("div",{staticClass:"handyman"},[a("div",[a("img",{attrs:{src:n("35aa")}})]),a("div",[a("p",[t._v("Handyman")])])]),a("div",{staticClass:"plumber"},[a("div",[a("img",{attrs:{src:n("92fe")}})]),a("div",[a("p",[t._v("Plumber")])])]),a("div",{staticClass:"electrician"},[a("div",[a("img",{attrs:{src:n("b43e")}})]),a("div",[a("p",[t._v("Electrician")])])])])])}],x={name:"Business"},k=x,_=(n("054c"),Object(v["a"])(k,j,b,!1,null,"686decde",null)),B=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-wrapper"},[a("div",{staticClass:"map-container",style:{backgroundImage:"url("+t.bg1+")"}},[t._m(0),t._m(1)]),a("img",{staticClass:"map border",attrs:{src:n("a67e")}})])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("img",{attrs:{src:n("c912")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-text"},[n("h1",[t._v(" Our Comprehensive Research and Evaluations Allow us to Rate each Business to Help You Save Time Finding the Very Best ")])])}],A={name:"Map",data:function(){return{bg1:l.a}}},E=A,w=(n("c012"),Object(v["a"])(E,C,y,!1,null,"add7c808",null)),R=w.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ratings container"},[a("h1",[t._v("How Your Favorite Business Earned its Rank")]),a("p",[t._v("All BusinessRate Ratings are Based on 3 Key Factors:")]),a("img",{staticClass:"ratings-img",attrs:{src:n("da0f")}})])}],T={name:"Ratings"},N=T,F=(n("ee33"),Object(v["a"])(N,S,P,!1,null,"7ec676dd",null)),L=F.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list-container",style:{backgroundImage:"url("+t.bg1+")"}},[t._m(0),t._m(1)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-text"},[n("h1",[t._v(" List Your Business ")]),n("p",[t._v(" Achieve Your BusinessRate Status ")]),n("p",[t._v(" Gain Entry to our Premiere Directory ")]),n("a",{staticClass:"signUpButton",attrs:{href:"/login"}},[t._v("Sign Up Now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-img"},[a("img",{attrs:{src:n("362c")}})])}],I={name:"List",data:function(){return{bg1:l.a}}},X=I,V=(n("fb41"),Object(v["a"])(X,D,O,!1,null,"15d08f97",null)),H=V.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"badge-container"},[a("div",{staticClass:"badge"},[a("div",{staticClass:"badge-text"},[a("h1",[t._v("Look for Businesses With This Sign of Quality")])]),a("div",{staticClass:"badge-img"},[a("img",{attrs:{src:n("ebf9")}})])])])}],M={name:"Badge"},Y=M,U=(n("2243"),Object(v["a"])(Y,J,q,!1,null,"06bcf7c2",null)),Q=U.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-container"},[a("div",{staticClass:"video"},[a("span",{staticClass:"video-text"},[t._v(" Watch the BusinessRate Video ")]),a("button",{staticClass:"play",on:{click:t.play}},[a("img",{attrs:{src:n("00fe")}})])])])},K=[],z={name:"Video",methods:{play:function(){alert("video playing")}}},Z=z,G=(n("1d55"),Object(v["a"])(Z,W,K,!1,null,"cd80075a",null)),$=G.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-container"},[a("div",{staticClass:"footer-text"},[a("img",{attrs:{src:n("a1cc")}}),a("p",[t._v(" The BusinessRate ranking is based on customer satisfaction, online presence, and social engagement. Find businesses online or list your business today. ")])]),a("div",{staticClass:"footer-menu"},[a("div",{staticClass:"company"},[a("h1",[t._v("Company")]),a("a",{attrs:{href:"#"}},[t._v("About")]),a("a",{attrs:{href:"#"}},[t._v("Legal")]),a("a",{attrs:{href:"#"}},[t._v("Blog")]),a("a",{attrs:{href:"#"}},[t._v("Contact")]),a("a",{attrs:{href:"#"}},[t._v("Report Spam")]),a("a",{attrs:{href:"#"}},[t._v("Branding Guidelines")]),a("a",{attrs:{href:"#"}},[t._v("Supported Sources")])]),a("div",{staticClass:"get-listed"},[a("h1",[t._v("Get Listed")]),a("a",{attrs:{href:"#"}},[t._v("Login")]),a("a",{attrs:{href:"#"}},[t._v("Sign Up")]),a("a",{attrs:{href:"#"}},[t._v("Add Business Free")]),a("a",{attrs:{href:"#"}},[t._v("Suggest a Business")]),a("a",{attrs:{href:"#"}},[t._v("Featured Pick")]),a("a",{attrs:{href:"#"}},[t._v("Compare Plans")])])])]),a("span",{staticClass:"copyright"},[t._v("©2020 BusinessRate. All Rights Reserved")])])}],nt={name:"Footer"},at=nt,st=(n("8a40"),Object(v["a"])(at,tt,et,!1,null,"8e038594",null)),rt=st.exports,it={name:"Home",components:{Form:h,Business:B,Map:R,Ratings:L,List:H,Badge:Q,Video:$,Footer:rt}},ot=it,ct=Object(v["a"])(ot,r,i,!1,null,null,null),ut=ct.exports;a["a"].use(s["a"]);var lt=new s["a"]({mode:"history",routes:[{path:"/ppr/",name:"Home",component:ut},{path:"/ppr/about",name:"About",component:function(){return n.e("chunk-dbfe7128").then(n.bind(null,"f820"))}}]}),dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},pt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"nav container"},[a("nav",[a("div",{staticClass:"menu-icons",on:{click:t.show}},[a("i",{staticClass:"icon ion-md-menu"}),a("i",{staticClass:"icon ion-md-close"})]),a("router-link",{staticClass:"logo",attrs:{to:"/ppr/"}},[a("img",{attrs:{src:n("a1cc")}})]),a("ul",{staticClass:"nav-list"},[a("li",[a("router-link",{attrs:{to:"/ppr/"}},[t._v("Company "),a("i",{staticClass:"icon ion-md-arrow-dropdown"})]),a("ul",{staticClass:"sub-menu"},[a("li",[a("router-link",{attrs:{to:"/ppr/about"}},[t._v("About")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/legal"}},[t._v("Legal")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/blog"}},[t._v("Blog")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/contact"}},[t._v("Contact")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/report-spam"}},[t._v("Report Spam")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/branding-guidelines"}},[t._v("Branding Guidelines")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/supported-sources"}},[t._v("Supported Sources")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/ppr/"}},[t._v(" Get Listed "),a("i",{staticClass:"icon ion-md-arrow-dropdown"})]),a("ul",{staticClass:"sub-menu"},[a("li",[a("router-link",{attrs:{to:"/ppr/benefits-of-joining"}},[t._v("Benefits of Joining")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/add-business-free"}},[t._v("Add Business Free")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/suggest-a-business"}},[t._v("Suggest a Business")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/featured-picks"}},[t._v("Featured Picks")])],1),a("li",[a("router-link",{attrs:{to:"/ppr/compare-plans"}},[t._v("Compare Plans")])],1)])],1),a("li",[a("router-link",{attrs:{to:"/ppr/login"}},[t._v("Login/Sign Up")])],1)])],1)]),a("img",{staticClass:"border",attrs:{src:n("a67e")}})])},mt=[],vt={name:"NavBar",methods:{show:function(){var t=function(t){return document.querySelector(t)};t("nav").classList.toggle("active")}}},gt=vt,ht=(n("b832"),Object(v["a"])(gt,ft,mt,!1,null,"894245b2",null)),jt=ht.exports,bt={name:"App",components:{NavBar:jt}},xt=bt,kt=(n("034f"),Object(v["a"])(xt,dt,pt,!1,null,null,null)),_t=kt.exports;a["a"].config.productionTip=!1,new a["a"]({router:lt,render:function(t){return t(_t)}}).$mount("#app")},"6ed6":function(t,e,n){t.exports=n.p+"img/phoenix-city-25.0ea890b1.png"},"7d0c":function(t,e,n){},"7d98":function(t,e,n){},"84f6":function(t,e,n){},"85ec":function(t,e,n){},"8a40":function(t,e,n){"use strict";var a=n("bd74"),s=n.n(a);s.a},"92fe":function(t,e,n){t.exports=n.p+"img/plumber.88f357b0.png"},a1cc:function(t,e,n){t.exports=n.p+"img/logo_sm.66aa0612.png"},a67e:function(t,e,n){t.exports=n.p+"img/gold-striped-background-1.2bf176e1.jpg"},b43e:function(t,e,n){t.exports=n.p+"img/electrician.c9629889.png"},b832:function(t,e,n){"use strict";var a=n("cfc1"),s=n.n(a);s.a},bd74:function(t,e,n){},c012:function(t,e,n){"use strict";var a=n("19d2"),s=n.n(a);s.a},c88d:function(t,e,n){t.exports=n.p+"img/radial-gradient.7b7c18be.jpg"},c912:function(t,e,n){t.exports=n.p+"img/map-transparent.a305bcba.png"},c9eb:function(t,e,n){t.exports=n.p+"img/restaurant.fe151522.png"},cfc1:function(t,e,n){},da0f:function(t,e,n){t.exports=n.p+"img/ratings.3423c8a9.jpg"},e36b:function(t,e,n){},ebf9:function(t,e,n){t.exports=n.p+"img/busrate-badge.1e2cbd9a.png"},ee33:function(t,e,n){"use strict";var a=n("7d0c"),s=n.n(a);s.a},fb41:function(t,e,n){"use strict";var a=n("ff55"),s=n.n(a);s.a},ff55:function(t,e,n){}});
//# sourceMappingURL=app.5e4e1543.js.map