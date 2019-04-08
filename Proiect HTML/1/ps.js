window.onload=function()
{
	let j;
	var x=document.getElementById("buton");		
	x.onclick=mics;	
	var y=document.getElementById("btn");	
	
	var z=document.getElementById("butonel");	
	z.onclick=swtch;
	var q=document.getElementsByTagName("P");
	for(let i=0;i<q.length;i++)
	{
		q[i].addEventListener("click",png);
		function png()
		{
			q[i].classList.add("adaugare");	
		}
	}	
	var tabel=document.getElementsByTagName("TD");
	for(let k=0;k<tabel.length;k++)
	{
		tabel[k].addEventListener("mouseover", unu);		
		tabel[k].addEventListener("mouseout", doi);
		tabel[k].addEventListener("click", trei);
		function unu()
		{
			tabel[k].style.color="green";
		}
		function doi()
				{
					tabel[k].style.color="orange";
				}
		function trei()
				{
					tabel[k].style.color="blue";
				}
	}
	var logos=document.getElementsByClassName("logo");
	for(let r=0;r<logos.length;r++)
	{
		logos[r].addEventListener("click",hid);
		var poz=logos[r].style.position;
		function hid()
		{
			logos[r].style.position="relative";	
			logos[r].onclick=function(){viz();}
		}
		function viz()
		{
			logos[r].style.position=poz;				
		}
	}
	var timp=setInterval(timer, 1000);
	function timer() 
	{
	  var d = new Date();
	  var t = d.toLocaleTimeString();
	  document.getElementById("timp").innerHTML = t;
	}
}
	
	
	
function smh()
{
	var album=document.forms[0];
	var txt ="";
	var i;
	for (i = 0;i < album.length;i++) 
	{
        if (album[i].checked) {
            txt = txt+album[i].value +" ";			
	}
	document.getElementById("order").value = "Albumul Dvs. Favorit este: " +txt;}
	
}

function mics()
{
	var x=document.getElementById("buton");
	var y=document.getElementById("body");
	y.style.backgroundColor="black";
	y.style.color="white";
	x.onclick=function(){marire();}
}
function marire()
{
	var z=document.getElementById("buton");
	var y=document.getElementById("body");
	y.style.backgroundColor="white";
	y.style.color="black";
	z.onclick=function(){mics();}
} 

function cnc()
{
	var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}

function swtch()
{
	var elem = document.getElementById("body");
	var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
	document.getElementById("demos").innerHTML = theCSSprop;		
}
