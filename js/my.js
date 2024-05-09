$(document).ready(()=>{
    $("#btn").click(myfun)
})

function myfun(){
    testo=$("#test").val()
    numero=$("#num").val()

    alert(testo + "----" + numero)
}