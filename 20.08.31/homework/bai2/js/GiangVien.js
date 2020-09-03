import { nguoi } from "./Ngươi.js"
class GiangVien extends person {
    capBac;
    constructor(hoten, gioiTinh, capBac) {
        super(hoten, gioiTinh);
        this.capBac = capBac;
    }
}
export { GiangVien }