# SDET Assignment - Order Management System

## Overview

SDET assignment focusing on API and UI test automation with modern tools including GenAI integration.

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
- **Containers**: Use test containers to containerize the API itself for integration testing
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

## Test Containers Clarification

**Important**: This API uses in-memory storage (no database). For test containers:
- **Containerize the API itself** using the provided Dockerfile
- **Use test containers to manage API container lifecycle** in your tests
- **Test against the containerized API endpoint** rather than mocking
- **Document your approach** to handling the in-memory storage limitation

## Evaluation Criteria

- **Technical Implementation (40%)**: Framework setup, code quality, containerization approach
- **Test Coverage (30%)**: Comprehensive scenarios, edge cases, error handling
- **GenAI Integration (20%)**: Effective use of AI tools, documentation of usage
- **Documentation (10%)**: Clear setup instructions, test strategy, AI tool usage

## Timeline & Submission

### **Timeline: 3-4 Days**
- **Day 1**: Environment setup, API tests foundation
- **Day 2**: Complete API tests, start UI tests
- **Day 3**: Complete UI tests, GenAI documentation
- **Day 4**: Final review, documentation, submission

*Note: 2 days is possible for experienced candidates, but 3-4 days allows for quality implementation and proper GenAI integration.*

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
   - Which AI tools were used (ChatGPT, Copilot, Claude, etc.)
   - How they were used (test generation, code review, documentation)
   - Examples of AI-generated content
   - Benefits and limitations observed
4. **Update README** with:
   - Setup and execution instructions
   - Test strategy and coverage
   - GenAI integration approach
   - Technology choices and rationale

## Expected Deliverables

```
your-submission/
├── api-tests/              # Java/C# API tests with test containers
├── ui-tests/               # Playwright TypeScript tests
├── genai-documentation/    # AI tool usage documentation
├── test-reports/           # Generated test reports
└── README.md               # Updated with your implementation
```

## GenAI Documentation Template

Include in your submission:

```markdown
## GenAI Tools Usage

### Tools Used
- Tool Name: [ChatGPT/Copilot/Claude/etc.]
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
- **Use test containers creatively** - containerize the API itself for integration testing
- **Handle in-memory storage** - show how you manage test data isolation
- **Implement proper patterns** - Page Object Model for UI, proper test organization for API

## Resources

- **API Testing**: [Testcontainers](https://www.testcontainers.org/), [RestAssured](https://rest-assured.io/)
- **UI Testing**: [Playwright](https://playwright.dev/)
- **GenAI Tools**: ChatGPT, GitHub Copilot, Claude, Tabnine
- **Containerization**: [Docker](https://docs.docker.com/)

---

**Focus**: Demonstrate modern SDET skills including effective GenAI tool integration for enhanced productivity and test quality.