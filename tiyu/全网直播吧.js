var rule = {
    title:'全网直播吧',//规则标题,没有实际作用,但是可以作为cms类名称依据
    host:'https://www.zhibo8.net',//网页的域名根,包含http头如 https://www,baidu.com
    url:'/live_1.html?project=1&game=0',//网站的分类页面链接, fyclass是分类标签 fypage是页数
    //url:'/fyclass',
    class_parse:'.nav-item li;a&&Text;a&&href',//动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    //class_name:'全部',
    //class_url:'/',
    headers:{
        'User-Agent':'PC_UA'
    },//网站的请求头,完整支持所有的,常带ua和cookies
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    play_parse:false,// 服务器解析播放
    lazy:'', // 自定义免嗅 
    limit:6, // 首页推荐显示数量
    double:false,//是否双层列表定位,默认false
    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    // 如果是双层定位的话,推荐的第2段分号代码也是第2层定位列表代码
    推荐:'*',
    // 一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.name:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.name:eq(2)&&Text');var timer=pdfh(it,'.lab_time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,url:url})});setResult(items);",
    一级:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',
    //一级:'.main-left .match-list;.match-item&&Text;col.col-time&&Text.col-name&&Text.col-home flex&&Text;a&&href',
   //一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',// 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
 // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
    // 二级 title: 片名;类型
    // 二级 desc: 主要信息;年代;地区;演员;导演
    // 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
    二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    //二级:{
	    "title":".play-info play-info-soccer&&Text",
	   "desc":";;;div.col-home:eq(0)&&Text;div.col-home:eq(1)&&Text",
	    "content":"div.col-time&&Text",
	    "tabs":"js:TABS=['全网直播吧']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	},

    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'',
}