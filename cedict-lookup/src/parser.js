"use strict";
var fs_1 = require("fs");
var entry_1 = require("./entry");
var CedictParser = (function () {
    function CedictParser() {
    }
    /**
     * Parses a CEDICT text file into a list of entries
     */
    CedictParser.parse = function (file) {
        var text = fs_1.readFileSync(file, "utf-8");
        return CedictParser.parseCedictText(text);
    };
    CedictParser.parseCedictText = function (text) {
        var lines = text.split("\n");
        var entries = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            // ignore non-entry lines
            if (line.length === 0 || line[0] === "#") {
                continue;
            }
            entries.push(CedictParser.parseCedictLine(line));
        }
        return entries;
    };
    CedictParser.parseCedictLine = function (line) {
        // Entries have this format:
        // TRADITIONAL SIMPLIFIED [PINYIN] /ENGLISH 1/ENGLISH 2/
        var firstSpace = line.indexOf(" ");
        var secondSpace = line.indexOf(" ", firstSpace + 1);
        var leftBracket = line.indexOf("[");
        var rightBracket = line.indexOf("]");
        var firstSlash = line.indexOf("/");
        var lastNonSlashChar = line.length - 1;
        var traditional = line.substr(0, firstSpace);
        var simplified = line.substr(firstSpace + 1, secondSpace - firstSpace - 1);
        var pinyin = line.substr(leftBracket + 1, rightBracket - leftBracket - 1);
        var english = line.substr(firstSlash + 1, lastNonSlashChar - firstSlash - 1);
        return new entry_1.Entry(traditional, simplified, pinyin, english);
    };
    return CedictParser;
}());
exports.CedictParser = CedictParser;
