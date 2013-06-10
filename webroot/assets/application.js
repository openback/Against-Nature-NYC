(function() {
  var $,
    _this = this;

  $ = jQuery;

  $(window).load(function() {
    return $('nav').each(function(idx, nav) {
      var $nav, $select, originalUrl,
        _this = this;

      $nav = $(nav);
      $select = $nav.find('select');
      originalUrl = $select.val();
      return $select.on('change', function() {
        var url;

        url = $select.val();
        if (url !== originalUrl) {
          return document.location = 'http://' + document.location.hostname + url;
        }
      });
    });
    /*
    	$('.sections').each ->
    		tallest = 0
    		$figures = $(this).find('figure')
    
    		$figures.each (idx, figure) ->
    			tallest = Math.max $(figure).height(), tallest
    
    		$figures.height(tallest + 'px')
    */

  });

}).call(this);
