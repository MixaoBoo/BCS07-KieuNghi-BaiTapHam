// BÀI TẬP: QUẢN LÝ TUYỂN SINH
function quanLyTuyenSinh() {
    // Lấy dữ liệu người dùng nhập
    var diemChuan = document.getElementById("diemChuan").value;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var diemMon1 = document.getElementById("diemMon1").value * 1;
    var diemMon2 = document.getElementById("diemMon2").value * 1;
    var diemMon3 = document.getElementById("diemMon3").value * 1;
    
    var diemUuTien = khuVuc + doiTuong;
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
    if (diemMon1 <= 10 && diemMon2 <= 10 && diemMon3 <= 10) {
        if (diemTongKet >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
            document.getElementById("ketQua").innerHTML = `Chúc mừng bạn đã trúng tuyển với điểm tổng kết là ${diemTongKet}`;
        } else if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
            document.getElementById("ketQua").innerHTML = `Rất tiếc bạn đã rớt! Do có điểm bằng 0`;
        } else {
            document.getElementById("ketQua").innerHTML = `Rất tiếc bạn đã rớt! Với điểm tổng kết là ${diemTongKet}`;
        }
    } else {
        document.getElementById("ketQua").innerHTML = `Nhập điểm không hợp lệ! Mời bạn nhập lại!`;
    }
}
// BÀI TẬP: TÍNH TIỀN ĐIỆN
 const giaTienKw_Dau = 500;
 const giaTienKw_1 = 650;
 const giaTienKw_2 = 850;
 const giaTienKw_3 = 1100;
 const giaTienKw_CL = 1300;

document.getElementById("btnTinhDien").addEventListener("click", function(){
    var soLuongKw = document.getElementById("soKw").value * 1;
    var hoTen = document.getElementById("hoTen").value;
    var thongBao = document.getElementById("ketQua2");
     
    var tongTien = 0;
    
    if(soLuongKw > 0){
        //Tính tiền điện
        tongTien = tinhTongTienDien(soLuongKw).toLocaleString();

        thongBao.innerHTML = `Số tiền ${hoTen} phải trả cho ${soLuongKw} Kw là: ${tongTien} vnd`;
    }else 
        thongBao.innerHTML = "Số Kw không hợp lệ. Vui lòng nhập lại";
});

// Hàm tính tổng tiền điện
function tinhTongTienDien(soKw){
    var tongTien = 0;

    if(soKw <= 50)
        tongTien = soKw * giaTienKw_Dau;
    else if (soKw <= 100)
        tongTien = (giaTienKw_Dau*50) + (soKw-50)*giaTienKw_1;
    else if (soKw <= 200)
        tongTien = (giaTienKw_Dau*50) + (giaTienKw_1 * 50) + (soKw-100) * giaTienKw_2;
    else if (soKw <= 350)
        tongTien = (giaTienKw_Dau * 50) + (giaTienKw_1 * 50) + (giaTienKw_2 * 100) + (soKw-200)*giaTienKw_3;
    else if (soKw > 350)
        tongTien = (giaTienKw_Dau * 50) + (giaTienKw_1 * 50) + (giaTienKw_2 * 100) + (giaTienKw_3 * 150) + (soKw-350) * giaTienKw_CL;
    else 
        thongBao.innerHTML = "Không thể tính được lượng điện tiêu thụ";
    return tongTien; 
}
// BÀI TẬP: TÍNH TIỀN THUẾ
const tax_1 = 0.05;
const tax_2 = 0.1;
const tax_3 = 0.15;
const tax_4 = 0.2;
const tax_5 = 0.25;
const tax_6 = 0.3;
const tax_7 = 0.35;

// function calculatorTax() {
//   var name = document.getElementById("inputTen").value;
//   var incomes = document.getElementById("inputThuNhap").value * 1;
//   var dependent = document.getElementById("inputSoNguoi").value * 1;
//   var resultTax = 0;

//   if(incomes > 0){

//     var incomeTaxes = incomes - 4000000 - dependent * 1.6;
//     // Tính thuế thu nhập 
//     resultTax = calculatorSum(incomeTaxes);

//     document.getElementById("thongBaoThue").innerHTML = "Thuế TNCN phải trả của Anh(chị)  " + name + " là: " + resultTax + "tr VND";
//   } else {
//       alert("Số tiền không hợp lệ yêu cầu nhập lại!")
//   }
// }

// // Hàm tính thu nhập thuế
// function calculatorSum(incomeTaxes){
//   var resultTax = 0;

//   if (incomeTaxes <= 60000000) {
//     resultTax = incomeTaxes * tax_1;
//   } else if (incomeTaxes <= 120000000) {
//     resultTax = 60000000 * tax_1 + (incomeTaxes - 60000000) * tax_2;
//   } else if (incomeTaxes <= 216000000) {
//     resultTax = 60000000 * tax_1 + 60000000 * tax_2 + (incomeTaxes - 120000000) * tax_3;
//   } else if (incomeTaxes <= 384000000) {
//     resultTax = 60000000 * tax_1 + 60000000 * tax_2 + 960000000 * tax_3 + (incomeTaxes - 216000000) * tax_4;
//   } else if (incomeTaxes <= 624000000) {
//     resultTax = 60000000 * tax_1 + 60000000 * tax_2 + 960000000 * tax_3 + 168000000 * tax_4 + (incomeTaxes - 384000000) * tax_5;
//   } else if (incomeTaxes <= 960000000) {
//     resultTax = 60000000 * tax_1 + 60000000 * tax_2 + 960000000 * tax_3 + 168000000 * tax_4 + 240000000 * tax_5 + (incomeTaxes - 624000000) * tax_6;
//   } else if (incomeTaxes > 960000000) {
//     resultTax = 60000000 * tax_1 + 60000000 * tax_2 + 960000000 * tax_3 + 168000000 * tax_4 + 240000000 * tax_5 + 336000000 * tax_6 + (incomeTaxes - 960000000) * tax_7;
//   }
//   return resultTax;
// }
// document.getElementById("btnTinhThue").addEventListener("click", calculatorTax); 

function tinhThuNhapChiuThue() {
    // Lấy dữ liệu người dùng
    var hoTen = document.getElementById("nhapHoTen").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    // Các bước xử lý
    var thuNhapChiuThue = thuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;;
    var thueThuNhapCaNhan = 0;

    if (thuNhapNam > 0) {
        if (thuNhapNam <= 60000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_1;
        } else if (thuNhapNam > 60000000 && thuNhapNam <= 120000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_2;
        } else if (thuNhapNam > 120000000 && thuNhapNam <= 210000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_3;
        } else if (thuNhapNam > 210000000 && thuNhapNam <= 384000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_4;
        } else if (thuNhapNam > 384000000 && thuNhapNam <= 624000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_5;
        } else if (thuNhapNam > 624000000 && thuNhapNam <= 960000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_6;
        } else if (thuNhapNam > 960000000) {
            thueThuNhapCaNhan = thuNhapChiuThue * tax_7;
        }
    } else {
        alert("Số tiền không hợp lệ yêu cầu nhập lại!")
    }
    document.getElementById("inRaKetQua").innerHTML = `Tiền thuế thu nhập cá nhân của ${hoTen} là: ${thueThuNhapCaNhan.toLocaleString()} VND`;
}

// ĐỀ BÀI: TÍNH TIỀN CÁP
// Hàm onchange ẩn hiện input Số kết nối
var soKetNoiInput = document.getElementById("soKetNoi");
function handleChangeSelected() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    console.log(loaiKhachHang);
    if (loaiKhachHang === "nhaDan" || loaiKhachHang === "0") {
        if (!document.querySelector("#soKetNoi.d-none")) {
            soKetNoiInput.classList.add("d-none");   
        }
    } else {
        if (document.querySelector("#soKetNoi.d-none")) {
            soKetNoiInput.classList.remove("d-none");
        }
    }
}
// Hàm để tính tiền cáp
// Phí nhà Dân
const phiHoaDon_1 = 4.5;
const phiDichVu_1 = 20.5;
const giaKenh_1 = 7.5;
// Phí doanh nghiệp
const phiHoaDon_2 = 15;
const phiDichVu_2 = 75;
const giaKenh_2 = 50;
var tienCapNhaDan = 0;
var tienCapDoanhNghiep = 0;
function tinhTienCap() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    // Lấy dữ liệu
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var maKhachHang = document.getElementById("maKhachHang").value;
    if (loaiKhachHang === "nhaDan") {
        tienCapNhaDan = phiHoaDon_1 + phiDichVu_1 + giaKenh_1 * soKenhCaoCap;
        document.getElementById("inRaKetQua1").innerHTML = `Tiền cáp của khách hàng cá nhân có mã số ${maKhachHang} là: $${tienCapNhaDan.toFixed(2)}`
    } else if (loaiKhachHang === "doanhNghiep") {
        if (soKetNoi <= 10) {
            tienCapDoanhNghiep = phiHoaDon_2 + phiDichVu_2 + giaKenh_2 * soKenhCaoCap
            document.getElementById("inRaKetQua1").innerHTML = `Tiền cáp của doanh nghiệp có mã số ${maKhachHang} là: $${tienCapDoanhNghiep.toFixed(2)}`
            
        } else if (soKetNoi > 10) {
            tienCapDoanhNghiep = phiHoaDon_2 + phiDichVu_2 + giaKenh_2 * soKenhCaoCap + (soKetNoi - 10) * 5;
            document.getElementById("inRaKetQua1").innerHTML = `Tiền cáp của doanh nghiệp có mã số ${maKhachHang} là: $${tienCapDoanhNghiep.toFixed(2)}`
        } else {
            alert("Số kết nối không hợp lệ!")
        }
    } else {
        alert("Thông tin không hợp lệ! Vui lòng nhập lại!")
    }
}