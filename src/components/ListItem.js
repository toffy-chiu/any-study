var Link=require('react-router').Link;
var Icon=require('./Icon');

var ListItem = React.createClass({
    propTypes:{
        data:React.PropTypes.object,
        onClick:React.PropTypes.func.isRequired
    },
    /**
     * 封装点击
     * @param item
     */
    handleClick:function(item){
        this.props.onClick(item);
    },
    render:function(){
        var o=this.props.data;
        return (
            <li className="item" onClick={this.handleClick.bind(this, o)}>
                <h3 className="item-title">{o.index}. {o.name}</h3>
                <Link to={`/edit/${o.type}/${o.id}`} style={{lineHeight:0}}>
                    <Icon name="edit" color="#aaa" size="20"/>
                </Link>
            </li>
        )
    }
});

module.exports = ListItem;