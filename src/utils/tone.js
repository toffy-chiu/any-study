//声调
var tones={
    a1:'ā',
    a2:'á',
    a3:'ǎ',
    a4:'à',
    e1:'ē',
    e2:'é',
    e3:'ě',
    e4:'è',
    i1:'ī',
    i2:'í',
    i3:'ǐ',
    i4:'ì',
    o1:'ō',
    o2:'ó',
    o3:'ǒ',
    o4:'ò',
    u1:'ū',
    u2:'ú',
    u3:'ǔ',
    u4:'ù',
    v1:'ǖ',
    v2:'ǘ',
    v3:'ǚ',
    v4:'ǜ',
    v:'ü'
};

//把键值转为数组
var keys=[];
for(keys[keys.length] in tones);

//初始化正则表达式
var regExp=new RegExp(keys.join('|'), 'g');

module.exports = function(str){
    return str&&str.replace(regExp, function(m){
        return tones[m];
    });
};