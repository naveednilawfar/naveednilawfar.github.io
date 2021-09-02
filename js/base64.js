function buildData(){
  var txtData = "Name: "+$("#nameField").val()+
      "\r\nLast Name: "+$("#lastNameField").val()+
      "\r\nGender: "+($("#genderMale").is(":checked")?"Male":"Female");

  return txtData;
}
// This will be executed when the document is ready
$(function(){
  // This will act when the submit BUTTON is clicked
  $("#formToSave").submit(function(event){
    event.preventDefault();
    var txtData = buildData();
    window.location.href="data:application/octet-stream;base64,"+Base64.encode(txtData);
  });

  // This will act when the submit LINK is clicked
  $("#submitLink").click(function(event){
    var txtData = buildData();
    $(this).attr('download','sugguestedName.txt')
      .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
  });
});