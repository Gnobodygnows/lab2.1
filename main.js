import { books } from './books.js'

// function addBook(list, title, author, genre, price) {
// 	const newBook = {
// 		id: list.length + 1,
// 		title: title,
// 		author: author,
// 		genre: genre,			//uppgift 14, men för syns skull vill jag ha den sist här
// 		price: price
// 	};
// 	list.push(newBook);
// 	return list;
// }

const newList = addBook(books, "Book about Books", "Book Bookson", "Bookery", 13.37);
// console.log(newList); 
// ville inte visa nya listan i console.log, men du kan uncommenta för att testa


//uppgift 1 Hur många böcker finns det i affären? + 2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)

function countBooks(books) {
	return books.length;
}
const amountOfBooks = countBooks(books);
console.log('\x1b[35m%s\x1b[0m', "Uppgift 1&2 | Antal böcker i affären:")
console.log("Det finns", amountOfBooks, "böcker i affären")

for (let i = 0; i < books.length; i++) {
	console.log(books[i].title);
}

console.log();
//uppgift 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".
console.log('\x1b[35m%s\x1b[0m', "Uppgift 3 | Kategori Fantasy:");
for (let i = 0; i < books.length; i++) {
	if (books[i].genre === 'Fantasy') {
		console.log(`${books[i].title}, Pris: ${books[i].price}`)
	}
}

console.log();
//uppgift 4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 4 | Kategori Dystopier, Mysterieböcker & Klassiker:");
for (let i = 0; i < books.length; i++) {
	if (books[i].genre === 'Dystopian' || books[i].genre === 'Mystery' || books[i].genre === 'Classic') {
		console.log(`${books[i].title}, Genre ${books[i].genre}`);
	}
}

console.log();
//uppgift 5 Skriv ut namn och pris för alla böcker som kostar över $10.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 5 | Böcker som kostar över $10:");
OverTenDollarBooks(books);
function OverTenDollarBooks(books) {
	books.forEach(book => {
		if (book.price > 10) {
			console.log(`${book.title}, Pris: $${book.price}`);
		}
	});
}

console.log();
//uppgift 6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
console.log('\x1b[35m%s\x1b[0m', "Uppgift 6 | Totala värdet:");
let totalValue = 0;
for (let i = 0; i < books.length; i++) {
	totalValue += books[i].price;
}
const genreTotalValue = {};
for (let i = 0; i < books.length; i++) {
	const book = books[i];
	const genre = book.genre;

	if (!genreTotalValue[genre]) {
		genreTotalValue[genre] = 0;
	}
	genreTotalValue[genre] += book.price;
}
console.log(`Det totala värdet av bokinnehavet är: $${totalValue.toFixed(2)}`);

console.log();
//uppgift 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
console.log('\x1b[35m%s\x1b[0m', "Uppgift 7 | Vilka böcker är värda mest?");
const dystopianTotalValue = genreTotalValue['Dystopian'] || 0;
const mysteryTotalValue = genreTotalValue['Mystery'] || 0;

if (dystopianTotalValue > mysteryTotalValue) {
	console.log("Dystopier");
} else if (mysteryTotalValue > dystopianTotalValue) {
	console.log("Mystery böcker");
} else {
	console.log("Dystopier och Mystery böcker är värda lika mycket");
}

console.log();
//uppgift 8 Skriv ut namnen på alla böcker i bokstavsordning.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 8 | Böckerna i alfabetisk ordning:");
const bookTitles = books.map(book => book.title);
bookTitles.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < bookTitles.length; i++) {
	console.log(bookTitles[i]);
}

console.log();
//uppgift 9 Vilken bok finns det en dubblett av?
console.log('\x1b[35m%s\x1b[0m', "Uppgift 9 | Dubbletter:");
const uniqueBooks = [];
let duplicateTitle = null;

for (const { title } of books) {
	if (!uniqueBooks.includes(title)) {
		uniqueBooks[uniqueBooks.length] = title;
	} else if (!duplicateTitle) {
		duplicateTitle = title;
	}
}
console.log("Dubblett:", duplicateTitle);

console.log();
//uppgift 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 10 | Författare med fler än 2 ord i namnet utan punkter:");
const authorNoDots = books
	.map(book => book.author).filter(author => !author.includes('.') && author.split(' ').length > 2);
	console.log("Det är:", authorNoDots + "\x1b[0m");

console.log();
//uppgift 11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 11 | Författarna i alfabetisk ordning:");
const sortedUniqueAuthors = [...new Set(books.map(book => book.author))]
	.map(author => {
		const words = author.split(' ');
		return { fullName: author, lastName: words[words.length - 1] };
	})
	.sort((a, b) => a.lastName.localeCompare(b.lastName));
sortedUniqueAuthors.forEach(author => {
	console.log(author.fullName);
});

console.log();
//uppgift 12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".
console.log('\x1b[35m%s\x1b[0m', "Uppgift 12 | Böcker utan 'The' i början:");
const The = books.filter(book => !book.title.startsWith("The"));
The.forEach(book => {
	console.log(book.title);
});

console.log();
//uppgift 13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.
console.log('\x1b[35m%s\x1b[0m', "Uppgift 13 | Böcker sorterade efter titelns längd:");
const sortedByLength = [...books]
	.sort((a, b) => a.title.length - b.title.length);

sortedByLength.forEach(book => {
	console.log(book.title);
});

// uppgift 14
function addBook(list, title, author, genre, price) {
	const newBook = {
		id: list.length + 1,
		title: title,
		author: author,
		genre: genre,
		price: price
	};
	list.push(newBook);
	return list;
}

// const newList = addBook(books, "Book about Books", "Book Bookson", "Bookery", 13.37);
// console.log(newList); 

