const reload = async () => {
  const preview = await fetchPreview();
  $("#preview").replaceWith(preview);
};
