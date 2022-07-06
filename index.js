const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto("http://contractorsinsurancereview.com/ExampleForm/");
	await page.focus("#email");
	await page.keyboard.type("test@gmail.com");
	await page.focus("#name");
	await page.keyboard.type("Maira Galvao");
	await page.focus("#phone");
	await page.keyboard.type("00000000");
	await page.focus("#company");
	await page.keyboard.type("Get Jones");
	//BONUS
	await page.select("#employees", "51-500");
	await page.screenshot({
		path: "./screenshot.png",
		fullPage: true,
	});
	await page.click("button.primary");
	console.log("Reaching the 'thank you' page!");
	await browser.waitForTarget(() => false);
	await closeBrowser(browser);
})();
