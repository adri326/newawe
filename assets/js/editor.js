'use strict';

/*
 * Return a string describing the filetype
 * given the filename.
 */
function detectFileType(filename) {
    var splitOnDot = filename.split(/\./g);
    var extension = splitOnDot[splitOnDot.length - 1];

    if(splitOnDot.length == 1) {
        // No extension.
        switch(filename) {
        case 'Rakefile':
            return 'Ruby';
        case 'Makefile':
        case 'makefile':
        case 'GNUmakefile':
        case 'BSDmakefile':
            return 'Makefile';
        default:
            return 'unknown';
        }
    }

    switch(extension) {
    case 'js':
        return 'JavaScript source';
    case 'json':
        return 'JSON code';
    case 'java':
        return 'Java source';
    case 'py':
    case 'pyw':
        return 'Python source';
    case 'pl':
    case 'plx':
    case 'pm':
    case 'pod':
        return 'Perl source';
    case 'c':
        return 'C source';
    case 'cc':
    case 'cpp':
    case 'c++':
    case 'C':
        return 'C++ source';
    case 'm':
        return 'Objective-C source';
    case 'mm':
        return 'Objective-C++ source';
    case 'h':
        return 'C/C++/Objective-C header';
    case 'hpp':
        return 'C++/Objective-C++ header';
    case 'php':
        return 'PHP source';
    case 'sh':
        return 'Shell script';
    case 'bat':
    case 'cmd':
        return 'Windows/DOS batch script';
    case 'ppm':
        return 'PPM image';
    case 'mk':
        return 'Makefile';
    case 'rb':
        return 'Ruby';
    case 'rtf':
        return 'Rich Text Format';
    case 'htm':
    case 'html':
        return 'HTML';
    case 'asp':
        return 'ASP';
    case 'aspx':
        return 'ASP.NET';
    case 'css':
        return 'CSS';
    case 'cs':
        return 'Visual C#';
    case 'bas':
        return 'BASIC';
    case 'vb':
        return 'Visual Basic.NET';
    case 'lsp':
    case 'lisp':
        return 'Lisp';
    case 'scm':
        return 'Scheme';
    case 'rkt':
        return 'Racket';
    case 'el':
        return 'Emacs Lisp';
    case 'hs':
        return 'Haskell';
    case 'xml':
        return 'XML';
    case 'yml':
    case 'yaml':
        return 'YAML';
    case 'md':
    case 'markdown':
        return 'Markdown';
    case 'rst':
        return 'reStructuredText';
    case 'asm':
        return 'Intel Assembly';
    case 's':
    case 'S':
        return 'AT&T Assembly';
    case 'lua':
        return 'Lua';
    case 'st':
        return 'Smalltalk';
    case 'vim':
        return 'VimL';
    default:
        return 'unknown';
    }
}

/*
 * Represents a text editor for a file
 * in a project.
 */
function Editor(filename) {
    this.filename = filename;
    this.element = document.createElement('textarea');
    var ft = detectFileType(filename);
    this.element.placeholder = (ft == 'unknown')
                                ? 'Edit here!'
                                : 'Edit ' + ft + ' here!';
    this.element.className = 'editor';
    this.element.id = 'editor-for-' + filename;
}
