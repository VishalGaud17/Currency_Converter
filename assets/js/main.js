
function convert(){
	//alert("Convert function!!");
	//Create object or references of HTML elements
	var frm,to,amount;
	
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result')
	cu=document.getElementById('curr')
	
	// document.write(frm+"<br/>");
	// document.write(to+"<br/>");
	// document.write(amount+"<br/>");
	
	// document.write("From : "+frm.value+"<br/>");
	// document.write("To : "+to.value+"<br/>");
	// document.write("Amount : "+amount.value+"<br/>");
	var url="https://v6.exchangerate-api.com/v6/f33251e6cd7c1d186ac98369/latest/"+frm.value;
	fetch(url)
	.then(function(res){
		// document.write(res.json());
		return res.json();
	}).then(function(data){
		// document.write(data+"<br>");
		// document.write(data['result']+"<br>");
		// document.write(data['base_code']+"<br>");
		// document.write(data['conversion_rates']+"<br>");
		var cr=data['conversion_rates'];
		cf=cr[to.value];
		var famt=cf*amount.value;
		// document.write("Final Output : "+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
		
	})
}