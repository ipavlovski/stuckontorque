---
title: "Adding expressive code integration for syntax highlighting"
category: "CODEBLOG"
tags: ["astrojs"]
date: "2026-03-13"
---

# Installation


```bash
npx astro add astro-expressive-code
```

# Examples

Will be taking the examples directly from `expressive code` website.



## Example 1 - Marked lines/ranges

Basic  highlight using `1, 4, 7-8` specifier.

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

Diff highlighting using `diff lang="js"` directive.

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

Annotations with styles
```jsx {"1. Provide the value prop here:":5-6} del={"2. Remove the disabled and active states:":8-10} ins={"3. Add this to render the children inside the button:":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```


## Example 2 - Frames and filenames

Scripting tags automatically get a frame (e.g. for `bash`):

```bash
find ~ -iname "blog-file*"
```

It can be removed with `frame="none"`

```bash frame="none"
find ~ -iname "blog-file*"
```

A window can be given a title

```bash title="archlinux@wsl2"
lsblk -h
```

Filenames can be inferred from comments

```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

Or used directly with `title` arg

```js title="my-test-file.js"
console.log('Title attribute example')
```

## Example 3 - Highlighting individual text

Highlight `given text`.

```js "given text"
function demo() {
  // Mark any given text inside lines
  return 'Multiple matches of the given text are supported';
}
```

Highlight using colored markers (`mark/inserted/deleted`)

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```