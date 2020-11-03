function aboutUs() {
	document.getElementById("aboutus").style.display = "block";
}
function aboutUsHide() {
	document.getElementById("aboutus").style.display = "none";
}
function contact() {
	document.getElementById("mail").style.display = "block";
}
function contactHide() {
	document.getElementById("mail").style.display = "none";
}
function selectLv() {
	document.getElementsByTagName("input")[0].placeholder = "E-mail vai telefona numurs";
	document.getElementsByTagName("textarea")[0].placeholder = "Jūsu ziņojums";
	document.title = "Washline - Kvalitātīva automazgātava Rīga.";
	var divsToShow = document.getElementsByClassName("lv_lang"); 
    for(var i = 0; i < divsToShow.length; i++){
    	if (divsToShow[i].id == "aboutus" || divsToShow[i].id == "mail") {
        divsToShow[i].style.display = "none"; 
    	} else {
        divsToShow[i].style.display = "block"; 
    	}
    }
    document.getElementById("but").style.marginTop = "0.7%";
    var divsToHide = document.getElementsByClassName("ru_lang"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }
}
function selectRu() {
	document.getElementsByTagName("input")[0].placeholder = "Ваше E-mail  или телефон";
	document.getElementsByTagName("textarea")[0].placeholder = "Ваше сообщение";
	document.title = "RUS Washline - качественная автомойка в Риге";
	var divsToShow = document.getElementsByClassName("ru_lang"); 
    for(var i = 0; i < divsToShow.length; i++){
    	if (divsToShow[i].id == "aboutus" || divsToShow[i].id == "mail") {
        divsToShow[i].style.display = "none"; 
    	} else {
        divsToShow[i].style.display = "block"; 
    	}
    }
    document.getElementById("but").style.marginTop = "2.5%";
    var divsToHide = document.getElementsByClassName("lv_lang"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }
}
/*
// Работа с виджетом recaptcha
// 1. Получить ответ гугл капчи
var captcha = grecaptcha.getResponse();

// 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// Такую форму не будем отправлять на сервер.
if (!captcha.length) {
  // Выводим сообщение об ошибке
  $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
} else {
  // получаем элемент, содержащий капчу
  $('#recaptchaError').text('');
}

// 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
if ((formValid) && (captcha.length)) {
  // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
  formData.append('g-recaptcha-response', captcha);
}  
  
// 4. Если сервер вернул ответ error, то делаем следующее...
// Сбрасываем виджет reCaptcha
grecaptcha.reset();
// Если существует свойство msg у объекта $data, то...
if ($data.msg) {
  // вывести её в элемент у которого id=recaptchaError
  $('#recaptchaError').text($data.msg);
}*/
/*
function openPhoto() {
	dirct.style.transform = "scale(2)";
	dirct.style.position = "fixed";
	dirct.style.left = "36%";
	document.getElementById("zoomImg").backgroundImage = "url('images/7.png')";

}*/