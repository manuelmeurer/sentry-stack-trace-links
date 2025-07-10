// Map Sentry project IDs to paths to the source code on your local machine here, including trailing slash.
const localPaths = {
  "6318329":          "/Users/manuel/code/uplink/app/",
  "4504147119767552": "/Users/manuel/code/notetoself/",
  "4504471079223296": "/Users/manuel/code/spendex/",
  "4507855149727744": "/Users/manuel/code/funlocked/app/",
  "4508944133062656": "/Users/manuel/code/dasauge/app/",
  "4508579074736128": "/Users/manuel/code/tasks/"
}
const baselinePath = "/Users/manuel/code/baseline/"

document.body.addEventListener("click", event => {
  const projectId       = window.location.search.match(/project=(\d+)/)?.[1]
  let   localPath       = localPaths[projectId]
  const wrapper         = event.target.closest("li.frame:not(.system-frame)")
  const filenameElement = event.target.closest(".filename")

  if (!localPath || !wrapper || !filenameElement)
    return

  let   filename = filenameElement.innerText
  const line     = wrapper.querySelector(".lineno").innerText

  if (filename.startsWith("baseline/")) {
    localPath = baselinePath
    filename  = `lib/${filename}`
  }

  window.open(`vscode://file${localPath}${filename}:${line}`)
})
