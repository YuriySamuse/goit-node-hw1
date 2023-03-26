# Node.js CLI application

## How to install node projects locally

-   Clone repository
-   Navigate to root folder of the project
-   Run

```git
   npm install
```

-   Run one of the following examples command

## Action exampes

-   Recieve list of contacts and print it to console table

```cli
node index --action list
```

![List of contacts](https://ibb.co/crBWwwv)

-   Get contact by id

```cli
node index --action get --id 5
```

![Get contact](https://monosnap.com/file/tHf6HXZVgFVQfXlsAOyj9eMQbDPjIt)

-   Add contact

```cli
node index --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

![Add contact](https://monosnap.com/file/0xRVrFxwecDJb1fejuIwOXGdRu3z6I)

-   Remove contact

```cli
node index --action remove --id 3
```

![Remove contact](https://monosnap.com/file/jV2xxCApW48lnqV0pCcfw1pm5fa8pI)
