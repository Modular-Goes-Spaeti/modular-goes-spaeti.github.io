/* =====================================================================
   EVENT-DATEN – nur dieser Block wird für jede neue Runde geändert.
   date: "JJJJ-MM-TT" oder null (= Gästeliste noch nicht offen).
   Ab dem Tag nach dem Event schließt die Gästeliste automatisch.
   ===================================================================== */
const EVENT = {
  nr: 16,
  date: "2026-11-13",         // oder null, solange das Datum offen ist
  start: "18:00",
  end: "22:00",
  venue: "El Soto",
  address: "Urbanstr. 133, 10967 Berlin",
  lineup: ["Sensorium", "Frank Funke", "Varia Aves", "Matze Sampler"],
  flyer: "flyer-16.jpg",      // Datei im Projekt, oder null
  list: "GL #16"              // Name der Brevo-Liste; der Crew-Zähler zählt nur diese Kennung
};
