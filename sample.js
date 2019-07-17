$(document).ready(function(){
    let subjectPoints;
    let average;
    function scoreIndicate(){
      // By making such a description, in the variable called subject_points
      // You can create an array of [language score, English score, math score, science score, society score].
      subjectPoints = [Number($('#national_language').val()),
                            Number($('#english').val()),
                            Number($('#mathematics').val()),
                            Number($('#science').val()),
                            Number($('#society').val())
                            ];
                            
      // Furthermore, by making such a description, the total point is output to the right part: "total point:"
      let sum=0;
      subjectPoints.forEach(function(Number){ 
        sum += Number;
      });
      $("#sum_indicate").text(sum);
      // write the process to output the average point referring to the above here
      average = sum / subjectPoints.length;
      $("#avarage_indicate").text(average);
      return subjectPoints;
    };
  
    function getAchievement(){
      //rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)
      if(average >= 80 && average<=100){
       $('#evaluation').text("A");
      }
      else if(average >= 60 && average < 80){
        $('#evaluation').text("B");
      }
      else if(average >= 40 && average < 60){
         $('#evaluation').text("C");
      }
      else{
        $('#evaluation').text("D");
      }
      return $("#evaluation").text();
    };
  
    function getPassOrFailure(){
      //"pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
      let subjectPoints = scoreIndicate();
      
      $("#judge").text("Passed");
        for(let i=0; i<subjectPoints.length; i++){
          if(subjectPoints[i]<60){
            $("#judge").text("Failed");
          }
        }
        return $("#judge").text();
    };
  
    function judgement(){
      let achievement = getAchievement();
      let pass_fail = getPassOrFailure();
      // By writing the following, if you click the button of  as “Your"final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.
      $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. You ${pass_fail}!!!</label>`);
    };
  
    $('#national_language, #english, #mathematics, #science, #society').change(function() {
      scoreIndicate();
    });
  
    $('#btn-evaluation').click(function() {
      getAchievement();
    });
  
    $('#btn-judge').click(function() {
      getPassOrFailure();
    });
  
    $('#btn-declaration').click(function() {
      $('#declaration').text("");
      judgement();
    });
  });