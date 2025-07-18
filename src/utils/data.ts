export interface Data {
    id:                       string;
    slug:                     string;
    alternative_slugs:        AlternativeSlugs;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              null;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              null | string;
    alt_description:          null | string;
    breadcrumbs:              any[];
    urls:                     Urls;
    links:                    DatumLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              Sponsorship | null;
    topic_submissions:        TopicSubmissions;
    asset_type:               AssetType;
    user:                     User;
}

export interface AlternativeSlugs {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
    id: string;
}

export type AssetType = "photo"


export interface DatumLinks {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Sponsorship {
    impression_urls: any[];
    tagline:         string;
    tagline_url:     string;
    sponsor:         User;
}

export interface User {
    id:                           string;
    updated_at:                   Date;
    username:                     string;
    name:                         string;
    first_name:                   string;
    last_name:                    null | string;
    twitter_username:             null | string;
    portfolio_url:                null | string;
    bio:                          null | string;
    location:                     null | string;
    links:                        UserLinks;
    profile_image:                ProfileImage;
    instagram_username:           null | string;
    total_collections:            number;
    total_likes:                  number;
    total_photos:                 number;
    total_promoted_photos:        number;
    total_illustrations:          number;
    total_promoted_illustrations: number;
    accepted_tos:                 boolean;
    for_hire:                     boolean;
    social:                       Social;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: null | string;
    portfolio_url:      null | string;
    twitter_username:   null | string;
    paypal_email:       null;
}

export interface TopicSubmissions {
    people?:       The3DRenders;
    "3d-renders"?: The3DRenders;
    film?:         Film;
    travel?:       Film;
}

export interface The3DRenders {
    status: string;
}

export interface Film {
    status:       string;
    approved_on?: Date;
}

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface CollectionsData {
    id:                             string;
    slug:                           string;
    title:                          string;
    description:                    string;
    published_at:                   Date;
    updated_at:                     Date;
    starts_at:                      Date;
    ends_at:                        null;
    only_submissions_after:         null;
    visibility:                     Visibility;
    featured:                       boolean;
    total_photos:                   number;
    current_user_contributions:     any[];
    total_current_user_submissions: null;
    links:                          CollectionLinks;
    media_types:                    Type[];
    status:                         CollectionStatus;
    owners:                         Owner[];
    cover_photo:                    CoverPhoto;
    preview_photos:                 PreviewPhoto[];
}

export interface CoverPhoto {
    id:                       string;
    slug:                     string;
    alternative_slugs:        AlternativeSlugs;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date | null;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              null | string;
    alt_description:          string;
    breadcrumbs:              Breadcrumb[];
    urls:                     Urls;
    links:                    CoverPhotoLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        TopicSubmissions;
    asset_type:               Type;
    premium:                  boolean;
    plus:                     boolean;
    user:                     User;
}

export interface AlternativeSlugs {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
    id: string;
}

export type Type = "photo";

export interface Breadcrumb {
    title: string;
}

export interface CoverPhotoLinks {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface TopicSubmissions {
    wallpapers?:              The3DRenders;
    travel?:                  Film;
    nature?:                  The3DRenders;
    "3d-renders"?:            The3DRenders;
    experimental?:            The3DRenders;
    "textures-patterns"?:     The3DRenders;
    film?:                    Film;
    people?:                  The3DRenders;
    "architecture-interior"?: The3DRenders;
    "street-photography"?:    The3DRenders;
    sports?:                  The3DRenders;
}

// Removed The3_DRenders interface as it is now unified with The3DRenders.

export type The3DRendersStatus = "approved" | "rejected";

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface User {
    id:                           string;
    updated_at:                   Date;
    username:                     string;
    name:                         string;
    first_name:                   string;
    last_name:                    string | null
    twitter_username:             string | null;
    portfolio_url:                null | string;
    bio:                          null | string;
    location:                     null | string;
    links:                        UserLinks;
    profile_image:                ProfileImage;
    instagram_username:           null | string;
    total_collections:            number;
    total_likes:                  number;
    total_photos:                 number;
    total_promoted_photos:        number;
    total_illustrations:          number;
    total_promoted_illustrations: number;
    accepted_tos:                 boolean;
    for_hire:                     boolean;
    social:                       Social;
}

export interface UserLinks {
    self:       string;
    html:       string;
    photos:     string;
    likes:      string;
    portfolio:  string;
    following?: string;
    followers?: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: null | string;
    portfolio_url:      null | string;
    twitter_username:   string | null;
    paypal_email:       null;
}

export type Username = "HutschSimone" | "joshua_earle" | "unsplash";

export interface CollectionLinks {
    self:   string;
    html:   string;
    photos: string;
}

export interface Owner {
    id:                           ID;
    updated_at:                   Date;
    username:                     Username;
    name:                         Name;
    first_name:                   Name;
    last_name:                    null;
    twitter_username:             string;
    portfolio_url:                string;
    bio:                          string;
    location:                     Location;
    links:                        OwnerLinks;
    profile_image:                ProfileImage;
    instagram_username:           Username;
    total_collections:            number;
    total_likes:                  number;
    total_photos:                 number;
    total_promoted_photos:        number;
    total_illustrations:          number;
    total_promoted_illustrations: number;
    accepted_tos:                 boolean;
    for_hire:                     boolean;
    social:                       Social;
}

export type Name = "Unsplash";

export type ID = "QV5S1rtoUJ0";

export interface OwnerLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
}

export type Location = "Montreal, Canada";

export interface PreviewPhoto {
    id:         string;
    slug:       string;
    created_at: Date;
    updated_at: Date;
    blur_hash:  string;
    asset_type: Type;
    urls:       Urls;
}

export type CollectionStatus = "open";

export type Visibility = "featured";