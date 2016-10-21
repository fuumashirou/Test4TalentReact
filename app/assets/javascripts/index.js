ready = function(){


  $("#City_city_id").change(function () {
 			// alert("AAs");
			var city = $('select#City_city_id option:selected').text();
 			alert(city);
       
    });

};

$(document).ready(ready);
$(document).on('page:load', ready);


