# 📄 JSON Parsing in JavaScript: Strings, Objects & Arrays

## Understanding What Happens During `JSON.parse()`

When working with JSON files in JavaScript, it's important to understand the difference between a JSON string and the JavaScript object created after parsing.

---

## 1. JSON is Initially a String

Before parsing, the contents of a JSON file are treated as a string.

```js
typeof(data); // "string"
```

Example:

```js
const data = '[{"id":1,"title":"Document 1"}]';
```

Here, `data` is just plain text, even though it looks like an object or array.

---

## 2. `JSON.parse()` Converts the String

Using `JSON.parse()` transforms the JSON string into actual JavaScript data structures.

```js
const documents = JSON.parse(data);
```

Now JavaScript can work with the data as objects and arrays.

```js
typeof(documents); // "object"
```

---

## 3. Why Does an Array Return `"object"`?

In JavaScript, arrays are technically a special type of object.

```js
const arr = [1, 2, 3];

typeof(arr); // "object"
```

Because of this, `typeof()` alone cannot tell whether a value is an array or a regular object.

---

## 4. Checking if the Parsed Data is an Array

Use `Array.isArray()` for an accurate array check.

```js
console.log(Array.isArray(documents));
```

Output:

```js
true
```

---

## 5. Why is `documents` an Array?

Because the JSON data is wrapped inside square brackets `[]`.

Example:

```json
[
  {
    "id": 1,
    "title": "Document 1"
  },
  {
    "id": 2,
    "title": "Document 2"
  }
]
```

The outer `[]` indicates an array.

After parsing:

```js
const documents = JSON.parse(data);
```

`documents` becomes:

```js
[
  { id: 1, title: "Document 1" },
  { id: 2, title: "Document 2" }
]
```

This means:

* `documents` → Array
* Each element inside `documents` → Object

So, `documents` is an **array of objects**.

---

## Quick Summary

| Expression                 | Result                                               |
| -------------------------- | ---------------------------------------------------- |
| `typeof(data)`             | `"string"`                                           |
| `JSON.parse(data)`         | Converts JSON string into JS data                    |
| `typeof(documents)`        | `"object"`                                           |
| `Array.isArray(documents)` | `true`                                               |
| Reason                     | JSON data is enclosed within `[]`, creating an array |

---

### Mental Model

```text
JSON File
    ↓
String
    ↓ JSON.parse()
Array
    ↓
Objects
```

**JSON String → JavaScript Array → JavaScript Objects**
