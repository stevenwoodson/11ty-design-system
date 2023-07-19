const path = require('path');
const requireGlob = require('require-glob');
const slugify = require('slugify');

function convertComponent(component) {
  // Extract variants from component and remove them
  let {variants = []} = component;
  delete component.variants;

  // Back out if the component isn't valid
  if (!component || !component.title) return null;

  // Set sensible defaults for previews & slugs
  component.preview = component.preview || 'default';
  const parentSlug = component.slug || component.path;

  // Loop the variants, returning a merged combo of component, then variant
  let variantObject = {};
  variants.map((variant) => {
    const variantSlug = slugify(variant.title.toLowerCase());
    const preview = !!variant.preview
      ? variant.preview || 'default'
      : component.preview || 'default';

    variantObject[variantSlug] = {
      _config: {
        ...component,
        ...variant,
        context: {
          ...component.context,
          ...variant.context
        },
        variant: true,
        preview,
        originalTitle: variant.title,
        slug: `${component.path}/${variantSlug}`,
        title: `${component.title} - ${variant.title}`
      }
    };
  });

  // Return the main component and any variants
  return {
    _config: {
      slug: parentSlug,
      ...component
    },
    ...variantObject
  };
}

function reducer(options, tree, fileObj) {
  function toNestedObject(obj, key) {
    if (!obj[key]) {
      obj[key] = {};
    }

    return obj[key];
  }

  if (!fileObj || !fileObj.path || !('exports' in fileObj)) {
    return tree;
  }

  var keys = [].concat(options.keygen(fileObj));
  var uniquePath = fileObj.path.replace(fileObj.base, '');
  var parsedPath = path.parse(uniquePath);

  fileObj.exports = {
    ...fileObj.exports,
    path: parsedPath.dir.substring(1),
    name: parsedPath.base.replace('.config.js', '')
  };

  if (!keys.length) {
    return tree;
  }

  keys.pop();
  var obj = keys.reduce(toNestedObject, tree);
  var component = convertComponent(fileObj.exports);

  Object.keys(component).forEach((key) => {
    obj[key] = component[key];
  });

  return tree;
}

function prepareMenu(branches) {
  let menu = [];

  Object.keys(branches).forEach((key) => {
    const thisBranch = JSON.parse(JSON.stringify(branches[key]));
    let children = [];
    let parent = {};

    if (thisBranch['_config'] !== undefined) {
      parent = thisBranch['_config'];
      delete thisBranch['_config'];
    } else {
      parent = {
        title: key
      };
    }

    if (Object.keys(thisBranch).length > 0) {
      children = prepareMenu(thisBranch);
    }

    let menuItem = {
      title: parent.title,
      children
    };

    if (parent.slug !== undefined) {
      menuItem['url'] = `/design-system/components/${parent.slug}/`;
    }

    menu.push(menuItem);
  });

  menu.sort((a, b) => a.title.localeCompare(b.title));

  return menu;
}

module.exports = async function (data) {
  // Pull in all the config files
  const modules = await requireGlob('../_includes/components/**/*.config.js', {
    reducer,
    bustCache: true
  });

  const flat = (obj, out) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key]['title'] == undefined) {
        out = flat(obj[key], out); //recursively call for nesteds
      } else {
        out.push(obj[key]); //direct assign for values
      }
    });
    return out;
  };

  // Return the components and the menu, broken down into categories
  const componentObject = {
    components: flat(modules, []).flat(),
    menu: prepareMenu(modules)
  };

  return componentObject;
};
