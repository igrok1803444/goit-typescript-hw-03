
class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature
    }
    

}
class Person {
    
    constructor( private key: Key) {
      
    }
    getKey(): number{
        return this.key.getSignature();
    }
}
 
abstract class House {
    protected door: boolean;
    protected tenants: Person[]
    constructor(protected key: Key) {
         
    }
    comeIn(person: Person): void{
        if (this.door) {
            this.tenants.push()
        }
    }

    abstract  OpenDoor(key: number): void
}

class MyHouse extends House{

    constructor( key: Key) {
        super(key)
    }

    OpenDoor( key: number): void {
        if (key === this.key.getSignature()) {
            this.door = true
        }
    }

}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);


export {};