const sqlFormatter = require('../sql-formatter');

onClickFormat = function () {
    const src = document.getElementById("src").value;

    document.getElementById("out").value = sqlFormatter.format(src);
}