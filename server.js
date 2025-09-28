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

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(result)  // >>> bar

