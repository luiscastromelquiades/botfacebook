if(navigator.serviceWorker){
	navigator.serviceWorker.register("/static/sw.js")
}
;(function(){
	let sticky = false;
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	$(document).ready(function(){
		$(".button-collapse").sideNav({
			menuWidth: 240, // Default is 240
      		edge: 'right', // Choose the horizontal origin
      		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		})
	})


	//funcionalidad para la navegación sticky
	// $(window).scroll(()=>{
	// 	const inBottom = isInBottom()
	//
	// 	if(inBottom && !sticky){
	// 		//mostrar la navegación sticky
	// 		sticky = true
	// 		stickNavigation()
	// 	}if(!inBottom && sticky){
	// 		//ocultar la navegación sticky
	// 		sticky = false
	// 		unStickNavigation()
	// 	}
	// })

	$(window).scroll(()=>{
		const inSkills = isInSkills()

		if(inSkills && !sticky){
			$(".backtotopcontainer").css({"right":"1em", "filter":"alpha(opacity=100)", "opacity":"1"})
			sticky = true
		}else if(!inSkills && sticky){
			sticky = false
			$(".backtotopcontainer").css({"right":"-4em", "filter":"alpha(opacity=50)", "opacity":"0.5"})
		}
	})

	$('#backtotop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInSkills(){
		return $(window).scrollTop() >= ($(window).height() - 20)
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}
})()
