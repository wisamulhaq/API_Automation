# API Automation Project

This project is designed to automate API testing using Mocha, TypeScript, and various other libraries. The project structure is organized to facilitate easy management and execution of tests.

## Project Structure

- `tests/`: Contains test specifications.
    - `test.spec.ts`: Example test specification using Mocha.
- `main/`: Contains the main application code.
    - `api/`: Contains API-related code.
        - `firstService/`: Contains code for the first service.
            - `api.ts`: API request functions.
            - `payloads.ts`: Payloads for API requests.
            - `schemaTest.ts`: Schema validation using Zod.
        - `apiPath/`: Contains API paths.
            - `paths.json`: JSON file with API paths.
    - `config/`: Contains configuration files.
        - `config.json`: Configuration settings.
    - `utlis/`: Contains utility functions.
        - `apiRequests.ts`: Functions for making HTTP requests.
    - `workflows/`: Contains workflow-related tasks.
        - `workflow.ts`: Example workflow tasks.
- `mochawesome-report/`: Contains the Mochawesome report.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `mocha.conf.ts`: Mocha configuration for running tests.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
     ```sh
     git clone <repository-url>
     ```
2. Navigate to the project directory:
     ```sh
     cd API_Automation
     ```
3. Install the dependencies:
     ```sh
     npm install
     ```

### Running Tests

To run the tests, use the following command:
```sh
ts-node mocha.conf.ts
```

### Configuration

The configuration settings are located in `main/config/config.json`. Update the settings as needed.

### API Paths

API paths are defined in `main/api/apiPath/paths.json`. Update the paths as needed for your API endpoints.

### Payloads

Payloads for API requests are defined in `main/api/firstService/payloads.ts`. Update the payloads as needed for your API requests.

### Schema Validation

Schema validation is performed using Zod in `main/api/firstService/schemaTest.ts`. Update the schemas as needed for your data validation.

## Dependencies

- Mocha: Testing framework.
- Mochawesome: Mocha reporter for generating reports.
- Axios: HTTP client for making requests.
- Zod: TypeScript-first schema declaration and validation library.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Mocha](https://mochajs.org/)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/)
