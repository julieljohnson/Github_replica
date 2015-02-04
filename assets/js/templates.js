var templates = {};

templates.user = [
    "<img class='picture' src=<%= avatar_url %> />",
    "<div class='names'>",
        "<h2 class='namee'><%= name %></h2>",
        "<h3 class='username'><%= login %></h3>",
    "</div>",
    "<div class='join'>",
        "<h4 class='date'><%= created_at %></h4>",
    "</div>",
    
].join("");

templates.repo = [
    '<div class="repositories">',
    '<div class="name">',
    '<a href="#">',
    '<h2><%= name %></h2>',
    '</a>',
    '</div>',
    '<div class="language">',
    '<%= language %>',
    '<span class="octicon octicon-star"></span><%= stargazers_count %>',
    '<span class="octicon octicon-git-branch"></span><%= forks %>',
    '</div>',
    '<div class="reporight">',
    '<p><span class="octicon octicon-repo-forked"></span><%= description %></p>',
    '<p><%= updated_at %></p>',
    '</div>',
    '</div>'
].join("");

templates.publicact = [
'<div class="event">',
'<h3><%= repo %>',
'</div>'




].join("");
