## Basit Yönlendiricili Stok API 
Stok API örneği NodeJS ve MongoDB kullanılarak oluşturulmuştur.

#### Ayağa kaldırma için gerekli adımlar:
- Proje klonlanır ve komut satırından dizine girilir.
- "npm install" ile gerekli kütüphaneler yüklenilir.
- "node bin/www" komutu ile proje başlatılır.

> Temel değişkenler için (PORT & MongoDB Sunucu parametreleri) .env dosyasını düzenleyebilirsiniz.

> Proje /stock route üzerinden sadece GET ve POST taleplerine cevap vermektedir. Sistem başarılı işlemler için "0", başarısız işlemler için "-1" kodunu döndürmektedir

---

#### POST /stock - Kayıt oluşturma
***Örnek istek body :***

    {
        "product_id" : "00000003",
        "name" : "BNG Product3",
        "stock" : 353,
        "created_date" : "2019-09-01 18: 16: 16"
    }
    
***Cevap:***

    {
        "code": "0",
        "msg": "success",
        "data": {
            "product_id": 3,
            "name": "BNG Product3",
            "stock": 353,
            "created_date": "2019-09-01T15:16:16.000Z"
        }
    }

---

#### GET /stock - Kayıt listeleme
***Cevap :***

    {
        "code": "0",
        "msg": "success",
        "data": {
        "code": "0",
        "msg": "success",
        "data": [
            {
                "product_id": 1,
                "name": "BNG Product",
                "stock": 35,
                "created_date": "2019-09-01T13:16:16.000Z"
            },
            {
                "product_id": 3,
                "name": "BNG Product3",
                "stock": 353,
                "created_date": "2019-09-01T15:16:16.000Z"
            }
        ]
    }
