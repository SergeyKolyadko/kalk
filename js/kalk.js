'use strict';

(function (){
	var result = 0;
	var runButton = document.getElementById('runButton');
		runButton.addEventListener ('click', kalk);
	var materialSelect = document.getElementById('material');	
	
	
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
		if (materialSelect.value == '-------') { 
			alert('Не указан материал!'); 
		} else {
			for (var i = 0; i < textAreaArr.length; i++) {
				if(textAreaArr[i].id == 'mat_count') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '0' || !isNumeric(textAreaArr[i].value)) {
						alert('Значение в поле \"Количество\" - НЕ цифра, пустое либо равно 0');
						break;
					} 
				}
				
				if(textAreaArr[i].id == 'element_height') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '0' || !isNumeric(textAreaArr[i].value)) {
						alert('Значение поля \"Высота\" - НЕ цифра, пустое либо равно 0');
						break;
					} 
				}
				
				if(textAreaArr[i].id == 'element_width') { 
					if (textAreaArr[i].value == null || textAreaArr[i].value == '0' || !isNumeric(textAreaArr[i].value)) {
						alert('Значение поля \"Ширина\" - НЕ цифра, пустое либо равно 0');
						break;
					} 
				}
				//console.log(textAreaArr[i].value);
				result += parseInt(textAreaArr[i].value);
			}
		}
	}
	
	
	
	// ----------  основная функция  -------------//
	
	function kalk (event) {
		noEmpty ();
		console.log(result);
		//console.log(materialSelect.value);
	}

	
})();