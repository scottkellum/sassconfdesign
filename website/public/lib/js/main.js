/**
 * Keeping it simple for now.
 * We can add jQuery if everyone is ok with that.
 */
(function (doc) {
  if (doc.addEventListener && doc.querySelector) {
    doc.addEventListener('DOMContentLoaded', function() {
      // Add our event listener to the form.
      var mailForm = doc.querySelector('#mc-embedded-subscribe-form'),
          emailField = doc.querySelector('#mce-EMAIL');

      mailForm.addEventListener('submit', function(e) {
        // Make sure the email field is field out.
        if (emailField.value === '') {
          e.preventDefault();
          // Show error regarding email being required.
          // Alternative we could just add the require attribute to the <input>
        }
      }, false)
    });
  }
})(document);
