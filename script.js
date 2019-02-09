$(function() {
  $('#category').select2({
      placeholder: '- Pilih -',
      width: '100%',
      "language": {
         "noResults": function(){
             return "<a onclick='add()' href='#'>Tambah Data</a>";
         }
      },
      escapeMarkup: function (markup) {
          return markup;
      }
  });
));
  
function category() {
    $.get('{{ route('category') }}', function(data) {
        // $('#category').append(
        //     '<option value="">-- Pilih Kategori --</option>'
        // );
        $('#category').empty();
        $.each(data, function(index, item) {
            $('#category').append(
                '<option value="'+item.id+'">'+item.category+'</option>'
            );
        });
    });
}

function add() {
    var new_cat = $('.select2-search__field').val();
    $.get('/category/new-cat/'+new_cat, function(data) {
        category();
    });
    $('#category').select2({
        placeholder: '- Pilih -',
        closeOnSelect: false,
        width: '100%',
        "language": {
           "noResults": function(){
               return "<a onclick='add()' href='#'>Tambah Data</a>";
           }
        },
        escapeMarkup: function (markup) {
            return markup;
        }
    });
}
