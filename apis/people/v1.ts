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

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Google People API
 *
 * Provides access to information about profiles and contacts.
 *
 * @example
 * const google = require('googleapis');
 * const people = google.people('v1');
 *
 * @namespace people
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for People
 */
function People(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.people = {

    /**
     * people.people.getBatchGet
     *
     * @desc Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request throws a 400 error if 'personFields' is not specified.
     *
     * @alias people.people.getBatchGet
     * @memberOf! people(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.requestMask.includeField Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param {string=} params.resourceNames The resource name, such as one returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list), of one of the people to provide information about. You can include this parameter up to 50 times in one request.
     * @param {string=} params.personFields Required. A field mask to restrict which fields on each person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getBatchGet: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/people:batchGet').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * people.people.get
     *
     * @desc Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request throws a 400 error if 'personFields' is not specified.
     *
     * @alias people.people.get
     * @memberOf! people(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.personFields Required. A field mask to restrict which fields on the person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
     * @param {string} params.resourceName The resource name of the person to provide information about.  - To get information about the authenticated user, specify `people/me`. - To get information about a google account, specify `people/<account_id>`. - To get information about a contact, specify the resource name that   identifies the contact as returned by [`people.connections.list`](/people/api/rest/v1/people.connections/list).
     * @param {string=} params.requestMask.includeField Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://people.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resourceName}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    connections: {

      /**
       * people.people.connections.list
       *
       * @desc Provides a list of the authenticated user's contacts merged with any linked profiles. The request throws a 400 error if 'personFields' is not specified.
       *
       * @alias people.people.connections.list
       * @memberOf! people(v1)
       *
       * @param {object} params Parameters for request
       * @param {boolean=} params.requestSyncToken Whether the response should include a sync token, which can be used to get all changes since the last request.
       * @param {string} params.resourceName The resource name to return connections for. Only `people/me` is valid.
       * @param {string=} params.pageToken The token of the page to be returned.
       * @param {string=} params.requestMask.includeField Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
       * @param {integer=} params.pageSize The number of connections to include in the response. Valid values are between 1 and 2000, inclusive. Defaults to 100.
       * @param {string=} params.syncToken A sync token, returned by a previous call to `people.connections.list`. Only resources changed since the sync token was created will be returned.
       * @param {string=} params.personFields Required. A field mask to restrict which fields on each person are returned. Valid values are:  * addresses * ageRanges * biographies * birthdays * braggingRights * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * relationshipInterests * relationshipStatuses * residences * skills * taglines * urls
       * @param {string=} params.sortOrder The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://people.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resourceName}/connections').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['resourceName'],
          pathParams: ['resourceName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Photo
 * @memberOf! people(v1)
 * @type object
* @property {string} url The URL of the photo. You can change the desired size by appending a query
parameter `sz=&lt;size&gt;` at the end of the url. Example:
`https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50`
* @property {people(v1).FieldMetadata} metadata Metadata about the photo.
*/
/**
 * @typedef PhoneNumber
 * @memberOf! people(v1)
 * @type object
* @property {string} value The phone number.
* @property {string} formattedType The read-only type of the phone number translated and formatted in the
viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
* @property {string} canonicalForm The read-only canonicalized [ITU-T E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
form of the phone number.
* @property {string} type The type of the phone number. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `home`
* `work`
* `mobile`
* `homeFax`
* `workFax`
* `otherFax`
* `pager`
* `workMobile`
* `workPager`
* `main`
* `googleVoice`
* `other`
* @property {people(v1).FieldMetadata} metadata Metadata about the phone number.
*/
/**
 * @typedef ListConnectionsResponse
 * @memberOf! people(v1)
 * @type object
* @property {string} nextPageToken The token that can be used to retrieve the next page of results.
* @property {integer} totalItems The total number of items in the list without pagination.
* @property {string} nextSyncToken The token that can be used to retrieve changes since the last request.
* @property {people(v1).Person[]} connections The list of people that the requestor is connected to.
* @property {integer} totalPeople **DEPRECATED** (Please use totalItems)
The total number of people in the list without pagination.
*/
/**
 * @typedef Birthday
 * @memberOf! people(v1)
 * @type object
 * @property {string} text A free-form string representing the user&#39;s birthday.
 * @property {people(v1).FieldMetadata} metadata Metadata about the birthday.
 * @property {people(v1).Date} date The date of the birthday.
 */
/**
 * @typedef Residence
 * @memberOf! people(v1)
 * @type object
* @property {string} value The address of the residence.
* @property {boolean} current True if the residence is the person&#39;s current residence;
false if the residence is a past residence.
* @property {people(v1).FieldMetadata} metadata Metadata about the residence.
*/
/**
 * @typedef Address
 * @memberOf! people(v1)
 * @type object
* @property {string} streetAddress The street address.
* @property {people(v1).FieldMetadata} metadata Metadata about the address.
* @property {string} countryCode The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
code of the address.
* @property {string} formattedType The read-only type of the address translated and formatted in the viewer&#39;s
account locale or the `Accept-Language` HTTP header locale.
* @property {string} city The city of the address.
* @property {string} formattedValue The unstructured value of the address. If this is not set by the user it
will be automatically constructed from structured values.
* @property {string} country The country of the address.
* @property {string} type The type of the address. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `home`
* `work`
* `other`
* @property {string} extendedAddress The extended address of the address; for example, the apartment number.
* @property {string} poBox The P.O. box of the address.
* @property {string} postalCode The postal code of the address.
* @property {string} region The region of the address; for example, the state or province.
*/
/**
 * @typedef ContactGroupMembership
 * @memberOf! people(v1)
 * @type object
* @property {string} contactGroupId The contact group ID for the contact group membership. The contact group
ID can be custom or predefined. Possible values include, but are not
limited to, the following:

*  `myContacts`
*  `starred`
*  A numerical ID for user-created groups.
*/
/**
 * @typedef Status
 * @memberOf! people(v1)
 * @type object
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
/**
 * @typedef Event
 * @memberOf! people(v1)
 * @type object
* @property {string} formattedType The read-only type of the event translated and formatted in the
viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
* @property {string} type The type of the event. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `anniversary`
* `other`
* @property {people(v1).FieldMetadata} metadata Metadata about the event.
* @property {people(v1).Date} date The date of the event.
*/
/**
 * @typedef PersonMetadata
 * @memberOf! people(v1)
 * @type object
* @property {string[]} previousResourceNames Any former resource names this person has had. Populated only for
[`connections.list`](/people/api/rest/v1/people.connections/list) requests
that include a sync token.

The resource name may change when adding or removing fields that link a
contact and profile such as a verified email, verified phone number, or
profile URL.
* @property {people(v1).Source[]} sources The sources of data for the person.
* @property {boolean} deleted True if the person resource has been deleted. Populated only for
[`connections.list`](/people/api/rest/v1/people.connections/list) requests
that include a sync token.
* @property {string} objectType **DEPRECATED** (Please use
`person.metadata.sources.profileMetadata.objectType` instead)

The type of the person object.
* @property {string[]} linkedPeopleResourceNames Resource names of people linked to this resource.
*/
/**
 * @typedef ProfileMetadata
 * @memberOf! people(v1)
 * @type object
 * @property {string} objectType The profile object type.
 */
/**
 * @typedef Url
 * @memberOf! people(v1)
 * @type object
* @property {string} value The URL.
* @property {string} formattedType The read-only type of the URL translated and formatted in the viewer&#39;s
account locale or the `Accept-Language` HTTP header locale.
* @property {string} type The type of the URL. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `home`
* `work`
* `blog`
* `profile`
* `homePage`
* `ftp`
* `reservations`
* `appInstallPage`: website for a Google+ application.
* `other`
* @property {people(v1).FieldMetadata} metadata Metadata about the URL.
*/
/**
 * @typedef Gender
 * @memberOf! people(v1)
 * @type object
* @property {string} formattedValue The read-only value of the gender translated and formatted in the viewer&#39;s
account locale or the `Accept-Language` HTTP header locale.
* @property {people(v1).FieldMetadata} metadata Metadata about the gender.
* @property {string} value The gender for the person. The gender can be custom or predefined.
Possible values include, but are not limited to, the
following:

* `male`
* `female`
* `other`
* `unknown`
*/
/**
 * @typedef CoverPhoto
 * @memberOf! people(v1)
 * @type object
* @property {boolean} default True if the cover photo is the default cover photo;
false if the cover photo is a user-provided cover photo.
* @property {people(v1).FieldMetadata} metadata Metadata about the cover photo.
* @property {string} url The URL of the cover photo.
*/
/**
 * @typedef ImClient
 * @memberOf! people(v1)
 * @type object
* @property {string} username The user name used in the IM client.
* @property {string} formattedProtocol The read-only protocol of the IM client formatted in the viewer&#39;s account
locale or the `Accept-Language` HTTP header locale.
* @property {string} formattedType The read-only type of the IM client translated and formatted in the
viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
* @property {people(v1).FieldMetadata} metadata Metadata about the IM client.
* @property {string} type The type of the IM client. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `home`
* `work`
* `other`
* @property {string} protocol The protocol of the IM client. The protocol can be custom or predefined.
Possible values include, but are not limited to, the following:

* `aim`
* `msn`
* `yahoo`
* `skype`
* `qq`
* `googleTalk`
* `icq`
* `jabber`
* `netMeeting`
*/
/**
 * @typedef Interest
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).FieldMetadata} metadata Metadata about the interest.
 * @property {string} value The interest; for example, `stargazing`.
 */
/**
 * @typedef EmailAddress
 * @memberOf! people(v1)
 * @type object
* @property {string} displayName The display name of the email.
* @property {string} type The type of the email address. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `home`
* `work`
* `other`
* @property {people(v1).FieldMetadata} metadata Metadata about the email address.
* @property {string} value The email address.
* @property {string} formattedType The read-only type of the email address translated and formatted in the
viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
*/
/**
 * @typedef Nickname
 * @memberOf! people(v1)
 * @type object
 * @property {string} value The nickname.
 * @property {string} type The type of the nickname.
 * @property {people(v1).FieldMetadata} metadata Metadata about the nickname.
 */
/**
 * @typedef Skill
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).FieldMetadata} metadata Metadata about the skill.
 * @property {string} value The skill; for example, `underwater basket weaving`.
 */
/**
 * @typedef DomainMembership
 * @memberOf! people(v1)
 * @type object
 * @property {boolean} inViewerDomain True if the person is in the viewer&#39;s Google Apps domain.
 */
/**
 * @typedef Membership
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).FieldMetadata} metadata Metadata about the membership.
 * @property {people(v1).DomainMembership} domainMembership The domain membership.
 * @property {people(v1).ContactGroupMembership} contactGroupMembership The contact group membership.
 */
/**
 * @typedef RelationshipStatus
 * @memberOf! people(v1)
 * @type object
* @property {string} formattedValue The read-only value of the relationship status translated and formatted in
the viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
* @property {people(v1).FieldMetadata} metadata Metadata about the relationship status.
* @property {string} value The relationship status. The value can be custom or predefined.
Possible values include, but are not limited to, the following:

* `single`
* `inARelationship`
* `engaged`
* `married`
* `itsComplicated`
* `openRelationship`
* `widowed`
* `inDomesticPartnership`
* `inCivilUnion`
*/
/**
 * @typedef Date
 * @memberOf! people(v1)
 * @type object
* @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0
if specifying a year/month where the day is not significant.
* @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without
a year.
* @property {integer} month Month of year. Must be from 1 to 12.
*/
/**
 * @typedef Tagline
 * @memberOf! people(v1)
 * @type object
 * @property {string} value The tagline.
 * @property {people(v1).FieldMetadata} metadata Metadata about the tagline.
 */
/**
 * @typedef Name
 * @memberOf! people(v1)
 * @type object
* @property {string} phoneticFullName The full name spelled as it sounds.
* @property {string} displayNameLastFirst The read-only display name with the last name first formatted according to
the locale specified by the viewer&#39;s account or the
&lt;code&gt;Accept-Language&lt;/code&gt; HTTP header.
* @property {string} displayName The read-only display name formatted according to the locale specified by
the viewer&#39;s account or the &lt;code&gt;Accept-Language&lt;/code&gt; HTTP header.
* @property {string} honorificSuffix The honorific suffixes, such as `Jr.`
* @property {string} honorificPrefix The honorific prefixes, such as `Mrs.` or `Dr.`
* @property {string} phoneticHonorificSuffix The honorific suffixes spelled as they sound.
* @property {string} givenName The given name.
* @property {string} middleName The middle name(s).
* @property {string} phoneticHonorificPrefix The honorific prefixes spelled as they sound.
* @property {string} phoneticGivenName The given name spelled as it sounds.
* @property {string} phoneticFamilyName The family name spelled as it sounds.
* @property {string} familyName The family name.
* @property {string} phoneticMiddleName The middle name(s) spelled as they sound.
* @property {people(v1).FieldMetadata} metadata Metadata about the name.
*/
/**
 * @typedef BraggingRights
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).FieldMetadata} metadata Metadata about the bragging rights.
 * @property {string} value The bragging rights; for example, `climbed mount everest`.
 */
/**
 * @typedef Locale
 * @memberOf! people(v1)
 * @type object
* @property {string} value The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)
language tag representing the locale.
* @property {people(v1).FieldMetadata} metadata Metadata about the locale.
*/
/**
 * @typedef Organization
 * @memberOf! people(v1)
 * @type object
* @property {people(v1).Date} endDate The end date when the person left the organization.
* @property {string} symbol The symbol associated with the organization; for example, a stock ticker
symbol, abbreviation, or acronym.
* @property {string} name The name of the organization.
* @property {people(v1).FieldMetadata} metadata Metadata about the organization.
* @property {string} location The location of the organization office the person works at.
* @property {string} title The person&#39;s job title at the organization.
* @property {boolean} current True if the organization is the person&#39;s current organization;
false if the organization is a past organization.
* @property {people(v1).Date} startDate The start date when the person joined the organization.
* @property {string} formattedType The read-only type of the organization translated and formatted in the
viewer&#39;s account locale or the `Accept-Language` HTTP header locale.
* @property {string} domain The domain name associated with the organization; for example, `google.com`.
* @property {string} department The person&#39;s department at the organization.
* @property {string} type The type of the organization. The type can be custom or predefined.
Possible values include, but are not limited to, the following:

* `work`
* `school`
* @property {string} phoneticName The phonetic name of the organization.
* @property {string} jobDescription The person&#39;s job description at the organization.
*/
/**
 * @typedef Biography
 * @memberOf! people(v1)
 * @type object
 * @property {string} value The short biography.
 * @property {string} contentType The content type of the biography.
 * @property {people(v1).FieldMetadata} metadata Metadata about the biography.
 */
/**
 * @typedef AgeRangeType
 * @memberOf! people(v1)
 * @type object
 * @property {string} ageRange The age range.
 * @property {people(v1).FieldMetadata} metadata Metadata about the age range.
 */
/**
 * @typedef FieldMetadata
 * @memberOf! people(v1)
 * @type object
* @property {boolean} verified True if the field is verified; false if the field is unverified. A
verified field is typically a name, email address, phone number, or
website that has been confirmed to be owned by the person.
* @property {boolean} primary True if the field is the primary field; false if the field is a secondary
field.
* @property {people(v1).Source} source The source of the field.
*/
/**
 * @typedef PersonResponse
 * @memberOf! people(v1)
 * @type object
* @property {people(v1).Person} person The person.
* @property {people(v1).Status} status The status of the response.
* @property {integer} httpStatusCode **DEPRECATED** (Please use status instead)

[HTTP 1.1 status code]
(http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
* @property {string} requestedResourceName The original requested resource name. May be different than the resource
name on the returned person.

The resource name can change when adding or removing fields that link a
contact and profile such as a verified email, verified phone number, or a
profile URL.
*/
/**
 * @typedef RelationshipInterest
 * @memberOf! people(v1)
 * @type object
* @property {people(v1).FieldMetadata} metadata Metadata about the relationship interest.
* @property {string} value The kind of relationship the person is looking for. The value can be custom
or predefined. Possible values include, but are not limited to, the
following values:

* `friend`
* `date`
* `relationship`
* `networking`
* @property {string} formattedValue The value of the relationship interest translated and formatted in the
viewer&#39;s account locale or the locale specified in the Accept-Language
HTTP header.
*/
/**
 * @typedef Source
 * @memberOf! people(v1)
 * @type object
* @property {string} etag The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
source. Used for web cache validation. Only populated in
person.metadata.sources.
* @property {string} id The unique identifier within the source type generated by the server.
* @property {people(v1).ProfileMetadata} profileMetadata Metadata about a source of type PROFILE.
* @property {string} type The source type.
*/
/**
 * @typedef Relation
 * @memberOf! people(v1)
 * @type object
* @property {string} formattedType The type of the relation translated and formatted in the viewer&#39;s account
locale or the locale specified in the Accept-Language HTTP header.
* @property {string} person The name of the other person this relation refers to.
* @property {string} type The person&#39;s relation to the other person. The type can be custom or predefined.
Possible values include, but are not limited to, the following values:

* `spouse`
* `child`
* `mother`
* `father`
* `parent`
* `brother`
* `sister`
* `friend`
* `relative`
* `domesticPartner`
* `manager`
* `assistant`
* `referredBy`
* `partner`
* @property {people(v1).FieldMetadata} metadata Metadata about the relation.
*/
/**
 * @typedef Occupation
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).FieldMetadata} metadata Metadata about the occupation.
 * @property {string} value The occupation; for example, `carpenter`.
 */
/**
 * @typedef Person
 * @memberOf! people(v1)
 * @type object
* @property {people(v1).Birthday[]} birthdays The person&#39;s birthdays.
* @property {people(v1).Locale[]} locales The person&#39;s locale preferences.
* @property {people(v1).RelationshipInterest[]} relationshipInterests The person&#39;s read-only relationship interests.
* @property {people(v1).Url[]} urls The person&#39;s associated URLs.
* @property {people(v1).Nickname[]} nicknames The person&#39;s nicknames.
* @property {people(v1).Name[]} names The person&#39;s names.
* @property {people(v1).Relation[]} relations The person&#39;s relations.
* @property {people(v1).Occupation[]} occupations The person&#39;s occupations.
* @property {people(v1).EmailAddress[]} emailAddresses The person&#39;s email addresses.
* @property {people(v1).Organization[]} organizations The person&#39;s past or current organizations.
* @property {string} etag The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
resource. Used for web cache validation.
* @property {people(v1).BraggingRights[]} braggingRights The person&#39;s bragging rights.
* @property {people(v1).PersonMetadata} metadata Read-only metadata about the person.
* @property {people(v1).Residence[]} residences The person&#39;s residences.
* @property {people(v1).Gender[]} genders The person&#39;s genders.
* @property {people(v1).Interest[]} interests The person&#39;s interests.
* @property {string} resourceName The resource name for the person, assigned by the server. An ASCII string
with a max length of 27 characters, in the form of `people/&lt;person_id&gt;`.
* @property {people(v1).Biography[]} biographies The person&#39;s biographies.
* @property {people(v1).Skill[]} skills The person&#39;s skills.
* @property {people(v1).RelationshipStatus[]} relationshipStatuses The person&#39;s read-only relationship statuses.
* @property {people(v1).Photo[]} photos The person&#39;s read-only photos.
* @property {string} ageRange **DEPRECATED** (Please use `person.ageRanges` instead)**

The person&#39;s read-only age range.
* @property {people(v1).Tagline[]} taglines The person&#39;s read-only taglines.
* @property {people(v1).AgeRangeType[]} ageRanges The person&#39;s read-only age ranges.
* @property {people(v1).Address[]} addresses The person&#39;s street addresses.
* @property {people(v1).Event[]} events The person&#39;s events.
* @property {people(v1).Membership[]} memberships The person&#39;s read-only group memberships.
* @property {people(v1).PhoneNumber[]} phoneNumbers The person&#39;s phone numbers.
* @property {people(v1).CoverPhoto[]} coverPhotos The person&#39;s read-only cover photos.
* @property {people(v1).ImClient[]} imClients The person&#39;s instant messaging clients.
*/
/**
 * @typedef GetPeopleResponse
 * @memberOf! people(v1)
 * @type object
 * @property {people(v1).PersonResponse[]} responses The response for each requested resource name.
 */
export = People;