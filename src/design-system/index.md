---
title: 11ty Design System Home
layout: layouts/ds-static.webc
eleventyExcludeFromCollections: true
---

## 11ty Design System

**Folders**

* All **design tokens** can be found in `src/_data/designTokens`. This includes all baseline fonts, colors, sizes, and spacing in a format generated via <https://utopia.fyi/>
* All **components and their documentation** should be in folders under `src/_includes/components`. As long as there's an accompanying `*.config.js` file it'll get picked up and auto generated in the design system.
* All **design system layouts** can be found in `src/_includes/layouts` and are prefixed with `ds-`.
* To document **atomic elements** of your design system that aren't components, you can add pages under `src/design-system/` just as you would any standard Eleventy page. There are several already started for you under `Atoms` that itemize block, form, inline, and preformatted HTML tags.

**Notes**

* There are examples of just documentation in the `Card` and `Quote` folders
* There are examples of WebC components and their documentation under `_Compositions/sidebar` and `_Compositions/stack`
* For components that you do not want to document, leave out the `*.config.js` file. `Utils/ds-menu.webc` is one existing example of this.
* The **design tokens** are automatically documented by the `src/design-system/Atoms/tokens.njk` page. This will source the tokens directly from the data files so it updates as the tokens themselves are updated.
