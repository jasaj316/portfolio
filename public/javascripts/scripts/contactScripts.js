export function contactScripts() {
  const subject = document.querySelector("#subject");
  const body = document.querySelector("#body");
  const formButton = document.querySelector(".form-button");

  // populate mailto link with form data
  document.addEventListener("keyup", () => {
    formButton.href = `mailto:jasaj316@gmail.com?subject=${subject.value}&body=${body.value}`;
  });
}