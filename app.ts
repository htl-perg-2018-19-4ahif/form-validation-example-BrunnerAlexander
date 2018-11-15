$(document).on("load change", function(){
    let submit:boolean = true;
    
    if($("#firstName").val() == ""){
        $("#firstNameMandatory").show();
        submit = false;
    }else{
        $("#firstNameMandatory").hide();
    }

    if($("#lastName").val() == ""){
        $("#lastNameMandatory").show();
        submit = false;
    }else{
        $("#lastNameMandatory").hide();
    }

    if($("#email").val() == ""){
        $("#emailMandatory").show();
        submit = false;
    }else{
        $("#emailMandatory").hide();
    }

    if(submit == false){
        $("#sub").hide();
    }else{
        $("#sub").show();
    }
})
