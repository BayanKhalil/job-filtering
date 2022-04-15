$(document).ready(function () {
  let arr = [];

  let filterButtonArray = [];

  let jobObj = $(".container").children(".card");

  let arraaaay = [];



  $(".container").on("click", "button", function (event) {
    let ourClass = $(this).attr("class");
    arr.push(ourClass);


    filter($(".container").children(), arr);
    arrayFilter($(".array").children(), filterA, filterButtonArray);

    
  
 
  });

 

  $(".array").on("click", "button", function (event) {
    let arrayClass = $(this).attr("class");
    filterButtonArray.push(arrayClass);
    arrayFilter($(".array").children(), filterA, filterButtonArray);

    
    if (arrayClass == "clear") {
      filterA = [];
      filterButtonArray = [];
      location.reload();
      
      $(".container").append(Object.values(jobObj));
      $('.array').empty().remove();
      
    }
    console.log(filterA);
    console.log(filterButtonArray);
  });

  let filterA = [];

  let result = [];
  const filter = (obj, arr) => {
    let jobs = Object.values(obj);
    jobs.forEach((element) => {
      if (!element.classList) {
        return;
      }
      // const ourClasses = element.classList.value.trim().split(" ");

      let filterItems = Object.values(
        arr.filter((item, pos) => {
          return arr.indexOf(item) == pos;
        })
      );
      filterA = [...filterItems];
      result = [];
      Object.values(jobObj).forEach((item) => {
        if (!item.classList) {
          return;
        }
        let jobClasses = item.classList.value.split(" ");
        arraaaay.push(jobClasses);
        for (let i = 0; i < filterItems.length; i++) {
          if (jobClasses.includes(filterItems[i])) {
            result.push(item);
          } else {
          }
        }
      });
    });


    $(".container").empty();
    $(".container").append(result);
  };

  const arrayFilter = (obj, arr, arr1) => {
    $(".array").empty();
    $(".array").append("<button  class=clear >Clear </button>");

    $.each(arr, function (index, value) {

      var show = $(".array")
        .show()
        .append(
          "<div class=" +
            value +
            "buttonDiv><button class=" +
            value +
            "button  class=" +
            value +
            " >" +
            value +
            "<span class=span> </span><span class=clearThis> X </span>" +
            "</div>"
        );

      $(show).removeClass("hide").addClass("hide");

   
    });

    for (let a = 0; a <= arr.length; a++) {
      for (let b = 0; b < arr1.length; b++) {
        if (arr1[b].substring(0, arr1[b].length - 6) == arr[a]) {
         
          Object.values(result).forEach((item) => {
            if (!item.classList) {
              return;
            }
            const classes = item.classList.value.split(" ");

              
            if (!(classes.includes(arr[a]))  ) {
              result = [];
              result.push(item);
            
            }
            
            // r2  should have all calsses in array Div.............
               
          //   if (classes.some(r => arr2.includes(r))) {
             
          //  }
              
            
            $('.container').empty();
            $('.container').append(result);
           
          })
          
         

        }

        $('.'+arr1[b]+'Div').remove();

        
      }
    }


  };
});
