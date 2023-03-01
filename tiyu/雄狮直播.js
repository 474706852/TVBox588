var rule = {
    title:'雄狮直播',
    host:'https://www.xszhibo.com/', 
    url:'/fyclass',
    class_name:'篮球&足球&乒乓球&羽毛球&斯诺克&网球',
    class_url:'lanqiu&zuqiu&zonghe/pingpangqiu/&zonghe/yumaoqiu/&zonghe/sinuoke/&zonghe/wangqiu/', 
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    double:true, // 推荐内容是否双层定位
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.tit ');tabs.forEach(function(it){var pz=pdfh(it,'.sbtsw022&&Text');var ps=pdfh(it,'.sbtsw spna&&Text');var pk=pdfh(it,'.sbtsw023&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.sbtsw&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
   二级:{
       title:'.live-title&&Text;.live-title&&Text',
       img:'img:eq(1)&&src',
       desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',
       content:'.live-info&&Text',
       tabs:"js:TABS=['【直播源】']",
       lists:'#down-site a',
       list_text:'a&&Text',
       list_url:'a&&data-url'
    },
  搜索:'.card-body .media;.text-danger&&Text;;.data&&Text;a&&href',
}