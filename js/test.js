setTimeout(function () {
    var aa = localStorage.getItem('coveragecollect')
    if (aa) {
        console.log('存在')
        var data = aa;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("POST", "https://10.23.176.55:8988/bilibili/webcoverage/client");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    } else {
        console.log('不存在')
    }

}, 3000);


