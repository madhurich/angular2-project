export class Address{
	street: string;
	suite: number;
	zipcode: number;
	city: string;

}

export class User{
	name: string;
	email: string;
	phone: number;
	address = new Address();
}