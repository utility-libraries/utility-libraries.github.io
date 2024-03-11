# fixpath

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/fixpath)

- [package: https://pypi.org/project/fixpath/](https://pypi.org/project/fixpath/)
- ~~docs~~ <small>(see source)</small>
- [source: https://github.com/utility-libraries/fixpath-py](https://github.com/utility-libraries/fixpath-py)

---

<small>Library README scraped 2024-03-11</small>

# FixPath.py
 fix incorrect user-path-inputs


# Installation
`pip install fixpath`


# Usage
```python
from fixpath import findpath

path = input("Enter path: ")
# path = 'scr/fipath'
path = findpath(path)
# path = 'src/fixpath'
```
- `findpath('REAMDE.md')` -> `README.md`
- `findpath('LIECNSE')` -> `LICENSE`

# Comment
tested in windows but should also work under linux

---
