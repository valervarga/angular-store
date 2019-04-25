/**
 * @file Defines the model of product object.
 * @author Valer Varga
 */

export class Product {
	_id: string;
	title: string;
	description: string;
	available: boolean;
	price: number;
}