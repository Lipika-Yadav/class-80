var GuestName = document.getElementById("name1").value;
names_of_people.push(GuestName);
function show(){
    
    document.getElementById("display_name_list").value= names_of_people;
}


function search()
{
    var s= document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0;j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found+1;
        }
    }
    document.getElementById("search").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}
function submit(){
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    
}