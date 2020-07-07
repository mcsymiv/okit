$('.toggle-edit-form').on('click', function(){
    $(this).text() === 'Edit' ? $(this).text('Cancel') :  $(this).text('Edit');
    $(this).siblings('.edit-comment-form').toggle()
    $(this).siblings('.comment__form--delete').toggle()

})
$('.comments__box--btn').on('click', function(){
    $(this).text() === 'Cancel' ? 
    $(this).text('Create') : 
    $(this).text('Cancel');
    $('#comment__form').toggle()
})