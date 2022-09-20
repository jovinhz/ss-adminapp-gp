"use strict";(self["webpackChunksumatera_soil"]=self["webpackChunksumatera_soil"]||[]).push([[716],{9763:function(t,a,e){e.d(a,{Ay:function(){return o},Mq:function(){return s},ci:function(){return n}});var i=e(9145);const r=new i.Z,o=(t={limit:1e4})=>r.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/products",{params:t}),s=t=>r.withOptions({showProgressBar:!1}).axiosInstance.get(`/administrator/products/${t}`),n=(t,a)=>r.withOptions({successFeedbackMessage:"Komoditi berhasil diperbarui",showSuccessFeedback:!0}).axiosInstance.put(`/administrator/products/${t}`,a)},6705:function(t,a,e){e.d(a,{p:function(){return i}});const i=t=>{const a=[];for(let e=0;e<t.length;e++)a.push({...t[e],seq:e+1});return a}},1716:function(t,a,e){e.r(a),e.d(a,{default:function(){return W}});var i=e(3396),r=e(7139);const o=t=>((0,i.dD)("data-v-2ee9cdf8"),t=t(),(0,i.Cn)(),t),s=o((()=>(0,i._)("div",{class:"content-title"},[(0,i._)("h5",null,"Dashboard")],-1))),n={class:"row"},l={class:"col-12"},d=o((()=>(0,i._)("div",{class:"dashboard-section-title d-flex align-items-center mb-3"},[(0,i._)("span",{class:"color-box"}),(0,i._)("h6",{class:"m-0"},"Sebaran")],-1))),m=(0,i.Uk)("Petani"),u=(0,i.Uk)("QC"),c={class:"row mt-3"},p={class:"col-12"},h={key:0},f={key:1},g=(0,i.Uk)("Total");function w(t,a,e,o,w,y){const b=(0,i.up)("a-select-option"),D=(0,i.up)("a-select"),_=(0,i.up)("a-range-picker"),v=(0,i.up)("GMapMarker"),M=(0,i.up)("GMapMap"),k=(0,i.up)("a-progress"),F=(0,i.up)("a-table-summary-cell"),C=(0,i.up)("a-table-summary-row"),q=(0,i.up)("a-table-summary"),Y=(0,i.up)("a-table");return(0,i.wg)(),(0,i.iD)("div",null,[s,(0,i._)("div",n,[(0,i._)("div",l,[d,(0,i._)("div",null,[(0,i.Wm)(D,{class:"mr-3",style:{width:"120px"},value:t.roleFilter,"onUpdate:value":a[0]||(a[0]=a=>t.roleFilter=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{value:"farmer"},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(b,{value:"qc"},{default:(0,i.w5)((()=>[u])),_:1})])),_:1},8,["value"]),(0,i.Wm)(D,{class:"mr-3",style:{width:"150px"},value:t.commodityFilter,"onUpdate:value":a[1]||(a[1]=a=>t.commodityFilter=a),options:t.commodityOptions,placeholder:"Pilih komoditi",loading:t.loadingCommodity,onChange:t.handleCommodityChange},null,8,["value","options","loading","onChange"]),(0,i.Wm)(_,{value:t.dateRange,"onUpdate:value":a[2]||(a[2]=a=>t.dateRange=a),onChange:t.onRangeChange},null,8,["value","onChange"])]),(0,i.Wm)(M,{ref:"mapRef",center:t.center,zoom:8,style:{width:"100%",height:"calc(80vh - 280px)","margin-top":"20px"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.markers,((t,a)=>((0,i.wg)(),(0,i.j4)(v,{key:a,position:t},null,8,["position"])))),128))])),_:1},8,["center"])])]),(0,i._)("div",c,[(0,i._)("div",p,[(0,i.Wm)(Y,{columns:t.columns,"data-source":t.dataSource,"row-key":t=>t.id,loading:t.loading,scroll:{y:t.setting.maxTableContentHeight,x:!0}},{bodyCell:(0,i.w5)((({column:a,record:e})=>["name"===a.key?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},["farmer"===t.roleFilter?((0,i.wg)(),(0,i.iD)("div",h,(0,r.zw)(e.farmer.name),1)):((0,i.wg)(),(0,i.iD)("div",f,(0,r.zw)(e.warehouse.name),1))],64)):(0,i.kq)("",!0),"contribution"===a.key?((0,i.wg)(),(0,i.j4)(k,{key:1,class:"mr-1",percent:e.qty/t.total*100,format:t=>new Intl.NumberFormat("id",{maximumFractionDigits:2}).format(t)+"%"},null,8,["percent","format"])):(0,i.kq)("",!0)])),summary:(0,i.w5)((()=>[(0,i.Wm)(q,{fixed:""},{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(F),(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t.total)+" "+(0,r.zw)("farmer"===t.roleFilter?t.farmerDistributionMap?.product.unit:t.qcDistributionMap?.product.unit),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["columns","data-source","row-key","loading","scroll"])])])])}var y=e(4870),b=e(9763),D=e(9145);const _=new D.Z,v=t=>_.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/pages/farmer_distribution_map",{params:t}),M=t=>_.withOptions({showProgressBar:!1}).axiosInstance.get("/administrator/pages/warehouse_distribution_map",{params:t});var k=e(7417),F=e(6705),C=e(5743),q=e.n(C),Y=(0,i.aZ)({name:"Dashboard",setup(){const t=(0,y.iH)(),a=(0,y.iH)("farmer"),e=(0,y.iH)(),r=(0,k.oR)(),o=(0,i.Fl)((()=>r.getters["Setting/settings"])),s=(0,y.iH)([{title:"#",key:"#",dataIndex:"seq",width:50},{title:"Nama",key:"name",width:350},{title:"Kontribusi",dataIndex:"qty",width:175},{title:"Kontribusi(%)",key:"contribution"}]),n=(0,y.iH)([q()().startOf("month"),q()().endOf("month")]);return{mapRef:t,roleFilter:a,commodityFilter:e,setting:o,columns:s,dateRange:n}},mounted(){this.fetchCommodities()},data(){return{commodities:[],loadingCommodity:!1,farmerDistributionMap:void 0,qcDistributionMap:void 0,center:{lat:3.708412,lng:98.354582},markers:[],loading:!1,total:0}},computed:{commodityOptions(){return this.commodities.map((t=>({value:t.id,label:t.name})))},dataSource(){return"farmer"===this.roleFilter?this.farmerDistributionMap?(0,F.p)(this.farmerDistributionMap.data):[]:this.qcDistributionMap?(0,F.p)(this.qcDistributionMap.data):[]}},methods:{async fetchCommodities(){this.loadingCommodity=!0;const t=await(0,b.Ay)();t.success&&(this.commodities=t.data.data),this.loadingCommodity=!1},async fetchFarmerDistributionMap(){if(!this.commodityFilter)return;const t=await v({product_id:this.commodityFilter,start_date:this.dateRange[0].format("YYYY-MM-DD"),end_date:this.dateRange[1].format("YYYY-MM-DD")});t.success&&(this.farmerDistributionMap=t.data,this.total=this.farmerDistributionMap.data.reduce(((t,a)=>t+parseFloat(a.qty)),0),this.markers=t.data.data.map((t=>({lat:parseFloat(t.farmer.latitude),lng:parseFloat(t.farmer.longitude)}))))},async fetchQcDistributionMap(){if(!this.commodityFilter)return;const t=await M({product_id:this.commodityFilter,start_date:this.dateRange[0].format("YYYY-MM-DD"),end_date:this.dateRange[1].format("YYYY-MM-DD")});t.success&&(this.qcDistributionMap=t.data,this.total=this.qcDistributionMap.data.reduce(((t,a)=>t+parseFloat(a.qty)),0),this.markers=t.data.data.map((t=>({lat:parseFloat(t.warehouse.latitude),lng:parseFloat(t.warehouse.longitude)}))))},handleCommodityChange(){"farmer"===this.roleFilter?this.fetchFarmerDistributionMap():"qc"===this.roleFilter&&this.fetchQcDistributionMap()},onRangeChange(){"farmer"===this.roleFilter?this.fetchFarmerDistributionMap():"qc"===this.roleFilter&&this.fetchQcDistributionMap()}}}),x=e(89);const R=(0,x.Z)(Y,[["render",w],["__scopeId","data-v-2ee9cdf8"]]);var W=R}}]);