# AngularTest

This project is not complete, and some of its code could be wrong, you could (and you should) modify existing code.

## Tasks

### Fix and complete files

Some of the files doesn't work as they are, you need to complete them (add imports to modules, etc). Keep the existing routes.

### Add the header and footer for all pages.

Use the existing src/app/components/header and footer components to show them in every page, at the top and bbottom

### Show the users page with the list of users ordered by username

Use the existing app/users module to show the list of users.

### Show the posts page with the list of posts

Use the existing app/posts module to show the list of posts.

### Add a new page to create a new user.

To create a new user, the person has to fill a form, you need to send and validate next fields:

- name: required, string
- username: required, string, one word without spaces
- email: required, string, validate email format (soft validation)
- address: optional
  - street: string
  - city: string
  - zipcode: string
- phone: required, string
- website: optional, string

When the fields are not valid add a red border to the input.

### Add a 404 page

To catch routing problems and user mistakes, create a 404 page that catch them.

### Considerations

Api Endpoint: (jsonplaceholder)[https://jsonplaceholder.typicode.com]

Sample retrieved user:

```
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
```

Sample retrieved post:

```
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
```
