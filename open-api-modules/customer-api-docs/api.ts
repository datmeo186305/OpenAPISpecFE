/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    phoneNumber?: string;
}

/**
 * CustomerControllerApi - axios parameter creator
 * @export
 */
export const CustomerControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer: async (customer: Customer, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'customer' is not null or undefined
            assertParamExists('createCustomer', 'customer', customer)
            const localVarPath = `/api/customers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(customer, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomer: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteCustomer', 'id', id)
            const localVarPath = `/api/customers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCustomers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/customers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCustomerById', 'id', id)
            const localVarPath = `/api/customers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomer: async (id: string, customer: Customer, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateCustomer', 'id', id)
            // verify required parameter 'customer' is not null or undefined
            assertParamExists('updateCustomer', 'customer', customer)
            const localVarPath = `/api/customers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(customer, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomerControllerApi - functional programming interface
 * @export
 */
export const CustomerControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomerControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomer(customer: Customer, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomer(customer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomer(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomer(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCustomers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Customer>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCustomers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomerById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomerById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCustomer(id: string, customer: Customer, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomer(id, customer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomerControllerApi - factory interface
 * @export
 */
export const CustomerControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomerControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer(customer: Customer, options?: any): AxiosPromise<Customer> {
            return localVarFp.createCustomer(customer, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomer(id: string, options?: any): AxiosPromise<string> {
            return localVarFp.deleteCustomer(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCustomers(options?: any): AxiosPromise<Array<Customer>> {
            return localVarFp.getAllCustomers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomerById(id: string, options?: any): AxiosPromise<Customer> {
            return localVarFp.getCustomerById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {Customer} customer 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomer(id: string, customer: Customer, options?: any): AxiosPromise<Customer> {
            return localVarFp.updateCustomer(id, customer, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomerControllerApi - object-oriented interface
 * @export
 * @class CustomerControllerApi
 * @extends {BaseAPI}
 */
export class CustomerControllerApi extends BaseAPI {
    /**
     * 
     * @param {Customer} customer 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerControllerApi
     */
    public createCustomer(customer: Customer, options?: any) {
        return CustomerControllerApiFp(this.configuration).createCustomer(customer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerControllerApi
     */
    public deleteCustomer(id: string, options?: any) {
        return CustomerControllerApiFp(this.configuration).deleteCustomer(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerControllerApi
     */
    public getAllCustomers(options?: any) {
        return CustomerControllerApiFp(this.configuration).getAllCustomers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerControllerApi
     */
    public getCustomerById(id: string, options?: any) {
        return CustomerControllerApiFp(this.configuration).getCustomerById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {Customer} customer 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerControllerApi
     */
    public updateCustomer(id: string, customer: Customer, options?: any) {
        return CustomerControllerApiFp(this.configuration).updateCustomer(id, customer, options).then((request) => request(this.axios, this.basePath));
    }
}

