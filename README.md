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

![List of contacts](https://monosnap.com/file/aG03lk7MqeMevsMnikf1ja9H20YKFe)

-   Get contact by id

```cli
node index --action get --id 5
```

![Get contact](https://monosnap.com/file/oEuxj4JcIJsdzeN0Nh55NK07VlCgoh)

-   Add contact

```cli
node index --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

![Add contact](https://monosnap.com/file/rFouXk2BRNfKaRwEHCxEz1eKKWqfMY)

-   Remove contact

```cli
node index --action remove --id 3
```

![Remove contact](https://monosnap.com/file/AXXQVLdMRob8CdxZo8ALS29rmROxa0)
