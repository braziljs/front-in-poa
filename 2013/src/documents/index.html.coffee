---
layout: default
---

for @section in @sections
  section class: "section section-#{@section}", id: @section, ->
    @partial "section/#{@section}.html.coffee", @
