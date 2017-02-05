var db = require('../utils/IndexDB');
var observer=require('../utils/observer');
var pinyin=require('../utils/pinyin');
var listData={};

module.exports={
    getInitialState:function(){
        return {
            loading:true,
            showOffCanvas:false,
            list: []
        }
    },
    componentWillMount:function(){
        observer.publish('typeChange', this.type);

        if(listData[this.type]){
            this.setState({
                loading:false,
                list:listData[this.type]
            });
        }else {
            //读取数据库
            db.getList(db.TABLE_STUDY, function (list) {
                list.sort(function (a, b) {
                    return pinyin.getFullChars(a.name).localeCompare(pinyin.getFullChars(b.name));
                });

                listData[this.type]=list;

                this.setState({
                    loading: false,
                    list: list
                });
            }.bind(this), db.index_type, db.keyRange.inType(this.type));
        }
    },
    /**
     * 点击列表项
     * @param item
     */
    handleClick:function(item){
        this.setState({
            showOffCanvas:true,
            name:item.name,
            desc:item.desc,
            example:item.example
        });
    }
};