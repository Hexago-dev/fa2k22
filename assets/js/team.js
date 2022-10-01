var scrollDown = document.getElementById('scroll-down')
var teamWiner = document.querySelector('.team-winer')
scrollDown.addEventListener(('click'), () => {
    console.log(teamWiner.scrollHeight);
    document.documentElement.scrollTop = teamWiner.scrollHeight - 10
})