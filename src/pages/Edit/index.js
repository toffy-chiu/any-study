var TopBar=require('../../components/TopBar');
var Loader=require('../../components/Loader');
var Icon=require('../../components/Icon');

var dateFormat = require('tf-utils/lib/dateFormat');
var db = require('../../utils/IndexDB');
var typeInfo=require('../../config/typeInfo');

module.exports=React.createClass({
    getInitialState:function(){
        return {
            loading:true,
            isNew:true, //当前页面是否新增状态
            data:{}
        }
    },
    componentWillMount:function(){
        var id=this.props.params.id;
        //通过ID来判断是增加还是编辑
        if(id) {
            //加载编辑信息
            db.get(db.TABLE_STUDY, id, function (info) {
                info.id = id;
                this.setState({
                    isNew:false,
                    loading:false,
                    data:info
                });
            }.bind(this));
        }else{
            //设置默认值
            this.setState({
                loading:false,
                data:{
                    type:this.props.params.type,
                    name:''
                }
            });
        }
    },
    /**
     * 输入组件值变化时
     */
    handleChange:function(e){
        var t=e.target;
        var data=this.state.data;
        data[t.name]=t.value;
        //设置各组件的值
        this.setState({data:data});
    },
    handleSubmit:function(e){
        e.preventDefault();

        var data=this.state.data;
        if (this.state.isNew) {
            db.add(db.TABLE_STUDY, data);
        } else {
            db.save(db.TABLE_STUDY, this.props.params.id, data);
        }
        location.hash = typeInfo[this.props.params.type].index;
    },
    /**
     * 删除
     */
    handleDelete:function(){
        if(confirm('确定要删除该记录吗？')){
            //删除该记录
            db.del(db.TABLE_STUDY, this.props.params.id);
            location.hash = typeInfo[this.props.params.type].index;
        }
    },
    render:function(){
        if(this.state.loading){
            return <Loader/>
        }else {
            var info=typeInfo[this.props.params.type];
            return (
                <form onSubmit={this.handleSubmit} className="container container-fill container-column">
                    <TopBar title={this.state.isNew?'新增记录':'编辑记录'} leftNav={{href:info.index}} />
                    <div className="group group-no-padded margin-0">
                        <div className="group-body">
                            <ul className="list">
                                <li className="item item-input">
                                    <div className="item-main">
                                        <label className="field-container">
                                            <span className="field-label">{info.name}：</span>
                                            <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange} required/>
                                        </label>
                                    </div>
                                </li>
                                <li className="item item-input">
                                    <div className="item-main">
                                        <label className="field-container" style={{alignItems:'flex-start',paddingTop:'0.45rem'}}>
                                            <span className="field-label" style={{minHeight:'5rem'}}>描述：</span>
                                            <textarea className="padding-0" name="desc" value={this.state.data.desc} onChange={this.handleChange}/>
                                        </label>
                                    </div>
                                </li>
                                <li className="item item-input">
                                    <div className="item-main">
                                        <label className="field-container" style={{alignItems:'flex-start',paddingTop:'0.45rem'}}>
                                            <span className="field-label" style={{minHeight:'5rem'}}>例句：</span>
                                            <textarea className="padding-0" name="example" value={this.state.data.example} onChange={this.handleChange}/>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {
                        this.state.isNew ? (
                            <div className="margin-xs text-center group">
                                <div className="group-body">
                                    <button type="submit" className="btn btn-primary btn-sm btn-hollow">提交</button>
                                </div>
                            </div>
                        ) : (
                            <div className="margin-xs text-center group">
                                <div className="group-body">
                                    <button type="button" onClick={this.handleDelete} className="btn btn-alert btn-sm btn-hollow">删除</button>
                                    <button type="submit" className="btn btn-secondary btn-sm btn-hollow">保存</button>
                                </div>
                            </div>
                        )
                    }
                </form>
            )
        }
    }
});