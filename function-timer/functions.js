// O(n)
function addUpToVersion1(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1)
function addUpToVersion2(n) {
  return n * (n + 1) / 2;
}

// Other O(n)
function countUpBy1(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Done. Bye!");
}

// Other O(n)
function countUpBy2(n) {
  for (var i = 0; i < n; i+=2) {
    console.log(i);
  }
  console.log("Done. Bye!");
}

// Other O(n)
function countUpAndDown(n) {
  console.log("Going up!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

// O(n^2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(log(n))
function numberOfHalves(n) {
  var count = 0;
  while (n > 1) {
    n /= 2;
    count++;
  }
  return count;
}

// O(n * log(n))
function totalNumberOfHalves(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    total += numberOfHalves(n);
  }
  return total;
}
var functions = [
  {
    fn: countUpBy1,
    className: "primary",
    fnPython:"def countUpBy1(n):\n    for i in range(n):\n        print(i)",
    color: "#3978FF"
  },

  {
    fn: countUpBy2,
    className: "secondary",
    fnPython:"def countUpBy1(n):\n    for i in range(0, n, 2):\n        print(i)",
    color: "#6E757D"
  },
  {
    fn: addUpToVersion1,
    className: "success",
    fnPython:"# this function uses a brute force solution\n# to calculate the sum of all numbers from 1 to n.\ndef addUpToVersion1(n):\n    total = 0\n    for i in range(n+1):\n        total += i\n        return total",
    color: "#4CA442"
  },
  {
    fn: addUpToVersion2,
    className: "danger",
    fnPython:"# this function uses a closed form solution to calculate\n# the sum of all numbers from 1 to n.\ndef addUpToVersion2(n):\n    return n * (n + 1) / 2",
    color: "#CD4748"
  },
  {
    fn: countUpAndDown,
    fnPython:'def countUpAndDown(n):\n    print("Going up!")\n    for i in range(n + 1):\n        print(i)\n        print("At the top! Going down...");\n    for j in reversed(range(n)):\n        print(j)\n    print("Done!")',
    className: "warning",
    color: "#F6C40C"
  },
  {
    fn: printAllPairs,
    fnPython:"def printAllPairs(n):\n    for i in range(n):\n        for j in range(n):\n            print(i, j)",
    className: "info",
    color: "#479FB8"
  },
  {
    fn: numberOfHalves,
    fnPython: "# count the number of halves you need to get n below 1.\ndef numberOfHalves(n):\n    count = 0\n    while n > 1:\n        n /= 2\n        count += 1\n    return count",
    className: "light",
    color: "#F8F9FA"
  },
  {
    fn: totalNumberOfHalves,
    fnPython:"# apply numberOfHalves to all numbers between 1 and n \n# and sum the results.\ndef totalNumberOfHalves(n):\n    total = 0\n    for i in range(n):\n        total += numberOfHalves(n)\n    return total",
    className: "dark",
    color: "#353A40"
  },
];
