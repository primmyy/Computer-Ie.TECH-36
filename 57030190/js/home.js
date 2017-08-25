/*ส่วน javascript ที่ใช้ในการเพิ่มปุ่ม button เข้าไปในหน้า home โดยจะเพิ่มปุ่ม Home ,favorite ,Curriculum Vitae เข้าไปเมื่อคลิกปุ่ม menu */

function click(){
    document.getElementById("nav_menu").innerHTML = (`<a id="btn" href="home.html" >Home</a> <a id="btn" href="favorite.html" >favortite</a> <a id="btn" href="cv.html" >Curriculum Vitae</a>`) /*เขียน string ที่กำหนดลงไปใน tag ที่มี id ชื่อ nav_menu เมื่อมีการคลิกปุ่ม*/   
}
document.getElementById("btn_menu").addEventListener("click",click); /*ดักจับการคลิกผ่านทางปุ่ม ที่มี id ชื่อ btn_menu*/