$(document).ready(function(){
		$('#CalendarioWeb').fullCalendar({
			header:{
				left:'today,prev,next',
				center: 'title',
				right: 'month, basicWeek,basicDay, agendaWeek,agendaDay'
			},

			dayClick:function(date,jsEvent,view){
				alert("Valor seleccionado: "+date.format());
				alert("Vista actual"+view.name);
				$(this).css('background-color', 'red');
			}
				/*Este codigo es por si se quiere agregar un botton al calendario
			customButtons:{
				MiBoton:{
					text:"Boton 1",
					click:function(){
						alert("Accion del boton");
					}
				}
			}*/
		});
	});