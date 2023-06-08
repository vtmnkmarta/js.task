// 1 завдання
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red"

// 2 завдання
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
let arr = [paragraph1, paragraph2];
for (let i = 0; i < arr.length; i++) {
    arr[i].style.color = "purple";
};

// 3 завдання
const paragraph3 = document.getElementById("paragraph3");
const paragraph4 = document.getElementById("paragraph4");
let array = [paragraph3, paragraph4];
let colorList = ["orange", "blue"];
for (let i = 0; i < colorList.length; i++) {
    array[i].style.color = colorList[i]
    
}