const fs = require('fs');

(function () {
  const challenges = JSON.parse(fs.readFileSync('challenges.json'));

  console.log(challenges.length);
})();
