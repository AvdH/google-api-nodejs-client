/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace firestore_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  let context: APIRequestContext;

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Firestore API
   *
   * Accesses the NoSQL document database built for automatic scaling, high
   * performance, and ease of application development.
   *
   * @example
   * const {google} = require('googleapis');
   * const firestore = google.firestore('v1beta1');
   *
   * @namespace firestore
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Firestore
   */
  export class Firestore {
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.projects = new Resource$Projects();
    }
  }

  /**
   * An array value.
   */
  export interface Schema$ArrayValue {
    /**
     * Values in the array.
     */
    values?: Schema$Value[];
  }
  /**
   * The request for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsRequest {
    /**
     * The names of the documents to retrieve. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * The request will fail if any of the document is not a child resource of
     * the given `database`. Duplicate names will be elided.
     */
    documents?: string[];
    /**
     * The fields to return. If not set, returns all fields.  If a document has
     * a field that is not present in this mask, that field will not be returned
     * in the response.
     */
    mask?: Schema$DocumentMask;
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only
     * transaction. The new transaction ID will be returned as the first
     * response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older
     * than 60 seconds.
     */
    readTime?: string;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }
  /**
   * The streamed response for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsResponse {
    /**
     * A document that was requested.
     */
    found?: Schema$Document;
    /**
     * A document name that was requested but does not exist. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    missing?: string;
    /**
     * The time at which the document was read. This may be monotically
     * increasing, in this case the previous documents in the result stream are
     * guaranteed not to have changed between their read_time and this one.
     */
    readTime?: string;
    /**
     * The transaction that was started as part of this request. Will only be
     * set in the first response, and only if
     * BatchGetDocumentsRequest.new_transaction was set in the request.
     */
    transaction?: string;
  }
  /**
   * The request for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * The options for the transaction. Defaults to a read-write transaction.
     */
    options?: Schema$TransactionOptions;
  }
  /**
   * The response for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionResponse {
    /**
     * The transaction that was started.
     */
    transaction?: string;
  }
  /**
   * A selection of a collection, such as `messages as m1`.
   */
  export interface Schema$CollectionSelector {
    /**
     * When false, selects only collections that are immediate children of the
     * `parent` specified in the containing `RunQueryRequest`. When true,
     * selects all descendant collections.
     */
    allDescendants?: boolean;
    /**
     * The collection ID. When set, selects only collections with this ID.
     */
    collectionId?: string;
  }
  /**
   * The request for Firestore.Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * If set, applies all writes in this transaction, and commits it.
     */
    transaction?: string;
    /**
     * The writes to apply.  Always executed atomically and in order.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The time at which the commit occurred.
     */
    commitTime?: string;
    /**
     * The result of applying the writes.  This i-th write result corresponds to
     * the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * A filter that merges multiple other filters using the given operator.
   */
  export interface Schema$CompositeFilter {
    /**
     * The list of filters to combine. Must contain at least one filter.
     */
    filters?: Schema$Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: string;
  }
  /**
   * A position in a query result set.
   */
  export interface Schema$Cursor {
    /**
     * If the position is just before or just after the given values, relative
     * to the sort order defined by the query.
     */
    before?: boolean;
    /**
     * The values that represent a position, in the order they appear in the
     * order by clause of a query.  Can contain fewer values than specified in
     * the order by clause.
     */
    values?: Schema$Value[];
  }
  /**
   * A Firestore document.  Must not exceed 1 MiB - 4 bytes.
   */
  export interface Schema$Document {
    /**
     * Output only. The time at which the document was created.  This value
     * increases monotonically when a document is deleted then recreated. It can
     * also be compared to values from other documents and the `read_time` of a
     * query.
     */
    createTime?: string;
    /**
     * The document&#39;s fields.  The map keys represent field names.  A simple
     * field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`,
     * or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`.
     * Field names matching the regular expression `__.*__` are reserved.
     * Reserved field names are forbidden except in certain documented contexts.
     * The map keys, represented as UTF-8, must not exceed 1,500 bytes and
     * cannot be empty.  Field paths may be used in other contexts to refer to
     * structured fields defined here. For `map_value`, the field path is
     * represented by the simple or quoted field names of the containing fields,
     * delimited by `.`. For example, the structured field `&quot;foo&quot; : {
     * map_value: { &quot;x&amp;y&quot; : { string_value: &quot;hello&quot; }}}`
     * would be represented by the field path `foo.x&amp;y`.  Within a field
     * path, a quoted field name starts and ends with `` ` `` and may contain
     * any character. Some characters, including `` ` ``, must be escaped using
     * a `\`. For example, `` `x&amp;y` `` represents `x&amp;y` and ``
     * `bak\`tik` `` represents `` bak`tik ``.
     */
    fields?: {[key: string]: Schema$Value;};
    /**
     * The resource name of the document, for example
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;
    /**
     * Output only. The time at which the document was last changed.  This value
     * is initially set to the `create_time` then increases monotonically with
     * each change to the document. It can also be compared to values from other
     * documents and the `read_time` of a query.
     */
    updateTime?: string;
  }
  /**
   * A Document has changed.  May be the result of multiple writes, including
   * deletes, that ultimately resulted in a new value for the Document. Multiple
   * DocumentChange messages may be returned for the same logical change, if
   * multiple targets are affected.
   */
  export interface Schema$DocumentChange {
    /**
     * The new state of the Document.  If `mask` is set, contains only fields
     * that were updated or added.
     */
    document?: Schema$Document;
    /**
     * A set of target IDs for targets that no longer match this document.
     */
    removedTargetIds?: number[];
    /**
     * A set of target IDs of targets that match this document.
     */
    targetIds?: number[];
  }
  /**
   * A Document has been deleted.  May be the result of multiple writes,
   * including updates, the last of which deleted the Document.  Multiple
   * DocumentDelete messages may be returned for the same logical delete, if
   * multiple targets are affected.
   */
  export interface Schema$DocumentDelete {
    /**
     * The resource name of the Document that was deleted.
     */
    document?: string;
    /**
     * The read timestamp at which the delete was observed.  Greater or equal to
     * the `commit_time` of the delete.
     */
    readTime?: string;
    /**
     * A set of target IDs for targets that previously matched this entity.
     */
    removedTargetIds?: number[];
  }
  /**
   * A set of field paths on a document. Used to restrict a get or update
   * operation on a document to a subset of its fields. This is different from
   * standard field masks, as this is always scoped to a Document, and takes in
   * account the dynamic nature of Value.
   */
  export interface Schema$DocumentMask {
    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    fieldPaths?: string[];
  }
  /**
   * A Document has been removed from the view of the targets.  Sent if the
   * document is no longer relevant to a target and is out of view. Can be sent
   * instead of a DocumentDelete or a DocumentChange if the server can not send
   * the new value of the document.  Multiple DocumentRemove messages may be
   * returned for the same logical write or delete, if multiple targets are
   * affected.
   */
  export interface Schema$DocumentRemove {
    /**
     * The resource name of the Document that has gone out of view.
     */
    document?: string;
    /**
     * The read timestamp at which the remove was observed.  Greater or equal to
     * the `commit_time` of the change/delete/remove.
     */
    readTime?: string;
    /**
     * A set of target IDs for targets that previously matched this document.
     */
    removedTargetIds?: number[];
  }
  /**
   * A target specified by a set of documents names.
   */
  export interface Schema$DocumentsTarget {
    /**
     * The names of the documents to retrieve. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * The request will fail if any of the document is not a child resource of
     * the given `database`. Duplicate names will be elided.
     */
    documents?: string[];
  }
  /**
   * A transformation of a document.
   */
  export interface Schema$DocumentTransform {
    /**
     * The name of the document to transform.
     */
    document?: string;
    /**
     * The list of transformations to apply to the fields of the document, in
     * order. This must not be empty.
     */
    fieldTransforms?: Schema$FieldTransform[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A digest of all the documents that match a given target.
   */
  export interface Schema$ExistenceFilter {
    /**
     * The total count of documents that match target_id.  If different from the
     * count of documents in the client that match, the client must manually
     * determine which documents no longer match the target.
     */
    count?: number;
    /**
     * The target ID to which this filter applies.
     */
    targetId?: number;
  }
  /**
   * A filter on a specific field.
   */
  export interface Schema$FieldFilter {
    /**
     * The field to filter by.
     */
    field?: Schema$FieldReference;
    /**
     * The operator to filter by.
     */
    op?: string;
    /**
     * The value to compare to.
     */
    value?: Schema$Value;
  }
  /**
   * A reference to a field, such as `max(messages.time) as max_time`.
   */
  export interface Schema$FieldReference {
    fieldPath?: string;
  }
  /**
   * A transformation of a field of the document.
   */
  export interface Schema$FieldTransform {
    /**
     * Append the given elements in order if they are not already present in the
     * current field value. If the field is not an array, or if the field does
     * not yet exist, it is first set to the empty array.  Equivalent numbers of
     * different types (e.g. 3L and 3.0) are considered equal when checking if a
     * value is missing. NaN is equal to NaN, and Null is equal to Null. If the
     * input contains multiple equivalent values, only the first will be
     * considered.  The corresponding transform_result will be the null value.
     */
    appendMissingElements?: Schema$ArrayValue;
    /**
     * The path of the field. See Document.fields for the field path syntax
     * reference.
     */
    fieldPath?: string;
    /**
     * Adds the given value to the field&#39;s current value.  This must be an
     * integer or a double value. If the field is not an integer or double, or
     * if the field does not yet exist, the transformation will set the field to
     * the given value. If either of the given value or the current field value
     * are doubles, both values will be interpreted as doubles. Double
     * arithmetic and representation of double values follow IEEE 754 semantics.
     * If there is positive/negative integer overflow, the field is resolved to
     * the largest magnitude positive/negative integer.
     */
    increment?: Schema$Value;
    /**
     * Sets the field to the maximum of its current value and the given value.
     * This must be an integer or a double value. If the field is not an integer
     * or double, or if the field does not yet exist, the transformation will
     * set the field to the given value. If a maximum operation is applied where
     * the field and the input value are of mixed types (that is - one is an
     * integer and one is a double) the field takes on the type of the larger
     * operand. If the operands are equivalent (e.g. 3 and 3.0), the field does
     * not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored
     * value and zero input value is always the stored value. The maximum of any
     * numeric value x and NaN is NaN.
     */
    maximum?: Schema$Value;
    /**
     * Sets the field to the minimum of its current value and the given value.
     * This must be an integer or a double value. If the field is not an integer
     * or double, or if the field does not yet exist, the transformation will
     * set the field to the input value. If a minimum operation is applied where
     * the field and the input value are of mixed types (that is - one is an
     * integer and one is a double) the field takes on the type of the smaller
     * operand. If the operands are equivalent (e.g. 3 and 3.0), the field does
     * not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored
     * value and zero input value is always the stored value. The minimum of any
     * numeric value x and NaN is NaN.
     */
    minimum?: Schema$Value;
    /**
     * Remove all of the given elements from the array in the field. If the
     * field is not an array, or if the field does not yet exist, it is set to
     * the empty array.  Equivalent numbers of the different types (e.g. 3L
     * and 3.0) are considered equal when deciding whether an element should be
     * removed. NaN is equal to NaN, and Null is equal to Null. This will remove
     * all equivalent values if there are duplicates.  The corresponding
     * transform_result will be the null value.
     */
    removeAllFromArray?: Schema$ArrayValue;
    /**
     * Sets the field to the given server value.
     */
    setToServerValue?: string;
  }
  /**
   * A filter.
   */
  export interface Schema$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: Schema$CompositeFilter;
    /**
     * A filter on a document field.
     */
    fieldFilter?: Schema$FieldFilter;
    /**
     * A filter that takes exactly one argument.
     */
    unaryFilter?: Schema$UnaryFilter;
  }
  /**
   * Metadata for ExportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsMetadata {
    /**
     * Which collection ids are being exported.
     */
    collectionIds?: string[];
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
     */
    endTime?: string;
    /**
     * The state of the export operation.
     */
    operationState?: string;
    /**
     * Where the entities are being exported to.
     */
    outputUriPrefix?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * The request for FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsRequest {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[];
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the
     * form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the
     * name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an
     * optional Google Cloud Storage namespace path. When choosing a name, be
     * sure to consider Google Cloud Storage naming guidelines:
     * https://cloud.google.com/storage/docs/naming. If the URI is a bucket
     * (without a namespace path), a prefix will be generated based on the start
     * time.
     */
    outputUriPrefix?: string;
  }
  /**
   * Returned in the google.longrunning.Operation response field.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsResponse {
    /**
     * Location of the output files. This can be used to begin an import into
     * Cloud Firestore (this project or another project) after the operation
     * completes successfully.
     */
    outputUriPrefix?: string;
  }
  /**
   * Metadata for ImportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: string[];
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
     */
    endTime?: string;
    /**
     * The location of the documents being imported.
     */
    inputUriPrefix?: string;
    /**
     * The state of the import operation.
     */
    operationState?: string;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * The request for FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ImportDocumentsRequest {
    /**
     * Which collection ids to import. Unspecified means all collections
     * included in the import.
     */
    collectionIds?: string[];
    /**
     * Location of the exported files. This must match the output_uri_prefix of
     * an ExportDocumentsResponse from an export that has completed
     * successfully. See:
     * google.firestore.admin.v1beta1.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string;
  }
  /**
   * An index definition.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1Index {
    /**
     * The collection ID to which this index applies. Required.
     */
    collectionId?: string;
    /**
     * The fields to index.
     */
    fields?: Schema$GoogleFirestoreAdminV1beta1IndexField[];
    /**
     * The resource name of the index. Output only.
     */
    name?: string;
    /**
     * The state of the index. Output only.
     */
    state?: string;
  }
  /**
   * A field of an index.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1IndexField {
    /**
     * The path of the field. Must match the field path specification described
     * by google.firestore.v1beta1.Document.fields. Special field path
     * `__name__` may be used by itself or at the end of a path. `__type__` may
     * be used only at the end of path.
     */
    fieldPath?: string;
    /**
     * The field&#39;s mode.
     */
    mode?: string;
  }
  /**
   * Metadata for index operations. This metadata populates the metadata field
   * of google.longrunning.Operation.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1IndexOperationMetadata {
    /**
     * True if the [google.longrunning.Operation] was cancelled. If the
     * cancellation is in progress, cancelled will be true but
     * google.longrunning.Operation.done will be false.
     */
    cancelled?: boolean;
    /**
     * Progress of the existing operation, measured in number of documents.
     */
    documentProgress?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
     */
    endTime?: string;
    /**
     * The index resource that this operation is acting on. For example:
     * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     */
    index?: string;
    /**
     * The type of index operation.
     */
    operationType?: string;
    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }
  /**
   * The response for FirestoreAdmin.ListIndexes.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse {
    /**
     * The indexes.
     */
    indexes?: Schema$GoogleFirestoreAdminV1beta1Index[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }
  /**
   * The metadata message for google.cloud.location.Location.metadata.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1LocationMetadata {}
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1Progress {
    /**
     * An estimate of how much work has been completed. Note that this may be
     * greater than `work_estimated`.
     */
    workCompleted?: string;
    /**
     * An estimate of how much work needs to be performed. Zero if the work
     * estimate is unavailable. May change as work progresses.
     */
    workEstimated?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any;};
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any;};
  }
  /**
   * An object representing a latitude/longitude pair. This is expressed as a
   * pair of doubles representing degrees latitude and degrees longitude. Unless
   * specified otherwise, this must conform to the &lt;a
   * href=&quot;http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf&quot;&gt;WGS84
   * standard&lt;/a&gt;. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }
  /**
   * The request for Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsRequest {
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A page token. Must be a value from ListCollectionIdsResponse.
     */
    pageToken?: string;
  }
  /**
   * The response from Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsResponse {
    /**
     * The collection ids.
     */
    collectionIds?: string[];
    /**
     * A page token that may be used to continue the list.
     */
    nextPageToken?: string;
  }
  /**
   * The response for Firestore.ListDocuments.
   */
  export interface Schema$ListDocumentsResponse {
    /**
     * The Documents found.
     */
    documents?: Schema$Document[];
    /**
     * The next page token.
     */
    nextPageToken?: string;
  }
  /**
   * A request for Firestore.Listen
   */
  export interface Schema$ListenRequest {
    /**
     * A target to add to this stream.
     */
    addTarget?: Schema$Target;
    /**
     * Labels associated with this target change.
     */
    labels?: {[key: string]: string;};
    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number;
  }
  /**
   * The response for Firestore.Listen.
   */
  export interface Schema$ListenResponse {
    /**
     * A Document has changed.
     */
    documentChange?: Schema$DocumentChange;
    /**
     * A Document has been deleted.
     */
    documentDelete?: Schema$DocumentDelete;
    /**
     * A Document has been removed from a target (because it is no longer
     * relevant to that target).
     */
    documentRemove?: Schema$DocumentRemove;
    /**
     * A filter to apply to the set of documents previously returned for the
     * given target.  Returned when documents may have been removed from the
     * given target, but the exact documents are unknown.
     */
    filter?: Schema$ExistenceFilter;
    /**
     * Targets have changed.
     */
    targetChange?: Schema$TargetChange;
  }
  /**
   * A map value.
   */
  export interface Schema$MapValue {
    /**
     * The map&#39;s fields.  The map keys represent field names. Field names
     * matching the regular expression `__.*__` are reserved. Reserved field
     * names are forbidden except in certain documented contexts. The map keys,
     * represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
     */
    fields?: {[key: string]: Schema$Value;};
  }
  /**
   * An order on a field.
   */
  export interface Schema$Order {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string;
    /**
     * The field to order by.
     */
    field?: Schema$FieldReference;
  }
  /**
   * A precondition on a document, used for conditional operations.
   */
  export interface Schema$Precondition {
    /**
     * When set to `true`, the target document must exist. When set to `false`,
     * the target document must not exist.
     */
    exists?: boolean;
    /**
     * When set, the target document must exist and have been last updated at
     * that time.
     */
    updateTime?: string;
  }
  /**
   * The projection of document&#39;s fields to return.
   */
  export interface Schema$Projection {
    /**
     * The fields to return.  If empty, all fields are returned. To only return
     * the name of the document, use `[&#39;__name__&#39;]`.
     */
    fields?: Schema$FieldReference[];
  }
  /**
   * A target specified by a query.
   */
  export interface Schema$QueryTarget {
    /**
     * The parent resource name. In the format:
     * `projects/{project_id}/databases/{database_id}/documents` or
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * For example: `projects/my-project/databases/my-database/documents` or
     * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * Options for a transaction that can only be used to read documents.
   */
  export interface Schema$ReadOnly {
    /**
     * Reads documents at the given time. This may not be older than 60 seconds.
     */
    readTime?: string;
  }
  /**
   * Options for a transaction that can be used to read and write documents.
   */
  export interface Schema$ReadWrite {
    /**
     * An optional transaction to retry.
     */
    retryTransaction?: string;
  }
  /**
   * The request for Firestore.Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * The transaction to roll back.
     */
    transaction?: string;
  }
  /**
   * The request for Firestore.RunQuery.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only
     * transaction. The new transaction ID will be returned as the first
     * response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older
     * than 60 seconds.
     */
    readTime?: string;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }
  /**
   * The response for Firestore.RunQuery.
   */
  export interface Schema$RunQueryResponse {
    /**
     * A query result. Not set when reporting partial progress.
     */
    document?: Schema$Document;
    /**
     * The time at which the document was read. This may be monotonically
     * increasing; in this case, the previous documents in the result stream are
     * guaranteed not to have changed between their `read_time` and this one. If
     * the query returns no results, a response with `read_time` and no
     * `document` will be sent, and this represents the time at which the query
     * was run.
     */
    readTime?: string;
    /**
     * The number of results that have been skipped due to an offset between the
     * last response and the current response.
     */
    skippedResults?: number;
    /**
     * The transaction that was started as part of this request. Can only be set
     * in the first response, and only if RunQueryRequest.new_transaction was
     * set in the request. If set, no other fields will be set in this response.
     */
    transaction?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * A Firestore query.
   */
  export interface Schema$StructuredQuery {
    /**
     * A end point for the query results.
     */
    endAt?: Schema$Cursor;
    /**
     * The collections to query.
     */
    from?: Schema$CollectionSelector[];
    /**
     * The maximum number of results to return.  Applies after all other
     * constraints. Must be &gt;= 0 if specified.
     */
    limit?: number;
    /**
     * The number of results to skip.  Applies before limit, but after all other
     * constraints. Must be &gt;= 0 if specified.
     */
    offset?: number;
    /**
     * The order to apply to the query results.  Firestore guarantees a stable
     * ordering through the following rules:   * Any field required to appear in
     * `order_by`, that is not already    specified in `order_by`, is appended
     * to the order in field name order    by default.  * If an order on
     * `__name__` is not specified, it is appended by default.  Fields are
     * appended with the same sort direction as the last order specified, or
     * &#39;ASCENDING&#39; if no order was specified. For example:   * `SELECT *
     * FROM Foo ORDER BY A` becomes    `SELECT * FROM Foo ORDER BY A, __name__`
     * * `SELECT * FROM Foo ORDER BY A DESC` becomes    `SELECT * FROM Foo ORDER
     * BY A DESC, __name__ DESC`  * `SELECT * FROM Foo WHERE A &gt; 1` becomes
     * `SELECT * FROM Foo WHERE A &gt; 1 ORDER BY A, __name__`
     */
    orderBy?: Schema$Order[];
    /**
     * The projection to return.
     */
    select?: Schema$Projection;
    /**
     * A starting point for the query results.
     */
    startAt?: Schema$Cursor;
    /**
     * The filter to apply.
     */
    where?: Schema$Filter;
  }
  /**
   * A specification of a set of documents to listen to.
   */
  export interface Schema$Target {
    /**
     * A target specified by a set of document names.
     */
    documents?: Schema$DocumentsTarget;
    /**
     * If the target should be removed once it is current and consistent.
     */
    once?: boolean;
    /**
     * A target specified by a query.
     */
    query?: Schema$QueryTarget;
    /**
     * Start listening after a specific `read_time`.  The client must know the
     * state of matching documents at this time.
     */
    readTime?: string;
    /**
     * A resume token from a prior TargetChange for an identical target.  Using
     * a resume token with a different target is unsupported and may fail.
     */
    resumeToken?: string;
    /**
     * A client provided target ID.  If not set, the server will assign an ID
     * for the target.  Used for resuming a target without changing IDs. The IDs
     * can either be client-assigned or be server-assigned in a previous stream.
     * All targets with client provided IDs must be added before adding a target
     * that needs a server-assigned id.
     */
    targetId?: number;
  }
  /**
   * Targets being watched have changed.
   */
  export interface Schema$TargetChange {
    /**
     * The error that resulted in this change, if applicable.
     */
    cause?: Schema$Status;
    /**
     * The consistent `read_time` for the given `target_ids` (omitted when the
     * target_ids are not at a consistent snapshot).  The stream is guaranteed
     * to send a `read_time` with `target_ids` empty whenever the entire stream
     * reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are
     * guaranteed to (eventually) result in a new consistent snapshot (while
     * NO_CHANGE and REMOVE messages are not).  For a given stream, `read_time`
     * is guaranteed to be monotonically increasing.
     */
    readTime?: string;
    /**
     * A token that can be used to resume the stream for the given `target_ids`,
     * or all targets if `target_ids` is empty.  Not set on every target change.
     */
    resumeToken?: string;
    /**
     * The type of change that occurred.
     */
    targetChangeType?: string;
    /**
     * The target IDs of targets that have changed.  If empty, the change
     * applies to all targets.  For `target_change_type=ADD`, the order of the
     * target IDs matches the order of the requests to add the targets. This
     * allows clients to unambiguously associate server-assigned target IDs with
     * added targets.  For other states, the order of the target IDs is not
     * defined.
     */
    targetIds?: number[];
  }
  /**
   * Options for creating a new transaction.
   */
  export interface Schema$TransactionOptions {
    /**
     * The transaction can only be used for read operations.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * The transaction can be used for both read and write operations.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * A filter with a single operand.
   */
  export interface Schema$UnaryFilter {
    /**
     * The field to which to apply the operator.
     */
    field?: Schema$FieldReference;
    /**
     * The unary operator to apply.
     */
    op?: string;
  }
  /**
   * A message that can hold any of the supported value types.
   */
  export interface Schema$Value {
    /**
     * An array value.  Cannot directly contain another array value, though can
     * contain an map which contains another array.
     */
    arrayValue?: Schema$ArrayValue;
    /**
     * A boolean value.
     */
    booleanValue?: boolean;
    /**
     * A bytes value.  Must not exceed 1 MiB - 89 bytes. Only the first 1,500
     * bytes are considered by queries.
     */
    bytesValue?: string;
    /**
     * A double value.
     */
    doubleValue?: number;
    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: Schema$LatLng;
    /**
     * An integer value.
     */
    integerValue?: string;
    /**
     * A map value.
     */
    mapValue?: Schema$MapValue;
    /**
     * A null value.
     */
    nullValue?: string;
    /**
     * A reference to a document. For example:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    referenceValue?: string;
    /**
     * A string value.  The string, represented as UTF-8, must not exceed 1 MiB
     * - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are
     * considered by queries.
     */
    stringValue?: string;
    /**
     * A timestamp value.  Precise only to microseconds. When stored, any
     * additional precision is rounded down.
     */
    timestampValue?: string;
  }
  /**
   * A write on a document.
   */
  export interface Schema$Write {
    /**
     * An optional precondition on the document.  The write will fail if this is
     * set and not met by the target document.
     */
    currentDocument?: Schema$Precondition;
    /**
     * A document name to delete. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    delete?: string;
    /**
     * Applies a tranformation to a document. At most one `transform` per
     * document is allowed in a given request. An `update` cannot follow a
     * `transform` on the same document in a given request.
     */
    transform?: Schema$DocumentTransform;
    /**
     * A document to write.
     */
    update?: Schema$Document;
    /**
     * The fields to update in this write.  This field can be set only when the
     * operation is `update`. If the mask is not set for an `update` and the
     * document exists, any existing data will be overwritten. If the mask is
     * set and the document on the server has fields not covered by the mask,
     * they are left unchanged. Fields referenced in the mask, but not present
     * in the input document, are deleted from the document on the server. The
     * field paths in this mask must not contain a reserved field name.
     */
    updateMask?: Schema$DocumentMask;
  }
  /**
   * The request for Firestore.Write.  The first request creates a stream, or
   * resumes an existing one from a token.  When creating a new stream, the
   * server replies with a response containing only an ID and a token, to use in
   * the next request.  When resuming a stream, the server first streams any
   * responses later than the given token, then a response containing only an
   * up-to-date token, to use in the next request.
   */
  export interface Schema$WriteRequest {
    /**
     * Labels associated with this write request.
     */
    labels?: {[key: string]: string;};
    /**
     * The ID of the write stream to resume. This may only be set in the first
     * message. When left empty, a new write stream will be created.
     */
    streamId?: string;
    /**
     * A stream token that was previously sent by the server.  The client should
     * set this field to the token from the most recent WriteResponse it has
     * received. This acknowledges that the client has received responses up to
     * this token. After sending this token, earlier tokens may not be used
     * anymore.  The server may close the stream if there are too many
     * unacknowledged responses.  Leave this field unset when creating a new
     * stream. To resume a stream at a specific point, set this field and the
     * `stream_id` field.  Leave this field unset when creating a new stream.
     */
    streamToken?: string;
    /**
     * The writes to apply.  Always executed atomically and in order. This must
     * be empty on the first request. This may be empty on the last request.
     * This must not be empty on all other requests.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Write.
   */
  export interface Schema$WriteResponse {
    /**
     * The time at which the commit occurred.
     */
    commitTime?: string;
    /**
     * The ID of the stream. Only set on the first message, when a new stream
     * was created.
     */
    streamId?: string;
    /**
     * A token that represents the position of this response in the stream. This
     * can be used by a client to resume the stream at this point.  This field
     * is always set.
     */
    streamToken?: string;
    /**
     * The result of applying the writes.  This i-th write result corresponds to
     * the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * The result of applying a write.
   */
  export interface Schema$WriteResult {
    /**
     * The results of applying each DocumentTransform.FieldTransform, in the
     * same order.
     */
    transformResults?: Schema$Value[];
    /**
     * The last update time of the document after applying the write. Not set
     * after a `delete`.  If the write did not actually change the document,
     * this will be the previous update_time.
     */
    updateTime?: string;
  }


  export class Resource$Projects {
    databases: Resource$Projects$Databases;
    constructor() {
      this.databases = new Resource$Projects$Databases();
    }
  }


  export class Resource$Projects$Databases {
    documents: Resource$Projects$Databases$Documents;
    indexes: Resource$Projects$Databases$Indexes;
    constructor() {
      this.documents = new Resource$Projects$Databases$Documents();
      this.indexes = new Resource$Projects$Databases$Indexes();
    }


    /**
     * firestore.projects.databases.exportDocuments
     * @desc Exports a copy of all or a subset of documents from Google Cloud
     * Firestore to another storage system, such as Google Cloud Storage. Recent
     * updates to documents may not be reflected in the export. The export
     * occurs in the background and its progress can be monitored and managed
     * via the Operation resource that is created. The output of an export may
     * only be used once the associated operation is done. If an export
     * operation is cancelled before completion it may leave partial data behind
     * in Google Cloud Storage.
     * @alias firestore.projects.databases.exportDocuments
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {().GoogleFirestoreAdminV1beta1ExportDocumentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportDocuments(
        params?: Params$Resource$Projects$Databases$Exportdocuments,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    exportDocuments(
        params: Params$Resource$Projects$Databases$Exportdocuments,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        params: Params$Resource$Projects$Databases$Exportdocuments,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    exportDocuments(
        paramsOrCallback?: Params$Resource$Projects$Databases$Exportdocuments|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Exportdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Exportdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:exportDocuments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * firestore.projects.databases.importDocuments
     * @desc Imports documents into Google Cloud Firestore. Existing documents
     * with the same name are overwritten. The import occurs in the background
     * and its progress can be monitored and managed via the Operation resource
     * that is created. If an ImportDocuments operation is cancelled, it is
     * possible that a subset of the data has already been imported to Cloud
     * Firestore.
     * @alias firestore.projects.databases.importDocuments
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {().GoogleFirestoreAdminV1beta1ImportDocumentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    importDocuments(
        params?: Params$Resource$Projects$Databases$Importdocuments,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    importDocuments(
        params: Params$Resource$Projects$Databases$Importdocuments,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        params: Params$Resource$Projects$Databases$Importdocuments,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    importDocuments(
        paramsOrCallback?: Params$Resource$Projects$Databases$Importdocuments|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Importdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Importdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:importDocuments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Exportdocuments extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Database to export. Should be of the form:
     * `projects/{project_id}/databases/{database_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1ExportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Importdocuments extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Database to import into. Should be of the form:
     * `projects/{project_id}/databases/{database_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1ImportDocumentsRequest;
  }

  export class Resource$Projects$Databases$Documents {
    constructor() {}


    /**
     * firestore.projects.databases.documents.batchGet
     * @desc Gets multiple documents.  Documents returned by this method are not
     * guaranteed to be returned in the same order that they were requested.
     * @alias firestore.projects.databases.documents.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {().BatchGetDocumentsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
        params?: Params$Resource$Projects$Databases$Documents$Batchget,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchGetDocumentsResponse>;
    batchGet(
        params: Params$Resource$Projects$Databases$Documents$Batchget,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
        callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>): void;
    batchGet(
        params: Params$Resource$Projects$Databases$Documents$Batchget,
        callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>): void;
    batchGet(callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>):
        void;
    batchGet(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Batchget|
        BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetDocumentsResponse>):
        void|AxiosPromise<Schema$BatchGetDocumentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:batchGet')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetDocumentsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetDocumentsResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.beginTransaction
     * @desc Starts a new transaction.
     * @alias firestore.projects.databases.documents.beginTransaction
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {().BeginTransactionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    beginTransaction(
        params?: Params$Resource$Projects$Databases$Documents$Begintransaction,
        options?: MethodOptions): AxiosPromise<Schema$BeginTransactionResponse>;
    beginTransaction(
        params: Params$Resource$Projects$Databases$Documents$Begintransaction,
        options: MethodOptions|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        params: Params$Resource$Projects$Databases$Documents$Begintransaction,
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        callback: BodyResponseCallback<Schema$BeginTransactionResponse>): void;
    beginTransaction(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Begintransaction|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BeginTransactionResponse>,
        callback?: BodyResponseCallback<Schema$BeginTransactionResponse>):
        void|AxiosPromise<Schema$BeginTransactionResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Documents$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:beginTransaction')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$BeginTransactionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BeginTransactionResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.commit
     * @desc Commits a transaction, while optionally updating documents.
     * @alias firestore.projects.databases.documents.commit
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {().CommitRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    commit(
        params?: Params$Resource$Projects$Databases$Documents$Commit,
        options?: MethodOptions): AxiosPromise<Schema$CommitResponse>;
    commit(
        params: Params$Resource$Projects$Databases$Documents$Commit,
        options: MethodOptions|BodyResponseCallback<Schema$CommitResponse>,
        callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
        params: Params$Resource$Projects$Databases$Documents$Commit,
        callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Commit|
        BodyResponseCallback<Schema$CommitResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CommitResponse>,
        callback?: BodyResponseCallback<Schema$CommitResponse>):
        void|AxiosPromise<Schema$CommitResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:commit')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.createDocument
     * @desc Creates a new document.
     * @alias firestore.projects.databases.documents.createDocument
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     * @param {string=} params.documentId The client-assigned document ID to use for this document.  Optional. If not specified, an ID will be assigned by the service.
     * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.parent The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
     * @param {().Document} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createDocument(
        params?: Params$Resource$Projects$Databases$Documents$Createdocument,
        options?: MethodOptions): AxiosPromise<Schema$Document>;
    createDocument(
        params: Params$Resource$Projects$Databases$Documents$Createdocument,
        options: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback: BodyResponseCallback<Schema$Document>): void;
    createDocument(
        params: Params$Resource$Projects$Databases$Documents$Createdocument,
        callback: BodyResponseCallback<Schema$Document>): void;
    createDocument(callback: BodyResponseCallback<Schema$Document>): void;
    createDocument(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Createdocument|
        BodyResponseCallback<Schema$Document>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback?: BodyResponseCallback<Schema$Document>):
        void|AxiosPromise<Schema$Document> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Createdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Documents$Createdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/{collectionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Document>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.delete
     * @desc Deletes a document.
     * @alias firestore.projects.databases.documents.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
     * @param {string} params.name The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Databases$Documents$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Databases$Documents$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Databases$Documents$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.get
     * @desc Gets a single document.
     * @alias firestore.projects.databases.documents.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.name The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string=} params.readTime Reads the version of the document at the given time. This may not be older than 60 seconds.
     * @param {string=} params.transaction Reads the document in a transaction.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Databases$Documents$Get,
        options?: MethodOptions): AxiosPromise<Schema$Document>;
    get(params: Params$Resource$Projects$Databases$Documents$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback: BodyResponseCallback<Schema$Document>): void;
    get(params: Params$Resource$Projects$Databases$Documents$Get,
        callback: BodyResponseCallback<Schema$Document>): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Get|
        BodyResponseCallback<Schema$Document>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback?: BodyResponseCallback<Schema$Document>):
        void|AxiosPromise<Schema$Document> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Document>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.list
     * @desc Lists documents.
     * @alias firestore.projects.databases.documents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.collectionId The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
     * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string=} params.orderBy The order to sort results by. For example: `priority desc, name`.
     * @param {integer=} params.pageSize The maximum number of documents to return.
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous List request, if any.
     * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {string=} params.readTime Reads documents as they were at the given time. This may not be older than 60 seconds.
     * @param {boolean=} params.showMissing If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set.  Requests with `show_missing` may not specify `where` or `order_by`.
     * @param {string=} params.transaction Reads documents in a transaction.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Databases$Documents$List,
        options?: MethodOptions): AxiosPromise<Schema$ListDocumentsResponse>;
    list(
        params: Params$Resource$Projects$Databases$Documents$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDocumentsResponse>,
        callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(
        params: Params$Resource$Projects$Databases$Documents$List,
        callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$List|
        BodyResponseCallback<Schema$ListDocumentsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDocumentsResponse>,
        callback?: BodyResponseCallback<Schema$ListDocumentsResponse>):
        void|AxiosPromise<Schema$ListDocumentsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/{collectionId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListDocumentsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDocumentsResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.listCollectionIds
     * @desc Lists all the collection IDs underneath a document.
     * @alias firestore.projects.databases.documents.listCollectionIds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {().ListCollectionIdsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listCollectionIds(
        params?: Params$Resource$Projects$Databases$Documents$Listcollectionids,
        options?: MethodOptions):
        AxiosPromise<Schema$ListCollectionIdsResponse>;
    listCollectionIds(
        params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListCollectionIdsResponse>,
        callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>): void;
    listCollectionIds(
        params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
        callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>): void;
    listCollectionIds(
        callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>): void;
    listCollectionIds(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Listcollectionids|
        BodyResponseCallback<Schema$ListCollectionIdsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListCollectionIdsResponse>,
        callback?: BodyResponseCallback<Schema$ListCollectionIdsResponse>):
        void|AxiosPromise<Schema$ListCollectionIdsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Listcollectionids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Databases$Documents$Listcollectionids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:listCollectionIds')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListCollectionIdsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCollectionIdsResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.listen
     * @desc Listens to changes.
     * @alias firestore.projects.databases.documents.listen
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {().ListenRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listen(
        params?: Params$Resource$Projects$Databases$Documents$Listen,
        options?: MethodOptions): AxiosPromise<Schema$ListenResponse>;
    listen(
        params: Params$Resource$Projects$Databases$Documents$Listen,
        options: MethodOptions|BodyResponseCallback<Schema$ListenResponse>,
        callback: BodyResponseCallback<Schema$ListenResponse>): void;
    listen(
        params: Params$Resource$Projects$Databases$Documents$Listen,
        callback: BodyResponseCallback<Schema$ListenResponse>): void;
    listen(callback: BodyResponseCallback<Schema$ListenResponse>): void;
    listen(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Listen|
        BodyResponseCallback<Schema$ListenResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListenResponse>,
        callback?: BodyResponseCallback<Schema$ListenResponse>):
        void|AxiosPromise<Schema$ListenResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Listen;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Listen;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:listen')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListenResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListenResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.patch
     * @desc Updates or inserts a document.
     * @alias firestore.projects.databases.documents.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.currentDocument.exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string=} params.currentDocument.updateTime When set, the target document must exist and have been last updated at that time.
     * @param {string=} params.mask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.name The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string=} params.updateMask.fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {().Document} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Databases$Documents$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Document>;
    patch(
        params: Params$Resource$Projects$Databases$Documents$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback: BodyResponseCallback<Schema$Document>): void;
    patch(
        params: Params$Resource$Projects$Databases$Documents$Patch,
        callback: BodyResponseCallback<Schema$Document>): void;
    patch(callback: BodyResponseCallback<Schema$Document>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Patch|
        BodyResponseCallback<Schema$Document>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Document>,
        callback?: BodyResponseCallback<Schema$Document>):
        void|AxiosPromise<Schema$Document> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Document>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.rollback
     * @desc Rolls back a transaction.
     * @alias firestore.projects.databases.documents.rollback
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {().RollbackRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rollback(
        params?: Params$Resource$Projects$Databases$Documents$Rollback,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    rollback(
        params: Params$Resource$Projects$Databases$Documents$Rollback,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(
        params: Params$Resource$Projects$Databases$Documents$Rollback,
        callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Rollback|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:rollback')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.runQuery
     * @desc Runs a query.
     * @alias firestore.projects.databases.documents.runQuery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {().RunQueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runQuery(
        params?: Params$Resource$Projects$Databases$Documents$Runquery,
        options?: MethodOptions): AxiosPromise<Schema$RunQueryResponse>;
    runQuery(
        params: Params$Resource$Projects$Databases$Documents$Runquery,
        options: MethodOptions|BodyResponseCallback<Schema$RunQueryResponse>,
        callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
        params: Params$Resource$Projects$Databases$Documents$Runquery,
        callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
        paramsOrCallback?:
            Params$Resource$Projects$Databases$Documents$Runquery|
        BodyResponseCallback<Schema$RunQueryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RunQueryResponse>,
        callback?: BodyResponseCallback<Schema$RunQueryResponse>):
        void|AxiosPromise<Schema$RunQueryResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:runQuery')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$RunQueryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RunQueryResponse>(parameters);
      }
    }


    /**
     * firestore.projects.databases.documents.write
     * @desc Streams batches of document updates and deletes, in order.
     * @alias firestore.projects.databases.documents.write
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
     * @param {().WriteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    write(
        params?: Params$Resource$Projects$Databases$Documents$Write,
        options?: MethodOptions): AxiosPromise<Schema$WriteResponse>;
    write(
        params: Params$Resource$Projects$Databases$Documents$Write,
        options: MethodOptions|BodyResponseCallback<Schema$WriteResponse>,
        callback: BodyResponseCallback<Schema$WriteResponse>): void;
    write(
        params: Params$Resource$Projects$Databases$Documents$Write,
        callback: BodyResponseCallback<Schema$WriteResponse>): void;
    write(callback: BodyResponseCallback<Schema$WriteResponse>): void;
    write(
        paramsOrCallback?: Params$Resource$Projects$Databases$Documents$Write|
        BodyResponseCallback<Schema$WriteResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$WriteResponse>,
        callback?: BodyResponseCallback<Schema$WriteResponse>):
        void|AxiosPromise<Schema$WriteResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Documents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+database}/documents:write')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$WriteResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WriteResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Documents$Batchget extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Begintransaction
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Commit extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Createdocument
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The collection ID, relative to `parent`, to list. For example:
     * `chatrooms`.
     */
    collectionId?: string;
    /**
     * The client-assigned document ID to use for this document.  Optional. If
     * not specified, an ID will be assigned by the service.
     */
    documentId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The parent resource. For example:
     * `projects/{project_id}/databases/{database_id}/documents` or
     * `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * When set to `true`, the target document must exist. When set to `false`,
     * the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at
     * that time.
     */
    'currentDocument.updateTime'?: string;
    /**
     * The resource name of the Document to delete. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The resource name of the Document to get. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;
    /**
     * Reads the version of the document at the given time. This may not be
     * older than 60 seconds.
     */
    readTime?: string;
    /**
     * Reads the document in a transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The collection ID, relative to `parent`, to list. For example:
     * `chatrooms` or `messages`.
     */
    collectionId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The order to sort results by. For example: `priority desc, name`.
     */
    orderBy?: string;
    /**
     * The maximum number of documents to return.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous List request, if
     * any.
     */
    pageToken?: string;
    /**
     * The parent resource name. In the format:
     * `projects/{project_id}/databases/{database_id}/documents` or
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * For example: `projects/my-project/databases/my-database/documents` or
     * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * Reads documents as they were at the given time. This may not be older
     * than 60 seconds.
     */
    readTime?: string;
    /**
     * If the list should show missing documents. A missing document is a
     * document that does not exist but has sub-documents. These documents will
     * be returned with a key but will not have fields, Document.create_time, or
     * Document.update_time set.  Requests with `show_missing` may not specify
     * `where` or `order_by`.
     */
    showMissing?: boolean;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listcollectionids
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The parent document. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * For example:
     * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListCollectionIdsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listen extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListenRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * When set to `true`, the target document must exist. When set to `false`,
     * the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at
     * that time.
     */
    'currentDocument.updateTime'?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The resource name of the document, for example
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path
     * syntax reference.
     */
    'updateMask.fieldPaths'?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Rollback extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Runquery extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The parent resource name. In the format:
     * `projects/{project_id}/databases/{database_id}/documents` or
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * For example: `projects/my-project/databases/my-database/documents` or
     * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Write extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The database name. In the format:
     * `projects/{project_id}/databases/{database_id}`. This is only required in
     * the first message.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteRequest;
  }


  export class Resource$Projects$Databases$Indexes {
    constructor() {}


    /**
     * firestore.projects.databases.indexes.create
     * @desc Creates the specified index. A newly created index's initial state
     * is `CREATING`. On completion of the returned
     * google.longrunning.Operation, the state will be `READY`. If the index
     * already exists, the call will return an `ALREADY_EXISTS` status.  During
     * creation, the process could result in an error, in which case the index
     * will move to the `ERROR` state. The process can be recovered by fixing
     * the data that caused the error, removing the index with delete, then
     * re-creating the index with create.  Indexes with a single field cannot be
     * created.
     * @alias firestore.projects.databases.indexes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
     * @param {().GoogleFirestoreAdminV1beta1Index} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Databases$Indexes$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
        params: Params$Resource$Projects$Databases$Indexes$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        params: Params$Resource$Projects$Databases$Indexes$Create,
        callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Databases$Indexes$Create|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleLongrunningOperation>,
        callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>):
        void|AxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Indexes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/indexes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }


    /**
     * firestore.projects.databases.indexes.delete
     * @desc Deletes an index.
     * @alias firestore.projects.databases.indexes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Databases$Indexes$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Databases$Indexes$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Databases$Indexes$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Databases$Indexes$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Indexes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * firestore.projects.databases.indexes.get
     * @desc Gets an index.
     * @alias firestore.projects.databases.indexes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Databases$Indexes$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta1Index>;
    get(params: Params$Resource$Projects$Databases$Indexes$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>,
        callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>):
        void;
    get(params: Params$Resource$Projects$Databases$Indexes$Get,
        callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>):
        void;
    get(callback:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>):
        void;
    get(paramsOrCallback?: Params$Resource$Projects$Databases$Indexes$Get|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>,
        callback?:
            BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>):
        void|AxiosPromise<Schema$GoogleFirestoreAdminV1beta1Index> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Indexes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta1Index>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1beta1Index>(
            parameters);
      }
    }


    /**
     * firestore.projects.databases.indexes.list
     * @desc Lists the indexes that match the specified filters.
     * @alias firestore.projects.databases.indexes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter
     * @param {integer=} params.pageSize The standard List page size.
     * @param {string=} params.pageToken The standard List page token.
     * @param {string} params.parent The database name. For example: `projects/{project_id}/databases/{database_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Databases$Indexes$List,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>;
    list(
        params: Params$Resource$Projects$Databases$Indexes$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>): void;
    list(
        params: Params$Resource$Projects$Databases$Indexes$List,
        callback: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Databases$Indexes$List|
        BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>): void|
        AxiosPromise<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Databases$Indexes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/indexes')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Indexes$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the database this index will apply to. For example:
     * `projects/{project_id}/databases/{database_id}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1Index;
  }
  export interface Params$Resource$Projects$Databases$Indexes$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The index name. For example:
     * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Indexes$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the index. For example:
     * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Indexes$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    filter?: string;
    /**
     * The standard List page size.
     */
    pageSize?: number;
    /**
     * The standard List page token.
     */
    pageToken?: string;
    /**
     * The database name. For example:
     * `projects/{project_id}/databases/{database_id}`
     */
    parent?: string;
  }
}
