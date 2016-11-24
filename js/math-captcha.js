function set_question(){
  operation = Math.floor( Math.random() * 2 ); // 1 or 0
  constant1 = Math.floor( Math.random() * 11 ); // 0 through 10
  constant2 = Math.floor( Math.random() * 11 ); // 0 through 10
  if( operation == 1 ){
    operation_symbol = "+";
    answer = constant1 + constant2;
  } else if( operation == 0 ){
    operation_symbol = "&ndash;";
    answer = constant1 - constant2;
  }
  $("#problem").html('Calcule ' + constant1 + ' ' + operation_symbol + ' ' + constant2 + ' = ');
};

function check_submit() {
  if ( $('#answer').val() == answer) {
    $('#submit').removeAttr('disabled');
  } else{
    $('#submit').attr("disabled", true)
  }
};

set_question();

$("#gform").keyup(function() {
  check_submit();
});