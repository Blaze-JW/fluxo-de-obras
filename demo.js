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
