"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[337],{9337:function(t,a,e){e.r(a),e.d(a,{default:function(){return T}});var s=e(3396),i=e(7139);const n={class:"content-title"},l=(0,s._)("h5",null,"Daftar Transaksi QC - Petani",-1),o=["disabled"],r=(0,s._)("i",{class:"fe fe-refresh-cw mr-1"},null,-1),u=(0,s.Uk)(" Refresh "),d=[r,u],c=(0,s.Uk)("Semua"),k=(0,s.Uk)("Menunggu Dijemput"),m=(0,s.Uk)("Selesai"),w=(0,s.Uk)("Dibatalkan"),h={key:0},g={key:0},f={key:0},y={key:0},_=["onClick"],p=(0,s._)("i",{class:"fe fe-x mr-2"},null,-1),D=(0,s._)("span",null,"Batalkan",-1),b=[p,D];function q(t,a,e,r,u,p){const D=(0,s.up)("a-select-option"),q=(0,s.up)("a-select"),v=(0,s.up)("a-tag"),C=(0,s.up)("a-table");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[l,(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-light mr-3",onClick:a[0]||(a[0]=(...a)=>t.refresh&&t.refresh(...a)),disabled:t.loading},d,8,o),(0,s.Wm)(q,{ref:"select",value:t.filterStatus,"onUpdate:value":a[1]||(a[1]=a=>t.filterStatus=a),style:{width:"220px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(D,{value:"all"},{default:(0,s.w5)((()=>[c])),_:1}),(0,s.Wm)(D,{value:"pending"},{default:(0,s.w5)((()=>[k])),_:1}),(0,s.Wm)(D,{value:"accepted"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(D,{value:"rejected"},{default:(0,s.w5)((()=>[w])),_:1})])),_:1},8,["value"])])]),(0,s._)("div",null,[(0,s.Wm)(C,{columns:t.columns,"data-source":t.filteredRowData,"row-key":t=>t.id,loading:t.loading,scroll:{y:t.setting.maxTableContentHeight,x:!0}},{bodyCell:(0,s.w5)((({column:a,text:e})=>["commodity"===a.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[e.items.length?((0,s.wg)(),(0,s.iD)("span",h,(0,i.zw)(e.items[0].product.name),1)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"unit"===a.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[e.items.length?((0,s.wg)(),(0,s.iD)("span",g,(0,i.zw)(e.items[0].product.unit),1)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"qty"===a.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[e.items.length?((0,s.wg)(),(0,s.iD)("span",f,(0,i.zw)(e.items[0].qty),1)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"action"===a.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:3},[1===e.status_id?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("button",{class:"btn btn-danger btn-sm mr-3",onClick:a=>t.handleCancel(e.id)},b,8,_)])):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"status"===a.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:4},[1===e.status_id?((0,s.wg)(),(0,s.j4)(v,{key:0,color:"orange"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0),2===e.status_id?((0,s.wg)(),(0,s.j4)(v,{key:1,color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0),3===e.status_id?((0,s.wg)(),(0,s.j4)(v,{key:2,color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0)])),_:1},8,["columns","data-source","row-key","loading","scroll"])])])}var v=e(4870),C=e(2574),S=e(7417),x=e(9145);const U=new x.Z,H=(t={})=>U.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/mutations",{params:t}),W=t=>U.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Transaksi berhasil dibatalkan",showErrorFeedback:!0}).axiosInstance.put(`/administrator/mutations/${t}/cancel`);var j=(0,s.aZ)({name:"Mutation",setup(){const t=(0,S.oR)(),a=(0,s.Fl)((()=>t.getters["Setting/settings"])),e=(0,v.iH)("all"),i=(0,v.iH)([{title:"Nama Petani",key:"farmer_name",dataIndex:["farmer","name"]},{title:"Nama QC",key:"qc_name",dataIndex:["warehouse","name"]},{title:"Komoditi",key:"commodity"},{title:"Unit",key:"unit",width:70},{title:"Qty",key:"qty"},{title:"Total Harga",key:"price",dataIndex:"formatted_total_price",width:100},{title:"Status",key:"status"},{title:"Tanggal",key:"created_at",dataIndex:"created_at_caption"},{title:"Action",key:"action",width:200}]);return{columns:i,setting:a,filterStatus:e}},data(){return{rowData:[],loading:!0}},computed:{filteredRowData(){return this.rowData.filter((t=>"all"===this.filterStatus||("pending"===this.filterStatus?1===t.status_id:"accepted"===this.filterStatus?2===t.status_id:"rejected"!==this.filterStatus||3===t.status_id)))}},mounted(){this.fetchData()},methods:{async fetchData(){this.loading=!0;const t=await H();t.data.success&&(this.rowData=t.data.data),this.loading=!1},refresh(){this.rowData=[],this.fetchData()},async doCancel(t){this.$nprogress.start();const a=await W(t);a.data.success&&this.refresh(),this.$nprogress.done()},handleCancel(t){this.$modal.confirm({title:"Konfirmasi",icon:()=>(0,s.Wm)(C.Z),content:"Apakah Anda yakin untuk membatalkan transaksi ini?",onOk:()=>{this.doCancel(t)},onCancel:()=>{}})}}}),z=e(89);const I=(0,z.Z)(j,[["render",q]]);var T=I}}]);