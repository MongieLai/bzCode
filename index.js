const companySelect = $('#companyNameSelcte')
const tankNameSelcte = $('#tankNameSelcte')
const facilityNameSelcte = $('#facilityNameSelcte')

const selectButton = $('#selectButton')

companySelect.change(function(e){
    console.log(this)
    console.log($(this).val());
    // var vs = $('select option:selected').val();
    $('#companyNameInput').val($(this).val())
})

tankNameSelcte.change(function(e){
    console.log($(this).val());
    // var vs = $('select option:selected').val();
    $('#tankNameInput').val($(this).val())
})


facilityNameSelcte.change(function(e){
    console.log($(this).val());
    // var vs = $('select option:selected').val();
    $('#facilityNameInput').val($(this).val())
})

selectButton.click(()=>{
    //处理点击查询按钮
    const companyNameInput = $('#companyNameInput').val()
    const tankNameInput = $('#tankNameInput').val()
    const facilityNameInput = $('#facilityNameInput').val()
    console.log(companyNameInput,tankNameInput,facilityNameInput)
})