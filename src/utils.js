const copyToClipboard = (text, setLinkCopied) => {
    // copy link to clipboard
    const doc = document.createElement('textarea');
    doc.value = text;
    document.body.appendChild(doc);
    doc.select();
    document.execCommand('copy');

    // Check if doc is still a child of document.body before removing it
    if (document.body.contains(doc)) {
        document.body.removeChild(doc);
    }

    if(!setLinkCopied) return
    setLinkCopied(true)
    setTimeout(() => {
        setLinkCopied(false)
    }, 3000)
}

export { copyToClipboard }