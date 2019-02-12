$(function() {
  initCategory();
  getCategory();
));
  
function initCategory() {
  $('#category').select2({
        placeholder: '- Pilih -',
        closeOnSelect: false,
        width: '100%',
        "language": {
           "noResults": function(){
               return "<a onclick='addCategory()' href='#'>Tambah Data</a>";
           }
        },
        escapeMarkup: function (markup) {
            return markup;
        }
    });
}
  
function getCategory() {
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

function addCategory() {
    var new_cat = $('.select2-search__field').val();
    $.get("{{ url('/category/set-category/') }}/"+new_cat, function(data) {
        category();
    });
  
    initCategory();
    
}
