window.addEventListener('load',function() {
  let submitButton1 = document.getElementById('send-btn1');
  let submitButton2 = document.getElementById('send-btn2');

  submitButton1.addEventListener('click', function() {
    let textField = document.getElementById('box').value;
    let nofile = document.getElementById('no-file').value;
   
    if (textField.indexOf("attach") !== -1) {
      if (nofile === "") {
      alert("Did you want to attach a file?");
    }}

   });
  submitButton2.addEventListener('click', function() {
    let textField = document.getElementById('box').value;
    let nofile = document.getElementById('no-file').value;

    if (textField.indexOf("attach") !== -1) {
      if (nofile === "") {
      alert("Did you mean to attach a file?");
    }}

   });
});
