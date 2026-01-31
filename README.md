# IT23194694 - Playwright Test Suite 🎭

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🚀 Automated E2E Testing for Sinhala Translation Application

*A comprehensive test automation suite for validating Singlish to Sinhala Unicode translation*

[View Demo Report](./playwright-report/index.html) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📖 Project Overview

This project contains automated end-to-end tests for a Sinhala-English translation web application using Playwright. The test suite validates the translation functionality across multiple browsers (Chromium, Firefox, and WebKit).

## 🌐 Website Under Test

**URL:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)

The application translates Singlish (Romanized Sinhala) text into Sinhala Unicode characters.

---📁 Project Structure

```
IT23194694/
├── 📂 tests/
│   ├── 📝 assignment1.spec.js    # Main translation test suite with multiple test cases
│   └── 🔍 find_id.spec.js         # Helper test to identify output element selectors
├── 📂 e2e/
│   └── 📄 example.spec.js         # Playwright example tests
├── 📂 test-results/               # Test execution results and error contexts
├── 📂 playwright-report/          # HTML test reports
├── ⚙️ playwright.config.js        # Playwright configuration
├── 📦 package.json                # Project dependencies
└── 📖 README.md                   # You are here!

# I✅ Test Coverage

### 🎯
# Run the tests
npx playwright test
```

> 💡 **Quick Start Tip:** After cloning, run `npm install && npx playwright install` to set up everything in one go!

---

## Project Structure

```
IT23194694/
├── tests/
│   ├── assignment1.spec.js    # Main translation test suite with multiple test cases
│   🔧 └── find_id.spec.js         # Helper test to identify output element selectors
├── e2e/
│   └── example.spec.js         # Playwright example tests
├── test-results/               # Test execution results and error contexts
├── playwright-report/          # HTML test reports
├── playwright.config.js        # Playwright configuration
└── package.json                # Project dependencies
```

## Test Coverage

### Assignment 1 Test Suite (`assignment1.spec.js`)

The main test suite includes comprehensive test cases covering:

- **Greetings:** New year wishes, general greetings
- **Simple Sentences:** Daily conversations, common phrases
- **Negative Sentences:** Expressions with "not", "can't", etc.
- **Mixed Sentences:** Combination of Sinhala and English terms
- **Slang and Colloquial Phrases:** Informal language
- **Dates and Times:** Date formats and time expressions
- **Brand Terms:** Proper handling of brand names (e.g., LinkedIn)
- **Repeated Words:** Handling word repetitions
- **Interrogative Sentences:** Questions
- **Special Characters:** Mixed alphanumeric content

### Find ID Test (`find_id.spec.js`)

A utility test that helps identify the correct selectors for the output translation box by:
1. Navigating to the translation website
2. Entering test input
3. Locating the translated output element
4. Displaying the element's tag name, ID, and class attributes
🔧 Prerequisites

- **Node.js** (v14 or higher) ➜ [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** ➜ [Download](https://git-scm.com/)

## 📥
## Installation

1. Clone or navigate to the project directory:
```bash
cd c:\Users\Admin\Desktop\IT23194694
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```🚀 

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/assignment1.spec.js
npx playwright test tests/find_id.spec.js
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```
📊 
## Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing:
- Test execution results
- Pass/fail status
- Execution time
- Screenshots and traces (for failed tests)
⚙️ 
## Test Configuration

The `playwright.config.js` file includes:

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled
- **Retries:** 2 retries on CI, 0 locally
- **Reporters:** HTML reporter
- **Trace:** Captured on first retry
- **Browser Projects:** Chromium, Firefox, WebKit
📋 
## Test Case Structure

Each test case in `assignment1.spec.js` includes:

```javascript
{
  id: 'Pos_Fun_0001',           // Unique test case ID
  description: 'Test description',
  input: 'machan',              // Singlish input
  expected: 'මචන්',            // Expected Sinhala output
  type: 'S'                     // Type: S (Simple), M (Mixed)
}
```
📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @playwright/test | ^1.58.1 | Playwright testing framework |
| @types/node | ^25.1.0 | TypeScript definitions for Node.js |

---

## 👨‍💻 Author

<div align="center">

**Student ID:** IT23194694

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_PROFILE)

</div>

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🐛
## Troubleshooting

###📝 Notes

- ✨ Tests run across multiple browsers to ensure cross-browser compatibility
- 📊 The test suite uses data-driven testing approach with predefined test cases
- 🎯 Each test validates the translation accuracy for various linguistic scenarios
- 🔄 Continuous integration ready with retry mechanisms
- 📸 Automatic screenshots and traces for failed tests

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Made with ❤️ and ☕ using Playwright**

</div>

### Element not found errors
- Run the `find_id.spec.js` test to verify the correct selectors
- The website structure may have changed - update selectors accordingly

### Timeout errors
- Increase timeout in test configuration if internet is slow
- Check if the website is accessible

## Notes

- Tests run across multiple browsers to ensure cross-browser compatibility
- The test suite uses data-driven testing approach with predefined test cases
- Each test validates the translation accuracy for various linguistic scenarios
