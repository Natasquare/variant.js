module.exports = {
    format,
    getStyles
}

/**
 * @param {string} i Your string
 * @param {string} o The Unicode variant
 * @param {string} r String flags
 * @description Convert a string into different kind of ✨ Unicode ✨ variants.
 */

function format(i, o, r) {
    const n = {
            m: [120432, 120822],
            b: [119808, 120782],
            i: [119860, 48],
            bi: [119912, 48],
            c: [119964, 48],
            bc: [120016, 48],
            g: [120068, 48],
            d: [120120, 120792],
            bg: [120172, 48],
            s: [120224, 120802],
            bs: [120276, 120812],
            is: [120328, 48],
            bis: [120380, 48],
            o: [9398, 9312],
            p: [9372, 9332],
            w: [65313, 65296],
            u: [8336, 65296],
        },
        t = {
            monospace: "m",
            bold: "b",
            italic: "i",
            "bold italic": "bi",
            script: "c",
            "bold script": "bc",
            gothic: "g",
            "gothic bold": "bg",
            doublestruck: "d",
            sans: "s",
            "bold sans": "bs",
            "italic sans": "is",
            "bold italic sans": "bis",
            parenthesis: "p",
            circled: "o",
            fullwidth: "w",
        };
    for (
        var s = {
                m: {
                    " ": 8192,
                    "-": 8211
                },
                i: {
                    h: 8462
                },
                g: {
                    C: 8493,
                    H: 8460,
                    I: 8465,
                    R: 8476,
                    Z: 8488
                },
                o: {
                    0: 9450,
                    1: 9312,
                    2: 9313,
                    3: 9314,
                    4: 9315,
                    5: 9316,
                    6: 9317,
                    7: 9318,
                    8: 9319,
                    9: 9320,
                },
                p: {},
                w: {},
            },
            c = 97; c <= 122; c++
    )
        s.p[String.fromCharCode(c)] = c - 97 + 9372;
    for (c = 97; c <= 122; c++) s.w[String.fromCharCode(c)] = c - 97 + 65345;
    var d = function (i, o) {
            return !!o && o.split(",").indexOf(i) > -1;
        },
        e = (function (i) {
            return t[i] ? t[i] : n[i] ? i : "m";
        })(o),
        b = d("underline", r),
        a = d("strike", r),
        l = "";
    for (var f of i) {
        let i,
            o = f;
        s[e] && s[e][o] && (o = String.fromCodePoint(s[e][o])),
            e &&
            (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(
                o
            )) > -1 ?
            (l += String.fromCodePoint(i + n[e][0])) :
            e && (i = "0123456789".indexOf(o)) > -1 ?
            (l += String.fromCodePoint(i + n[e][1])) :
            (l += o),
            b && (l += "̲"),
            a && (l += "̶");
    }
    return l;
};

/**
 * @description Get a list of variants and flags
 */

function getStyles() {
    return {
        variants: [
            "monospace",
            "bold",
            "italic",
            "bold italic",
            "script",
            "bold script",
            "gothic",
            "gothic bold",
            "doublestruck",
            "sans",
            "bold sans",
            "italic sans",
            "bold italic sans",
            "circled",
            "parathesis",
            "fullwidth"
        ],
        flags: [
            "underline",
            "strike"
        ]
    };
};