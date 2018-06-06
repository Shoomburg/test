nextPrime:
  for (var i = 2; i <= 100; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    document.write("Делители простого числа " + "<strong>" + i + "</strong>" + ": <strong>1</strong> и " + "<strong>" + i + "</strong>" + "<br>")
  }