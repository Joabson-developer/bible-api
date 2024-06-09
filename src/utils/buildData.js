function buildData(data) {
  const newData = data.map((book, index) => ({
    book_name: book.name,
    abbrev: book.abbrev,
    chapters: book.chapters.length,
    group: index <= 39 - 1 ? "VT" : "NT",
    all_verses: book.chapters.map((chapter) =>
      chapter.map((verse, index) => ({
        verse: `${index + 1}`,
        text: verse
      }))
    )
  }))
  return newData
}

module.exports = buildData
