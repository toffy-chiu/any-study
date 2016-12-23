/**
 * 观察者模式
 */
function Observer(){
    this.subscribeList=[];
}

Observer.prototype={
    construct:Observer,
    /**
     * 订阅
     * @param name
     * @param fn
     */
    subscribe:function(name, fn){
        this.subscribeList.push({
            name:name,
            fn:fn
        });
    },
    /**
     * 取消订阅
     * @param name
     * @param fn
     */
    unsubscribe:function(name, fn){
        this.subscribeList=this.subscribeList.filter(function(o){
            return o.name!==name||o.fn!==fn;
        });
    },
    /**
     * 发布
     * @param name
     * @param data
     */
    publish:function(name, data){
        this.subscribeList.forEach(function(o){
            if(o.name===name){
                o.fn(data);
            }
        });
    }
};

module.exports = new Observer();