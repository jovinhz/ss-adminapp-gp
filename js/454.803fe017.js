"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[454],{5334:function(t,a,e){e.d(a,{UC:function(){return r},UK:function(){return i},pO:function(){return o},u6:function(){return u}});var s=e(9145);const n=new s.Z,o=(t={limit:1e4})=>n.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/warehouses",{params:t}),r=t=>n.withOptions({successFeedbackMessage:"QC berhasil ditambahkan",showSuccessFeedback:!0}).axiosInstance.post("/administrator/warehouses",t),i=t=>n.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/warehouses/${t}`),u=(t,a)=>n.withOptions({successFeedbackMessage:"QC berhasil diperbarui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/warehouses/${t}`,a)},6705:function(t,a,e){e.d(a,{p:function(){return s}});const s=t=>{const a=[];for(let e=0;e<t.length;e++)a.push({...t[e],seq:e+1});return a}},2454:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var s=e(3396),n=e(7139);const o={class:"content-title"},r=(0,s._)("h5",null,"Daftar QC",-1),i=["disabled"],u=(0,s._)("i",{class:"fe fe-refresh-cw mr-1"},null,-1),l=(0,s.Uk)(" Refresh "),c=[u,l],d=(0,s._)("button",{class:"btn btn-light"},[(0,s._)("i",{class:"fe fe-plus mr-1"}),(0,s.Uk)(" Tambah ")],-1),h=["src"];function m(t,a,e,u,l,m){const w=(0,s.up)("router-link"),g=(0,s.up)("a-tag"),p=(0,s.up)("a-table");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",o,[r,(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-light mr-3",onClick:a[0]||(a[0]=(...a)=>t.refresh&&t.refresh(...a)),disabled:t.loading},c,8,i),(0,s.Wm)(w,{to:t.ROUTE.CreateQualityControl.path},{default:(0,s.w5)((()=>[d])),_:1},8,["to"])])]),(0,s._)("div",null,[(0,s.Wm)(p,{columns:t.columns,"data-source":t.dataSource,"row-key":t=>t.id,loading:t.loading,scroll:{y:t.setting.maxTableContentHeight,x:!0},"custom-row":t.customRow},{bodyCell:(0,s.w5)((({column:t,text:a})=>["image_url"===t.dataIndex?((0,s.wg)(),(0,s.iD)("img",{key:0,src:a,alt:"Foto",style:{width:"70px",height:"70px","border-radius":"2px"}},null,8,h)):(0,s.kq)("",!0),"status_caption"===t.dataIndex?((0,s.wg)(),(0,s.j4)(g,{key:1,color:"Aktif"===a?"green":"red"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(a),1)])),_:2},1032,["color"])):(0,s.kq)("",!0)])),_:1},8,["columns","data-source","row-key","loading","scroll","custom-row"])])])}var w=e(4870),g=e(7417),p=e(678),f=e(5334),k=e(6705),b=e(7182),x=(0,s.aZ)({name:"QualityControl",setup(){const t=(0,p.tv)(),a=(0,g.oR)(),e=(0,s.Fl)((()=>a.getters["Setting/settings"])),n=(0,w.iH)([{title:"#",key:"#",dataIndex:"seq",width:50},{title:"Nama",key:"name",dataIndex:"name"},{title:"Foto",key:"image",dataIndex:"image_url"},{title:"Alamat",key:"address",dataIndex:"address",maxWidth:400},{title:"Status",key:"status",dataIndex:"status_caption",width:100}]),o=a=>({style:{cursor:"pointer"},onClick:()=>{t.push({path:`${b.Z.EditQualityControl.path}/${a.id}`})}});return{store:a,setting:e,columns:n,ROUTE:b.Z,customRow:o}},data(){return{rowData:[],loading:!0}},computed:{dataSource(){return(0,k.p)(this.rowData)}},mounted(){this.fetchData()},methods:{async fetchData(){this.loading=!0;const t=await(0,f.pO)();t.success&&(this.rowData=t.data.data),this.loading=!1},refresh(){this.rowData=[],this.fetchData()}}}),y=e(89);const _=(0,y.Z)(x,[["render",m]]);var C=_}}]);