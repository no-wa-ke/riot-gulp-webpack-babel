app-nav
  nav
    div.nav-wrapper.grey.darken-4
      a(href="#").brand-logo Riot Gulp Pug Boilerplate
      ul#nav-mobile.right.hide-on-med-and-down
        li
          a(href="/home") Home
        li
          a(href="/signin") Sign In
        li  
          a(href="/signup") Sign Up
  style.
    app-nav{
      position: absolute;
      width:100%;
      display: block;
    }
  script.
    import riot from "riot"
    
