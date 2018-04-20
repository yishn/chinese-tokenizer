"use strict";
var Entry = (function () {
    function Entry(trad, simpl, pinyin, english) {
        this.traditional = trad;
        this.simplified = simpl;
        this.pinyin = pinyin;
        this.english = english;
    }
    return Entry;
}());
exports.Entry = Entry;
