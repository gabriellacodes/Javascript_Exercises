
// var number = 1;

// function plusOne(count) {
//   number++;
//   console.log(count);
//   count.innerHTML = number;
// }

// function minusOne(count) {
//     number--;
//     console.log(count);
//     count.innerHTML = number;
//   }

// Helpful: console.log(insert variable here)

function show(shown, hidden) {
	document.getElementById(shown).style.display='block';
	document.getElementById(hidden).style.display='none';
	return false;
	}
	
// function AddtoCart() {
// 	// console.log( 'test');
// 	var x=document.getElementById('Items');
//   var new_row = x.rows[1].cloneNode(true);
//   // var row_selected = cellsIndex
//   console.log(new_row)
//   var inp_brand = new_row.children[0].innerHTML
//   var inp_item = new_row.children[1].innerHTML
//   var inp_price = new_row.children[2].innerHTML
//   // var inp_quantity = new_row.children[0].innerHTML
//   // console.log(inp_price)
  
// 	// var len = x.rows.length;
//   //   new_row.cells[0].innerHTML = len;
//   // var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
//   // // console.log(inp1)
//   // inp1.id += len;
// 	// inp1.value = '';
// 	// var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
// 	// inp2.id += len;
// 	// inp2.value = '';
// 	// x.appendChild( new_row );
// }
  
var items = [];

$(".addButton").on("click", function() {
    var newTr = $(this).closest("tr").clone();
    items.push(newTr);
    newTr.appendTo( $("#tablecart") );
});