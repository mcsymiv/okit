document.querySelector('#recipeEditForm').addEventListener('submit', function(event){
    let imgsUploads = document.querySelector('#imageUpload').files.length
    let imgsDeletions = document.querySelectorAll('.checkboxDelete:checked').length
    let imgsExisting = document.querySelectorAll('.checkboxDelete').length
    let limit = 10; 
    let imagesInAction = (imgsUploads + ( imgsExisting - imgsDeletions ))
    if( imagesInAction > limit ){
        event.preventDefault();
        let removeAmont = imagesInAction - limit
        alert(`You can have only ${limit} images in total. \n Please, remove ${removeAmont} image${removeAmont === 1? '' : 's'}.`)
    }
})