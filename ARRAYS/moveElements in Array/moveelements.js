// JavaScript Document
const elements =[23,24,45,21];

const output =move(elements,0,1);

function move(elements,index, offset){
	if offset <= elements.length {
		const value = elements[index];
		const newposition = index + offset;
		elements.splice(newposition,0, value);
	};
	else console.error("invalid offset")
}