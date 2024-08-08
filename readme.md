### A Car rental reservation system backend. Live Link: https://campers-shop-backend.vercel.app/

Campers Shop backend built using Typescript, Express JS and Mongoose. This app provides backend for an e-commerce website in which all the camping equipments can be found.

- Technology used:

1. Node JS
2. Express JS
3. Typescript
4. Mongoose

### To run the application locally: clone this repository,run the command:

```
npm install
```

Then run the command

```
npm run start:dev
```

The application will start at port 3000. To run the routes locally just replace the live link with : http://localhost:3000/

### Application Routes:

<!-- #### User

- Route: https://car-rental-reservation-system-teal.vercel.app/api/auth/signup (POST)

```sample json:
{
    "name": "User",
    "email": "user@gmail.com",
    "role": "user",
    "password": "123456",
    "phone": "1234567890",
    "address": "Dhaka,Bangladesh"
}
```

- Route: https://car-rental-reservation-system-teal.vercel.app/api/auth/signin (POST)

```sample json:
{
  "email": "user@gmail.com",
  "password": "123456"
}
``` -->

### Products

- Route: https://campers-shop-backend.vercel.app/api/products (POST)

You need to provide the product picture in form data.

```sample json:
{
    category: "Tents",
    productName: "Mountain Explorer Tent",
    brand: "OutdoorGear",
    price: 199.99,
    stockQuantity: 50,
    soldCount: 120,
    isAvailable: true,
    features: [
      { feature: "Waterproof", detail: "Fully waterproof with sealed seams" },
      { feature: "Capacity", detail: "Sleeps 4 people comfortably" }
    ],
    specifications: [
      { specification: "Weight", value: "10 lbs" },
      { specification: "Dimensions", value: "8 x 10 ft" }
    ],
    extraInfo: [
      { info: "Setup Time", detail: "10 minutes" },
      { info: "Material", detail: "Durable polyester fabric" }
    ],
    description: "The Mountain Explorer Tent is perfect for camping enthusiasts looking for a reliable and spacious tent. It features a waterproof design and easy setup, making it ideal for all weather conditions.",
    rating: 4.5
  }
```

- Route: https://campers-shop-backend.vercel.app/api/products (GET)
- Route: https://campers-shop-backend.vercel.app/api/products/666c4d5bbfb29328ae8ad975 (Single GET)
- Route: https://campers-shop-backend.vercel.app/api/products/666c4d5bbfb29328ae8ad975 (PUT)

You can upload any picture in form data.

```sample json
{
    category: "Tents",
    productName: "Mountain Explorer Tent",
    brand: "OutdoorGear",
    price: 199.99,
    stockQuantity: 50,
    soldCount: 120,
    isAvailable: true,
    features: [
      { feature: "Waterproof", detail: "Fully waterproof with sealed seams" },
      { feature: "Capacity", detail: "Sleeps 4 people comfortably" }
    ],
    specifications: [
      { specification: "Weight", value: "10 lbs" },
      { specification: "Dimensions", value: "8 x 10 ft" }
    ],
    extraInfo: [
      { info: "Setup Time", detail: "10 minutes" },
      { info: "Material", detail: "Durable polyester fabric" }
    ],
    description: "The Mountain Explorer Tent is perfect for camping enthusiasts looking for a reliable and spacious tent. It features a waterproof design and easy setup, making it ideal for all weather conditions.",
    rating: 4.5
  }
```

- Route: https://campers-shop-backend.vercel.app/api/products/666c4d5bbfb29328ae8ad975 (DELETE)

### Category

### Purchase

- Route: https://campers-shop-backend.vercel.app/api/purchase/create-stripe-payment-intent (POST)

<!-- ```sample json:
{
   "carId": "666c4da4bfb29328ae8ad981",
   "date": "2024-06-17",
   "startTime": "13:45"
}
``` -->

- Route: https://campers-shop-backend.vercel.app/api/purchase (POST)
