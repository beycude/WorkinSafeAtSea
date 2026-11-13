/* WorkinSafe at Sea (WSS) — veri dosyası
   Veri tarihi: Kasım 2026. Kural numaraları özet amaçlıdır; bağlayıcı olan
   bayrak devleti, klas ve şirket SMS'idir. Standart sürümleri değişebilir. */

window.WSS_DATA = {
  dataDate: "Kasım 2026",

  layers: {
    IMO: { name: "IMO", desc: "Uluslararası Denizcilik Örgütü sözleşmeleri, kodları, kararları ve sirkülerleri" },
    ILO: { name: "ILO / MLC", desc: "Uluslararası Çalışma Örgütü: MLC 2006 ve uygulama kodları" },
    AB:  { name: "AB", desc: "Avrupa Birliği direktifleri ve tüzükleri" },
    TR:  { name: "Türkiye", desc: "Türk ulusal mevzuatı (kanun ve yönetmelikler)" },
    STD: { name: "Standart", desc: "EN / ISO / IEC teknik standartları — ekipmanın asgari teknik özelliği" },
    END: { name: "Sektör", desc: "Sektör rehberleri (OCIMF, ICS, MCA vb.) — bağlayıcı değil, ama denetimlerde esas alınır" }
  },

  /* ---------------- KURALLAR ---------------- */
  rules: [
    // IMO
    { id: "solas-ii2-10-10", layer: "IMO", code: "SOLAS II-2/10.10", title: "İtfaiyeci teçhizatı (fire-fighter's outfits)",
      desc: "Gemide bulunması gereken itfaiyeci teçhizatı sayısını ve yedek hava şarjlarını belirler. Yük gemilerinde en az iki takım. 10.10.4: her yangın ekibi için en az iki adet iki yönlü taşınabilir telsiz; tankerlerde ve tehlikeli bölgelerde patlama korumalı / kendinden emniyetli olmalı." },
    { id: "fss-3", layer: "IMO", code: "FSS Code Bölüm 3", title: "Personel koruması — itfaiyeci teçhizatı ve EEBD",
      desc: "İtfaiyeci teçhizatının bileşenlerini (koruyucu giysi, çizme, kask, fener, balta, solunum cihazı, can halatı) ve EEBD'nin asgari özelliklerini (en az 10 dakika) tanımlar." },
    { id: "solas-ii2-13", layer: "IMO", code: "SOLAS II-2/13.3.4 ve 13.4.3", title: "Acil kaçış solunum cihazları (EEBD)",
      desc: "Yaşam mahallerinde (13.3.4) ve makine mahallerinde (13.4.3) bulunması gereken EEBD sayı ve yerleşimi." },
    { id: "msc-circ-849", layer: "IMO", code: "MSC/Circ.849", title: "EEBD performans, test ve kullanım kılavuzu",
      desc: "EEBD'nin tasarım, test ve gemide yerleşimine ilişkin kılavuz. EEBD sadece kaçış içindir." },
    { id: "solas-iii-7", layer: "IMO", code: "SOLAS III/7.2 ve 7.3", title: "Can yelekleri ve daldırma elbiseleri",
      desc: "7.2: her kişi için can yeleği, ayrıca vardiya yerleri ve uzak can salı istasyonları için ek can yelekleri. 7.3: yük gemilerinde gemideki her kişi için uygun bedende daldırma elbisesi." },
    { id: "lsa-2", layer: "IMO", code: "LSA Code 2.2 / 2.3 / 2.5", title: "Can yeleği, daldırma elbisesi, ısıl koruma",
      desc: "2.2 can yeleği (yüzdürme, baygın kişiyi yüzü yukarı çevirme, ışık ve düdük), 2.3 daldırma elbisesi, 2.5 ısıl koruyucu yardımcılar (TPA) için asgari performans şartları." },
    { id: "msc-circ-1047", layer: "IMO", code: "MSC/Circ.1047", title: "Daldırma elbiselerinin aylık gemide kontrolü",
      desc: "Mürettebat tarafından yapılacak aylık daldırma elbisesi ve anti-exposure suit kontrol kılavuzu (fermuar, dikiş, ışık, düdük, bedenler)." },
    { id: "a658", layer: "IMO", code: "IMO Res. A.658(16)", title: "Can kurtarma araçlarında retroreflektif malzeme",
      desc: "Can yeleği, daldırma elbisesi gibi can kurtarma araçlarında kullanılacak yansıtıcı bantların özellikleri ve yerleşimi." },
    { id: "solas-xi1-7", layer: "IMO", code: "SOLAS XI-1/7", title: "Kapalı alanlar için atmosfer test cihazı",
      desc: "Her gemide oksijen, yanıcı gaz/buhar, hidrojen sülfür (H2S) ve karbonmonoksit (CO) ölçebilen uygun taşınabilir test cihazı bulunmalı. Ayrıca kapalı alana giriş ve kurtarma tatbikatları (SOLAS III/19)." },
    { id: "msc-circ-1477", layer: "IMO", code: "MSC.1/Circ.1477", title: "Taşınabilir atmosfer test cihazı seçim kılavuzu",
      desc: "SOLAS XI-1/7 kapsamındaki cihazların seçimi, kalibrasyonu ve kullanımına dair kılavuz." },
    { id: "msc-581", layer: "IMO", code: "IMO Res. MSC.581(110)", title: "Kapalı alana giriş — revize tavsiyeler (2025)",
      desc: "27 Haziran 2025'te kabul edildi; eski A.1050(27)'nin yerini aldı. Gemiye özel Kapalı Alan Kaydı (Enclosed Space Register), risk değerlendirmesi, giriş izni, atmosfer testi, kurtarma planı ve kıyı personelinin bilgilendirilmesi." },
    { id: "noise-code", layer: "IMO", code: "SOLAS II-1/3-12 + MSC.337(91)", title: "Gemilerde gürültü seviyeleri kodu",
      desc: "Mahallere göre gürültü sınırları. 85 dB(A) üzerindeki mahallere girişte kulak koruyucu kullanılmalı ve uyarı levhası bulunmalı." },
    { id: "solas-ii1-3-8", layer: "IMO", code: "SOLAS II-1/3-8", title: "Çekme ve bağlama (mooring) donanımı",
      desc: "Bağlama donanımının tasarımı, seçimi, bakımı ve kontrolü. MSC.1/Circ.1619 (tasarım) ve MSC.1/Circ.1620 (kontrol ve bakım) kılavuzları ile birlikte uygulanır." },
    { id: "msc-circ-1620", layer: "IMO", code: "MSC.1/Circ.1619 ve 1620", title: "Bağlama düzeni tasarımı ve halat/donanım bakımı kılavuzları",
      desc: "Halat seçimi, halat değişim kriterleri, snap-back (geri tepme) bölgeleri dahil bağlama güvenliği." },
    { id: "msc-circ-1321", layer: "IMO", code: "MSC.1/Circ.1321", title: "Makine dairesi ve pompa dairesinde yangın önleme kılavuzu",
      desc: "Yakıt/yağ kaçakları, sıcak yüzeylerin izolasyonu ve sıcak iş (hot work) önlemleri." },
    { id: "msc-circ-1264", layer: "IMO", code: "MSC.1/Circ.1264", title: "Ambarlarda fumigasyon — pestisit güvenli kullanım tavsiyeleri",
      desc: "Fumigasyon sırasında ve sonrasında gaz ölçümü, uyarı levhaları, solunum koruyucu ve tahliye (ventilasyon) önlemleri." },
    { id: "imsbc-3", layer: "IMO", code: "IMSBC Code Bölüm 3", title: "Dökme yükte personel ve gemi güvenliği",
      desc: "Toz, zehirli/boğucu gaz ve oksijen eksikliği tehlikeleri; ambara giriş öncesi ölçüm ve koruyucu ekipman." },
    { id: "ibc-14", layer: "IMO", code: "IBC Code Bölüm 14", title: "Kimyasal tankerlerde personel koruması",
      desc: "Yük işlemleri için koruyucu donanım (büyük önlük, uzun konçlu özel eldiven, uygun ayakkabı, kimyasal tulum, sıkı oturan gözlük veya yüz siperi), solunum cihazları, kaçış amaçlı solunum koruması, göz duşu ve dekontaminasyon duşu." },
    { id: "igc-14", layer: "IMO", code: "IGC Code Bölüm 14", title: "Gaz tankerlerinde personel koruması",
      desc: "Gaz tankerlerinde koruyucu ekipman, emniyet donanımı, ilk yardım ekipmanı, kaçış amaçlı solunum ve göz koruması; düşük sıcaklık (kriyojenik) tehlikesine karşı koruma." },
    { id: "solas-v-23", layer: "IMO", code: "SOLAS V/23 + IMO Res. A.1045(27)", title: "Kılavuz kaptan transfer düzenekleri",
      desc: "Pilot iskelesi, kombine düzenek, emniyet donanımı (can simidi ve ışık, can halatı, aydınlatma) ve sorumlu zabitin bulunması. Yeni SOLAS V/23 değişiklikleri MSC.550(108) ile kabul edildi; yürürlük tarihini kontrol edin." },
    { id: "polar-code", layer: "IMO", code: "Polar Code — MSC.385(94)", title: "Kutup sularında çalışan gemiler kodu",
      desc: "Soğuk ortama uygun koruyucu giysi, kişisel ve grup hayatta kalma kitleri, ısıl koruma." },
    { id: "css-code", layer: "IMO", code: "CSS Code", title: "Yük istifleme ve bağlama emniyeti kodu",
      desc: "Yük bağlama (lashing) prensipleri; geminin Yük Bağlama El Kitabı (Cargo Securing Manual) ile birlikte uygulanır." },
    { id: "ism", layer: "IMO", code: "ISM Code Bölüm 1.2, 7, 8", title: "Uluslararası Emniyet Yönetimi Kodu",
      desc: "Şirket, tanımlanmış tüm riskler için önlem almalı (1.2.2), gemideki kilit işler için talimat ve planlar (7) ve acil durum hazırlığı (8) oluşturmalı. Hangi işte hangi KKD'nin kullanılacağı şirket SMS'inde tanımlanır." },

    // ILO
    { id: "mlc-4-3", layer: "ILO", code: "MLC 2006 Kural 4.3 / Std. A4.3 / Kılavuz B4.3", title: "Sağlığın korunması, emniyet ve kaza önleme",
      desc: "Gemide iş sağlığı ve güvenliği politikası, risk değerlendirmesi, kişisel koruyucu donanımın sağlanması ve kullanımı, emniyet komitesi, kaza kaydı ve raporlama. 2022 değişiklikleri 23 Aralık 2024'te yürürlüğe girdi." },
    { id: "ilo-cop-ship", layer: "ILO", code: "ILO Code of Practice — Accident prevention on board ship at sea and in port", title: "Gemide kaza önleme uygulama kodu",
      desc: "Yüksekte ve borda dışında çalışma, kapalı alanlar, bağlama, makine dairesi, mutfak, boya, kaynak gibi işlerde güvenli çalışma ve KKD." },
    { id: "ilo-cop-ports", layer: "ILO", code: "ILO Code of Practice — Safety and health in ports", title: "Limanlarda iş sağlığı ve güvenliği uygulama kodu",
      desc: "Liman ve terminal işlerinde, gemi-rıhtım arası çalışmalarda yüksek görünürlük giysisi ve diğer KKD." },

    // AB
    { id: "eu-89-391", layer: "AB", code: "Direktif 89/391/EEC", title: "İş sağlığı ve güvenliği çerçeve direktifi",
      desc: "İşverenin risk değerlendirmesi, önleme ve çalışanı bilgilendirme yükümlülükleri." },
    { id: "eu-89-656", layer: "AB", code: "Direktif 89/656/EEC", title: "KKD'nin işyerlerinde kullanımı",
      desc: "KKD'nin ne zaman kullanılacağı, seçimi, işverence ücretsiz sağlanması, bakımı ve çalışana eğitimi." },
    { id: "eu-2016-425", layer: "AB", code: "Tüzük (EU) 2016/425", title: "Kişisel koruyucu donanım tüzüğü",
      desc: "KKD'nin tasarım ve üretim şartları, CE işareti, kategoriler: I (basit), II (orta), III (ölüm veya kalıcı hasar riski — solunum koruyucu, düşüş durdurucu, kimyasal giysi, can yeleği vb.)." },
    { id: "eu-2003-10", layer: "AB", code: "Direktif 2003/10/EC", title: "Gürültü direktifi",
      desc: "Alt etkin değer 80 dB(A): kulak koruyucu sağlanır. Üst etkin değer 85 dB(A): kullanımı zorunlu. Maruziyet sınırı 87 dB(A) (kulak koruyucu dahil)." },
    { id: "eu-2014-90", layer: "AB", code: "Direktif 2014/90/EU (MED)", title: "Gemi teçhizatı direktifi — dümen (wheel) işareti",
      desc: "AB bayraklı gemilerdeki can yeleği, daldırma elbisesi, itfaiyeci teçhizatı, EEBD gibi teçhizatın onaylı ve dümen işaretli olması. Hangi standardın geçerli olduğunu gösteren uygulama tüzüğü her yıl güncellenir." },

    // TR
    { id: "tr-6331", layer: "TR", code: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu", title: "İSG Kanunu (RG 30.06.2012, Sayı 28339)",
      desc: "İşverenin genel yükümlülükleri, risk değerlendirmesi, çalışanların eğitimi ve KKD sağlama yükümlülüğü." },
    { id: "tr-kkd-kullanim", layer: "TR", code: "KKD'lerin İşyerlerinde Kullanılması Hakkında Yönetmelik", title: "RG 02.07.2013, Sayı 28695 (89/656/EEC karşılığı)",
      desc: "KKD'nin seçimi, kullanımı, işverence ücretsiz sağlanması; Ek-1 risk tablosu ve Ek-2 KKD listesi." },
    { id: "tr-kkd-yon", layer: "TR", code: "Kişisel Koruyucu Donanım Yönetmeliği (2016/425/AB)", title: "RG 01.05.2019, Sayı 30761",
      desc: "Piyasaya arz edilen KKD'nin tasarım ve üretim şartları, CE işareti ve Türkçe kullanım kılavuzu." },
    { id: "tr-gurultu", layer: "TR", code: "Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair Yönetmelik", title: "2003/10/EC karşılığı",
      desc: "80 / 85 / 87 dB(A) değerleri ve kulak koruyucu kullanım şartları." },
    { id: "tr-kimyasal", layer: "TR", code: "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik", title: "Kimyasallarla çalışma",
      desc: "Kimyasal maruziyetin değerlendirilmesi, önleme ve uygun KKD." },
    { id: "tr-gemi-techizati", layer: "TR", code: "Gemi Teçhizatı Yönetmeliği", title: "RG 23.10.2005, Sayı 25975 (96/98/EC esaslı)",
      desc: "Türk gemilerinde kullanılan onaylı teçhizat ve uygunluk işareti. 2014/90/EU'ya uyum çalışması sürmektedir; güncel durumu kontrol edin." },
    { id: "tr-854", layer: "TR", code: "854 sayılı Deniz İş Kanunu", title: "Gemi adamlarının çalışma şartları",
      desc: "Türk bayraklı gemilerde gemi adamı ile armatör arasındaki iş ilişkisi; İSG yönünden 6331 ile birlikte uygulanır." },
    { id: "tr-mlc", layer: "TR", code: "6898 sayılı Kanun (MLC 2006 onayının uygun bulunması)", title: "RG 25.03.2017, Sayı 30018",
      desc: "Türkiye'nin MLC 2006'ya taraf olması uygun bulundu; ancak 2025 itibarıyla sözleşme değişikliklerinin onayı beklendiği için onay süreci tamamlanmamıştı. Uluslararası sefer yapan Türk gemilerinde fiilen uygulanıyor. Güncel durumu kontrol edin." },

    // STANDARTLAR
    { id: "en-iso-20345", layer: "STD", code: "EN ISO 20345:2022", title: "Emniyet ayakkabısı",
      desc: "200 J darbeye ve 15 kN ezilmeye dayanıklı burun koruması. Sınıflar: SB, S1, S2, S3, S6, S7 (S4/S5 kauçuk/polimer çizme). 30 Mart 2023'ten sonra piyasaya sürülenler bu sürüme göre belgelenmeli." },
    { id: "en-iso-20347", layer: "STD", code: "EN ISO 20347", title: "Mesleki ayakkabı (burun korumasız)",
      desc: "O sınıfları (OB, O1, O2, O3, O6, O7). Burun koruması yoktur; mutfak gibi düşen yük riski olmayan yerler için." },
    { id: "en-397", layer: "STD", code: "EN 397", title: "Endüstriyel baret",
      desc: "Darbe emme ve delinmeye dayanım. İsteğe bağlı işaretler: düşük sıcaklık (-20/-30 °C), yüksek sıcaklık (+150 °C), elektrik yalıtımı (440 V AC), yan deformasyon (LD), erimiş metal (MM)." },
    { id: "en-12492", layer: "STD", code: "EN 12492", title: "Dağcı tipi kask (çene kayışlı)",
      desc: "Çene kayışı başlıktan çıkmayacak şekilde sağlam. Yüksekte çalışmada kask düşmesin diye tercih edilir." },
    { id: "en-50365", layer: "STD", code: "EN 50365", title: "Elektrik yalıtımlı baret",
      desc: "1000 V AC / 1500 V DC'ye kadar alçak gerilim tesislerinde çalışma için." },
    { id: "en-166", layer: "STD", code: "EN 166", title: "Göz koruyucu",
      desc: "Mekanik dayanım: S (artırılmış), F (düşük enerji darbe 45 m/s), B (orta 120 m/s), A (yüksek 190 m/s). Kullanım alanı: 3 sıvı damla/sıçrama, 4 iri toz, 5 gaz ve ince toz, 8 elektrik arkı, 9 erimiş metal. K: çizilmeye, N: buğulanmaya dayanım." },
    { id: "en-175", layer: "STD", code: "EN 175 + EN 169 / EN 379", title: "Kaynak maskesi ve filtreleri",
      desc: "EN 175 kaynak maskesi gövdesi; EN 169 kaynak filtreleri (koyuluk numarası); EN 379 otomatik kararan filtreler." },
    { id: "en-352", layer: "STD", code: "EN 352-1 / EN 352-2 / EN 352-3", title: "Kulak koruyucu",
      desc: "-1 manşon (kulaklık), -2 tıkaç, -3 baret takılı manşon. Seçimde SNR (tek sayı azaltma değeri) dikkate alınır." },
    { id: "en-388", layer: "STD", code: "EN 388", title: "Mekanik risklere karşı eldiven",
      desc: "Dört rakam + harf: aşınma (0–4), kesilme coup (0–5), yırtılma (0–4), delinme (0–4), kesilme ISO 13997 (A–F), darbe koruma (P)." },
    { id: "en-iso-374", layer: "STD", code: "EN ISO 374-1 / 374-5", title: "Kimyasal ve mikroorganizmaya karşı eldiven",
      desc: "Tip A (6 kimyasala, her biri ≥30 dk), Tip B (3 kimyasala ≥30 dk), Tip C (1 kimyasala ≥10 dk). 374-5: bakteri/mantar (ve VIRUS işaretiyle virüs)." },
    { id: "en-407", layer: "STD", code: "EN 407", title: "Isıl risklere karşı eldiven",
      desc: "Yanmaya dayanım, temas ısısı, konvektif ısı, radyant ısı, küçük ve büyük erimiş metal sıçraması (her biri seviye ile)." },
    { id: "en-12477", layer: "STD", code: "EN 12477", title: "Kaynakçı eldiveni",
      desc: "Tip A: daha yüksek koruma, daha az hassasiyet (gaz altı, elektrot). Tip B: daha hassas, TIG kaynağı için." },
    { id: "en-60903", layer: "STD", code: "EN 60903 (IEC 60903)", title: "Elektrik yalıtım eldiveni",
      desc: "Sınıf 00: 500 V AC, Sınıf 0: 1000 V AC ve üstü sınıflar. Her kullanımdan önce şişirme (hava) testiyle delik kontrolü." },
    { id: "en-511", layer: "STD", code: "EN 511", title: "Soğuğa karşı eldiven",
      desc: "Konvektif soğuk, temas soğuğu ve su geçirmezlik seviyeleri." },
    { id: "en-1082", layer: "STD", code: "EN 1082-1", title: "Zincir örgü (çelik) eldiven",
      desc: "El bıçaklarıyla kesme/kesilme ve bıçak darbesine karşı; et ve balık işlemede." },
    { id: "en-iso-13688", layer: "STD", code: "EN ISO 13688", title: "Koruyucu giysi — genel şartlar",
      desc: "Tüm koruyucu giysiler için beden, ergonomi, zararsızlık ve işaretleme şartları." },
    { id: "en-iso-11612", layer: "STD", code: "EN ISO 11612", title: "Isı ve aleve karşı koruyucu giysi",
      desc: "A (sınırlı alev yayılımı), B konvektif ısı, C radyant ısı, D erimiş alüminyum, E erimiş demir, F temas ısısı kodları." },
    { id: "en-iso-14116", layer: "STD", code: "EN ISO 14116", title: "Sınırlı alev yayılımı malzemeler",
      desc: "Alev yayılımını sınırlayan kumaş ve giysiler (indeks 1–3). Ana koruma değil, ek koruma." },
    { id: "en-iso-11611", layer: "STD", code: "EN ISO 11611", title: "Kaynak ve benzeri işlerde koruyucu giysi",
      desc: "Sınıf 1 (düşük sıçrama, örn. gaz kaynağı, TIG) ve Sınıf 2 (yoğun sıçrama, örn. elektrot, gaz altı, kesme)." },
    { id: "en-iso-20471", layer: "STD", code: "EN ISO 20471", title: "Yüksek görünürlük giysisi",
      desc: "Sınıf 1, 2, 3 (floresan zemin ve yansıtıcı bant alanına göre); Sınıf 3 en yüksek görünürlük." },
    { id: "en-343", layer: "STD", code: "EN 343", title: "Yağmur ve kötü havaya karşı giysi",
      desc: "Su geçirmezlik ve su buharı direnci (nefes alabilirlik) sınıfları 1–4." },
    { id: "en-342", layer: "STD", code: "EN 342", title: "Soğuğa karşı koruyucu giysi",
      desc: "-5 °C altındaki ortamlar için takım/giysi; ısıl yalıtım değeri (Icler) ve hava geçirgenliği." },
    { id: "en-1149-5", layer: "STD", code: "EN 1149-5", title: "Elektrostatik özellikli giysi",
      desc: "Statik elektrik birikimini önler; patlayıcı ortamda (tanker güvertesi, pompa dairesi) yanıcı kıvılcım riskine karşı." },
    { id: "en-chem-suit", layer: "STD", code: "EN 943 / EN 14605 / EN ISO 13982-1 / EN 13034", title: "Kimyasal koruyucu giysi tipleri",
      desc: "Tip 1–2 gaz geçirmez (EN 943), Tip 3 sıvı jeti, Tip 4 sprey (EN 14605), Tip 5 kuru partikül (EN ISO 13982-1), Tip 6 sınırlı sıçrama (EN 13034)." },
    { id: "en-iec-61482", layer: "STD", code: "IEC 61482-2", title: "Elektrik arkına karşı giysi",
      desc: "Ark ısıl tehlikesine karşı giysi; ATPV/EBT değeri veya kutu test sınıfı (APC 1/2)." },
    { id: "en-149", layer: "STD", code: "EN 149", title: "Toz maskesi (filtreli yarım maske)",
      desc: "FFP1 (toplam içe kaçak ≤%22), FFP2 (≤%8), FFP3 (≤%2). NR: tek vardiya, R: tekrar kullanılabilir, D: dolomit tıkanma testi." },
    { id: "en-14387", layer: "STD", code: "EN 14387 (+ EN 143)", title: "Gaz ve kombine filtreler",
      desc: "A (kahverengi) organik buhar, B (gri) inorganik gaz, E (sarı) asit gazlar/SO2, K (yeşil) amonyak, AX düşük kaynama noktalı organik, Hg-P3 cıva. Sınıf 1–3 kapasite. EN 143: P1–P3 partikül filtre (beyaz)." },
    { id: "en-140-136", layer: "STD", code: "EN 140 / EN 136", title: "Yarım yüz ve tam yüz maske",
      desc: "EN 140 yarım maske gövdesi, EN 136 tam yüz maske (Sınıf 3: yangın/itfaiye kullanımı)." },
    { id: "en-137", layer: "STD", code: "EN 137", title: "Kendinden hava beslemeli solunum cihazı (SCBA)",
      desc: "Açık devre basınçlı hava solunum cihazı; tip 1 (endüstriyel) ve tip 2 (itfaiye)." },
    { id: "iso-23269", layer: "STD", code: "ISO 23269-1", title: "Gemiler için EEBD",
      desc: "Gemide kullanılacak acil kaçış solunum cihazlarının şartları." },
    { id: "en-fall", layer: "STD", code: "EN 361 / EN 355 / EN 362 / EN 358 / EN 360 / EN 795", title: "Düşmeye karşı koruma sistemi",
      desc: "EN 361 tam vücut kemeri, EN 355 enerji sönümleyici, EN 362 konnektör (karabina), EN 358 çalışma konumlandırma kemeri, EN 360 geri sarmalı düşüş durdurucu, EN 795 ankraj noktası." },
    { id: "en-469", layer: "STD", code: "EN 469 / EN 15090 / EN 443 / EN 659", title: "İtfaiyeci kişisel donanımı",
      desc: "EN 469 itfaiyeci giysisi, EN 15090 itfaiyeci botu, EN 443 itfaiyeci kaskı, EN 659 itfaiyeci eldiveni." },
    { id: "iso-12402", layer: "STD", code: "ISO 12402-2 / -3 / -4", title: "Kişisel yüzdürme donanımı (SOLAS dışı)",
      desc: "275 N, 150 N, 100 N yüzdürme seviyeleri. Gemideki can yeleği yerine geçmez; çalışma yeleği olarak kullanılır." },
    { id: "atex", layer: "STD", code: "ATEX 2014/34/EU / IECEx (IEC 60079)", title: "Patlayıcı ortam için ekipman",
      desc: "Tehlikeli bölgelerde kullanılacak el feneri, telsiz ve gaz dedektörü kendinden emniyetli (Ex i) olmalı." },

    // SEKTÖR
    { id: "isgott", layer: "END", code: "ISGOTT (6. baskı)", title: "Petrol tankerleri ve terminaller için uluslararası emniyet rehberi",
      desc: "OCIMF/ICS/IAPH rehberi. H2S, benzen, yanıcı atmosfer, sıcak iş, kapalı alan ve tanker güvertesinde KKD." },
    { id: "meg4", layer: "END", code: "OCIMF MEG4", title: "Bağlama donanımı rehberi (Mooring Equipment Guidelines)",
      desc: "Bağlama düzeni, halat yönetimi, snap-back bölgesi, bağlama ekibi güvenliği." },
    { id: "coswp", layer: "END", code: "UK MCA — COSWP", title: "Code of Safe Working Practices for Merchant Seafarers",
      desc: "İngiliz Denizcilik Ajansı'nın gemide güvenli çalışma kodu; KKD, yüksekte/borda dışında çalışma, kapalı alan, bağlama vb. İngiliz bayraklı gemilerde esas alınır, diğerlerinde iyi uygulama kabul edilir." }
  ],

  /* ---------------- EKİPMAN ---------------- */
  // group: baş, göz, kulak, solunum, el, ayak, vücut, düşme, can, ölçüm, yangın
  equipment: [
    { id: "ayakkabi", group: "Ayak", name: "Emniyet ayakkabısı / botu",
      specs: [
        "Burun koruması: 200 J darbe ve 15 kN ezilme dayanımı (çelik, alüminyum veya kompozit)",
        "Güverte için en az S3 önerilir: kapalı topuk, antistatik (A), topukta enerji emme (E), su geçirmeyen saya, çivi delinmesine dayanım ve profilli (dişli) taban",
        "Kaymazlık 2022 sürümünde temel şart; ıslak/yağlı güverte için ek SR işareti (gliserinli zeminde test) aranmalı",
        "Yağ ve yakıta dayanıklı taban: FO işareti (2022'de ayrıca işaretlenir)",
        "Delinme koruması türü: P (metal), PL (metal olmayan, kalın çivi), PS (metal olmayan, ince çivi — daha yüksek)",
        "Tamamen su geçirmez ayakkabı: S6 (S2+WR) veya S7 (S3+WR)",
        "Makine dairesi: tabanda sıcak temas dayanımı HRO; elektrik işleri için antistatik değil yalıtkan ayakkabı (EN 50321) gerekir",
        "Bilek desteği ve bağcıkla sıkı oturma; terlik veya açık ayakkabı ile güvertede çalışılmaz"
      ],
      rules: ["en-iso-20345", "mlc-4-3", "tr-kkd-kullanim", "eu-2016-425", "coswp"],
      note: "Eski (2011) sürümde kaymazlık SRA/SRB/SRC ile işaretlenirdi. Piyasada iki sürüm de görülebilir; etiketteki standart yılına bakın." },

    { id: "mesleki-ayakkabi", group: "Ayak", name: "Mutfak / kamarot ayakkabısı",
      specs: [
        "Kaymaz taban (ıslak ve yağlı zemin), SR işareti tercih edilir",
        "Kapalı topuk ve burun, sıcak sıvı sıçramasına karşı kapalı üst",
        "Düşen ağır cisim riski varsa burun korumalı emniyet ayakkabısı (EN ISO 20345) kullanılır"
      ],
      rules: ["en-iso-20347", "en-iso-20345", "mlc-4-3"], note: "" },

    { id: "baret", group: "Baş", name: "Baret (endüstriyel kask)",
      specs: [
        "EN 397 belgeli; darbe emme ve delinme dayanımı",
        "Ayarlanabilir iç kafes ve ter bandı",
        "Güverte ve ambar işlerinde çene kayışı takılı olmalı; rüzgârda ve eğilerek çalışırken düşmemeli",
        "Soğuk iklimde -20/-30 °C işareti, elektrik yakınında 440 V AC işareti",
        "Gece çalışması ve kişi kaybında görünürlük için açık renk ve yansıtıcı şerit önerilir",
        "Çatlak, derin çizik, kireçlenme veya darbe almış baret değiştirilir; kullanım ömrü üretici etiketindedir"
      ],
      rules: ["en-397", "mlc-4-3", "tr-kkd-kullanim", "eu-2016-425", "coswp"], note: "" },

    { id: "kask-yuksek", group: "Baş", name: "Yüksekte çalışma kaskı (çene kayışlı)",
      specs: [
        "EN 12492 (dağcı tipi) veya çene kayışlı EN 397",
        "Çene kayışı düşme anında kaskın çıkmasını önlemeli",
        "Direk, vinç, ambar kapağı üstü ve borda dışı işlerde"
      ],
      rules: ["en-12492", "en-397", "ilo-cop-ship"], note: "" },

    { id: "baret-elektrik", group: "Baş", name: "Elektrik yalıtımlı baret",
      specs: ["EN 50365 Sınıf 0 (1000 V AC'ye kadar)", "Metal parça içermez, havalandırma deliği yoktur"],
      rules: ["en-50365"], note: "" },

    { id: "gozluk", group: "Göz ve yüz", name: "Koruyucu gözlük",
      specs: [
        "EN 166 belgeli; çapak ve kıvılcım için en az F (düşük enerji darbe) işareti",
        "Kimyasal sıçrama için kapalı tip (goggle) ve 3 işareti",
        "İnce toz ve gaz için 5 işareti; raspa tozu için 4",
        "N (buğulanma önleyici) ve K (çizilme önleyici) işareti tercih edilir",
        "Gözlük kullananlar için numaralı gözlük üstüne takılan model"
      ],
      rules: ["en-166", "mlc-4-3", "tr-kkd-kullanim"], note: "" },

    { id: "yuz-siperi", group: "Göz ve yüz", name: "Yüz siperi",
      specs: [
        "EN 166; taşlama ve kesmede B (orta enerji) veya A (yüksek enerji) darbe dayanımı",
        "Kimyasal transferde sıvı sıçramasına karşı (3 işareti) ve gözlükle birlikte",
        "Elektrik arkı için 8 işareti olan ark siperi"
      ],
      rules: ["en-166", "ibc-14"], note: "Yüz siperi tek başına göz koruyucu yerine geçmez; taşlamada altına gözlük takılır." },

    { id: "kaynak-maskesi", group: "Göz ve yüz", name: "Kaynak maskesi",
      specs: [
        "Gövde EN 175, filtre EN 169 (sabit) veya EN 379 (otomatik kararan)",
        "Koyuluk numarası işe göre: elektrot kaynağında akım arttıkça yükselir (genelde 10–13); gaz kesmede daha düşük",
        "Maskenin altına koruyucu gözlük (cüruf temizlerken)",
        "Kaynakçının yanındaki yardımcı da uygun filtreli gözlük veya maske kullanır"
      ],
      rules: ["en-175", "en-166", "msc-circ-1321", "ilo-cop-ship"], note: "" },

    { id: "kulak", group: "Kulak", name: "Kulak koruyucu (tıkaç / manşon)",
      specs: [
        "EN 352-1 manşon, EN 352-2 tıkaç, EN 352-3 barete takılan manşon",
        "SNR değeri ortam gürültüsüne göre seçilir; aşırı koruma iletişimi ve alarmı duymayı engeller",
        "85 dB(A) üzeri mahallerde kullanım zorunlu (makine dairesi, jeneratör, kompresör, pompa dairesi)",
        "Çok yüksek gürültüde tıkaç ve manşon birlikte (çift koruma)",
        "Tıkaçlar temiz elle takılır; tek kullanımlıklar tekrar kullanılmaz"
      ],
      rules: ["en-352", "noise-code", "eu-2003-10", "tr-gurultu", "mlc-4-3"], note: "" },

    { id: "toz-maskesi", group: "Solunum", name: "Toz maskesi (FFP)",
      specs: [
        "EN 149: raspa, zımpara, kum püskürtme dışı toz işleri için en az FFP2",
        "Kurşun içerikli boya, asbest şüphesi, kaynak dumanı ve ince toz için FFP3",
        "Sakal maskenin yüze oturmasını engeller; sızdırmazlık kontrolü yapılır",
        "Nefes almak zorlaşınca veya ıslanınca değiştirilir",
        "Gaz ve buhara karşı KORUMAZ"
      ],
      rules: ["en-149", "imsbc-3", "tr-kkd-kullanim", "eu-2016-425"], note: "Kategori III KKD'dir; kullanıcı eğitimi gerekir." },

    { id: "gaz-maskesi", group: "Solunum", name: "Gaz/buhar filtreli maske",
      specs: [
        "Yarım yüz EN 140 veya tam yüz EN 136 + EN 14387 filtre",
        "Boya ve solventler için A (kahverengi) filtre; toz da varsa A2P2 / A2P3 kombine",
        "Amonyak (soğutma, gübre yükü) için K (yeşil), SO2 için E (sarı)",
        "Oksijeni yetersiz ortamda veya bilinmeyen gaz konsantrasyonunda KORUMAZ — kapalı alanda kullanılmaz",
        "Filtre ömrü sınırlıdır; koku/tat hissedilirse ortamı terk et ve filtreyi değiştir"
      ],
      rules: ["en-14387", "en-140-136", "tr-kimyasal", "eu-2016-425"], note: "" },

    { id: "scba", group: "Solunum", name: "Solunum cihazı (SCBA)",
      specs: [
        "EN 137 basınçlı hava solunum cihazı, EN 136 tam yüz maske",
        "İtfaiyeci teçhizatındaki cihaz: en az 1200 litre serbest hava, en az 30 dakika kullanım (FSS Code Bölüm 3)",
        "Düşük basınç uyarı düdüğü, basınç göstergesi",
        "Kullanmadan önce silindir basıncı ve maske sızdırmazlığı kontrolü",
        "Kapalı alanda kurtarma ve oksijen yetersiz ortam için tek uygun solunum koruması"
      ],
      rules: ["fss-3", "solas-ii2-10-10", "en-137", "en-140-136", "msc-581"], note: "Yedek silindirler ve doldurma: SOLAS II-2/10.10.3." },

    { id: "eebd", group: "Solunum", name: "EEBD (acil kaçış solunum cihazı)",
      specs: [
        "En az 10 dakika hava sağlar (FSS Code Bölüm 3)",
        "Başlıklı (hood) tip; göz ve yüzü kaplar",
        "Sadece KAÇIŞ içindir; yangınla mücadelede, oksijeni yetersiz tank veya boşluğa girmede kullanılmaz",
        "Yaşam mahallerinde ve makine mahallerinde belirlenen yerlerde bulunur; yerleri yangın planında gösterilir",
        "Tatbikatlarda yedek eğitim cihazı kullanılır"
      ],
      rules: ["solas-ii2-13", "fss-3", "msc-circ-849", "iso-23269", "eu-2014-90", "tr-gemi-techizati"], note: "Kimyasal ve gaz tankerlerinde yük gazına karşı kaçış solunum koruması ayrıca istenir (IBC/IGC Bölüm 14)." },

    { id: "eldiven-mekanik", group: "El", name: "İş eldiveni (mekanik)",
      specs: [
        "EN 388; halat, tel halat ve zincir işinde yüksek aşınma (3–4) ve yırtılma dayanımı",
        "Tel halat ve sac işinde kesilme dayanımı (ISO 13997 C ve üstü önerilir)",
        "Islak güvertede kavrama için nitril veya kauçuk kaplı avuç",
        "Bağlama halatında ve vinç tamburunda bol eldiven dönen parçaya kapılabilir; ele tam oturan model",
        "Darbe korumalı (P) eldiven: ağır parça ve yük işlerinde"
      ],
      rules: ["en-388", "mlc-4-3", "tr-kkd-kullanim", "ilo-cop-ship"], note: "Torna, matkap gibi dönen tezgâhlarda eldiven takılmaz (kapılma riski)." },

    { id: "eldiven-kimyasal", group: "El", name: "Kimyasal eldiven",
      specs: [
        "EN ISO 374-1 Tip A veya B; malzeme kimyasala göre seçilir (nitril, neopren, bütil, viton)",
        "Kimyasal tankerde uzun konçlu (dirsek altına kadar) — IBC Code Bölüm 14",
        "Seçim yükün SDS'indeki (Güvenlik Bilgi Formu) eldiven bilgisine göre yapılır",
        "Kullanmadan önce delik kontrolü, çıkarırken dış yüzeye dokunmadan"
      ],
      rules: ["en-iso-374", "ibc-14", "tr-kimyasal", "eu-2016-425"], note: "" },

    { id: "eldiven-isi", group: "El", name: "Isıya dayanıklı / kaynakçı eldiveni",
      specs: [
        "Kaynak: EN 12477 Tip A (elektrot, gaz altı) veya Tip B (TIG)",
        "Sıcak parça, buhar hattı ve egzoz işleri: EN 407 temas ısısı seviyesine göre",
        "Uzun konçlu, deri"
      ],
      rules: ["en-12477", "en-407", "msc-circ-1321"], note: "" },

    { id: "eldiven-elektrik", group: "El", name: "Elektrik yalıtım eldiveni",
      specs: [
        "EN 60903 (IEC 60903); gemideki 440 V / 690 V sistemlerde en az Sınıf 0 (1000 V AC)",
        "Yüksek gerilim sistemlerinde (3,3 kV, 6,6 kV) sistem gerilimine uygun sınıf",
        "Üstüne mekanik koruma için deri eldiven",
        "Her kullanımdan önce şişirme testi; periyodik elektriksel test tarihi eldivende"
      ],
      rules: ["en-60903", "ilo-cop-ship", "tr-kkd-kullanim"], note: "" },

    { id: "eldiven-soguk", group: "El", name: "Soğuğa karşı eldiven",
      specs: ["EN 511; konvektif ve temas soğuğu seviyesi", "Su geçirmez (EN 511 üçüncü rakam 1)", "Kriyojenik yük (LNG) için ayrıca kriyojenik eldiven"],
      rules: ["en-511", "polar-code", "igc-14"], note: "" },

    { id: "eldiven-zincir", group: "El", name: "Zincir örgü / kesilmez mutfak eldiveni",
      specs: ["Et ve balık kesiminde EN 1082-1 zincir örgü eldiven", "Genel mutfakta EN 388 yüksek kesilme dayanımlı eldiven", "Fırın ve sıcak tencere için EN 407"],
      rules: ["en-1082", "en-388", "en-407", "mlc-4-3"], note: "" },

    { id: "tulum", group: "Vücut", name: "İş tulumu",
      specs: [
        "EN ISO 13688 genel şartlar; tek parça, kolları ve paçaları dar veya bağlanabilir",
        "Makine dairesi ve tanker için alev yayılımı sınırlı (EN ISO 14116) veya aleve dayanıklı (EN ISO 11612) pamuklu kumaş önerilir",
        "Sentetik (polyester ağırlıklı) kumaş erir ve yapışır — sıcak yüzey ve yangın riski olan yerlerde kullanılmaz",
        "Tanker güvertesi ve patlayıcı ortamda antistatik (EN 1149-5)",
        "Yansıtıcı şeritler (gece ve denize düşme durumunda görünürlük)",
        "Yağ veya yakıta bulanmış tulum hemen değiştirilir (yanma ve cilt riski)"
      ],
      rules: ["en-iso-13688", "en-iso-11612", "en-iso-14116", "en-1149-5", "mlc-4-3", "tr-kkd-kullanim"], note: "" },

    { id: "kaynak-giysisi", group: "Vücut", name: "Kaynakçı giysisi / önlüğü",
      specs: ["EN ISO 11611 Sınıf 1 veya Sınıf 2 (elektrot, gaz altı ve kesmede Sınıf 2)", "Deri önlük, kolluk ve tozluk", "Cep kapakları kapalı; kıvılcım içeri girmemeli", "Çakmak veya yanıcı eşya cepte taşınmaz"],
      rules: ["en-iso-11611", "msc-circ-1321"], note: "" },

    { id: "kimyasal-tulum", group: "Vücut", name: "Kimyasal koruyucu giysi",
      specs: [
        "Yüke göre tip: sıçrama Tip 6 (EN 13034), sprey Tip 4, sıvı jeti Tip 3 (EN 14605), gaz geçirmez Tip 1 (EN 943)",
        "Kimyasal tankerde büyük önlük + uzun konçlu eldiven + uygun ayakkabı + gözlük/siper (IBC Code Bölüm 14)",
        "Seçim yükün SDS bilgisine göre",
        "Kullanım sonrası dekontaminasyon"
      ],
      rules: ["en-chem-suit", "ibc-14", "igc-14", "tr-kimyasal", "eu-2016-425"], note: "" },

    { id: "ark-giysi", group: "Vücut", name: "Elektrik arkına karşı giysi",
      specs: ["IEC 61482-2; panoda enerji altında çalışma veya şalt işlemlerinde", "Ark siperi (EN 166, 8 işareti) ve yalıtım eldiveniyle birlikte", "Sentetik iç çamaşır giyilmez"],
      rules: ["en-iec-61482", "en-166", "en-60903"], note: "Mümkünse enerji kesilip kilitlenir (lock-out/tag-out); arka karşı giysi son çaredir." },

    { id: "yelek-gorunur", group: "Vücut", name: "Yüksek görünürlük yeleği",
      specs: ["EN ISO 20471 Sınıf 2 veya 3", "Rıhtımda, terminal sahasında, RoRo güvertesinde ve araç/forklift trafiği olan yerlerde", "Gece işlerinde mutlaka"],
      rules: ["en-iso-20471", "ilo-cop-ports"], note: "" },

    { id: "yagmurluk", group: "Vücut", name: "Yağmurluk / kötü hava giysisi",
      specs: ["EN 343; su geçirmezlik sınıfı 3–4 önerilir", "Kapüşon görüşü ve duymayı kapatmamalı", "Yüksek görünürlük renk ve yansıtıcı bant"],
      rules: ["en-343", "mlc-4-3"], note: "" },

    { id: "soguk-giysi", group: "Vücut", name: "Soğuk hava giysisi",
      specs: ["EN 342; -5 °C altı ortamlar", "Katmanlı giyim, rüzgâr geçirmez dış katman", "Kutup sularında Polar Code'a göre kişisel hayatta kalma ekipmanı", "Başlık/bere ve yüz koruması"],
      rules: ["en-342", "polar-code"], note: "" },

    { id: "kemer", group: "Düşme", name: "Tam vücut emniyet kemeri ve lanyard",
      specs: [
        "EN 361 tam vücut kemeri (sadece bel kemeri düşüş durdurmada kullanılmaz)",
        "EN 355 enerji sönümleyicili lanyard veya EN 360 geri sarmalı düşüş durdurucu",
        "EN 362 kilitli karabina; çift lanyard ile sürekli bağlı kalma (%100 tie-off)",
        "Sağlam ankraj noktası (EN 795) ve serbest düşüş mesafesi hesabı",
        "Her kullanım öncesi görsel kontrol; düşüş yaşamış kemer servis dışı",
        "Kurtarma planı hazır olmalı (askıda kalma travması dakikalar içinde tehlikelidir)"
      ],
      rules: ["en-fall", "ilo-cop-ship", "coswp", "mlc-4-3", "eu-2016-425"], note: "Yaygın uygulamada 2 m ve üzeri yükseklik ‘yüksekte çalışma’ sayılır; sınırı şirket SMS'i belirler." },

    { id: "can-yelegi", group: "Can kurtarma", name: "Can yeleği (SOLAS)",
      specs: [
        "LSA Code 2.2 onaylı; baygın kişiyi yüzü yukarı çevirir",
        "Işık ve düdük takılı; retroreflektif bant (A.658(16))",
        "Her kişi için bir adet + vardiya yerleri ve uzak can salı istasyonları için ek",
        "Yük gemilerinde kamarada ve toplanma yerinde erişilebilir",
        "AB/Türk bayraklı gemilerde onay (dümen işareti / uygunluk işareti)"
      ],
      rules: ["solas-iii-7", "lsa-2", "a658", "eu-2014-90", "tr-gemi-techizati"], note: "" },

    { id: "calisma-yelegi", group: "Can kurtarma", name: "Çalışma yeleği / şişme can yeleği",
      specs: [
        "Borda dışında, pilot transferinde, botla çalışmada",
        "ISO 12402-3 (150 N) önerilir; otomatik şişen tip hareket kolaylığı sağlar",
        "Şişirme kartuşu ve otomatik tetik tarihi kontrol edilir",
        "Emniyet kemeriyle birlikte kullanılabilir model"
      ],
      rules: ["iso-12402", "coswp", "ilo-cop-ship", "solas-v-23"], note: "Gemideki SOLAS can yeleklerinin yerine sayılmaz." },

    { id: "daldirma", group: "Can kurtarma", name: "Daldırma elbisesi (immersion suit)",
      specs: [
        "LSA Code 2.3 onaylı; yük gemilerinde gemideki her kişi için uygun beden",
        "Yardımsız 2 dakikada giyilebilmeli",
        "Işık, düdük, kaldırma halkası (buddy line) ve retroreflektif bant",
        "Aylık kontrol: fermuar, dikiş, ışık pili, beden (MSC/Circ.1047)",
        "Uzak vardiya yerleri için ek elbise"
      ],
      rules: ["solas-iii-7", "lsa-2", "msc-circ-1047", "a658", "eu-2014-90"], note: "" },

    { id: "gaz-dedektor", group: "Ölçüm", name: "Kişisel / taşınabilir gaz dedektörü",
      specs: [
        "Dört gaz: O2, yanıcı gaz (LEL), H2S, CO (SOLAS XI-1/7)",
        "Kapalı alanda giriş öncesi ölçüm + içeride sürekli takılı kişisel dedektör",
        "Patlayıcı ortama uygun (ATEX / IECEx kendinden emniyetli)",
        "Kullanmadan önce bump test, üretici aralığında kalibrasyon kaydı",
        "Tankerlerde ayrıca yüke göre toksik gaz (benzen vb.) ölçümü ve tank atmosferi için hidrokarbon/inert gaz ölçeri"
      ],
      rules: ["solas-xi1-7", "msc-circ-1477", "msc-581", "atex", "isgott"], note: "" },

    { id: "itfaiyeci", group: "Yangın", name: "İtfaiyeci teçhizatı (fireman's outfit)",
      specs: [
        "Koruyucu giysi: ısı radyasyonu, yanma ve buhar haşlanmasına karşı; dış yüzeyi su geçirmez",
        "Çizme: kauçuk veya elektrik iletmeyen malzeme",
        "Sert kask (darbeye karşı)",
        "Onaylı tip emniyetli elektrikli el feneri (en az 3 saat yanma)",
        "Yalıtımlı saplı yangın baltası",
        "Solunum cihazı (SCBA, en az 1200 L / 30 dk) ve yangına dayanıklı can halatı",
        "Her yangın ekibine en az 2 adet iki yönlü telsiz (tankerlerde kendinden emniyetli)",
        "Yük gemilerinde en az 2 takım; yedek hava silindirleri"
      ],
      rules: ["solas-ii2-10-10", "fss-3", "en-469", "en-137", "eu-2014-90", "tr-gemi-techizati"], note: "EN 469 / 15090 / 443 / 659 karada itfaiye standartlarıdır; gemide onay esası FSS Code ve bayrak devleti onayıdır." },

    { id: "fener", group: "Ölçüm", name: "Ex korumalı el feneri ve telsiz",
      specs: ["Kendinden emniyetli (Ex i) — tanker güvertesi, pompa dairesi, yakıt tankı, kapalı alan", "Yedek pil", "Telsiz kanal planı işe başlamadan önce kararlaştırılır"],
      rules: ["atex", "solas-ii2-10-10", "isgott"], note: "" }
  ],

  /* ---------------- İŞLER ---------------- */
  // need: "temel" = bu işte her zaman; "duruma" = koşula göre
  jobs: [
    { id: "guverte-genel", area: "Güverte", name: "Güverte genel işleri ve vardiya",
      desc: "Güvertede rutin bakım, tur, ekipman taşıma, temizlik.",
      hazards: ["Kayma ve düşme", "Düşen cisim", "Hava koşulları", "Hareketli güverte"],
      items: [
        { eq: "ayakkabi", need: "temel" }, { eq: "baret", need: "temel" }, { eq: "tulum", need: "temel" },
        { eq: "eldiven-mekanik", need: "temel" }, { eq: "gozluk", need: "duruma", why: "Kesme, temizlik kimyasalı, rüzgârla gelen toz" },
        { eq: "yagmurluk", need: "duruma", why: "Yağmur ve deniz suyu" }, { eq: "soguk-giysi", need: "duruma", why: "Soğuk hava" }
      ],
      rules: ["mlc-4-3", "ism", "tr-kkd-kullanim", "tr-6331", "coswp"],
      notes: ["Kötü havada güverteye çıkış köprüüstünün bilgisi ve izniyle; can halatları gerilmiş olmalı."] },

    { id: "baglama", area: "Güverte", name: "Halat, bağlama ve demirleme",
      desc: "Rıhtıma yanaşma/ayrılma, halat verme ve alma, ırgat ve demir işleri.",
      hazards: ["Halatın kopup geri tepmesi (snap-back)", "Ele ve giysiye kapılma (ırgat, tambur)", "Zincir ve pas tozu", "Gürültü"],
      items: [
        { eq: "ayakkabi", need: "temel" }, { eq: "baret", need: "temel", why: "Çene kayışı takılı" }, { eq: "tulum", need: "temel", why: "Bol ve sarkan yer olmamalı" },
        { eq: "eldiven-mekanik", need: "temel", why: "Ele tam oturan; tel halatta kesilme dayanımlı" },
        { eq: "gozluk", need: "temel", why: "Demir atarken pas, çamur ve zincir parçacıkları" },
        { eq: "kulak", need: "duruma", why: "Irgat ve demir boşaltırken" }, { eq: "yelek-gorunur", need: "duruma", why: "Gece ve kötü görüşte" }
      ],
      rules: ["solas-ii1-3-8", "msc-circ-1620", "meg4", "ilo-cop-ship", "coswp", "mlc-4-3"],
      notes: ["Snap-back bölgesinde durulmaz; bölgeler güvertede işaretli olsa bile tamamı işaretlenemez.", "Yüzük, saat, zincir kolye takılmaz; bol eldiven ve atkı kullanılmaz.", "Halat elle tambura sarılırken el tamburdan uzak tutulur."] },

    { id: "raspa-boya", area: "Güverte", name: "Raspa, pas kazıma ve boya",
      desc: "El aletiyle veya pnömatik/elektrikli aletle pas kazıma, zımpara, fırça/rulo/püskürtme boya.",
      hazards: ["Göze çapak ve pas", "Toz", "Solvent buharı", "Gürültü ve titreşim", "Yangın (boya buharı)"],
      items: [
        { eq: "ayakkabi", need: "temel" }, { eq: "tulum", need: "temel" }, { eq: "eldiven-mekanik", need: "temel" },
        { eq: "gozluk", need: "temel", why: "Kapalı tip, F işaretli" }, { eq: "yuz-siperi", need: "duruma", why: "Pnömatik raspa ve taşlamada gözlüğün üstüne" },
        { eq: "toz-maskesi", need: "temel", why: "Raspa ve zımparada en az FFP2" }, { eq: "gaz-maskesi", need: "duruma", why: "Boya, özellikle kapalı ve dar yerlerde (A filtre)" },
        { eq: "kulak", need: "temel", why: "Pnömatik raspa çekici çok gürültülüdür" }, { eq: "eldiven-kimyasal", need: "duruma", why: "Tiner, epoksi ve iki bileşenli boyalarda" },
        { eq: "baret", need: "duruma", why: "Üstte çalışma veya yük hareketi varsa" }
      ],
      rules: ["ilo-cop-ship", "coswp", "tr-kimyasal", "tr-gurultu", "eu-2003-10", "mlc-4-3"],
      notes: ["Kapalı alanda boya: kapalı alana giriş prosedürü ve sürekli havalandırma şart.", "Boyanın SDS'i (Güvenlik Bilgi Formu) okunur; filtre türü ona göre seçilir."] },

    { id: "yuksekte", area: "Güverte", name: "Yüksekte çalışma (aloft)",
      desc: "Direk, vinç bumbası, ambar kapağı üstü, konteyner üstü, makine dairesi üst platformları.",
      hazards: ["Düşme", "Alet ve malzeme düşürme", "Rüzgâr ve gemi hareketi", "Radar ve anten radyasyonu"],
      items: [
        { eq: "kemer", need: "temel" }, { eq: "kask-yuksek", need: "temel" }, { eq: "ayakkabi", need: "temel" },
        { eq: "tulum", need: "temel" }, { eq: "eldiven-mekanik", need: "temel" }, { eq: "gozluk", need: "duruma" }
      ],
      rules: ["en-fall", "ilo-cop-ship", "coswp", "ism", "mlc-4-3"],
      notes: ["Çalışma izni (permit) ve risk değerlendirmesi; yerde gözcü.", "Radar ve telsiz antenleri yakınında çalışmadan önce cihazlar kapatılıp etiketlenir.", "Aletler bilek ipiyle bağlanır; altındaki alan boşaltılır."] },

    { id: "borda-disi", area: "Güverte", name: "Borda dışında çalışma (overside)",
      desc: "Bordada asılı iskele veya sepette boya, kaynak, bakım; borda iskelesi ile iniş.",
      hazards: ["Denize düşme", "Yüksekten düşme", "Dalga ve yüzer cisimler", "Pervane ve kinistin emişi"],
      items: [
        { eq: "calisma-yelegi", need: "temel" }, { eq: "kemer", need: "temel", why: "Ayrı bir can halatına bağlı" },
        { eq: "kask-yuksek", need: "temel" }, { eq: "ayakkabi", need: "temel" }, { eq: "tulum", need: "temel" }, { eq: "eldiven-mekanik", need: "temel" }
      ],
      rules: ["ilo-cop-ship", "coswp", "iso-12402", "en-fall", "ism"],
      notes: ["Güvertede gözcü ve yanında hazır can simidi (ışık ve halatlı).", "Seyir halinde borda dışında çalışılmaz; makine ve pervane kilitlenir, kinistinler kontrol edilir."] },

    { id: "kapali-alan", area: "Güverte", name: "Kapalı alana giriş",
      desc: "Ambar, tank (balast, yakıt, yük, tatlı su), koferdam, boşluk, zincirlik, pompa dairesi, kazan içi.",
      hazards: ["Oksijen yetersizliği", "Zehirli gaz (H2S, CO)", "Yanıcı atmosfer", "Kurtarmanın zorluğu"],
      items: [
        { eq: "gaz-dedektor", need: "temel", why: "Giriş öncesi ölçüm + içeride kişisel dedektör" },
        { eq: "scba", need: "temel", why: "Girişte kurtarma ekibi için hazır; atmosfer emniyetli değilse girişte kullanılır" },
        { eq: "fener", need: "temel" }, { eq: "baret", need: "temel" }, { eq: "ayakkabi", need: "temel" }, { eq: "tulum", need: "temel" },
        { eq: "eldiven-mekanik", need: "temel" }, { eq: "kemer", need: "duruma", why: "Dikey girişte kurtarma halatı ile" },
        { eq: "eebd", need: "duruma", why: "Bazı şirketler girişte kaçış için taşıtır" }
      ],
      rules: ["msc-581", "solas-xi1-7", "msc-circ-1477", "ism", "mlc-4-3", "imsbc-3", "isgott"],
      notes: ["Giriş izni (permit), havalandırma, ölçüm, girişte nöbetçi ve iletişim planı şart.", "Filtreli maske (toz veya gaz) kapalı alanda koruma SAĞLAMAZ.", "Kurtarmaya giden kişi solunum cihazı olmadan girmez; ölümlerin önemli kısmı kurtarmaya girenlerdir.", "Kapalı alana giriş ve kurtarma tatbikatı en az iki ayda bir (SOLAS III/19)."] },

    { id: "sicak-is", area: "Makine", name: "Sıcak iş: kaynak, kesme, taşlama",
      desc: "Elektrik ark kaynağı, gaz kaynağı ve kesme, avuç taşlama, kıvılcım çıkaran her iş.",
      hazards: ["Yangın ve patlama", "Göz yanığı (ark)", "Kaynak dumanı", "Elektrik çarpması", "Kıvılcım ve sıcak cüruf"],
      items: [
        { eq: "kaynak-maskesi", need: "temel", why: "Kaynakta" }, { eq: "yuz-siperi", need: "temel", why: "Taşlamada, altında gözlükle" },
        { eq: "gozluk", need: "temel" }, { eq: "kaynak-giysisi", need: "temel" }, { eq: "eldiven-isi", need: "temel" },
        { eq: "ayakkabi", need: "temel", why: "Bağcıklı, kıvılcım girmeyen; tozluk" }, { eq: "toz-maskesi", need: "temel", why: "Kaynak dumanı için FFP3 veya duman emiş" },
        { eq: "kulak", need: "duruma", why: "Taşlamada" }, { eq: "gaz-dedektor", need: "temel", why: "Çalışma alanı ve çevresinde yanıcı gaz ölçümü" }
      ],
      rules: ["msc-circ-1321", "isgott", "en-iso-11611", "en-175", "en-12477", "ism", "ilo-cop-ship"],
      notes: ["Sıcak iş izni, yangın gözcüsü (iş bitiminden sonra da bir süre) ve hazır yangın söndürücü.", "Bölmenin arka tarafı da kontrol edilir; ısı perdeden geçer.", "Tankerde sıcak iş için ayrıca ISGOTT ve şirket prosedürü."] },

    { id: "makine", area: "Makine", name: "Makine dairesi vardiya ve bakım",
      desc: "Ana ve yardımcı makine, pompa, separatör, kazan, kompresör bakımı ve vardiya turu.",
      hazards: ["Gürültü", "Sıcak yüzey ve buhar", "Yakıt/yağ kaçağı ve yangın", "Dönen parçalar", "Kayma"],
      items: [
        { eq: "kulak", need: "temel", why: "85 dB(A) üstü" }, { eq: "ayakkabi", need: "temel", why: "Yağa dayanıklı (FO), HRO tercih" },
        { eq: "tulum", need: "temel", why: "Pamuklu, alev geciktirici; sentetik değil" }, { eq: "baret", need: "temel" },
        { eq: "gozluk", need: "temel" }, { eq: "eldiven-mekanik", need: "duruma", why: "Dönen tezgâhta eldiven takılmaz" },
        { eq: "eldiven-isi", need: "duruma", why: "Sıcak parça ve buhar hattı" }, { eq: "eldiven-kimyasal", need: "duruma", why: "Kimyasal temizleyici, kazan suyu kimyasalları, akü asidi" },
        { eq: "eebd", need: "duruma", why: "Yangında kaçış için yerleri bilinmeli" }
      ],
      rules: ["noise-code", "eu-2003-10", "tr-gurultu", "msc-circ-1321", "solas-ii2-13", "mlc-4-3", "ilo-cop-ship"],
      notes: ["Basınçlı sistemlerde iş öncesi basınç alınır, valfler kilitlenir ve etiketlenir.", "Separatör ve pürifikatör açılmadan önce tamamen durmuş olmalı."] },

    { id: "elektrik", area: "Makine", name: "Elektrik işleri",
      desc: "Pano, motor, jeneratör, aydınlatma; alçak ve yüksek gerilim sistemleri.",
      hazards: ["Elektrik çarpması", "Ark yanığı", "Islak ortam"],
      items: [
        { eq: "eldiven-elektrik", need: "temel", why: "Enerji altında veya enerjisizliği doğrulanmamış devrede" },
        { eq: "baret-elektrik", need: "duruma" }, { eq: "ark-giysi", need: "duruma", why: "Pano içinde enerji altında / şalt" },
        { eq: "yuz-siperi", need: "duruma", why: "Ark siperi (8 işareti)" }, { eq: "gozluk", need: "temel" },
        { eq: "ayakkabi", need: "temel", why: "Yalıtkan taban (EN 50321) — antistatik ayakkabı yalıtkan değildir" }
      ],
      rules: ["en-60903", "en-iec-61482", "en-50365", "ilo-cop-ship", "ism"],
      notes: ["Esas önlem: enerji kesme, kilitleme ve etiketleme (lock-out / tag-out) ve gerilim yokluğunun ölçülmesi.", "Yüzük ve metal takı çıkarılır."] },

    { id: "lashing", area: "Yük", name: "Konteyner bağlama (lashing) ve yük işleri",
      desc: "Lashing rodu, turnbuckle, twistlock işleri; vinçle yükleme ve boşaltma sırasında güvertede çalışma.",
      hazards: ["Düşen yük ve ekipman", "Ağır lashing rodu ile ezilme/sırt", "Konteyner arasında düşme", "Vinç ve araç trafiği"],
      items: [
        { eq: "baret", need: "temel", why: "Çene kayışlı" }, { eq: "ayakkabi", need: "temel" }, { eq: "eldiven-mekanik", need: "temel", why: "Darbe korumalı (P) tercih" },
        { eq: "yelek-gorunur", need: "temel" }, { eq: "tulum", need: "temel" }, { eq: "gozluk", need: "duruma" },
        { eq: "kemer", need: "duruma", why: "Konteyner üstünde veya lashing köprüsünde kenar açıksa" }
      ],
      rules: ["css-code", "ilo-cop-ports", "ilo-cop-ship", "en-iso-20471", "coswp"],
      notes: ["Asılı yükün altında durulmaz; vinç operatörüyle göz teması veya telsiz.", "Lashing rodu iki kişiyle veya uygun yöntemle kaldırılır."] },

    { id: "dokme", area: "Yük", name: "Dökme yük, ambar ve fumigasyon",
      desc: "Ambar temizliği, dökme yük yükleme-boşaltma, ambar kapakları, fumige edilmiş yük.",
      hazards: ["Toz", "Oksijen yetersizliği (oksitlenen yükler: kömür, demir cevheri, hurda, ağaç ürünleri)", "Zehirli fumigant (fosfin vb.)", "Ambar kapağı hareketi"],
      items: [
        { eq: "toz-maskesi", need: "temel", why: "Toz çıkaran yüklerde FFP2/FFP3" }, { eq: "gozluk", need: "temel", why: "Kapalı tip" },
        { eq: "baret", need: "temel" }, { eq: "ayakkabi", need: "temel" }, { eq: "tulum", need: "temel" }, { eq: "eldiven-mekanik", need: "temel" },
        { eq: "gaz-dedektor", need: "temel", why: "Ambara inmeden önce; fumigasyonda fumigant ölçer" },
        { eq: "scba", need: "duruma", why: "Fumigasyonda ve atmosferi şüpheli ambarda" }
      ],
      rules: ["imsbc-3", "msc-circ-1264", "msc-581", "solas-xi1-7", "ilo-cop-ship"],
      notes: ["Ambar kapalı kalmışsa kapalı alan sayılır; merdiven ağzı (access hatch) da dahil.", "Fumigasyonda uyarı levhaları, düzenli ölçüm ve yaşam mahallerine gaz sızıntısı kontrolü."] },

    { id: "petrol-tanker", area: "Tanker", name: "Petrol tankeri yük operasyonları",
      desc: "Yükleme, boşaltma, tank yıkama, ullage alma, numune alma, manifold bağlantısı.",
      hazards: ["Yanıcı atmosfer", "H2S ve benzen", "Statik elektrik", "Basınç altındaki hortum ve manifold"],
      items: [
        { eq: "tulum", need: "temel", why: "Antistatik, alev geciktirici" }, { eq: "ayakkabi", need: "temel", why: "Antistatik, yağa dayanıklı" },
        { eq: "baret", need: "temel" }, { eq: "gozluk", need: "temel" }, { eq: "eldiven-kimyasal", need: "temel", why: "Ham petrol ve ürün teması" },
        { eq: "gaz-dedektor", need: "temel", why: "Kişisel H2S dedektörü dahil" }, { eq: "fener", need: "temel", why: "Ex korumalı fener ve telsiz" },
        { eq: "eebd", need: "duruma", why: "H2S içeren yüklerde kaçış seti" }, { eq: "scba", need: "duruma" }
      ],
      rules: ["isgott", "solas-xi1-7", "atex", "en-1149-5", "ism", "msc-circ-1321"],
      notes: ["Güvertede cep telefonu ve Ex korumasız cihaz taşınmaz.", "Kapalı ölçüm (closed gauging) esastır; açık ullage alınıyorsa rüzgârı arkaya alıp solunum koruması değerlendirilir."] },

    { id: "kimyasal-tanker", area: "Tanker", name: "Kimyasal tanker yük operasyonları",
      desc: "IBC Code kapsamındaki kimyasalların yüklenmesi, boşaltılması, numune ve tank temizliği.",
      hazards: ["Zehirli ve aşındırıcı sıvı/buhar", "Cilt ve göz yanığı", "Yanıcı atmosfer"],
      items: [
        { eq: "kimyasal-tulum", need: "temel", why: "Büyük önlük veya yüke uygun tip tulum" }, { eq: "eldiven-kimyasal", need: "temel", why: "Uzun konçlu" },
        { eq: "gozluk", need: "temel", why: "Sıkı oturan gözlük" }, { eq: "yuz-siperi", need: "temel", why: "Manifold ve numune işleminde" },
        { eq: "ayakkabi", need: "temel", why: "Kimyasala dayanıklı çizme" }, { eq: "baret", need: "temel" },
        { eq: "eebd", need: "temel", why: "Yükün gerektirdiği kaçış solunum koruması" }, { eq: "scba", need: "duruma", why: "Gemide en az 2 takım emniyet donanımı (IBC 14.2)" },
        { eq: "gaz-dedektor", need: "temel" }
      ],
      rules: ["ibc-14", "en-chem-suit", "en-iso-374", "tr-kimyasal", "solas-xi1-7", "ism"],
      notes: ["Göz duşu ve dekontaminasyon duşu çalışır ve erişilebilir olmalı (IBC Bölüm 14).", "Her yükün SDS'i ve IBC Code 17. bölüm kaydı okunur; KKD buna göre seçilir."] },

    { id: "gaz-tanker", area: "Tanker", name: "Gaz tankeri (LPG / LNG) operasyonları",
      desc: "Sıvılaştırılmış gaz yükleme, boşaltma, kompresör ve manifold işleri.",
      hazards: ["Kriyojenik soğuk yanığı", "Boğulma (oksijen yetersizliği)", "Zehirli gaz (amonyak vb.)", "Yanıcı atmosfer"],
      items: [
        { eq: "eldiven-soguk", need: "temel", why: "Kriyojenik eldiven" }, { eq: "yuz-siperi", need: "temel" }, { eq: "gozluk", need: "temel" },
        { eq: "tulum", need: "temel", why: "Antistatik, alev geciktirici" }, { eq: "ayakkabi", need: "temel" }, { eq: "baret", need: "temel" },
        { eq: "eebd", need: "temel", why: "Kaçış solunum ve göz koruması (IGC 14)" }, { eq: "scba", need: "duruma" },
        { eq: "gaz-maskesi", need: "duruma", why: "Amonyak yükünde K filtre (yalnız düşük konsantrasyon, oksijen yeterliyse)" },
        { eq: "gaz-dedektor", need: "temel" }, { eq: "kimyasal-tulum", need: "duruma", why: "Amonyak ve zehirli yüklerde" }
      ],
      rules: ["igc-14", "solas-xi1-7", "atex", "ism"],
      notes: ["Göz duşu ve dekontaminasyon duşu; amonyak yükünde ek koruma."] },

    { id: "mutfak", area: "Yaşam mahalli", name: "Mutfak ve kumanya (galley)",
      desc: "Yemek hazırlama, kesme, pişirme, bulaşık, kumanya taşıma, soğuk oda.",
      hazards: ["Kesilme", "Sıcak yağ ve buhar yanığı", "Kayma", "Soğuk oda", "Kimyasal temizleyici"],
      items: [
        { eq: "mesleki-ayakkabi", need: "temel" }, { eq: "eldiven-zincir", need: "duruma", why: "Et ve balık kesiminde" },
        { eq: "eldiven-isi", need: "duruma", why: "Fırın ve sıcak kaplar" }, { eq: "eldiven-kimyasal", need: "duruma", why: "Bulaşık ve temizlik kimyasalı" },
        { eq: "gozluk", need: "duruma", why: "Yoğun temizlik kimyasalı" }, { eq: "soguk-giysi", need: "duruma", why: "Soğuk odada uzun kalışta" }
      ],
      rules: ["mlc-4-3", "en-1082", "en-iso-20347", "tr-kimyasal", "ilo-cop-ship"],
      notes: ["Soğuk oda kapısı içeriden açılabilmeli ve içeride alarm butonu bulunmalı.", "Kötü havada sıcak tencere ve yağ sabitlenir."] },

    { id: "yangin", area: "Acil durum", name: "Yangınla mücadele (itfaiye ekibi)",
      desc: "Yangın ekibi, tatbikatlar, gerçek yangın müdahalesi.",
      hazards: ["Isı ve alev", "Duman ve zehirli gaz", "Görüş kaybı", "Yapısal çökme ve kaynar su buharı"],
      items: [
        { eq: "itfaiyeci", need: "temel" }, { eq: "scba", need: "temel" }, { eq: "fener", need: "temel", why: "Ex korumalı telsiz" }
      ],
      rules: ["solas-ii2-10-10", "fss-3", "en-469", "eu-2014-90", "tr-gemi-techizati", "ism"],
      notes: ["Solunum cihazıyla giren ekip çift olarak girer ve süre takibi yapılır.", "Tatbikatlarda silindir kullanılıyorsa yeniden doldurma imkânı veya yedeği gemide olmalı."] },

    { id: "terk", area: "Acil durum", name: "Gemiyi terk ve denize düşme",
      desc: "Gemiyi terk tatbikatı, can salı ve filika, soğuk suda hayatta kalma.",
      hazards: ["Soğuk su şoku ve hipotermi", "Boğulma", "Görünmeme"],
      items: [{ eq: "can-yelegi", need: "temel" }, { eq: "daldirma", need: "temel", why: "Yük gemilerinde herkes için" }],
      rules: ["solas-iii-7", "lsa-2", "msc-circ-1047", "a658", "eu-2014-90", "tr-gemi-techizati"],
      notes: ["Herkes kendi daldırma elbisesinin bedenini ve yerini bilmeli; tatbikatta giyerek denenir."] },

    { id: "pilot", area: "Güverte", name: "Kılavuz kaptan (pilot) transferi ve borda iskelesi",
      desc: "Pilot iskelesinin hazırlanması, pilotun karşılanması; borda (accommodation) iskelesinde çalışma.",
      hazards: ["Denize düşme", "İskeleden düşme", "Gece ve kötü hava"],
      items: [
        { eq: "calisma-yelegi", need: "temel" }, { eq: "baret", need: "temel" }, { eq: "ayakkabi", need: "temel" },
        { eq: "eldiven-mekanik", need: "temel" }, { eq: "yelek-gorunur", need: "duruma", why: "Gece" }, { eq: "kemer", need: "duruma", why: "İskele hazırlarken açık bordada" }
      ],
      rules: ["solas-v-23", "iso-12402", "coswp"],
      notes: ["İskele başında ışıklı ve halatlı can simidi, can halatı ve aydınlatma.", "Pilot iskelesinin karşılanmasında sorumlu zabit bulunur."] },

    { id: "soguk-iklim", area: "Güverte", name: "Soğuk iklim ve buzlanma",
      desc: "Kış seferi, buz kırma, güvertede buz temizliği, kutup suları.",
      hazards: ["Donma ve hipotermi", "Buzlu güvertede kayma", "Düşen buz"],
      items: [
        { eq: "soguk-giysi", need: "temel" }, { eq: "eldiven-soguk", need: "temel" }, { eq: "ayakkabi", need: "temel", why: "Soğuk yalıtımlı taban (CI işareti)" },
        { eq: "baret", need: "temel", why: "Düşen buza karşı; -20/-30 °C işaretli" }, { eq: "gozluk", need: "duruma", why: "Buz kırarken ve kar körlüğüne karşı güneş filtreli" }
      ],
      rules: ["polar-code", "en-342", "en-511", "en-397"],
      notes: ["Uzun süre açıkta çalışmada nöbetleşe ısınma molası."] }
  ]
};
