# tdea-deliverables

This repository contains all the deliveries for the `Introducción a Node.js mediante el desarrollo de un proyecto ágil`, separado por **branches**

## Getting Started

To get started you need to download/clone the repository, and execute `npm i` inside the created directory.

## Branches

* [Deliverable #1](https://github.com/leonplondon/tdea-deliverables/tree/deliverable%231)


### Prerequisites

* [`Node.js`](https://nodejs.org/es/)
* `NPM`, already bundle with `Node.js` 

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Files

`app.js`- App's entry point.

`commands/*`- Commands' specification.

`model/*` - Mocked data & some useful functions to perform actions on data.

## Execution

### Development
```sh
npm run development
```

### List courses
```
node app
```

### Inscription of course
Using short names
```sh
node app inscribir -c <courseId> -n <name_person> -i <id_person>
```

Using long names
```sh
node app inscribir --courseId <courseId> --name <name_person> -id <id_person>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/leonplondon/tdea-deliverables/tags). 

## Authors

* **Darío Peña Londoño** - *Main developer* - [leonplondon](https://github.com/leonplondon)

## License

```
MIT License
Copyright (c) 2016 León Darío Peña

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
