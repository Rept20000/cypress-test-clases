/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page";
import { LoginPage } from "../page_objects/login-page";
import { SecureAreaPage } from "../page_objects/secure-page";

describe("pruebas.login", () => {

const MainPage = new MainPage();
const LoginPage = new LoginPage();
const SecureAreaPage = new SecureAreaPage();

it("The user is logged correctly", () => {
    mainPage.visitMainPage();
    mainPage.clickFormAuthentication();
    loginPage.enterUser("tomsmith");
    loginPage.enterPass("Supersecretpassword!");
    loginPage.clickLoginButton();
    SecureAreaPage.checkMessage("You are logged into a Secure Area");
});



})