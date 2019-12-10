//1
var elements=document.getElementsByClassName("sample_class");


function getTagsOfElements(elements){
	var tab=[];
	for(i=0;i<elements.length;i++)
	{
		tab.push(elements[i]);
	}
	
return tab;
}













//2
var element=document.getElementById('sample_id')
element=element.classList;

function getClassesOfElement(element){
	var tab=[]
	for(i=0;i<element.length;i++)
	{
		tab.push(element[i]);
	}
	return tab;
	
	
}





















//3
var item = document.getElementsByClassName("sample_class_2")[0];
item =item.getElementsByTagName("li");

     function getInnerTextsOfElements(item){
		 var tab1=[];
		 for(i=0;i<item.length;i++)
		 {
			 tab1.push(item[i].innerHTML);
		 }
	return tab1;
	}
  
  
  
  
  
  
  
  
  
  
  
	 //4
	 var elements = document.getElementsByTagName("a");
	
	 function getAddressesOfElements(elements){
	 
	 var tab=[];
	 for(i=0;i<elements.length;i++){
		 tab.push(elements[i].getAttribute("href"));
		 
		 
	 }
	 return tab;
	 }
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
   
   
   
   
       // 5
	   var foo=document.getElementsByClassName("sample_class_3")[0];
	   foo=foo.children;
	   function foofunction(foo){
		   var tab=[];
		   for(i=0;i<foo.length;i++){
			   tab.push(foo[i].tagName);
			   
		   }
		   return tab;
		   
	   }
