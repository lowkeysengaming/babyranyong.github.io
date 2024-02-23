var rootPath = '/';




function menu(menuId) {
	switch (menuId) {

		case 0:
			location.href = rootPath;
			break;
		case 1:
			location.href = rootPath + 'index.html';
			break;


		case 2:     // 新闻公告
			location.href = rootPath + 'download.html';
			break;
		case 3:     // 活动讯息
			location.href = rootPath + 'donate.html';
			break;

		case 4:     // 会员中心
			location.href = rootPath + 'community.html';
			break;
		case 5:     // 排行榜
			location.href = rootPath + 'list.html';
			break;
		case 6:     // 推广员系统
			location.href = rootPath + 'show.html';
			break;
		case 7:
			alert('The Registration is on In-Game Function!');
			break;

		case 9999:
			alert('Error Not Found!');
			break;
		default:
			location.href = rootPath + '?menuId=' + menuId;
			break;
	}
}


function doNothing() { }