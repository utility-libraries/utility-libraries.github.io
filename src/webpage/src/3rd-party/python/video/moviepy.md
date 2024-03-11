# MoviePy

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/moviepy)

- [package: https://pypi.org/project/moviepy/](https://pypi.org/project/moviepy/)
- [docs: https://zulko.github.io/moviepy/](https://zulko.github.io/moviepy/)
- [source: https://github.com/Zulko/moviepy](https://github.com/Zulko/moviepy)

---

<small>Library README scraped 2024-03-11</small>

# MoviePy

[![MoviePy page on the Python Package Index](https://badge.fury.io/py/moviepy.svg)](https://pypi.org/project/moviepy/)

[![Discuss MoviePy on Gitter](https://img.shields.io/gitter/room/movie-py/gitter?color=46BC99&logo=gitter)]()

[![Build status on gh-actions](https://img.shields.io/github/actions/workflow/status/Zulko/moviepy/test_suite.yml?logo=github)](https://github.com/Zulko/moviepy/actions/workflows/test_suite.yml)

[![Code coverage from coveralls.io](https://img.shields.io/coveralls/github/Zulko/moviepy/master?logo=coveralls)](https://coveralls.io/github/Zulko/moviepy?branch=master)

MoviePy (full [documentation](https://zulko.github.io/moviepy/)) is a
Python library for video editing: cutting, concatenations, title
insertions, video compositing (a.k.a. non-linear editing), video
processing, and creation of custom effects. See the
[gallery](https://zulko.github.io/moviepy/gallery.html) for some
examples of use.

MoviePy can read and write all the most common audio and video formats,
including GIF, and runs on Windows/Mac/Linux, with Python 3.6+. Here it
is in action in an IPython notebook:

![\[logo\]](https://raw.githubusercontent.com/Zulko/moviepy/master/docs/demo_preview.jpeg){.align-center}

## Example

In this example we open a video file, select the subclip between t=50s
and t=60s, add a title at the center of the screen, and write the result
to a new file:

``` python
from moviepy import *

video = VideoFileClip("myHolidays.mp4").subclip(50,60)

# Make the text. Many more options are available.
txt_clip = ( TextClip("My Holidays 2013",fontsize=70,color='white')
             .with_position('center')
             .with_duration(10) )

result = CompositeVideoClip([video, txt_clip]) # Overlay text on video
result.write_videofile("myHolidays_edited.webm",fps=25) # Many options...
```

*Note:* This example uses the new 2.x API, for MoviePy 1.0.3, currently
on PyPI, see [this
snippet](https://gist.github.com/Zulko/57e6e50debef1834fb9b60700b1b9f99).

## Maintainers wanted!

As there are more and more people seeking support (270 open issues as of
Jan. 2021!) and all the MoviePy maintainers seem busy, we\'d love to
hear about developers interested in giving a hand and solving some of
the issues (especially the ones that affect you) or reviewing pull
requests. Open an issue or contact us directly if you are interested.
Thanks!

## Installation

MoviePy depends on the Python modules
[NumPy](https://www.scipy.org/install.html),
[Imageio](https://imageio.github.io/),
[Decorator](https://pypi.python.org/pypi/decorator), and
[Proglog](https://github.com/Edinburgh-Genome-Foundry/Proglog), which
will be automatically installed during MoviePy\'s installation. The
software FFMPEG should be automatically downloaded/installed (by
imageio) during your first use of MoviePy (installation will take a few
seconds). If you want to use a specific version of FFMPEG, follow the
instructions in `config_defaults.py`. In case of trouble, provide
feedback.

**Installation by hand:** download the sources, either from
[PyPI](https://pypi.python.org/pypi/moviepy) or, if you want the
development version, from [GitHub](https://github.com/Zulko/moviepy),
unzip everything into one folder, open a terminal and type:

``` bash
$ (sudo) python setup.py install
```

**Installation with pip:** if you have `pip` installed, just type this
in a terminal:

``` bash
$ (sudo) pip install moviepy
```

If you have neither `setuptools` nor `ez_setup` installed, the command
above will fail. In this case type this before installing:

``` bash
$ (sudo) pip install setuptools
```

### Optional but useful dependencies

You can install `moviepy` with all dependencies via:

``` bash
$ (sudo) pip install moviepy[optional]
```

[ImageMagick](https://www.imagemagick.org/script/index.php) is not
strictly required, but needed if you want to incorporate texts. It can
also be used as a backend for GIFs, though you can also create GIFs with
MoviePy without ImageMagick.

Once you have installed ImageMagick, MoviePy will try to autodetect the
path to its executable. If it fails, you can still configure it by
setting environment variables (see the documentation).

[PyGame](https://www.pygame.org/download.shtml) is needed for video and
sound previews (not relevant if you intend to work with MoviePy on a
server but essential for advanced video editing by hand).

For advanced image processing, you will need one or several of the
following packages:

-   The Python Imaging Library (PIL) or, even better, its branch
    [Pillow](https://pillow.readthedocs.org/en/latest/).
-   [Scipy](https://www.scipy.org/) (for tracking, segmenting, etc.) can
    be used to resize video clips if PIL and OpenCV are not installed.
-   [Scikit Image](https://scikit-image.org/docs/stable/install.html)
    may be needed for some advanced image manipulation.
-   [OpenCV 2.4.6](https://github.com/skvark/opencv-python) or a more
    recent version (one that provides the package `cv2`) may be needed
    for some advanced image manipulation.
-   [Matplotlib](https://matplotlib.org/)

For instance, using the method `clip.resize` requires that at least one
of Scipy, PIL, Pillow or OpenCV is installed.

## Documentation

Building the documentation has additional dependencies that require
installation.

``` bash
$ (sudo) pip install moviepy[doc]
```

The documentation can be generated and viewed via:

``` bash
$ python setup.py build_docs
```

You can pass additional arguments to the documentation build, such as
clean build:

``` bash
$ python setup.py build_docs -E
```

More information is available from the
[Sphinx](https://www.sphinx-doc.org/en/master/setuptools.html)
documentation.

## New in 1.0.0: Progress bars and messages with Proglog

Non-backwards-compatible changes were introduced in 1.0.0 to manage
progress bars and messages using
[Proglog](https://github.com/Edinburgh-Genome-Foundry/Proglog), which
enables to display nice progress bars in the console as well as in a
Jupyter notebook or any user interface, like a website.

To display notebook friendly progress bars, first install IPyWidgets:

``` 
sudo pip install ipywidgets
sudo jupyter nbextension enable --py --sys-prefix widgetsnbextension
```

Then at the beginning of your notebook enter:

``` python
import proglog
proglog.notebook()
```

Have a look at the Proglog project page for more options.

## Contribute

MoviePy is open-source software originally written by
[Zulko](https://github.com/Zulko) and released under the MIT licence.
The project is hosted on [GitHub](https://github.com/Zulko/moviepy),
where everyone is welcome to contribute, ask for help or simply give
feedback. Please read our [Contributing
Guidelines](https://github.com/Zulko/moviepy/blob/master/CONTRIBUTING.md)
for more information about how to contribute!

You can also discuss the project on
[Reddit](https://www.reddit.com/r/moviepy/) or
[Gitter](https://gitter.im/movie-py/Lobby). These are preferred over
GitHub issues for usage questions and examples.

## Maintainers

-   [Zulko](https://github.com/Zulko) (owner)
-   [\@tburrows13](https://github.com/tburrows13)
-   [\@mgaitan](https://github.com/mgaitan)
-   [\@earney](https://github.com/earney)
-   [\@mbeacom](https://github.com/mbeacom)
-   [\@overdrivr](https://github.com/overdrivr)
-   [\@keikoro](https://github.com/keikoro)
-   [\@ryanfox](https://github.com/ryanfox)
-   [\@mondeja](https://github.com/mondeja)

---
