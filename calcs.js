$(document).ready(function () {


    $('.allow_decimal').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
            ((event.which < 48 || event.which > 57) &&
                (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
        var text = $(this).val();
        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 2) &&
            (event.which != 0 && event.which != 8) &&
            ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
        }
    });

    $('#lbuy, #ltar, #lstar ,#bprin').keyup(function () {

        var perc = 0, lsp = 0, prof = 0, lq = 0, lsl = 0, lslflag = 0, sprof = 0;

        var lb = Number($('#lbuy').val());
        var lt = Number($('#ltar').val());
        var lst = Number($('#lstar').val());
        var prin = Number($('#bprin').val());

        var bp = prin / lb;
        lq = Math.trunc(bp);

        if (lq == Infinity) {
            $('#lquant').val(prin);
        } else {
            $('#lquant').val(lq);
        }

        if (lb > prin) {
            lb = 0;
            $("#bpgr").empty().append('<div class="alert alert-danger shadow-sm"><strong>Buy price is greaterthan Principle amount.</strong></div>');
        } else {
            $("#bpgr").empty();
            perc = lb * (lt/100);
            
            lslflag = lb * (lst/100);
            lsl = lb - lslflag;


            lsp = lb + perc;
            prof = perc * lq;
            sprof = lslflag * lq;
        }

        var flsp = lsp.toFixed(2);
        var fspl = lsl.toFixed(2);
        var fprof = prof.toFixed(2);
        var fsprof = sprof.toFixed(2);

        $('#longsl').html(fspl);
        $('#longsp').html(flsp);
        $('#lpro').html(fprof);
        $('#spro').html(fsprof);

    })


});