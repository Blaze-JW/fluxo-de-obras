"""Build the standalone site (index.html) from the artifact page source/fluxo-de-obras.html."""
import pathlib
here = pathlib.Path(__file__).parent
page = (here / "source" / "fluxo-de-obras.html").read_text(encoding="utf-8")
head_end = page.index("</style>") + len("</style>")
head, body = page[:head_end], page[head_end:]
reset = ('<style>html{color-scheme:light}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
         'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>')
html = ('<!doctype html>\n<html lang="pt-PT">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        + reset + "\n" + head + '\n<script src="demo.js"></script>\n</head>\n<body>' + body + "\n</body>\n</html>\n")
(here / "index.html").write_text(html, encoding="utf-8")
print("site/index.html", len(html), "bytes")
