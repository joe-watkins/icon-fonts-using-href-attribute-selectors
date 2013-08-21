#Icon Fonts using href attribute selectors and a custom bundled Icomoon icon font.

Instead of using classes or extra markup we leverage href attribute selectors.

## Demo
http://codepen.io/joe-watkins/full/wyehm

## Usage
Download in integrate the custom Icomoon web font into your project... then include the needed CSS. I've included the .scss file as well.

## html
	<div class="icomoon-files">
	  <ul>
	    <li><a href="file.pdf">I'm a .pdf</a></li>
	    <li><a href="file.doc">I'm a .doc</a></li>
	    <li><a href="file.zip">I'm a .zip</a></li>
	    <li><a href="file.csv">I'm a .csv</a></li>
	    <li><a href="file.ppt">I'm a .ppt</a></li>
	  </ul>
	</div>

## CSS
	.icomoon-files a:before {
	  font-family: 'IcoMoonFiles';
	}
	.icomoon-files [href$=".pdf"]:before {
	  content: "\e008";
	  color: #dc0012;
	}
	.icomoon-files [href$=".doc"]:before {
	  content: "\e00a";
	  color: #24468d;
	}
	.icomoon-files [href$=".csv"]:before {
	  content: "\e00b";
	  color: #006e01;
	}
	.icomoon-files [href$=".zip"]:before {
	  content: '\e00c';
	  color: #ed7a0e;
	}
	.icomoon-files [href$=".ppt"]:before {
	  content: '\e00d';
	  color: #dc5900;
	}