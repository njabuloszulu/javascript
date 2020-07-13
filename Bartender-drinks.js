function getDrinkByProfession(param){
    let words = param.split(" ")
    let result = []
    let output;
    for (var word of words){
        result.push(word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase())
    }
    let profession = result.join(" ")
      switch(profession){
          case "Jabroni":
          output = "Patron Tequila"
          break;
          case "School Counselor":
          output = "Anything with Alcohol"
          break;
          case "Programmer":
          output = "Hipster Craft Beer"
          break;
          case "Bike Gang Member":
          output = "Moonshine"
          break;
          case "Politician":
          output = "Your tax dollar"
          break;
          case "Rapper":
          output = "Cristal"
          break;
          default:
          output = "Patron Tequila"
          break;
      }
      return output
    }

    console.log(getDrinkByProfession("ScHoOl counSelor"))
