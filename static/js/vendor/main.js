;(function(){

	let sticky = false;
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$("#contact-form").on("submit",function(ev){ 
		ev.preventDefault()
		sendForm($(this))

		return false
	})

	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//mostrar la navegación sticky
			sticky = true
			stickNavigation()
		}if(!inBottom && sticky){
			//ocultar la navegación sticky
			sticky = false
			unStickNavigation()
		}
	})

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

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

	function sendForm($form){
		console.log($form.formObject()) 
		/*$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	alert("correo enviado")
		    }
		})*/
	}
})()