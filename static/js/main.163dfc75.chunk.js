(this.webpackJsonpwtvr=this.webpackJsonpwtvr||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(91),i=a.n(l),r=(a(103),a(104),a(19)),o=a(24),m=a(25),s=a(27),u=a(26),b=a(31),d=a(28),E=a(49),p=a.n(E),h=(a(105),a(92)),g=a.n(h),N=a(50),v=a.n(N),I=(a(106),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).toggleAvatar=function(){e.setState({avatar:g.a})},e.toggleAvatarAgain=function(){e.setState({avatar:v.a})},e.state={avatar:v.a},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("img",{className:"avatar",alt:"Avatar",src:this.state.avatar,onMouseEnter:this.toggleAvatar,onMouseLeave:this.toggleAvatarAgain}))}}]),t}(c.a.Component)),A=a(22),O=(a(129),a(17)),Z=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).toggleFullscreen=n.toggleFullscreen.bind(Object(b.a)(n)),n.play=n.play.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"toggleFullscreen",value:function(){this.player.toggleFullscreen()}},{key:"play",value:function(){this.player.play()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"mobile-msg"},c.a.createElement("h1",null,"Looking for a content creator? Your search is over.",c.a.createElement("br",null),c.a.createElement("br",null),"Discover my bio in video!"),c.a.createElement("button",{className:"ghost-button",onClick:this.play},"Tap to see"),c.a.createElement("div",{id:"video-mobile"},c.a.createElement(A.Player,{loop:!0,ref:function(t){e.player=t},fluid:!1,width:0,autoPlay:!0,muted:!0,playsinline:!0,src:p.a},c.a.createElement(A.LoadingSpinner,null),c.a.createElement(A.ControlBar,{disableCompletely:!0})))),c.a.createElement("div",{className:"img-container",onDoubleClick:this.toggleFullscreen},c.a.createElement(A.Player,{loop:!0,ref:function(t){e.player=t},className:"test",fluid:!1,autoPlay:!0,muted:!0,playsinline:!0,src:p.a},c.a.createElement(A.LoadingSpinner,null),c.a.createElement(A.ControlBar,{disableCompletely:!0}))),c.a.createElement(O.Animated,{animationIn:"fadeInLeft",isVisible:!0,animationInDuration:1e3,animationOut:"zoomOutDown"},c.a.createElement(I,null)))}}]),t}(c.a.Component),w=(a(182),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"bio-container"},c.a.createElement("p",{className:"bio"},c.a.createElement("h2",null,"Searching for a content creator?",c.a.createElement("br",null),"Look no further."),"Hello, my name is Nico. I'm a graphic designer & web developer based in Brussels.",c.a.createElement("br",null),c.a.createElement("br",null),"I've already been working about 4 years in the music industry as digital content creator, community manager and record shop manager. I also have a master degree in PR and I have self-taught skills in digital marketing.",c.a.createElement("br",null),c.a.createElement("br",null),"I am often described as a creative, independent and hard-working person. I am deeply passioned with music and new technologies, I love to learn new stuff everyday.",c.a.createElement("br",null),c.a.createElement("br",null),"I mainly speak French, English and Dutch, but I also know a little of German, Spanish and Japanese.",c.a.createElement("br",null),c.a.createElement("br",null),"Today, I am now more than willing to take my professional career to the next level \ud83d\ude80",c.a.createElement("br",null),c.a.createElement("br",null))))}),M=(a(183),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"contact-sup"},c.a.createElement("h3",null,"Want to get to know me better?",c.a.createElement("br",null),"Drop me a mail!"),c.a.createElement("p",{className:"contact"},c.a.createElement("br",null),"testing@gmail.com",c.a.createElement("br",null),c.a.createElement("br",null),"Nico Fujuyoka",c.a.createElement("br",null),"Rue Saint-Laurent 36,",c.a.createElement("br",null),"1000 Brussels",c.a.createElement("br",null),"Belgium",c.a.createElement("br",null),c.a.createElement("br",null),"+ 32 2 558 58 11"))))}),y=a(36),k=a.n(y),f=(a(184),a(12));function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var R=c.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}),B=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return c.a.createElement("svg",j({height:"32px",id:"Layer_1",style:{enableBackground:"new 0 0 32 32"},viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",ref:t},n),a?c.a.createElement("title",null,a):null,R)},x=c.a.forwardRef((function(e,t){return c.a.createElement(B,j({svgRef:t},e))})),S=(a.p,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).toggleClass=function(){e.setState((function(e){return{slideIn:!e.slideIn}}))},e.state={slideIn:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header-sup",onClick:this.toggleClass},c.a.createElement(x,{className:"menu-bar"}),c.a.createElement("div",{className:"".concat(this.state.slideIn?"come-on-in":"come-on-out"," hamburger-menu")},c.a.createElement("div",{className:"menu-item-mobile"},c.a.createElement(f.b,{to:"/hiremeascontentcreator",className:"menu-text"},">cv")),c.a.createElement("div",{className:"menu-item-mobile"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/bio",className:"menu-text"},">bio")),c.a.createElement("div",{className:"menu-item-mobile"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/contact",className:"menu-text"},">contact")),c.a.createElement("div",{className:"menu-item-mobile"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/portfolio",className:"menu-text"},">portfolio"))),c.a.createElement("div",{className:"right-stuff"},c.a.createElement(O.Animated,{animationIn:"fadeInRight",isVisible:!0,animationInDuration:1e3,animationOut:"zoomOutDown"},c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"nav-sub"},c.a.createElement("div",{className:"menu-item"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/",className:"menu-text"},">cv")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/bio",className:"menu-text"},">bio")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/contact",className:"menu-text"},">contact")),c.a.createElement("div",{className:"menu-item"},c.a.createElement(f.b,{to:"/hiremeascontentcreator/portfolio",className:"menu-text"},">portfolio"))))),c.a.createElement(O.Animated,{animationIn:"fadeInUp",isVisible:!0,animationInDuration:1e3,animationOut:"zoomOutDown"},c.a.createElement("div",{className:"socials-footer"},c.a.createElement("p",{className:"footer-text"}),c.a.createElement("div",{className:"socials-icons"},c.a.createElement("a",{href:"https://www.instagram.com"},c.a.createElement("img",{className:"socials-icon",alt:"insta-icon",src:k.a})),c.a.createElement("a",{href:"https://www.instagram.com"},c.a.createElement("img",{className:"socials-icon",alt:"insta-icon",src:k.a})),c.a.createElement("a",{href:"https://www.instagram.com"},c.a.createElement("img",{className:"socials-icon",alt:"insta-icon",src:k.a})))))))}}]),t}(c.a.Component)),D=(a(186),a(96)),C=a.n(D),W=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"portfolio-container"},c.a.createElement("p",{className:"portfolio"},c.a.createElement("h2",null,"Want to see more of my work? Check it here."),c.a.createElement(O.Animated,{animationIn:"fadeInDown",isVisible:!0,animationInDuration:1e3,animationOut:"zoomOutDown"},c.a.createElement("img",{className:"dribbble",alt:"dribbble logo",width:"300px",src:C.a})),c.a.createElement("br",null))))},Y=a(97),z=a.n(Y),T=(a(187),function(){return c.a.createElement("div",{className:"logo-container"},c.a.createElement(O.Animated,{animationIn:"fadeInDown",isVisible:!0,animationInDuration:1e3,animationOut:"zoomOutDown"},c.a.createElement(f.b,{to:"/hiremeascontentcreator",className:"menu-text"},c.a.createElement("img",{className:"logo",alt:"Logo",src:z.a}))))});var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(T,{className:"logo"}),c.a.createElement(r.c,null,c.a.createElement(r.a,{exact:!0,path:"/hiremeascontentcreator",component:Z}),c.a.createElement(r.a,{path:"/hiremeascontentcreator/bio",component:w}),c.a.createElement(r.a,{path:"/hiremeascontentcreator/contact",component:M}),c.a.createElement(r.a,{path:"/hiremeascontentcreator/portfolio",component:W})),c.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f.a,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTE2VDA5OjUzOjI4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMC0xN1QxNDoyNzoxNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMC0xN1QxNDoyNzoxNSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEb3QgR2FpbiAyMCUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ5ZTEzN2MtYmFkNy1lMjQ3LTg1MGItNzViNzNiOWJmZDllIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjY1ZTIxYmUtNzI0ZS1lZjQyLTlmNWMtOTY5NmU5ZDg0MWMzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGE1YzBkZDAtNThlYS1jODRhLTk3YmItMzQ4MWFmZDI3OThjIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYTVjMGRkMC01OGVhLWM4NGEtOTdiYi0zNDgxYWZkMjc5OGMiIHN0RXZ0OndoZW49IjIwMTktMDQtMTZUMDk6NTM6MjgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ5ZTEzN2MtYmFkNy1lMjQ3LTg1MGItNzViNzNiOWJmZDllIiBzdEV2dDp3aGVuPSIyMDE5LTEwLTE3VDE0OjI3OjE1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ei35vgAAC0NJREFUeJztnVtzU9cVx3+SJUWW5CtuANcGxKUukxaY8gBhuGY6XCwVgwm2wWE6TId2+tDHdib5AH1oP0Gn7WQmTLgYsGNqcWuT0JAmDS8Ftyn10NgBOSamBtlGloVkoz7IQufIR/LZR+ccSyZ/v0jH2pf1P2vf1l57bcsaTMQ6oBk4OPNZil6gC+ic+WwSLIYT0ICFNpSFzoYUGWdI0GdYzQAjCUgJ3oqFBo159JHgLIYSoT8B5ZTjo4LjeQieiT4SvM0YAcYZ1ynPGehL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"},49:function(e,t,a){e.exports=a.p+"static/media/portfolio.28f676e9.mp4"},50:function(e,t,a){e.exports=a.p+"static/media/PIC2.8098f6a6.png"},92:function(e,t,a){e.exports=a.p+"static/media/PIC1.b9e9292c.png"},96:function(e,t,a){e.exports=a.p+"static/media/dribbble-4.9bb82e2c.svg"},97:function(e,t,a){e.exports=a.p+"static/media/NN_LOGO.1e849796.png"},98:function(e,t,a){e.exports=a(188)}},[[98,1,2]]]);
//# sourceMappingURL=main.163dfc75.chunk.js.map