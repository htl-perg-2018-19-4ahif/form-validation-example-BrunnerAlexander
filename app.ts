$(document).on("load change", function(){
    if($("#firstName").val() == ""){
        $("#firstNameMandatory").show();
    }else{
        $("#firstNameMandatory").hide();
    }

    if($("#lastName").val() == ""){
        $("#lastNameMandatory").show();
    }else{
        $("#lastNameMandatory").hide();
    }

    if($("#email").val() == ""){
        $("#emailMandatory").show();
    }else{
        $("#emailMandatory").hide();
    }
})
