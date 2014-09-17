function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var str = "";
	for(var i=0;i<this.dataStore.length; ++i) {
		str += this.dataStore[i] + "\n";
	}
	return str;
}

function empty() {
	if (this.dataStore.length === 0) {
		return true;
	} else {
		return false;
	}
}