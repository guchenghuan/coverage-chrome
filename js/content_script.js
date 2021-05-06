// setInterval(function () { alert(JSON.stringify(window.__coverage__)); }, 3000);

setTimeout(function () {
    var ss = document.createElement('script')

    ss.src = "https://10.23.176.55:8988/test.js"

    document.body.appendChild(ss)
}, 3000)

