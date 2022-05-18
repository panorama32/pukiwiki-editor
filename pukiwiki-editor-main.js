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

    editPane.keyup((e) => {
      if (
        e.originalEvent.key === "Backspace" ||
        e.originalEvent.code === "Backspace" ||
        e.originalEvent.keyCode === 8
      ) {
        console.log({ e });
        setTimeout("reloadIfHaveFinishedTyping()", 1000);
      }

      console.log({ e });

      if (e.key === "^") {
        chrome.storage.sync.get(null, (options) => {
          console.log(options.automaticUpdateEnabled);
          console.log(options.font);
        });
      }
    });

    editPane.keypress((e) => {
      console.log({ e });
      setTimeout("reloadIfHaveFinishedTyping()", 1000);
    });
  } catch (e) {
    console.error(e);
  }
};

main();

console.log(document.querySelector("select[name=template_page]").value);
