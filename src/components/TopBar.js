var Link=require('react-router').Link;
var Icon=require('./Icon');

var TopBar=React.createClass({
    propTypes:{
        title:React.PropTypes.string,
        leftNav:React.PropTypes.object,
        rightNav:React.PropTypes.object
    },
    render: function() {
        return (
            <header className="navbar navbar-success">
                <h2 className="navbar-title navbar-center">
                    <Icon name="hat" color="white" size="30" style={{marginBottom:-9}}/> {this.props.title||'随时学'}
                </h2>
                {
                    this.props.leftNav?(
                        <div className="navbar-nav navbar-left">
                            <Link to={this.props.leftNav.href||'/index'}>
                                <Icon name={this.props.leftNav.icon||'back'} color="white" style={{marginBottom:-6}}/>
                            </Link>
                        </div>
                    ):null
                }
                {
                    this.props.rightNav?(
                        <div className="navbar-nav navbar-right">
                            <Link to={this.props.rightNav.href}>
                                <Icon name={this.props.rightNav.icon||'plus'} color="white" style={{marginBottom:-6}}/>
                            </Link>
                        </div>
                    ):null
                }
            </header>
        )
    }
});

module.exports=TopBar;