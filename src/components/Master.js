var TopBar=require('./TopBar');
var NavBar=require('./NavBar');
var observer=require('../utils/observer');

var Master=React.createClass({
    getInitialState:function(){
        return {};
    },
    componentWillMount:function(){
        observer.subscribe('typeChange', this.setType);
    },
    componentWillUnmount:function(){
        observer.unsubscribe('typeChange', this.setType);
    },
    setType:function(type){
        this.setState({type:type});
    },
    render: function() {
        return (
            <div className="container container-fill container-column">
                <div className="views container-column">
                    <div className="view">
                        <TopBar leftNav={{icon:'setting',href:'/setting'}} rightNav={{href:`/edit/${this.state.type}`}}/>
                        <div className="container container-fill container-scrollable">
                            {
                                this.props.children
                            }
                        </div>
                    </div>
                </div>
                <NavBar/>
            </div>
        )
    }
});

module.exports=Master;