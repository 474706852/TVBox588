var rule={     
    title:'看比赛',
    host:'https://sports.qq.com/kbsweb/',
     url:'/fyclass',
    class_name:'全部',
    class_url:'/',
    //url:'/vodshow/fyclass--------fypage---.html',
    //searchUrl:'/vodsearch/**----------fypage---.html',
     headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
       //class_name:'NBA&CBA&FIBA&女篮世界杯&男篮世界杯&WNBA&NCAA&篮球其他&欧冠&德甲&英超&#西甲&意甲&法甲&中超',
    //class_url:'#nba&#cba&#160000&#160004&#160001&#100020&#ncaa&#100340&#ucl&#bundesliga&#laliga&#seriea&#ll&#csl', 
    
    play_parse:true,
    lazy:"",
    limit:6,
    double:false,
 
    推荐:'*',
   // 一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.name:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.name:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.lab_time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'🏆'+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
       // 一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.name:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.name:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.lab_time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    一级:'.schedule-block:eq(2) a;div:gt(1):div(4)&&Text;img&&src;div:lt(2)&&Text;div:eq(1)&&href',
    二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    //二级:{
		"title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",
		"img":"img&&src",
		"desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",
		"content":".sub_list ul&&Text",
		"tabs":"js:TABS=['直播源']",
		"lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
	},
    搜索:'',
}