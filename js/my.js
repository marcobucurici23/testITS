$(document).ready(() => {
    $("#btn").click(myfun)
})

function myfun() {
    testo = $("#test").val()
    numero = $("#num").val()

        $.ajax(
            {
                url: "try.php",
                data:{
                    primo:testo,
                    secondo:numero
                },
                success: function (result) {
                    console.log(result)
                }
            });

}