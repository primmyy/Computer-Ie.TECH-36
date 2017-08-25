/* javascript ในส่วนนี้จะเพิ่ม ภาพพื้นหลัง เข้าไปโดยทำการ Random เมื่อ คลิกปุ่ม Refresh จะ Randpm รูปภาพทั้งหมด 7 รูป ไปเรื่อยๆ  */

/*-------------ประกาศ ตัวแปร------------*/
today=new Date();
jran=today.getTime();
    var number = 7;
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
        image="../../images/photo-index.jpeg";
        }
        if (random_number==2) {
        text_color="000000";
        image="../../images/photo-index1.jpeg";
        }
        if (random_number==3) {
        text_color="000000";
        image="../../images/photo-index2.jpeg";
        }
        if (random_number==4) {
        text_color="000000";
        image="../../images/photo-index3.jpeg";
        }
        if (random_number==5) {
        text_color="000000";
        image="../../images/photo-index5.jpeg";
        }
        if (random_number==6) {
        text_color="000000";
        image="../../images/photo-index6.jpeg";
        }
        if (random_number==7) {
        text_color="000000";
        image="../../images/photo-index7.jpeg";
        }
// End -->
/*------------------------------------------------------------------------------------------*/

/*---------------------------แสดงผลในหน้า HTML------------------------------------------------*/
        document.open();
        document.write("<BODY  BACKGROUND='"+image+"' TEXT='"+text_color+"'>");
        document.write("<CENTER></CENTER>");
/*------------------------------------------------------------------------------------------*/