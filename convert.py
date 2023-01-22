import xml.etree.ElementTree as ET
import json

tree = ET.parse("ucd.all.flat.xml")
root = tree.getroot()
repertoire = root[1]
finaldict = {}
for c in repertoire:
    attr = c.attrib
    codepoint = attr.get("cp")
    if codepoint == "" or codepoint == None:
        continue
    name = attr.get("na")
    if name == "":
        aliases = []
        for a in c:
            if a.attrib.get("type") == "control":
                aliases.append(a.attrib.get("alias"))
        name = ", ".join(aliases)
    print("U+" + codepoint, name)
    finaldict[codepoint] = name

with open("unicodedict.json", "w", encoding="utf-8") as f:
    json.dump(finaldict, f, indent=2)