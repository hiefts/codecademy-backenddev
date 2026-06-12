// function that combines groceries array into list string
function groceries(arr) {
 const items = arr.map((element) => element.item);
 
 if (items.length <= 2) {
	 return items.join(' and ');
 }
 const last = items.pop();
 return items.join(', ') + ' and ' + last;
}

// testing
let firstList = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
console.log(groceries(firstList));

let secondList = [{item: 'Bread'}, {item: 'Butter'}];
console.log(groceries(secondList));

let thirdList = [{item: 'Cheese Balls'}];
console.log(groceries(thirdList));