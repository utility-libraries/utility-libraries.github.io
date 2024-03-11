# AIOHTTP

<!--
Add a short description here
-->

![PyPI-Version](https://img.shields.io/pypi/v/aiohttp)

- [package: https://pypi.org/project/aiohttp/](https://pypi.org/project/aiohttp/)
- [docs: https://docs.aiohttp.org/en/stable/](https://docs.aiohttp.org/)
- [source: https://github.com/aio-libs/aiohttp](https://github.com/aio-libs/aiohttp)

---

<small>Library README scraped 2024-03-11</small>

# Async http client/server framework

<img
src="https://raw.githubusercontent.com/aio-libs/aiohttp/master/docs/aiohttp-plain.svg"
width="64" height="64" alt="aiohttp logo" />

[![GitHub Actions status for master branch](https://github.com/aio-libs/aiohttp/workflows/CI/badge.svg)](https://github.com/aio-libs/aiohttp/actions?query=workflow%3ACI)

[![codecov.io status for master branch](https://codecov.io/gh/aio-libs/aiohttp/branch/master/graph/badge.svg)](https://codecov.io/gh/aio-libs/aiohttp)

[![Latest PyPI package version](https://badge.fury.io/py/aiohttp.svg)](https://pypi.org/project/aiohttp)

[![Downloads count](https://img.shields.io/pypi/dm/aiohttp)](https://pypistats.org/packages/aiohttp)

[![Latest Read The Docs](https://readthedocs.org/projects/aiohttp/badge/?version=latest)](https://docs.aiohttp.org/)

[![Matrix Room — #aio-libs:matrix.org](https://img.shields.io/matrix/aio-libs:matrix.org?label=Discuss%20on%20Matrix%20at%20%23aio-libs%3Amatrix.org&logo=matrix&server_fqdn=matrix.org&style=flat)](https://matrix.to/#/%23aio-libs:matrix.org)

[![Matrix Space — #aio-libs-space:matrix.org](https://img.shields.io/matrix/aio-libs-space:matrix.org?label=Discuss%20on%20Matrix%20at%20%23aio-libs-space%3Amatrix.org&logo=matrix&server_fqdn=matrix.org&style=flat)](https://matrix.to/#/%23aio-libs-space:matrix.org)

## Key Features

-   Supports both client and server side of HTTP protocol.
-   Supports both client and server Web-Sockets out-of-the-box and
    avoids Callback Hell.
-   Provides Web-server with middleware and pluggable routing.

## Getting started

### Client

To get something from the web:

``` python
import aiohttp
import asyncio

async def main():

    async with aiohttp.ClientSession() as session:
        async with session.get('http://python.org') as response:

            print("Status:", response.status)
            print("Content-type:", response.headers['content-type'])

            html = await response.text()
            print("Body:", html[:15], "...")

asyncio.run(main())
```

This prints:

``` 
Status: 200
Content-type: text/html; charset=utf-8
Body: <!doctype html> ...
```

Coming from [requests](https://requests.readthedocs.io/) ? Read [why we
need so many
lines](https://aiohttp.readthedocs.io/en/latest/http_request_lifecycle.html).

### Server

An example using a simple server:

``` python
# examples/server_simple.py
from aiohttp import web

async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

async def wshandle(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            await ws.send_str("Hello, {}".format(msg.data))
        elif msg.type == web.WSMsgType.binary:
            await ws.send_bytes(msg.data)
        elif msg.type == web.WSMsgType.close:
            break

    return ws


app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/echo', wshandle),
                web.get('/{name}', handle)])

if __name__ == '__main__':
    web.run_app(app)
```

## Documentation

<https://aiohttp.readthedocs.io/>

## Demos

<https://github.com/aio-libs/aiohttp-demos>

## External links

-   [Third party
    libraries](http://aiohttp.readthedocs.io/en/latest/third_party.html)
-   [Built with
    aiohttp](http://aiohttp.readthedocs.io/en/latest/built_with.html)
-   [Powered by
    aiohttp](http://aiohttp.readthedocs.io/en/latest/powered_by.html)

Feel free to make a Pull Request for adding your link to these pages!

## Communication channels

*aio-libs Discussions*:
<https://github.com/aio-libs/aiohttp/discussions>

*gitter chat* <https://gitter.im/aio-libs/Lobby>

We support [Stack
Overflow](https://stackoverflow.com/questions/tagged/aiohttp). Please
add *aiohttp* tag to your question there.

## Requirements

-   [async-timeout](https://pypi.python.org/pypi/async_timeout)
-   [multidict](https://pypi.python.org/pypi/multidict)
-   [yarl](https://pypi.python.org/pypi/yarl)
-   [frozenlist](https://pypi.org/project/frozenlist/)

Optionally you may install the
[aiodns](https://pypi.python.org/pypi/aiodns) library (highly
recommended for sake of speed).

## License

`aiohttp` is offered under the Apache 2 license.

## Keepsafe

The aiohttp community would like to thank Keepsafe
(<https://www.getkeepsafe.com>) for its support in the early days of the
project.

## Source code

The latest developer version is available in a GitHub repository:
<https://github.com/aio-libs/aiohttp>

## Benchmarks

If you are interested in efficiency, the AsyncIO community maintains a
list of benchmarks on the official wiki:
<https://github.com/python/asyncio/wiki/Benchmarks>

---
