$(document).ready(function(){
    //alert('documento listo')
    $('#example').DataTable( {
        "language": {
            "lengthMenu": "Mostrar _MENU_ entradas",
            "zeroRecords": "Nothing found - sorry",
            "info": "Showing page _PAGE_ of _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
    } );
} );