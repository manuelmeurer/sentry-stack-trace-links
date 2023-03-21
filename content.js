// Map Sentry project IDs to paths to the source code on your local machine here, including trailing slash.
const localPaths = {
  "123": "/Users/me/myapp/"
}

const projectId = window.location.search.match(/project=(\d+)/)?.[1]
const localPath = localPaths[projectId]

const openVsCode = event => {
  event.stopPropagation()

  const filename = event.currentTarget.innerText
  const line     = event.currentTarget.parentNode.querySelector(".lineno").innerText

  window.open(`vscode://file${localPath}${filename}:${line}`)
}

const addLinks = () => {
  document.querySelectorAll("li.frame:not(.system-frame) .filename")
          .forEach(element => element.addEventListener("click", openVsCode))
}

if (localPath) {
  addLinks()
  new MutationObserver(addLinks)
    .observe(document.body, {
      childList: true,
      subtree:   true
    })
}
