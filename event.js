/* =====================================================================
   EVENT-DATEN – nur dieser Block wird für jede neue Runde geändert.
   date: "JJJJ-MM-TT" oder null (= Gästeliste noch nicht offen).
   Ab dem Tag nach dem Event schließt die Gästeliste automatisch.
   ===================================================================== */
const EVENT = {
  nr: 16,
  date: null,                 // z. B. "2026-11-20"
  start: "18:00",
  end: "22:00",
  venue: "El Soto",
  address: "Urbanstr. 133, 10967 Berlin",
  lineup: [],                 // z. B. ["Raw Image", "VXLR"]
  list: "GL #16"              // Name der Brevo-Liste; der Crew-Zähler zählt nur diese Kennung
};
