var OffCanvas=React.createClass({
    propTypes:{
        show:React.PropTypes.bool,
        onBackClick:React.PropTypes.func
    },
    getInitialState:function(){
        return {
            show:false,
            showIn:false,
            showOut:false
        }
    },
    componentWillReceiveProps:function(nextProps){
        if(nextProps.show!==this.props.show){
            if(nextProps.show){
                //show
                this.setState({
                    show:true,
                    showIn:true
                });

                setTimeout(function(){
                    this.setState({
                        showIn:false
                    });
                }.bind(this), 400);
            }else{
                //hide
                this.setState({
                    showOut:true
                });

                setTimeout(function(){
                    this.setState({
                        show:false,
                        showOut:false
                    });
                }.bind(this), 350); //提前隐藏
            }
        }
    },
    render: function() {
        var className='offcanvas offcanvas-right offcanvas-slide';
        if(this.state.showIn){
            className+=' offcanvas-in';
        }else if(this.state.showOut){
            className+=' offcanvas-out';
        }
        return (
            <div style={{display:this.state.show?'block':'none'}}>
                <div className={className}>
                    {this.props.children}
                </div>
                <div className="modal-backdrop" onClick={this.props.onBackClick}></div>
            </div>
        )
    }
});

module.exports = OffCanvas;