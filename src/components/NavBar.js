var Link=require('react-router').Link;
var Icon=require('./Icon');

var NavBar=React.createClass({
    propTypes:{
        active:React.PropTypes.object
    },
    render: function() {
        var navList=[
            {url:'/words', icon:'order', name:'词'},
            {url:'/idiom', icon:'order', name:'成'},
            {url:'/proverb', icon:'order', name:'谚'},
            {url:'/english', icon:'order', name:'英'}
        ];
        return (
            <nav className="tabbar tabbar-success padding-h-0">
                {
                    navList.map(function(o, i){
                        return (
                            <Link key={i} to={o.url} activeClassName="active" className="tabbar-item">
                                <span className="tabbar-label">{o.name}</span>
                            </Link>
                        )
                    })
                }
            </nav>
        )
    }
});

module.exports=NavBar;