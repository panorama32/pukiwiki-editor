const main = async () => {
  try {
    await setup();

    // 改めてtextareaとpreviewを取得
    const editPane = $("textarea[name=msg]");
    const previewPane = $("#preview");

    editPane.keypress((e) => {
      console.log({ e });
    });

    // reload();
  } catch (e) {
    console.error(e);
  }
};

main();
