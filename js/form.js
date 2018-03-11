$('#contact-form').submit(onContactFormSubmit);

function onContactFormSubmit(event) {
  event.preventDefault();
  
  const name = $('#contact-form input[name=name]').val();
  const email = $('#contact-form input[name=email]').val();
  const note = $('#contact-form input[name=note]').val();
  const data = {
      name: name, 
      email: email,
      note: note,
  };
  
  $('#loader').show();
  
   $.ajax({
        url: "https://tranquil-sierra-86540.herokuapp.com/yanisavchenko@gmail.com",
        method: "POST",
        data: data,
        dataType: "json"
    })
    .done(function() {
        $('#loader').hide();
        $('#contact-form input[name=name]').val('');
        $('#contact-form input[name=email]').val('');
        $('#contact-form input[name=note]').val('');
    })
    .fail(function() {
        $('#loader').hide();
        alert('Error');
    });
}
