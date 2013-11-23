/**
 * Duck encoding library for JavaScript.
 *
 * @link       https://www.GitHub.com/MrAnchovy/Duck-encoding
 * @version    0.9.1-dev
 * @copyright  JavaScript copyright © 2013 MrAnchovy.
 * @license    [MIT](http://opensource.org/licenses/MIT)
 * @copyright  Duck encoding copyright © 2013 MrAnchovy.
 * @license    [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
**/

"use strict;"

var Duck = {

    version: '0.9.1-dev',

    /**
     * Duck codes in key: value pairs
    **/
    codes: {
        // compound codes come first so reverse encoding works
        __su: '://', // Scheme (Url)
        __id: '===', // IDentically equal comparison operator
        __ni: '!==', // Not Identically equal comparison operator

        __bb: '\\',
        __cb: ':\\', // this is ':\' escaped
        __cc: '::',    // Colon Colon
        __ee: '==',    // Equal comparison operator
        __eg: '=>',    // Equal Greater than
        __ne: '!=',    // Not Equal comparison operator
        __pr: '->',    // PRoperty
        __ss: '//',

        __am: '&',
        __as: '*',
        __at: '@',
        __ax: String.fromCharCode(0x2248), // ApproXimately equal
        __bt: '`',
        __ca: ',',    // CommA
        __ci: '^',    // Circumflex
        __cn: ':',    // ColoN
        __da: '-',    // DAsh
        __dq: '"',
        __di: String.fromCharCode(0xF7),     // DIvide sign
        __ds: '$',
        __eq: '=',
        __fs: '.',
        __ex: '!',
        __gt: '>',
        __ge: String.fromCharCode(0x2265), // Greater than or equal sign
        __ha: '#',
        __lb: '(',
        __lc: '{',
        __le: String.fromCharCode(0x2264), // Less than or equal sign
        __ls: '[',
        __lt: '<',
        __pc: '%',
        __pl: '+',
        __pm: String.fromCharCode(0xB1),     // Plus Minus sign
        __qm: '?',
        __rb: ')',
        __rc: '}',
        __rs: ']',
        __sc: ';',
        __sl: '/',
        __sq: "'",
        __ti: '~',
        __ts: String.fromCharCode(0xD7), // Times Sign
        __vb: '|',

        // aliases come last
        __ch: '^',    // Chevron, alias for circumflex
        __lp: '(',    // Left Parenthehesis, alias for __lb
        __mi: '-',    // MInus, alias for __da
        __rp: ')',    // Right Parenthehesis, alias for __rb

        // possible extensions
        __ba: '!',                                                    // BAng, alias for __ex
        __bu: String.fromCharCode(0x2022),    // Bullet
        __cr: String.fromCharCode(0xA9),        // CopyRight
        __el: String.fromCharCode(0x2026),    // horizontal ELlipsis
        __es: String.fromCharCode(0x20AC),    // Euro Sign
        __jk: ';)',                                                 // Just Kidding
        __rm: String.fromCharCode(0xAE),        // Registration Mark
        __sa: ':(',                                                 // Sad
        __sm: ':)',                                                 // Smiley
        __st: '*',                                                    // STar, alias for __as
        __tm: String.fromCharCode(0x2122)     // Trade Mark

        // __us: '_' and _: ' ' are not included so we can use this to convert both ways

        // etc...
    },

    /**
     * Decode a Duckcoded string.
     *
     * @param   string  Encoded input.
     * @return  string  Encoded output.
    **/
    decode: function (str) {
        // do all the codes
        $.each(Duck.codes, function (key, val) {
            str = str.split(key).join(val);
        });
        // now do underscores to spaces
        str = str.split('_').join(' ');
        /// and finally decode __us to underscore
        str = str.split('__us').join('_');
        return str;
    },

    /**
     * Encode a UTF-8 string into Duckcode.
     *
     * @param   string   Raw input.
     * @param   boolean  Ignore unrecognised characters (default false).
     * @return  string   Encoded output.
    **/
    encode: function (str, ignore) {
        // first encode underscores
        str = str.split('_').join('__us');
        // do all the codes
        $.each(Duck.codes, function (key, val) {
            str = str.split(val).join(key);
        });
        // and finally do spaces to underscores
        str = str.split(' ').join('_');
        return str;
    }
};

// jQuery plugin
if (jQuery) {
    (function ($) {
        $.fn.duckcode = function(action) {
            switch (action) {
                case 'encode' :
                    this.each(function () {
                        var $this = $(this);
                        $this.html(Duck.encode($this.html()));
                    });
                    break;
                case 'decode' :
                    this.each(function () {
                        var $this = $(this);
                        $this.html(Duck.decode($this.html()));
                    });
                    break;
            }
            return this;
        };
    }(jQuery));
}
