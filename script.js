function createTable() {
    var rn=prompt("Input number of rows");
	var cn=prompt("Input number of columns")
	let table=document.getElementById('myTable');
	table.innerHTML = '';
	for(let i=0; i<rn; i++){
		var row=table.insertRow();
		for(let j=0; j<cn; j++){
			var cell=row.insertCell(j);
			cell.innerHTML=(`Row-${i} Column-${j}`);
		}
	}
}
