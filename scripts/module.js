Hooks.on("init", () => {

  console.log(`swadebass init`);

  class SwadeBassSheet extends game.swade.sheets.CharacterSheet {
    static get defaultOptions() {
      console.log('swadebass', mergeObject(super.defaultOptions, {
        classes: ['swadebass-sheet', 'swade-official', 'sheet', 'actor'],
        width: 705,
        height: 800,
        resizable: true,
      }))
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

// Hooks.once('ready', async function() {

// });
