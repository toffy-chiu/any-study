var ReactDOM=require('react-dom');
var ReactRouter=require('react-router'),
    //withRouter=ReactRouter.withRouter,
    hashHistory=ReactRouter.hashHistory,
    Redirect=ReactRouter.Redirect,
    IndexRedirect=ReactRouter.IndexRedirect,
    Route=ReactRouter.Route,
    Router=ReactRouter.Router;
require('./utils/iconfont');
require('./css/amazeui.touch.min.css');
require('./css/app.css');

//首页
var Master=require('./components/Master');
var Words=require('./pages/Words');
var Edit=require('./pages/Edit');
var Idiom=require('./pages/Idiom');
var Proverb=require('./pages/Proverb');
var English=require('./pages/English');
var Setting=require('./pages/Setting');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRedirect to="/words"/>
            <Redirect from="/index" to="/words"/>
            <Route component={Master}>
                <Route path="words" component={Words}/>
                <Route path="idiom" component={Idiom}/>
                <Route path="proverb" component={Proverb}/>
                <Route path="english" component={English}/>
            </Route>
            <Route path="edit/:type(/:id)" component={Edit}/>
            <Route path="setting" component={Setting}/>
        </Route>
    </Router>
    ,
    document.getElementById('container')
);