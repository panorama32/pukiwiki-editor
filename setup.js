const setup = async () => {
  // divを作る
  $("textarea[name=msg]").before('<div id="pukiwiki-editor-container"></div>');

  // previewの取得
  const preview = await fetchPreview();

  // divの中にtextareaとpreviewを入れる
  $("#pukiwiki-editor-container").append($("textarea[name=msg]"));
  $("#pukiwiki-editor-container").append(preview);

  // textareaにidを付加
  $("textarea[name=msg]").attr("id", "edit-pane");

  $("input[name=template]").after(
    '<button type="button" id="reload">プレビュー更新</button>'
  );

  chrome.storage.sync.get(null, (options) => {
    if (options.font !== undefined && options.font !== "default") {
      $("#edit-pane").css("font-family", options.font);
    }
  });

  $("input[name=preview]").css("display", "none");
};
