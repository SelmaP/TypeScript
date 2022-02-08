// tek başına kullanılmaz, inheritance yöntemiyle kullanılılır.
// Ne zaman kullanılır ?
// Kredi verme konusunda biz kredi verdik diye veritabanına kayıt atılır
// Tüketici kredisi , A kurumuna kredi verilirken hesaplar değişir
// Ortak ve Ortak olmayan operasyonları belirlemek için kullanıyoruz.
// abstract sınıfların nimetlerinden faydalanılmalıdır ,  sürdürülebilir yazılımlar açısından önemlidir.

// Temel sınıf , base sınıf 

abstract class KrediBase{
    constructor(bisey:string){

    }
    kaydet() : void {
        console.log("Kaydedildi"); // tamamlanmış operasyon, her yerde ortak 
    }
    abstract hesapla():void; // tanımlanmamış , her yerde ortak değil
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super("zczxc"); //super classı genellikle connectionstringlerde kullanılır.
    }
    hesapla() :void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }
}

class MortgageKredi extends KrediBase {
    constructor(){
        super("cvccvb");
    }
    hesapla() : void {
        console.log("Konut kredisine göre hesap yapıldı.")
    }

    baskabirOperasyon(){

    }
}

let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.kaydet()
tuketiciKredisi.hesapla()

let mortgageKredisi = new MortgageKredi()
mortgageKredisi.hesapla()
mortgageKredisi.kaydet()
mortgageKredisi.baskabirOperasyon();


let kredi : KrediBase

kredi = new TuketiciKredi();

kredi = new MortgageKredi();


