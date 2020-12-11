function createArticle() {
	
	const input = document.getElementById('createTitle') // getting elements form DOM
	const textArea = document.getElementById('createContent')
	const articles = document.getElementById('articles')
	const article = document.createElement('article'); // creating new elements
	const h3 = document.createElement('h3');
	const p = document.createElement('p');
	if(input.value !== '' && textArea.value !== '') {
		h3.innerHTML = input.value;
		p.innerHTML = textArea.value;	
		article.appendChild(h3);
		article.appendChild(p);
		articles.appendChild(article);
		input.value = '';
		textArea.value = '';
		}
		
		window.addEventListener('load', function() {
		  document.querySelector('input[type="file"]').addEventListener('change', function() {
		      if (this.files && this.files[0]) {
		          var img = document.querySelector('img');  // $('img')[0]
		          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
		          img.onload = imageIsLoaded;
		      }
		  });
		});
		
		function imageIsLoaded() { 
		  alert(this.src);  // blob url
		  // update width and height ...
		}
}