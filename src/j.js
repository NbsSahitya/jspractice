function myfun()
{
  var x= document.getElementById("length").value
  var y= document.getElementById("width").value
  var area= x*y;
document.getElementById("demo1").innerHTML="area is " +area;
var Perimeter= (2*x+2*y);
document.getElementById("demo2").innerHTML="perimeter is " +Perimeter;
} 
function myFunction1()
{
    let time=document.getElementById("time").value;
    
    let timeOption= document.querySelector('input[name="time-options"]:checked').value;
    if (timeOption=="hts")
    {
        document.getElementById("output").innerHTML =time+" Hour = "+(time*60*60)+" seconds" ; 
    }
    if (timeOption=="htm")
    {
        document.getElementById("output").innerHTML =time+" Hour = "+(time*60)+" mins" ; 
    }
}
 

