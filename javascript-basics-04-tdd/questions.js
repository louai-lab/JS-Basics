
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text = text.replace('e',' ')
}
const concatString = (text1, text2) => {
    let result = text1.concat(text2);
    return result;
}
const showChar5 = (text) => {
    let fifth=text.charAt(4);
    return fifth;
}
const showChar9 = (text) => {
    let nine=text.slice(0,9);
    return nine;
}
const toCapitals = (text) => {
    let capital=text.toUpperCase();
    return capital;
}
const toLowerCase = (text) => {
    let lower=text.toLowerCase();
    return lower;
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (text.IsString = true);
}

const getExtension = (text) => {
    return text.split(".").pop();
}
const countSpaces = (text) => {
    let spacesCount = text.split(' ').length - 1;
    return spacesCount;
}
const InverseString = (text) => {
    return text
    .split("")
    .reverse()
    .join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);2
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    const languages = ["Html", "CSS", "Java", "PHP"];
  return languages;
}

////////////////////////////

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}