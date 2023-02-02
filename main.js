// 获取国外ip
function getgeoip(data) {
    document.getElementById("ip-ipsb").innerHTML = data.ip;
    document.getElementById("ip-ipsb-geo").innerHTML = data.country + " " + data.city + " " + data.organization;
}
// 获取又拍云ip
// function getcngeoip(cnip) {
//     document.getElementById("ip-upaiyun").innerHTML =cnip.addr;
//     // document.getElementById("ip-upaiyun-geo").innerHTML = data.country + " " + data.city + " " + data.organization;
// }
fetch('https://pubstatic.b0.upaiyun.com/?_upnode').then((data) => {
    return data.json()
}).then(function (data) {
    // console.log(data.remote_addr)
    document.getElementById("ip-upaiyun").innerHTML = data.remote_addr;
    document.getElementById("ip-upaiyun-geo").innerHTML = data.remote_addr_location.province + " " + data.remote_addr_location.city + " " + data.remote_addr_location.country + data.remote_addr_location.isp;
})


// 分割线
function checker(e, t) {
    var
        n = new Image,
        i = setTimeout(function () {
            n.onerror = n.onload = null;
            var tx = document.getElementById(t);
            tx.innerHTML = '连接超时';
            tx.style.color = '#FF0000';
            n.src = null;
        }, 6e3);

    n.onerror = function () {
        clearTimeout(i);
        var tx = document.getElementById(t);
        tx.innerHTML = '无法访问';
        tx.style.color = '#FF0000';
    };
    n.onload = function () {
        clearTimeout(i);
        var tx = document.getElementById(t);
        tx.innerHTML = '连接正常';
        tx.style.color = '#00FF00';
    };
    n.src = "https://" + e + "/favicon.ico?" + +new Date
}

(() => {
    checker("www.baidu.com", "http-baidu");
    checker("s1.music.126.net/style", "http-163");
    checker("github.com", "http-github");
    checker("www.youtube.com", "http-youtube");
})();