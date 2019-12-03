# Pokédex

This is a Pokédex that allows for quick comparisons between Pokémons for 
Pokémon players. 

The Pokédex can be accessed at http://michaelmao.me/pokedex. 

The data is gathered from [PokéAPI](https://pkeapi.co). The data is scraped 
and assembled using the `scrape.ipynb` Jupyter Notebook under `collect_data` 
folder. 

The design takes on a retro feel using pixelated and monospace fonts and an 
off-white background. The site also keeps a sticky header on top to view which 
attribute you are looking at even if you are deep into the list. The drop down 
lists for filtering are underlined and to give a clear affordance. The order is 
clickable and the hand pointer is shown when moved on top of it, and the arrow 
is greyed while inactive. Thiese makes understanding which ordering it is 
applying very easy. It is also easy to click on the arrow again to switch from 
descending order to ascending order. The choice of not using pixelated font for 
the actual data is due to readability issues. 

The data is saved as a json file on server, and each time changes are made, a 
new filter function and sort function is created and applied. The header would 
change these states and call a callback function to trigger rendering in the 
page. 

My goal for the app is to create a visually appealing and easy-to-use pokedex 
that shows the basic information of pokemons. In most pokedexes on the internet 
the information is hidden behind an extra click, which makes comparing pokemons 
very difficult. My pokedex would give you the information in a list-like form 
and ease the search and comparison process. 

Further improvements could include adding pagination and lazy loading due to 
the large amount of data (802 entries). These are slightly more complicated and 
require significantly more work. 