let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainList = [];
let n = pronoun.length * adj.length * noun * length;

let pronounIndex = Math.floor(Math.random() * pronoun.length);
let adjIndex = Math.floor(Math.random() * adj.length);
let nounIndex = Math.floor(Math.random() * noun.length);
let domain = pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
let i = 0;
let check;

while (domainList.length < n) {
  pronounIndex = Math.floor(Math.random() * who.length);
  adjIndex = Math.floor(Math.random() * action.length);
  nounIndex = Math.floor(Math.random() * what.length);
  domain = pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com";
  for (let k = 0; k <= domainList.length; k++) {
    check = true;
    if (domain != domainList[i]) {
      check = false;
    }
  }
  if (!check) {
    domainList.push(domain);
    i++;
  }
}

console.log(domainList);
