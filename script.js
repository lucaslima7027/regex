function replaceName(string, name, value){
    let nameToReplace = "{{" + name + "}}";
    string = string.replace(new RegExp(nameToReplace, "g"), value);
    return string;
}

let persons = '{"person":[{"nome": "Lucas","idade": "22","situacao": "student"},{"nome": "John","idade": "52","situacao": "executive"},{"nome": "Anna","idade": "32","situacao": "manager"}]}'
persons = JSON.parse(persons);
    
let string1 = "my name is {{nome}}, I am {{idade}} years old and I was a {{situacao}}"

function changeValues(string, name, year, situation){
    let finalString = replaceName(string1, "nome", name);
    finalString = replaceName(finalString, "idade", year);
    finalString = replaceName(finalString, "situacao", situation)  
    console.log(finalString)  
}

(function(){
    for (let index = 0; index < persons.person.length; index++) {
        let name = persons.person[index].nome;
        let year = persons.person[index].idade;
        let situation = persons.person[index].situacao;
        changeValues(string1, name, year, situation);
        
    } 
})();

