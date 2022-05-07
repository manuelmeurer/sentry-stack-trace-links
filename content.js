// Enter the path to the source code on your local machine here, including trailing slash.
const localPath = "/Users/me/myapp/"

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
