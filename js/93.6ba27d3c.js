"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[93],{6524:function(t,a,e){e.d(a,{Wj:function(){return i},aq:function(){return u},be:function(){return o},uV:function(){return r}});var s=e(9145);const n=new s.Z,i=(t={limit:1e4})=>n.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/administrators",{params:t}),r=t=>n.withOptions({successFeedbackMessage:"Admin berhasil ditambahkan",showSuccessFeedback:!0}).axiosInstance.post("/administrator/administrators",t),o=t=>n.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/administrators/${t}`),u=(t,a)=>n.withOptions({successFeedbackMessage:"Admin berhasil diperbarui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/administrators/${t}`,a)},6705:function(t,a,e){e.d(a,{p:function(){return s}});const s=t=>{const a=[];for(let e=0;e<t.length;e++)a.push({...t[e],seq:e+1});return a}},4093:function(t,a,e){e.r(a),e.d(a,{default:function(){return D}});var s=e(3396),n=e(7139);const i={class:"content-title"},r=(0,s._)("h5",null,"Daftar Admin",-1),o=["disabled"],u=(0,s._)("i",{class:"fe fe-refresh-cw mr-1"},null,-1),c=(0,s.Uk)(" Refresh "),d=[u,c],l=(0,s._)("button",{class:"btn btn-light"},[(0,s._)("i",{class:"fe fe-plus mr-1"}),(0,s.Uk)(" Tambah ")],-1),m=["src"];function h(t,a,e,u,c,h){const w=(0,s.up)("router-link"),f=(0,s.up)("a-tag"),g=(0,s.up)("a-table");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",i,[r,(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-light mr-3",onClick:a[0]||(a[0]=(...a)=>t.refresh&&t.refresh(...a)),disabled:t.loading},d,8,o),(0,s.Wm)(w,{to:t.ROUTE.CreateAdmin.path},{default:(0,s.w5)((()=>[l])),_:1},8,["to"])])]),(0,s._)("div",null,[(0,s.Wm)(g,{columns:t.columns,"data-source":t.dataSource,"row-key":t=>t.id,loading:t.loading,scroll:{y:t.setting.maxTableContentHeight,x:!0},"custom-row":t.customRow},{bodyCell:(0,s.w5)((({column:t,text:a})=>["image_url"===t.dataIndex?((0,s.wg)(),(0,s.iD)("img",{key:0,src:a,alt:"Foto",style:{width:"70px",height:"70px","border-radius":"2px"}},null,8,m)):(0,s.kq)("",!0),"status_caption"===t.dataIndex?((0,s.wg)(),(0,s.j4)(f,{key:1,color:"Aktif"===a?"green":"red"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(a),1)])),_:2},1032,["color"])):(0,s.kq)("",!0)])),_:1},8,["columns","data-source","row-key","loading","scroll","custom-row"])])])}var w=e(4870),f=e(7417),g=e(678),p=e(6705),k=e(7182),b=e(6524),x=(0,s.aZ)({name:"Admin",setup(){const t=(0,g.tv)(),a=(0,f.oR)(),e=(0,s.Fl)((()=>a.getters["Setting/settings"])),n=(0,w.iH)([{title:"#",key:"#",dataIndex:"seq",width:50},{title:"Nama",key:"name",dataIndex:"name"},{title:"Username",key:"username",dataIndex:"username"},{title:"Status",key:"status",dataIndex:"status_caption",width:100}]),i=a=>({style:{cursor:"pointer"},onClick:()=>{t.push({path:`${k.Z.EditAdmin.path}/${a.id}`})}});return{store:a,setting:e,columns:n,ROUTE:k.Z,customRow:i}},data(){return{rowData:[],loading:!0}},computed:{dataSource(){return(0,p.p)(this.rowData)}},mounted(){this.fetchData()},methods:{async fetchData(){this.loading=!0;const t=await(0,b.Wj)();t.data.success&&(this.rowData=t.data.data),this.loading=!1},refresh(){this.rowData=[],this.fetchData()}}}),_=e(89);const y=(0,_.Z)(x,[["render",h]]);var D=y}}]);