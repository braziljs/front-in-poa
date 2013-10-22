header class: 'header', ->
  div class: 'wrapper', ->
    h1 class: 'logo', ->
      a class: 'logo-link', href: '#', title: @conf.name, itemprop: 'name', ->
        @conf.name
    p class: 'event-head', ->
      "#{@conf.date} • #{@conf.venue} • #{@conf.city}/#{@conf.state}"
    p class: 'event-slogan', ->
      @conf.description
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
