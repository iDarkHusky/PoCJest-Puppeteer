import faker from 'faker';
import puppeteer, { Dialog, Browser, Page } from 'puppeteer';

const FORM = 'localhost:3000';
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const phone = faker.phone.phoneNumber();

let page: Page;
let browser: Browser;
const width = 1080;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`],
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});
afterAll(() => {
    browser.close();
});

describe('Form', () => {
    test('Alert message should display correct name', async () => {
        page.on('dialog', async (dialog: Dialog) => {
            await setTimeout(async () => {
                console.log(dialog.message());
                expect(dialog.message()).toBe(`Welcome ${firstname} ${lastname}!`);
                await dialog.dismiss();
            }, 1000);
        });
        await page.goto(FORM);
        await page.click('input[name=firstname]');
        await page.type('input[name=firstname]', firstname);
        await page.click('input[name=lastname]');
        await page.type('input[name=lastname]', lastname);
        await page.click('input[name=phone]');
        await page.type('input[name=phone]', phone);
        await page.click('button[id=validate]');
    }, 16000);
});
