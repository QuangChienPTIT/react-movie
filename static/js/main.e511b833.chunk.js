(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/no-image.931f0521.png"},151:function(e,t,a){e.exports=a(257)},159:function(e,t,a){},160:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},220:function(e,t,a){},240:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),l=(a(156),a(157),a(158),a(159),a(22)),o=a(14),m=(a(160),a(86)),s=a.n(m),u=a(263),d=a(264),f=a(260),p="838ee94b4d4b50e41f33d7b1d6d3655d",v="https://api.themoviedb.org/3",E={action:{id:28,name:"Phim H\xe0nh \u0110\u1ed9ng"},adventure:{id:12,name:"Phim Phi\xeau L\u01b0u"},comedy:{id:35,name:"Phim H\xe0i"},crime:{id:80,name:"Phim H\xecnh S\u1ef1"},drama:{id:18,name:"Phim Ch\xednh K\u1ecbch"},fantasy:{id:14,name:"Phim Gi\u1ea3 T\u01b0\u01a1\u0309ng"},actionAdventure:{id:10759,name:"Action & Adventure"},animation:{id:16,name:"Phim Ho\u1ea1t H\xecnh"},documentary:{id:99,name:"Phim T\xe0i Li\u1ec7u"},family:{id:10751,name:"Phim Gia \u0110\xecnh"},kids:{id:10762,name:"Kids"},mystery:{id:9648,name:"Phim B\xed \u1ea8n"},news:{id:10763,name:"News"},reality:{id:10764,name:"Reality"},sciFiFantasy:{id:10765,name:"Sci-Fi & Fantasy"},soap:{id:10766,name:"Soap"},talk:{id:10767,name:"Talk"},warPolitics:{id:10768,name:"War & Politics"},western:{id:37,name:"Phim Mi\u1ec1n T\xe2y"}},g=[{title:"Trang ch\u1ee7",href:"/"},{title:"C\xe2\u0323p nh\xe2\u0323t",href:"/category/tv/news"},{title:"Gia \u0111i\u0300nh",href:"/category/movie/family"},{title:"Phim b\u1ed9",href:"/category/tv"},{title:"Ha\u0300nh \u0111\xf4\u0323ng",href:"/category/movie/action"},{title:"Anime",href:"/category/movie/animation"},{title:"Phim l\u1ebb",href:"/category/movie"},{title:"Xem th\xeam",sub:[{title:"TV Show",href:"/category/tv"},{title:"Phim vi\xea\u0303n t\u01b0\u01a1\u0309ng",href:"/category/movie/mystery"},{title:"G\xf3i \u0111\u1eb7c s\u1eafc",href:"/"},{title:"Thi\u1ebfu nhi",href:"/"},{title:"H\xe0i",href:"/category/movie/comedy"}]}];var h=function(e){return r.a.createElement(f.a,{theme:"dark",mode:e.mode,className:"menu"},g.map((function(e,t){return e.sub&&Array.isArray(e.sub)?r.a.createElement(f.a.SubMenu,{key:"sub".concat(t),title:e.title,className:"sub-menu"},e.sub.map((function(e,t){return r.a.createElement(f.a.Item,{key:t},r.a.createElement(o.b,{to:e.href},e.title))}))):r.a.createElement(f.a.Item,{key:t},r.a.createElement(o.b,{to:e.href},e.title))})))};a(186);function b(e){return r.a.createElement("div",{className:"main-navbar px-3 align-items-center justify-content-between d-none d-lg-flex"},r.a.createElement(o.b,{to:"/",className:"logo p-2"},r.a.createElement("img",{src:s.a,alt:"The movie db"})),r.a.createElement(h,{mode:"horizontal"}),r.a.createElement("div",{className:"navbar-action d-flex align-item-center"},r.a.createElement(u.a,{className:"mr-2 d-flex align-items-center"}),r.a.createElement(d.a,{className:"mr-2 d-flex align-items-center"}),r.a.createElement("span",{className:"mr-2"},"\u0110\u0103ng nh\u1eadp")))}var y=a(73);a(188);var k=Object(y.b)(null,(function(e){return{openSidebar:function(){return e({type:"TOGGLE_SIDEBAR"})}}}))((function(e){var t="mobile-header d-flex ".concat(e.className);return r.a.createElement("div",{className:t},r.a.createElement("i",{className:"fas fa-align-justify",onClick:function(){e.openSidebar()}}),r.a.createElement(o.b,{to:"/",className:"logo"},r.a.createElement("img",{src:s.a,alt:"The movie db"})))})),w=a(262);a(189);var j=Object(y.b)((function(e){return{visible:e.sidebar}}),(function(e){return{toggle:function(){return e({type:"TOGGLE_SIDEBAR"})}}}))((function(e){return r.a.createElement(w.a,{placement:"left",closable:!1,onClose:e.toggle,visible:e.visible,className:"sidebar"},r.a.createElement(h,{mode:"inline"}))}));var O=Object(l.f)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}));return function(){e()}}),[]),null})),A=a(69),N=a(70),x=a(97),I=a(96),M=a(13),S=a(133),C=a.n(S),J=new(function(){function e(){Object(A.a)(this,e),this.handleSuccess=function(e){return e},this.handleError=function(e){return Promise.reject(e)};var t=C.a.create();t.interceptors.response.use(this.handleSuccess,this.handleError),this.instance=t}return Object(N.a)(e,[{key:"get",value:function(e){return this.instance.get(e)}},{key:"post",value:function(e,t){return this.instance.post(e,t)}},{key:"add",value:function(e,t){return this.instance.post(e,t)}},{key:"delete",value:function(e){return this.instance.delete(e)}},{key:"update",value:function(e,t){return this.instance.put(e,t)}}]),e}()),T=a(98),D=a.n(T),R=function(e){var t=Object(M.a)(Object(M.a)({},{media_type:"all",time_window:"day"}),e),a=t.media_type,n=t.time_window;return J.get("".concat(v,"/trending/").concat(a,"/").concat(n,"?api_key=").concat(p))},B=function(e){var t={filter:{language:"vi",page:1},type:"movie"},a=Object(M.a)(Object(M.a)(Object(M.a)({},t),e),{filter:Object(M.a)(Object(M.a)({},t.filter),e.filter)});E[a.filter.with_genres]&&(a.filter.with_genres=E[a.filter.with_genres].id);var n=D.a.stringify(a.filter),r=a.type,c=a.keyword;return J.get("".concat(v,"/").concat(r,"/").concat(c,"?api_key=").concat(p).concat(n?"&".concat(n):""))},H=function(e){var t={filter:{language:"vi"},type:"movie"},a=Object(M.a)(Object(M.a)(Object(M.a)({},t),e),{filter:Object(M.a)(Object(M.a)({},t.filter),e.filter)}),n=a.type,r=a.movieId,c=a.keyword,i=D.a.stringify(a.filter);return J.get("".concat(v,"/").concat(n,"/").concat(r,"/").concat(c,"?api_key=").concat(p).concat(i?"&".concat(i):""))},G=function(e){var t={filter:{language:"vi",page:1},type:"movie"},a=Object(M.a)(Object(M.a)(Object(M.a)({},t),e),{filter:Object(M.a)(Object(M.a)({},t.filter),e.filter)});E[a.filter.with_genres]&&(a.filter.with_genres=E[a.filter.with_genres].id);var n=D.a.stringify(a.filter);return J.get("".concat(v,"/discover/").concat(a.type,"?api_key=838ee94b4d4b50e41f33d7b1d6d3655d").concat(n?"&".concat(n):""))},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"vi",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"movie";return J.get("".concat(v,"/").concat(a,"/").concat(e,"?api_key=").concat(p,"&language=").concat(t))},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie";return J.get("".concat(v,"/").concat(t,"/").concat(e,"/credits?api_key=").concat(p))},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";if(e)return"https://image.tmdb.org/t/p/".concat(t).concat(e)},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"movie";return J.get("".concat(v,"/").concat(t,"/").concat(e,"/videos?api_key=838ee94b4d4b50e41f33d7b1d6d3655d&language=en-Us"))},_=a(36),Y=a(258),z=(a(220),a(134)),U=a.n(z);var Z=function(e){var t=e.title,a=(e.id,e.poster),n=e.adult,c=e.url,i=F(a,"w500");return r.a.createElement(Y.a,{className:"movie-item col-6 col-md-4 col-lg-2",bordered:!1},n?r.a.createElement("span",{className:"adult"},"18+"):"",r.a.createElement(o.b,{to:c,className:"img"},r.a.createElement("img",{alt:t,src:i||U.a})),r.a.createElement(o.b,{to:c},r.a.createElement("h3",null,t)))},Q=a(259),X=a(93),V=a.n(X);a(240);function W(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)({page:1,total_results:0,total_pages:0}),o=Object(_.a)(l,2),m=o[0],s=o[1],u=Object(n.useState)((function(){return e.filter})),d=Object(_.a)(u,2),f=d[0],p=d[1],v=e.fetchFunction,E=e.listMode,g=e.imageType,h=e.title,b=e.dataSlick,y=e.type,k=e.className,w=e.options;Object(n.useEffect)((function(){var e=!1;return v(Object(M.a)({filter:Object(M.a)({},f),type:y},w)).then((function(t){if(!e){if(200!==t.status)return;i(t.data.results),s(Object(M.a)(Object(M.a)({},m),{},{page:t.data.page,total_results:t.data.total_results,total_pages:t.data.total_pages}))}})).catch((function(t){e||console.log("call api get movielist fail",t)})),function(){e=!0}}),[f,w]),Object(n.useEffect)((function(){p(e.filter)}),[e.filter]);var j=function(){var e="";return Array.isArray(c)&&(e=c.map((function(e,t){return r.a.createElement(Z,{key:t,title:e.title||e.original_name||e.original_title,poster:"horizontal"===g&&e.backdrop_path?e.backdrop_path:e.poster_path,adult:e.adult,id:e.id,url:"/movie-detail/".concat(y||"movie","/").concat(e.id)})}))),e},O="";if("slider"===E){O=r.a.createElement(V.a,Object.assign({className:"movie-list ".concat(k||""," ").concat("horizontal"===g?"image-horizontal":"")},Object.assign({},{slidesToShow:6,slidesToScroll:1,swipe:!0,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}}]},b)),j())}else O=r.a.createElement("div",{className:"grid row"},j());return c.length<1?"":r.a.createElement("div",{className:"movie-list ".concat(k||""," ").concat("horizontal"===g?"image-horizontal":"")},r.a.createElement("h4",{className:"movie-list-title mt-3"},h),O,!0===e.pagination?r.a.createElement(Q.a,{className:"pagination",defaultCurrent:m.page,total:m.total_pages,defaultPageSize:5,showSizeChanger:!1,onChange:function(e){return function(e){p(Object(M.a)(Object(M.a)({},f),{},{page:e}))}(e)}}):"")}W.defaultProps={type:"movie",fetchFunction:G,filter:{}};var q=W;a(255);function $(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)((function(){return e.filter})),m=Object(_.a)(l,2),s=m[0],u=m[1],d=e.fetchFunction,f=e.options,p=e.type;Object(n.useEffect)((function(){d(Object(M.a)(Object(M.a)({filter:Object(M.a)({},s)},f),{},{type:p})).then((function(e){200===e.status&&i(e.data.results)})).catch((function(e){console.log("call api get movielist fail",e)}))}),[s,p]),Object(n.useEffect)((function(){u(e.filter)}),[e.filter]);return r.a.createElement(V.a,Object.assign({},{slidesToShow:1,slidesToScroll:1,swipe:!0,fade:!0,autoPlay:!0},{className:"movie-slider"}),function(t){var a="",n="movie-slide ".concat(e.className);return Array.isArray(t)&&(a=t.map((function(e,t){if(!e.backdrop_path)return"";var a="/movie-detail/".concat(e.media_type?e.media_type:"movie","/").concat(e.id);return r.a.createElement("div",{className:n,key:t},r.a.createElement("div",null,r.a.createElement(o.b,{to:a,className:"slide-img"},r.a.createElement("img",{alt:e.title,src:F(e.backdrop_path)})),r.a.createElement("div",{className:"content p-3 px-md-5 py-md-3"},r.a.createElement(o.b,{to:a,className:"slide-link"},r.a.createElement("h3",null,e.title||e.original_name||e.original_title)),r.a.createElement("div",{className:"rate d-flex align-items-center"},r.a.createElement("p",{className:"m-0 mr-2"},"Rating"),r.a.createElement("span",{className:"rounded-circle d-flex align-items-center justify-content-center"},e.vote_average)),r.a.createElement("p",{className:"d-none d-md-block"},e.overview))))}))),a}(c))}$.defaultProps={filter:{}};var ee=$,te={slidesToShow:4},ae=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(ee,{className:"mt-md-3",fetchFunction:R}),r.a.createElement(q,{listMode:"slider",title:"Top phim hay",fetchFunction:B,options:{keyword:"top_rated"}}),r.a.createElement(q,{listMode:"slider",imageType:"horizontal",dataSlick:te,title:E.action.name,filter:{with_genres:"action",language:"vi"}}),r.a.createElement(q,{listMode:"slider",title:"\u0110\u01b0\u01a1\u0323c quan t\xe2m",fetchFunction:B,options:{keyword:"popular"}}),r.a.createElement(q,{listMode:"slider",title:"S\u0103\u0301p ra m\u0103\u0301t",fetchFunction:B,options:{keyword:"upcoming"}}),r.a.createElement(q,{listMode:"slider",imageType:"horizontal",dataSlick:te,title:"Phim b\xf4\u0323",type:"tv"}),r.a.createElement(q,{listMode:"slider",title:E.drama.name,filter:{with_genres:"drama",language:"vi"}}),r.a.createElement(q,{listMode:"slider",title:E.comedy.name,filter:{with_genres:"comedy",language:"vi"}}),r.a.createElement(q,{listMode:"slider",imageType:"horizontal",dataSlick:te,title:E.crime.name,type:"tv",filter:{with_genres:"crime",language:"vi"}}))}}]),a}(n.Component),ne=a(51),re=a.n(ne),ce=a(94),ie=a(261),le=(a(256),a(265)),oe=a(266);var me=function(e){var t=Object(n.useState)({movieDetail:{},movieVideo:{},casts:null,crews:null}),a=Object(_.a)(t,2),c=a[0],i=a[1],l=c.casts,m=c.crews,s=c.movieDetail,u=c.movieVideo,d=e.movieId,f=function(){var e=Object(ce.a)(re.a.mark((function e(){var t,a,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(d,"vi");case 2:return t=e.sent,e.next=5,K(d);case 5:return a=e.sent,e.next=8,P(d);case 8:n=e.sent,i({movieDetail:t.data,movieVideo:a.data,movieCast:n.data.cast,movicrewseCast:n.data.crew});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[e.movieId]),Object.keys(s)<1?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"global-image"},r.a.createElement("figure",{style:{backgroundImage:"url(".concat(F(s.backdrop_path),")")}}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=".concat(u.key?u.key:"")},r.a.createElement("i",{className:"fas fa-play"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"movie-detail row mt-md-3 p-3"},r.a.createElement("div",{className:"col-md-8 p-0 p-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 d-none d-md-block p-0 "},r.a.createElement("img",{className:"rounded",src:s.poster_path?F(s.poster_path):"",alt:s.title})),r.a.createElement("div",{className:"detail-content col-12 col-md-9"},r.a.createElement("h3",null,s.title),r.a.createElement("div",{className:"detail-action"},r.a.createElement(ie.a,{type:"secondary",icon:r.a.createElement(le.a,null)},"Theo do\u0303i"),r.a.createElement(ie.a,{type:"danger",icon:r.a.createElement(oe.a,null),className:"ml-2"},"Chia se\u0309")),r.a.createElement("div",{className:"detail-description mt-3"},r.a.createElement("div",{className:"rate d-flex align-items-center mb-2"},r.a.createElement("h6",{className:"m-0 mr-2"},"Rating : "),r.a.createElement("span",{className:"rounded-circle d-flex align-items-center justify-content-center"},s.vote_average)),s.overview?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"N\u1ed9i dung"),r.a.createElement("p",null,s.overview)):"")))),r.a.createElement("div",{className:"detail-options col-md-4 p-0 p-md-3"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Th\u01a1\u0300i l\u01b0\u01a1\u0323ng"),r.a.createElement("td",null,s.runtime," phu\u0301t")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0110a\u0323o di\xea\u0303n"),r.a.createElement("td",null,function(){if(Array.isArray(m)&&!(m.length<1)){var e=m.find((function(e){return"director"===e.job.toLowerCase()?e:""}));return e?r.a.createElement(o.b,{to:"/"},e.name):void 0}}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Di\xea\u0303n vi\xean"),r.a.createElement("td",null,function(){if(Array.isArray(l))return l.map((function(e,t){return t>=2?"":r.a.createElement(o.b,{key:t,to:"/"},e.name,t<l.length-1&&t<1?", ":"")}))}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Qu\xf4\u0301c gia"),r.a.createElement("td",null,function(){var e=s.production_countries,t="";return e&&(t=e.map((function(t,a){return r.a.createElement(o.b,{to:"",key:a},t.name,a<e.length-1&&a<1?", ":"")}))),t}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Th\xea\u0309 loa\u0323i"),r.a.createElement("td",null,function(){var e=s.genres;if(Array.isArray(e))return e.map((function(t,a){return r.a.createElement(o.b,{key:a,to:"/"},t.name,a<e.length-1?", ":"")}))}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Pha\u0301t ha\u0300nh"),r.a.createElement("td",null,s.release_date?s.release_date.slice(0,4):""))))))))};var se=function(e){var t=Object(n.useState)({tvDetail:{},tvVideo:{},casts:null,crews:null}),a=Object(_.a)(t,2),c=a[0],i=a[1],l=c.casts,m=c.crews,s=c.tvDetail,u=c.tvVideo,d=e.tvId,f=function(){var e=Object(ce.a)(re.a.mark((function e(){var t,a,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(d,"vi","tv");case 2:return t=e.sent,e.next=5,K(d,"tv");case 5:return a=e.sent,e.next=8,P(d,"tv");case 8:n=e.sent,i({tvDetail:t.data,tvVideo:a.data,casts:n.data.cast,crews:n.data.crew});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[e.tvId]),Object.keys(s)<1?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"global-image"},r.a.createElement("figure",{style:{backgroundImage:"url(".concat(F(s.backdrop_path),")")}}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=".concat(u.key?u.key:"")},r.a.createElement("i",{className:"fas fa-play"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"movie-detail row mt-md-3 p-3"},r.a.createElement("div",{className:"col-md-8 p-0 p-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 d-none d-md-block p-0 "},r.a.createElement("img",{className:"rounded",src:s.poster_path?F(s.poster_path):"",alt:s.name})),r.a.createElement("div",{className:"detail-content col-12 col-md-9"},r.a.createElement("h3",null,s.name,s.original_name&&s.original_name!==s.name?" ( ".concat(s.original_name," ) "):""),r.a.createElement("div",{className:"detail-action"},r.a.createElement(ie.a,{type:"secondary",icon:r.a.createElement(le.a,null)},"Theo do\u0303i"),r.a.createElement(ie.a,{type:"danger",icon:r.a.createElement(oe.a,null),className:"ml-2"},"Chia se\u0309")),r.a.createElement("div",{className:"detail-description mt-3"},r.a.createElement("div",{className:"rate d-flex align-items-center mb-2"},r.a.createElement("h6",{className:"m-0 mr-2"},"Rating : "),r.a.createElement("span",{className:"rounded-circle d-flex align-items-center justify-content-center"},s.vote_average)),s.overview?r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"N\u1ed9i dung"),r.a.createElement("p",null,s.overview)):"")))),r.a.createElement("div",{className:"detail-options col-md-4 p-0 p-md-3"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"S\xf4\u0301 t\xe2\u0323p"),r.a.createElement("td",null,"".concat(s.last_episode_to_air.episode_number,"/").concat(s.number_of_episodes))),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0110a\u0323o di\xea\u0303n"),r.a.createElement("td",null,function(){if(Array.isArray(m)&&!(m.length<1)){var e=s.created_by[0];return e?r.a.createElement(o.b,{to:"/"},e.name):void 0}}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Di\xea\u0303n vi\xean"),r.a.createElement("td",null,function(){if(Array.isArray(l))return l.map((function(e,t){return t>=2?"":r.a.createElement(o.b,{key:t,to:"/"},e.name,t<l.length-1&&t<1?", ":"")}))}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Qu\xf4\u0301c gia"),r.a.createElement("td",null,function(){var e=s.origin_country,t="";return e&&(t=e.map((function(t,a){return r.a.createElement(o.b,{to:"",key:a},t,a<e.length-1&&a<1?", ":"")}))),t}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Th\xea\u0309 loa\u0323i"),r.a.createElement("td",null,function(){var e=s.genres;if(Array.isArray(e))return e.map((function(t,a){return r.a.createElement(o.b,{key:a,to:"/"},t.name,a<e.length-1?", ":"")}))}())),r.a.createElement("tr",null,r.a.createElement("td",null,"Pha\u0301t ha\u0300nh"),r.a.createElement("td",null,s.first_air_date?s.first_air_date.slice(0,4):""))))))))},ue=function(e){Object(x.a)(a,e);var t=Object(I.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props.match.params,t=e.movieId,a=e.type;return r.a.createElement(n.Fragment,null,"tv"===a?r.a.createElement(se,{tvId:t}):r.a.createElement(me,{movieId:t}),r.a.createElement("div",{className:"container"},r.a.createElement(q,{listMode:"slider",fetchFunction:H,options:{movieId:t,keyword:"recommendations"},type:a,title:"N\u1ed9i dung li\xean quan"}),r.a.createElement(q,{listMode:"slider",title:"\u0110\xea\u0300 xu\xe2\u0301t",fetchFunction:H,options:{movieId:t,keyword:"similar"},type:a})))}}]),a}(n.Component),de=Object(l.f)(ue);var fe=Object(l.f)((function(e){var t=e.match,a=t.params.categoryName,c=t.params.type,i=Object(n.useState)({with_genres:a}),l=Object(_.a)(i,2),o=l[0],m=l[1];return Object(n.useEffect)((function(){m({with_genres:a})}),[c,a]),r.a.createElement("div",{className:"container"},r.a.createElement(ee,{className:"mt-md-3",fetchFunction:G,filter:o,type:c}),r.a.createElement(q,{filter:o,pagination:!0,type:c}))})),pe=[{path:"/",exact:!0,component:function(){return r.a.createElement(ae,null)}},{path:"/movie-detail/:type/:movieId",exact:!0,component:function(e){var t=e.match;return r.a.createElement(de,{match:t})}},{path:"/category/:type/:categoryName",exact:!0,component:function(e){var t=e.match;return r.a.createElement(fe,{match:t})}},{path:"/category/:type",exact:!0,component:function(e){var t=e.match;return r.a.createElement(fe,{match:t})}}];var ve=function(){return r.a.createElement(o.a,null,r.a.createElement(O,null),r.a.createElement(b,null),r.a.createElement(k,{className:"d-md-none"}),r.a.createElement(j,null),r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,pe.map((function(e,t){return r.a.createElement(l.a,{key:t,path:e.path,exact:e.exact,component:e.component})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(48),ge=a(147),he=re.a.mark(be);function be(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),he)}var ye=be,ke=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case"TOGGLE_SIDEBAR":return e=!e;default:return e}},we=Object(Ee.c)({sidebar:ke}),je=Object(ge.a)(),Oe=Ee.d,Ae=function(){var e=[je],t=[Ee.a.apply(void 0,e)],a=Object(Ee.e)(we,Oe.apply(void 0,t));return je.run(ye),a}();i.a.render(r.a.createElement(y.a,{store:Ae},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t){e.exports="data:image/png;base64,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"}},[[151,1,2]]]);
//# sourceMappingURL=main.e511b833.chunk.js.map