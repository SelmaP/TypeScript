
// tamamlanmamış imzalar 
// operasyon barındıran yapılarda kullanılırlar
// classtan farkı tüm parametreler functionda gönderilmelidir.
// classlarda yeni bir nesne türeterek herhangi bir paramatre/property functiona gönderilebilir
// implements ile başka bir classa verilir.
// Pascal Case: değişken, sınıf, metod veya fonksiyonun kelimeleri bitişik ve büyük harfle başlayacak şekilde yazılmasıdır.

//Örnek: ThisIsVariable, GetCustomer


//interface
interface Product {
    id : number
    name : string
    unitPrice : number 
}

// class

class Product2 {

    id : number
    name : string
    unitPrice : number 
}

// interface
function save (product:Product){
  console.log(product.name + "Kaydedildi !") 
}
// class
function save2(product2:Product2){
    console.log(product2.name + "Kaydedildi !") 
}

// object notasyonu 
save ({id:1, name:"Laptop", unitPrice:10})

let mouse =new  Product2()
mouse.name="Platoon"

save2(mouse)

// implementasyon
// java ve c# 'ta IPersonService kullanılırken , JAvascript ve TypeScriptte I kullanılmayabilir.

interface PersonService{
  save();
}

class CustomerService implements PersonService{
    save(){

    }
}


