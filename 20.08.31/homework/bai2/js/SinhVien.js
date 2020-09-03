import { nguoi } from "./Ngươi.js"
class SinhVien extends person {
    maSV;
    nienKhoa;
    diemSo;
    constructor(hoten, gioiTinh, maSV, nienKhoa, diemSo) {
        super(hoten, gioiTinh);
        this.hoten = hoten;
        this.gioiTinh = gioiTinh;
        this.maSV = maSV;
        this.nienKhoa = nienKhoa;
        this.diemSo = diemSo;
    }
}
export { SinhVien }