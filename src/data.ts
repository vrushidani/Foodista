import { Food} from "./app/shared/model/Food";
import { Tag } from "./app/shared/model/Tag";

export const sample_foods:Food[]=[
    {
        id : '1',
        name : 'Pizza Pepproni',
        cookTime : '10-20',
        price : 10,
        favorite : false,
        origins : ['Italy'],
        stars : 4.5,
        imageUrl:'assets/pizza.jpg',
        tags : ['fastfood','Pizza','Lunch']
    },
    {
        id : '2',
        name : 'Cheese Ball',
        cookTime : '20-30',
        price : 20,
        favorite : true,
        origins : ['Persia','Middleeast','China'],
        stars : 4.7,
        imageUrl:'assets/cheeseball.jpg',
        tags : ['Slowfood','Lunch']
    },
    {
        id : '3',
        name : 'Burger',
        cookTime : '15-20',
        price : 5,
        favorite : false,
        origins : ['Germany','US','China'],
        stars : 3.5,
        imageUrl:'assets/burger.jpg',
        tags : ['Fastfood','Burger']
    },
    {
        id : '4',
        name : 'Sandwich',
        cookTime : '15-20',
        price : 5,
        favorite : false,
        origins : ['India','US','China'],
        stars : 3.5,
        imageUrl:'assets/sandwich.jpg',
        tags : ['Fastfood','Sandwich']
    },
    {
        id : '5',
        name : 'Hakka Noodles',
        cookTime : '25-30',
        price : 10,
        favorite : false,
        origins : ['China'],
        stars : 4.5,
        imageUrl:'assets/hakkanoodles.jpg',
        tags : ['Slowfood','Dinner','Noodles']
    },
    {
        id : '6',
        name : 'Manchow Soup',
        cookTime : '15-20',
        price : 5,
        favorite : true,
        origins : ['China','Asia'],
        stars : 4.0,
        imageUrl:'assets/manchowsoup.jpg',
        tags : ['Fastfood','Soup']
    },
    {
        id : '7',
        name : 'Samosa',
        cookTime : '20-25',
        price : 5,
        favorite : true,
        origins : ['Gujarat','India'],
        stars : 4.4,
        imageUrl : 'assets/samosa.jpg',
        tags : ['Fastfood','Lunch','samosa'] 
    },
    {
        id : '8',
        name : 'Dosa',
        cookTime : '25-30',
        price : 10,
        favorite : false,
        origins : ['South India','Kerala'],
        stars : 4.5,
        imageUrl:'assets/dosa.jpg',
        tags : ['Slowfood','Dosa']
    }
]

export const sample_tags : Tag[]=[
    {name : 'All', count : 8},
    {name : 'Fastfood', count : 5},
    {name : 'Slowfood', count : 3},
    {name : 'Lunch', count : 3},
    {name : 'Dinner', count : 1},
]