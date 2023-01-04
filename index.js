//console.log(document.body.firstChild);
// console.log(document.body.lastChild);
//console.log(document.querySelector("#btn").parentNode.parentNode);
//console.log(
//document.querySelector('[data-current="b"]').previousElementSibling
//console.log(document.querySelector('[data-current="c"]'));
//console.log();
console.log(document.body.childNodes);
for (let node of document.body.childNodes) {
  if (node.nodeName === "#text") {
    continue;
  }
  console.log(node);
}
