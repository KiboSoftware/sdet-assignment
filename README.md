# SDET Assignment - Order Management System

## Assignment Task

**Your task is to write comprehensive automated tests for this Order Management System.**

This repository contains a working API server and UI application. You need to create test automation projects that thoroughly test both components:

### **What You Need to Test:**
- **API Testing**: Write tests in **Java** or **C#** using TestContainers to test the REST API
- **UI Testing**: Write tests in **Playwright + TypeScript** to test the web interface
- **GenAI Integration**: Use AI tools to assist with test creation and document your usage

### **What's Provided:**
- ✅ Working Node.js API server with CRUD operations
- ✅ HTML form interface for order management
- ✅ Docker containerization for the API
- ✅ OpenAPI specification for API contract
- ✅ This README with detailed requirements

### **What You Need to Create:**
- 🔨 API test project (Java/C# + TestContainers)
- 🔨 UI test project (Playwright + TypeScript)
- 🔨 Documentation of your GenAI tool usage
- 🔨 Test reports and execution instructions

## Overview

**Tech Stack**: Java/C# + Test Containers (API) | Playwright + TypeScript (UI) | GenAI Tools

## Project Structure

```
order-assignment/
├── api/
│   ├── app.js              # Node.js Express mock API
│   ├── package.json        # API dependencies
│   └── Dockerfile          # Container configuration
├── ui/
│   └── order.html          # Static form for UI testing
├── README.md               # This file
└── openapi.yaml            # API contract (Swagger spec)
```

## Quick Start

```bash
# Start API server
cd api && npm install && npm start

# Access UI: http://localhost:3000/order.html
# API Base: http://localhost:3000/api
```

## Assignment Requirements

### 1. API Testing (60%) - Java or C#
- **Framework**: JUnit/TestNG (Java) or NUnit/xUnit (C#)
- **Containers**: Use TestContainers to containerize the API itself for integration testing
- **Coverage**: CRUD operations, validation, error handling, edge cases
- **GenAI Integration**: Use AI tools for test case generation and optimization
- **Note**: API uses in-memory storage - containerize the API service, not a database

### 2. UI Testing (40%) - Playwright + TypeScript
- **Framework**: Playwright Test with TypeScript
- **Pattern**: Page Object Model
- **Coverage**: Form interactions, workflows, responsive design
- **GenAI Integration**: AI-assisted test script generation and maintenance

### 3. GenAI Tools Usage (Required)
- **Test Generation**: Use AI tools (ChatGPT, GitHub Copilot, etc.) for test case creation
- **Code Optimization**: AI-assisted code review and optimization
- **Documentation**: AI-generated test documentation and reports
- **Data Generation**: AI-powered test data creation
- **Documentation Required**: Document which AI tools were used and how

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get order by ID |
| POST | `/api/orders` | Create order |
| PATCH | `/api/orders/:id/status` | Update status |
| DELETE | `/api/orders/:id` | Delete order |

### Order Schema
```json
{
  "customerName": "John Doe",
  "email": "john@example.com",
  "product": "laptop|smartphone|tablet|headphones|smartwatch",
  "quantity": 1,
  "price": 999.99
}
```

### Valid Statuses
`pending` | `processing` | `shipped` | `delivered` | `cancelled`

## TestContainers Clarification

**Important**: This API uses in-memory storage (no database). For TestContainers:
- **Containerize the API itself** using the provided Dockerfile
- **Use TestContainers to manage API container lifecycle** in your tests
- **Test against the containerized API endpoint** rather than mocking
- **Document your approach** to handling the in-memory storage limitation

## Evaluation Criteria

- **Technical Implementation (40%)**: Framework setup, code quality, containerization approach
- **Test Coverage (30%)**: Comprehensive scenarios, edge cases, error handling
- **GenAI Integration (20%)**: Effective use of AI tools, documentation of usage
- **Documentation (10%)**: Clear setup instructions, test strategy, AI tool usage

## Submission

### **How to Submit**

**Option 1: Fork & Pull Request (Recommended)**
1. **Fork this repository** to your GitHub account
2. **Create your test projects** in the forked repository
3. **Submit a Pull Request** with your solution
4. **Email the PR link** to [HIRING_MANAGER_EMAIL]

**Option 2: Separate Repository**
1. **Create a new public GitHub repository** with your solution
2. **Email the repository link** to [HIRING_MANAGER_EMAIL]
3. **Include a brief summary** of your approach and any challenges faced

*Note: Option 1 (Fork + PR) is preferred as it keeps everything organized and shows Git workflow skills.*

## Submission Requirements

1. **Create your test projects** (separate from provided API/UI)
2. **Implement comprehensive test suites** using specified technologies
3. **Document GenAI tool usage**:
   - Which AI tools were used
   - How they were used (test generation, code review, documentation)
   - Examples of AI-generated content
   - Benefits and limitations observed
4. **Create documentation** with:
   - Setup and execution instructions
   - Test strategy and coverage approach
   - GenAI integration approach
   - Technology choices and rationale

## Expected Deliverables

```
your-submission/
├── api-tests/              # Java/C# API tests
├── ui-tests/               # Playwright TypeScript tests
├── documentation/          # Test strategy, setup instructions, GenAI usage
└── test-reports/           # Generated test reports
```

## GenAI Documentation Template

Include in your submission:

```markdown
## GenAI Tools Usage

### Tools Used
- Tool Name: [Specify AI tool used]
- Purpose: [Test generation/Code review/Documentation/etc.]
- Examples: [Specific examples of AI-generated content]

### Benefits Observed
- [List benefits of using AI tools]

### Limitations Encountered
- [List any limitations or challenges]

### AI-Generated Content Examples
- [Include examples of AI-generated test cases, code, or documentation]
```

## Success Tips

- **Start with API tests** - easier to set up and validate
- **Leverage AI tools effectively** - document your usage thoroughly
- **Focus on quality over quantity** - well-designed tests are better than many poor tests
- **Use TestContainers creatively** - containerize the API itself for integration testing
- **Handle in-memory storage** - show how you manage test data isolation
- **Implement proper patterns** - Page Object Model for UI, proper test organization for API

## Resources

- **API Testing**: [Testcontainers](https://www.testcontainers.org/), [RestAssured](https://rest-assured.io/)
- **UI Testing**: [Playwright](https://playwright.dev/)
- **GenAI Tools**: Various AI assistants and code generation tools
- **Containerization**: [Docker](https://docs.docker.com/)

---

**Focus**: Demonstrate modern SDET skills including effective GenAI tool integration for enhanced productivity and test quality.