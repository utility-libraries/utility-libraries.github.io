# TinyDB

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/tinydb)

- [package: https://pypi.org/project/tinydb/](https://pypi.org/project/tinydb/)
- [docs: https://tinydb.readthedocs.io/](https://tinydb.readthedocs.io/)
- [source: https://github.com/msiemens/tinydb](https://github.com/msiemens/tinydb)

---

<small>Library README scraped 2024-03-14</small>

![image](https://raw.githubusercontent.com/msiemens/tinydb/master/artwork/logo.png){height="150px"}

[![Build
Status](https://img.shields.io/azure-devops/build/msiemens/3e5baa75-12ec-43ac-9728-89823ee8c7e2/2.svg?style=flat-square)](https://dev.azure.com/msiemens/github/_build?definitionId=2)
[![Coverage](http://img.shields.io/coveralls/msiemens/tinydb.svg?style=flat-square)](https://coveralls.io/r/msiemens/tinydb)
[![Version](http://img.shields.io/pypi/v/tinydb.svg?style=flat-square)](https://pypi.python.org/pypi/tinydb/)

Quick Links
===========

-   [Example Code](#example-code)
-   [Supported Python Versions](#supported-python-versions)
-   [Documentation](http://tinydb.readthedocs.org/)
-   [Changelog](https://tinydb.readthedocs.io/en/latest/changelog.html)
-   [Extensions](https://tinydb.readthedocs.io/en/latest/extensions.html)
-   [Contributing](#contributing)

Introduction
============

TinyDB is a lightweight document oriented database optimized for your
happiness :) It\'s written in pure Python and has no external
dependencies. The target are small apps that would be blown away by a
SQL-DB or an external database server.

TinyDB is:

-   **tiny:** The current source code has 1800 lines of code (with about
    40% documentation) and 1600 lines tests.
-   **document oriented:** Like [MongoDB](http://mongodb.org/), you can
    store any document (represented as `dict`) in TinyDB.
-   **optimized for your happiness:** TinyDB is designed to be simple
    and fun to use by providing a simple and clean API.
-   **written in pure Python:** TinyDB neither needs an external server
    (as e.g. [PyMongo](https://api.mongodb.org/python/current/)) nor any
    dependencies from PyPI.
-   **works on Python 3.8+ and PyPy3:** TinyDB works on all modern
    versions of Python and PyPy.
-   **powerfully extensible:** You can easily extend TinyDB by writing
    new storages or modify the behaviour of storages with Middlewares.
-   **100% test coverage:** No explanation needed.

To dive straight into all the details, head over to the [TinyDB
docs](https://tinydb.readthedocs.io/). You can also discuss everything
related to TinyDB like general development, extensions or showcase your
TinyDB-based projects on the [discussion
forum](http://forum.m-siemens.de/.).

Supported Python Versions
=========================

TinyDB has been tested with Python 3.8 - 3.11 and PyPy3.

Example Code
============

```python
>>> from tinydb import TinyDB, Query
>>> db = TinyDB('/path/to/db.json')
>>> db.insert({'int': 1, 'char': 'a'})
>>> db.insert({'int': 1, 'char': 'b'})
```

Query Language
--------------

```python
>>> User = Query()
>>> # Search for a field value
>>> db.search(User.name == 'John')
[{'name': 'John', 'age': 22}, {'name': 'John', 'age': 37}]

>>> # Combine two queries with logical and
>>> db.search((User.name == 'John') & (User.age <= 30))
[{'name': 'John', 'age': 22}]

>>> # Combine two queries with logical or
>>> db.search((User.name == 'John') | (User.name == 'Bob'))
[{'name': 'John', 'age': 22}, {'name': 'John', 'age': 37}, {'name': 'Bob', 'age': 42}]

>>> # Apply transformation to field with `map`
>>> db.search((User.age.map(lambda x: x + x) == 44))
>>> [{'name': 'John', 'age': 22}]

>>> # More possible comparisons:  !=  <  >  <=  >=
>>> # More possible checks: where(...).matches(regex), where(...).test(your_test_func)
```

Tables
------

```python
>>> table = db.table('name')
>>> table.insert({'value': True})
>>> table.all()
[{'value': True}]
```

Using Middlewares
-----------------

```python
>>> from tinydb.storages import JSONStorage
>>> from tinydb.middlewares import CachingMiddleware
>>> db = TinyDB('/path/to/db.json', storage=CachingMiddleware(JSONStorage))
```

Contributing
============

Whether reporting bugs, discussing improvements and new ideas or writing
extensions: Contributions to TinyDB are welcome! Here\'s how to get
started:

1.  Check for open issues or open a fresh issue to start a discussion
    around a feature idea or a bug
2.  Fork [the repository](https://github.com/msiemens/tinydb/) on
    Github, create a new branch off the [master]{.title-ref} branch and
    start making your changes (known as [GitHub
    Flow](https://guides.github.com/introduction/flow/index.html))
3.  Write a test which shows that the bug was fixed or that the feature
    works as expected
4.  Send a pull request and bug the maintainer until it gets merged and
    published ☺

---
