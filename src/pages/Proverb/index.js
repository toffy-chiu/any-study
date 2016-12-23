var ListItem=require('../../components/ListItem');
var Loader=require('../../components/Loader');
var OffCanvas=require('../../components/OffCanvas');
var MasterMixin=require('../../mixins/MasterMixin');
var tone=require('../../utils/tone');

var Proverb=React.createClass({
    type:'PROVERB',
    mixins:[MasterMixin],
    render:function(){
        if(this.state.loading){
            return <Loader/>
        }else{
            var list=this.state.list;
            return (
                <div>
                    <OffCanvas show={this.state.showOffCanvas} onBackClick={function(){this.setState({showOffCanvas:false})}.bind(this)}>
                        <div className="padding">
                            <h3>{this.state.name}</h3>
                            <div>{tone(this.state.desc)}</div>
                            <h5>例句：</h5>
                            <div dangerouslySetInnerHTML={{__html: this.state.example}}></div>
                        </div>
                    </OffCanvas>
                    <ul className="list margin-0">
                        {
                            list.length?list.map(function(o, i){
                                o.type=this.type;
                                return <ListItem key={i} data={o} onClick={this.handleClick}/>
                            }.bind(this)):(
                                <li className="item">
                                    <div>还没有收藏的谚语，去添加一个吧！</div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            )
        }
    }
});

module.exports = Proverb;