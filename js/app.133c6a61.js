(function(){var e={9974:function(e,t,n){"use strict";n(3011);var a=n(4476),i=(n(1827),n(2074)),o=(n(8435),n(5676)),r=(n(547),n(9976)),s=(n(7645),n(9270)),l=(n(9985),n(8232)),u=(n(5594),n(6386)),d=(n(8783),n(6013)),c=(n(4001),n(243)),m=(n(8385),n(575)),p=(n(4057),n(1128)),g=(n(5267),n(712)),f=(n(3979),n(9735)),h=(n(5230),n(5413)),v=(n(7349),n(6837)),b=(n(1042),n(2450)),y=(n(7269),n(3057)),w=(n(65),n(521)),Z=(n(2353),n(2492)),C=(n(5702),n(6677)),_=(n(1351),n(3457)),k=(n(0),n(5835)),M=(n(8101),n(8083)),S=n(9242),E=n(3396);function P(e,t,n,a,i,o){const r=(0,E.up)("router-view");return(0,E.wg)(),(0,E.j4)(r)}var A=n(678),D=n(7417),T=n(5410),j=n.n(T),F=(0,E.aZ)({name:"App",setup(){const e=(0,A.yj)(),t=(0,A.tv)(),n=(0,D.oR)(),a=(0,E.Fl)((()=>e.meta.title??"")),i=(0,E.Fl)((()=>n.getters["User/user"].authorized)),o=(0,E.Fl)((()=>e));return(0,E.bv)((()=>{n.dispatch("User/loadCurrentAccount")})),(0,E.YP)(a,(e=>{document.title=`${e+" | "||0}Sumatra Soil`})),(0,E.YP)(i,(n=>{if(n){const n=j().parse(o.value.fullPath.split("?")[1],{ignoreQueryPrefix:!0});n.redirect?t.push(n.redirect):"/auth/login"!==e.path&&"/auth/login/"!==e.path||t.push("/")}})),{authorized:i}}}),I=n(89);const x=(0,I.Z)(F,[["render",P]]);var W=x,L=n(2562),R=n(6938),O=n(9907);(0,O.z)("/ss-admin-gp/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var H=n(530),N=n.n(H),q=n(145);const Q=(0,S.ri)(W);Q.use(R.Z).use(L.Z),Q.use(o.Z).use(r.ZP).use(s.ZP).use(l.ZP).use(u.ZP).use(d.Z).use(c.Z).use(m.Z).use(p.ZP).use(g.ZP).use(f.ZP).use(h.ZP).use(v.ZP).use(b.Z).use(y.Z).use(w.Z).use(Z.Z).use(C.ZP).use(_.ZP).use(k.Z).use(M.ZP),Q.use(q.Z),i.ZP.config({maxCount:3}),Q.config.globalProperties.$nprogress=N(),Q.config.globalProperties.$message=i.ZP,Q.config.globalProperties.$modal=w.Z,Q.config.globalProperties.$notification=a.Z,Q.mount("#app")},2562:function(e,t,n){"use strict";n.d(t,{Z:function(){return Pe}});var a=n(678),i=n(6938),o=n(7182),r=n(3396);function s(e,t,n,a,i,o){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s)])}var l={name:"AuthLayout"},u=n(89);const d=(0,u.Z)(l,[["render",s]]);var c=d,m=n(9242);function p(e,t,n,a,i,o){const s=(0,r.up)("side-menu"),l=(0,r.up)("top-bar"),u=(0,r.up)("a-layout-header"),d=(0,r.up)("router-view"),c=(0,r.up)("a-layout-content"),p=(0,r.up)("Footer"),g=(0,r.up)("a-layout-footer"),f=(0,r.up)("a-layout");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(f,{class:"app__layout"},{default:(0,r.w5)((()=>[(0,r.Wm)(s),(0,r.Wm)(f,{class:"app__right_layout"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"app__right__header"},{default:(0,r.w5)((()=>[(0,r.Wm)(l)])),_:1}),(0,r.Wm)(c,{class:"app__layout__content"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(m.uT,{mode:"out-in",name:"slide-fadein-up"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})])),_:1}),(0,r.Wm)(g,{class:"app__layout__footer"},{default:(0,r.w5)((()=>[(0,r.Wm)(p)])),_:1})])),_:1})])),_:1})])}var g=n(4870),f=n(7417);const h=e=>((0,r.dD)("data-v-b5e2da1e"),e=e(),(0,r.Cn)(),e),v={key:1},b=h((()=>(0,r._)("i",{class:"fe fe-menu"},null,-1))),y=[b];function w(e,t,n,a,i,o){const s=(0,r.up)("menu-left"),l=(0,r.up)("a-drawer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.settings.isMobileView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(s,{key:0})),e.settings.isMobileView?((0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",{class:"mobile-menu-toggler",onClick:t[0]||(t[0]=(...t)=>e.toggleMobileMenu&&e.toggleMobileMenu(...t))},y),(0,r.Wm)(l,{closable:!1,visible:e.settings.isMobileMenuOpen,placement:"left",onClose:e.toggleMobileMenu,class:"mobile-menu",width:e.settings.leftMenuWidth},{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1},8,["visible","onClose","width"])])):(0,r.kq)("",!0)],64)}var Z=n(7139),C=n.p+"img/banner-transparent.c9d13b7a.png",_=n.p+"img/logocircle.eadb9f3a.png";const k={class:"d-flex align-items-center justify-content-center"},M={key:0,class:"fe fe-chevrons-left"},S={key:1,class:"fe fe-chevrons-right"},E={key:0,class:"category-divider"},P={class:"category-title"};function A(e,t,n,a,i,o){const s=(0,r.up)("a-menu-item-group"),l=(0,r.up)("item"),u=(0,r.up)("sub-menu"),d=(0,r.up)("a-menu"),c=(0,r.up)("perfect-scrollbar"),m=(0,r.up)("a-layout-sider");return(0,r.wg)(),(0,r.j4)(m,{id:"side-menu",width:e.menuWidth,collapsible:!e.settings.isMobileView,collapsed:e.settings.isMenuCollapsed&&!e.settings.isMobileView,trigger:null},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,Z.C_)(["menu-outer",{"menu-has-shadow":!e.settings.isMobileView}]),style:(0,Z.j5)({width:`${e.menuWidth}px`})},[(0,r._)("div",{class:(0,Z.C_)(["logo-container d-flex",{"flex-column flex-column-reverse":e.settings.isMenuCollapsed}]),style:(0,Z.j5)({height:`${e.getLogoContainerHeight}px`})},[(0,r._)("div",k,[e.settings.isMenuCollapsed?e.settings.isMenuCollapsed?((0,r.wg)(),(0,r.iD)("img",{key:1,src:_,alt:"SS",style:(0,Z.j5)({width:e.settings.collapsedLeftMenuWidth-50+"px"})},null,4)):(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("img",{key:0,src:C,alt:"Sumatra Soil",class:"brand-logo",style:(0,Z.j5)([e.settings.isMenuCollapsed&&{margin:"0px"}])},null,4))]),e.settings.isMobileView?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:0,class:"menu-toggler",onClick:t[0]||(t[0]=(...t)=>e.onCollapse&&e.onCollapse(...t)),style:(0,Z.j5)([e.settings.isMenuCollapsed&&{margin:"0px"}])},[e.settings.isMenuCollapsed?((0,r.wg)(),(0,r.iD)("i",S)):((0,r.wg)(),(0,r.iD)("i",M))],4))],6),(0,r.Wm)(c,{style:(0,Z.j5)({height:`calc(100% - ${e.settings.footerHeight+e.getLogoContainerHeight}px)`})},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"navigation",mode:"inline","inline-collapsed":!1,collapsed:e.settings.isMenuCollapsed,"open-keys":e.openKeys,"onUpdate:open-keys":t[1]||(t[1]=t=>e.openKeys=t),"selected-keys":e.selectedKeys},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.menuData,((t,n)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:t.key},[t.category?((0,r.wg)(),(0,r.j4)(s,{class:"item-category",key:n},(0,r.Nv)({default:(0,r.w5)((()=>[e.settings.isMenuCollapsed?((0,r.wg)(),(0,r.iD)("div",E)):(0,r.kq)("",!0)])),_:2},[e.settings.isMenuCollapsed?void 0:{name:"title",fn:(0,r.w5)((()=>[(0,r._)("span",P,(0,Z.zw)(t.title),1)]))}]),1024)):t.children?((0,r.wg)(),(0,r.j4)(u,{"menu-info":t,key:t.key},null,8,["menu-info"])):((0,r.wg)(),(0,r.j4)(l,{key:1,"menu-info":t},null,8,["menu-info"]))],64)))),128))])),_:1},8,["collapsed","open-keys","selected-keys"])])),_:1},8,["style"]),(0,r._)("div",{class:"menu-footer",style:(0,Z.j5)({height:`${e.settings.footerHeight}px`})},[(0,r._)("span",null,(0,Z.zw)(e.settings.isMenuCollapsed?"v":"Version ")+" 1.0 ",1)],4)],6)])),_:1},8,["width","collapsible","collapsed"])}const D=[{category:!0,title:"Menu Utama"},{title:"Dashboard",key:"@dashboard",url:o.Z.Dashboard.path,icon:"fe fe-airplay"},{title:"Approval Petani",key:"@approval",url:o.Z.FarmerApproval.path,icon:"fe fe-list"},{title:"Wilayah",key:"@district",url:o.Z.District.path,icon:"fe fe-map"},{title:"Komoditi",key:"@commodity",url:o.Z.Commodity.path,icon:"fe fe-database"},{title:"Reward",key:"@reward",url:o.Z.Reward.path,icon:"fe fe-gift"},{title:"Konfigurasi Sistem",key:"@sysconfig",url:o.Z.ApplicationConfig.path,icon:"fe fe-settings"},{category:!0,title:"User"},{title:"Admin",key:"@admin",url:o.Z.Admin.path,icon:"fe fe-users"},{title:"QC",key:"@qc",url:o.Z.QualityControl.path,icon:"fe fe-users"},{title:"Petani",key:"@farmers",url:o.Z.Farmer.path,icon:"fe fe-users"}];var T=D;const j=e=>((0,r.dD)("data-v-6b6ea168"),e=e(),(0,r.Cn)(),e),F={key:0},I={class:"title"},x={key:1,style:{display:"flex","align-items":"center"}},W=j((()=>(0,r._)("i",{class:"icon fa fa-circle",style:{"font-size":"5px"}},null,-1))),L={class:"title"},R={key:1},O={class:"title"};function H(e,t,n,a,i,o){const s=(0,r.up)("router-link"),l=(0,r.up)("a-menu-item");return(0,r.wg)(),(0,r.j4)(l,(0,r.dG)({key:e.menuInfo.key},e.$props,{disabled:e.menuInfo.disabled}),{default:(0,r.w5)((()=>[e.menuInfo.url?((0,r.wg)(),(0,r.j4)(s,{key:0,to:e.menuInfo.url},{default:(0,r.w5)((()=>[e.menuInfo.icon?((0,r.wg)(),(0,r.iD)("div",F,[e.menuInfo.icon?((0,r.wg)(),(0,r.iD)("i",{key:0,class:(0,Z.C_)(["icon",e.menuInfo.icon])},null,2)):(0,r.kq)("",!0),(0,r._)("span",I,(0,Z.zw)(e.menuInfo.title),1)])):((0,r.wg)(),(0,r.iD)("span",x,[W,(0,r._)("span",L,(0,Z.zw)(e.menuInfo.title),1)]))])),_:1},8,["to"])):((0,r.wg)(),(0,r.iD)("span",R,[e.menuInfo.icon?((0,r.wg)(),(0,r.iD)("i",{key:0,class:(0,Z.C_)(["icon",e.menuInfo.icon])},null,2)):(0,r.kq)("",!0),(0,r._)("span",O,(0,Z.zw)(e.menuInfo.title),1)]))])),_:1},16,["disabled"])}n(5594);var N=n(6386),q=(0,r.aZ)({name:"Item",props:{...N.ZP.Item.props,menuInfo:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}}}});const Q=(0,u.Z)(q,[["render",H],["__scopeId","data-v-6b6ea168"]]);var z=Q;const K={class:"title"};function $(e,t,n,a,i,o){const s=(0,r.up)("item"),l=(0,r.up)("sub-menu"),u=(0,r.up)("a-sub-menu");return(0,r.wg)(),(0,r.j4)(u,null,{title:(0,r.w5)((()=>[(0,r._)("span",null,[e.menuInfo.icon?((0,r.wg)(),(0,r.iD)("i",{key:0,class:(0,Z.C_)(["icon",e.menuInfo.icon])},null,2)):(0,r.kq)("",!0),(0,r._)("span",K,(0,Z.zw)(e.menuInfo.title),1)])])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.menuInfo.children,(e=>((0,r.wg)(),(0,r.iD)(r.HY,null,[e.children||e.divider?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(s,{key:e.key,"menu-info":e},null,8,["menu-info"])),e.children?((0,r.wg)(),(0,r.j4)(l,{key:e.key,"menu-info":e},null,8,["menu-info"])):(0,r.kq)("",!0)],64)))),256))])),_:1})}var U=(0,r.aZ)({name:"SubMenu",components:{Item:z,ASubMenu:N.ZP.SubMenu},isSubMenu:!0,props:{...N.ZP.SubMenu.props,menuInfo:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}}}});const V=(0,u.Z)(U,[["render",$]]);var Y=V,B=(0,r.aZ)({name:"MenuLeft",components:{Item:z,SubMenu:Y},setup(){const e=(0,a.yj)(),t=(0,f.oR)(),n=(0,g.iH)([]),i=(0,g.iH)([]),o=(0,r.Fl)((()=>t.getters["Setting/settings"].isMenuCollapsed)),s=(0,r.Fl)((()=>t.getters["Setting/settings"])),l=(0,r.Fl)((()=>e.path)),u=(0,r.Fl)((()=>T)),d=(0,r.Fl)((()=>o.value?s.value.collapsedLeftMenuWidth:s.value.leftMenuWidth)),c=(0,r.Fl)((()=>o.value?s.value.collapsedLogoContainerHeight:s.value.logoContainerHeight)),m=()=>{t.dispatch("Setting/changeSetting",{setting:"isMenuCollapsed",value:!o.value})},p=(e,t,n)=>{const a=n.replace(/^\/([^\/]*).*$/,"$1");for(let i of e){if(!i[t])continue;const e=i[t];if(`/${a}`===e)return i}},h=()=>{const e=(t,n)=>t.reduce(((t,a)=>(t.push(a),Array.isArray(a[n])?t.concat(e(a[n],n)):t)),[]),t=p(e(u.value,"children"),"url",l.value);t&&(i.value=[t.key])};return(0,r.bv)((()=>{h()})),(0,r.YP)(l,(()=>{h()})),(0,r.YP)(o,(()=>n.value=[])),{settings:s,getLogoContainerHeight:c,openKeys:n,selectedKeys:i,menuData:u,menuWidth:d,onCollapse:m}}});const G=(0,u.Z)(B,[["render",A],["__scopeId","data-v-510acf39"]]);var J=G,X=(0,r.aZ)({name:"SideMenu",components:{MenuLeft:J},setup(){const e=(0,f.oR)(),t=(0,r.Fl)((()=>e.getters["Setting/settings"])),n=()=>{e.dispatch("Setting/changeSetting",{setting:"isMobileMenuOpen",value:!t.value["isMobileMenuOpen"]})};return{settings:t,toggleMobileMenu:n}}});const ee=(0,u.Z)(X,[["render",w],["__scopeId","data-v-b5e2da1e"]]);var te=ee;function ne(e,t,n,a,i,o){const s=(0,r.up)("user-menu");return(0,r.wg)(),(0,r.iD)("div",{class:"topbar d-flex justify-content-end",style:(0,Z.j5)({height:`${e.setting.topBarHeight}px`})},[(0,r.Wm)(s)],4)}const ae=e=>((0,r.dD)("data-v-777075d2"),e=e(),(0,r.Cn)(),e),ie={class:"user-menu-dropdown"},oe=ae((()=>(0,r._)("i",{class:"fe fe-user"},null,-1))),re=ae((()=>(0,r._)("span",null,"Hi 😊, ",-1))),se=ae((()=>(0,r._)("div",null,[(0,r._)("i",{class:"fe fe-log-out mr-3"}),(0,r._)("span",null,"Log out")],-1)));function le(e,t,n,a,i,o){const s=(0,r.up)("a-avatar"),l=(0,r.up)("a-menu-item"),u=(0,r.up)("a-menu-divider"),d=(0,r.up)("a-menu"),c=(0,r.up)("a-dropdown");return(0,r.wg)(),(0,r.j4)(c,{trigger:"hover",placement:"bottomRight"},{overlay:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"user-menu-overlay"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[re,(0,r._)("strong",null,(0,Z.zw)(e.user.administrator?.name),1)])])),_:1}),(0,r.Wm)(u),(0,r.Wm)(l,{onClick:e.logout},{default:(0,r.w5)((()=>[se])),_:1},8,["onClick"])])),_:1})])),default:(0,r.w5)((()=>[(0,r._)("div",ie,[(0,r.Wm)(s,{shape:"square",size:"large",class:"avatar"},{icon:(0,r.w5)((()=>[oe])),_:1})])])),_:1})}var ue=(0,r.aZ)({name:"UserMenu",setup(){const e=(0,f.oR)(),t=(0,a.tv)(),n=(0,r.Fl)((()=>e.getters["User/user"])),i=()=>{e.dispatch("User/logout"),t.push(o.Z.Login.path)};return{logout:i,user:n}}});const de=(0,u.Z)(ue,[["render",le],["__scopeId","data-v-777075d2"]]);var ce=de,me=(0,r.aZ)({name:"Topbar",components:{UserMenu:ce},setup(){const e=(0,f.oR)(),t=(0,r.Fl)((()=>e.getters["Setting/settings"]));return{setting:t}}});const pe=(0,u.Z)(me,[["render",ne],["__scopeId","data-v-0623a57b"]]);var ge=pe;const fe=e=>((0,r.dD)("data-v-113da432"),e=e(),(0,r.Cn)(),e),he={class:"footer"},ve=fe((()=>(0,r._)("div",{class:"footer-inner"},[(0,r._)("div",{class:"mb-2 d-flex align-items-center"},[(0,r._)("strong",{class:"mr-2"},"Sumatra Soil"),(0,r._)("span",{class:"text-gray-6"},"© 2022")])],-1))),be=[ve];function ye(e,t,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",he,be)}var we=(0,r.aZ)({name:"Footer"});const Ze=(0,u.Z)(we,[["render",ye],["__scopeId","data-v-113da432"]]);var Ce=Ze,_e=(0,r.aZ)({name:"MainLayout",components:{SideMenu:te,TopBar:ge,Footer:Ce},setup(){const e=(0,f.oR)(),t=(0,r.Fl)((()=>e.getters["Setting/settings"])),n=(0,g.iH)(0),a=(0,g.iH)(!1),i=()=>{const n=!t.value.isMobileMenuOpen;e.dispatch("Setting/changeSetting",{setting:"isMobileMenuOpen",value:n})},o=(t=!1,n=!1)=>{e.dispatch("Setting/changeSetting",{setting:"isMobileView",value:t}),e.dispatch("Setting/changeSetting",{setting:"isTabletView",value:n}),t&&e.dispatch("Setting/changeSetting",{setting:"isMenuCollapsed",value:!1})},s=()=>{l(!1)},l=(n=!1)=>{const a=t.value.isMobileView,i=t.value.isTabletView,r=window.innerWidth,s={next:{mobile:r<768,tablet:r<992,desktop:!(r<768)&&!(r<992)},prev:{mobile:a,tablet:i,desktop:!a&&!i}};s.next.desktop&&(s.next.desktop!==s.prev.desktop||n)&&o(!1,!1),!s.next.tablet||s.next.mobile||s.next.tablet===s.prev.tablet&&!n||(o(!1,!0),e.dispatch("Setting/changeSetting",{setting:"isMenuCollapsed",value:!0})),s.next.mobile&&(s.next.mobile!==s.prev.mobile||n)&&o(!0,!1)},u=()=>{const e=e=>e.changedTouches?e.changedTouches[0]:e;document.addEventListener("touchstart",(t=>{const i=e(t).clientX;n.value=i,a.value=i>70}),{passive:!1}),document.addEventListener("touchmove",(t=>{const o=e(t).clientX,r=n.value;o-r>50&&!a.value&&(i(),a.value=!0)}),{passive:!1})};(0,r.bv)((()=>u())),(0,r.bv)((()=>l(!0))),(0,r.bv)((()=>window.addEventListener("resize",s)))}});const ke=(0,u.Z)(_e,[["render",p]]);var Me=ke;const Se=[{path:o.Z.Main.path,name:o.Z.Main.name,component:Me,redirect:o.Z.Dashboard.path,meta:{authRequired:!0},children:[{path:o.Z.Dashboard.path,name:o.Z.Dashboard.name,meta:{title:"Dashboard"},component:()=>n.e(430).then(n.bind(n,5423))},{path:o.Z.FarmerApproval.path,name:o.Z.FarmerApproval.name,meta:{title:"Approval Petani"},component:()=>Promise.all([n.e(145),n.e(240)]).then(n.bind(n,240))},{path:o.Z.District.path,name:o.Z.District.name,meta:{title:"Wilayah"},component:()=>Promise.all([n.e(145),n.e(41)]).then(n.bind(n,41))},{path:o.Z.Admin.path,name:o.Z.Admin.name,meta:{title:"Admin"},component:()=>Promise.all([n.e(145),n.e(93)]).then(n.bind(n,4093))},{path:o.Z.CreateAdmin.path,name:o.Z.CreateAdmin.name,meta:{title:"Tambah Admin"},component:()=>Promise.all([n.e(145),n.e(169)]).then(n.bind(n,3169))},{path:o.Z.EditAdmin.path+"/:id",name:o.Z.EditAdmin.name,meta:{title:"Detail Admin"},component:()=>Promise.all([n.e(145),n.e(532)]).then(n.bind(n,5532)),props:!0},{path:o.Z.QualityControl.path,name:o.Z.QualityControl.name,meta:{title:"QC"},component:()=>Promise.all([n.e(145),n.e(991)]).then(n.bind(n,8991))},{path:o.Z.CreateQualityControl.path,name:o.Z.CreateQualityControl.name,meta:{title:"Tambah QC"},component:()=>Promise.all([n.e(145),n.e(809)]).then(n.bind(n,5809))},{path:o.Z.EditQualityControl.path+"/:id",name:o.Z.EditQualityControl.name,meta:{title:"Detail QC"},component:()=>Promise.all([n.e(145),n.e(7)]).then(n.bind(n,7007)),props:!0},{path:o.Z.Farmer.path,name:o.Z.Farmer.name,meta:{title:"Petani"},component:()=>Promise.all([n.e(145),n.e(348)]).then(n.bind(n,3348))},{path:o.Z.CreateFarmer.path,name:o.Z.CreateFarmer.name,meta:{title:"Tambah Petani"},component:()=>Promise.all([n.e(145),n.e(203)]).then(n.bind(n,1203))},{path:o.Z.EditFarmer.path+"/:id",name:o.Z.EditFarmer.name,meta:{title:"Detail Petani"},component:()=>Promise.all([n.e(145),n.e(1)]).then(n.bind(n,1)),props:!0},{path:o.Z.Commodity.path,name:o.Z.Commodity.name,meta:{title:"Komoditi"},component:()=>Promise.all([n.e(145),n.e(125)]).then(n.bind(n,1125))},{path:o.Z.EditCommodity.path+"/:id",name:o.Z.EditCommodity.name,meta:{title:"Detail Komoditi"},component:()=>Promise.all([n.e(145),n.e(927)]).then(n.bind(n,927)),props:!0},{path:o.Z.Reward.path,name:o.Z.Reward.name,meta:{title:"Reward"},component:()=>Promise.all([n.e(145),n.e(328)]).then(n.bind(n,6328))},{path:o.Z.CreateReward.path,name:o.Z.CreateReward.name,meta:{title:"Tambah Reward"},component:()=>Promise.all([n.e(145),n.e(318)]).then(n.bind(n,9318))},{path:o.Z.EditReward.path+"/:id",name:o.Z.EditReward.name,meta:{title:"Detail Reward"},component:()=>Promise.all([n.e(145),n.e(48)]).then(n.bind(n,48)),props:!0},{path:o.Z.ApplicationConfig.path,name:o.Z.ApplicationConfig.name,meta:{title:"Konfigurasi Sistem"},component:()=>Promise.all([n.e(145),n.e(196)]).then(n.bind(n,2196))}]},{name:o.Z.Auth.name,path:o.Z.Auth.path,component:c,redirect:o.Z.Login.path,children:[{name:o.Z.Login.name,path:o.Z.Login.path,meta:{title:"Login"},component:()=>Promise.all([n.e(145),n.e(9)]).then(n.bind(n,3093))}]},{path:o.Z.NotFound.path,name:o.Z.NotFound.name,meta:{title:"Error 404"},component:()=>n.e(155).then(n.bind(n,1659))},{path:"/:pathMatch(.*)*",redirect:{name:o.Z.NotFound.name}}];console.log("base ","/ss-admin-gp/");const Ee=(0,a.p7)({history:(0,a.r5)("/ss-admin-gp/"),routes:Se});Ee.beforeEach(((e,t,n)=>{e.path===o.Z.Login.path?i.Z.getters["User/user"].authorized?n({name:o.Z.Main.name}):n():e.matched.some((e=>e.meta.authRequired))?i.Z.getters["User/user"].authorized?n():n({name:o.Z.Login.name,query:{redirect:e.fullPath}}):n()}));var Pe=Ee},7182:function(e,t){"use strict";t["Z"]={Auth:{name:"Auth",path:"/auth"},Login:{name:"Login",path:"/auth/login"},NotFound:{name:"404NotFound",path:"/system/404"},Main:{name:"Main",path:"/"},Dashboard:{name:"Dashboard",path:"/dashboard"},FarmerApproval:{name:"Farmer Approval",path:"/farmer-approvals"},District:{name:"District",path:"/districts"},QualityControl:{name:"Quality Control",path:"/qcs"},CreateQualityControl:{name:"Create Quality Control",path:"/qcs/new"},EditQualityControl:{name:"Edit Quality Control",path:"/qcs/view"},Farmer:{name:"Petani",path:"/farmers"},CreateFarmer:{name:"Create Farmer",path:"/farmers/new"},EditFarmer:{name:"Edit Farmer",path:"/farmers/view"},Admin:{name:"Administrator",path:"/admins"},CreateAdmin:{name:"Create Adminn",path:"/admins/new"},EditAdmin:{name:"Edit Admin",path:"/admins/view"},ApplicationConfig:{name:"Sistem Konfigurasi",path:"/sys-configs"},Commodity:{name:"Komoditi",path:"/commodities"},EditCommodity:{name:"Edit Komoditi",path:"/commodities/view"},Reward:{name:"Reward",path:"/rewards"},CreateReward:{name:"Tambah Reward",path:"/rewards/new"},EditReward:{name:"Edit Reward",path:"/rewards/view"}}},6938:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(7417);const i=()=>({isMobileView:!1,isMobileMenuOpen:!1,isTabletView:!1,isMenuCollapsed:!1,leftMenuWidth:256,collapsedLeftMenuWidth:80,logoContainerHeight:60,collapsedLogoContainerHeight:95,footerHeight:50,topBarHeight:64,maxTableContentHeight:"55vh"}),o=i(),r={settings:e=>e},s={CHANGE_SETTING(e,t){e[t.setting]=t.value},RESET(e){const t=i();Object.keys(e).forEach((n=>{e[n]=t[n]}))}},l={reset({commit:e}){e("RESET")},changeSetting({commit:e},t){e("CHANGE_SETTING",t)}};var u={namespaced:!0,state:o,getters:r,mutations:s,actions:l};const d=()=>({authorized:!1,administrator:void 0,token:void 0}),c=d(),m={user:e=>e},p={RESET(e){const t=d();Object.keys(e).forEach((n=>{e[n]=t[n]}))},SET_STATE(e,t){e=Object.assign(e,t)}},g={reset({commit:e}){e("RESET")},setUser({commit:e},t){e("SET_STATE",t),t.token&&localStorage.setItem("authToken",t.token),t.administrator&&localStorage.setItem("user",JSON.stringify(t.administrator))},loadCurrentAccount({commit:e}){const t=localStorage.getItem("user"),n=localStorage.getItem("authToken");if(t){const n=JSON.parse(t);n&&e("SET_STATE",{administrator:n})}n&&e("SET_STATE",{token:n,authorized:!0})},logout({commit:e}){e("RESET"),localStorage.clear()}};var f={namespaced:!0,state:c,getters:m,mutations:p,actions:g},h={Setting:u,User:f},v=(0,a.MT)({modules:h,actions:{reset({commit:e}){Object.keys(h).forEach((t=>{e(`${t}/RESET`)}))}}})},4654:function(){}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{1:"dd490a90",7:"f0bb011e",9:"cdd98896",41:"fa46a56f",48:"2c38e5df",93:"af7bf829",125:"f64d124d",145:"d8efd28f",155:"79ae8d41",169:"163760c2",196:"ebae077c",203:"2f1c9fcf",240:"72b72a35",318:"173a24e7",328:"d52cd401",348:"df8f509d",430:"da3c42dc",532:"b163c4b0",809:"af0b52d3",927:"59cd353c",991:"289b8125"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{1:"040a7174",7:"040a7174",9:"fe40c89a",48:"040a7174",155:"62e1d87d",203:"040a7174",318:"040a7174",328:"0debf24c",809:"040a7174"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sumatera-soil:";n.l=function(a,i,o,r){if(e[a])e[a].push(i);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+o){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[i];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ss-admin-gp/"}(),function(){var e=function(e,t,n,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],o=i.getAttribute("data-href");if(o===e||o===t)return i}},a=function(a){return new Promise((function(i,o){var r=n.miniCssF(a),s=n.p+r;if(t(r,s))return i();e(a,s,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={1:1,7:1,9:1,48:1,155:1,203:1,318:1,328:1,809:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=o);var r=n.p+n.u(t),s=new Error,l=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],s=a[1],l=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(t&&t(a);u<r.length;u++)o=r[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9974)}));a=n.O(a)})();