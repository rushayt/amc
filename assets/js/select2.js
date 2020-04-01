// Multiselect
$('#multiselect1, #multiselect2, #single-selection, #multiselect5, #multiselect6').multiselect({
    maxHeight: 300
});
//Multi-select
$('#optgroup').multiSelect({ selectableOptgroup: true });


$('.select2').select2();

$(".search-select").select2({
    allowClear: true
});

$("#max-select").select2({
    placeholder: "Select",
    maximumSelectionSize: 2,
});

$("#loading-select").select2({
    placeholder: "Select",
    minimumInputLength: 1,
    query: function (query) {
        var data = { results: [] }, i, j, s;
        for (i = 1; i < 5; i++) {
            s = "";
            for (j = 0; j < i; j++) { s = s + query.term; }
            data.results.push({ id: query.term + i, text: s });
        }
        query.callback(data);
    }
});
var data = [{ id: 0, tag: 'enhancement' }, { id: 1, tag: 'bug' }, { id: 2, tag: 'duplicate' }, { id: 3, tag: 'invalid' }, { id: 4, tag: 'wontfix' }];
function format(item) { return item.tag; }

$("#array-select").select2({
    placeholder: "Select",
    data: { results: data, text: 'tag' },
    formatSelection: format,
    formatResult: format
});


$('#multiselect3-all').multiselect({
    includeSelectAllOption: true,
});

$('#multiselect4-filter').multiselect({
    enableFiltering: true,
    enableCaseInsensitiveFiltering: true,
    maxHeight: 200
});

$('#multiselect-size').multiselect({
    buttonClass: 'btn btn-default btn-sm'
});

$('#multiselect-link').multiselect({
    buttonClass: 'btn btn-link'
});

$('#multiselect-color').multiselect({
    buttonClass: 'btn btn-primary'
});

$('#multiselect-color2').multiselect({
    buttonClass: 'btn btn-success'
});
