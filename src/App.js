import logo from './logo.svg';
import './App.css';
import Image from './components/Image';

function App() {

    let items = [
        {
            "name": "Блины с повидлом",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "jam",
                    "weight": 200
                }
            ],
            "priceCooking": 0,
            "priceSale": 300
        },
        {
            "name": "Блины с сыром",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "cheese",
                    "weight": 300
                }
            ],
            "priceCooking": 0,
            "priceSale": 400
        },
        {
            "name": "Блины с творогом",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "cottageCheese",
                    "weight": 300
                }
            ],
            "priceCooking": 0,
            "priceSale": 450
        },
        {
            "name": "Блины с мясом",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "meat",
                    "weight": 300
                }
            ],
            "priceCooking": 0,
            "priceSale": 600
        },
        {
            "name": "Блины с лососем",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "salmon",
                    "weight": 400
                }
            ],
            "priceCooking": 0,
            "priceSale": 800
        },
        {
            "name": "Блины с бананом",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "bananas",
                    "weight": 200
                }
            ],
            "priceCooking": 0,
            "priceSale": 350
        },
        {
            "name": "Блины с шоколадом",
            "ingredients": [
                {
                    "nameIngredient": "milk",
                    "weight": 500
                },
                {
                    "nameIngredient": "water",
                    "weight": 100
                },
                {
                    "nameIngredient": "eggs",
                    "weight": 100
                },
                {
                    "nameIngredient": "sugar",
                    "weight": 50
                },
                {
                    "nameIngredient": "salt",
                    "weight": 20
                },
                {
                    "nameIngredient": "flour",
                    "weight": 400
                },
                {
                    "nameIngredient": "oil",
                    "weight": 100
                },
                {
                    "nameIngredient": "chocolate",
                    "weight": 200
                }
            ],
            "priceCooking": 0,
            "priceSale": 400
        },
        {
            "name": "Летний салат",
            "ingredients": [
                {
                    "nameIngredient": "salad",
                    "weight": 300
                },
                {
                    "nameIngredient": "tomatoes",
                    "weight": 200
                },
                {
                    "nameIngredient": "cucumber",
                    "weight": 200
                },
                {
                    "nameIngredient": "onion",
                    "weight": 50
                },
                {
                    "nameIngredient": "paper",
                    "weight": 150
                }
            ],
            "priceCooking": 0,
            "priceSale": 200
        }
    ];


  return (
    <div className="App">
      <header className="App-header">
        {items.map((item) => (
            <Image name={item.name} price={item.priceSale} ingredients={item.ingredients.map(u => u.nameIngredient).join(', ')} />
        ))}
      </header>
    </div>
  );
}

export default App;
