const animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
const animation = function () {
  let timer = 0
  for (const sym of animations) {
    setTimeout(() => {process.stdout.write(sym)}, timer);
    timer += 200
  }
  //setTimeout(() => {process.stdout.write("\n")}, timer);
};

animation(animations);