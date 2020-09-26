// 咔友名称
var name = "咔友名称"
var avatar = "<img src='https://img0.moe.rip/wp-content/uploads/2020/08/9525135508f520bffd_avatar.jpg' width='60' height='60' class='avatar' style='background-color: rgb(2, 199, 147);'>"
document.getElementById('username').innerHTML =avatar + " " + name
document.getElementById('username1').innerHTML = name
// 评论数
var comment = "10"
if (comment < 1) {
	document.getElementById('commentthings').innerHTML = "万年老潜水就是你？"
} else if (comment > 0 && comment < 10) {
	document.getElementById('commentthings').innerHTML = "这么点评论也想开军舰？"
} else if (comment > 9 && comment < 25) {
	document.getElementById('commentthings').innerHTML = "还行吧，普普通通"
} else if (comment > 24 && comment < 100) {
	document.getElementById('commentthings').innerHTML = "大家似乎都记住了你"
} else if (comment > 99 && comment < 300) {
	document.getElementById('commentthings').innerHTML = "要我说，老灌水了"
} else {
	document.getElementById('commentthings').innerHTML = "就是你把龙王庙冲了？"
}
if (comment < 300) {
	var comments = comment / 4
	document.getElementById('commentthings').style.width = comments + "%"
} else {
	document.getElementById('commentthings').style.width = "100%";
}
document.getElementById('usercomment').innerHTML = comment
// 发表的文章
var post = "2"
if (post < 1) {
	document.getElementById('postthings').innerHTML = "您还不是up主呢，有时间发一篇试试？"
} else if (post > 0 && post < 20) {
	document.getElementById('postthings').innerHTML = "Vikacg感谢你对我们网站的贡献，请记得去申请OneDrive网盘哦"

} else {
	document.getElementById('postthings').innerHTML = "感谢大佬对我们小站的贡献，感谢您这一年的陪伴。"
}
if (post < 20) {
	var posts = post * 5
	document.getElementById('postthings').style.width = posts + "%"
} else {
	document.getElementById('postthings').style.width = "100%";
}
document.getElementById('userpost').innerHTML = post
// 粉丝数量
var fans = "23"
if (fans < 1) {
	document.getElementById('fansthings').innerHTML = "萌新"
} else if (fans > 0 && fans < 20) {
	document.getElementById('fansthings').innerHTML = "大萌新"
} else if (fans > 19 && fans < 50) {
	document.getElementById('fansthings').innerHTML = "dalao"
} else {
	document.getElementById('fansthings').innerHTML = "julao"

}
if (post < 100) {
	document.getElementById('fansthings').style.width = fans + "%"
} else {
	document.getElementById('fansthings').style.width = "100%";
}
document.getElementById('userfans').innerHTML = fans
// 关注数量
var follow = "233"
if (post < 100) {
	document.getElementById('fothings').style.width = follow + "%"
} else {
	document.getElementById('fothings').style.width = "100%";
}
document.getElementById('userfo').innerHTML = follow
// 积分数量
var jifen = "7459"
if (jifen < 1) {
	document.getElementById('jifenthings').innerHTML = "你居然没有积分！！"
} else if (comment > 0 && comment < 10000) {
	document.getElementById('jifenthings').innerHTML = "一定有很多想要的资源吧"
} else if (comment > 9999 && comment < 100000) {
	document.getElementById('jifenthings').innerHTML = "大佬，失敬失敬"
} else {
	document.getElementById('jifenthings').innerHTML = "你是不是和核弹有什么py？"
}
document.getElementById('userjifen').innerHTML = jifen
// 注册时间
var viktime = "2019-06-05 22:11:49"
document.getElementById('regtime').innerHTML = viktime
window.setTimeout("share_data_time()", 1000);
BirthDay = new Date(viktime);
today = new Date();
timeold = (today.getTime() - BirthDay.getTime()); //总豪秒数
secondsold = Math.floor(timeold / 1000); //总秒数
e_daysold = timeold / (24 * 60 * 60 * 1000);
daysold = Math.floor(e_daysold); //相差天数
document.getElementById('userdate').innerHTML = daysold
if (daysold < 10) {
	document.getElementById('timethings').innerHTML = "才注册没几天的家伙"
} else if (daysold > 9 && daysold < 60) {
	document.getElementById('timethings').innerHTML = "混熟了"
} else if (daysold > 59 && daysold < 365) {
	document.getElementById('timethings').innerHTML = "结交了许多新朋友呢"
} else {
	document.getElementById('timethings').innerHTML = "是元老诶，感谢这一年的陪伴"
}
// 活跃指数
var vikhuoyue = (comment * 0.01) + (post * 0.05) + (fans * 0.1) + (follow * 0.07) + (jifen * 0.2)
vikhuoyue = vikhuoyue.toFixed(2)
document.getElementById('userhuoyue').innerHTML = vikhuoyue
// 手冲指数
var shouchong = (comment * 0.001) + (post * 0.005) + (jifen * 0.00003)
shouchong = shouchong.toFixed(2)
document.getElementById('usershouchong').innerHTML = shouchong