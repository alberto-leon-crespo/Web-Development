/********************************************************************************************/
/*************************************Dynamic resize library*********************************/
/********************************************************************************************/

// Autor: Alberto León Crespo
// Version: 0.1

/*
You can put this script at the end of "<body>" with the tag "<script>".
Put the class name at all elements you want to resize.
First you should use the function window.onload and then use the call to the library ---> resize("800x600","resizable_elements")
Then you call the library with 2 basic parameters:
  -The resolution that you have designed the website with WIDTHxHEIGHT format (eg "1600x900").
	-The name of the class that you put HTML elements you want to resize.
The sizing is based on calculated percentage measures the initial size WIDTH x HEIGHT defined in css style.
You must put the WIDTH x HEIGHT parameters into css style of references objects.
Its performance is limited and sometimes you can see the resize on load.
*/

//


function resize(resolution, class_name_affected){ //resolution format is 800x600 or WIDTHxHEIGTH
	
	var HTMLobjects=document.getElementsByClassName(class_name_affected);
	
	var percentage_width, percentage_height, object_width, object_height, total_width, total_height,i,resolution_width,resolution_height;
	
	resolution=resolution.split("x");
	
	alert(resolution[0]);
	alert(resolution[1]);
	
	for(i=0; i < HTMLobjects.length; i++){
			object_width=HTMLobjects[i].scrollWidth;
			object_height=HTMLobjects[i].scrollHeight;
			
			alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
	
			percentage_width=(object_width*100)/1024;
			percentage_height=(object_height*100)/768;

			total_width=(percentage_width*1024)/100;
			total_height=(percentage_height*768)/100;
				
			alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
			
			object_width=HTMLobjects[i].style.width=total_width+"px";
			object_height=HTMLobjects[i].style.height=total_height+"px";
	}
	
	switch(resolution){
		case "1024x768":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1024;
				percentage_height=(object_height*100)/768;

				total_width=(percentage_width*1024)/100;
				total_height=(percentage_height*768)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1366x768":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1366;
				percentage_height=(object_height*100)/768;

				total_width=(percentage_width*1366)/100;
				total_height=(percentage_height*768)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1280x800":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1280;
				percentage_height=(object_height*100)/800;

				total_width=(percentage_width*1280)/100;
				total_height=(percentage_height*800)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1280x1024":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1280;
				percentage_height=(object_height*100)/1024;

				total_width=(percentage_width*1280)/100;
				total_height=(percentage_height*1024)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1440x900":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1440;
				percentage_height=(object_height*100)/900;

				total_width=(percentage_width*1440)/100;
				total_height=(percentage_height*900)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1920x1080":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1920;
				percentage_height=(object_height*100)/1080;

				total_width=(percentage_width*1920)/100;
				total_height=(percentage_height*1080)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1680x1050":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1680;
				percentage_height=(object_height*100)/1050;

				total_width=(percentage_width*1680)/100;
				total_height=(percentage_height*1050)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "320x480":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/320;
				percentage_height=(object_height*100)/480;

				total_width=(percentage_width*320)/100;
				total_height=(percentage_height*480)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "768x1024":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/768;
				percentage_height=(object_height*100)/1024;

				total_width=(percentage_width*768)/100;
				total_height=(percentage_height*1024)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		case "1600x900":
		
			for(i=0; i < HTMLobjects.length; i++){
				object_width=HTMLobjects[i].scrollWidth;
				object_height=HTMLobjects[i].scrollHeight;
				
				alert(HTMLobjects[i].id+"="+object_width+"x"+object_height);
		
				percentage_width=(object_width*100)/1600;
				percentage_height=(object_height*100)/900;

				total_width=(percentage_width*1600)/100;
				total_height=(percentage_height*900)/100;
				
				alert(HTMLobjects[i].id+"="+total_width+"x"+total_height);
				
				object_width=HTMLobjects[i].style.width=total_width+"px";
				object_height=HTMLobjects[i].style.height=total_height+"px";
			}
			
		break;
		
		default:
			alert("Resolución no soportada por esta libreria.");
		break;
	}
}
