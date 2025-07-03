const getData = async function (url) {
    const res = await fetch(url)
    return await res.json()
}

async function analyze() {
    const sentence = [...document.getElementById("inse-sentence").value]
    const tableSection = document.getElementById("glyph-table")

    // Make the table empty
    while (tableSection.firstChild) tableSection.removeChild(tableSection.firstChild)

    if (sentence.length === 0) {
        tableSection.style.display = "none"
        return
    }

    sentence.forEach(c => {
        const codeHex = c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")
        const charName = data[codeHex]
        const glyphLine = tableSection.appendChild(document.createElement("tr"))
        const glyph = glyphLine.appendChild(document.createElement("td"))
        glyph.textContent = c
        const codepoint = glyphLine.appendChild(document.createElement("td"))
        codepoint.appendChild(document.createElement("a").href = "https://codepoints.net/U+" + codeHex)
        const name = glyphLine.appendChild(document.createElement("td"))
        name.textContent = charName
    })

    tableSection.style.display = "table"
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modify").textContent = modifyTime
})