Hooks.on("setup", () => {

  console.log(`swadebass init`);
  console.log(game.swade);

  class SwadeBassSheet extends game.swade.sheets.CharacterSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ['swadebass-sheet', 'swade-official', 'sheet', 'actor'],
        width: 705,
        height: 800,
        resizable: true,
      });
    }
  }
  
  Actors.registerSheet("swade", SwadeBassSheet, {
    types: ["character"],
    makeDefault: false,
    label: "Swade Character Sheet for B.A.S.S."
  });
  
});

// Hooks.on("renderCharacterSheet", (sheet, html, data) => {
//   html.addClass("swadebass-sheet");
// });

// Hooks.once('ready', async function() {

// });
