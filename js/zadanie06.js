var button1=document.getElementById("button-1");
button1.addEventListener('click',function(event){
	var value="chleb",
listNode=document.getElementById('shopping-list'),
liNode=document.createElement("LI"),
txtNode=document.createTextNode(value);

liNode.appendChild(txtNode);
listNode.appendChild(liNode);
});

var button2=document.getElementById("button-2");
button2.addEventListener('click',function(event){
	var items = document.querySelectorAll("#shopping-list li"),
                tab = [], liIndex;
        
        // populate tab with li data
        for(var i = 0; i < items.length; i++){
            tab.push(items[i].innerHTML);
        }
		
	
	items[items.length-1].parentNode.removeChild(items[items.length-1]);
});

var button3=document.getElementById("button-3");
button3.addEventListener('click',function(event){
	var items = document.querySelectorAll("#shopping-list li"),
                tab = [], liIndex;
        
        // populate tab with li data
        for(var i = 0; i < items.length; i++){
            tab.push(items[i].innerHTML);
        }
		


var value=tab[1],
listNode=document.getElementById('shopping-list'),
liNode=document.createElement("LI"),
txtNode=document.createTextNode(value);

liNode.appendChild(txtNode);
listNode.appendChild(liNode);
});


