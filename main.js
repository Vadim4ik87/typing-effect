// Init App
document.addEventListener('DOMContentLoaded', init);

function init() {
	const getElement = document.querySelector('.typing');
	const arr = ['Lorem Ipsum is simply dummy text of the printing ',
				 'It was popularised in the 1960s with the release ']

	new Typer(getElement, arr);
}

class Typer {
	constructor(getElement, arr, wait=200) {
		this.getElement = getElement;
		this.arr = arr;
		this.arrIndex = 0;
		this.printingText = '';
		this.wait = wait;
		this.isFinished = false;
		this.type();
	}

	type() {
		const index = this.arrIndex % this.arr.length; //index of arr
		const textToPrint = this.arr[index];	//Get full phrase
		let typingSpeed = this.wait;	//Make pause
		
		if(this.isFinished) {
			typingSpeed /= 3;
		}
		
		//Changing content
		if(!this.isFinished) {
			this.printingText = textToPrint.substring(0, this.printingText.length + 1);
		} else {
			this.printingText = textToPrint.substring(0, this.printingText.length - 1);
		}

		//Insert text
		this.getElement.innerHTML = `<span class="txt">${this.printingText}</span>`;

		//When the phrase is complete
		if(this.isFinished && this.printingText === '') {
			this.isFinished = false;
			this.arrIndex++;
			typingSpeed = this.wait * 10;
		} else if(!this.isFinished && this.printingText === textToPrint) {
			typingSpeed = this.wait * 10;
			this.isFinished = true;
			
		}

		setTimeout(() => this.type(), typingSpeed);
	}
}