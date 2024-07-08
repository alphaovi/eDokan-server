What should you do If you want to run this file locally

.... Use yarn. If npm will not work properly ............

_For Products API _

1. if you want to add any product in this backend site you have to go link: /api/products
2. When get all products : /api/products
3. Single product link is : /api/products/668c1be420523b56da9a76ec
4. Try to update any product? Just give a id end of the api and update the value. your product will be updated.
5. If you want to delete any product just change the request and give your product id which
   you want to delete.
6. Search product link is : /api/products/search?searchTerm=OnePlus

_For Order API_

1. Post any document use this API, and select post method: /api/orders
2. Get all orders, use this API: /api/orders
3. Get order using email use this API: /api/orders/email?email=<!--email -->


_For .env File_
I use in dotenv file :
NODE_ENV= development
<!--For run locally I used --> PORT=5000
DATABASE_URL=<!-- get your own database url from mongodb which is prefer for you. -->