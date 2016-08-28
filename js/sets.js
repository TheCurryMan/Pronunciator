 $(document).ready(function() {
     var submitIcon = $('.searchbox-icon');
     var inputBox = $('.searchbox-input');
     var searchBox = $('.searchbox');
     var isOpen = false;
     submitIcon.click(function() {
         if (isOpen == false) {
             searchBox.animate({
                 paddingLeft: '0px',
                 width: '100%'
             }, 300, "swing");
             inputBox.focus();
             isOpen = true;
         }
         else {
             searchBox.animate({
                 width: '0px'
             }, 150, "swing", function() {
                 searchBox.animate({
                     paddingLeft: '50%'
                 }, 150, "swing");
             });
             inputBox.focusout();
             isOpen = false;
         }
     });
     submitIcon.mouseup(function() {
         return false;
     });
     searchBox.mouseup(function() {
         return false;
     });
     $(document).mouseup(function() {
         if (isOpen == true) {
             $('.searchbox-icon').css('display', 'block');
             submitIcon.click();
         }
     });
 });

 function buttonUp() {
     var inputVal = $('.searchbox-input').val();
     inputVal = $.trim(inputVal).length;
     if (inputVal !== 0) {
         $('.searchbox-icon').css('display', 'none');
     }
     else {
         $('.searchbox-input').val('');
         $('.searchbox-icon').css('display', 'block');
     }
 }