setTimeout(function () {
    var aa = localStorage.getItem('coveragecollect')
    if (aa) {
        if (file) {
            alert('数据已发送')
            var data = aa;
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    alert(this.responseText);
                }
            });
            xhr.open("POST", "https://172.16.39.188:8988/frontEnd/webcoverage/client?file=" + file);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        } else {
            alert('请填写仓库名')
        }
    } else {
        alert('该页面暂无覆盖率数据')
    }
}, 3000)