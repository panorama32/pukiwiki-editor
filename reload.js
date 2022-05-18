const reload = async () => {
  const preview = await fetchPreview();
  $("#preview").replaceWith(preview);
  console.log("reloaded");
};

let goingOnNum = 0;
const reloadIfHaveFinishedTyping = () => {
  goingOnNum++;
  if (goingOnNum >= 2) {
    return;
  }
  reload();
};
