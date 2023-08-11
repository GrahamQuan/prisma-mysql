# DEMO: node.js + prisma + mySQL

### set up project

1. `npm init -y`
2. `npm i prisma @prisma/client`
3. `npm i -D nodemon`
4. `npx prisma init --datasource-provider <database>`
5. SQL and noSQL DB 
    1. SQL: 
        1. `npx prisma migrate dev --name  init --create-only`
        2. `npx prisma migrate deploy`
    2. noSQL: 
        1. `npx prisma db push`
6. `npx prisma generate`

### run

1. `npm run dev`