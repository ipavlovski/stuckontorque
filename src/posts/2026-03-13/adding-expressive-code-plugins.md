---
title: "Plugins for expressive-code to get custom features"
category: "CODEBLOG"
tags: ["astrojs"]
date: "2026-03-13"
---

# Expressive code plugins

[Official list of plugins](https://expressive-code.com/plugins/community-plugins/)

## Color Chips

https://delucis.github.io/expressive-code-color-chips/

```css
.example {
  color: goldenrod;
}
```

## Language Badge

https://frostybee.github.io/expressive-code-language-badge/

```js
// Notice the language badge in the top-right corner!
function greetUser(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to our documentation`;
}

// Usage example
const userName = "Developer";
const message = greetUser(userName);
console.log(message);
```

## Line Numbers

https://expressive-code.com/plugins/line-numbers/

```js showLineNumbers
// This code block will show line numbers
console.log('Greetings from line 2!')
console.log('I am on line 3')
```
