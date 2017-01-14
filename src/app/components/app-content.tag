app-content
  div#main
  script.
    import riot from 'riot'
    import route from 'riot-route'
    import "./common/login.tag"
    import "./common/home.tag"

    const _mount = (tagName , option = {}) =>
    {
    		const tag = riot.mount('div#main' , tagName , option);
    		// reconnecting this mounted tag with the root
    		this.tags[tagName] = tag[0];
    		return tag;
    };
    
    this.on('mount',()=>{
    
      //ルーター（イベントリスナーも兼ねてる）
    	route((action='home') =>
    	{
    		opts.state.trigger('route:changed' , action);
    	    switch (action) {
    	        // we will building this up later on
            
            case 'signup':
            case 'signin':
              _mount('login');
            break;
    				default:
              _mount('home');
    	    }
    	});
    
    	route.base('/') // use history api rather than #
    	route.start(true);
    
    })
    
    
    
    
