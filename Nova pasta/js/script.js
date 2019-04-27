
document.getElementById('formulario').addEventListener('submit', adicionar);
document.getElementById('procura').addEventListener('keyup',buscar);
mostrar();

function adicionar(e){
	
	var sector = document.getElementById('sector').value.toUpperCase();
	var name = document.getElementById('name').value.toUpperCase();
	var code = document.getElementById('code').value;
	var fone = document.getElementById('fone').value;

	if (sector === null || !isNaN(sector)){
		alert('Valor invalido informado! Preencha os campos corretamente.');
		return false;
	}

		if (name === null || !isNaN(name)){
		alert('Valor invalido informado! Preencha os campos corretamente.');
		return false;
	}


	if (code === "" || isNaN(code)){
		alert('Valor invalido informado! Preencha os campos corretamente.');
		return false;
	}

		if (fone === ""){
		alert('Valor invalido informado! Preencha os campos corretamente.');
		return false;
	}

	var Data ={
		setor: sector,
		nome: name,
		ramal: code,
		telefone: fone
	}

	if (localStorage.getItem('file')=== null) {
		var arquivo =[];
		arquivo.push(Data);
		localStorage.setItem('file',JSON.stringify(arquivo));

	} // end if

	else{

		var arquivo = JSON.parse(localStorage.getItem('file'));
		arquivo.push(Data);
		localStorage.setItem('file',JSON.stringify(arquivo));

	} // end else

	document.getElementById('formulario').reset();
	document.location.reload();
	e.preventDefault();

} // end adicionar

function mostrar(){

	if (localStorage.getItem('file')=== null) {
		return false;
	}
	else{

		var arquivo = JSON.parse(localStorage.getItem('file'));
		let dados = $("#lista").text(" ");
		let conteudo = $("<tr></tr>")
		for(var i = 0; i < arquivo.length; i++){
			
			var setor = arquivo[i].setor;
			var nome = arquivo[i].nome;
			var ramal = arquivo[i].ramal;
			var telefone = arquivo[i].telefone;
			

			//dados.innerHTML +='<tr><td>'+ setor +'</td><td>' + nome + '</td><td>' + ramal +'</td><td>'+ telefone + '</td><td><buttom class="btn btn-secondary btn-sm" onclick="deletar(\''+ nome +'\')">Excluir</buttom></td></tr>';
		
		} // end for
	} // end else
} // end mostrar

function buscar(){
	var nome_busca = document.getElementById('procura').value.toUpperCase();
	var arquivo = JSON.parse(localStorage.getItem('file'));
	for(var i = 0; i< arquivo.length; i++){

		if (nome_busca === arquivo[i].nome) {

			//document.getElementById('demo').innerHTML = "Setor: " + arquivo[i].setor + " - " + "Nome: "+ arquivo[i].nome + " - " + "Ramal: " + arquivo[i].ramal;
			alert("Setor: "+ arquivo[i].setor +" - "+ 'Nome: '+ arquivo[i].nome +" - " + 'Ramal: '+arquivo[i].ramal);
			document.getElementById('procura').value = "";
		} // end if
	} // end for
} // end buscar

function deletar(nome){

	var arquivo = JSON.parse(localStorage.getItem('file'));
	for(var i = 0; i < arquivo.length; i++){

		if (arquivo[i].nome === nome ) {
			arquivo.splice(i,1);
		} // end if
		localStorage.setItem('file',JSON.stringify(arquivo));

	} // end for

	mostrar();
} // emd deletar