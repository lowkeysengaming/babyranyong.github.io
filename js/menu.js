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
	switch (menuId) {


		case 0:
			location.href = rootPath;
			break;
		case 1:
			location.href = rootPath + '';
			break;

		case 2:	//在线加点
			location.href = rootPath + 'Download.html';
			break;


		case 100:      // 充值中心
			window.open('https://m.me/101241096284447', "_blank");
			break;
		case 101:      // 充值中心
			window.open('https://www.facebook.com/messages/t/101241096284447', "_blank");
			break;
		case 102:      // 充值中心
			window.open('https://bit.ly/BBRY-Page', "_blank");
			break;
		case 103:      // 充值中心
			window.open('https://bit.ly/BBRY-Group', "_blank");
			break;
		case 104:      // 充值中心
			window.open('https://bit.ly/BBRY-Group-Public', "_blank");
			break;
		case 105:      // 充值中心
			window.open('https://discord.gg/dp6q5KnHw4', "_blank");
			break;
		case 106:      // 充值中心
			window.open('https://bit.ly/BBRY-ChangeLogs', "_blank");
			break;


		case 1000:
			alert('Error');
			break;
		case 1001:
			alert('Register In-Game Function');
			break;

		default:
			location.href = rootPath + '';
			break;
	}
}


function doNothing() { }