'use strict';

(function (){
	var res = 0;
	var figure = 1; // коэф. на фигур. нарезку
	var element_height, element_width, mat_count, matter, sqr, textT;
	
	var runButton = document.getElementById('runButton');
		runButton.addEventListener ('click', kalk);
		
	var materialSelect = document.getElementById('material');	
	var resultDiv = document.getElementById('result');
	var ratioFig = document.getElementById('ratioFig');
	var materialСustomer = document.getElementById('materialСustomer');
	
	
	
	// ----------  ограничение на количество символов вводимых в поля input[type="text"]  -------------- //
	
	var textAreaArr = document.querySelectorAll('input[type="text"]');
		for (var i = 0; i < textAreaArr.length; i++) {
			textAreaArr[i].setAttribute('maxlength', 4);
		}
		

	// ----------  проверка на число  -------------- //
		
	function isNumeric(n) { 
		return !isNaN(parseFloat(n)) && isFinite(n); 
	}
	
	
	// ----------  проверка на заполнение основных полей и списка  -------------//
	
	
	function noEmpty () {
			for (var i = 0; i < textAreaArr.length; i++) {
				if(textAreaArr[i].id == 'mat_count') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '' || !isNumeric(textAreaArr[i].value) ) {
							alert('Значение в поле \"Количество\" - НЕ цифра, пустое либо равно 0');
							return false;
					} else { 
						mat_count = parseInt(textAreaArr[i].value);
					}
				}

				if(textAreaArr[i].id == 'element_height') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '0' || !isNumeric(textAreaArr[i].value)) {
						alert('Значение поля \"Высота\" - НЕ цифра, пустое либо равно 0');
						return false;
					} else { 
						element_height = parseInt(textAreaArr[i].value); 
					}
				}
				
				if(textAreaArr[i].id == 'element_width') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '0' || !isNumeric(textAreaArr[i].value)) {
						alert('Значение поля \"Ширина\" - НЕ цифра, пустое либо равно 0');
						return false;
					} else { 
						element_width = parseInt(textAreaArr[i].value); 
					}
				}
			}
	}

	function selectMatter () {
		
		var matter = materialSelect.value;
		switch ( matter ) {
			case 'зеркало 4 мм' : 
				res = 123;
					break;
			case 'стекло 4 мм' : 
				res = 100;
					break;
			case 'стекло 5 мм' : 
				res = 120;
					break;
			case 'стекло 6 мм' : 
				res = 133;
					break;
			case 'стекло 8 мм' : 
				res = 143;
					break;
			case 'стекло 10 мм' : 
				res = 153;
					break;
			case '-------' : 
				res = false;
					break;
		}
	}
	
	function squareSurf (a, b) { 
		 var sqrSurf = (a * b)/1000000;
		 return sqrSurf.toFixed (2);
	};
	
	
	function printRes () { 
		sqr = squareSurf (element_height, element_width);
		ratioFig.checked ? res *= 1.25 : res; 
		res *= mat_count * sqr;
		materialСustomer.checked ? res = 0 : res; 
		
		res = res.toFixed (2);
	}
	
	
	function report () {
		resultDiv.innerHTML = `
						<b>Нарезка:</b><hr>
						Материал : ${materialSelect.value}. <br>
						Размеры: высота ${element_height} мм, ширина ${element_width} мм. <br>
						Количествo: ${mat_count} шт. <br>
						Площадь: ${sqr} м.кв. <br>
						Стоимость материала в нарезке : ${res} грн <br>
						<hr>
						<b>К оплате:</b>  ${res} грн`;
	}
	
	// ----------   -------------//
	
	function kalk () {
		if (selectMatter () == false ) {
			return alert('Не указан материал!');
		} else if ( noEmpty ()== false) {
					return ;
				} else {
					noEmpty ();
					printRes ();
					report ();
				}
		
	}

	
})();