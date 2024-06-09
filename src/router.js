const buildData = require("./utils/buildData")
const getData = require("./utils/getData")

const router = require("express").Router()

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  })
})

router.get("/bible", async (req, res) => {
  const { book, chapter, version } = req.query
  try {
    const data = await getData(version)
    const transformedData = buildData(data).map(
      ({ book_name, abbrev, chapters, group, all_verses }) => ({
        book_name,
        abbrev,
        chapters,
        group,
        verses:
          book === abbrev
            ? all_verses.filter((_, index) => index === Number(chapter) - 1)[0]
            : null
      })
    )
    res.json(transformedData)
  } catch {
    res.status(404).json({
      message: `A versão "${version}" da bíblia não existe em nossa base de dados. Por favor, selecione uma versão válida!`
    })
  }
})

module.exports = router
