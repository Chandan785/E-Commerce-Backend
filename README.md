# 🛒 CTASI E-Commerce Backend API

Production-ready E-Commerce Backend built using **Node.js, Express, and MongoDB Atlas**.

This project implements complete product listing, cart management, and order processing with stock validation and transaction safety.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
---
---
## 📸 Postman Examples (Screenshots)

Below are example Postman screenshots. To display images in the README you must place the PNG files in the repository at the paths shown below.

- Add To Cart: `assets/postman/add-to-cart.png`  
- Get Cart: `assets/postman/get-cart.png`  
- Remove From Cart: `assets/postman/remove-from-cart.png`  
- Create Order: `assets/postman/create-order.png`  
- Health Check: `assets/postman/health-check.png`  
- Get Single Product: `assets/postman/get-product.png`  
- Get All Products: `assets/postman/get-products.png`

If an image is missing you will see a broken image on GitHub — add the file to `assets/postman/` and re-push.

### Add To Cart
![Add To Cart](assets/postman/add-to-cart.png)

### Get Cart
![Get Cart](assets/postman/get-cart.png)

### Create Order
![Create Order](assets/postman/create-order.png)

---

## 📂 Project Structure

Use the tree below for a clean, copyable project structure:

```text
e-commarce/
├─ README.md
├─ package.json
├─ .env.example
├─ server.js
├─ seed.js
├─ assets/
│  └─ postman/
│     └─ <your-postman-screenshots>.png
└─ src/
	├─ app.js
	├─ config/
	│  └─ db.js
	├─ controllers/
	│  ├─ product.controller.js
	│  ├─ cart.controller.js
	│  └─ order.controller.js
	├─ middleware/
	│  ├─ errorHandler.js
	│  └─ validate.js
	├─ models/
	│  ├─ Product.model.js
	│  ├─ Cart.model.js
	│  └─ Order.model.js
	├─ routes/
	│  ├─ product.routes.js
	│  ├─ cart.routes.js
	│  └─ order.routes.js
	└─ utils/
		└─ AppError.js
```

Placeholders above are intentionally generic — they reproduce the structure exactly and will render cleanly on GitHub.

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Chandan785/E-Commerce-Backend.git
cd ecommerce-backend
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Environment Variables

Create a `.env` file in the project root with these values:

```
PORT=5000
NODE_ENV=production
MONGO_URI_ATLAS=your_mongodb_atlas_connection_string
```

Example MongoDB Atlas connection string:

```
mongodb+srv://username:password@cluster0.mongodb.net/ecommerce_prod?retryWrites=true&w=majority
```

## 4️⃣ Seed Database

```bash
npm run seed
```

This will clear existing products and insert seed products into MongoDB Atlas.

## 5️⃣ Start Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs at: http://localhost:5000

---

## 📦 API Endpoints

🟢 SYSTEM
- **Health Check:** GET /

🟢 PRODUCTS
1️⃣ **Get All Products**
- GET /api/products

Optional query parameters: `page`, `limit`, `search`

Example: `GET /api/products?page=1&limit=5&search=iphone`

2️⃣ **Get Single Product**
- GET /api/products/:id

🟢 CART
1️⃣ **Add To Cart**
- POST /api/cart/add

Body (JSON):

```json
{
	"userId": "user1",
	"productId": "product_object_id",
	"quantity": 2
}
```

2️⃣ **Get Cart**
- GET /api/cart/:userId

Returns cart items and calculated total amount.

3️⃣ **Remove From Cart**
- DELETE /api/cart/remove

Body (JSON):

```json
{
	"userId": "user1",
	"productId": "product_object_id"
}
```

🟢 ORDERS
**Create Order**
- POST /api/orders

Body (JSON):

```json
{
	"userId": "user1"
}
```

Order creation flow:

- Validates cart
- Checks stock availability
- Deducts product stock
- Creates order
- Clears cart
- Uses MongoDB transaction for atomic operation

🔐 Key Features Implemented

- ✔ Product listing with pagination & search
- ✔ Cart management system
- ✔ Quantity validation
- ✔ Stock validation before checkout
- ✔ Automatic stock deduction
- ✔ Cart cleared after successful order
- ✔ MongoDB transaction support
- ✔ Centralized error handling
- ✔ Clean MVC project structure
- ✔ Production-ready configuration

🧪 Testing

Recommended testing flow in Postman:

1. GET Products
2. Add product to cart
3. View cart
4. Create order
5. Verify stock reduced
6. Verify cart cleared

⚠️ Error Handling Format

All errors return structured JSON:

```json
{
	"success": false,
	"status": "fail",
	"message": "Error message"
}
```

📌 Evaluation Criteria Covered

- ✔ Code structure
- ✔ Business logic correctness
- ✔ Edge case handling
- ✔ Error management
- ✔ Production readiness

👨‍💻 Author

Chandan Kumar
Backend Developer (Node.js | Express | MongoDB)

📄 License

Created for CTASI E-Commerce Engineering Assignment.

---

 


 

