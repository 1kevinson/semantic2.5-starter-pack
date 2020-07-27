# bootstrap5-starter-pack
Welcome to this starter pack for building responsives app from scrath with bootstrap 5 framework

# Bootstrap 5 

bootstrap 5 is the next release of [bootstrap](https://github.com/twbs/bootstrap)
framework

## Installation

clone the [repo](https://github.com/1kevinson/bootstrap5-starter-pack.git) to install the starterpack .

```bash
git clone https://github.com/1kevinson/bootstrap5-starter-pack.git
```

## Developer Notes

I create a bunch compiled and watched css, feel free to edit for your need,

you can see a preview in the JSON below

```json
{
  "name": "bootstrap5-starterpack",
  "version": "1.0.0",
  "description": "Building web apps from scratch",
  "main": "index.js",
  "scripts": {
    "start": "npm-run-all --parallel devserver auto-build:css",
    "devserver": "live-server",
    "watch:css": "node-sass public/build/css/style.css -w",
    "concat:css": "concat -o assets/css/main.css assets/css/all-css/_animation.css assets/css/all-css/_global.css assets/css/all-css/_media_queries.css assets/css/all-css/_layouts.css assets/css/all-css/_components.css assets/css/all-css/_pages.css ",
    "compress:css": "node-sass assets/css/main.css public/build/css/style.css --output-style compressed",
    "build:css": "npm-run-all concat:css compress:css",
    "auto-build:css": "watch 'npm run build:css' assets/css/all-css"
  },
  "author": "Arsene Kevin",
  "license": "MIT" 
  }
```

## Usage

To start using the pack, just run the command below

```bash
npm run start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to tests locally and run an npm audit.

## License
[MIT](https://choosealicense.com/licenses/mit/)
