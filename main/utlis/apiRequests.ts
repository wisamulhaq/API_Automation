// Importing the axios library for making HTTP requests
const axios = require("axios");

/**
 * Sends an HTTP GET request to the specified endpoint with the provided headers.
 *
 * @param {string} endpoint - The URL to which the GET request is sent.
 * @param {object} headers - The headers to include in the GET request.
 * @returns {Promise<object>} A promise that resolves to an object containing the status and data of the response.
 *
 * @example
 * const endpoint = 'https://api.example.com/data';
 * const headers = { 'Authorization': 'Bearer token' };
 * const response = await getRequest(endpoint, headers);
 * console.log(response.Status); // 200
 * console.log(response.Data); // Response data
 */
export async function getRequest(endpoint,headers) {

    let apiResponseObject = {}

    var config = {
      method: 'get',
      url: endpoint,
      headers: headers
    };

    await axios(config)

      .then(function (response) {
        Object.assign(apiResponseObject, { Status: response.status })
        Object.assign(apiResponseObject, { Data: response.data })
      })

      .catch(function (error) {
        Object.assign(apiResponseObject, { Status: error.response.status })
        Object.assign(apiResponseObject, { Data: error.response.data })
      });

    return apiResponseObject
  }

  /**
   * Sends a POST request to the specified endpoint with the provided body and headers.
   *
   * @param {string} endpoint - The URL to which the POST request is sent.
   * @param {object} body - The data to be sent as the request body.
   * @param {object} headers - The headers to be included in the request.
   * @returns {Promise<object>} - A promise that resolves to an object containing the response status and data.
   *
   * @example
   * const endpoint = 'https://api.example.com/data';
   * const body = { key: 'value' };
   * const headers = { 'Content-Type': 'application/json' };
   * 
   * postRequestWithBody(endpoint, body, headers)
   *   .then(response => {
   *     console.log(response.Status); // 200
   *     console.log(response.Data); // Response data
   *   })
   *   .catch(error => {
   *     console.error(error);
   *   });
   */
  export async function postRequestWithBody(endpoint,body,headers) {

    let apiResponseObject = {}
    let data = body
    const config = {
      method: 'post',
      url: endpoint,
      headers: headers,
      data: data
    };

    await axios(config)

      .then(function (response) {
        Object.assign(apiResponseObject, { Status: response.status })
        Object.assign(apiResponseObject, { Data: response.data })
      })
      
      .catch(function (error) {
        Object.assign(apiResponseObject, { Status: error.response.status })
        Object.assign(apiResponseObject, { Data: error.response.data })
      });
    return apiResponseObject
  }