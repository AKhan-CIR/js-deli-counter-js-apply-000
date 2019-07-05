function takeANumber(deli,name){
    deli.push(name);
     return "Welcome, "+ `${name}` +"."+" You are number " + deli.length + " in line.";}


var i = 0
function takeANumber(deli){
  i++;
  deli.push(i)
  return `Welcome you have ticket number ${i}`

}
 
//numbers increasing 
//nowserving removes customers
//you are number ....


function takeANumber(otherDeli,name){
    otherDeli.push(name);
     return "Welcome, "+ `${name}` +"."+" You are number " + otherDeli.length + " in line.";}
     
 function nowServing(line){
    if (line.length === 0){
  return "There is nobody waiting to be served!";
  }
  else{ customer = line.shift();
<<<<<<< HEAD
  return `Currently serving + ${customer}.`;
  }
  
}
const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){
    if (deliLine.length === 0){
  return "There is nobody waiting to be served!";
  }
  else{
  return "Currently serving " + [deliLine][0].shift() + ".";
  }
  
}

=======
  }
  return "Currently serving: " + `${customer}` + ".";
}


>>>>>>> 013fb9d9c30beddfe0c71ad1f9338092050ee0b5
var joined_list = [];
function currentLine(line){
     if (line.length === 0){
        return "The line is currently empty.";
        }
    else {
        for (let i = 0; i<line.length;i++){
<<<<<<< HEAD
           joined_list.push(" "+ (i+1) + ". " +line[i]);
              }
        return ("The line is currently:"+ joined_list);
=======
           joined_list.push((i+1) + ". " +line[i]);
              }
        return ("The line is currently: "+ joined_list);
>>>>>>> 013fb9d9c30beddfe0c71ad1f9338092050ee0b5
          }
  }
    