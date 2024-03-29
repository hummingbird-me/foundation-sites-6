---
title: Media Object
description: Media objects are super useful componets for displaying an item, usually an image, alongside some content, usually text. You could put lists, grids, or even other media objects inside.
sass: scss/components/_media-object.scss
---


<div class="alert callout">
  <h5>Known Issues</h5>
  <ul>
    <li>`stack-for-small` is stacking on large.</li>
  </ul>
</div>



## Basics

A media object is a container with the class `.media-object`, and two or three sections with the class `.media-object-section`.

```html_example
<div class="media-object">
  <div class="media-object-section">
    <img src= "http://placeimg.com/200/200/people">
  </div>
  <div class="media-object-section">
    <h4>Dreams feel real while we're in them.</h4>
    <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
  </div>
</div>
```

---

## Section Alignment

Each section aligns to the top by default, but individual sections can also be middle- or bottom-aligned with the `.middle` and `.bottom` classes.

```html_example
<div class="media-object">
  <div class="media-object-section middle">
    <img src= "http://placeimg.com/200/200/people">
  </div>
  <div class="media-object-section">
    <h4>Why is it so important to dream?</h4>
    <p>So, once we've made the plant, how do we go out? Hope you have something more elegant in mind than shooting me in the head? A kick. What's a kick? This, Ariadne, would be a kick.</p>
    <p>What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate. An idea that is fully formed - fully understood - that sticks; right in there somewhere.</p>
  </div>
  <div class="media-object-section bottom">
    <img src= "http://placeimg.com/200/200/people">
  </div>
</div>
```

---

### Stack on Small

By adding the `.stack-for-small` class, you can make your media object responsive. Images will get a width of 100%, but this can be changed.

```html_example
<div class="media-object stack-for-small">
  <div class="media-object-section">
    <img src= "http://placeimg.com/400/200/people">
  </div>
  <div class="media-object-section">
    <h4>I Can Stack.</h4>
    <p>Shrink the browser width to see me stack. I do tricks for dog treats, but I'm not a dog.</p>
  </div>
</div>
```

---

### Nesting Media Objects

By nesting a media object into the media-object-section section, you can easily indent it. This is great for comment strings.

```html_example
<div class="media-object">
  <div class="media-object-section">
    <img src= "http://placeimg.com/200/200/people">
  </div>
  <div class="media-object-section">
    <h4>I'm First!</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro at, tenetur cum beatae excepturi id ipsa? Esse dolor laboriosam itaque ea nesciunt, earum, ipsum commodi beatae velit id enim repellat.</p>
    <!-- Nested media object starts here -->
    <div class="media-object">
      <div class="media-object-section">
        <img src= "http://placeimg.com/200/200/people">
      </div>
      <div class="media-object-section">
        <h4>I'm Second!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas magni, quam mollitia voluptatum in, animi suscipit tempora ea consequuntur non nulla vitae doloremque. Eius rerum, cum earum quae eveniet odio.</p>
      </div>
    </div>
    <!-- And ends here -->
  </div>
</div>
```

---

## Other Uses

The media object is a versatile component which can be used in many ways.

<div class="row small-up-1 large-up-2">
  <div class="column">
    <div class="media-object">
      <div class="media-object-section">
        <a href="#" class="button">Button</a>
        <form>
          <input id="checkbox1" type="checkbox">
        </form>
      </div>
      <div class="media-object-section">
        <h4>Button and checkbox</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi sunt vitae odio voluptates. Dicta voluptatibus natus minus, incidunt facere, suscipit vel aut vero, ex veniam consequuntur dolores quam autem.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="media-object">
      <div class="media-object-section">
        <i class="fi-comments" style="font-size: 32px"></i>
      </div>
      <div class="media-object-section">
        <h4>With Foundicons!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi sunt vitae odio voluptates. Dicta voluptatibus natus minus, incidunt facere, suscipit vel aut vero, ex veniam consequuntur dolores quam autem.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="media-object">
      <div class="media-object-section">
        <img src= "http://placeimg.com/200/200/people">
      </div>
      <div class="media-object-section">
        <h4>I like to comment on things!</h4>
        <form>
          <label>
            <textarea placeholder="comment"></textarea>
          </label>
        </form>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="media-object callout secondary">
      <div class="media-object-section">
        <i class="fi-comments" style="font-size: 32px"></i>
      </div>
      <div class="media-object-section middle">
        <h4>In a Callout</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus excepturi sunt vitae odio voluptates. Dicta voluptatibus natus minus, incidunt facere.</p>
      </div>
    </div>
  </div>
</div>
