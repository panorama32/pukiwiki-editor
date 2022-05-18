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

    // editPane.keypress((e) => {
    //   console.log({ e });
    // });

    // reload();
  } catch (e) {
    console.error(e);
  }
};

main();
