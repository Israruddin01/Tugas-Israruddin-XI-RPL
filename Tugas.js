// let waktu = {
//     senin: "2 jam",
//     selasa: "2 jam",
//     rabu: "3 jam",
//     kamis: "3 jam",
//     jumat: "1 jam",
//     sabtu: "4 jam",
//     minggu: "5 jam"
// }

const waktuBermainHarian = [2, 2, 3, 3, 1, 4, 5];

const batasWaktu = 2;

let totalWaktuBermain = 0;
let jumlahKaliMelebihiBatas = 0;

for (let i = 0; i < waktuBermainHarian.length; i++) {
  totalWaktuBermain += waktuBermainHarian[i];
  if (waktuBermainHarian[i] > batasWaktu) {
    jumlahKaliMelebihiBatas++;
  }
}

console.log(
  "Total waktu bermain game dalam seminggu:",
  totalWaktuBermain,
  "jam"
);
console.log(
  "Jumlah kali melebihi batas waktu bermain:",
  jumlahKaliMelebihiBatas,
  "kali"
);
