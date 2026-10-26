// Sample projects for the standalone demo. Dates are relative to today so the demo never goes stale.
window.FLUXO_DEMO = function () {
  function d(n) { var x = new Date(); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); }
  function t(n) { var x = new Date(); x.setDate(x.getDate() + n); x.setHours(10, 0, 0, 0); return x.toISOString(); }
  function proj(id, ref, stage, specs, due, created, extra) {
    var p = { id: id, ref: ref, stage: stage, specs: specs, dueDate: due, waitingSince: null, createdAt: t(created), stageSince: t(created), history: [{ at: t(created), text: "Projeto criado" }] };
    for (var k in extra || {}) p[k] = extra[k];
    return p;
  }
  return [
    proj("ex1", "P-2026-101", 0, { clientName: "Ana Ferreira (exemplo)", clientType: "Cliente final", phone: "912 000 101", pieceType: "Mesa de jantar", stone: "Mármore Estremoz" }, d(40), -3),
    proj("ex2", "P-2026-102", 1, { clientName: "Rui Costa (exemplo)", clientType: "Loja parceira", partner: "Cozinhas Atlântico", phone: "913 000 102", pieceType: "Bancada de cozinha", stone: "Granito Preto Zimbabwe", quoteValue: 2850, quoteAccepted: true, address: "Rua das Flores 12, Porto", measureDate: d(2) }, d(25), -12),
    proj("ex3", "P-2026-103", 2, { clientName: "Maria Silva (exemplo)", clientType: "Cliente final", phone: "914 000 103", pieceType: "Bancada de cozinha", stone: "Quartzo Branco Calacatta", quoteValue: 3400, quoteAccepted: true, address: "Av. da Boavista 450, Porto", measureDate: d(-10), area: 4.2, thickness: "2 cm", finish: "Polido", edge: "Reto" }, d(15), -24, { waitingSince: t(-5) }),
    proj("ex4", "P-2026-104", 2, { clientName: "Construções Douro (exemplo)", clientType: "Construtor", partner: "Construções Douro", phone: "915 000 104", pieceType: "Revestimento de casa de banho", stone: "Mármore Rosa Aurora", quoteValue: 5200, quoteAccepted: true, address: "Edifício Ribeira, Lote 3, Gaia", measureDate: d(-6), area: 18.5, thickness: "2 cm", finish: "Amaciado" }, d(-4), -31),
    proj("ex5", "P-2026-105", 3, { clientName: "João Costa (exemplo)", clientType: "Loja parceira", partner: "Casa & Cozinha Matosinhos", phone: "916 000 105", pieceType: "Bancada de cozinha", stone: "Granito Branco Cristal", quoteValue: 2100, quoteAccepted: true, address: "Rua do Mar 8, Matosinhos", measureDate: d(-17), area: 3.1, thickness: "3 cm", finish: "Polido", edge: "Boleado", sinkModel: "Franke Maris MRX 110-50", sinkMount: "Por baixo (sub-montado)", hobCutout: "560 × 490 mm", tapHoles: "1 furo Ø35 mm", installDate: d(4) }, d(5), -26),
    proj("ex6", "P-2026-106", 4, { clientName: "Sofia Martins (exemplo)", clientType: "Cliente final", phone: "917 000 106", pieceType: "Base de duche", stone: "Ardósia", quoteValue: 780, quoteAccepted: true, address: "Rua de Cedofeita 77, Porto", measureDate: d(-24), area: 1.2, thickness: "3 cm", finish: "Escovado", edge: "Reto", slab: "Chapa 1987-A", cutDone: true, installDate: d(1) }, d(3), -36),
    proj("ex7", "P-2026-099", 5, { clientName: "Pedro Almeida (exemplo)", clientType: "Cliente final", phone: "918 000 099", pieceType: "Revestimento de cozinha", stone: "Mármore Branco Carrara", quoteValue: 1650, quoteAccepted: true, address: "Rua Formosa 20, Porto", measureDate: d(-46), area: 5, thickness: "2 cm", finish: "Polido", edge: "Reto", slab: "Chapa 1840-C", cutDone: true, installDate: d(-16), installDone: true, clientSignoff: true }, d(-14), -55)
  ];
};

// Simulated "Importar pedido" for the demo: there is no AI here, so the sample email
// returns a prepared reading and other text gets a simple pattern-based guess.
window.FLUXO_DEMO_IMPORT = (function () {
  function d(n) { var x = new Date(); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); }
  function longDate(iso) { return new Date(iso + "T12:00:00").toLocaleDateString("pt-PT", { day: "numeric", month: "long" }); }
  var install = d(21);
  var sampleEmail =
    "De: Carla Nunes <encomendas@cozinhasdonorte.pt>\n" +
    "Assunto: Pedido de orçamento - bancada cliente Tiago Moreira\n\n" +
    "Bom dia,\n\n" +
    "Envio novo pedido para um cliente nosso, o Sr. Tiago Moreira (tlm 919 555 214, tiago.moreira@email.pt).\n" +
    "A obra é na Rua de Santa Catarina 310, 2.º Esq, Porto.\n\n" +
    "Bancada de cozinha em L em quartzo Branco Calacatta, 3 cm, acabamento polido, rebordo boleado. Área aproximada 4,2 m2.\n" +
    "Lava-loiça Blanco Subline 500-U, montado por baixo. Placa com recorte 560 x 490 mm. 1 furo para torneira de 35 mm.\n" +
    "Inclui frontão de 10 cm ao longo da parede do lava-loiça.\n\n" +
    "O cliente gostava de ter a montagem até " + longDate(install) + ". Podem enviar orçamento?\n\n" +
    "Obrigada,\nCarla Nunes\nCozinhas do Norte, Lda\n220 123 456";
  var sampleResult = {
    clientName: "Tiago Moreira", clientType: "Loja parceira", partner: "Cozinhas do Norte, Lda", phone: "919 555 214", email: "tiago.moreira@email.pt",
    pieceType: "Bancada de cozinha", stone: "Quartzo Branco Calacatta", address: "Rua de Santa Catarina 310, 2.º Esq, Porto",
    area: 4.2, thickness: "3 cm", finish: "Polido", edge: "Boleado", sinkModel: "Blanco Subline 500-U", sinkMount: "Por baixo (sub-montado)",
    hobCutout: "560 × 490 mm", tapHoles: "1 furo Ø35 mm", dueDate: install,
    notes: "Bancada em L. Inclui frontão de 10 cm ao longo da parede do lava-loiça. Pedido enviado por Carla Nunes (Cozinhas do Norte), 220 123 456.",
    summary: "Bancada em L em quartzo com lava-loiça sub-montado, via Cozinhas do Norte"
  };
  var STONES = ["quartzo", "granito", "mármore", "marmore", "ardósia", "ardosia", "calcário", "calcario", "silestone", "dekton", "neolith"];
  var PIECES = [["bancada", "Bancada de cozinha"], ["base de duche", "Base de duche"], ["duche", "Base de duche"], ["mesa", "Mesa de jantar"], ["casa de banho", "Revestimento de casa de banho"], ["revestimento", "Revestimento de cozinha"]];
  function guess(text) {
    var low = text.toLowerCase(), r = {}, m;
    if ((m = /(?:\+351\s?)?\b(9\d{2}|2\d{2})[\s.]?\d{3}[\s.]?\d{3}\b/.exec(text))) r.phone = m[0].trim();
    if ((m = /[\w.+-]+@[\w-]+\.[\w.]+/.exec(text))) r.email = m[0];
    if ((m = /(?:[Nn]ome|[Cc]liente|[Ss]ra?\.?|[Dd]\.)\s*:?\s+([A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+(?:\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+)+)/.exec(text))) r.clientName = m[1];
    for (var i = 0; i < PIECES.length; i++) if (low.indexOf(PIECES[i][0]) >= 0) { r.pieceType = PIECES[i][1]; break; }
    for (var j = 0; j < STONES.length; j++) {
      var k = low.indexOf(STONES[j]);
      if (k >= 0) { r.stone = text.substr(k, 40).split(/[,.;\n]/)[0].replace(/\s+\d.*$/, "").trim(); r.stone = r.stone.charAt(0).toUpperCase() + r.stone.slice(1); break; }
    }
    if ((m = /(\d+(?:[.,]\d+)?)\s*m(?:2|²)/i.exec(text))) r.area = m[1];
    if ((m = /\b([23])\s*cm\b/.exec(text))) r.thickness = m[1] + " cm";
    ["Polido", "Amaciado", "Escovado", "Flameado"].forEach(function (f) { if (low.indexOf(f.toLowerCase()) >= 0) r.finish = f; });
    if ((m = /\b(?:rua|av\.?|avenida|travessa|largo|praça)\s[^\n]{3,80}/i.exec(text))) r.address = m[0].trim();
    r.summary = "Leitura simulada da demonstração";
    return r;
  }
  return {
    sampleEmail: sampleEmail,
    json: function (prompt, opts) {
      var body = prompt.slice(prompt.lastIndexOf("ORDER:\n") + 7);
      var result = body.indexOf("Tiago Moreira") >= 0 && body.indexOf("Cozinhas do Norte") >= 0 ? sampleResult : guess(body);
      return new Promise(function (ok, fail) {
        var timer = setTimeout(function () { ok(JSON.parse(JSON.stringify(result))); }, 1800);
        if (opts && opts.signal) opts.signal.addEventListener("abort", function () { clearTimeout(timer); fail({ code: "cancelled" }); });
      });
    }
  };
})();
