'use strict';

/*
 * Represents a single file in a
 * project.
 */
function File(name) {
    var title = document.createElement('h4');
    var editor = new Editor(name);
    title.textContent = name;
    this.element = document.createElement('li');
    this.element.appendChild(title);
    this.element.appendChild(editor.element);
}

/*
 * Represents a project.
 */
function Project(name) {
    var title = document.querySelector('h3#project-name');
    title.textContent = name;
    this.name = name;
    this.files = {};
}

Project.prototype.addfile = function() {
    var name = prompt('File name?');
    var files = document.querySelector('ul#files');
    var file = new File(name);
    files.appendChild(file.element);
    this.files[name] = file;
}
