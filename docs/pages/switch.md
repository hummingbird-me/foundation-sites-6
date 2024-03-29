---
title: Switch
description: Now you can tell your users to flip the switch or switch off.
sass: scss/components/_switch.scss
---

## Basics

Add the `.switch` class to an element to create a switch.

```html_example
<div class="switch">
  <input class="switch-input" id="exampleSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="exampleSwitch"></label>
</div> 
```

<div class="callout warning">
  <p>Make sure the HTML of the switch goes in the order you see above&mdash;<code>&lt;input&gt;</code>, then <code>&lt;label&gt;</code></p>
</div>

---

### Radio Switch

Radio switches let a user select *one* of a limited number of choices:

```html_example
<div class="switch small">
  <input class="switch-input" id="exampleRadioSwitch1" type="radio" checked name="testGroup">
  <label class="switch-handle" for="exampleRadioSwitch1"></label>
</div> 

<div class="switch">
  <input class="switch-input" id="exampleRadioSwitch2" type="radio" name="testGroup">
  <label class="switch-handle" for="exampleRadioSwitch2"></label>
</div> 

<div class="switch large">
  <input class="switch-input" id="exampleRadioSwitch3" type="radio" name="testGroup">
  <label class="switch-handle" for="exampleRadioSwitch3"></label>
</div>
```

---

### Sizing Classes

Add `.tiny`, `.small`, `.large`, to change the switch size. The default size needs no sizing class.

```html_example
Tiny Switch
<div class="switch tiny">
  <input class="switch-input" id="tinySwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="tinySwitch"></label>
</div>
Small Switch
<div class="switch small">
  <input class="switch-input" id="smallSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="smallSwitch"></label>
</div> 
Default (Medium) Switch
<div class="switch">
  <input class="switch-input" id="defaultSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="defaultSwitch"></label>
</div> 
Large Switch
<div class="switch large">
  <input class="switch-input" id="largeSwitch" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="largeSwitch"></label>
</div> 
```

---

### With Text Inside

```html_example
<div class="switch large">
  <p>Do you like me?</p>
  <input class="switch-input" id="yes-no" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="yes-no">
    <span class="switch-active">Yes</span>
    <span class="switch-disabled">No</span>
  </label>
</div>

<div class="switch">
  <p>Do you like me now?</p>
  <input class="switch-input" id="ex-2" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="ex-2">
    <span class="switch-active">Yes</span>
    <span class="switch-disabled">No</span>
  </label>
</div>

<div class="switch small">
  <p>Turn me on?</p>
  <input class="switch-input" id="ex-3" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="ex-3">
    <span class="switch-active">On</span>
    <span class="switch-disabled">Off</span>
  </label>
</div>

<div class="switch tiny">
  <p>How about now?</p>
  <input class="switch-input" id="ex-4" type="checkbox" name="exampleSwitch">
  <label class="switch-handle" for="ex-4">
    <span class="switch-active" aria-hidden="true">Yes</span>
    <span class="switch-disabled" aria-hidden="true">No</span>
  </label>
</div>
```