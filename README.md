# 11ty-design-system

A Simple Design System generator for 11ty, with support for Design Token itemizing and WebC components.

## Folders

* All **design tokens** can be found in `src/_data/designTokens`. This includes all baseline fonts, colors, sizes, and spacing in a format generated via <https://utopia.fyi/>
* All **components and their documentation** should be in folders under `src/_includes/components`. As long as there's an accompanying `*.config.js` file it'll get picked up and auto generated in the design system.
* All **design system layouts** can be found in `src/_includes/layouts` and are prefixed with `ds-`.
* To document **atomic elements** of your design system that aren't components, you can add pages under `src/design-system/` just as you would any standard Eleventy page. There are several already started for you under `Atoms` that itemize block, form, inline, and preformatted HTML tags.

## Notes

* There are examples of just documentation in the `Card` and `Quote` folders
* There are examples of WebC components and their documentation under `_Compositions/sidebar` and `_Compositions/stack`
* For components that you do not want to document, leave out the `*.config.js` file. `Utils/ds-menu.webc` is one existing example of this.
* The **design tokens** are automatically documented by the `src/design-system/Atoms/tokens.njk` page. This will source the tokens directly from the data files so it updates as the tokens themselves are updated.

## Setup

* This project uses Tailwind to auto-generate the CSS based on the design tokens (credit to Andy Bell and [buildexcellentwebsit.es](https://buildexcellentwebsit.es/) for this.)
* WebC Components are auto-imported as long as they're under the `src/_includes/components` folder. Styles and JS are compiled at build time so using these web components should be seamless from there.

## Credits & Thank You

This project is an amalgamation of the following, without whom this would not exist:

* Eleventy 2.0 and WebC has me very excited about the future of leveraging the modular nature of web components outside of a larger JavaScript framework. I wouldn't have started this if it weren't for all this excellent work
* Fluid type, space, and grid systems generated via <https://utopia.fyi/>
* Design Tokens based on [buildexcellentwebsit.es](https://buildexcellentwebsit.es/)
* CSS structure is based on [Cube CSS](https://cube.fyi/)
* Self-documenting design system inspired by [this one](https://github.com/trys/eleventy-design-system/) from Trys Mudford, and furter [explained in this blog post](https://www.trysmudford.com/blog/eleventy-design-system/).
* Some of the base styling are based on [SmolCSS](https://smolcss.dev/) and [Every Layout](https://every-layout.dev/)

## TODO

* I'd ideally like this to be an Eleventy plugin that can be installed, but as far as I can tell there's not a way to do so until [Virtual Templates](https://github.com/11ty/eleventy/issues/1612) are made available.
* The Design System sidebar menu is limited to three levels currently because WebC doesn't yet support recursion, once [this issue](https://github.com/11ty/webc/issues/184) is resolved it'll be much easier to support additional folders in the components directory.
* I had originally tried using WebC components for the full page (`src/design-system/components-full-pages.njk`) and component page (`src/design-system/components-pages.njk`) templates but there's an issue with WebC and dynamic permalinks. I've [created an issue](https://github.com/11ty/eleventy-plugin-webc/issues/87) regarding this.
* Considering adding some more baseline WebC components to this project as well, especially those found in [Tugboat](https://github.com/11ty/tugboat/tree/main/_components)
