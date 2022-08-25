"use strict";(self["webpackChunkspringboot_vue_project"]=self["webpackChunkspringboot_vue_project"]||[]).push([[219],{9219:function(e,l,a){a.r(l),a.d(l,{default:function(){return z}});var t=a(6252),o=a(9963),i=a(3577);const s=(0,t.Uk)(" 查询"),r=(0,t.Uk)(" 重置"),d=(0,t.Uk)(" 新增图书"),n=(0,t.Uk)(" 编辑"),u=(0,t.Uk)(" 删除"),m=(0,t.Uk)(" 收藏"),c=(0,t.Uk)(" 收藏"),p=(0,t.Uk)(" 申请借阅"),h={style:{margin:"10px 0"}},g=["id"],f=["id"],b=(0,t.Uk)("点击上传"),w={class:"dialog-footer"},y=(0,t.Uk)("取消"),k=(0,t.Uk)("确定"),V=(0,t.Uk)("取消"),W=(0,t.Uk)("确定");function v(e,l,a,v,C,_){const x=(0,t.up)("el-input"),D=(0,t.up)("el-option"),U=(0,t.up)("el-select"),z=(0,t.up)("el-switch"),$=(0,t.up)("Search"),P=(0,t.up)("el-icon"),F=(0,t.up)("el-button"),T=(0,t.up)("RefreshLeft"),S=(0,t.up)("Plus"),j=(0,t.up)("el-table-column"),Z=(0,t.up)("el-image"),I=(0,t.up)("Edit"),K=(0,t.up)("Delete"),q=(0,t.up)("el-popconfirm"),A=(0,t.up)("Star"),Y=(0,t.up)("StarFilled"),N=(0,t.up)("CirclePlusFilled"),O=(0,t.up)("el-table"),B=(0,t.up)("el-pagination"),J=(0,t.up)("el-form-item"),H=(0,t.up)("el-input-number"),M=(0,t.up)("el-upload"),E=(0,t.up)("el-form"),L=(0,t.up)("el-dialog"),R=(0,t.up)("el-date-picker");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",{style:{"margin-top":"10px"},onKeyup:l[5]||(l[5]=(0,o.D2)(((...e)=>_.load&&_.load(...e)),["enter","native"]))},[(0,t.Wm)(x,{modelValue:C.searchTitle,"onUpdate:modelValue":l[0]||(l[0]=e=>C.searchTitle=e),placeholder:"请输入图书名称",clearable:"",style:{width:"10%"}},null,8,["modelValue"]),(0,t.Wm)(x,{modelValue:C.searchAuthor,"onUpdate:modelValue":l[1]||(l[1]=e=>C.searchAuthor=e),placeholder:"请输入图书作者",clearable:"",style:{width:"10%","margin-left":"5px"}},null,8,["modelValue"]),(0,t.Wm)(x,{modelValue:C.searchPress,"onUpdate:modelValue":l[2]||(l[2]=e=>C.searchPress=e),placeholder:"请输入图书出版社",clearable:"",style:{width:"10%","margin-left":"5px"}},null,8,["modelValue"]),(0,t.Wm)(U,{modelValue:C.searchClassification,"onUpdate:modelValue":l[3]||(l[3]=e=>C.searchClassification=e),options:C.options,placeholder:"请选择图书类型",clearable:"",ref:"select",style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(C.options,(e=>((0,t.wg)(),(0,t.j4)(D,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","options"]),"user"===C.user.role?((0,t.wg)(),(0,t.j4)(z,{key:0,modelValue:C.onlyCollection,"onUpdate:modelValue":l[4]||(l[4]=e=>C.onlyCollection=e),"active-text":"收藏","inactive-text":"所有",style:{"margin-left":"5px"}},null,8,["modelValue"])):(0,t.kq)("",!0),(0,t.Wm)(F,{style:{"margin-left":"5px","margin-bottom":"5px"},onClick:_.load},{default:(0,t.w5)((()=>[s,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)($)])),_:1})])),_:1},8,["onClick"]),(0,t.Wm)(F,{style:{"margin-left":"5px","margin-bottom":"5px"},onClick:_.reset},{default:(0,t.w5)((()=>[r,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(T)])),_:1})])),_:1},8,["onClick"]),"admin"===C.user.role?((0,t.wg)(),(0,t.j4)(F,{key:1,style:{"margin-left":"5px","margin-bottom":"5px"},onClick:_.create,type:"primary"},{default:(0,t.w5)((()=>[d,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S)])),_:1})])),_:1},8,["onClick"])):(0,t.kq)("",!0)],32),(0,t.Wm)(O,{data:C.tableData,stripe:"",style:{width:"100%"},fit:""},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{prop:"id",label:"图书ID"}),(0,t.Wm)(j,{label:"封面"},{default:(0,t.w5)((e=>[(0,t.Wm)(Z,{style:{width:"8vw",height:"14vh"},src:e.row.cover},null,8,["src"])])),_:1}),(0,t.Wm)(j,{prop:"title",label:"书名"}),(0,t.Wm)(j,{prop:"author",label:"作者"}),(0,t.Wm)(j,{prop:"press",label:"出版社"}),(0,t.Wm)(j,{prop:"classification",label:"分类"}),(0,t.Wm)(j,{prop:"price",label:"价格"}),(0,t.Wm)(j,{fixed:"right",label:"操作",width:"210"},(0,t.Nv)({_:2},["admin"===C.user.role?{name:"default",fn:(0,t.w5)((e=>[(0,t.Wm)(F,{size:"small",onClick:l=>_.edit(e.row),type:"primary"},{default:(0,t.w5)((()=>[n,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I)])),_:1})])),_:2},1032,["onClick"]),(0,t.Wm)(q,{title:"您是否确认删除？",onConfirm:l=>_.remove(e.row.id)},{reference:(0,t.w5)((()=>[(0,t.Wm)(F,{type:"danger",size:"small"},{default:(0,t.w5)((()=>[u,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(K)])),_:1})])),_:1})])),_:2},1032,["onConfirm"])]))}:void 0,"user"===C.user.role?{name:"default",fn:(0,t.w5)((e=>[0===e.row.collection?((0,t.wg)(),(0,t.j4)(F,{key:0,size:"small",onClick:l=>_.collection(e.row.id)},{default:(0,t.w5)((()=>[m,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(A)])),_:1})])),_:2},1032,["onClick"])):(0,t.kq)("",!0),1===e.row.collection?((0,t.wg)(),(0,t.j4)(F,{key:1,size:"small",onClick:l=>_.cancelCollection(e.row.id)},{default:(0,t.w5)((()=>[c,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(Y)])),_:1})])),_:2},1032,["onClick"])):(0,t.kq)("",!0),(0,t.Wm)(F,{onClick:l=>_.pickDate(e.row.id),size:"small",type:"primary",style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[p,(0,t.Wm)(P,{style:{"margin-left":"5px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(N)])),_:1})])),_:2},1032,["onClick"])]))}:void 0]),1024)])),_:1},8,["data"]),(0,t._)("div",h,[(0,t.Wm)(B,{onSizeChange:_.sizeChange,onCurrentChange:_.currentChange,currentPage:C.currentPage,"onUpdate:currentPage":l[6]||(l[6]=e=>C.currentPage=e),"page-sizes":[5,10,20],"page-size":C.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:C.total},null,8,["onSizeChange","onCurrentChange","currentPage","page-size","total"]),(0,t.Wm)(L,{modelValue:C.dialogVisible,"onUpdate:modelValue":l[13]||(l[13]=e=>C.dialogVisible=e),width:"50%","before-close":_.close},{header:(0,t.w5)((({titleId:e,titleClass:l})=>[(0,t._)("div",null,["create"===C.dialogTitle?((0,t.wg)(),(0,t.iD)("span",{key:0,id:e,class:(0,i.C_)(l)},"新增图书",10,g)):(0,t.kq)("",!0),"edit"===C.dialogTitle?((0,t.wg)(),(0,t.iD)("span",{key:1,id:e,class:(0,i.C_)(l)},"编辑图书",10,f)):(0,t.kq)("",!0)])])),footer:(0,t.w5)((()=>[(0,t._)("span",w,[(0,t.Wm)(F,{onClick:l[12]||(l[12]=e=>C.dialogVisible=!1)},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(F,{type:"primary",onClick:_.save},{default:(0,t.w5)((()=>[k])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)(E,{model:C.form,"label-width":"120px",onKeyup:(0,o.D2)(_.save,["enter","native"])},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{label:"书名"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{modelValue:C.form.title,"onUpdate:modelValue":l[7]||(l[7]=e=>C.form.title=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J,{label:"作者"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{modelValue:C.form.author,"onUpdate:modelValue":l[8]||(l[8]=e=>C.form.author=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J,{label:"出版社"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{modelValue:C.form.press,"onUpdate:modelValue":l[9]||(l[9]=e=>C.form.press=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J,{label:"分类"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:C.form.classification,"onUpdate:modelValue":l[10]||(l[10]=e=>C.form.classification=e),options:C.options,placeholder:"请选择图书类型"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(C.options,(e=>((0,t.wg)(),(0,t.j4)(D,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","options"])])),_:1}),(0,t.Wm)(J,{label:"价格"},{default:(0,t.w5)((()=>[(0,t.Wm)(H,{modelValue:C.form.price,"onUpdate:modelValue":l[11]||(l[11]=e=>C.form.price=e),min:0,precision:2,style:{width:"30%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J,{label:"封面"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{action:C.url,ref:"upload","on-success":_.uploaded},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{type:"primary"},{default:(0,t.w5)((()=>[b])),_:1})])),_:1},8,["action","on-success"])])),_:1})])),_:1},8,["model","onKeyup"])])),_:1},8,["modelValue","before-close"]),(0,t.Wm)(L,{modelValue:C.dateDialogVisible,"onUpdate:modelValue":l[16]||(l[16]=e=>C.dateDialogVisible=e),title:"请选择借阅时间段",width:"40%","before-close":_.close},{footer:(0,t.w5)((()=>[(0,t.Wm)(F,{onClick:l[15]||(l[15]=e=>C.dateDialogVisible=!1)},{default:(0,t.w5)((()=>[V])),_:1}),(0,t.Wm)(F,{type:"primary",onClick:_.applyBorrow},{default:(0,t.w5)((()=>[W])),_:1},8,["onClick"])])),default:(0,t.w5)((()=>[(0,t.Wm)(E,{model:C.borrowForm,onKeyup:(0,o.D2)(_.applyBorrow,["enter","native"])},{default:(0,t.w5)((()=>[(0,t.Wm)(J,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{modelValue:C.borrowForm.dates,"onUpdate:modelValue":l[14]||(l[14]=e=>C.borrowForm.dates=e),type:"daterange","value-format":"YYYY-MM-DD","start-placeholder":"开始日期","end-placeholder":"结束日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","onKeyup"])])),_:1},8,["modelValue","before-close"])])])}var C=a(4471);function _(e){const l=document.cookie;let a=l.indexOf(e);if(-1!==a){a=a+e.length+1;let o=l.indexOf(";",a);-1===o&&(o=l.length);var t=unescape(l.substring(a,o))}return t}var x={name:"Book",components:{},data(){return{dialogVisible:!1,dialogTitle:"",dateDialogVisible:!1,form:{},borrowForm:{},searchTitle:"",searchAuthor:"",searchPress:"",searchClassification:"",onlyCollection:!1,currentPage:1,pageSize:5,userId:0,bookId:0,total:0,records:[],tableData:[],user:{},book:{},classification:"",url:"http://"+window.server.ip+"/api/upload/cover",options:[{value:"历史类",label:"历史类"},{value:"文学类",label:"文学类"},{value:"社会科学类",label:"社会科学类"},{value:"哲学类",label:"哲学类"},{value:"军事类",label:"军事类"},{value:"法律类",label:"法律类"},{value:"经济类",label:"经济类"},{value:"教育类",label:"教育类"},{value:"语言艺术类",label:"语言艺术类"},{value:"天文学类",label:"天文学类"},{value:"生物学类",label:"生物学类"},{value:"医学卫生类",label:"医学卫生类"},{value:"农业类",label:"农业类"},{value:"地理类",label:"地理类"},{value:"政治类",label:"政治类"}]}},created(){this.user=JSON.parse(_("user")),this.load(),this.$nextTick((()=>{this.load()}))},methods:{create(){this.dialogVisible=!0,this.dialogTitle="create",this.form={},this.$nextTick((()=>{this.$refs["upload"].clearFiles()}))},close(){this.dialogVisible=!1,this.dateDialogVisible=!1},save(){this.form.id?C.Z.put("/book",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"编辑图书成功！"}),this.dialogVisible=!1,this.load()):(this.$message({type:"error",message:e.msg}),this.dialogVisible=!1)})):C.Z.post("/book",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"新增图书成功！"}),this.dialogVisible=!1,this.load()):(this.$message({type:"error",message:e.msg}),this.dialogVisible=!1)}))},load(){C.Z.get("/book",{params:{pageNum:this.currentPage,pageSize:this.pageSize,userId:this.user.id,searchTitle:this.searchTitle,searchAuthor:this.searchAuthor,searchPress:this.searchPress,searchClassification:this.searchClassification,onlyCollection:this.onlyCollection}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},reset(){this.searchTitle="",this.searchAuthor="",this.searchPress=""},edit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0,this.dialogTitle="edit",this.$nextTick((()=>{this.$refs["upload"].clearFiles()}))},remove(e){C.Z["delete"]("/book/"+e).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"删除图书成功！"}),this.load()):this.$message({type:"error",message:e.msg})}))},collection(e){C.Z.post("/book/collection/"+this.user.id,e).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"收藏图书成功！"}),this.dialogVisible=!1,this.load()):(this.$message({type:"warning",message:e.msg}),this.dialogVisible=!1)}))},cancelCollection(e){C.Z["delete"]("/book/collection/"+this.user.id+"/"+e).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"取消收藏图书成功！"}),this.load()):this.$message({type:"error",message:e.msg})}))},pickDate(e){this.borrowForm={userId:this.user.id,bookId:e,returnDate:""},this.dateDialogVisible=!0},applyBorrow(){console.log(this.borrowForm),this.borrowForm.startDate=this.borrowForm.dates[0],this.borrowForm.endDate=this.borrowForm.dates[1],C.Z.post("/borrow/"+this.user.id,this.borrowForm).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"申请借阅图书成功！"}),this.dateDialogVisible=!1,this.load()):(this.$message({type:"error",message:e.msg}),this.dateDialogVisible=!1)}))},uploaded(e){this.form.cover=e.data},currentChange(e){this.currentPage=e,this.load()},sizeChange(e){this.pageSize=e,this.load()}}},D=a(3744);const U=(0,D.Z)(x,[["render",v]]);var z=U}}]);
//# sourceMappingURL=219.421e086d.js.map