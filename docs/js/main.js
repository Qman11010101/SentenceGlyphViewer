const getData = async function (url) {
    const res = await fetch(url);
    return await res.json();
};

async function analyze() {
    const sentence = [...document.getElementById("inse-sentence").value];
    const tableSection = document.getElementById("glyph-table");

    // Make the table empty
    const objs = tableSection.childElementCount;
    for (let c = 0; c < objs; c++) {
        tableSection.firstElementChild.remove();
    }

    if (sentence.length === 0) {
        tableSection.style.display = "none";
        return;
    };

    sentence.forEach(c => {
        let codeHex = c.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
        let charName = data[codeHex];
        let glyphLine = tableSection.appendChild(document.createElement("tr"));
        let glyph = glyphLine.appendChild(document.createElement("td"));
        glyph.innerText = c;
        let codepoint = glyphLine.appendChild(document.createElement("td"));
        codepoint.innerText = "U+" + codeHex;
        let name = glyphLine.appendChild(document.createElement("td"));
        name.innerText = charName;
    });

    tableSection.style.display = "table";
}