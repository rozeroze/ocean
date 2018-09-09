$(function () {
    $('#storage-change-btn').on('click', function () {
        var chk = $('input[name=icon]:checked').val();
        var path = window.location.origin + window.location.pathname;
        if (chk == undefined || chk == 'cookie') {
            // local-storage <Web Storage>
            window.location = path + '?storage=local';
        } else if (chk == 'github') {
            // github
            // TODO: query-string 内のエンコード処理 encodeURI('uri')
            var url = $('input#github-url').val();
            window.location = path + '?storage=' + url;
        } else if (chk == 'firebase') {
            // TODO: firebase
        } else if (chk == 'dropbox') {
            // TODO: dropbox
        } else {
            // error
            alert('error occurred!');
            window.location.reload();
        }
    });
})

