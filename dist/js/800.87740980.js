"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[800],{2800:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var s=a(3396),i=a(7139);const n={class:"content-title"},l=(0,s._)("h5",null,"Daftar Transaksi Reward",-1),o=["disabled"],r=(0,s._)("i",{class:"fe fe-refresh-cw mr-1"},null,-1),d=(0,s.Uk)(" Refresh "),c=[r,d],u=(0,s.Uk)("Semua"),m=(0,s.Uk)("Pending"),f=(0,s.Uk)("Selesai"),h=(0,s.Uk)("Dibatalkan"),w={key:0},p=["onClick"],k=(0,s._)("i",{class:"fe fe-x"},null,-1),_=[k],g=["onClick"],b=(0,s._)("i",{class:"fe fe-check"},null,-1),v=[b],y={key:2,class:"d-flex"},R=["src"],j={class:"font-weight-bold"},S={class:"row"},x={class:"col-12"},D=(0,s._)("button",{type:"submit",class:"d-none"},null,-1);function W(e,t,a,r,d,k){const b=(0,s.up)("a-select-option"),W=(0,s.up)("a-select"),U=(0,s.up)("a-tag"),F=(0,s.up)("a-table"),q=(0,s.up)("a-textarea"),C=(0,s.up)("a-form-item"),H=(0,s.up)("a-form"),M=(0,s.up)("a-modal");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",n,[l,(0,s._)("div",null,[(0,s._)("button",{class:"btn btn-light mr-3",onClick:t[0]||(t[0]=(...t)=>e.refresh&&e.refresh(...t)),disabled:e.loading},c,8,o),(0,s.Wm)(W,{ref:"select",value:e.filterStatus,"onUpdate:value":t[1]||(t[1]=t=>e.filterStatus=t),style:{width:"120px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{value:"all"},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(b,{value:"pending"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(b,{value:"accepted"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(b,{value:"rejected"},{default:(0,s.w5)((()=>[h])),_:1})])),_:1},8,["value"])])]),(0,s._)("div",null,[(0,s.Wm)(F,{columns:e.columns,"data-source":e.filteredRowData,"row-key":e=>e.id,loading:e.loading,scroll:{y:e.setting.maxTableContentHeight,x:!0}},{bodyCell:(0,s.w5)((({column:t,text:a})=>["action"===t.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[1===a.status_id?((0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("button",{class:"btn btn-danger btn-sm mr-3",onClick:t=>e.openRejectFormModal(a)},_,8,p),(0,s._)("button",{class:"btn btn-success btn-sm",onClick:t=>e.doAccept(a)},v,8,g)])):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"status"===t.key?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[1===a.status_id?((0,s.wg)(),(0,s.j4)(U,{key:0,color:"orange"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(a.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0),2===a.status_id?((0,s.wg)(),(0,s.j4)(U,{key:1,color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(a.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0),3===a.status_id?((0,s.wg)(),(0,s.j4)(U,{key:2,color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(a.status_caption),1)])),_:2},1024)):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0),"product"===t.key?((0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("img",{src:a.reward_product.image_url,alt:"",style:{width:"60px",height:"60px"},class:"mr-3"},null,8,R),(0,s._)("div",null,[(0,s._)("div",j,(0,i.zw)(a.reward_product.name),1),(0,s._)("div",null,(0,i.zw)(a.reward_product.price_in_point)+" Point",1),(0,s._)("div",null,"Stok: "+(0,i.zw)(a.reward_product.stock),1)])])):(0,s.kq)("",!0)])),_:1},8,["columns","data-source","row-key","loading","scroll"])]),(0,s.Wm)(M,{class:"form-modal",visible:e.rejectModalVisible,"onUpdate:visible":t[3]||(t[3]=t=>e.rejectModalVisible=t),title:"Alasan Reject",confirmLoading:e.loadingReject,onOk:e.handleReject},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{layout:"vertical",ref:"formRef",model:e.formState,rules:e.formRules,onFinish:e.handleReject},{default:(0,s.w5)((()=>[(0,s._)("div",S,[(0,s._)("div",x,[(0,s.Wm)(C,{ref:"reason",name:"reason"},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{value:e.formState.reason,"onUpdate:value":t[2]||(t[2]=t=>e.formState.reason=t),placeholder:"Alasan penolakan"},null,8,["value"])])),_:1},512)])]),D])),_:1},8,["model","rules","onFinish"])])),_:1},8,["visible","confirmLoading","onOk"])])}var U=a(4870),F=a(7417),q=a(9145);const C=new q.Z,H=(e={limit:1e4})=>C.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/reward_transactions",{params:e}),M=(e,t)=>C.withOptions({successFeedbackMessage:"Point redemption berhasil ditolak",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/reward_transactions/${e}/cancel`,t),A=e=>C.withOptions({successFeedbackMessage:"Point redemption berhasil disetujui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/reward_transactions/${e}/approve`);var I=(0,s.aZ)({name:"RewardTransactions",setup(){const e=(0,F.oR)(),t=(0,s.Fl)((()=>e.getters["Setting/settings"])),a=(0,U.iH)(!1),i=e=>{a.value=!0,n.value=e},n=(0,U.iH)(),l=(0,U.iH)("all"),o=(0,U.iH)([{title:"Nama Petani",key:"name",dataIndex:["farmer","name"]},{title:"Total Harga",key:"price",dataIndex:"price_in_point",width:100},{title:"Status",key:"status"},{title:"Komoditi",key:"product"},{title:"Alasan Batal",key:"reason",dataIndex:"canceled_reason",width:200,maxWidth:400},{title:"Tanggal",key:"created_at",dataIndex:"created_at_caption"},{title:"Action",key:"action",maxWidth:150}]),r=(0,U.iH)(),d=(0,U.qj)({reason:void 0}),c={reason:[{required:!0,trigger:"change",message:"Alasan penolakan tidak boleh kosong"}]};return{columns:o,setting:t,filterStatus:l,rejectModalVisible:a,focusedTransaction:n,formRef:r,formState:d,formRules:c,openRejectFormModal:i}},data(){return{rowData:[],loading:!0,loadingReject:!1}},computed:{filteredRowData(){return this.rowData.filter((e=>"all"===this.filterStatus||("pending"===this.filterStatus?1===e.status_id:"accepted"===this.filterStatus?2===e.status_id:"rejected"!==this.filterStatus||3===e.status_id)))}},mounted(){this.fetchData()},methods:{async fetchData(){this.loading=!0;const e=await H({limit:1e6});e.success&&(this.rowData=e.data.data),this.loading=!1},refresh(){this.rowData=[],this.fetchData()},async doAccept(e){this.$nprogress.start();const t=await A(e.id);t.success&&this.refresh(),this.$nprogress.done()},async doReject(){this.$nprogress.start(),this.loadingReject=!0;const e=await M(this.focusedTransaction.id,{reason:this.formState.reason});e.success&&(this.formRef.resetFields(),this.rejectModalVisible=!1,this.refresh()),this.$nprogress.done(),this.loadingReject=!1},handleReject(){this.formRef.validate().then((()=>this.doReject())).catch((()=>{}))}}}),T=a(89);const z=(0,T.Z)(I,[["render",W]]);var P=z}}]);