<script type="text/javascript">
//var time = document.getElementById("hour"*360+"minute"*60+"secound");

var Hello2 = document.getElementById("Hello");

function Hello(){
//    event.preventDefault();
   var hour1 =sel_select1.selectedIndex*3600;
   var minute1=sel_select2.selectedIndex*60;
   var secound1=sel_select3.selectedIndex;
   /*var hour = parseInt(hour1.value);
   var minute=parseInt(minute1.value);
   var secound =parseInt(secound1.value);*/
   var time = hour1+minute1+secound1;
   console.log(time);
}
//document.querySelector("#linkNext").addEventListener("click", click);
console.log(Hello);

Hello2.addEventListener("click",Hello)
</script>
