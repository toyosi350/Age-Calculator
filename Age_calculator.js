

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const now = new Date();
const currentYear = now.getFullYear();
// Month returns 0 - 11
let currentMonth = now.getMonth();
currentMonth++
// date returns 1 - 31
let currentDay = now.getDate();

function calculateAge(name, birthYear, birthMonth, birthDay){
    let Age = currentYear - birthYear;
    
    if(currentMonth < birthMonth){
        Age--
    }
    else if(currentMonth === birthMonth && currentDay < birthDay){
        Age--
    }

    return name + " you are " + Age + " years old"
}


function isLeapYear(presentYear){
        return (presentYear % 4 === 0 && presentYear % 100 !== 0) || (presentYear % 400 === 0);
}

function isFeb29( birthMonth, birthDay){
    return birthMonth === 2 && birthDay === 29;
}

function isFutureBorn(birthYear, birthMonth, birthDay){
  const birth = new Date(birthYear, birthMonth - 1, birthDay);
  return birth > now;
}

function isValid(birthYear, birthDay, birthMonth){
    if(birthMonth <= 12 && birthMonth >= 1 && birthDay > 0){
        
    if(birthMonth === 9 || birthMonth === 4 || birthMonth === 6 || birthMonth === 11){
        if(birthDay <= 30 && birthDay > 0){
            return true;
        }
    }
    if(birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12){
        if(birthDay <= 31 && birthDay > 0){
            return true;
        }
    }
    if(birthMonth === 2 ){
        if(isLeapYear(birthYear)){
        if(birthDay <= 29 && birthDay > 0){
            return true;
        }
    }else {
        if(birthDay <= 28 && birthDay > 0) return true;
    }
    }
}
}

 
function mainCode(name, birthYear, birthMonth, birthDay){
    if(!isValid(birthYear, birthDay,birthMonth)) return "invalid date";
    if(isFutureBorn(birthYear, birthMonth, birthDay)) return "You are not born yet";

    if(isFeb29(birthMonth,birthDay) && !isLeapYear(currentYear)){
        return calculateAge(name, birthYear, 3, 1);
    }

    return calculateAge(name, birthYear, birthMonth, birthDay);
}


function normalizeDob(dob){
    const parts = dob.trim().split("-")

    if(parts.length !== 3) return null;

    let[y, m, d] = parts;

    if(!/^\d{4}$/.test(y)) return null;

    if(!/^\d{1,2}$/.test(m)) return null;
    if(!/^\d{1,2}$/.test(d)) return null;

    m = m.padStart(2, "0");
    d = d.padStart(2, "0");

    return `${y}-${m}-${d}`;
}


rl.question('What is your name: ', (name)=>{

    function askDob() {
        rl.question("Date of birth(YYYY-MM-DD): ",(dob) =>{

            const normalize = normalizeDob(dob);
        if(!normalize){
            console.log("Invalid format. use YYYY-MM-DD (example: 2007-09-28)");
            return askDob();
        }
    
        const parts = normalize.split("-");
        const birthYear = Number(parts[0]);
        const birthMonth = Number(parts[1]);
        const birthDay = Number(parts[2]); 
        
        const result = mainCode(name, birthYear, birthMonth, birthDay);

        if(result === "invalid date" || result === "You are not born yet"){
            console.log(result);
            return askDob();
        }
    
    console.log("...................... Main Code ........................");
    console.log("Name: ", name)
    console.log("DOB: ", normalize)
    console.log(result);

        rl.close();
    })
}
 askDob();

});



