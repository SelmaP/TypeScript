class Ev{
    private odaSayisi : number
    pencereSayisi : number
    bulunduguKat : number

     constructor (odaSayisi :number,pencereSayisi:number, bulunduguKat :number ){
           this.odaSayisi = odaSayisi;
           this.pencereSayisi =pencereSayisi;
           this.bulunduguKat = bulunduguKat;      
     }

    yemekYe(){
        console.log("Yemek yiyildi..");
    }
}

let ev = new Ev(3,4,5)
ev.yemekYe();
console.log(ev._bulunduguKat);


class Kisi {
    protected _isim :string
    get() isim() :string{
        return "sayın :" this._isim();
    }
    set isim(ad:string){
        this._isim =ad
    }
  kaydet(){
      console.log("Kişi kaydedildi.")
  }
}

class Musteri extends Kisi{
    
  satisYap(){
      console.log("Satis yapıldı..")
  }
  
}

class Personel extends Kisi {
  maasOde(){
     console.log("Maaş ödendi .");
  }
}

let musteri = new Musteri()
musteri.isim="Selma"
musteri.kaydet();
musteri.satisYap();


let personel = new Personel()
personel.kaydet();
personel.maasOde();