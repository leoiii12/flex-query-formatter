const sqlFormatter = require('@leoiii12/sql-formatter');

onClickFormat = function () {
    const src = document.getElementById("src").value;

    document.getElementById("out").value = sqlFormatter.format(src, { language: "flex" });
}