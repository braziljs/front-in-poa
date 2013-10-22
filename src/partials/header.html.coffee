header class: 'header', ->
  div class: 'wrapper', ->
    h1 class: 'logo', ->
      a class: 'logo-link', href: '#', title: @conf.name, itemprop: 'name', ->
        @conf.name
    h2 class: 'tagline', ->
      "#{@conf.date}, #{@conf.venue}, #{@conf.city}"
    # if @conf.price or @callToAction
    #   <div class="call-action-area">
    #     <% if @conf.price: %>
    #       <span class="price">Only <%= @conf.price %></span>
    #     <% end %>

    #     <% if @callToAction: %>
    #       <a href="<%= @callToAction.link %>" class="call-action-link" title="<%= @callToAction.text %>"><%= @callToAction.text %></a>
    #     <% end %>
    #   </div>
    # <% end %>
