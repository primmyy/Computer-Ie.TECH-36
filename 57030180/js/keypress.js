/* JavaScript ในส่วนนี้จะทำการดักจับการกดปุ่มคีย์บอรด์*/

/*---------------------ประโยคเงื่อนไขเพื่อตรวจสอบการกดปุ่มหรือไม่----------------*/
if (document.layers) 
document.captureEvents(Event.KEYPRESS)
/*-------------------------------------------------------------------*/

/*--------------------------กำหนดฟังก์ชั่น-------------------------------*/
function backhome(e){
var targeturl="http://napharat.surge.sh/Home.html" // URL ที่ต้องการให้ไป //กำหนดตัวแปรให้เก็บที่อยู่ของ URL
if (document.layers||document.getElementById&&!document.all){
	
/* เช็คว่าปุ่มที่กดมี รหัส ascii code ตรงกันหรือไม่ เช่น กดปุ่ม hและ H ก็เช็คว่ามีรหัสตรงกันหรือไม่*/
if (e.which==104||e.which==72) 
window.location=targeturl
}
else if (document.all){
if (event.keyCode==104||event.keyCode==72)
window.location=targeturl
}
}
document.onkeypress=backhome // ถ้าเงื่อนไขถูกต้องก็จะกลับไปทำฟังก์ชั่น และเข้าหน้าเว็บที่ต้องการ


