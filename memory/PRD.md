# Aysu için Doğum Günü Şovu — PRD

## Orijinal Problem
Doğum günü için bir slayt benzeri website. 
- Sayfa 1: "Merhaba Aysucuk, Şov başlasın mı?" + "Hadi uzaya çıkalım" butonu
- Sayfa 2: Şiir + metin + "Parti devam ediyor" butonu
- Sayfa 3: Birkaç fotoğraf + altlarında kısa metinler + "Dünya buradan ne kadar güzel" butonu

## Kullanıcı Seçimleri
- Tema: Uzay & yıldızlar
- Şiir/metin: Ana ajan yazdı (placeholder; istenirse değiştirilebilir)
- Fotoğraflar: Şu an placeholder Unsplash görselleri; kullanıcı kendi fotoğraflarını sonra ekleyecek
- Final butonu: Kullanıcının yazdığı özel kapanış mesajını gösteren 4. sayfa

## Mimari
- Stack: React (CRA) frontend, backend yok (statik slayt)
- Routing: React Router; tek route `/`
- State: Tek `step` state'i (1–4)
- Klavye desteği: ←/→ ve boşluk tuşu
- Bileşenler:
  - `src/pages/Slideshow.jsx` — Adım yönetimi, navigasyon, progress dots
  - `src/components/CosmosBackground.jsx` — Yıldızlar, planet'ler, kayan yıldız, grain
  - `src/components/Confetti.jsx` — Final sayfası konfeti animasyonu
  - `src/components/slides/Slide1.jsx` ... `Slide4.jsx`

## Tasarım
- Font: Cormorant Garamond (başlık, italik vurgular), Manrope (gövde), Caveat (el yazısı vurgular)
- Renk: Derin lacivert/mor kozmik arka plan + altın/gül/menekşe nebula gradyanları
- Animasyon: Yıldız parıltısı, kayan yıldız, gezegen yüzdürme, slide fadeUp, polaroid hover tilt

## Tamamlanan İşler (Aralık 2025)
- 4 slaytlı uzay temalı slayt gösterisi
- Slayt 2 için 3 kıtalık özgün şiir + giriş metni
- Slayt 3 için 6 polaroid çerçeveli fotoğraf gridi (yatık + bant detaylı)
- Slayt 4 için kullanıcının özel kapanış mesajı + konfeti animasyonu
- Geri / Baştan butonları + ilerleme noktaları + klavye navigasyonu
- data-testid'ler her interaktif öğe için ekli

## Yapılması Gerekenler (Kullanıcı için)
- Slayt 3 fotoğraflarını kendi fotoğraflarıyla değiştirmek için: `/app/frontend/src/components/slides/Slide3.jsx` içindeki `PHOTOS` dizisinde `src` ve `caption` alanlarını güncelle
- İstenirse şiir metnini `/app/frontend/src/components/slides/Slide2.jsx` içinde değiştir
- Final mesajını `/app/frontend/src/components/slides/Slide4.jsx` içinde değiştir

## Backlog (P1)
- Arka plan müziği (doğum günü şarkısı) — final sayfasında play butonu
- Fotoğraf yükleme arayüzü (admin için)
- Slaytlar arası swipe (mobil)

## Mock Durumu
Mocked yok. Backend kullanılmadı. Tüm görseller statik Unsplash CDN.
