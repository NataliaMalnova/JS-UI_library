import $ from '../core';

$.prototype.html = function(content) {
    for(let i = 0; i < this.length; i++){
        if(content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};


$.prototype.eq = function(i) {
    
    const swap = this[i];
    const objLenght = Object.keys(this).length;

    for(let i = 0; i < objLenght; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};


$.prototype.index = function() {
    
    const parent = this[0].parentNode;
    const chileds = [...parent.children];

    const findMyIndex = item => {
        return item == this[0];
    };

    return chileds.findIndex(findMyIndex);

};

$.prototype.find = function(selector) {
    
    let numberOfNumbers = 0;  // общее кол-во эл-ов
    let counter = 0; // кол-во записанных эл-ов
    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++) {
        const arr =  copyObj[i].querySelectorAll(selector)

        if(arr.length == 0) {
            continue;
        }   
        for(let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfNumbers += arr.length;
    }

    this.length = numberOfNumbers;
    const objLenght = Object.keys(this).length;

    for(; numberOfNumbers < objLenght; numberOfNumbers++) {
        delete this[numberOfNumbers];
    }

    return this;

};