

/**
 * @fileoverview Error codes generated by the uploader library.
 *
 * @author azzie@google.com (Marcin Marszalek)
 */


goog.provide('apps.uploader.ErrorCode');
goog.provide('apps.uploader.ErrorMessage');

goog.require('goog.net.ErrorCode');


/**
 * Error codes associated with the uploader library.
 * @enum {string}
 */
apps.uploader.ErrorCode = {
  NO_ERROR: 'noerror', // No error has occurred.
  NETWORK_ERROR: 'networkerror', // Network error.
  IO_ERROR: 'ioerror', // File I/O error.
  SECURITY_ERROR: 'securityerror', // Security related error.
  ABORT: 'abort', // User abort.
  SERVER_REJECTED: 'serverrejected', // Server rejected the request.
  SERVER_INVALID_RESPONSE: 'serverinvalidresponse', // Invalid server response.
  EXCEPTION: 'exception', // Applet exception or other unexpected error.
  UNKNOWN_ERROR: 'unknownerror' // Error of unknown source.
};


/**
 * Maps a {@link goog.net.ErrorCode} to a {@link apps.uploader.ErrorCode}.
 * @param {goog.net.ErrorCode} code The original error code.
 * @return {apps.uploader.ErrorCode} The mapped error code.
 */
apps.uploader.ErrorCode.mapErrorCode = function(code) {
  switch (code) {
    case goog.net.ErrorCode.HTTP_ERROR:
    case goog.net.ErrorCode.OFFLINE:
    case goog.net.ErrorCode.TIMEOUT:
    case goog.net.ErrorCode.ACCESS_DENIED:
      return apps.uploader.ErrorCode.NETWORK_ERROR;
    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return apps.uploader.ErrorCode.IO_ERROR;
    case goog.net.ErrorCode.ABORT:
      return apps.uploader.ErrorCode.ABORT;
    case goog.net.ErrorCode.EXCEPTION:
      return apps.uploader.ErrorCode.EXCEPTION;
    case goog.net.ErrorCode.NO_ERROR:
      return apps.uploader.ErrorCode.NO_ERROR;
    default:
      return apps.uploader.ErrorCode.UNKNOWN_ERROR;
  }
};


/**
 * Returns a localized user friendly message corresponding to a given
 * error code.
 * @param {apps.uploader.ErrorCode} code The error code.
 * @return {string} The corresponding error message.
 */
apps.uploader.ErrorCode.getMessageFromCode = function(code) {
  switch (code) {
    case apps.uploader.ErrorCode.ABORT:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_CANCELED_ERROR;
    case apps.uploader.ErrorCode.NETWORK_ERROR:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_NETWORK_ERROR;
    case apps.uploader.ErrorCode.IO_ERROR:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_FILEIO_ERROR;
    case apps.uploader.ErrorCode.SECURITY_ERROR:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_SECURITY_ERROR;
    case apps.uploader.ErrorCode.SERVER_REJECTED:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_SERVER_REJECTED;
    case apps.uploader.ErrorCode.SERVER_INVALID_RESPONSE:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_SERVER_INVALID_RESPONSE;
    case apps.uploader.ErrorCode.UNKNOWN_ERROR:
    case apps.uploader.ErrorCode.EXCEPTION:
    default:
      return apps.uploader.ErrorMessage.MSG_UPLOADER_UNEXPECTED_ERROR;
  }
};


/**
 * @desc Message shown instead of the progress bar for uploads that are
 * canceled.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_CANCELED_ERROR =
    goog.getMsg('Canceled');


/**
 * @desc Message shown when there is a network error during a file upload.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_NETWORK_ERROR =
    goog.getMsg('Lost connection to server');


/**
 * @desc Message shown when there is a file read error during a file upload.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_FILEIO_ERROR =
    goog.getMsg('Unable to read file');


/**
 * @desc Message shown when there is a cross domain security error during a
 *     file upload.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_SECURITY_ERROR =
    goog.getMsg('Security error');


/**
 * @desc Message shown when the server rejects a file upload. May be due to
 *     client or server error.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_SERVER_REJECTED =
    goog.getMsg('Server rejected');

/**
 * @desc Message shown when the server returns an invalid response during a
 *     file upload.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_SERVER_INVALID_RESPONSE =
    goog.getMsg('Server returned invalid response');


/**
 * @desc Message shown when there is an unexpected error during a file upload.
 * @type {string}
 */
apps.uploader.ErrorMessage.MSG_UPLOADER_UNEXPECTED_ERROR =
    goog.getMsg('Unexpected error');
