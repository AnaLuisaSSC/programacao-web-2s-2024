function to_upper(word){
    if (typeof word != String){
        return false;
    }
    return word.toUpperCase();
}
function to_lower(word){ // pode ser:   export default function to_lower(word){
    if(typeof word != "string"){
        return false;
    }
    return word.toLowerCase();
}

module.export = {
    to_upper,
    to_lower
}