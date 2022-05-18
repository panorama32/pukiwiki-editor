const main = async () => {
  try {
    await setup();

    $("#reload").click(async () => {
      await reload();
    });

    // 改めてtextareaとpreviewを取得
    const editPane = $("#edit-pane");
    const previewPane = $("#preview");

    autosize(editPane);

    chrome.storage.sync.get(null, (options) => {
      if (options.automaticUpdateEnabled) {
        editPane.keyup((e) => {
          if (
            e.originalEvent.key === "Backspace" ||
            e.originalEvent.code === "Backspace" ||
            e.originalEvent.keyCode === 8
          ) {
            setTimeout("reloadIfHaveFinishedTyping()", 1000);
          }
        });

        editPane.keypress((e) => {
          setTimeout("reloadIfHaveFinishedTyping()", 1000);
        });
      }
    });
  } catch (e) {
    console.error(e);
  }
};

main();
