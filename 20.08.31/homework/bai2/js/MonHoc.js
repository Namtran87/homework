import { SinhVien } from "./SinhVien.js"
class MonHoc {
    MaLop;
    TenMon;
    GiangVien;
    SinhVien;
    constructor(MaLop, TenMon, GiangVien) {
        this.MaLop = mMLop;
        this.TenMon = TenMon;
        this.GiangVien = [];
        this.SinhVien = [];
    }
    themSV(sv) {
        if (sv instanceof SinhVien) {
            this.SinhVien.push(sv);
        } else {
            console.log('không phải sinh viên');
        }
    }

    timKiemSinhVien(maSV) {
        let timSV = this.SinhVien.filter(function(sv) {
            return sv.maSV == maSV;
        })
        return timSV;
    }

    traDiem(diemSo) {
        let traDiem = this.SinhVien.filter(function(sv) {
            return sv.diemSo > diemSo;
        });

        return traDiem;
    }
}
export { MonHoc }