var rule = {
    title:'高清直播',
    host:'http://www.zuqiuzhibo.live/',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&tr.against');tabs.forEach(function(it){var pz=pdfh(it,'tr.against td:gt(3)&&Text');var ps=pdfh(it,'td.matcha a&&Text');var pk=pdfh(it,'.category&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'time&&Text');var url=pd(it,'.links a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        //title:".title-content hl&&Text",//类型 时间
		//desc:";;;.title&&Text",  //演员;导演
		//content:".title-content hlg&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:'.xh a',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}