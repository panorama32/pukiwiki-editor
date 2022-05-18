// setup
let checkbox = document.getElementById("toggle");
let font = document.getElementById("font");

chrome.storage.sync.get(null, (options) => {
  if (options.automaticUpdateEnabled !== undefined) {
    checkbox.checked = options.automaticUpdateEnabled;
  }
  if (options.font !== undefined) {
    font.value = options.font;
  }
});

checkbox.addEventListener("click", () => {
  const checkbox = document.getElementById("toggle");
  chrome.storage.sync.set({
    automaticUpdateEnabled: checkbox.checked,
  });
});

font.addEventListener("change", () => {
  const font = document.getElementById("font");
  chrome.storage.sync.set({
    font: font.value,
  });
});
