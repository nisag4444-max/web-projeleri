let vize= document.getElementById("vize");
let final= document.getElementById("final");
let hesapla= document.getElementById("hesapla");
let ortalama= document.getElementById("ortalama");
let harf= document.getElementById("harf");
hesapla.addEventListener("click",()=>{
    let vizeTxt =vize.value;
    let finalTxt =final.value;
    

    let sonuc = Math.round(vizeTxt*0.30)+(finalTxt*0.70);
    ortalama.innerText = "Ortalama: " + sonuc;


    let harfNotu = "";
    
    if (sonuc >= 90) {
        harfNotu = "AA";
    } else if (sonuc >= 85) {
        harfNotu = "BA";
    } else if (sonuc >= 80) {
        harfNotu = "BB";
    } else if (sonuc >= 75) {
        harfNotu = "CB";
    } else if (sonuc >= 70) {
        harfNotu = "CC";
    } else if (sonuc >= 65) {
        harfNotu = "DC";
    } else if (sonuc >= 60) {
        harfNotu = "DD";
    } else if (sonuc >= 50) {
        harfNotu = "FD";
    } else {
        harfNotu = "FF";
    }

    // Harf notunu ekrana yazdırıyoruz
    harf.innerText = "Harf Notu: " + harfNotu;
})


