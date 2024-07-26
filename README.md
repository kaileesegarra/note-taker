# Note Taker

## Description

The Note Taker application allows users to write, save, and delete notes. This app uses an Express.js backend and saves and retrieves note data from a JSON file. The front end has been provided, and the back end has been implemented to meet the required functionalities.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
    
    git clone <https://github.com/kaileesegrra/note-taker.git>
    
2. Navigate to the project directory:
   
3. Install the required dependencies:
    
    npm i
    

## Usage

1. Start the application:
    
    npm start
    
2. Open your browser and go to:
    
    http://localhost:3000
    
3. You will be presented with a landing page with a link to the notes page.
4. Click the link to access the notes page where you can view existing notes, add a new note, and delete notes.

## API Routes

- `GET /api/notes` - Retrieve all saved notes as JSON.
- `POST /api/notes` - Save a new note and return it as JSON.
- `DELETE /api/notes/:id` - Delete a note by its ID.

## Deployment

The Note Taker application is deployed on Heroku. You can access it using the following link:

[Note Taker on Heroku](https://note-taker-for-kailee-687cf2f0fea6.herokuapp.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## GitHub

[Kailee's GitHub](https://github.com/kaileesegarra).

