var rule = {
    title:'咪咕体育',
    host:'https://www.miguvideo.com/mgs/website/prd/sportMatchDetail.html',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.date-list-item-box div');tabs.forEach(function(it){var pz=pdfh(it,'.team-name&&Text');var ps=pdfh(it,'.game-type&&Text');var pk=pdfh(it,'.team-name boss&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.date&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    
    二级:{
		title:".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",
		img:"img&&src",
		desc:";;;.lab_team_home&&Text;.lab_team_away&&Text",
		content:".sub_list ul&&Text",
		tabs:"js:TABS=['直播信号源']",
		lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)})"
	},
   搜索:'',
}