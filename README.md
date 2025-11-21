Recipe Finder – Search Recipes by Ingredient

A simple and smart web application that allows users to search recipes by entering available ingredients. The system fetches data from a free online recipe API and displays recipe details such as image, title, ingredients, instructions, and source link.

Features

✔ Search recipes using one or multiple ingredients
✔ Fetch real-time recipe data from free API
✔ View recipe images & short description
✔ Step-by-step instructions & cooking time (if available)
✔ Mobile-friendly UI
✔ Easy to integrate & modify

 Tech Stack Used
Technology	Purpose
HTML	Frontend structure
CSS	UI styling
JavaScript	Fetch API & logic handling
Free Recipe API (e.g., Spoonacular / Edamam)	Recipe details
 API Used

Example (Spoonacular API):

[https://Mealdbi/findByIngredients](https://www.themealdb.com/api/json/v1/1/filter.php?i=INGREDIENT_NAME
)


Replace your API key in script:

const apiKey = "YOUR_API_KEY";

 How It Works

User enters ingredient(s) in search bar

Application calls recipe API using Fetch

API returns list of recipes related to ingredients

Recipes are displayed with image & complete details



You can upload screenshots in the project's /assets/images folder.

📂 Project Structure
📁 Recipe-Finder
 ┣ 📁 assets
 ┃ ┗ 📁 images
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 script.js
 ┗ 📄 README.md

 Steps to Run the Project Locally
1. Download or clone the repository
2. Open the project folder
3. Replace "YOUR_API_KEY" in script.js
4. Run index.html in any browser

👨‍💻 Future Enhancements (Optional)

🔹 Add user login & save favorite recipes
🔹 Add voice-based ingredient input
🔹 Add vegetarian / vegan filters
🔹 Add calorie-based search

 Contributing

Feel free to contribute!
Fork the repository → Create new branch → Add updates → Submit pull request.

 License

This project is licensed under MIT License – free to use, modify & distribute.

 Contact

If you have suggestions or queries, feel free to connect:

 Email:goswaminiharika5656@gmail.com



If you found this project useful, don’t forget to star the repository on GitHub!
