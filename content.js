// Map Sentry project IDs to paths to the source code on your local machine here, including trailing slash.
const localPaths = {
  "123": "/Users/me/myapp/"
}

addLinks = () => {
  const callback = mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        node.querySelectorAll("li.frame:not(.system-frame)").forEach(element => {
          const filenameWrapper = element.querySelector(".filename")
          const filename        = filenameWrapper.innerText
          const line            = element.querySelector(".lineno").innerText

          filenameWrapper.addEventListener("click", event => {
            event.stopPropagation()
            window.open(`vscode://file${localPath}${filename}:${line}`)
          })
        })
      })
    })
  }

  new MutationObserver(callback).observe(document.body, {
    childList: true,
    subtree:   true
  })
}

const projectId = window.location.search.match(/project=(\d+)/)?.[1]
const localPath = localPaths[projectId]

if (localPath)
  addLinks()
