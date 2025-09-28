import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'ECM8VPvOVniddDXnUck4gQLrDdTPn4fU',
    socket: {
        host: 'redis-16434.c12.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 16434
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

//The code above connects to 'Redis Database'
const value = await client.HGETALL('books:1');
console.log(value.title)
