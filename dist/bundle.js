/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chinese_tokenizer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chinese_tokenizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chinese_tokenizer__);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cedict = __webpack_require__(2);
var pinyin = __webpack_require__(6);
var dedupe = __webpack_require__(7);

var Tokenizer = function () {
    function Tokenizer(dictionary, options) {
        _classCallCheck(this, Tokenizer);

        this.dictionary = dictionary;
        this.options = options;
    }

    _createClass(Tokenizer, [{
        key: 'tokenize',
        value: function tokenize(text) {
            var _this = this;

            var type = this.options.type;

            var result = [];
            var i = 0;

            var pushEntry = function pushEntry(text) {
                var matches = _this.dictionary.getMatch(text);

                if (!matches.length) {
                    result.push({
                        traditional: text,
                        simplified: text,
                        pinyin: null,
                        pinyinPretty: null,
                        english: null
                    });
                } else {
                    var rawPinyin = dedupe(matches.map(function (x) {
                        return x.pinyin.trim().toLowerCase();
                    }));

                    result.push({
                        traditional: matches[0].traditional,
                        simplified: matches[0].simplified,
                        pinyin: rawPinyin.join('/'),
                        pinyinPretty: rawPinyin.map(function (x) {
                            return pinyin.prettify(x.replace(/u:/g, 'ü'));
                        }).join('/'),
                        english: dedupe(matches.map(function (x) {
                            return x.english;
                        })).join('\n')
                    });
                }
            };

            while (i < text.length) {
                // First match two or more characters

                if (i != text.length - 1) {
                    var getTwo = text.slice(i, i + 2);
                    var entries = this.dictionary.getEntriesStartingWith(getTwo);
                    var entry = void 0;

                    entries.sort(function (x, y) {
                        return y[type].length - x[type].length;
                    });

                    for (var j = 0; j < entries.length; j++) {
                        if (text.slice(i, i + entries[j][type].length) != entries[j][type]) continue;

                        entry = entries[j];
                        pushEntry(entry[type]);
                        break;
                    }

                    if (entry) {
                        i += entry[type].length;
                        continue;
                    }
                }

                // If all fails, match one character

                var character = text[i];
                pushEntry(character);

                i++;
            }

            return result;
        }
    }]);

    return Tokenizer;
}();

module.exports = function (path) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'simplified';

    var dictionary = void 0,
        options = { path: path, type: type };

    if (type == 'simplified') {
        dictionary = cedict.loadSimplified(path);
    } else {
        dictionary = cedict.loadTraditional(path);
    }

    return new Tokenizer(dictionary, options);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parser_1 = __webpack_require__(3);
/**
 * An implementation of Cedict using the prefix tree data structure.
 * Each node (except for the root) contains a character, and contains a list of
 * entries formed by the characters in the path from the root to the node.
 * It uses the traditional attribute as the lookup key into the tree.
 */
var Cedict = function () {
    function Cedict(filename, trad) {
        var entries = parser_1.CedictParser.parse(filename);
        this.traditional = trad;
        this.root = new CedictNode("");
        this.populateTree(entries);
    }
    Cedict.prototype.getMatch = function (query) {
        var node = this.getNodeForWord(query);
        return node != null ? node.entries : [];
    };
    Cedict.prototype.getEntriesStartingWith = function (query) {
        var node = this.getNodeForWord(query);
        return node != null ? this.gatherEntriesUnderNode(node) : [];
    };
    /**
     * E.g. for a query of "我們是" this will return entries for 我 and 我們
     */
    Cedict.prototype.getPrefixEntries = function (query) {
        var node = this.root;
        var entries = [];
        for (var i = 0; i < query.length; i++) {
            var nextChar = query[i];
            if (node.suffixes[nextChar] === undefined) {
                break;
            }
            node = node.suffixes[nextChar];
            Array.prototype.push.apply(entries, node.entries);
        }
        return entries;
    };
    Cedict.prototype.populateTree = function (entries) {
        for (var i = 0; i < entries.length; i++) {
            this.insertEntry(entries[i]);
        }
    };
    Cedict.prototype.insertEntry = function (entry) {
        var node = this.root;
        var characters = this.traditional ? entry.traditional : entry.simplified;
        while (node.word != characters) {
            var nextChar = characters[node.word.length];
            if (node.suffixes[nextChar] === undefined) {
                // never seen this character sequence before, so make a node for it
                node.suffixes[nextChar] = new CedictNode(node.word + nextChar);
            }
            node = node.suffixes[nextChar];
        }
        node.entries.push(entry);
    };
    Cedict.prototype.gatherEntriesUnderNode = function (node) {
        if (node == null) {
            return [];
        }
        var entries = [];
        Array.prototype.push.apply(entries, node.entries);
        // get the entries from all the child nodes
        for (var suffix in node.suffixes) {
            Array.prototype.push.apply(entries, this.gatherEntriesUnderNode(node.suffixes[suffix]));
        }
        return entries;
    };
    /**
     * Returns null if the node is not found
     */
    Cedict.prototype.getNodeForWord = function (word) {
        var node = this.root;
        for (var i = 0; i < word.length; i++) {
            var nextChar = word[i];
            if (node.suffixes[nextChar] === undefined) {
                return null;
            }
            node = node.suffixes[nextChar];
        }
        return node;
    };
    return Cedict;
}();
var CedictNode = function () {
    function CedictNode(w) {
        this.word = w;
        this.entries = [];
        this.suffixes = {};
    }
    return CedictNode;
}();
function loadTraditional(filename) {
    return new Cedict(filename, true);
}
exports.loadTraditional = loadTraditional;
function loadSimplified(filename) {
    return new Cedict(filename, false);
}
exports.loadSimplified = loadSimplified;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs_1 = __webpack_require__(4);
var entry_1 = __webpack_require__(5);
var CedictParser = function () {
    function CedictParser() {}
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
            var line = lines[i];
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
        var lastNonSlashChar = line.length - 2;
        var traditional = line.substr(0, firstSpace);
        var simplified = line.substr(firstSpace + 1, secondSpace - firstSpace - 1);
        var pinyin = line.substr(leftBracket + 1, rightBracket - leftBracket - 1);
        var english = line.substr(firstSlash + 1, lastNonSlashChar - firstSlash - 1);
        return new entry_1.Entry(traditional, simplified, pinyin, english);
    };
    return CedictParser;
}();
exports.CedictParser = CedictParser;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["readFileSync"] = readFileSync;
function readFileSync(path) {
    return window.cedictData;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Entry = function () {
    function Entry(trad, simpl, pinyin, english) {
        this.traditional = trad;
        this.simplified = simpl;
        this.pinyin = pinyin;
        this.english = english;
    }
    return Entry;
}();
exports.Entry = Entry;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Quick guide for typing Chinese pinyin on Mac OS X

// Tone 1 (flat) mā – Option + a, then hit a vowel key
// Tone 2 (rising) má – Option + e, then hit a vowel key
// Tone 3 (falling-rising) mǎ – Option + v, then hit a vowel key
// Tone 4 (falling) mà – Option + `, then hit a vowel key

// ǚ – Option + V, then hit V (submitted by QA)
// ǜ – Option + `, then hit V (submitted by QA)


var replacements = {
  'a': ['ā', 'á', 'ǎ', 'à'],
  'e': ['ē', 'é', 'ě', 'è'],
  'u': ['ū', 'ú', 'ǔ', 'ù'],
  'i': ['ī', 'í', 'ǐ', 'ì'],
  'o': ['ō', 'ó', 'ǒ', 'ò'],
  'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
};

var medials = ['i', 'u', 'ü'];

var prettify = function prettify(str) {
  str = str.replace('v', 'ü');
  var syllables = str.split(' ');

  for (var i = 0; i < syllables.length; i++) {
    var syllable = syllables[i];
    var tone = parseInt(syllable[syllable.length - 1]);

    if (tone <= 0 || tone > 5) {
      console.error('invalid tone number:', tone, 'in', syllable);
    } else if (tone === 5) {
      syllables[i] = syllable.slice(0, syllable.length - 1);
    } else {
      for (var j = 0; j < syllable.length; j++) {
        var currentLetter = syllable[j];
        var nextLetter = syllable[j + 1];

        // found a vowel
        if (replacements[currentLetter]) {
          var replaced;
          var letterToReplace;

          // two consecutive vowels
          if (replacements[nextLetter] && medials.indexOf(currentLetter) >= 0) {
            letterToReplace = nextLetter;
          } else {
            letterToReplace = currentLetter;
          }

          replaced = syllable.replace(letterToReplace, replacements[letterToReplace][tone - 1]);
          syllables[i] = replaced.slice(0, replaced.length - 1);
          break;
        }
      }
    }
  }
  return syllables.join(' ');
};

module.exports.prettify = prettify;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var sigmund = __webpack_require__(8);

function dedupe(client, hasher) {
    hasher = hasher || sigmund;

    var clone = [];
    var lookup = {};

    for (var i = 0; i < client.length; i++) {
        var elem = client[i];
        var hashed = hasher(elem);

        if (!lookup[hashed]) {
            clone.push(elem);
            lookup[hashed] = true;
        }
    }

    return clone;
}

module.exports = dedupe;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = sigmund;
function sigmund(subject, maxSessions) {
    maxSessions = maxSessions || 10;
    var notes = [];
    var analysis = '';
    var RE = RegExp;

    function psychoAnalyze(subject, session) {
        if (session > maxSessions) return;

        if (typeof subject === 'function' || typeof subject === 'undefined') {
            return;
        }

        if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) !== 'object' || !subject || subject instanceof RE) {
            analysis += subject;
            return;
        }

        if (notes.indexOf(subject) !== -1 || session === maxSessions) return;

        notes.push(subject);
        analysis += '{';
        Object.keys(subject).forEach(function (issue, _, __) {
            // pseudo-private values.  skip those.
            if (issue.charAt(0) === '_') return;
            var to = _typeof(subject[issue]);
            if (to === 'function' || to === 'undefined') return;
            analysis += issue;
            psychoAnalyze(subject[issue], session + 1);
        });
    }
    psychoAnalyze(subject, 0);
    return analysis;
}

// vim: set softtabstop=4 shiftwidth=4:

/***/ })
/******/ ]);