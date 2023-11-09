import { books } from './books.js'

//uppgift 1+2
function countBooks(books) {
	return books.length;
}
const amountOfBooks = countBooks(books);
console.log('\x1b[35m%s\x1b[0m', "Antal böcker i affären:")
console.log("Det finns", amountOfBooks, "böcker i affären")

for (let i = 0; i < books.length; i++) {
	console.log(`Titel: ${books[i].title}`);
}

console.log();
//uppgift 3
console.log('\x1b[35m%s\x1b[0m', "Kategori Fantasy:");
for (let i = 0; i < books.length; i++) {
	if (books[i].genre === 'Fantasy') {
		console.log(`Titel: ${books[i].title}, Price: ${books[i].price}`)
	}
}

console.log();
//uppgift 4
console.log('\x1b[35m%s\x1b[0m', "Kategori Dystopier, Mysterieböcker & Klassiker:");
for (let i = 0; i < books.length; i++) {
	if (books[i].genre === 'Dystopian' || books[i].genre === 'Mystery' || books[i].genre === 'Classic') {
		console.log(`Titel: ${books[i].title}, Genre ${books[i].genre}`);
	}
}

console.log();
//uppgift 5
console.log('\x1b[35m%s\x1b[0m', "Böcker som kostar över $10:");
OverTenDollarBooks(books);
function OverTenDollarBooks(books) {
	books.forEach(book => {
		if (book.price > 10) {
			console.log(`Titel: ${book.title}, Pris: $${book.price}`);
		}
	});
}

console.log();
//uppgift 6
console.log('\x1b[35m%s\x1b[0m', "Totala värdet:");
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
//uppgift 7
console.log('\x1b[35m%s\x1b[0m', "Vilka böcker är värda mest?");
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
//uppgift 8
console.log('\x1b[35m%s\x1b[0m', "Böckerna i alfabetisk ordning:");
const bookTitles = books.map(book => book.title);

bookTitles.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < bookTitles.length; i++) {
	console.log("Titel:", bookTitles[i]);
}

console.log();
//uppgift 9
console.log('\x1b[35m%s\x1b[0m', 'Dubbletter:');
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
//uppgift 10
console.log('\x1b[35m%s\x1b[0m', "Författare med fler än 2 ord i namnet utan punkter:");
const authorNoDots = books
	.map(book => book.author).filter(author => !author.includes('.') && author.split(' ').length > 2);
console.log("Det är:", authorNoDots);

console.log();
//uppgift 11
console.log('\x1b[35m%s\x1b[0m', "Författarna i alfabetisk ordning:");
const sortedUniqueAuthors = [...new Set(books.map(book => book.author))]
	.map(author => {
		const words = author.split(' ');
		return { fullName: author, lastName: words[words.length - 1] };
	})
	.sort((a, b) => a.lastName.localeCompare(b.lastName));
sortedUniqueAuthors.forEach(author => {
	console.log("Författare:", author.fullName);
});

console.log();
//uppgift 12
console.log('\x1b[35m%s\x1b[0m', "Böcker utan 'The' i början:");
const The = books.filter(book => !book.title.startsWith("The"));
The.forEach(book => {
	console.log("Titel:", book.title);
});

console.log();
//uppgift 13
console.log('\x1b[35m%s\x1b[0m', "Böcker sorterade efter titelns längd:");
const sortedByLength = [...books]
	.sort((a, b) => a.title.length - b.title.length);

sortedByLength.forEach(book => {
	console.log("Titel:", book.title);
});
