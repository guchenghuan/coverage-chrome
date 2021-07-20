// setInterval(function () { alert(JSON.stringify(window.__coverage__)); }, 3000);

setTimeout(function () {
    var ss = document.createElement('script')

    ss.src = "https://172.16.39.188:8988/chrometest.js"

    document.body.appendChild(ss)
}, 3000)

