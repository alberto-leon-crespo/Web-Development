//********************************************************************************************/
//*************************************Dynamic resize library*********************************/
//********************************************************************************************/

// Autor: Alberto Le�n Crespo
// Version: 0.1
/*

Licence terms:

* Free distribution;
* Inclusion of the source code;
* Allow modifications and derivative works under the same conditions as the
original software;
* Integrity of the author's source code, and may require that derivative works
have a different name or version;
* No discrimination against persons or groups;
* No restricted to field of activity;
* The rights granted to a program will be valid for all software
redistributed without imposing additional conditions;
* The license must not be specific to a particular product;
* The license must not place restrictions on other product that is distributed along with the
licensed software;
* The license must be technology neutral.

*/// End of Licence //

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




function resize(resolution, class_name_affected){ //resolution format is 800x600 or WIDTHxHEIGTH

	var HTMLobjects=document.getElementsByClassName(class_name_affected);

	var percentage_width, percentage_height, object_width, object_height, total_width, total_height,i,resolution_width,resolution_height;

	resolution=resolution.split("x");

	for(i=0; i < HTMLobjects.length; i++){
		object_width=HTMLobjects[i].scrollWidth;
		object_height=HTMLobjects[i].scrollHeight;

		percentage_width=(object_width*100)/resolution[0];
		percentage_height=(object_height*100)/resolution[1];

		total_width=(percentage_width*screen.width)/100;
		total_height=(percentage_height*screen.height)/100;

		object_width=HTMLobjects[i].style.width=total_width+"px";
		object_height=HTMLobjects[i].style.height=total_height+"px";
	}
}
 