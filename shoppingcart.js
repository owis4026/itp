use strict;

function show(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
	}
	
function AddtoCart() {
	console.log( 'hi');
	var x=document.getElementById('Items');
	var new_row = x.rows[1].cloneNode(true);
	var len = x.rows.length;
    new_row.cells[0].innerHTML = len;
    
	var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
	inp1.id += len;
	inp1.value = '';
	var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
	inp2.id += len;
	inp2.value = '';
	x.appendChild( new_row );
}

  
