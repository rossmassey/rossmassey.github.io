$(document).ready(function() {
    $('#ucsdTable').DataTable(options);
    $('#mesaTable').DataTable(options);
});

let options = {
    "paging":   false,
    "order": [[ 3, "asc" ]] // default order by semester/quarter
}