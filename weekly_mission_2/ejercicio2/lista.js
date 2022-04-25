const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
/*imprimir el nombre de cada Explorer*/
   explorers.forEach(element =>  console.log(element.name))

/*Imprimir el stack de cada explorer*/
explorers.forEach(element2 =>  console.log(element2.stack))

/*crear una lista con los stacks de cada explorer*/
let temporary=[]

explorers.forEach(element3 => {temporary.push(element3.stack)})   

const newlist=temporary.map(function(x){return x})

console.log(newlist)

/*Uso de FILTER para encontrar aquellas stack que tengan js en el nombre*/

const newlistjs=newlist.filter((letters)=>letters.includes("js"))
console.log(newlistjs)

/*Buscar el primer ecplorer que sea( de la CDMX usando find*/
const explorercdmx = explorers.find((state)=>state.city="CDMX")
console.log(explorercdmx)