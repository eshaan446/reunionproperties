
**Tech Stack:- MERN**
# API Usage Documentation for Backend

## 1. Fetch ALL Properties API
- **Request Type:** GET
- **Description:** Queries the database for all properties listed on the platform.
- **Usage:** Displayed on the homepage for both authenticated and unauthenticated users.
- **Ordering:** Returns properties in descending order by listing date.

## 2. Add a Property API
- **Request Type:** POST
- **Description:** Allows users to add a new property to the platform.
- **Usage:** Use the provided JSON data in the 'Body' section.
- **Note:** Requires prior signup for successful addition of a property.
- **JSON Data:**
    ```json
    {
      "data": {
        "title": "Myriad Heights",
        "description": "Huge Carpet Size in heart of Mumbai. All Residents enjoy easy access to a beautiful parks and public transport.",
        "price": 6000,
        "address": "Dadar",
        "city": "Mumbai",
        "country": "India",
        "image": "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2018/05/10/Project-Photo-11-JP-North-Estella-Mumbai-5115379_380_750_310_462.jpg",
        "facilities": {
          "bhk": 3,
          "carpetArea": 750
        },
        "userEmail": "eshaantesting@gmail.com"
      }
    }
    ```

## 3. Update a Property / Fetch a Specific Property API
- **Request Type:** GET
- **Description:** Fetches a specific property by ID.
- **Usage:** Provide the property ID in the URL parameter.
- **Default ID for Testing:** "Sunrise Gardens".

## 4. Delete a Property / Fetch a Specific Property API
- **Request Type:** POST
- **Description:** Deletes a property permanently from the database.
- **Usage:** Provide the property ID in the URL parameter.
- **Note:** Requires the ID of the property to be deleted.

## 5. List All Current User's Properties
- **Request Type:** POST
- **Description:** Returns properties associated with a specific user.
- **Usage:** Provide the user's email in the request body.
- **Access:** Available after successful signup and login.

## 6. Signup API
- **Request Type:** POST
- **Description:** Adds a user profile to the database.
- **Usage:** Provide an email in the request body for signup.
- **Validation:** Checks for a valid and unique email.

## 7. Login API
- **Request Type:** POST
- **Description:** Logs a user in securely and generates an authToken using JWT.
- **Usage:** Provide the email associated with a registered account.
- **Note:** Requires prior signup for successful login.

For any issues or further explanations, feel free to contact: eshaanpandeyk540@gmail.com
