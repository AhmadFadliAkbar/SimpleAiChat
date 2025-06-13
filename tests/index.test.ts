import { getAIResponse } from '../src/lib/genai';

// Mock the '@google/genai' module
jest.mock('@google/genai', () => {
  const mockGenerateContent = jest.fn();
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => ({
      models: {
        generateContent: mockGenerateContent,
      },
    })),
    __mockGenerateContent: mockGenerateContent, // Export mock for test access
  };
});

describe('getAIResponse Integration Test', () => {
  let mockGenerateContent: jest.Mock;

  beforeEach(() => {
    // Access the mock function from the module
    const mockedModule = jest.requireMock('@google/genai');
    mockGenerateContent = mockedModule.__mockGenerateContent;
    jest.clearAllMocks(); // Reset mocks before each test
  });

  it('should return AI response for valid message', async () => {
    // Arrange: Mock a successful response
    const mockResponse = { text: 'Hello, this is a mocked AI response!' };
    mockGenerateContent.mockResolvedValue(mockResponse);

    // Act: Call the function
    const message = 'Hello, AI!';
    const response = await getAIResponse(message);

    // Assert: Verify the result and mock call
    expect(response).toBe(mockResponse.text);
    expect(mockGenerateContent).toHaveBeenCalledWith({
      model: 'gemini-2.0-flash',
      contents: [message],
    });
  });



  it('should throw error for failed API call', async () => {
    // Arrange: Mock an error response
    const mockError = new Error('API request failed');
    mockGenerateContent.mockRejectedValue(mockError);

    // Act & Assert: Expect the function to throw
    const message = 'Hello, AIii!';
    await expect(getAIResponse(message)).rejects.toThrow('API request failed');
    expect(mockGenerateContent).toHaveBeenCalledWith({
      model: 'gemini-2.0-flash',
      contents: [message],
    });
  });
});