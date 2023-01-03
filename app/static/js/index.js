$(document).ready(() => {
    // submit form data
    // $('#ajax_form').submit(function (event) {
    //     event.preventDefault();
    //     var form = $(this);
    //     console.log(form.serialize())
    //     $.ajax({
    //         type: 'POST',
    //         url: form.attr('action'),
    //         data: form.serialize(),
    //         success: function (data) {
    //             // Do something with the response
    //             console.log(data)
    //         },
    //         error: function (error) {
    //             // Do something with the error
    //             console.log(error)
    //         }
    //     });
    // });



    // upload files
    var files;
    var fdata = new FormData();
    $("#file-input").on("change", function (e) {
        files = this.files;
        $.each(files, function (i, file) {
            fdata.append(file.name, file);
        });

        fdata.append("FullName", "John Doe");
        fdata.append("Gender", "Male");
        fdata.append("Age", "24");

        $.ajax({
            url: location.origin+"/upload",
            type: "post",
            data: fdata, //add the FormData object to the data parameter
            processData: false, //tell jquery not to process data
            contentType: false, //tell jquery not to set content-type
            success: function (response, status, jqxhr) {
                //handle success
                for(let x in response.res){
                    $(".card-image").append(`<img src="./static/media/${response.res[x]}">`)
                }
            },
            error: function (jqxhr, status, errorMessage) {
                //handle error
                console.log("ERROR-",jqxhr, status, errorMessage)
            }
        });
    });

})