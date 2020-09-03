import { MonHoc } from "./MonHoc.js"
import { GiangVien } from "./GiangVien.js"
import { SinhVien } from "./SinhVien.js"

let sv1 = new SinhVien('Trần Hoài Nam', 'nam', 'sv1', '2019-2023', 9);
let sv2 = new SinhVien('Hồ Văn Hải', 'nam', 'sv2', '2018-2022', 6);
let sv3 = new SinhVien('Lã Thanh Nga', 'nữ', 'sv3', '2017-2021', 8);
let sv4 = new SinhVien('Tô Thị Hồng', 'nữ', 'sv4', '2020-2025', 3);
let sv5 = new SinhVien('Đào Minh Quân', 'nam', 'sv5', '2020-2025', 5);

let gv1 = new GiangVien('Hà Kiều My', 'nữ', 'tiến sỹ');
let gv1 = new GiangVien('Nguyễn Đức cảnh', 'nam', 'thạc sỹ');


let mh1 = new MonHoc(c1, 'lập trình js1', gv1);

mh1.themSV(sv1);
mh1.themSV(sv2);
mh1.themSV(sv3);
mh1.themSV(sv4);
mh1.themSV(sv5);

console.log(mh1);


console.log(mh1.timKiemSinhVien('sv1'));
console.log(mh1.traDiem(6));