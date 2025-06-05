// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CatalogAPI from './catalog';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Catalog extends APIResource {
  /**
   * Search for products using an LLM to generate a TextSearchQuery object that is
   * used to search for products in the e-commerce catalog. The LLM will generate the
   * fields of the TextSearchQuery object based on input query text.
   */
  agentSearch(query: CatalogAgentSearchParams, options?: RequestOptions): APIPromise<SearchToolOutput> {
    return this._client.get('/catalog/agent_search', { query, ...options });
  }

  /**
   * Retrieve a file from Google Cloud Storage by file ID.
   *
   * Args: file_id: The unique identifier of the file
   *
   * Returns: StreamingResponse with the file content and appropriate content type
   */
  retrieveFile(fileID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/catalog/file/${fileID}`, options);
  }

  /**
   * Search for products using the Octogen's search agent.
   *
   * Args: type: The type of product to search for styles: List of styles to search
   * for tags: List of tags to search for limit: Maximum number of results to return.
   * The default is 10.
   */
  styleAndTagsSearch(
    params: CatalogStyleAndTagsSearchParams,
    options?: RequestOptions,
  ): APIPromise<SearchToolOutput> {
    const { type, compact_mode, limit, ...body } = params;
    return this._client.post('/catalog/style_and_tags_search', {
      query: { type, compact_mode, limit },
      body,
      ...options,
    });
  }

  /**
   * Search for products in the Octogen e-commerce catalog. The search is performed
   * using text embedding similarity on the input query text with the pre-computed
   * product embeddings. The additional parameters are used filters to narrow down
   * the search results. The number of results is determined by the limit parameter.
   */
  textSearch(body: CatalogTextSearchParams, options?: RequestOptions): APIPromise<SearchToolOutput> {
    return this._client.post('/catalog/text_search', { body, ...options });
  }

  /**
   * Upload an image file to Google Cloud Storage.
   *
   * Args: file: The file to upload
   *
   * Returns: FileUploadResponse with the file ID and URL
   */
  uploadFile(body: CatalogUploadFileParams, options?: RequestOptions): APIPromise<CatalogUploadFileResponse> {
    return this._client.post(
      '/catalog/file_upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Schema.org AggregateOffer model.
 */
export interface AggregateOffer {
  /**
   * The availability of the product — for example http://schema.org/InStock,
   * http://schema.org/OutOfStock, http://schema.org/PreOrder, etc.
   */
  availability?: string | null;

  /**
   * Highest price of the offers.
   */
  highPrice?: number | null;

  /**
   * Condition of the items.
   */
  itemCondition?: string | null;

  /**
   * Lowest price of the offers.
   */
  lowPrice?: number | null;

  /**
   * Number of offers.
   */
  offerCount?: number | null;

  /**
   * List of individual offers.
   */
  offers?: Array<Offer> | null;

  /**
   * Currency of the offers.
   */
  priceCurrency?: string | null;

  /**
   * Schema.org model for Organization.
   */
  seller?: Organization | null;

  type_?: string;
}

export interface Audience {
  /**
   * The age groups of the audience. Suggested values: 'newborn', 'infant',
   * 'toddler', 'kids', 'adult'. Maximum 5 values.
   */
  age_groups: Array<string>;

  /**
   * The genders of the audience. Suggested values: 'male', 'female', 'unisex'.
   * Maximum 5 values.
   */
  genders: Array<string>;
}

/**
 * Schema.org Brand definition.
 */
export interface Brand {
  /**
   * The name of the brand.
   */
  name: string | null;

  /**
   * Description of the brand.
   */
  description?: string | null;

  /**
   * URL of the brand's logo.
   */
  logo?: string | null;

  /**
   * URLs to external references for the brand.
   */
  sameAs?: Array<string> | null;

  type_?: string | null;

  /**
   * The brand's official website.
   */
  url?: string | null;
}

export interface BreadcrumbList {
  context?: ContextEnum;

  /**
   * The list of breadcrumb items.
   */
  itemListElement?: Array<BreadcrumbList.ItemListElement>;

  type_?: string;
}

export namespace BreadcrumbList {
  export interface ItemListElement {
    item: ItemListElement.Item;

    position: number;

    type_: string;
  }

  export namespace ItemListElement {
    export interface Item {
      id_: string;

      name: string;
    }
  }
}

export interface Category {
  name: string;

  url?: string | null;
}

export interface ColorInfo {
  /**
   * Standard color families, such as 'Red', 'Green', 'Blue'. Maximum 5 values.
   */
  color_families?: Array<string> | null;

  /**
   * Color display names, which may differ from standard color family names. Maximum
   * 75 values.
   */
  colors?: Array<ColorInfo.Color> | null;
}

export namespace ColorInfo {
  export interface Color {
    /**
     * The color display name, or label. This may differ from standard color family
     * names.
     */
    label: string;

    /**
     * A URL pointing to the color swatch image.
     */
    swatch_url?: string | null;
  }
}

export type ContextEnum =
  | 'https://schema.org/'
  | 'http://schema.org/'
  | 'https://schema.org'
  | 'http://schema.org';

export interface Facet {
  /**
   * The facet to filter by. Options: brand_name (The brand or manufacturer name of
   * the product), product_type (The type or category of the product (e.g., shirt,
   * pants, shoes)), gender (The target gender for the product (e.g., men, women,
   * unisex))
   */
  name: 'brand_name' | 'product_type' | 'gender';

  /**
   * List of values to filter by. They should all be lowercase. Facet values can be
   * phrases, so make sure to include the spaces.
   */
  values: Array<string>;
}

export interface FulfillmentInfo {
  /**
   * Store or region IDs for the fulfillment type. Must match the pattern
   * '[a-zA-Z0-9_-]'.
   */
  place_ids: string;

  /**
   * Fulfillment type such as 'pickup-in-store', 'same-day-delivery', or a custom
   * type.
   */
  type: string;
}

export interface Image {
  /**
   * Required. URI of the image. Must be a valid UTF-8 encoded URI with a maximum
   * length of 5000 characters.
   */
  url: string;

  /**
   * Optional URL with the location of the image on google storage
   */
  gs_url?: string | null;

  /**
   * Height of the image in pixels. Must be nonnegative.
   */
  height?: number | null;

  /**
   * Size of the image in bytes. Must be nonnegative.
   */
  size?: number | null;

  /**
   * Width of the image in pixels. Must be nonnegative.
   */
  width?: number | null;
}

/**
 * Schema.org Offer model.
 */
export interface Offer {
  /**
   * The availability of the product — for example http://schema.org/InStock,
   * http://schema.org/OutOfStock, http://schema.org/PreOrder, etc.
   */
  availability?: string | null;

  /**
   * End time of availability.
   */
  availabilityEnds?: string | null;

  /**
   * Start time of availability.
   */
  availabilityStarts?: string | null;

  /**
   * Schema.org QuantitativeValue model.
   */
  eligibleQuantity?: QuantitativeValue | null;

  /**
   * Schema.org QuantitativeValue model.
   */
  inventoryLevel?: QuantitativeValue | null;

  /**
   * Condition of the item.
   */
  itemCondition?: string | null;

  /**
   * Name of the offer.
   */
  name?: string | null;

  /**
   * Price specification for the product.
   */
  priceSpecification?: Offer.PriceSpecification | Offer.CompoundPriceSpecification | null;

  /**
   * Schema.org model for Organization.
   */
  seller?: Organization | null;

  /**
   * SKU of the product.
   */
  sku?: string | null;

  type_?: string;
}

export namespace Offer {
  /**
   * Schema.org PriceSpecification model.
   */
  export interface PriceSpecification {
    /**
     * Price of the offer.
     */
    price?: number | null;

    /**
     * Currency of the price.
     */
    priceCurrency?: string | null;

    /**
     * The start of the validity period for the price.
     */
    validFrom?: string | null;

    /**
     * The end of the validity period for the price.
     */
    validThrough?: string | null;
  }

  /**
   * Schema.org CompoundPriceSpecification model.
   */
  export interface CompoundPriceSpecification {
    /**
     * A list of unit price specifications for the item or offer.
     */
    priceComponent?: Array<CompoundPriceSpecification.PriceComponent> | null;
  }

  export namespace CompoundPriceSpecification {
    /**
     * Schema.org UnitPriceSpecification model.
     */
    export interface PriceComponent {
      /**
       * Price of the offer.
       */
      price?: number | null;

      /**
       * Currency of the price.
       */
      priceCurrency?: string | null;

      /**
       * The type of price specification as enumerated in schema.org's
       * PriceTypeEnumeration, for example http://schema.org/ListPrice,
       * http://schema.org/RegularPrice, http://schema.org/SalePrice, etc.
       */
      priceType?: string | null;

      /**
       * The start of the validity period for the price.
       */
      validFrom?: string | null;

      /**
       * The end of the validity period for the price.
       */
      validThrough?: string | null;
    }
  }
}

/**
 * Wrapper class for a list of offers.
 */
export interface Offers {
  /**
   * The condition of the product (e.g., NewCondition, UsedCondition).
   */
  itemCondition?: string | null;

  /**
   * A list of individual offers for the product.
   */
  offers?: Array<Offer> | null;

  /**
   * The URL where the product can be purchased.
   */
  url?: string | null;
}

/**
 * Schema.org model for Organization.
 */
export interface Organization {
  /**
   * Schema.org model for ContactPoint.
   */
  contactPoint?: Organization.ContactPoint | null;

  context?: string | null;

  /**
   * The logo of the organization.
   */
  logo?: string | null;

  /**
   * The name of the organization.
   */
  name?: string | null;

  /**
   * The same as of the organization.
   */
  sameAs?: Array<string> | null;

  type?: string | null;

  /**
   * The URL of the organization.
   */
  url?: string | null;
}

export namespace Organization {
  /**
   * Schema.org model for ContactPoint.
   */
  export interface ContactPoint {
    /**
     * Schema.org model for PostalAddress.
     */
    address?: ContactPoint.Address | null;

    /**
     * The type of contact point.
     */
    contactType?: string | null;

    /**
     * The email address of the contact point.
     */
    email?: string | null;

    /**
     * The telephone number of the contact point.
     */
    telephone?: string | null;

    type?: string;
  }

  export namespace ContactPoint {
    /**
     * Schema.org model for PostalAddress.
     */
    export interface Address {
      /**
       * The country.
       */
      addressCountry?: string | null;

      /**
       * The locality.
       */
      addressLocality?: string | null;

      /**
       * The region.
       */
      addressRegion?: string | null;

      /**
       * The postal code.
       */
      postalCode?: string | null;

      /**
       * The street address.
       */
      streetAddress?: string | null;

      type?: string;
    }
  }
}

export interface ProductEnrichment {
  /**
   * The target gender of the product.
   */
  gender?: 'male' | 'female' | 'unisex' | null;

  /**
   * Whether the image only contains a single product.
   */
  image_with_single_product?: boolean | null;

  /**
   * Styles for the product.
   */
  styles?: Array<string> | null;

  /**
   * Tags for the product.
   */
  tags?: Array<string> | null;

  /**
   * Type of the product.
   */
  type?: string | null;

  /**
   * Synonyms for the type of the product.
   */
  type_synonyms?: Array<string> | null;
}

export interface Promotion {
  promotion_id: string;
}

/**
 * Schema.org QuantitativeValue model.
 */
export interface QuantitativeValue {
  /**
   * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or
   * a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix
   * followed by a colon..
   */
  unitCode?: string | null;

  /**
   * The value of the quantitative value.
   */
  value?: number | null;
}

export interface Rating {
  /**
   * Average rating, scaled between 1-5.
   */
  average_rating?: number | null;

  /**
   * Total number of ratings. Must be nonnegative.
   */
  rating_count?: number | null;

  /**
   * List of rating counts per rating value.
   */
  rating_histogram?: Array<number> | null;

  type?: 'AggregateRating' | 'Rating' | null;
}

/**
 * Schema.org Review definition.
 */
export interface Review {
  /**
   * Schema.org Person definition.
   */
  author?: Review.Author | null;

  /**
   * The date the review was published.
   */
  datePublished?: string | null;

  /**
   * The body of the review.
   */
  reviewBody?: string | null;

  /**
   * The rating given in this review.
   */
  reviewRating?: Rating | null;

  type_?: string;
}

export namespace Review {
  /**
   * Schema.org Person definition.
   */
  export interface Author {
    /**
     * The name of the person.
     */
    name: string | null;

    type_?: string;
  }
}

export interface SearchToolOutput {
  /**
   * The list of product groups that match the input search query and filters.
   */
  products: Array<SearchToolOutput.Product>;

  /**
   * The total number of products returned by the search.
   */
  total_found: number;

  /**
   * The error message if the search query is invalid or the search failed. The
   * products field will be an empty list if the search fails and total_found will
   * be 0.
   */
  error?: string | null;
}

export namespace SearchToolOutput {
  export interface Product {
    uuid: string;

    /**
     * Product identifier. Can be the identifier of a SKU as well. It should not be
     * confused with any of the GTIN\* numbers.
     */
    id?: string | null;

    /**
     * Extra product attributes.
     */
    additional_attributes?: Record<string, Product.AdditionalAttributes | null> | null;

    /**
     * Target group associated with the product.
     */
    audience?: CatalogAPI.Audience | null;

    /**
     * The brand or organization associated with the product.
     */
    brand?: CatalogAPI.Brand | CatalogAPI.Organization | null;

    brand_name?: string | null;

    /**
     * Breadcrumb list of the product.
     */
    breadcrumbList?: CatalogAPI.BreadcrumbList | null;

    /**
     * Catalog name, or ecommerce site name. Eg: Macys, sephora etc
     */
    catalog?: string | null;

    /**
     * Product categories.
     */
    categories?: Array<CatalogAPI.Category> | null;

    /**
     * Color of the product.
     */
    color_info?: CatalogAPI.ColorInfo | null;

    current_price?: number | null;

    /**
     * Product description.
     */
    description?: string | null;

    /**
     * The dimensions of the product.
     */
    dimensions?: string | null;

    /**
     * Enrichment information for the product. This is generated by the product
     * information enrichment service.
     */
    enrichment?: CatalogAPI.ProductEnrichment | null;

    /**
     * Extra text field for additional information. Extracted from the web-page
     */
    extra_text?: string | null;

    /**
     * The fit of the product.
     */
    fit?: string | Array<string> | null;

    /**
     * Fulfillment information.
     */
    fulfillment_info?: Array<CatalogAPI.FulfillmentInfo> | null;

    /**
     * Global Trade Item Number. a unique identifier used to recognize and track
     * products globally in ecommerce, retail, and supply chains. It ensures that
     * products are correctly identified across different marketplaces, point-of-sale
     * (POS) systems, and logistics networks. Should not be confused with product or
     * SKU id.
     */
    gtin?: string | null;

    /**
     * Indicates a list of Products that are variants of this ProductGroup
     */
    hasVariant?: Array<Product.HasVariant> | null;

    /**
     * Primary product image.
     */
    image?: CatalogAPI.Image | null;

    /**
     * Product image.
     */
    images?: Array<CatalogAPI.Image> | null;

    /**
     * Language of the name and description.
     */
    language_code?: string | null;

    /**
     * Material of the product.
     */
    materials?: Array<string> | null;

    /**
     * Full name or title of the product.
     */
    name?: string | null;

    /**
     * Offer or AggregateOffer for the product.
     */
    offers?: CatalogAPI.Offer | CatalogAPI.AggregateOffer | CatalogAPI.Offers | null;

    /**
     * Schema.org model for Organization.
     */
    organization?: CatalogAPI.Organization | null;

    original_price?: number | null;

    /**
     * Pattern or graphic print of the product.
     */
    patterns?: Array<string> | null;

    /**
     * Used by Variant to refer to the productGroupID of the productGroup in which the
     * product belongs
     */
    primary_product_id?: string | null;

    /**
     * ID of the product group.
     */
    productGroupID?: string | null;

    /**
     * Promotions applied to the product.
     */
    promotions?: Array<CatalogAPI.Promotion> | null;

    /**
     * Product rating.
     */
    rating?: CatalogAPI.Rating | null;

    /**
     * List of reviews for the product.
     */
    review?: Array<CatalogAPI.Review> | null;

    /**
     * Size of the product. A SKU has a single size. A product group can have a list of
     * them.
     */
    sizes?: Array<string> | null;

    /**
     * Custom tags associated with the product.
     */
    tags?: Array<string> | null;

    /**
     * 3D model of the product.
     */
    three_d_model?: Array<CatalogAPI.ThreeDModel> | null;

    /**
     * The schema type.
     */
    type?: string | null;

    /**
     * Canonical URL linking to the product detail page.
     */
    url?: string | null;

    /**
     * Indicates the property or properties by which the variants in a ProductGroup
     * vary, e.g. their size, color, etc.
     */
    variesBy?: Array<string> | null;

    /**
     * Product video/videos.
     */
    videos?: Array<CatalogAPI.VideoObject> | null;
  }

  export namespace Product {
    export interface AdditionalAttributes {
      /**
       * Number attributes
       */
      numbers?: Array<number> | null;

      /**
       * Text attributes
       */
      text?: Array<string> | null;
    }

    /**
     * FKA - Formerly Known as Extracted Product
     */
    export interface HasVariant {
      /**
       * Product identifier. Can be the identifier of a SKU as well. It should not be
       * confused with any of the GTIN\* numbers.
       */
      id?: string | null;

      /**
       * Extra product attributes.
       */
      additional_attributes?: Record<string, HasVariant.AdditionalAttributes | null> | null;

      /**
       * Target group associated with the product.
       */
      audience?: CatalogAPI.Audience | null;

      /**
       * The brand or organization associated with the product.
       */
      brand?: CatalogAPI.Brand | CatalogAPI.Organization | null;

      /**
       * Breadcrumb list of the product.
       */
      breadcrumbList?: CatalogAPI.BreadcrumbList | null;

      /**
       * Catalog name, or ecommerce site name. Eg: Macys, sephora etc
       */
      catalog?: string | null;

      /**
       * Product categories.
       */
      categories?: Array<CatalogAPI.Category> | null;

      /**
       * Color of the product.
       */
      color_info?: CatalogAPI.ColorInfo | null;

      /**
       * Product description.
       */
      description?: string | null;

      /**
       * The dimensions of the product.
       */
      dimensions?: string | null;

      /**
       * Enrichment information for the product. This is generated by the product
       * information enrichment service.
       */
      enrichment?: CatalogAPI.ProductEnrichment | null;

      /**
       * Extra text field for additional information. Extracted from the web-page
       */
      extra_text?: string | null;

      /**
       * The fit of the product.
       */
      fit?: string | Array<string> | null;

      /**
       * Fulfillment information.
       */
      fulfillment_info?: Array<CatalogAPI.FulfillmentInfo> | null;

      /**
       * Global Trade Item Number. a unique identifier used to recognize and track
       * products globally in ecommerce, retail, and supply chains. It ensures that
       * products are correctly identified across different marketplaces, point-of-sale
       * (POS) systems, and logistics networks. Should not be confused with product or
       * SKU id.
       */
      gtin?: string | null;

      /**
       * Primary product image.
       */
      image?: CatalogAPI.Image | null;

      /**
       * Product image.
       */
      images?: Array<CatalogAPI.Image> | null;

      /**
       * Language of the name and description.
       */
      language_code?: string | null;

      /**
       * Material of the product.
       */
      materials?: Array<string> | null;

      /**
       * Full name or title of the product.
       */
      name?: string | null;

      /**
       * Offer or AggregateOffer for the product.
       */
      offers?: CatalogAPI.Offer | CatalogAPI.AggregateOffer | CatalogAPI.Offers | null;

      /**
       * Schema.org model for Organization.
       */
      organization?: CatalogAPI.Organization | null;

      /**
       * Pattern or graphic print of the product.
       */
      patterns?: Array<string> | null;

      /**
       * Used by Variant to refer to the productGroupID of the productGroup in which the
       * product belongs
       */
      primary_product_id?: string | null;

      /**
       * Promotions applied to the product.
       */
      promotions?: Array<CatalogAPI.Promotion> | null;

      /**
       * Product rating.
       */
      rating?: CatalogAPI.Rating | null;

      /**
       * List of reviews for the product.
       */
      review?: Array<CatalogAPI.Review> | null;

      /**
       * Size of the product. A SKU has a single size. A product group can have a list of
       * them.
       */
      sizes?: Array<string> | null;

      /**
       * Custom tags associated with the product.
       */
      tags?: Array<string> | null;

      /**
       * 3D model of the product.
       */
      three_d_model?: Array<CatalogAPI.ThreeDModel> | null;

      /**
       * The schema type.
       */
      type?: string | null;

      /**
       * Canonical URL linking to the product detail page.
       */
      url?: string | null;

      /**
       * Product video/videos.
       */
      videos?: Array<CatalogAPI.VideoObject> | null;
    }

    export namespace HasVariant {
      export interface AdditionalAttributes {
        /**
         * Number attributes
         */
        numbers?: Array<number> | null;

        /**
         * Text attributes
         */
        text?: Array<string> | null;
      }
    }
  }
}

/**
 * Schema.org 3DModel model.
 */
export interface ThreeDModel {
  /**
   * Author of the work.
   */
  author?: string | null;

  /**
   * File size in megabytes or gigabytes.
   */
  contentSize?: string | null;

  /**
   * URL to the actual content of the media object.
   */
  contentUrl?: string | null;

  context?: string;

  /**
   * The creator of the 3D model.
   */
  creator?: string | null;

  /**
   * Date of first publication.
   */
  datePublished?: string | null;

  /**
   * A URL pointing to a player for the 3D model.
   */
  embedUrl?: string | null;

  /**
   * A media object representing the 3D model.
   */
  encoding?: Array<ThreeDModel.Encoding> | null;

  /**
   * The file format of the 3D model (e.g., 'model/gltf+json').
   */
  encodingFormat?: string | null;

  /**
   * Number of interactions for the 3D model.
   */
  interactionCount?: number | null;

  /**
   * A related resource that the 3D model is based on.
   */
  isBasedOnUrl?: string | null;

  /**
   * License under which the work is published.
   */
  license?: string | null;

  /**
   * The material used to create the 3D model.
   */
  material?: string | null;

  /**
   * The name of the media object.
   */
  name?: string | null;

  /**
   * A URL pointing to the model thumbnail image.
   */
  thumbnailUrl?: Array<string> | null;

  type_?: string;

  /**
   * The date the media was uploaded.
   */
  uploadDate?: string | null;
}

export namespace ThreeDModel {
  /**
   * Schema.org MediaObject model.
   */
  export interface Encoding {
    /**
     * URL to the actual content of the media object.
     */
    contentUrl?: string | null;

    context?: string;

    /**
     * The media format or mime type.
     */
    encodingFormat?: string | null;

    /**
     * The name of the media object.
     */
    name?: string | null;

    type_?: string;

    /**
     * The date the media was uploaded.
     */
    uploadDate?: string | null;
  }
}

export interface VideoObject {
  /**
   * A URL pointing to the actual video content.
   */
  contentUrl?: string | null;

  context?: ContextEnum;

  /**
   * The description of the video.
   */
  description?: string | null;

  /**
   * The duration of the video in ISO 8601 format.
   */
  duration?: string | null;

  /**
   * A URL pointing to a player for the video.
   */
  embedUrl?: string | null;

  /**
   * The number of interactions for the video.
   */
  interactionCount?: number | null;

  /**
   * The name of the video.
   */
  name?: string | null;

  /**
   * A URL pointing to the video thumbnail image.
   */
  thumbnailUrl?: Array<string> | null;

  type?: string;

  /**
   * The date when the video was uploaded.
   */
  uploadDate?: string | null;
}

export type CatalogRetrieveFileResponse = unknown;

/**
 * Response model for file upload
 */
export interface CatalogUploadFileResponse {
  file_id: string;

  file_url?: string | null;
}

export interface CatalogAgentSearchParams {
  /**
   * Query text to be input to an LLM to generate a TextSearchQuery object
   */
  text: string;

  /**
   * The maximum number of results to return from the search.
   */
  limit?: number;
}

export interface CatalogStyleAndTagsSearchParams {
  /**
   * Query param:
   */
  type: string;

  /**
   * Body param:
   */
  styles: Array<string>;

  /**
   * Body param:
   */
  tags: Array<string>;

  /**
   * Query param:
   */
  compact_mode?: 'compact' | 'medium' | null;

  /**
   * Query param:
   */
  limit?: number;
}

export interface CatalogTextSearchParams {
  /**
   * The text is converted to a vector embedding and used to search for products in
   * the e-commerce catalog with pre-computed product embeddings.
   */
  text: string;

  /**
   * Facets that will be excluded from the search results.
   */
  exclusion_facets?: Array<Facet> | null;

  /**
   * The search results will be filtered by the specified facets.
   */
  facets?: Array<Facet> | null;

  /**
   * The maximum number of results to return from the search. The default is 10.
   */
  limit?: number;

  /**
   * The products will be filtered to have a price less than or equal to the
   * specified value.
   */
  price_max?: number | null;

  /**
   * The products will be filtered to have a price greater than or equal to the
   * specified value.
   */
  price_min?: number | null;

  /**
   * The column to use for the ranking embedding. The default is 'embedding'.
   */
  ranking_embedding_column?: string;

  /**
   * The text is converted to a vector embedding and used to rank the search results.
   */
  ranking_text?: string | null;

  /**
   * The column to use for the retrieval embedding. The default is 'embedding'.
   */
  retrieval_embedding_column?: string;
}

export interface CatalogUploadFileParams {
  file: Uploadable;
}

export declare namespace Catalog {
  export {
    type AggregateOffer as AggregateOffer,
    type Audience as Audience,
    type Brand as Brand,
    type BreadcrumbList as BreadcrumbList,
    type Category as Category,
    type ColorInfo as ColorInfo,
    type ContextEnum as ContextEnum,
    type Facet as Facet,
    type FulfillmentInfo as FulfillmentInfo,
    type Image as Image,
    type Offer as Offer,
    type Offers as Offers,
    type Organization as Organization,
    type ProductEnrichment as ProductEnrichment,
    type Promotion as Promotion,
    type QuantitativeValue as QuantitativeValue,
    type Rating as Rating,
    type Review as Review,
    type SearchToolOutput as SearchToolOutput,
    type ThreeDModel as ThreeDModel,
    type VideoObject as VideoObject,
    type CatalogRetrieveFileResponse as CatalogRetrieveFileResponse,
    type CatalogUploadFileResponse as CatalogUploadFileResponse,
    type CatalogAgentSearchParams as CatalogAgentSearchParams,
    type CatalogStyleAndTagsSearchParams as CatalogStyleAndTagsSearchParams,
    type CatalogTextSearchParams as CatalogTextSearchParams,
    type CatalogUploadFileParams as CatalogUploadFileParams,
  };
}
