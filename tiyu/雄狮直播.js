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
        //title:"#list_1 li div:gt(2):lt(1)&&Text",
        //desc:";;;.sbtsw022&&Text;.sbtsw023&&Text",
        //content:"#list_1 li div:gt(0):lt(2)&&Text",
        //tabs:"js:TABS=['【直播源】']",
        //lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'#downinfo-detail:eq(#p) a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'a&&Text');let url=pd(it,'a&&href');return name+'$'+url});LISTS.push(d)});"},
      title:".cover a&&title;.message p:eq(7)&&Text",
      desc:".w-100&&Text;.message p:eq(10)&&Text;.message p:eq(9)&&Text;.message p:eq(6)&&Text;.message p:eq(4)&&Text",
      content:".message p:eq(-1)&&Text",
      tabs:"#player_list h2",
      tab_text:"h2--span&&Text",
      lists:"#downinfo-detail:eq(#p) a"
      },
   //搜索:'',
    搜索:'.card-body .media;.text-danger&&Text;;.data&&Text;a&&href',
}