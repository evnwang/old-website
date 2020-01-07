var letters=["A","B+","B","C+","C","D","F"]
var num=[4.0,3.5,3.0,2.5,2.0,1.0,0.0]
function calc(){
    var total=0.0;
    var numGrade;
    var coursePoints;
    var points=0;
    var i;
    for(i=1;i<=7;i++){
        var grade='c'.concat(i,'Grade');
        if(document.getElementById(grade).value){
            numGrade=document.getElementById(grade).value;
            switch(numGrade){
                case "A":
                    coursePoints=4.0;
                    break;
                case "B+":
                    coursePoints=3.5;
                    break;
                case "B":
                    coursePoints=3.0;
                    break;
                case "C+":
                    coursePoints=2.5;
                    break;
                case "C":
                    coursePoints=2.0;
                    break;
                case "D":
                    coursePoints=1.0;
                    break;
                case "F":
                    coursePoints=0.0;
                    break;
            }
        }
        else{
            break;
        }
        var id='c'.concat(i,'Cred');
        if(document.getElementById(id).value){
            var cred=parseInt(document.getElementById(id).value);
            points+=parseFloat(coursePoints*cred);
            total+=cred;
        }
    }
    if(document.getElementById('curr').value){
        points+=parseFloat(document.getElementById('curr').value)*parseFloat(document.getElementById('credEarned').value);
        total+=parseInt(document.getElementById('credEarned').value);
    } 
    var gpa=parseFloat(points)/parseFloat(total);
    if(isNaN(gpa)){
        alert("Please enter proper values.");
    }
    else{
        document.getElementById('gpa').innerHTML="GPA: "+gpa;
    }
}