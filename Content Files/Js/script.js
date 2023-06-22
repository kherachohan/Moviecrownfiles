











var button = document.getElementById('right1');
      button.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left1');
      back.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



      var button = document.getElementById('right');
      button.onclick = function () {
         var container = document.getElementById('columnmain');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left');
      back.onclick = function () {
         var container = document.getElementById('columnmain');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



      
      var button = document.getElementById('right2');
      button.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left2');
      back.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



<script type="text/javascript">
    var app_url = 'https://omegalinks.in/';
    var app_api_token = '519d04adb49732cf76fec75024ec8afdb2cc9316';
    var app_advert = 2;
    var app_domains = ["https://www.moviecrown.tk"];
</script>
<script src='//omegalinks.in/js/full-page-script.js'></script>
