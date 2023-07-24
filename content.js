// Map Sentry project IDs to paths to the source code on your local machine here, including trailing slash.
const localPaths = {
  "123": "/Users/me/myapp/"
}

document.body.addEventListener("click", event => {
  const projectId = window.location.search.match(/project=(\d+)/)?.[1]
  const localPath = localPaths[projectId]
  const wrapper   = event.target.closest("li.frame:not(.system-frame)")

  if (!localPath || !wrapper)
    return

  event.stopPropagation()

  const filename = wrapper.querySelector(".filename").innerText
  const line     = wrapper.querySelector(".lineno").innerText

  window.open(`vscode://file${localPath}${filename}:${line}`)
})
