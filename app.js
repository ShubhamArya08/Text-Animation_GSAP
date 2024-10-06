function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="firstHalf">${e}</span>`;
    } else {
      clutter += `<span class="secondHalf">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakText();

gsap.from(" h1 .firstHalf", {
  y: 50,
  stagger: 0.15,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
});

gsap.from(" h1 .secondHalf", {
  y: 50,
  stagger: -0.15,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
});
