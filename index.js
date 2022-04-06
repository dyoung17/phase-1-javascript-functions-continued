function saturdayFun(fun='roller-skate'){
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`;
}


function wrapAdjective(emphatic) {
    
    function addFlair(flair = '*') {
        return `You are ${flair} ${emphatic} ${flair}`
    }

    const result = addFlair();

    console.log(result)
}


