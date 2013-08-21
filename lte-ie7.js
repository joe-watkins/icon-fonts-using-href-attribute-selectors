/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'IcoMoonFiles\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-file' : '&#xe000;',
			'icon-profile' : '&#xe001;',
			'icon-file-2' : '&#xe002;',
			'icon-file-3' : '&#xe003;',
			'icon-file-4' : '&#xe004;',
			'icon-copy' : '&#xe005;',
			'icon-copy-2' : '&#xe006;',
			'icon-libreoffice' : '&#xe007;',
			'icon-file-pdf' : '&#xe008;',
			'icon-file-openoffice' : '&#xe009;',
			'icon-file-word' : '&#xe00a;',
			'icon-file-excel' : '&#xe00b;',
			'icon-file-zip' : '&#xe00c;',
			'icon-file-powerpoint' : '&#xe00d;',
			'icon-file-xml' : '&#xe00e;',
			'icon-file-css' : '&#xe00f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};