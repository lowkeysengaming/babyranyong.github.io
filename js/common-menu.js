var rootPath = '/';


function IsLoginUser() {
    return (UI_LOGIN == true);
}
function IsTester() {
    return (UI_TESTER == true);
}
function IsIssueOpen() {
    return (ISSUE_OPEN == true);
}

function menu(menuId) {
    switch(menuId) {
    	
		case 4:     // game store
		    location.href = rootPath + 'mart';
		    break;
		case 5:     // game store
		    location.href = 'mailto:bossrangm@yahoo.com';
		    break;
        case 0:     
            location.href = rootPath;
            break;
        case 901:     
            location.href = rootPath + 'agent/?id=19';
            break;
        case 902:     
            window.open('/show.aspx?articleid=101',"_blank");
            break;
        case 903:     
            location.href = rootPath + 'rank.aspx';
            break;
        case 101:
            window.open('/show.aspx?articleid=108',"_blank");
            break;
        case 1001:     
            location.href = rootPath + 'member/reg.aspx';
            break;
        case 1002:     
            location.href = rootPath + 'member/getbackpwd.aspx';
            break;
        case 1:    
            location.href = rootPath + 'index.aspx';
		    break;
		case 11:     // 新闻公告
		    location.href = rootPath + 'list.aspx?classname=News';
		    break;
		case 12:     // 活动讯息
		    location.href = rootPath + 'list.aspx?classname=Event';
		    break;
		    
		case 20:     // 会员中心
		    location.href = rootPath + 'member';
		    break;
		case 21:     // 排行榜
		    location.href = rootPath + 'rank.aspx';
		    break;
		case 22:     // 推广员系统
		    location.href = rootPath + 'member/tgtext.aspx';
		    break;
		case 23:     // 注册
		    location.href = rootPath + 'member/reg.aspx';
		    break;
		case 24:     // 修改密码
		    location.href = rootPath + 'member/editpwd.aspx';
		    break;
		case 25:     // 退出
		    location.href = rootPath + 'member/logout.aspx';
		    break;
		    
		case 30:	
		case 31:	//在线转生
		    location.href = rootPath + 'extend/webreborn.aspx';
		    break;
		case 32: 	//升级装备
		    location.href = rootPath + 'extend/webupitem.aspx';//alert('暫未釋出！武器裝備最高+50，可從遊戲中獲得！');
		    break;
		case 33: 	//在线洗点
		    location.href = rootPath + 'extend/webxd.aspx';
		    break;
		case 34:	//在线加点
		    location.href = rootPath + 'extend/webjd.aspx';
		    break;
		case 35: 	//洗红
		    location.href = rootPath + 'extend/webxb.aspx';
		    break;
		case 36: 	//在线变性
		    location.href = rootPath + 'extend/webchangesex.aspx';
		    break;
		case 37:	//在线泡点
		    location.href = rootPath + 'extend/webpd.aspx';
		    break;
		case 38: 	//修改安全码
		    location.href = rootPath + 'extend/editsafepwd20221223.aspx';
		    break;
		case 39: 	//消费记录
		    location.href = rootPath + 'mart/itemorder.aspx';
		    break;

                case 326: 	//item traR
		    location.href = rootPath + 'extend/itemTransfer.aspx';
		    break;
               case 328: 	//ep to gold
		    location.href = rootPath + 'extend/webp2g.aspx';
		    break;

                case 127: 	//RECOVER DEL CHAR
		    location.href = rootPath + 'extend/itemDel.aspx';
		    break;

                case 125: 	//RECOVER DEL CHAR
		    location.href = rootPath + 'extend/webcha_renewindex.aspx';
		    break;


		case 391: 	//DZP
		    location.href = rootPath + 'event/geardzp/index.aspx';
		    break;
		
                case 393:	//webchangeSchool
		    location.href = rootPath + 'extend/webchangeSchool.aspx';
		    break;

		case 392: 	//buy reborn
		    location.href = rootPath + 'extend/webreborn2.aspx';
		    break;
		    
		case 40:     // 程式下载
		    location.href = rootPath + 'download.aspx';
		    break;
		case 41:     // 程式下载
		    location.href = rootPath + 'download.aspx';
		    break;
		case 42:     // 补丁下载
		    location.href = rootPath + 'download.aspx';
		    break;
		case 43:     // 截图
		    alert('暫未釋出!'); //location.href = rootPath + 'wallpaper.aspx';
		    break;
		    
		case 50: 
		    location.href = rootPath + 'mart';
		    break;
		case 51:     // 商城
		    location.href = rootPath + 'mart';
		    break;
		case 52:     // 商城
		    location.href = rootPath + 'mart';
		    break;
		case 53:     // 商城
		    location.href = rootPath + 'mart';
		    break;
		case 54:     // 商城
		    location.href = rootPath + 'mart';
		    break;
		case 55:     // 商城
		    location.href = rootPath + 'mart/itemorder.aspx';
		    break;
		    
		case 60:      // 充值中心
		    location.href = rootPath + 'agent/?id=19';
		    break;
		case 61:      // 充值中心
		    location.href = rootPath + 'agent/?id=15';
		    break;
		case 62:      // 充值中心
		    location.href = rootPath + 'agent/?id=17';
		    break;
		case 63:      // 充值中心
		    location.href = rootPath + 'agent/?id=18';
		    break;
		case 64:      // 充值中心
		    location.href = rootPath + 'agent/?id=28';
		    break;
		case 65:      // 充值中心
		    location.href = rootPath + 'member/payorder.aspx';
		    break;
		case 1000:      // mart商品
		    alert('暫未釋出!');
		    break;
		case 66:      // EPOINTS TYPE EXCHANGE
		    location.href = rootPath + 'extend/webcoupon.aspx';
		    break;
		    
		default:
		    location.href = rootPath +'?menuId='+ menuId;
		    break;
    }
}


function doNothing() { }