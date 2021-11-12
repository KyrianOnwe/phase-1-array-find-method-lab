function superbowlWin(array){
    const objId = array.find(element => element.result === "W")
        if (objId === undefined){
            return objId;
        }else {
            return objId.year;
        }
    
    } 