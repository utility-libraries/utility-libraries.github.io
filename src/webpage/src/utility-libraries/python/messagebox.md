# messagebox

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/messagebox)

- [package: https://pypi.org/project/messagebox/](https://pypi.org/project/messagebox/)
- ~~docs~~ <small>(see source)</small>
- [source: https://github.com/utility-libraries/messagebox-py](https://github.com/utility-libraries/messagebox-py)

---

<small>Library README scraped 2024-03-11</small>

# PyMessageBox
 Messagebox for userinput/useroutput **WITHOUT library dependencies** like tkinter

Installation: `pip install messagebox`  
then you can replace `from tkinter import messagebox`
with `import messagebox` and your code should work fine  
(package recommended if you don't use tkinter as your gui-library)

# Supported platforms [^1]

| Platform     | Supported | Tested |
| ------------ | --------- | ------ |
| Windows      | ✓         | ✓     |
| Linux/Mint   | ✓         | ✓     |
| Linux/Ubuntu | ✓         | ✕     |
| Linux/Xorg   | ✕         | ✕     |
| Linux/GNOME  | ✕         | ✕     |
| macOS        | ✕         | ✕     |

[^1]: I need tester. please report bugs etc. under your platform  

# Message-Boxes
- showinfo
- showwarning
- showerror
- askquestion
- askokcancel
- askyesno
- askretrycancel

# Usage

```python
import messagebox

messagebox.showinfo('Success', 'This package works')
```

---
