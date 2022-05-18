const body = serializeForm();

const fetchPreview = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "https://ppwww.phys.sci.kobe-u.ac.jp/ppwiki-internal/",
      data: body,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=zb3;q=0.9",
        "Cache-Control": "max-age=0",
        "Content-Type": "application/x-www-form-urlencoded",
        "Upgrade-Insecure-Requests": "1",
      },
    })
      .done((data) => {
        let preview = $.parseHTML(data)[24].firstElementChild.children[2];
        resolve(preview);
      })
      .fail((data) => {
        reject(data);
      });
  });
};

const main = async () => {
  try {
    // divを作る
    $("textarea[name=msg]").before(
      '<div id="pukiwiki-editor-container"></div>'
    );

    // previewの取得
    const preview = await fetchPreview();

    // divの中にtextareaとpreviewを入れる
    $("#pukiwiki-editor-container").append($("textarea[name=msg]"));
    $("#pukiwiki-editor-container").append(preview);

    // textareaにidを付加
    $("textarea[name=msg]").attr("id", "edit-pane");

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
