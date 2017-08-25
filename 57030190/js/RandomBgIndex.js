/* javascript ในส่วนนี้จะเพิ่ม ภาพพื้นหลัง เข้าไปโดยทำการ Random เมื่อ คลิกปุ่ม Refresh จะ Randpm รูปภาพทั้งหมด 3 รูป ไปเรื่อยๆ */

/*-------------ประกาศ ตัวแปร------------*/
today=new Date();
jran=today.getTime();
    var number = 3;
    var random_number="";
    var image="";
    var text_color="";
    ia=9301;
    ic=49297;
    im=233280;
/*------------------------------------*/

/*-------------นำค่าที่ได้จากการกำหนดค่าตัวแปร ia ic im มาใช้ในการคำนวณเพื่อนำค่า Random ไปใช้------------*/
        jran = (jran*ia+ic) % im;
        random_number = Math.ceil( (jran/(im*1.0)) *number);
// Loads the appropriate image and text color based on random number.
/*------------------------------------------------------------------------------------------*/
     
/*-------------เงื่อนไขที่ใช้ในการนำค่า Random และนำรูปไปแสดงผล------------*/
        if (random_number==1) {
        text_color="000000";
        image="../../ImagesIndexHome/photo-index1.jpeg";
        }
        if (random_number==2) {
        text_color="000000";
        image="../../ImagesIndexHome/photo-index2.jpeg";
        }
        if (random_number==3) {
        text_color="000000";
        image="../../ImagesIndexHome/photo-index3.jpeg";
        }
// End -->
/*------------------------------------------------------------------------------------------*/

/*---------------------------แสดงผลในหน้า HTML------------------------------------------------*/
        document.open();
        document.write("<BODY  BACKGROUND='"+image+"' TEXT='"+text_color+"'>");
        document.write("<CENTER></CENTER>");
/*------------------------------------------------------------------------------------------*/