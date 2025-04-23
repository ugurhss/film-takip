| **Katman**                     | **Görev**                                                     | **Prop Gönderiyor mu?**                                        | **Prop Alıyor mu?**                                      |
|---------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------|
| **App.js**                     | State'leri tutar, sayfa yönlendirmeleri yapar                  | ✅ Evet, izlediklerim ve izlemediklerim listelerini ve fonksiyonları gönderir | ❌ Hayır                                                |
| **Anasayfa.js**                | Film listesini çeker ve gösterir                               | ✅ Evet, film verisi ve fonksiyonları **FilmKartı** bileşenine gönderir | ✅ Evet, izledimEkle ve izlemedimEkle fonksiyonlarını ve film verisini alır |
| **FilmKartı.js**               | Her bir filmi kart şeklinde gösterir                          | ❌ Hayır                                                       | ✅ Evet, film verisi, buton fonksiyonları ve görsellik ayarlarını **Anasayfa.js**'ten alır |
| **Izlediklerim.js ve Izlemediklerim.js** | İzlenen ve izlenmeyen filmleri listeler                  | ✅ Evet, **FilmKartı** bileşenine film verilerini gönderir | ✅ Evet, kaldirFonk fonksiyonunu ve film verilerini alır |




@mui/material
sweetalert2
react-router-dom
