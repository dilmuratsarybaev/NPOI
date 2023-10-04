window.JSInteropExt = {};
window.JSInteropExt.saveAsFile = (filename, type, byteBase64) => {
    if (navigator.msSaveBlob) {
        var data = window.atob(byteBase64);
        var bytes = new Uint8Array(data.length);
        for (var i = 0; i < data.length; i++) {
            bytes[i] = data.charCodeAt(i);
        }
        var blob = new Blob([bytes.buffer], { type: type });
        navigator.msSaveBlob(blob, filename);
    }
    else {
        var link = document.createElement('a');
        link.download = filename;
        link.href = "data:" + type + ";base64," + byteBase64;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
}