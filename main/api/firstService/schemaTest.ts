import { z } from 'zod';

// Dummy implementation of a Zod schema for testing purposes
// This schema validates a simple user object with name and age properties
const userSchema = z.object({
    name: z.string(),
    age: z.number().int().positive(),
});

// Example of a function to test the schema
// This function will validate the input data against the userSchema
const testSchema = (data: unknown) => {
    try {
        userSchema.parse(data);
        console.log('Validation successful:', data);
    } catch (e) {
        if (e instanceof z.ZodError) {
            console.error('Validation failed:', e.errors);
        } else {
            console.error('Validation failed:', e);
        }
    }
};

// Dummy data for testing the schema
const validUser = { name: 'John Doe', age: 30 };
const invalidUser = { name: 'Jane Doe', age: -5 };

// Testing the schema with valid and invalid data
testSchema(validUser); // Should log: Validation successful
testSchema(invalidUser); // Should log: Validation failed

// Note: This is a simple example to demonstrate how to use Zod for schema validation.
// In a real-world application, you would likely have more complex schemas and more comprehensive tests.