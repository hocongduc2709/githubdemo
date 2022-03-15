
//--------------------------VÍ DỤ TÊN PHIM --------------------------
/**
 * - ĐẦU VÀO: Nhập thông tin tên phim, giá vé các loại, số vé bán được,
 *              % trích từ thiện.
 * - XỬ LÝ:
 *  + tạo biến tenPhim, gán cho thẻ input txtTenPhim;
 *  + tạo biến giaVeNgLon, gán cho thẻ input txtGiaVeNgLon;
 *  + tạo biến giaVeTreEm, gán cho thẻ input txtGiaVeTreEm;
 *  + tạo biến veNgLonDaBan, gán cho thẻ input txtVeNgLonDaBan;
 *  + tạo biến veTreEmDaBan, gán cho thẻ input txtVeTreEmDaBan;
 *  + tạo biến trichTuThien, gán cho thẻ input txtTrichTuThien;
 *  + tạo sự kiện onclick gán cho thẻ button btnTongKet:
 *  + tạo biến tongVeDaBan = veNgLonDaBan + veTreEmDaBan;
 *  + tạo biến doanhThu = ((veNgLonDaBan * giaVeNgLon) + (veTreEmDaBan * giaVeTreEm))*1;
 *  + tạo biến tuThien = doanhThu *% trichTuThien;
 *  + tạo biến tongDoanhThu = doanhThu - tuThien;
 * - ĐẦU RA: show kết quả khi click btnTongKet ra thẻ div thongBaoTongKet;
 */

 document.getElementById("btnTongKet").onclick = function()
 {
     var tenPhim = document.getElementById("txtTenPhim").value;
     var veNgLonDaBan = document.getElementById("txtVeNgLonDaBan").value * 1;
     var veTreEmDaBan = document.getElementById("txtVeTreEmDaBan").value * 1;
     var giaVeNgLon = document.getElementById("txtGiaVeNgLon").value * 1;
     var giaVeTreEm = document.getElementById("txtGiaVeTreEm").value * 1;
     var trichTuThien = document.getElementById("txtTrichTuThien").value *1;
 
 
     var tongVeDaBan = veNgLonDaBan + veTreEmDaBan;
     var doanhThu = (veNgLonDaBan * giaVeNgLon) + (veTreEmDaBan * giaVeTreEm);
     var tuThien = doanhThu * (trichTuThien/100);
     var tongDoanhThu = doanhThu - tuThien;
 
    //FORMAT tiền VND
    var currentFormat = new Intl.NumberFormat("vn-VN");

     var thongBaoTK = "<div class='alert alert-success' style='border:1px solid yellow; border-radius:10px'>";
    thongBaoTK += "<p>Tên phim: " + tenPhim + "</p>";
    thongBaoTK += "<p> Số vé đã bán: "+tongVeDaBan+"</p>";
    thongBaoTK += "<p> Doanh thu: "+ currentFormat.format(doanhThu) +" VND</p>";
    thongBaoTK += "<p> Trích % từ thiện: "+ trichTuThien+"%"+"</p>";
    thongBaoTK += "<p> Tổng tiền trích từ thiện: "+currentFormat.format(tuThien)+" VND</p>";
    thongBaoTK += "<p> Tổng doanh thu: "+ currentFormat.format(tongDoanhThu)+" VND</p>";
    thongBaoTK += "</div>";
     document.getElementById("thongBaoTongKet").innerHTML = thongBaoTK;
 
     //style inline thẻ div thongBaoTongKet
    //  document.getElementById("thongBaoTongKet").style.backgroundColor = "red";
    //  document.getElementById("thongBaoTongKet").style.color = "white";
    //  document.getElementById("thongBaoTongKet").style.textAlign = "center";
    //  document.getElementById("thongBaoTongKet").style.fontSize = "30px";

    //style bằng cách add 1 class trong file css (class dc trỏ tới sẽ ghi đè class trong file index)
    // document.getElementById("thongBaoTongKet").className = "styleThongBaoTongKet";

    //thêm 1 class mà ko ghi đè class có sẵn trong file index
    document.getElementById("thongBaoTongKet").classList.add("styleThongBaoTongKet");
 }



 //----------------------VÍ DỤ BẬT TẮT BÓNG ĐÈN----------------------------
 var turnOn = document.getElementById("btnTurnOn").onclick = function()
 {
     document.getElementById("imgLightBub").src ="./images/pic_bulbon.gif";
 }
//muốn thay đổi thuộc tính nào thì trỏ tới thuộc tính đó, JS sẽ ghi đè.
 var turnOff = document.getElementById("btnTurnOff").onclick = function() 
 {
    document.getElementById("imgLightBub").src = "./images/pic_bulboff.gif";
 }

 var disableButtonOn = document.getElementById("btnDisableButtonOn").onclick = function()
 {
     //vô hiệu nút TURN ON
     document.getElementById("btnTurnOn").disabled = true;
     document.getElementById("imgLightBub").src = "./images/pic_bulboff.gif";
 }

 var enableButtonOn = document.getElementById("btnEnableButtonOn").onclick = function()
 {
    document.getElementById("btnTurnOn").disabled = false;
 }

 //--------------------VÍ DỤ FORM ĐĂNG NHẬP------------------------------

 var dangNhap = document.getElementById("btnDangNhap").onclick = function()
 {
     var taiKhoan = document.getElementById("txtTaiKhoan").value;
     var matKhau = document.getElementById("txtMatKhau").value;

     var kqDangNhap = "Đăng nhập thành công với tài khoản: '"+taiKhoan+"' <br/>Mật khẩu: '"+matKhau+"'";
     document.getElementById("thongBaoDangNhap").innerHTML = kqDangNhap;
     document.getElementById("thongBaoDangNhap").className = "thong__bao__dang__nhap";
     console.log("test");
 }

//--------------------VÍ DỤ TÍNH TIỀN TIP--------------------------------

document.getElementById("btnTinhTienTip").onclick = function()
{
    var tongTienThanhToan = document.getElementById("txtTongTienThanhToan").value * 1;
    var soNguoiShare = document.getElementById("txtSoNguoiShare").value * 1;
    var chonTip = document.getElementById("slChonTip").value * 1;

    var tienTipMoiNguoi = (tongTienThanhToan * (chonTip/100)) / soNguoiShare; 

    var kqTip = "<div class='alert alert-success'>TIP AMONUT <br/>"+tienTipMoiNguoi+"$ <br/>"+"mỗi người</div>"

    document.getElementById("thongBaoTienTip").innerHTML = kqTip;
}

//------------------------------CHÈN THẺ------------------------------

var taoTheP = document.getElementById("btnTaoTheP").onclick = function()
{
    // CÁCH 1: TẠO THẺ BẰNG CHUỖI (chỉ tạo 1 thẻ p duuy nhất)
    // var tagP = "<p>ALO</p>";
    // document.getElementById("divContent").innerHTML = tagP;

    // CÁCH 2: TẠO THẺ BẰNG DOM (tạo dc vô hạn thẻ p)
    document.getElementById("divContent").innerHTML = ""; //CLEAR THẺ DIV NẾU KO MUỐN XUẤT HIỆN NHIỀU THẺ P
    //tạo thẻ p
    var tagP = document.createElement("p");
    //gán nội dung cho thẻ p
    tagP.innerHTML = "Hello everyone!"
    document.getElementById("divContent").appendChild(tagP);
}