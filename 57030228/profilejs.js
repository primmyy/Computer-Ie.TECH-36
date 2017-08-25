/*เป็นส่วนของจาวาสคลิป ฟังค์ชั่นขยายภาพ มีสองฟังค์ชั่นการทำงานคือ ฟังค์ชั่นที่บอกเมื่อเม้าส์ยุที่รูป กับ ฟังค์เมื่อเมื่อเม้าส์ออกจากรู้ โดยฟังค์จะระบุการทำงานเมื่อเกิดเหตุการดังกล่าวจะทำให้เกิดขึ้น*/
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "48px";
    x.style.width = "48px";
}


function bi(x) {
    x.style.width = "50%";
}

function ni(x) {
    x.style.width = "40%";
}


function bs(x) {
    x.style.width = "25%";
}

function ns(x) {
    x.style.width = "20%";
}
