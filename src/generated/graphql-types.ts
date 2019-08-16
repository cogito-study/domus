export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  Url = 'url',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
}

export type FileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  id: Scalars['ID'];
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Id = 'id',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type PrismicAbout = Node & {
  __typename?: 'PrismicAbout';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  data?: Maybe<PrismicAboutData>;
  prismicId?: Maybe<Scalars['String']>;
  dataString?: Maybe<Scalars['String']>;
};

export type PrismicAboutFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicAboutLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyAchievements = Node & {
  __typename?: 'PrismicAboutBodyAchievements';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicAboutBodyAchievementsPrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyAchievementsConnection = {
  __typename?: 'PrismicAboutBodyAchievementsConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutBodyAchievementsEdge>;
  nodes: Array<PrismicAboutBodyAchievements>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicAboutBodyAchievementsGroupConnection>;
};

export type PrismicAboutBodyAchievementsConnectionDistinctArgs = {
  field: PrismicAboutBodyAchievementsFieldsEnum;
};

export type PrismicAboutBodyAchievementsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicAboutBodyAchievementsFieldsEnum;
};

export type PrismicAboutBodyAchievementsEdge = {
  __typename?: 'PrismicAboutBodyAchievementsEdge';
  next?: Maybe<PrismicAboutBodyAchievements>;
  node: PrismicAboutBodyAchievements;
  previous?: Maybe<PrismicAboutBodyAchievements>;
};

export enum PrismicAboutBodyAchievementsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryNameHtml = 'primary___name___html',
  PrimaryNameText = 'primary___name___text',
  PrimaryNameRaw = 'primary___name___raw',
  PrimaryNameRawType = 'primary___name___raw___type',
  PrimaryNameRawText = 'primary___name___raw___text',
  PrimaryDescriptionHtml = 'primary___description___html',
  PrimaryDescriptionText = 'primary___description___text',
  PrimaryDescriptionRaw = 'primary___description___raw',
  PrimaryDescriptionRawType = 'primary___description___raw___type',
  PrimaryDescriptionRawText = 'primary___description___raw___text',
  PrimaryIconDimensionsWidth = 'primary___icon___dimensions___width',
  PrimaryIconDimensionsHeight = 'primary___icon___dimensions___height',
  PrimaryIconAlt = 'primary___icon___alt',
  PrimaryIconCopyright = 'primary___icon___copyright',
  PrimaryIconUrl = 'primary___icon___url',
  PrimaryIconLocalFileId = 'primary___icon___localFile___id',
  PrimaryIconLocalFileChildren = 'primary___icon___localFile___children',
  PrimaryIconLocalFileSourceInstanceName = 'primary___icon___localFile___sourceInstanceName',
  PrimaryIconLocalFileAbsolutePath = 'primary___icon___localFile___absolutePath',
  PrimaryIconLocalFileRelativePath = 'primary___icon___localFile___relativePath',
  PrimaryIconLocalFileExtension = 'primary___icon___localFile___extension',
  PrimaryIconLocalFileSize = 'primary___icon___localFile___size',
  PrimaryIconLocalFilePrettySize = 'primary___icon___localFile___prettySize',
  PrimaryIconLocalFileModifiedTime = 'primary___icon___localFile___modifiedTime',
  PrimaryIconLocalFileAccessTime = 'primary___icon___localFile___accessTime',
  PrimaryIconLocalFileChangeTime = 'primary___icon___localFile___changeTime',
  PrimaryIconLocalFileBirthTime = 'primary___icon___localFile___birthTime',
  PrimaryIconLocalFileRoot = 'primary___icon___localFile___root',
  PrimaryIconLocalFileDir = 'primary___icon___localFile___dir',
  PrimaryIconLocalFileBase = 'primary___icon___localFile___base',
  PrimaryIconLocalFileExt = 'primary___icon___localFile___ext',
  PrimaryIconLocalFileName = 'primary___icon___localFile___name',
  PrimaryIconLocalFileRelativeDirectory = 'primary___icon___localFile___relativeDirectory',
  PrimaryIconLocalFileDev = 'primary___icon___localFile___dev',
  PrimaryIconLocalFileMode = 'primary___icon___localFile___mode',
  PrimaryIconLocalFileNlink = 'primary___icon___localFile___nlink',
  PrimaryIconLocalFileUid = 'primary___icon___localFile___uid',
  PrimaryIconLocalFileGid = 'primary___icon___localFile___gid',
  PrimaryIconLocalFileRdev = 'primary___icon___localFile___rdev',
  PrimaryIconLocalFileBlksize = 'primary___icon___localFile___blksize',
  PrimaryIconLocalFileIno = 'primary___icon___localFile___ino',
  PrimaryIconLocalFileBlocks = 'primary___icon___localFile___blocks',
  PrimaryIconLocalFileAtimeMs = 'primary___icon___localFile___atimeMs',
  PrimaryIconLocalFileMtimeMs = 'primary___icon___localFile___mtimeMs',
  PrimaryIconLocalFileCtimeMs = 'primary___icon___localFile___ctimeMs',
  PrimaryIconLocalFileBirthtimeMs = 'primary___icon___localFile___birthtimeMs',
  PrimaryIconLocalFileAtime = 'primary___icon___localFile___atime',
  PrimaryIconLocalFileMtime = 'primary___icon___localFile___mtime',
  PrimaryIconLocalFileCtime = 'primary___icon___localFile___ctime',
  PrimaryIconLocalFileBirthtime = 'primary___icon___localFile___birthtime',
  PrimaryIconLocalFileUrl = 'primary___icon___localFile___url',
  PrismicId = 'prismicId',
}

export type PrismicAboutBodyAchievementsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicAboutBodyAchievementsPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyAchievementsGroupConnection = {
  __typename?: 'PrismicAboutBodyAchievementsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutBodyAchievementsEdge>;
  nodes: Array<PrismicAboutBodyAchievements>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyAchievementsPrimary = {
  __typename?: 'PrismicAboutBodyAchievementsPrimary';
  name?: Maybe<PrismicAboutBodyAchievementsPrimaryName>;
  description?: Maybe<PrismicAboutBodyAchievementsPrimaryDescription>;
  icon?: Maybe<PrismicAboutBodyAchievementsPrimaryIcon>;
};

export type PrismicAboutBodyAchievementsPrimaryDescription = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryDescription';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutBodyAchievementsPrimaryDescriptionRaw>>>;
};

export type PrismicAboutBodyAchievementsPrimaryDescriptionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutBodyAchievementsPrimaryDescriptionRawFilterListInput>;
};

export type PrismicAboutBodyAchievementsPrimaryDescriptionRaw = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryDescriptionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyAchievementsPrimaryDescriptionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyAchievementsPrimaryDescriptionRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutBodyAchievementsPrimaryDescriptionRawFilterInput>;
};

export type PrismicAboutBodyAchievementsPrimaryFilterInput = {
  name?: Maybe<PrismicAboutBodyAchievementsPrimaryNameFilterInput>;
  description?: Maybe<PrismicAboutBodyAchievementsPrimaryDescriptionFilterInput>;
  icon?: Maybe<PrismicAboutBodyAchievementsPrimaryIconFilterInput>;
};

export type PrismicAboutBodyAchievementsPrimaryIcon = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryIcon';
  dimensions?: Maybe<PrismicAboutBodyAchievementsPrimaryIconDimensions>;
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type PrismicAboutBodyAchievementsPrimaryIconDimensions = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryIconDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicAboutBodyAchievementsPrimaryIconDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicAboutBodyAchievementsPrimaryIconFilterInput = {
  dimensions?: Maybe<PrismicAboutBodyAchievementsPrimaryIconDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicAboutBodyAchievementsPrimaryName = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryName';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutBodyAchievementsPrimaryNameRaw>>>;
};

export type PrismicAboutBodyAchievementsPrimaryNameFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutBodyAchievementsPrimaryNameRawFilterListInput>;
};

export type PrismicAboutBodyAchievementsPrimaryNameRaw = {
  __typename?: 'PrismicAboutBodyAchievementsPrimaryNameRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyAchievementsPrimaryNameRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyAchievementsPrimaryNameRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutBodyAchievementsPrimaryNameRawFilterInput>;
};

export type PrismicAboutBodyAchievementsPrismicAboutBodyProfileUnion =
  | PrismicAboutBodyAchievements
  | PrismicAboutBodyProfile;

export type PrismicAboutBodyAchievementsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicAboutBodyAchievementsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicAboutBodyProfile = Node & {
  __typename?: 'PrismicAboutBodyProfile';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicAboutBodyProfilePrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyProfileConnection = {
  __typename?: 'PrismicAboutBodyProfileConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutBodyProfileEdge>;
  nodes: Array<PrismicAboutBodyProfile>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicAboutBodyProfileGroupConnection>;
};

export type PrismicAboutBodyProfileConnectionDistinctArgs = {
  field: PrismicAboutBodyProfileFieldsEnum;
};

export type PrismicAboutBodyProfileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicAboutBodyProfileFieldsEnum;
};

export type PrismicAboutBodyProfileEdge = {
  __typename?: 'PrismicAboutBodyProfileEdge';
  next?: Maybe<PrismicAboutBodyProfile>;
  node: PrismicAboutBodyProfile;
  previous?: Maybe<PrismicAboutBodyProfile>;
};

export enum PrismicAboutBodyProfileFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryNameHtml = 'primary___name___html',
  PrimaryNameText = 'primary___name___text',
  PrimaryNameRaw = 'primary___name___raw',
  PrimaryNameRawType = 'primary___name___raw___type',
  PrimaryNameRawText = 'primary___name___raw___text',
  PrimaryPositionHtml = 'primary___position___html',
  PrimaryPositionText = 'primary___position___text',
  PrimaryPositionRaw = 'primary___position___raw',
  PrimaryPositionRawType = 'primary___position___raw___type',
  PrimaryPositionRawText = 'primary___position___raw___text',
  PrimaryImageDimensionsWidth = 'primary___image___dimensions___width',
  PrimaryImageDimensionsHeight = 'primary___image___dimensions___height',
  PrimaryImageAlt = 'primary___image___alt',
  PrimaryImageCopyright = 'primary___image___copyright',
  PrimaryImageUrl = 'primary___image___url',
  PrimaryImageLocalFileId = 'primary___image___localFile___id',
  PrimaryImageLocalFileChildren = 'primary___image___localFile___children',
  PrimaryImageLocalFileSourceInstanceName = 'primary___image___localFile___sourceInstanceName',
  PrimaryImageLocalFileAbsolutePath = 'primary___image___localFile___absolutePath',
  PrimaryImageLocalFileRelativePath = 'primary___image___localFile___relativePath',
  PrimaryImageLocalFileExtension = 'primary___image___localFile___extension',
  PrimaryImageLocalFileSize = 'primary___image___localFile___size',
  PrimaryImageLocalFilePrettySize = 'primary___image___localFile___prettySize',
  PrimaryImageLocalFileModifiedTime = 'primary___image___localFile___modifiedTime',
  PrimaryImageLocalFileAccessTime = 'primary___image___localFile___accessTime',
  PrimaryImageLocalFileChangeTime = 'primary___image___localFile___changeTime',
  PrimaryImageLocalFileBirthTime = 'primary___image___localFile___birthTime',
  PrimaryImageLocalFileRoot = 'primary___image___localFile___root',
  PrimaryImageLocalFileDir = 'primary___image___localFile___dir',
  PrimaryImageLocalFileBase = 'primary___image___localFile___base',
  PrimaryImageLocalFileExt = 'primary___image___localFile___ext',
  PrimaryImageLocalFileName = 'primary___image___localFile___name',
  PrimaryImageLocalFileRelativeDirectory = 'primary___image___localFile___relativeDirectory',
  PrimaryImageLocalFileDev = 'primary___image___localFile___dev',
  PrimaryImageLocalFileMode = 'primary___image___localFile___mode',
  PrimaryImageLocalFileNlink = 'primary___image___localFile___nlink',
  PrimaryImageLocalFileUid = 'primary___image___localFile___uid',
  PrimaryImageLocalFileGid = 'primary___image___localFile___gid',
  PrimaryImageLocalFileRdev = 'primary___image___localFile___rdev',
  PrimaryImageLocalFileBlksize = 'primary___image___localFile___blksize',
  PrimaryImageLocalFileIno = 'primary___image___localFile___ino',
  PrimaryImageLocalFileBlocks = 'primary___image___localFile___blocks',
  PrimaryImageLocalFileAtimeMs = 'primary___image___localFile___atimeMs',
  PrimaryImageLocalFileMtimeMs = 'primary___image___localFile___mtimeMs',
  PrimaryImageLocalFileCtimeMs = 'primary___image___localFile___ctimeMs',
  PrimaryImageLocalFileBirthtimeMs = 'primary___image___localFile___birthtimeMs',
  PrimaryImageLocalFileAtime = 'primary___image___localFile___atime',
  PrimaryImageLocalFileMtime = 'primary___image___localFile___mtime',
  PrimaryImageLocalFileCtime = 'primary___image___localFile___ctime',
  PrimaryImageLocalFileBirthtime = 'primary___image___localFile___birthtime',
  PrimaryImageLocalFileUrl = 'primary___image___localFile___url',
  PrismicId = 'prismicId',
}

export type PrismicAboutBodyProfileFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicAboutBodyProfilePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyProfileGroupConnection = {
  __typename?: 'PrismicAboutBodyProfileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutBodyProfileEdge>;
  nodes: Array<PrismicAboutBodyProfile>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyProfilePrimary = {
  __typename?: 'PrismicAboutBodyProfilePrimary';
  name?: Maybe<PrismicAboutBodyProfilePrimaryName>;
  position?: Maybe<PrismicAboutBodyProfilePrimaryPosition>;
  image?: Maybe<PrismicAboutBodyProfilePrimaryImage>;
};

export type PrismicAboutBodyProfilePrimaryFilterInput = {
  name?: Maybe<PrismicAboutBodyProfilePrimaryNameFilterInput>;
  position?: Maybe<PrismicAboutBodyProfilePrimaryPositionFilterInput>;
  image?: Maybe<PrismicAboutBodyProfilePrimaryImageFilterInput>;
};

export type PrismicAboutBodyProfilePrimaryImage = {
  __typename?: 'PrismicAboutBodyProfilePrimaryImage';
  dimensions?: Maybe<PrismicAboutBodyProfilePrimaryImageDimensions>;
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type PrismicAboutBodyProfilePrimaryImageDimensions = {
  __typename?: 'PrismicAboutBodyProfilePrimaryImageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicAboutBodyProfilePrimaryImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicAboutBodyProfilePrimaryImageFilterInput = {
  dimensions?: Maybe<PrismicAboutBodyProfilePrimaryImageDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicAboutBodyProfilePrimaryName = {
  __typename?: 'PrismicAboutBodyProfilePrimaryName';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutBodyProfilePrimaryNameRaw>>>;
};

export type PrismicAboutBodyProfilePrimaryNameFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutBodyProfilePrimaryNameRawFilterListInput>;
};

export type PrismicAboutBodyProfilePrimaryNameRaw = {
  __typename?: 'PrismicAboutBodyProfilePrimaryNameRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyProfilePrimaryNameRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyProfilePrimaryNameRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutBodyProfilePrimaryNameRawFilterInput>;
};

export type PrismicAboutBodyProfilePrimaryPosition = {
  __typename?: 'PrismicAboutBodyProfilePrimaryPosition';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutBodyProfilePrimaryPositionRaw>>>;
};

export type PrismicAboutBodyProfilePrimaryPositionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutBodyProfilePrimaryPositionRawFilterListInput>;
};

export type PrismicAboutBodyProfilePrimaryPositionRaw = {
  __typename?: 'PrismicAboutBodyProfilePrimaryPositionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutBodyProfilePrimaryPositionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutBodyProfilePrimaryPositionRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutBodyProfilePrimaryPositionRawFilterInput>;
};

export type PrismicAboutBodyProfileSortInput = {
  fields?: Maybe<Array<Maybe<PrismicAboutBodyProfileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicAboutConnection = {
  __typename?: 'PrismicAboutConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutEdge>;
  nodes: Array<PrismicAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicAboutGroupConnection>;
};

export type PrismicAboutConnectionDistinctArgs = {
  field: PrismicAboutFieldsEnum;
};

export type PrismicAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicAboutFieldsEnum;
};

export type PrismicAboutData = {
  __typename?: 'PrismicAboutData';
  title?: Maybe<PrismicAboutDataTitle>;
  subtitle?: Maybe<PrismicAboutDataSubtitle>;
  achievement_header?: Maybe<PrismicAboutDataAchievement_Header>;
  body?: Maybe<Array<Maybe<PrismicAboutBodyAchievementsPrismicAboutBodyProfileUnion>>>;
};

export type PrismicAboutDataAchievement_Header = {
  __typename?: 'PrismicAboutDataAchievement_header';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutDataAchievement_HeaderRaw>>>;
};

export type PrismicAboutDataAchievement_HeaderFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutDataAchievement_HeaderRawFilterListInput>;
};

export type PrismicAboutDataAchievement_HeaderRaw = {
  __typename?: 'PrismicAboutDataAchievement_headerRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutDataAchievement_HeaderRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutDataAchievement_HeaderRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutDataAchievement_HeaderRawFilterInput>;
};

export type PrismicAboutDataFilterInput = {
  title?: Maybe<PrismicAboutDataTitleFilterInput>;
  subtitle?: Maybe<PrismicAboutDataSubtitleFilterInput>;
  achievement_header?: Maybe<PrismicAboutDataAchievement_HeaderFilterInput>;
};

export type PrismicAboutDataSubtitle = {
  __typename?: 'PrismicAboutDataSubtitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutDataSubtitleRaw>>>;
};

export type PrismicAboutDataSubtitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutDataSubtitleRawFilterListInput>;
};

export type PrismicAboutDataSubtitleRaw = {
  __typename?: 'PrismicAboutDataSubtitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutDataSubtitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutDataSubtitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutDataSubtitleRawFilterInput>;
};

export type PrismicAboutDataTitle = {
  __typename?: 'PrismicAboutDataTitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicAboutDataTitleRaw>>>;
};

export type PrismicAboutDataTitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicAboutDataTitleRawFilterListInput>;
};

export type PrismicAboutDataTitleRaw = {
  __typename?: 'PrismicAboutDataTitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicAboutDataTitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutDataTitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicAboutDataTitleRawFilterInput>;
};

export type PrismicAboutEdge = {
  __typename?: 'PrismicAboutEdge';
  next?: Maybe<PrismicAbout>;
  node: PrismicAbout;
  previous?: Maybe<PrismicAbout>;
};

export enum PrismicAboutFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataTitleRawType = 'data___title___raw___type',
  DataTitleRawText = 'data___title___raw___text',
  DataSubtitleHtml = 'data___subtitle___html',
  DataSubtitleText = 'data___subtitle___text',
  DataSubtitleRaw = 'data___subtitle___raw',
  DataSubtitleRawType = 'data___subtitle___raw___type',
  DataSubtitleRawText = 'data___subtitle___raw___text',
  DataAchievementHeaderHtml = 'data___achievement_header___html',
  DataAchievementHeaderText = 'data___achievement_header___text',
  DataAchievementHeaderRaw = 'data___achievement_header___raw',
  DataAchievementHeaderRawType = 'data___achievement_header___raw___type',
  DataAchievementHeaderRawText = 'data___achievement_header___raw___text',
  PrismicId = 'prismicId',
  DataString = 'dataString',
}

export type PrismicAboutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicAboutDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
};

export type PrismicAboutGroupConnection = {
  __typename?: 'PrismicAboutGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicAboutEdge>;
  nodes: Array<PrismicAbout>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicAboutSortInput = {
  fields?: Maybe<Array<Maybe<PrismicAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHome = Node & {
  __typename?: 'PrismicHome';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  first_publication_date?: Maybe<Scalars['Date']>;
  last_publication_date?: Maybe<Scalars['Date']>;
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  data?: Maybe<PrismicHomeData>;
  prismicId?: Maybe<Scalars['String']>;
  dataString?: Maybe<Scalars['String']>;
};

export type PrismicHomeFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyCustomer = Node & {
  __typename?: 'PrismicHomeBodyCustomer';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyCustomerPrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyCustomerConnection = {
  __typename?: 'PrismicHomeBodyCustomerConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyCustomerEdge>;
  nodes: Array<PrismicHomeBodyCustomer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyCustomerGroupConnection>;
};

export type PrismicHomeBodyCustomerConnectionDistinctArgs = {
  field: PrismicHomeBodyCustomerFieldsEnum;
};

export type PrismicHomeBodyCustomerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyCustomerFieldsEnum;
};

export type PrismicHomeBodyCustomerEdge = {
  __typename?: 'PrismicHomeBodyCustomerEdge';
  next?: Maybe<PrismicHomeBodyCustomer>;
  node: PrismicHomeBodyCustomer;
  previous?: Maybe<PrismicHomeBodyCustomer>;
};

export enum PrismicHomeBodyCustomerFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryNameHtml = 'primary___name___html',
  PrimaryNameText = 'primary___name___text',
  PrimaryNameRaw = 'primary___name___raw',
  PrimaryNameRawType = 'primary___name___raw___type',
  PrimaryNameRawText = 'primary___name___raw___text',
  PrimaryIconDimensionsWidth = 'primary___icon___dimensions___width',
  PrimaryIconDimensionsHeight = 'primary___icon___dimensions___height',
  PrimaryIconAlt = 'primary___icon___alt',
  PrimaryIconCopyright = 'primary___icon___copyright',
  PrimaryIconUrl = 'primary___icon___url',
  PrimaryIconLocalFileId = 'primary___icon___localFile___id',
  PrimaryIconLocalFileChildren = 'primary___icon___localFile___children',
  PrimaryIconLocalFileSourceInstanceName = 'primary___icon___localFile___sourceInstanceName',
  PrimaryIconLocalFileAbsolutePath = 'primary___icon___localFile___absolutePath',
  PrimaryIconLocalFileRelativePath = 'primary___icon___localFile___relativePath',
  PrimaryIconLocalFileExtension = 'primary___icon___localFile___extension',
  PrimaryIconLocalFileSize = 'primary___icon___localFile___size',
  PrimaryIconLocalFilePrettySize = 'primary___icon___localFile___prettySize',
  PrimaryIconLocalFileModifiedTime = 'primary___icon___localFile___modifiedTime',
  PrimaryIconLocalFileAccessTime = 'primary___icon___localFile___accessTime',
  PrimaryIconLocalFileChangeTime = 'primary___icon___localFile___changeTime',
  PrimaryIconLocalFileBirthTime = 'primary___icon___localFile___birthTime',
  PrimaryIconLocalFileRoot = 'primary___icon___localFile___root',
  PrimaryIconLocalFileDir = 'primary___icon___localFile___dir',
  PrimaryIconLocalFileBase = 'primary___icon___localFile___base',
  PrimaryIconLocalFileExt = 'primary___icon___localFile___ext',
  PrimaryIconLocalFileName = 'primary___icon___localFile___name',
  PrimaryIconLocalFileRelativeDirectory = 'primary___icon___localFile___relativeDirectory',
  PrimaryIconLocalFileDev = 'primary___icon___localFile___dev',
  PrimaryIconLocalFileMode = 'primary___icon___localFile___mode',
  PrimaryIconLocalFileNlink = 'primary___icon___localFile___nlink',
  PrimaryIconLocalFileUid = 'primary___icon___localFile___uid',
  PrimaryIconLocalFileGid = 'primary___icon___localFile___gid',
  PrimaryIconLocalFileRdev = 'primary___icon___localFile___rdev',
  PrimaryIconLocalFileBlksize = 'primary___icon___localFile___blksize',
  PrimaryIconLocalFileIno = 'primary___icon___localFile___ino',
  PrimaryIconLocalFileBlocks = 'primary___icon___localFile___blocks',
  PrimaryIconLocalFileAtimeMs = 'primary___icon___localFile___atimeMs',
  PrimaryIconLocalFileMtimeMs = 'primary___icon___localFile___mtimeMs',
  PrimaryIconLocalFileCtimeMs = 'primary___icon___localFile___ctimeMs',
  PrimaryIconLocalFileBirthtimeMs = 'primary___icon___localFile___birthtimeMs',
  PrimaryIconLocalFileAtime = 'primary___icon___localFile___atime',
  PrimaryIconLocalFileMtime = 'primary___icon___localFile___mtime',
  PrimaryIconLocalFileCtime = 'primary___icon___localFile___ctime',
  PrimaryIconLocalFileBirthtime = 'primary___icon___localFile___birthtime',
  PrimaryIconLocalFileUrl = 'primary___icon___localFile___url',
  PrismicId = 'prismicId',
}

export type PrismicHomeBodyCustomerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyCustomerPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyCustomerGroupConnection = {
  __typename?: 'PrismicHomeBodyCustomerGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyCustomerEdge>;
  nodes: Array<PrismicHomeBodyCustomer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyCustomerPrimary = {
  __typename?: 'PrismicHomeBodyCustomerPrimary';
  name?: Maybe<PrismicHomeBodyCustomerPrimaryName>;
  icon?: Maybe<PrismicHomeBodyCustomerPrimaryIcon>;
};

export type PrismicHomeBodyCustomerPrimaryFilterInput = {
  name?: Maybe<PrismicHomeBodyCustomerPrimaryNameFilterInput>;
  icon?: Maybe<PrismicHomeBodyCustomerPrimaryIconFilterInput>;
};

export type PrismicHomeBodyCustomerPrimaryIcon = {
  __typename?: 'PrismicHomeBodyCustomerPrimaryIcon';
  dimensions?: Maybe<PrismicHomeBodyCustomerPrimaryIconDimensions>;
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type PrismicHomeBodyCustomerPrimaryIconDimensions = {
  __typename?: 'PrismicHomeBodyCustomerPrimaryIconDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeBodyCustomerPrimaryIconDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeBodyCustomerPrimaryIconFilterInput = {
  dimensions?: Maybe<PrismicHomeBodyCustomerPrimaryIconDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicHomeBodyCustomerPrimaryName = {
  __typename?: 'PrismicHomeBodyCustomerPrimaryName';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyCustomerPrimaryNameRaw>>>;
};

export type PrismicHomeBodyCustomerPrimaryNameFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyCustomerPrimaryNameRawFilterListInput>;
};

export type PrismicHomeBodyCustomerPrimaryNameRaw = {
  __typename?: 'PrismicHomeBodyCustomerPrimaryNameRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyCustomerPrimaryNameRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyCustomerPrimaryNameRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyCustomerPrimaryNameRawFilterInput>;
};

export type PrismicHomeBodyCustomerPrismicHomeBodyFeaturePrismicHomeBodyPartnerPrismicHomeBodyTryOutPrismicHomeBodyUseCaseUnion =
  | PrismicHomeBodyCustomer
  | PrismicHomeBodyFeature
  | PrismicHomeBodyPartner
  | PrismicHomeBodyTryOut
  | PrismicHomeBodyUseCase;

export type PrismicHomeBodyCustomerSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyCustomerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodyFeature = Node & {
  __typename?: 'PrismicHomeBodyFeature';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyFeaturePrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeatureConnection = {
  __typename?: 'PrismicHomeBodyFeatureConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyFeatureEdge>;
  nodes: Array<PrismicHomeBodyFeature>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyFeatureGroupConnection>;
};

export type PrismicHomeBodyFeatureConnectionDistinctArgs = {
  field: PrismicHomeBodyFeatureFieldsEnum;
};

export type PrismicHomeBodyFeatureConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyFeatureFieldsEnum;
};

export type PrismicHomeBodyFeatureEdge = {
  __typename?: 'PrismicHomeBodyFeatureEdge';
  next?: Maybe<PrismicHomeBodyFeature>;
  node: PrismicHomeBodyFeature;
  previous?: Maybe<PrismicHomeBodyFeature>;
};

export enum PrismicHomeBodyFeatureFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryTitleHtml = 'primary___title___html',
  PrimaryTitleText = 'primary___title___text',
  PrimaryTitleRaw = 'primary___title___raw',
  PrimaryTitleRawType = 'primary___title___raw___type',
  PrimaryTitleRawText = 'primary___title___raw___text',
  PrimaryDescriptionHtml = 'primary___description___html',
  PrimaryDescriptionText = 'primary___description___text',
  PrimaryDescriptionRaw = 'primary___description___raw',
  PrimaryDescriptionRawType = 'primary___description___raw___type',
  PrimaryDescriptionRawText = 'primary___description___raw___text',
  PrismicId = 'prismicId',
}

export type PrismicHomeBodyFeatureFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyFeaturePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyFeatureGroupConnection = {
  __typename?: 'PrismicHomeBodyFeatureGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyFeatureEdge>;
  nodes: Array<PrismicHomeBodyFeature>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeaturePrimary = {
  __typename?: 'PrismicHomeBodyFeaturePrimary';
  title?: Maybe<PrismicHomeBodyFeaturePrimaryTitle>;
  description?: Maybe<PrismicHomeBodyFeaturePrimaryDescription>;
};

export type PrismicHomeBodyFeaturePrimaryDescription = {
  __typename?: 'PrismicHomeBodyFeaturePrimaryDescription';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyFeaturePrimaryDescriptionRaw>>>;
};

export type PrismicHomeBodyFeaturePrimaryDescriptionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyFeaturePrimaryDescriptionRawFilterListInput>;
};

export type PrismicHomeBodyFeaturePrimaryDescriptionRaw = {
  __typename?: 'PrismicHomeBodyFeaturePrimaryDescriptionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeaturePrimaryDescriptionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyFeaturePrimaryDescriptionRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyFeaturePrimaryDescriptionRawFilterInput>;
};

export type PrismicHomeBodyFeaturePrimaryFilterInput = {
  title?: Maybe<PrismicHomeBodyFeaturePrimaryTitleFilterInput>;
  description?: Maybe<PrismicHomeBodyFeaturePrimaryDescriptionFilterInput>;
};

export type PrismicHomeBodyFeaturePrimaryTitle = {
  __typename?: 'PrismicHomeBodyFeaturePrimaryTitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyFeaturePrimaryTitleRaw>>>;
};

export type PrismicHomeBodyFeaturePrimaryTitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyFeaturePrimaryTitleRawFilterListInput>;
};

export type PrismicHomeBodyFeaturePrimaryTitleRaw = {
  __typename?: 'PrismicHomeBodyFeaturePrimaryTitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyFeaturePrimaryTitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyFeaturePrimaryTitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyFeaturePrimaryTitleRawFilterInput>;
};

export type PrismicHomeBodyFeatureSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyFeatureFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodyPartner = Node & {
  __typename?: 'PrismicHomeBodyPartner';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyPartnerPrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyPartnerConnection = {
  __typename?: 'PrismicHomeBodyPartnerConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyPartnerEdge>;
  nodes: Array<PrismicHomeBodyPartner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyPartnerGroupConnection>;
};

export type PrismicHomeBodyPartnerConnectionDistinctArgs = {
  field: PrismicHomeBodyPartnerFieldsEnum;
};

export type PrismicHomeBodyPartnerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyPartnerFieldsEnum;
};

export type PrismicHomeBodyPartnerEdge = {
  __typename?: 'PrismicHomeBodyPartnerEdge';
  next?: Maybe<PrismicHomeBodyPartner>;
  node: PrismicHomeBodyPartner;
  previous?: Maybe<PrismicHomeBodyPartner>;
};

export enum PrismicHomeBodyPartnerFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryNameHtml = 'primary___name___html',
  PrimaryNameText = 'primary___name___text',
  PrimaryNameRaw = 'primary___name___raw',
  PrimaryNameRawType = 'primary___name___raw___type',
  PrimaryNameRawText = 'primary___name___raw___text',
  PrimaryLinkLinkType = 'primary___link___link_type',
  PrimaryLinkUrl = 'primary___link___url',
  PrimaryLinkTarget = 'primary___link___target',
  PrimaryLinkRawLinkType = 'primary___link___raw___link_type',
  PrimaryLinkRawUrl = 'primary___link___raw___url',
  PrismicId = 'prismicId',
}

export type PrismicHomeBodyPartnerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyPartnerPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyPartnerGroupConnection = {
  __typename?: 'PrismicHomeBodyPartnerGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyPartnerEdge>;
  nodes: Array<PrismicHomeBodyPartner>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyPartnerPrimary = {
  __typename?: 'PrismicHomeBodyPartnerPrimary';
  name?: Maybe<PrismicHomeBodyPartnerPrimaryName>;
  link?: Maybe<PrismicHomeBodyPartnerPrimaryLink>;
};

export type PrismicHomeBodyPartnerPrimaryFilterInput = {
  name?: Maybe<PrismicHomeBodyPartnerPrimaryNameFilterInput>;
  link?: Maybe<PrismicHomeBodyPartnerPrimaryLinkFilterInput>;
};

export type PrismicHomeBodyPartnerPrimaryLink = {
  __typename?: 'PrismicHomeBodyPartnerPrimaryLink';
  link_type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  raw?: Maybe<PrismicHomeBodyPartnerPrimaryLinkRaw>;
};

export type PrismicHomeBodyPartnerPrimaryLinkFilterInput = {
  link_type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyPartnerPrimaryLinkRawFilterInput>;
};

export type PrismicHomeBodyPartnerPrimaryLinkRaw = {
  __typename?: 'PrismicHomeBodyPartnerPrimaryLinkRaw';
  link_type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyPartnerPrimaryLinkRawFilterInput = {
  link_type?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyPartnerPrimaryName = {
  __typename?: 'PrismicHomeBodyPartnerPrimaryName';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyPartnerPrimaryNameRaw>>>;
};

export type PrismicHomeBodyPartnerPrimaryNameFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyPartnerPrimaryNameRawFilterListInput>;
};

export type PrismicHomeBodyPartnerPrimaryNameRaw = {
  __typename?: 'PrismicHomeBodyPartnerPrimaryNameRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyPartnerPrimaryNameRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyPartnerPrimaryNameRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyPartnerPrimaryNameRawFilterInput>;
};

export type PrismicHomeBodyPartnerSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyPartnerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodyTryOut = Node & {
  __typename?: 'PrismicHomeBodyTryOut';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyTryOutPrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyTryOutConnection = {
  __typename?: 'PrismicHomeBodyTryOutConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyTryOutEdge>;
  nodes: Array<PrismicHomeBodyTryOut>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyTryOutGroupConnection>;
};

export type PrismicHomeBodyTryOutConnectionDistinctArgs = {
  field: PrismicHomeBodyTryOutFieldsEnum;
};

export type PrismicHomeBodyTryOutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyTryOutFieldsEnum;
};

export type PrismicHomeBodyTryOutEdge = {
  __typename?: 'PrismicHomeBodyTryOutEdge';
  next?: Maybe<PrismicHomeBodyTryOut>;
  node: PrismicHomeBodyTryOut;
  previous?: Maybe<PrismicHomeBodyTryOut>;
};

export enum PrismicHomeBodyTryOutFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryTitleHtml = 'primary___title___html',
  PrimaryTitleText = 'primary___title___text',
  PrimaryTitleRaw = 'primary___title___raw',
  PrimaryTitleRawType = 'primary___title___raw___type',
  PrimaryTitleRawText = 'primary___title___raw___text',
  PrimarySubtitleHtml = 'primary___subtitle___html',
  PrimarySubtitleText = 'primary___subtitle___text',
  PrimarySubtitleRaw = 'primary___subtitle___raw',
  PrimarySubtitleRawType = 'primary___subtitle___raw___type',
  PrimarySubtitleRawText = 'primary___subtitle___raw___text',
  PrimaryImageDimensionsWidth = 'primary___image___dimensions___width',
  PrimaryImageDimensionsHeight = 'primary___image___dimensions___height',
  PrimaryImageAlt = 'primary___image___alt',
  PrimaryImageCopyright = 'primary___image___copyright',
  PrimaryImageUrl = 'primary___image___url',
  PrimaryImageLocalFileId = 'primary___image___localFile___id',
  PrimaryImageLocalFileChildren = 'primary___image___localFile___children',
  PrimaryImageLocalFileSourceInstanceName = 'primary___image___localFile___sourceInstanceName',
  PrimaryImageLocalFileAbsolutePath = 'primary___image___localFile___absolutePath',
  PrimaryImageLocalFileRelativePath = 'primary___image___localFile___relativePath',
  PrimaryImageLocalFileExtension = 'primary___image___localFile___extension',
  PrimaryImageLocalFileSize = 'primary___image___localFile___size',
  PrimaryImageLocalFilePrettySize = 'primary___image___localFile___prettySize',
  PrimaryImageLocalFileModifiedTime = 'primary___image___localFile___modifiedTime',
  PrimaryImageLocalFileAccessTime = 'primary___image___localFile___accessTime',
  PrimaryImageLocalFileChangeTime = 'primary___image___localFile___changeTime',
  PrimaryImageLocalFileBirthTime = 'primary___image___localFile___birthTime',
  PrimaryImageLocalFileRoot = 'primary___image___localFile___root',
  PrimaryImageLocalFileDir = 'primary___image___localFile___dir',
  PrimaryImageLocalFileBase = 'primary___image___localFile___base',
  PrimaryImageLocalFileExt = 'primary___image___localFile___ext',
  PrimaryImageLocalFileName = 'primary___image___localFile___name',
  PrimaryImageLocalFileRelativeDirectory = 'primary___image___localFile___relativeDirectory',
  PrimaryImageLocalFileDev = 'primary___image___localFile___dev',
  PrimaryImageLocalFileMode = 'primary___image___localFile___mode',
  PrimaryImageLocalFileNlink = 'primary___image___localFile___nlink',
  PrimaryImageLocalFileUid = 'primary___image___localFile___uid',
  PrimaryImageLocalFileGid = 'primary___image___localFile___gid',
  PrimaryImageLocalFileRdev = 'primary___image___localFile___rdev',
  PrimaryImageLocalFileBlksize = 'primary___image___localFile___blksize',
  PrimaryImageLocalFileIno = 'primary___image___localFile___ino',
  PrimaryImageLocalFileBlocks = 'primary___image___localFile___blocks',
  PrimaryImageLocalFileAtimeMs = 'primary___image___localFile___atimeMs',
  PrimaryImageLocalFileMtimeMs = 'primary___image___localFile___mtimeMs',
  PrimaryImageLocalFileCtimeMs = 'primary___image___localFile___ctimeMs',
  PrimaryImageLocalFileBirthtimeMs = 'primary___image___localFile___birthtimeMs',
  PrimaryImageLocalFileAtime = 'primary___image___localFile___atime',
  PrimaryImageLocalFileMtime = 'primary___image___localFile___mtime',
  PrimaryImageLocalFileCtime = 'primary___image___localFile___ctime',
  PrimaryImageLocalFileBirthtime = 'primary___image___localFile___birthtime',
  PrimaryImageLocalFileUrl = 'primary___image___localFile___url',
  PrimaryImageDescriptionHtml = 'primary___image_description___html',
  PrimaryImageDescriptionText = 'primary___image_description___text',
  PrimaryImageDescriptionRaw = 'primary___image_description___raw',
  PrimaryImageDescriptionRawType = 'primary___image_description___raw___type',
  PrimaryImageDescriptionRawText = 'primary___image_description___raw___text',
  PrismicId = 'prismicId',
}

export type PrismicHomeBodyTryOutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyTryOutPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyTryOutGroupConnection = {
  __typename?: 'PrismicHomeBodyTryOutGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyTryOutEdge>;
  nodes: Array<PrismicHomeBodyTryOut>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyTryOutPrimary = {
  __typename?: 'PrismicHomeBodyTryOutPrimary';
  title?: Maybe<PrismicHomeBodyTryOutPrimaryTitle>;
  subtitle?: Maybe<PrismicHomeBodyTryOutPrimarySubtitle>;
  image?: Maybe<PrismicHomeBodyTryOutPrimaryImage>;
  image_description?: Maybe<PrismicHomeBodyTryOutPrimaryImage_Description>;
};

export type PrismicHomeBodyTryOutPrimaryFilterInput = {
  title?: Maybe<PrismicHomeBodyTryOutPrimaryTitleFilterInput>;
  subtitle?: Maybe<PrismicHomeBodyTryOutPrimarySubtitleFilterInput>;
  image?: Maybe<PrismicHomeBodyTryOutPrimaryImageFilterInput>;
  image_description?: Maybe<PrismicHomeBodyTryOutPrimaryImage_DescriptionFilterInput>;
};

export type PrismicHomeBodyTryOutPrimaryImage = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryImage';
  dimensions?: Maybe<PrismicHomeBodyTryOutPrimaryImageDimensions>;
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type PrismicHomeBodyTryOutPrimaryImage_Description = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryImage_description';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyTryOutPrimaryImage_DescriptionRaw>>>;
};

export type PrismicHomeBodyTryOutPrimaryImage_DescriptionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyTryOutPrimaryImage_DescriptionRawFilterListInput>;
};

export type PrismicHomeBodyTryOutPrimaryImage_DescriptionRaw = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryImage_descriptionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyTryOutPrimaryImage_DescriptionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyTryOutPrimaryImage_DescriptionRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyTryOutPrimaryImage_DescriptionRawFilterInput>;
};

export type PrismicHomeBodyTryOutPrimaryImageDimensions = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryImageDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeBodyTryOutPrimaryImageDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeBodyTryOutPrimaryImageFilterInput = {
  dimensions?: Maybe<PrismicHomeBodyTryOutPrimaryImageDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicHomeBodyTryOutPrimarySubtitle = {
  __typename?: 'PrismicHomeBodyTryOutPrimarySubtitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyTryOutPrimarySubtitleRaw>>>;
};

export type PrismicHomeBodyTryOutPrimarySubtitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyTryOutPrimarySubtitleRawFilterListInput>;
};

export type PrismicHomeBodyTryOutPrimarySubtitleRaw = {
  __typename?: 'PrismicHomeBodyTryOutPrimarySubtitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyTryOutPrimarySubtitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyTryOutPrimarySubtitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyTryOutPrimarySubtitleRawFilterInput>;
};

export type PrismicHomeBodyTryOutPrimaryTitle = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryTitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyTryOutPrimaryTitleRaw>>>;
};

export type PrismicHomeBodyTryOutPrimaryTitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyTryOutPrimaryTitleRawFilterListInput>;
};

export type PrismicHomeBodyTryOutPrimaryTitleRaw = {
  __typename?: 'PrismicHomeBodyTryOutPrimaryTitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyTryOutPrimaryTitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyTryOutPrimaryTitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyTryOutPrimaryTitleRawFilterInput>;
};

export type PrismicHomeBodyTryOutSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyTryOutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeBodyUseCase = Node & {
  __typename?: 'PrismicHomeBodyUseCase';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slice_type?: Maybe<Scalars['String']>;
  primary?: Maybe<PrismicHomeBodyUseCasePrimary>;
  prismicId?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyUseCaseConnection = {
  __typename?: 'PrismicHomeBodyUseCaseConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyUseCaseEdge>;
  nodes: Array<PrismicHomeBodyUseCase>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeBodyUseCaseGroupConnection>;
};

export type PrismicHomeBodyUseCaseConnectionDistinctArgs = {
  field: PrismicHomeBodyUseCaseFieldsEnum;
};

export type PrismicHomeBodyUseCaseConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeBodyUseCaseFieldsEnum;
};

export type PrismicHomeBodyUseCaseEdge = {
  __typename?: 'PrismicHomeBodyUseCaseEdge';
  next?: Maybe<PrismicHomeBodyUseCase>;
  node: PrismicHomeBodyUseCase;
  previous?: Maybe<PrismicHomeBodyUseCase>;
};

export enum PrismicHomeBodyUseCaseFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SliceType = 'slice_type',
  PrimaryIconDimensionsWidth = 'primary___icon___dimensions___width',
  PrimaryIconDimensionsHeight = 'primary___icon___dimensions___height',
  PrimaryIconAlt = 'primary___icon___alt',
  PrimaryIconCopyright = 'primary___icon___copyright',
  PrimaryIconUrl = 'primary___icon___url',
  PrimaryIconLocalFileId = 'primary___icon___localFile___id',
  PrimaryIconLocalFileChildren = 'primary___icon___localFile___children',
  PrimaryIconLocalFileSourceInstanceName = 'primary___icon___localFile___sourceInstanceName',
  PrimaryIconLocalFileAbsolutePath = 'primary___icon___localFile___absolutePath',
  PrimaryIconLocalFileRelativePath = 'primary___icon___localFile___relativePath',
  PrimaryIconLocalFileExtension = 'primary___icon___localFile___extension',
  PrimaryIconLocalFileSize = 'primary___icon___localFile___size',
  PrimaryIconLocalFilePrettySize = 'primary___icon___localFile___prettySize',
  PrimaryIconLocalFileModifiedTime = 'primary___icon___localFile___modifiedTime',
  PrimaryIconLocalFileAccessTime = 'primary___icon___localFile___accessTime',
  PrimaryIconLocalFileChangeTime = 'primary___icon___localFile___changeTime',
  PrimaryIconLocalFileBirthTime = 'primary___icon___localFile___birthTime',
  PrimaryIconLocalFileRoot = 'primary___icon___localFile___root',
  PrimaryIconLocalFileDir = 'primary___icon___localFile___dir',
  PrimaryIconLocalFileBase = 'primary___icon___localFile___base',
  PrimaryIconLocalFileExt = 'primary___icon___localFile___ext',
  PrimaryIconLocalFileName = 'primary___icon___localFile___name',
  PrimaryIconLocalFileRelativeDirectory = 'primary___icon___localFile___relativeDirectory',
  PrimaryIconLocalFileDev = 'primary___icon___localFile___dev',
  PrimaryIconLocalFileMode = 'primary___icon___localFile___mode',
  PrimaryIconLocalFileNlink = 'primary___icon___localFile___nlink',
  PrimaryIconLocalFileUid = 'primary___icon___localFile___uid',
  PrimaryIconLocalFileGid = 'primary___icon___localFile___gid',
  PrimaryIconLocalFileRdev = 'primary___icon___localFile___rdev',
  PrimaryIconLocalFileBlksize = 'primary___icon___localFile___blksize',
  PrimaryIconLocalFileIno = 'primary___icon___localFile___ino',
  PrimaryIconLocalFileBlocks = 'primary___icon___localFile___blocks',
  PrimaryIconLocalFileAtimeMs = 'primary___icon___localFile___atimeMs',
  PrimaryIconLocalFileMtimeMs = 'primary___icon___localFile___mtimeMs',
  PrimaryIconLocalFileCtimeMs = 'primary___icon___localFile___ctimeMs',
  PrimaryIconLocalFileBirthtimeMs = 'primary___icon___localFile___birthtimeMs',
  PrimaryIconLocalFileAtime = 'primary___icon___localFile___atime',
  PrimaryIconLocalFileMtime = 'primary___icon___localFile___mtime',
  PrimaryIconLocalFileCtime = 'primary___icon___localFile___ctime',
  PrimaryIconLocalFileBirthtime = 'primary___icon___localFile___birthtime',
  PrimaryIconLocalFileUrl = 'primary___icon___localFile___url',
  PrimaryTitleHtml = 'primary___title___html',
  PrimaryTitleText = 'primary___title___text',
  PrimaryTitleRaw = 'primary___title___raw',
  PrimaryTitleRawType = 'primary___title___raw___type',
  PrimaryTitleRawText = 'primary___title___raw___text',
  PrimaryDescriptionHtml = 'primary___description___html',
  PrimaryDescriptionText = 'primary___description___text',
  PrimaryDescriptionRaw = 'primary___description___raw',
  PrimaryDescriptionRawType = 'primary___description___raw___type',
  PrimaryDescriptionRawText = 'primary___description___raw___text',
  PrismicId = 'prismicId',
}

export type PrismicHomeBodyUseCaseFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyUseCasePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyUseCaseGroupConnection = {
  __typename?: 'PrismicHomeBodyUseCaseGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeBodyUseCaseEdge>;
  nodes: Array<PrismicHomeBodyUseCase>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyUseCasePrimary = {
  __typename?: 'PrismicHomeBodyUseCasePrimary';
  icon?: Maybe<PrismicHomeBodyUseCasePrimaryIcon>;
  title?: Maybe<PrismicHomeBodyUseCasePrimaryTitle>;
  description?: Maybe<PrismicHomeBodyUseCasePrimaryDescription>;
};

export type PrismicHomeBodyUseCasePrimaryDescription = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryDescription';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyUseCasePrimaryDescriptionRaw>>>;
};

export type PrismicHomeBodyUseCasePrimaryDescriptionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyUseCasePrimaryDescriptionRawFilterListInput>;
};

export type PrismicHomeBodyUseCasePrimaryDescriptionRaw = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryDescriptionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyUseCasePrimaryDescriptionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyUseCasePrimaryDescriptionRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyUseCasePrimaryDescriptionRawFilterInput>;
};

export type PrismicHomeBodyUseCasePrimaryFilterInput = {
  icon?: Maybe<PrismicHomeBodyUseCasePrimaryIconFilterInput>;
  title?: Maybe<PrismicHomeBodyUseCasePrimaryTitleFilterInput>;
  description?: Maybe<PrismicHomeBodyUseCasePrimaryDescriptionFilterInput>;
};

export type PrismicHomeBodyUseCasePrimaryIcon = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryIcon';
  dimensions?: Maybe<PrismicHomeBodyUseCasePrimaryIconDimensions>;
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type PrismicHomeBodyUseCasePrimaryIconDimensions = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryIconDimensions';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type PrismicHomeBodyUseCasePrimaryIconDimensionsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicHomeBodyUseCasePrimaryIconFilterInput = {
  dimensions?: Maybe<PrismicHomeBodyUseCasePrimaryIconDimensionsFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type PrismicHomeBodyUseCasePrimaryTitle = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryTitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeBodyUseCasePrimaryTitleRaw>>>;
};

export type PrismicHomeBodyUseCasePrimaryTitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeBodyUseCasePrimaryTitleRawFilterListInput>;
};

export type PrismicHomeBodyUseCasePrimaryTitleRaw = {
  __typename?: 'PrismicHomeBodyUseCasePrimaryTitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeBodyUseCasePrimaryTitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeBodyUseCasePrimaryTitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeBodyUseCasePrimaryTitleRawFilterInput>;
};

export type PrismicHomeBodyUseCaseSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeBodyUseCaseFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomeConnection = {
  __typename?: 'PrismicHomeConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomeGroupConnection>;
};

export type PrismicHomeConnectionDistinctArgs = {
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomeFieldsEnum;
};

export type PrismicHomeData = {
  __typename?: 'PrismicHomeData';
  motto?: Maybe<PrismicHomeDataMotto>;
  description?: Maybe<PrismicHomeDataDescription>;
  subtitle?: Maybe<PrismicHomeDataSubtitle>;
  call_to_action?: Maybe<PrismicHomeDataCall_To_Action>;
  customers_heading?: Maybe<PrismicHomeDataCustomers_Heading>;
  body?: Maybe<
    Array<
      Maybe<
        PrismicHomeBodyCustomerPrismicHomeBodyFeaturePrismicHomeBodyPartnerPrismicHomeBodyTryOutPrismicHomeBodyUseCaseUnion
      >
    >
  >;
};

export type PrismicHomeDataCall_To_Action = {
  __typename?: 'PrismicHomeDataCall_to_action';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeDataCall_To_ActionRaw>>>;
};

export type PrismicHomeDataCall_To_ActionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeDataCall_To_ActionRawFilterListInput>;
};

export type PrismicHomeDataCall_To_ActionRaw = {
  __typename?: 'PrismicHomeDataCall_to_actionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeDataCall_To_ActionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeDataCall_To_ActionRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeDataCall_To_ActionRawFilterInput>;
};

export type PrismicHomeDataCustomers_Heading = {
  __typename?: 'PrismicHomeDataCustomers_heading';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeDataCustomers_HeadingRaw>>>;
};

export type PrismicHomeDataCustomers_HeadingFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeDataCustomers_HeadingRawFilterListInput>;
};

export type PrismicHomeDataCustomers_HeadingRaw = {
  __typename?: 'PrismicHomeDataCustomers_headingRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeDataCustomers_HeadingRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeDataCustomers_HeadingRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeDataCustomers_HeadingRawFilterInput>;
};

export type PrismicHomeDataDescription = {
  __typename?: 'PrismicHomeDataDescription';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeDataDescriptionRaw>>>;
};

export type PrismicHomeDataDescriptionFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeDataDescriptionRawFilterListInput>;
};

export type PrismicHomeDataDescriptionRaw = {
  __typename?: 'PrismicHomeDataDescriptionRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeDataDescriptionRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeDataDescriptionRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeDataDescriptionRawFilterInput>;
};

export type PrismicHomeDataFilterInput = {
  motto?: Maybe<PrismicHomeDataMottoFilterInput>;
  description?: Maybe<PrismicHomeDataDescriptionFilterInput>;
  subtitle?: Maybe<PrismicHomeDataSubtitleFilterInput>;
  call_to_action?: Maybe<PrismicHomeDataCall_To_ActionFilterInput>;
  customers_heading?: Maybe<PrismicHomeDataCustomers_HeadingFilterInput>;
};

export type PrismicHomeDataMotto = {
  __typename?: 'PrismicHomeDataMotto';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeDataMottoRaw>>>;
};

export type PrismicHomeDataMottoFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeDataMottoRawFilterListInput>;
};

export type PrismicHomeDataMottoRaw = {
  __typename?: 'PrismicHomeDataMottoRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeDataMottoRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeDataMottoRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeDataMottoRawFilterInput>;
};

export type PrismicHomeDataSubtitle = {
  __typename?: 'PrismicHomeDataSubtitle';
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  raw?: Maybe<Array<Maybe<PrismicHomeDataSubtitleRaw>>>;
};

export type PrismicHomeDataSubtitleFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<PrismicHomeDataSubtitleRawFilterListInput>;
};

export type PrismicHomeDataSubtitleRaw = {
  __typename?: 'PrismicHomeDataSubtitleRaw';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type PrismicHomeDataSubtitleRawFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeDataSubtitleRawFilterListInput = {
  elemMatch?: Maybe<PrismicHomeDataSubtitleRawFilterInput>;
};

export type PrismicHomeEdge = {
  __typename?: 'PrismicHomeEdge';
  next?: Maybe<PrismicHome>;
  node: PrismicHome;
  previous?: Maybe<PrismicHome>;
};

export enum PrismicHomeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataMottoHtml = 'data___motto___html',
  DataMottoText = 'data___motto___text',
  DataMottoRaw = 'data___motto___raw',
  DataMottoRawType = 'data___motto___raw___type',
  DataMottoRawText = 'data___motto___raw___text',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataDescriptionRawType = 'data___description___raw___type',
  DataDescriptionRawText = 'data___description___raw___text',
  DataSubtitleHtml = 'data___subtitle___html',
  DataSubtitleText = 'data___subtitle___text',
  DataSubtitleRaw = 'data___subtitle___raw',
  DataSubtitleRawType = 'data___subtitle___raw___type',
  DataSubtitleRawText = 'data___subtitle___raw___text',
  DataCallToActionHtml = 'data___call_to_action___html',
  DataCallToActionText = 'data___call_to_action___text',
  DataCallToActionRaw = 'data___call_to_action___raw',
  DataCallToActionRawType = 'data___call_to_action___raw___type',
  DataCallToActionRawText = 'data___call_to_action___raw___text',
  DataCustomersHeadingHtml = 'data___customers_heading___html',
  DataCustomersHeadingText = 'data___customers_heading___text',
  DataCustomersHeadingRaw = 'data___customers_heading___raw',
  DataCustomersHeadingRawType = 'data___customers_heading___raw___type',
  DataCustomersHeadingRawText = 'data___customers_heading___raw___text',
  PrismicId = 'prismicId',
  DataString = 'dataString',
}

export type PrismicHomeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomeDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
};

export type PrismicHomeGroupConnection = {
  __typename?: 'PrismicHomeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  __typename?: 'Query';
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp?: Maybe<ImageSharpConnection>;
  file?: Maybe<File>;
  allFile?: Maybe<FileConnection>;
  sitePage?: Maybe<SitePage>;
  allSitePage?: Maybe<SitePageConnection>;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin?: Maybe<SitePluginConnection>;
  site?: Maybe<Site>;
  allSite?: Maybe<SiteConnection>;
  prismicHomeBodyUseCase?: Maybe<PrismicHomeBodyUseCase>;
  allPrismicHomeBodyUseCase?: Maybe<PrismicHomeBodyUseCaseConnection>;
  prismicHomeBodyFeature?: Maybe<PrismicHomeBodyFeature>;
  allPrismicHomeBodyFeature?: Maybe<PrismicHomeBodyFeatureConnection>;
  prismicHomeBodyCustomer?: Maybe<PrismicHomeBodyCustomer>;
  allPrismicHomeBodyCustomer?: Maybe<PrismicHomeBodyCustomerConnection>;
  prismicAboutBodyProfile?: Maybe<PrismicAboutBodyProfile>;
  allPrismicAboutBodyProfile?: Maybe<PrismicAboutBodyProfileConnection>;
  prismicHomeBodyPartner?: Maybe<PrismicHomeBodyPartner>;
  allPrismicHomeBodyPartner?: Maybe<PrismicHomeBodyPartnerConnection>;
  prismicHomeBodyTryOut?: Maybe<PrismicHomeBodyTryOut>;
  allPrismicHomeBodyTryOut?: Maybe<PrismicHomeBodyTryOutConnection>;
  prismicHome?: Maybe<PrismicHome>;
  allPrismicHome?: Maybe<PrismicHomeConnection>;
  prismicAboutBodyAchievements?: Maybe<PrismicAboutBodyAchievements>;
  allPrismicAboutBodyAchievements?: Maybe<PrismicAboutBodyAchievementsConnection>;
  prismicAbout?: Maybe<PrismicAbout>;
  allPrismicAbout?: Maybe<PrismicAboutConnection>;
};

export type QueryImageSharpArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryFileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyUseCaseArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyUseCasePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeBodyUseCaseArgs = {
  filter?: Maybe<PrismicHomeBodyUseCaseFilterInput>;
  sort?: Maybe<PrismicHomeBodyUseCaseSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyFeatureArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyFeaturePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeBodyFeatureArgs = {
  filter?: Maybe<PrismicHomeBodyFeatureFilterInput>;
  sort?: Maybe<PrismicHomeBodyFeatureSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyCustomerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyCustomerPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeBodyCustomerArgs = {
  filter?: Maybe<PrismicHomeBodyCustomerFilterInput>;
  sort?: Maybe<PrismicHomeBodyCustomerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicAboutBodyProfileArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicAboutBodyProfilePrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicAboutBodyProfileArgs = {
  filter?: Maybe<PrismicAboutBodyProfileFilterInput>;
  sort?: Maybe<PrismicAboutBodyProfileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyPartnerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyPartnerPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeBodyPartnerArgs = {
  filter?: Maybe<PrismicHomeBodyPartnerFilterInput>;
  sort?: Maybe<PrismicHomeBodyPartnerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeBodyTryOutArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomeBodyTryOutPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeBodyTryOutArgs = {
  filter?: Maybe<PrismicHomeBodyTryOutFilterInput>;
  sort?: Maybe<PrismicHomeBodyTryOutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicHomeDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicHomeArgs = {
  filter?: Maybe<PrismicHomeFilterInput>;
  sort?: Maybe<PrismicHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicAboutBodyAchievementsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slice_type?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicAboutBodyAchievementsPrimaryFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicAboutBodyAchievementsArgs = {
  filter?: Maybe<PrismicAboutBodyAchievementsFilterInput>;
  sort?: Maybe<PrismicAboutBodyAchievementsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicAboutArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  slugs?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<PrismicAboutDataFilterInput>;
  prismicId?: Maybe<StringQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllPrismicAboutArgs = {
  filter?: Maybe<PrismicAboutFilterInput>;
  sort?: Maybe<PrismicAboutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataPathPrefix = 'siteMetadata___pathPrefix',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTitleAlt = 'siteMetadata___titleAlt',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataLogo = 'siteMetadata___logo',
  SiteMetadataHeadline = 'siteMetadata___headline',
  SiteMetadataSiteLanguage = 'siteMetadata___siteLanguage',
  SiteMetadataOgLanguage = 'siteMetadata___ogLanguage',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataTwitter = 'siteMetadata___twitter',
  SiteMetadataFacebook = 'siteMetadata___facebook',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsDescription = 'pluginCreator___pluginOptions___description',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsDescription = 'pluginOptions___description',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  trackingId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  siteUrl?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleAlt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  siteLanguage?: Maybe<Scalars['String']>;
  ogLanguage?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  titleAlt?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  headline?: Maybe<StringQueryOperatorInput>;
  siteLanguage?: Maybe<StringQueryOperatorInput>;
  ogLanguage?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};
export type IndexQueryVariables = {};

export type IndexQuery = { __typename?: 'Query' } & {
  allPrismicHome: Maybe<
    { __typename?: 'PrismicHomeConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeEdge' } & {
          node: { __typename?: 'PrismicHome' } & Pick<PrismicHome, 'lang'> & {
              data: Maybe<
                { __typename?: 'PrismicHomeData' } & {
                  subtitle: Maybe<{ __typename?: 'PrismicHomeDataSubtitle' } & Pick<PrismicHomeDataSubtitle, 'text'>>;
                  call_to_action: Maybe<
                    { __typename?: 'PrismicHomeDataCall_to_action' } & Pick<PrismicHomeDataCall_To_Action, 'text'>
                  >;
                  customers_heading: Maybe<
                    { __typename?: 'PrismicHomeDataCustomers_heading' } & Pick<PrismicHomeDataCustomers_Heading, 'text'>
                  >;
                  description: Maybe<
                    { __typename?: 'PrismicHomeDataDescription' } & Pick<PrismicHomeDataDescription, 'text'>
                  >;
                  motto: Maybe<{ __typename?: 'PrismicHomeDataMotto' } & Pick<PrismicHomeDataMotto, 'text'>>;
                }
              >;
            };
        }
      >;
    }
  >;
};

export type SeoQueryVariables = {};

export type SeoQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & Pick<Site, 'buildTime'> & {
        siteMetadata: Maybe<
          { __typename?: 'SiteSiteMetadata' } & Pick<
            SiteSiteMetadata,
            'siteUrl' | 'headline' | 'siteLanguage' | 'ogLanguage' | 'author' | 'twitter' | 'facebook'
          > & {
              defaultTitle: SiteSiteMetadata['titleAlt'];
              defaultDescription: SiteSiteMetadata['description'];
              defaultBanner: SiteSiteMetadata['logo'];
            }
        >;
      }
  >;
};

export type CustomerQueryVariables = {};

export type CustomerQuery = { __typename?: 'Query' } & {
  allPrismicHomeBodyCustomer: Maybe<
    { __typename?: 'PrismicHomeBodyCustomerConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeBodyCustomerEdge' } & {
          node: { __typename?: 'PrismicHomeBodyCustomer' } & {
            primary: Maybe<
              { __typename?: 'PrismicHomeBodyCustomerPrimary' } & {
                name: Maybe<
                  { __typename?: 'PrismicHomeBodyCustomerPrimaryName' } & Pick<
                    PrismicHomeBodyCustomerPrimaryName,
                    'text'
                  >
                >;
              }
            >;
          };
        }
      >;
    }
  >;
};

export type FeatureQueryVariables = {};

export type FeatureQuery = { __typename?: 'Query' } & {
  allPrismicHomeBodyFeature: Maybe<
    { __typename?: 'PrismicHomeBodyFeatureConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeBodyFeatureEdge' } & {
          node: { __typename?: 'PrismicHomeBodyFeature' } & {
            primary: Maybe<
              { __typename?: 'PrismicHomeBodyFeaturePrimary' } & {
                description: Maybe<
                  { __typename?: 'PrismicHomeBodyFeaturePrimaryDescription' } & Pick<
                    PrismicHomeBodyFeaturePrimaryDescription,
                    'text'
                  >
                >;
                title: Maybe<
                  { __typename?: 'PrismicHomeBodyFeaturePrimaryTitle' } & Pick<
                    PrismicHomeBodyFeaturePrimaryTitle,
                    'text'
                  >
                >;
              }
            >;
          };
        }
      >;
    }
  >;
};

export type PartnerQueryVariables = {};

export type PartnerQuery = { __typename?: 'Query' } & {
  allPrismicHomeBodyPartner: Maybe<
    { __typename?: 'PrismicHomeBodyPartnerConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeBodyPartnerEdge' } & {
          node: { __typename?: 'PrismicHomeBodyPartner' } & {
            primary: Maybe<
              { __typename?: 'PrismicHomeBodyPartnerPrimary' } & {
                name: Maybe<
                  { __typename?: 'PrismicHomeBodyPartnerPrimaryName' } & Pick<PrismicHomeBodyPartnerPrimaryName, 'text'>
                >;
                link: Maybe<
                  { __typename?: 'PrismicHomeBodyPartnerPrimaryLink' } & Pick<PrismicHomeBodyPartnerPrimaryLink, 'url'>
                >;
              }
            >;
          };
        }
      >;
    }
  >;
};

export type TryOutQueryVariables = {};

export type TryOutQuery = { __typename?: 'Query' } & {
  allPrismicHomeBodyTryOut: Maybe<
    { __typename?: 'PrismicHomeBodyTryOutConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeBodyTryOutEdge' } & {
          node: { __typename?: 'PrismicHomeBodyTryOut' } & {
            primary: Maybe<
              { __typename?: 'PrismicHomeBodyTryOutPrimary' } & {
                image: Maybe<
                  { __typename?: 'PrismicHomeBodyTryOutPrimaryImage' } & Pick<
                    PrismicHomeBodyTryOutPrimaryImage,
                    'url' | 'alt'
                  >
                >;
                image_description: Maybe<
                  { __typename?: 'PrismicHomeBodyTryOutPrimaryImage_description' } & Pick<
                    PrismicHomeBodyTryOutPrimaryImage_Description,
                    'text'
                  >
                >;
                subtitle: Maybe<
                  { __typename?: 'PrismicHomeBodyTryOutPrimarySubtitle' } & Pick<
                    PrismicHomeBodyTryOutPrimarySubtitle,
                    'text'
                  >
                >;
                title: Maybe<
                  { __typename?: 'PrismicHomeBodyTryOutPrimaryTitle' } & Pick<PrismicHomeBodyTryOutPrimaryTitle, 'text'>
                >;
              }
            >;
          };
        }
      >;
    }
  >;
};

export type UseCaseQueryVariables = {};

export type UseCaseQuery = { __typename?: 'Query' } & {
  allPrismicHomeBodyUseCase: Maybe<
    { __typename?: 'PrismicHomeBodyUseCaseConnection' } & {
      edges: Array<
        { __typename?: 'PrismicHomeBodyUseCaseEdge' } & {
          node: { __typename?: 'PrismicHomeBodyUseCase' } & {
            primary: Maybe<
              { __typename?: 'PrismicHomeBodyUseCasePrimary' } & {
                description: Maybe<
                  { __typename?: 'PrismicHomeBodyUseCasePrimaryDescription' } & Pick<
                    PrismicHomeBodyUseCasePrimaryDescription,
                    'text'
                  >
                >;
                title: Maybe<
                  { __typename?: 'PrismicHomeBodyUseCasePrimaryTitle' } & Pick<
                    PrismicHomeBodyUseCasePrimaryTitle,
                    'text'
                  >
                >;
                icon: Maybe<
                  { __typename?: 'PrismicHomeBodyUseCasePrimaryIcon' } & Pick<
                    PrismicHomeBodyUseCasePrimaryIcon,
                    'url' | 'alt'
                  >
                >;
              }
            >;
          };
        }
      >;
    }
  >;
};
