
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
var sumVal = 0;

$(".addButton").on("click", function() {
    var newTr = $(this).closest("tr").clone();
	items.push(newTr);
	item_price = parseInt(newTr.rows[0].cells[2].innerHTML)
	sumVal = sumVal + item_price;
	newTr.appendTo( $("#tablecart") );
});

// //trigger an event when the input receives a change
// $("#tablecart").off("change").on("change", function(ele) {
//   //clear the out put box
//   $("#totalOut").val("0");
//   //for the table container, select all tr's within the table's tbody. 
//   //Excluding tbody will also select the thead.
//   $("#exampleTableContainer table tbody tr").each(function(index, rowElement) {
//     //tablulate the cost of the current row
//     var rowCost = parseInt($(rowElement).find(".cost").text()) * parseInt($(rowElement).find(".amount input").val());
//     //if the rowCost is a valid number, add it to whatever is in the output box
//     if (rowCost) $("#totalOut").val(parseInt($("#totalOut").val()) + rowCost)
//   });
// });

// var table = document.getElementById("Cart"), sumVal = 0;
            
//             for(var i = 0; i < table.rows.length; i++)
//             {
//                 sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
//             }
//             document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
//             console.log(sumVal);

// var table = document.getElementById("tablecart"), sumVal = 0;
            
// 	for(var i = 1; i < table.rows.length; i++)
// 	{
// 		sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
// 	}
	
// 	document.getElementById("val").innerHTML = "Cart total = $" + sumVal;
// 	console.log(sumVal);