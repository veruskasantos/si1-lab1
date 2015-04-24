$(document).ready(function() {
    $('#btnAprendi').click(function(e) {
        var selectedOpts = $('#lstBox1 option:selected');
        if (selectedOpts.length == 0) {
            alert("Nenhum tema selecionado.");
            e.preventDefault();
        }

        $('#lstBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

    $('#btnRemover').click(function(e) {
        var selectedOpts = $('#lstBox2 option:selected');
        var temaBox1 = $('#lstBox1 option:selected');

        if(selectedOpts.length == 0 && temaBox1.length == 0){
            alert("Nenhum tema selecionado.");
            e.preventDefault();
        }

        if (selectedOpts.length != 0) {
            $(selectedOpts).remove();
            e.preventDefault();
        }else if(temaBox1 != 0){
            $(temaBox1).remove();
            e.preventDefault();
        }

        e.preventDefault();
    });

    function addTema(tema){
        $('#lstBox1').append('<option value=tema>'+ tema + '</option>');
        $('#campo').val('');

        e.preventDefault();
    }


    $('#campo').keyup(function(e){
        var tema =  $('#campo').val();
        if(e.keyCode == 13){
            addTema(tema);
        }
    })

    $("#adicionar").click(function(e){
        var tema =  $('#campo').val();
        addTema(tema);
    });
});