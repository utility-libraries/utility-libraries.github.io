# configlib

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/config-library)

- [package: https://pypi.org/project/config-library/](https://pypi.org/project/config-library/)
- [docs: https://utility-libraries.github.io/configlib-py/](https://utility-libraries.github.io/configlib-py/)
- [source: https://github.com/utility-libraries/configlib-py](https://github.com/utility-libraries/configlib-py)

---

<small>Library README scraped 2024-03-11</small>

# config-library
utility library to find and load configuration files

> see the [documentation](https://utility-libraries.github.io/configlib-py/) for more information

<img style="height: 100px" src="https://github.com/utility-libraries/configlib-py/raw/main/README.assets/configlib.svg" alt="">

<!-- TOC -->
* [config-library](#config-library)
  * [Installation](#installation)
  * [Supported Config-Types](#supported-config-types)
  * [Install Variations](#install-variations)
  * [Usage Example](#usage-example)
    * [Basic Usage](#basic-usage)
    * [Loading specific file](#loading-specific-file)
    * [Specify/Customise search locations](#specifycustomise-search-locations)
  * [More in detail](#more-in-detail)
    * [Searching](#searching)
    * [Loading](#loading)
    * [Accessing configuration](#accessing-configuration)
<!-- TOC -->

## Installation

[![PyPI - Version](https://img.shields.io/pypi/v/config-library)
](https://pypi.org/project/config-library/)

- `pip install config-library`
- `pip install config-library[all]`
- `pip install config-library[watcher]`
- `pip install config-library[json5]`
- `pip install config-library[toml]`
- `pip install config-library[yaml]`

## Supported Config-Types

| extension                | requires                              | link (for more information)                                                           |
|--------------------------|---------------------------------------|---------------------------------------------------------------------------------------|
| `.ini`/`.conf`/`.config` |                                       | <https://en.wikipedia.org/wiki/INI_file>                                              |
| `.json`                  |                                       | <https://en.wikipedia.org/wiki/JSON>                                                  |
| `.jsonc`                 |                                       | <https://changelog.com/news/jsonc-is-a-superset-of-json-which-supports-comments-6LwR> |
| `.json5`                 | `config-library[json5]`               | <https://json5.org/>                                                                  |
| `.toml`                  | `config-library[toml]` or python3.11+ | <https://toml.io/>                                                                    |
| `.yaml`/`.yml`           | `config-library[yaml]`                | <https://en.wikipedia.org/wiki/YAML>                                                  |
| `.xml`                   |                                       | <https://en.wikipedia.org/wiki/XML>                                                   |

## Install Variations

| variation                 | information                                       |
|---------------------------|---------------------------------------------------|
| `config-library[all]`     | adds all dependencies from the variations below   |
| `config-library[watcher]` | adds support to watch the config-file for changes |
| `config-library[json5]`   | adds support to load `.json5` files               |
| `config-library[toml]`    | adds support to load `.toml` files                |
| `config-library[yaml]`    | adds support to load `.yaml` files                |

## Usage Example

### Basic Usage

```python
from configlib import find_and_load

config = find_and_load("app.conf")
# config = find_and_load("app.json")  # format could be easily exchanged
# config = find_and_load("app.toml")  # depending on your needs and preferences
# config = find_and_load("app.yaml")  # and it should continue to work
# config = find_and_load("app.{yml,yaml}")  # (you can also specify multiple)

address = config.get('database', 'address')
# address = config.getstr('database', 'address')  # also possible to ensure it's of type str
port = config.getint('database', 'port', fallback=5000)
```

### Loading specific file

```python
import configlib

config = configlib.load("./app.conf")
```

### Loading from environment

```python
import configlib

config = configlib.load_environ("APP")
```

### Specify/Customise search locations

```python
from configlib.finder import find, places

config_file = find(
    "project-name.conf",  # variant of the config-file to search for is 'app.conf'
    "project-name/settings.conf",  # alternate variant name to search for
    places=[places.local, places.user_conf],  # search in main.py folder and ~/.config/
)
```

## More in detail

For the more detailed description we will use this code example.

```python
import configlib
config = configlib.find_and_load('project.conf', 'project/app.conf')
```

### Searching

The `configlib.finder` subpackage has a few predefined paths it attempts to search in.
In each of these places it attempts to find one of the passed variants (`project.conf`, `project/app.conf`).
If it can't find one it goes to the next place and repeats this process.

system file-structure
```
/
├─ etc/
├─ home/user/
│  ├─ path/to/repo/
│  │  ├─ src/code/
│  │  │  ├─ main.py
│  ├─ .config/
```
places where `config-library` searches for the config-file
- `/home/user/path/to/repo/src/code/project.conf` (next to the started script)
- `/home/user/path/to/repo/src/code/project/app.conf`
- `/home/user/path/to/repo/project.conf`  (next to .git/)
- `/home/user/path/to/repo/project/app.conf`
- `/home/user/.config/project.conf`  (~/.config/)
- `/home/user/.config/project/app.conf`
- `/home/user/project.conf`  (~/)
- `/home/user/project/app.conf`
- `/etc/project.conf`  (/etc/)
- `/etc/project/app.conf`

### Loading

After the search returns a filepath it is passed to the `load()` function.
This function analyzes the file-extension and loads it with the correct loader.

> The loader can be extended via the `configlib.loader.register_loader` decorator.
> Important is that it should return native types to be compatible with the `ConfigInterface`
> ```python
> from configlib.loader import register_loader
> 
> @register_loader("env", "environ")  # support for *.env or *.environ files 
> def custom_loader(fp) -> dict:
>     ...
> ```

### Accessing configuration

In the end you get an instance of the `ConfigInterface` with useful get-methods

```python
from configlib import ConfigInterface
config: ConfigInterface
config.get("database", "address", fallback="localhost")  # gets the value raw as parsed
config.getstr("database", "address", fallback="localhost")  # gets as string
config.getint("database", "port", fallback=5432)  # gets as integer
config.getfloat("database", "timeout", fallback=10.0)  # gets as floating point number
config.getbool("database", "delayed-connect", fallback=False)  # gets as boolean
config.getlist("database", "tables", fallback=[], cast=str)  # gets as list
config.gettuple("database", "tables", fallback=[], cast=str)  # gets as tuple
config.getsplit("database", "tables")  # clean split by `,` or `;`
config.getpath("database", "client-paths", fallback="./")  # returns as pathlib.Path
config.getpaths("database", "client-paths", fallback=[], as_path=True)  # split by os.path.altsep (commonly `:`)
config.getshlex("database", "additional-params", fallback=[])  # split like the command-line
config.getinterface("database")  # gets a new ConfigInterface for sub-option
config.gettype("database", "timeout")  # gets the type/class (e.g. int | float)
```

---
