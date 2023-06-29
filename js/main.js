// console.log("HELLO WORLD");
// 🔴EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
function firstSuperiorToSecond(first, second) {
    if (first > second) {
        return true;
    } else {
        return false;
    }
}

// console.log(firstSuperiorToSecond(4,2));
// f(4,2) retourne true📝
// f(4,7) retourne false📝

// 🔴EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse

function reverseToString(str) {
    let splitString = str.split("");
    let reverseArray = new Array;
    for (let i = splitString.length - 1; i >= 0; i--) {
        reverseArray.push(splitString[i]);
    }
    const joinArray = reverseArray.join("");
    return joinArray;
}

// console.log(reverseToString("HELLO WORLD"));
// f("test") retourne "tset"📝

// 🔴EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.

function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(palindrome("kayak"));
// f("kayak") retourne true📝
// f("test") retourne false📝

// 🔴EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.

function factoriel(num) {
    let result = 1;
    for (let i = 2; i < num + 1; i++) {
        result = result * i;
    }
    return result;
}
    
// console.log(factoriel(5));
// f(5) retourne 120📝

// 🔴EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même

function primeNumbers(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(primeNumbers(11));
// f(11) retourne true📝
// f(20) retourne false📝

// 🔴EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

function maxNumber(array) {
    return Math.max(...array);
}

// console.log(maxNumber([5,6,2,9,23]));

// 🔴EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

function anagramme(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        for (let y = 0; y < str2.length; y++) {
            if (str1[i] === str2[i]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

// console.log(anagramme("manoir", "carnet"));
// minora (pour retourner true)📝
// carnet (pour retourner false)📝

// 🔴EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.

// ⚠️incomplète!
function uniqueFeatures(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i]) {
            return false;
        } else {
            return true;
        }
    }
}

// console.log(uniqueFeatures("lest"));
// f("test") retourne faux car le caractère t est présente 2 fois📝
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois📝
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)📝

// 🔴EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.

// console.log(secondMax([5,6,9,2,23]));
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand📝

// 🔴EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.

function peers(num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[i / 2]) {
            result += num[i];
        }
    }
    return result;
}

// console.log(peers([3,2,6]));
// f([3,2,6]) retoune 8 (2+6)📝

// 🔴EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// la fonction ne retourne rien

function reverseWords(str) {
    let world = str.split(" ");
    world = world.reverse();
    world = world.join(" ");
    // console.log(world);
}
reverseWords("bonjour je vais bien")
// f("bonjour je vais bien") affiche "bien vais je bonjour"📝

// 🔴EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// Vous devez utiliser la méthode filter()

// ⚠️incomplète!
function deleteOccurrences(array, occurrences) {
    let newArray = new Array;
    return newArray = array.filter(array => array.length !== occurrences);
}

// console.log(deleteOccurrences([3,5,7,3,1,3,5], 3));
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)📝

// 🔴EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.

// ⚠️incomplète!
function conterVowels(str) {
    let array = [];
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        y: 0,
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === vowels) {
            
        }
    }
    return array;
}
// console.log(conterVowels("bonjour"));
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"📝
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"📝

// 🔴EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument

// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23📝

// 🔴EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
function indexNumbers(num, array) {
    let result = [];
    let idx = array.indexOf(num);
    while (idx !== -1) {
        result.push(idx);
        idx = array.indexOf(num, idx + 1);
    }
    return result;
}

console.log(indexNumbers(3,[3,5,3,6]));
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2📝

// 🔴EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.

function wholeNumber(num) {
    num = num.toString()
    let result = `il retourne ${num.length} chiffre`;
    return result;
}

// console.log(wholeNumber(102545553));
// f(102543) retourne 6 car 102543 contient 6 chiffres📝