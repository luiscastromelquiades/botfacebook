; (function () {
  const selector = "#contact-form"

  $(".step textarea").on("keydown",(ev)=>{
    if(ev.keyCode == 13){
      ev.preventDefault()
      $(ev.target).blur()
    }
  })
  $(".path-step").on("click", (ev)=>{
    const $current_circle = $(ev.target)
    focus_circle($current_circle)

  $("#contact-form").on("submit",function(ev){
		ev.preventDefault()
		send_form()
		return false
	})

    const path_step_position = $current_circle.index(".path-step") + 1
    let $test = $(".step:nth-child("+path_step_position+")")
    focus_next_step($test)
  })
  
  $(selector).find(".input").on("change", (ev)=>{
    const $input = $(ev.target)
    const $next_step = $input.parent().next(".step")

    if(!is_valid_form() && $next_step.length > 0) {
      focus_next_step($next_step)
    }else{
      validate_form()
    }
  })


  function validate_form() {
    if(is_valid_form()){
      send_form()
    }else{
      let invalid_fieldset = $(selector).find(".input:invalid").first().parent()
      focus_next_step($invalid_fieldset)
    }
  }

  function is_valid_form() {
      return document.querySelector(selector).checkValidity()
  }

  function focus_next_step($next_step) {
    $(".step.active").removeClass("active")
    $next_step.addClass("active")
    $next_step.find(".input").focus()

    //coordinar los circulos
    const path_step_position = ($next_step.index(".step") * 2) + 1

    const $circle = $(".path-step:nth-child("+path_step_position+")")
    focus_circle($circle)
  }

  function focus_circle($circle){
    $(".path-step.active").removeClass("active")
    $circle.addClass("active")
  }


  function send_form(){
    const $form = $(selector)
		$.ajax({
		    url: $form.attr("action"),
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
          $form.slideUp()
		    	$("#info-contacto").html("He recibido tu mensaje, en la brevedad me pondré en contacto")
		    }
		})
	}
})()
