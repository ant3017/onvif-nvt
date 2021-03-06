const Soap = require('../utils/soap');

class Credential {
  constructor() {
    this.soap = new Soap();
    this.timeDiff = 0;
    this.serviceAddress = null;
    this.username = null;
    this.password = null;
    this.namespaceAttributes = ['xmlns:tcr="http://www.onvif.org/ver10/credential/wsdl"'];
  }

  init(timeDiff, serviceAddress, username, password) {
    this.timeDiff = timeDiff;
    this.serviceAddress = serviceAddress;
    this.username = username;
    this.password = password;
  }

  createRequest(body) {
    const soapEnvelope = this.soap.createRequest({
      body: body,
      xmlns: this.namespaceAttributes,
      diff: this.timeDiff,
      username: this.username,
      password: this.password
    });
    return soapEnvelope;
  }

  getServiceCapabilities() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialInfo() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialInfoList() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentials() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialList() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  createCredential() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  modifyCredential() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  deleteCredential() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialState() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  enableCredential() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  disableCredential() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  resetAntipassbackViolation() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getSupportedFormatTypes() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialIdentifiers() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  setCredentialIdentifier() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  deleteCredentialIdentifier() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  getCredentialAccessProfiles() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  setCredentialAccessProfiles() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

  deleteCredentialAccessProfiles() {
    return new Promise((resolve, reject) => {
      reject(new Error('Not implemented'));
    });
  }

}

module.exports = Credential;