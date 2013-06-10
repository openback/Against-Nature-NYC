$ = jQuery

$(window).load =>
	$('nav').each (idx, nav) ->
		$nav = $(nav)
		$select = $nav.find('select')
		originalUrl = $select.val()

		$select.on 'change', =>
			url = $select.val()
			document.location = 'http://' + document.location.hostname + url if url isnt originalUrl

	###
	$('.sections').each ->
		tallest = 0
		$figures = $(this).find('figure')

		$figures.each (idx, figure) ->
			tallest = Math.max $(figure).height(), tallest

		$figures.height(tallest + 'px')
	###
