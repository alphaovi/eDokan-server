What should you do If you want to run this file locally</br>
</br>
.... Use yarn. If npm will not work properly ............</br>

_For Products API _</br>
</br>
1. if you want to add any product in this backend site you have to go link: /api/products</br>
2. When get all products : /api/products</br>
3. Single product link is : /api/products/668c1be420523b56da9a76ec</br>
4. Try to update any product? Just give a id end of the api and update the value. your product will be updated.</br>
5. If you want to delete any product just change the request and give your product id which
   you want to delete.</br>
6. Search product link is : /api/products/search?searchTerm=OnePlus</br>

_For Order API_</br>
</br>
1. Post any document use this API, and select post method: /api/orders</br>
2. Get all orders, use this API: /api/orders</br>
3. Get order using email use this API: /api/orders/email?email=<--Your ordered email --></br>


_For .env File_</br>
</br>
I use in dotenv file :</br>
NODE_ENV= development</br>
<--For run locally I used --> PORT=5000</br>
DATABASE_URL=<-- get your own database url from mongodb which is prefer for you. --></br>