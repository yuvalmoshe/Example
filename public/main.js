let source = $('#dogs').html();
let template = Handlebars.compile(source)

$("#button1").on("click", function () {
    $.get({
        url: '/dogs',
        success: function(data) {
            // console.log(data)
           let newHTML = template({dogs: data});
           $('#information').append(newHTML);


        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
    
})
