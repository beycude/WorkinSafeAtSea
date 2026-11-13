(function () {
  "use strict";
  var D = window.WSS_DATA;
  var app = document.getElementById("app");
  var qInput = document.getElementById("q");

  var R = {}, E = {}, J = {};
  D.rules.forEach(function (x) { R[x.id] = x; });
  D.equipment.forEach(function (x) { E[x.id] = x; });
  D.jobs.forEach(function (x) { J[x.id] = x; });

  var LAYER_ORDER = ["IMO", "ILO", "AB", "TR", "STD", "END"];
  var AREA_ORDER = ["Güverte", "Makine", "Yük", "Tanker", "Yaşam mahalli", "Acil durum"];
  var GROUP_ORDER = ["Baş", "Göz ve yüz", "Kulak", "Solunum", "El", "Ayak", "Vücut", "Düşme", "Can kurtarma", "Ölçüm", "Yangın"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function norm(s) {
    return String(s || "").toLocaleLowerCase("tr")
      .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ö/g, "o").replace(/ç/g, "c").replace(/â/g, "a").replace(/î/g, "i").replace(/û/g, "u");
  }
  function groupBy(list, key, order) {
    var m = {};
    list.forEach(function (x) { (m[x[key]] = m[x[key]] || []).push(x); });
    var keys = Object.keys(m).sort(function (a, b) {
      var ia = order.indexOf(a), ib = order.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    return keys.map(function (k) { return { key: k, items: m[k] }; });
  }
  function badge(layer) {
    return '<span class="badge b-' + layer + '">' + esc(D.layers[layer].name) + "</span>";
  }
  function ruleChip(id) {
    var r = R[id]; if (!r) return "";
    return '<a class="rulechip" href="#/kural/' + r.id + '">' + badge(r.layer) +
      '<div class="grow"><div class="code">' + esc(r.code) + '</div><div class="rt">' + esc(r.title) + "</div></div></a>";
  }
  function sortRules(ids) {
    return ids.slice().sort(function (a, b) {
      return LAYER_ORDER.indexOf(R[a].layer) - LAYER_ORDER.indexOf(R[b].layer);
    });
  }
  function card(href, title, sub, right) {
    return '<a class="card" href="' + href + '"><div class="row"><div class="grow"><div class="name">' + title +
      "</div>" + (sub ? '<div class="sub">' + sub + "</div>" : "") + "</div>" + (right || "") +
      '<div class="chev">›</div></div></a>';
  }
  function setTab(t) {
    var as = document.querySelectorAll("#tabs a");
    for (var i = 0; i < as.length; i++) as[i].classList.toggle("on", as[i].getAttribute("data-tab") === t);
  }
  function toast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ---------- Sayfalar ---------- */
  function pageJobs() {
    setTab("isler");
    var h = '<div class="note">Yapacağın işi seç; o işte giyilecek ve kullanılacak ekipmanlar, asgari özellikleri ve dayandığı kurallar çıkar.</div>';
    groupBy(D.jobs, "area", AREA_ORDER).forEach(function (g) {
      h += "<h2>" + esc(g.key) + "</h2>";
      g.items.forEach(function (j) {
        var n = j.items.filter(function (i) { return i.need === "temel"; }).length;
        h += card("#/is/" + j.id, esc(j.name), n + " temel ekipman · " + j.items.length + " toplam");
      });
    });
    app.innerHTML = h;
  }

  function pageEquipmentList() {
    setTab("ekipman");
    var h = "";
    groupBy(D.equipment, "group", GROUP_ORDER).forEach(function (g) {
      h += "<h2>" + esc(g.key) + "</h2>";
      g.items.forEach(function (e) {
        var stds = e.rules.filter(function (id) { return R[id].layer === "STD"; }).map(function (id) { return R[id].code; });
        h += card("#/ekipman/" + e.id, esc(e.name), esc(stds.join(" · ")));
      });
    });
    app.innerHTML = h;
  }

  function pageRules() {
    setTab("kurallar");
    var h = "";
    groupBy(D.rules, "layer", LAYER_ORDER).forEach(function (g) {
      h += "<h2>" + esc(D.layers[g.key].name) + " — " + esc(D.layers[g.key].desc) + "</h2>";
      g.items.forEach(function (r) { h += ruleChip(r.id); });
    });
    app.innerHTML = h;
  }

  function pageJob(id) {
    var j = J[id]; if (!j) return notFound();
    setTab("isler");
    var h = '<div class="hero"><div class="area">' + esc(j.area) + "</div><h1>" + esc(j.name) + "</h1><p>" + esc(j.desc) + "</p>" +
      '<div class="chips" style="margin-top:10px">' + j.hazards.map(function (z) { return '<span class="chip">⚠ ' + esc(z) + "</span>"; }).join("") + "</div></div>";
    h += "<h2>Ekipman</h2>";
    var sorted = j.items.slice().sort(function (a, b) { return (a.need === "temel" ? 0 : 1) - (b.need === "temel" ? 0 : 1); });
    sorted.forEach(function (it) {
      var e = E[it.eq];
      var sub = it.why ? '<div class="why">' + esc(it.why) + "</div>" : "";
      h += '<a class="card" href="#/ekipman/' + e.id + '"><div class="row"><div class="grow"><div class="name">' + esc(e.name) + "</div>" + sub +
        '</div><span class="need ' + it.need + '">' + (it.need === "temel" ? "Temel" : "Duruma göre") + '</span><div class="chev">›</div></div></a>';
    });
    if (j.notes && j.notes.length) {
      h += "<h2>Dikkat</h2>";
      j.notes.forEach(function (n) { h += '<div class="note">' + esc(n) + "</div>"; });
    }
    h += "<h2>Dayanak kurallar</h2>" + sortRules(j.rules).map(ruleChip).join("");
    app.innerHTML = h; window.scrollTo(0, 0);
  }

  function pageEquipment(id) {
    var e = E[id]; if (!e) return notFound();
    setTab("ekipman");
    var h = '<div class="hero"><div class="area">' + esc(e.group) + "</div><h1>" + esc(e.name) + "</h1></div>";
    h += '<h2>Asgari özellikler</h2><div class="card"><ul class="specs">' + e.specs.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></div>";
    if (e.note) h += '<div class="note">' + esc(e.note) + "</div>";
    h += "<h2>Standart ve kurallar</h2>" + sortRules(e.rules).map(ruleChip).join("");
    var jobs = D.jobs.filter(function (j) { return j.items.some(function (i) { return i.eq === id; }); });
    if (jobs.length) {
      h += "<h2>Bu ekipmanın geçtiği işler</h2>";
      jobs.forEach(function (j) {
        var it = j.items.filter(function (i) { return i.eq === id; })[0];
        h += card("#/is/" + j.id, esc(j.name), esc(j.area), '<span class="need ' + it.need + '">' + (it.need === "temel" ? "Temel" : "Duruma göre") + "</span>");
      });
    }
    app.innerHTML = h; window.scrollTo(0, 0);
  }

  function pageRule(id) {
    var r = R[id]; if (!r) return notFound();
    setTab("kurallar");
    var h = '<div class="hero"><div class="area">' + esc(D.layers[r.layer].name) + "</div><h1>" + esc(r.code) + "</h1><p>" + esc(r.title) + "</p></div>";
    h += '<div class="card">' + esc(r.desc) + "</div>";
    h += '<div class="btns"><button class="btn alt" id="bCopy">Numarayı kopyala</button><button class="btn" id="bGoogle">Google\'da ara</button></div>';
    var eqs = D.equipment.filter(function (e) { return e.rules.indexOf(id) >= 0; });
    var jobs = D.jobs.filter(function (j) { return j.rules.indexOf(id) >= 0; });
    if (eqs.length) { h += "<h2>İlgili ekipman</h2>"; eqs.forEach(function (e) { h += card("#/ekipman/" + e.id, esc(e.name), esc(e.group)); }); }
    if (jobs.length) { h += "<h2>İlgili işler</h2>"; jobs.forEach(function (j) { h += card("#/is/" + j.id, esc(j.name), esc(j.area)); }); }
    app.innerHTML = h; window.scrollTo(0, 0);
    document.getElementById("bCopy").onclick = function () { copy(r.code); };
    document.getElementById("bGoogle").onclick = function () {
      openUrl("https://www.google.com/search?q=" + encodeURIComponent(r.code + " " + r.title));
    };
  }

  function pageAbout() {
    setTab("hakkinda");
    var h = '<div class="hero"><div class="area">WSS</div><h1>WorkinSafe at Sea</h1><p>Gemide çalışanların işe göre giymesi ve kullanması gereken kişisel koruyucu donanım, asgari özellikleri ve dayanak kuralları.</p></div>';
    h += '<div class="note warn"><b>Rehberdir.</b> Bağlayıcı olan bayrak devleti kuralları, klas kuralları ve şirketin Emniyet Yönetim Sistemi (SMS) prosedürleridir. Kural ve standartlar değişir; işlem yapmadan önce güncel sürümü kontrol edin.</div>';
    h += '<div class="card"><b>Veri tarihi:</b> ' + esc(D.dataDate) + '<br><b>İçerik:</b> ' + D.jobs.length + " iş, " + D.equipment.length + " ekipman, " + D.rules.length + " kural ve standart</div>";
    h += "<h2>Kaynak katmanları</h2>";
    LAYER_ORDER.forEach(function (k) { h += '<div class="card">' + badge(k) + esc(D.layers[k].desc) + "</div>"; });
    h += '<h2>Önemli</h2><div class="card">IMO, iş ayakkabısı veya baret gibi günlük KKD\'yi doğrudan düzenlemez. IMO kuralları daha çok itfaiyeci teçhizatı, can kurtarma, EEBD, kapalı alan ve tanker yükleri gibi alanları kapsar. Günlük KKD\'nin dayanağı MLC 2006 Kural 4.3, ulusal İSG mevzuatı ve EN/ISO standartlarıdır.</div>';
    h += '<div class="foot">Sürüm 1.1 · © beycude, tüm hakları saklıdır</div>';
    app.innerHTML = h;
  }

  function pageSearch(q) {
    var n = norm(q).trim();
    setTab("");
    if (n.length < 2) { app.innerHTML = '<div class="empty">En az 2 harf yazın.</div>'; return; }
    var words = n.split(/\s+/);
    function hit(text) { var t = norm(text); return words.every(function (w) { return t.indexOf(w) >= 0; }); }
    var js = D.jobs.filter(function (j) { return hit([j.name, j.area, j.desc, j.hazards.join(" "), (j.notes || []).join(" ")].join(" ")); });
    var es = D.equipment.filter(function (e) { return hit([e.name, e.group, e.specs.join(" "), e.note].join(" ")); });
    var rs = D.rules.filter(function (r) { return hit([r.code, r.title, r.desc, D.layers[r.layer].name].join(" ")); });
    var h = "";
    if (js.length) { h += "<h2>İşler</h2>"; js.forEach(function (j) { h += card("#/is/" + j.id, esc(j.name), esc(j.area)); }); }
    if (es.length) { h += "<h2>Ekipman</h2>"; es.forEach(function (e) { h += card("#/ekipman/" + e.id, esc(e.name), esc(e.group)); }); }
    if (rs.length) { h += "<h2>Kurallar ve standartlar</h2>"; sortRules(rs.map(function (r) { return r.id; })).forEach(function (id) { h += ruleChip(id); }); }
    app.innerHTML = h || '<div class="empty">“' + esc(q) + '” için sonuç yok.</div>';
  }

  function notFound() { app.innerHTML = '<div class="empty">Sayfa bulunamadı.</div>'; }

  /* ---------- Android köprüsü ---------- */
  function copy(text) {
    try {
      if (window.Android && window.Android.copy) { window.Android.copy(text); toast("Kopyalandı"); return; }
      if (navigator.clipboard) { navigator.clipboard.writeText(text).then(function () { toast("Kopyalandı"); }); return; }
    } catch (e) {}
    toast(text);
  }
  function openUrl(url) {
    if (window.Android && window.Android.openUrl) window.Android.openUrl(url);
    else window.open(url, "_blank");
  }

  /* ---------- Yönlendirme ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var p = h.split("/");
    if (p[0] === "ara") return pageSearch(decodeURIComponent(p.slice(1).join("/")));
    if (qInput.value && p[0] !== "ara") qInput.value = "";
    switch (p[0]) {
      case "": return pageJobs();
      case "ekipman": return p[1] ? pageEquipment(p[1]) : pageEquipmentList();
      case "kurallar": return pageRules();
      case "kural": return pageRule(p[1]);
      case "is": return pageJob(p[1]);
      case "hakkinda": return pageAbout();
      default: return notFound();
    }
  }

  var searchTimer;
  qInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      var v = qInput.value.trim();
      if (!v) { if (location.hash.indexOf("#/ara") === 0) history.back(); return; }
      var target = "#/ara/" + encodeURIComponent(v);
      if (location.hash.indexOf("#/ara") === 0) { history.replaceState(null, "", target); route(); }
      else location.hash = target;
    }, 250);
  });

  window.addEventListener("hashchange", route);
  route();
})();
