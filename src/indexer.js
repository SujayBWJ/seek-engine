function buildIndex(documents) {
  const index = {};
  for (const doc of documents) {
    let words = doc.content.split(" ");

    for (const word of words) {
      if (!index[word]) {
        index[word] = new Set();
      }

      index[word].add(doc.id);
    }
  }

  return index;
}

module.exports = buildIndex;
